/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.Items.BottomPengGangItemUI;

	public class BottomPengGangPartUI extends View {
		public var peng0:BottomPengGangItemUI;
		public var peng1:BottomPengGangItemUI;
		public var peng2:BottomPengGangItemUI;
		public var peng3:BottomPengGangItemUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"scaleY":1},"child":[{"type":"BottomPengGangItem","props":{"y":0,"x":0,"var":"peng0","scaleY":1.4,"scaleX":1.4,"runtime":"ui.mainGame.Items.BottomPengGangItemUI"}},{"type":"BottomPengGangItem","props":{"y":0,"x":440,"var":"peng1","scaleY":1.4,"scaleX":1.4,"runtime":"ui.mainGame.Items.BottomPengGangItemUI"}},{"type":"BottomPengGangItem","props":{"y":0,"x":881,"var":"peng2","scaleY":1.4,"scaleX":1.4,"runtime":"ui.mainGame.Items.BottomPengGangItemUI"}},{"type":"BottomPengGangItem","props":{"y":-4,"x":1321,"var":"peng3","scaleY":1.4,"scaleX":1.4,"runtime":"ui.mainGame.Items.BottomPengGangItemUI"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.Items.BottomPengGangItemUI",BottomPengGangItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}