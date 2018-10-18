package modules.sddzGame.sddzInerGame.view.pockerPart.singlePart.outputPart
{
	
	import modules.sddzGame.sddzInerGame.model.data.PaixingLogic;
	
	import ui.sddzGame.ddzPart.outputPart.OtherOutputPartUI;
	
	public class RightSingleOutputPart extends BaseSingleOutputPart
	{
		
		protected var gap:Number = 40;
		
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
				_skin.box0.x = 0;
			}
			else
			{
				_skin.box0.x = gap*(6-cards.length);
			}
			
		}
	}
}