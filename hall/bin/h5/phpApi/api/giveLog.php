<?php
date_default_timezone_set('PRC');
require_once "../class/qipaiCommon.php";

$fromDate = $_POST["fromDate"];
$endDate = $_POST['endDate'];
$fromID = $_POST['fromID'];
$condition = $_POST['condition'];
$type = $_POST['type'];
$toID = $_POST['toID'];

$retObj;

$conn = QipaiConfig::getDbConn();
if ($conn->connect_error) {
	$retObj["status"] = 0;
	$retObj["msg"] = "链接失败：" . $conn->connect_error;
	echo json_encode($retObj);
	return;
}

$program_char = "utf8" ;
mysqli_set_charset( $conn , $program_char );

$retArr = array();
if($type == 0){
	if($condition == 0){//全部
		$result = mysqli_query($conn,"SELECT id,to_uid,card_num,created_at,payed FROM user_give WHERE from_uid=$fromID AND created_at between '$fromDate' and '$endDate' ORDER BY created_at DESC");
	}else if($condition == 1){//未付款
		$result = mysqli_query($conn,"SELECT id,to_uid,card_num,created_at,payed FROM user_give WHERE from_uid=$fromID AND payed='0' AND created_at between  '$fromDate' and '$endDate' ORDER BY created_at DESC");
	}else if($condition == 2){//已付款
		$result = mysqli_query($conn,"SELECT id,to_uid,card_num,created_at,payed FROM user_give WHERE from_uid=$fromID AND payed='1' AND created_at between  '$fromDate' and '$endDate' ORDER BY created_at DESC");
	}
}
else {
	if($condition == 0){//全部
		$result = mysqli_query($conn,"SELECT id,to_uid,card_num,created_at,payed FROM user_give WHERE from_uid=$fromID AND to_uid=$toID AND created_at between '$fromDate' and '$endDate' ORDER BY created_at DESC");
	}else if($condition == 1){//未付款
		$result = mysqli_query($conn,"SELECT id,to_uid,card_num,created_at,payed FROM user_give WHERE from_uid=$fromID AND to_uid=$toID AND payed='0' AND created_at between  '$fromDate' and '$endDate' ORDER BY created_at DESC");
	}else if($condition == 2){//已付款
		$result = mysqli_query($conn,"SELECT id,to_uid,card_num,created_at,payed FROM user_give WHERE from_uid=$fromID AND to_uid=$toID AND payed='1' AND created_at between  '$fromDate' and '$endDate' ORDER BY created_at DESC");
	}
}


if ($result && $result->num_rows > 0) {
	$idx = 0;
	while($row = mysqli_fetch_array($result)){
		$retArr[$idx] = array("to_uid"=>$row["to_uid"],"card_num"=>$row["card_num"],"created_at"=>$row["created_at"],"payed"=>$row["payed"],"id"=>$row["id"]);
		$to_uid = $row["to_uid"];
		
		$tempRut = mysqli_query($conn,"SELECT icon,level,nick_name FROM users WHERE id=$to_uid");
		if ($tempRut->num_rows > 0) {
			while($row1 = mysqli_fetch_array($tempRut)){
				//$retArr[$idx]["id"] = $row1["id"];
				$retArr[$idx]["icon"] = $row1["icon"];
				$retArr[$idx]["level"] = $row1["level"];
				$retArr[$idx]["nick_name"] = $row1["nick_name"];
			}	
		}
		$idx ++;
	}
	$retObj["status"] = 1;
	$retObj["msg"] = "获取成功！";
	$retObj["data"] = $retArr;//json_encode($retArr);
	echo json_encode($retObj);
}else {
	$retObj["status"] = 1;
	$retObj["msg"] = "获取成功！";
	$retObj["data"] = $retArr;//json_encode($retArr);
	echo json_encode($retObj);
}

mysqli_close($conn);
?>