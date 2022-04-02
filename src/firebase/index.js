// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbYLUVJYoITGNvgeEJiLWKwlvEZEgsn7M",
  authDomain: "yama-website.firebaseapp.com",
  databaseURL: "https://yama-website-default-rtdb.firebaseio.com",
  projectId: "yama-website",
  storageBucket: "yama-website.appspot.com",
  messagingSenderId: "1094650287749",
  appId: "1:1094650287749:web:b011ea45db8ec625e5bbec",
  measurementId: "G-6TTRYFGB6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }
