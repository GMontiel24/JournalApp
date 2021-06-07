import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDRQ3P6GWLrHhPx_H8e-sLpWDmnPdEhxl8",
    authDomain: "react-app-udemy-fa80b.firebaseapp.com",
    projectId: "react-app-udemy-fa80b",
    storageBucket: "react-app-udemy-fa80b.appspot.com",
    messagingSenderId: "1079924451188",
    appId: "1:1079924451188:web:96f75666526ae1002bee21"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}