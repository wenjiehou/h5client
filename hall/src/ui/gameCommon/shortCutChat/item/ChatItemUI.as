/**Created by the LayaAirIDE,do not modify.*/
package ui.gameCommon.shortCutChat.item {
	import laya.ui.*;
	import laya.display.*; 

	public class ChatItemUI extends View {
		public var seleImg:Box;
		public var tf:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"Image","props":{"skin":"common/biaoqingdi.png"}},{"type":"Box","props":{"y":0,"x":0,"var":"seleImg"},"child":[{"type":"Image","props":{"y":0,"x":-10,"width":507,"skin":"common/diwen.png","height":64,"sizeGrid":"18,20,18,19"}}]},{"type":"Label","props":{"y":18,"x":16,"width":461,"var":"tf","valign":"middle","text":"不要吵了，有什么好吵的，专心玩游戏","height":29,"fontSize":23,"font":"黑体","color":"#ffffff","bold":true,"align":"left"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}