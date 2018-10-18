<?php
define('WEB_URL', 'http://beta.bestpinzheng.com');
session_start();

if (empty($_SERVER['HTTP_X_FORWARDED_FOR']) || !in_array($_SERVER['HTTP_X_FORWARDED_FOR'], ['180.173.201.95'])) {
	if (empty($_SERVER['HTTP_X_FOR_REAL_IP']) || !in_array($_SERVER['HTTP_X_FOR_REAL_IP'], ['180.173.201.95'])) {
		echo file_get_contents('weihu.html');
		exit;
	}
}


if (!empty($_GET['openid']) && $_GET['openid'] != $_SESSION['wechat_unionId']) {
    $redirect_uri = WEB_URL . $_SERVER[REQUEST_URI];
    $_SESSION['wechat_devloginBackUrl'] = $redirect_uri;
    header("Location:" . WEB_URL . '/wechat/api/devlogin?unionid=' . $_GET['openid']);
    exit;
}

if (empty($_SESSION['wechat_unionId']) || empty($_SESSION['wechat_userId'])) {
    $redirect_uri = WEB_URL . $_SERVER[REQUEST_URI];
    $_SESSION['wechat_oauthBackUrl'] = $redirect_uri;
    header("Location:" . WEB_URL . '/wechat/api/oauth');
    exit;
}
?>

<html lang="zh">
<head>
	<meta charset='utf-8'/>
	<title>测试-一乐麻将</title>
	<meta name='viewport' content='width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'/>
	<meta name='apple-mobile-web-app-capable' content='yes' />
	<meta name='full-screen' content='true' />
	<meta name='screen-orientation' content='portrait' />
	<meta name='x5-fullscreen' content='true' />
	<meta name='360-fullscreen' content='true' />
	<meta http-equiv='expires' content='0' />
	<meta name='laya' logoimg='logo.png' logobkcolor='#ffffff' screenorientation='landscape' cacheid='fffffffff' />
	<link rel="stylesheet" href="../Public/wechat/css/weui.css"/>
</head>
<body style='margin:0;overflow:none;overflow-x:hidden;overflow-y:hidden;background-color: #002640;'>

<div id="displayScreen" style="width: 100%;position: absolute;top: 10%;left: 32%;display: none;">
	<img src="Screen.png" width="40%" />
	<p style="color: #ffffff;text-align: center;position: absolute;"><br>游戏前请关闭手机的横屏模式<br>（如始终弹出该界面请尝试重启手机）</p>
</div> 
<script type="text/javascript"> 
    var isNewHall=false;	
	var debug=false;  
	var autoPlay = false;
	var autoDestory = false;
	var autoJoin = false;
	var version = "456";
	var serverIp = "106.14.77.66";
	console.log(version)
	var wxInfo=<?php echo json_encode($_SESSION['wechat_login_info']);?>;
	var web_url="http://beta.bestpinzheng.com";

	// var head = document.getElementsByTagName('head').item(0);
	// var script = document.createElement('SCRIPT');
	// if(getGetTarget("openid")==null){
	// 		script.src = '../wechat/api/jsoauth?backurl='+encodeURIComponent(window.location.href.split('#')[0]);
	//     }else{
	// 		script.src = "../wechat/api/jstestoauth?openid="+getGetTarget("openid");
	//     }
	// script.type = "text/javascript";
	// head.appendChild(script);
	// console.log(wxInfo)

	function getGetTarget(name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r!=null){
			return  unescape(r[2]);
		}else{
			return null;
		}
	}
	var roomstr;
	if (getGetTarget("room")!=null) {
		roomstr = getGetTarget("room").split("-");
		changeHistroy((window.location.href+"").split("?")[0]+(getGetTarget("openid")==null?"":"?openid="+getGetTarget("openid")))
	}
	function changeHistroy(url) {
		if (!!(window.history && history.pushState)){
			history.replaceState('', 'title',url );
		}
	}
</script>
<script src="../wechat/api/jscargo"></script>
<script type="text/javascript" src="libs/hex_sha1.js" loader='laya'></script>
<script type="text/javascript" src="libs/protobuf.min.3.2.0.js" loader='laya'></script>
<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js" loader='laya'></script> 
<script type="text/javascript" src="../Public/wechat/js/weui.min.js"></script> 
<script src='Main.max.min.js?v=1.0.456' loader='laya'></script> 
</body>
</html>
