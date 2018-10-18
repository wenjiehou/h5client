package common.view
{
	import common.event.EventCenter;
	
	import laya.events.Event;
	import laya.maths.Rectangle;
	
	import manager.UIManager;
	
	import ui.common.InfoListViewUI;

	public class InfoListView
	{
		protected var _skin:InfoListViewUI; 
		public var isShow:Boolean = false;
		
		public function InfoListView()
		{
			_skin = new InfoListViewUI();
			
			init();
		}
		
		protected function init():void
		{
			UIManager.instance.uiLayer.on(Event.CLICK,this,onClickUiLayer);
			
			_skin.messageTf.style.fontFamily = "SimHei";
			_skin.messageTf.style.fontSize = 24;
			
			_skin.messageTf.scrollRect = new Rectangle(0,0,_skin.messageTf.width,_skin.messageTf.height);
			QuickUtils.addHTextScroll(_skin.messageTf);
			
			EventCenter.instance.on(EventCenter.COMMON_INFOLIST_NOTICE,this,onGotInfo);
			_skin.messageTf.innerHTML = "<span/>";
			_skin.mouseThrough = true;
		}
		
		public function showOrHide():void
		{
			if(_skin.parent)
			{
				_skin.parent.removeChild(_skin);
				isShow = false;
			}
			else
			{
				QuickUtils.AddCenter(_skin,UIManager.instance.popLayer);
				//UIManager.instance.uiCommonLayer.addChild(_skin);
				isShow = true;
			}
		}
		
		public function show():void
		{
			QuickUtils.AddCenter(_skin,UIManager.instance.popLayer);
			
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
				
		protected function onGotInfo(info:Object):void
		{
			var v:int = info.color;
			var color:String =""
			
			switch(v)
			{
				case 0:
					color = "'#dbf3f4'";
					break;
				case 1:
					color = "'#d9271b'";
					break;
				default:
					color = "'#dbf3f4'";
					break;
			}
			
			_skin.messageTf.appendHTML("<br/><span color="+ color + ">"+QuickUtils.html_encode(info.msg)+"</span>");
			if(_skin.messageTf.contextHeight < _skin.messageTf.scrollRect.height)
			{
				return;
			}
			_skin.messageTf.scrollRect.y = _skin.messageTf.contextHeight-_skin.messageTf.scrollRect.height
		}
		
		public function reset():void
		{
			_skin.messageTf.innerHTML = "<span/>";
		}
		
		protected function onClickUiLayer(e:Event):void
		{
			hide();
		}
	}
}