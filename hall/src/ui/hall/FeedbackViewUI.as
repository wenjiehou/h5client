/**Created by the LayaAirIDE,do not modify.*/
package ui.hall {
	import laya.ui.*;
	import laya.display.*; 
	import ui.hall.HallBgUI;

	public class FeedbackViewUI extends View {

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"x":0,"width":640,"height":1038},"child":[{"type":"Box","props":{"y":0,"x":0,"width":642,"rotation":0,"height":1038},"child":[{"type":"HallBg","props":{"runtime":"ui.hall.HallBgUI"}}]},{"type":"Image","props":{"y":256.00000000000006,"x":171.00000000000003,"skin":"hall/feedbackView/fankuierweima.png","alpha":0.4}},{"type":"Image","props":{"y":266.00000000000006,"x":182.00000000000006,"width":278,"visible":false,"skin":"common/qrcode.png","height":278}},{"type":"Image","props":{"y":199.99999999999994,"x":318.9999999999999,"width":318,"skin":"hall/feedbackView/saomiaoerweima.png","height":141,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":624.0000000000001,"x":318.9999999999999,"width":300,"visible":false,"valign":"middle","text":"QQ客服：","height":41,"fontSize":24,"font":"SimHei","color":"#ffffff","anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":668,"x":318.9999999999999,"width":300,"valign":"middle","text":"微信客服：xiao-duduya","height":41,"fontSize":24,"font":"SimHei","color":"#fdfdfd","anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":720,"x":318.9999999999999,"width":453,"visible":false,"valign":"middle","text":"全国统一客服热线：400-888-8888","height":41,"fontSize":24,"font":"SimHei","color":"#ffffff","anchorX":0.5,"align":"center"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.hall.HallBgUI",HallBgUI);
			super.createChildren();
			createView(uiView);

		}

	}
}