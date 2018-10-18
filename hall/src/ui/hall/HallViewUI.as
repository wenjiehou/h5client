/**Created by the LayaAirIDE,do not modify.*/
package ui.hall {
	import laya.ui.*;
	import laya.display.*; 
	import ui.hall.HallBgUI;
	import laya.display.Text;

	public class HallViewUI extends View {
		public var handBtn:Box;
		public var handIMG:Image;
		public var nameTf:Label;
		public var idTf:Label;
		public var diamondTf:Label;
		public var coinTf:Label;
		public var creatXiZBtn:Button;
		public var creatSanDizhuBtn:Button;
		public var creatSiDizhuBtn:Button;
		public var creatXiSBtn:Button;
		public var creatPinshiBtn:Button;
		public var creatHHuaBtn:Button;
		public var joinRoomBtn:Button;
		public var Notice:Text;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"x":0,"width":640,"rotation":0,"renderType":"mask","height":1038,"color":"#fdfdfd"},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"HallBg","props":{"runtime":"ui.hall.HallBgUI"}},{"type":"Box","props":{"x":1,"alpha":0.3},"child":[{"type":"Rect","props":{"width":640,"lineWidth":1,"height":90,"fillColor":"#000000"}}]},{"type":"Box","props":{"y":44,"x":15,"width":76,"var":"handBtn","height":76,"anchorY":0.5,"anchorX":0},"child":[{"type":"Box","props":{"y":-4,"x":-4,"alpha":0.3},"child":[{"type":"Circle","props":{"y":42,"x":42,"radius":42,"lineWidth":0,"lineColor":"#eeeeee","fillColor":"#eeeeee"}}]},{"type":"Box","props":{"y":1,"x":1,"width":74,"height":74,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":74,"var":"handIMG","skin":"common/morentouxiang2.png","height":74}},{"type":"Box","props":{"y":0,"x":0,"width":74,"renderType":"mask","height":74},"child":[{"type":"Circle","props":{"y":37,"x":37,"radius":37,"lineWidth":1,"fillColor":"#ff0000"}}]}]}]},{"type":"Box","props":{"y":11,"x":103},"child":[{"type":"Label","props":{"y":4,"x":4,"width":244,"var":"nameTf","text":"哇哈哈*胡文松","overflow":"hidden","height":32,"fontSize":26,"font":"SimHei","color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":40,"x":7,"width":83,"var":"idTf","valign":"middle","text":"ID:1025","height":24,"fontSize":22,"font":"SimHei","color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":37,"x":102,"skin":"hall/icon_diamond.png","scaleY":0.6,"scaleX":0.6}},{"type":"Label","props":{"y":40,"x":128,"width":82,"var":"diamondTf","valign":"middle","text":"1000000","height":24,"fontSize":22,"font":"SimHei","color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":35,"x":209,"skin":"common/jinbi.png"}},{"type":"Label","props":{"y":40,"x":241,"width":90,"var":"coinTf","valign":"middle","text":51555956,"height":24,"fontSize":22,"font":"SimHei","color":"#ffffff","align":"left"}}]},{"type":"Panel","props":{"y":192,"x":15.5,"width":611,"vScrollBarSkin":" ","height":684},"child":[{"type":"Button","props":{"y":170,"x":328,"width":288,"visible":true,"var":"creatXiZBtn","stateNum":1,"skin":"hall/danchengGame.png","height":156}},{"type":"Button","props":{"x":325,"var":"creatSanDizhuBtn","stateNum":1,"skin":"hall/sanrendoudizhu.png"}},{"type":"Button","props":{"var":"creatSiDizhuBtn","stateNum":1,"skin":"hall/sirendoudizhu.png"}},{"type":"Button","props":{"y":170,"x":0,"width":282,"visible":true,"var":"creatXiSBtn","stateNum":1,"skin":"hall/xizhoumajiang.png","height":158}},{"type":"Button","props":{"y":340,"x":8,"visible":false,"var":"creatPinshiBtn","stateNum":1,"skin":"hall/pinshiGame.png"}},{"type":"Button","props":{"y":340,"x":336,"visible":false,"var":"creatHHuaBtn","stateNum":1,"skin":"hall/huaihuamj.png"}}]},{"type":"Image","props":{"y":169,"x":11,"width":620,"skin":"common/lanfengexian.png","height":2,"sizeGrid":"0,3,0,3"}},{"type":"Button","props":{"y":17,"x":460,"width":162,"var":"joinRoomBtn","stateNum":1,"skin":"hall/jionRoomBtn.png","labelSize":24,"labelFont":"SimHei","labelColors":"#0a426b,#0a426b,#0a426b","label":"加入房间","sizeGrid":"0,36,0,32"}},{"type":"Box","props":{"y":104,"x":0},"child":[{"type":"Box","props":{"width":640,"height":50},"child":[{"type":"Image","props":{"width":640,"skin":"common/madengBg.png","sizeGrid":"20,17,21,17"}}]},{"type":"Image","props":{"y":11,"x":35,"skin":"hall/laba.png","scaleY":0.8,"scaleX":0.8}},{"type":"Image","props":{"y":9,"x":79,"width":551,"skin":"common/labaBg.png","height":35,"sizeGrid":"12,10,16,14"}},{"type":"Text","props":{"y":13,"x":87,"width":528,"var":"Notice","text":"文字文字y","height":48,"fontSize":24,"font":"SimHei","color":"#ffffff"}}]}]}]};
		override protected function createChildren():void {
			View.regComponent("ui.hall.HallBgUI",HallBgUI);
			View.regComponent("Text",Text);
			super.createChildren();
			createView(uiView);

		}

	}
}