package modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.outputPart
{
	
	
	import modules.srddzGame.srddzInerGame.model.data.PaixingLogic;
	
	import ui.srddzGame.ddzPart.outputPart.OtherOutputPartUI;

	public class LeftSingleOutputPart extends BaseSingleOutputPart
	{
		protected var _skin:OtherOutputPartUI;
		
		public function LeftSingleOutputPart(skin:OtherOutputPartUI)
		{
			_skin = skin;
			super(skin);
		}
		
		override public function showCards(cards:Array):void
		{
			show();
			cards = PaixingLogic.sortOutputCards(cards);
			hideAll();
			
			var i:int;
			for(i=0;i<cards.length;i++)
			{
				_pockers[i].setCardImg(cards[i]);
				_pockers[i].show();
			}
		}
	}
}