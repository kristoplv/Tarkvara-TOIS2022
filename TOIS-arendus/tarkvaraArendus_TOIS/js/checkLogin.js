var email = document.querySelector("#email");
var pw = document.querySelector("#password");
var pwLogo = document.querySelector(".password_logo");
var emailLogo = document.querySelector(".human_logo");
var noticeBox = document.getElementById("notice");
var emailCheck;
var pwCheck;


var login = document.querySelector("#loginButton");




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
const EmailTester = ref(db, "TOIS/logimine/meil");
const passwordTester = ref(db, "TOIS/logimine/parool");



function checkForValues(){
    var notice = "";
    if(email.value == ""){
        notice += "Meiliaadress lisamata! <br>"
        email.style.border = "2px solid red";
        noticeBox.style.color = "red";
        emailLogo.style.border = "2px solid red";
        email.style.borderLeft = "";
        emailLogo.style.borderRight = "";
    }
    if(pw.value == ""){
        notice += "Parool lisamata!";
        noticeBox.style.color = "red";
        pw.style.border = "2px solid red";
        pwLogo.style.border = "2px solid red";
        pw.style.borderLeft = "";
        pwLogo.style.borderRight = "";
    }
    if(notice == ""){
        var testPass = onValue(passwordTester, testPasswordInput);
        var testEmail = onValue(EmailTester, testEmailInput);
        if(emailCheck == pwCheck){
            notice = "Vajalikud väljad täidetud!";
            noticeBox.style.color = "green";
            pw.style.border = "";
            email.style.border = "";
            emailLogo.style.border = "";
            pwLogo.style.border = "";

        } else {
            notice = "Kasutajanimi või parool vale!";
            noticeBox.style.color = "red";

            pw.style.border = "2px solid red";
            pwLogo.style.border = "2px solid red";
            emailLogo.style.border = "2px solid red";
            email.style.border = "2px solid red";
            
        }
        
    }
    noticeBox.innerHTML = "<p1 class='login'>" + notice + "</p1>";
    noticeBox.style.fontSize = "18";

}

function testEmailInput(vals){
    var correctAns;
    var sisu = vals.val();
    var getAns =Object.values(sisu);
    var keys = Object.keys(sisu);
    console.log(getAns);
    for(var i=0;i<getAns.length; i++){
        console.log(getAns[i]);
        if(email.value == getAns[i]){
            console.log(keys[i]);
            emailCheck = keys[i];
            return true;
        } else {
            correctAns = false;
            console.log("cool beans but not right");
        }
    }
}
function testPasswordInput(vals){
    var correctAns;
    var sisu = vals.val();
    var getAns =Object.values(sisu);
    var keys = Object.keys(sisu);
    console.log(getAns);
    for(var i=0;i<getAns.length; i++){
        console.log(getAns);
        if(pw.value == getAns[i]){
            correctAns = true;
            console.log(keys[i]);
            console.log("Edukas guess pw style!");
            pwCheck = keys[i];
            return true;
        } else {
            correctAns = false;
            console.log("cool beans but not right pw style");
        }
    }
}

function revertHightlightEmail(){
    email.style.border = "";
    emailLogo.style.border = "";
}
function revertHightlightPw(){
    pw.style.border = "";
    pwLogo.style.border = "";
}

login.addEventListener("click", checkForValues);
email.addEventListener("click", revertHightlightEmail);
pw.addEventListener("click", revertHightlightPw);