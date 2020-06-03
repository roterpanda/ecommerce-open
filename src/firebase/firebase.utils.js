import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCPlnr2vPGolwEHw9HsoXq2MzpnaPhgkhA",
    authDomain: "crown-clothing-d4b44.firebaseapp.com",
    databaseURL: "https://crown-clothing-d4b44.firebaseio.com",
    projectId: "crown-clothing-d4b44",
    storageBucket: "crown-clothing-d4b44.appspot.com",
    messagingSenderId: "450581779678",
    appId: "1:450581779678:web:313633b37a8bbf28fd1e4f",
    measurementId: "G-Z4331ZSVFP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;