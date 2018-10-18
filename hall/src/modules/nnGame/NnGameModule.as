package modules.nnGame
{
	import common.CommonModule;
	
	import hall.HallModule;
	import hall.view.RecordView;
	
	import laya.display.Stage;
	import laya.utils.Browser;
	
	import modules.nnGame.context.NnMainContext;
	import modules.nnGame.inerGame.context.NnContext;
	
	import rb.framework.errors.SingletonError;
	import rb.framework.mvc.GameContext;
	import rb.framework.mvc.Module;
	
	/*[COMPILER OPTIONS:ForcedCompile]*/ 
	public class NnGameModule extends Module
	{
		
		public var needResize:Boolean = true;
		/**是否在游戏中*/
		public static var inGame:Boolean=false;
		/**是否暂停游戏消息队列*/
		public static var isPauseGameQueue:Boolean = false;
		/**是否是在收到了总的结算数据了*/
		public static var isSettlement:Boolean = false;
		
		private static var _instance:NnGameModule;
		
		public static function get instance():NnGameModule{
			if (_instance == null)
			{
				_instance = new NnGameModule();
			}
			return _instance;
		}
		
		
		public function NnGameModule()
		{
			super();
			if (_instance != null)
			{
				throw (new SingletonError(this));
			}
			_instance = this;
		}
		
		protected var _main:NnMainContext;

		public function get main():NnMainContext
		{
			return _main;
		}
		
		protected var _gameContext:NnContext;

		public function get gameContext():NnContext
		{
			return _gameContext;
		}
		
		protected var _mainContext:GameContext;
		
		public override function startup():void{
			if(_mainContext == null)
			{
				_mainContext = new GameContext("nnGameMainmain",this);
				_main = new NnMainContext("nnGameMain",this,_mainContext);
				_gameContext = new NnContext("nnGame",this,_main);
			}
			this.switchState(this._mainContext);
		}
		
		
		public function stopGame(gotoHall:Boolean=true,needClear:Boolean=false):void
		{
			if(needClear)
			{
				_gameContext.controller.clear();
			}
			
			inGame=false;
			isSettlement = false;
			this.switchState(this._mainContext);
			
			
			if(gotoHall){
				inHallResize();
				HallModule.instance.gotoHall();
			}
		}
		
		public function startGame():void
		{
			Browser.window.document.title = AppConfig.nameTitle+"拼十";
			if(inGame == true)
			{
				return;
			}
			HallModule.instance.goEmpty();
			inGame=true;
			CommonModule.instance.gotoCommonContext();
			this.switchState(this.gameContext);
			inGameResize(); 
			
		
			RecordView.gameName="拼十";
		
			
			WX.onMenuShareTimeline(UserData.nickname+"-"+AppConfig.nameTitle+"拼十("+AppConfig.costRule[UserData.roomtype+""][UserData.Rule[3]]+")【房间号："+UserData.roomid+"】",UserData.roomid+"--"+UserData.uniqueCode);
			WX.onMenuShareAppMessage(UserData.nickname+"-"+AppConfig.nameTitle+"拼十("+AppConfig.costRule[UserData.roomtype+""][UserData.Rule[3]]+")【房间号："+UserData.roomid+"】","房主创建了拼十 【房间号:"+UserData.roomid+"】"+AppConfig.getRule(UserData.Rule[1]).desc+"",UserData.roomid+"--"+UserData.uniqueCode);			
			trace("startSrddzGame...........");
		}
		
		protected function inGameResize(isFirst:Boolean=true):void
		{
			if(QuickUtils.sysem()!="windows"){
				Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;
			}
			
			
			Laya.stage.size(1038,640);//1038,640
			
			
			NnGameModule.instance.gameContext.view.gui.visible = false;
			if(isFirst == true)//第一次
			{
				Laya.timer.once(200,this,onCheckInGameResize);
			}
			else
			{
				Laya.timer.frameOnce(1,this,onCheckInGameResize);
			}
		}
		
		protected function onCheckInGameResize():void
		{
			if(ModuleDef.CurGameModule.inGame == true)
			{
				var canvas:* = Browser.getElementById("layaCanvas");
				if(canvas.width < canvas.height)//不正常了
				{
					QuickUtils.showChScreenGuideView();
					inGameResize(false);
				}
				else
				{
					QuickUtils.hideChScreenGuideView();
					NnGameModule.instance.gameContext.view.gui.visible = true;
				}
			}
			else
			{
				QuickUtils.hideChScreenGuideView();
			}
			
		}
		
		
		
		protected function inHallResize():void
		{
			if(QuickUtils.sysem()=="windows"){
			}else if(QuickUtils.sysem()=="ipad"||QuickUtils.sysem()=="mac"){
				Laya.stage.screenMode = Stage.SCREEN_VERTICAL;//SCREEN_VERTICAL //SCREEN_HORIZONTAL
			}else{
				Laya.stage.screenMode = Stage.SCREEN_VERTICAL;//SCREEN_VERTICAL //SCREEN_HORIZONTAL
			}
			Laya.stage.size(640,1038);
		}
		
		
	}
}