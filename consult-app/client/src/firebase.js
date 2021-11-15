import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({

    apiKey: "AIzaSyC4ldHMA7UsVmy35V-8zZFTodUvG-Iu8u4",
    authDomain: "coda-app-6ed7d.firebaseapp.com",
    projectId: "coda-app-6ed7d",
    storageBucket: "coda-app-6ed7d",
    messagingSenderId: "152579971008",
    appId: "1:152579971008:web:ee9b70b4e84bcd44749a25",
    measurementId: "G-EB2KK0LM9C"
});

const auth = firebase.auth()

export { auth, app }