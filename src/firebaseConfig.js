// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Importa Firebase Auth
import { getFirestore } from "firebase/firestore"; // Si estás usando Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9wYfjjjjp6w8QhslmOu72idKolgsXXCo",
  authDomain: "proyectointeg-e37de.firebaseapp.com",
  projectId: "proyectointeg-e37de",
  storageBucket: "proyectointeg-e37de.appspot.com",
  messagingSenderId: "1073149596999",
  appId: "1:1073149596999:web:1c3753054380b74332a862",
  measurementId: "G-8QZ7R79ZLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Authentication y Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };