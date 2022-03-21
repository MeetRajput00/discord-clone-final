import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';
const firebaseConfig = {

    apiKey: "AIzaSyCi7ohzHNGmiVfe1H6pcbBb7-D9KzCF-t4",
  
    authDomain: "discord-clone-f7998.firebaseapp.com",
  
    projectId: "discord-clone-f7998",
  
    storageBucket: "discord-clone-f7998.appspot.com",
  
    messagingSenderId: "110263552272",
  
    appId: "1:110263552272:web:0ed6c71d73e8a59ffc7d95",
  
    measurementId: "G-57LST2EGYE"
  
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  const auth=firebase.auth();

  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;