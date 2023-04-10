import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDWP2pFQOJlPBRuqlUJazuR_fTMf-rEXbQ",
    authDomain: "conquest-social-app.firebaseapp.com",
    projectId: "conquest-social-app",
    storageBucket: "conquest-social-app.appspot.com",
    messagingSenderId: "508399477358",
    appId: "1:508399477358:web:7a4639fa727ea368137c7f",
    measurementId: "G-N5X312M6W3"
  };


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth , db };