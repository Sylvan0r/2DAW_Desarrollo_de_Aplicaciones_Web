<?php
    session_start();
    if($_POST["user"] != "adriano" || $_POST["passwd"] != 1234){
        echo "Login incorrectos";        
    }else{
        echo "Login correctos";
        $_SESSION["user"] = "adriano";
    }
?>