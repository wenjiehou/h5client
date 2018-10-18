package modules.game.majiangGame.view.card.outputCard
{
	import laya.display.Sprite;
	import laya.utils.Ease;
	import laya.utils.TimeLine;
	
	import modules.game.majiangGame.view.card.BaseCard;
	
	public class BaseOutputCard extends BaseCard
	{
		
		public var isTingState:Boolean = false;
		
		public function BaseOutputCard(skin:*)
		{
			super(skin);
			var curY:int=_skin.curIdxSimbol.y;
				timeLine.to(_skin.curIdxSimbol,{y:curY-40},500,Ease.quadOut).to(_skin.curIdxSimbol,{y:curY},500,Ease.quadIn);
				timeLine.play(0,true);
				timeLine.pause()
		}
		
		private var timeLine:TimeLine = new TimeLine();
		public function showCurOutputSimbol(bool:Boolean):void
		{
			_skin.curIdxSimbol.visible = bool;
			if(bool==true){
				timeLine.resume()
			}else{
				timeLine.pause()
			}
		}
		
		public function makeTingState(bool:Boolean):void
		{
			QuickUtils.addDark(_skin as Sprite,bool);
			isTingState = bool;
		}
		
		
	}
}