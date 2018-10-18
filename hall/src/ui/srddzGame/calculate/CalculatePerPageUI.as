/**Created by the LayaAirIDE,do not modify.*/
package ui.srddzGame.calculate {
	import laya.ui.*;
	import laya.display.*; 
	import ui.srddzGame.calculate.item.CalculatePerItemUI;

	public class CalculatePerPageUI extends View {
		public var hideBtn:Button;
		public var confirmBtn:Button;
		public var readyBtn:Button;
		public var readyImg:Image;
		public var closeBtn:Button;
		public var item0:CalculatePerItemUI;
		public var item1:CalculatePerItemUI;
		public var item2:CalculatePerItemUI;
		public var item3:CalculatePerItemUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1038,"height":640},"child":[{"type":"Box","props":{"y":0,"x":0,"alpha":0.5},"child":[{"type":"Rect","props":{"x":0,"width":1038,"lineWidth":1,"height":640,"fillColor":"#000000"}}]},{"type":"Image","props":{"y":11,"x":64,"width":900,"skin":"common/gameBg.png","sizeGrid":"34,32,34,34","height":548}},{"type":"Button","props":{"y":566,"x":179,"width":180,"visible":true,"var":"hideBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#c5893b","labelStroke":5,"labelSize":38,"labelFont":"SimHei","labelColors":"#ffffff","labelAlign":"center","height":68,"anchorX":0.5,"sizeGrid":"0,29,0,27"},"child":[{"type":"Image","props":{"y":8,"x":45,"skin":"gameCommon/btnHide.png"}}]},{"type":"Button","props":{"y":566,"x":847,"width":180,"visible":false,"var":"confirmBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#c5893b","labelStroke":5,"labelSize":38,"labelFont":"SimHei","labelColors":"#ffffff","labelAlign":"center","height":68,"anchorX":0.5,"sizeGrid":"0,29,0,27"},"child":[{"type":"Image","props":{"y":11,"x":41,"skin":"common/btnConfirm.png"}}]},{"type":"Box","props":{"y":566,"x":424,"width":180},"child":[{"type":"Button","props":{"width":180,"var":"readyBtn","stateNum":1,"skin":"common/buttonHuang.png","height":68,"sizeGrid":"0,29,0,28"},"child":[{"type":"Image","props":{"y":6,"x":22,"var":"readyImg","skin":"gameCommon/nextPlay.png"}}]},{"type":"Button","props":{"width":180,"visible":false,"var":"closeBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#c5893b","labelStroke":5,"labelSize":38,"labelFont":"SimHei","labelColors":"#ffffff","labelAlign":"center","height":68,"sizeGrid":"0,29,0,28"},"child":[{"type":"Image","props":{"y":6,"x":46,"skin":"common/closs.png"}}]}]},{"type":"Box","props":{"y":62,"x":218,"width":717},"child":[{"type":"Label","props":{"y":0,"x":79,"wordWrap":false,"width":120,"valign":"middle","text":"昵称","fontSize":40,"font":"SimHei","color":"#ffffff","bold":true,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":0,"x":275,"wordWrap":false,"width":93,"valign":"middle","text":"底分","fontSize":40,"font":"SimHei","color":"#ffffff","bold":true,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":0,"x":432,"wordWrap":false,"width":93,"valign":"middle","text":"倍数","fontSize":40,"font":"SimHei","color":"#ffffff","bold":true,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":0,"x":631,"wordWrap":false,"width":93,"valign":"middle","text":"总分","fontSize":40,"font":"SimHei","color":"#ffffff","bold":true,"anchorY":0,"anchorX":0.5,"align":"center"}}]},{"type":"CalculatePerItem","props":{"y":124,"x":86.5,"var":"item0","runtime":"ui.srddzGame.calculate.item.CalculatePerItemUI"}},{"type":"CalculatePerItem","props":{"y":222,"x":86.5,"var":"item1","runtime":"ui.srddzGame.calculate.item.CalculatePerItemUI"}},{"type":"CalculatePerItem","props":{"y":320,"x":86.5,"var":"item2","runtime":"ui.srddzGame.calculate.item.CalculatePerItemUI"}},{"type":"CalculatePerItem","props":{"y":418,"x":86.5,"var":"item3","runtime":"ui.srddzGame.calculate.item.CalculatePerItemUI"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.srddzGame.calculate.item.CalculatePerItemUI",CalculatePerItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}