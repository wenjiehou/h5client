package modules.sddzGame.sddzInerGame.view.pockerPart.singlePart.handlePart
{
	import laya.ui.Label;
	
	import modules.sddzGame.sddzInerGame.model.data.PaixingLogic;
	import modules.sddzGame.sddzInerGame.view.pockerPart.card.OtherHandlePocker;
	
	import ui.sddzGame.ddzPart.handlePart.OtherHandlePartUI;
	
	/**别人手里的牌的部分*/
	public class OtherSingleHandlePart extends BaseSingleHandlePart
	{
		/**没有明牌的时候的哪一张牌*/
		protected var _oneCard:OtherHandlePocker;
		
		/**没有明牌的时候的牌的数量*/
		protected var _oneNum:Label;
		
		protected var _skin:OtherHandlePartUI;
		
		public function OtherSingleHandlePart(skin:OtherHandlePartUI)
		{
			_skin = skin;
			super(skin);
			
		}
		
		override protected function init():void
		{
			var i:int,len:int=_pockers.length;
			
			for(i=0;i<len;i++)
			{
				_pockers[i] = new OtherHandlePocker(_skin["card"+i]);
			}
			_oneCard = new OtherHandlePocker(_skin.card);
			_oneNum = _skin.numTxt;
		}
		
		override public function showCards(cards:Array,dir:int):void
		{
			PaixingLogic.sortHandleCards(cards);
			var pos:int = model.getChairPosByDir(dir);
			cards = cards.reverse();
			
			
			updateState(model.mingpaiVec[pos]);
			var i:int;
			
			
			
			if(state == STATE_MINGPAI || model.isEnd)
			{
				_skin.backBox.visible = false;
				_skin.mingBox.visible = true;
				
				hideAll();
				for(i=0;i<cards.length;i++)
				{
					_pockers[i].setCardImg(cards[i]);
					_pockers[i].show();
					_pockers[i].showDizhuImg(false);
					
					if(i == cards.length -1)
					{
						if(pos == model.dizhuPos)
						{
							_pockers[i].showDizhuImg(true);
							
						}
						_pockers[i].showMingImg(model.mingpaiVec[pos]);
					
					}
					
				}
				down();
			}
			else if(state == STATE_NOMAL)
			{
				_skin.backBox.visible = true;
				_skin.mingBox.visible = false;
				
				_oneCard.back();
				_oneCard.show();
				_oneNum.text = cards.length + "";
				up();
			}
			
			//updateState(model.mingpaiVec[pos]);
		}
		
//		override protected function updateState(isMingPai:Boolean):void
//		{
//			super.updateState(isMingPai);
//			
////			if(state == STATE_MINGPAI || model.isEnd)
////			{
////				_skin.mingBox.visible = true;
////				_skin.backBox.visible = false;
////				
////				down();
////			}
////			else if(state == STATE_NOMAL)
////			{
////				_skin.mingBox.visible = false;
////				_skin.backBox.visible = true;
////				up();
////			}
//		}
		
		override public function reset():void
		{
			updateState(false);
			super.reset();
			_oneCard.reset();
			_skin.mingBox.visible = false;
			_skin.backBox.visible = false;
		}
		
	
	}
}