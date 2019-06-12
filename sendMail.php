<?php

if(!empty($_POST['name'])&&!empty($_POST['email'])&&!empty($_POST['message'])) {
    
$to      = 'michux12@gmail.com';
$subject = 'Simple-Site';
$message = $_POST['message'];

mail($to, $subject, $message);
    
header('Location: https://michalmdev.github.io/simple-site-1-/');
}
else {
    echo "bład";
}
?>