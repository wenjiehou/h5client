package modules.game.majiangGame.view.majiangPart
{
	import ui.mainGame.Items.ShowContrTipUI;

	public class MajiangControlTipPage
	{
		protected var _skin:ShowContrTipUI;
		
		public function MajiangControlTipPage(skin:ShowContrTipUI)
		{
			_skin = skin;
		}
		
		public function show(message:String):void
		{
			_skin.visible = true;
			
			if(message != _skin.messageTf.text)
			{
				_skin.messageTf.text = message;
			}
		}
		
		public function hide():void
		{
			_skin.visible = false;
		}
		
		public function reset():void
		{
			hide();
		}
	}
}