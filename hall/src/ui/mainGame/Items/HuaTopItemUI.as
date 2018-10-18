/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.Items {
	import laya.ui.*;
	import laya.display.*; 

	public class HuaTopItemUI extends View {
		public var downImg:Image;
		public var valueImg:Image;
		public var valueNum:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"downImg","skin":"gametable/mahjongpai/zhengmianfangdao.png"}},{"type":"Image","props":{"y":110,"x":90,"width":88,"visible":true,"var":"valueImg","skin":"gametable/mahjongpai/hxia.png","rotation":180,"height":110}},{"type":"Image","props":{"y":103,"x":27,"width":24,"visible":false,"var":"valueNum","skin":"gametable/huapart/hua1.png","rotation":180,"pivotX":1,"height":31}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}