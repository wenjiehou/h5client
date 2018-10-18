/**Created by the LayaAirIDE,do not modify.*/
package ui.hall {
	import laya.ui.*;
	import laya.display.*; 

	public class HallHandInfoViewUI extends View {
		public var nameInfo:Label;
		public var IDInfo:Label;
		public var ReloginBtn:Button;
		public var handServiceBtn:Button;
		public var closeHandInfo:Button;
		public var versionTf:Label;
		public var handIMG:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":640,"height":1038},"child":[{"type":"Box","props":{"y":0,"x":0,"width":640,"height":1038},"child":[{"type":"Box","props":{"y":0,"x":0,"mouseThrough":true,"mouseEnabled":true,"alpha":0.5},"child":[{"type":"Rect","props":{"y":-2,"x":2,"width":640,"lineWidth":1,"lineColor":"#000000","height":1038,"fillColor":"#000000"}}]},{"type":"Box","props":{"y":35,"x":60,"width":534,"height":255},"child":[{"type":"Image","props":{"y":141,"x":264,"width":520,"skin":"common/popBg.png","height":267,"anchorY":0.5,"anchorX":0.5,"sizeGrid":"20,20,20,20"}},{"type":"Label","props":{"y":45,"x":155,"width":283,"var":"nameInfo","valign":"middle","text":"哇哈哈-胡文松","overflow":"scroll","height":34,"fontSize":24,"font":"SimHei","color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":81,"x":155,"width":40,"valign":"middle","text":"ID：","height":30,"fontSize":24,"font":"SimHei","color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":81,"x":195,"width":137,"var":"IDInfo","valign":"middle","text":"912054564","height":30,"fontSize":24,"font":"SimHei","color":"#ffffff","align":"left"}},{"type":"Button","props":{"y":172,"x":46,"width":180,"var":"ReloginBtn","stateNum":1,"skin":"common/buttonHong.png","labelSize":34,"labelPadding":"0,0,5,0","labelFont":"SimHei","labelColors":"#ffffff","label":"重新登录","sizeGrid":"0,30,0,28"}},{"type":"Button","props":{"y":172,"x":294,"width":180,"var":"handServiceBtn","stateNum":1,"skin":"common/buttonLv.png","labelSize":34,"labelPadding":"0,0,5,0","labelFont":"SimHei","labelColors":"#ffffff","label":"服务条款","sizeGrid":"0,29,0,27"}},{"type":"Button","props":{"y":23,"x":485,"var":"closeHandInfo","stateNum":1,"skin":"common/cha.png","scaleY":0.7,"scaleX":0.7}},{"type":"Label","props":{"y":117,"x":155,"width":256,"var":"versionTf","valign":"middle","text":"版本号 0.0.1","overflow":"hidden","height":30,"fontSize":24,"font":"SimHei","color":"#ffffff","align":"left"}},{"type":"Box","props":{"y":49,"x":44,"scaleY":1.2,"scaleX":1.2},"child":[{"type":"Box","props":{"y":4,"x":4,"width":74,"visible":true,"height":74,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":74,"visible":true,"var":"handIMG","skin":"common/morentouxiang.png","height":74,"anchorY":0}},{"type":"Box","props":{"y":0,"x":0,"width":74,"visible":true,"renderType":"mask","height":74},"child":[{"type":"Image","props":{"width":74,"visible":true,"skin":"common/touxMask.png","height":74,"sizeGrid":"13,13,12,14"}}]}]},{"type":"Image","props":{"width":82,"visible":true,"skin":"common/touxBg.png","height":82,"sizeGrid":"15,15,19,18"}}]}]}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}