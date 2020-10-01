import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDyot5QTzmLyQBuJ8ZD7VN4IRe3T4p0G5w",
  authDomain: "clone-7e5d9.firebaseapp.com",
  databaseURL: "https://clone-7e5d9.firebaseio.com",
  projectId: "clone-7e5d9",
  storageBucket: "clone-7e5d9.appspot.com",
  messagingSenderId: "717114635549",
  appId: "1:717114635549:web:76d73c9ef4b53595c31df4",
  measurementId: "G-WVSTRHZ18X",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
