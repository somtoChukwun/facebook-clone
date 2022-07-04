// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA7ikcFjN4Da3xL93DjB9A0-Pw15Vs0P_0",
    authDomain: "fb-cloned-858f5.firebaseapp.com",
    projectId: "fb-cloned-858f5",
    storageBucket: "fb-cloned-858f5.appspot.com",
    messagingSenderId: "130037977878",
    appId: "1:130037977878:web:1c769ff4d8b2c9bfeab637"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();




// Initialize firestore
export const db = getFirestore(app)

export { auth, provider };
