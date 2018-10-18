/**Created by the LayaAirIDE,do not modify.*/
package ui.load {
	import laya.ui.*;
	import laya.display.*; 

	public class ChScreenGuideViewUI extends View {
		public var barBox:Box;
		public var bg:Box;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":640,"height":1038},"child":[{"type":"Box","props":{"y":519,"x":320,"width":640,"var":"barBox","rotation":0,"mouseThrough":true,"mouseEnabled":true,"height":1038,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"bg","mouseThrough":false,"mouseEnabled":true,"alpha":0.4},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":640,"lineWidth":0,"lineColor":"#000000","height":1038,"fillColor":"#000000"}}]},{"type":"Label","props":{"y":318,"x":66,"width":508,"valign":"middle","text":"防沉迷公告","strokeColor":"#d9d5d5","stroke":1,"height":63,"fontSize":50,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":371,"x":83,"wordWrap":true,"width":508,"valign":"middle","text":"抵制不良游戏，拒绝盗版游戏。 注意自我保护，谨防受骗上当。 适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。","strokeColor":"#d9d5d5","stroke":1,"leading":24,"height":345,"fontSize":35,"font":"SimHei","color":"#ffffff","align":"left"}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}