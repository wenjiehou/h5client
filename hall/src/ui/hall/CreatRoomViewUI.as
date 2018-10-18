/**Created by the LayaAirIDE,do not modify.*/
package ui.hall {
	import laya.ui.*;
	import laya.display.*; 

	public class CreatRoomViewUI extends View {
		public var maskBtn:Box;
		public var shichangSele:RadioGroup;
		public var preCostTf:Label;
		public var gameType:Box;
		public var xiangshangGameType:RadioGroup;
		public var sddzGameType:RadioGroup;
		public var pinshiGameType:RadioGroup;
		public var srddzGameType:RadioGroup;
		public var jushuSele:RadioGroup;
		public var matchBtn:Button;
		public var confirmBtn:Button;
		public var gameTit:Label;
		public var payTypeSele:RadioGroup;
		public var costType:Tab;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":640,"height":1038},"child":[{"type":"Box","props":{"y":132,"x":21,"width":598,"rotation":0,"height":769},"child":[{"type":"Box","props":{"y":-132,"x":-21,"visible":true,"var":"maskBtn","mouseThrough":true,"mouseEnabled":true,"alpha":0.5},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":640,"lineWidth":0,"height":1038,"fillColor":"#000000"}}]},{"type":"Image","props":{"y":132,"x":0,"width":598,"skin":"common/popBg.png","mouseThrough":true,"mouseEnabled":true,"height":569,"sizeGrid":"20,20,20,20"}},{"type":"Image","props":{"y":220,"x":17,"width":561,"skin":"common/diwen.png","height":445,"sizeGrid":"18,20,18,19"}},{"type":"RadioGroup","props":{"y":398,"x":33,"var":"shichangSele","space":28,"skin":"common/111.png","selectedIndex":1,"labels":"15分钟,20分钟,30分钟,60分钟","labelSize":26,"labelPadding":"-1,0,20,5","labelColors":"#c7edfb,#c7edfb,#c7edfb","height":26,"direction":"horizontal"}},{"type":"Label","props":{"y":539,"x":218,"width":298,"var":"preCostTf","valign":"middle","text":"每人支付 376","overflow":"hidden","height":30,"fontSize":26,"font":"黑体","color":"#c7edfb","align":"right"}},{"type":"Image","props":{"y":539,"x":526.83984375,"skin":"hall/icon_diamond.png","scaleY":0.6,"scaleX":0.6}},{"type":"Box","props":{"y":250,"x":33.16015625,"width":435,"var":"gameType","height":80},"child":[{"type":"Label","props":{"x":0,"width":116,"text":"模式：","strokeColor":"#566fd4","height":32,"fontSize":30,"font":"SimHei","color":"#c7edfb"}},{"type":"RadioGroup","props":{"y":48,"x":0,"var":"xiangshangGameType","space":80,"skin":"common/111.png","selectedIndex":0,"labels":" 清12混8,  清10混6","labelSize":26,"labelPadding":"-4,0,20,5","labelColors":"#c7edfb,#c7edfb,#c7edfb","height":32,"direction":"horizontal"}},{"type":"RadioGroup","props":{"y":48,"var":"sddzGameType","space":80,"skin":"common/111.png","selectedIndex":0,"labels":"叫分","labelSize":26,"labelPadding":"-4,0,20,5","labelColors":"#c7edfb,#c7edfb,#c7edfb","height":32,"direction":"horizontal"}},{"type":"RadioGroup","props":{"y":48,"var":"pinshiGameType","space":80,"skin":"common/111.png","selectedIndex":0,"labels":"明牌抢庄","labelSize":26,"labelPadding":"-4,0,20,5","labelColors":"#c7edfb,#c7edfb,#c7edfb","height":32,"direction":"horizontal"}},{"type":"RadioGroup","props":{"y":48,"x":0,"var":"srddzGameType","space":80,"skin":"common/111.png","selectedIndex":0,"labels":"上海玩法,  安徽玩法","labelSize":26,"labelPadding":"-4,0,20,5","labelColors":"#c7edfb,#c7edfb,#c7edfb","height":32,"direction":"horizontal"}}]},{"type":"RadioGroup","props":{"y":397,"x":33,"var":"jushuSele","space":28,"skin":"common/111.png","selectedIndex":1,"labels":"6局,12局,20局","labelSize":26,"labelPadding":"-1,0,20,5","labelColors":"#c7edfb,#c7edfb,#c7edfb","height":26,"direction":"horizontal"}},{"type":"Box","props":{"y":584,"x":113.30000000000001},"child":[{"type":"Button","props":{"y":0,"x":224,"width":183,"var":"matchBtn","stateNum":1,"skin":"common/buttonLan.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"匹配","sizeGrid":"0,30,0,30"}},{"type":"Button","props":{"y":0,"x":0,"width":183,"var":"confirmBtn","stateNum":1,"skin":"common/buttonLv.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"创建","sizeGrid":"0,29,0,27"}}]},{"type":"Image","props":{"y":105,"x":-4,"width":606,"skin":"common/biaoti.png","height":86,"sizeGrid":"0,41,0,43"}},{"type":"Label","props":{"y":129,"x":41,"width":221,"var":"gameTit","text":"三人斗地主","height":35,"fontSize":35,"font":"SimHei","color":"#c7edfb","bold":true,"align":"center"}},{"type":"Label","props":{"y":354,"x":34,"width":116,"text":"时间：","height":32,"fontSize":30,"font":"SimHei","color":"#c7edfb"}},{"type":"Box","props":{"y":455,"x":33},"child":[{"type":"RadioGroup","props":{"y":42,"x":1,"var":"payTypeSele","space":28,"skin":"common/111.png","selectedIndex":1,"labels":"房主付费,共同付费","labelSize":26,"labelPadding":"-1,0,20,5","labelColors":"#c7edfb,#c7edfb,#c7edfb","height":26,"direction":"horizontal"}},{"type":"Label","props":{"width":116,"text":"付费：","height":32,"fontSize":30,"font":"SimHei","color":"#c7edfb"}}]},{"type":"Tab","props":{"y":108,"x":318,"var":"costType","skin":"common/titleTab.png","selectedIndex":0,"labels":"约局场,金币场","labelSize":30,"labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","direction":"horizontal","sizeGrid":"0,64,0,64"}}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}