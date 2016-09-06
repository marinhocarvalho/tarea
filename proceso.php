<?php 


$nombre = $_GET['nombre'];
$apellido = $_GET['apellido'];
$ci = $_GET['ci'];
$resultado ='{
	"nombre" :'+ $nombre+',
	"apellido":'+$apellido+',
	"ci":'+$ci+'
}';
echo json_encode($resultado);
?>