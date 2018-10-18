<?php 
//引入核心库文件
include "phpqrcode.php";
//定义纠错级别
$errorLevel = "L";
//定义生成图片宽度和高度;默认为3
$size = "10";

//生成网址类型
$content = $_GET['urll'];
QRcode::png($content, false, $errorLevel, $size,1);

?>