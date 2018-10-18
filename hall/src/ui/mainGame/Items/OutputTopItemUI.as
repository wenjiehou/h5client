/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.Items {
	import laya.ui.*;
	import laya.display.*; 

	public class OutputTopItemUI extends View {
		public var huEffImg:Image;
		public var downImg:Image;
		public var valueImg:Image;
		public var backImg:Image;
		public var chiMark:Image;
		public var pengMark:Image;
		public var curIdxSimbol:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"Image","props":{"y":-78,"x":-64,"width":254,"var":"huEffImg","skin":"gametable/huanraohuoyan0001.png","scaleY":1.6,"scaleX":0.9,"height":193}},{"type":"Image","props":{"y":0,"x":0,"var":"downImg","skin":"gametable/mahjongpai/zhengmianfangdao.png"}},{"type":"Image","props":{"y":2,"x":4,"width":84,"visible":true,"var":"valueImg","skin":"gametable/mahjongpai/wan1.png","height":104}},{"type":"Image","props":{"y":0,"x":0,"visible":false,"var":"backImg","skin":"gametable/mahjongpai/koupaishu.png"}},{"type":"Image","props":{"y":110,"x":68,"visible":false,"var":"chiMark","skin":"gametable/chengbao/pengpaijiantou3_lan.png","scaleY":1.5,"scaleX":1.5,"rotation":180}},{"type":"Image","props":{"y":111,"x":65,"var":"pengMark","skin":"gametable/chengbao/pengpaijiantou2_lan.png","scaleY":1.5,"scaleX":1.5,"rotation":-180}},{"type":"Image","props":{"y":-21,"x":32,"visible":false,"var":"curIdxSimbol","skin":"gametable/xiaotuoluo.png"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}