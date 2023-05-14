import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Config/firebase_config";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams()
  const cleanItemId = itemId.trim();

  useEffect(() => {
      setLoading(true)
      const docRef = doc(db, 'products', cleanItemId)

      getDoc(docRef)
          .then(response => {
              const data = response.data()
              const productAdapted = { id: response.id, ...data }
              setProducts(productAdapted)
          })
          .catch(error => {
              console.log(error)
          })
          .finally(() => {
              setLoading(false)
          })
  }, [cleanItemId])

  return (
    <div>
        <ItemDetail {...products} />
    </div>
  )
}

export default ItemDetailContainer;