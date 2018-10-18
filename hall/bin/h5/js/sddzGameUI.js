
(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var Animation=laya.display.Animation,Box=laya.ui.Box,Button=laya.ui.Button,Image=laya.ui.Image,Label=laya.ui.Label;
	var PiaoSelePartUI=ui.gameCommon.PiaoSelePartUI,PlayerInfoBaseItemUI=ui.gameCommon.items.PlayerInfoBaseItemUI;
	var PlayerInfoLeftItemUI=ui.gameCommon.items.PlayerInfoLeftItemUI,PopChatItemUI=ui.gameCommon.shortCutChat.PopChatItemUI;
	var VReplayControllerUI=ui.gameCommon.VReplayControllerUI,View=laya.ui.View;
//class ui.sddzGame.calculate.CalcuateRoundPageUI extends laya.ui.View
var CalcuateRoundPageUI=(function(_super){
	function CalcuateRoundPageUI(){
		CalcuateRoundPageUI.__super.call(this);;
	}

	__class(CalcuateRoundPageUI,'ui.sddzGame.calculate.CalcuateRoundPageUI',_super);
	var __proto=CalcuateRoundPageUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(CalcuateRoundPageUI.uiView);
	}

	CalcuateRoundPageUI.uiView={"type":"View","props":{"width":640,"height":1038}};
	return CalcuateRoundPageUI;
})(View)


//class ui.sddzGame.calculate.CalculatePerPageUI extends laya.ui.View
var CalculatePerPageUI=(function(_super){
	function CalculatePerPageUI(){
		this.hideBtn=null;
		this.confirmBtn=null;
		this.item0=null;
		this.item2=null;
		this.item1=null;
		this.readyBtn=null;
		this.readyImg=null;
		this.closeBtn=null;
		CalculatePerPageUI.__super.call(this);
	}

	__class(CalculatePerPageUI,'ui.sddzGame.calculate.CalculatePerPageUI',_super);
	var __proto=CalculatePerPageUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.sddzGame.calculate.item.CalculatePerItemUI",CalculatePerItemUI$1);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(CalculatePerPageUI.uiView);
	}

	CalculatePerPageUI.uiView={"type":"View","props":{"width":640,"height":1038},"child":[{"type":"Box","props":{"y":0,"x":0,"alpha":0.5},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":640,"lineWidth":1,"height":1038,"fillColor":"#000000"}}]},{"type":"Image","props":{"y":282,"x":27,"width":586,"skin":"common/gameBg.png","sizeGrid":"34,32,34,34","height":335}},{"type":"Button","props":{"y":532,"x":44,"width":180,"visible":true,"var":"hideBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#c5893b","labelStroke":5,"labelSize":38,"labelFont":"SimHei","labelColors":"#ffffff","labelAlign":"center","height":68,"sizeGrid":"0,29,0,27"},"child":[{"type":"Image","props":{"y":6,"x":45,"skin":"gameCommon/btnHide.png"}}]},{"type":"Button","props":{"y":532,"x":416,"width":180,"visible":false,"var":"confirmBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#c5893b","labelStroke":5,"labelSize":38,"labelFont":"SimHei","labelColors":"#ffffff","labelAlign":"center","height":68,"sizeGrid":"0,29,0,27"},"child":[{"type":"Image","props":{"y":6,"x":41,"skin":"common/btnConfirm.png"}}]},{"type":"Box","props":{"y":295,"x":78,"width":520,"height":38},"child":[{"type":"Label","props":{"y":0,"x":68,"wordWrap":false,"width":120,"valign":"middle","text":"昵称","height":38,"fontSize":32,"font":"SimHei","color":"#c7edfb","bold":true,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":0,"x":230,"wordWrap":false,"width":93,"valign":"middle","text":"底分","height":38,"fontSize":32,"font":"SimHei","color":"#c7edfb","bold":true,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"x":349,"wordWrap":false,"width":93,"valign":"middle","text":"倍数","height":38,"fontSize":32,"font":"SimHei","color":"#c7edfb","bold":true,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"x":468,"wordWrap":false,"width":93,"valign":"middle","text":"总分","height":38,"fontSize":32,"font":"SimHei","color":"#c7edfb","bold":true,"anchorY":0,"anchorX":0.5,"align":"center"}}]},{"type":"CalculatePerItem","props":{"y":342,"x":46,"width":550,"var":"item0","runtime":"ui.sddzGame.calculate.item.CalculatePerItemUI"}},{"type":"CalculatePerItem","props":{"y":453,"x":46,"width":550,"var":"item2","runtime":"ui.sddzGame.calculate.item.CalculatePerItemUI"}},{"type":"CalculatePerItem","props":{"y":398,"x":46,"width":550,"var":"item1","runtime":"ui.sddzGame.calculate.item.CalculatePerItemUI"}},{"type":"Box","props":{"y":532,"x":230},"child":[{"type":"Button","props":{"width":180,"var":"readyBtn","stateNum":1,"skin":"common/buttonHuang.png","height":68,"sizeGrid":"0,29,0,28"},"child":[{"type":"Image","props":{"y":6,"x":22,"var":"readyImg","skin":"gameCommon/nextPlay.png"}}]},{"type":"Button","props":{"width":180,"visible":false,"var":"closeBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#c5893b","labelStroke":5,"labelSize":38,"labelFont":"SimHei","labelColors":"#ffffff","labelAlign":"center","height":68,"sizeGrid":"0,29,0,28"},"child":[{"type":"Image","props":{"y":6,"x":46,"skin":"common/closs.png"}}]}]}]};
	return CalculatePerPageUI;
})(View)


//class ui.sddzGame.calculate.item.CalculatePerItemUI extends laya.ui.View
var CalculatePerItemUI$1=(function(_super){
	function CalculatePerItemUI(){
		this.nameTf=null;
		this.difenTf=null;
		this.beishuTf=null;
		this.zongfenTf=null;
		this.dizhuImg=null;
		this.chunImg=null;
		this.fanchunImg=null;
		CalculatePerItemUI.__super.call(this);
	}

	__class(CalculatePerItemUI,'ui.sddzGame.calculate.item.CalculatePerItemUI',_super,'CalculatePerItemUI$1');
	var __proto=CalculatePerItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(CalculatePerItemUI.uiView);
	}

	CalculatePerItemUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":0,"x":-3,"width":555,"skin":"common/wenzidi.png","sizeGrid":"13,14,11,14","height":57}},{"type":"Label","props":{"y":10,"x":96,"wordWrap":false,"width":115,"var":"nameTf","valign":"middle","text":"小嘟嘟01010101","overflow":"hidden","height":38,"fontSize":30,"font":"SimHei","color":"#c7edfb","bold":false,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":10,"x":263,"wordWrap":false,"width":93,"var":"difenTf","valign":"middle","text":"20","height":38,"fontSize":30,"font":"SimHei","color":"#c7edfb","bold":false,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":10,"x":383,"wordWrap":false,"width":93,"var":"beishuTf","valign":"middle","text":"10","height":38,"fontSize":30,"font":"SimHei","color":"#c7edfb","bold":false,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":29,"x":502,"wordWrap":false,"width":93,"var":"zongfenTf","valign":"middle","text":"-100","scaleY":0.7,"scaleX":0.7,"height":38,"fontSize":22,"font":"SimHei","color":"#c7edfb","bold":false,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":8,"x":9,"var":"dizhuImg","skin":"gameCommon/dizhu.png","scaleY":0.6,"scaleX":0.6}},{"type":"Image","props":{"y":17,"x":170,"var":"chunImg","skin":"gameCommon/chun.png","scaleY":0.3,"scaleX":0.3}},{"type":"Image","props":{"y":17,"x":156,"var":"fanchunImg","skin":"gameCommon/fanchun.png","scaleY":0.3,"scaleX":0.3}}]};
	return CalculatePerItemUI;
})(View)


//class ui.sddzGame.CalculatePageUI extends laya.ui.View
var CalculatePageUI=(function(_super){
	function CalculatePageUI(){
		this.perPage=null;
		this.roundPage=null;
		this.showBtn=null;
		CalculatePageUI.__super.call(this);
	}

	__class(CalculatePageUI,'ui.sddzGame.CalculatePageUI',_super);
	var __proto=CalculatePageUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.sddzGame.calculate.CalculatePerPageUI",CalculatePerPageUI);
		View.regComponent("ui.sddzGame.calculate.CalcuateRoundPageUI",CalcuateRoundPageUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(CalculatePageUI.uiView);
	}

	CalculatePageUI.uiView={"type":"View","props":{"width":640,"height":1038},"child":[{"type":"CalculatePerPage","props":{"var":"perPage","runtime":"ui.sddzGame.calculate.CalculatePerPageUI"}},{"type":"CalcuateRoundPage","props":{"var":"roundPage","runtime":"ui.sddzGame.calculate.CalcuateRoundPageUI"}},{"type":"Button","props":{"y":532,"x":43,"width":181,"var":"showBtn","stateNum":1,"skin":"common/buttonLv.png","height":68,"alpha":0.6,"sizeGrid":"0,29,0,27"},"child":[{"type":"Image","props":{"y":12,"x":51,"skin":"gameCommon/btnShow.png","label":"label"}}]}]};
	return CalculatePageUI;
})(View)


//class ui.sddzGame.ddzPart.ActTipUI extends laya.ui.View
var ActTipUI$1=(function(_super){
	function ActTipUI(){
		this.fen1=null;
		this.fen2=null;
		this.fen3=null;
		this.bujiao=null;
		this.buqiang=null;
		this.jiabei=null;
		this.jiaodizhu=null;
		this.qiangdizhu=null;
		this.buchu=null;
		this.bujiabei=null;
		ActTipUI.__super.call(this);
	}

	__class(ActTipUI,'ui.sddzGame.ddzPart.ActTipUI',_super,'ActTipUI$1');
	var __proto=ActTipUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(ActTipUI.uiView);
	}

	ActTipUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{},"child":[{"type":"Image","props":{"y":-0.5,"x":31.5,"var":"fen1","skin":"sddzGame/1fen.png"}},{"type":"Image","props":{"y":-0.5,"x":30.5,"var":"fen2","skin":"sddzGame/2fen.png"}},{"type":"Image","props":{"y":-0.5,"x":30.5,"var":"fen3","skin":"sddzGame/3fen.png"}},{"type":"Image","props":{"y":5.5,"x":25.5,"var":"bujiao","skin":"poker/bujiao.png"}},{"type":"Image","props":{"y":5.5,"x":24.5,"var":"buqiang","skin":"sddzGame/f_buqiang.png"}},{"type":"Image","props":{"y":4.5,"x":24.5,"var":"jiabei","skin":"gameCommon/jiabei.png"}},{"type":"Image","props":{"y":5.5,"x":0.5,"var":"jiaodizhu","skin":"sddzGame/jiaodizhu.png"}},{"type":"Image","props":{"y":5.5,"x":-0.5,"var":"qiangdizhu","skin":"sddzGame/qiangdizhu.png"}},{"type":"Image","props":{"y":4.5,"x":29.5,"var":"buchu","skin":"poker/buchu.png","scaleY":1.3,"scaleX":1.3}},{"type":"Image","props":{"y":4.5,"x":0,"var":"bujiabei","skin":"sddzGame/f_bujiabei.png"}}]}]};
	return ActTipUI;
})(View)


//class ui.sddzGame.ddzPart.ClockPartUI extends laya.ui.View
var ClockPartUI$1=(function(_super){
	function ClockPartUI(){
		this.cutdownTf=null;
		this.pos1=null;
		this.pos2=null;
		this.pos0=null;
		ClockPartUI.__super.call(this);
	}

	__class(ClockPartUI,'ui.sddzGame.ddzPart.ClockPartUI',_super,'ClockPartUI$1');
	var __proto=ClockPartUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(ClockPartUI.uiView);
	}

	ClockPartUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":0,"x":16,"width":114,"scaleY":0.7,"scaleX":0.7,"height":123},"child":[{"type":"Image","props":{"y":1,"x":4,"skin":"gameCommon/clock.png"}},{"type":"Label","props":{"y":32,"x":31.1923828125,"width":55.615234375,"var":"cutdownTf","valign":"middle","text":"09","strokeColor":"#000000","stroke":2,"height":50,"fontSize":40,"color":"#5a2e0f","align":"center"}}]},{"type":"Image","props":{"y":-42,"x":113,"var":"pos1","skin":"gameCommon/time-me.png","rotation":42}},{"type":"Image","props":{"y":-42,"x":1,"var":"pos2","skin":"gameCommon/time-me.png","scaleX":-1,"rotation":-42}},{"type":"Image","props":{"y":126,"x":73,"var":"pos0","skin":"gameCommon/time-me.png","rotation":180}}]};
	return ClockPartUI;
})(View)


//class ui.sddzGame.ddzPart.DipaiPartUI extends laya.ui.View
var DipaiPartUI=(function(_super){
	function DipaiPartUI(){
		this.card0=null;
		this.card1=null;
		this.card2=null;
		DipaiPartUI.__super.call(this);
	}

	__class(DipaiPartUI,'ui.sddzGame.ddzPart.DipaiPartUI',_super);
	var __proto=DipaiPartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.sddzGame.item.PockerItemUI",PockerItemUI$1);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(DipaiPartUI.uiView);
	}

	DipaiPartUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card0","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":120,"var":"card1","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":240,"var":"card2","runtime":"ui.sddzGame.item.PockerItemUI"}}]};
	return DipaiPartUI;
})(View)


//class ui.sddzGame.ddzPart.handlePart.OtherHandlePartUI extends laya.ui.View
var OtherHandlePartUI$1=(function(_super){
	function OtherHandlePartUI(){
		this.mingBox=null;
		this.card0=null;
		this.card1=null;
		this.card2=null;
		this.card3=null;
		this.card4=null;
		this.card5=null;
		this.card6=null;
		this.card7=null;
		this.card8=null;
		this.card9=null;
		this.card10=null;
		this.card11=null;
		this.card12=null;
		this.card13=null;
		this.card14=null;
		this.card15=null;
		this.card16=null;
		this.card17=null;
		this.card18=null;
		this.card19=null;
		this.backBox=null;
		this.card=null;
		this.numTxt=null;
		OtherHandlePartUI.__super.call(this);
	}

	__class(OtherHandlePartUI,'ui.sddzGame.ddzPart.handlePart.OtherHandlePartUI',_super,'OtherHandlePartUI$1');
	var __proto=OtherHandlePartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.sddzGame.item.PockerItemUI",PockerItemUI$1);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(OtherHandlePartUI.uiView);
	}

	OtherHandlePartUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":0,"x":-38,"var":"mingBox"},"child":[{"type":"PockerItem","props":{"var":"card0","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":39,"var":"card1","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":77,"var":"card2","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":51,"var":"card3","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":51,"x":39,"var":"card4","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":51,"x":77,"var":"card5","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":102,"var":"card6","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":102,"x":39,"var":"card7","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":102,"x":77,"var":"card8","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":153,"var":"card9","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":153,"x":39,"var":"card10","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":153,"x":77,"var":"card11","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":206,"var":"card12","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":206,"x":39,"var":"card13","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":206,"x":77,"var":"card14","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":257,"var":"card15","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":257,"x":39,"var":"card16","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":257,"x":77,"var":"card17","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":309,"var":"card18","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":309,"x":39,"var":"card19","runtime":"ui.sddzGame.item.PockerItemUI"}}]},{"type":"Box","props":{"y":0,"x":0,"var":"backBox"},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"Label","props":{"y":56,"x":32.1923828125,"width":55.615234375,"var":"numTxt","valign":"middle","text":17,"strokeColor":"#000000","stroke":2,"height":50,"fontSize":50,"color":"#f3f1ca","align":"center"}}]}]};
	return OtherHandlePartUI;
})(View)


//class ui.sddzGame.ddzPart.handlePart.OwnerHandlePartUI extends laya.ui.View
var OwnerHandlePartUI$1=(function(_super){
	function OwnerHandlePartUI(){
		this.box1=null;
		this.card0=null;
		this.card1=null;
		this.card2=null;
		this.card3=null;
		this.card4=null;
		this.card5=null;
		this.card6=null;
		this.card7=null;
		this.card8=null;
		this.card9=null;
		this.card10=null;
		this.card11=null;
		this.card12=null;
		this.card13=null;
		this.card14=null;
		this.card15=null;
		this.card16=null;
		this.card17=null;
		this.card18=null;
		this.card19=null;
		OwnerHandlePartUI.__super.call(this);
	}

	__class(OwnerHandlePartUI,'ui.sddzGame.ddzPart.handlePart.OwnerHandlePartUI',_super,'OwnerHandlePartUI$1');
	var __proto=OwnerHandlePartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.sddzGame.item.PockerItemUI",PockerItemUI$1);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(OwnerHandlePartUI.uiView);
	}

	OwnerHandlePartUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"box1","mouseThrough":true},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card0","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":55,"var":"card1","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":110,"var":"card2","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":165,"var":"card3","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":220,"var":"card4","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":275,"var":"card5","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":330,"var":"card6","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":385,"var":"card7","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":440,"var":"card8","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":495,"var":"card9","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":84,"x":0,"var":"card10","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":84,"x":55,"var":"card11","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":84,"x":110,"var":"card12","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":84,"x":165,"var":"card13","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":84,"x":220,"var":"card14","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":84,"x":275,"var":"card15","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":84,"x":330,"var":"card16","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":84,"x":385,"var":"card17","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":84,"x":440,"var":"card18","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":84,"x":495,"var":"card19","runtime":"ui.sddzGame.item.PockerItemUI"}}]}]};
	return OwnerHandlePartUI;
})(View)


//class ui.sddzGame.ddzPart.outputPart.OtherOutputPartUI extends laya.ui.View
var OtherOutputPartUI=(function(_super){
	function OtherOutputPartUI(){
		this.box0=null;
		this.card0=null;
		this.card1=null;
		this.card2=null;
		this.card3=null;
		this.card4=null;
		this.card5=null;
		this.card6=null;
		this.card7=null;
		this.card8=null;
		this.card9=null;
		this.card10=null;
		this.card11=null;
		this.box1=null;
		this.card12=null;
		this.card13=null;
		this.card14=null;
		this.card15=null;
		this.card16=null;
		this.card17=null;
		this.card18=null;
		this.card19=null;
		OtherOutputPartUI.__super.call(this);
	}

	__class(OtherOutputPartUI,'ui.sddzGame.ddzPart.outputPart.OtherOutputPartUI',_super);
	var __proto=OtherOutputPartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.sddzGame.item.PockerItemUI",PockerItemUI$1);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(OtherOutputPartUI.uiView);
	}

	OtherOutputPartUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":0,"var":"box0"},"child":[{"type":"PockerItem","props":{"var":"card0","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":40,"var":"card1","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":80,"var":"card2","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":120,"var":"card3","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":160,"var":"card4","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":200,"var":"card5","runtime":"ui.sddzGame.item.PockerItemUI"}}]},{"type":"Box","props":{"y":80,"x":0},"child":[{"type":"PockerItem","props":{"x":0,"var":"card6","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":40,"var":"card7","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":80,"var":"card8","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":120,"var":"card9","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":160,"var":"card10","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":200,"var":"card11","runtime":"ui.sddzGame.item.PockerItemUI"}}]},{"type":"Box","props":{"y":160,"x":0,"var":"box1"},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card12","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":40,"var":"card13","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":80,"var":"card14","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":120,"var":"card15","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":160,"var":"card16","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":200,"var":"card17","runtime":"ui.sddzGame.item.PockerItemUI"}}]},{"type":"Box","props":{"y":240,"x":0},"child":[{"type":"PockerItem","props":{"x":0,"var":"card18","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":40,"var":"card19","runtime":"ui.sddzGame.item.PockerItemUI"}}]}]};
	return OtherOutputPartUI;
})(View)


//class ui.sddzGame.ddzPart.outputPart.OwnerOutputPartUI extends laya.ui.View
var OwnerOutputPartUI=(function(_super){
	function OwnerOutputPartUI(){
		this.box=null;
		this.card0=null;
		this.card1=null;
		this.card2=null;
		this.card3=null;
		this.card4=null;
		this.card5=null;
		this.card6=null;
		this.card7=null;
		this.card8=null;
		this.card9=null;
		this.card10=null;
		this.card11=null;
		this.card12=null;
		this.card13=null;
		this.card14=null;
		this.card15=null;
		this.card16=null;
		this.card17=null;
		this.card18=null;
		this.card19=null;
		OwnerOutputPartUI.__super.call(this);
	}

	__class(OwnerOutputPartUI,'ui.sddzGame.ddzPart.outputPart.OwnerOutputPartUI',_super);
	var __proto=OwnerOutputPartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.sddzGame.item.PockerItemUI",PockerItemUI$1);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(OwnerOutputPartUI.uiView);
	}

	OwnerOutputPartUI.uiView={"type":"View","props":{"height":0},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"box"},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card0","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":40,"var":"card1","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":80,"var":"card2","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":120,"var":"card3","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":160,"var":"card4","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":200,"var":"card5","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":240,"var":"card6","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":280,"var":"card7","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":320,"var":"card8","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":360,"var":"card9","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":400,"var":"card10","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":440,"var":"card11","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":480,"var":"card12","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":520,"var":"card13","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":560,"var":"card14","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":600,"var":"card15","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":640,"var":"card16","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":680,"var":"card17","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":720,"var":"card18","runtime":"ui.sddzGame.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":760,"var":"card19","runtime":"ui.sddzGame.item.PockerItemUI"}}]}]};
	return OwnerOutputPartUI;
})(View)


//class ui.sddzGame.ddzPart.PlayerCtlPartUI extends laya.ui.View
var PlayerCtlPartUI$1=(function(_super){
	function PlayerCtlPartUI(){
		this.jiaofenBox=null;
		this.fen1Btn=null;
		this.fen0Btn=null;
		this.fen2Btn=null;
		this.fen3Btn=null;
		this.jiabeiBox=null;
		this.jiabeiBtn=null;
		this.bujiaBtn=null;
		this.jiaogqiangBox=null;
		this.qiangdizhuBtn=null;
		this.jiaodizhuBtn=null;
		this.bujiaoBtn=null;
		this.buqiangBtn=null;
		this.ctlBox=null;
		this.mingpaiBtn=null;
		this.buchuBtn=null;
		this.tishiBtn=null;
		this.chupaiBtn=null;
		this.buqiBtn=null;
		PlayerCtlPartUI.__super.call(this);
	}

	__class(PlayerCtlPartUI,'ui.sddzGame.ddzPart.PlayerCtlPartUI',_super,'PlayerCtlPartUI$1');
	var __proto=PlayerCtlPartUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(PlayerCtlPartUI.uiView);
	}

	PlayerCtlPartUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"jiaofenBox"},"child":[{"type":"Button","props":{"x":203,"width":183,"var":"fen1Btn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"1分","sizeGrid":"0,29,0,28"}},{"type":"Button","props":{"x":0,"width":183,"var":"fen0Btn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"不叫","sizeGrid":"0,29,0,27"}},{"type":"Button","props":{"y":0,"x":406,"width":183,"var":"fen2Btn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"2分","sizeGrid":"0,29,0,28"}},{"type":"Button","props":{"y":0,"x":608,"width":183,"var":"fen3Btn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"3分","sizeGrid":"0,29,0,28"}}]},{"type":"Box","props":{"var":"jiabeiBox"},"child":[{"type":"Button","props":{"y":0,"x":0,"width":183,"var":"jiabeiBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"加倍","sizeGrid":"0,29,0,28"}},{"type":"Button","props":{"x":203,"width":183,"var":"bujiaBtn","stateNum":1,"skin":"common/buttonHong.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"不加倍","sizeGrid":"0,30,0,28"}}]},{"type":"Box","props":{"y":0,"var":"jiaogqiangBox"},"child":[{"type":"Button","props":{"width":183,"var":"qiangdizhuBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":35,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"抢地主","sizeGrid":"0,29,0,28"}},{"type":"Button","props":{"x":0,"width":183,"var":"jiaodizhuBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"叫地主","sizeGrid":"0,29,0,28"}},{"type":"Button","props":{"y":0,"x":203,"width":183,"var":"bujiaoBtn","stateNum":1,"skin":"common/buttonHong.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":35,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"不叫","sizeGrid":"0,30,0,28"}},{"type":"Button","props":{"y":0,"x":203,"width":183,"var":"buqiangBtn","stateNum":1,"skin":"common/buttonHong.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"不抢","sizeGrid":"0,30,0,28"}}]},{"type":"Box","props":{"y":0,"var":"ctlBox"},"child":[{"type":"Button","props":{"width":183,"var":"mingpaiBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"明牌","sizeGrid":"0,29,0,28"}},{"type":"Button","props":{"x":203,"width":183,"var":"buchuBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"不出","sizeGrid":"0,29,0,27"}},{"type":"Button","props":{"x":406,"width":183,"var":"tishiBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"提示","sizeGrid":"0,29,0,27"}},{"type":"Button","props":{"y":0,"x":609,"width":183,"var":"chupaiBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"出牌","sizeGrid":"0,29,0,28"}},{"type":"Button","props":{"x":812,"width":183,"var":"buqiBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"要不起","sizeGrid":"0,29,0,28"}}]}]};
	return PlayerCtlPartUI;
})(View)


//class ui.sddzGame.GameTableUI extends laya.ui.View
var GameTableUI$2=(function(_super){
	function GameTableUI(){
		this.pokerContainer=null;
		this.tableInfoPage=null;
		this.playerInfoPage=null;
		this.chatContainer=null;
		this.popChat2=null;
		this.popChat0=null;
		this.popChat1=null;
		this.calculatePart=null;
		this.replayControlView=null;
		GameTableUI.__super.call(this);
	}

	__class(GameTableUI,'ui.sddzGame.GameTableUI',_super,'GameTableUI$2');
	var __proto=GameTableUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.sddzGame.TableInfoPageUI",TableInfoPageUI$2);
		View.regComponent("ui.sddzGame.PlayerInfoPageUI",PlayerInfoPageUI$2);
		View.regComponent("ui.gameCommon.shortCutChat.PopChatItemUI",PopChatItemUI);
		View.regComponent("ui.sddzGame.CalculatePageUI",CalculatePageUI);
		View.regComponent("ui.gameCommon.VReplayControllerUI",VReplayControllerUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(GameTableUI.uiView);
	}

	GameTableUI.uiView={"type":"View","props":{"width":640,"height":1038},"child":[{"type":"Box","props":{"y":0,"x":0,"width":640,"height":1038},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":640,"lineWidth":1,"height":1038,"fillColor":"#007058"}}]},{"type":"Box","props":{"y":0,"x":0,"var":"pokerContainer"},"child":[{"type":"Image","props":{"width":640,"height":1038}}]},{"type":"TableInfoPage","props":{"y":-3,"x":1,"var":"tableInfoPage","runtime":"ui.sddzGame.TableInfoPageUI"}},{"type":"PlayerInfoPage","props":{"y":0,"x":0,"var":"playerInfoPage","mouseThrough":false,"runtime":"ui.sddzGame.PlayerInfoPageUI"}},{"type":"Box","props":{"var":"chatContainer"}},{"type":"PopChatItem","props":{"y":332,"x":4,"var":"popChat2","runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"PopChatItem","props":{"y":828,"x":4,"var":"popChat0","runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"PopChatItem","props":{"y":332,"x":218,"width":417,"var":"popChat1","height":70,"runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"CalculatePage","props":{"var":"calculatePart","runtime":"ui.sddzGame.CalculatePageUI"}},{"type":"VReplayController","props":{"y":0,"x":0,"var":"replayControlView","runtime":"ui.gameCommon.VReplayControllerUI"}}]};
	return GameTableUI;
})(View)


//class ui.sddzGame.item.PockerItemUI extends laya.ui.View
var PockerItemUI$1=(function(_super){
	function PockerItemUI(){
		this.backImg=null;
		this.valueImg=null;
		this.dizhuImg=null;
		this.shadowImg=null;
		this.mingImg=null;
		PockerItemUI.__super.call(this);
	}

	__class(PockerItemUI,'ui.sddzGame.item.PockerItemUI',_super,'PockerItemUI$1');
	var __proto=PockerItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(PockerItemUI.uiView);
	}

	PockerItemUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"width":120,"var":"backImg","skin":"poker/bg.png","height":162}},{"type":"Image","props":{"var":"valueImg","skin":"poker/fang_10.png"}},{"type":"Image","props":{"y":2,"x":40,"var":"dizhuImg","skin":"poker/dizhupaibiao.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"shadowImg","skin":"poker/poke_shadow.png"}},{"type":"Image","props":{"y":123,"x":3,"var":"mingImg","skin":"poker/ming.png"}}]};
	return PockerItemUI;
})(View)


//class ui.sddzGame.PlayerInfoPageUI extends laya.ui.View
var PlayerInfoPageUI$2=(function(_super){
	function PlayerInfoPageUI(){
		this.playerInfo2=null;
		this.playerInfo0=null;
		this.playerInfo1=null;
		this.piaoPart=null;
		this.startBtn=null;
		this.laba=null;
		this.labaTip=null;
		this.inviteBtn=null;
		this.leaveBtn=null;
		this.disbandBtn=null;
		PlayerInfoPageUI.__super.call(this);
	}

	__class(PlayerInfoPageUI,'ui.sddzGame.PlayerInfoPageUI',_super,'PlayerInfoPageUI$2');
	var __proto=PlayerInfoPageUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.gameCommon.items.PlayerInfoLeftItemUI",PlayerInfoLeftItemUI);
		View.regComponent("ui.gameCommon.items.PlayerInfoBaseItemUI",PlayerInfoBaseItemUI);
		View.regComponent("ui.gameCommon.PiaoSelePartUI",PiaoSelePartUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(PlayerInfoPageUI.uiView);
	}

	PlayerInfoPageUI.uiView={"type":"View","props":{"width":640,"height":1038},"child":[{"type":"PlayerInfoLeftItem","props":{"y":225,"x":30,"visible":true,"var":"playerInfo2","runtime":"ui.gameCommon.items.PlayerInfoLeftItemUI"}},{"type":"PlayerInfoLeftItem","props":{"y":927,"x":30,"visible":true,"var":"playerInfo0","runtime":"ui.gameCommon.items.PlayerInfoLeftItemUI"}},{"type":"PlayerInfoBaseItem","props":{"y":225,"x":530,"var":"playerInfo1","runtime":"ui.gameCommon.items.PlayerInfoBaseItemUI"}},{"type":"PiaoSelePart","props":{"y":643,"x":30.5,"var":"piaoPart","runtime":"ui.gameCommon.PiaoSelePartUI"}},{"type":"Button","props":{"y":838,"x":228,"width":180,"var":"startBtn","stateNum":1,"skin":"common/buttonHuang.png","sizeGrid":"0,36,0,36","labelStrokeColor":"#000000","labelStroke":2,"labelSize":34,"labelFont":"SimHei","labelColors":"#ffffff,#ffffff,#ffffff","labelBold":true,"labelAlign":"center"},"child":[{"type":"Image","props":{"y":14,"x":43,"skin":"gameCommon/gameStart.png"}}]},{"type":"Box","props":{"y":2,"x":556,"visible":false,"var":"laba","scaleY":0.8,"scaleX":0.8},"child":[{"type":"Image","props":{"skin":"gameCommon/voice/voiceBg.png"}},{"type":"Animation","props":{"y":31,"x":29,"var":"labaTip","source":"gameCommon/VoiceTip.ani"}}]},{"type":"Button","props":{"y":75,"x":519,"width":117,"var":"inviteBtn","stateNum":1,"skin":"gameCommon/img_jinbi-di.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":22,"labelPadding":"0,0,2,0","labelFont":"SimHei","labelColors":"#00edc2,#00edc2,#00edc2,#00edc2","labelBold":true,"label":"邀请好友","height":50}},{"type":"Button","props":{"y":70,"x":6,"width":117,"var":"leaveBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":24,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"离开房间","height":60,"sizeGrid":"0,29,0,27"}},{"type":"Button","props":{"y":70,"x":6,"width":117,"var":"disbandBtn","stateNum":1,"skin":"common/buttonHong.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":24,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"解散房间","height":60,"sizeGrid":"0,30,0,28"}}]};
	return PlayerInfoPageUI;
})(View)


//class ui.sddzGame.PockerPageUI extends laya.ui.View
var PockerPageUI$1=(function(_super){
	function PockerPageUI(){
		this.wenliImg=null;
		this.handlePart2=null;
		this.handlePart1=null;
		this.handlePart0=null;
		this.outputPart2=null;
		this.outputPart1=null;
		this.outputPart0=null;
		this.actTip2=null;
		this.actTip1=null;
		this.ctlPart=null;
		this.clockPart=null;
		this.actTip0=null;
		this.dipaiPart=null;
		PockerPageUI.__super.call(this);
	}

	__class(PockerPageUI,'ui.sddzGame.PockerPageUI',_super,'PockerPageUI$1');
	var __proto=PockerPageUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.sddzGame.ddzPart.handlePart.OtherHandlePartUI",OtherHandlePartUI$1);
		View.regComponent("ui.sddzGame.ddzPart.handlePart.OwnerHandlePartUI",OwnerHandlePartUI$1);
		View.regComponent("ui.sddzGame.ddzPart.outputPart.OtherOutputPartUI",OtherOutputPartUI);
		View.regComponent("ui.sddzGame.ddzPart.outputPart.OwnerOutputPartUI",OwnerOutputPartUI);
		View.regComponent("ui.sddzGame.ddzPart.ActTipUI",ActTipUI$1);
		View.regComponent("ui.sddzGame.ddzPart.PlayerCtlPartUI",PlayerCtlPartUI$1);
		View.regComponent("ui.sddzGame.ddzPart.ClockPartUI",ClockPartUI$1);
		View.regComponent("ui.sddzGame.ddzPart.DipaiPartUI",DipaiPartUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(PockerPageUI.uiView);
	}

	PockerPageUI.uiView={"type":"View","props":{"width":640,"height":1038},"child":[{"type":"Image","props":{"y":415,"x":150,"visible":false,"var":"wenliImg","skin":"sddzGame/wenli_sddz.png"}},{"type":"OtherHandlePart","props":{"y":332,"x":34,"var":"handlePart2","scaleY":0.6,"scaleX":0.6,"runtime":"ui.sddzGame.ddzPart.handlePart.OtherHandlePartUI"}},{"type":"OtherHandlePart","props":{"y":330,"x":533,"var":"handlePart1","scaleY":0.6,"scaleX":0.6,"runtime":"ui.sddzGame.ddzPart.handlePart.OtherHandlePartUI"}},{"type":"OwnerHandlePart","props":{"y":690,"x":43,"var":"handlePart0","scaleY":0.9,"scaleX":0.9,"runtime":"ui.sddzGame.ddzPart.handlePart.OwnerHandlePartUI"}},{"type":"OtherOutputPart","props":{"y":305,"x":130,"var":"outputPart2","scaleY":0.58,"scaleX":0.58,"runtime":"ui.sddzGame.ddzPart.outputPart.OtherOutputPartUI"}},{"type":"OtherOutputPart","props":{"y":305,"x":324,"var":"outputPart1","scaleY":0.58,"scaleX":0.58,"runtime":"ui.sddzGame.ddzPart.outputPart.OtherOutputPartUI"}},{"type":"OwnerOutputPart","props":{"y":560,"x":58,"var":"outputPart0","scaleY":0.6,"scaleX":0.6,"runtime":"ui.sddzGame.ddzPart.outputPart.OwnerOutputPartUI"}},{"type":"ActTip","props":{"y":323,"x":117,"var":"actTip2","runtime":"ui.sddzGame.ddzPart.ActTipUI"}},{"type":"ActTip","props":{"y":323,"x":376,"width":0,"var":"actTip1","height":0,"runtime":"ui.sddzGame.ddzPart.ActTipUI"}},{"type":"PlayerCtlPart","props":{"y":619,"x":76,"var":"ctlPart","scaleY":0.6,"scaleX":0.6,"runtime":"ui.sddzGame.ddzPart.PlayerCtlPartUI"}},{"type":"ClockPart","props":{"y":455,"x":259,"var":"clockPart","runtime":"ui.sddzGame.ddzPart.ClockPartUI"}},{"type":"ActTip","props":{"y":578,"x":243,"var":"actTip0","runtime":"ui.sddzGame.ddzPart.ActTipUI"}},{"type":"DipaiPart","props":{"y":121,"x":196,"var":"dipaiPart","scaleY":0.7,"scaleX":0.7,"runtime":"ui.sddzGame.ddzPart.DipaiPartUI"}}]};
	return PockerPageUI;
})(View)


//class ui.sddzGame.TableInfoPageUI extends laya.ui.View
var TableInfoPageUI$2=(function(_super){
	function TableInfoPageUI(){
		this.roomNumTf=null;
		this.roundCountTf=null;
		this.difenTf=null;
		this.beishuTf=null;
		this.weikaishiBox=null;
		this.ruleTimeTf=null;
		this.kaijuTf=null;
		this.leftDissolveTf=null;
		this.option=null;
		this.scoreList=null;
		this.infoListBtn=null;
		this.infoSImg=null;
		this.chatBtn=null;
		this.voiceTip=null;
		this._time=null;
		this.voiceIntercomBtn=null;
		this.voicePlay=null;
		this.voiceDis=null;
		this.helpBtn=null;
		this.setBtn=null;
		TableInfoPageUI.__super.call(this);
	}

	__class(TableInfoPageUI,'ui.sddzGame.TableInfoPageUI',_super,'TableInfoPageUI$2');
	var __proto=TableInfoPageUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(TableInfoPageUI.uiView);
	}

	TableInfoPageUI.uiView={"type":"View","props":{"width":640,"height":1038},"child":[{"type":"Image","props":{"y":0,"x":5,"width":630,"skin":"common/gameTop.png","sizeGrid":"0,20,19,21","height":67}},{"type":"Box","props":{"y":17,"x":123},"child":[{"type":"Label","props":{"y":0,"x":0,"visible":true,"text":"房号：","height":28,"fontSize":26,"font":"SimHei","color":"#00edc2","bold":true}},{"type":"Label","props":{"y":0,"x":81,"width":118,"visible":true,"var":"roomNumTf","text":"123456","height":26,"fontSize":26,"font":"SimHei","color":"#fff862","bold":true}},{"type":"Label","props":{"y":0,"x":255,"wordWrap":false,"width":138,"visible":true,"var":"roundCountTf","valign":"middle","text":"1/6","height":27,"fontSize":26,"font":"SimHei","color":"#fff862","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":255,"wordWrap":false,"visible":true,"valign":"middle","text":"第","height":27,"fontSize":26,"font":"SimHei","color":"#00edc2","bold":true,"align":"left"}},{"type":"Label","props":{"y":0,"x":362,"wordWrap":false,"visible":true,"valign":"middle","text":"局","height":27,"fontSize":26,"font":"SimHei","color":"#00edc2","bold":true,"align":"left"}}]},{"type":"Box","props":{"y":83,"x":171},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"visible":true,"valign":"middle","text":"底分：","height":27,"fontSize":30,"font":"SimHei","color":"#00edc2","bold":true,"align":"left"}},{"type":"Label","props":{"y":0,"x":66,"wordWrap":true,"width":46,"visible":true,"var":"difenTf","text":"0","height":25,"fontSize":30,"font":"SimHei","color":"#fff862","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":192,"wordWrap":true,"visible":true,"valign":"middle","text":"倍数：","height":27,"fontSize":30,"font":"SimHei","color":"#00edc2","bold":true,"align":"left"}},{"type":"Label","props":{"y":0,"x":258,"wordWrap":true,"width":46,"visible":true,"var":"beishuTf","text":"1","height":25,"fontSize":30,"font":"SimHei","color":"#fff862","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":669,"x":187.5,"width":271,"var":"weikaishiBox","height":135},"child":[{"type":"Image","props":{"y":0,"x":73.5,"skin":"gameCommon/dengdaikaiju.png"}},{"type":"Label","props":{"y":74,"x":0,"width":278,"visible":true,"var":"ruleTimeTf","valign":"middle","text":"本局时长：15分钟","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}},{"type":"Label","props":{"y":40,"x":0,"width":278,"visible":true,"var":"kaijuTf","valign":"middle","text":"开局人：小嘟嘟呀呀","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}},{"type":"Box","props":{"y":108,"x":0,"width":313,"height":27},"child":[{"type":"Label","props":{"y":0,"x":48,"width":262,"visible":true,"valign":"middle","text":"后未开局将解散","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}},{"type":"Label","props":{"y":0,"x":0,"width":96,"visible":true,"var":"leftDissolveTf","valign":"middle","text":"00:00 ","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}}]}]},{"type":"Button","props":{"y":6,"x":17,"visible":false,"var":"option","stateNum":1,"skin":"gameCommon/Option/function_Option.png","mouseThrough":true},"child":[{"type":"Button","props":{"y":-34,"x":-32,"width":131,"stateNum":1,"skin":"gameCommon/Option/function_Option.png","height":135,"alpha":0}}]},{"type":"Button","props":{"y":973,"x":370,"visible":false,"var":"scoreList","stateNum":1,"skin":"common/xinxiliebiaoBtn.png"},"child":[{"type":"Image","props":{"y":-1,"x":-12,"width":103,"skin":"common/xinxiliebiaoBtn.png","height":101,"alpha":0}}]},{"type":"Box","props":{"y":5,"x":544,"visible":false,"mouseThrough":true},"child":[{"type":"Button","props":{"x":4,"var":"infoListBtn","stateNum":1,"skin":"gameCommon/btnHorn.png"},"child":[{"type":"Button","props":{"y":11,"x":-4,"width":85,"stateNum":1,"skin":"gameCommon/btnHorn.png","height":82,"alpha":0}}]},{"type":"Image","props":{"y":0,"x":41,"var":"infoSImg","skin":"common/xiaohongdian.png","scaleY":1.2,"scaleX":1.2}}]},{"type":"Button","props":{"y":948,"x":550,"visible":true,"var":"chatBtn","stateNum":1,"skin":"gameCommon/liaotiananniuBtn.png"}},{"type":"Box","props":{"y":839,"x":443,"mouseThrough":true},"child":[{"type":"Box","props":{"y":-8,"x":-11,"visible":false,"var":"voiceTip","mouseThrough":true},"child":[{"type":"Image","props":{"y":0,"x":0,"width":91,"skin":"gameCommon/voice/voiceTip.png","sizeGrid":"6,5,19,8","mouseEnabled":false,"height":115}},{"type":"Label","props":{"y":14,"x":6,"width":78,"text":"点击发送","height":20,"fontSize":20,"font":"SimHei","color":"#fbfbfb","align":"center"}},{"type":"Label","props":{"y":41,"x":6,"width":79,"text":"上滑取消","height":20,"fontSize":20,"font":"SimHei","color":"#fbfbfb","align":"center"}},{"type":"Label","props":{"y":69,"x":6,"width":79,"var":"_time","text":"15'","height":20,"fontSize":20,"font":"SimHei","color":"#fbfbfb","align":"center"}}]},{"type":"Box","props":{"y":105.5,"x":6.5,"var":"voiceIntercomBtn"},"child":[{"type":"Button","props":{"y":4,"x":-1,"stateNum":1,"skin":"gameCommon/voice/voiceBg.png","pivotY":0.5,"pivotX":0.5}},{"type":"Image","props":{"y":33.5,"x":29,"visible":false,"var":"voicePlay","skin":"gameCommon/voice/voicePlay.png","rotation":0,"mouseThrough":false,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":14,"x":17,"skin":"gameCommon/voice/voice.png"}},{"type":"Image","props":{"y":4,"x":-1,"visible":false,"var":"voiceDis","skin":"gameCommon/voice/voiceDis.png","disabled":true}}]}]},{"type":"Button","props":{"y":8,"x":572,"width":50,"var":"helpBtn","labelSize":50,"labelPadding":"0,0,0,9","labelColors":"#ffffff,#ffffff,#ffffff","height":50},"child":[{"type":"Image","props":{"y":0,"x":0,"width":50,"skin":"gameCommon/img_jinbi-di.png","sizeGrid":"18,20,19,19","height":50}},{"type":"Label","props":{"y":1,"x":15,"visible":true,"valign":"middle","text":"?","fontSize":40,"font":"SimHei","color":"#ffffff","align":"center"}}]},{"type":"Button","props":{"y":4,"x":17,"width":55,"var":"setBtn","stateNum":1,"skin":"gameCommon/set.png","height":55}}]};
	return TableInfoPageUI;
})(View)



})(window,document,Laya);

if (typeof define === 'function' && define.amd){
	define('laya.core', ['require', "exports"], function(require, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: true });
        for (var i in Laya) {
			var o = Laya[i];
            o && o.__isclass && (exports[i] = o);
        }
    });
}