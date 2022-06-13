export function storeData(){
    window.localStorage.setItem('login', JSON.stringify(email.value));
    let loginCookie = JSON.parse(window.localStorage.getItem('login'));
    console.log(loginCookie);
}

export function loadSavedLogin(){
    if(JSON.parse(window.localStorage.getItem('login')) !== null){
        email.value = JSON.parse(window.localStorage.getItem('login'));
    }
}