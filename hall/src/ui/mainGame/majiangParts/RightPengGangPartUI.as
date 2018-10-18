/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.Items.RightPengGangItemUI;

	public class RightPengGangPartUI extends View {
		public var peng3:RightPengGangItemUI;
		public var peng2:RightPengGangItemUI;
		public var peng1:RightPengGangItemUI;
		public var peng0:RightPengGangItemUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"RightPengGangItem","props":{"y":0,"x":0,"var":"peng3","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.RightPengGangItemUI"}},{"type":"RightPengGangItem","props":{"y":118,"x":0,"var":"peng2","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.RightPengGangItemUI"}},{"type":"RightPengGangItem","props":{"y":236,"x":0,"var":"peng1","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.RightPengGangItemUI"}},{"type":"RightPengGangItem","props":{"y":354,"x":0,"var":"peng0","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.RightPengGangItemUI"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.Items.RightPengGangItemUI",RightPengGangItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}