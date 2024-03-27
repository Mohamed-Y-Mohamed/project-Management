// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_CF-mwocxyft9Or-BjLadMG1csCuwFgI",
  authDomain: "streaml-de8c9.firebaseapp.com",
  projectId: "streaml-de8c9",
  storageBucket: "streaml-de8c9.appspot.com",
  messagingSenderId: "1063446814826",
  appId: "1:1063446814826:web:5ed9853a3f5d8ab65b6a13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore= getFirestore(app);
export {firestore,auth};