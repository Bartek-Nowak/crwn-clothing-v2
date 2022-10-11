import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAYxXCjS1tq6dqg9ndJNCwS8a9iwgX4UNU",
  authDomain: "crown-clothing-db-6c9ec.firebaseapp.com",
  projectId: "crown-clothing-db-6c9ec",
  storageBucket: "crown-clothing-db-6c9ec.appspot.com",
  messagingSenderId: "900558014379",
  appId: "1:900558014379:web:5615f06a1b2548273cf4ee",
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider)