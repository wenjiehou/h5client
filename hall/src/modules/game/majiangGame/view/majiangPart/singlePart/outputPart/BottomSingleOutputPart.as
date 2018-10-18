package modules.game.majiangGame.view.majiangPart.singlePart.outputPart
{
	import modules.game.majiangGame.view.card.outputCard.BottomOutputCard;
	import modules.game.majiangGame.view.majiangPart.singlePart.BaseSingleOutputPart;
	
	import ui.mainGame.majiangParts.BottomOutputPartUI;
	
	public class BottomSingleOutputPart extends BaseSingleOutputPart
	{
		protected var _skin:BottomOutputPartUI;
		
		
		
		public function BottomSingleOutputPart(skin:BottomOutputPartUI)
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
				_cardsVec[i] = new BottomOutputCard(_skin["card"+i]);
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