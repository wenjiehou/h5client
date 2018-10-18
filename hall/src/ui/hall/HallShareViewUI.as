/**Created by the LayaAirIDE,do not modify.*/
package ui.hall {
	import laya.ui.*;
	import laya.display.*; 

	public class HallShareViewUI extends View {
		public var ShareMask:Box;
		public var TipHand:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":640,"height":1038},"child":[{"type":"Box","props":{"y":0,"x":0,"rotation":0},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"ShareMask","mouseThrough":true,"mouseEnabled":true,"alpha":0},"child":[{"type":"Rect","props":{"width":640,"lineWidth":1,"height":1038,"fillColor":"#333333"}}]},{"type":"Image","props":{"y":150,"x":554,"var":"TipHand","skin":"common/shouzhijiantou.png","scaleY":0.4,"scaleX":0.4,"rotation":-90}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}