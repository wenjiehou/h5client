package modules.game.majiangGame.view.playerInfoPart
{
	import common.tools.SoundPlay;
	
	import laya.ani.swf.MovieClip;
	import laya.events.Event;
	import laya.utils.Handler;
	import laya.utils.Tween;
	
	import manager.UIManager;

	public class GiftEff
	{
		private var expressUrl:String = "res/swfs/";
		
		private static var _instance:GiftEff;
		
		public static function get instance():GiftEff
		{
			if(_instance == null)
			{
				_instance = new GiftEff(new SingleForcer());
			}
			return _instance;
		}
		
		public function GiftEff(forcer:SingleForcer)
		{
			
		}
		
		public var loadedArr:Array = [];
		
		
		public function showGiftEff(fromDir:int,toDir:int,id:int):void
		{
			var mc:MovieClip = new MovieClip();
			mc.load(expressUrl+AppConfig.giftConfig[id-1].name + ".swf",true);
			
			var sound:String = AppConfig.giftConfig[id-1].sound;
			var sounddelay:int =  parseInt(AppConfig.giftConfig[id-1].sounddelay);
			
			if(loadedArr.indexOf(mc.basePath) != -1)
			{
				onLoaded(mc,fromDir,toDir,sound,sounddelay);
			}
			else
			{
				mc.on(Event.LOADED,this,onLoaded,[mc,fromDir,toDir,sound,sounddelay]);
			}
			//
			
			
		}
		
		protected function onLoaded(mc:MovieClip,fromDir:int,toDir:int,sound:String,sounddelay:int):void
		{
			if(loadedArr.indexOf(mc.basePath) == -1)
			{
				loadedArr.push(mc.basePath);
			}
			
			mc.stop();
			UIManager.instance.popLayer.addChild(mc);
			switch(fromDir)
			{
				case 0:
					mc.x = -50;
					mc.y = 318;
					break;
				case 1:
					mc.x = 880;
					mc.y = 70;
					break;
				case 2:
					mc.x = 130;
					mc.y = -40;
					break;
				case 3:
					mc.x = -50;
					mc.y = 90;
					break;
				default :
					mc.x = 820;
					mc.y = -50;
					break;
			}
			
			var tX:int,tY:int;
			
			switch(toDir)
			{
				case 0:
					tX = -50;
					tY = 318;
					break;
				case 1:
					tX = 880;
					tY = 70;
					break;
				case 2:
					tX = 130;
					tY = -40;
					break;
				case 3:
					tX = -50;
					tY = 90;
					break;
				default :
					tX = 820;
					tY = -50;
					break;
			}
			Tween.to(mc,{x:tX,y:tY},400,null,new Handler(this,onCompeteTween,[mc,sound,sounddelay]));
		}
		
		private function onCompeteTween(mc:MovieClip,sound:String,sounddelay:int):void
		{
			mc.playTo(0,mc.count-2,Handler.create(this,playEnd,[mc]));
			Laya.timer.once(3000,this,playEnd,[mc]);
			if(sounddelay == 0)
			{
				SoundPlay.playEffect(sound);
			}
			else
			{
				Laya.timer.once(sounddelay,this,playSound,[sound],false);
			}
			
			
			
		}
		
		protected function playSound(sound:String):void
		{
			SoundPlay.playEffect(sound);
		}
		
		protected function playEnd(mc:MovieClip):void
		{
			mc && mc.removeSelf();
		}
		
		
	}
}

class SingleForcer{}