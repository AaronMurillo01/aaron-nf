// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHQJaZ-9qYl7c45Ej65-MjTfSDVflwLqg",
  authDomain: "netflix-clone-833ec.firebaseapp.com",
  projectId: "netflix-clone-833ec",
  storageBucket: "netflix-clone-833ec.appspot.com",
  messagingSenderId: "884160976708",
  appId: "1:884160976708:web:4f203654e8b856ab3a6911",
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
