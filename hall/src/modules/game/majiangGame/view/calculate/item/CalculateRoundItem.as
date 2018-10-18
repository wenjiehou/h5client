package modules.game.majiangGame.view.calculate.item
{
	
	import laya.display.Sprite;
	
	import modules.game.GameModule;
	import modules.game.majiangGame.model.MajiangModel;
	
	import ui.mainGame.majiangParts.Newcalculate.NewCalculateRoundItemUI;

	public class CalculateRoundItem
	{
		protected var _skin:NewCalculateRoundItemUI;
		
		private var headw:Number=0,headh:Number=0;
		
		public function CalculateRoundItem(skin:NewCalculateRoundItemUI)
		{
			_skin = skin;
			
			headw=75;//headImg.width;
			headh=75;//headImg.height;
		}
		
		public function show():void
		{
			_skin.visible = true;
		}
		
		public function hide():void
		{
			_skin.visible = false;
		}
		
		public function update(pos):void
		{
			
			
		}
		
		private function delayPhoto(mask:Sprite,obj:Object):void{
			
			
			
		}
		
		private function delayPhotoPhoto(photo:Sprite,mask:Sprite):void{
			
			//photo.mask=mask; 
			
		}
		
		protected function get model():MajiangModel
		{
			return GameModule.instance.gameContext.model;
		}
	}
}