<?php
$data = json_decode($_POST['json']);

include "db.php";
$sql = "INSERT INTO alumnos (numero_control, semestre, grupo, categoria, nombres, apellido_paterno, apellido_materno, correo_electronico, telefono, sexo)
VALUES ('$data->numero_control', '$data->semestre', '$data->grupo', '$data->categoria', '$data->nombres', '$data->apellido_paterno', '$data->apellido_materno', '$data->correo_electronico', '$data->telefono', '$data->sexo')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['status' => true]);
} else {
    echo json_encode(['status' => false]);
}
$conn->close();
?>
