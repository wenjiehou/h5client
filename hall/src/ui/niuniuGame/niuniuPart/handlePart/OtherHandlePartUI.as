/**Created by the LayaAirIDE,do not modify.*/
package ui.niuniuGame.niuniuPart.handlePart {
	import laya.ui.*;
	import laya.display.*; 
	import ui.niuniuGame.niuniuPart.item.PockerItemUI;

	public class OtherHandlePartUI extends View {
		public var card0:PockerItemUI;
		public var card1:PockerItemUI;
		public var card2:PockerItemUI;
		public var card3:PockerItemUI;
		public var card4:PockerItemUI;
		public var comBox:Box;
		public var typeImg:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card0","scaleY":0.4,"scaleX":0.4,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":21,"var":"card1","scaleY":0.4,"scaleX":0.4,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":42,"var":"card2","scaleY":0.4,"scaleX":0.4,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":63,"var":"card3","scaleY":0.4,"scaleX":0.4,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":84,"var":"card4","scaleY":0.4,"scaleX":0.4,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}},{"type":"Box","props":{"y":35,"x":1,"var":"comBox"},"child":[{"type":"Image","props":{"width":129,"skin":"niuniuGame/dikuang.png","height":27,"alpha":0.5}},{"type":"Image","props":{"var":"typeImg","skin":"niuniuGame/niuType/niu1.png","scaleY":0.7,"scaleX":0.7,"centerY":0,"centerX":0}}]}]}]};
		override protected function createChildren():void {
			View.regComponent("ui.niuniuGame.niuniuPart.item.PockerItemUI",PockerItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}