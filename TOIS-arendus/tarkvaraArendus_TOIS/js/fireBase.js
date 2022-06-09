import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import {getDatabase, ref, push, set, onValue} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA68-WRoXzWuFYJQf0t-txxMq4E749arpQ",
  authDomain: "igplatvormid.firebaseapp.com",
  databaseURL: "https://igplatvormid-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "igplatvormid",
  storageBucket: "igplatvormid.appspot.com",
  messagingSenderId: "778407009045",
  appId: "1:778407009045:web:682d3fb68159d7a747a71c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getDatabase();
const loc = ref(db, "TOIS/logimine");
const pushLoc = ref(db, "TOIS/logimine");
