/**Created by the LayaAirIDE,do not modify.*/
package ui.srddzGame.calculate.item {
	import laya.ui.*;
	import laya.display.*; 

	public class CalculatePerItemUI extends View {
		public var nameTf:Label;
		public var difenTf:Label;
		public var beishuTf:Label;
		public var zongfenTf:Label;
		public var headImg:Image;
		public var dizhuImg:Image;
		public var directImg:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":855,"height":90},"child":[{"type":"Image","props":{"y":0,"x":0,"width":855,"skin":"common/wenzidi.png","sizeGrid":"13,14,11,14","height":90}},{"type":"Label","props":{"y":26,"x":216,"wordWrap":false,"width":176,"var":"nameTf","valign":"middle","text":"小嘟嘟01010101","overflow":"hidden","height":35,"fontSize":35,"font":"SimHei","color":"#c7edfb","bold":false,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":19,"x":408,"wordWrap":false,"width":93,"var":"difenTf","valign":"middle","text":"20","fontSize":50,"font":"SimHei","color":"#c7edfb","bold":false,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":19,"x":567,"wordWrap":false,"width":93,"var":"beishuTf","valign":"middle","text":"10","fontSize":50,"font":"SimHei","color":"#c7edfb","bold":false,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":45,"x":761,"wordWrap":false,"width":150,"var":"zongfenTf","valign":"middle","text":"-100","fontSize":50,"font":"SimHei","color":"#c7edfb","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":44,"x":87,"width":70,"var":"headImg","skin":"common/morentouxiang.png","mouseThrough":true,"height":70,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":10,"x":9,"var":"dizhuImg","skin":"gameCommon/dizhu.png"}},{"type":"Image","props":{"y":6,"x":624,"var":"directImg","skin":"srddzGame/zhijieying.png","scaleY":0.25,"scaleX":0.25,"rotation":30}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}