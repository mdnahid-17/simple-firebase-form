// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCq2NkkAuW2MyDgQ8_yJkAClbG13eqf1w",
  authDomain: "simple-firebase-form-b6244.firebaseapp.com",
  projectId: "simple-firebase-form-b6244",
  storageBucket: "simple-firebase-form-b6244.appspot.com",
  messagingSenderId: "452842579888",
  appId: "1:452842579888:web:f67df3fb4af0324e191875"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;