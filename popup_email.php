<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Load PHPMailer

header('Content-Type: application/json');

// Get data from POST
$name    = $_POST['name'] ?? '';
$email   = $_POST['email'] ?? '';
$phone   = $_POST['phone'] ?? '';
$message = $_POST['message'] ?? '';

if (!$name || !$email || !$phone || !$message) {
    echo json_encode(['status' => 'error', 'message' => 'All fields are required.']);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->SMTPDebug  = SMTP::DEBUG_OFF;
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';      // e.g., smtp.gmail.com
    $mail->SMTPAuth   = true;
    $mail->Username   = 'muthusoftware22@gmail.com';     // Your SMTP email
    $mail->Password   = 'opxu ulev yhbt rger';       // Your SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Or PHPMailer::ENCRYPTION_SMTPS
    $mail->Port       = 587;                         // 587 for TLS, 465 for SSL

    // Recipients
    $mail->setFrom('muthusoftware22@gmail.com', 'Join Form'); // Sender
    $mail->addAddress('pugalselvan04@gmail.com');           // Receiver

    // Content
    $mail->isHTML(true);
    $mail->Subject = "New Join Us Submission";
    $mail->Body    = "
        <h3>Join Us Submission</h3>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Phone:</strong> {$phone}</p>
        <p><strong>Message:</strong><br>{$message}</p>
    ";

    $mail->send();
    echo json_encode(['status' => 'success']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $mail->ErrorInfo]);
}
