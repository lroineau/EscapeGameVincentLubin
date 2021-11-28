<?php
$link = mysqli_connect('localhost', 'root', '','odyssee');

mysqli_set_charset($link,"utf8");
if (!$link) {
  die('Erreur de connexion');
} 

?>
