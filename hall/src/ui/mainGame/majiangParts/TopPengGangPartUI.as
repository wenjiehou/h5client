/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.Items.TopPengGangItemUI;

	public class TopPengGangPartUI extends View {
		public var peng3:TopPengGangItemUI;
		public var peng2:TopPengGangItemUI;
		public var peng1:TopPengGangItemUI;
		public var peng0:TopPengGangItemUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"TopPengGangItem","props":{"y":-5,"x":0,"var":"peng3","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.TopPengGangItemUI"}},{"type":"TopPengGangItem","props":{"y":-5,"x":245,"var":"peng2","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.TopPengGangItemUI"}},{"type":"TopPengGangItem","props":{"y":-5,"x":489,"var":"peng1","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.TopPengGangItemUI"}},{"type":"TopPengGangItem","props":{"y":-5,"x":734,"var":"peng0","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.TopPengGangItemUI"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.Items.TopPengGangItemUI",TopPengGangItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}