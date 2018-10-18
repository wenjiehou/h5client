/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.Items.OutputBottomItemUI;

	public class ChiSelePartUI extends View {
		public var backimg:Image;
		public var chi0:Box;
		public var card0:OutputBottomItemUI;
		public var card1:OutputBottomItemUI;
		public var chi1:Box;
		public var card2:OutputBottomItemUI;
		public var card3:OutputBottomItemUI;
		public var chi2:Box;
		public var card4:OutputBottomItemUI;
		public var card5:OutputBottomItemUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":4,"x":0,"width":642,"var":"backimg","skin":"gametable/hubeijing.png","sizeGrid":"22,20,23,23","height":163}},{"type":"Box","props":{"y":0,"x":19,"width":182,"var":"chi0"},"child":[{"type":"OutputBottomItem","props":{"y":16,"x":0,"var":"card0","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":16,"x":90,"var":"card1","runtime":"ui.mainGame.Items.OutputBottomItemUI"}}]},{"type":"Box","props":{"y":0,"x":229,"var":"chi1"},"child":[{"type":"OutputBottomItem","props":{"y":16,"x":0,"var":"card2","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":16,"x":90,"var":"card3","runtime":"ui.mainGame.Items.OutputBottomItemUI"}}]},{"type":"Box","props":{"y":0,"x":439,"var":"chi2"},"child":[{"type":"OutputBottomItem","props":{"y":16,"x":0,"var":"card4","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":16,"x":90,"var":"card5","runtime":"ui.mainGame.Items.OutputBottomItemUI"}}]}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.Items.OutputBottomItemUI",OutputBottomItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}