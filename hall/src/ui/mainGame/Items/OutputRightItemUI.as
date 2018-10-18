/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.Items {
	import laya.ui.*;
	import laya.display.*; 

	public class OutputRightItemUI extends View {
		public var downImg:Image;
		public var backImg:Image;
		public var valueImg:Image;
		public var curIdxSimbol:Image;
		public var chiMark:Image;
		public var pengMark:Image;
		public var huEffImg:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"visible":true,"var":"downImg","skin":"gametable/mahjongpai/paihengtang.png"}},{"type":"Image","props":{"y":0,"x":0,"width":67,"visible":false,"var":"backImg","skin":"gametable/mahjongpai/koupaiheng.png","height":53}},{"type":"Image","props":{"y":40,"x":5,"width":105,"var":"valueImg","skin":"gametable/mahjongpai/wan9.png","scaleY":0.46,"scaleX":0.38,"rotation":-90,"height":125}},{"type":"Image","props":{"y":-19,"x":19,"visible":false,"var":"curIdxSimbol","skin":"gametable/xiaotuoluo.png","scaleY":0.85,"scaleX":0.85}},{"type":"Image","props":{"y":32,"x":42,"visible":false,"var":"chiMark","skin":"gametable/chengbao/pengpaijiantou3_lan.png","rotation":-90,"pivotY":0.5,"pivotX":0.5}},{"type":"Image","props":{"y":30,"x":37,"var":"pengMark","skin":"gametable/chengbao/pengpaijiantou2_lan.png","rotation":-90}},{"type":"Image","props":{"y":-27,"x":-39,"var":"huEffImg","skin":"gametable/huanraohuoyan0001.png","scaleY":1.2,"scaleX":1.2}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}