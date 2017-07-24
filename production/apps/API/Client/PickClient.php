<?php
/**
 * Created by PhpStorm.
 * User: Deepak
 * Date: 7/19/2017
 * Time: 12:44 PM
 */
require_once '../../../../dbconfig.php';

if($_POST) {
    $clientname = $_POST['clientname'];

    $q = $db_con->prepare("select * from client where clientname=:clientname");
    $q->execute(array(':clientname' => $clientname));

    if ($q->rowCount() > 0){
        $check = $q->fetch(PDO::FETCH_ASSOC);
        //$row_id = $check['id'];
        // do something
        echo json_encode($check);
    }
    else
    {
        echo 0;
    }

}
?>