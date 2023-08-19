<?php
session_start();
require_once('db.php');

$query = "SELECT * FROM threads";
$result = mysqli_query($conn, $query);

?>

<!DOCTYPE html>
<html>
<head>
    <title>Forum</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-image: url("https://indiaimprints.com/wp-content/uploads/2018/04/Download-Indian-Handicraft-Image.jpg");
            background-repeat: no-repeat;
            background-size: cover;

        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            margin-top:10vw;
            padding: 20px;
            background: rgba(0, 0, 0, 0.560);
            box-sizing: border-box;
            box-shadow: 0 15px 25px rgba(0,0,0,.6);
            border-radius: 10px;
            border:white 2px solid;
            margin-bottom:10vw;
        }
        h1 {
            font-size: 3vw;
            margin-bottom: 20px;
            color:rgb(241, 236, 236);
            text-align: center;
            text-shadow: 2px 2px 5px rgb(39, 38, 38);
        }
        p {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
            color:rgb(155, 155, 155);
        }
        a{
            text-decoration:none;
        }
        .thread {
            background-color: #000000;
            padding: 15px;
            margin-bottom: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .btn[type="submit"]:hover {
            align-items: center;
            background-color: #00000098;
            color: white;
            border: rgba(0, 0, 0, 0.909) 2px solid;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 0 5px 8px rgba(0,0,0,.6);
        }
        .btn {
            align-items: center;
            margin-left:5px;
            margin-right:5px;
            background-color: #a0a0a021;
            border:white 2px solid;
            color:rgb(255, 255, 255);
            font-weight: bolder;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 3px 5px 12px rgba(91, 91, 91, 0.6);
        }
        webkit-scrollbar {
            display: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Forum Threads</h1>
        <?php
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                echo "<div class='thread'>";
                echo "<h2>" . $row['title'] . "</h2>";
                echo "<p>" . $row['content'] . "</p>";
                echo "<p>Created by: User #" . $row['user_id'] . "</p>";
                echo "</div>";
            }
        }

        if (isset($_SESSION['user_id'])) {
            echo "<center><a href='create_thread.php' class='btn'>Create a Thread</a>";
            echo "<a href='logout.php' class='btn'>Logout</a></center>";
        } else {
            echo "<center><a href='login.php' class='btn'>Login</a>";
            echo "<a href='register.php' class='btn'>Register</a></center>";
        }
        ?>
    </div>
</body>
</html>
<?php
mysqli_close($conn);
?>
