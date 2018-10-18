/**Created by the LayaAirIDE,do not modify.*/
package ui.common {
	import laya.ui.*;
	import laya.display.*; 

	public class GameShareUI extends View {
		public var closeShare:Box;
		public var TipHand:Image;
		public var shareTit:Label;
		public var handIMG:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1038,"height":640},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"closeShare","mouseThrough":true,"alpha":0},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":1038,"lineWidth":0,"height":640,"fillColor":"#ff0000"}}]},{"type":"Image","props":{"y":552,"x":926,"width":98,"var":"TipHand","skin":"common/shouzhijiantou.png","height":78,"anchorX":0.5}},{"type":"Image","props":{"y":83,"x":298,"width":442,"skin":"common/gameBg.png","sizeGrid":"34,32,34,34","height":481}},{"type":"Image","props":{"y":115,"x":344,"width":350,"skin":"common/commonTitBg.png","height":421,"sizeGrid":"10,10,8,14"}},{"type":"Label","props":{"y":128,"x":434,"width":170,"valign":"middle","text":"分享好友","height":42,"fontSize":36,"font":"SimHei","color":"#dbf3f4","align":"center"}},{"type":"Box","props":{"y":185,"x":366,"width":329,"height":147},"child":[{"type":"Label","props":{"y":22.5,"width":71,"text":"第一步","height":27,"fontSize":22,"font":"SimHei","color":"#dbf3f4","bold":true}},{"type":"Label","props":{"y":78.5,"width":71,"text":"第二步","height":25,"fontSize":22,"font":"SimHei","color":"#dbf3f4","bold":true}},{"type":"Label","props":{"y":20,"x":75,"width":199,"valign":"middle","text":"点击指向的","height":27,"fontSize":20,"font":"SimHei","color":"#dbf3f4","align":"left"}},{"type":"Image","props":{"y":0,"x":184,"skin":"common/fenxiang1.png","rotation":0,"pivotY":0.5,"pivotX":0.5}},{"type":"Label","props":{"y":75,"x":75,"wordWrap":true,"width":43,"valign":"middle","text":"选择","height":31,"fontSize":20,"font":"SimHei","color":"#dbf3f4","align":"left"}},{"type":"Image","props":{"y":65.5,"x":120,"skin":"common/fenxiang2.png"}},{"type":"Label","props":{"y":119.5,"x":75,"wordWrap":true,"width":231,"valign":"middle","text":"的好友或群","height":27,"fontSize":20,"font":"SimHei","color":"#dbf3f4","align":"left"}},{"type":"Label","props":{"y":75,"x":183,"wordWrap":true,"width":122,"valign":"middle","text":"再选择要邀请","height":31,"fontSize":20,"font":"SimHei","color":"#dbf3f4","align":"left"}},{"type":"Label","props":{"y":20,"x":226,"width":199,"valign":"middle","text":"微信功能","height":27,"fontSize":20,"font":"SimHei","color":"#dbf3f4","align":"left"}}]},{"type":"Image","props":{"y":355,"x":360,"width":320,"skin":"common/wenzidi.png","sizeGrid":"13,14,11,14","height":102}},{"type":"Label","props":{"y":482,"x":366,"width":71,"text":"第三步","height":25,"fontSize":22,"font":"SimHei","color":"#dbf3f4","bold":true}},{"type":"Label","props":{"y":481,"x":441,"width":228,"valign":"middle","text":"等待好友入场开始游戏","height":27,"fontSize":20,"font":"SimHei","color":"#dbf3f4","align":"left"}},{"type":"Label","props":{"y":367,"x":441,"wordWrap":true,"width":228,"var":"shareTit","valign":"top","text":"哇哈哈-在一乐西周麻将创建了房间：1002-哇哈哈-一乐西周麻将私人局，邀您一起来互相伤害","overflow":"hidden","height":78,"fontSize":19,"font":"SimHei","color":"#dbf3f4","align":"left"}},{"type":"Image","props":{"y":373,"x":369,"width":64,"var":"handIMG","skin":"common/morentouxiang.png","height":65}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}