<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "superlova";


    $con = mysqli_connect($servername, $username, $password, $database);

    if(!$con) {
        die("Gagal Konek gan !, cek database nya");
    }

    die("Berhasil terhubung !");
?>