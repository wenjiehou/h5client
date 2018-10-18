/**Created by the LayaAirIDE,do not modify.*/
package ui.hall {
	import laya.ui.*;
	import laya.display.*; 
	import ui.hall.HallBgUI;

	public class RecordViewUI extends View {
		public var record_list:List;
		public var goTo:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"y":0,"x":-1,"width":642,"rotation":0,"height":1038},"child":[{"type":"Box","props":{"y":0,"x":0,"width":642,"rotation":0,"height":1038},"child":[{"type":"HallBg","props":{"runtime":"ui.hall.HallBgUI"}}]},{"type":"List","props":{"y":140,"x":0,"width":640,"var":"record_list","spaceY":-1,"height":787},"child":[{"type":"Button","props":{"y":0,"x":0,"width":591,"var":"goTo","renderType":"render","height":90},"child":[{"type":"Image","props":{"width":591,"skin":"hall/hallItemBg.png","sizeGrid":"8,8,8,8","height":90}},{"type":"Label","props":{"y":27.999999999999943,"x":10.99999999999985,"width":127,"valign":"middle","text":"西周麻将","name":"mjName","height":34,"fontSize":28,"font":"SimHei","color":"#729a9a"}},{"type":"Label","props":{"y":27.999999999999943,"x":149.99999999999997,"width":71,"valign":"middle","text":"局数：","height":34,"fontSize":28,"font":"SimHei","color":"#729a9a","align":"right"}},{"type":"Label","props":{"y":27.999999999999943,"x":228.9999999999999,"width":86,"valign":"middle","text":"8158局","name":"maNumber","height":34,"fontSize":28,"font":"SimHei","color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":27.999999999999943,"x":339.99999999999994,"width":86,"valign":"middle","text":"胜率：","height":34,"fontSize":28,"font":"SimHei","color":"#729a9a","align":"right"}},{"type":"Label","props":{"y":27.999999999999943,"x":419.00000000000006,"width":65,"valign":"middle","text":"881%","name":"rate","height":34,"fontSize":28,"font":"SimHei","color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":29,"x":548,"skin":"hall/goto.png"}}]}]},{"type":"Label","props":{"y":105,"x":11,"width":299,"valign":"middle","text":"注：战绩仅保留最近7天的数据","height":35,"fontSize":22,"font":"SimHei","color":"#729a9a","align":"left"}},{"type":"Label","props":{"y":30,"x":30,"width":580,"valign":"middle","text":"战绩统计","height":50,"fontSize":40,"font":"SimHei","color":"#ffffff","align":"center"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.hall.HallBgUI",HallBgUI);
			super.createChildren();
			createView(uiView);

		}

	}
}