/**Created by the LayaAirIDE,do not modify.*/
package ui.hall.replay {
	import laya.ui.*;
	import laya.display.*; 

	public class PlayerRecordItemUI extends View {
		public var nameTf:Label;
		public var scoreTf:Label;
		public var headImg:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":0,"x":53},"child":[{"type":"Label","props":{"y":0,"x":13,"width":100,"var":"nameTf","text":"哇哈哈哈哇哈哈哈","overflow":"hidden","height":23,"fontSize":23,"font":"SimHei","color":"#c7edfb","align":"center"}},{"type":"Label","props":{"y":30,"x":13,"width":100,"var":"scoreTf","valign":"middle","text":"+99","height":0,"fontSize":36,"font":"SimHei","color":"#f73d3d","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":1.7999999999999972,"x":0,"scaleY":1.3,"scaleX":1.3},"child":[{"type":"Box","props":{"y":4,"x":4,"width":40,"visible":true,"height":40,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":40,"visible":true,"var":"headImg","skin":"common/morentouxiang.png","height":40,"anchorY":0}},{"type":"Box","props":{"y":0,"x":0,"width":40,"visible":true,"renderType":"mask","height":40},"child":[{"type":"Image","props":{"width":40,"visible":true,"skin":"common/touxMask.png","height":40,"sizeGrid":"13,13,12,14"}}]}]},{"type":"Image","props":{"width":48,"visible":true,"skin":"common/touxBg.png","height":48,"sizeGrid":"15,15,19,18"}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}