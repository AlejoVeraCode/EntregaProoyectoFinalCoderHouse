import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../Config/firebase_config";
import {
  collection,
  getDocs,
  query,
  where,
  documentId,
  addDoc,
  Timestamp,
  writeBatch,
} from "firebase/firestore";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import { Link } from "react-router-dom";
import styles from "./CheckOut.module.css";

function Checkout() {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  const createOrder = async ({ nombre, telefono, direccion, email }) => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: { nombre, telefono, direccion, email },
        items: cart,
        total: totalQuantity(),
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);
      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);
      const productsRef = collection(db, "products");
      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      productsAddedFromFirestore.docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("Hay productos que estan fuera de stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1 className={styles.OrderId}>Estamos generando su orden...</h1>;
  }

  if (orderId) {
    return (
      <div className={styles.OrderId}>
        <h1>El id de su orden es: {orderId}</h1>
        <br />
        <Link className={styles.Button} to="/">
          Volver a productos
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.OrderId}>
      <h1>CheckOut</h1>
      <div className={styles.OrderCard}>
        <h2>Resumen de compra</h2>
        {cart.map(({ id, titulo, precio, quantity }) => (
          <div key={id}>
            <p>
              {titulo} x {quantity} = {precio * quantity}
            </p>
            <p>Cantidad: {quantity}</p>
            <p>Precio unitario: ${precio}</p>
            <hr />
          </div>
        ))}
        <h3>Total: ${total}</h3>
      </div>
      <CheckOutForm onConfirm={createOrder} />
    </div>
  );
}

export default Checkout;
