let loginButton = document.querySelector('#logIn');

window.onload = function() {
    checkLoginStatus();
    console.log(JSON.parse(window.localStorage.getItem('session')));
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