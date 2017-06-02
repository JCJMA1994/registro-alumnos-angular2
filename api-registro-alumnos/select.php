<?php
include "db.php";
$sql = "SELECT * FROM alumnos ORDER BY id DESC";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
     $data = array() ;
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode(['status' => true, 'data' => $data]);
} else {
    echo json_encode(['status' => false]);
}
$conn->close();
?>