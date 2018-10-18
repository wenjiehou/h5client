/**Created by the LayaAirIDE,do not modify.*/
package ui.hall {
	import laya.ui.*;
	import laya.display.*; 
	import ui.hall.HallBgUI;

	public class OnPlayRoomViewUI extends View {
		public var onplayBtn:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":640,"height":1038},"child":[{"type":"Box","props":{"y":1,"x":-1,"width":642,"rotation":0,"height":1038},"child":[{"type":"HallBg","props":{"runtime":"ui.hall.HallBgUI"}}]},{"type":"Image","props":{"y":19.99999999999994,"x":10.000000000000123,"width":623,"skin":"common/popBg.png","mouseThrough":true,"mouseEnabled":true,"height":904,"sizeGrid":"20,20,20,20"}},{"type":"Box","props":{"y":70,"x":29},"child":[{"type":"Label","props":{"y":1,"width":82,"valign":"middle","text":"总牌局：","height":35,"fontSize":22,"font":"SimHei","color":"#52ff1b","align":"left"}},{"type":"Label","props":{"x":78,"width":36,"valign":"middle","text":"15","height":35,"fontSize":22,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"x":116,"width":39,"valign":"middle","text":"局","height":35,"fontSize":22,"font":"SimHei","color":"#52ff1b","align":"left"}}]},{"type":"List","props":{"y":113,"x":25,"width":591,"height":670},"child":[{"type":"Button","props":{"y":0,"x":0,"width":591,"var":"onplayBtn","renderType":"render","height":110},"child":[{"type":"Image","props":{"y":0,"x":0,"width":591,"skin":"hall/hallItemBg.png","sizeGrid":"8,8,8,8","height":110}},{"type":"Label","props":{"y":5,"x":46,"width":117,"text":"象山麻将","height":29,"fontSize":28,"color":"#729a9a","bold":true}},{"type":"Label","props":{"y":5,"x":163,"width":106,"text":"第13局","height":29,"fontSize":28,"color":"#ffffff"}},{"type":"Box","props":{"y":41,"x":54,"width":76,"visible":true,"scaleY":0.8,"scaleX":0.8,"height":76,"anchorX":0},"child":[{"type":"Box","props":{"y":-3,"x":-3,"alpha":0.4},"child":[{"type":"Circle","props":{"y":40,"x":40,"visible":true,"radius":41,"lineWidth":1,"lineColor":"#ffffff","fillColor":"#ffffff"}}]},{"type":"Box","props":{"y":0,"x":0,"width":74,"visible":true,"height":74,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":74,"visible":true,"skin":"common/morentouxiang.png","name":"headIMG","height":74,"anchorY":0}},{"type":"Box","props":{"y":0,"x":0,"width":74,"renderType":"mask","height":74},"child":[{"type":"Circle","props":{"y":37,"x":37,"radius":37,"fillColor":"#ff0000"}}]}]}]},{"type":"Label","props":{"y":56,"x":122,"width":132,"text":"哇哈哈哈哇哈哈哈","overflow":"hidden","height":37,"fontSize":26,"color":"#ffffff"}},{"type":"Label","props":{"y":41,"x":445,"width":108,"valign":"middle","text":"33","name":"onplayScore","height":0,"fontSize":36,"font":"SimHei","color":"#f73d3d","bold":true,"align":"center"}},{"type":"Box","props":{"y":24,"x":298},"child":[{"type":"Image","props":{"skin":"hall/timeIcon.png"}},{"type":"Image","props":{"y":39,"skin":"hall/timeIcon.png"}},{"type":"Label","props":{"x":34,"width":110,"valign":"middle","text":"22:22:38","height":23,"fontSize":20,"color":"#729a9a"}},{"type":"Label","props":{"y":40,"x":34,"width":110,"valign":"middle","text":"22:22:38","height":23,"fontSize":20,"color":"#729a9a"}}]},{"type":"Image","props":{"y":43,"x":557,"skin":"hall/goto.png"}}]}]},{"type":"Button","props":{"y":805,"x":206,"width":243,"stateNum":1,"skin":"common/btnLv.png","labelSize":36,"labelFont":"SimHei","labelColors":"#ffffff","label":"查看总战绩","height":68,"sizeGrid":"0,36,0,36"}},{"type":"Label","props":{"y":37,"x":30,"width":580,"valign":"middle","text":"战绩统计","height":50,"fontSize":40,"font":"SimHei","color":"#ffffff","align":"center"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.hall.HallBgUI",HallBgUI);
			super.createChildren();
			createView(uiView);

		}

	}
}