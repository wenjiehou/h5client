package modules.game.majiangGame.view.majiangPart.hupaiTip
{
	import modules.game.majiangGame.view.card.outputCard.BottomOutputCard;
	import laya.ui.View;
	
	public class BottomHupaiTipPart extends BaseSingleHupaiTipPart
	{
		public function BottomHupaiTipPart(skin:View)
		{
			super(skin);
			init();
		}
		
		private function init():void
		{
			for(var i:int=0;i < 9;i++)
			{
				allCards[i] = new BottomOutputCard(_skin["card"+i]);
			}
		}
		
		override protected function setBackSize(nums:int):void
		{
			_skin["backimg"].width = 625 - (9-nums)*SingleCardW;
			_skin["liangImg"].x = _skin["backimg"].width + _skin["backimg"].x;
		}
		override public function reset():void
		{
			_skin.visible = false;
		}
	}
}