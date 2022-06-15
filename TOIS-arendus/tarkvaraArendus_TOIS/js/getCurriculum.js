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
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const loc = ref(db, "TOIS/vorm");

const nimetus ="TOIS/vorm/uldine_info/nimetus/ek";
const EAP = "TOIS/vorm/uldine_info/EAP";
const hindamine = "TOIS/vorm/hindamine_eesmargid/kontrollivorm";
const vastutaja = "TOIS/vorm/admin/pohivastutaja/nimi";
var reffer = "";


function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
/*
                    <tr>
                        <th id="nimetus"><a href="form.html" class="links">Matemaatika elemendid</a></th>
                        <th id="EAP" class="number">1</th>
                        <th id="hindamine">Arvestus</th>
                        <th id="instituut">Digitehnoloogiate instituut</th>
                        <th class="links">
                            <a href="form.html" class="newsLink">Vaata</a>
                            <a href="muuda.html" class="newsLink">Muuda</a>
                            <a href="kustuta.html" class="newsLink">Kustuta</a>
                        </th>
                    </tr>
*/

function getAll(){
    getFirebaseItem(nimetus);
    getFirebaseItem(EAP);
    getFirebaseItem(hindamine);
    getFirebaseItem(vastutaja);
}
function getFirebaseItem(baseRef){
    var initRef = ref(db, baseRef);
    onValue(initRef, function(sisu){
        var newVals = sisu.val();
        var objectKeys = Object.keys(newVals);
        var innerSisu = Object.values(newVals);
        console.log(objectKeys);
        console.log(newVals);
        for(var i=0; i<objectKeys.length; i++){
            console.log(baseRef +"/"+objectKeys[i]+"/"+objectKeys[i]);
            var reffer = baseRef +"/"+objectKeys[i];
            console.log(objectKeys[i]);
            var newRef = ref(db, reffer);
            onValue(newRef, function(sisuNew){
                var lowValues = sisuNew.val();
                console.log(lowValues);
                var finalValues = Object.values(lowValues);
                console.log(finalValues[0]);
            })
        }
    })
}

sleep(2000).then(()=>{
    console.log("teeme väikese pausi");
    getAll();
})

