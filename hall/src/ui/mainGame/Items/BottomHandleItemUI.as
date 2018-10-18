/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.Items {
	import laya.ui.*;
	import laya.display.*; 

	public class BottomHandleItemUI extends View {
		public var buhua:Image;
		public var tempImg:Image;
		public var frontImg:Image;
		public var backImg:Image;
		public var downImg:Image;
		public var valueImg:Image;
		public var baidaImg:Image;
		public var huEffImg:Image;
		public var tingImg:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"visible":false},"child":[{"type":"Image","props":{"y":-32,"x":-120,"visible":false,"var":"buhua","skin":"gametable/buhua.png"}},{"type":"Image","props":{"y":-10,"x":-11,"width":113,"visible":false,"var":"tempImg","skin":"gameCommon/paibeijing.png","sizeGrid":"26,31,31,29","height":163}},{"type":"Image","props":{"y":0,"x":0,"width":92,"visible":true,"var":"frontImg","skin":"gametable/mahjongpai/paizhengmian.png","height":148}},{"type":"Image","props":{"y":0,"x":0,"visible":false,"var":"backImg","skin":"gametable/mahjongpai/koupaishu.png"}},{"type":"Image","props":{"y":0,"x":0,"visible":false,"var":"downImg","skin":"gametable/mahjongpai/zhengmianfangdao.png"}},{"type":"Image","props":{"y":34,"x":0,"var":"valueImg","skin":"gametable/mahjongpai/tong9.png","scaleY":1.4,"scaleX":1.4}},{"type":"Image","props":{"y":35,"x":4,"visible":false,"var":"baidaImg","skin":"gametable/baidatishi.png"}},{"type":"Image","props":{"y":-68,"x":-51,"var":"huEffImg","skin":"gametable/huanraohuoyan0001.png","scaleY":3.1,"scaleX":1.6,"disabled":false}},{"type":"Image","props":{"y":35,"x":5,"width":20,"visible":true,"var":"tingImg","skin":"gameCommon/tingxiaotubiao.png","height":21}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}