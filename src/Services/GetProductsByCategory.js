import { where, getDocs, collection, query } from "firebase/firestore";
import { createProductsAdaptedFromFirestore } from "../Adapters/CreateAdaptersFromFirestore";
import { db } from "../Config/firebase_config";

export const getProductsByCategory = async (category) => {
  const productsRef = collection(db, "products");
  let queryRef = query(productsRef);
  if (category) {
    queryRef = query(productsRef, where("categoria", "==", category));
  }
  const queryResult = await getDocs(queryRef);
  const productsAdapted = queryResult.docs.map((doc) =>
    createProductsAdaptedFromFirestore(doc)
  );
  return productsAdapted;
};