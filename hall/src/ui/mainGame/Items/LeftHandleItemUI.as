/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.Items {
	import laya.ui.*;
	import laya.display.*; 

	public class LeftHandleItemUI extends View {
		public var backImg:Image;
		public var downImg:Image;
		public var valueImg:Image;
		public var frontImg:Image;
		public var huEffImg:Image;
		public var LiangEff:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"Image","props":{"y":28,"x":0,"visible":false,"var":"backImg","skin":"gametable/mahjongpai/koupaiheng.png"}},{"type":"Image","props":{"y":28,"x":0,"visible":false,"var":"downImg","skin":"gametable/mahjongpai/paihengtang.png"}},{"type":"Image","props":{"y":28,"x":63,"width":106,"var":"valueImg","skin":"gametable/mahjongpai/tong9.png","scaleY":0.46,"scaleX":0.38,"rotation":90,"height":125}},{"type":"Image","props":{"y":0,"x":17,"visible":true,"var":"frontImg","skin":"gametable/mahjongpai/paifushilimian.png"}},{"type":"Image","props":{"y":0,"x":-39,"var":"huEffImg","skin":"gametable/huanraohuoyan0001.png","scaleY":1.2,"scaleX":1.2}},{"type":"Image","props":{"y":70,"x":133,"var":"LiangEff","skin":"gametable/liang0001.png","rotation":180,"height":43}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}