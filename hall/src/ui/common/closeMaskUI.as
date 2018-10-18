/**Created by the LayaAirIDE,do not modify.*/
package ui.common {
	import laya.ui.*;
	import laya.display.*; 

	public class closeMaskUI extends View {
		public var bg:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1038,"height":1038},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1038,"var":"bg","skin":"common/heixedi.png","height":1038,"alpha":0.5}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}