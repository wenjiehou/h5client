/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts.HuPaiTip {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.Items.OutputBottomItemUI;

	public class TopHuTipPanelUI extends View {
		public var backimg:Image;
		public var card0:OutputBottomItemUI;
		public var card1:OutputBottomItemUI;
		public var card2:OutputBottomItemUI;
		public var card3:OutputBottomItemUI;
		public var card4:OutputBottomItemUI;
		public var card5:OutputBottomItemUI;
		public var card6:OutputBottomItemUI;
		public var card7:OutputBottomItemUI;
		public var card8:OutputBottomItemUI;
		public var liangImg:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":899,"var":"backimg","skin":"gametable/hubeijing.png","sizeGrid":"18,19,22,23","height":158}},{"type":"Image","props":{"y":37,"x":-3,"width":73,"skin":"gametable/hu.png","height":75}},{"type":"OutputBottomItem","props":{"y":9,"x":75,"var":"card0","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":9,"x":165,"var":"card1","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":9,"x":256,"var":"card2","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":9,"x":346,"var":"card3","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":9,"x":437,"var":"card4","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":9,"x":527,"var":"card5","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":9,"x":617,"var":"card6","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":9,"x":708,"var":"card7","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":9,"x":795,"var":"card8","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"Image","props":{"y":29,"x":898,"width":166,"visible":false,"var":"liangImg","skin":"gametable/liangpaiqitaren.png","height":95}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.Items.OutputBottomItemUI",OutputBottomItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}