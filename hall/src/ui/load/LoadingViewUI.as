/**Created by the LayaAirIDE,do not modify.*/
package ui.load {
	import laya.ui.*;
	import laya.display.*; 

	public class LoadingViewUI extends View {
		public var startBg:Box;
		public var barBox:Box;
		public var bg:Box;
		public var bar1:Box;
		public var progress:Image;
		public var percentTf:Label;
		public var logo:Box;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":640,"height":1038},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"startBg","mouseThrough":false,"mouseEnabled":true,"alpha":1},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":640,"lineWidth":0,"lineColor":"#002640","height":1038,"fillColor":"#002640"}}]},{"type":"Box","props":{"y":519,"x":320,"width":640,"var":"barBox","rotation":0,"mouseThrough":true,"mouseEnabled":true,"height":1038,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"bg","mouseThrough":false,"mouseEnabled":true,"alpha":0.4},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":640,"lineWidth":0,"lineColor":"#000000","height":1038,"fillColor":"#000000"}}]},{"type":"Box","props":{"y":785,"x":320,"width":508,"var":"bar1","height":71,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":42,"x":1,"width":500,"skin":"load/jindutiaodi.png","sizeGrid":"0,13,0,16","height":22}},{"type":"Image","props":{"y":45,"x":0,"width":383,"var":"progress","skin":"load/jindutiao.png","sizeGrid":"0,14,0,14","height":19}},{"type":"Label","props":{"y":0,"x":2,"width":498,"var":"percentTf","valign":"middle","text":"0%","strokeColor":"#d9d5d5","stroke":1,"height":42,"fontSize":26,"font":"SimHei","color":"#ffffff","align":"center"}}]}]},{"type":"Box","props":{"y":317,"x":114,"var":"logo"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"load/loading.png","scaleY":3,"scaleX":3}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}