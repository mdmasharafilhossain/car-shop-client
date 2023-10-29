// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDunrIuiXI8Ry85VdsI0RYQRjv0JG4oYcw",
  authDomain: "car-shop-9bd07.firebaseapp.com",
  projectId: "car-shop-9bd07",
  storageBucket: "car-shop-9bd07.appspot.com",
  messagingSenderId: "1062306490972",
  appId: "1:1062306490972:web:42f6fe6e3ede5e85a95499",
  measurementId: "G-GKM258CL4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;