package common.context
{
	import common.controller.CommonController;
	import common.view.CommonView;
	
	import rb.framework.mvc.GameContext;
	import rb.framework.mvc.Module;
	
	public class CommonContext extends GameContext
	{
		public function CommonContext(key:String="", module:Module=null, parentNode:GameContext=null)
		{
			super(key, module, parentNode);
		}
		
		protected var _controller:CommonController;

		public function get controller():CommonController
		{
			return _controller;
		}

		protected var _view:CommonView;

		public function get view():CommonView
		{
			return _view;
		}

		
		override public function open():void{
			super.open();
			if(_controller == null)
			{
				_controller = new CommonController();
				_view = new CommonView();
			}
			
			addController(_controller);
			addView(_view);
			
			
		}
		
		override public function close():void
		{
			super.close();
		}
	}
}