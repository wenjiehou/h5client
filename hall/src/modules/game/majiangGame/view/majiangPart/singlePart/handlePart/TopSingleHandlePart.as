package modules.game.majiangGame.view.majiangPart.singlePart.handlePart
{
	import modules.game.majiangGame.view.card.handCard.TopHandleCard;
	import modules.game.majiangGame.view.majiangPart.singlePart.BaseSingleHandlePart;
	
	import ui.mainGame.majiangParts.TopHandlePartUI;

	public class TopSingleHandlePart extends BaseSingleHandlePart
	{
		protected var _skin:TopHandlePartUI;
		
		public function TopSingleHandlePart(skin:TopHandlePartUI)
		{
			super(skin);
			
			_skin = skin;
			
			_OrignalX = _skin.x;
			
			init();
		}
		
		protected function init():void
		{
			
			_SingleCardW = _skin.card0.width*_skin.scaleX;
			
			var i:int;
			var len:int = _preThirteenCards.length;
			
			for(i=0;i<len;i++)
			{
				_preThirteenCards[i] = new TopHandleCard(_skin["card"+i]);
				
			}
			_theFourteenCard = new TopHandleCard(_skin["card13"]);
			
			tingImg = _skin.tingImg;
			
			back();
		}
		
		override public function show():void
		{
			_skin.visible = true;
		}
		
		
		override public function hide():void
		{
			_skin.visible = false;
		}
		
		override public function get visible():Boolean
		{
			return _skin.visible;
		}
		
		override public function movePeng(bool:Boolean):void
		{
			if(bool)
			{
				_skin.x = _OrignalX - _SingleCardW;
			}
			else
			{
				_skin.x = _OrignalX;
			}
		}
	}
}