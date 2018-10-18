/* ----------------------------------------------------------------------------------------------------------------------------------------------------- /

public class GameModule extends Module - 类功能 -

/ ----------------------------------------------------------------------------------------------------------------------------------------------------- */

package modules.game
{
	import common.CommonModule;
	
	import hall.HallModule;
	
	import laya.display.Stage;
	import laya.utils.Browser;
	
	import modules.game.context.GameMainContext;
	import modules.game.majiangGame.context.MajiangGameContext;
	import modules.game.majiangGame.view.animation.HuAnimation;
	
	import rb.framework.mvc.GameContext;
	import rb.framework.mvc.Module;
	
	/*[COMPILER OPTIONS:ForcedCompile]*/ 
	public class GameModule extends Module
	{
		// --- Vars ------------------------------------------------------------------------------------------------------------------------------------------------ //
		
		public var needResize:Boolean = true;
		/**是否暂停游戏消息队列*/
		public static var isPauseGameQueue:Boolean = false;
		
		protected var _main:GameMainContext; 
		public static var inGame:Boolean=false;
		/**是否是在收到了总的结算数据了*/
		public static var isSettlement:Boolean = false;
		
		public function get main():GameMainContext
		{
			return _main;
		}
		
		protected var _majiangGameContext:MajiangGameContext;
		
		// --- Public Functions ------------------------------------------------------------------------------------------------------------------------------------ //
		public function GameModule()
		{
			super();
//			if (_instance != null){
//				throw (new SingletonError(this));
//			};
//			_instance = this;
		}
		
		// --- Protected Functions --------------------------------------------------------------------------------------------------------------------------------- //
		public function get gameContext():MajiangGameContext
		{
			return _majiangGameContext;
		}
		
		protected var _mainContext:GameContext;


		public override function startup():void{
			if(_mainContext == null)
			{
				_mainContext = new GameContext("GameMainmain",this);
				_main=new GameMainContext("GameMain",this,_mainContext);
				_majiangGameContext = new MajiangGameContext("MajiangGame",this,_main);
			}
			this.switchState(this._mainContext);
			 
		}
		
		public function stopGame(gotoHall:Boolean=true,needClear:Boolean=false):void
		{
			if(needClear)
			{
				_majiangGameContext.controller.clear();
			}
			inGame=false;
			isSettlement = false;
			this.switchState(this._mainContext);
			if(gotoHall){
				if(AppConfig.isNewHall){
					QuickUtils.gotoHall()
				}else{
					inHallResize();
					HallModule.instance.gotoHall();
				}
			}
			HuAnimation.instance.noticeHide();
			
		}
		
		public function startGame():void
		{
			if(inGame == true)
			{
				return;
			}
			
			HallModule.instance.goEmpty();
			inGame=true;
			CommonModule.instance.gotoCommonContext();
			this.switchState(this.gameContext);
			inGameResize();
			
			
			
			WX.onMenuShareTimeline(UserData.nickname+"-一乐西周麻将 【房间号："+UserData.roomid+"】",UserData.roomid+"--"+UserData.uniqueCode);
			WX.onMenuShareAppMessage(UserData.nickname+"-一乐西周麻将 【房间号："+UserData.roomid+"】","房主创建了西周麻将 【房间号:"+UserData.roomid+"】"+AppConfig.getRule(UserData.Rule[1]).desc+"局",UserData.roomid+"--"+UserData.uniqueCode);
			
			trace("startMajiangGame...........");
		}
		
		protected function inGameResize(isFirst:Boolean=true):void
		{
			if(QuickUtils.sysem()!="windows"){
				Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;
			}
			
			
			Laya.stage.size(1038,640);//1038,640
			
			
			GameModule.instance.gameContext.view.gui.visible = false;
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
					GameModule.instance.gameContext.view.gui.visible = true;
					
					
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
		
		// --- Internal&protected Functions -------------------------------------------------------------------------------------------------------------------------- //
		
		// --- Static Vars ----------------------------------------------------------------------------------------------------------------------------------------- //
		// static	protected  var _instance:GameModule;
		
		// --- Static Functions ------------------------------------------------------------------------------------------------------------------------------------ //
		
		public static function get instance():GameModule{
			
			return ModuleDef.CurGameModule.instance;

		}
		
		
	}
}
