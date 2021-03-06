
(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var Animation=laya.display.Animation,Box=laya.ui.Box,Button=laya.ui.Button,Image=laya.ui.Image,Label=laya.ui.Label;
	var PiaoSelePartUI=ui.gameCommon.PiaoSelePartUI,PlayerInfoBaseItemUI=ui.gameCommon.items.PlayerInfoBaseItemUI;
	var PlayerInfoBottomItemUI=ui.gameCommon.items.PlayerInfoBottomItemUI,PlayerInfoLeftItemUI=ui.gameCommon.items.PlayerInfoLeftItemUI;
	var PlayerinfoTopItemUI=ui.gameCommon.items.PlayerinfoTopItemUI,PopChatItemUI=ui.gameCommon.shortCutChat.PopChatItemUI;
	var ReplayControlViewUI=ui.gameCommon.ReplayControlViewUI,View=laya.ui.View;
//class ui.srddzGame.calculate.CalculatePerPageUI extends laya.ui.View
var CalculatePerPageUI$1=(function(_super){
	function CalculatePerPageUI(){
		this.hideBtn=null;
		this.confirmBtn=null;
		this.readyBtn=null;
		this.readyImg=null;
		this.closeBtn=null;
		this.item0=null;
		this.item1=null;
		this.item2=null;
		this.item3=null;
		CalculatePerPageUI.__super.call(this);
	}

	__class(CalculatePerPageUI,'ui.srddzGame.calculate.CalculatePerPageUI',_super,'CalculatePerPageUI$1');
	var __proto=CalculatePerPageUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.srddzGame.calculate.item.CalculatePerItemUI",CalculatePerItemUI$2);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(CalculatePerPageUI.uiView);
	}

	CalculatePerPageUI.uiView={"type":"View","props":{"width":1038,"height":640},"child":[{"type":"Box","props":{"y":0,"x":0,"alpha":0.5},"child":[{"type":"Rect","props":{"x":0,"width":1038,"lineWidth":1,"height":640,"fillColor":"#000000"}}]},{"type":"Image","props":{"y":11,"x":64,"width":900,"skin":"common/gameBg.png","sizeGrid":"34,32,34,34","height":548}},{"type":"Button","props":{"y":566,"x":179,"width":180,"visible":true,"var":"hideBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#c5893b","labelStroke":5,"labelSize":38,"labelFont":"SimHei","labelColors":"#ffffff","labelAlign":"center","height":68,"anchorX":0.5,"sizeGrid":"0,29,0,27"},"child":[{"type":"Image","props":{"y":8,"x":45,"skin":"gameCommon/btnHide.png"}}]},{"type":"Button","props":{"y":566,"x":847,"width":180,"visible":false,"var":"confirmBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#c5893b","labelStroke":5,"labelSize":38,"labelFont":"SimHei","labelColors":"#ffffff","labelAlign":"center","height":68,"anchorX":0.5,"sizeGrid":"0,29,0,27"},"child":[{"type":"Image","props":{"y":11,"x":41,"skin":"common/btnConfirm.png"}}]},{"type":"Box","props":{"y":566,"x":424,"width":180},"child":[{"type":"Button","props":{"width":180,"var":"readyBtn","stateNum":1,"skin":"common/buttonHuang.png","height":68,"sizeGrid":"0,29,0,28"},"child":[{"type":"Image","props":{"y":6,"x":22,"var":"readyImg","skin":"gameCommon/nextPlay.png"}}]},{"type":"Button","props":{"width":180,"visible":false,"var":"closeBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#c5893b","labelStroke":5,"labelSize":38,"labelFont":"SimHei","labelColors":"#ffffff","labelAlign":"center","height":68,"sizeGrid":"0,29,0,28"},"child":[{"type":"Image","props":{"y":6,"x":46,"skin":"common/closs.png"}}]}]},{"type":"Box","props":{"y":62,"x":218,"width":717},"child":[{"type":"Label","props":{"y":0,"x":79,"wordWrap":false,"width":120,"valign":"middle","text":"昵称","fontSize":40,"font":"SimHei","color":"#ffffff","bold":true,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":0,"x":275,"wordWrap":false,"width":93,"valign":"middle","text":"底分","fontSize":40,"font":"SimHei","color":"#ffffff","bold":true,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":0,"x":432,"wordWrap":false,"width":93,"valign":"middle","text":"倍数","fontSize":40,"font":"SimHei","color":"#ffffff","bold":true,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":0,"x":631,"wordWrap":false,"width":93,"valign":"middle","text":"总分","fontSize":40,"font":"SimHei","color":"#ffffff","bold":true,"anchorY":0,"anchorX":0.5,"align":"center"}}]},{"type":"CalculatePerItem","props":{"y":124,"x":86.5,"var":"item0","runtime":"ui.srddzGame.calculate.item.CalculatePerItemUI"}},{"type":"CalculatePerItem","props":{"y":222,"x":86.5,"var":"item1","runtime":"ui.srddzGame.calculate.item.CalculatePerItemUI"}},{"type":"CalculatePerItem","props":{"y":320,"x":86.5,"var":"item2","runtime":"ui.srddzGame.calculate.item.CalculatePerItemUI"}},{"type":"CalculatePerItem","props":{"y":418,"x":86.5,"var":"item3","runtime":"ui.srddzGame.calculate.item.CalculatePerItemUI"}}]};
	return CalculatePerPageUI;
})(View)


//class ui.srddzGame.calculate.CalculateRoundPageUI extends laya.ui.View
var CalculateRoundPageUI=(function(_super){
	function CalculateRoundPageUI(){
		CalculateRoundPageUI.__super.call(this);;
	}

	__class(CalculateRoundPageUI,'ui.srddzGame.calculate.CalculateRoundPageUI',_super);
	var __proto=CalculateRoundPageUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(CalculateRoundPageUI.uiView);
	}

	CalculateRoundPageUI.uiView={"type":"View","props":{"width":1038,"height":640}};
	return CalculateRoundPageUI;
})(View)


//class ui.srddzGame.calculate.item.CalculatePerItemUI extends laya.ui.View
var CalculatePerItemUI$2=(function(_super){
	function CalculatePerItemUI(){
		this.nameTf=null;
		this.difenTf=null;
		this.beishuTf=null;
		this.zongfenTf=null;
		this.headImg=null;
		this.dizhuImg=null;
		this.directImg=null;
		CalculatePerItemUI.__super.call(this);
	}

	__class(CalculatePerItemUI,'ui.srddzGame.calculate.item.CalculatePerItemUI',_super,'CalculatePerItemUI$2');
	var __proto=CalculatePerItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(CalculatePerItemUI.uiView);
	}

	CalculatePerItemUI.uiView={"type":"View","props":{"width":855,"height":90},"child":[{"type":"Image","props":{"y":0,"x":0,"width":855,"skin":"common/wenzidi.png","sizeGrid":"13,14,11,14","height":90}},{"type":"Label","props":{"y":26,"x":216,"wordWrap":false,"width":176,"var":"nameTf","valign":"middle","text":"小嘟嘟01010101","overflow":"hidden","height":35,"fontSize":35,"font":"SimHei","color":"#c7edfb","bold":false,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":19,"x":408,"wordWrap":false,"width":93,"var":"difenTf","valign":"middle","text":"20","fontSize":50,"font":"SimHei","color":"#c7edfb","bold":false,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":19,"x":567,"wordWrap":false,"width":93,"var":"beishuTf","valign":"middle","text":"10","fontSize":50,"font":"SimHei","color":"#c7edfb","bold":false,"anchorY":0,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":45,"x":761,"wordWrap":false,"width":150,"var":"zongfenTf","valign":"middle","text":"-100","fontSize":50,"font":"SimHei","color":"#c7edfb","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":44,"x":87,"width":70,"var":"headImg","skin":"common/morentouxiang.png","mouseThrough":true,"height":70,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":10,"x":9,"var":"dizhuImg","skin":"gameCommon/dizhu.png"}},{"type":"Image","props":{"y":6,"x":624,"var":"directImg","skin":"srddzGame/zhijieying.png","scaleY":0.25,"scaleX":0.25,"rotation":30}}]};
	return CalculatePerItemUI;
})(View)


//class ui.srddzGame.CalculatePageUI extends laya.ui.View
var CalculatePageUI$1=(function(_super){
	function CalculatePageUI(){
		this.perPage=null;
		this.roundPage=null;
		this.showBtn=null;
		CalculatePageUI.__super.call(this);
	}

	__class(CalculatePageUI,'ui.srddzGame.CalculatePageUI',_super,'CalculatePageUI$1');
	var __proto=CalculatePageUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.srddzGame.calculate.CalculatePerPageUI",CalculatePerPageUI$1);
		View.regComponent("ui.srddzGame.calculate.CalculateRoundPageUI",CalculateRoundPageUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(CalculatePageUI.uiView);
	}

	CalculatePageUI.uiView={"type":"View","props":{"width":1038,"height":640},"child":[{"type":"CalculatePerPage","props":{"var":"perPage","runtime":"ui.srddzGame.calculate.CalculatePerPageUI"}},{"type":"CalculateRoundPage","props":{"var":"roundPage","runtime":"ui.srddzGame.calculate.CalculateRoundPageUI"}},{"type":"Button","props":{"y":566,"x":88,"width":181,"var":"showBtn","stateNum":1,"skin":"common/buttonLv.png","height":68,"alpha":0.6,"sizeGrid":"0,29,0,27"},"child":[{"type":"Image","props":{"y":12,"x":51,"skin":"gameCommon/btnShow.png","label":"label"}}]}]};
	return CalculatePageUI;
})(View)


//class ui.srddzGame.ddzPart.ActTipUI extends laya.ui.View
var ActTipUI$2=(function(_super){
	function ActTipUI(){
		this.bujiao=null;
		this.buchu=null;
		this.dang1=null;
		this.dang2=null;
		this.dang3=null;
		ActTipUI.__super.call(this);
	}

	__class(ActTipUI,'ui.srddzGame.ddzPart.ActTipUI',_super,'ActTipUI$2');
	var __proto=ActTipUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(ActTipUI.uiView);
	}

	ActTipUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":2.9000000000000057,"x":0,"var":"bujiao","skin":"poker/bujiao.png"}},{"type":"Image","props":{"y":0.6000000000000227,"x":1.0999999999999943,"var":"buchu","skin":"poker/buchu.png","scaleY":1.4,"scaleX":1.4}},{"type":"Image","props":{"y":0,"x":10.650000000000006,"var":"dang1","skin":"srddzGame/dang1.png","scaleY":0.9,"scaleX":0.9}},{"type":"Image","props":{"y":0,"x":9.75,"var":"dang2","skin":"srddzGame/dang2.png","scaleY":0.9,"scaleX":0.9}},{"type":"Image","props":{"y":0,"x":10.199999999999989,"var":"dang3","skin":"srddzGame/dang3.png","scaleY":0.9,"scaleX":0.9}}]};
	return ActTipUI;
})(View)


//class ui.srddzGame.ddzPart.ClockPartUI extends laya.ui.View
var ClockPartUI$2=(function(_super){
	function ClockPartUI(){
		this.pos3=null;
		this.cutdownTf3=null;
		this.pos2=null;
		this.cutdownTf2=null;
		this.pos1=null;
		this.cutdownTf1=null;
		this.pos0=null;
		this.cutdownTf0=null;
		ClockPartUI.__super.call(this);
	}

	__class(ClockPartUI,'ui.srddzGame.ddzPart.ClockPartUI',_super,'ClockPartUI$2');
	var __proto=ClockPartUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(ClockPartUI.uiView);
	}

	ClockPartUI.uiView={"type":"View","props":{"width":1038,"height":640},"child":[{"type":"Box","props":{"y":129,"x":105,"width":114,"var":"pos3","scaleY":0.7,"scaleX":0.7,"height":123},"child":[{"type":"Image","props":{"y":1,"x":4,"skin":"gameCommon/clock.png"}},{"type":"Label","props":{"y":32,"x":31.1923828125,"width":55.615234375,"var":"cutdownTf3","valign":"middle","text":"09","strokeColor":"#000000","stroke":2,"height":50,"fontSize":40,"color":"#5a2e0f","align":"center"}}]},{"type":"Box","props":{"y":28,"x":378,"width":114,"var":"pos2","scaleY":0.7,"scaleX":0.7,"height":123},"child":[{"type":"Image","props":{"y":1,"x":4,"skin":"gameCommon/clock.png"}},{"type":"Label","props":{"y":32,"x":31.1923828125,"width":55.615234375,"var":"cutdownTf2","valign":"middle","text":"09","strokeColor":"#000000","stroke":2,"height":50,"fontSize":40,"color":"#5a2e0f","align":"center"}}]},{"type":"Box","props":{"y":129,"x":821,"width":114,"var":"pos1","scaleY":0.7,"scaleX":0.7,"height":123},"child":[{"type":"Image","props":{"y":1,"x":4,"skin":"gameCommon/clock.png"}},{"type":"Label","props":{"y":32,"x":31.1923828125,"width":55.615234375,"var":"cutdownTf1","valign":"middle","text":"09","strokeColor":"#000000","stroke":2,"height":50,"fontSize":40,"color":"#5a2e0f","align":"center"}}]},{"type":"Box","props":{"y":283,"x":155,"width":114,"var":"pos0","scaleY":0.7,"scaleX":0.7,"height":123},"child":[{"type":"Image","props":{"y":1,"x":4,"skin":"gameCommon/clock.png"}},{"type":"Label","props":{"y":32,"x":31.1923828125,"width":55.615234375,"var":"cutdownTf0","valign":"middle","text":"09","strokeColor":"#000000","stroke":2,"height":50,"fontSize":40,"color":"#5a2e0f","align":"center"}}]}]};
	return ClockPartUI;
})(View)


//class ui.srddzGame.ddzPart.DipaiPartUI extends laya.ui.View
var DipaiPartUI$1=(function(_super){
	function DipaiPartUI(){
		this.card0=null;
		this.card1=null;
		this.card2=null;
		this.card3=null;
		this.card4=null;
		this.card5=null;
		this.card6=null;
		this.card7=null;
		DipaiPartUI.__super.call(this);
	}

	__class(DipaiPartUI,'ui.srddzGame.ddzPart.DipaiPartUI',_super,'DipaiPartUI$1');
	var __proto=DipaiPartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.srddzGame.ddzPart.item.PockerItemUI",PockerItemUI$2);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(DipaiPartUI.uiView);
	}

	DipaiPartUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card0","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":30,"var":"card1","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":60,"var":"card2","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":90,"var":"card3","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":120,"var":"card4","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":151,"var":"card5","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":181,"var":"card6","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":211,"var":"card7","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}}]};
	return DipaiPartUI;
})(View)


//class ui.srddzGame.ddzPart.handlePart.OtherHandlePartUI extends laya.ui.View
var OtherHandlePartUI$2=(function(_super){
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
		this.card20=null;
		this.card21=null;
		this.card22=null;
		this.card23=null;
		this.card24=null;
		this.card25=null;
		this.card26=null;
		this.card27=null;
		this.card28=null;
		this.card29=null;
		this.card30=null;
		this.card31=null;
		this.card32=null;
		this.backBox=null;
		this.card=null;
		this.numTxt=null;
		OtherHandlePartUI.__super.call(this);
	}

	__class(OtherHandlePartUI,'ui.srddzGame.ddzPart.handlePart.OtherHandlePartUI',_super,'OtherHandlePartUI$2');
	var __proto=OtherHandlePartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.srddzGame.ddzPart.item.PockerItemUI",PockerItemUI$2);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(OtherHandlePartUI.uiView);
	}

	OtherHandlePartUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"mingBox"},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card0","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":21,"var":"card1","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":43,"var":"card2","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":64,"var":"card3","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":86,"var":"card4","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":26,"x":0,"var":"card5","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":26,"x":21,"var":"card6","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":26,"x":43,"var":"card7","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":26,"x":64,"var":"card8","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":26,"x":86,"var":"card9","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":52,"x":0,"var":"card10","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":52,"x":21,"var":"card11","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":52,"x":43,"var":"card12","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":52,"x":64,"var":"card13","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":52,"x":86,"var":"card14","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":78,"x":0,"var":"card15","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":78,"x":21,"var":"card16","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":78,"x":43,"var":"card17","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":78,"x":64,"var":"card18","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":78,"x":86,"var":"card19","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":104,"x":0,"var":"card20","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":104,"x":21,"var":"card21","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":104,"x":43,"var":"card22","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":104,"x":64,"var":"card23","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":104,"x":86,"var":"card24","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":130,"x":0,"var":"card25","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":130,"x":21,"var":"card26","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":130,"x":43,"var":"card27","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":130,"x":64,"var":"card28","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":130,"x":86,"var":"card29","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":156,"x":0,"var":"card30","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":156,"x":21,"var":"card31","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":156,"x":43,"var":"card32","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}}]},{"type":"Box","props":{"y":0,"x":28,"var":"backBox","scaleY":0.75,"scaleX":0.75},"child":[{"type":"PockerItem","props":{"var":"card","runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"Label","props":{"y":46,"x":32,"width":55.615234375,"var":"numTxt","valign":"middle","text":17,"strokeColor":"#000000","stroke":2,"height":50,"fontSize":50,"color":"#f3f1ca","align":"center"}}]}]};
	return OtherHandlePartUI;
})(View)


//class ui.srddzGame.ddzPart.handlePart.OwnerHandlePartUI extends laya.ui.View
var OwnerHandlePartUI$2=(function(_super){
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
		this.card20=null;
		this.card21=null;
		this.card22=null;
		this.card23=null;
		this.card24=null;
		this.card25=null;
		this.card26=null;
		this.card27=null;
		this.card28=null;
		this.card29=null;
		this.card30=null;
		this.card31=null;
		this.card32=null;
		OwnerHandlePartUI.__super.call(this);
	}

	__class(OwnerHandlePartUI,'ui.srddzGame.ddzPart.handlePart.OwnerHandlePartUI',_super,'OwnerHandlePartUI$2');
	var __proto=OwnerHandlePartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.srddzGame.ddzPart.item.PockerItemUI",PockerItemUI$2);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(OwnerHandlePartUI.uiView);
	}

	OwnerHandlePartUI.uiView={"type":"View","props":{},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"box1"},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card0","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":55,"var":"card1","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":110,"var":"card2","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":165,"var":"card3","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":220,"var":"card4","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":275,"var":"card5","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":330,"var":"card6","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":385,"var":"card7","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":440,"var":"card8","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":495,"var":"card9","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":550,"var":"card10","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":605,"var":"card11","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":660,"var":"card12","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":715,"var":"card13","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":770,"var":"card14","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":825,"var":"card15","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":880,"var":"card16","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}}]},{"type":"Box","props":{"y":59,"x":0},"child":[{"type":"PockerItem","props":{"x":0,"var":"card17","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":55,"var":"card18","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":110,"var":"card19","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":165,"var":"card20","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":220,"var":"card21","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":275,"var":"card22","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":330,"var":"card23","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":385,"var":"card24","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":440,"var":"card25","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":495,"var":"card26","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":550,"var":"card27","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":605,"var":"card28","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":660,"var":"card29","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":715,"var":"card30","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":770,"var":"card31","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":825,"var":"card32","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}}]}]};
	return OwnerHandlePartUI;
})(View)


//class ui.srddzGame.ddzPart.handlePart.TopHandlePartUI extends laya.ui.View
var TopHandlePartUI$1=(function(_super){
	function TopHandlePartUI(){
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
		this.card20=null;
		this.card21=null;
		this.card22=null;
		this.card23=null;
		this.card24=null;
		this.card25=null;
		this.card26=null;
		this.card27=null;
		this.card28=null;
		this.card29=null;
		this.card30=null;
		this.card31=null;
		this.card32=null;
		this.backBox=null;
		this.card=null;
		this.numTxt=null;
		TopHandlePartUI.__super.call(this);
	}

	__class(TopHandlePartUI,'ui.srddzGame.ddzPart.handlePart.TopHandlePartUI',_super,'TopHandlePartUI$1');
	var __proto=TopHandlePartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.srddzGame.ddzPart.item.PockerItemUI",PockerItemUI$2);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(TopHandlePartUI.uiView);
	}

	TopHandlePartUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"mingBox"},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card0","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":21,"var":"card1","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":43,"var":"card2","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":64,"var":"card3","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":86,"var":"card4","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":107,"var":"card5","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":128,"var":"card6","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":150,"var":"card7","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":171,"var":"card8","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":193,"var":"card9","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":214,"var":"card10","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":0,"var":"card11","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":21,"var":"card12","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":43,"var":"card13","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":64,"var":"card14","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":86,"var":"card15","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":107,"var":"card16","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":128,"var":"card17","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":150,"var":"card18","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":171,"var":"card19","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":193,"var":"card20","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":28,"x":214,"var":"card21","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":0,"var":"card22","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":21,"var":"card23","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":43,"var":"card24","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":64,"var":"card25","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":86,"var":"card26","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":107,"var":"card27","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":128,"var":"card28","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":150,"var":"card29","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":171,"var":"card30","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":193,"var":"card31","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":56,"x":214,"var":"card32","scaleY":0.5,"scaleX":0.5,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}}]},{"type":"Box","props":{"var":"backBox","scaleY":0.75,"scaleX":0.75},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card","runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"Label","props":{"y":56,"x":32.1923828125,"width":55.615234375,"var":"numTxt","valign":"middle","text":17,"strokeColor":"#000000","stroke":2,"height":50,"fontSize":50,"color":"#f3f1ca","align":"center"}}]}]};
	return TopHandlePartUI;
})(View)


//class ui.srddzGame.ddzPart.item.PockerItemUI extends laya.ui.View
var PockerItemUI$2=(function(_super){
	function PockerItemUI(){
		this.backImg=null;
		this.valueImg=null;
		this.dizhuImg=null;
		this.shadowImg=null;
		this.mingImg=null;
		PockerItemUI.__super.call(this);
	}

	__class(PockerItemUI,'ui.srddzGame.ddzPart.item.PockerItemUI',_super,'PockerItemUI$2');
	var __proto=PockerItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(PockerItemUI.uiView);
	}

	PockerItemUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":120,"var":"backImg","skin":"poker/bg.png","height":162}},{"type":"Image","props":{"y":0,"x":0,"var":"valueImg","skin":"poker/fang_10.png"}},{"type":"Image","props":{"y":2,"x":40,"var":"dizhuImg","skin":"poker/dizhupaibiao.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"shadowImg","skin":"poker/poke_shadow.png"}},{"type":"Image","props":{"y":123,"x":3,"var":"mingImg","skin":"poker/ming.png"}}]};
	return PockerItemUI;
})(View)


//class ui.srddzGame.ddzPart.outputPart.OtherOutputPartUI extends laya.ui.View
var OtherOutputPartUI$1=(function(_super){
	function OtherOutputPartUI(){
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
		this.card20=null;
		this.card21=null;
		this.card22=null;
		this.card23=null;
		this.card24=null;
		this.card25=null;
		this.card26=null;
		this.card27=null;
		this.card28=null;
		this.card29=null;
		this.card30=null;
		this.card31=null;
		OtherOutputPartUI.__super.call(this);
	}

	__class(OtherOutputPartUI,'ui.srddzGame.ddzPart.outputPart.OtherOutputPartUI',_super,'OtherOutputPartUI$1');
	var __proto=OtherOutputPartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.srddzGame.ddzPart.item.PockerItemUI",PockerItemUI$2);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(OtherOutputPartUI.uiView);
	}

	OtherOutputPartUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"box"},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card0","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":30,"var":"card1","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":60,"var":"card2","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":90,"var":"card3","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":120,"var":"card4","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":150,"var":"card5","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":57,"x":0,"var":"card6","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":57,"x":30,"var":"card7","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":57,"x":60,"var":"card8","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":57,"x":90,"var":"card9","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":57,"x":120,"var":"card10","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":57,"x":150,"var":"card11","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":115,"x":0,"width":120,"var":"card12","scaleY":0.7,"scaleX":0.7,"pivotY":1,"height":162,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":114,"x":30,"var":"card13","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":114,"x":60,"var":"card14","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":114,"x":90,"var":"card15","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":114,"x":120,"var":"card16","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":114,"x":150,"var":"card17","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":171,"x":0,"var":"card18","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":171,"x":30,"var":"card19","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":171,"x":60,"var":"card20","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":171,"x":90,"var":"card21","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":171,"x":120,"var":"card22","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":171,"x":150,"var":"card23","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":228,"x":0,"var":"card24","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":228,"x":30,"var":"card25","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":228,"x":60,"var":"card26","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":228,"x":90,"var":"card27","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":228,"x":120,"var":"card28","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":228,"x":150,"var":"card29","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":285,"x":0,"var":"card30","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":285,"x":30,"var":"card31","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}}]}]};
	return OtherOutputPartUI;
})(View)


//class ui.srddzGame.ddzPart.outputPart.OwnerOutputPartUI extends laya.ui.View
var OwnerOutputPartUI$1=(function(_super){
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
		this.card20=null;
		this.card21=null;
		this.card22=null;
		this.card23=null;
		this.card24=null;
		this.card25=null;
		this.card26=null;
		this.card27=null;
		this.card28=null;
		this.card29=null;
		this.card30=null;
		this.card31=null;
		OwnerOutputPartUI.__super.call(this);
	}

	__class(OwnerOutputPartUI,'ui.srddzGame.ddzPart.outputPart.OwnerOutputPartUI',_super,'OwnerOutputPartUI$1');
	var __proto=OwnerOutputPartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.srddzGame.ddzPart.item.PockerItemUI",PockerItemUI$2);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(OwnerOutputPartUI.uiView);
	}

	OwnerOutputPartUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"box"},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card0","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":30,"var":"card1","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":60,"var":"card2","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":90,"var":"card3","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":120,"var":"card4","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":150,"var":"card5","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":180,"var":"card6","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":210,"var":"card7","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":240,"var":"card8","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":270,"var":"card9","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":300,"var":"card10","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":330,"var":"card11","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":360,"var":"card12","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":390,"var":"card13","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":420,"var":"card14","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"x":450,"var":"card15","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":55,"x":0,"var":"card16","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":55,"x":30,"var":"card17","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":55,"x":60,"var":"card18","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":55,"x":90,"var":"card19","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":55,"x":120,"var":"card20","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":55,"x":150,"var":"card21","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":55,"x":180,"var":"card22","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":55,"x":210,"var":"card23","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":55,"x":240,"var":"card24","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":55,"x":270,"var":"card25","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":55,"x":300,"var":"card26","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":55,"x":330,"var":"card27","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":55,"x":360,"var":"card28","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":55,"x":390,"var":"card29","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":55,"x":420,"var":"card30","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":55,"x":450,"var":"card31","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.item.PockerItemUI"}}]}]};
	return OwnerOutputPartUI;
})(View)


//class ui.srddzGame.ddzPart.PlayerCtlPartUI extends laya.ui.View
var PlayerCtlPartUI$2=(function(_super){
	function PlayerCtlPartUI(){
		this.jiaofenBox=null;
		this.fen1Btn=null;
		this.fen0Btn=null;
		this.fen2Btn=null;
		this.fen3Btn=null;
		this.baodaoBox=null;
		this.baoBtn=null;
		this.notbaoBtn=null;
		this.wayBox=null;
		this.normalBtn=null;
		this.directBtn=null;
		this.ctlBox=null;
		this.mingpaiBtn=null;
		this.buchuBtn=null;
		this.tishiBtn=null;
		this.chupaiBtn=null;
		this.buqiBtn=null;
		this.jiabeiBox=null;
		this.jiabeiBtn=null;
		this.bujiaBtn=null;
		PlayerCtlPartUI.__super.call(this);
	}

	__class(PlayerCtlPartUI,'ui.srddzGame.ddzPart.PlayerCtlPartUI',_super,'PlayerCtlPartUI$2');
	var __proto=PlayerCtlPartUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(PlayerCtlPartUI.uiView);
	}

	PlayerCtlPartUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"jiaofenBox"},"child":[{"type":"Button","props":{"y":0,"x":203,"width":183,"var":"fen1Btn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"1档","sizeGrid":"0,29,0,28"}},{"type":"Button","props":{"y":0,"x":0,"width":183,"var":"fen0Btn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"不叫","sizeGrid":"0,29,0,27"}},{"type":"Button","props":{"y":0,"x":406,"width":183,"var":"fen2Btn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"2档","sizeGrid":"0,29,0,28"}},{"type":"Button","props":{"y":0,"x":608,"width":183,"var":"fen3Btn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"3档","sizeGrid":"0,29,0,28"}}]},{"type":"Box","props":{"var":"baodaoBox"},"child":[{"type":"Button","props":{"x":0,"width":183,"var":"baoBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"报到","sizeGrid":"0,29,0,28"}},{"type":"Button","props":{"x":203,"width":183,"var":"notbaoBtn","stateNum":1,"skin":"common/buttonLan.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"不报到","sizeGrid":"0,30,0,30"}}]},{"type":"Box","props":{"var":"wayBox"},"child":[{"type":"Button","props":{"x":0,"width":183,"var":"normalBtn","stateNum":1,"skin":"common/buttonLan.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"正常打","sizeGrid":"0,30,0,30"}},{"type":"Button","props":{"x":203,"width":183,"var":"directBtn","stateNum":1,"skin":"common/buttonHong.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"直接赢","sizeGrid":"0,30,0,28"}}]},{"type":"Box","props":{"var":"ctlBox"},"child":[{"type":"Button","props":{"y":0,"x":0,"width":183,"var":"mingpaiBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"摊打","sizeGrid":"0,29,0,28"}},{"type":"Button","props":{"y":0,"x":203,"width":183,"var":"buchuBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"不出","sizeGrid":"0,29,0,27"}},{"type":"Button","props":{"y":0,"x":406,"width":183,"var":"tishiBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"提示","sizeGrid":"0,29,0,27"}},{"type":"Button","props":{"y":0,"x":609,"width":183,"var":"chupaiBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"出牌","sizeGrid":"0,29,0,28"}},{"type":"Button","props":{"y":0,"x":812,"width":183,"var":"buqiBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"要不起","sizeGrid":"0,29,0,28"}}]},{"type":"Box","props":{"y":0,"x":0,"var":"jiabeiBox"},"child":[{"type":"Button","props":{"y":0,"x":0,"width":183,"var":"jiabeiBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"加倍","sizeGrid":"0,29,0,28"}},{"type":"Button","props":{"x":203,"width":183,"var":"bujiaBtn","stateNum":1,"skin":"common/buttonHong.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"不加倍","sizeGrid":"0,30,0,28"}}]}]};
	return PlayerCtlPartUI;
})(View)


//class ui.srddzGame.GameTableUI extends laya.ui.View
var GameTableUI$3=(function(_super){
	function GameTableUI(){
		this.pokerContainer=null;
		this.tableInfoPage=null;
		this.playerInfoPage=null;
		this.popChat3=null;
		this.popChat0=null;
		this.popChat2=null;
		this.popChat1=null;
		this.chatContainer=null;
		this.calculatePart=null;
		this.replayControlView=null;
		GameTableUI.__super.call(this);
	}

	__class(GameTableUI,'ui.srddzGame.GameTableUI',_super,'GameTableUI$3');
	var __proto=GameTableUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.srddzGame.TableInfoPageUI",TableInfoPageUI$3);
		View.regComponent("ui.srddzGame.PlayerInfoPageUI",PlayerInfoPageUI$3);
		View.regComponent("ui.gameCommon.shortCutChat.PopChatItemUI",PopChatItemUI);
		View.regComponent("ui.srddzGame.CalculatePageUI",CalculatePageUI$1);
		View.regComponent("ui.gameCommon.ReplayControlViewUI",ReplayControlViewUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(GameTableUI.uiView);
	}

	GameTableUI.uiView={"type":"View","props":{"width":1038,"height":640},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":1038,"lineWidth":1,"height":640,"fillColor":"#007058"}}]},{"type":"Box","props":{"y":0,"x":0,"var":"pokerContainer"},"child":[{"type":"Image","props":{"width":1038,"height":640}}]},{"type":"TableInfoPage","props":{"var":"tableInfoPage","runtime":"ui.srddzGame.TableInfoPageUI"}},{"type":"PlayerInfoPage","props":{"y":0,"x":0,"var":"playerInfoPage","runtime":"ui.srddzGame.PlayerInfoPageUI"}},{"type":"PopChatItem","props":{"y":220,"x":44,"var":"popChat3","runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"PopChatItem","props":{"y":492,"x":5,"var":"popChat0","runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"PopChatItem","props":{"y":90,"x":322,"width":417,"var":"popChat2","height":70,"runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"PopChatItem","props":{"y":218,"x":576,"width":417,"var":"popChat1","height":70,"runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"Box","props":{"y":0,"x":0,"var":"chatContainer"}},{"type":"CalculatePage","props":{"var":"calculatePart","runtime":"ui.srddzGame.CalculatePageUI"}},{"type":"ReplayControlView","props":{"y":0,"x":0,"var":"replayControlView","runtime":"ui.gameCommon.ReplayControlViewUI"}}]};
	return GameTableUI;
})(View)


//class ui.srddzGame.PlayerInfoPageUI extends laya.ui.View
var PlayerInfoPageUI$3=(function(_super){
	function PlayerInfoPageUI(){
		this.playerInfo3=null;
		this.playerInfo1=null;
		this.playerInfo2=null;
		this.laba=null;
		this.labaTip=null;
		this.playerInfo0=null;
		this.piaoPart=null;
		this.inviteBtn=null;
		this.leaveBtn=null;
		this.disbandBtn=null;
		this.startBtn=null;
		PlayerInfoPageUI.__super.call(this);
	}

	__class(PlayerInfoPageUI,'ui.srddzGame.PlayerInfoPageUI',_super,'PlayerInfoPageUI$3');
	var __proto=PlayerInfoPageUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.gameCommon.items.PlayerInfoLeftItemUI",PlayerInfoLeftItemUI);
		View.regComponent("ui.gameCommon.items.PlayerInfoBaseItemUI",PlayerInfoBaseItemUI);
		View.regComponent("ui.gameCommon.items.PlayerinfoTopItemUI",PlayerinfoTopItemUI);
		View.regComponent("ui.gameCommon.items.PlayerInfoBottomItemUI",PlayerInfoBottomItemUI);
		View.regComponent("ui.gameCommon.PiaoSelePartUI",PiaoSelePartUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(PlayerInfoPageUI.uiView);
	}

	PlayerInfoPageUI.uiView={"type":"View","props":{"width":1038,"height":640},"child":[{"type":"PlayerInfoLeftItem","props":{"y":100,"x":37,"visible":true,"var":"playerInfo3","runtime":"ui.gameCommon.items.PlayerInfoLeftItemUI"}},{"type":"PlayerInfoBaseItem","props":{"y":100,"x":919,"var":"playerInfo1","runtime":"ui.gameCommon.items.PlayerInfoBaseItemUI"}},{"type":"PlayerinfoTopItem","props":{"y":-19,"x":356,"var":"playerInfo2","runtime":"ui.gameCommon.items.PlayerinfoTopItemUI"}},{"type":"Box","props":{"y":7,"x":970,"visible":false,"var":"laba"},"child":[{"type":"Image","props":{"skin":"gameCommon/voice/voiceBg.png"}},{"type":"Animation","props":{"y":31,"x":29,"var":"labaTip","source":"gameCommon/VoiceTip.ani"}}]},{"type":"PlayerInfoBottomItem","props":{"y":565,"x":19,"var":"playerInfo0","runtime":"ui.gameCommon.items.PlayerInfoBottomItemUI"}},{"type":"PiaoSelePart","props":{"y":476,"x":332,"var":"piaoPart","runtime":"ui.gameCommon.PiaoSelePartUI"}},{"type":"Button","props":{"y":477,"x":908,"width":117,"var":"inviteBtn","stateNum":1,"skin":"gameCommon/img_jinbi-di.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":22,"labelPadding":"0,0,2,0","labelFont":"SimHei","labelColors":"#00edc2,#00edc2,#00edc2,#00edc2","labelBold":true,"label":"邀请好友","height":50}},{"type":"Button","props":{"y":5,"x":255,"width":117,"var":"leaveBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":24,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"离开房间","height":60,"sizeGrid":"0,29,0,27"}},{"type":"Button","props":{"y":5,"x":255,"width":117,"var":"disbandBtn","stateNum":1,"skin":"common/buttonHong.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":24,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"解散房间","height":60,"sizeGrid":"0,30,0,28"}},{"type":"Button","props":{"y":477,"x":444,"width":150,"var":"startBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":30,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"开始","height":73,"sizeGrid":"0,29,0,28"}}]};
	return PlayerInfoPageUI;
})(View)


//class ui.srddzGame.PockerPageUI extends laya.ui.View
var PockerPageUI$2=(function(_super){
	function PockerPageUI(){
		this.handlePart1=null;
		this.handlePart3=null;
		this.handlePart2=null;
		this.outputPart2=null;
		this.outputPart0=null;
		this.outputPart3=null;
		this.outputPart1=null;
		this.dipaiPart=null;
		this.actTip3=null;
		this.actTip1=null;
		this.actTip2=null;
		this.clockPart=null;
		this.ctlPart=null;
		this.actTip0=null;
		this.handlePart0=null;
		PockerPageUI.__super.call(this);
	}

	__class(PockerPageUI,'ui.srddzGame.PockerPageUI',_super,'PockerPageUI$2');
	var __proto=PockerPageUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.srddzGame.ddzPart.handlePart.OtherHandlePartUI",OtherHandlePartUI$2);
		View.regComponent("ui.srddzGame.ddzPart.handlePart.TopHandlePartUI",TopHandlePartUI$1);
		View.regComponent("ui.srddzGame.ddzPart.outputPart.OwnerOutputPartUI",OwnerOutputPartUI$1);
		View.regComponent("ui.srddzGame.ddzPart.outputPart.OtherOutputPartUI",OtherOutputPartUI$1);
		View.regComponent("ui.srddzGame.ddzPart.DipaiPartUI",DipaiPartUI$1);
		View.regComponent("ui.srddzGame.ddzPart.ActTipUI",ActTipUI$2);
		View.regComponent("ui.srddzGame.ddzPart.ClockPartUI",ClockPartUI$2);
		View.regComponent("ui.srddzGame.ddzPart.PlayerCtlPartUI",PlayerCtlPartUI$2);
		View.regComponent("ui.srddzGame.ddzPart.handlePart.OwnerHandlePartUI",OwnerHandlePartUI$2);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(PockerPageUI.uiView);
	}

	PockerPageUI.uiView={"type":"View","props":{"width":1038,"height":640},"child":[{"type":"OtherHandlePart","props":{"y":199,"x":902,"var":"handlePart1","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.handlePart.OtherHandlePartUI"}},{"type":"OtherHandlePart","props":{"y":199,"x":17,"var":"handlePart3","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.handlePart.OtherHandlePartUI"}},{"type":"TopHandlePart","props":{"y":3,"x":560,"var":"handlePart2","scaleY":0.9,"scaleX":0.9,"runtime":"ui.srddzGame.ddzPart.handlePart.TopHandlePartUI"}},{"type":"OwnerOutputPart","props":{"y":127,"x":304.54999999999995,"var":"outputPart2","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.outputPart.OwnerOutputPartUI"}},{"type":"OwnerOutputPart","props":{"y":230.61,"x":304.54999999999995,"var":"outputPart0","scaleY":0.8,"scaleX":0.8,"runtime":"ui.srddzGame.ddzPart.outputPart.OwnerOutputPartUI"}},{"type":"OtherOutputPart","props":{"y":127,"x":136,"var":"outputPart3","scaleY":0.72,"scaleX":0.72,"runtime":"ui.srddzGame.ddzPart.outputPart.OtherOutputPartUI"}},{"type":"OtherOutputPart","props":{"y":127,"x":732,"var":"outputPart1","scaleY":0.72,"scaleX":0.72,"runtime":"ui.srddzGame.ddzPart.outputPart.OtherOutputPartUI"}},{"type":"DipaiPart","props":{"y":3,"x":826,"var":"dipaiPart","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.DipaiPartUI"}},{"type":"ActTip","props":{"y":147,"x":175,"var":"actTip3","runtime":"ui.srddzGame.ddzPart.ActTipUI"}},{"type":"ActTip","props":{"y":147,"x":773,"var":"actTip1","runtime":"ui.srddzGame.ddzPart.ActTipUI"}},{"type":"ActTip","props":{"y":146,"x":470,"var":"actTip2","runtime":"ui.srddzGame.ddzPart.ActTipUI"}},{"type":"ClockPart","props":{"y":0,"x":0,"var":"clockPart","mouseThrough":true,"runtime":"ui.srddzGame.ddzPart.ClockPartUI"}},{"type":"PlayerCtlPart","props":{"y":305,"x":241.3,"var":"ctlPart","scaleY":0.7,"scaleX":0.7,"runtime":"ui.srddzGame.ddzPart.PlayerCtlPartUI"}},{"type":"ActTip","props":{"y":305,"x":470,"var":"actTip0","runtime":"ui.srddzGame.ddzPart.ActTipUI"}},{"type":"OwnerHandlePart","props":{"y":389,"x":30.149999999999977,"var":"handlePart0","runtime":"ui.srddzGame.ddzPart.handlePart.OwnerHandlePartUI"}}]};
	return PockerPageUI;
})(View)


//class ui.srddzGame.TableInfoPageUI extends laya.ui.View
var TableInfoPageUI$3=(function(_super){
	function TableInfoPageUI(){
		this.scoreList=null;
		this.infoListBtn=null;
		this.infoSImg=null;
		this.baoImg=null;
		this.beishuTf=null;
		this.wangImg=null;
		this.shBaoImg=null;
		this.touImg=null;
		this.tanImg=null;
		this.huangfanImg=null;
		this.weikaishiBox=null;
		this.ruleTimeTf=null;
		this.payType=null;
		this.leftDissolveTf=null;
		this.kaijuTf=null;
		this.roomNumTf=null;
		this.roundCountTf=null;
		this.difenTf=null;
		this.option=null;
		this.voiceTip=null;
		this._time=null;
		this.voiceIntercomBtn=null;
		this.voicePlay=null;
		this.voiceDis=null;
		this.chatBtn=null;
		this.helpBtn=null;
		this.setBtn=null;
		TableInfoPageUI.__super.call(this);
	}

	__class(TableInfoPageUI,'ui.srddzGame.TableInfoPageUI',_super,'TableInfoPageUI$3');
	var __proto=TableInfoPageUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(TableInfoPageUI.uiView);
	}

	TableInfoPageUI.uiView={"type":"View","props":{"width":1038,"height":640},"child":[{"type":"Image","props":{"y":574,"x":0,"width":1038,"skin":"common/judiwen.png","height":66,"alpha":0.3,"sizeGrid":"0,28,0,28"}},{"type":"Image","props":{"y":582,"x":240,"width":518,"skin":"gameCommon/dikuang.png","height":58,"sizeGrid":"0,20,0,22"}},{"type":"Box","props":{"y":547,"x":691},"child":[{"type":"Button","props":{"y":34,"x":76,"visible":false,"var":"scoreList","stateNum":1,"skin":"common/xinxiliebiaoBtn.png"},"child":[{"type":"Image","props":{"y":-1,"x":-12,"width":103,"skin":"common/xinxiliebiaoBtn.png","height":101,"alpha":0}}]},{"type":"Box","props":{"y":34,"x":136,"visible":false,"mouseThrough":true},"child":[{"type":"Button","props":{"x":4,"var":"infoListBtn","stateNum":1,"skin":"gameCommon/btnHorn.png"},"child":[{"type":"Button","props":{"y":11,"x":-4,"width":85,"stateNum":1,"skin":"gameCommon/btnHorn.png","height":82,"alpha":0}}]},{"type":"Image","props":{"y":0,"x":41,"var":"infoSImg","skin":"common/xiaohongdian.png","scaleY":1.2,"scaleX":1.2}}]}]},{"type":"Image","props":{"y":597,"x":581,"var":"baoImg","skin":"srddzGame/icon_bao0.png"}},{"type":"Label","props":{"y":599,"x":673,"wordWrap":true,"width":66,"visible":true,"var":"beishuTf","text":"10倍","height":30,"fontSize":26,"font":"SimHei","color":"#ffc757","bold":true,"align":"center"}},{"type":"Image","props":{"y":597,"x":519,"var":"wangImg","skin":"srddzGame/icon_wang0.png"}},{"type":"Image","props":{"y":592,"x":585,"var":"shBaoImg","skin":"srddzGame/icon_shuang.png"}},{"type":"Image","props":{"y":597,"x":457,"width":56,"var":"touImg","skin":"srddzGame/icon_tou0.png","height":30}},{"type":"Image","props":{"y":597,"x":395,"var":"tanImg","skin":"srddzGame/icon_tan0.png"}},{"type":"Image","props":{"y":597,"x":333,"var":"huangfanImg","skin":"srddzGame/icon_huang0.png"}},{"type":"Box","props":{"y":313,"x":383,"width":271,"var":"weikaishiBox","height":135},"child":[{"type":"Image","props":{"y":-29,"x":73.5,"skin":"gameCommon/dengdaikaiju.png"}},{"type":"Label","props":{"y":75,"x":0,"width":278,"visible":true,"var":"ruleTimeTf","valign":"middle","text":"本局时长：15分钟","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}},{"type":"Label","props":{"y":41,"x":0,"width":278,"visible":true,"var":"payType","valign":"middle","text":"付费方式：房主付费","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}},{"type":"Box","props":{"y":108,"x":0,"width":313,"height":27},"child":[{"type":"Label","props":{"y":0,"x":48,"width":262,"visible":true,"valign":"middle","text":"后未开局将解散","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}},{"type":"Label","props":{"y":0,"x":0,"width":96,"visible":true,"var":"leftDissolveTf","valign":"middle","text":"00:00 ","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}}]},{"type":"Label","props":{"y":8,"x":0,"width":278,"visible":true,"var":"kaijuTf","valign":"middle","text":"开局人：小嘟嘟呀呀","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}}]},{"type":"Box","props":{"y":6,"x":78},"child":[{"type":"Box","props":{"y":0,"x":0,"height":28},"child":[{"type":"Label","props":{"y":0,"x":0,"visible":true,"text":"房号：","height":28,"fontSize":26,"font":"SimHei","color":"#00edc2","bold":true}},{"type":"Label","props":{"y":0,"x":81,"width":92,"visible":true,"var":"roomNumTf","text":"123456","height":26,"fontSize":26,"font":"SimHei","color":"#fff862","bold":true}}]},{"type":"Box","props":{"y":32,"x":15.5},"child":[{"type":"Label","props":{"wordWrap":false,"width":138,"visible":true,"var":"roundCountTf","valign":"middle","text":"1/6","height":27,"fontSize":26,"font":"SimHei","color":"#fff862","bold":true,"align":"center"}},{"type":"Label","props":{"wordWrap":false,"visible":true,"valign":"middle","text":"第","height":27,"fontSize":26,"font":"SimHei","color":"#00edc2","bold":true,"align":"left"}},{"type":"Label","props":{"x":107,"wordWrap":false,"visible":true,"valign":"middle","text":"局","height":27,"fontSize":26,"font":"SimHei","color":"#00edc2","bold":true,"align":"left"}}]}]},{"type":"Label","props":{"y":599,"x":256,"wordWrap":true,"width":66,"visible":true,"var":"difenTf","text":"0档","height":30,"fontSize":26,"font":"SimHei","color":"#ffc757","bold":true,"align":"center"}},{"type":"Button","props":{"y":0,"x":0,"visible":false,"var":"option","stateNum":1,"skin":"gameCommon/Option/function_Option.png","mouseThrough":true},"child":[{"type":"Button","props":{"y":-34,"x":-32,"width":131,"stateNum":1,"skin":"gameCommon/Option/function_Option.png","height":135,"alpha":0}}]},{"type":"Box","props":{"y":470,"x":819,"mouseThrough":true},"child":[{"type":"Box","props":{"y":-8,"x":-11,"visible":false,"var":"voiceTip","mouseThrough":true},"child":[{"type":"Image","props":{"y":0,"x":0,"width":91,"skin":"gameCommon/voice/voiceTip.png","sizeGrid":"6,5,19,8","mouseEnabled":false,"height":115}},{"type":"Label","props":{"y":14,"x":6,"width":78,"text":"点击发送","height":20,"fontSize":20,"font":"SimHei","color":"#fbfbfb","align":"center"}},{"type":"Label","props":{"y":41,"x":6,"width":79,"text":"上滑取消","height":20,"fontSize":20,"font":"SimHei","color":"#fbfbfb","align":"center"}},{"type":"Label","props":{"y":69,"x":6,"width":79,"var":"_time","text":"15'","height":20,"fontSize":20,"font":"SimHei","color":"#fbfbfb","align":"center"}}]},{"type":"Box","props":{"y":105.5,"x":6.5,"var":"voiceIntercomBtn"},"child":[{"type":"Button","props":{"y":4,"x":-1,"stateNum":1,"skin":"gameCommon/voice/voiceBg.png","pivotY":0.5,"pivotX":0.5}},{"type":"Image","props":{"y":33.5,"x":29,"visible":false,"var":"voicePlay","skin":"gameCommon/voice/voicePlay.png","rotation":0,"mouseThrough":false,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":14,"x":17,"width":26,"skin":"gameCommon/voice/voice.png","height":41}},{"type":"Image","props":{"y":4,"x":-1,"visible":false,"var":"voiceDis","skin":"gameCommon/voice/voiceDis.png","disabled":true}}]}]},{"type":"Button","props":{"y":579,"x":938,"visible":true,"var":"chatBtn","stateNum":1,"skin":"gameCommon/liaotiananniuBtn.png"}},{"type":"Button","props":{"y":8,"x":378,"width":50,"var":"helpBtn","labelSize":50,"labelPadding":"0,0,0,9","labelColors":"#ffffff,#ffffff,#ffffff","height":50},"child":[{"type":"Image","props":{"y":0,"x":0,"width":50,"skin":"gameCommon/img_jinbi-di.png","sizeGrid":"18,20,19,19","height":50}},{"type":"Label","props":{"y":1,"x":15,"visible":true,"valign":"middle","text":"?","fontSize":40,"font":"SimHei","color":"#ffffff","align":"center"}}]},{"type":"Button","props":{"y":5,"x":8,"width":55,"var":"setBtn","stateNum":1,"skin":"gameCommon/set.png","height":55}}]};
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