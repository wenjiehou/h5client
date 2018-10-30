/**Created by the LayaAirIDE,do not modify.*/
package ui.hall.creatRoom {
	import laya.ui.*;
	import laya.display.*; 
	import ui.hall.HallBgUI;

	public class CCoinViewUI extends View {
		public var chujiBtn:Button;
		public var zhongjiBtn:Button;
		public var gaojiBtn:Button;
		public var backBtn:Button;
		public var ganmeTf:Label;
		public var creatBtn:Button;
		public var matchBtn:Button;
		public var roomList:List;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":640,"height":1038},"child":[{"type":"HallBg","props":{"runtime":"ui.hall.HallBgUI"}},{"type":"Button","props":{"y":116,"x":10,"width":116,"var":"chujiBtn","stateNum":2,"skin":"hall/chujiBtn.png","selected":true,"height":220,"sizeGrid":"14,12,11,13"},"child":[{"type":"TextArea","props":{"y":52,"x":37,"width":42,"text":"初级场","strokeColor":"#696666","stroke":3,"height":123,"fontSize":36,"font":"SimHei","color":"#ffffff","bold":true}}]},{"type":"Button","props":{"y":407,"x":10,"width":116,"var":"zhongjiBtn","stateNum":2,"skin":"hall/zhongjiBtn.png","height":220,"sizeGrid":"13,12,12,13"},"child":[{"type":"TextArea","props":{"y":52,"x":37,"width":42,"text":"中级场","strokeColor":"#696666","stroke":3,"height":123,"fontSize":36,"font":"SimHei","color":"#ffffff","bold":true}}]},{"type":"Button","props":{"y":697,"x":10,"width":116,"var":"gaojiBtn","stateNum":2,"skin":"hall/gaojiBtn.png","height":220,"sizeGrid":"13,12,11,13"},"child":[{"type":"TextArea","props":{"y":52,"x":37,"width":42,"text":"高级场","strokeColor":"#696666","stroke":3,"height":123,"fontSize":36,"font":"SimHei","color":"#ffffff","bold":true}}]},{"type":"Button","props":{"y":24,"x":29,"var":"backBtn","stateNum":1,"skin":"hall/backBtn.png"}},{"type":"Label","props":{"y":30,"x":270,"var":"ganmeTf","text":"三人斗地主","fontSize":40,"font":"SimHei","color":"#ffffff","bold":true}},{"type":"Box","props":{"y":18,"x":559},"child":[{"type":"Image","props":{"y":17,"width":46,"skin":"common/jinbi.png","height":46}},{"type":"Image","props":{"y":9,"x":17,"width":46,"skin":"common/jinbi.png","height":46}},{"type":"Image","props":{"x":7,"width":46,"skin":"common/jinbi.png","height":46}}]},{"type":"Image","props":{"y":116,"x":142,"width":480,"skin":"hall/listBg.png","height":700,"sizeGrid":"11,12,14,13"}},{"type":"Button","props":{"y":837,"x":142,"width":191,"var":"creatBtn","stateNum":1,"skin":"hall/joinBtn.png","labelSize":36,"labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","label":"创建房间","height":80,"sizeGrid":"0,17,0,20"}},{"type":"Button","props":{"y":837,"x":431,"width":191,"var":"matchBtn","stateNum":1,"skin":"hall/joinBtn.png","labelSize":36,"labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","label":"快速匹配","height":80,"sizeGrid":"0,17,0,20"}},{"type":"List","props":{"y":120,"x":148,"width":468,"var":"roomList","height":687}}]};
		override protected function createChildren():void {
			View.regComponent("ui.hall.HallBgUI",HallBgUI);
			super.createChildren();
			createView(uiView);

		}

	}
}