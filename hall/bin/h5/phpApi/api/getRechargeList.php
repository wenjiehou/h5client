<?php

$url = "http://www.unaive.com/diamond";
echo httpGet($url);

function httpGet($url) {
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

?>