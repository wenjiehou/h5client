/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.Items.HandleEffItemUI;

	public class HandleEffUI extends View {
		public var item3:HandleEffItemUI;
		public var item0:HandleEffItemUI;
		public var item1:HandleEffItemUI;
		public var item2:HandleEffItemUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"HandleEffItem","props":{"y":172,"x":105,"var":"item3","runtime":"ui.mainGame.Items.HandleEffItemUI"}},{"type":"HandleEffItem","props":{"y":324,"x":369,"var":"item0","runtime":"ui.mainGame.Items.HandleEffItemUI"}},{"type":"HandleEffItem","props":{"y":172,"x":634,"var":"item1","runtime":"ui.mainGame.Items.HandleEffItemUI"}},{"type":"HandleEffItem","props":{"y":11,"x":369,"var":"item2","runtime":"ui.mainGame.Items.HandleEffItemUI"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.Items.HandleEffItemUI",HandleEffItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}