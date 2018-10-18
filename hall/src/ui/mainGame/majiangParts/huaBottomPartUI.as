/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.Items.HuaBotttomItemUI;

	public class huaBottomPartUI extends View {
		public var huaBg:Image;
		public var hua0:HuaBotttomItemUI;
		public var hua1:HuaBotttomItemUI;
		public var hua2:HuaBotttomItemUI;
		public var hua3:HuaBotttomItemUI;
		public var hua4:HuaBotttomItemUI;
		public var hua5:HuaBotttomItemUI;
		public var hua6:HuaBotttomItemUI;
		public var hua7:HuaBotttomItemUI;
		public var hua8:HuaBotttomItemUI;
		public var hua9:HuaBotttomItemUI;
		public var hua10:HuaBotttomItemUI;
		public var hua11:HuaBotttomItemUI;
		public var hua12:HuaBotttomItemUI;
		public var hua13:HuaBotttomItemUI;
		public var hua14:HuaBotttomItemUI;
		public var huaAnim:HuaBotttomItemUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1353,"height":142},"child":[{"type":"Image","props":{"y":-339,"x":335,"width":680,"var":"huaBg","skin":"gametable/buhua.png","height":339}},{"type":"HuaBotttomItem","props":{"y":0,"x":0,"var":"hua0","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":90,"var":"hua1","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":180,"var":"hua2","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":270,"var":"hua3","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":361,"var":"hua4","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":451,"var":"hua5","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":540,"var":"hua6","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":630,"var":"hua7","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":720,"var":"hua8","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":811,"var":"hua9","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":901,"var":"hua10","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":991,"var":"hua11","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":1171,"var":"hua12","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":1081,"var":"hua13","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":1261,"var":"hua14","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":-270,"x":580,"var":"huaAnim","scaleY":1.5,"scaleX":1.5,"runtime":"ui.mainGame.Items.HuaBotttomItemUI"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.Items.HuaBotttomItemUI",HuaBotttomItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}