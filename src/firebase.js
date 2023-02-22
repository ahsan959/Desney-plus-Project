// Import the functions you need from the SDKs you need

import { collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfigi = {
  apiKey: "AIzaSyCa8ufyzIoKZMJykRmCJP4bbVs5XToSBdE",

  authDomain: "desney-plus-clone-2739d.firebaseapp.com",

  projectId: "desney-plus-clone-2739d",

  storageBucket: "desney-plus-clone-2739d.appspot.com",

  messagingSenderId: "741457440264",

  appId: "1:741457440264:web:57c275a0cc116cdb56ebbd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfigi);
const db = getFirestore(app);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, googleProvider, storage };
export default db;
