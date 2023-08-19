<?php
session_start();
require_once('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_SESSION['user_id'])) {
        $content = $_POST['content'];
        $thread_id = $_POST['thread_id'];
        $user_id = $_SESSION['user_id'];

        $query = "INSERT INTO posts (content, thread_id, user_id) VALUES ('$content', '$thread_id', '$user_id')";

        if (mysqli_query($conn, $query)) {
            echo "Post created successfully. <a href='index.php' class='btn'>Back to Forum</a>";
        } else {
            echo "Post creation failed. Please try again.";
        }
    } else {
        echo "You must be logged in to create a post. <a href='login.php' class='btn'>Login</a>";
    }
}

mysqli_close($conn);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Create Post</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Create a Post</h1>
        <?php
        if (isset($_SESSION['user_id'])) {
            $thread_id = $_GET['thread_id'];
            ?>
            <form method="post">
                <input type="hidden" name="thread_id" value="<?php echo $thread_id; ?>">
                <div class="form-group">
                    <label for="content">Post Content:</label>
                    <textarea id="content" name="content" class="form-control" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn">Create Post</button>
            </form>
            <?php
        } else {
            echo "You must be logged in to create a post. <a href='login.php' class='btn'>Login</a>";
        }
        ?>
    </div>
</body>
</html>
