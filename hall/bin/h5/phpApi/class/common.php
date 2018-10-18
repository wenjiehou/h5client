<?php
class Config{
	const APPID = 'wx64d51c1190afff1c';//'wxd72030e212e8c12f';
	const SECRET = 'e8012cd29e2dfe6c4cb67fc9dbbfcd74';//'764d7d3a49900c3d663ee506fc6ab8f0';
	
	const sqlServer = 'localhost';
	const sqlUser = 'root';
	const sqlPassword = '';
	const sqlDbname = 'wxxiaochengxu';
	
	static function getDbConn(){
		return new mysqli(Config::sqlServer, Config::sqlUser, Config::sqlPassword,Config::sqlDbname);
	}
	
	
	function __construct(){
		
	}
	function __destruct(){
		
	}
	
}

class CommonTool{
	public function __construct(){
		
	}
	
	function __destruct() {
		
	}
	
	public static function httpGet($url) {
		$curl = curl_init();
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($curl, CURLOPT_TIMEOUT, 500);
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
		curl_setopt($curl, CURLOPT_URL, $url);
	
		$res = curl_exec($curl);
		curl_close($curl);
	
		return $res;
	}
	
	/**
	 * PHP发送Json对象数据
	 * @param $url 请求url
	 * @param $jsonStr 发送的json字符串
	 * @return array
	 */
	public static function http_post_json($url, $jsonStr)
	{
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonStr);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array(
				'Content-Type: application/json; charset=utf-8',
				'Content-Length: ' . strlen($jsonStr)
		)
				);
		$response = curl_exec($ch);
		$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
		curl_close($ch);
		return array($httpCode, $response);
	}
	
	
}







?>