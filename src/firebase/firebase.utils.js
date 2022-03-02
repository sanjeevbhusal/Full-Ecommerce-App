import { initializeApp } from "firebase/app";
import {
   getFirestore,
   collection,
   getDocs,
   addDoc,
   doc,
   getDoc,
   setDoc,
} from "firebase/firestore";
import {
   getAuth,
   GoogleAuthProvider,
   signInWithPopup,
   onAuthStateChanged,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
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
const firestoreDatabase = getFirestore();

//Google Sign-in
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
   signInWithPopup(authInstance, provider);
};

//adding in firestore database based upon the user's authentication info
const createUserProfileDocument = async (userAuth, additionalData) => {
   const userRef = doc(firestoreDatabase, "users", userAuth.uid);
   const userDetails = await getDoc(userRef);

   if (!userDetails._document) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await setDoc(userRef, {
            displayName,
            email,
            createdAt,
            ...additionalData,
         });
      } catch (error) {
         console.log("Error", error);
      }
   }

   return userDetails;
};

export {
   onAuthStateChanged,
   authInstance,
   firestoreDatabase,
   collection,
   createUserProfileDocument,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   doc,
   getDoc,
};
