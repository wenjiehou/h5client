/**Created by the LayaAirIDE,do not modify.*/
package ui.srddzGame {
	import laya.ui.*;
	import laya.display.*; 
	import ui.srddzGame.calculate.CalculatePerPageUI;
	import ui.srddzGame.calculate.CalculateRoundPageUI;

	public class CalculatePageUI extends View {
		public var perPage:CalculatePerPageUI;
		public var roundPage:CalculateRoundPageUI;
		public var showBtn:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1038,"height":640},"child":[{"type":"CalculatePerPage","props":{"var":"perPage","runtime":"ui.srddzGame.calculate.CalculatePerPageUI"}},{"type":"CalculateRoundPage","props":{"var":"roundPage","runtime":"ui.srddzGame.calculate.CalculateRoundPageUI"}},{"type":"Button","props":{"y":566,"x":88,"width":181,"var":"showBtn","stateNum":1,"skin":"common/buttonLv.png","height":68,"alpha":0.6,"sizeGrid":"0,29,0,27"},"child":[{"type":"Image","props":{"y":12,"x":51,"skin":"gameCommon/btnShow.png","label":"label"}}]}]};
		override protected function createChildren():void {
			View.regComponent("ui.srddzGame.calculate.CalculatePerPageUI",CalculatePerPageUI);
			View.regComponent("ui.srddzGame.calculate.CalculateRoundPageUI",CalculateRoundPageUI);
			super.createChildren();
			createView(uiView);

		}

	}
}