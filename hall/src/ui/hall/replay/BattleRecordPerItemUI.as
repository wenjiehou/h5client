/**Created by the LayaAirIDE,do not modify.*/
package ui.hall.replay {
	import laya.ui.*;
	import laya.display.*; 
	import ui.hall.replay.PlayerRecordItemUI;

	public class BattleRecordPerItemUI extends View {
		public var replayBtn:Button;
		public var roundTf:Label;
		public var mpanel:Panel;
		public var player0:PlayerRecordItemUI;
		public var player1:PlayerRecordItemUI;
		public var player2:PlayerRecordItemUI;
		public var player3:PlayerRecordItemUI;
		public var player4:PlayerRecordItemUI;
		public var player5:PlayerRecordItemUI;
		public var player6:PlayerRecordItemUI;
		public var player7:PlayerRecordItemUI;
		public var player8:PlayerRecordItemUI;
		public var player9:PlayerRecordItemUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"Button","props":{"y":0,"x":0,"width":575,"var":"replayBtn","height":150},"child":[{"type":"Image","props":{"y":0,"x":0,"width":575,"skin":"common/diwen.png","height":150,"sizeGrid":"18,20,18,19"}},{"type":"Button","props":{"y":59,"x":539,"stateNum":1,"skin":"hall/goto.png"}},{"type":"Label","props":{"y":62,"x":474,"text":"回放","overflow":"hidden","fontSize":30,"font":"SimHei","color":"#a8e3f9","align":"center"}}]},{"type":"Label","props":{"y":61,"x":13,"var":"roundTf","text":"第1局","overflow":"hidden","fontSize":28,"font":"SimHei","color":"#c7edfb","align":"center"}},{"type":"Image","props":{"y":24,"x":95,"width":110,"visible":true,"skin":"common/fenge.png","rotation":90,"height":2}},{"type":"Panel","props":{"y":5,"x":101,"width":367,"var":"mpanel","height":143,"hScrollBarSkin":" "},"child":[{"type":"PlayerRecordItem","props":{"y":0,"x":0,"var":"player0","runtime":"ui.hall.replay.PlayerRecordItemUI"}},{"type":"PlayerRecordItem","props":{"y":70,"x":0,"var":"player1","runtime":"ui.hall.replay.PlayerRecordItemUI"}},{"type":"PlayerRecordItem","props":{"y":0,"x":188,"var":"player2","runtime":"ui.hall.replay.PlayerRecordItemUI"}},{"type":"PlayerRecordItem","props":{"y":70,"x":188,"var":"player3","runtime":"ui.hall.replay.PlayerRecordItemUI"}},{"type":"PlayerRecordItem","props":{"y":2,"x":376,"var":"player4","runtime":"ui.hall.replay.PlayerRecordItemUI"}},{"type":"PlayerRecordItem","props":{"y":70,"x":376,"var":"player5","runtime":"ui.hall.replay.PlayerRecordItemUI"}},{"type":"PlayerRecordItem","props":{"y":2,"x":563,"var":"player6","runtime":"ui.hall.replay.PlayerRecordItemUI"}},{"type":"PlayerRecordItem","props":{"y":70,"x":563,"var":"player7","runtime":"ui.hall.replay.PlayerRecordItemUI"}},{"type":"PlayerRecordItem","props":{"y":1,"x":751,"var":"player8","runtime":"ui.hall.replay.PlayerRecordItemUI"}},{"type":"PlayerRecordItem","props":{"y":70,"x":751,"var":"player9","runtime":"ui.hall.replay.PlayerRecordItemUI"}}]}]};
		override protected function createChildren():void {
			View.regComponent("ui.hall.replay.PlayerRecordItemUI",PlayerRecordItemUI);
			super.createChildren();
			createView(uiView);

		}

	}
}