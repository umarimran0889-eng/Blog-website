import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhTvJLoXYpQ022To8fxsKJzsrC9YSo0i0",
  authDomain: "blog-website-1078d.firebaseapp.com",
  projectId: "blog-website-1078d",
  storageBucket: "blog-website-1078d.firebasestorage.app",
  messagingSenderId: "513790326641",
  appId: "1:513790326641:web:74c4a6ad289c96453de8d0",
  measurementId: "G-X43MTDMER4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;