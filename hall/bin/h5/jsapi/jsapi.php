<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx4689b58c3d6f9cd6", "b3d5574df75d760844c11f51d8b9017b");
$signPackage = $jssdk->GetSignPackage();
echo json_encode($signPackage);

?>