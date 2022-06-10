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
const loc = ref(db, "TOIS/vorm");
var reffer = "";

var button = document.querySelector("#sendDb");



function sendToFirebase(){
  onValue(loc, getAll)
  
}
function sleep(ms){
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getAll(vals){
  var sisu = vals.val();
  var getAns =Object.values(sisu);
  var keys = Object.keys(getAns);
  var keyNames = Object.keys(sisu);
  for(var i=0;i<Object.keys(getAns).length; i++){
    if(getAns[i] == "test"){
    } else {
      for(var a=0; a<Object.keys(getAns[i]).length; a++){
        var oneKey = Object.keys(getAns[i])
        reffer = "TOIS/vorm/" + keyNames[i] + "/" + oneKey[a];
        set(ref(db, reffer), {
          1: "tester"
        });
        
      }
    }
    
  }
}


function sendNow(reffer){
  var newRef = ref(db, reffer)
  console.log(reffer);
  var send = push(newRef);
  set(send, "test");
  newRef = null;
  send = null;
}
button.addEventListener("click", sendToFirebase);
