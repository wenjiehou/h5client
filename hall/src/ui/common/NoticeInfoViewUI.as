/**Created by the LayaAirIDE,do not modify.*/
package ui.common {
	import laya.ui.*;
	import laya.display.*; 
	import laya.html.dom.HTMLDivElement;

	public class NoticeInfoViewUI extends View {
		public var bg:Image;
		public var confirmBtn:Button;
		public var infoTf:HTMLDivElement;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"width":590,"var":"bg","skin":"common/gameBg.png","sizeGrid":"34,32,34,34","mouseThrough":true,"height":411}},{"type":"Button","props":{"y":325,"x":218,"width":154,"var":"confirmBtn","stateNum":1,"skin":"common/buttonLv.png","labelSize":30,"labelPadding":"0,0,5,0","labelFont":"Helvetica","labelColors":"#ffffff,#ffffff,#ffffff","label":"确定","height":68,"sizeGrid":"0,29,0,27"}},{"type":"Label","props":{"y":11,"x":222,"width":146,"valign":"middle","text":"提示","height":65,"fontSize":34,"font":"SimHei","color":"#c7edfb","align":"center"}},{"type":"Image","props":{"y":100,"x":19,"width":552,"skin":"common/commonTitBg.png","height":205,"sizeGrid":"10,10,8,14"}},{"type":"HTMLDivElement","props":{"y":101,"x":27,"width":539,"var":"infoTf","innerHTML":"htmlText","height":183}}]};
		override protected function createChildren():void {
			View.regComponent("HTMLDivElement",HTMLDivElement);
			super.createChildren();
			createView(uiView);

		}

	}
}