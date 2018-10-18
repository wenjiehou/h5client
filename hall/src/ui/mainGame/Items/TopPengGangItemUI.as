/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.Items {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.Items.OutputTopItemUI;
	import ui.mainGame.Items.OutputLeftItemUI;

	public class TopPengGangItemUI extends View {
		public var card0:OutputTopItemUI;
		public var card2:OutputTopItemUI;
		public var card1:OutputTopItemUI;
		public var card3:OutputLeftItemUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"OutputTopItem","props":{"y":1,"x":180,"var":"card0","runtime":"ui.mainGame.Items.OutputTopItemUI"}},{"type":"OutputTopItem","props":{"y":0,"x":0,"var":"card2","runtime":"ui.mainGame.Items.OutputTopItemUI"}},{"type":"OutputTopItem","props":{"y":0,"x":90,"var":"card1","runtime":"ui.mainGame.Items.OutputTopItemUI"}},{"type":"OutputLeftItem","props":{"y":-17,"x":77,"width":107,"var":"card3","scaleY":1.8,"scaleX":1.8,"height":61,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.Items.OutputTopItemUI",OutputTopItemUI);
			View.regComponent("ui.mainGame.Items.OutputLeftItemUI",OutputLeftItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}