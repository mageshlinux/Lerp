<?php
/**
 * Created by PhpStorm.
 * User: Deepak
 * Date: 9/18/2017
 * Time: 12:57 PM
 */
require_once '../../../../dbconfig.php';
$stmt = $db_con->prepare("select * from client where clientid<>-1");
$stmt->execute();
$count = $stmt->rowCount();
echo $count;
?>