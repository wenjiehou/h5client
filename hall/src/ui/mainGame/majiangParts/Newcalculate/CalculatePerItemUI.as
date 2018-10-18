/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts.Newcalculate {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.majiangParts.BottomPengGangPartUI;
	import ui.mainGame.majiangParts.BottomHandlePartUI;
	import laya.display.Text;

	public class CalculatePerItemUI extends View {
		public var pengGangCards:BottomPengGangPartUI;
		public var handCards:BottomHandlePartUI;
		public var headImg:Image;
		public var paixingTf:Text;
		public var taishuTf:Text;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":867,"skin":"common/wenzidi.png","sizeGrid":"13,14,11,14","height":116}},{"type":"BottomPengGangPart","props":{"y":6,"x":89,"visible":true,"var":"pengGangCards","scaleY":0.37,"scaleX":0.37,"runtime":"ui.mainGame.majiangParts.BottomPengGangPartUI"}},{"type":"BottomHandlePart","props":{"y":5,"x":129,"visible":true,"var":"handCards","scaleY":0.53,"scaleX":0.53,"runtime":"ui.mainGame.majiangParts.BottomHandlePartUI"}},{"type":"Image","props":{"y":43,"x":46,"width":70,"var":"headImg","skin":"common/morentouxiang.png","mouseThrough":true,"height":70,"anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":86,"x":22,"wordWrap":false,"width":610,"var":"paixingTf","text":"接炮（七对）接炮（七对）接炮（七对）接炮（七对）接炮（七对）","height":25,"fontSize":20,"font":"SimHei","color":"#ffffff"}},{"type":"Text","props":{"y":86,"x":672,"wordWrap":false,"width":181,"var":"taishuTf","text":"（合计：4台）","height":25,"fontSize":20,"font":"SimHei","color":"#e0d22e","align":"right"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.majiangParts.BottomPengGangPartUI",BottomPengGangPartUI);
			View.regComponent("ui.mainGame.majiangParts.BottomHandlePartUI",BottomHandlePartUI);
			View.regComponent("Text",Text);
			super.createChildren();
			createView(uiView);

		}

	}
}