/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.Items.TopHandleItemUI;

	public class TopHandlePartUI extends View {
		public var card12:TopHandleItemUI;
		public var card11:TopHandleItemUI;
		public var card10:TopHandleItemUI;
		public var card9:TopHandleItemUI;
		public var card8:TopHandleItemUI;
		public var card7:TopHandleItemUI;
		public var card6:TopHandleItemUI;
		public var card5:TopHandleItemUI;
		public var card4:TopHandleItemUI;
		public var card3:TopHandleItemUI;
		public var card2:TopHandleItemUI;
		public var card1:TopHandleItemUI;
		public var card0:TopHandleItemUI;
		public var card13:TopHandleItemUI;
		public var tingImg:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"TopHandleItem","props":{"y":0,"x":64,"var":"card12","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":112,"var":"card11","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":160,"var":"card10","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":208,"var":"card9","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":256,"var":"card8","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":304,"var":"card7","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":352,"var":"card6","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":400,"var":"card5","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":448,"var":"card4","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":496,"var":"card3","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":544,"var":"card2","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":592,"var":"card1","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":640,"width":50,"var":"card0","height":108,"runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":0,"var":"card13","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"Image","props":{"y":333,"x":-393,"width":453,"visible":true,"var":"tingImg","rotation":-90,"height":1784}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.Items.TopHandleItemUI",TopHandleItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}