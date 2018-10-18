/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.majiangParts.Newcalculate.NewCalculatePerPageUI;
	import ui.mainGame.majiangParts.Newcalculate.NewCalculateRoundPageUI;

	public class NewCalculatePageUI extends View {
		public var perPage:NewCalculatePerPageUI;
		public var roundPage:NewCalculateRoundPageUI;
		public var showBtn:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1038,"mouseThrough":true,"height":640},"child":[{"type":"NewCalculatePerPage","props":{"y":0,"x":0,"var":"perPage","runtime":"ui.mainGame.majiangParts.Newcalculate.NewCalculatePerPageUI"}},{"type":"NewCalculateRoundPage","props":{"y":0,"x":0,"visible":false,"var":"roundPage","runtime":"ui.mainGame.majiangParts.Newcalculate.NewCalculateRoundPageUI"}},{"type":"Button","props":{"y":566,"x":87,"width":180,"var":"showBtn","stateNum":1,"skin":"common/buttonLv.png","height":68,"alpha":0.6,"sizeGrid":"0,29,0,27"},"child":[{"type":"Image","props":{"y":12,"x":51,"skin":"gameCommon/btnShow.png","label":"label"}}]}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.majiangParts.Newcalculate.NewCalculatePerPageUI",NewCalculatePerPageUI);
			View.regComponent("ui.mainGame.majiangParts.Newcalculate.NewCalculateRoundPageUI",NewCalculateRoundPageUI);
			super.createChildren();
			createView(uiView);

		}

	}
}