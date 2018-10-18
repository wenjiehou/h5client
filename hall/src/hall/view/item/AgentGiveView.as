package hall.view.item
{
	import common.event.EventCenter;
	import common.view.PopBox;
	
	import laya.events.Event;
	import laya.net.HttpRequest;
	
	import manager.UIManager;
	
	import net.Message;
	import net.ProtoMessage;
	
	import ui.hall.item.GiveCardViewUI;

	public class AgentGiveView
	{
		protected var _skin:GiveCardViewUI;
		private var hr:HttpRequest;
		
		public function AgentGiveView()
		{
			_skin = new GiveCardViewUI();
			init();
		}
		
		protected function init():void
		{
			hr = new HttpRequest();
			_skin.cancelBtn.on(Event.CLICK,this,onClickCancelBtn);
			_skin.giveBtn.on(Event.CLICK,this,onClickGiveBtn);
			
			hr.on(Event.COMPLETE, this, function(e:*=null):void{
				
				var response:Object = JSON.parse(hr.data);
				
				if (response.status == 1) {
					UserData.Diamond = response.selfDiamond;
					updateCanGiveNum();
					
					EventCenter.instance.event(EventCenter.HALL_UPDATE_AGENTSBELONG);
					
					QuickUtils.popMessageBox(response.msg,PopBox.BTN_QUEREN,this,null);
					var obj:Object={id:response.to_uid};
					Laya.timer.once(1000,this,function():void{
						EventCenter.instance.event(EventCenter.SOCKET_SEND,ProtoMessage.getProtoMessage(Message.MSG_NOTIFY_RECHARGE,obj));
					})
					
				}else {
					QuickUtils.popMessageBox(response.msg,PopBox.BTN_QUEREN,this,null);
				}
			});
			
		}
		
		protected function onClickCancelBtn(e:Event):void
		{
			hide();
		}
		
		protected function onClickGiveBtn(e:Event):void
		{
			var to_uid:int = parseInt(_skin.uidTf.text);
			var from_uid:int = parseInt(UserData.selfuid);
			var card_num:int = parseInt(_skin.cardNumTf.text);
			
			
			
			if(card_num >= 0 && to_uid != from_uid)
			{
				var data:Object = {
					from_uid:from_uid,
					to_uid:to_uid,
					card_num:card_num//
				};
				
				var query:Array=[];
				for(var k in data){
					query.push(k+"="+encodeURIComponent(data[k]));
				}
				data=query.join("&");
				hr.send("phpApi/api/giveAgent.php",data, "post", "text");
			}
			else
			{
				QuickUtils.popMessageBox("请确认不是给自己送并且房卡数量大于0",PopBox.BTN_QUEREN,this,null);
			}
		}
		
		public function show():void
		{
			UIManager.instance.popLayer.addChild(_skin);
			updateCanGiveNum();
		}
		
		protected function updateCanGiveNum():void
		{
			if(UserData.level == 1)
			{
				_skin.leftCardNumTf.text = "不限数量";
			}
			else{
				_skin.leftCardNumTf.text = ""+UserData.Diamond;
			}
		}
		
		public function hide():void
		{
			if(_skin && _skin.parent)
			{
				_skin.parent.removeChild(_skin);
			}
		}
		
		
		
	}
}