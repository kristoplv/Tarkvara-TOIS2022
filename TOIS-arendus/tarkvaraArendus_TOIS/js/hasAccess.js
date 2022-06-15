let session = JSON.parse(window.localStorage.getItem('session'));

function authAccess(){
    if(session == null){
        window.location="http://localhost:3001/login.html";
    }
}