<?php
session_start();
require_once('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_SESSION['user_id'])) {
        $title = $_POST['title'];
        $content = $_POST['content'];
        $user_id = $_SESSION['user_id'];

        $query = "INSERT INTO threads (title, content, user_id) VALUES ('$title', '$content', '$user_id')";

        if (mysqli_query($conn, $query)) {
            echo "<script>alert('Thread created successfully.')</script><a href='index.php' class='btn top-btn'>Back to Forum</a>";
        } else {
            echo "<script>alert('Thread creation failed. Please try again.')</script>";
        }
    } else {
        echo "<p class='low1'>You must be logged in to create a thread. </p><a href='login.php' class='btn top-btn'>Login</a>";
    }
}

mysqli_close($conn);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Create Thread</title>
    <!-- <link rel="stylesheet" type="text/css" href="style.css"> -->
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
            background: rgba(0, 0, 0, 0.804);
            box-sizing: border-box;
            box-shadow: 0 15px 25px rgba(0,0,0,.6);
            border-radius: 10px;
            border:white 2px solid;
            justify-content:center;
            align-items:center;


        }
        .low1{
            position:relative;
            top:3vw;
            left:3vw;
            color:white;
        }
        .top-btn{
            position:absolute;
            top:3vw;
            right:3vw;
            
        }
        p {
        display: block;
        font-weight: bold;
        margin-bottom: 15px;
        color:rgb(155, 155, 155);
        text-decoration:none;
        }
        a{
            text-decoration:none;
        }
        h1 {
            font-size: 3vw;
            margin-bottom: 20px;
            color:rgb(241, 236, 236);
            text-align: center;
            text-shadow: 2px 2px 5px rgb(39, 38, 38);
        }
        label{
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
            color:rgb(155, 155, 155);
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
            margin-left:auto;
            background-color: #a0a0a021;
            border:white 2px solid;
            color:rgb(255, 255, 255);
            font-weight: bolder;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 3px 5px 12px rgba(91, 91, 91, 0.6);
        }
        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            font-weight: bold;
        }

        .form-control {
            width: 100%;
            padding: 10px 0;
            font-size: 16px;
            color: #fff;
            margin-bottom: 30px;
            border: none;
            border-bottom: 1px solid #fff;
            outline: none;
            background: transparent;
        }

    </style>
</head>
<body>
    <div class="container">
        <h1>Create a Thread</h1>
        <?php
        if (isset($_SESSION['user_id'])) {
            ?>
            <form method="post">
                <div class="form-group">
                    <label for="title">Thread Title:</label>
                    <input type="text" id="title" name="title" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="content">Thread Content:</label>
                    <textarea id="content" name="content" class="form-control" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn">Create Thread</button>
            </form>
            <?php
        } else {
            echo "<p>You must be logged in to create a thread. </p><a href='login.php' class='btn'>Login</a>";
        }
        ?>
    </div>
</body>
</html>
