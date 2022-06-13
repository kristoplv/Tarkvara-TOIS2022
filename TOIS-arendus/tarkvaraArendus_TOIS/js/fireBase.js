import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import {getDatabase, ref, push, set, onValue, get, child} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";



// Vaga palju querySelectoreid
var nimiEK = document.getElementsByClassName("formInput uldine");
var oppeviisid = document.getElementsByClassName("uldine_viisid");
var keeled = document.getElementsByClassName("uldine_keeled");
var koolituse_liik = document.querySelector("#koolituse-liik");
var koolitus_valitud = koolituse_liik.options[koolituse_liik.selectedIndex];

var maht = document.getElementsByClassName("maht formInput");
var eap = document.querySelector("#eap-result");

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
  //onValue(loc, getAll)
  onValue(loc, sendValues)
  
}
function sleep(ms){
  return new Promise((resolve) => setTimeout(resolve, ms));
}
/*
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
}*/

function sendValues(vals){
  console.log(koolitus_valitud + " ... " + koolitus_valitud.value)
  // Teeme seda tulpade kaupa, aka liigume aina uude funktsiooni
  var baseRef = "TOIS/vorm/uldine_info";
  saada(baseRef+"/nimetus", nimiEK);
  
  saada(baseRef+"/oppeviisid", oppeviisid);
  saada(baseRef+"/maht", maht);
  saada(baseRef+"/keeled", keeled);
  saadaOneline(baseRef + "/koolituse_liik", koolitus_valitud);
}

function saada(baseRef, values){
  var basic_info_loc = ref(db, baseRef);
  onValue(basic_info_loc, function(sisu){
    var newVals = sisu.val();
    var objectKeys = Object.keys(newVals);
    for(var i=0; i<objectKeys.length; i++){
      console.log(values[i].value)
      set(ref(db, baseRef+"/"+objectKeys[i]), {
        1 : values[i].value
      });
    }
  });
}

function saadaOneline(baseRef, liik){
  set(ref(db, baseRef), {
    1 : liik.value
  });
}

button.addEventListener("click", sendToFirebase);
