<?php
date_default_timezone_set('PRC');
//$sig = hash_hmac('sha256', $string, $secret)

require_once "../class/common.php";

$openid = $_GET["openid"];
$signature = $_GET["signature"];
$rawData = $_GET["rawData"];

$conn = Config::getDbConn();

$retObj;

if ($conn->connect_error) {
	$retObj["status"] = 0;
	$retObj["msg"] = "lianjieshibai: " . $conn->connect_error;
	echo json_encode($retObj);
	return;
}

$result = mysqli_query($conn,"SELECT session_key FROM user WHERE openid='$openid'");

if ($result->num_rows > 0) {
	while($row = mysqli_fetch_array($result))
	{
		$session_key = $row["session_key"];
	}
	
	$str = $rawData.$session_key;
	$sign = sha1($str);
	
	if($sign == $signature){
		$userInfo = json_decode($_GET["userInfo"]);
		
		$avatarUrl = $userInfo->avatarUrl;//$_GET["avatarUrl"];
		$city = $userInfo->city;//$_GET["city"];
		$country = $userInfo->country;//$_GET["country"];
		$gender = $userInfo->gender;//$_GET["gender"];
		$language = $userInfo->language;//$_GET["language"];
		$nickName = $userInfo->nickName;//$_GET["nickName"];
		$province = $userInfo->province;//$_GET["province"];
		
		
		$now = date("Y-m-d H:i:s",time());
		$rt = mysqli_query($conn,"UPDATE user SET avatarUrl='$avatarUrl',
				city='$city',
				country='$country',
				gender='$gender',
				language='$language',
				nickName='$nickName',
				province='$province',
				updateTime='$now' WHERE openid='$openid'");
		if($rt == true)
		{
			$retObj["status"] = 1;
			$retObj["msg"] = "登录验证成功！success";
			$retObj["signature"] = $signature;
			echo json_encode($retObj);
		}
		else {
			$retObj["status"] = 0;
			$retObj["msg"] = "登录验证失败: " . $conn->error;
			echo json_encode($retObj);
		}
		
	}else {
		$retObj["status"] = 0;
		$retObj["msg"] = "登录验证失败: 签名不正确";
		echo json_encode($retObj);
	}
}


mysqli_close($conn);



?>