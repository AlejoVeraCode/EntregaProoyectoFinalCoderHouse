
import { collection, getDocs, query} from "firebase/firestore";
import { db } from "../Config/firebase_config";
import { createProductsAdaptedFromFirestore } from "../Adapters/CreateAdaptersFromFirestore";

export const getProducts = async () => {
  const productsRef = collection(db, 'products');

 const queryRef= await query (productsRef)

 const queryResult = await getDocs(queryRef)

const productsAdapted = queryResult.docs.map ((doc) =>
createProductsAdaptedFromFirestore(doc)
) 

  const snapshot = await getDocs(productsRef);
  const products = snapshot.docs.map(doc => doc.data());
  return products;
};

