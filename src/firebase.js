import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBB2Sfmk5rzD03J0XE_0Ch4eEoHs4Hbl3Y",
    authDomain: "whats-app-clone-64824.firebaseapp.com",
    projectId: "whats-app-clone-64824",
    storageBucket: "whats-app-clone-64824.appspot.com",
    messagingSenderId: "748722425806",
    appId: "1:748722425806:web:f94c8a61452d933480e59f",
    measurementId: "G-K2LD2BLVY9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;