<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json'); // Return JSON

require 'vendor/autoload.php';

$name    = $_POST['name'] ?? '';
$email   = $_POST['email'] ?? '';
$subject = $_POST['subject'] ?? 'Website Contact';
$message = $_POST['message'] ?? '';

$mail = new PHPMailer(true);

try {
    // SMTP configuration
    $mail->SMTPDebug  = SMTP::DEBUG_OFF; // Set to DEBUG_SERVER for testing
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'muthusoftware22@gmail.com'; // Gmail
    $mail->Password   = 'opxu ulev yhbt rger';        // Gmail App Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Use SMTPS
    $mail->Port       = 465;

    // Email setup
    $mail->setFrom('muthusoftware22@gmail.com', $name);
    $mail->addAddress('pugalselvan04@gmail.com', 'Rajesh Kumar');

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = "<strong>Name:</strong> $name<br>
                      <strong>Email:</strong> $email<br>
                      <strong>Message:</strong><br>$message";

    $mail->send();

    echo json_encode(['status' => 'success']);
    exit;
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $mail->ErrorInfo]);
    exit;
}
?>
