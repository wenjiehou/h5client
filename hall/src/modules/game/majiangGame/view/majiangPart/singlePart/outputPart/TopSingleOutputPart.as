package modules.game.majiangGame.view.majiangPart.singlePart.outputPart
{
	import modules.game.majiangGame.view.card.outputCard.TopOutputCard;
	import modules.game.majiangGame.view.majiangPart.singlePart.BaseSingleOutputPart;
	
	import ui.mainGame.majiangParts.OutputTopPartUI;
	
	public class TopSingleOutputPart extends BaseSingleOutputPart
	{
		protected var _skin:OutputTopPartUI;
		
		public function TopSingleOutputPart(skin:OutputTopPartUI)
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
				_cardsVec[i] = new TopOutputCard(_skin["card"+i]);
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