<?php
    session_start();
?>

<html>
    <head>
        <title>Prueba 2</title>
        <h1>Inicio de sesion sencillo</h1>
    </head>

    <body>
        <form action="comprobante.php" method="POST">
            <input placeholder="Usuario" name="user" value="<?php echo $_SESSION["user"]?>">
            <br><br>
            <input placeholder="Gmail" name="gmail" value="<?php echo $_SESSION["gmail"]?>">
            <br><br>
            <input placeholder="Contraseña" name="passwd" value="<?php echo $_SESSION["passwd"]?>">
            <br><br>
            <input placeholder="Contraseña otra vez" name="passwd2">
            <br><br>
            <button type="submit">Enviar</button>
        </form>

        <?php
            if(isset($_SESSION["error"]) && $_SESSION["error"] != "") {
                echo "Error: " . $_SESSION["error"];
                $_SESSION["error"] = "";
            }
            if(isset( $_SESSION["exito"]) && $_SESSION["exito"] != "") {
                echo "Exito: " . $_SESSION["exito"];
                $_SESSION["exito"] = "";
            }
        ?>
    </body>
</html>