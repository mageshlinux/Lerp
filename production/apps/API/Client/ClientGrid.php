<?php
/**
 * Created by PhpStorm.
 * User: Deepak
 * Date: 9/19/2017
 * Time: 11:00 AM
 */
require_once '../../../../dbconfig.php';




    $q = $db_con->prepare("select * from client where clientid<>-1");
    $q->execute(array());

    if ($q->rowCount() > 0){
        $check = $q->fetchAll(PDO::FETCH_ASSOC);
        //$row_id = $check['id'];
        // do something
        echo json_encode($check);
    }
    else
    {
        echo 0;
    }


?>