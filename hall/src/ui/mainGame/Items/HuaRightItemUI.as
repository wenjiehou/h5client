/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.Items {
	import laya.ui.*;
	import laya.display.*; 

	public class HuaRightItemUI extends View {
		public var downImg:Image;
		public var valueImg:Image;
		public var valueNum:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"visible":true,"var":"downImg","skin":"gametable/mahjongpai/paihengtang.png"}},{"type":"Image","props":{"y":40,"x":8,"width":41,"var":"valueImg","skin":"gametable/mahjongpai/hmei.png","rotation":-90,"height":51}},{"type":"Image","props":{"y":25,"x":6,"visible":false,"var":"valueNum","skin":"gametable/huapart/hua1.png","rotation":-90}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}