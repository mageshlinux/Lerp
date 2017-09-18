<?php
require 'PHPMailerAutoload.php';

$mail = new PHPMailer;

//Enable SMTP debugging. 
//$mail->SMTPDebug = 3;                               
//Set PHPMailer to use SMTP.
$mail->isSMTP();            
//Set SMTP host name                          
$mail->Host = "smtp.gmail.com";
//Set this to true if SMTP host requires authentication to send email
$mail->SMTPAuth = true;                          
//Provide username and password     
$mail->Username = "lawerp17@gmail.com";                 
$mail->Password = "fusion123";                           
//If SMTP requires TLS encryption then set it
$mail->SMTPSecure = "tls";                           
//Set TCP port to connect to 
$mail->Port = 587;                                   

$mail->From = "lawerp17@gmail.com";
$mail->FromName = "LAW ERP Notifications";

$mail->addAddress("gdeepak8822@gmail.com", "Test mail notification123");

//$mail->isHTML(true);

$mail->Subject = "Subject Text";
$mail->Body = "test";
//$mail->AltBody = "This is the plain text version of the email content";

if(!$mail->send()) 
{
    echo "Mailer Error: " . $mail->ErrorInfo;
} 
else 
{
    echo "Message has been sent successfully";
}