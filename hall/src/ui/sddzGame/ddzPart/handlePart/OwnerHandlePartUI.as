/**Created by the LayaAirIDE,do not modify.*/
package ui.sddzGame.ddzPart.handlePart {
	import laya.ui.*;
	import laya.display.*; 
	import ui.sddzGame.item.PockerItemUI;

	public class OwnerHandlePartUI extends View {
		public var box1:Box;
		public var card0:PockerItemUI;
		public var card1:PockerItemUI;
		public var card2:PockerItemUI;
		public var card3:PockerItemUI;
		public var card4:PockerItemUI;
		public var card5:PockerItemUI;
		public var card6:PockerItemUI;
		public var card7:PockerItemUI;
		public var card8:PockerItemUI;
		public var card9:PockerItemUI;
		public var card10:PockerItemUI;
		public var card11:PockerItemUI;
		public var card12:PockerItemUI;
		public var card13:PockerItemUI;
		public var card14:PockerItemUI;
		public var card15:PockerItemUI;
		public var card16:PockerItemUI;
		public var card17:PockerItemUI;
		public var card18:PockerItemUI;
		public var card19:PockerItemUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"box1","mouseThrough":true},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card0","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":55,"var":"card1","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":110,"var":"card2","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":165,"var":"card3","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":220,"var":"card4","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":275,"var":"card5","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":330,"var":"card6","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":385,"var":"card7","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":440,"var":"card8","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":495,"var":"card9","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":84,"x":0,"var":"card10","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":84,"x":55,"var":"card11","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":84,"x":110,"var":"card12","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":84,"x":165,"var":"card13","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":84,"x":220,"var":"card14","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":84,"x":275,"var":"card15","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":84,"x":330,"var":"card16","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":84,"x":385,"var":"card17","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":84,"x":440,"var":"card18","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":84,"x":495,"var":"card19","runtime":"ui.sddzGame.item.PockerItemUI"}}]}]};
		override protected function createChildren():void {
			View.regComponent("ui.sddzGame.item.PockerItemUI",PockerItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}