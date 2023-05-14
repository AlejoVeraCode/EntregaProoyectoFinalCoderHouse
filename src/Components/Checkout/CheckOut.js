import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../Config/firebase_config";
import { Link } from "react-router-dom";
import {
  collection,
  documentId,
  getDocs,
  query,
  where,
  addDoc,
  getDoc,
  doc,
  Timestamp, writeBatch
} from "firebase/firestore";
import CheckOutForm from "../CheckOutForm/CheckOutForm";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [redirectToOrder, setRedirectToOrder] = useState(false);

  const { cart, total, clearCart, totalQuantity } = useContext(CartContext);
 // console.log(cart);

 const createOrder = async ({ nombre, telefono, direccion, email }) => {
    setLoading(true);
  
    try {
      const orderIdsRef = doc(db, "orders");
      const orderIdsDoc = await getDoc(orderIdsRef);
      const lastOrderId = orderIdsDoc.data().lastId;
  
     
      const newOrderId = lastOrderId + 1;
  
      const objOrder = {
        id: newOrderId, 
        buyer: {
          nombre,
          telefono,
          direccion,
          email,
        },
        items: cart,
        total: totalQuantity,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map(prod => prod.id);

      const productsRef = collection(db, 'products');

      const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));

      const { docs } = productsAddedFromFirestore;

      docs.forEach(doc => {
          const dataDoc = doc.data();
          const stockDb = dataDoc.stock;

          const productAddedToCart = cart.find(prod => prod.id === doc.id);
          const prodQuantity = productAddedToCart?.quantity;

          if(stockDb >= prodQuantity){
              batch.update(doc.ref, { stock: stockDb - prodQuantity });
          } else {
              outOfStock.push({ id: doc.id, ...dataDoc });
          }   

      });

      if(outOfStock.length === 0){
          await batch.commit();

          const orderRef = collection(db, 'orders');

          const orderAdded = await addDoc(orderRef, objOrder);

          setOrderId(orderAdded.id);
          clearCart();

      } else {
          console.error('Hay productos que están fuera de stock');
      }

  } catch(error){
      console.log(error);

  } finally {
      setLoading(false);
  }
}
    if (loading) {
      return <h1>Estamos generando su orden...</h1>;
    }
   
    if (orderId) {
      return <h1>El id de su orden es:{orderId}</h1>;
    }
    if (redirectToOrder) {
        return <Link to={`/order/${orderId}`}/>
      }

    return (
      <div>
        <h1>CheckOut</h1>
        <CheckOutForm onConfirm={createOrder} />
      </div>
    );
  };

export default Checkout