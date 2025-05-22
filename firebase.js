
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB7aqnXH5HLI-oSKelB8AAIxvggtyVi2Ws",
  authDomain: "franckmahoussi-229.firebaseapp.com",
  projectId: "franckmahoussi-229",
  storageBucket: "franckmahoussi-229.firebasestorage.app",
  messagingSenderId: "366958800929",
  appId: "1:366958800929:web:c7d02e64726ee1cf443360"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialiser l'authentification Firebase
export const auth = getAuth(app);

// Initialiser Firestore
export const db = getFirestore(app);

