<?php
  $host = "localhost";
  $username = "root";
  $password = "";
  $dbname = "db_checkbox";

  try {
	  $db = new PDO("mysql:host={$host};dbname={$dbname}", $username, $password);
	  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $exception){
	  die("Connection error: " . $exception->getMessage());
  }
?>