<?php
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Only POST requests are allowed.'
    ]);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    $data = $_POST;
}

function clean_input($value) {
    return trim(filter_var((string) $value, FILTER_SANITIZE_FULL_SPECIAL_CHARS));
}

$name = clean_input($data['name'] ?? '');
$email = filter_var(trim((string) ($data['email'] ?? '')), FILTER_SANITIZE_EMAIL);
$service = clean_input($data['service'] ?? '');
$message = clean_input($data['message'] ?? '');

if ($name === '' || $email === '' || $service === '' || $message === '') {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please complete all required fields.'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please enter a valid email address.'
    ]);
    exit;
}

$to = 'nesar.uddin100@gmail.com';
$subject = 'New Portfolio Contact Request';

$body = "New portfolio contact request\n\n";
$body .= "Name: {$name}\n";
$body .= "Email: {$email}\n";
$body .= "Service: {$service}\n\n";
$body .= "Message:\n{$message}\n";

$headers = [
    'From: Portfolio Website <no-reply@' . ($_SERVER['SERVER_NAME'] ?? 'localhost') . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion()
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Email could not be sent. Please try again later.'
    ]);
    exit;
}

echo json_encode([
    'success' => true,
    'message' => 'Email sent successfully.'
]);
