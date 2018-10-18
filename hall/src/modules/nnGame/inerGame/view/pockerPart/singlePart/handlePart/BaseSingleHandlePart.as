package modules.nnGame.inerGame.view.pockerPart.singlePart.handlePart
{
	import laya.media.SoundManager;
	import laya.ui.View;
	import laya.utils.Handler;
	import laya.utils.Tween;
	
	import modules.nnGame.NnGameModule;
	import modules.nnGame.inerGame.model.NnModel;
	import modules.nnGame.inerGame.model.data.PaixingLogic;
	import modules.nnGame.inerGame.view.pockerPart.card.BasePocker;

	public class BaseSingleHandlePart
	{
		/**正常状态*/
		public static const STATE_NOMAL:int = 0;
		protected var state:int = 0;
		
		protected var _pockers:Vector.<BasePocker> = new Vector.<BasePocker>(5);//玩家手里最多有20张牌
		
		protected var skin:View;
		
		protected var fromPos:Array =[{x:174,y:-218},{x:174,y:-218},{x:174,y:-218},{x:174,y:-218},{x:217,y:-218}];
		protected var toPos:Array =[{x:0,y:0},{x:87,y:0},{x:174,y:0},{x:261,y:0},{x:390,y:0}];
		
		/**玩家手里的牌的基础类*/
		public function BaseSingleHandlePart(skin:View)
		{
			this.skin = skin;
			init();
		}
		
		protected function init():void
		{
			
		}
		
		
		public function showCards(cards:Array,dir:int):void
		{
			
		}
		
		/**站起*/
		public function up():void
		{
			var i:int;
			for(i=0;i<_pockers.length;i++)
			{
				_pockers[i].up();
			}
		}
		
		/**盖住（别人的牌的表现同up*/
		public function back():void
		{
			var i:int;
			for(i=0;i<_pockers.length;i++)
			{
				_pockers[i].back();
			}
		}
		
		/**到下（自己的牌同up）*/
		public function down():void
		{
			var i:int;
			for(i=0;i<_pockers.length;i++)
			{
				_pockers[i].down();
			}
		}
		
		/**设置牌是否可以操作*/
		public function set canControl(bool:Boolean):void
		{
			var i:int;
			for(i=0;i<_pockers.length;i++)
			{
				_pockers[i].canControl = bool;
			}
		}
		
		
		/**设置选中的牌*/
		public function set seleCards(cards:Array):void
		{
			
		}
		
		/**获取选中的牌*/
		public function get seleCards():Array
		{
			return null;
		}
		
		/**显示玩家已完成*/
		public function showComp(pos:int):void
		{
			
		}
		
		/**显示牌型*/
		public function showPaixing(pos:int,paixing:int):void
		{
		
		}
		
		public function hideAll():void
		{
			var i:int;
			for(i=0;i<_pockers.length;i++)
			{
				_pockers[i].hide();
				
			}
		}
		
		/**播放起牌动画*/
		public function playQipaiEff(isLast:Boolean):void
		{
			var i:int;
			var len:int = _pockers.length;
			
			if(isLast)
			{
				_pockers[4].skin.alpha = 0;
				_pockers[4].skin.x = fromPos[4].x;
				_pockers[4].skin.y = fromPos[4].y;
				_pockers[4].back();
				onSingleQiEff(4,isLast);
				
				//Laya.timer.frameOnce(i*2,this,onSingleQiEff,[i],false);
			}
			else
			{
				for(i=0;i<len-1;i++)
				{
					_pockers[i].skin.alpha = 0;
					_pockers[i].skin.x = fromPos[i].x;
					_pockers[i].skin.y = fromPos[i].y;
					_pockers[i].back();
					
					Laya.timer.frameOnce(i*2,this,onSingleQiEff,[i,isLast],false);
			}
		
//				onSingleQiEff(i);
			}
		}
		
		protected function onSingleQiEff(idx:int,isLast:Boolean):void
		{
			SoundManager.playSound("res/sounds/pinshi/effect/sound_fapai.mp3");
			_pockers[idx].skin.alpha = 0.1;
			Tween.to(_pockers[idx].skin,{x:toPos[idx].x,y:toPos[idx].y,alpha:1},100,null,Handler.create(this,onCompEff,[idx,isLast]));
		
		}
		
		protected function onCompEff(idx:int,isLast:Boolean):void
		{
			_pockers[idx].up();
		}
		
		/**播放最后一张牌翻牌*/
		public function playFanEff(needEff:Boolean=true):void
		{
			//_pockers[4].up();
		}
		
		
		public function reset():void
		{
			var i:int,len:int=_pockers.length;
			for(i=0;i<len;i++)
			{
				_pockers[i].reset();
			}
		}
		
		public function show():void
		{
			skin.visible = true;
		}
		
		public function hide():void
		{
			skin.visible = false;
		}
		
		public function get visible():Boolean
		{
			return skin.visible;
		}
		
		protected function get model():NnModel
		{
			return NnGameModule.instance.gameContext.model;
		}
	}
}