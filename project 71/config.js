import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCcBNfcgKmF-QCbwtcxuuPrhQKLiDqunPg",
    authDomain: "bicycle-9fec5.firebaseapp.com",
    projectId: "bicycle-9fec5",
    storageBucket: "bicycle-9fec5.appspot.com",
    messagingSenderId: "338701254154",
    appId: "1:338701254154:web:3672a3e2e95b59f17ca9f3"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


