<?php
/**
 * Created by PhpStorm.
 * User: Deepak
 * Date: 13-07-2017
 * Time: 21:41
 */
require_once '../../../dbconfig.php';

if($_POST) {
    $UserName = $_POST['LogUserName'];
    $password = md5($_POST['LogPassword']);

    $stmt = $db_con->prepare("select * from user where username=:username and password=:password");
    $stmt->execute(array(":email"=>$UserName,":password"=>$password));
    while($row = $stmt->fetch_assoc()){

        $json[] = $row;

    }

    $data['data'] = $json;

    echo json_encode($data);
}
?>