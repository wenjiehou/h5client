package modules.gameCommon.chat.item
{
	
	import common.event.EventCenter;
	
	import laya.events.Event;
	
	import ui.gameCommon.shortCutChat.item.ChatItemUI;
	

	public class ChatItem extends ChatItemUI
	{
		private var worldid:int;
		public function ChatItem()
		{
			super();
			init();
		}
		
		protected function init():void
		{
			initUI();
			this.on(Event.MOUSE_OVER,this,onMouseOver);
			this.on(Event.MOUSE_OUT,this,onMouseOut);
			this.on(Event.MOUSE_DOWN,this,onMouseOver);
			this.on(Event.MOUSE_UP,this,onMouseUp);

		}
		
		private function onMouseOver(e:Event):void
		{
			seleImg.visible = true;			

		}
		private function onMouseOut(e:Event):void
		{
			seleImg.visible = false;			
			
		}
		private function onMouseUp(e:Event):void
		{
			seleImg.visible = false;			
			EventCenter.instance.event(EventCenter.SEND_CHAT_MESSAGE,UserData.uid+"#"+dataSource.content);

		}
		protected function initUI():void
		{
			
		}
		
		public function setData(dat:*):void
		{
			if(dat != null && dat.content != null)
			{
				dataSource = dat;
				tf.text = dat.content;
//				tf.text = dat.content.zh_CN;
				seleImg.visible = false;			
//				worldid = dat.worldid;
			}
			
		}
	}
}