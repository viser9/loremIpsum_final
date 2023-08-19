<?php
$host = 'localhost'; // Replace with your database host (e.g., localhost)
$username = 'id21162630_rougedoll'; // Replace with your database username
$password = 'Abcd1234#'; // Replace with your database password
$database = 'id21162630_rougedoll'; // Replace with your database name

// Create a database connection
$conn = mysqli_connect($host, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>