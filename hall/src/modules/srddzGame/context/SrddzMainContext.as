package modules.srddzGame.context
{
	import modules.srddzGame.controller.SrddzMainController;
	
	import rb.framework.mvc.GameContext;
	import rb.framework.mvc.Module;
	
	public class SrddzMainContext extends GameContext
	{
		protected var _socketControl:SrddzMainController;

		public function get socketControl():SrddzMainController
		{
			return _socketControl;
		}

		
		public function SrddzMainContext(key:String="", module:Module=null, parentNode:GameContext=null)
		{
			super(key, module, parentNode);
		}
		
		public override function open():void{
			super.open();
			
			if(_socketControl == null)
			{
				_socketControl = new SrddzMainController();
			}
			this.addController(socketControl);
		}
	}
}