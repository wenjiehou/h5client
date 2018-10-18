package modules.gameCommon.view
{
	import common.event.EventCenter;
	
	import laya.display.Sprite;
	import laya.events.Event;
	
	import net.Message;
	import net.ProtoMessage;
	
	import ui.gameCommon.DissolvePageUI;
	import ui.gameCommon.items.DissolvePlayerItemUI;
	
	public class NewDissolvePage extends DissolvePageUI
	{
		protected var players:Vector.<DissolvePlayerItemUI> = new Vector.<DissolvePlayerItemUI>();
		
		protected var _leftTime:int = 0;
		protected var isCountdown:Boolean = false;
		
		protected var headw:int,headh:int;
		
		
		public function NewDissolvePage()
		{
			super();
			
			players.push(player0,player1,player2,player3,player4,player5,player6,player7,player8,player9);
			
			headw = player0.headImg.width;
			headh = player0.headImg.height;
			
			agreenBtn.on(Event.CLICK,this,onClickAgreenBtn);
			opposeBtn.on(Event.CLICK,this,onClickOpposeBtn);
		}
		
		protected function onClickAgreenBtn(e:Event):void
		{
//			int32 roomId = 1;
//			int32 result = 2; //1：同意解散 2：反对解散
			
			var obj:Object = {roomId:UserData.roomid,result:1};
			
			EventCenter.instance.event(EventCenter.SOCKET_SEND,ProtoMessage.getProtoMessage(Message.Vote,obj));
		}
		
		protected function onClickOpposeBtn(e:Event):void
		{
			var obj:Object = {roomId:UserData.roomid,result:2};
			EventCenter.instance.event(EventCenter.SOCKET_SEND,ProtoMessage.getProtoMessage(Message.Vote,obj));
		}
		
		public function update(info:Object):void
		{
//			message DisbandItem {
//				string userId = 1;
//				string nickName = 2;
//				string icon = 3;
//				int64 result = 4; //0未投票 ，1：同意解散 2：反对解散
//				bool isStarter = 5; //true 发起者
//			}
//			
//			//800
//			message AckDisband{
//				repeated DisbandItem list = 1;
//				int64 leftTime = 2;
//			}
			
			_leftTime = info.leftTime;
			this.leftTimeTf.text = ""+ _leftTime;
			
			if(_leftTime > 0)
			{
				if(isCountdown == false)
				{
					isCountdown = true;
					Laya.timer.loop(1000,this,onMyTime);
				}
			}
			
			
			//更新四个玩家
			var i:int,len:int=info.list.length;
			
			for(i=0;i<players.length;i++)
			{
				if(i >= info.list.length)
				{
					players[i].visible = false;
					continue;
				}
				else
				{
					players[i].visible = true;
				}
				
				
				players[i].nameTf.text = info.list[i].nickName;
				players[i].headImg.width=headw;
				players[i].headImg.height=headh;
				
				if(info.list[i].icon != "")
				{
					var photo:Sprite=new Sprite();
					photo.loadImage(info.list[i].icon,0,0,headw,headh);//AppConfig.httpPhotoUrl+obj.uid
					players[i].headImg.addChild(photo);
				}
				
				switch(info.list[i].result)
				{
					case 0://待投票
						players[i].toDealTf.visible = true;
						players[i].agreenImg.visible = false;
						players[i].opposeImg.visible = false;
						
						break;
					case 1://同意
						players[i].toDealTf.visible = false;
						players[i].agreenImg.visible = true;
						players[i].opposeImg.visible = false;
						break;
					case 2://butongyi 
						players[i].toDealTf.visible = false;
						players[i].agreenImg.visible = false;
						players[i].opposeImg.visible = true;
						break;
				}
				
				if(info.list[i].isStarter)
				{
					startTf.text = "["+ info.list[i].nickName + "]发起投票解散房间。"
				}
				
				if(info.list[i].userId == UserData.uid)
				{
					if(info.list[i].result == 0)
					{
						agreenBtn.visible = true;
						opposeBtn.visible = true;
					}
					else
					{
						agreenBtn.visible = false;
						opposeBtn.visible = false;
					}
				}
			}
			
			if(ModuleDef.CurGameModule.instance.gameContext.model.isSelfSitDown == false)
			{
				agreenBtn.visible = false;
				opposeBtn.visible = false;
			}
		}
		
		protected function onMyTime():void
		{
			_leftTime -= 1;	
			
			if(_leftTime < 0)
			{
				_leftTime = 0;
			}
			
			if(_leftTime == 0)
			{
				isCountdown = false;
				Laya.timer.clear(this,onMyTime);
			}
			this.leftTimeTf.text = ""+ _leftTime;
		}
	}
}