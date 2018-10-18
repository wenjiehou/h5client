package modules.game.majiangGame.view.majiangPart.singlePart.outputPart
{
	import modules.game.majiangGame.view.card.outputCard.LeftOutputCard;
	import modules.game.majiangGame.view.majiangPart.singlePart.BaseSingleOutputPart;
	
	import ui.mainGame.majiangParts.LeftOutputPartUI;
	
	public class LeftSingleOutputPart extends BaseSingleOutputPart
	{
		protected var _skin:LeftOutputPartUI;
		
		public function LeftSingleOutputPart(skin:LeftOutputPartUI)
		{
			super();
			
			_skin = skin;
			//startImg = skin.startImg;
			init();
		}
		
		protected function init():void
		{
			var i:int;
			var len:int = _cardsVec.length;
			
			for(i=0;i<len;i++)
			{
				_cardsVec[i] = new LeftOutputCard(_skin["card"+i]);
			}
		}
		
		override public function show():void
		{
			_skin.visible = true;
		}
		
		override public function hide():void
		{
			_skin.visible = false;
			
		}
	}
}