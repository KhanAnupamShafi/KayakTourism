import firebaseConfig from "./Firebase.config";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const InitializeFirebase = (params) =>
  // Initialize Firebase
  initializeApp(firebaseConfig);

export default InitializeFirebase;
