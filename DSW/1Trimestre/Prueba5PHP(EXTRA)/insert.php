<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "test";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }

    // prepare and bind
    $stmtcr = $conn->prepare("CREATE TABLE IF NOT EXISTS MyGuests2 (firstname varchar(255), lastname varchar(255), email varchar(255), passwd varchar(255))");
    $stmtcr->execute();
    $stmtcr->close();

    $stmt = $conn->prepare("INSERT INTO MyGuests2 (firstname, lastname, email, passwd) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $firstname, $lastname, $email, $passwd);

    // set parameters and execute
    $firstname = "John";
    $lastname = "Doe";
    $email = "john@example.com";
    $passwd = "1234";
    $stmt->execute();

    $firstname = "Mary";
    $lastname = "Moe";
    $email = "mary@example.com";
    $passwd = "5678";
    $stmt->execute();

    $firstname = "Julie";
    $lastname = "Dooley";
    $email = "julie@example.com";
    $passwd = "9101";
    $stmt->execute();

    echo "New records created successfully";

    $stmt->close();
    $conn->close();
?>