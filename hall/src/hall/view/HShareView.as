package hall.view
{
	
	import common.baseui.UIBase;
	
	import laya.display.Sprite;
	import laya.events.Event;
	import laya.utils.Ease;
	import laya.utils.TimeLine;
	
	import manager.UIManager;
	
	import ui.hall.HallShareViewUI;

	public class HShareView extends UIBase
	{
		protected var _skin:HallShareViewUI;
		public var caller:Function;
		public function HShareView(container:Sprite=null)
		{
			super(container);
			_skin = new HallShareViewUI();
			_skin.mouseEnabled = true;
			this.timeLine.to(_skin.TipHand,{y:100},600,Ease.quadIn).to(_skin.TipHand,{y:150},600,Ease.quadOut);
			this.timeLine.play(0,true);
			this.timeLine.pause();
		}
		
		protected override function onLoaded():void
		{
			trace('rechargeView.atlas')
			super.onLoaded();
			if(_isShow)
			{
				this.timeLine.resume();
				container.addChild(_skin);
			}
			init();
		}
		private var timeLine:TimeLine = new TimeLine();
		protected function init():void
		{
			_skin.ShareMask.on(Event.CLICK,this,function():void{
				hide();
				if(this.caller){
					this.caller();
				}
			});//返回大厅
		}
		
		public override function show():void
		{
			super.show();
			if(_skin)
			{
				_skin.TipHand.y=150;
				UIManager.instance.uiCommonLayer.addChild(_skin);
				this.timeLine.resume();
			}
		}
		
		public override function hide():void
		{
			super.hide();
			if(_skin && _skin.parent)
			{
				this.timeLine.pause();
				_skin.parent.removeChild(_skin);
			}
		}
	}
}