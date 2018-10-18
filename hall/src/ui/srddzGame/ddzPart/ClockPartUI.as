/**Created by the LayaAirIDE,do not modify.*/
package ui.srddzGame.ddzPart {
	import laya.ui.*;
	import laya.display.*; 

	public class ClockPartUI extends View {
		public var pos3:Box;
		public var cutdownTf3:Label;
		public var pos2:Box;
		public var cutdownTf2:Label;
		public var pos1:Box;
		public var cutdownTf1:Label;
		public var pos0:Box;
		public var cutdownTf0:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1038,"height":640},"child":[{"type":"Box","props":{"y":129,"x":105,"width":114,"var":"pos3","scaleY":0.7,"scaleX":0.7,"height":123},"child":[{"type":"Image","props":{"y":1,"x":4,"skin":"gameCommon/clock.png"}},{"type":"Label","props":{"y":32,"x":31.1923828125,"width":55.615234375,"var":"cutdownTf3","valign":"middle","text":"09","strokeColor":"#000000","stroke":2,"height":50,"fontSize":40,"color":"#5a2e0f","align":"center"}}]},{"type":"Box","props":{"y":28,"x":378,"width":114,"var":"pos2","scaleY":0.7,"scaleX":0.7,"height":123},"child":[{"type":"Image","props":{"y":1,"x":4,"skin":"gameCommon/clock.png"}},{"type":"Label","props":{"y":32,"x":31.1923828125,"width":55.615234375,"var":"cutdownTf2","valign":"middle","text":"09","strokeColor":"#000000","stroke":2,"height":50,"fontSize":40,"color":"#5a2e0f","align":"center"}}]},{"type":"Box","props":{"y":129,"x":821,"width":114,"var":"pos1","scaleY":0.7,"scaleX":0.7,"height":123},"child":[{"type":"Image","props":{"y":1,"x":4,"skin":"gameCommon/clock.png"}},{"type":"Label","props":{"y":32,"x":31.1923828125,"width":55.615234375,"var":"cutdownTf1","valign":"middle","text":"09","strokeColor":"#000000","stroke":2,"height":50,"fontSize":40,"color":"#5a2e0f","align":"center"}}]},{"type":"Box","props":{"y":283,"x":155,"width":114,"var":"pos0","scaleY":0.7,"scaleX":0.7,"height":123},"child":[{"type":"Image","props":{"y":1,"x":4,"skin":"gameCommon/clock.png"}},{"type":"Label","props":{"y":32,"x":31.1923828125,"width":55.615234375,"var":"cutdownTf0","valign":"middle","text":"09","strokeColor":"#000000","stroke":2,"height":50,"fontSize":40,"color":"#5a2e0f","align":"center"}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}