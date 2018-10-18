/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.Items.BottomHandleItemUI;

	public class BottomHandlePartUI extends View {
		public var tingImg:Image;
		public var card0:BottomHandleItemUI;
		public var card1:BottomHandleItemUI;
		public var card2:BottomHandleItemUI;
		public var card3:BottomHandleItemUI;
		public var card4:BottomHandleItemUI;
		public var card5:BottomHandleItemUI;
		public var card6:BottomHandleItemUI;
		public var card7:BottomHandleItemUI;
		public var card8:BottomHandleItemUI;
		public var card9:BottomHandleItemUI;
		public var card10:BottomHandleItemUI;
		public var card11:BottomHandleItemUI;
		public var card12:BottomHandleItemUI;
		public var card13:BottomHandleItemUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"Image","props":{"y":0,"x":1,"width":1014,"var":"tingImg","height":129}},{"type":"BottomHandleItem","props":{"y":0,"x":0,"width":90,"var":"card0","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":91,"var":"card1","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":182,"var":"card2","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":273,"var":"card3","scaleY":1,"runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":364,"var":"card4","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":455,"var":"card5","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":546,"var":"card6","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":637,"var":"card7","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":728,"var":"card8","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":819,"var":"card9","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":910,"var":"card10","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":1001,"var":"card11","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":1092,"var":"card12","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":1210,"var":"card13","runtime":"ui.mainGame.Items.BottomHandleItemUI"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.Items.BottomHandleItemUI",BottomHandleItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}