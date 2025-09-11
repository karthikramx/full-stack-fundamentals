// Import the functions you need from the SDKs you need
// Fire base application
import { initializeApp } from "firebase/app";
// Firebase authentication imports
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// firebase firestore functions
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration - this is needed to interact with firebase account
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
initializeApp(firebaseConfig);

// Initialize Google Auth Provider
const googleAuthProvider = new GoogleAuthProvider();

googleAuthProvider.setCustomParameters({
  prompt: "select_account",
});

// Creating Firestore Auth Object
export const auth = getAuth();

// Creating Firestore Database Object
export const db = getFirestore();

// Adding a new collection to our database
export const addCollectionAndDocuments = async (
  collectionKey, // name of the collection
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  // transaction - a successful unit of work to a database (like read and write)
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done");
};

// Sign In with Google Popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleAuthProvider);

// Sign In with Email and Password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log("Error signing in user with email and password", error.message);
  }
};

// Creating Auth Object on Firestore
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating user document", error.message);
    }
  }
  return userDocRef;
};

// Creating Auth User with Email and Password on Firestore
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return response;
  } catch (error) {
    console.log("Error creating user with email and password", error.message);
  }
};

// Sign Out User
export const signOutUser = async () => await signOut(auth);

// Auth State Change Listener
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
