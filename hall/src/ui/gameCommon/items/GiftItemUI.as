/**Created by the LayaAirIDE,do not modify.*/
package ui.gameCommon.items {
	import laya.ui.*;
	import laya.display.*; 

	public class GiftItemUI extends View {
		public var img:Image;
		public var costTf:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":80,"height":110},"child":[{"type":"Image","props":{"y":0,"x":2,"var":"img","skin":"ani/item1.png"}},{"type":"Label","props":{"y":78,"x":9,"width":85,"visible":false,"var":"costTf","text":"25","overflow":"hidden","height":24,"fontSize":20,"color":"#ff3d01","alpha":0.88,"align":"center"}},{"type":"Image","props":{"y":79,"x":13,"width":23,"visible":false,"skin":"gameCommon/icon_diamond.png","height":21}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}