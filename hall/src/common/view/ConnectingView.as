package common.view
{
	import manager.UIManager;
	
	import ui.common.ConnectingViewUI;
	
	public class ConnectingView extends ConnectingViewUI
	{
		public function ConnectingView()
		{
			super();
		}
		
		override public function get width():Number
		{
			return loadingImg.width;
		}
		
		override public function get height():Number
		{
			return loadingImg.height;
		}
		
		public function show():void
		{
			Laya.timer.loop(100,this,onTime);
			
			QuickUtils.AddCenter(this,UIManager.instance.popLayer);
		}
		
		public function hide():void
		{
			Laya.timer.clear(this,onTime);
			
			this.parent && this.parent.removeChild(this);
		}
		
		protected function onTime():void
		{
			loadingImg.rotation += 5;
		}
	}
}