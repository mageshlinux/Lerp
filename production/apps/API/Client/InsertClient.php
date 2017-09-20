<?php

require_once '../../../../dbconfig.php';

if($_POST)
{
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
    $clienttype=$_POST['clienttype'];

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

        $stmt = $db_con->prepare("select * from client where clientname=:clientname");
        $stmt->execute(array(":clientname"=>$clientname));
        $count = $stmt->rowCount();

        if($count==0){

            $stmt = $db_con->prepare("INSERT INTO client (CLIENTNAME, PHNO, ADDRESS, CASETYPE, ATTACHMENT, TOTALAMOUNT, PAIDAMOUNT, BALANCEAMOUNT, CASESTAGE, HEARINGDATE,TYPECLIENT) VALUES(:clientname, :clientphno, :clientaddress, :clientcasetype, :content, :clienttotalamount, :clientpaidamount, :clientbalamount, :clientcasestage, :clienthearingdate,:clienttype)");
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

            if($stmt->execute())
            {
                echo "registered";
            }
            else
            {
                echo "Query could not execute !";
            }

        }
        else{

            echo "1"; //  not available
        }

    }
    catch(PDOException $e){
        echo $e->getMessage();
    }
}

?>