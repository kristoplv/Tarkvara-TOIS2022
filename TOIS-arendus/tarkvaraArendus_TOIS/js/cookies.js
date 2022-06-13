let email = document.querySelector('#email');
/*let language = document.querySelector('#')*/

window.onload = function(){
    document.querySelector('#loginButton').addEventListener('click', storeData);

    loadSavedLogin();
}

function storeData(){
    window.localStorage.setItem('login', JSON.stringify(email.value));
    let loginCookie = JSON.parse(window.localStorage.getItem('login'));
    console.log(loginCookie);
}

function loadSavedLogin(){
    if(JSON.parse(window.localStorage.getItem('login')) !== null){
        email.value = JSON.parse(window.localStorage.getItem('login'));
    }
}