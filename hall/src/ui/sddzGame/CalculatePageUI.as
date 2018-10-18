/**Created by the LayaAirIDE,do not modify.*/
package ui.sddzGame {
	import laya.ui.*;
	import laya.display.*; 
	import ui.sddzGame.calculate.CalculatePerPageUI;
	import ui.sddzGame.calculate.CalcuateRoundPageUI;

	public class CalculatePageUI extends View {
		public var perPage:CalculatePerPageUI;
		public var roundPage:CalcuateRoundPageUI;
		public var showBtn:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":640,"height":1038},"child":[{"type":"CalculatePerPage","props":{"var":"perPage","runtime":"ui.sddzGame.calculate.CalculatePerPageUI"}},{"type":"CalcuateRoundPage","props":{"var":"roundPage","runtime":"ui.sddzGame.calculate.CalcuateRoundPageUI"}},{"type":"Button","props":{"y":532,"x":43,"width":181,"var":"showBtn","stateNum":1,"skin":"common/buttonLv.png","height":68,"alpha":0.6,"sizeGrid":"0,29,0,27"},"child":[{"type":"Image","props":{"y":12,"x":51,"skin":"gameCommon/btnShow.png","label":"label"}}]}]};
		override protected function createChildren():void {
			View.regComponent("ui.sddzGame.calculate.CalculatePerPageUI",CalculatePerPageUI);
			View.regComponent("ui.sddzGame.calculate.CalcuateRoundPageUI",CalcuateRoundPageUI);
			super.createChildren();
			createView(uiView);

		}

	}
}