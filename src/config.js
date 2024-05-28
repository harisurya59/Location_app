// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD8j65F2KIxWejgGTFEz8P7VOyHPv88I4",
  authDomain: "webfirelearn.firebaseapp.com",
  projectId: "webfirelearn",
  storageBucket: "webfirelearn.appspot.com",
  messagingSenderId: "673914423950",
  appId: "1:673914423950:web:d6e8a294467149fe2917df",
  measurementId: "G-JCPSLW0T1H"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app)

export default auth
