/**Created by the LayaAirIDE,do not modify.*/
package ui.hall.item {
	import laya.ui.*;
	import laya.display.*; 

	public class GiveCardViewUI extends View {
		public var uidTf:TextInput;
		public var cardNumTf:TextInput;
		public var giveBtn:Button;
		public var cancelBtn:Button;
		public var leftCardNumTf:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":640,"height":1038},"child":[{"type":"Box","props":{"y":0,"x":0,"mouseThrough":true,"alpha":0.5},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":640,"lineWidth":0,"height":1038,"fillColor":"#000000"}}]},{"type":"Box","props":{"y":160,"x":120,"width":400,"height":580},"child":[{"type":"Image","props":{"y":0,"x":0,"width":400,"skin":"common/popBg.png","mouseThrough":true,"height":580,"sizeGrid":"20,20,20,20"}},{"type":"Box","props":{"y":19,"x":13},"child":[{"type":"Image","props":{"width":372,"skin":"common/diwen.png","height":66,"sizeGrid":"18,20,18,19"}},{"type":"Label","props":{"x":113,"width":146,"valign":"middle","text":"赠送房卡","height":65,"fontSize":34,"font":"SimHei","color":"#c7edfb","align":"center"}}]},{"type":"Box","props":{"y":140,"x":36},"child":[{"type":"Image","props":{"y":0,"x":0,"width":328,"skin":"common/madengBg.png","height":73,"sizeGrid":"20,17,21,17"}},{"type":"TextInput","props":{"y":11,"x":23,"width":281,"var":"uidTf","type":"number","height":51,"fontSize":50,"font":"Helvetica","color":"#ffc757","align":"center"}}]},{"type":"Label","props":{"y":101,"x":21,"width":146,"valign":"middle","text":"输入玩家uid：","fontSize":25,"font":"SimHei","color":"#c7edfb","align":"center"}},{"type":"Label","props":{"y":248,"x":21,"width":146,"valign":"middle","text":"输入房卡数量：","fontSize":25,"font":"SimHei","color":"#c7edfb","align":"center"}},{"type":"Box","props":{"y":284,"x":36},"child":[{"type":"Image","props":{"y":0,"x":0,"width":328,"skin":"common/madengBg.png","height":73,"sizeGrid":"20,17,21,17"}},{"type":"TextInput","props":{"y":11,"x":23,"width":281,"var":"cardNumTf","type":"number","height":51,"fontSize":50,"font":"Helvetica","color":"#ffc757","align":"center"}}]},{"type":"Box","props":{"y":451,"x":66},"child":[{"type":"Button","props":{"x":138,"width":130,"var":"giveBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":25,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"赠送","height":70,"sizeGrid":"0,29,0,27"}},{"type":"Button","props":{"width":130,"var":"cancelBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":25,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"取消","height":70,"sizeGrid":"0,29,0,28"}}]},{"type":"Label","props":{"y":376,"x":214,"width":146,"var":"leftCardNumTf","valign":"middle","text":"50000","fontSize":34,"font":"SimHei","color":"#ffc757","align":"left"}},{"type":"Label","props":{"y":380,"x":21,"width":146,"valign":"middle","text":"可赠送房卡数量：","fontSize":25,"font":"SimHei","color":"#c7edfb","align":"center"}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}