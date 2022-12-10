import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA8MYrfLI2gCK0zg5po1eFGkAQfMlGo1PE",
    authDomain: "clone-c78f7.firebaseapp.com",
    projectId:"clone-c78f7",
    storageBucket: "clone-c78f7.appspot.com",
    messagingSenderId: "686375834473",
    appId: "1:686375834473:web:753b76680f3be3d91ae3f8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };