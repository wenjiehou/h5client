/**Created by the LayaAirIDE,do not modify.*/
package ui.common {
	import laya.ui.*;
	import laya.display.*; 

	public class ConnectingViewUI extends View {
		public var loadingImg:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":45,"x":45,"width":90,"var":"loadingImg","skin":"common/loading.png","pivotY":45,"pivotX":45,"height":90}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}