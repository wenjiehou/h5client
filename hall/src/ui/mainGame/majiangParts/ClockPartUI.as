/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts {
	import laya.ui.*;
	import laya.display.*; 

	public class ClockPartUI extends View {
		public var wenliImg:Image;
		public var middleBox:Box;
		public var bottomSimbol:Image;
		public var rightSimbol:Image;
		public var topSimbol:Image;
		public var leftSimbol:Image;
		public var clockTf:Label;
		public var leftRoundNumTf:Label;
		public var leftCardsNumTf:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"Image","props":{"y":-141,"x":-128,"width":352,"var":"wenliImg","skin":"gametable/wenli_xiangshan.png","height":352}},{"type":"Box","props":{"y":49.4,"x":49.4,"width":90.11000000000001,"var":"middleBox","scaleY":1.3,"scaleX":1.3,"pivotY":38,"pivotX":38,"height":90.11000000000001},"child":[{"type":"Image","props":{"y":0,"x":0,"width":76,"skin":"gametable/daojibeijing1.png","height":76}},{"type":"Image","props":{"y":48,"x":-14,"var":"bottomSimbol","skin":"gametable/d.png","scaleY":0.54,"scaleX":0.54}},{"type":"Image","props":{"y":-14,"x":48,"var":"rightSimbol","skin":"gametable/n.png","scaleY":0.54,"scaleX":0.54}},{"type":"Image","props":{"y":-12,"x":-15,"var":"topSimbol","skin":"gametable/x.png","scaleY":0.54,"scaleX":0.54}},{"type":"Image","props":{"y":-14,"x":-12,"var":"leftSimbol","skin":"gametable/b.png","scaleY":0.54,"scaleX":0.54}}]},{"type":"Label","props":{"y":38.4,"x":33.4,"width":37,"var":"clockTf","valign":"top","text":"00","height":37,"fontSize":25,"color":"#f9ee3e","bold":true,"align":"left"}},{"type":"Box","props":{"y":31.4,"x":-107},"child":[{"type":"Image","props":{"width":96,"skin":"gameCommon/daojibeijing2.png","sizeGrid":"0,28,0,28","height":36}},{"type":"Label","props":{"y":0,"x":12,"width":20,"valign":"middle","text":"第","height":34,"fontSize":20,"font":"SimHei","color":"#00edc2","bold":true}},{"type":"Label","props":{"y":6,"x":32,"var":"leftRoundNumTf","valign":"middle","text":15,"fontSize":22,"font":"SimHei","color":"#f4f7aa","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":66,"width":20,"valign":"middle","text":"局","height":36,"fontSize":20,"font":"SimHei","color":"#00edc2","bold":true}}]},{"type":"Box","props":{"y":31.4,"x":109.4},"child":[{"type":"Image","props":{"width":96,"skin":"gameCommon/daojibeijing2.png","sizeGrid":"0,28,0,28","height":36}},{"type":"Label","props":{"y":7,"x":57,"width":32,"var":"leftCardsNumTf","valign":"top","text":45,"height":32,"fontSize":22,"color":"#f4f7aa","bold":true,"align":"center"}},{"type":"Image","props":{"y":6,"x":11,"skin":"gameCommon/gameSheng.png"}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}