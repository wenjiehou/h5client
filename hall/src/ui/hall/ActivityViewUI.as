/**Created by the LayaAirIDE,do not modify.*/
package ui.hall {
	import laya.ui.*;
	import laya.display.*; 
	import ui.hall.HallBgUI;

	public class ActivityViewUI extends View {
		public var qiandao:Button;
		public var zhaoshBtn:Button;
		public var buchang:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":640,"height":1038},"child":[{"type":"Box","props":{"y":0,"x":0,"width":642,"rotation":0,"height":1038},"child":[{"type":"HallBg","props":{"runtime":"ui.hall.HallBgUI"}},{"type":"Image","props":{"y":0,"x":4.999999999999925,"width":630,"skin":"common/diwenju.png","mouseThrough":true,"mouseEnabled":true,"height":1032,"sizeGrid":"28,16,30,20"}},{"type":"Image","props":{"y":0,"x":5,"width":630,"skin":"common/biaoti.png","height":86,"sizeGrid":"0,41,0,43"}},{"type":"Image","props":{"y":98,"x":20,"width":600,"skin":"common/diwen.png","height":791,"sizeGrid":"18,20,18,19"}}]},{"type":"Box","props":{"y":122,"x":33.5,"visible":false,"height":90},"child":[{"type":"Image","props":{"y":0,"width":575,"skin":"common/diwen.png","height":90,"sizeGrid":"18,20,18,19"}},{"type":"Image","props":{"y":18,"x":28,"skin":"hall/img_qiandao.png"}},{"type":"Image","props":{"y":17,"x":104,"skin":"hall/qiandao.png"}},{"type":"Label","props":{"y":55,"x":104,"width":191,"text":"每日免费福利领不停","height":23,"fontSize":20,"font":"SimHei","color":"#6dc3a8"}},{"type":"Button","props":{"y":23.75,"x":438,"width":183,"var":"qiandao","stateNum":1,"skin":"common/buttonLv.png","scaleY":0.5,"scaleX":0.5,"labelStrokeColor":"#ffffff","labelSize":43,"labelPadding":"0,0,5,0","labelFont":"SimHei","labelColors":"#ffffff,#ffffff,#ffffff","label":"签到","sizeGrid":"0,29,0,27"}}]},{"type":"Box","props":{"y":219,"x":33.5,"visible":false},"child":[{"type":"Image","props":{"y":0,"x":0,"width":575,"skin":"common/diwen.png","height":90,"sizeGrid":"18,20,18,19"}},{"type":"Image","props":{"y":18,"x":29,"skin":"hall/zhaoshi.png"}},{"type":"Image","props":{"y":17,"x":104,"skin":"hall/zhaosht.png"}},{"type":"Label","props":{"y":55,"x":104,"width":255,"text":"推广员火热招募，商家合作","height":23,"fontSize":20,"font":"SimHei","color":"#6dc3a8"}},{"type":"Button","props":{"y":23.75,"x":438,"width":183,"var":"zhaoshBtn","stateNum":1,"skin":"common/buttonLv.png","scaleY":0.5,"scaleX":0.5,"labelStrokeColor":"#ffffff","labelSize":43,"labelPadding":"0,0,5,0","labelFont":"SimHei","labelColors":"#ffffff,#ffffff,#ffffff","label":"签到","sizeGrid":"0,29,0,27"}}]},{"type":"Box","props":{"y":316,"x":33.5,"visible":false},"child":[{"type":"Image","props":{"y":0,"width":575,"skin":"common/diwen.png","height":90,"sizeGrid":"18,20,18,19"}},{"type":"Image","props":{"y":18,"x":29,"skin":"hall/img_buchang.png"}},{"type":"Image","props":{"y":17,"x":104,"skin":"hall/buchang.png"}},{"type":"Label","props":{"y":55,"x":104,"width":191,"text":"钻石补偿","height":23,"fontSize":20,"font":"SimHei","color":"#6dc3a8"}},{"type":"Button","props":{"y":23.75,"x":438,"width":183,"var":"buchang","stateNum":1,"skin":"common/buttonLv.png","scaleY":0.5,"scaleX":0.5,"labelStrokeColor":"#ffffff","labelSize":43,"labelPadding":"0,0,5,0","labelFont":"SimHei","labelColors":"#ffffff,#ffffff,#ffffff","label":"签到","sizeGrid":"0,29,0,27"}}]},{"type":"Image","props":{"y":19,"x":227,"skin":"hall/jchuodong.png"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.hall.HallBgUI",HallBgUI);
			super.createChildren();
			createView(uiView);

		}

	}
}