/**Created by the LayaAirIDE,do not modify.*/
package ui.hall.item {
	import laya.ui.*;
	import laya.display.*; 

	public class BannerItemUI extends View {
		public var img:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":622,"height":186},"child":[{"type":"Image","props":{"y":0,"x":0,"width":622,"var":"img","skin":"hall/active/banner1.png","height":186}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}