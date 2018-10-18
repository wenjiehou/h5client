package common.view
{
	import laya.events.Event;
	
	import ui.common.closeMaskUI;

	public class CloseMask extends closeMaskUI
	{
		public function CloseMask()
		{
			this.bg.on(laya.events.Event.CLICK,this,function():void{})
		}
	}
}