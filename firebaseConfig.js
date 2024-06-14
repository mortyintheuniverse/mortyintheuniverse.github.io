import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs, query, where } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyD4MWk4PujNyXNF9_F2rwWhG9vtmdW10SM",
    authDomain: "posts-146b2.firebaseapp.com",
    projectId: "posts-146b2",
    storageBucket: "posts-146b2.appspot.com",
    messagingSenderId: "330965439458",
    appId: "1:330965439458:web:a7256b989e9515982b1fbb",
    measurementId: "G-T6R6RRKSZP"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export { db };