/**Created by the LayaAirIDE,do not modify.*/
package ui.niuniuGame.niuniuPart {
	import laya.ui.*;
	import laya.display.*; 
	import ui.niuniuGame.niuniuPart.item.PockerItemUI;

	public class CuoPartUI extends View {
		public var card:PockerItemUI;
		public var dragBox:Box;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":400,"skin":"common/gameBg.png","sizeGrid":"34,32,34,34","height":450,"alpha":0.5}},{"type":"PockerItem","props":{"y":103,"x":110,"var":"card","scaleY":1.5,"scaleX":1.5,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}},{"type":"Box","props":{"y":103,"x":110},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"dragBox","scaleY":1.5,"scaleX":1.5},"child":[{"type":"Image","props":{"width":120,"skin":"poker/bg.png","height":162}}]},{"type":"Box","props":{"scaleY":1.5,"scaleX":1.5,"renderType":"mask"},"child":[{"type":"Rect","props":{"y":3,"x":3,"width":120,"lineWidth":1,"height":162,"fillColor":"#ff0000"}}]}]}]};
		override protected function createChildren():void {
			View.regComponent("ui.niuniuGame.niuniuPart.item.PockerItemUI",PockerItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}