<?php
/**
 * Created by PhpStorm.
 * User: Deepak
 * Date: 7/19/2017
 * Time: 12:43 PM
 */



require_once '../../../../dbconfig.php';

if($_POST)
{
    $clientid=$_POST['ClientId'];
    $clientname = $_POST['clientname'];
    $clientphno = $_POST['clientphno'];
    $clientaddress = $_POST['clientaddress'];
    $clientcasetype = $_POST['clientcasetype'];
    $clienttotalamount = $_POST['clienttotalamount'];
    $clientpaidamount = $_POST['clientpaidamount'];
    $clientbalamount = $_POST['clientbalamount'];
    $clientcasestage = $_POST['clientcasestage'];
    $clienthearingdate = $_POST['clienthearingdate'];
    $clienthearingdate=str_replace("/","-",$clienthearingdate);
    $date=date_create($clienthearingdate);
    $clienthearingdate= date_format($date,"Y/m/d H:i:s");
    $clienttype = $_POST['clienttype'];
    /*$fileName = $_FILES['Attach']['name'];
    $tmpName  = $_FILES['Attach']['tmp_name'];
    $fileSize = $_FILES['Attach']['size'];
    $fileType = $_FILES['Attach']['type'];

    $fp      = fopen($tmpName, 'r');
    $content = fread($fp, filesize($tmpName));
    $content = addslashes($content);
    fclose($fp);*/
    $content="xxxx";

    //echo (date_create("19/JULY/2017"));

    try
    {



            $stmt = $db_con->prepare("update client set CLIENTNAME=:clientname, PHNO=:clientphno, ADDRESS=:clientaddress, CASETYPE=:clientcasetype, ATTACHMENT=:content, TOTALAMOUNT=:clienttotalamount, PAIDAMOUNT=:clientpaidamount, BALANCEAMOUNT=:clientbalamount, CASESTAGE=:clientcasestage, HEARINGDATE=:clienthearingdate ,TYPECLIENT=:clienttype where clientid=:clientid ");
            $stmt->bindParam(":clientname",$clientname);
            $stmt->bindParam(":clientphno",$clientphno);
            $stmt->bindParam(":clientaddress",$clientaddress);
            $stmt->bindParam(":clientcasetype",$clientcasetype);
            $stmt->bindParam(":clienttotalamount",$clienttotalamount);
            $stmt->bindParam(":clientpaidamount",$clientpaidamount);
            $stmt->bindParam(":clientbalamount",$clientbalamount);
            $stmt->bindParam(":clientcasestage",$clientcasestage);
            $stmt->bindParam(":content",$content);
            $stmt->bindParam(":clienthearingdate",$clienthearingdate);
        $stmt->bindParam(":clienttype",$clienttype);
        $stmt->bindParam(":clientid",$clientid);

            if($stmt->execute())
            {
                echo "Updated";
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