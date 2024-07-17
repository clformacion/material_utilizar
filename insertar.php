<?php
ob_start();
require_once 'config.php';
if(isset($_POST['guardar'])){
  $nombres = htmlentities($_POST['nombres']);
  $apellidos = htmlentities($_POST['apellidos']);
  $pais = htmlentities($_POST['pais']);
  $programas = addslashes(implode(", ", $_POST['programas']));

  $query = $db->prepare("INSERT INTO `personal`(`nombres`, `apellidos`, `pais`, `programas`)
  VALUES (:nombres,:apellidos,:pais,:programas)");
  $query->bindParam(":nombres", $nombres);
  $query->bindParam(":apellidos", $apellidos);
  $query->bindParam(":pais", $pais);
  $query->bindParam(":programas", $programas);
  $query->execute();
  header("location: index.php");		
	}
?>