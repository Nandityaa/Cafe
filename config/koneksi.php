<?php
$host = "localhost";
$user = "root"; // default di XAMPP
$pass = "";
$db   = "portofolio_db";

$conn = mysqli_connect($host, $user, $pass, $db);

// Cek koneksi
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>