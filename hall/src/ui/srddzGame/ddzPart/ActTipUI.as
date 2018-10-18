/**Created by the LayaAirIDE,do not modify.*/
package ui.srddzGame.ddzPart {
	import laya.ui.*;
	import laya.display.*; 

	public class ActTipUI extends View {
		public var bujiao:Image;
		public var buchu:Image;
		public var dang1:Image;
		public var dang2:Image;
		public var dang3:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":2.9000000000000057,"x":0,"var":"bujiao","skin":"poker/bujiao.png"}},{"type":"Image","props":{"y":0.6000000000000227,"x":1.0999999999999943,"var":"buchu","skin":"poker/buchu.png","scaleY":1.4,"scaleX":1.4}},{"type":"Image","props":{"y":0,"x":10.650000000000006,"var":"dang1","skin":"srddzGame/dang1.png","scaleY":0.9,"scaleX":0.9}},{"type":"Image","props":{"y":0,"x":9.75,"var":"dang2","skin":"srddzGame/dang2.png","scaleY":0.9,"scaleX":0.9}},{"type":"Image","props":{"y":0,"x":10.199999999999989,"var":"dang3","skin":"srddzGame/dang3.png","scaleY":0.9,"scaleX":0.9}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}