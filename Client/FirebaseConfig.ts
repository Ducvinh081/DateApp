import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIa8R7MBpShDZVShxpnqldOZjUzi_G1VM",
  authDomain: "date-app-cd.firebaseapp.com",
  projectId: "date-app-cd",
  storageBucket: "date-app-cd.appspot.com",
  messagingSenderId: "374006768686",
  appId: "1:374006768686:web:6e08f4cfc64c44c69debbf",
  measurementId: "G-Q6Q45YVXEW"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);