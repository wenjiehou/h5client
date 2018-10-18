/**Created by the LayaAirIDE,do not modify.*/
package ui.sddzGame.calculate {
	import laya.ui.*;
	import laya.display.*; 
	import ui.sddzGame.calculate.item.CalculatePerItemUI;

	public class CalculatePerPageUI extends View {
		public var hideBtn:Button;
		public var confirmBtn:Button;
		public var item0:CalculatePerItemUI;
		public var item2:CalculatePerItemUI;
		public var item1:CalculatePerItemUI;
		public var readyBtn:Button;
		public var readyImg:Image;
		public var closeBtn:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":640,"height":1038},"child":[{"type":"Box","props":{"y":0,"x":0,"alpha":0.5},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":640,"lineWidth":1,"height":1038,"fillColor":"#000000"}}]},{"type":"Image","props":{"y":282,"x":27,"width":586,"skin":"common/gameBg.png","sizeGrid":"34,32,34,34","height":335}},{"type":"Button","props":{"y":532,"x":44,"width":180,"visible":true,"var":"hideBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#c5893b","labelStroke":5,"labelSize":38,"labelFont":"SimHei","labelColors":"#ffffff","labelAlign":"center","height":68,"sizeGrid":"0,29,0,27"},"child":[{"type":"Image","props":{"y":6,"x":45,"skin":"gameCommon/btnHide.png"}}]},{"type":"Button","props":{"y":532,"x":416,"width":180,"visible":false,"var":"confirmBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#c5893b","labelStroke":5,"labelSize":38,"labelFont":"SimHei","labelColors":"#ffffff","labelAlign":"center","height":68,"sizeGrid":"0,29,0,27"},"child":[{"type":"Image","props":{"y":6,"x":41,"skin":"common/btnConfirm.png"}}]},{"type":"Box","props":{"y":295,"x":78,"width":520,"height":38},"child":[{"type":"Label","props":{"y":0,"x":68,"wordWrap":false,"width":120,"valign":"middle","text":"昵称","height":38,"fontSize":32,"font":"SimHei","color":"#c7edfb","bold":true,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":0,"x":230,"wordWrap":false,"width":93,"valign":"middle","text":"底分","height":38,"fontSize":32,"font":"SimHei","color":"#c7edfb","bold":true,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"x":349,"wordWrap":false,"width":93,"valign":"middle","text":"倍数","height":38,"fontSize":32,"font":"SimHei","color":"#c7edfb","bold":true,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"x":468,"wordWrap":false,"width":93,"valign":"middle","text":"总分","height":38,"fontSize":32,"font":"SimHei","color":"#c7edfb","bold":true,"anchorY":0,"anchorX":0.5,"align":"center"}}]},{"type":"CalculatePerItem","props":{"y":342,"x":46,"width":550,"var":"item0","runtime":"ui.sddzGame.calculate.item.CalculatePerItemUI"}},{"type":"CalculatePerItem","props":{"y":453,"x":46,"width":550,"var":"item2","runtime":"ui.sddzGame.calculate.item.CalculatePerItemUI"}},{"type":"CalculatePerItem","props":{"y":398,"x":46,"width":550,"var":"item1","runtime":"ui.sddzGame.calculate.item.CalculatePerItemUI"}},{"type":"Box","props":{"y":532,"x":230},"child":[{"type":"Button","props":{"width":180,"var":"readyBtn","stateNum":1,"skin":"common/buttonHuang.png","height":68,"sizeGrid":"0,29,0,28"},"child":[{"type":"Image","props":{"y":6,"x":22,"var":"readyImg","skin":"gameCommon/nextPlay.png"}}]},{"type":"Button","props":{"width":180,"visible":false,"var":"closeBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#c5893b","labelStroke":5,"labelSize":38,"labelFont":"SimHei","labelColors":"#ffffff","labelAlign":"center","height":68,"sizeGrid":"0,29,0,28"},"child":[{"type":"Image","props":{"y":6,"x":46,"skin":"common/closs.png"}}]}]}]};
		override protected function createChildren():void {
			View.regComponent("ui.sddzGame.calculate.item.CalculatePerItemUI",CalculatePerItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}