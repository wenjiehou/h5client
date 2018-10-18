/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts.HuPaiTip {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.Items.OutputRightItemUI;

	public class RightHuTipPanelUI extends View {
		public var backimg:Image;
		public var card0:OutputRightItemUI;
		public var card1:OutputRightItemUI;
		public var card2:OutputRightItemUI;
		public var card3:OutputRightItemUI;
		public var card4:OutputRightItemUI;
		public var card5:OutputRightItemUI;
		public var card6:OutputRightItemUI;
		public var card7:OutputRightItemUI;
		public var card8:OutputRightItemUI;
		public var liangImg:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":2,"x":-1,"width":69,"var":"backimg","skin":"gametable/hubeijing.png","sizeGrid":"17,23,25,22","height":444}},{"type":"Image","props":{"y":8,"x":6,"skin":"gametable/hu.png"}},{"type":"OutputRightItem","props":{"y":58,"x":0,"var":"card0","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":99,"x":0,"var":"card1","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":140,"x":0,"var":"card2","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":181,"x":0,"var":"card3","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":222,"x":0,"var":"card4","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":263,"x":0,"var":"card5","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":304,"x":0,"var":"card6","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":345,"x":0,"var":"card7","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":386,"x":0,"var":"card8","height":48,"runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"Image","props":{"y":446,"x":4,"visible":false,"var":"liangImg","skin":"gametable/liangpaiqitaren.png"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.Items.OutputRightItemUI",OutputRightItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}