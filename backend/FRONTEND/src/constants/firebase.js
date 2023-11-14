import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD1r9ZwwE_Ny-3z0KjgZnyakRA54fo6mkY",
    authDomain: "design-elementary-2.firebaseapp.com",
    projectId: "design-elementary-2",
    storageBucket: "design-elementary-2.appspot.com",
    messagingSenderId: "58351340444",
    appId: "1:58351340444:web:28bba703e0dd88f3d19659",
    measurementId: "G-CDH75YGGMJ"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, firestore, storage, firebaseConfig, auth, googleProvider };