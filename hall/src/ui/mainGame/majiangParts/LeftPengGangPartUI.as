/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.Items.LeftPengGangItemUI;

	public class LeftPengGangPartUI extends View {
		public var peng0:LeftPengGangItemUI;
		public var peng1:LeftPengGangItemUI;
		public var peng2:LeftPengGangItemUI;
		public var peng3:LeftPengGangItemUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"LeftPengGangItem","props":{"y":0,"x":3,"var":"peng0","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.LeftPengGangItemUI"}},{"type":"LeftPengGangItem","props":{"y":120,"x":3,"var":"peng1","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.LeftPengGangItemUI"}},{"type":"LeftPengGangItem","props":{"y":240,"x":3,"var":"peng2","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.LeftPengGangItemUI"}},{"type":"LeftPengGangItem","props":{"y":360,"x":3,"var":"peng3","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.LeftPengGangItemUI"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.Items.LeftPengGangItemUI",LeftPengGangItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}