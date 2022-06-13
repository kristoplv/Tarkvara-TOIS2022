import {storeData, loadSavedLogin} from '../js/cookies.js';

let email = document.querySelector('#email');
/*let language = document.querySelector('#')*/

window.onload = function(){
    /*document.querySelector('#loginButton').addEventListener('click', checkLogin);*/

    loadSavedLogin();
}

/*function checkLogin(){
    if(email = emailFromDb){
        storeData();
    }
}*/