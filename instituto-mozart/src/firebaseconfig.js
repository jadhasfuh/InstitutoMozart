import firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiFnQYbRd0N2D-iBk2tO3ThPxN4DiLml0",
  authDomain: "instituto-mozart.firebaseapp.com",
  projectId: "instituto-mozart",
  storageBucket: "instituto-mozart.appspot.com",
  messagingSenderId: "435267396968",
  appId: "1:435267396968:web:23b88e5ab9296af18be2dd",
  measurementId: "G-DY5K3G2K2F"
};
// eslint-disable-next-line
const inicia = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const store = inicia.firestore();

export { auth, store }