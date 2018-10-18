/**Created by the LayaAirIDE,do not modify.*/
package ui.hall.replay {
	import laya.ui.*;
	import laya.display.*; 
	import ui.hall.HallBgUI;

	public class OnPlayViewUI extends View {
		public var onplayList:List;
		public var onplayBtn:Button;
		public var headIMG:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"y":0,"width":640,"height":1038},"child":[{"type":"Box","props":{"y":0,"x":0,"width":642,"rotation":0,"height":1038},"child":[{"type":"HallBg","props":{"runtime":"ui.hall.HallBgUI"}},{"type":"Image","props":{"y":0,"x":5,"width":630,"skin":"common/diwenju.png","mouseThrough":true,"mouseEnabled":true,"height":1032,"sizeGrid":"28,16,30,20"}}]},{"type":"Image","props":{"y":98,"x":20,"width":600,"skin":"common/diwen.png","height":791,"sizeGrid":"18,20,18,19"}},{"type":"Label","props":{"y":107,"x":40,"width":299,"valign":"middle","text":"注：战绩仅保留最近3天的数据","height":35,"fontSize":22,"font":"SimHei","color":"#c7edfb","align":"left"}},{"type":"List","props":{"y":150,"x":32.5,"width":575,"var":"onplayList","spaceY":1,"height":707},"child":[{"type":"Button","props":{"y":0,"width":575,"visible":true,"var":"onplayBtn","renderType":"render","height":100},"child":[{"type":"Image","props":{"y":0,"x":0,"width":575,"visible":true,"skin":"common/diwen.png","height":100,"sizeGrid":"18,20,18,19"}},{"type":"Label","props":{"y":61,"x":114.99999999999997,"wordWrap":true,"width":137,"visible":true,"valign":"middle","text":"05-10 15:29","name":"onplayTime","fontSize":22,"font":"SimHei","color":"#c7edfb","align":"center"}},{"type":"Label","props":{"y":19,"x":107.99999999999997,"width":150,"visible":true,"text":"哇哈哈-哇哈哈","overflow":"scroll","name":"onplayName","height":30,"fontSize":22,"font":"SimHei","color":"#c7edfb","align":"center"}},{"type":"Label","props":{"y":61,"x":260,"width":151,"visible":true,"valign":"middle","text":"15分钟局","overflow":"scroll","name":"onplay","height":22,"fontSize":22,"font":"SimHei","color":"#c7edfb","align":"center"}},{"type":"Image","props":{"y":35,"x":538,"visible":true,"skin":"hall/goto.png"}},{"type":"Label","props":{"y":19,"x":260,"width":151,"visible":true,"valign":"middle","text":"西周麻将","overflow":"scroll","name":"mjName","height":22,"fontSize":22,"font":"SimHei","color":"#c7edfb","align":"center"}},{"type":"Label","props":{"y":33,"x":406,"width":109,"visible":true,"valign":"middle","text":"-5000","name":"onplayScore","height":36,"fontSize":36,"font":"SimHei","color":"#f73d3d","bold":true,"align":"center"}},{"type":"Box","props":{"y":14,"x":20,"width":74,"visible":true,"height":74,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":74,"visible":true,"var":"headIMG","skin":"common/morentouxiang.png","height":74,"anchorY":0}},{"type":"Box","props":{"y":0,"x":0,"width":74,"visible":true,"renderType":"mask","height":74},"child":[{"type":"Image","props":{"width":74,"visible":true,"skin":"common/touxMask.png","height":74,"sizeGrid":"13,13,12,14"}}]}]},{"type":"Image","props":{"y":10,"x":16,"width":82,"visible":true,"skin":"common/touxBg.png","height":82,"sizeGrid":"15,15,19,18"}}]}]},{"type":"Image","props":{"y":0,"x":5,"width":630,"skin":"common/biaoti.png","height":86,"sizeGrid":"0,41,0,43"}},{"type":"Image","props":{"y":19,"x":228.5,"skin":"hall/zhanjitj.png"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.hall.HallBgUI",HallBgUI);
			super.createChildren();
			createView(uiView);

		}

	}
}