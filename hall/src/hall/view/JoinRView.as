package hall.view
{
	import common.baseui.UIBase;
	import common.event.EventCenter;
	
	import laya.events.Event;
	
	import manager.LoadingManager;
	import manager.UIManager;
	
	import net.Message;
	import net.Pomelo;
	import net.ProtoMessage;
	
	import ui.hall.JoinRoomViewUI;

	public class JoinRView extends UIBase
	{
		protected var _skin:JoinRoomViewUI;
		
		
		
		public function JoinRView()
		{
			super();
			//skinRes = "res/atlas/hall/joinRoom.json";
		}
		
		
		
		override protected function onLoaded():void
		{
			super.onLoaded();
			trace("joinRoom.atlas onLoaded!!");
			_skin = new JoinRoomViewUI();
			_skin.mouseThrough = true;
			if(_isShow)
			{
				UIManager.instance.uiCommonLayer.addChild(_skin);
			}
			
			init();
		}
		
		protected function init():void
		{
			_skin.roomidTf.text = "";
			_skin.maskBtn.on(Event.CLICK,this,this.hide);
			
			var i:int,len:int = 10;
			for(i=0;i<len;i++)
			{
				_skin["btn"+i].on(Event.CLICK,this,onClickNumBtn,[i]);
			}
			
			_skin.clearBtn.on(Event.CLICK,this,clearRoomIdTf);
			_skin.joinBtn.on(Event.CLICK,this,joinRoom);
			
			
		}
		
		protected function onClickNumBtn(num:int,evt:Event):void
		{
			var text:String = _skin.roomidTf.text;
			if(text.length<6)
			{
				text += num;
				_skin.roomidTf.text = text;
				
				if(text.length == 6)
				{
					joinRoom();
				}
			}
		}
		
		protected function clearRoomIdTf(event:Event):void
		{
			_skin.roomidTf.text = "";
		}
		
		protected function joinRoom(event:Event=null):void
		{
			
			if(_skin.roomidTf.text.length < 6)
			{
				return;
			}
			
			var intoRoomObj:Object = {SID:UserData.SID,UID:UserData.uid,RID:parseInt(_skin.roomidTf.text),PWD:UserData.passWard};
			
			EventCenter.instance.event(EventCenter.SOCKET_SEND,ProtoMessage.getProtoMessage(Message.Into_Room,intoRoomObj));
			
			_skin.roomidTf.text = "";
			trace("joinRoom .....");
			
			hide();
			
//			Pomelo.instance.connect(5000,true);
//			
//			EventCenter.instance.once(EventCenter.LOGIN_SUCCESS,this,onLoginSuccess,[intoRoomObj]);
			
		}
		
		protected function onLoginSuccess(data:*):void
		{
			
			EventCenter.instance.event(EventCenter.SOCKET_SEND,ProtoMessage.getProtoMessage(Message.Into_Room,data));
		}
		
		override public function show():void
		{
			super.show();
			if(_skin)
			{
				UIManager.instance.uiCommonLayer.addChild(_skin);
				_skin.roomidTf.text = "";
			}
		}
		
		override public function hide():void
		{
			super.hide();
			if(_skin && _skin.parent)
			{
				_skin.parent.removeChild(_skin);
			}
		}
	}
}