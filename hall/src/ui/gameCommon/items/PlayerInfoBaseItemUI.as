/**Created by the LayaAirIDE,do not modify.*/
package ui.gameCommon.items {
	import laya.ui.*;
	import laya.display.*; 
	import ui.gameCommon.VoiceShowUI;

	public class PlayerInfoBaseItemUI extends View {
		public var haveBox:Box;
		public var headImg:Image;
		public var offline:Image;
		public var mingpaiPic:Image;
		public var gangEff:Image;
		public var readyImg:Label;
		public var fenshuTf:Label;
		public var zhuangImg:Image;
		public var nameTf:Label;
		public var piaoImg:Image;
		public var playingPiaoImg:Image;
		public var notPiaoTf:Label;
		public var chairPos:Label;
		public var zhenghuaBox:Box;
		public var huaTf_z:Label;
		public var huaZhenhua:Image;
		public var huaYehua:Image;
		public var yehuaBox:Box;
		public var huaTf_y:Label;
		public var readyImg111:Image;
		public var offLineSp:Image;
		public var offlineTf:Label;
		public var tirenBtn:Button;
		public var recordTf:Label;
		public var shenfenImg:Image;
		public var voice:VoiceShowUI;
		public var jiabeiImg:Image;
		public var express:Image;
		public var sitdownBtn:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":0,"visible":true,"height":0},"child":[{"type":"Box","props":{"y":-4,"x":-36,"var":"haveBox"},"child":[{"type":"Image","props":{"y":79,"x":33,"width":111,"skin":"gameCommon/img_jinbi-di.png","sizeGrid":"0,27,0,30","scaleY":0.7,"scaleX":0.7,"height":39}},{"type":"Image","props":{"y":17,"x":45,"width":60,"skin":"gameCommon/img_wanjiatouxiang-di.png","sizeGrid":"16,16,19,16","height":60}},{"type":"Box","props":{"y":19,"x":47},"child":[{"type":"Image","props":{"width":56,"var":"headImg","skin":"common/morentouxiang.png","height":56}},{"type":"Image","props":{"y":0,"x":0,"width":56,"skin":"gameCommon/img_wanjiatouxiang-di.png","renderType":"mask","height":56}}]},{"type":"Image","props":{"y":20,"x":47,"width":56,"var":"offline","skin":"gameCommon/duanxian.png","height":56}},{"type":"Image","props":{"y":65,"x":46,"width":58,"var":"mingpaiPic","skin":"gameCommon/tingpai.png","height":10}},{"type":"Image","props":{"y":49,"x":9,"var":"gangEff","skin":"gameCommon/star0001.png"}},{"type":"Label","props":{"y":36,"x":46,"wordWrap":false,"width":56,"visible":true,"var":"readyImg","valign":"middle","text":"准备","strokeColor":"#381e07","stroke":2,"overflow":"hidden","height":30,"fontSize":22,"font":"SimHei","color":"#efef37","bold":true,"align":"center"}},{"type":"Label","props":{"y":82,"x":95,"width":34,"var":"fenshuTf","text":"+55","stroke":3,"height":20,"fontSize":20,"font":"SimHei","color":"#00ff00","bold":true,"align":"center"}},{"type":"Image","props":{"y":13,"x":85,"width":25,"var":"zhuangImg","skin":"gameCommon/zhuang.png","height":25}},{"type":"Label","props":{"y":-5,"x":42,"wordWrap":false,"width":66,"visible":true,"var":"nameTf","valign":"middle","text":"玩家名字对对对","overflow":"scroll","height":24,"fontSize":16,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":22,"x":-38,"width":82,"visible":false,"var":"piaoImg","skin":"gameCommon/piao0.png","height":47}},{"type":"Image","props":{"y":4,"x":8,"width":28,"visible":false,"var":"playingPiaoImg","skin":"gameCommon/piao0.png","height":16}},{"type":"Label","props":{"y":27,"x":-180,"width":215,"visible":false,"var":"notPiaoTf","text":"选择加漂中","overflow":"hidden","height":39,"fontSize":30,"font":"SimHei","color":"#027f2f","bold":true,"align":"right"}},{"type":"Label","props":{"y":22,"x":39,"wordWrap":false,"width":87,"visible":true,"var":"chairPos","valign":"middle","text":"座位号：0","overflow":"hidden","height":28,"fontSize":18,"font":"SimHei","color":"#ff0400","align":"center"}},{"type":"Box","props":{"y":106,"x":46,"var":"zhenghuaBox"},"child":[{"type":"Label","props":{"y":7,"x":22,"wordWrap":false,"width":69,"visible":true,"var":"huaTf_z","valign":"top","text":"x 5","overflow":"hidden","height":25,"fontSize":18,"font":"微软雅黑","color":"#f4d65e","bold":true,"align":"left"}},{"type":"Image","props":{"y":1,"x":-2,"width":27,"var":"huaZhenhua","skin":"gameCommon/flowerJust.png","height":27}},{"type":"Image","props":{"y":1,"x":-3,"width":27,"var":"huaYehua","skin":"gameCommon/flowerWild.png","height":27}}]},{"type":"Box","props":{"y":132,"x":47,"width":95,"var":"yehuaBox","height":27},"child":[{"type":"Label","props":{"y":5,"x":20,"wordWrap":false,"width":87,"visible":true,"var":"huaTf_y","valign":"top","text":"x 4","overflow":"hidden","height":25,"fontSize":18,"font":"微软雅黑","color":"#f4d65e","bold":true,"align":"left"}},{"type":"Image","props":{"y":0,"x":-4,"width":27,"skin":"gameCommon/flowerWild.png","height":27}}]},{"type":"Image","props":{"y":30,"x":-71,"visible":false,"var":"readyImg111","skin":"gameCommon/ready.png"}},{"type":"Image","props":{"y":33,"x":46,"width":57,"var":"offLineSp","skin":"common/heixedi.png","height":32,"alpha":0.4}},{"type":"Label","props":{"y":31,"x":42,"wordWrap":false,"width":64,"visible":true,"var":"offlineTf","valign":"middle","text":"180","strokeColor":"#000000","stroke":5,"height":37,"fontSize":35,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":31,"x":43,"var":"tirenBtn","stateNum":1,"skin":"gameCommon/tiren.png","labelSize":26,"labelPadding":"0","labelFont":"SimHei","labelColors":"#eeeeee,#eeeeee,#eeeeee","labelBold":false,"labelAlign":"center"}},{"type":"Label","props":{"y":81,"x":37,"width":68,"visible":true,"var":"recordTf","text":"-1000","height":19,"fontSize":22,"font":"SimHei","color":"#fadc00","align":"center"}},{"type":"Image","props":{"y":10,"x":17,"visible":false,"var":"shenfenImg","skin":"gameCommon/nongming.png","scaleY":0.7,"scaleX":0.7}},{"type":"VoiceShow","props":{"y":24,"x":-24,"visible":true,"var":"voice","scaleY":0.8,"scaleX":0.8,"runtime":"ui.gameCommon.VoiceShowUI"}},{"type":"Image","props":{"y":14,"x":79,"var":"jiabeiImg","skin":"gameCommon/jiabei.png","scaleY":0.3,"scaleX":0.3}},{"type":"Image","props":{"y":48,"x":-9,"width":136,"visible":true,"var":"express","skin":"faceexpress/face01.png","height":138}}]},{"type":"Button","props":{"y":-6,"x":-1,"width":80,"var":"sitdownBtn","stateNum":1,"skin":"gameCommon/zuoxia.png","labelSize":28,"labelFont":"SimHei","labelColors":"#ffffff,#ffffff,#ffffff","height":80}}]};
		override protected function createChildren():void {
			View.regComponent("ui.gameCommon.VoiceShowUI",VoiceShowUI);
			super.createChildren();
			createView(uiView);

		}

	}
}