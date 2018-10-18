package common.view
{
	import laya.display.Sprite;
	import laya.events.Event;
	
	import manager.LoadingManager;
	
	import ui.load.LoadingViewUI;

	public class LoadingView extends Sprite
	{
		protected var _skin:LoadingViewUI;
		
		protected var _container:Sprite;
		
		public function LoadingView(container:Sprite)
		{
			_container = container;
			_skin = new LoadingViewUI();
			_skin.startBg.visible=true;
			_skin.logo.visible=true;
			this.addChild(_skin);
			_skin.barBox.on(Event.CLICK,this,function():void{});
			
		}
		
		protected var onLoadedFun:Function;
		protected var caller:*;
		protected var total:Number = 1;
		
		public function show(caller:*=null,callBack:Function=null,isShow:Boolean =true,total:Number=1):void
		{
			
			onLoadedFun = callBack;
			this.caller = caller;
			this.total = total;
			if(isShow)
			{
				_container.addChild(this);
			}
			if(Laya.stage.width>Laya.stage.height==false){
				_skin.barBox.rotation=0;
				_skin.bar1.rotation=0;
			}else{
				_skin.barBox.rotation=90;
				_skin.bar1.rotation=0;
			}
			Laya.timer.loop(50,this,onLoopLoading);
		}
		
		public function hide():void
		{
			
			_skin.startBg.visible=false;
			_skin.logo.visible=false;
			if(this.parent)
			{
				this.parent.removeChild(this);
			}
			
			Laya.timer.clear(this,onLoopLoading);
		}
		
		protected function onLoopLoading():void
		{
			trace("loading ..." + LoadingManager.totalProgress + "%");
			_skin.percentTf.text ="Loading ..."+parseInt(LoadingManager.totalProgress*100+"") + "%";
			_skin.progress.width = 500*LoadingManager.totalProgress;
			
			if(LoadingManager.totalProgress == total)
			{
				Laya.timer.clear(this,onLoopLoading);
				hide();
				if(onLoadedFun)
				{
					onLoadedFun.apply(caller);
				}
			}
		}
	}
}