package hall.view
{
	import common.baseui.UIBase;
	
	import laya.display.Sprite;
	import laya.events.Event;
	import laya.utils.Handler;
	
	import manager.UIManager;
	
	import ui.hall.HallServiceViewUI;
	
	public class HServiceView extends UIBase
	{
		protected var _skin:HallServiceViewUI;
		public function HServiceView(container:Sprite=null)
		{
			container = UIManager.instance.popLayer;
			super(container);
			skinRes = "";
		}
		
		
		private var txt:String="";
		override protected function onLoaded():void
		{
			super.onLoaded();
			this.txt+=AppConfig.costRule[3000+""]["service"];
			_skin = new HallServiceViewUI();
			_skin.mouseThrough = true;
			if(_isShow)
			{
				container.addChild(_skin);
			}
			
			this.init();
		}
		
		public var isTureService:Boolean=false;
		protected function init():void
		{
			this._skin.txt.text=this.txt;
			QuickUtils.AddTextScroll(this._skin.txt);
			
			this._skin.closeService.on(Event.CLICK,this,function(e:Event):void{
				this.isTureService=false;
				this.hide();
				e.stopPropagation();
			});
			
			this._skin.closeService.on(Event.CLICK,this,function(e:Event):void{
				this.isTureService=false;
				this.hide();
				e.stopPropagation();
			});
			
			this._skin.trueServiceBtn.on(Event.CLICK,this,function(e:Event):void{
				this.isTureService=true;
				this.hide();
				e.stopPropagation();
			})
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