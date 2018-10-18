/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.Items {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.Items.OutputLeftItemUI;
	import ui.mainGame.Items.OutputBottomItemUI;

	public class LeftPengGangItemUI extends View {
		public var card0:OutputLeftItemUI;
		public var card1:OutputLeftItemUI;
		public var card2:OutputLeftItemUI;
		public var card3:OutputBottomItemUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"OutputLeftItem","props":{"y":0,"x":0,"width":72,"var":"card0","height":51,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":42,"x":0,"var":"card1","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":84,"x":0,"var":"card2","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputBottomItem","props":{"y":21,"x":7,"var":"card3","scaleY":0.55,"scaleX":0.55,"runtime":"ui.mainGame.Items.OutputBottomItemUI"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.Items.OutputLeftItemUI",OutputLeftItemUI);
			View.regComponent("ui.mainGame.Items.OutputBottomItemUI",OutputBottomItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}