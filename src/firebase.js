// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Correct function for Firestore
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASa5JcutpGXkHgJR_dKYLQbxX61KVUhI4",
  authDomain: "hfc-frozen-food.firebaseapp.com",
  projectId: "hfc-frozen-food",
  storageBucket: "hfc-frozen-food.firebasestorage.app",
  messagingSenderId: "474905072441",
  appId: "1:474905072441:web:2bee37c877533aeab64ee8",
  measurementId: "G-K5VFFY4EG9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services
export const auth = getAuth(app);  // Authentication
export const db = getFirestore(app); // Firestore
