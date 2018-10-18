package modules.game.majiangGame.view.majiangPart.singlePart
{
	
	import laya.ani.swf.MovieClip;
	import laya.events.Event;
	import laya.ui.Image;
	import laya.utils.Handler;
	
	import ui.mainGame.Items.HandleEffItemUI;

	public class BaseHandleEffItem
	{
		public static const HANDLEEFF_TYPE_PENG:int = 0;
		public static const HANDLEEFF_TYPE_GANG:int = 1;
		public static const HANDLEEFF_TYPE_HU:int = 2;
		public static const HANDLEEFF_TYPE_LIANGPAI:int = 3;
		public static const HANDLEEFF_TYPE_CHI:int = 4;
		
		public static const HANDLEEFF_TYPE_DIANPAO:int = 5;
		public static const HANDLEEFF_TYPE_ZIMO:int = 6;
		
		protected var _skin:HandleEffItemUI;
		private var expressUrl:String = "res/swfs/";
		
		protected var _liangpaiMc:MovieClip;
		protected var _chiMc:MovieClip;
		protected var _pengMc:MovieClip;
		protected var _gangMc:MovieClip;
		protected var _huMc:MovieClip
		protected var _zimoMc:MovieClip;
		protected var _dianpaoMc:MovieClip;
		
		protected var _curMc:MovieClip;
		protected var _curImg:Image;
		
		public var loadedArr:Array = [];
		
		public function BaseHandleEffItem(skin:HandleEffItemUI)
		{
			_skin = skin;
			
			init();
			
			hide();
		}
		
		protected function init():void
		{
//			_dianpaoMc = new MovieClip();
//			_dianpaoMc.load(expressUrl+ "dianpao.swf",true);
//			_skin.dianpaoImg.addChild(_dianpaoMc);
//			_dianpaoMc.stop();
		}
		
		public function show():void
		{
			_skin.visible = true;
		}
		
		public function hide():void
		{
			_skin.visible = false;
		}
		
		public function showEff(type:int):void
		{
			trace("showEff::" + type);
			show();
			_skin.pengImg.visible = false;
			_skin.gangImg.visible = false;
			_skin.huImg.visible = false;
			_skin.liangpaiImg.visible = false;
			_skin.chiImg.visible = false;
			_skin.dianpaoImg.visible = false;
			_skin.zimoImg.visible = false;
			switch(type)
			{
				case HANDLEEFF_TYPE_PENG:
		
					if(!_pengMc)
					{
						_pengMc = new MovieClip();
						_pengMc.load(expressUrl+ "peng.swf",true);
						_skin.pengImg.addChild(_pengMc);
						_pengMc.on(Event.LOADED,this,onLoaded,[_pengMc]);
					}
					else
					{
						onLoaded(_pengMc);
					}
					
					
					_curMc = _pengMc;
					_curImg = _skin.pengImg;
					
					
					_skin.pengImg.visible = true;
					
					
					break;
				case HANDLEEFF_TYPE_GANG:
					if(!_gangMc)
					{
						_gangMc = new MovieClip();
						_gangMc.load(expressUrl+ "gang.swf",true);
						_skin.gangImg.addChild(_gangMc);
						
						_gangMc.on(Event.LOADED,this,onLoaded,[_gangMc]);
					}
					else
					{
						onLoaded(_gangMc);
					}
					_curMc = _gangMc;
					_curImg = _skin.gangImg;
					
					
					_skin.gangImg.visible = true;
					break;
				case HANDLEEFF_TYPE_HU:
					if(!_huMc)
					{
						_huMc = new MovieClip();
						_huMc.load(expressUrl+ "hu.swf",true);
						_skin.huImg.addChild(_huMc);
						_huMc.on(Event.LOADED,this,onLoaded,[_huMc]);
					}
					else
					{
						onLoaded(_huMc);
					}
					_curMc = _huMc;
					_curImg = _skin.huImg;
					
					
					_skin.huImg.visible = true;
					break;
				case HANDLEEFF_TYPE_LIANGPAI://没有实现
					_skin.liangpaiImg.visible = true;
					hide();
					break;
				case HANDLEEFF_TYPE_CHI:
					if(!_chiMc)
					{
						_chiMc = new MovieClip();
						_chiMc.load(expressUrl+ "chi.swf",true);
						_skin.chiImg.addChild(_chiMc);
						_chiMc.on(Event.LOADED,this,onLoaded,[_chiMc]);
					}
					else
					{
						onLoaded(_chiMc);
					}
					_curMc = _chiMc;
					_curImg = _skin.chiImg;
					
					_skin.chiImg.visible = true;
					break;
				
				case HANDLEEFF_TYPE_DIANPAO:
					if(!_dianpaoMc)
					{
						_dianpaoMc = new MovieClip();
						_dianpaoMc.load(expressUrl+ "dianpao.swf",true);
						_skin.dianpaoImg.addChild(_dianpaoMc);
						_dianpaoMc.on(Event.LOADED,this,onLoaded,[_dianpaoMc]);
					}
					else
					{
						onLoaded(_dianpaoMc);
					}
					_curMc = _dianpaoMc;
					_curImg = _skin.dianpaoImg;
					
					_skin.dianpaoImg.visible = true;
					
					break;
				
				case HANDLEEFF_TYPE_ZIMO:
					
					if(!_zimoMc)
					{
						_zimoMc = new MovieClip();
						_zimoMc.load(expressUrl+ "zimo.swf",true);
						_skin.zimoImg.addChild(_zimoMc);
						_zimoMc.on(Event.LOADED,this,onLoaded,[_zimoMc]);
						
					}
					else
					{
						onLoaded(_zimoMc);
					}
					_curMc = _zimoMc;
					_curImg = _skin.zimoImg;
					
					_skin.zimoImg.visible = true;
					
					break;
			}
			
			
			
			
			Laya.timer.once(800,this,playEnd);
		}
		
		protected function onLoaded(mc:MovieClip):void
		{
			mc.loop=false;
			_curMc = mc;
			mc.playTo(0,mc.count,Handler.create(this,playEnd));
			Laya.timer.frameLoop(1,this,onCheck);
		}
		
		protected function onCheck(mc:MovieClip):void
		{
			if(_curMc)
			{
				if(_curMc.playing == false)
				{
					hide();
					Laya.timer.clear(this,onCheck);
				}
			}
			else
			{
				hide();
				Laya.timer.clear(this,onCheck);
			}
		}
		
		protected function playEnd():void
		{
			_curMc && _curMc.stop();
			hide();
		}
		
//		protected function onTweenComplete():void
//		{
//			hide();
//		}
	}
}