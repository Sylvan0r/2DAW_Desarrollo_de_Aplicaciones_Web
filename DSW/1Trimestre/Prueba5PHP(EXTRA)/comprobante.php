<?php
    session_start();
    validarName();

    if($_POST["user"] == "adriano"){
        validarGmail();
        if($_POST["gmail"] == "adfor409@gmail.com"){
            validarPasswd();
        }else{
            echo "<br>Gmail incorrecto (no es el de adriano)";
        }
    }else{
        echo "<br>Usuario incorrecto";
    }

    function validarGmail(){
        if(isset($_POST["gmail"]) && filter_var($_POST["gmail"], FILTER_VALIDATE_EMAIL)){
            echo "<br>Gmail valido";
        }else{
            echo "<br>Gmail invalido (no es valido)";
        }
    }

    function validarPasswd(){
        if($_POST["passwd"] == 1234){
            if($_POST["passwd"]==$_POST["passwd2"] && $_POST["passwd2"]==1234){
                echo "<br>Login correcto";
                $_SESSION["user"] == "adriano";
            }else{
                echo "<br>Confirmacion de contraseña incorrecta";
            }
        }else{
            echo "<br>Contraseña incorrecta";
        }
    }

    function validarName(){
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "test";

        $conex = mysqli_connect($servername, $username, $password, $dbname);

        $resultado = mysqli_query($conex,"SELECT firstname FROM MyGuests2");

        $datos_array = [];

        if(mysqli_num_rows($resultado)>0){
            while($row = mysqli_fetch_array($resultado)){
                $datos_array[] = $row;
            }
        }else{
            echo "No se encontraron los resultados";
        }

        print_r($datos_array);
    }
?>