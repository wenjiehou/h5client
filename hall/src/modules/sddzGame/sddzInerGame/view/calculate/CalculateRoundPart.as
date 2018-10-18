package modules.sddzGame.sddzInerGame.view.calculate
{
	import laya.events.Event;
	
	import modules.sddzGame.SDdzGameModule;
	import modules.sddzGame.sddzInerGame.model.SddzModel;
	import modules.sddzGame.sddzInerGame.view.SddzGameView;
	
	import ui.sddzGame.calculate.CalcuateRoundPageUI;

	public class CalculateRoundPart
	{
		protected var _skin:CalcuateRoundPageUI;
		
		public function CalculateRoundPart(skin:CalcuateRoundPageUI)
		{
			_skin = skin;
			reset();
		}
		
		protected function onClickShareBtn(e:Event):void
		{
			//WXLogicModel.shareScreenResult();
			
		}
		
		protected function onClickBackBtn(e:Event):void
		{
			//切换到大厅
			if(AppConfig.isNewHall)
			{
				QuickUtils.gotoHall();
			}
			else
			{
				SDdzGameModule.instance.gameContext.controller.endGameGotoHall();
			}
			
			//			
		}
		
		
		/**显示并更新界面*/
		public function show():void
		{
			
		}
		
		public function showGetTicketNum(nums:int):void
		{
			
		}
		
		public function hide():void
		{
			_skin.visible = false;
		}
		
		public function reset():void
		{
			_skin.visible = false;
		}
		
		protected function get model():SddzModel
		{
			return SDdzGameModule.instance.gameContext.model;
		}
		
		protected function get view():SddzGameView
		{
			return SDdzGameModule.instance.gameContext.view;
		}
	}
}