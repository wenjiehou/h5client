/**Created by the LayaAirIDE,do not modify.*/
package ui.hall.item {
	import laya.ui.*;
	import laya.display.*; 

	public class AgentLogItemUI extends View {
		public var nameTf:Label;
		public var levelImg:Image;
		public var cardNum:Label;
		public var payBtn:Button;
		public var timeTf:Label;
		public var payedImg:Image;
		public var uidTf:Label;
		public var headImg:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":575,"visible":true,"skin":"common/diwen.png","height":100,"sizeGrid":"18,20,18,19"}},{"type":"Label","props":{"y":35,"x":127,"width":150,"visible":true,"var":"nameTf","text":"哇哈哈-哇哈哈","overflow":"scroll","height":30,"fontSize":22,"font":"SimHei","color":"#c7edfb","align":"center"}},{"type":"Image","props":{"y":60,"x":147,"var":"levelImg","skin":"hall/level2.png"}},{"type":"Label","props":{"y":65,"x":304,"width":150,"visible":true,"var":"cardNum","text":"10000000张","overflow":"scroll","height":30,"fontSize":22,"font":"SimHei","color":"#c7edfb","align":"center"}},{"type":"Label","props":{"y":35,"x":304,"width":150,"visible":true,"text":"赠送","overflow":"scroll","height":30,"fontSize":22,"font":"SimHei","color":"#c7edfb","align":"center"}},{"type":"Button","props":{"y":14,"x":436,"width":130,"var":"payBtn","stateNum":1,"skin":"common/buttonLan.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":25,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"标记付款","height":70,"sizeGrid":"0,30,0,30"}},{"type":"Label","props":{"y":10,"x":86,"wordWrap":true,"width":233,"visible":true,"var":"timeTf","valign":"middle","text":"2018-05-10 15:29:00","height":22,"fontSize":22,"font":"SimHei","color":"#c7edfb","align":"center"}},{"type":"Image","props":{"y":33,"x":468,"var":"payedImg","skin":"common/payed.png"}},{"type":"Label","props":{"y":9,"x":304,"width":150,"visible":true,"var":"uidTf","text":"ID:1114","overflow":"scroll","height":30,"fontSize":22,"font":"SimHei","color":"#c7edfb","align":"center"}},{"type":"Box","props":{"y":14,"x":10,"width":74,"visible":true,"height":74,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":74,"visible":true,"var":"headImg","skin":"common/morentouxiang.png","height":74,"anchorY":0}},{"type":"Box","props":{"y":0,"x":0,"width":74,"visible":true,"renderType":"mask","height":74},"child":[{"type":"Image","props":{"width":74,"visible":true,"skin":"common/touxMask.png","height":74,"sizeGrid":"13,13,12,14"}}]}]},{"type":"Image","props":{"y":10,"x":6,"width":82,"visible":true,"skin":"common/touxBg.png","height":82,"sizeGrid":"15,15,19,18"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}