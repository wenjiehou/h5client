package net
{
	import common.event.EventCenter;
	
	import laya.events.Event;
	import laya.net.LocalStorage;
	import laya.net.Socket;
	import laya.utils.Browser;
	
	import manager.MessageManager;
	

	public class Pomelo
	{
		protected var _socket:Socket;
		
		protected static var _instance:Pomelo;
		
		public static function get instance():Pomelo
		{
			if(!_instance)
			{
				_instance = new Pomelo(new SingleForcer());
			}
			
			return _instance;
		}
		
		
		public function Pomelo(forcer:SingleForcer)
		{	
			_socket = new Socket();
			
			EventCenter.instance.on(MessageManager.LOGIN,this,onGotLoginMessage);
			EventCenter.instance.on(EventCenter.SOCKET_SEND,this,sendMessage);
		}
		
		public var isLogin:Boolean = false;
		public var connectNum:int = 10;
		
		public function close():void
		{
			needReconnect=false;
			_socket.close()
		}
		protected function test():void
		{
//			for(var i:int;i<1000;i++)
//			{
				
				while(true)
				{
					var socket:Socket = new Socket();
					socket.timeout = 5000;
					
					if(Browser.window.serverIp != null)
					{
						UserData.HallServiceIp = Browser.window.serverIp;
					}
					if(Browser.window.serverPort != null)
					{
						UserData.HallServicePort = Browser.window.serverPort;
					}
					
					socket.connect(UserData.HallServiceIp, UserData.HallServicePort);
				}
			
				
				
//			}
		}
		
		public function connect(timeout:int=100000,isFirst:Boolean=false):void
		{
//			test();
//			return;
			if(_socket.connected)
			{
				return;
			}
			
			QuickUtils.showConnecting();
			
			if(isFirst)
			{
				_socket.timeout = timeout;
				connectNum = 10;
			}
			
//			if(connectNum==0)
//			{
//				QuickUtils.hideConnecting();
//				QuickUtils.popMessageBox("你已经与服务器断开连接！,点击确定重新登录。",PopBox.BTN_QUEREN,this,onReLogin);
//
//				return;
//			}
			
			connectNum ++;
			
			
			_socket.on(Event.OPEN, this, onConnect);
			_socket.on(Event.CLOSE, this, onClose);
			_socket.on(Event.MESSAGE, this, onData);
			_socket.on(Event.ERROR, this, onIOError);
			
			
			if(Browser.window.serverIp != null)
			{
				UserData.HallServiceIp = Browser.window.serverIp;
			}
			if(Browser.window.serverPort != null)
			{
				UserData.HallServicePort = Browser.window.serverPort;
			}
			
			_socket.connect(UserData.HallServiceIp, UserData.HallServicePort);
			trace("[Pomelo] start to connect server ... "+ UserData.HallServiceIp +":" + UserData.HallServicePort);
			
			Laya.timer.once(timeout,this,connect);
		}
		
		protected function onReLogin(idx:int):void
		{
			AppConfig.reloadLaya();
		}
		
		public function reLogin():void
		{
			var login:Object = new Object();
			login.UID = "";
			login.SID = "";//  SessionID
			login.RID= 0;//
			login.GPS_LNG = 0; //  经度
			login.GPS_LAT = 0;//  纬度
			
			login.openid = Browser.window.wxInfo !=null? Browser.window.wxInfo.openid:"";
		

			if(login.openid == "")
			{
				login.openid =Browser.window.openid;
			}

			login.token = Browser.window.wxInfo  !=null? Browser.window.wxInfo.token:"";
			
			var messageBuffer:* = ProtoMessage.getProtoMessage(Message.Login,login);
			_socket.send(messageBuffer);
			_socket.flush();
		}
		
		private function onConnect(e:Event):void
		{
//			_socket.close();
//			return;
			QuickUtils.hideConnecting();
			
			if(ModuleDef.CurGameModule && ModuleDef.CurGameModule.inGame && UserData.isReplay==false)//不在游戏中才这样做
			{
				ModuleDef.CurGameModule.instance.gameContext.controller.endGameGotoHall();
			}
			
			trace("[Pomelo] connect success ...");
			UserData.uid= laya.net.LocalStorage.getItem("duid");
			UserData.SID = laya.net.LocalStorage.getItem("dsid");
			if(UserData.uid == "" || UserData.uid == "0")
			{
				UserData.SID = "";
			}
			UserData.uid = "0";
			UserData.SID = "";
			var login:Object = new Object();
			var wxInfo:Object = Browser.window.wxInfo;
			
			//alert("wxInfo::"+Browser.window.wxInfo.token);
			
			if(wxInfo == null)
			{
				login.UID = UserData.uid;
				login.SID = UserData.SID;
				login.openid = "";
				login.token = "";
			}
			else
			{
				login.openid = Browser.window.wxInfo.openid !=undefined? Browser.window.wxInfo.openid:"";
				if(login.openid == "")
				{
					login.openid =Browser.window.openid;
				}

				login.token = Browser.window.wxInfo.token  !=undefined? Browser.window.wxInfo.token:"";
			}
			login.RID = UserData.roomid;
			login.SID = "";//  SessionID
			login.RID= 0;//
			login.GPS_LNG = 0; //  经度
			login.GPS_LAT = 0;//  纬度
			
//			for(var i:int=1;i<1000;i++)
//			{
//				login.SID += "dfasdfasdffdgggggggggggggggggggggggggggggggggggdsfads"+i;
//			}
			
			
			var messageBuffer:* = ProtoMessage.getProtoMessage(Message.Login,login);
			
//			trace(login,messageBuffer);
//			
			for(var i:int;i<1;i++)
			{
				_socket.send(messageBuffer);
				_socket.flush();
			}
//			_socket.send(messageBuffer);
//			_socket.flush();
			
//			onData(messageBuffer);
		}
		
		
		protected function sendMessage(data:*):void
		{
			try{	
				send(data);
			}catch (e) {
				trace(e)
			}
		}
		
		protected function onGotLoginMessage(msg:Message):void
		{
			var obj:Object;
			if(msg.messageId== Message.ACK_Login)
			{
				obj = AppConfig.proto.ACK_Login.decode(msg.params[0]);
				trace(obj);
//				UserData.nickname = obj.Name;
//				UserData.uid = obj.UID;
				UserData.SID = obj.sid;
//				UserData.roomid = obj.RID;
//				UserData.Coin = obj.Coin;
//				UserData.Diamond = obj.Diamond;
//				UserData.ServerTime = obj.ServerTime;
//				UserData.Icon = obj.Icon;
				
				
				
				isLogin = true;
				
				
				
			}
			else if(msg.messageId == Message.ACK_User_Info)
			{
//				string 		Name    	=1;  	// Nick Name
//				string 		UID    		=2; 	// User ID  用户ID
//				int32 			RID    		=3;    	// 房间号
//				string 		IP     		=4; 	// IP地址
//				int32 			Index  		=5;    	// 房间位置// 0=东  1=北  2=西  3=南
//				string 		Icon  		=6; 	// 头像
//				int32 			Coin   		=7;    	// 金币
//				int32 			Type  		=8;   	// 类型
//				int32 			Diamond		=9;   	// 钻石
//				int32 			Level  		=10;   	// 等级
//				string 		EMail  		=11; 	// 邮箱
//				float  		GPS_LNG		=12;	// 经度 Longitude   简写Lng
//				float  		GPS_LAT		=13;	// 纬度 Latitude    简写Lat
//				int32 			Robot   	=14;   	// 是否是机器人
//				int32 			WinWeek 	=15;    // 本周胜局次数
//				int32          score 		=19;    // 分数
				
				obj = AppConfig.proto.ACK_User_Info.decode(msg.params[0]);
				
				//alert("wxInfo::"+obj.Name + " " + obj.UID);
				
				UserData.nickname = obj.Name;
				UserData.uid = obj.UID;
				UserData.roomid = obj.RID;
				UserData.Coin = obj.Coin;
				UserData.Diamond = obj.Diamond;
				UserData.ServerTime = obj.ServerTime;
				UserData.Icon = obj.Icon;
				UserData.score = obj.score;
				UserData.level = obj.Level;
				UserData.parentUid = obj.ParentUid;
				
				laya.net.LocalStorage.setItem("duid",UserData.uid);
				laya.net.LocalStorage.setItem("dsid",UserData.SID);
				EventCenter.instance.event(EventCenter.LOGIN_SUCCESS,isLogin);
				
				trace(obj);
			}
			
			msg.complete();
		}
		
		protected function send(data):void
		{
			_socket.send(data);
			_socket.flush();
		}
		
		private function onData(message:Object=null):void
		{
			var Message:* = AppConfig.proto.Message;
			var uint8:Uint8Array = new Uint8Array(message);
			var data:* =  Message.decode(uint8);
			MessageManager.instance.onGotMessage(data);
		}
		
		public var needReconnect:Boolean = true;
		
		
		private function onClose(e:Object=null):void
		{
			console.log("[Pomelo] connect close ..."+(e?e.code:""));
			if(needReconnect)
			{
				Laya.timer.once(5000,this,connect,[5000,true]);
				
				//connect(5000,true);
			}
			else
			{
//				needReconnect = true;
			}
			
			
			
		}
		private function onIOError(e:Object=null):void
		{
			trace("[Pomelo] "+JSON.stringify(e));
		}
		
		
		
	}
}

class SingleForcer{}