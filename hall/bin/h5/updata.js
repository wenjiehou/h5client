var url="ws://xs.bestpinzheng.com:8081";
var proto=null;
var ws=null; 
var bConnected = false;//是否连上了服务器
//加载PB文件
protobuf.load("/h5/res/qcloud.proto",function(err, root){
	proto=root.QCLOUD;
	setTimeout(function (){ 
			Reconnect();
	}, 500);
});

//重连
function Reconnect(){ 
	if(!bConnected){
		connect();
		setTimeout(function () { 
			Reconnect();
		}, 2000);
	}
}

//连接
function connect(){
	ws=null;
	ws = new WebSocket(url);  
	ws.onmessage = function(evt) {  
		//console.log(evt.data)
	} 
	ws.onerror=function(evt){
		console.log("出错啦",evt);
	}
	ws.onopen = function(){
		bConnected = true;
		console.log("连接成功")
	}
}

//通知更新数据
function updata(id){
	var obj={
		"id":id
	}
	ws.send(protomessage(990,obj));
}

//生成protobuf数据
function protomessage(id,body){
	var ProMessage = proto.Message;
	var message=null;
	var BodyClass;
	switch(id)
	{
		case 990:
			BodyClass = proto.NotifyRecharge;
			break;
			
	}
	message={
		"ID":id,
		"MSG":BodyClass.encode(BodyClass.create(body)).finish()
	}
	var messageBuffer = ProMessage.encode(ProMessage.create(message)).finish();
	return messageBuffer;
}

//获取连接中的参数值
function getGetTarget(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null){
		return  unescape(r[2]);
	}else{
		return null;
	}
}