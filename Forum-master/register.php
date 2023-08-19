<?php
require_once('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $query = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
    if (mysqli_query($conn, $query)) {
        echo "<script>alert('Registration successful.You can log IN')</script><a href='login.php' class='btn top-btn'>Login</a>";
    } else {
        echo "<script>alert('Registration failed. Please try again.')</script>";
    }
}

mysqli_close($conn);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <style>
        .top-btn{
            position:absolute;
            top:3vw;
            right:3vw;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Register</h1>
        <form method="post">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" class="form-control" required>
            </div>
            <center><button type="submit" class="btn">Register</button></center>
        </form>
    </div>
</body>
</html>
