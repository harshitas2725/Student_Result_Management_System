<?php
include 'config.php';

$data = json_decode(file_get_contents('php://input'), true);

$userId = $data['userId'];
$name = $data['name'];

$sql = "INSERT INTO subjects (user_id, name) VALUES ('$userId', '$name')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['message' => 'Subject added successfully']);
} else {
    echo json_encode(['error' => 'Error: ' . $conn->error]);
}
?>