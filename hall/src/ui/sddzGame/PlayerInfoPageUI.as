/**Created by the LayaAirIDE,do not modify.*/
package ui.sddzGame {
	import laya.ui.*;
	import laya.display.*; 
	import ui.gameCommon.items.PlayerInfoLeftItemUI;
	import ui.gameCommon.items.PlayerInfoBaseItemUI;
	import ui.gameCommon.PiaoSelePartUI;

	public class PlayerInfoPageUI extends View {
		public var playerInfo2:PlayerInfoLeftItemUI;
		public var playerInfo0:PlayerInfoLeftItemUI;
		public var playerInfo1:PlayerInfoBaseItemUI;
		public var piaoPart:PiaoSelePartUI;
		public var startBtn:Button;
		public var laba:Box;
		public var labaTip:Animation;
		public var inviteBtn:Button;
		public var leaveBtn:Button;
		public var disbandBtn:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":640,"height":1038},"child":[{"type":"PlayerInfoLeftItem","props":{"y":225,"x":30,"visible":true,"var":"playerInfo2","runtime":"ui.gameCommon.items.PlayerInfoLeftItemUI"}},{"type":"PlayerInfoLeftItem","props":{"y":927,"x":30,"visible":true,"var":"playerInfo0","runtime":"ui.gameCommon.items.PlayerInfoLeftItemUI"}},{"type":"PlayerInfoBaseItem","props":{"y":225,"x":530,"var":"playerInfo1","runtime":"ui.gameCommon.items.PlayerInfoBaseItemUI"}},{"type":"PiaoSelePart","props":{"y":643,"x":30.5,"var":"piaoPart","runtime":"ui.gameCommon.PiaoSelePartUI"}},{"type":"Button","props":{"y":838,"x":228,"width":180,"var":"startBtn","stateNum":1,"skin":"common/buttonHuang.png","sizeGrid":"0,36,0,36","labelStrokeColor":"#000000","labelStroke":2,"labelSize":34,"labelFont":"SimHei","labelColors":"#ffffff,#ffffff,#ffffff","labelBold":true,"labelAlign":"center"},"child":[{"type":"Image","props":{"y":14,"x":43,"skin":"gameCommon/gameStart.png"}}]},{"type":"Box","props":{"y":2,"x":556,"visible":false,"var":"laba","scaleY":0.8,"scaleX":0.8},"child":[{"type":"Image","props":{"skin":"gameCommon/voice/voiceBg.png"}},{"type":"Animation","props":{"y":31,"x":29,"var":"labaTip","source":"gameCommon/VoiceTip.ani"}}]},{"type":"Button","props":{"y":75,"x":519,"width":117,"var":"inviteBtn","stateNum":1,"skin":"gameCommon/img_jinbi-di.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":22,"labelPadding":"0,0,2,0","labelFont":"SimHei","labelColors":"#00edc2,#00edc2,#00edc2,#00edc2","labelBold":true,"label":"邀请好友","height":50}},{"type":"Button","props":{"y":70,"x":6,"width":117,"var":"leaveBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":24,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"离开房间","height":60,"sizeGrid":"0,29,0,27"}},{"type":"Button","props":{"y":70,"x":6,"width":117,"var":"disbandBtn","stateNum":1,"skin":"common/buttonHong.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":24,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"解散房间","height":60,"sizeGrid":"0,30,0,28"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.gameCommon.items.PlayerInfoLeftItemUI",PlayerInfoLeftItemUI);
			View.regComponent("ui.gameCommon.items.PlayerInfoBaseItemUI",PlayerInfoBaseItemUI);
			View.regComponent("ui.gameCommon.PiaoSelePartUI",PiaoSelePartUI);
			super.createChildren();
			createView(uiView);

		}

	}
}