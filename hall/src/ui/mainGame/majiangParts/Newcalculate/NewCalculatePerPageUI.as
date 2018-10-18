/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts.Newcalculate {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.majiangParts.Newcalculate.NewCalculatePerItemUI;
	import ui.mainGame.majiangParts.Newcalculate.CalculatePerItemUI;
	import ui.mainGame.majiangParts.BottomPengGangPartUI;
	import ui.mainGame.majiangParts.BottomHandlePartUI;
	import laya.display.Text;

	public class NewCalculatePerPageUI extends View {
		public var hideBtn:Button;
		public var player3:NewCalculatePerItemUI;
		public var confirmBtn:Button;
		public var player2:NewCalculatePerItemUI;
		public var player1:NewCalculatePerItemUI;
		public var player0:NewCalculatePerItemUI;
		public var readyBtn:Button;
		public var readyImg:Image;
		public var closeBtn:Button;
		public var playersBox:Box;
		public var item0:CalculatePerItemUI;
		public var item1:CalculatePerItemUI;
		public var item2:CalculatePerItemUI;
		public var onePlayerBox:Box;
		public var pengGangCards:BottomPengGangPartUI;
		public var handCards:BottomHandlePartUI;
		public var headImg:Image;
		public var paixingTf:Text;
		public var taishuTf:Label;
		public var liujuImg:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1038,"height":640},"child":[{"type":"Box","props":{"y":0,"x":0,"alpha":0.5},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":1038,"lineWidth":1,"height":640,"fillColor":"#000000"}}]},{"type":"Image","props":{"y":11,"x":64,"width":900,"skin":"common/popBg.png","height":548,"sizeGrid":"20,20,20,20"}},{"type":"Button","props":{"y":566,"x":179,"width":180,"visible":true,"var":"hideBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#c5893b","labelStroke":5,"labelSize":38,"labelFont":"SimHei","labelColors":"#ffffff","labelAlign":"center","height":68,"anchorX":0.5,"sizeGrid":"0,29,0,27"},"child":[{"type":"Image","props":{"y":8,"x":45,"skin":"gameCommon/btnHide.png"}}]},{"type":"NewCalculatePerItem","props":{"y":404,"x":737,"var":"player3","runtime":"ui.mainGame.majiangParts.Newcalculate.NewCalculatePerItemUI"}},{"type":"Button","props":{"y":566,"x":847,"width":180,"visible":false,"var":"confirmBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#c5893b","labelStroke":5,"labelSize":38,"labelFont":"SimHei","labelColors":"#ffffff","labelAlign":"center","height":68,"anchorX":0.5,"sizeGrid":"0,29,0,27"},"child":[{"type":"Image","props":{"y":11,"x":41,"skin":"common/btnConfirm.png"}}]},{"type":"NewCalculatePerItem","props":{"y":404,"x":518,"var":"player2","runtime":"ui.mainGame.majiangParts.Newcalculate.NewCalculatePerItemUI"}},{"type":"NewCalculatePerItem","props":{"y":404,"x":299,"var":"player1","runtime":"ui.mainGame.majiangParts.Newcalculate.NewCalculatePerItemUI"}},{"type":"NewCalculatePerItem","props":{"y":404,"x":80,"var":"player0","runtime":"ui.mainGame.majiangParts.Newcalculate.NewCalculatePerItemUI"}},{"type":"Button","props":{"y":566,"x":424,"width":180,"var":"readyBtn","stateNum":1,"skin":"common/buttonHuang.png","height":68,"sizeGrid":"0,29,0,28"}},{"type":"Image","props":{"y":572,"x":446,"var":"readyImg","skin":"gameCommon/nextPlay.png"}},{"type":"Button","props":{"y":566,"x":513,"width":180,"visible":false,"var":"closeBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#c5893b","labelStroke":5,"labelSize":38,"labelFont":"SimHei","labelColors":"#ffffff","labelAlign":"center","height":68,"anchorX":0.5,"sizeGrid":"0,29,0,28"},"child":[{"type":"Image","props":{"y":6,"x":46,"skin":"common/closs.png"}}]},{"type":"Box","props":{"y":24,"x":80,"var":"playersBox"},"child":[{"type":"CalculatePerItem","props":{"y":4,"x":0,"var":"item0","runtime":"ui.mainGame.majiangParts.Newcalculate.CalculatePerItemUI"}},{"type":"CalculatePerItem","props":{"y":130,"var":"item1","runtime":"ui.mainGame.majiangParts.Newcalculate.CalculatePerItemUI"}},{"type":"CalculatePerItem","props":{"y":255,"var":"item2","runtime":"ui.mainGame.majiangParts.Newcalculate.CalculatePerItemUI"}}]},{"type":"Box","props":{"y":63,"x":103,"width":846,"var":"onePlayerBox","height":312},"child":[{"type":"BottomPengGangPart","props":{"y":14.503999999999998,"x":80,"visible":true,"var":"pengGangCards","scaleY":0.37,"scaleX":0.37,"runtime":"ui.mainGame.majiangParts.BottomPengGangPartUI"}},{"type":"BottomHandlePart","props":{"y":13.503999999999998,"x":120,"visible":true,"var":"handCards","scaleY":0.53,"scaleX":0.53,"runtime":"ui.mainGame.majiangParts.BottomHandlePartUI"}},{"type":"Image","props":{"y":50.504,"x":35,"width":70,"var":"headImg","skin":"common/morentouxiang.png","mouseThrough":true,"height":70,"anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":132.504,"wordWrap":true,"width":823,"var":"paixingTf","text":"接炮（七对）接炮（七对）接炮（七对）接炮（七对）接炮（七对）接炮（七对）接炮（七对）接炮（七对）接炮（清一色）接炮（自摸）","height":97,"fontSize":25,"font":"SimHei","color":"#ffffff"}},{"type":"Label","props":{"y":273.504,"x":647,"wordWrap":false,"width":347,"var":"taishuTf","valign":"middle","text":"(合计：5台)","height":38,"fontSize":25,"font":"SimHei","color":"#ffffff","bold":true,"anchorY":0,"anchorX":0.5,"align":"right"}}]},{"type":"Image","props":{"y":37.99999999999995,"x":293.99999999999994,"width":405,"var":"liujuImg","skin":"gametable/gameOver/liuju.png","height":298}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.majiangParts.Newcalculate.NewCalculatePerItemUI",NewCalculatePerItemUI);
			View.regComponent("ui.mainGame.majiangParts.Newcalculate.CalculatePerItemUI",CalculatePerItemUI);
			View.regComponent("ui.mainGame.majiangParts.BottomPengGangPartUI",BottomPengGangPartUI);
			View.regComponent("ui.mainGame.majiangParts.BottomHandlePartUI",BottomHandlePartUI);
			View.regComponent("Text",Text);
			super.createChildren();
			createView(uiView);

		}

	}
}