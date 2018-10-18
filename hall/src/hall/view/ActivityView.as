package hall.view
{
	import common.baseui.UIBase;
	
	import laya.display.Sprite;
	import laya.events.Event;
	import laya.utils.Browser;
	
	import ui.hall.ActivityViewUI;

	public class ActivityView extends UIBase
	{
		protected var _skin:ActivityViewUI;
		public function ActivityView(container:Sprite=null)
		{
			super(container);
			skinRes = "";
			_skin = new ActivityViewUI();
			_skin.qiandao.on(Event.CLICK,this,this.gotoQiandao);//签到
			_skin.buchang.on(Event.CLICK,this,this.gotoBuchang);//补偿
			_skin.zhaoshBtn.on(Event.CLICK,this,this.gotoZhaosh);
		}
		protected override function onLoaded():void
		{
			super.onLoaded();
			if(_isShow)
			{
				container.addChild(_skin);
			}
		}
		
		private function gotoQiandao():void
		{
			Browser.window.location.href=Browser.window.web_url+"/wechat/activity/center";
		}
		
		private function gotoBuchang():void
		{
			Browser.window.location.href=Browser.window.web_url+"/wechat/activity/compensate";
		}
		
		private function gotoZhaosh():void
		{
			Browser.window.location.href=Browser.window.web_url+"/wechat/agent/info";
		}
		
		public override function show():void
		{
			super.show();
			if(_skin)
			{
				container.addChild(_skin);
			}
		}
		
		public override function hide():void
		{
			super.hide();
			if(_skin && _skin.parent)
			{
				_skin.parent.removeChild(_skin);
			}
		}
	}
}