
(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var Animation=laya.display.Animation,Box=laya.ui.Box,Button=laya.ui.Button,Image=laya.ui.Image,Label=laya.ui.Label;
	var NNPlayerInfoItemRightUI=ui.gameCommon.items.NNPlayerInfoItemRightUI,NNPlayerInfoItemSelfUI=ui.gameCommon.items.NNPlayerInfoItemSelfUI;
	var PopChatItemUI=ui.gameCommon.shortCutChat.PopChatItemUI,ReplayControlViewUI=ui.gameCommon.ReplayControlViewUI;
	var View=laya.ui.View;
//class ui.niuniuGame.GameTableUI extends laya.ui.View
var GameTableUI$1=(function(_super){
	function GameTableUI(){
		this.pokerContainer=null;
		this.playerInfoPage=null;
		this.tableInfoPage=null;
		this.popChat0=null;
		this.popChat9=null;
		this.popChat8=null;
		this.popChat7=null;
		this.popChat3=null;
		this.popChat2=null;
		this.popChat1=null;
		this.popChat6=null;
		this.popChat5=null;
		this.popChat4=null;
		this.chatContainer=null;
		this.replayControlView=null;
		GameTableUI.__super.call(this);
	}

	__class(GameTableUI,'ui.niuniuGame.GameTableUI',_super,'GameTableUI$1');
	var __proto=GameTableUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.niuniuGame.PlayerInfoPageUI",PlayerInfoPageUI$1);
		View.regComponent("ui.niuniuGame.TableInfoPageUI",TableInfoPageUI$1);
		View.regComponent("ui.gameCommon.shortCutChat.PopChatItemUI",PopChatItemUI);
		View.regComponent("ui.gameCommon.ReplayControlViewUI",ReplayControlViewUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(GameTableUI.uiView);
	}

	GameTableUI.uiView={"type":"View","props":{"width":1038,"height":640},"child":[{"type":"Box","props":{"y":0,"x":0,"width":1038,"height":640},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"niuniuGame/bg.jpg"}},{"type":"Image","props":{"y":0,"x":1038,"skin":"niuniuGame/bg.jpg","scaleX":-1}}]},{"type":"Box","props":{"var":"pokerContainer","mouseThrough":true},"child":[{"type":"Image","props":{"width":1038,"height":640}}]},{"type":"PlayerInfoPage","props":{"y":0,"x":0,"var":"playerInfoPage","runtime":"ui.niuniuGame.PlayerInfoPageUI"}},{"type":"TableInfoPage","props":{"var":"tableInfoPage","runtime":"ui.niuniuGame.TableInfoPageUI"}},{"type":"PopChatItem","props":{"y":474,"x":9,"var":"popChat0","scaleY":0.6,"scaleX":0.6,"runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"PopChatItem","props":{"y":348,"x":81,"var":"popChat9","scaleY":0.6,"scaleX":0.6,"runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"PopChatItem","props":{"y":223,"x":114,"var":"popChat8","scaleY":0.6,"scaleX":0.6,"runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"PopChatItem","props":{"y":139,"x":248,"var":"popChat7","scaleY":0.6,"scaleX":0.6,"runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"PopChatItem","props":{"y":139,"x":551,"var":"popChat3","scaleY":0.6,"scaleX":0.6,"runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"PopChatItem","props":{"y":223,"x":678,"var":"popChat2","scaleY":0.6,"scaleX":0.6,"runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"PopChatItem","props":{"y":348,"x":710,"var":"popChat1","scaleY":0.6,"scaleX":0.6,"runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"PopChatItem","props":{"y":89,"x":382,"var":"popChat6","scaleY":0.6,"scaleX":0.6,"runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"PopChatItem","props":{"y":79,"x":538,"var":"popChat5","scaleY":0.6,"scaleX":0.6,"runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"PopChatItem","props":{"y":89,"x":420,"var":"popChat4","scaleY":0.6,"scaleX":0.6,"runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"Box","props":{"var":"chatContainer"}},{"type":"ReplayControlView","props":{"var":"replayControlView","runtime":"ui.gameCommon.ReplayControlViewUI"}}]};
	return GameTableUI;
})(View)


//class ui.niuniuGame.niuniuPart.ActTipUI extends laya.ui.View
var ActTipUI=(function(_super){
	function ActTipUI(){
		this.tipTf=null;
		ActTipUI.__super.call(this);
	}

	__class(ActTipUI,'ui.niuniuGame.niuniuPart.ActTipUI',_super);
	var __proto=ActTipUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(ActTipUI.uiView);
	}

	ActTipUI.uiView={"type":"View","props":{},"child":[{"type":"Box","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"width":348,"skin":"niuniuGame/dikuang.png","height":47}},{"type":"Label","props":{"y":6,"x":0,"wordWrap":false,"width":348,"visible":true,"var":"tipTf","valign":"middle","text":"请准备","height":35,"fontSize":25,"font":"SimSun","color":"#ffffff","align":"center"}}]}]};
	return ActTipUI;
})(View)


//class ui.niuniuGame.niuniuPart.CuoPartUI extends laya.ui.View
var CuoPartUI=(function(_super){
	function CuoPartUI(){
		this.card=null;
		this.dragBox=null;
		CuoPartUI.__super.call(this);
	}

	__class(CuoPartUI,'ui.niuniuGame.niuniuPart.CuoPartUI',_super);
	var __proto=CuoPartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.niuniuGame.niuniuPart.item.PockerItemUI",PockerItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(CuoPartUI.uiView);
	}

	CuoPartUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":400,"skin":"common/gameBg.png","sizeGrid":"34,32,34,34","height":450,"alpha":0.5}},{"type":"PockerItem","props":{"y":103,"x":110,"var":"card","scaleY":1.5,"scaleX":1.5,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}},{"type":"Box","props":{"y":103,"x":110},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"dragBox","scaleY":1.5,"scaleX":1.5},"child":[{"type":"Image","props":{"width":120,"skin":"poker/bg.png","height":162}}]},{"type":"Box","props":{"scaleY":1.5,"scaleX":1.5,"renderType":"mask"},"child":[{"type":"Rect","props":{"y":3,"x":3,"width":120,"lineWidth":1,"height":162,"fillColor":"#ff0000"}}]}]}]};
	return CuoPartUI;
})(View)


//class ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI extends laya.ui.View
var OtherHandlePartUI=(function(_super){
	function OtherHandlePartUI(){
		this.card0=null;
		this.card1=null;
		this.card2=null;
		this.card3=null;
		this.card4=null;
		this.comBox=null;
		this.typeImg=null;
		OtherHandlePartUI.__super.call(this);
	}

	__class(OtherHandlePartUI,'ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI',_super);
	var __proto=OtherHandlePartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.niuniuGame.niuniuPart.item.PockerItemUI",PockerItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(OtherHandlePartUI.uiView);
	}

	OtherHandlePartUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card0","scaleY":0.4,"scaleX":0.4,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":21,"var":"card1","scaleY":0.4,"scaleX":0.4,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":42,"var":"card2","scaleY":0.4,"scaleX":0.4,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":63,"var":"card3","scaleY":0.4,"scaleX":0.4,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":84,"var":"card4","scaleY":0.4,"scaleX":0.4,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}},{"type":"Box","props":{"y":35,"x":1,"var":"comBox"},"child":[{"type":"Image","props":{"width":129,"skin":"niuniuGame/dikuang.png","height":27,"alpha":0.5}},{"type":"Image","props":{"var":"typeImg","skin":"niuniuGame/niuType/niu1.png","scaleY":0.7,"scaleX":0.7,"centerY":0,"centerX":0}}]}]}]};
	return OtherHandlePartUI;
})(View)


//class ui.niuniuGame.niuniuPart.handlePart.OwnerHandlePartUI extends laya.ui.View
var OwnerHandlePartUI=(function(_super){
	function OwnerHandlePartUI(){
		this.card0=null;
		this.card1=null;
		this.card2=null;
		this.card3=null;
		this.card4=null;
		this.comBox=null;
		this.typeImg=null;
		OwnerHandlePartUI.__super.call(this);
	}

	__class(OwnerHandlePartUI,'ui.niuniuGame.niuniuPart.handlePart.OwnerHandlePartUI',_super);
	var __proto=OwnerHandlePartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.niuniuGame.niuniuPart.item.PockerItemUI",PockerItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(OwnerHandlePartUI.uiView);
	}

	OwnerHandlePartUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"PockerItem","props":{"y":0,"x":0,"var":"card0","scaleY":0.7,"scaleX":0.7,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":87,"var":"card1","scaleY":0.7,"scaleX":0.7,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":174,"var":"card2","scaleY":0.7,"scaleX":0.7,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":261,"var":"card3","scaleY":0.7,"scaleX":0.7,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}},{"type":"PockerItem","props":{"y":0,"x":390,"var":"card4","scaleY":0.7,"scaleX":0.7,"pivotX":60,"runtime":"ui.niuniuGame.niuniuPart.item.PockerItemUI"}}]},{"type":"Box","props":{"y":64,"x":42,"var":"comBox"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":348,"skin":"niuniuGame/dikuang.png","height":47,"alpha":0.7}},{"type":"Image","props":{"var":"typeImg","skin":"niuniuGame/niuType/ready.png","centerY":2,"centerX":0}}]}]};
	return OwnerHandlePartUI;
})(View)


//class ui.niuniuGame.niuniuPart.item.PockerItemUI extends laya.ui.View
var PockerItemUI=(function(_super){
	function PockerItemUI(){
		this.backImg=null;
		this.valueImg=null;
		this.shadowImg=null;
		PockerItemUI.__super.call(this);
	}

	__class(PockerItemUI,'ui.niuniuGame.niuniuPart.item.PockerItemUI',_super);
	var __proto=PockerItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(PockerItemUI.uiView);
	}

	PockerItemUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":120,"var":"backImg","skin":"poker/bg.png","height":162}},{"type":"Image","props":{"y":0,"x":0,"var":"valueImg","skin":"poker/fang_10.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"shadowImg","skin":"poker/poke_shadow.png"}}]};
	return PockerItemUI;
})(View)


//class ui.niuniuGame.niuniuPart.PlayerCtlPartUI extends laya.ui.View
var PlayerCtlPartUI=(function(_super){
	function PlayerCtlPartUI(){
		this.qiangBox=null;
		this.bei0=null;
		this.bei1=null;
		this.bei2=null;
		this.bei3=null;
		this.bei4=null;
		this.fenBox=null;
		this.fen4=null;
		this.fen2=null;
		PlayerCtlPartUI.__super.call(this);
	}

	__class(PlayerCtlPartUI,'ui.niuniuGame.niuniuPart.PlayerCtlPartUI',_super);
	var __proto=PlayerCtlPartUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(PlayerCtlPartUI.uiView);
	}

	PlayerCtlPartUI.uiView={"type":"View","props":{},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"qiangBox"},"child":[{"type":"Button","props":{"width":130,"var":"bei0","stateNum":1,"skin":"common/buttonLan.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"不抢","sizeGrid":"0,30,0,30"}},{"type":"Button","props":{"x":107,"width":130,"var":"bei1","stateNum":1,"skin":"common/buttonHuang.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"1倍","sizeGrid":"0,29,0,28"}},{"type":"Button","props":{"x":214,"width":130,"var":"bei2","stateNum":1,"skin":"common/buttonHuang.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"2倍","sizeGrid":"0,29,0,28"}},{"type":"Button","props":{"x":321,"width":130,"var":"bei3","stateNum":1,"skin":"common/buttonHuang.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"3倍","sizeGrid":"0,29,0,28"}},{"type":"Button","props":{"x":428,"width":130,"var":"bei4","stateNum":1,"skin":"common/buttonHuang.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"4倍","sizeGrid":"0,29,0,28"}}]},{"type":"Box","props":{"y":0,"x":160,"var":"fenBox"},"child":[{"type":"Button","props":{"y":2,"x":107,"width":130,"var":"fen4","stateNum":1,"skin":"common/buttonHuang.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"4分","sizeGrid":"0,29,0,28"}},{"type":"Button","props":{"width":130,"var":"fen2","stateNum":1,"skin":"common/buttonHuang.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"2分","sizeGrid":"0,29,0,28"}}]}]};
	return PlayerCtlPartUI;
})(View)


//class ui.niuniuGame.PlayerInfoPageUI extends laya.ui.View
var PlayerInfoPageUI$1=(function(_super){
	function PlayerInfoPageUI(){
		this.pos9=null;
		this.pos8=null;
		this.pos7=null;
		this.pos6=null;
		this.pos5=null;
		this.pos0=null;
		this.pos4=null;
		this.pos3=null;
		this.pos2=null;
		this.pos1=null;
		this.laba=null;
		this.labaTip=null;
		this.leaveBtn=null;
		this.disbandBtn=null;
		this.inviteBtn=null;
		this.startBtn=null;
		this.readyBtn=null;
		this.gameEndBtn=null;
		PlayerInfoPageUI.__super.call(this);
	}

	__class(PlayerInfoPageUI,'ui.niuniuGame.PlayerInfoPageUI',_super,'PlayerInfoPageUI$1');
	var __proto=PlayerInfoPageUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.gameCommon.items.NNPlayerInfoItemSelfUI",NNPlayerInfoItemSelfUI);
		View.regComponent("ui.gameCommon.items.NNPlayerInfoItemRightUI",NNPlayerInfoItemRightUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(PlayerInfoPageUI.uiView);
	}

	PlayerInfoPageUI.uiView={"type":"View","props":{"width":1038,"height":640},"child":[{"type":"NNPlayerInfoItemSelf","props":{"y":325,"x":4,"var":"pos9","runtime":"ui.gameCommon.items.NNPlayerInfoItemSelfUI"}},{"type":"NNPlayerInfoItemSelf","props":{"y":199,"x":39,"var":"pos8","runtime":"ui.gameCommon.items.NNPlayerInfoItemSelfUI"}},{"type":"NNPlayerInfoItemSelf","props":{"y":114,"x":172,"var":"pos7","runtime":"ui.gameCommon.items.NNPlayerInfoItemSelfUI"}},{"type":"NNPlayerInfoItemSelf","props":{"y":66,"x":306,"var":"pos6","runtime":"ui.gameCommon.items.NNPlayerInfoItemSelfUI"}},{"type":"NNPlayerInfoItemSelf","props":{"y":53,"x":465,"var":"pos5","runtime":"ui.gameCommon.items.NNPlayerInfoItemSelfUI"}},{"type":"NNPlayerInfoItemSelf","props":{"y":530,"x":6,"var":"pos0","runtime":"ui.gameCommon.items.NNPlayerInfoItemSelfUI"}},{"type":"NNPlayerInfoItemRight","props":{"y":66,"x":663,"var":"pos4","runtime":"ui.gameCommon.items.NNPlayerInfoItemRightUI"}},{"type":"NNPlayerInfoItemRight","props":{"y":114,"x":794,"var":"pos3","runtime":"ui.gameCommon.items.NNPlayerInfoItemRightUI"}},{"type":"NNPlayerInfoItemRight","props":{"y":199,"x":921,"var":"pos2","runtime":"ui.gameCommon.items.NNPlayerInfoItemRightUI"}},{"type":"NNPlayerInfoItemRight","props":{"y":326,"x":955,"var":"pos1","runtime":"ui.gameCommon.items.NNPlayerInfoItemRightUI"}},{"type":"Box","props":{"y":90,"x":971,"visible":false,"var":"laba"},"child":[{"type":"Image","props":{"skin":"gameCommon/voice/voiceBg.png"}},{"type":"Animation","props":{"y":31,"x":29,"var":"labaTip","source":"gameCommon/VoiceTip.ani"}}]},{"type":"Button","props":{"y":5,"x":80,"width":117,"var":"leaveBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#450100","labelStroke":1,"labelSize":24,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#ffffff,#ffffff,#ffffff,#ffffff","labelBold":true,"label":"离开房间","height":60,"sizeGrid":"0,29,0,27"}},{"type":"Button","props":{"y":5,"x":80,"width":117,"var":"disbandBtn","stateNum":1,"skin":"common/buttonHong.png","labelStrokeColor":"#450100","labelStroke":1,"labelSize":24,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#ffffff,#ffffff,#ffffff,#ffffff","labelBold":true,"label":"解散房间","height":60,"sizeGrid":"0,30,0,28"}},{"type":"Button","props":{"y":525,"x":925,"width":100,"var":"inviteBtn","stateNum":1,"skin":"gameCommon/img_jinbi-di.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":22,"labelPadding":"0,0,2,0","labelFont":"SimHei","labelColors":"#00edc2,#00edc2,#00edc2,#00edc2","labelBold":true,"label":"邀请好友","height":50}},{"type":"Button","props":{"y":445,"x":444,"width":150,"var":"startBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":30,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"开始","height":73,"sizeGrid":"0,29,0,28"}},{"type":"Button","props":{"y":445,"x":444,"width":150,"var":"readyBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":30,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"准备","height":73,"sizeGrid":"0,29,0,28"}},{"type":"Button","props":{"y":445,"x":395,"width":247,"var":"gameEndBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#450100","labelStroke":2,"labelSize":30,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"游戏已经结束","height":73,"sizeGrid":"0,29,0,27"}}]};
	return PlayerInfoPageUI;
})(View)


//class ui.niuniuGame.PockerPageUI extends laya.ui.View
var PockerPageUI=(function(_super){
	function PockerPageUI(){
		this.tishiBtn=null;
		this.showBtn=null;
		this.handlePos9=null;
		this.handlePos1=null;
		this.handlePos8=null;
		this.handlePos5=null;
		this.handlePos6=null;
		this.handlePos7=null;
		this.handlePos4=null;
		this.handlePos3=null;
		this.handlePos2=null;
		this.tipPart=null;
		this.ctlPart=null;
		this.handlePos0=null;
		this.cuoBtn=null;
		this.fanBtn=null;
		this.cuoPart=null;
		PockerPageUI.__super.call(this);
	}

	__class(PockerPageUI,'ui.niuniuGame.PockerPageUI',_super);
	var __proto=PockerPageUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI",OtherHandlePartUI);
		View.regComponent("ui.niuniuGame.niuniuPart.ActTipUI",ActTipUI);
		View.regComponent("ui.niuniuGame.niuniuPart.PlayerCtlPartUI",PlayerCtlPartUI);
		View.regComponent("ui.niuniuGame.niuniuPart.handlePart.OwnerHandlePartUI",OwnerHandlePartUI);
		View.regComponent("ui.niuniuGame.niuniuPart.CuoPartUI",CuoPartUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(PockerPageUI.uiView);
	}

	PockerPageUI.uiView={"type":"View","props":{"width":1038,"height":640},"child":[{"type":"Button","props":{"y":553,"x":772,"width":130,"var":"tishiBtn","stateNum":1,"skin":"common/buttonLan.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"提示","sizeGrid":"0,30,0,30"}},{"type":"Button","props":{"y":553,"x":901,"width":130,"var":"showBtn","stateNum":1,"skin":"common/buttonHuang.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"亮牌","sizeGrid":"0,29,0,28"}},{"type":"OtherHandlePart","props":{"y":363,"x":142,"var":"handlePos9","runtime":"ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI"}},{"type":"OtherHandlePart","props":{"y":363,"x":771,"var":"handlePos1","runtime":"ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI"}},{"type":"OtherHandlePart","props":{"y":265,"x":120,"var":"handlePos8","runtime":"ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI"}},{"type":"OtherHandlePart","props":{"y":157,"x":454,"var":"handlePos5","runtime":"ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI"}},{"type":"OtherHandlePart","props":{"y":168,"x":322,"var":"handlePos6","runtime":"ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI"}},{"type":"OtherHandlePart","props":{"y":236,"x":254,"var":"handlePos7","runtime":"ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI"}},{"type":"OtherHandlePart","props":{"y":168,"x":586,"var":"handlePos4","runtime":"ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI"}},{"type":"OtherHandlePart","props":{"y":236,"x":656,"var":"handlePos3","runtime":"ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI"}},{"type":"OtherHandlePart","props":{"y":265,"x":790,"var":"handlePos2","runtime":"ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI"}},{"type":"ActTip","props":{"y":387,"x":345,"var":"tipPart","runtime":"ui.niuniuGame.niuniuPart.ActTipUI"}},{"type":"PlayerCtlPart","props":{"y":445,"x":253,"var":"ctlPart","runtime":"ui.niuniuGame.niuniuPart.PlayerCtlPartUI"}},{"type":"OwnerHandlePart","props":{"y":518,"x":302,"var":"handlePos0","runtime":"ui.niuniuGame.niuniuPart.handlePart.OwnerHandlePartUI"}},{"type":"Button","props":{"y":553,"x":772,"width":130,"var":"cuoBtn","stateNum":1,"skin":"common/buttonLan.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"搓牌","sizeGrid":"0,30,0,30"}},{"type":"Button","props":{"y":553,"x":901,"width":130,"var":"fanBtn","stateNum":1,"skin":"common/buttonHuang.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#450100","labelStroke":2,"labelSize":42,"labelPadding":"0,0,4,0","labelFont":"SimHei","labelColors":"#e7fecb,#e7fecb,#e7fecb,#e7fecb","labelBold":true,"label":"翻牌","sizeGrid":"0,29,0,28"}},{"type":"CuoPart","props":{"y":62,"x":319,"var":"cuoPart","runtime":"ui.niuniuGame.niuniuPart.CuoPartUI"}}]};
	return PockerPageUI;
})(View)


//class ui.niuniuGame.TableInfoPageUI extends laya.ui.View
var TableInfoPageUI$1=(function(_super){
	function TableInfoPageUI(){
		this.chatBtn=null;
		this.roomNumTf=null;
		this.roundCountTf=null;
		this.playTypeTf=null;
		this.option=null;
		this.voiceTip=null;
		this._time=null;
		this.voiceIntercomBtn=null;
		this.voicePlay=null;
		this.voiceDis=null;
		this.scoreList=null;
		this.infoListBtn=null;
		this.infoSImg=null;
		this.weikaishiBox=null;
		this.ruleTimeTf=null;
		this.payType=null;
		this.leftDissolveTf=null;
		this.kaijuTf=null;
		this.helpBtn=null;
		this.setBtn=null;
		TableInfoPageUI.__super.call(this);
	}

	__class(TableInfoPageUI,'ui.niuniuGame.TableInfoPageUI',_super,'TableInfoPageUI$1');
	var __proto=TableInfoPageUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(TableInfoPageUI.uiView);
	}

	TableInfoPageUI.uiView={"type":"View","props":{"width":1038,"height":640},"child":[{"type":"Button","props":{"y":445,"x":820,"var":"chatBtn","stateNum":1,"skin":"gameCommon/chat.png","scaleY":0.8,"scaleX":0.8}},{"type":"Image","props":{"y":4,"x":886,"width":211,"skin":"gameCommon/img_jinbi-di.png","sizeGrid":"18,27,19,30","scaleY":0.7,"scaleX":0.7,"height":125}},{"type":"Box","props":{"y":13,"x":899},"child":[{"type":"Label","props":{"y":23,"x":60,"wordWrap":false,"visible":true,"var":"roomNumTf","valign":"middle","text":"123456","overflow":"scroll","fontSize":20,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":23,"x":0,"wordWrap":false,"visible":true,"valign":"middle","text":"房号：","overflow":"scroll","fontSize":20,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":47,"x":60,"wordWrap":false,"visible":true,"var":"roundCountTf","valign":"middle","text":"1/6","overflow":"scroll","fontSize":20,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":47,"x":0,"wordWrap":false,"visible":true,"valign":"middle","text":"局数：","overflow":"scroll","fontSize":20,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":0,"x":0,"wordWrap":false,"width":92,"visible":true,"var":"playTypeTf","valign":"middle","text":"明牌抢庄","overflow":"scroll","height":20,"fontSize":20,"font":"SimHei","color":"#ffffff","align":"left"}}]},{"type":"Button","props":{"y":4,"x":4,"width":60,"var":"option","height":60},"child":[{"type":"Image","props":{"y":13,"x":10,"skin":"gameCommon/function_Option.png","scaleY":1.3,"scaleX":1.3}},{"type":"Image","props":{"y":0,"x":0,"width":60,"skin":"gameCommon/img_jinbi-di.png","sizeGrid":"18,27,19,30","height":60}}]},{"type":"Box","props":{"y":341,"x":934,"mouseThrough":true},"child":[{"type":"Box","props":{"y":-21,"x":-5,"visible":false,"var":"voiceTip","mouseThrough":true},"child":[{"type":"Image","props":{"y":0,"x":0,"width":91,"skin":"gameCommon/voice/voiceTip.png","sizeGrid":"6,5,19,8","mouseEnabled":false,"height":115}},{"type":"Label","props":{"y":14,"x":6,"width":78,"text":"点击发送","height":20,"fontSize":20,"font":"SimHei","color":"#fbfbfb","align":"center"}},{"type":"Label","props":{"y":41,"x":6,"width":79,"text":"上滑取消","height":20,"fontSize":20,"font":"SimHei","color":"#fbfbfb","align":"center"}},{"type":"Label","props":{"y":69,"x":6,"width":79,"var":"_time","text":"15'","height":20,"fontSize":20,"font":"SimHei","color":"#fbfbfb","align":"center"}}]},{"type":"Box","props":{"y":105.5,"x":6.5,"var":"voiceIntercomBtn"},"child":[{"type":"Button","props":{"y":-1,"x":-1,"stateNum":1,"skin":"gameCommon/duijiangji.png","scaleY":0.8,"scaleX":0.8}},{"type":"Image","props":{"y":33,"x":35,"visible":false,"var":"voicePlay","skin":"gameCommon/voice/voicePlay1.png","scaleY":0.8,"scaleX":0.8,"rotation":0,"mouseThrough":false,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-2,"x":-3,"visible":false,"var":"voiceDis","skin":"gameCommon/voice/voiceDis.png","scaleY":1.15,"scaleX":1.15,"disabled":true}}]}]},{"type":"Button","props":{"y":451,"x":679,"visible":false,"var":"scoreList","stateNum":1,"skin":"common/xinxiliebiaoBtn.png"},"child":[{"type":"Image","props":{"y":-1,"x":-12,"width":103,"skin":"common/xinxiliebiaoBtn.png","height":101,"alpha":0}}]},{"type":"Box","props":{"y":451,"x":739,"visible":false,"mouseThrough":true},"child":[{"type":"Button","props":{"x":4,"var":"infoListBtn","stateNum":1,"skin":"gameCommon/btnHorn.png"},"child":[{"type":"Button","props":{"y":11,"x":-4,"width":85,"stateNum":1,"skin":"gameCommon/btnHorn.png","height":82,"alpha":0}}]},{"type":"Image","props":{"y":0,"x":41,"var":"infoSImg","skin":"common/xiaohongdian.png","scaleY":1.2,"scaleX":1.2}}]},{"type":"Box","props":{"y":325,"x":410,"width":271,"var":"weikaishiBox","scaleY":0.8,"scaleX":0.8,"height":135},"child":[{"type":"Image","props":{"y":-29,"x":73.5,"skin":"gameCommon/dengdaikaiju.png"}},{"type":"Label","props":{"y":75,"x":0,"width":278,"visible":true,"var":"ruleTimeTf","valign":"middle","text":"本局时长：15分钟","height":27,"fontSize":24,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":41,"x":0,"width":278,"visible":true,"var":"payType","valign":"middle","text":"付费方式：房主付费","height":27,"fontSize":24,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Box","props":{"y":108,"x":0,"width":313,"height":27},"child":[{"type":"Label","props":{"y":0,"x":48,"width":262,"visible":true,"valign":"middle","text":"后未开局将解散","height":27,"fontSize":24,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":0,"x":0,"width":96,"visible":true,"var":"leftDissolveTf","valign":"middle","text":"00:00 ","height":27,"fontSize":24,"font":"SimHei","color":"#ffffff","align":"center"}}]},{"type":"Label","props":{"y":8,"x":0,"width":278,"visible":true,"var":"kaijuTf","valign":"middle","text":"开局人：小嘟嘟呀呀","height":27,"fontSize":24,"font":"SimHei","color":"#ffffff","align":"center"}}]},{"type":"Button","props":{"y":4,"x":829,"width":50,"var":"helpBtn","labelSize":50,"labelPadding":"0,0,0,9","labelColors":"#ffffff,#ffffff,#ffffff","height":50},"child":[{"type":"Image","props":{"y":0,"x":0,"width":50,"skin":"gameCommon/img_jinbi-di.png","sizeGrid":"18,20,19,19","height":50}},{"type":"Label","props":{"y":1,"x":15,"visible":true,"valign":"middle","text":"?","fontSize":40,"font":"SimHei","color":"#ffffff","align":"center"}}]},{"type":"Button","props":{"y":75,"x":4,"width":55,"var":"setBtn","stateNum":1,"skin":"gameCommon/set.png","height":55}}]};
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