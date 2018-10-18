/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts.HuPaiTip {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.Items.OutputBottomItemUI;

	public class BottomHuTipPanelUI extends View {
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

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":-4,"x":0,"width":903,"var":"backimg","skin":"gametable/hubeijing.png","sizeGrid":"16,24,18,28","height":149}},{"type":"Image","props":{"y":38,"x":13,"width":57,"skin":"gametable/hu.png","height":58}},{"type":"OutputBottomItem","props":{"y":0,"x":75,"width":0,"var":"card0","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":165,"var":"card1","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":255,"var":"card2","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":345,"var":"card3","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":436,"var":"card4","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":526,"var":"card5","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":616,"var":"card6","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":706,"var":"card7","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":796,"var":"card8","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"Image","props":{"y":38,"x":910,"width":190,"visible":false,"var":"liangImg","skin":"gametable/liangpaiziji.png","height":60}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.Items.OutputBottomItemUI",OutputBottomItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}