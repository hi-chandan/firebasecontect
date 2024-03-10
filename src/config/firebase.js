// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgsanOxv6t-vl6DQu3K4LxIfN0osct94Q",
  authDomain: "vite-contect-e25e3.firebaseapp.com",
  projectId: "vite-contect-e25e3",
  storageBucket: "vite-contect-e25e3.appspot.com",
  messagingSenderId: "381445844158",
  appId: "1:381445844158:web:53ac6ac66ac753959882ef",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
