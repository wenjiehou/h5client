package common.controller
{
	
	import common.CommonModule;
	import common.event.EventCenter;
	
	import manager.MessageManager;
	
	import net.Message;
	
	import rb.framework.mvc.AbstractLayer;
	
	public class CommonController extends AbstractLayer
	{
		public function CommonController()
		{
			super();
		}
		
		override public function onAdd():void
		{
			EventCenter.instance.on(MessageManager.COMMON,this,onGotCommonMsg);
		}
		
		protected function onGotCommonMsg(msg:Message):void
		{
			if(actived == false)
			{
				return;
			}
			var obj:Object;
			
			if(msg.messageId == Message.MSG_UPDATE_USERINFO)
			{
				obj = AppConfig.proto.ACK_User_Info.decode(msg.params[0]);
				UserData.Diamond = obj.Diamond;
				EventCenter.instance.event(EventCenter.HALL_REFRESH_CARDSNUM);
				
			}
			else if(msg.messageId == Message.MSG_ACK_Room_Summary)
			{
				obj = AppConfig.proto.RoomSummaryResponse.decode(msg.params[0]);
				EventCenter.instance.event(EventCenter.HALLVIEW_GETSINGLE,obj);
			}
			else if(msg.messageId == Message.MSG_GameNotice)
			{
				obj = AppConfig.proto.MSG_GameNotice.decode(msg.params[0]);
				CommonModule.instance.commonContext.view.showNotice(obj.content);
			}
			
			
			msg.complete();
		}
		
		override public function onRemove():void
		{
			
		}
	}
}