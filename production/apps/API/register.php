<?php

require_once '../../../dbconfig.php';

	if($_POST)
	{
		$UserName = $_POST['UserName'];
		$UserMail = $_POST['UserMail'];
		//$Password = $_POST['Password'];
        $UserMobile = $_POST['UserMobile'];
		
		$password = md5($_POST['Password']);
		
		try
		{	
		
			$stmt = $db_con->prepare("select * from user where mail=:email");
			$stmt->execute(array(":email"=>$UserMail));
			$count = $stmt->rowCount();
			
			if($count==0){
				
			$stmt = $db_con->prepare("INSERT INTO user (USERNAME, PASSWORD, MAIL, PHONE) VALUES(:uname, :pass, :email, :UserMobile)");
			$stmt->bindParam(":uname",$UserName);
			$stmt->bindParam(":email",$UserMail);
			$stmt->bindParam(":pass",$password);
			$stmt->bindParam(":UserMobile",$UserMobile);
					
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