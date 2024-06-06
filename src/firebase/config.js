// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlVuaTdbGGqAIWwRWDnGTsL6rXClweKUk",
  authDomain: "react-cursos-113bb.firebaseapp.com",
  projectId: "react-cursos-113bb",
  storageBucket: "react-cursos-113bb.appspot.com",
  messagingSenderId: "52365752760",
  appId: "1:52365752760:web:647a3147c5ed627e33b74d"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth (FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);