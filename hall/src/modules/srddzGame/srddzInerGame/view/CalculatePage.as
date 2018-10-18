package modules.srddzGame.srddzInerGame.view
{
	import common.CommonModule;
	
	import laya.events.Event;
	
	import modules.srddzGame.SrddzGameModule;
	import modules.srddzGame.srddzInerGame.model.SrddzModel;
	import modules.srddzGame.srddzInerGame.view.calculate.CalculatePerPart;
	import modules.srddzGame.srddzInerGame.view.calculate.CalculateRoundPart;
	
	import ui.srddzGame.CalculatePageUI;
	

	public class CalculatePage
	{
		protected var _perPage:CalculatePerPart;

		public function get perPage():CalculatePerPart
		{
			return _perPage;
		}

		protected var _roundPage:CalculateRoundPart;

		public function get roundPage():CalculateRoundPart
		{
			return _roundPage;
		}
		
		
		protected var _skin:CalculatePageUI;
		
		public function CalculatePage(skin:CalculatePageUI)
		{
			_skin = skin;
			
			_perPage = new CalculatePerPart(_skin.perPage);
			_roundPage = new CalculateRoundPart(_skin.roundPage);
			
			reset();
			
			_skin.showBtn.on(Event.CLICK,this,this.showPerCal)
			
		}
		
		public function showPerShowBtn():void
		{
			_skin.showBtn.visible=true;	
		}
		
		private function showPerCal():void
		{
			_skin.perPage.visible=true;
			_skin.showBtn.visible=false;	
		}
		
		public function reset():void
		{
			_skin.visible = false;
			_skin.showBtn.visible=false;
			_perPage.reset();
			_roundPage.reset();
		}
		
		
		public function showGetTicket(nums:int):void
		{
			
		}
		
		public function show():void
		{
			if(UserData.isReplay)
			{
				view.replayControlView.moveCalculate();
			}
			
			_perPage.reset();
			_roundPage.reset();
			_skin.visible = true;
			_perPage.show();
			CommonModule.instance.commonContext.view.timeWarView.hide();
			
		}
		
		public function gameTimeOver():void
		{
			_perPage.timeOver();
		}
		
		protected function get model():SrddzModel
		{
			return SrddzGameModule.instance.gameContext.model;
		}
		
		protected function get view():SrddzView
		{
			return SrddzGameModule.instance.gameContext.view;
		}
	}
}