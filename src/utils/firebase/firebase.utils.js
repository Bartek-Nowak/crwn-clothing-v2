import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYxXCjS1tq6dqg9ndJNCwS8a9iwgX4UNU",
  authDomain: "crown-clothing-db-6c9ec.firebaseapp.com",
  projectId: "crown-clothing-db-6c9ec",
  storageBucket: "crown-clothing-db-6c9ec.appspot.com",
  messagingSenderId: "900558014379",
  appId: "1:900558014379:web:5615f06a1b2548273cf4ee",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider(); 
/* Tworzy nam dostawcę logowania. W tym przypadku od Googla. 
W ten sposób możemy łatwo stworzyć dla inncy dostawców.
Dodajać do importu z firebase/auth FacebookAuthProvider. Otrzymamy dostawcę dla Facebooka.
const facebookProvider = new FacebookAuthProvider();
*/

googleProvider.setCustomParameters({ // ten element jest wymuszony przez dokumentację google firebase
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider); //różne metody logowania. Ta jest przez popup
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider); // Ta jest przez przekierowanie
//koniec sekcji logowania
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
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
      });
    } catch (error) {
      console.log('Error creating the user', error.message)
    }
  }

  return userDocRef;
};
