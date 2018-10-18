/**Created by the LayaAirIDE,do not modify.*/
package ui.hall {
	import laya.ui.*;
	import laya.display.*; 
	import ui.hall.HallBgUI;

	public class DailiViewUI extends View {
		public var playerList:List;
		public var giveBtn:Button;
		public var addBtn:Button;
		public var giveLogBtn:Button;
		public var levelImg:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":640,"height":1038},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"HallBg","props":{"runtime":"ui.hall.HallBgUI"}},{"type":"Image","props":{"y":0,"x":5,"width":630,"skin":"common/diwenju.png","mouseThrough":true,"mouseEnabled":true,"height":1032,"sizeGrid":"28,16,30,20"}}]},{"type":"Image","props":{"y":98,"x":20,"width":600,"skin":"common/diwen.png","height":791,"sizeGrid":"18,20,18,19"}},{"type":"Image","props":{"y":0,"x":5,"width":630,"skin":"common/biaoti.png","height":86,"sizeGrid":"0,41,0,43"}},{"type":"Image","props":{"y":21,"x":275,"skin":"hall/agent.png"}},{"type":"List","props":{"y":115,"x":32,"width":575,"var":"playerList","height":671}},{"type":"Box","props":{"y":806,"x":116},"child":[{"type":"Button","props":{"y":0,"x":138,"width":130,"var":"giveBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":25,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"赠送房卡","height":70,"sizeGrid":"0,29,0,27"}},{"type":"Button","props":{"y":0,"x":0,"width":130,"var":"addBtn","stateNum":1,"skin":"common/buttonLan.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":25,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"添加","height":70,"sizeGrid":"0,30,0,30"}},{"type":"Button","props":{"y":0,"x":276,"width":130,"var":"giveLogBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":25,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"赠送记录","height":70,"sizeGrid":"0,29,0,28"}}]},{"type":"Image","props":{"y":28,"x":494,"var":"levelImg","skin":"hall/level2.png"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.hall.HallBgUI",HallBgUI);
			super.createChildren();
			createView(uiView);

		}

	}
}