/**Created by the LayaAirIDE,do not modify.*/
package ui.sddzGame.ddzPart.handlePart {
	import laya.ui.*;
	import laya.display.*; 
	import ui.sddzGame.item.PockerItemUI;

	public class OtherHandlePartUI extends View {
		public var mingBox:Box;
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
		public var backBox:Box;
		public var card:PockerItemUI;
		public var numTxt:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":0,"x":-38,"var":"mingBox"},"child":[{"type":"PockerItem","props":{"var":"card0","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":39,"var":"card1","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":77,"var":"card2","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":51,"var":"card3","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":51,"x":39,"var":"card4","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":51,"x":77,"var":"card5","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":102,"var":"card6","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":102,"x":39,"var":"card7","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":102,"x":77,"var":"card8","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":153,"var":"card9","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":153,"x":39,"var":"card10","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":153,"x":77,"var":"card11","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":206,"var":"card12","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":206,"x":39,"var":"card13","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":206,"x":77,"var":"card14","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":257,"var":"card15","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":257,"x":39,"var":"card16","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":257,"x":77,"var":"card17","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":309,"var":"card18","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":309,"x":39,"var":"card19","runtime":"ui.sddzGame.item.PockerItemUI"}}]},{"type":"Box","props":{"y":0,"x":0,"var":"backBox"},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"Label","props":{"y":56,"x":32.1923828125,"width":55.615234375,"var":"numTxt","valign":"middle","text":17,"strokeColor":"#000000","stroke":2,"height":50,"fontSize":50,"color":"#f3f1ca","align":"center"}}]}]};
		override protected function createChildren():void {
			View.regComponent("ui.sddzGame.item.PockerItemUI",PockerItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}