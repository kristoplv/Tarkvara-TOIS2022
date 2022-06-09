<?php
    $notice = 0;
    if(isset($_POST["submit"])){
        if(isset($_POST["email_in"]) && !empty($_POST["email_in"])){
            continue
        } else {
            $notice += "E-post aadress lisamata";
        }
        if(isset($_POST["password_in"]) && !empty($_POST["password_in"])){
                continue
            } else {
                $notice += "E-post aadress lisamata";
            }
        
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sisselogimine</title>
    <link rel="stylesheet" href="css/menu.css">
    <link rel="stylesheet" href="css/login.css">
    <script src="js/checkLogin.js" defer></script>
</head>
<body>
    <container class="ribbon">
        <a class="home_logo item a" id="Logo" href="index.html"><p class="menu-text">TLÜ TÄIENDÕPPE INFOSÜSTEEM</p></a>
        <a class="item_3 item a" href="index.html"><p class="menu-text">Õppekavad</p></a>
        <a class="item_3 item a" href="index.html"><p class="menu-text">Loo uus õppekava</p></a>
        <a class="item_3 item a" href="login.html"><p class="menu-text">Logi sisse</p></a>
        <!--<div class="item_3 item"><p class="menu-text">Logi sisse</p></div>-->

    </container>
    
    <form method="post">
    <container class="login_form">
        
        <div class="hello">Logi enda kasutajasse</div>
        <div class="email field">
            <label for="email_in" class="e_post"><p1 class="login">E-posti aadress</p1></label><br>
            <div class="nice_email">
                <div class="human_logo"></div>
                <input type="text" name="email_in" id="email" placeholder="e-posti aadress">
            </div>
        </div>
        <div class="password field">
            <label for="password_in"><p1 class="login">Salasõna</p1></label><br>
            <div class="nice_password">
                <div class="password_logo"></div>
                <input type="password" name="password_in" id="password" placeholder="Salasõna">
            </div>
        </div>
        <div class="send field">
                <input type="submit" value="Logi sisse" class="login_btn" id="loginButton">
            </div>
            <div id="notice"></div>
            <div class="register field">
                <p1 class="login">Pole veel kasutajat?</p1>
                <a href="index.html"><p1 class="login">Registreeru siin</p1></a>
            </div>
            
            <a class="forgot_pw" href="index.html"><p1 class="login">unustasid parooli?</p1></a>
        </container>
    </form>
    
</body>
</html>