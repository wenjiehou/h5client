/**Created by the LayaAirIDE,do not modify.*/
package ui.hall {
	import laya.ui.*;
	import laya.display.*; 

	public class BottomBtnUI extends View {
		public var actBtn:Button;
		public var actDown:Image;
		public var actNormal:Image;
		public var actNewImg:Image;
		public var seleChong:Image;
		public var seleAct:Image;
		public var seleHome:Image;
		public var seleFankui:Image;
		public var seleZhanji:Image;
		public var chongBtn:Button;
		public var chongDown:Image;
		public var chongNormal:Image;
		public var homeBtn:Button;
		public var homeNormal:Image;
		public var homeDown:Image;
		public var fankuiBtn:Button;
		public var fankuiDown:Image;
		public var fankuiNormal:Image;
		public var zhanjiBtn:Button;
		public var zhanjiDown:Image;
		public var zhanjiNormal:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":640,"height":120},"child":[{"type":"Image","props":{"y":-23,"x":11,"skin":"hall/btn/btnDi.png"}},{"type":"Box","props":{"y":-21,"x":11,"scaleY":1.1,"scaleX":1.1},"child":[{"type":"Box","props":{"y":37,"x":93},"child":[{"type":"Button","props":{"y":0,"x":0,"width":93,"var":"actBtn","height":92},"child":[{"type":"Image","props":{"y":0,"x":0,"width":93,"var":"actDown","skin":"hall/btn/btnAct_down.png","height":92}},{"type":"Image","props":{"y":25,"x":13,"width":71,"var":"actNormal","skin":"hall/btn/btnAct.png","height":42}}]},{"type":"Image","props":{"y":-1,"x":71,"var":"actNewImg","skin":"common/xiaohongdian.png"}}]},{"type":"Image","props":{"y":109,"x":10.5,"var":"seleChong","skin":"hall/btn/sele.png","alpha":1}},{"type":"Image","props":{"y":109,"x":103.5,"var":"seleAct","skin":"hall/btn/sele.png","alpha":1}},{"type":"Image","props":{"y":109,"x":245,"var":"seleHome","skin":"hall/btn/sele.png","alpha":1}},{"type":"Image","props":{"y":109,"x":385.5,"var":"seleFankui","skin":"hall/btn/sele.png","alpha":1}},{"type":"Image","props":{"y":109,"x":478.5,"var":"seleZhanji","skin":"hall/btn/sele.png","alpha":1}},{"type":"Button","props":{"y":37,"x":-1,"width":93,"var":"chongBtn","height":92},"child":[{"type":"Image","props":{"y":0,"x":0,"width":93,"var":"chongDown","skin":"hall/btn/btnAgent_down.png","height":92}},{"type":"Image","props":{"y":25,"x":14,"width":71,"var":"chongNormal","skin":"hall/btn/btnAgent.png","height":42}}]},{"type":"Button","props":{"y":4,"x":193,"width":186,"var":"homeBtn","scaleY":0.94,"scaleX":0.94,"height":128},"child":[{"type":"Image","props":{"var":"homeNormal","skin":"hall/btn/btnHome.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"homeDown","skin":"hall/btn/btnHome_down.png"}}]},{"type":"Button","props":{"y":37,"x":375,"width":93,"var":"fankuiBtn","height":92},"child":[{"type":"Image","props":{"y":0,"x":0,"width":93,"var":"fankuiDown","skin":"hall/btn/btnFankui_down.png","height":92}},{"type":"Image","props":{"y":25,"x":11,"width":70,"var":"fankuiNormal","skin":"hall/btn/btnFankui.png","height":42}}]},{"type":"Button","props":{"y":37,"x":469,"width":93,"var":"zhanjiBtn","height":92},"child":[{"type":"Image","props":{"y":0,"x":0,"width":93,"var":"zhanjiDown","skin":"hall/btn/btnZhanji_down.png","height":92}},{"type":"Image","props":{"y":25,"x":11,"width":70,"var":"zhanjiNormal","skin":"hall/btn/btnZhanji.png","height":42}}]}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}