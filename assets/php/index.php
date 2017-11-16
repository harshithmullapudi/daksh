<?php
// include autoloader
$emails = $_GET["email"];
$name = $_GET["name"];
$events = $_GET["events"];
$mobno = $_GET["mobilenum"];
$id = $_GET["id"];
require_once('PHPMailer/class.phpmailer.php');
// include autoloader
$mail = new PHPMailer();
//Set who the message is to be sent from
//$mail->setFrom('harshithmullapudi@gmail.com', 'Daksh',0);
//Set who the message is to be sent to
$mail->addAddress($emails, $name);
//Set the subject line
$mail->Subject = 'Daksh';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->Body = "Please check the attached pdf.";
//Replace the plain text body with one created manually
$mail->AltBody = 'This is regarding details of outreach programs in Daksh';
//Attach an image file
$mail->addAttachment('outreach.pdf');
//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}


?>