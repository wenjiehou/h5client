<?php

$msg = file_get_contents("php://input");

$msgData = json_decode($msg);


define("KEY", 742186) ;
$key = $msgData->{'key'};
$openid = $msgData->{'open_id'};
$addDiamond = $msgData->{"addDiamond"};

$retObj;

if(empty($key))
{
	$retObj["status"] = 0;
	$retObj["msg"] = "xuyaoyanzheng";
	
	echo json_encode($retObj);
	return ;
}else{
	if(($key>>2)-$addDiamond != KEY){
		
		$retObj["status"] = 0;
		$retObj["msg"] = "yanzheng key budui";
		echo json_encode($retObj);
		return ;
	}
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pzmj";

// 创建连接
$conn = new mysqli($servername, $username, $password,$dbname);



// 检测连接
if ($conn->connect_error) {
	$retObj["status"] = 0;
	$retObj["msg"] = "lianjieshibai: " . $conn->connect_error;
	echo json_encode($retObj);
	return;
}

$result = mysqli_query($conn,"SELECT diamond FROM users WHERE open_id='$openid'");

if ($result->num_rows > 0) {
	while($row = mysqli_fetch_array($result))
	{
		$diamond = $row["diamond"];
	}
	
	$diamond += $addDiamond;
	
	mysqli_query($conn,"UPDATE users SET diamond=$diamond WHERE open_id='$openid'");
}
else{
	
	$retObj["status"] = 0;
	$retObj["msg"] = "yonghubucunzai";
	echo json_encode($retObj);
	
	echo "yonghubucunzai";
}

mysqli_close($conn);
$retObj["status"] = 1;
$retObj["msg"] = "success";
echo json_encode($retObj);


?>