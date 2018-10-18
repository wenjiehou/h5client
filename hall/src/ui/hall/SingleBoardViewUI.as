/**Created by the LayaAirIDE,do not modify.*/
package ui.hall {
	import laya.ui.*;
	import laya.display.*; 
	import ui.hall.HallBgUI;

	public class SingleBoardViewUI extends View {
		public var headIMG:Image;
		public var onplayName:Label;
		public var onplayTime:Label;
		public var list:List;
		public var backOnplay:Button;
		public var shareScoreBtn:Button;
		public var roomid:Label;
		public var gameName:Label;
		public var shareBox:Box;
		public var headIMGM:Image;
		public var niknameM:Label;
		public var headIMGL:Image;
		public var niknameL:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":640,"height":1038},"child":[{"type":"Box","props":{"y":0,"x":0,"width":642,"rotation":0,"height":1038},"child":[{"type":"HallBg","props":{"runtime":"ui.hall.HallBgUI"}},{"type":"Image","props":{"y":0,"x":5,"width":630,"skin":"common/diwenju.png","mouseThrough":true,"mouseEnabled":true,"height":1032,"sizeGrid":"28,16,30,20"}},{"type":"Image","props":{"y":0,"x":5,"width":630,"skin":"common/biaoti.png","height":86,"sizeGrid":"0,41,0,43"}},{"type":"Image","props":{"y":98,"x":20,"width":600,"skin":"common/diwen.png","height":791,"sizeGrid":"18,20,18,19"}},{"type":"Image","props":{"y":19,"x":253.5,"skin":"hall/zongzhj.png"}}]},{"type":"Box","props":{"y":147,"x":18.5},"child":[{"type":"Box","props":{"y":0,"x":26},"child":[{"type":"Box","props":{"alpha":0.4},"child":[{"type":"Circle","props":{"y":27.5,"x":27.5,"visible":true,"radius":28,"lineColor":"#ffffff","fillColor":"#ffffff"}}]},{"type":"Box","props":{"y":2,"x":2},"child":[{"type":"Image","props":{"y":0,"x":0,"width":50,"var":"headIMG","skin":"common/morentouxiang.png","height":50,"anchorY":0}},{"type":"Box","props":{"y":0,"x":0,"renderType":"mask"},"child":[{"type":"Circle","props":{"y":25,"x":25,"radius":25,"fillColor":"#ff0000"}}]}]}]},{"type":"Label","props":{"y":17,"x":87,"width":210,"var":"onplayName","text":"房主(*****)","overflow":"visible","height":28,"fontSize":22,"font":"SimHei","color":"#c7edfb","align":"left"}},{"type":"Label","props":{"y":18,"x":395,"wordWrap":true,"width":137,"var":"onplayTime","valign":"middle","text":"02-10 21:12","height":19,"fontSize":20,"font":"SimHei","color":"#ffffff","align":"right"}},{"type":"Label","props":{"y":17,"x":542,"width":63,"valign":"middle","text":"创局","overflow":"scroll","height":22,"fontSize":20,"font":"SimHei","color":"#c7edfb","align":"left"}}]},{"type":"List","props":{"y":230,"x":34,"width":575,"var":"list","spaceY":3,"height":553},"child":[{"type":"Box","props":{"y":0,"x":0,"visible":true,"renderType":"render"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":575,"visible":true,"skin":"common/diwen.png","height":90,"sizeGrid":"18,20,18,19"}},{"type":"Box","props":{"y":17,"x":87,"visible":true},"child":[{"type":"Box","props":{"alpha":0.4},"child":[{"type":"Circle","props":{"y":27.5,"x":27.5,"visible":true,"radius":28,"lineColor":"#ffffff","fillColor":"#ffffff"}}]},{"type":"Box","props":{"y":2,"x":2},"child":[{"type":"Image","props":{"y":0,"x":0,"width":50,"skin":"common/morentouxiang.png","name":"headIMG","height":50,"anchorY":0}},{"type":"Box","props":{"y":0,"x":0,"renderType":"mask"},"child":[{"type":"Circle","props":{"y":25,"x":25,"radius":25,"fillColor":"#ff0000"}}]}]}]},{"type":"Image","props":{"y":18,"x":19,"visible":true,"skin":"hall/hallRank1.png","name":"rank"}},{"type":"Label","props":{"y":32,"x":158,"width":155,"visible":true,"text":"哇哈哈*胡文松","overflow":"scroll","name":"onplayerName","height":30,"fontSize":22,"font":"SimHei","color":"#c7edfb","align":"left"}},{"type":"Label","props":{"y":27,"x":470,"width":108,"visible":true,"valign":"middle","text":"33","name":"onplayScore","height":0,"fontSize":36,"font":"SimHei","color":"#f73d3d","bold":true,"align":"center"}}]}]},{"type":"Box","props":{"y":817,"x":88},"child":[{"type":"Button","props":{"y":0,"x":0,"width":250,"var":"backOnplay","stateNum":1,"skin":"common/buttonHuang.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"对局详情","sizeGrid":"0,29,0,28"}},{"type":"Button","props":{"y":0,"x":273,"width":250,"var":"shareScoreBtn","stateNum":1,"skin":"common/buttonLv.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"分享战绩","sizeGrid":"0,29,0,27"}}]},{"type":"Box","props":{"y":107,"x":42.5},"child":[{"type":"Label","props":{"y":4,"width":61,"text":"房号：","height":25,"fontSize":20,"font":"SimHei","color":"#c7edfb"}},{"type":"Label","props":{"y":4,"x":60,"width":78,"var":"roomid","text":"123456","height":25,"fontSize":24,"font":"SimHei","color":"#c7edfb","bold":true}},{"type":"Label","props":{"x":158,"width":233,"var":"gameName","text":"西周麻将","height":29,"fontSize":30,"font":"SimHei","color":"#c7edfb","align":"center"}},{"type":"Label","props":{"y":4,"x":475,"width":82,"valign":"top","text":"已结束","height":25,"fontSize":24,"font":"SimHei","color":"#c7edfb","align":"right"}}]},{"type":"Box","props":{"y":0,"x":0,"var":"shareBox"},"child":[{"type":"Box","props":{"y":0,"x":0,"alpha":0.5},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":640,"lineWidth":0,"height":1038,"fillColor":"#000000"}},{"type":"Image","props":{"y":0,"x":0,"width":640,"skin":"common/baifengexian.png","height":1038,"alpha":0.1}}]},{"type":"Image","props":{"y":98,"x":523,"width":98,"skin":"common/shouzhijiantou.png","rotation":-90,"height":78,"anchorX":0.5}},{"type":"Image","props":{"y":216,"x":242,"skin":"common/fenxiang2.png"}},{"type":"Label","props":{"y":226,"x":313,"width":233,"text":"发送给好友","height":29,"fontSize":30,"font":"SimHei","color":"#c7edfb","align":"left"}}]},{"type":"Box","props":{"y":228.75,"x":33.5,"visible":false},"child":[{"type":"Image","props":{"y":8.25,"x":286.5,"width":80,"visible":false,"skin":"common/fenge.png","rotation":90,"height":2}},{"type":"Image","props":{"y":-0.75,"x":-0.5,"width":575,"skin":"hall/MVP_hall.png","sizeGrid":"27,23,39,33","height":102}},{"type":"Box","props":{"y":21.25,"x":19.5},"child":[{"type":"Box","props":{},"child":[{"type":"Box","props":{"x":47},"child":[{"type":"Box","props":{"alpha":0.4},"child":[{"type":"Circle","props":{"y":27.5,"x":27.5,"visible":true,"radius":28,"lineColor":"#ffffff","fillColor":"#ffffff"}}]},{"type":"Box","props":{"y":2,"x":2},"child":[{"type":"Image","props":{"y":0,"x":0,"width":50,"var":"headIMGM","skin":"common/morentouxiang.png","height":50,"anchorY":0}},{"type":"Box","props":{"y":0,"x":0,"renderType":"mask"},"child":[{"type":"Circle","props":{"y":25,"x":25,"radius":25,"fillColor":"#ff0000"}}]}]}]},{"type":"Image","props":{"y":2,"x":106,"skin":"hall/ying.png"}},{"type":"Label","props":{"y":21,"width":152,"visible":false,"var":"niknameM","valign":"middle","height":24,"fontSize":22,"font":"SimHei","color":"#729a9a","align":"center"}}]},{"type":"Box","props":{"y":2,"x":315,"visible":false},"child":[{"type":"Box","props":{"x":48},"child":[{"type":"Box","props":{"alpha":0.4},"child":[{"type":"Circle","props":{"y":27.5,"x":27.5,"visible":true,"radius":28,"lineColor":"#ffffff","fillColor":"#ffffff"}}]},{"type":"Box","props":{"y":2,"x":2},"child":[{"type":"Image","props":{"y":0,"x":0,"width":50,"var":"headIMGL","skin":"common/morentouxiang.png","height":50,"anchorY":0}},{"type":"Box","props":{"y":0,"x":0,"renderType":"mask"},"child":[{"type":"Circle","props":{"y":25,"x":25,"radius":25,"fillColor":"#ff0000"}}]}]}]},{"type":"Image","props":{"y":2,"x":107,"skin":"hall/dianpao.png"}},{"type":"Label","props":{"y":19,"width":151,"visible":false,"var":"niknameL","valign":"middle","height":24,"fontSize":22,"font":"SimHei","color":"#729a9a","align":"center"}}]}]}]}]};
		override protected function createChildren():void {
			View.regComponent("ui.hall.HallBgUI",HallBgUI);
			super.createChildren();
			createView(uiView);

		}

	}
}