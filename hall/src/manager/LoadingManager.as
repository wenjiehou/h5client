package manager
{
	
	import common.event.EventCenter;
	
	import laya.net.Loader;
	import laya.utils.Handler;
	
	public class LoadingManager
	{
		protected static var _instance:LoadingManager;
		
		public static function get instance():LoadingManager
		{
			if(!_instance)
			{
				_instance = new LoadingManager(new SingleForcer());
			}
			
			return _instance;
		}
		
		private const _gameCommRes:Array = [
			{url: "res/atlas/chat.atlas", type: Loader.ATLAS},
			{url: "res/atlas/faceexpress.atlas", type: Loader.ATLAS},
			{url: "res/atlas/ani.atlas", type: Loader.ATLAS},
			
			{url: "res/atlas/gameCommon.atlas", type: Loader.ATLAS},
			{url: "res/atlas/gameCommon/Option.atlas", type: Loader.ATLAS},
			{url: "res/atlas/gameCommon/voice.atlas", type: Loader.ATLAS},
			
		];
		
		
		
		public static var totalProgress:Number = 0;
		public static var isAllLoaded:Boolean = false;
		
		public function LoadingManager(forcer:SingleForcer)
		{
			
		}
		
		public function showLoadPro(caller:*,callBack:Function=null):void
		{
			totalProgress = 0;
			UIManager.instance.uiLoading.show(caller,callBack);
		}
		
		
		public function loadCommon(caller:*,callBack:Function=null):void 
		{ 
			Laya.loader.load([
				{url: "res/atlas/common.atlas", type: Loader.ATLAS},//"res/animations/goldflay/jinbeikuang.atlas"
				{url: "res/atlas/hall/btn.atlas", type: Loader.ATLAS}
			],Handler.create(this, onCommonResLoaded),
				Handler.create(this,onCommonProgress,null,false)//
			);
			
			totalProgress = 0;
			UIManager.instance.uiLoading.show(caller,callBack);
		}
		
		protected function onCommonProgress(progress:Number):void
		{
			totalProgress = 0.3*progress;
		}
		
		protected function onCommonResLoaded():void
		{
			totalProgress = 0.3;
			loadConfig();
		}
		
		protected function loadConfig():void 
		{
			Laya.loader.load("res/createroom.json",Handler.create(this,configLoaded),Handler.create(this,onConfigProgress,null,false));
		}
		
		
		protected function onConfigProgress(progress:Number):void
		{
			totalProgress = 0.3 + 0.3*progress;
		}
		
		protected function configLoaded(data:*):void
		{
			AppConfig.costRule=data;
			trace(AppConfig.costRule);
			
			AppConfig.giftConfig = [];
			
			for each(var item:* in AppConfig.costRule.gift)
			{
				AppConfig.giftConfig.push(item);
			}
			
			AppConfig.giftConfig.sort(compareFun);
			
			trace("AppConfig.giftConfig::" ,AppConfig.giftConfig);
			
			totalProgress = 0.6;
			loadFont();
		}
		
		protected function compareFun(A:Object,B:Object):int
		{
			if(parseInt(A.id) < parseInt(B.id))
			{
				return -1;
			}
			else
			{
				return 1;
			}
		}
		
		private function onProtoLoaded(err, root):void
		{ 
			AppConfig.proto = root.QCLOUD;
			
		}
		/*载入位图文本*/
		private function loadFont():void
		{
			TextManager.instance.loadFont(onAllFontLoaded);			
		}
		
		private function onAllFontLoaded():void
		{
			isAllLoaded = true;
			totalProgress = 1;
		}
		
		/**所有游戏都需要的公共资源*/
		public function loadGameCommon(caller:*,callBack:Function=null):void
		{
			Laya.loader.load(
				_gameCommRes,
				Handler.create(this, onGameComLed,[caller,callBack]),
				Handler.create(this,ononGameComPgs,null,false)//
			);
		}
		
		private function onGameComLed(caller:*,callBack:Function=null):void
		{
			totalProgress = 0.3;
			if(callBack)
			{
				callBack.apply(caller);
			}
		}
		
		private function ononGameComPgs(progress):void
		{
			totalProgress=0.3*progress;
		}
		
		
		public function startLoadGameRes(caller:*,callBack:Function=null):void
		{
			totalProgress = 0;
			loadGameCommon(this,loadGameRes)
			UIManager.instance.uiLoading.show(caller,callBack,true,0.9);
		}
		
		private function loadGameRes():void
		{
			var resArr:Array;
			
			if(UserData.roomtype == UserData.RoomType_Xiangshan || UserData.roomtype == UserData.RoomType_Xizhou)
			{
				resArr = [{url: "res/atlas/gametable.atlas", type: Loader.ATLAS},
					{url: "res/atlas/gametable/mahjongpai.atlas", type: Loader.ATLAS},
					{url: "res/atlas/gametable/gameOver.atlas", type: Loader.ATLAS},
					{url: "res/atlas/gametable/huapart.atlas", type: Loader.ATLAS},
					{url: "res/atlas/gametable/chengbao.atlas", type: Loader.ATLAS},
					{url: "res/atlas/gametable/shaizi.atlas", type: Loader.ATLAS},
					{url: "res/atlas/gametable/shaizi/animal.atlas", type: Loader.ATLAS},
				];
			}
			else if(UserData.roomtype == UserData.RoomType_SanDizhu)
			{
				resArr = [{url: "res/atlas/sddzGame.atlas", type: Loader.ATLAS},
					{url: "res/atlas/poker.atlas", type: Loader.ATLAS},
				];
			}
			else if(UserData.roomtype == UserData.RoomType_SirenDizhu)
			{
				resArr = [{url: "res/atlas/srddzGame.atlas", type: Loader.ATLAS},
					{url: "res/atlas/poker.atlas", type: Loader.ATLAS},
				];
			}
			else if(UserData.roomtype == UserData.RoomType_DandanPinshi)
			{
				resArr = [{url: "res/atlas/niuniuGame.atlas", type: Loader.ATLAS},
					{url: "res/atlas/poker.atlas", type: Loader.ATLAS},
					{url: "res/atlas/niuniuGame/niuType.atlas", type: Loader.ATLAS},
				];
			}
			
			Laya.loader.load(
					resArr,
				Handler.create(this, onLoaded),
				Handler.create(this,onProgress,null,false)//
			);
		}
		
		/**进入游戏后偷偷加载*/
		public function onGoInGameBackLoad():void
		{
			if(UserData.roomtype == UserData.RoomType_Xiangshan || UserData.roomtype == UserData.RoomType_Xizhou)
			{
				Laya.loader.load([{url: "res/swfs/dianpao.atlas", type: Loader.BUFFER},
					{url: "res/swfs/hu.atlas", type: Loader.BUFFER},
					{url: "res/swfs/zimo.atlas", type: Loader.BUFFER}]);
			}
		}
		
		private function onProgress(progress):void{
			totalProgress=0.3 + 0.6*progress;
		}
		private function onLoaded():void
		{
			totalProgress=0.9;
			//alert("麻将资源加载完成！");
		}
		
		
		
		public var isInLoadingGameJs:Boolean = false;
		
		/**加载西周麻将的代码*/
		public function loadGameJS(caller:*,comp:Function):void
		{
			totalProgress = 0.9;
			UIManager.instance.uiLoading.show();
			
			if(UserData.roomtype == UserData.RoomType_Xiangshan || UserData.roomtype == UserData.RoomType_Xizhou)
			{
				if(__JS__('ui.mainGame') != undefined)
				{
					loadGameJs(caller,comp);
				}
				else
				{
					isInLoadingGameJs = true;
					var urljs:String = "js/mjGameUI.js";
					if(AppConfig.isXianshang)
					{
						urljs = "js/mjGameUI.min.js";
					}
					Laya.loader.load(urljs,Handler.create(this,onLoadedGameUIJS,[caller,comp]),Handler.create(this,onmjGameUIJsProgress),Loader.TEXT);//game.min.js
					
				}
			}
			else if(UserData.roomtype == UserData.RoomType_SanDizhu) 
			{
				if(__JS__('ui.sddzGame') != undefined)
				{
					loadGameJs(caller,comp);
				}
				else
				{
					isInLoadingGameJs = true;
					var urljs:String = "js/sddzGameUI.js";
					if(AppConfig.isXianshang)
					{
						urljs = "js/sddzGameUI.min.js";
					}
					Laya.loader.load(urljs,Handler.create(this,onLoadedGameUIJS,[caller,comp]),Handler.create(this,onmjGameUIJsProgress),Loader.TEXT);//game.min.js
					
				}
			}
			else if(UserData.roomtype == UserData.RoomType_SirenDizhu)
			{
				if(__JS__('ui.srddzGame') != undefined)
				{
					loadGameJs(caller,comp);
				}
				else
				{
					isInLoadingGameJs = true;
					var urljs:String = "js/srddzGameUI.js";
					if(AppConfig.isXianshang)
					{
						urljs = "js/srddzGameUI.min.js";
					}
					Laya.loader.load(urljs,Handler.create(this,onLoadedGameUIJS,[caller,comp]),Handler.create(this,onmjGameUIJsProgress),Loader.TEXT);//game.min.js
				}
			}
			else if(UserData.roomtype == UserData.RoomType_DandanPinshi)
			{
				if(__JS__('ui.niuniuGame') != undefined)
				{
					loadGameJs(caller,comp);
				}
				else
				{
					isInLoadingGameJs = true;
					var urljs:String = "js/niuniuGameUI.js";
					if(AppConfig.isXianshang)
					{
						urljs = "js/niuniuGameUI.min.js";
					}
					Laya.loader.load(urljs,Handler.create(this,onLoadedGameUIJS,[caller,comp]),Handler.create(this,onmjGameUIJsProgress),Loader.TEXT);//game.min.js
				}
			}
		}
		
		protected function loadGameJs(caller:*,comp:Function):void
		{
			totalProgress = 0.92;
			UIManager.instance.uiLoading.show();
			
			if(UserData.roomtype == UserData.RoomType_Xiangshan || UserData.roomtype == UserData.RoomType_Xizhou)
			{
				if(__JS__('modules.game') != undefined)
				{
					loadGameModuleJS(caller,comp);
				}
				else
				{
					isInLoadingGameJs = true;
					var urljs:String = "js/game.js";
					if(AppConfig.isXianshang)
					{
						urljs = "js/game.min.js";
					}
					Laya.loader.load(urljs,Handler.create(this,onLoadedComGameJS,[caller,comp]),Handler.create(this,onCommonGameJsProgress),Loader.TEXT);//game.min.js
				}
			}
			else if(UserData.roomtype == UserData.RoomType_SanDizhu)
			{
				if(__JS__('modules.sddzGame') != undefined)
				{
					ModuleDef.CurGameModule = __JS__('modules.sddzGame.SDdzGameModule');
					loadGameModuleJS(caller,comp);
				}
				else
				{
					isInLoadingGameJs = true;
					var urljs:String = "js/sddzGame.js";
					if(AppConfig.isXianshang)
					{
						urljs = "js/sddzGame.min.js";
					}
					Laya.loader.load(urljs,Handler.create(this,onLoadedComGameJS,[caller,comp]),Handler.create(this,onCommonGameJsProgress),Loader.TEXT);//game.min.js
				}
			}
			else if(UserData.roomtype == UserData.RoomType_SirenDizhu)
			{
				if(__JS__('modules.srddzGame') != undefined)
				{
					ModuleDef.CurGameModule = __JS__('modules.srddzGame.SrddzGameModule');
					loadGameModuleJS(caller,comp);
				}
				else
				{
					isInLoadingGameJs = true;
					var urljs:String = "js/srddzGame.js";
					if(AppConfig.isXianshang)
					{
						urljs = "js/srddzGame.min.js";
					}
					Laya.loader.load(urljs,Handler.create(this,onLoadedComGameJS,[caller,comp]),Handler.create(this,onCommonGameJsProgress),Loader.TEXT);//game.min.js
				}
			}
			else if(UserData.roomtype == UserData.RoomType_DandanPinshi)
			{
				if(__JS__('modules.nnGame') != undefined)
				{
					ModuleDef.CurGameModule = __JS__('modules.nnGame.NnGameModule');
					loadGameModuleJS(caller,comp);
				}
				else
				{
					isInLoadingGameJs = true;
					var urljs:String = "js/nnGame.js";
					if(AppConfig.isXianshang)
					{
						urljs = "js/nnGame.min.js";
					}
					Laya.loader.load(urljs,Handler.create(this,onLoadedComGameJS,[caller,comp]),Handler.create(this,onCommonGameJsProgress),Loader.TEXT);//game.min.js
				}
			}
			
			
		}
		
		protected function onLoadedGameUIJS(caller:*,comp:Function,data:*):void
		{
			__JS__("window.eval(data)");
			totalProgress = 0.92;
			loadGameJs(caller,comp);
		}
		
		protected function onmjGameUIJsProgress(progress:*):void
		{
			totalProgress = 0.9+0.02*progress;
		}
		
		
		protected function onCommonGameJsProgress(progress:*):void
		{
			totalProgress = 0.92+0.07*progress;
		}
		
		private function onLoadedComGameJS(caller:*,comp:Function,data:*):void
		{
			__JS__("window.eval(data)");
			
			if(UserData.roomtype == UserData.RoomType_Xiangshan || UserData.roomtype == UserData.RoomType_Xizhou)
			{
				totalProgress = 0.99;
				loadGameModuleJS(caller,comp);
				return;
			}
			else if(UserData.roomtype == UserData.RoomType_SanDizhu || UserData.RoomType_SirenDizhu || UserData.RoomType_DandanPinshi)
			{
				if(UserData.roomtype == UserData.RoomType_SanDizhu)
				{
					
					try{
						
						ModuleDef.CurGameModule = __JS__('modules.sddzGame.SDdzGameModule');
						ModuleDef.CurGameModule.instance.startup();
						
					}
					catch(e:Error)
					{
						AppConfig.reloadLaya();
					}
				}
				else if(UserData.roomtype == UserData.RoomType_SirenDizhu)
				{
					try{
						
						ModuleDef.CurGameModule = __JS__('modules.srddzGame.SrddzGameModule');
						ModuleDef.CurGameModule.instance.startup();
						
					}
					catch(e:Error)
					{
						AppConfig.reloadLaya();
					}
				}
				else if(UserData.roomtype == UserData.RoomType_DandanPinshi)
				{
					try{
						
						ModuleDef.CurGameModule = __JS__('modules.nnGame.NnGameModule');
						ModuleDef.CurGameModule.instance.startup();
						
					}
					catch(e:Error)
					{
						AppConfig.reloadLaya();
					}
				}
				
				totalProgress = 1;
				
				
				if(AppConfig.needIntoGame)
				{
					comp.apply(caller);
				}
				
				AppConfig.needIntoGame = true;
				
				isInLoadingGameJs = false;
				UIManager.instance.uiLoading.hide();
				EventCenter.instance.event(EventCenter.LOAD_MODULES_JS_LOADED);
			}
		   //todo 添加新游戏
			
			
			
			
			
		}
		
		protected function loadGameModuleJS(caller:*,comp:Function):void
		{
			isInLoadingGameJs = true;
			var urljs:String ="";
			switch(UserData.roomtype)
			{
				case UserData.RoomType_Xizhou:
					if(__JS__('modules.xizhouGame') != undefined)
					{
						onLoadedModuleGameJS(caller,comp,"");
						return;
					}
					urljs = "js/xizhouGame.js";
					if(AppConfig.isXianshang)
					{
						urljs = "js/xizhouGame.min.js";
					}
					break;
				case UserData.RoomType_Xiangshan:
					if(__JS__('modules.xiangshanGame') != undefined)
					{
						onLoadedModuleGameJS(caller,comp,"");
						return;
					}
					
					urljs = "js/xiangshanGame.js";
					if(AppConfig.isXianshang)
					{
						urljs = "js/xiangshanGame.min.js";
					}
					break;
			}
			Laya.loader.load(urljs,Handler.create(this,onLoadedModuleGameJS,[caller,comp,urljs]),Handler.create(this,onModuleJSProgress),Loader.TEXT);//game.min.js
		}
		
		protected function onModuleJSProgress(progress:*):void
		{
			totalProgress = 0.99 + 0.01*progress;
		}
		
		protected function onLoadedModuleGameJS(caller:*,comp:Function,urljs:String,data:*=null):void
		{
			totalProgress = 1;
			try{
				if(data!=null)
				{
					__JS__("window.eval(data)");
				}
				
				switch(UserData.roomtype)
				{
					case UserData.RoomType_Xizhou:
						ModuleDef.CurGameModule = __JS__('modules.xizhouGame.XizhouGameModule');
						ModuleDef.CurGameModule.instance.startup();
						break;
					case UserData.RoomType_Xiangshan:
						ModuleDef.CurGameModule = __JS__('modules.xiangshanGame.XiangSGameModule');
						ModuleDef.CurGameModule.instance.startup();
						break;
				}
			}
			catch(e:Error)
			{
				AppConfig.reloadLaya();
			}
			
			trace("game.................. startup");
			
			if(AppConfig.needIntoGame)
			{
				comp.apply(caller);
			}
			
			AppConfig.needIntoGame = true;
			
			isInLoadingGameJs = false;
			UIManager.instance.uiLoading.hide();
			EventCenter.instance.event(EventCenter.LOAD_MODULES_JS_LOADED);
		}
		
	}
}

class SingleForcer{}