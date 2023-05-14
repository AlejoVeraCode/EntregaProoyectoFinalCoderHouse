import { db } from "../Config/firebase_config";

export const getProductId = async () => {
  const productRef = db.collection("products").doc();
  const productDoc = await productRef.get();
  if (productDoc.exists) {
    const productId = productDoc.id;
    console.log(productId); // Debería imprimir el ID del documento ("1dtq8ItwcnokkwqfHysl" en este caso)
  } else {
    console.log("El documento no existe");
  }
};