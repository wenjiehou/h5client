/**Created by the LayaAirIDE,do not modify.*/
package ui.sddzGame.ddzPart {
	import laya.ui.*;
	import laya.display.*; 
	import ui.sddzGame.item.PockerItemUI;

	public class DipaiPartUI extends View {
		public var card0:PockerItemUI;
		public var card1:PockerItemUI;
		public var card2:PockerItemUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card0","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":120,"var":"card1","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":240,"var":"card2","runtime":"ui.sddzGame.item.PockerItemUI"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.sddzGame.item.PockerItemUI",PockerItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}