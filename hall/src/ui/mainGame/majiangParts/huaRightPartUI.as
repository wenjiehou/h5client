/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.Items.HuaRightItemUI;

	public class huaRightPartUI extends View {
		public var huaBg:Image;
		public var hua14:HuaRightItemUI;
		public var hua13:HuaRightItemUI;
		public var hua12:HuaRightItemUI;
		public var hua11:HuaRightItemUI;
		public var hua10:HuaRightItemUI;
		public var hua9:HuaRightItemUI;
		public var hua8:HuaRightItemUI;
		public var hua7:HuaRightItemUI;
		public var hua6:HuaRightItemUI;
		public var hua5:HuaRightItemUI;
		public var hua4:HuaRightItemUI;
		public var hua3:HuaRightItemUI;
		public var hua2:HuaRightItemUI;
		public var hua1:HuaRightItemUI;
		public var hua0:HuaRightItemUI;
		public var huaAnim:HuaRightItemUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"Image","props":{"y":483,"x":-179,"width":358,"var":"huaBg","skin":"gametable/buhua.png","rotation":-90,"height":178}},{"type":"HuaRightItem","props":{"y":0,"x":0,"var":"hua14","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":40,"x":0,"var":"hua13","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":80,"x":0,"var":"hua12","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":120,"x":0,"var":"hua11","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":160,"x":0,"var":"hua10","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":200,"x":0,"var":"hua9","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":240,"x":0,"var":"hua8","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":280,"x":0,"var":"hua7","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":320,"x":0,"var":"hua6","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":360,"x":0,"var":"hua5","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":400,"x":0,"var":"hua4","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":440,"x":0,"var":"hua3","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":480,"x":0,"var":"hua2","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":520,"x":0,"var":"hua1","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":560,"x":0,"var":"hua0","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":275,"x":-136,"var":"huaAnim","scaleY":1.5,"scaleX":1.5,"runtime":"ui.mainGame.Items.HuaRightItemUI"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.Items.HuaRightItemUI",HuaRightItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}