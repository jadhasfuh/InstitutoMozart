import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/storage';
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyePh2mWLVePVyPDKdeCvjvq0fF1B4JmE",
  authDomain: "instituto-moza-7f2e1.firebaseapp.com",
  projectId: "instituto-moza-7f2e1",
  storageBucket: "instituto-moza-7f2e1.appspot.com",
  messagingSenderId: "137353387610",
  appId: "1:137353387610:web:ba915fa8d5e666ad540263"
};
// eslint-disable-next-line
const inicia = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const store = inicia.firestore();

export { auth, store, inicia }