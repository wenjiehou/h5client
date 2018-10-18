package modules.xiangshanGame
{
	import common.CommonModule;
	
	import hall.HallModule;
	import hall.view.RecordView;
	
	import laya.utils.Browser;
	
	import modules.game.GameModule;
	import modules.game.context.GameMainContext;
	import modules.game.majiangGame.view.animation.HuAnimation;
	import modules.xiangshanGame.majiangGame.context.XiangSMJGameContext;
	
	import rb.framework.errors.SingletonError;
	import rb.framework.mvc.GameContext;

	/*[COMPILER OPTIONS:ForcedCompile]*/ 
	public class XiangSGameModule extends GameModule
	{
		public static var inGame:Boolean=false;
		
		static	private  var _instance:XiangSGameModule;
		
		// --- Static Functions ------------------------------------------------------------------------------------------------------------------------------------ //
		
		public static function get instance():XiangSGameModule{
			
			if (_instance == null){
				_instance = new XiangSGameModule();
			};
			return (_instance);
		}
		
		public function XiangSGameModule()
		{
			if (_instance != null){
				throw (new SingletonError(this));
			};
			_instance = this;
		}
		
		override public function startup():void
		{
			Browser.window.document.title = AppConfig.nameTitle+"象山麻将(" + AppConfig.costRule[UserData.roomtype+""][UserData.Rule[3]]+")";
			if(_mainContext == null)
			{
				_mainContext = new GameContext("GameMainmain",this);
				_main=new GameMainContext("GameMain",this,_mainContext);
				_majiangGameContext = new XiangSMJGameContext("MajiangGame",this,_main);
			}
			this.switchState(this._mainContext);
		}
		
		override public function startGame():void
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
			if(AppConfig.isNewHall == false){
				RecordView.gameName="象山麻将";
				WX.onMenuShareTimeline(UserData.nickname+"-"+AppConfig.nameTitle+"象山麻将("+AppConfig.costRule[UserData.roomtype+""][UserData.Rule[3]]+")【房间号："+UserData.roomid+"】",UserData.roomid+"-"+UserData.uniqueCode+"-1");
				WX.onMenuShareAppMessage(UserData.nickname+"-"+AppConfig.nameTitle+"象山麻将("+AppConfig.costRule[UserData.roomtype+""][UserData.Rule[3]]+")【房间号："+UserData.roomid+"】","房主创建了西周麻将 【房间号:"+UserData.roomid+"】"+AppConfig.getRule(UserData.Rule[1]).desc+"局",UserData.roomid+"-"+UserData.uniqueCode+"-1");
			}else{
				WX.onMenuShareTimeline(UserData.nickname+"-"+AppConfig.nameTitle+"象山麻将("+AppConfig.costRule[UserData.roomtype+""][UserData.Rule[3]]+")【房间号："+UserData.roomid+"】",UserData.roomid+"--"+UserData.uniqueCode);
				WX.onMenuShareAppMessage(UserData.nickname+"-"+AppConfig.nameTitle+"象山麻将("+AppConfig.costRule[UserData.roomtype+""][UserData.Rule[3]]+")【房间号："+UserData.roomid+"】","房主创建了西周麻将 【房间号:"+UserData.roomid+"】"+AppConfig.getRule(UserData.Rule[1]).desc+"局",UserData.roomid+"--"+UserData.uniqueCode);
			}
			trace("startMajiangGame...........");
		}
		
		override public function stopGame(gotoHall:Boolean=true,needClear:Boolean=false):void
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
		
//		override protected function resize():void
//		{
//			if(inGame)
//			{
//				Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;
//				Laya.stage.size(1038,640);//1038,640
//			}
//			else
//			{
//				if(QuickUtils.sysem()=="windows"){
//					Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;//SCREEN_VERTICAL //SCREEN_HORIZONTAL
//				}else if(QuickUtils.sysem()=="ipad"||QuickUtils.sysem()=="mac"){
//					Laya.stage.screenMode = Stage.SCREEN_VERTICAL;//SCREEN_VERTICAL //SCREEN_HORIZONTAL
//				}else{
//					Laya.stage.screenMode = Stage.SCREEN_VERTICAL;//SCREEN_VERTICAL //SCREEN_HORIZONTAL
//				}
//				Laya.stage.size(640,1038);
//			}
//		}
		
	}
}