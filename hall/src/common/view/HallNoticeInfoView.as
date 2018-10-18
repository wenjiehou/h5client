package common.view
{
	import laya.events.Event;
	import laya.html.dom.HTMLDivElement;
	import laya.maths.Rectangle;
	
	import manager.UIManager;
	
	import ui.common.HallNoticeInfoViewUI;

	public class HallNoticeInfoView
	{
		protected var _skin:HallNoticeInfoViewUI;
		
		protected var infoTf:HTMLDivElement;
		
		public function HallNoticeInfoView()
		{
			_skin = new HallNoticeInfoViewUI();
			
			init();
		}
		
		protected function init():void
		{
			infoTf = _skin.infoTf;
			infoTf.style.color="#ffffff";
			infoTf.style.fontSize = 25;
			infoTf.scrollRect = new Rectangle(0,0,infoTf.width,infoTf.height);
			QuickUtils.addHTextScroll(infoTf);  
			_skin.confirmBtn.on(Event.CLICK,this,onClickConfirm);
		}
		
		
		
		public function showInfo(info:String):void
		{
//			info = "服务器将于<span style='color:#E53333;'>7月4日20:00</span>整进行维护，预计<span style='color:#E53333;'>21:00</span>维护完成。<br />"
//				+"现在起至维护完成期间将关闭房间创建和加入功能，已经在游戏中的玩家请注意服务器关闭时间。<br />"
//				+"维护完成后将奉上<span style='color:#E53333;'>1000</span>钻石作为补偿，给大家带来的不便请大家谅解。<br />"
//				+"<br />" 
//				+"<span style='align:right;'>一乐麻将运营团队</span>";
			
//			<span style='align:right;'>
//				一乐麻将运营团队
//				</span>
			
			info = QuickUtils.html_decode(info);
				
			infoTf.innerHTML = info;
			 
			
			
			show();
		}
		
		
		
		public function show():void
		{
			QuickUtils.AddCenter(_skin,UIManager.instance.popLayer);
		}
		
		public function hide():void
		{
			_skin && _skin.removeSelf();
		}
		
		protected function onClickConfirm(e:Event):void
		{
			hide();
		}
	}
}