import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import {getDatabase, ref, push, set, onValue, get, child} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";




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
const loc = ref(db, "TOIS/vorm/vormid");
var reffer = "";
const thingy = document.getElementById("newsArea");

function main(){
    var superlist = [];
    superlist.push(getValues("TOIS/vorm/vormid/id/"))
    superlist.push(getValues("TOIS/vorm/vormid/name/"))
    superlist.push(getValues("TOIS/vorm/vormid/time/"))
    console.log(superlist);
    for(var i=0; i<superlist[i].length; i++){
        /*thingy.innerHTML += "<div id='"+superlist[i][i]+"' class='news'><div id='"+superlist[i][i]+"'><p>08.06.2022</p></div><div id='newsContent1' class='newsContent'><p>Õppekavas x on tehtud muudatused</p><a href=' class='newsLink'>Vaata</a></div></div>'"
    */}
}



function getValues(baseRef){
    var retVal = [];
    var reffer = ref(db, baseRef);
    onValue(reffer, (values)=>{
        var sisu = values.val();
        var items = Object.keys(sisu);
        retVal.push(Object.values(sisu[items]));
    })
    return retVal;
}

main();