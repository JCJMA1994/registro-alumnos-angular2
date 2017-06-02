<?php
$data = json_decode($_POST['json']);
include "db.php";

$sql = "UPDATE alumnos SET
numero_control ='$data->numero_control', semestre ='$data->semestre', grupo ='$data->grupo', categoria ='$data->categoria', nombres ='$data->nombres', apellido_paterno ='$data->apellido_paterno', apellido_materno ='$data->apellido_materno', correo_electronico ='$data->correo_electronico', telefono ='$data->telefono', sexo ='$data->sexo'
WHERE id = $data->id ";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['status' => true]);
} else {
    echo json_encode(['status' => false]);
}
$conn->close();
?>
