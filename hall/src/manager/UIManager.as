package manager
{
	
	import common.view.LoadingView;
	
	import laya.display.Sprite;

	public class UIManager
	{
		protected static var _instance:UIManager;
		
		public static function get instance():UIManager
		{
			if(!_instance)
			{
				_instance = new UIManager(new SingleForcer());
			}
			return _instance;
		}
		
		public var uiLayer:Sprite = new Sprite();
		public var uiCommonLayer:Sprite = new Sprite();
		public var popLayer:Sprite = new Sprite();
		
		public var uiLoading:LoadingView;
		
		
		
		public function UIManager(forcer:SingleForcer)
		{
			Laya.stage.addChild(uiLayer);
			Laya.stage.addChild(uiCommonLayer);
			Laya.stage.addChild(popLayer);
		}
		
		public function initLoadingView():void
		{
			uiLoading = new LoadingView(popLayer);
		}
	}
}

class SingleForcer{}