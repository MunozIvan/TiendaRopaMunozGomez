

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVDBF2ZeiGL3eQMRF66sM-P5bymIHTJEo",
  authDomain: "tienda-ropa-munoz.firebaseapp.com",
  projectId: "tienda-ropa-munoz",
  storageBucket: "tienda-ropa-munoz.appspot.com",
  messagingSenderId: "284166103142",
  appId: "1:284166103142:web:6cbf5a9b462305a828cda7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)