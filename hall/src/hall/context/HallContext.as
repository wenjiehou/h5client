package hall.context
{
	import hall.controller.HallController;
	import hall.model.HallModel;
	import hall.view.HallView;
	
	import rb.framework.mvc.GameContext;
	import rb.framework.mvc.Module;
	
	public class HallContext extends GameContext
	{
		public function HallContext(key:String="", module:Module=null, parentNode:GameContext=null)
		{
			super(key, module, parentNode);
		}
		
		protected var _hallController:HallController;

		public function get hallController():HallController
		{
			return _hallController;
		}

		protected var _hallModel:HallModel;
		protected var _hallView:HallView;
		
		public function get hallView():HallView
		{
			return _hallView;
		}

		override public function open():void
		{
			super.open();
			trace("hall open");
			if(_hallController == null)
			{
				_hallController = new HallController();
			}
			
			if(_hallModel == null)
			{
				_hallModel = new HallModel();
			}
			
			if(_hallView == null)
			{
				_hallView = new HallView();
			}
			
			this.addController(_hallController);
			this.addModel(_hallModel);
			this.addView(_hallView);
		}
		
		
		
		override public function close():void
		{
			super.close();
		}
	}
}