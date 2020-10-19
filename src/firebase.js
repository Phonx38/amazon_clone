// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyA8XZEzoVaGxQ76LxRYvWcOxN1M2DzE0Gs",
  authDomain: "clone-32189.firebaseapp.com",
  databaseURL: "https://clone-32189.firebaseio.com",
  projectId: "clone-32189",
  storageBucket: "clone-32189.appspot.com",
  messagingSenderId: "268536142913",
  appId: "1:268536142913:web:a9c7b545cac84be8377ac0",
  measurementId: "G-ZW1LJRFQN0",
}; 


const firebaseApp = firebase.initializeApp(firebaseConfig);

const  db = firebaseApp.firestore();
const auth = firebase.auth();


export {db , auth};