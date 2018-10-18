/**Created by the LayaAirIDE,do not modify.*/
package ui.srddzGame.ddzPart.handlePart {
	import laya.ui.*;
	import laya.display.*; 
	import ui.srddzGame.ddzPart.item.PockerItemUI;

	public class TopHandlePartUI extends View {
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
		public var card20:PockerItemUI;
		public var card21:PockerItemUI;
		public var card22:PockerItemUI;
		public var card23:PockerItemUI;
		public var card24:PockerItemUI;
		public var card25:PockerItemUI;
		public var card26:PockerItemUI;
		public var card27:PockerItemUI;
		public var card28:PockerItemUI;
		public var card29:PockerItemUI;
		public var card30:PockerItemUI;
		public var card31:PockerItemUI;
		public var card32:PockerItemUI;
		public var backBox:Box;
		public var card:PockerItemUI;
		public var numTxt:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"mingBox"},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card0","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":21,"var":"card1","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":43,"var":"card2","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":64,"var":"card3","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":86,"var":"card4","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":107,"var":"card5","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":128,"var":"card6","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":150,"var":"card7","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":171,"var":"card8","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":193,"var":"card9","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":214,"var":"card10","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":0,"var":"card11","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":21,"var":"card12","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":43,"var":"card13","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":64,"var":"card14","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":86,"var":"card15","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":107,"var":"card16","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":128,"var":"card17","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":150,"var":"card18","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":171,"var":"card19","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":193,"var":"card20","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":214,"var":"card21","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":0,"var":"card22","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":21,"var":"card23","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":43,"var":"card24","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":64,"var":"card25","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":86,"var":"card26","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":107,"var":"card27","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":128,"var":"card28","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":150,"var":"card29","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":171,"var":"card30","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":193,"var":"card31","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":214,"var":"card32","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}}]},{"type":"Box","props":{"var":"backBox","scaleY":0.75,"scaleX":0.75},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card","runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"Label","props":{"y":56,"x":32.1923828125,"width":55.615234375,"var":"numTxt","valign":"middle","text":17,"strokeColor":"#000000","stroke":2,"height":50,"fontSize":50,"color":"#f3f1ca","align":"center"}}]}]};
		override protected function createChildren():void {
			View.regComponent("ui.srddzGame.ddzPart.item.PockerItemUI",PockerItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}