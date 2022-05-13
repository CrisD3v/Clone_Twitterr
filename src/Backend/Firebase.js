  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA9pveAcKA_MNas7orgtPJ43Ah-b6sy5rU",
    authDomain: "socialtredtwitterclone.firebaseapp.com",
    projectId: "socialtredtwitterclone",
    storageBucket: "socialtredtwitterclone.appspot.com",
    messagingSenderId: "14086494506",
    appId: "1:14086494506:web:7e24fce61326c887a6a653",
    measurementId: "G-BEQBRC6FCM"
  };

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);

  export const db = getFirestore(app);
