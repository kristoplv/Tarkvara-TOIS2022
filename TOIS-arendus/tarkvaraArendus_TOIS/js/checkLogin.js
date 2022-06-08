var email = document.querySelector("#email");
var pw = document.querySelector("#password");
var pwLogo = document.querySelector(".password_logo");
var emailLogo = document.querySelector(".human_logo");
var noticeBox = document.getElementById("notice");

var login = document.querySelector("#loginButton");

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
        notice = "Vajalikud väljad täidetud!";
        noticeBox.style.color = "green";
        pw.style.border = "";
        email.style.border = "";
        emailLogo.style.border = "";
        pwLogo.style.border = "";
    }
    console.log(notice);
    noticeBox.innerHTML = "<p1 class='login'>" + notice + "</p1>";
    noticeBox.style.fontSize = "18";

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