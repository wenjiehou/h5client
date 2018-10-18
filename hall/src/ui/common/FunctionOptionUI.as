/**Created by the LayaAirIDE,do not modify.*/
package ui.common {
	import laya.ui.*;
	import laya.display.*; 

	public class FunctionOptionUI extends View {
		public var clickBg:Image;
		public var posBox:Box;
		public var look:Button;
		public var shareFrend:Button;
		public var playRule:Button;
		public var backHall:Button;
		public var setting:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1038,"height":1038},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1038,"visible":true,"var":"clickBg","height":1038,"alpha":0.01}},{"type":"Box","props":{"y":262,"x":369,"var":"posBox"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":300,"skin":"common/gameBg.png","sizeGrid":"34,32,34,34","height":518}},{"type":"Image","props":{"y":24,"x":20.5,"width":259,"skin":"common/commonTitBg.png","height":469,"sizeGrid":"10,10,8,14"}},{"type":"Button","props":{"y":33,"width":290,"var":"look","height":62},"child":[{"type":"Image","props":{"y":16,"x":32,"skin":"gameCommon/Option/OptionLook.png"}},{"type":"Label","props":{"y":7,"x":102,"width":144,"valign":"middle","text":"站起围观","height":49,"fontSize":25,"font":"SimSun","color":"#c7edfb","bold":true,"align":"center"}}]},{"type":"Button","props":{"y":130,"x":6,"width":290,"var":"shareFrend","height":62},"child":[{"type":"Image","props":{"y":8,"x":32,"skin":"gameCommon/Option/OptionShare.png"}},{"type":"Label","props":{"y":7,"x":102,"width":144,"valign":"middle","text":"邀请好友","height":49,"fontSize":25,"font":"SimSun","color":"#c7edfb","bold":true,"align":"center"}}]},{"type":"Button","props":{"y":228,"x":6,"width":290,"var":"playRule","height":62},"child":[{"type":"Image","props":{"y":11,"x":32,"skin":"gameCommon/Option/OptionPlayRule.png"}},{"type":"Label","props":{"y":7,"x":102,"width":144,"valign":"middle","text":"玩法规则","height":49,"fontSize":25,"font":"SimSun","color":"#c7edfb","bold":true,"align":"center"}}]},{"type":"Button","props":{"y":325,"x":6,"width":290,"var":"backHall","height":62},"child":[{"type":"Image","props":{"y":15,"x":32,"skin":"gameCommon/Option/OptionClose.png"}},{"type":"Label","props":{"y":7,"x":102,"width":144,"valign":"middle","text":"返回大厅","height":49,"fontSize":25,"font":"SimSun","color":"#c7edfb","bold":true,"align":"center"}}]},{"type":"Button","props":{"y":422,"x":6,"width":290,"var":"setting","height":62},"child":[{"type":"Image","props":{"y":10,"x":32,"skin":"gameCommon/Option/OptionGameSet.png"}},{"type":"Label","props":{"y":7,"x":102,"width":144,"valign":"middle","text":"玩家设置","height":49,"fontSize":25,"font":"SimSun","color":"#c7edfb","bold":true,"align":"center"}}]}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}