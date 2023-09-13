import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB07MylcuutHrjDCDPHJ2MjUZEL8N7ampg",
  authDomain: "capstone-db-11c03.firebaseapp.com",
  projectId: "capstone-db-11c03",
  storageBucket: "capstone-db-11c03.appspot.com",
  messagingSenderId: "891145211329",
  appId: "1:891145211329:web:42cf7281e433e1b0d9f340",
};

// Initialize app with provided firebaseConfig
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

// Providing GoogleAuth method with 'select_account' variable
provider.setCustomParameters({
  prompt: "select_account",
});

// Google provides a Popup to sign with google account
export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Once authorization completes, we get access to the firebase-db
export const db = getFirestore();

// Creating userDocumentFromAuthorization created above
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  // To check the current existance of the user, we create 'userSnapshot', which getDoc for instace user
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if not exits, then create one
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  // exists? then return
  return userDocRef;
};
