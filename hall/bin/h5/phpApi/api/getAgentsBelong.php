<?php
//获取玩家的下属
//header("Content-Type:text/html;charset=UTF-8");
date_default_timezone_set('PRC');
require_once "../class/qipaiCommon.php";

$target = $_POST['target_uid'];
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

$result = mysqli_query($conn,"SELECT id,icon,level,nick_name FROM users WHERE parent_uid=$target");
if ($result->num_rows > 0) {
	$idx = 0;
	while($row = mysqli_fetch_array($result))
	{
		$to_uid = $row["id"];
		$add_card_num = 0;
		$retArr[$idx] = array("id"=>$row["id"],"icon"=>$row["icon"],"nick_name"=>$row["nick_name"],"level"=>$row["level"]);
		$tempRut = mysqli_query($conn,"SELECT card_num FROM user_give WHERE from_uid=$target AND to_uid=$to_uid");
		if ($tempRut->num_rows > 0) {
			while($row1 = mysqli_fetch_array($tempRut))
			{
				$add_card_num += $row1["card_num"];
			}
		}
		$retArr[$idx]["add_card_num"] = $add_card_num;
		$idx ++;
	}
	
	$retObj["status"] = 1;
	$retObj["msg"] = "获取成功！";
	$retObj["data"] = $retArr;//json_encode($retArr);
	echo json_encode($retObj);
}

mysqli_close($conn);


?>