<?php
    session_start();
    if(isset($_SESSION["user"]) && $_SESSION["user"] != ""){
        echo "estas logeado como ".$_SESSION["user"];
    }else{
        header("http://192.168.58.132/Prueba2PHP/");
        exit;
    }
?>