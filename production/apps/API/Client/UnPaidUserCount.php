<?php
/**
 * Created by PhpStorm.
 * User: Deepak
 * Date: 9/19/2017
 * Time: 2:57 PM
 */
require_once '../../../../dbconfig.php';
$stmt = $db_con->prepare("select * from client where balanceamount<>0 and clientid<>-1");
$stmt->execute();
$count = $stmt->rowCount();
echo $count;
?>