<?php
include "koneksi.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama   = htmlspecialchars($_POST["nama"]);
    $email  = htmlspecialchars($_POST["email"]);
    $pesan  = htmlspecialchars($_POST["pesan"]);

    $sql = "INSERT INTO kontak (nama, email, pesan) VALUES ('$nama', '$email', '$pesan')";

    if (mysqli_query($conn, $sql)) {
        echo "<script>alert('Pesan berhasil dikirim!'); window.location.href='index.html';</script>";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}
?>