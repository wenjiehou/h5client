/**Created by the LayaAirIDE,do not modify.*/
package ui.sddzGame {
	import laya.ui.*;
	import laya.display.*; 

	public class TableInfoPageUI extends View {
		public var roomNumTf:Label;
		public var roundCountTf:Label;
		public var difenTf:Label;
		public var beishuTf:Label;
		public var weikaishiBox:Box;
		public var ruleTimeTf:Label;
		public var kaijuTf:Label;
		public var leftDissolveTf:Label;
		public var option:Button;
		public var scoreList:Button;
		public var infoListBtn:Button;
		public var infoSImg:Image;
		public var chatBtn:Button;
		public var voiceTip:Box;
		public var _time:Label;
		public var voiceIntercomBtn:Box;
		public var voicePlay:Image;
		public var voiceDis:Image;
		public var helpBtn:Button;
		public var setBtn:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":640,"height":1038},"child":[{"type":"Image","props":{"y":0,"x":5,"width":630,"skin":"common/gameTop.png","sizeGrid":"0,20,19,21","height":67}},{"type":"Box","props":{"y":17,"x":123},"child":[{"type":"Label","props":{"y":0,"x":0,"visible":true,"text":"房号：","height":28,"fontSize":26,"font":"SimHei","color":"#00edc2","bold":true}},{"type":"Label","props":{"y":0,"x":81,"width":118,"visible":true,"var":"roomNumTf","text":"123456","height":26,"fontSize":26,"font":"SimHei","color":"#fff862","bold":true}},{"type":"Label","props":{"y":0,"x":255,"wordWrap":false,"width":138,"visible":true,"var":"roundCountTf","valign":"middle","text":"1/6","height":27,"fontSize":26,"font":"SimHei","color":"#fff862","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":255,"wordWrap":false,"visible":true,"valign":"middle","text":"第","height":27,"fontSize":26,"font":"SimHei","color":"#00edc2","bold":true,"align":"left"}},{"type":"Label","props":{"y":0,"x":362,"wordWrap":false,"visible":true,"valign":"middle","text":"局","height":27,"fontSize":26,"font":"SimHei","color":"#00edc2","bold":true,"align":"left"}}]},{"type":"Box","props":{"y":83,"x":171},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"visible":true,"valign":"middle","text":"底分：","height":27,"fontSize":30,"font":"SimHei","color":"#00edc2","bold":true,"align":"left"}},{"type":"Label","props":{"y":0,"x":66,"wordWrap":true,"width":46,"visible":true,"var":"difenTf","text":"0","height":25,"fontSize":30,"font":"SimHei","color":"#fff862","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":192,"wordWrap":true,"visible":true,"valign":"middle","text":"倍数：","height":27,"fontSize":30,"font":"SimHei","color":"#00edc2","bold":true,"align":"left"}},{"type":"Label","props":{"y":0,"x":258,"wordWrap":true,"width":46,"visible":true,"var":"beishuTf","text":"1","height":25,"fontSize":30,"font":"SimHei","color":"#fff862","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":669,"x":187.5,"width":271,"var":"weikaishiBox","height":135},"child":[{"type":"Image","props":{"y":0,"x":73.5,"skin":"gameCommon/dengdaikaiju.png"}},{"type":"Label","props":{"y":74,"x":0,"width":278,"visible":true,"var":"ruleTimeTf","valign":"middle","text":"本局时长：15分钟","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}},{"type":"Label","props":{"y":40,"x":0,"width":278,"visible":true,"var":"kaijuTf","valign":"middle","text":"开局人：小嘟嘟呀呀","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}},{"type":"Box","props":{"y":108,"x":0,"width":313,"height":27},"child":[{"type":"Label","props":{"y":0,"x":48,"width":262,"visible":true,"valign":"middle","text":"后未开局将解散","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}},{"type":"Label","props":{"y":0,"x":0,"width":96,"visible":true,"var":"leftDissolveTf","valign":"middle","text":"00:00 ","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}}]}]},{"type":"Button","props":{"y":6,"x":17,"visible":false,"var":"option","stateNum":1,"skin":"gameCommon/Option/function_Option.png","mouseThrough":true},"child":[{"type":"Button","props":{"y":-34,"x":-32,"width":131,"stateNum":1,"skin":"gameCommon/Option/function_Option.png","height":135,"alpha":0}}]},{"type":"Button","props":{"y":973,"x":370,"visible":false,"var":"scoreList","stateNum":1,"skin":"common/xinxiliebiaoBtn.png"},"child":[{"type":"Image","props":{"y":-1,"x":-12,"width":103,"skin":"common/xinxiliebiaoBtn.png","height":101,"alpha":0}}]},{"type":"Box","props":{"y":5,"x":544,"visible":false,"mouseThrough":true},"child":[{"type":"Button","props":{"x":4,"var":"infoListBtn","stateNum":1,"skin":"gameCommon/btnHorn.png"},"child":[{"type":"Button","props":{"y":11,"x":-4,"width":85,"stateNum":1,"skin":"gameCommon/btnHorn.png","height":82,"alpha":0}}]},{"type":"Image","props":{"y":0,"x":41,"var":"infoSImg","skin":"common/xiaohongdian.png","scaleY":1.2,"scaleX":1.2}}]},{"type":"Button","props":{"y":948,"x":550,"visible":true,"var":"chatBtn","stateNum":1,"skin":"gameCommon/liaotiananniuBtn.png"}},{"type":"Box","props":{"y":839,"x":443,"mouseThrough":true},"child":[{"type":"Box","props":{"y":-8,"x":-11,"visible":false,"var":"voiceTip","mouseThrough":true},"child":[{"type":"Image","props":{"y":0,"x":0,"width":91,"skin":"gameCommon/voice/voiceTip.png","sizeGrid":"6,5,19,8","mouseEnabled":false,"height":115}},{"type":"Label","props":{"y":14,"x":6,"width":78,"text":"点击发送","height":20,"fontSize":20,"font":"SimHei","color":"#fbfbfb","align":"center"}},{"type":"Label","props":{"y":41,"x":6,"width":79,"text":"上滑取消","height":20,"fontSize":20,"font":"SimHei","color":"#fbfbfb","align":"center"}},{"type":"Label","props":{"y":69,"x":6,"width":79,"var":"_time","text":"15'","height":20,"fontSize":20,"font":"SimHei","color":"#fbfbfb","align":"center"}}]},{"type":"Box","props":{"y":105.5,"x":6.5,"var":"voiceIntercomBtn"},"child":[{"type":"Button","props":{"y":4,"x":-1,"stateNum":1,"skin":"gameCommon/voice/voiceBg.png","pivotY":0.5,"pivotX":0.5}},{"type":"Image","props":{"y":33.5,"x":29,"visible":false,"var":"voicePlay","skin":"gameCommon/voice/voicePlay.png","rotation":0,"mouseThrough":false,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":14,"x":17,"skin":"gameCommon/voice/voice.png"}},{"type":"Image","props":{"y":4,"x":-1,"visible":false,"var":"voiceDis","skin":"gameCommon/voice/voiceDis.png","disabled":true}}]}]},{"type":"Button","props":{"y":8,"x":572,"width":50,"var":"helpBtn","labelSize":50,"labelPadding":"0,0,0,9","labelColors":"#ffffff,#ffffff,#ffffff","height":50},"child":[{"type":"Image","props":{"y":0,"x":0,"width":50,"skin":"gameCommon/img_jinbi-di.png","sizeGrid":"18,20,19,19","height":50}},{"type":"Label","props":{"y":1,"x":15,"visible":true,"valign":"middle","text":"?","fontSize":40,"font":"SimHei","color":"#ffffff","align":"center"}}]},{"type":"Button","props":{"y":4,"x":17,"width":55,"var":"setBtn","stateNum":1,"skin":"gameCommon/set.png","height":55}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}