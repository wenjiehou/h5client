/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.Items {
	import laya.ui.*;
	import laya.display.*; 

	public class ShowContrTipUI extends View {
		public var messageTf:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"width":521,"skin":"common/gameBg.png","sizeGrid":"23,26,26,23","height":110}},{"type":"Label","props":{"y":32,"x":80,"width":364,"var":"messageTf","text":"请选择要扣的牌","height":36,"fontSize":30,"font":"黑体","color":"#f8cdcd","bold":false,"align":"center"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}