import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB2IOoUqNXFp8sx_YocD91SILjjfm03JA8",
    authDomain: "trial-project---micah-stewart.firebaseapp.com",
    projectId: "trial-project---micah-stewart",
    storageBucket: "trial-project---micah-stewart.appspot.com",
    messagingSenderId: "953318214983",
    appId: "1:953318214983:web:d9706e9877a7e2bd8a9062"
  };

initializeApp(firebaseConfig);

export const db = getFirestore();


