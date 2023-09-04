// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfP-kz_9hKaWJKQZgO0RERvGnsRwjAwq8",
  authDomain: "learnbasicfirebase.firebaseapp.com",
  projectId: "learnbasicfirebase",
  storageBucket: "learnbasicfirebase.appspot.com",
  messagingSenderId: "789461228872",
  appId: "1:789461228872:web:1dd69e1be1eb870be1277d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
