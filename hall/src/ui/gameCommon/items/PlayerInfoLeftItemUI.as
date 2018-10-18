/**Created by the LayaAirIDE,do not modify.*/
package ui.gameCommon.items {
	import laya.ui.*;
	import laya.display.*; 
	import ui.gameCommon.VoiceShowUI;

	public class PlayerInfoLeftItemUI extends View {
		public var haveBox:Box;
		public var headImg:Image;
		public var mingpaiPic:Image;
		public var gangEff:Image;
		public var fenshuTf:Label;
		public var readyImg:Label;
		public var voice:VoiceShowUI;
		public var express:Image;
		public var offline:Image;
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
		public var offLineSp:Image;
		public var offlineTf:Label;
		public var recordTf:Label;
		public var nameTf:Label;
		public var zhuangImg:Image;
		public var tirenBtn:Button;
		public var shenfenImg:Image;
		public var jiabeiImg:Image;
		public var sitdownBtn:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"visible":false},"child":[{"type":"Box","props":{"y":-78,"x":-30,"visible":"false","var":"haveBox","mouseThrough":true},"child":[{"type":"Image","props":{"y":153,"x":33,"width":111,"skin":"gameCommon/img_jinbi-di.png","sizeGrid":"0,36,0,41","scaleY":0.7,"scaleX":0.7,"height":41}},{"type":"Image","props":{"y":91,"x":39,"width":60,"skin":"gameCommon/img_wanjiatouxiang-di.png","sizeGrid":"16,16,19,16","height":60}},{"type":"Box","props":{"y":93,"x":41},"child":[{"type":"Image","props":{"width":56,"var":"headImg","skin":"common/morentouxiang.png","height":56}},{"type":"Image","props":{"width":56,"skin":"gameCommon/img_wanjiatouxiang-di.png","renderType":"mask","height":56}}]},{"type":"Image","props":{"y":140,"x":41,"width":58,"var":"mingpaiPic","skin":"gameCommon/tingpai.png","height":10}},{"type":"Image","props":{"y":125,"x":4,"var":"gangEff","skin":"gameCommon/star0001.png"}},{"type":"Label","props":{"y":157,"x":89,"width":34,"var":"fenshuTf","text":"+55","stroke":3,"height":20,"fontSize":20,"font":"SimHei","color":"#00ff00","bold":true,"align":"center"}},{"type":"Label","props":{"y":110,"x":41,"wordWrap":false,"width":56,"visible":true,"var":"readyImg","valign":"middle","text":"准备","strokeColor":"#381e07","stroke":2,"overflow":"hidden","height":30,"fontSize":22,"font":"SimHei","color":"#efef37","bold":true,"align":"center"}},{"type":"VoiceShow","props":{"y":99,"x":171,"visible":true,"var":"voice","scaleY":0.8,"scaleX":-0.8,"runtime":"ui.gameCommon.VoiceShowUI"}},{"type":"Image","props":{"y":122,"x":116,"width":136,"visible":true,"var":"express","skin":"faceexpress/face01.png","sizeGrid":"0,0,0,0","mouseEnabled":false,"height":138}},{"type":"Image","props":{"y":94,"x":41,"width":56,"var":"offline","skin":"gameCommon/duanxian.png","height":56}},{"type":"Box","props":{"y":71,"x":-18},"child":[{"type":"Image","props":{"y":9,"x":198,"visible":false,"skin":"gameCommon/ready.png","mouseEnabled":false}},{"type":"Image","props":{"y":14,"x":37,"width":77,"visible":false,"var":"piaoImg","skin":"gameCommon/piao0.png","mouseEnabled":false,"height":44}},{"type":"Image","props":{"y":100,"x":31,"width":33,"visible":false,"var":"playingPiaoImg","skin":"gameCommon/piao0.png","height":19}},{"type":"Label","props":{"y":32,"x":36,"width":215,"visible":false,"var":"notPiaoTf","text":"选择加漂中","overflow":"hidden","mouseEnabled":false,"height":39,"fontSize":30,"font":"SimHei","color":"#027f2f","bold":true,"align":"left"}},{"type":"Label","props":{"y":49,"x":60,"wordWrap":false,"width":87,"visible":true,"var":"chairPos","valign":"middle","text":"座位号：0","overflow":"hidden","height":28,"fontSize":18,"font":"SimHei","color":"#ff0400","align":"center"}}]},{"type":"Box","props":{"y":182,"x":42,"width":84,"var":"zhenghuaBox","height":26},"child":[{"type":"Label","props":{"y":4,"x":25,"wordWrap":false,"width":92,"visible":true,"var":"huaTf_z","valign":"top","text":"x 9","height":25,"fontSize":18,"color":"#f4d65e","bold":true,"align":"left"}},{"type":"Image","props":{"y":-1,"x":-2,"width":27,"var":"huaZhenhua","skin":"gameCommon/flowerJust.png","height":27}},{"type":"Image","props":{"y":-1,"x":-4,"width":27,"var":"huaYehua","skin":"gameCommon/flowerWild.png","height":27}}]},{"type":"Box","props":{"y":207,"x":39,"width":90,"var":"yehuaBox","height":27},"child":[{"type":"Label","props":{"y":5,"x":28,"wordWrap":false,"width":87,"visible":true,"var":"huaTf_y","valign":"top","text":"x 6","overflow":"hidden","height":25,"fontSize":18,"color":"#f4d65e","bold":true,"align":"left"}},{"type":"Image","props":{"width":27,"skin":"gameCommon/flowerWild.png","height":27}}]},{"type":"Image","props":{"y":107,"x":41,"width":58,"var":"offLineSp","skin":"common/heixedi.png","height":31,"alpha":0.4}},{"type":"Label","props":{"y":106,"x":34,"wordWrap":false,"width":70,"visible":true,"var":"offlineTf","valign":"middle","text":"180","strokeColor":"#000000","stroke":5,"overflow":"visible","height":36,"fontSize":35,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":155,"x":37,"width":68,"visible":true,"var":"recordTf","text":"-1000","height":19,"fontSize":22,"font":"SimHei","color":"#fadc00","align":"center"}},{"type":"Label","props":{"y":69,"x":36,"wordWrap":false,"width":66,"visible":true,"var":"nameTf","valign":"middle","text":"玩家名字","overflow":"scroll","height":24,"fontSize":16,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":87.00000000000004,"x":78.99999999999999,"width":25,"var":"zhuangImg","skin":"gameCommon/zhuang.png","height":25}},{"type":"Button","props":{"y":104.00000000000001,"x":35.999999999999964,"var":"tirenBtn","stateNum":1,"skin":"gameCommon/tiren.png","labelSize":26,"labelPadding":"0","labelFont":"SimHei","labelColors":"#eeeeee,#eeeeee,#eeeeee","labelBold":false,"labelAlign":"center"}},{"type":"Image","props":{"y":82,"x":13,"visible":false,"var":"shenfenImg","skin":"gameCommon/dizhu.png","scaleY":0.7,"scaleX":0.7}},{"type":"Image","props":{"y":88,"x":73,"var":"jiabeiImg","skin":"gameCommon/jiabei.png","scaleY":0.3,"scaleX":0.3}}]},{"type":"Button","props":{"y":-2,"x":0,"width":80,"var":"sitdownBtn","stateNum":1,"skin":"gameCommon/zuoxia.png","labelSize":28,"labelFont":"SimHei","labelColors":"#ffffff,#ffffff,#ffffff","height":80}}]};
		override protected function createChildren():void {
			View.regComponent("ui.gameCommon.VoiceShowUI",VoiceShowUI);
			super.createChildren();
			createView(uiView);

		}

	}
}