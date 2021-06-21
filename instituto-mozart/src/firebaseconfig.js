import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYrtJDcteNGdBmv3OtW1ULCA8xxWHQNs0",
  authDomain: "institito-mozart.firebaseapp.com",
  projectId: "institito-mozart",
  storageBucket: "institito-mozart.appspot.com",
  messagingSenderId: "952457378812",
  appId: "1:952457378812:web:6eb683753de2b279b11079",
  measurementId: "G-GXP20E93Q3"
};
// eslint-disable-next-line
const inicia = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {auth}