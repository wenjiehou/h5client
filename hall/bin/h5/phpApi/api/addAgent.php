<?php
date_default_timezone_set('PRC');
require_once "../class/qipaiCommon.php";

$parent = $_POST["parent_uid"];
$target = $_POST['target_uid'];
$level = $_POST['level'];



$retObj;
if($level >3 || $level < 0){
	$retObj["status"] = 0;
	$retObj["msg"] = "数据有误";
	echo json_encode($retObj);
	return;
}

if($target == $parent)
{
	$retObj["status"] = 0;
	$retObj["msg"] = "不能添加自己";
	echo json_encode($retObj);
	return;
}

$conn = QipaiConfig::getDbConn();


if ($conn->connect_error) {
	$retObj["status"] = 0;
	$retObj["msg"] = "链接失败：" . $conn->connect_error;
	echo json_encode($retObj);
	return;
}

$program_char = "utf8" ;
mysqli_set_charset( $conn , $program_char );

$result = mysqli_query($conn,"SELECT level FROM users WHERE id=$parent");
$target_result = mysqli_query($conn,"SELECT parent_uid,level FROM users WHERE id=$target");
$parent_level = -1;
$target_level = -1;
$target_parent = -1;
if ($result->num_rows > 0 && $target_result->num_rows > 0) {
	
	while($row = mysqli_fetch_array($result))
	{
		$parent_level = $row["level"];
	}
	
	while($row1 = mysqli_fetch_array($target_result))
	{
		$target_level = $row1["level"];
		$target_parent = $row1["parent_uid"];
	}
	
	if($target_level != 0 && $target_level <= $parent_level){
		$retObj["status"] = 0;
		$retObj["msg"] = "你没有权限添加该玩家！";
		echo json_encode($retObj);
		mysqli_close($conn);
		return;
	}else if($target_parent !=0 && $target_level != 0&& $target_parent != $parent){
		$retObj["status"] = 0;
		$retObj["msg"] = "你没有权限添加该玩家！";
		echo json_encode($retObj);
		mysqli_close($conn);
		return;
	}
	
	
	if($parent_level != -1){
		if($parent_level == 0){//
			$retObj["status"] = 0;
			$retObj["msg"] = "you dont have permission!! parent_level::0";
			echo json_encode($retObj);
		}else{
			if($level != 0 && $level <= $parent_level){
				$retObj["status"] = 0;
				$retObj["msg"] = "you dont have permission!! parent_level >= level";
				echo json_encode($retObj);
			}else{//
				$now = date("Y-m-d H:i:s",time());
				$rt = mysqli_query($conn,"UPDATE users SET parent_uid = $parent,
						updated_at='$now',
						level = $level WHERE id=$target");
					
				if($rt == true)
				{
					if($level == 0){//目标被改成了普通玩家，他的孩子们全都变成普通玩家
						$target_result = mysqli_query($conn,"UPDATE users SET parent_uid = 0,
						updated_at='$now',
						level = 0 WHERE parent_uid=$target");
					}
					
					$retObj["status"] = 1;
					$retObj["msg"] = "添加成功！";
					echo json_encode($retObj);
				}
				else {
					$retObj["status"] = 0;
					$retObj["msg"] = "添加失败：" . $conn->error;
					echo json_encode($retObj);
				}
			}
		
		}
	}else{
		$retObj["status"] = 0;
		$retObj["msg"] = "添加失败：您的信息不存在";
		echo json_encode($retObj);
	}
}
else{
	$retObj["status"] = 0;
	$retObj["msg"] = "添加失败：信息有误，请核对";
	echo json_encode($retObj);
}

mysqli_close($conn);



?>
