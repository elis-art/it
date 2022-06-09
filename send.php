<?php

$name = $_POST['name'];
$tel = $_POST['tel'];
$mail = $_POST['email'];
$to = 'pavl.elvina@gmail.com';


$subject = "Заполнена контактная форма на сайте ".$_SERVER['HTTP_REFERER'];
$message = "Имя пользователя: " . $name . "\r\n" .
"Телефон пользователя: " . $tel . "\r\n" .
    "Почта пользователя " . $mail;    

// На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()
$message = wordwrap($message, 70, "\r\n");

$headers = "From: $to " . "\r\n" .
    "Reply-To: $visitor_email" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

mail($to, $subject, $message, $headers);
echo $_POST['name'].', Ваше сообщение отправлено, спасибо!';
header('Location: ' . $_SERVER['HTTP_REFERER']);
?>