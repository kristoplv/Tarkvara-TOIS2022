let loginButton = document.querySelector('#logIn');

console.log(JSON.parse(window.localStorage.getItem('session')));

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