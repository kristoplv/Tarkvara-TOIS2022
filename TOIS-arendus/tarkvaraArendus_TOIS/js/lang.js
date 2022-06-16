let Estonian = document.querySelector('#langEE');
let English = document.querySelector('#langEN');
let currentLanguage;

import {setAddress} from '../js/navigation.js';

setAddress();

Estonian.addEventListener('click', setLanguageEE);
English.addEventListener('click', setLanguageEN);


function setLanguageEE(){
    console.log('Töötab');
    window.localStorage.setItem('lang', 'EE');
}

function setLanguageEN(){
    console.log('Töötab');
    window.localStorage.setItem('lang', 'EN');
}