/**Created by the LayaAirIDE,do not modify.*/
package ui.niuniuGame.niuniuPart.handlePart {
	import laya.ui.*;
	import laya.display.*; 
	import ui.niuniuGame.niuniuPart.item.PockerItemUI;

	public class OwnerHandlePartUI extends View {
		public var card0:PockerItemUI;
		public var card1:PockerItemUI;
		public var card2:PockerItemUI;
		public var card3:PockerItemUI;
		public var card4:PockerItemUI;
		public var comBox:Box;
		public var typeImg:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card0","scaleY":0.7,"scaleX":0.7,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":87,"var":"card1","scaleY":0.7,"scaleX":0.7,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":174,"var":"card2","scaleY":0.7,"scaleX":0.7,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":261,"var":"card3","scaleY":0.7,"scaleX":0.7,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":390,"var":"card4","scaleY":0.7,"scaleX":0.7,"pivotX":60,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}}]},{"type":"Box","props":{"y":64,"x":42,"var":"comBox"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":348,"skin":"niuniuGame/dikuang.png","height":47,"alpha":0.7}},{"type":"Image","props":{"var":"typeImg","skin":"niuniuGame/niuType/ready.png","centerY":2,"centerX":0}}]}]};
		override protected function createChildren():void {
			View.regComponent("ui.niuniuGame.niuniuPart.item.PockerItemUI",PockerItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}