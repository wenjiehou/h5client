/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.Items {
	import laya.ui.*;
	import laya.display.*; 

	public class TopHandleItemUI extends View {
		public var downImg:Image;
		public var frontImg:Image;
		public var backImg:Image;
		public var valueImg:Image;
		public var huEffImg:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"width":50,"visible":true,"var":"downImg","skin":"gametable/mahjongpai/zhengmianfangdao.png","height":74}},{"type":"Image","props":{"y":0,"x":0,"width":50,"visible":false,"var":"frontImg","skin":"gametable/mahjongpai/paibeimian.png","height":74}},{"type":"Image","props":{"y":0,"x":0,"width":50,"visible":false,"var":"backImg","skin":"gametable/mahjongpai/koupaishu.png","height":74}},{"type":"Image","props":{"y":54,"x":46,"width":43,"visible":true,"var":"valueImg","skin":"gametable/mahjongpai/tong9.png","rotation":180,"height":52}},{"type":"Image","props":{"y":-39,"x":-29,"var":"huEffImg","skin":"gametable/huanraohuoyan0001.png","scaleY":1.6,"scaleX":0.9}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}