/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.Items {
	import laya.ui.*;
	import laya.display.*; 

	public class OutputLeftItemUI extends View {
		public var downImg:Image;
		public var backImg:Image;
		public var valueImg:Image;
		public var huEffImg:Image;
		public var curIdxSimbol:Image;
		public var chiMark:Image;
		public var pengMark:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"visible":false},"child":[{"type":"Image","props":{"y":0,"x":0,"visible":true,"var":"downImg","skin":"gametable/mahjongpai/paihengtang.png"}},{"type":"Image","props":{"y":0,"x":0,"visible":false,"var":"backImg","skin":"gametable/mahjongpai/koupaiheng.png"}},{"type":"Image","props":{"y":-1,"x":63,"var":"valueImg","skin":"gametable/mahjongpai/wan9.png","scaleY":0.8,"scaleX":0.65,"rotation":90}},{"type":"Image","props":{"y":-28,"x":-40,"var":"huEffImg","skin":"gametable/huanraohuoyan0001.png","scaleY":1.2,"scaleX":1.2}},{"type":"Image","props":{"y":-21,"x":19,"visible":false,"var":"curIdxSimbol","skin":"gametable/xiaotuoluo.png","scaleY":0.85,"scaleX":0.85}},{"type":"Image","props":{"y":7,"x":25,"visible":false,"var":"chiMark","skin":"gametable/chengbao/pengpaijiantou3_lan.png","rotation":90}},{"type":"Image","props":{"y":8,"x":25,"var":"pengMark","skin":"gametable/chengbao/pengpaijiantou3_lan.png","rotation":90}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}