package modules.game.majiangGame.view.majiangPart
{
	import modules.game.majiangGame.view.card.handCard.BottomHandleCard;
	
	import ui.mainGame.Items.BaidapaiUI;

	public class BaidaPart
	{
		protected var _skin:BaidapaiUI;
		protected var _magicCard:BottomHandleCard;
		protected var _fanpaiCard:BottomHandleCard;
		
		public function BaidaPart(skin:BaidapaiUI)
		{
			_skin = skin;
			
			init();
			hide();
		}
		
		protected function init():void
		{
			_magicCard = new BottomHandleCard(_skin.magiccard,false,false);
			_magicCard.canControl = false;
			_magicCard.show();
			_fanpaiCard = new BottomHandleCard(_skin.fancard,false,false);
			_fanpaiCard.canControl = false;
			_fanpaiCard.show();
		}
		
		public function show():void
		{
			_skin.visible = true;
		}
		
		public function hide():void
		{
			_skin.visible = false;
		}
		
		public function showBaida(magiccard:int,fancard:int):void
		{
			show();
			_magicCard.setCardImg(magiccard);
			_fanpaiCard.setCardImg(fancard);
		}
		public function reset():void
		{
			hide();
		}
	}
}