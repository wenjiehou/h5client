package hall.controller
{
	import common.CommonModule;
	import common.event.EventCenter;
	import common.view.PopBox;
	
	import hall.HallModule;
	
	import laya.net.LocalStorage;
	import laya.utils.Browser;
	
	import manager.LoadingManager;
	import manager.MessageManager;
	
	import net.Message;
	import net.ProtoMessage;
	
	import rb.framework.mvc.AbstractLayer;
	
	public class HallController extends AbstractLayer
	{
		public function HallController()
		{
			super();
		}
		public static const NOTICEID:String="noticeID";
//		public static var HallMainNoticeTxt:String="                                                                                      "+
		public static var HallMainNoticeTxt:String="";//+
			//"欢迎进入，游戏免费玩，祝您游戏愉快！";//"服务器将在9月3日 7:00进行维护，预计时间30分钟";//"欢迎进入一乐麻将，游戏内测中，如遇游戏内问题可联系客服微信：ylmjkf01"//
		override public function onAdd():void
		{ 
			var tempStr:String="公告内容：欢迎进入"+AppConfig.nameTitle+"，游戏内测中，如遇游戏内问题可联系客服微信：代填";
			WX.onMenuShareTimeline();
			WX.onMenuShareAppMessage(null,Browser.window.wxInfo.nickname+"分享了微信打牌神器-"+AppConfig.nameTitle+"，邀您一起浪！");
			
//			Laya.stage.screenAdaptationEnabled=true;
//			Laya.stage.screenMode = Stage.SCREEN_VERTICAL;//SCREEN_VERTICAL //SCREEN_HORIZONTAL
//			Laya.stage.size(640,1038);
//			Laya.stage.screenAdaptationEnabled=false;
			var intoRoomObj:Object = {id:UserData.NoticeID};
			EventCenter.instance.event(EventCenter.SOCKET_SEND,ProtoMessage.getProtoMessage(Message.MSG_Notice,intoRoomObj));
			EventCenter.instance.on(MessageManager.HALL,this,onGotHallMessage);
		}
		
		override public function onRemove():void
		{
			EventCenter.instance.off(MessageManager.HALL,this,onGotHallMessage);
		}
		
		protected function onGotHallMessage(msg:Message):void
		{
			trace(msg);
//			if(this.actived == false)
//			{
//				if(msg.messageId == Message.MSG_ACK_Room_Summary)
//				{
//					obj = AppConfig.proto.RoomSummaryResponse.decode(msg.params[0]);
//					trace(obj,"---------------------")
//					EventCenter.instance.event(EventCenter.HALLVIEW_GETSINGLE,obj);
//					msg.complete();
//				}
//				return;
//			}
			
			var obj:Object;
			
			if(msg.messageId== Message.ACK_Create_Room)
			{
				obj = AppConfig.proto.ACK_Create_Room.decode(msg.params[0]);
				UserData.roomid = obj.RID;
				UserData.passWard = obj.PWD;
//				UserData.Rule = obj.Rule;
//				UserData.roomtype = obj.Type;
				
				LocalStorage.setItem("lastRoomId",obj.RID);
				
				
				var intoRoomObj:Object = {SID:UserData.SID,UID:UserData.uid,RID:UserData.roomid,PWD:UserData.passWard};
				EventCenter.instance.event(EventCenter.SOCKET_SEND,ProtoMessage.getProtoMessage(Message.Into_Room,intoRoomObj));
				
			}
			else if(msg.messageId == Message.ACK_Match_Room){//匹配返回
				obj = AppConfig.proto.ACK_Match_Room.decode(msg.params[0]);
				
//				string UID  	=1;
//				int32  Type   			= 2; 	// 游戏类型(血流, 西周...)	
//				int32  City             = 3;
//				string PWD    			= 4;    // 密码(可为空)
//				repeated int32  Rule  	= 5; 	// 规则ID列表
				
				var matchinfo:String;
				var ruleObj:Object = AppConfig.getRule(obj.Rule[1]);
				if(ruleObj.type == 0){//局数
					matchinfo = UserData.roomtype_reference[obj.Type] + "—" +AppConfig.costRule[obj.Type+""][obj.Rule[3]]+"—"+AppConfig.getRule(obj.Rule[1]).value + "局";
				}else{
					matchinfo = UserData.roomtype_reference[obj.Type] + "—" +AppConfig.costRule[obj.Type+""][obj.Rule[3]]+"—"+AppConfig.getRule(obj.Rule[1]).value + "分钟";
				}
				
				
				
				QuickUtils.popMessageBox(matchinfo,PopBox.BTN_MATCH,this,onConfirmEnd,"匹配中");
			}
			else if(msg.messageId == Message.ACK_Cancel_Match_Room){
				//alert("取消匹配成功！");
			}
			else if(msg.messageId == Message.ACKBC_Into_Room)//进入房间
			{
				if(AppConfig.proto.ACKBC_Into_Room.decode(msg.params[0]).UID == UserData.selfuid)
				{
					trace("ACKBC_Into_Room!!!!!!!!!!!!!!!!!!!!!!!!111"); 
					
					if(QuickUtils.popBox){
						QuickUtils.popBox.onhide();
					}
					
					
					var intoObj:Object = AppConfig.proto.ACKBC_Into_Room.decode(msg.params[0]);
					UserData.roomtype = intoObj.Type;
					UserData.Rule = intoObj.Rule;
//					if(ModuleDef.GameModule)
//					{
//						gotoGame();
//					}
//					else
//					{
//						
//					}
					
					LoadingManager.instance.startLoadGameRes(this,gotoGame);
				}
			}
			else if(msg.messageId == Message.MSG_ACK_Notice)
			{
				obj = AppConfig.proto.AckNotice.decode(msg.params[0]);
				for (var i:int = 0; i < obj.notices.length; i++) 
				{
					HallController.HallMainNoticeTxt+=obj.notices[i].content;
					UserData.NoticeID=obj.notices[i].id;
				}
			}
			else if(msg.messageId == Message.MSG_ACK_Battle_Record)
			{
				obj = AppConfig.proto.BattleRecordResponse.decode(msg.params[0]);
				trace(obj)
				EventCenter.instance.event(EventCenter.HALLVIEW_GETRECORD,obj);
			}
			else if(msg.messageId == Message.MSG_ACK_Home_Owner)
			{
				obj = AppConfig.proto.HomeOwnerResponse.decode(msg.params[0]);
				trace(obj , "MSG_ACK_Home_Owner")
				EventCenter.instance.event(EventCenter.HALLVIEW_GETONPLAY,obj);
			}
			else if(msg.messageId == Message.MSG_ACK_NOTIFY_RECHARGE)
			{
				
				obj = AppConfig.proto.NotifyRechargeResponse.decode(msg.params[0]);
//				Browser.window.weui.alert(obj)
//				Browser.window.alert(obj.id==UserData.uid)
				if(obj.id==UserData.uid){
					UserData.Diamond=obj.diamond;
					HallModule.instance.hallContext.hallView.hallLayer.mainView.updataDiamond();
				}
//				EventCenter.instance.event(EventCenter.HALLVIEW_GETSINGLE,obj);
			}
			else if(msg.messageId == Message.MSG_ACK_BattleDetail)
			{
				obj = AppConfig.proto.ACK_BattleDetail.decode(msg.params[0]);
				trace(obj , "MSG_ACK_BattleDetail")
				
				var list:Array = obj.list;
				for (var i:int=0;i<list.length;i++)
				{
					for(var j:int=0;j<list[i].list.length;j++)
					{
						list[i].list[j].icon = "http://thirdwx.qlogo.cn/mmopen/vi_32/" +list[i].list[j].icon;
					}
				}
				
				
				HallModule.instance.hallContext.hallView.hallLayer.onPlayView.goDetailList(obj);
				
			}
			msg.complete();
		} 
		
		//取消匹配
		protected function onConfirmEnd(idx:int):void
		{
			if(idx == 0)
			{
				var cancelMatch:Object = {SID:UserData.SID};
				EventCenter.instance.event(EventCenter.SOCKET_SEND,ProtoMessage.getProtoMessage(Message.Cancel_Match_Room,cancelMatch));
			}
		}
		
		/**重播进入房间*/
		public function replayGotoGame(roomInfo:Object):void
		{
			UserData.roomtype = roomInfo.Type;
			UserData.Rule = roomInfo.Rule;
//			if(ModuleDef.GameModule)
//			{
//				gotoGame();
//			}
//			else
//			{
//				LoadingManager.instance.startLoadMjGameRes(this,gotoGame);
//			}
			
			LoadingManager.instance.startLoadGameRes(this,gotoGame);
		}
		
		protected function gotoGame():void
		{
			LoadingManager.instance.loadGameJS(this,onMajiangJsLoaded);
		}
		
		protected function onMajiangJsLoaded():void
		{
			LoadingManager.instance.onGoInGameBackLoad();

			HallModule.instance.goEmpty();
			CommonModule.instance.regotoCommonText();
			ModuleDef.CurGameModule.instance.startGame();
		}
		
		override public function clearHandlers():void
		{
			
		}
		
		
	}
}