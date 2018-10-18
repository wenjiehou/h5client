package modules.nnGame.inerGame.view
{
	import modules.nnGame.inerGame.view.pockerPart.CuoPart;
	import modules.nnGame.inerGame.view.pockerPart.HandleBtnsPart;
	import modules.nnGame.inerGame.view.pockerPart.HandlePart;
	import modules.nnGame.inerGame.view.pockerPart.TimeTipView;
	
	import ui.niuniuGame.PockerPageUI;
	

	public class NnPage
	{
		protected var _skin:PockerPageUI;

		public function get skin():PockerPageUI
		{
			return _skin;
		}
		
		public var handlePart:HandlePart;
		public var handleBtns:HandleBtnsPart;
		public var timeTip:TimeTipView;
		public var cuoPart:CuoPart;
		
		public function NnPage(skin:PockerPageUI)
		{
			if(skin)
			{
				_skin = skin;
				_skin.mouseThrough = true;
				
				handlePart = new HandlePart(_skin.handlePos0,_skin.handlePos1,_skin.handlePos2,_skin.handlePos3,_skin.handlePos4,_skin.handlePos5,_skin.handlePos6,_skin.handlePos7,_skin.handlePos8,_skin.handlePos9);
				handleBtns = new HandleBtnsPart(_skin.ctlPart,_skin.tishiBtn,_skin.showBtn,_skin.cuoBtn,_skin.fanBtn);
				
				cuoPart = new CuoPart(_skin.cuoPart);
				
				timeTip = new TimeTipView(_skin.tipPart);
			}
		}
		
		public function setChairNum(num:int=10):void
		{
			//num = 4;//保证一下只有3咯
			handlePart.setChairNum(num);
		}
		
		public function reset(needTimeReset:Boolean=true):void 
		{
			handlePart.reset();
			handleBtns.reset();
			if(needTimeReset)
			{
				timeTip.reset();
			}
			
			cuoPart.reset();
			

		}
	}
}