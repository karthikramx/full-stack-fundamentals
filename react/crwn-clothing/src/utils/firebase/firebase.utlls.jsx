// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
    getFirestore,
    doc, 
    getDoc, 
    setDoc,
} from 'firebase/firestore'
import { use } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNwtDT2KKewx5y9vv8cLrXkpR0gUpmTiM",
  authDomain: "crwn-shopping-webapp.firebaseapp.com",
  projectId: "crwn-shopping-webapp",
  storageBucket: "crwn-shopping-webapp.firebasestorage.app",
  messagingSenderId: "404711414858",
  appId: "1:404711414858:web:1b6485d2ec739c348c9ab3",
  measurementId: "G-P62C5VE74P",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);



export const db = getFirestore();   

const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {

    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef)

}