import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPz_LSNidbpEDSC3NI2NchQCNzUI-jWFE",
  authDomain: "todoapp-ef1a3.firebaseapp.com",
  projectId: "todoapp-ef1a3",
  storageBucket: "todoapp-ef1a3.appspot.com",
  messagingSenderId: "745683531685",
  appId: "1:745683531685:web:97ca291110bdb08d305a4c",
  measurementId: "G-0HSECB4LXK"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
