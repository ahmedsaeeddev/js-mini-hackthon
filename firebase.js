
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { collection, addDoc, getFirestore, setDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBpL2tyfu8V8sKc73P0p-OGgSoYLiXbNlo",
  authDomain: "quizgrad-25b9b.firebaseapp.com",
  projectId: "quizgrad-25b9b",
  storageBucket: "quizgrad-25b9b.appspot.com",
  messagingSenderId: "165319859246",
  appId: "1:165319859246:web:639cc03cf99c101cc093bf",
  measurementId: "G-C6QNFH8RP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, getFirestore, collection, addDoc, setDoc, db };
