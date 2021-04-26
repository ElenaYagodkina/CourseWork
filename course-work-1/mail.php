<?php
if(isset($_POST['submit'])){
    $to = "engineerlena@mail.ru";
    $message = $_POST['name'];
    $message = $_POST['phone'];
    $subject = "Форма отправки сообщений с сайта";

    mail($to,$subject,$message,$headers);
}
?>
