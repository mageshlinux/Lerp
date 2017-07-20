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

    echo (date_create("19/JULY/2017"));

    try
    {

        $stmt = $db_con->prepare("select * from client where clientname=:clientname");
        $stmt->execute(array(":clientname"=>$clientname));
        $count = $stmt->rowCount();

        if($count==0){

            $stmt = $db_con->prepare("INSERT INTO client (CLIENTNAME, PHNO, ADDRESS, CASETYPE, ATTACHMENT, TOTALAMOUNT, PAIDAMOUNT, BALANCEAMOUNT, CASESTAGE, HEARINGDATE) VALUES(:clientname, :clientphno, :clientaddress, :clientcasetype, 0x44454D4F, :clienttotalamount, :clientpaidamount, :clientbalamount, :clientcasestage, :clienthearingdate)");
            $stmt->bindParam(":clientname",$clientname);
            $stmt->bindParam(":clientphno",$clientphno);
            $stmt->bindParam(":clientaddress",$clientaddress);
            $stmt->bindParam(":clientcasetype",$clientcasetype);
            $stmt->bindParam(":clienttotalamount",$clienttotalamount);
            $stmt->bindParam(":clientpaidamount",$clientpaidamount);
            $stmt->bindParam(":clientbalamount",$clientbalamount);
            $stmt->bindParam(":clientcasestage",$clientcasestage);
            $stmt->bindParam(":clienthearingdate",$clienthearingdate);

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