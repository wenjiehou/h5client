/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts.HuPaiTip {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.Items.OutputLeftItemUI;

	public class LeftHuTipPanelUI extends View {
		public var backimg:Image;
		public var card0:OutputLeftItemUI;
		public var card1:OutputLeftItemUI;
		public var card2:OutputLeftItemUI;
		public var card3:OutputLeftItemUI;
		public var card4:OutputLeftItemUI;
		public var card5:OutputLeftItemUI;
		public var card6:OutputLeftItemUI;
		public var card7:OutputLeftItemUI;
		public var card8:OutputLeftItemUI;
		public var liangImg:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":0,"x":-2,"width":69,"var":"backimg","skin":"gametable/hubeijing.png","sizeGrid":"17,20,18,25","height":445}},{"type":"OutputLeftItem","props":{"y":58,"x":0,"var":"card0","height":48,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"Image","props":{"y":8,"x":6,"width":45,"skin":"gametable/hu.png","height":46}},{"type":"OutputLeftItem","props":{"y":99,"x":0,"var":"card1","height":48,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":140,"x":0,"var":"card2","height":48,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":181,"x":0,"var":"card3","height":48,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":222,"x":0,"var":"card4","height":48,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":263,"x":0,"var":"card5","height":48,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":304,"x":0,"var":"card6","height":48,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":345,"x":0,"var":"card7","height":48,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":386,"x":0,"var":"card8","height":48,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"Image","props":{"y":446,"x":3,"visible":false,"var":"liangImg","skin":"gametable/liangpaiqitaren.png"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.Items.OutputLeftItemUI",OutputLeftItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}