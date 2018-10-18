/**Created by the LayaAirIDE,do not modify.*/
package ui.sddzGame.ddzPart {
	import laya.ui.*;
	import laya.display.*; 

	public class ActTipUI extends View {
		public var fen1:Image;
		public var fen2:Image;
		public var fen3:Image;
		public var bujiao:Image;
		public var buqiang:Image;
		public var jiabei:Image;
		public var jiaodizhu:Image;
		public var qiangdizhu:Image;
		public var buchu:Image;
		public var bujiabei:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{},"child":[{"type":"Image","props":{"y":-0.5,"x":31.5,"var":"fen1","skin":"sddzGame/1fen.png"}},{"type":"Image","props":{"y":-0.5,"x":30.5,"var":"fen2","skin":"sddzGame/2fen.png"}},{"type":"Image","props":{"y":-0.5,"x":30.5,"var":"fen3","skin":"sddzGame/3fen.png"}},{"type":"Image","props":{"y":5.5,"x":25.5,"var":"bujiao","skin":"poker/bujiao.png"}},{"type":"Image","props":{"y":5.5,"x":24.5,"var":"buqiang","skin":"sddzGame/f_buqiang.png"}},{"type":"Image","props":{"y":4.5,"x":24.5,"var":"jiabei","skin":"gameCommon/jiabei.png"}},{"type":"Image","props":{"y":5.5,"x":0.5,"var":"jiaodizhu","skin":"sddzGame/jiaodizhu.png"}},{"type":"Image","props":{"y":5.5,"x":-0.5,"var":"qiangdizhu","skin":"sddzGame/qiangdizhu.png"}},{"type":"Image","props":{"y":4.5,"x":29.5,"var":"buchu","skin":"poker/buchu.png","scaleY":1.3,"scaleX":1.3}},{"type":"Image","props":{"y":4.5,"x":0,"var":"bujiabei","skin":"sddzGame/f_bujiabei.png"}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}