/* ----------------------------------------------------------------------------------------------------------------------------------------------------- /

public class BaseContext extends GameContext - 类功能 - GAOLEI

/ ----------------------------------------------------------------------------------------------------------------------------------------------------- */

package modules.sddzGame.context
{
	
	import modules.sddzGame.controller.SDdzGameSocketController;
	
	import rb.framework.mvc.GameContext;
	import rb.framework.mvc.Module;
	
	public class GameMainContext extends GameContext
	{
		// --- Vars ------------------------------------------------------------------------------------------------------------------------------------------------ //
		protected var _socketControl:SDdzGameSocketController;

		public function get socketControl():SDdzGameSocketController
		{
			return _socketControl;
		}

		// --- Public Functions ------------------------------------------------------------------------------------------------------------------------------------ //
		public function GameMainContext(key:String="", module:Module=null, parentNode:GameContext=null)
		{
			super(key, module, parentNode);
		}
		public override function open():void{
			super.open();
			
			if(_socketControl == null)
			{
				_socketControl = new SDdzGameSocketController();
			}
			
			this.addController(socketControl);
		}
		override public function close():void{
			super.close();
			
			//停止监听
			//PomeloController.stopGameListen();
		}
		// --- Protected Functions --------------------------------------------------------------------------------------------------------------------------------- //
		
		// --- Internal&Private Functions -------------------------------------------------------------------------------------------------------------------------- //
		
		// --- Static Vars ----------------------------------------------------------------------------------------------------------------------------------------- //
		
		// --- Static Functions ------------------------------------------------------------------------------------------------------------------------------------ //
		
	}
}
