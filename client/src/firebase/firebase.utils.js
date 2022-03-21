import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
  writeBatch,
  getDocs,
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
const batch = writeBatch(firestoreDatabase);

//Google Sign-in
const googleProvider = new GoogleAuthProvider();

//adding in firestore database based upon the user's authentication info
const createUserProfileDocument = async (userAuth, additionalData) => {
  const userRef = doc(firestoreDatabase, `users/${userAuth.uid}`);
  let snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
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

  return userRef;
};

const addCollectionAndDocuments = async (collectionKey, documentsToAdd) => {
  const colRef = collection(firestoreDatabase, collectionKey);

  documentsToAdd.forEach((document) => {
    const newDocRef = doc(colRef);
    batch.set(newDocRef, document);
  });

  return await batch.commit();
};

const convertCollectionsSnapshotToMap = (collectionSnapshot) => {
  const transformedCollection = collectionSnapshot.docs.map((collection) => {
    const { items, title } = collection.data();

    return {
      id: collection.id,
      route: collection.title,
      items,
      title,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      authInstance,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
}

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
  onSnapshot,
  addCollectionAndDocuments,
  getDocs,
  convertCollectionsSnapshotToMap,
  googleProvider,
  signInWithPopup,
  getCurrentUser,
};
