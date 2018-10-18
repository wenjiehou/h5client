/**Created by the LayaAirIDE,do not modify.*/
package ui.sddzGame.calculate.item {
	import laya.ui.*;
	import laya.display.*; 

	public class CalculatePerItemUI extends View {
		public var nameTf:Label;
		public var difenTf:Label;
		public var beishuTf:Label;
		public var zongfenTf:Label;
		public var dizhuImg:Image;
		public var chunImg:Image;
		public var fanchunImg:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":0,"x":-3,"width":555,"skin":"common/wenzidi.png","sizeGrid":"13,14,11,14","height":57}},{"type":"Label","props":{"y":10,"x":96,"wordWrap":false,"width":115,"var":"nameTf","valign":"middle","text":"小嘟嘟01010101","overflow":"hidden","height":38,"fontSize":30,"font":"SimHei","color":"#c7edfb","bold":false,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":10,"x":263,"wordWrap":false,"width":93,"var":"difenTf","valign":"middle","text":"20","height":38,"fontSize":30,"font":"SimHei","color":"#c7edfb","bold":false,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":10,"x":383,"wordWrap":false,"width":93,"var":"beishuTf","valign":"middle","text":"10","height":38,"fontSize":30,"font":"SimHei","color":"#c7edfb","bold":false,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":29,"x":502,"wordWrap":false,"width":93,"var":"zongfenTf","valign":"middle","text":"-100","scaleY":0.7,"scaleX":0.7,"height":38,"fontSize":22,"font":"SimHei","color":"#c7edfb","bold":false,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":8,"x":9,"var":"dizhuImg","skin":"gameCommon/dizhu.png","scaleY":0.6,"scaleX":0.6}},{"type":"Image","props":{"y":17,"x":170,"var":"chunImg","skin":"gameCommon/chun.png","scaleY":0.3,"scaleX":0.3}},{"type":"Image","props":{"y":17,"x":156,"var":"fanchunImg","skin":"gameCommon/fanchun.png","scaleY":0.3,"scaleX":0.3}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}