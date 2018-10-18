package modules.game.majiangGame.view.majiangPart.hupaiTip
{
	import modules.game.majiangGame.view.card.BaseCard;
	
	import laya.ui.View;

	public class BaseSingleHupaiTipPart
	{
		protected var _skin:View;
		protected var allCards:Vector.<BaseCard> = new Vector.<BaseCard>(9);
		
		protected var SingleCardW:int = 0;
		protected var SingleCardH:int = 0;
					
		public function BaseSingleHupaiTipPart(skin:View)
		{
			_skin = skin;
			
			SingleCardW = _skin["card0"].width;
			SingleCardH = _skin["card0"].height;
		}
		
		public function showHuTip(cards:Array):void
		{
			_skin.visible = true;
			
			for(var i:int=0;i < cards.length;i++)
			{
				allCards[i].setCardImg(cards[i]);
				allCards[i].show();
			}
			for(i=cards.length;i < allCards.length;i++)
			{
				allCards[i].hide();
			}
			setBackSize(cards.length);
			
			_skin["liangImg"].visible = true;
		}
		
		public function showCanHuCards(cards:Array):void
		{
			_skin.visible = true;
			
			for(var i:int=0;i < cards.length;i++)
			{
				allCards[i].setCardImg(cards[i]);
				allCards[i].show();
			}
			for(i=cards.length;i < allCards.length;i++)
			{
				allCards[i].hide();
			}
			setBackSize(cards.length);
			
			_skin["liangImg"].visible = false;
		}
		
		
		protected function setBackSize(nums:int):void
		{
			
		}
		public function reset():void
		{
			_skin.visible = false;
			
			//todo
		}
	}
}