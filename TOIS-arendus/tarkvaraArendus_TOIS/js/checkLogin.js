var email = document.querySelector("#email");
var pw = document.querySelector("#password");
var noticeBox = document.getElementById("notice");

var login = document.querySelector("#loginButton");

function checkForValues(){
    var notice = "";
    if(email.value == ""){
        notice += "Meiliaadress lisamata! <br>"
        noticeBox.style.color = "red";
    }
    if(pw.value == ""){
        notice += "Parool lisamata!";
        noticeBox.style.color = "red";
    }
    if(notice == ""){
        notice = "Vajalikud väljad täidetud!";
        noticeBox.style.color = "green";
    }
    console.log(notice);
    noticeBox.innerHTML = "<p1 class='login'>" + notice + "</p1>";
    noticeBox.style.fontSize = "18";

}


login.addEventListener("click", checkForValues);