// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYbMqT9rWMqTsatIXyOy1u-aIKEa_vgt0",
  authDomain: "running-bull-media.firebaseapp.com",
  projectId: "running-bull-media",
  storageBucket: "running-bull-media.appspot.com",
  messagingSenderId: "913454653770",
  appId: "1:913454653770:web:ea8e5f5fa4eb716ffb61b3",
  measurementId: "G-DY7GWPZBYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);