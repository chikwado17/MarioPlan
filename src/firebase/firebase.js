import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyBKzdwxmCD5BW-FRSaxbXkL9nTApLPGJdI",
    authDomain: "marioplan-9b925.firebaseapp.com",
    projectId: "marioplan-9b925",
    storageBucket: "marioplan-9b925.appspot.com",
    messagingSenderId: "465378622517",
    appId: "1:465378622517:web:77893466335d41341a457c",
    measurementId: "G-CX7G200HF9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({
      timestampsInSnapshots: true
  });

  export default firebase;