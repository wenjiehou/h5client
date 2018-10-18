/**Created by the LayaAirIDE,do not modify.*/
package ui.common {
	import laya.ui.*;
	import laya.display.*; 

	public class TimeWarUI extends View {
		public var bg:Image;
		public var watchNum:Label;
		public var playerList:List;
		public var watchList:List;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1038,"height":1038},"child":[{"type":"Box","props":{"y":229,"x":319,"width":400,"height":580},"child":[{"type":"Image","props":{"y":0,"x":0,"width":400,"var":"bg","skin":"common/gameBg.png","sizeGrid":"34,32,34,34","mouseThrough":true,"height":580}},{"type":"Box","props":{"y":19,"x":13},"child":[{"type":"Image","props":{"width":372,"skin":"common/commonTitBg.png","height":66,"sizeGrid":"10,10,8,14"}},{"type":"Label","props":{"x":113,"width":146,"valign":"middle","text":"实时战况","height":65,"fontSize":34,"font":"SimHei","color":"#c7edfb","align":"center"}}]},{"type":"Box","props":{"y":94,"x":13},"child":[{"type":"Image","props":{"width":372,"skin":"common/commonTitBg.png","height":54,"sizeGrid":"10,10,8,14"}},{"type":"Label","props":{"y":6,"x":53,"width":78,"valign":"middle","text":"昵称","height":41,"fontSize":30,"font":"SimHei","color":"#c7edfb","align":"center"}},{"type":"Label","props":{"y":5,"x":244,"width":78,"valign":"middle","text":"输赢","height":41,"fontSize":30,"font":"SimHei","color":"#c7edfb","align":"center"}}]},{"type":"Box","props":{"y":349,"x":13},"child":[{"type":"Image","props":{"y":0.5,"x":0,"width":372,"skin":"common/commonTitBg.png","height":54,"sizeGrid":"10,10,8,14"}},{"type":"Label","props":{"y":7,"x":112.5,"width":147,"var":"watchNum","valign":"middle","text":"观众(24)","height":41,"fontSize":30,"font":"SimHei","color":"#c7edfb","align":"center"}}]},{"type":"List","props":{"y":156,"x":15,"width":371,"var":"playerList","height":185},"child":[{"type":"Box","props":{"width":371,"renderType":"render","mouseThrough":true,"height":45},"child":[{"type":"Label","props":{"y":0,"x":0,"width":184,"valign":"middle","overflow":"hidden","name":"playerName","height":45,"fontSize":28,"font":"Arial","color":"#dbf4ee","align":"center"}},{"type":"Label","props":{"y":0,"x":245,"width":74,"valign":"middle","name":"playerScore","height":45,"fontSize":28,"font":"SimHei","color":"#dbf4ee","align":"center"}}]}]},{"type":"List","props":{"y":424,"x":16,"width":365,"var":"watchList","spaceY":16,"spaceX":20,"repeatX":5,"height":135},"child":[{"type":"Box","props":{"renderType":"render","mouseThrough":true},"child":[{"type":"Label","props":{"y":58,"x":0,"wordWrap":false,"width":56,"visible":true,"valign":"middle","text":"label","overflow":"scroll","name":"nikname","height":24,"fontSize":18,"font":"Arial","color":"#c7edfb","align":"center"}},{"type":"Box","props":{"y":0,"scaleY":0.7,"scaleX":0.7},"child":[{"type":"Box","props":{"y":4,"x":4,"width":74,"visible":true,"height":74,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":74,"visible":true,"skin":"common/morentouxiang.png","name":"watchIMG","height":74,"anchorY":0}},{"type":"Box","props":{"y":0,"x":0,"width":74,"visible":true,"renderType":"mask","height":74},"child":[{"type":"Image","props":{"width":74,"visible":true,"skin":"common/touxMask.png","height":74,"sizeGrid":"13,13,12,14"}}]}]},{"type":"Image","props":{"width":82,"visible":true,"skin":"common/touxBg.png","height":82,"sizeGrid":"15,15,19,18"}}]}]}]}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}