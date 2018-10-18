package modules.srddzGame.srddzInerGame.view.pockerPart
{
	
	import modules.srddzGame.srddzInerGame.view.pockerPart.card.OtherHandlePocker;
	
	import ui.srddzGame.ddzPart.DipaiPartUI;

	public class DipaiPart
	{
		
		protected var _skin:DipaiPartUI;
		protected var _pockers:Vector.<OtherHandlePocker> = new Vector.<OtherHandlePocker>(8);
		
		public function DipaiPart(skin:DipaiPartUI)
		{
			_skin = skin;
			init();
		}
		
		protected function init():void
		{
			var i:int;
			for(i=0;i<_pockers.length;i++)
			{
				_pockers[i] = new OtherHandlePocker(_skin["card"+i]);
			}
		}
		
		/**发完牌叫地主期间显示牌背面*/
		public function showBack():void
		{
			var i:int;
			for(i=0;i<_pockers.length;i++)
			{
				_pockers[i].back();
				_pockers[i].show();
			}
		}
		
		public function showCards(cards:Array):void
		{
			var i:int;
			for(i=0;i<_pockers.length;i++)
			{
				if(cards[i] != 0)
				{
					_pockers[i].setCardImg(cards[i]);
					_pockers[i].down();
					_pockers[i].show();
				}
				else
				{
					_pockers[i].back();
					_pockers[i].show();
				}
		
			}
		}
		
		public function reset():void
		{
			var i:int;
			for(i=0;i<_pockers.length;i++)
			{
				_pockers[i].reset();
			}
		}
	}
}