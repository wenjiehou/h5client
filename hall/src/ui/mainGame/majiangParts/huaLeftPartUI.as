/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.Items.HuaLeftItemUI;

	public class huaLeftPartUI extends View {
		public var huaBg:Image;
		public var hua0:HuaLeftItemUI;
		public var hua1:HuaLeftItemUI;
		public var hua2:HuaLeftItemUI;
		public var hua3:HuaLeftItemUI;
		public var hua4:HuaLeftItemUI;
		public var hua5:HuaLeftItemUI;
		public var hua6:HuaLeftItemUI;
		public var hua7:HuaLeftItemUI;
		public var hua8:HuaLeftItemUI;
		public var hua9:HuaLeftItemUI;
		public var hua10:HuaLeftItemUI;
		public var hua11:HuaLeftItemUI;
		public var hua12:HuaLeftItemUI;
		public var hua13:HuaLeftItemUI;
		public var hua14:HuaLeftItemUI;
		public var huaAnim:HuaLeftItemUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"Image","props":{"y":124,"x":242,"width":355,"var":"huaBg","skin":"gametable/buhua.png","rotation":90,"height":177}},{"type":"HuaLeftItem","props":{"y":0,"x":0,"var":"hua0","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":40,"x":0,"var":"hua1","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":80,"x":0,"var":"hua2","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":120,"x":0,"var":"hua3","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":160,"x":0,"var":"hua4","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":200,"x":0,"var":"hua5","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":240,"x":0,"var":"hua6","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":280,"x":0,"var":"hua7","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":320,"x":0,"var":"hua8","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":360,"x":0,"var":"hua9","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":400,"x":0,"var":"hua10","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":440,"x":0,"var":"hua11","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":480,"x":0,"var":"hua12","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":520,"x":0,"var":"hua13","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":560,"x":0,"var":"hua14","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":245,"x":101,"var":"huaAnim","scaleY":1.5,"scaleX":1.5,"runtime":"ui.mainGame.Items.HuaLeftItemUI"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.Items.HuaLeftItemUI",HuaLeftItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}