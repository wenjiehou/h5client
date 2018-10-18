<?php

class QipaiConfig{
	
	const sqlServer = 'localhost';
	const sqlUser = 'root';
	const sqlPassword = '';
	const sqlDbname = 'pzmj';
	
	static function getDbConn(){
		return new mysqli(QipaiConfig::sqlServer, QipaiConfig::sqlUser, QipaiConfig::sqlPassword,QipaiConfig::sqlDbname);
	}
	
	static function checkLvBigger($fromLv,$toLv) {
		if($fromLv!=0 && ($toLv == 0 || $fromLv < $toLv)){
			return true;
		}
	
		return false;
	}
}




?>