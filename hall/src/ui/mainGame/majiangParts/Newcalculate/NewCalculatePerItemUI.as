/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts.Newcalculate {
	import laya.ui.*;
	import laya.display.*; 

	public class NewCalculatePerItemUI extends View {
		public var headImg:Image;
		public var zongchengji:Label;
		public var chengbaoTf:Label;
		public var huImg:Image;
		public var dianPaoImg:Image;
		public var nicknameTf:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":210,"height":135},"child":[{"type":"Image","props":{"y":0,"x":-1,"width":211,"skin":"common/wenzidi.png","sizeGrid":"13,14,11,14","height":135}},{"type":"Image","props":{"y":45,"x":49,"width":70,"var":"headImg","skin":"common/morentouxiang.png","height":70,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":80,"x":97,"width":110,"var":"zongchengji","valign":"middle","text":"+3200","height":50,"fontSize":30,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":51,"x":94,"width":104,"visible":false,"var":"chengbaoTf","valign":"middle","text":"双承包赔付","height":32,"fontSize":20,"font":"SimHei","color":"#952d08","align":"center"}},{"type":"Image","props":{"y":5,"x":111,"width":71,"var":"huImg","skin":"gametable/gameOver/bejinghu.png","height":80}},{"type":"Image","props":{"y":11,"x":99,"width":90,"var":"dianPaoImg","skin":"gametable/gameOver/dianpao.png","height":41}},{"type":"Label","props":{"y":93,"x":1,"width":100,"var":"nicknameTf","valign":"middle","text":"哇哈哈-胡文松","overflow":"scroll","height":28,"fontSize":20,"font":"SimHei","color":"#fff8f8","align":"center"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}