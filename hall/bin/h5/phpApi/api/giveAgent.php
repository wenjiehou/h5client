<?php
date_default_timezone_set('PRC');
require_once "../class/qipaiCommon.php";

$from = $_POST["from_uid"];
$to = $_POST['to_uid'];
$cardNum = $_POST['card_num'];

$retObj;

if($from == $to)
{
	$retObj["status"] = 0;
	$retObj["msg"] = "不能给自己送房卡";
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

$frut = mysqli_query($conn,"SELECT diamond,level FROM users WHERE id=$from");
$trut = mysqli_query($conn,"SELECT diamond,level FROM users WHERE id=$to");
$from_diamond = 0;
$from_level = -1;
$to_diamond = 0;
$to_level = -1;
if ($frut->num_rows > 0 && $trut->num_rows > 0) {
	while($row = mysqli_fetch_array($frut))
	{
		$from_diamond = $row["diamond"];
		$from_level = $row["level"];
	}
	
	while($row1 = mysqli_fetch_array($trut))
	{
		$to_level = $row1["level"];
		$to_diamond = $row1["diamond"];
	}
	if($from_level == 1){//这个是管理员，随便发
		mysqli_query($conn,"BEGIN");
		$now = date("Y-m-d H:i:s",time());
		
		$insertRt = mysqli_query($conn,"INSERT INTO user_give (from_uid,to_uid,card_num,created_at,payed)
				VALUES('$from', '$to','$cardNum','$now','0')");
		if($insertRt == false){
			echo "赠送失败". $conn->error;
		}
		
		$newDiamond = $to_diamond + $cardNum;
		$to_result = mysqli_query($conn,"UPDATE users SET diamond = $newDiamond WHERE id=$to");
		if($insertRt && $to_result){
			
			mysqli_query($conn,"COMMIT");
			$retObj["status"] = 1;
			$retObj["msg"] = "赠送成功，房卡数量：".$cardNum;
			$retObj["addDiamond"] = $cardNum;//赠送的房卡数量
			$retObj["to_uid"] = $to;
			$retObj["selfDiamond"] = $from_diamond;//自己剩余的房卡数量
			echo json_encode($retObj);
			mysqli_close($conn);
			return;
		}else{
			mysqli_query($conn,"ROLLBACK");
			$retObj["status"] = 0;
			$retObj["msg"] = "赠送失败". $conn->error;
			echo json_encode($retObj);
			mysqli_close($conn);
			return;
		}
	}else {//不是管理员 赠送的要比被赠送的高级
		if(QipaiConfig::checkLvBigger($from_level, $to_level) == true){//要有权力去送
			
			if($from_diamond >= $cardNum){//要有足够的剩余房卡可以送
				mysqli_query($conn,"BEGIN");
				$now = date("Y-m-d H:i:s",time());
				$insertRt = mysqli_query($conn,"INSERT INTO user_give (from_uid,to_uid,card_num,created_at,payed)
						VALUES('$from', '$to','$cardNum','$now','0')");
				$parentNewDiamond = $from_diamond - $cardNum;
				$from_result = mysqli_query($conn,"UPDATE users SET diamond = $parentNewDiamond WHERE id=$from");
				
				$newDiamond = $to_diamond + $cardNum;
				$to_result = mysqli_query($conn,"UPDATE users SET diamond = $newDiamond WHERE id=$to");
				if($insertRt && $from_result && $to_result){
						
					mysqli_query($conn,"COMMIT");
					$retObj["status"] = 1;
					$retObj["msg"] = "赠送成功，房卡数量：".$cardNum;
					$retObj["addDiamond"] = $cardNum;//赠送的房卡数量
					$retObj["to_uid"] = $to;
					$retObj["selfDiamond"] = $parentNewDiamond;//自己剩余的房卡数量
					echo json_encode($retObj);
					mysqli_close($conn);
					return;
				}else{
					mysqli_query($conn,"ROLLBACK");
					$retObj["status"] = 0;
					$retObj["msg"] = "赠送失败55";
					echo json_encode($retObj);
					mysqli_close($conn);
					return;
				}
			}
			else {
				$retObj["status"] = 0;
				$retObj["msg"] = "赠送失败";
				echo json_encode($retObj);
				mysqli_close($conn);
				return;
			}
		}
	}
}

$retObj["status"] = 0;
$retObj["msg"] = "赠送失败";
echo json_encode($retObj);

mysqli_close($conn);




?>