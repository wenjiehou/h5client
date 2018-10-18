package common.view
{
	import laya.events.Event;
	
	import manager.UIManager;
	
	import ui.common.GameHelpUI;
	import ui.common.VGameHelpUI;

	

	public class GameHelpView
	{
		protected var _skin:*;
		public var isShow:Boolean = false;
		public function GameHelpView(isHerizon:Boolean=true)
		{
			if(isHerizon)
			{
				_skin = new GameHelpUI();
			}
			else
			{
				_skin = new VGameHelpUI();
			}
			
			
			init();
		}
		private var txt:String="";
		public function init():void
		{
			_skin.close.on(Event.CLICK,this,this.onClickBtnClose);
			_skin.close1.on(Event.CLICK,this,this.onClickBtnClose);
			
		}
		private function onClickBtnClose():void
		{
			this.hide();
		}
		public function show():void
		{
			this.txt="";
			trace(AppConfig.costRule[UserData.roomtype+""])
			if(UserData.roomtype==3010){
				trace(UserData.Rule[3])
				if(UserData.Rule[3]==128){
					this.txt+=AppConfig.costRule[UserData.roomtype+""]["rule"][0];	
				}else if(UserData.Rule[3]==106){
					this.txt+=AppConfig.costRule[UserData.roomtype+""]["rule"][1];
				}else{
					this.txt+="";
				}
			}
			else if(UserData.roomtype == UserData.RoomType_SirenDizhu)
			{
				if(UserData.Rule[3]==101){
					this.txt+=AppConfig.costRule[UserData.roomtype+""]["rule"][0];	
				}else if(UserData.Rule[3]==102){
					this.txt+=AppConfig.costRule[UserData.roomtype+""]["rule"][1];
				}
			}
			else{
				this.txt+=AppConfig.costRule[UserData.roomtype+""]["rule"];
			}
			this._skin.txt.text=this.txt;
			QuickUtils.AddTextScroll(this._skin.txt);
			UIManager.instance.uiCommonLayer.addChild(_skin);
			isShow = true;
		}
		
		public function hide():void
		{
			if(_skin.parent)
			{
				_skin.parent.removeChild(_skin);
			}
			isShow = false;
		}
	}
}