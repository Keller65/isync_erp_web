// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDT_MaSf1lmt11ws0cco0TObRzEtZSC8nw",
  authDomain: "isync-26c98.firebaseapp.com",
  projectId: "isync-26c98",
  storageBucket: "isync-26c98.firebasestorage.app",
  messagingSenderId: "689557045138",
  appId: "1:689557045138:web:8f551867cb3e0928800b4b",
  measurementId: "G-HGTBH1JF7J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };