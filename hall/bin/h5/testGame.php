<?php
	function createNonceStr($length = 16) {
	    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	    $str=null;
	    for ($i = 0; $i < $length; $i++) {
	      $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
	    }
	    return $str;
	}
		
?>
<!DOCTYPE html>
<html>
	<frameset rows="*,*">
		<frameset cols="*,*">
			<frame src=<?php echo "http://beta.bestpinzheng.com/h5/index_66.php?openid=".$_GET['openid']."1";?> />
			<frame src=<?php echo "http://beta.bestpinzheng.com/h5/index_66.php?openid=".$_GET['openid']."2";?> />
		</frameset>
		<frameset cols="*,*">
			<frame src=<?php echo "http://beta.bestpinzheng.com/h5/index_66.php?openid=".$_GET['openid']."3";?> />
			<frame src=<?php echo "http://beta.bestpinzheng.com/h5/index_66.php?openid=".$_GET['openid']."4";?> />
		</frameset>
	</frameset>

</html>