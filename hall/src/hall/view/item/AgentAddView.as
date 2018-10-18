package hall.view.item
{
	import common.event.EventCenter;
	import common.view.PopBox;
	
	import laya.events.Event;
	import laya.net.HttpRequest;
	
	import manager.UIManager;
	
	import ui.hall.item.AddAgentViewUI;

	public class AgentAddView
	{
		protected var _skin:AddAgentViewUI;
		
		private var hr:HttpRequest;
		
		public function AgentAddView()
		{
			_skin = new AddAgentViewUI();
			init();
		}
		
		
		
		protected function init():void
		{
			hr = new HttpRequest();
			_skin.cancelBtn.on(Event.CLICK,this,onClickCancelBtn);
			_skin.addBtn.on(Event.CLICK,this,onClickAddBtn);
			
			hr.on(Event.COMPLETE, this, function(e:*=null):void{
				
				var response:Object = JSON.parse(hr.data);
				
				if (response.status == 1) {
					EventCenter.instance.event(EventCenter.HALL_UPDATE_AGENTSBELONG);
					QuickUtils.popMessageBox(response.msg,PopBox.BTN_QUEREN,this,null);
				}else {
					QuickUtils.popMessageBox(response.msg,PopBox.BTN_QUEREN,this,null);
				}
			});
		}
		
		protected function onClickCancelBtn(e:Event):void
		{
			hide();
		}
		
		protected function onClickAddBtn(e:Event):void
		{
			var target_uid:int = parseInt(_skin.uidTf.text);
			var parent_uid:int = parseInt(UserData.selfuid);
			var level:int = -1;
			
			switch(UserData.level)
			{
				case 1://管理员
					if(_skin.levelRadio.selectedIndex == 0)
					{
						level = 2;
					}
					else if(_skin.levelRadio.selectedIndex == 1)
					{
						level = 0;
					}
					break;
				case 2://一级代理
					if(_skin.levelRadio.selectedIndex == 0)
					{
						level = 3;
					}
					else if(_skin.levelRadio.selectedIndex == 1)
					{
						level = 0;
					}
					break;
				case 3://二级代理
					if(_skin.levelRadio.selectedIndex == 0)
					{
						level = 0;
					}
					break;
			}
			
			if(level != -1)
			{
				var data:Object = {
					parent_uid:parent_uid,
					target_uid:target_uid,
					level:level//
				};
				
				var query:Array=[];
				for(var k in data){
					query.push(k+"="+encodeURIComponent(data[k]));
				}
				data=query.join("&");
				
				hr.send("phpApi/api/addAgent.php",data, "post", "text");
			}
			
		}
		
		
		public function show():void
		{
			UIManager.instance.popLayer.addChild(_skin);
			
			switch(UserData.level)
			{
				case 1://管理员
					_skin.levelRadio.labels="一级代理,普通玩家";
					break;
				case 2://一级代理
					_skin.levelRadio.labels="二级代理,普通玩家";
					break;
				case 3://二级代理
					_skin.levelRadio.labels="普通玩家";
					break;
			}
			_skin.levelRadio.selectedIndex = 0;
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