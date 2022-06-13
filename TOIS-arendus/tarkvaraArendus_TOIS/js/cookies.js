let email = document.querySelector('#email');

window.onload = function(){
    document.querySelector('#loginButton').addEventListener('click', storeData);
}

function storeData(){
    window.localStorage.setItem('login', JSON.stringify(email.value));
    loginCookie = JSON.parse(window.localStorage.getItem('login'));
    console.log(loginCookie);
}