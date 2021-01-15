import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBnOPHLkE7E5jfXAEE39RTJLPdrjQqSO3I",
  authDomain: "clothong-app.firebaseapp.com",
  projectId: "clothong-app",
  storageBucket: "clothong-app.appspot.com",
  messagingSenderId: "479114829454",
  appId: "1:479114829454:web:1cf0a4621e1dd2684533df",
  measurementId: "G-NJYWHZPGV9",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
