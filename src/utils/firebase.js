// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgYnzuG8xlnfa_sFipkUCdre7Z9mh63jU",
  authDomain: "y-clothes-db.firebaseapp.com",
  projectId: "y-clothes-db",
  storageBucket: "y-clothes-db.appspot.com",
  messagingSenderId: "1036887539163",
  appId: "1:1036887539163:web:a26c0bb6d9e3457327bbfe",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
