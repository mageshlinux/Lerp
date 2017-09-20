<?php
/**
 * Created by PhpStorm.
 * User: Deepak
 * Date: 9/20/2017
 * Time: 2:40 PM
 */
require_once '../../../../dbconfig.php';
try {
    if ($_POST) {
        $qquery = $_POST['stmt'];

        $q = $db_con->prepare($qquery);
        $q->execute(array());

        if ($q->rowCount() > 0) {
            $check = $q->fetchAll(PDO::FETCH_ASSOC);
            //$row_id = $check['id'];
            // do something
            echo json_encode($check);
        } else {
            echo 0;
        }

    }
}
catch(Exception $e)
{
    echo $e;
}
?>