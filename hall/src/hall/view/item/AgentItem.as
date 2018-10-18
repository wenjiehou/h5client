package hall.view.item
{
	import common.event.EventCenter;
	
	import laya.events.Event;
	
	import ui.hall.item.AgentItemUI;
	
	public class AgentItem extends AgentItemUI
	{
		public function AgentItem()
		{
			super();
			
			init();
		}
		
		protected function init():void
		{
			initUI();
			addListener();
		}
		
		protected function initUI():void
		{
			detailBtn.on(Event.CLICK,this,onClickDerailBtn);
		}
		
		protected function addListener():void
		{
			
		}
		
		public function onClickDerailBtn(e:Event):void
		{
			EventCenter.instance.event(EventCenter.HALL_SHOW_AGENTDETAILVIEW,this.data);
		}
		
		protected var data:* ;
		
		public function setData(dat:*,idx:int):void
		{
			data = dat;
			if(dat)
			{
				headImg.skin = dat.icon==""?"common/morentouxiang.png":dat.icon;
				uidTf.text = "ID:" + dat.id;
				levelImg.skin = "hall/level"+parseInt(dat.level)+".png";
				playerName.text = dat.nick_name;
				cardNum.text = dat.add_card_num+"";
			}
			
		}
	}
}