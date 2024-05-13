import { initializeApp  } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence, EmailAuthProvider  } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import {getDatabase} from 'firebase/database';
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
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const timestamp = serverTimestamp();
export const db = getFirestore(app);
export const provider = new EmailAuthProvider();

