// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHvHRwuQ8qsHpx_k5wnS93OjF9l3LU_yY",
  authDomain: "smartmavuno-14c43.firebaseapp.com",
  projectId: "smartmavuno-14c43",
  storageBucket: "smartmavuno-14c43.firebasestorage.app",
  messagingSenderId: "854353903600",
  appId: "1:854353903600:web:f71462f3d7e1d9164ae735",
  measurementId: "G-PYKPLJBBY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);