<?php
/**
 * Created by PhpStorm.
 * User: Deepak
 * Date: 7/19/2017
 * Time: 12:44 PM
 */

require_once '../../../../dbconfig.php';

if($_POST)
{
    $clientid=$_POST['ClientId'];


    try
    {



        $stmt = $db_con->prepare("delete from client where clientid=:clientid");
        $stmt->bindParam(":clientid",$clientid);

        if($stmt->execute())
        {
            echo "Deleted";
        }
        else
        {
            echo "Query could not execute !";
        }




    }
    catch(PDOException $e){
        echo $e->getMessage();
    }
}

?>