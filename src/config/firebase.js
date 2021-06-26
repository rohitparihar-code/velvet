import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCXnR4jzGDqjfolEwpMYP2wd6A23Skjryk",
    authDomain: "velvet-gql-f652b.firebaseapp.com",
    databaseURL: "https://velvet-gql-f652b-default-rtdb.firebaseio.com",
    projectId: "velvet-gql-f652b",
    storageBucket: "velvet-gql-f652b.appspot.com",
    messagingSenderId: "1036042642556",
    appId: "1:1036042642556:web:e8fdcabdc0dbecc84015f9",
    measurementId: "G-7QERSWE13X"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const auth = firebase.auth;
  