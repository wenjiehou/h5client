/**Created by the LayaAirIDE,do not modify.*/
package ui.gameCommon.shortCutChat {
	import laya.ui.*;
	import laya.display.*; 

	public class VChatPageUI extends View {
		public var touchhide:Box;
		public var chatList:List;
		public var face1:Image;
		public var face2:Image;
		public var face3:Image;
		public var face4:Image;
		public var face5:Image;
		public var face6:Image;
		public var face7:Image;
		public var face8:Image;
		public var face9:Image;
		public var face10:Image;
		public var face11:Image;
		public var face12:Image;
		public var face13:Image;
		public var face14:Image;
		public var face15:Image;
		public var face16:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":640,"height":1038},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"touchhide","mouseThrough":true,"alpha":0},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":640,"lineWidth":0,"height":1038,"fillColor":"#ff0000"}}]},{"type":"Box","props":{"y":81.5,"x":80},"child":[{"type":"Image","props":{"width":480,"skin":"common/gameBg.png","sizeGrid":"34,32,34,34","height":863}},{"type":"List","props":{"y":465,"x":15,"width":453,"var":"chatList","height":383}},{"type":"Image","props":{"y":451,"x":40,"width":400,"skin":"common/fenge.png"}},{"type":"Box","props":{"y":16,"x":46,"width":388,"height":428},"child":[{"type":"Image","props":{"x":1,"var":"face1","skin":"faceexpress/face01.png"}},{"type":"Image","props":{"x":98,"var":"face2","skin":"faceexpress/face02.png"}},{"type":"Image","props":{"x":195,"var":"face3","skin":"faceexpress/face03.png"}},{"type":"Image","props":{"x":292,"var":"face4","skin":"faceexpress/face04.png"}},{"type":"Image","props":{"y":111,"x":1,"var":"face5","skin":"faceexpress/face05.png"}},{"type":"Image","props":{"y":111,"x":98,"var":"face6","skin":"faceexpress/face06.png"}},{"type":"Image","props":{"y":111,"x":195,"var":"face7","skin":"faceexpress/face07.png"}},{"type":"Image","props":{"y":111,"x":292,"var":"face8","skin":"faceexpress/face08.png"}},{"type":"Image","props":{"y":221,"x":1,"var":"face9","skin":"faceexpress/face09.png"}},{"type":"Image","props":{"y":221,"x":98,"var":"face10","skin":"faceexpress/face10.png"}},{"type":"Image","props":{"y":221,"x":195,"var":"face11","skin":"faceexpress/face11.png"}},{"type":"Image","props":{"y":221,"x":292,"var":"face12","skin":"faceexpress/face12.png"}},{"type":"Image","props":{"y":332,"var":"face13","skin":"faceexpress/face13.png"}},{"type":"Image","props":{"y":332,"x":97,"var":"face14","skin":"faceexpress/face14.png"}},{"type":"Image","props":{"y":332,"x":194,"var":"face15","skin":"faceexpress/face15.png"}},{"type":"Image","props":{"y":332,"x":291,"var":"face16","skin":"faceexpress/face16.png"}}]}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}