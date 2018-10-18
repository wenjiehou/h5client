<?php
date_default_timezone_set('PRC');
require_once "../class/qipaiCommon.php";

$id = $_POST["id"];
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
$result = mysqli_query($conn,"UPDATE user_give SET payed = '1' WHERE id=$id");
if($result){
	$retObj["status"] = 1;
	$retObj["msg"] = "标记成功！";
	$retObj["payed"] = 1;
	echo json_encode($retObj);
	
}
mysqli_close($conn);

?>
