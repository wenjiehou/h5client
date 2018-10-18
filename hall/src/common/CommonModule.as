package common
{
	import common.context.CommonContext;
	
	import rb.framework.errors.SingletonError;
	import rb.framework.mvc.GameContext;
	import rb.framework.mvc.Module;
	
	public class CommonModule extends Module
	{
		
		protected static var _instance:CommonModule;
		
		public function get commonContext():CommonContext
		{
			if(this.stateManager.currentState != _commonContext)
			{
				gotoCommonContext();
			}
			return _commonContext;
		}

		public static function get instance():CommonModule
		{
			if(_instance == null)
			{
				_instance = new CommonModule();
			}
			return _instance;
		}
		
		public function CommonModule()
		{
			super();
			if (_instance != null){
				throw (new SingletonError(this));
			};
			_instance = this;
		}
		
		protected var _emptyContext:GameContext;
		protected var _commonContext:CommonContext;
		
		override public function startup():void
		{
			if(_emptyContext == null)
			{
				_emptyContext = new GameContext("commonMainContext",this);
				_commonContext = new CommonContext("CommonContext",this,_emptyContext);
			}
			goEmpty();
		}
		
		public function goEmpty():void
		{
			this.switchState(_emptyContext);
		}
		
		public function gotoCommonContext():void
		{
			this.switchState(_commonContext);
			
		}
		
		public function regotoCommonText():void
		{
			goEmpty();
			gotoCommonContext();
		}
		
		
		
		
		
		
	}
}