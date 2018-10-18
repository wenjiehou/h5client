/**Created by the LayaAirIDE,do not modify.*/
package ui.srddzGame {
	import laya.ui.*;
	import laya.display.*; 
	import ui.srddzGame.ddzPart.handlePart.OtherHandlePartUI;
	import ui.srddzGame.ddzPart.handlePart.TopHandlePartUI;
	import ui.srddzGame.ddzPart.outputPart.OwnerOutputPartUI;
	import ui.srddzGame.ddzPart.outputPart.OtherOutputPartUI;
	import ui.srddzGame.ddzPart.DipaiPartUI;
	import ui.srddzGame.ddzPart.ActTipUI;
	import ui.srddzGame.ddzPart.ClockPartUI;
	import ui.srddzGame.ddzPart.PlayerCtlPartUI;
	import ui.srddzGame.ddzPart.handlePart.OwnerHandlePartUI;

	public class PockerPageUI extends View {
		public var handlePart1:OtherHandlePartUI;
		public var handlePart3:OtherHandlePartUI;
		public var handlePart2:TopHandlePartUI;
		public var outputPart2:OwnerOutputPartUI;
		public var outputPart0:OwnerOutputPartUI;
		public var outputPart3:OtherOutputPartUI;
		public var outputPart1:OtherOutputPartUI;
		public var dipaiPart:DipaiPartUI;
		public var actTip3:ActTipUI;
		public var actTip1:ActTipUI;
		public var actTip2:ActTipUI;
		public var clockPart:ClockPartUI;
		public var ctlPart:PlayerCtlPartUI;
		public var actTip0:ActTipUI;
		public var handlePart0:OwnerHandlePartUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1038,"height":640},"child":[{"type":"OtherHandlePart","props":{"y":199,"x":902,"var":"handlePart1","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.handlePart.OtherHandlePartUI"}},{"type":"OtherHandlePart","props":{"y":199,"x":17,"var":"handlePart3","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.handlePart.OtherHandlePartUI"}},{"type":"TopHandlePart","props":{"y":3,"x":560,"var":"handlePart2","scaleY":0.9,"scaleX":0.9,"runtime":"ui.srddzGame.ddzPart.handlePart.TopHandlePartUI"}},{"type":"OwnerOutputPart","props":{"y":127,"x":304.54999999999995,"var":"outputPart2","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.outputPart.OwnerOutputPartUI"}},{"type":"OwnerOutputPart","props":{"y":230.61,"x":304.54999999999995,"var":"outputPart0","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.outputPart.OwnerOutputPartUI"}},{"type":"OtherOutputPart","props":{"y":127,"x":136,"var":"outputPart3","scaleY":0.72,"scaleX":0.72,"runtime":"ui.srddzGame.ddzPart.outputPart.OtherOutputPartUI"}},{"type":"OtherOutputPart","props":{"y":127,"x":732,"var":"outputPart1","scaleY":0.72,"scaleX":0.72,"runtime":"ui.srddzGame.ddzPart.outputPart.OtherOutputPartUI"}},{"type":"DipaiPart","props":{"y":3,"x":826,"var":"dipaiPart","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.DipaiPartUI"}},{"type":"ActTip","props":{"y":147,"x":175,"var":"actTip3","runtime":"ui.srddzGame.ddzPart.ActTipUI"}},{"type":"ActTip","props":{"y":147,"x":773,"var":"actTip1","runtime":"ui.srddzGame.ddzPart.ActTipUI"}},{"type":"ActTip","props":{"y":146,"x":470,"var":"actTip2","runtime":"ui.srddzGame.ddzPart.ActTipUI"}},{"type":"ClockPart","props":{"y":0,"x":0,"var":"clockPart","mouseThrough":true,"runtime":"ui.srddzGame.ddzPart.ClockPartUI"}},{"type":"PlayerCtlPart","props":{"y":305,"x":241.3,"var":"ctlPart","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.PlayerCtlPartUI"}},{"type":"ActTip","props":{"y":305,"x":470,"var":"actTip0","runtime":"ui.srddzGame.ddzPart.ActTipUI"}},{"type":"OwnerHandlePart","props":{"y":389,"x":30.149999999999977,"var":"handlePart0","runtime":"ui.srddzGame.ddzPart.handlePart.OwnerHandlePartUI"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.srddzGame.ddzPart.handlePart.OtherHandlePartUI",OtherHandlePartUI);
			View.regComponent("ui.srddzGame.ddzPart.handlePart.TopHandlePartUI",TopHandlePartUI);
			View.regComponent("ui.srddzGame.ddzPart.outputPart.OwnerOutputPartUI",OwnerOutputPartUI);
			View.regComponent("ui.srddzGame.ddzPart.outputPart.OtherOutputPartUI",OtherOutputPartUI);
			View.regComponent("ui.srddzGame.ddzPart.DipaiPartUI",DipaiPartUI);
			View.regComponent("ui.srddzGame.ddzPart.ActTipUI",ActTipUI);
			View.regComponent("ui.srddzGame.ddzPart.ClockPartUI",ClockPartUI);
			View.regComponent("ui.srddzGame.ddzPart.PlayerCtlPartUI",PlayerCtlPartUI);
			View.regComponent("ui.srddzGame.ddzPart.handlePart.OwnerHandlePartUI",OwnerHandlePartUI);
			super.createChildren();
			createView(uiView);

		}

	}
}