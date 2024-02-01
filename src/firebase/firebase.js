// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgmpGcDujFNzDqjFPmClmf2xn9cTVqetw",
  authDomain: "insta-clone-5f875.firebaseapp.com",
  projectId: "insta-clone-5f875",
  storageBucket: "insta-clone-5f875.appspot.com",
  messagingSenderId: "316337040403",
  appId: "1:316337040403:web:53df6628d38a57897463e6",
  measurementId: "G-J6XBS2Z6D1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, auth, firestore, storage}