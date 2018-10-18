package modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.outputPart
{
	import modules.srddzGame.srddzInerGame.model.data.PaixingLogic;
	
	import ui.srddzGame.ddzPart.outputPart.OtherOutputPartUI;
	
	public class RightSingleOutputPart extends BaseSingleOutputPart
	{
		protected var gap:Number = 30;
		protected var _skin:OtherOutputPartUI;
		
		
		public function RightSingleOutputPart(skin:OtherOutputPartUI)
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
			
			if(cards.length > 6)
			{
				_skin.box.x = 0;
			}
			else
			{
				_skin.box.x = gap*(6-cards.length);
			}
			
		}
	}
}