<?php 
require_once "jsapi/OAth.php";
?>

<html>
<head >
	<meta charset='utf-8' http-equiv="cache-control" content="no-cache"/>
	<title>测试-一乐麻将</title>
	<meta name='viewport' content='width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'/>
	<meta name='apple-mobile-web-app-capable' content='yes' />
	<meta name='full-screen' content='true' />
	<meta name='screen-orientation' content='portrait' />
	<meta name='x5-fullscreen' content='true' />
	<meta name='360-fullscreen' content='true' />
	<meta http-equiv='expires' content='0' />
	<meta name='laya' logoimg='logo.png' logobkcolor='#ffffff' screenorientation='landscape' cacheid='fffffffff' />
</head>
<body style='margin:0;overflow:none;overflow-x:hidden;overflow-y:hidden;background-color: #002640;'>
<div id="displayScreen" style="width: 100%;position: absolute;top: 22%;left: 32%;display: none;">
	<img src="Screen.png" width="40%" />
</div>
<!-- <script type="text/javascript" src="libs/long.min.js" loader='laya'></script>
<script type="text/javascript" src="libs/bytebuffer.min.js" loader='laya'></script> -->
<script type="text/javascript" src="libs/hex_sha1.js" loader='laya'></script>
<script type="text/javascript" src="libs/protobuf.min.3.2.0.js" loader='laya'></script>
<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js" loader='laya'></script>
<!-- <script type="text/javascript" src="libs/qrcode.min.js" loader='laya'></script> -->
<script type="text/javascript"> 

    var isNewHall=false;
    var debug = true;
	var autoPlay = false;
	var autoDestory = false;
	var autoJoin = false;
	var version = "657";

	
	//var serverIp = "xs.bestpinzheng.com";
	//var serverIp = "192.168.18.133";
	//var serverIp = "192.168.18.163";
    //var serverIp = "192.168.18.182";
	var serverIp = "192.168.18.173";
	
    var wxInfo=<?php echo json_encode(initTest()); //echo json_encode(initGoto());//?>;
    // var cargoList =[
	    // {"id":1,"diamond":100,"odiamond":100,"title":"","price":100,"discount":100},
	    // {"id":2,"diamond":1100,"odiamond":1000,"title":"100\u94bb\u77f3","price":1000,"discount":90.91},
	    // {"id":3,"diamond":5800,"odiamond":5000,"title":"800\u94bb\u77f3","price":5000,"discount":86.21},
	    // {"id":4,"diamond":12000,"odiamond":10000,"title":"2000\u94bb\u77f3","price":10000,"discount":83.33},
	    // {"id":2,"diamond":1100,"odiamond":1000,"title":"100\u94bb\u77f3","price":1000,"discount":90.91},
	    // {"id":3,"diamond":5800,"odiamond":5000,"title":"800\u94bb\u77f3","price":5000,"discount":86.21},
	    // {"id":4,"diamond":12000,"odiamond":10000,"title":"2000\u94bb\u77f3","price":10000,"discount":83.33},
	    // {"id":2,"diamond":1100,"odiamond":1000,"title":"100\u94bb\u77f3","price":1000,"discount":90.91},
	    // {"id":3,"diamond":5800,"odiamond":5000,"title":"800\u94bb\u77f3","price":5000,"discount":86.21},
	    // {"id":4,"diamond":12000,"odiamond":10000,"title":"2000\u94bb\u77f3","price":10000,"discount":83.33},
	    // {"id":5,"diamond":66000,"odiamond":50000,"title":"16000\u94bb\u77f3","price":50000,"discount":75.76}
    // ]
</script>
<!--<script src='Main.max.min.js' loader='laya'></script>-->
<script src='Main.max.js?v=1.0.657' loader='laya'></script>
<!-- <script type="text/javascript" src="libs/zlib.min.js" loader='laya'></script> -->
</body>
</html>
