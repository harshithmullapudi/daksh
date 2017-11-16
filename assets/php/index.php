    <?php
    // include autoloader
$emails = $_GET["email"];
$name = $_GET["name"];
$events = $_GET["events"];
$mobno = $_GET["mobilenum"];
$id = $_GET["id"];
    require_once('PHPMailer-master/class.phpmailer.php');
     $email = new PHPMailer();
    $email->From      = 'DAKSH';
    $email->FromName  = 'DAKSH';
$sub = '';
$sub .= "Daksh-";
$sub .= $id;
    $email->Subject   = $sub;
    $email->Body      ='Hello please check below for details regarding registered events';
    $email->AddAddress($emails);
    $email->AddAddress("harshithmullapudi@gmail.com");
    $email->AddAttachment('outreach.pdf' );
    $email->Send();

    ?>	