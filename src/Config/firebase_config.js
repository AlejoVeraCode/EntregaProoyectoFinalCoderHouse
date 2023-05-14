// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_bM0mbcnltOMjZBJlKwRn9UasMnMAsz0",
  authDomain: "ecommerce-cca58.firebaseapp.com",
  projectId: "ecommerce-cca58",
  storageBucket: "ecommerce-cca58.appspot.com",
  messagingSenderId: "815789149552",
  appId: "1:815789149552:web:541274b81339ca8bdc53b5"
};

// Initialize Firebase
//console.log ("Inicializando configuracion", firebaseConfig)

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export default app