import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC88q3NY5w2VmZ2qKT8lSsrROLlg_dDelM",
  authDomain: "twitter-clone-72a61.firebaseapp.com",
  projectId: "twitter-clone-72a61",
  storageBucket: "twitter-clone-72a61.appspot.com",
  messagingSenderId: "416132881056",
  appId: "1:416132881056:web:f32508a8ab5feee2f9c7c5",
  measurementId: "G-6VKVFWYZYQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
