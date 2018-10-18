package rb.framework.mvc
{
	import rb.framework.mvc.strategies.NotifyStrategy;
	import rb.framework.fsm.StateManager;

	public class Module
	{
		protected var _strategy:NotifyStrategy;
		public var stateManager:StateManager;
		public function Module()
		{
			this.stateManager = new StateManager();
		}
		public function get strategy():NotifyStrategy{
			if (this._strategy == null){
				
				this._strategy = new NotifyStrategy();
				
				
			};
			
			
			return (this._strategy);
		}
		public function startup():void{
			
			
		}
		public function switchState(state:GameContext):void{
			stateManager.switchState(state);
		}
	}
}