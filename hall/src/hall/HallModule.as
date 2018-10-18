package hall
{
	import common.CommonModule;
	
	import hall.context.HallContext;
	
	import laya.utils.Browser;
	
	import net.Pomelo;
	
	import rb.framework.errors.SingletonError;
	import rb.framework.mvc.GameContext;
	import rb.framework.mvc.Module;
	
	public class HallModule extends Module
	{
		protected static var _instance:HallModule;
		
		public function HallModule()
		{
			super();
			if (_instance != null){
				throw (new SingletonError(this));
			};
			_instance = this;
		}
		
		public function get hallContext():HallContext
		{
			return _hallContext;
		}

		public static function get instance():HallModule
		{
			if(_instance == null)
			{
				_instance = new HallModule();
			}
			
			return _instance;
		}
		
		protected var _mainContext:GameContext;
		protected var _hallContext:HallContext;
		
		public override function startup():void
		{
			if(_mainContext == null)
			{
				_mainContext = new GameContext("hallMainContext",this);
				_hallContext = new HallContext("hallContext",this,_mainContext);
			}
			
			goEmpty();
		}
		
		public var isInHall:Boolean = false;
		
		public function goEmpty():void
		{
			this.switchState(_mainContext);
			isInHall = false;
		}
		
		public function gotoHall(caller:*=null,comp:Function=null):void
		{
			if(ModuleDef.CurGameModule && ModuleDef.CurGameModule.inGame)
			{
				var cc = ModuleDef.CurGameModule;
				ModuleDef.CurGameModule.instance.stopGame(false);
			}
			
//			if(ModuleDef.XizhouGameModule)
//			{
//				ModuleDef.XizhouGameModule.stopGame(false);
//			}
			
			if(QuickUtils.popBox)
			{
				QuickUtils.popBox.onhide();
			}
			
			Browser.window.document.title = AppConfig.nameTitle;
			CommonModule.instance.gotoCommonContext();
			this.switchState(_hallContext);
			isInHall = true;
			comp && comp.apply(caller);
			
			//Pomelo.instance.close();
		}
		
	}
}