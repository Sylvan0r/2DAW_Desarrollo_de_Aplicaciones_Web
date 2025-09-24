<?php    
    session_start();
    $_SESSION["user"] = "";
    $_SESSION["gmail"] = "";
    $_SESSION["passwd"] = "";
    $_SESSION["error"] = "";

    if($_POST["user"] == "adriano"){
        $_SESSION["user"] = "adriano";
        validarGmail();
        if($_POST["gmail"] == "adfor409@gmail.com"){
            $_SESSION["gmail"] = "adfor409@gmail.com";
            validarPasswd();
        }else{
            $_SESSION["error"] = "Gmail incorrecto (no es el de adriano)";
            header("Location: index.php");                    
        }
    }else{
        $_SESSION["error"] = "Usuario incorrecto";
        header("Location: index.php");        
    }

    function validarGmail(){
        if(isset($_POST["gmail"]) && filter_var($_POST["gmail"], FILTER_VALIDATE_EMAIL)){
            echo "<br>Gmail valido";
        }else{
            $_SESSION["error"] = "Gmail invalido (no es valido)";
            header("Location: index.php");        
        }
    }

    function validarPasswd(){
        if($_POST["passwd"] == 1234){
            if($_POST["passwd"]==$_POST["passwd2"] && $_POST["passwd2"]==1234){
                echo "<br>Login correcto";
                $_SESSION["passwd"] = "1234";
            }else{
                $_SESSION["error"] = "Confirmacion de contraseña incorrecta";
                header("Location: index.php");                        
            }
        }else{
            $_SESSION["error"] = "Contraseña incorrecta";
            header("Location: index.php");                    
        }
    }
?>