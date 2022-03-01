import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
   getAuth,
   GoogleAuthProvider,
   signInWithPopup,
   onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyAJKILP5CeQIYJ401_o-GT0snuWDy8kkKA",
   authDomain: "ecommerce-app-db-afcd3.firebaseapp.com",
   projectId: "ecommerce-app-db-afcd3",
   storageBucket: "ecommerce-app-db-afcd3.appspot.com",
   messagingSenderId: "385228327556",
   appId: "1:385228327556:web:80c1c9673644e6b6ebd0d1",
};

//init Firebase
const app = initializeApp(firebaseConfig);

//init services
const authInstance = getAuth(app);
export const firestore = getFirestore();

//Google Sign-in
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
   signInWithPopup(authInstance, provider);
};

export { onAuthStateChanged, authInstance };
