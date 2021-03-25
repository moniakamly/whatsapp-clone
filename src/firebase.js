import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkpu0rAkAoQww0DUbr71XRrnK_olwuz-c",
    authDomain: "whatsapp-mern-47036.firebaseapp.com",
    projectId: "whatsapp-mern-47036",
    storageBucket: "whatsapp-mern-47036.appspot.com",
    messagingSenderId: "584578118109",
    appId: "1:584578118109:web:7b4b4482d2d98a4e81c634",
    measurementId: "G-NLGV0MBTN7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider };
export default db; 