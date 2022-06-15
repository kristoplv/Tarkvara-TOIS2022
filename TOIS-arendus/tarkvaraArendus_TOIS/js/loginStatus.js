let loginButton = document.querySelector('#logIn');

window.onload = function() {
    checkLoginStatus();
}

function checkLoginStatus(){
    console.log('Töötab');
    if(JSON.parse(window.localStorage.getItem('session')) !== null){
        loginButton.innerHTML = "Logi välja";
        loginButton.addEventListener('click', logOut());
    }
}

function logOut(){
    window.localStorage.removeItem('session');
}