import { db } from "../../../Config/firebase_config";
import { createProductsAdaptedFromFirestore } from "../../../Adapters/CreateAdaptersFromFirestore";

import { collection, addDoc } from "firebase/firestore";


export const saveProducts = async (product, products) => {
    console.log("saveProducts", product, products);
    //base de datos //colleccion
    const collectionRef = collection(db, products);
    const response = await addDoc(collectionRef, product);
    //console.log("response", response);
}