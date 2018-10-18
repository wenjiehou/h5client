package modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.handlePart
{
	import laya.ui.Label;
	import laya.ui.View;
	
	import modules.srddzGame.srddzInerGame.model.data.PaixingLogic;
	import modules.srddzGame.srddzInerGame.view.pockerPart.card.OtherHandlePocker;
	
	public class OtherSingleHandlePart extends BaseSingleHandlePart
	{
		/**没有明牌的时候的哪一张牌*/
		protected var _oneCard:OtherHandlePocker;
		
		/**没有明牌的时候的牌的数量*/
		protected var _oneNum:Label;
		
		protected var _skin:View
		
		public function OtherSingleHandlePart(skin:View)
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
			_oneCard = new OtherHandlePocker(_skin["card"]);
			_oneNum = _skin["numTxt"];
		}
		
		override public function showCards(cards:Array,dir:int):void
		{
			cards = cards.concat();
			var pos:int = model.getChairPosByDir(dir);

			
			
			updateState(model.mingpaiVec[pos]);
			var i:int;
			
			
			
			if(state == STATE_MINGPAI || model.isEnd)
			{

				
			
				
				
				if(pos == model.dizhuPos && model.baodaoState != 0)//报到了
				{
					PaixingLogic.cutArrInArr(model.baodaoCards,cards);
					
					PaixingLogic.sortHandleCards(cards);
					PaixingLogic.sortHandleCards(model.baodaoCards);
					
					cards = cards.reverse();
					model.baodaoCards = model.baodaoCards.reverse();
					
					cards = model.baodaoCards.concat(cards);
					
					_skin["backBox"].visible = false;
					_skin["mingBox"].visible = true;
					
					//把报到的牌取出来放到前面
					
					
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
				else
				{
					PaixingLogic.sortHandleCards(cards);
					cards = cards.reverse();
					
					_skin["backBox"].visible = false;
					_skin["mingBox"].visible = true;
					
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
				
				
				
			}
			else if(state == STATE_NOMAL)
			{
				if(pos == model.dizhuPos && model.baodaoState != 0)//报到了
				{
					_skin["backBox"].visible = false;
					_skin["mingBox"].visible = true;
					PaixingLogic.sortHandleCards(model.baodaoCards);
					model.baodaoCards = model.baodaoCards.reverse();
					
					hideAll();
					for(i=0;i<cards.length;i++)
					{
						if(i<model.baodaoCards.length)
						{
							_pockers[i].setCardImg(model.baodaoCards[i]);
							_pockers[i].down();
						}
						else
						{
							_pockers[i].setCardImg(cards[i]);
							_pockers[i].back();
						}
					
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
					//down();
				}
				else
				{
					_skin["backBox"].visible = true;
					_skin["mingBox"].visible = false;
					
					_oneCard.back();
					_oneCard.show();
					_oneNum.text = cards.length + "";
					up();
				}
			}
			
			//updateState(model.mingpaiVec[pos]);
		}
		
		override public function reset():void
		{
			updateState(false);
			super.reset();
			_oneCard.reset();
			_skin["mingBox"].visible = false;
			_skin["backBox"].visible = false;
		}
		
	}
}