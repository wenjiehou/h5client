/**Created by the LayaAirIDE,do not modify.*/
package ui.niuniuGame {
	import laya.ui.*;
	import laya.display.*; 
	import ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI;
	import ui.niuniuGame.niuniuPart.ActTipUI;
	import ui.niuniuGame.niuniuPart.PlayerCtlPartUI;
	import ui.niuniuGame.niuniuPart.handlePart.OwnerHandlePartUI;
	import ui.niuniuGame.niuniuPart.CuoPartUI;

	public class PockerPageUI extends View {
		public var tishiBtn:Button;
		public var showBtn:Button;
		public var handlePos9:OtherHandlePartUI;
		public var handlePos1:OtherHandlePartUI;
		public var handlePos8:OtherHandlePartUI;
		public var handlePos5:OtherHandlePartUI;
		public var handlePos6:OtherHandlePartUI;
		public var handlePos7:OtherHandlePartUI;
		public var handlePos4:OtherHandlePartUI;
		public var handlePos3:OtherHandlePartUI;
		public var handlePos2:OtherHandlePartUI;
		public var tipPart:ActTipUI;
		public var ctlPart:PlayerCtlPartUI;
		public var handlePos0:OwnerHandlePartUI;
		public var cuoBtn:Button;
		public var fanBtn:Button;
		public var cuoPart:CuoPartUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1038,"height":640},"child":[{"type":"Button","props":{"y":553,"x":772,"width":130,"var":"tishiBtn","stateNum":1,"skin":"common/buttonLan.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"提示","sizeGrid":"0,30,0,30"}},{"type":"Button","props":{"y":553,"x":901,"width":130,"var":"showBtn","stateNum":1,"skin":"common/buttonHuang.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"亮牌","sizeGrid":"0,29,0,28"}},{"type":"OtherHandlePart","props":{"y":363,"x":142,"var":"handlePos9","runtime":"ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI"}},{"type":"OtherHandlePart","props":{"y":363,"x":771,"var":"handlePos1","runtime":"ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI"}},{"type":"OtherHandlePart","props":{"y":265,"x":120,"var":"handlePos8","runtime":"ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI"}},{"type":"OtherHandlePart","props":{"y":157,"x":454,"var":"handlePos5","runtime":"ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI"}},{"type":"OtherHandlePart","props":{"y":168,"x":322,"var":"handlePos6","runtime":"ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI"}},{"type":"OtherHandlePart","props":{"y":236,"x":254,"var":"handlePos7","runtime":"ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI"}},{"type":"OtherHandlePart","props":{"y":168,"x":586,"var":"handlePos4","runtime":"ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI"}},{"type":"OtherHandlePart","props":{"y":236,"x":656,"var":"handlePos3","runtime":"ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI"}},{"type":"OtherHandlePart","props":{"y":265,"x":790,"var":"handlePos2","runtime":"ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI"}},{"type":"ActTip","props":{"y":387,"x":345,"var":"tipPart","runtime":"ui.niuniuGame.niuniuPart.ActTipUI"}},{"type":"PlayerCtlPart","props":{"y":445,"x":253,"var":"ctlPart","runtime":"ui.niuniuGame.niuniuPart.PlayerCtlPartUI"}},{"type":"OwnerHandlePart","props":{"y":518,"x":302,"var":"handlePos0","runtime":"ui.niuniuGame.niuniuPart.handlePart.OwnerHandlePartUI"}},{"type":"Button","props":{"y":553,"x":772,"width":130,"var":"cuoBtn","stateNum":1,"skin":"common/buttonLan.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"搓牌","sizeGrid":"0,30,0,30"}},{"type":"Button","props":{"y":553,"x":901,"width":130,"var":"fanBtn","stateNum":1,"skin":"common/buttonHuang.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"翻牌","sizeGrid":"0,29,0,28"}},{"type":"CuoPart","props":{"y":62,"x":319,"var":"cuoPart","runtime":"ui.niuniuGame.niuniuPart.CuoPartUI"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI",OtherHandlePartUI);
			View.regComponent("ui.niuniuGame.niuniuPart.ActTipUI",ActTipUI);
			View.regComponent("ui.niuniuGame.niuniuPart.PlayerCtlPartUI",PlayerCtlPartUI);
			View.regComponent("ui.niuniuGame.niuniuPart.handlePart.OwnerHandlePartUI",OwnerHandlePartUI);
			View.regComponent("ui.niuniuGame.niuniuPart.CuoPartUI",CuoPartUI);
			super.createChildren();
			createView(uiView);

		}

	}
}