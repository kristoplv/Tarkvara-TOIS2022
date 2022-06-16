let address = window.location.href;

export function setAddress(){
    if(address.includes("main") || address.includes("mainEng")){
        if(window.localStorage.getItem('lang') == 'EE'){
            address = "main.html";
        } else if(window.localStorage.getItem('lang') == 'EN'){
            address = "mainEng.html";
        }
        console.log('Töötab')
        document.querySelector('#homePage').classList.add('currentPage');
    }
    if(address.includes("oppekavad") || address.includes("oppekavadEng")){
        if(window.localStorage.getItem('lang') == 'EE'){
            address = "oppekavad.html";
        } else if(window.localStorage.getItem('lang') == 'EN'){
            address = "oppekavadEng.html";
        }
        document.querySelector('#allForms').classList.add('currentPage');
    }
    if(address.includes("uusoppekava")){
        document.querySelector('#newForm').classList.add('currentPage');
    }
}
