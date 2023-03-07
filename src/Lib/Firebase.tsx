// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoA5fK6fQXrzKNWpS_g7weL72-v-d5vzw",
  authDomain: "todo-app-cf6ff.firebaseapp.com",
  projectId: "todo-app-cf6ff",
  storageBucket: "todo-app-cf6ff.appspot.com",
  messagingSenderId: "635902052761",
  appId: "1:635902052761:web:e34d4bc2db62082076eb08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app)
// Initialise le service firestore (la base de données)
export const firebaseDb = getFirestore(app)


