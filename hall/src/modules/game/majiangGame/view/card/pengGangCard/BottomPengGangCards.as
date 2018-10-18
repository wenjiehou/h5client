package modules.game.majiangGame.view.card.pengGangCard
{
	import modules.game.majiangGame.view.card.outputCard.BottomOutputCard;
	
	import ui.mainGame.Items.BottomPengGangItemUI;

	public class BottomPengGangCards extends BasePengGangCards
	{
		protected var _skin:BottomPengGangItemUI;
		
		public function BottomPengGangCards(skin:BottomPengGangItemUI)
		{
			super();
			
			_skin = skin;
			
			init();
		}
		
		protected function init():void	
		{
			var i:int;
			var len:int = _cardsVec.length;
			
			for(i=0;i<len;i++)
			{
				_cardsVec[i] = new BottomOutputCard(_skin["card"+i]);
			}
		}
		
		override public function show():void
		{
			_skin.visible = true;
			
			super.show();
		}
		
		override public function hide():void
		{
			_skin.visible = false;
			
			super.hide();
		}
		
		override public function get visible():Boolean
		{
			return _skin.visible;
		}
	}
}