package modules.nnGame.inerGame.view.pockerPart.singlePart.handlePart
{
	import laya.events.Event;
	
	import manager.TimeManager;
	
	import modules.nnGame.inerGame.model.data.JishuArrData;
	import modules.nnGame.inerGame.model.data.NiuData;
	import modules.nnGame.inerGame.model.data.PaixingLogic;
	import modules.nnGame.inerGame.view.pockerPart.card.BottomHandlePocker;
	
	import ui.niuniuGame.niuniuPart.handlePart.OwnerHandlePartUI;
	
	
	/**自己手里的牌的部分*/
	public class BottomSingleHandlePart extends BaseSingleHandlePart
	{
		protected var gap:Number = 55;
		protected var _skin:OwnerHandlePartUI;
		
		public function BottomSingleHandlePart(skin:OwnerHandlePartUI)
		{
			_skin = skin;
			super(skin);
		}
		
		override protected function init():void
		{
			var i:int,len:int=_pockers.length;
			
			for(i=0;i<len;i++)
			{
				_pockers[i] = new BottomHandlePocker(_skin["card"+i]);
			}
			  
			Laya.stage.on(Event.MOUSE_DOWN,this,onDownStage);
		}
		
		protected function onDownStage(e:Event):void
		{
			model.isMouseDwon = true;
		}
		
		override public function showCards(cards:Array,dir:int):void
		{
			cards = cards.concat();
			
			var pos:int = model.getChairPosByDir(dir);
			
			hideAll();
			
			var i:int;
			
			for(i=0;i<cards.length;i++)
			{
				_pockers[i].setCardImg(cards[i]);
				_pockers[i].show();
				_pockers[i].select = false;
				_pockers[i].up();
				
				if(model.isSelfSitDown == false && model.isEnd == false)
				{
					_pockers[i].back();
				}
			}
		}
		
		override protected function onCompEff(idx:int,isLast:Boolean):void
		{
			if(model.isSelfSitDown == false && model.isEnd == false)
			{
				_pockers[idx].back();
			}
			else
			{
				_pockers[idx].up();
			}
			
			if(isLast)
			{
				_pockers[idx].back();
			}
		}
		
		/**播放最后一张牌翻牌*/
		override public function playFanEff(needEff:Boolean=true):void
		{
			if(needEff)
			{
				startPlayFanEff();
			}
			else
			{
				_pockers[4].up();
			}
			
		}
		
		protected function startPlayFanEff():void
		{
			_pockers[4].skin.scaleX = -0.7;
			TimeManager.instance.timer.loop(50,this,onPlay);
			
		}
		
		protected function onPlay():void
		{
			_pockers[4].skin.scaleX +=0.1;
			
			if(_pockers[4].skin.scaleX >= 0)
			{
				_pockers[4].up();
			}
			
			if(_pockers[4].skin.scaleX == 0.7)
			{
				TimeManager.instance.timer.clear(this,onPlay);
			}
		}
		
		
		override public function set seleCards(cards:Array):void
		{
			var i:int=0,idx:int,temp:int;
			for(i=0;i<_pockers.length;i++)
			{
				_pockers[i].select = false;
				if(_pockers[i].visible)
				{
					temp = _pockers[i].cardIdx;
					idx = cards.indexOf(temp);
					
					if(idx != -1)
					{
						_pockers[i].select = true;
						cards.splice(idx,1);
					}
				}
			}
		}
		
		/**获取选中的牌*/
		override public function get seleCards():Array
		{
			var retArr:Array = [];
			var i:int;
			for(i=0;i<_pockers.length;i++)
			{
				if(_pockers[i].visible == true && _pockers[i].select == true)
				{
					retArr.push(_pockers[i].cardIdx);
				}
			}
			return retArr;
		}
		
		override public function set canControl(bool:Boolean):void
		{
			super.canControl = bool;
		}
		
		/**显示玩家已完成*/
		override public function showComp(pos:int):void
		{
			if(model.isSelfSitDown == false)
			{
				_skin.comBox.visible = true;
				_skin.typeImg.skin = "niuniuGame/niuType/ready.png";
				return;
			}
			
			
			var cards:Array = model.handleCards[model.selfChairPos].concat();//保证不对原来的牌排序
			cards.sort(PaixingLogic.compCardsFun);
			var jishuData:JishuArrData = JishuArrData.getJishuArrData(cards);
			
			var paixing:int = PaixingLogic.getPaixing(cards,jishuData,false);
	
			
			if(PaixingLogic.isNiuPaixing(paixing) == true)//是牛类型的
			{
				var niuData:NiuData = NiuData.getNiuData(cards);
				if(niuData.niuNum > 0)
				{
					seleCards =niuData.ThreeArr;
					
				}
			}
			
			showPaixing(pos,paixing);
		}
		
		
		
		/**显示牌型*/
		override public function showPaixing(pos:int,paixing:int):void
		{
			_skin.comBox.visible = true;
			_skin.typeImg.skin = "niuniuGame/niuType/niu"+paixing+".png";
			
			
		}
		
		
		
		override public function reset():void
		{
			_pockers[4].skin.scaleX = 0.7
			TimeManager.instance.timer.clear(this,onPlay);
			super.reset();
			_skin.comBox.visible = false;
		}
		
	}
}