<?php

date_default_timezone_set('PRC');

require_once "../class/common.php";
$appid = Config::APPID;
$secret = Config::SECRET;
$code = $_GET["code"];
$url = "https://api.weixin.qq.com/sns/jscode2session?appid=$appid&secret=$secret&js_code=$code&grant_type=authorization_code";


$result = json_decode(CommonTool::httpGet($url));//session_key expires_in openid
$openid = $result->openid;
$session_key = $result->session_key;


$conn = Config::getDbConn();

$retObj;

if ($conn->connect_error) {
	$retObj["status"] = 0;
	$retObj["msg"] = "lianjieshibai: " . $conn->connect_error;
	echo json_encode($retObj);
	return;
}

$result = mysqli_query($conn,"SELECT * FROM user WHERE openid='$openid'");

if ($result->num_rows > 0) {//
	$now = date("Y-m-d H:i:s",time());
	$rt = mysqli_query($conn,"UPDATE user SET session_key='$session_key',updateTime='$now' WHERE openid='$openid'");
	if($rt == true)
	{
		$retObj["status"] = 1;
		$retObj["msg"] = "success";
		$retObj["openid"] = $openid;
		echo json_encode($retObj);
	}
	else {
		$retObj["status"] = 0;
		$retObj["msg"] = "更新失败: " . $conn->error;
		echo json_encode($retObj);
	}
}
else{
	$now = date("Y-m-d H:i:s",time());
	$insertRt = mysqli_query($conn,"INSERT INTO user (openid,session_key,createTime)
			VALUES('$openid', '$session_key','$now')");
	if($insertRt == true){
		$retObj["status"] = 1;
		$retObj["msg"] = "success";
		$retObj["openid"] = $openid;
		echo json_encode($retObj);
	}else {
		$retObj["status"] = 0;
		$retObj["msg"] = "插入失败: " . $conn->error;
		echo json_encode($retObj);
	}
}

mysqli_close($conn);



?>