import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAywxIeQOSDhHznSuXGS89XWaDOY6wiVi4",
    authDomain: "discord-clone-00.firebaseapp.com",
    projectId: "discord-clone-00",
    storageBucket: "discord-clone-00.appspot.com",
    messagingSenderId: "1034735352535",
    appId: "1:1034735352535:web:c9ab4250bf0e6f0cee8e92",
    measurementId: "G-EXD5KDYQ5W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;