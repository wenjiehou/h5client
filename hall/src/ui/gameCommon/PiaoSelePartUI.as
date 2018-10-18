/**Created by the LayaAirIDE,do not modify.*/
package ui.gameCommon {
	import laya.ui.*;
	import laya.display.*; 

	public class PiaoSelePartUI extends View {
		public var piao0:CheckBox;
		public var piao1:CheckBox;
		public var piao2:CheckBox;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"CheckBox","props":{"y":7,"x":0,"var":"piao0","stateNum":2,"skin":"gameCommon/duoxuankuangweixuanzhong.png"}},{"type":"Image","props":{"y":0,"x":64,"skin":"gameCommon/piao0.png"}}]},{"type":"Box","props":{"y":0,"x":205},"child":[{"type":"CheckBox","props":{"y":7,"var":"piao1","stateNum":2,"skin":"gameCommon/duoxuankuangweixuanzhong.png"}},{"type":"Image","props":{"x":56,"skin":"gameCommon/piao1.png"}}]},{"type":"Box","props":{"y":0,"x":401,"visible":false},"child":[{"type":"CheckBox","props":{"y":7,"var":"piao2","stateNum":2,"skin":"gameCommon/duoxuankuangweixuanzhong.png"}},{"type":"Image","props":{"x":55,"skin":"gameCommon/piao2.png"}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}