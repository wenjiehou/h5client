/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.majiangParts.ClockPartUI;
	import ui.mainGame.majiangParts.shaiziPageUI;
	import ui.mainGame.majiangParts.huaLeftPartUI;
	import ui.mainGame.majiangParts.RightOutputPartUI;
	import ui.mainGame.majiangParts.OutputTopPartUI;
	import ui.mainGame.majiangParts.BottomOutputPartUI;
	import ui.mainGame.Items.BaidapaiUI;
	import ui.mainGame.majiangParts.RightHandlePartUI;
	import ui.mainGame.majiangParts.TopHandlePartUI;
	import ui.mainGame.majiangParts.RightPengGangPartUI;
	import ui.mainGame.majiangParts.TopPengGangPartUI;
	import ui.mainGame.majiangParts.huaRightPartUI;
	import ui.mainGame.majiangParts.huaTopPartUI;
	import ui.mainGame.majiangParts.huaBottomPartUI;
	import ui.mainGame.majiangParts.LeftOutputPartUI;
	import ui.mainGame.majiangParts.HuPaiTip.TopHuTipPanelUI;
	import ui.mainGame.majiangParts.HuPaiTip.LeftHuTipPanelUI;
	import ui.mainGame.majiangParts.LeftPengGangPartUI;
	import ui.mainGame.majiangParts.LeftHandlePartUI;
	import ui.mainGame.majiangParts.HuPaiTip.RightHuTipPanelUI;
	import ui.mainGame.majiangParts.BottomPengGangPartUI;
	import ui.mainGame.majiangParts.BottomHandlePartUI;
	import ui.mainGame.majiangParts.HandleEffUI;
	import ui.mainGame.majiangParts.HuPaiTip.BottomHuTipPanelUI;
	import ui.mainGame.majiangParts.HandleBtnsPartUI;
	import ui.mainGame.Items.BottomHandleItemUI;
	import ui.mainGame.majiangParts.ChiSelePartUI;
	import ui.mainGame.Items.ShowContrTipUI;

	public class MajiangPageUI extends View {
		public var clockPart:ClockPartUI;
		public var leftOutputPart:LeftOutputPartUI;
		public var leftHuaPart:huaLeftPartUI;
		public var rightOutputPart:RightOutputPartUI;
		public var topOutputPart:OutputTopPartUI;
		public var bottomOutputPart:BottomOutputPartUI;
		public var baidaPart:BaidapaiUI;
		public var rightHandlePart:RightHandlePartUI;
		public var topHandlePart:TopHandlePartUI;
		public var rightPengGangPart:RightPengGangPartUI;
		public var topPengGangPart:TopPengGangPartUI;
		public var rightHuaPart:huaRightPartUI;
		public var topHuaPart:huaTopPartUI;
		public var bottomHuaPart:huaBottomPartUI;
		public var controlTip:ShowContrTipUI;
		public var tophuTip:TopHuTipPanelUI;
		public var leftHuTip:LeftHuTipPanelUI;
		public var leftPengGangPart:LeftPengGangPartUI;
		public var leftHandlePart:LeftHandlePartUI;
		public var rightHuTip:RightHuTipPanelUI;
		public var bottomPengGangPart:BottomPengGangPartUI;
		public var bottomHandlePart:BottomHandlePartUI;
		public var handleEffPart:HandleEffUI;
		public var bottomHuTip:BottomHuTipPanelUI;
		public var handleBtns:HandleBtnsPartUI;
		public var rightTempPopcard:BottomHandleItemUI;
		public var bottomTempPopcard:BottomHandleItemUI;
		public var leftTempPopcard:BottomHandleItemUI;
		public var topTempPopcard:BottomHandleItemUI;
		public var chiSelePart:ChiSelePartUI;
		public var shaiziPart:shaiziPageUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1038,"height":640},"child":[{"type":"ClockPart","props":{"y":272,"x":469,"visible":true,"var":"clockPart","runtime":"ui.mainGame.majiangParts.ClockPartUI"}},{"type":"LeftOutputPart","props":{"y":153,"x":211,"visible":true,"var":"leftOutputPart","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.majiangParts.LeftOutputPartUI"}},{"type":"huaLeftPart","props":{"y":131,"x":161,"var":"leftHuaPart","scaleY":0.7,"scaleX":0.7,"runtime":"ui.mainGame.majiangParts.huaLeftPartUI"}},{"type":"RightOutputPart","props":{"y":153,"x":722,"visible":true,"var":"rightOutputPart","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.majiangParts.RightOutputPartUI"}},{"type":"OutputTopPart","props":{"y":153,"x":320,"var":"topOutputPart","scaleY":0.44,"scaleX":0.44,"runtime":"ui.mainGame.majiangParts.OutputTopPartUI"}},{"type":"BottomOutputPart","props":{"y":381,"x":320,"visible":true,"var":"bottomOutputPart","scaleY":0.44,"scaleX":0.44,"runtime":"ui.mainGame.majiangParts.BottomOutputPartUI"}},{"type":"Baidapai","props":{"y":281,"x":331,"var":"baidaPart","runtime":"ui.mainGame.Items.BaidapaiUI"}},{"type":"RightHandlePart","props":{"y":31,"x":942,"visible":true,"var":"rightHandlePart","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.majiangParts.RightHandlePartUI"}},{"type":"TopHandlePart","props":{"y":49,"x":289,"width":957,"visible":true,"var":"topHandlePart","scaleY":0.8,"scaleX":0.8,"height":108,"runtime":"ui.mainGame.majiangParts.TopHandlePartUI"}},{"type":"RightPengGangPart","props":{"y":160,"x":896,"visible":true,"var":"rightPengGangPart","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.majiangParts.RightPengGangPartUI"}},{"type":"TopPengGangPart","props":{"y":62,"x":442,"var":"topPengGangPart","scaleY":0.42,"scaleX":0.42,"runtime":"ui.mainGame.majiangParts.TopPengGangPartUI"}},{"type":"huaRightPart","props":{"y":89,"x":830,"var":"rightHuaPart","scaleY":0.7,"scaleX":0.7,"runtime":"ui.mainGame.majiangParts.huaRightPartUI"}},{"type":"huaTopPart","props":{"y":102,"x":343,"var":"topHuaPart","scaleY":0.35,"scaleX":0.35,"runtime":"ui.mainGame.majiangParts.huaTopPartUI"}},{"type":"huaBottomPart","props":{"y":479,"x":162,"var":"bottomHuaPart","scaleY":0.4,"scaleX":0.4,"runtime":"ui.mainGame.majiangParts.huaBottomPartUI"}},{"type":"ShowContrTip","props":{"y":334,"x":253,"var":"controlTip","runtime":"ui.mainGame.Items.ShowContrTipUI"}},{"type":"TopHuTipPanel","props":{"y":87,"x":315,"var":"tophuTip","scaleY":0.45,"scaleX":0.45,"height":100,"runtime":"ui.mainGame.majiangParts.HuPaiTip.TopHuTipPanelUI"}},{"type":"LeftHuTipPanel","props":{"y":105,"x":158,"var":"leftHuTip","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.majiangParts.HuPaiTip.LeftHuTipPanelUI"}},{"type":"LeftPengGangPart","props":{"y":43,"x":100,"visible":true,"var":"leftPengGangPart","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.majiangParts.LeftPengGangPartUI"}},{"type":"LeftHandlePart","props":{"y":46,"x":96,"width":99,"visible":true,"var":"leftHandlePart","scaleY":0.8,"scaleX":0.8,"height":468,"runtime":"ui.mainGame.majiangParts.LeftHandlePartUI"}},{"type":"RightHuTipPanel","props":{"y":105,"x":818,"var":"rightHuTip","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.majiangParts.HuPaiTip.RightHuTipPanelUI"}},{"type":"BottomPengGangPart","props":{"y":553,"x":29,"visible":true,"var":"bottomPengGangPart","scaleY":0.44,"scaleX":0.44,"runtime":"ui.mainGame.majiangParts.BottomPengGangPartUI"}},{"type":"BottomHandlePart","props":{"y":530,"x":30,"visible":true,"var":"bottomHandlePart","scaleY":0.75,"scaleX":0.75,"runtime":"ui.mainGame.majiangParts.BottomHandlePartUI"}},{"type":"HandleEff","props":{"var":"handleEffPart","runtime":"ui.mainGame.majiangParts.HandleEffUI"}},{"type":"BottomHuTipPanel","props":{"y":469,"x":267,"var":"bottomHuTip","scaleY":0.5,"scaleX":0.5,"runtime":"ui.mainGame.majiangParts.HuPaiTip.BottomHuTipPanelUI"}},{"type":"HandleBtnsPart","props":{"y":424,"x":782,"visible":false,"var":"handleBtns","runtime":"ui.mainGame.majiangParts.HandleBtnsPartUI"}},{"type":"BottomHandleItem","props":{"y":247,"x":743,"var":"rightTempPopcard","scaleY":0.7,"scaleX":0.7,"runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":383,"x":486,"var":"bottomTempPopcard","scaleY":0.7,"scaleX":0.7,"runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":247,"x":230,"var":"leftTempPopcard","scaleY":0.7,"scaleX":0.7,"runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":154,"x":486,"var":"topTempPopcard","scaleY":0.7,"scaleX":0.7,"runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"ChiSelePart","props":{"y":435,"x":323,"var":"chiSelePart","scaleY":0.6,"scaleX":0.6,"runtime":"ui.mainGame.majiangParts.ChiSelePartUI"}},{"type":"shaiziPage","props":{"y":0,"x":0,"var":"shaiziPart","mouseEnabled":false,"runtime":"ui.mainGame.majiangParts.shaiziPageUI"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.majiangParts.ClockPartUI",ClockPartUI);
			View.regComponent("ui.mainGame.majiangParts.shaiziPageUI",shaiziPageUI);
			View.regComponent("ui.mainGame.majiangParts.huaLeftPartUI",huaLeftPartUI);
			View.regComponent("ui.mainGame.majiangParts.RightOutputPartUI",RightOutputPartUI);
			View.regComponent("ui.mainGame.majiangParts.OutputTopPartUI",OutputTopPartUI);
			View.regComponent("ui.mainGame.majiangParts.BottomOutputPartUI",BottomOutputPartUI);
			View.regComponent("ui.mainGame.Items.BaidapaiUI",BaidapaiUI);
			View.regComponent("ui.mainGame.majiangParts.RightHandlePartUI",RightHandlePartUI);
			View.regComponent("ui.mainGame.majiangParts.TopHandlePartUI",TopHandlePartUI);
			View.regComponent("ui.mainGame.majiangParts.RightPengGangPartUI",RightPengGangPartUI);
			View.regComponent("ui.mainGame.majiangParts.TopPengGangPartUI",TopPengGangPartUI);
			View.regComponent("ui.mainGame.majiangParts.huaRightPartUI",huaRightPartUI);
			View.regComponent("ui.mainGame.majiangParts.huaTopPartUI",huaTopPartUI);
			View.regComponent("ui.mainGame.majiangParts.huaBottomPartUI",huaBottomPartUI);
			View.regComponent("ui.mainGame.majiangParts.LeftOutputPartUI",LeftOutputPartUI);
			View.regComponent("ui.mainGame.majiangParts.HuPaiTip.TopHuTipPanelUI",TopHuTipPanelUI);
			View.regComponent("ui.mainGame.majiangParts.HuPaiTip.LeftHuTipPanelUI",LeftHuTipPanelUI);
			View.regComponent("ui.mainGame.majiangParts.LeftPengGangPartUI",LeftPengGangPartUI);
			View.regComponent("ui.mainGame.majiangParts.LeftHandlePartUI",LeftHandlePartUI);
			View.regComponent("ui.mainGame.majiangParts.HuPaiTip.RightHuTipPanelUI",RightHuTipPanelUI);
			View.regComponent("ui.mainGame.majiangParts.BottomPengGangPartUI",BottomPengGangPartUI);
			View.regComponent("ui.mainGame.majiangParts.BottomHandlePartUI",BottomHandlePartUI);
			View.regComponent("ui.mainGame.majiangParts.HandleEffUI",HandleEffUI);
			View.regComponent("ui.mainGame.majiangParts.HuPaiTip.BottomHuTipPanelUI",BottomHuTipPanelUI);
			View.regComponent("ui.mainGame.majiangParts.HandleBtnsPartUI",HandleBtnsPartUI);
			View.regComponent("ui.mainGame.Items.BottomHandleItemUI",BottomHandleItemUI);
			View.regComponent("ui.mainGame.majiangParts.ChiSelePartUI",ChiSelePartUI);
			View.regComponent("ui.mainGame.Items.ShowContrTipUI",ShowContrTipUI);
			super.createChildren();
			createView(uiView);

		}

	}
}