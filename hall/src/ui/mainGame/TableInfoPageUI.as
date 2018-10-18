/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame {
	import laya.ui.*;
	import laya.display.*; 

	public class TableInfoPageUI extends View {
		public var scoreList:Button;
		public var option:Button;
		public var roomNumTf:Label;
		public var difenTf:Label;
		public var leftTf:Label;
		public var fengquanTf:Label;
		public var infoListBtn:Button;
		public var chatBtn:Button;
		public var infoSImg:Image;
		public var voiceTip:Box;
		public var _time:Label;
		public var voiceIntercomBtn:Box;
		public var voicePlay:Image;
		public var voiceDis:Image;
		public var weikaishiBox:Box;
		public var ruleTimeTf:Label;
		public var kaijuTf:Label;
		public var leftDissolveTf:Label;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1038,"height":640},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1038,"skin":"common/gameTop.png","sizeGrid":"0,36,0,34","height":46}},{"type":"Button","props":{"y":2,"x":846,"var":"scoreList","stateNum":1,"skin":"common/xinxiliebiaoBtn.png"},"child":[{"type":"Image","props":{"y":-1,"x":-12,"width":103,"skin":"common/xinxiliebiaoBtn.png","height":101,"alpha":0}}]},{"type":"Button","props":{"y":-2,"x":25,"var":"option","stateNum":1,"skin":"gameCommon/Option/function_Option.png"},"child":[{"type":"Button","props":{"y":-34,"x":-32,"width":131,"stateNum":1,"skin":"gameCommon/Option/function_Option.png","height":135,"alpha":0}}]},{"type":"Box","props":{"y":3,"x":295},"child":[{"type":"Label","props":{"width":64,"visible":true,"text":"房号：","height":28,"fontSize":26,"font":"SimHei","color":"#00edc2","bold":true}},{"type":"Label","props":{"x":183,"wordWrap":true,"width":83,"visible":true,"valign":"middle","text":"底分：","height":27,"fontSize":26,"font":"SimHei","color":"#00edc2","bold":true,"align":"left"}},{"type":"Label","props":{"x":69,"width":88,"visible":true,"var":"roomNumTf","text":"123456","height":26,"fontSize":26,"font":"SimHei","color":"#ffc757","bold":true}},{"type":"Label","props":{"x":252,"wordWrap":true,"width":46,"visible":true,"var":"difenTf","text":10,"height":25,"fontSize":26,"font":"SimHei","color":"#ffc757","bold":true,"align":"left"}},{"type":"Label","props":{"y":2,"x":399,"width":119,"visible":true,"var":"leftTf","text":"00:00:00","height":25,"fontSize":26,"font":"SimHei","color":"#ffc757","bold":true,"align":"right"}},{"type":"Label","props":{"x":305,"width":85,"visible":true,"var":"fengquanTf","valign":"middle","text":"东风圈","height":27,"fontSize":26,"font":"SimHei","color":"#ffc757","bold":true,"align":"center"}}]},{"type":"Button","props":{"y":2,"x":937,"var":"infoListBtn","stateNum":1,"skin":"gameCommon/btnHorn.png"},"child":[{"type":"Button","props":{"y":11,"x":-4,"width":85,"stateNum":1,"skin":"gameCommon/btnHorn.png","height":82,"alpha":0}}]},{"type":"Button","props":{"y":313,"x":954,"visible":true,"var":"chatBtn","stateNum":1,"skin":"gameCommon/liaotiananniuBtn.png","mouseThrough":true}},{"type":"Image","props":{"y":9,"x":985,"width":24,"var":"infoSImg","skin":"common/xiaohongdian.png","scaleY":1.2,"scaleX":1.2,"height":24}},{"type":"Box","props":{"y":307,"x":949,"mouseThrough":true},"child":[{"type":"Box","props":{"y":-8,"x":-2,"visible":false,"var":"voiceTip","mouseThrough":true},"child":[{"type":"Image","props":{"y":0,"x":0,"width":91,"skin":"gameCommon/voice/voiceTip.png","sizeGrid":"6,5,19,8","mouseEnabled":false,"height":115}},{"type":"Label","props":{"y":14,"x":6,"width":78,"text":"点击发送","height":20,"fontSize":20,"font":"SimHei","color":"#fbfbfb","align":"center"}},{"type":"Label","props":{"y":41,"x":6,"width":79,"text":"上滑取消","height":20,"fontSize":20,"font":"SimHei","color":"#fbfbfb","align":"center"}},{"type":"Label","props":{"y":69,"x":6,"width":79,"var":"_time","text":"15'","height":20,"fontSize":20,"font":"SimHei","color":"#fbfbfb","align":"center"}}]},{"type":"Box","props":{"y":105.5,"x":6.5,"width":74,"var":"voiceIntercomBtn","height":73},"child":[{"type":"Button","props":{"y":4,"x":-1,"stateNum":1,"skin":"gameCommon/voice/voiceBg.png","pivotY":0.5,"pivotX":0.5}},{"type":"Image","props":{"y":33,"x":29,"visible":false,"var":"voicePlay","skin":"gameCommon/voice/voicePlay.png","rotation":0,"mouseThrough":false,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":14,"x":17,"skin":"gameCommon/voice/voice.png"}},{"type":"Image","props":{"y":4,"x":-1,"visible":false,"var":"voiceDis","skin":"gameCommon/voice/voiceDis.png","disabled":true}}]}]},{"type":"Box","props":{"y":409,"x":381,"width":271,"var":"weikaishiBox","height":135},"child":[{"type":"Image","props":{"y":0,"x":73.5,"skin":"gameCommon/dengdaikaiju.png"}},{"type":"Label","props":{"y":74,"x":0,"width":278,"visible":true,"var":"ruleTimeTf","valign":"middle","text":"本局时长：15分钟","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}},{"type":"Label","props":{"y":40,"x":0,"width":278,"visible":true,"var":"kaijuTf","valign":"middle","text":"开局人：小嘟嘟呀呀","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}},{"type":"Box","props":{"y":108,"x":0,"width":313,"height":27},"child":[{"type":"Label","props":{"y":0,"x":48,"width":262,"visible":true,"valign":"middle","text":"后未开局将解散","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}},{"type":"Label","props":{"y":0,"x":0,"width":96,"visible":true,"var":"leftDissolveTf","valign":"middle","text":"00:00 ","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}}]}]}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}