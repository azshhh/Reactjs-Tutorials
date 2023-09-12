// we importinf firebase/app to initialize our local app
import { initializeApp } from "firebase/app";

// to handle authentication we are importing several auths from firebase
import {
  getAuth,
  //   signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB07MylcuutHrjDCDPHJ2MjUZEL8N7ampg",
  authDomain: "capstone-db-11c03.firebaseapp.com",
  projectId: "capstone-db-11c03",
  storageBucket: "capstone-db-11c03.appspot.com",
  messagingSenderId: "891145211329",
  appId: "1:891145211329:web:42cf7281e433e1b0d9f340",
};

// initializing our app
const firebaseApp = initializeApp(firebaseConfig);

// provider is an instance of GoogleAuthProvider, there can be multiple instances
const provider = new GoogleAuthProvider();

// now we are setting up a parameter by which we authorize a user
provider.setCustomParameters({
  prompt: "select_account",
});

// default auth provided by firebase to authorize user with provided parameter
export const auth = getAuth(firebaseApp);
// this generates a Google Popup to signin
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// getting access to db in firebase
export const db = getFirestore();

// Creating user reference to get user.uid and further to store user data in db
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
};
