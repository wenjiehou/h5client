/**Created by the LayaAirIDE,do not modify.*/
package ui.common {
	import laya.ui.*;
	import laya.display.*; 

	public class SettingViewUI extends View {
		public var bg:Image;
		public var soundBtn:Button;
		public var musicBtn:Button;
		public var shareBtn:Button;
		public var dissolveBtn:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1038,"height":1038,"color":"#dbf3f4"},"child":[{"type":"Box","props":{"y":308,"x":234},"child":[{"type":"Image","props":{"y":0,"x":0,"width":570,"var":"bg","skin":"common/gameBg.png","sizeGrid":"34,32,34,34","height":240}},{"type":"Image","props":{"y":68,"x":15,"width":540,"skin":"common/commonTitBg.png","height":145,"sizeGrid":"10,10,8,14"}},{"type":"Label","props":{"y":131,"x":45,"wordWrap":false,"visible":true,"valign":"middle","text":"音效","overflow":"hidden","mouseEnabled":false,"fontSize":36,"font":"SimHei","color":"#c7edfb","align":"center"}},{"type":"Button","props":{"y":126,"x":122,"var":"soundBtn","stateNum":2,"skin":"common/kaiguan.png","selected":true}},{"type":"Label","props":{"y":132,"x":312,"wordWrap":false,"visible":true,"valign":"middle","text":"音乐","overflow":"hidden","mouseEnabled":false,"fontSize":36,"font":"SimHei","color":"#c7edfb","align":"center"}},{"type":"Button","props":{"y":126,"x":390,"var":"musicBtn","stateNum":2,"skin":"common/kaiguan.png","selected":false}},{"type":"Label","props":{"y":19,"x":191,"width":187,"valign":"middle","text":"玩家设置","height":38,"fontSize":30,"font":"SimHei","color":"#c7edfb","bold":true,"align":"center"}},{"type":"Button","props":{"y":278.5,"x":168,"width":333,"visible":false,"var":"shareBtn","stateNum":1,"skin":"common/btn_yellow.png","sizeGrid":"0,24,0,25","scaleY":0.7,"scaleX":0.7,"labelStrokeColor":"#861c08","labelStroke":4,"labelSize":40,"labelFont":"SimHei","labelColors":"#dddddd,#dddddd,#dddddd,#dddddd","height":105},"child":[{"type":"Image","props":{"y":12,"x":90,"width":147,"skin":"common/ComonBtnShare.png","height":84}}]},{"type":"Button","props":{"y":268,"x":168,"width":333,"var":"dissolveBtn","stateNum":1,"skin":"common/buttonHong.png","scaleY":0.7,"scaleX":0.7,"labelStrokeColor":"#861c08","labelStroke":4,"labelSize":40,"labelFont":"SimHei","labelColors":"#dddddd,#dddddd,#dddddd,#dddddd","height":120,"sizeGrid":"0,30,0,28"},"child":[{"type":"Image","props":{"y":4,"x":85,"width":168,"skin":"common/ComonBtnClose.png","height":94}}]}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}