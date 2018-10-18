/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.Items {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.Items.BottomHandleItemUI;

	public class BaidapaiUI extends View {
		public var magiccard:BottomHandleItemUI;
		public var fancard:BottomHandleItemUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"BottomHandleItem","props":{"y":4,"x":35,"var":"magiccard","scaleY":0.6,"scaleX":0.6,"runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":21.159999999999997,"x":87,"var":"fancard","scaleY":0.38,"scaleX":0.38,"runtime":"ui.mainGame.Items.BottomHandleItemUI"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.Items.BottomHandleItemUI",BottomHandleItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}