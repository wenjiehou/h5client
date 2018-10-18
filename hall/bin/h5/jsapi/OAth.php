<?php

$appid="wx4689b58c3d6f9cd6";
$appsecret="b3d5574df75d760844c11f51d8b9017b";
//.$_SERVER['REQUEST_URI'] PHP_SELF
$newurl='http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];

$url="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".$appid."&redirect_uri=".$newurl."&response_type=code&scope=snsapi_userinfo&state=unit#wechat_redirect";


function getOAuthToken($code){
    global $appid;
    global $appsecret;

    //获取token
    $_url_ = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='.$appid.'&secret='.$appsecret.'&code='.$code.'&grant_type=authorization_code';
    $initToken = json_decode(httpGet($_url_));
    setcookie("isNC",false,time()+7000);//有效期7000
    
    $refresh_token=$initToken->refresh_token;

    $getTokenurl="https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=".$appid."&grant_type=refresh_token&refresh_token=".$refresh_token;
    $Token = json_decode(httpGet($getTokenurl));
    $openid=$Token->openid;
    $access_token=$Token->access_token;

    setcookie("TOKEN",$access_token,time()+7000);//有效期7000
    setcookie("OPENID",$openid,time()+2*7*24*3600);//有效期2个星期

    return getUserInfo($access_token,$openid);
}

function getUserInfo($access_token,$openid){
  $url="https://api.weixin.qq.com/sns/userinfo?access_token=".$access_token."&openid=".$openid."&lang=zh_CN";
  $userinfo=json_decode(httpGet($url));


  $nickname=$userinfo->nickname;
  $sex=$userinfo->sex;
  $city=$userinfo->city;
  $province=$userinfo->province;
  $country=$userinfo->country;
  $headimgurl=$userinfo->headimgurl;
  
 

  $returnArray = array(
    'openid' => $openid,
    'token'=>$access_token,
    'nickname'=>$nickname,
    'sex'=>$sex,
    'city'=>$city,
    'province'=>$province,
    'country'=>$country,
    'headimgurl'=>$headimgurl
  );
  return $returnArray;
}

function initTest(){
  $openid;
  if(!empty( $_GET['openid'])){
    $openid = (string)$_GET["openid"];
  }else{
    $openid=createNonceStr(10);
  }
  $returnArray = array(
    'openid' => $openid,
    'token' => ""
	
  );
  return $returnArray;
}

function createNonceStr($length = 16) {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    $str=null;
    for ($i = 0; $i < $length; $i++) {
      $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
    }
    return $str;
  }

function initGoto(){
    if(!empty( $_GET['clear'])){
      clearTest();
      exit();
    }

    if (!empty($_COOKIE['TOKEN']) && !empty($_COOKIE['OPENID']) ){
      $isold = isOld($_COOKIE['TOKEN'],$_COOKIE['OPENID']);
      if($isold == true){
        return ishasCode();
      }else{
        return getUserInfo($_COOKIE['TOKEN'],$_COOKIE['OPENID']);
      }
    }else{
      return ishasCode();
    }
}

function clearTest(){
  setcookie('TOKEN',"",time()-100);
  setcookie('OPENID',"",time()-100);
}


function gotoOAuth(){
    global $url;
    setcookie("isNC",true,time()+7000);
    header('Location:'.$url);
    exit();
}

function ishasCode(){
    if($_GET["code"]==null){
      gotoOAuth();
    }else{
      $code=$_GET["code"];
      if(!empty($_COOKIE['isNC'])){
        $isNewCode = $_COOKIE['isNC'];
        if($isNewCode==true){
          return getOAuthToken($code);//返回的数据
        }else{
          gotoOAuth();
        }
      }else{
        gotoOAuth();
      }
    }
}

function isOld($ACCESS_TOKEN,$OPENID){
    $url="https://api.weixin.qq.com/sns/auth?access_token=".$ACCESS_TOKEN."&openid=".$OPENID;
    $isTokenOld = json_decode(httpGet($url));
    if($isTokenOld->errcode==0){
      return false;//没有过期
    }else{
      return true;//过期了
    }
}

/* function getConfigTicket($ACCESS_TOKEN){ //signature
	if(empty($_COOKIE['TICKET'])){
		$url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=".$ACCESS_TOKEN."&type=jsapi";
		$callBack = json_decode(httpGet($url));
		 if($callBack->errcode==0){
			 $ticket = $callBack->ticket;
			 $expires_in = $callBack->expires_in;
			 setcookie('TICKET',$ticket,time()+$expires_in);//有效期7000
		 }else{
			 setcookie('TICKET',$callBack->errcode,time()+7000);//有效期7000
		 }
	}else{
	}
	
	//return $_COOKIE['TICKET'];
} */

function httpGet($url) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_TIMEOUT, 500);
    // 为保证第三方服务器与微信服务器之间数据传输的安全性，所有微信接口采用https方式调用，必须使用下面2行代码打开ssl安全校验。
    // 如果在部署过程中代码在此处验证失败，请到 http://curl.haxx.se/ca/cacert.pem 下载新的证书判别文件。
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_URL, $url);

    $res = curl_exec($curl);
    curl_close($curl);

    return $res;
}






//https://api.weixin.qq.com/sns/auth?access_token=QfH_t-jMWJeVULixHI1jeKcRHHax6Ga2gWlx0w6LLcgyy_z0HGXE-WyFMUDhLqxKG8h6I-3IbP799aVWkqfxveZI62zNYgwrsn5rpNtJ4Ao&openid=ofaKZwXfY9cwXuQT8y2vQb2mX0Vk

?>