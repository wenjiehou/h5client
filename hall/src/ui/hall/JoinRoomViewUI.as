/**Created by the LayaAirIDE,do not modify.*/
package ui.hall {
	import laya.ui.*;
	import laya.display.*; 

	public class JoinRoomViewUI extends View {
		public var maskBtn:Box;
		public var roomidTf:Label;
		public var clearBtn:Button;
		public var joinBtn:Button;
		public var btn1:Button;
		public var btn8:Button;
		public var btn2:Button;
		public var btn5:Button;
		public var btn4:Button;
		public var btn6:Button;
		public var btn9:Button;
		public var btn3:Button;
		public var btn7:Button;
		public var btn0:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":640,"height":1038},"child":[{"type":"Box","props":{"rotation":0},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"maskBtn","mouseThrough":true,"mouseEnabled":true,"alpha":0.5},"child":[{"type":"Rect","props":{"width":640,"lineWidth":0,"height":1038,"fillColor":"#000000"}}]},{"type":"Image","props":{"y":192,"x":70,"width":501,"skin":"common/popBg.png","sizeGrid":"20,20,20,20","mouseThrough":true,"mouseEnabled":true,"height":670}},{"type":"Image","props":{"y":158,"x":67,"width":508,"skin":"common/biaoti.png","height":86,"sizeGrid":"0,41,0,43"}},{"type":"Label","props":{"y":180,"x":220.5,"text":"输入房间号","overflow":"hidden","fontSize":40,"font":"SimHei","color":"#c7edfb"}},{"type":"Image","props":{"y":252,"x":92,"width":457,"skin":"common/diwen.png","height":571,"sizeGrid":"18,20,18,19"}},{"type":"Image","props":{"y":283,"x":156,"width":328,"skin":"common/madengBg.png","height":73,"sizeGrid":"20,17,21,17"}},{"type":"Label","props":{"y":293,"x":180,"width":281,"var":"roomidTf","text":123456,"overflow":"hidden","height":51,"fontSize":50,"font":"Helvetica","color":"#ffc757","align":"center"}},{"type":"Button","props":{"y":692,"x":117,"var":"clearBtn","stateNum":1,"skin":"common/btn_qc.png","labelStrokeColor":"#ff7001","labelStroke":3,"labelSize":40,"labelPadding":"0,0,5,0","labelFont":"SimHei","labelColors":"#ffffff,#ffffff,#ffffff","labelBold":true,"label":"清空"}},{"type":"Button","props":{"y":692,"x":389,"var":"joinBtn","stateNum":1,"skin":"common/btn_qr.png","labelStrokeColor":"#04b9ff","labelStroke":3,"labelSize":40,"labelPadding":"0,0,5,0","labelFont":"SimHei","labelColors":"#ffffff,#ffffff,#ffffff","labelBold":true,"label":"加入"}},{"type":"Button","props":{"y":372,"x":117,"var":"btn1","stateNum":1,"skin":"common/numBg.png","labelStrokeColor":"#0885f8","labelStroke":3,"labelSize":50,"labelPadding":"0,0,5,0","labelFont":"Helvetica","labelColors":"#ffffff,#ffffff,#ffffff","labelBold":true,"label":1,"sizeGrid":"0,54,0,59"}},{"type":"Button","props":{"y":586,"x":253,"var":"btn8","stateNum":1,"skin":"common/numBg.png","labelStrokeColor":"#0885f8","labelStroke":3,"labelSize":50,"labelPadding":"0,0,5,0","labelFont":"Helvetica","labelColors":"#ffffff,#ffffff,#ffffff","labelBold":true,"label":8,"sizeGrid":"0,54,0,59"}},{"type":"Button","props":{"y":372,"x":253,"var":"btn2","stateNum":1,"skin":"common/numBg.png","labelStrokeColor":"#0885f8","labelStroke":3,"labelSize":50,"labelPadding":"0,0,5,0","labelFont":"Helvetica","labelColors":"#ffffff,#ffffff,#ffffff","labelBold":true,"label":2,"sizeGrid":"0,54,0,59"}},{"type":"Button","props":{"y":479,"x":253,"var":"btn5","stateNum":1,"skin":"common/numBg.png","labelStrokeColor":"#0885f8","labelStroke":3,"labelSize":50,"labelPadding":"0,0,5,0","labelFont":"Helvetica","labelColors":"#ffffff,#ffffff,#ffffff","labelBold":true,"label":5,"sizeGrid":"0,54,0,59"}},{"type":"Button","props":{"y":479,"x":117,"var":"btn4","stateNum":1,"skin":"common/numBg.png","labelStrokeColor":"#0885f8","labelStroke":3,"labelSize":50,"labelPadding":"0,0,5,0","labelFont":"Helvetica","labelColors":"#ffffff,#ffffff,#ffffff","labelBold":true,"label":4,"sizeGrid":"0,54,0,59"}},{"type":"Button","props":{"y":479,"x":389,"var":"btn6","stateNum":1,"skin":"common/numBg.png","labelStrokeColor":"#0885f8","labelStroke":3,"labelSize":50,"labelPadding":"0,0,5,0","labelFont":"Helvetica","labelColors":"#ffffff,#ffffff,#ffffff","labelBold":true,"label":6,"sizeGrid":"0,54,0,59"}},{"type":"Button","props":{"y":586,"x":389,"var":"btn9","stateNum":1,"skin":"common/numBg.png","labelStrokeColor":"#0885f8","labelStroke":3,"labelSize":50,"labelPadding":"0,0,5,0","labelFont":"Helvetica","labelColors":"#ffffff,#ffffff,#ffffff","labelBold":true,"label":9,"sizeGrid":"0,54,0,59"}},{"type":"Button","props":{"y":372,"x":389,"var":"btn3","stateNum":1,"skin":"common/numBg.png","labelStrokeColor":"#0885f8","labelStroke":3,"labelSize":50,"labelPadding":"0,0,5,0","labelFont":"Helvetica","labelColors":"#ffffff,#ffffff,#ffffff","labelBold":true,"label":3,"sizeGrid":"0,54,0,59"}},{"type":"Button","props":{"y":586,"x":117,"var":"btn7","stateNum":1,"skin":"common/numBg.png","labelStrokeColor":"#0885f8","labelStroke":3,"labelSize":50,"labelPadding":"0,0,5,0","labelFont":"Helvetica","labelColors":"#ffffff,#ffffff,#ffffff","labelBold":true,"label":7,"sizeGrid":"0,54,0,59"}},{"type":"Button","props":{"y":693,"x":253,"var":"btn0","stateNum":1,"skin":"common/numBg.png","labelStrokeColor":"#0885f8","labelStroke":3,"labelSize":50,"labelPadding":"0,0,5,0","labelFont":"Helvetica","labelColors":"#ffffff,#ffffff,#ffffff","labelBold":true,"label":"0","height":98,"sizeGrid":"0,54,0,59"}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}