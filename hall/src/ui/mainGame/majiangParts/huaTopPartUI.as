/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.Items.HuaTopItemUI;

	public class huaTopPartUI extends View {
		public var huaBg:Image;
		public var hua14:HuaTopItemUI;
		public var hua13:HuaTopItemUI;
		public var hua12:HuaTopItemUI;
		public var hua11:HuaTopItemUI;
		public var hua10:HuaTopItemUI;
		public var hua9:HuaTopItemUI;
		public var hua8:HuaTopItemUI;
		public var hua7:HuaTopItemUI;
		public var hua6:HuaTopItemUI;
		public var hua5:HuaTopItemUI;
		public var hua4:HuaTopItemUI;
		public var hua3:HuaTopItemUI;
		public var hua2:HuaTopItemUI;
		public var hua1:HuaTopItemUI;
		public var hua0:HuaTopItemUI;
		public var huaAnim:HuaTopItemUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1400},"child":[{"type":"Image","props":{"y":470,"x":999,"width":661,"var":"huaBg","skin":"gametable/buhua.png","rotation":180,"height":330}},{"type":"HuaTopItem","props":{"y":0,"x":0,"var":"hua14","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":89,"var":"hua13","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":268,"var":"hua12","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":179,"var":"hua11","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":357,"var":"hua10","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":447,"var":"hua9","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":536,"var":"hua8","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":626,"var":"hua7","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":715,"var":"hua6","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":804,"var":"hua5","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":894,"var":"hua4","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":983,"var":"hua3","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":1072,"var":"hua2","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":1162,"var":"hua1","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":1251,"var":"hua0","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":191,"x":626,"var":"huaAnim","scaleY":1.5,"scaleX":1.5,"runtime":"ui.mainGame.Items.HuaTopItemUI"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.Items.HuaTopItemUI",HuaTopItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}