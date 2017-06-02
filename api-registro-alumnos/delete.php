<?php
$data = json_decode($_POST['json']);
include "db.php";

$sql = "DELETE FROM alumnos WHERE id = $data->id";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['status' => true]);
} else {
    echo json_encode(['status' => false]);
}
$conn->close();
?>