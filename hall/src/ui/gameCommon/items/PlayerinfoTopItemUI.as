/**Created by the LayaAirIDE,do not modify.*/
package ui.gameCommon.items {
	import laya.ui.*;
	import laya.display.*; 
	import ui.gameCommon.VoiceShowUI;

	public class PlayerinfoTopItemUI extends View {
		public var haveBox:Box;
		public var headImg:Image;
		public var mingpaiPic:Image;
		public var offline:Image;
		public var gangEff:Image;
		public var fenshuTf:Label;
		public var readyImg:Label;
		public var express:Image;
		public var voice:VoiceShowUI;
		public var readyImg5555:Image;
		public var piaoImg:Image;
		public var playingPiaoImg:Image;
		public var notPiaoTf:Label;
		public var chairPos:Label;
		public var offLineSp:Image;
		public var offlineTf:Label;
		public var zhenghuaBox:Box;
		public var huaTf_z:Label;
		public var huaZhenhua:Image;
		public var huaYehua:Image;
		public var yehuaBox:Box;
		public var huaTf_y:Label;
		public var recordTf:Label;
		public var nameTf:Label;
		public var zhuangImg:Image;
		public var tirenBtn:Button;
		public var shenfenImg:Image;
		public var jiabeiImg:Image;
		public var sitdownBtn:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"Box","props":{"y":-200,"x":41,"var":"haveBox"},"child":[{"type":"Image","props":{"y":242,"x":93,"width":60,"skin":"gameCommon/img_wanjiatouxiang-di.png","sizeGrid":"16,16,19,16","height":60}},{"type":"Box","props":{"y":244,"x":95},"child":[{"type":"Image","props":{"width":56,"var":"headImg","skin":"common/morentouxiang.png","height":56}},{"type":"Image","props":{"width":56,"skin":"gameCommon/img_wanjiatouxiang-di.png","renderType":"mask","height":56}}]},{"type":"Image","props":{"y":304,"x":81,"width":111,"skin":"gameCommon/img_jinbi-di.png","sizeGrid":"0,34,0,34","scaleY":0.7,"scaleX":0.7,"height":39}},{"type":"Image","props":{"y":291,"x":94,"width":58,"var":"mingpaiPic","skin":"gameCommon/tingpai.png","height":10}},{"type":"Image","props":{"y":245,"x":95,"width":56,"var":"offline","skin":"gameCommon/duanxian.png","height":56}},{"type":"Image","props":{"y":275,"x":58,"var":"gangEff","skin":"gameCommon/star0001.png"}},{"type":"Label","props":{"y":307,"x":141,"width":34,"var":"fenshuTf","text":"+55","stroke":3,"height":20,"fontSize":20,"font":"SimHei","color":"#00ff00","bold":true,"align":"center"}},{"type":"Label","props":{"y":262,"x":95,"wordWrap":false,"width":56,"visible":true,"var":"readyImg","valign":"middle","text":"准备","strokeColor":"#381e07","stroke":2,"overflow":"hidden","height":30,"fontSize":22,"font":"SimHei","color":"#efef37","bold":true,"align":"center"}},{"type":"Image","props":{"y":273,"x":171,"width":136,"visible":true,"var":"express","skin":"faceexpress/face01.png","height":138}},{"type":"VoiceShow","props":{"y":251,"x":226,"visible":true,"var":"voice","scaleY":0.8,"scaleX":-0.8,"runtime":"ui.gameCommon.VoiceShowUI"}},{"type":"Box","props":{"y":160,"x":36},"child":[{"type":"Image","props":{"y":139,"x":37,"visible":false,"var":"readyImg5555","skin":"gameCommon/ready.png"}},{"type":"Image","props":{"x":50,"width":86,"visible":false,"var":"piaoImg","skin":"gameCommon/piao0.png","height":49}},{"type":"Image","props":{"y":114,"x":11,"width":37,"visible":false,"var":"playingPiaoImg","skin":"gameCommon/piao0.png","height":21}},{"type":"Label","props":{"y":78,"x":39,"width":198,"visible":false,"var":"notPiaoTf","text":"选择加漂中","overflow":"hidden","height":39,"fontSize":30,"font":"SimHei","color":"#027f2f","bold":true,"align":"left"}},{"type":"Label","props":{"y":107,"x":73,"wordWrap":false,"width":87,"visible":true,"var":"chairPos","valign":"middle","text":"座位号：0","overflow":"hidden","height":28,"fontSize":18,"font":"SimHei","color":"#ff0400","align":"center"}},{"type":"Image","props":{"y":96,"x":59,"width":57,"var":"offLineSp","skin":"common/heixedi.png","height":32,"alpha":0.4}},{"type":"Label","props":{"y":89,"x":52,"wordWrap":false,"width":67,"visible":true,"var":"offlineTf","valign":"middle","text":"180","strokeColor":"#000000","stroke":5,"height":44,"fontSize":35,"font":"SimHei","color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":335,"x":97,"width":65,"var":"zhenghuaBox","height":27},"child":[{"type":"Label","props":{"y":6,"x":26,"wordWrap":false,"width":87,"visible":true,"var":"huaTf_z","valign":"top","text":"x 9","overflow":"hidden","height":25,"fontSize":18,"font":"微软雅黑","color":"#f4d65e","bold":true,"align":"left"}},{"type":"Image","props":{"y":0,"x":-2,"width":27,"var":"huaZhenhua","skin":"gameCommon/flowerJust.png","height":27}},{"type":"Image","props":{"y":0,"x":-4,"width":27,"var":"huaYehua","skin":"gameCommon/flowerWild.png","height":27}}]},{"type":"Box","props":{"y":334,"x":155,"width":87,"var":"yehuaBox","height":27},"child":[{"type":"Label","props":{"y":7,"x":28,"wordWrap":false,"width":55,"visible":true,"var":"huaTf_y","valign":"top","text":"x 6","overflow":"hidden","height":25,"fontSize":18,"font":"微软雅黑","color":"#f4d65e","bold":true,"align":"left"}},{"type":"Image","props":{"width":27,"skin":"gameCommon/flowerWild.png","height":27}}]},{"type":"Label","props":{"y":306,"x":86,"width":68,"visible":true,"var":"recordTf","text":"-1000","height":19,"fontSize":22,"font":"SimHei","color":"#fadc00","align":"center"}},{"type":"Label","props":{"y":218,"x":91,"wordWrap":false,"width":65,"visible":true,"var":"nameTf","valign":"middle","text":"玩家名字对对对","overflow":"scroll","height":24,"fontSize":16,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":238,"x":132.99999999999994,"width":25,"var":"zhuangImg","skin":"gameCommon/zhuang.png","height":25}},{"type":"Button","props":{"y":255,"x":92,"var":"tirenBtn","stateNum":1,"skin":"gameCommon/tiren.png","labelSize":26,"labelPadding":"0","labelFont":"SimHei","labelColors":"#eeeeee,#eeeeee,#eeeeee","labelBold":false,"labelAlign":"center"}},{"type":"Image","props":{"y":232,"x":68,"visible":false,"var":"shenfenImg","skin":"gameCommon/nongming.png","scaleY":0.7,"scaleX":0.7}},{"type":"Image","props":{"y":238,"x":129,"visible":false,"var":"jiabeiImg","skin":"gameCommon/jiabei.png","scaleY":0.3,"scaleX":0.3}}]},{"type":"Button","props":{"y":25,"x":124,"width":80,"var":"sitdownBtn","stateNum":1,"skin":"gameCommon/zuoxia.png","labelSize":28,"labelFont":"SimHei","labelColors":"#ffffff,#ffffff,#ffffff","label":"  ","height":80}}]};
		override protected function createChildren():void {
			View.regComponent("ui.gameCommon.VoiceShowUI",VoiceShowUI);
			super.createChildren();
			createView(uiView);

		}

	}
}