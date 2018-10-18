
(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var Animation=laya.display.Animation,Box=laya.ui.Box,Button=laya.ui.Button,Image=laya.ui.Image,Label=laya.ui.Label;
	var PiaoSelePartUI=ui.gameCommon.PiaoSelePartUI,PlayerInfoBaseItemUI=ui.gameCommon.items.PlayerInfoBaseItemUI;
	var PlayerInfoLeftItemUI=ui.gameCommon.items.PlayerInfoLeftItemUI,PlayerinfoTopItemUI=ui.gameCommon.items.PlayerinfoTopItemUI;
	var PopChatItemUI=ui.gameCommon.shortCutChat.PopChatItemUI,ReplayControlViewUI=ui.gameCommon.ReplayControlViewUI;
	var Text=laya.display.Text,View=laya.ui.View;
//class ui.mainGame.DeskBgPageUI extends laya.ui.View
var DeskBgPageUI=(function(_super){
	function DeskBgPageUI(){
		DeskBgPageUI.__super.call(this);;
	}

	__class(DeskBgPageUI,'ui.mainGame.DeskBgPageUI',_super);
	var __proto=DeskBgPageUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(DeskBgPageUI.uiView);
	}

	DeskBgPageUI.uiView={"type":"View","props":{"width":1038,"height":640},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":1038,"lineWidth":1,"height":640,"fillColor":"#007058"}}]}]};
	return DeskBgPageUI;
})(View)


//class ui.mainGame.GameTableUI extends laya.ui.View
var GameTableUI=(function(_super){
	function GameTableUI(){
		this.main=null;
		this.mjContainer=null;
		this.tableInfoPage=null;
		this.playerInfoPage=null;
		this.calculatePart=null;
		this.replayControlView=null;
		this.leftPopChat=null;
		this.bottomPopChat=null;
		this.topPopChat=null;
		this.rightPopChat=null;
		this.chatContainer=null;
		GameTableUI.__super.call(this);
	}

	__class(GameTableUI,'ui.mainGame.GameTableUI',_super);
	var __proto=GameTableUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.DeskBgPageUI",DeskBgPageUI);
		View.regComponent("ui.mainGame.TableInfoPageUI",TableInfoPageUI);
		View.regComponent("ui.mainGame.PlayerInfoPageUI",PlayerInfoPageUI);
		View.regComponent("ui.mainGame.NewCalculatePageUI",NewCalculatePageUI);
		View.regComponent("ui.gameCommon.ReplayControlViewUI",ReplayControlViewUI);
		View.regComponent("ui.gameCommon.shortCutChat.PopChatItemUI",PopChatItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(GameTableUI.uiView);
	}

	GameTableUI.uiView={"type":"View","props":{"width":600,"visible":true,"height":400},"child":[{"type":"Box","props":{"y":-1,"x":-1,"var":"main"},"child":[{"type":"DeskBgPage","props":{"y":0,"x":0,"runtime":"ui.mainGame.DeskBgPageUI"}},{"type":"Box","props":{"var":"mjContainer"},"child":[{"type":"Image","props":{"width":1038,"height":640}}]},{"type":"TableInfoPage","props":{"visible":true,"var":"tableInfoPage","height":500,"runtime":"ui.mainGame.TableInfoPageUI"}},{"type":"PlayerInfoPage","props":{"visible":true,"var":"playerInfoPage","runtime":"ui.mainGame.PlayerInfoPageUI"}},{"type":"NewCalculatePage","props":{"var":"calculatePart","runtime":"ui.mainGame.NewCalculatePageUI"}},{"type":"ReplayControlView","props":{"var":"replayControlView","runtime":"ui.gameCommon.ReplayControlViewUI"}},{"type":"PopChatItem","props":{"y":182,"x":91,"var":"leftPopChat","runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"PopChatItem","props":{"y":411,"x":91,"var":"bottomPopChat","runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"PopChatItem","props":{"y":43,"x":283,"width":417,"var":"topPopChat","height":70,"runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"PopChatItem","props":{"y":159,"x":522,"width":417,"var":"rightPopChat","height":70,"runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"Box","props":{"y":0,"x":0,"var":"chatContainer"}}]}]};
	return GameTableUI;
})(View)


//class ui.mainGame.Items.BaidapaiUI extends laya.ui.View
var BaidapaiUI=(function(_super){
	function BaidapaiUI(){
		this.magiccard=null;
		this.fancard=null;
		BaidapaiUI.__super.call(this);
	}

	__class(BaidapaiUI,'ui.mainGame.Items.BaidapaiUI',_super);
	var __proto=BaidapaiUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.BottomHandleItemUI",BottomHandleItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(BaidapaiUI.uiView);
	}

	BaidapaiUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"BottomHandleItem","props":{"y":4,"x":35,"var":"magiccard","scaleY":0.6,"scaleX":0.6,"runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":21.159999999999997,"x":87,"var":"fancard","scaleY":0.38,"scaleX":0.38,"runtime":"ui.mainGame.Items.BottomHandleItemUI"}}]};
	return BaidapaiUI;
})(View)


//class ui.mainGame.Items.BottomHandleItemUI extends laya.ui.View
var BottomHandleItemUI=(function(_super){
	function BottomHandleItemUI(){
		this.buhua=null;
		this.tempImg=null;
		this.frontImg=null;
		this.backImg=null;
		this.downImg=null;
		this.valueImg=null;
		this.baidaImg=null;
		this.huEffImg=null;
		this.tingImg=null;
		BottomHandleItemUI.__super.call(this);
	}

	__class(BottomHandleItemUI,'ui.mainGame.Items.BottomHandleItemUI',_super);
	var __proto=BottomHandleItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(BottomHandleItemUI.uiView);
	}

	BottomHandleItemUI.uiView={"type":"View","props":{"visible":false},"child":[{"type":"Image","props":{"y":-32,"x":-120,"visible":false,"var":"buhua","skin":"gametable/buhua.png"}},{"type":"Image","props":{"y":-10,"x":-11,"width":113,"visible":false,"var":"tempImg","skin":"gameCommon/paibeijing.png","sizeGrid":"26,31,31,29","height":163}},{"type":"Image","props":{"y":0,"x":0,"width":92,"visible":true,"var":"frontImg","skin":"gametable/mahjongpai/paizhengmian.png","height":148}},{"type":"Image","props":{"y":0,"x":0,"visible":false,"var":"backImg","skin":"gametable/mahjongpai/koupaishu.png"}},{"type":"Image","props":{"y":0,"x":0,"visible":false,"var":"downImg","skin":"gametable/mahjongpai/zhengmianfangdao.png"}},{"type":"Image","props":{"y":34,"x":0,"var":"valueImg","skin":"gametable/mahjongpai/tong9.png","scaleY":1.4,"scaleX":1.4}},{"type":"Image","props":{"y":35,"x":4,"visible":false,"var":"baidaImg","skin":"gametable/baidatishi.png"}},{"type":"Image","props":{"y":-68,"x":-51,"var":"huEffImg","skin":"gametable/huanraohuoyan0001.png","scaleY":3.1,"scaleX":1.6,"disabled":false}},{"type":"Image","props":{"y":35,"x":5,"width":20,"visible":true,"var":"tingImg","skin":"gameCommon/tingxiaotubiao.png","height":21}}]};
	return BottomHandleItemUI;
})(View)


//class ui.mainGame.Items.BottomPengGangItemUI extends laya.ui.View
var BottomPengGangItemUI=(function(_super){
	function BottomPengGangItemUI(){
		this.card0=null;
		this.card1=null;
		this.card2=null;
		this.card3=null;
		BottomPengGangItemUI.__super.call(this);
	}

	__class(BottomPengGangItemUI,'ui.mainGame.Items.BottomPengGangItemUI',_super);
	var __proto=BottomPengGangItemUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.OutputBottomItemUI",OutputBottomItemUI);
		View.regComponent("ui.mainGame.Items.OutputRightItemUI",OutputRightItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(BottomPengGangItemUI.uiView);
	}

	BottomPengGangItemUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"OutputBottomItem","props":{"y":0,"x":0,"var":"card0","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":90,"var":"card1","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":180,"var":"card2","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputRightItem","props":{"y":-6,"x":79,"width":66,"visible":true,"var":"card3","scaleY":1.7,"scaleX":1.7,"height":56,"runtime":"ui.mainGame.Items.OutputRightItemUI"}}]};
	return BottomPengGangItemUI;
})(View)


//class ui.mainGame.Items.HandleEffItemUI extends laya.ui.View
var HandleEffItemUI=(function(_super){
	function HandleEffItemUI(){
		this.liangpaiImg=null;
		this.pengImg=null;
		this.gangImg=null;
		this.huImg=null;
		this.chiImg=null;
		this.zimoImg=null;
		this.dianpaoImg=null;
		HandleEffItemUI.__super.call(this);
	}

	__class(HandleEffItemUI,'ui.mainGame.Items.HandleEffItemUI',_super);
	var __proto=HandleEffItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(HandleEffItemUI.uiView);
	}

	HandleEffItemUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":300,"visible":false,"var":"liangpaiImg","skin":"22","height":300}},{"type":"Image","props":{"y":0,"x":0,"width":300,"visible":false,"var":"pengImg","height":300}},{"type":"Image","props":{"y":0,"x":0,"width":300,"visible":false,"var":"gangImg","height":300}},{"type":"Image","props":{"y":0,"x":0,"width":300,"visible":true,"var":"huImg","height":300}},{"type":"Image","props":{"y":0,"x":0,"width":300,"var":"chiImg","height":300}},{"type":"Image","props":{"y":0,"x":0,"width":300,"var":"zimoImg","height":300}},{"type":"Image","props":{"y":0,"x":0,"width":300,"var":"dianpaoImg","height":300}}]};
	return HandleEffItemUI;
})(View)


//class ui.mainGame.Items.HuaBotttomItemUI extends laya.ui.View
var HuaBotttomItemUI=(function(_super){
	function HuaBotttomItemUI(){
		this.downImg=null;
		this.valueImg=null;
		this.valueNum=null;
		HuaBotttomItemUI.__super.call(this);
	}

	__class(HuaBotttomItemUI,'ui.mainGame.Items.HuaBotttomItemUI',_super);
	var __proto=HuaBotttomItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(HuaBotttomItemUI.uiView);
	}

	HuaBotttomItemUI.uiView={"type":"View","props":{"visible":true},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"downImg","skin":"gametable/mahjongpai/zhengmianfangdao.png"}},{"type":"Image","props":{"y":3,"x":4,"width":84,"var":"valueImg","skin":"gametable/mahjongpai/hmei.png","height":104}},{"type":"Image","props":{"y":7,"x":58,"visible":false,"var":"valueNum","skin":"gametable/huapart/hua1.png"}}]};
	return HuaBotttomItemUI;
})(View)


//class ui.mainGame.Items.HuaLeftItemUI extends laya.ui.View
var HuaLeftItemUI=(function(_super){
	function HuaLeftItemUI(){
		this.downImg=null;
		this.valueImg=null;
		this.valueNum=null;
		HuaLeftItemUI.__super.call(this);
	}

	__class(HuaLeftItemUI,'ui.mainGame.Items.HuaLeftItemUI',_super);
	var __proto=HuaLeftItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(HuaLeftItemUI.uiView);
	}

	HuaLeftItemUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":0,"x":0,"visible":true,"var":"downImg","skin":"gametable/mahjongpai/paihengtang.png"}},{"type":"Image","props":{"y":-1,"x":67,"width":41,"var":"valueImg","skin":"gametable/mahjongpai/hchun.png","rotation":90,"height":67}},{"type":"Image","props":{"y":13,"x":60,"visible":false,"var":"valueNum","skin":"gametable/huapart/hua1.png","rotation":90}}]};
	return HuaLeftItemUI;
})(View)


//class ui.mainGame.Items.HuaRightItemUI extends laya.ui.View
var HuaRightItemUI=(function(_super){
	function HuaRightItemUI(){
		this.downImg=null;
		this.valueImg=null;
		this.valueNum=null;
		HuaRightItemUI.__super.call(this);
	}

	__class(HuaRightItemUI,'ui.mainGame.Items.HuaRightItemUI',_super);
	var __proto=HuaRightItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(HuaRightItemUI.uiView);
	}

	HuaRightItemUI.uiView={"type":"View","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"visible":true,"var":"downImg","skin":"gametable/mahjongpai/paihengtang.png"}},{"type":"Image","props":{"y":40,"x":8,"width":41,"var":"valueImg","skin":"gametable/mahjongpai/hmei.png","rotation":-90,"height":51}},{"type":"Image","props":{"y":25,"x":6,"visible":false,"var":"valueNum","skin":"gametable/huapart/hua1.png","rotation":-90}}]};
	return HuaRightItemUI;
})(View)


//class ui.mainGame.Items.HuaTopItemUI extends laya.ui.View
var HuaTopItemUI=(function(_super){
	function HuaTopItemUI(){
		this.downImg=null;
		this.valueImg=null;
		this.valueNum=null;
		HuaTopItemUI.__super.call(this);
	}

	__class(HuaTopItemUI,'ui.mainGame.Items.HuaTopItemUI',_super);
	var __proto=HuaTopItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(HuaTopItemUI.uiView);
	}

	HuaTopItemUI.uiView={"type":"View","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"downImg","skin":"gametable/mahjongpai/zhengmianfangdao.png"}},{"type":"Image","props":{"y":110,"x":90,"width":88,"visible":true,"var":"valueImg","skin":"gametable/mahjongpai/hxia.png","rotation":180,"height":110}},{"type":"Image","props":{"y":103,"x":27,"width":24,"visible":false,"var":"valueNum","skin":"gametable/huapart/hua1.png","rotation":180,"pivotX":1,"height":31}}]};
	return HuaTopItemUI;
})(View)


//class ui.mainGame.Items.LeftHandleItemUI extends laya.ui.View
var LeftHandleItemUI=(function(_super){
	function LeftHandleItemUI(){
		this.backImg=null;
		this.downImg=null;
		this.valueImg=null;
		this.frontImg=null;
		this.huEffImg=null;
		this.LiangEff=null;
		LeftHandleItemUI.__super.call(this);
	}

	__class(LeftHandleItemUI,'ui.mainGame.Items.LeftHandleItemUI',_super);
	var __proto=LeftHandleItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(LeftHandleItemUI.uiView);
	}

	LeftHandleItemUI.uiView={"type":"View","props":{},"child":[{"type":"Image","props":{"y":28,"x":0,"visible":false,"var":"backImg","skin":"gametable/mahjongpai/koupaiheng.png"}},{"type":"Image","props":{"y":28,"x":0,"visible":false,"var":"downImg","skin":"gametable/mahjongpai/paihengtang.png"}},{"type":"Image","props":{"y":28,"x":63,"width":106,"var":"valueImg","skin":"gametable/mahjongpai/tong9.png","scaleY":0.46,"scaleX":0.38,"rotation":90,"height":125}},{"type":"Image","props":{"y":0,"x":17,"visible":true,"var":"frontImg","skin":"gametable/mahjongpai/paifushilimian.png"}},{"type":"Image","props":{"y":0,"x":-39,"var":"huEffImg","skin":"gametable/huanraohuoyan0001.png","scaleY":1.2,"scaleX":1.2}},{"type":"Image","props":{"y":70,"x":133,"var":"LiangEff","skin":"gametable/liang0001.png","rotation":180,"height":43}}]};
	return LeftHandleItemUI;
})(View)


//class ui.mainGame.Items.LeftPengGangItemUI extends laya.ui.View
var LeftPengGangItemUI=(function(_super){
	function LeftPengGangItemUI(){
		this.card0=null;
		this.card1=null;
		this.card2=null;
		this.card3=null;
		LeftPengGangItemUI.__super.call(this);
	}

	__class(LeftPengGangItemUI,'ui.mainGame.Items.LeftPengGangItemUI',_super);
	var __proto=LeftPengGangItemUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.OutputLeftItemUI",OutputLeftItemUI);
		View.regComponent("ui.mainGame.Items.OutputBottomItemUI",OutputBottomItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(LeftPengGangItemUI.uiView);
	}

	LeftPengGangItemUI.uiView={"type":"View","props":{},"child":[{"type":"OutputLeftItem","props":{"y":0,"x":0,"width":72,"var":"card0","height":51,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":42,"x":0,"var":"card1","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":84,"x":0,"var":"card2","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputBottomItem","props":{"y":21,"x":7,"var":"card3","scaleY":0.55,"scaleX":0.55,"runtime":"ui.mainGame.Items.OutputBottomItemUI"}}]};
	return LeftPengGangItemUI;
})(View)


//class ui.mainGame.Items.OutputBottomItemUI extends laya.ui.View
var OutputBottomItemUI=(function(_super){
	function OutputBottomItemUI(){
		this.downImg=null;
		this.backImg=null;
		this.valueImg=null;
		this.huEffImg=null;
		this.chiMark=null;
		this.pengMark=null;
		this.curIdxSimbol=null;
		OutputBottomItemUI.__super.call(this);
	}

	__class(OutputBottomItemUI,'ui.mainGame.Items.OutputBottomItemUI',_super);
	var __proto=OutputBottomItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(OutputBottomItemUI.uiView);
	}

	OutputBottomItemUI.uiView={"type":"View","props":{"visible":true},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"downImg","skin":"gametable/mahjongpai/zhengmianfangdao.png"}},{"type":"Image","props":{"y":0,"x":0,"visible":false,"var":"backImg","skin":"gametable/mahjongpai/koupaishu.png"}},{"type":"Image","props":{"y":3,"x":0,"var":"valueImg","skin":"gametable/mahjongpai/tong9.png","scaleY":1.4,"scaleX":1.4}},{"type":"Image","props":{"y":-68,"x":-51,"var":"huEffImg","skin":"gametable/huanraohuoyan0001.png","scaleY":3,"scaleX":1.6}},{"type":"Image","props":{"y":74,"x":25,"visible":false,"var":"chiMark","skin":"gametable/chengbao/pengpaijiantou3_lan.png","scaleY":1.5,"scaleX":1.5,"rotation":0}},{"type":"Image","props":{"y":75,"x":27,"var":"pengMark","skin":"gametable/chengbao/pengpaijiantou1_lan.png","scaleY":1.5,"scaleX":1.5}},{"type":"Image","props":{"y":-28,"x":18,"visible":false,"var":"curIdxSimbol","skin":"gametable/xiaotuoluo.png","scaleY":1.6,"scaleX":1.6}}]};
	return OutputBottomItemUI;
})(View)


//class ui.mainGame.Items.OutputLeftItemUI extends laya.ui.View
var OutputLeftItemUI=(function(_super){
	function OutputLeftItemUI(){
		this.downImg=null;
		this.backImg=null;
		this.valueImg=null;
		this.huEffImg=null;
		this.curIdxSimbol=null;
		this.chiMark=null;
		this.pengMark=null;
		OutputLeftItemUI.__super.call(this);
	}

	__class(OutputLeftItemUI,'ui.mainGame.Items.OutputLeftItemUI',_super);
	var __proto=OutputLeftItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(OutputLeftItemUI.uiView);
	}

	OutputLeftItemUI.uiView={"type":"View","props":{"visible":false},"child":[{"type":"Image","props":{"y":0,"x":0,"visible":true,"var":"downImg","skin":"gametable/mahjongpai/paihengtang.png"}},{"type":"Image","props":{"y":0,"x":0,"visible":false,"var":"backImg","skin":"gametable/mahjongpai/koupaiheng.png"}},{"type":"Image","props":{"y":-1,"x":63,"var":"valueImg","skin":"gametable/mahjongpai/wan9.png","scaleY":0.8,"scaleX":0.65,"rotation":90}},{"type":"Image","props":{"y":-28,"x":-40,"var":"huEffImg","skin":"gametable/huanraohuoyan0001.png","scaleY":1.2,"scaleX":1.2}},{"type":"Image","props":{"y":-21,"x":19,"visible":false,"var":"curIdxSimbol","skin":"gametable/xiaotuoluo.png","scaleY":0.85,"scaleX":0.85}},{"type":"Image","props":{"y":7,"x":25,"visible":false,"var":"chiMark","skin":"gametable/chengbao/pengpaijiantou3_lan.png","rotation":90}},{"type":"Image","props":{"y":8,"x":25,"var":"pengMark","skin":"gametable/chengbao/pengpaijiantou3_lan.png","rotation":90}}]};
	return OutputLeftItemUI;
})(View)


//class ui.mainGame.Items.OutputRightItemUI extends laya.ui.View
var OutputRightItemUI=(function(_super){
	function OutputRightItemUI(){
		this.downImg=null;
		this.backImg=null;
		this.valueImg=null;
		this.curIdxSimbol=null;
		this.chiMark=null;
		this.pengMark=null;
		this.huEffImg=null;
		OutputRightItemUI.__super.call(this);
	}

	__class(OutputRightItemUI,'ui.mainGame.Items.OutputRightItemUI',_super);
	var __proto=OutputRightItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(OutputRightItemUI.uiView);
	}

	OutputRightItemUI.uiView={"type":"View","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"visible":true,"var":"downImg","skin":"gametable/mahjongpai/paihengtang.png"}},{"type":"Image","props":{"y":0,"x":0,"width":67,"visible":false,"var":"backImg","skin":"gametable/mahjongpai/koupaiheng.png","height":53}},{"type":"Image","props":{"y":40,"x":5,"width":105,"var":"valueImg","skin":"gametable/mahjongpai/wan9.png","scaleY":0.46,"scaleX":0.38,"rotation":-90,"height":125}},{"type":"Image","props":{"y":-19,"x":19,"visible":false,"var":"curIdxSimbol","skin":"gametable/xiaotuoluo.png","scaleY":0.85,"scaleX":0.85}},{"type":"Image","props":{"y":32,"x":42,"visible":false,"var":"chiMark","skin":"gametable/chengbao/pengpaijiantou3_lan.png","rotation":-90,"pivotY":0.5,"pivotX":0.5}},{"type":"Image","props":{"y":30,"x":37,"var":"pengMark","skin":"gametable/chengbao/pengpaijiantou2_lan.png","rotation":-90}},{"type":"Image","props":{"y":-27,"x":-39,"var":"huEffImg","skin":"gametable/huanraohuoyan0001.png","scaleY":1.2,"scaleX":1.2}}]};
	return OutputRightItemUI;
})(View)


//class ui.mainGame.Items.OutputTopItemUI extends laya.ui.View
var OutputTopItemUI=(function(_super){
	function OutputTopItemUI(){
		this.huEffImg=null;
		this.downImg=null;
		this.valueImg=null;
		this.backImg=null;
		this.chiMark=null;
		this.pengMark=null;
		this.curIdxSimbol=null;
		OutputTopItemUI.__super.call(this);
	}

	__class(OutputTopItemUI,'ui.mainGame.Items.OutputTopItemUI',_super);
	var __proto=OutputTopItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(OutputTopItemUI.uiView);
	}

	OutputTopItemUI.uiView={"type":"View","props":{},"child":[{"type":"Image","props":{"y":-78,"x":-64,"width":254,"var":"huEffImg","skin":"gametable/huanraohuoyan0001.png","scaleY":1.6,"scaleX":0.9,"height":193}},{"type":"Image","props":{"y":0,"x":0,"var":"downImg","skin":"gametable/mahjongpai/zhengmianfangdao.png"}},{"type":"Image","props":{"y":2,"x":4,"width":84,"visible":true,"var":"valueImg","skin":"gametable/mahjongpai/wan1.png","height":104}},{"type":"Image","props":{"y":0,"x":0,"visible":false,"var":"backImg","skin":"gametable/mahjongpai/koupaishu.png"}},{"type":"Image","props":{"y":110,"x":68,"visible":false,"var":"chiMark","skin":"gametable/chengbao/pengpaijiantou3_lan.png","scaleY":1.5,"scaleX":1.5,"rotation":180}},{"type":"Image","props":{"y":111,"x":65,"var":"pengMark","skin":"gametable/chengbao/pengpaijiantou2_lan.png","scaleY":1.5,"scaleX":1.5,"rotation":-180}},{"type":"Image","props":{"y":-21,"x":32,"visible":false,"var":"curIdxSimbol","skin":"gametable/xiaotuoluo.png"}}]};
	return OutputTopItemUI;
})(View)


//class ui.mainGame.Items.RightHandleItemUI extends laya.ui.View
var RightHandleItemUI=(function(_super){
	function RightHandleItemUI(){
		this.LiangEff=null;
		this.backImg=null;
		this.downImg=null;
		this.valueImg=null;
		this.frontImg=null;
		this.huEffImg=null;
		RightHandleItemUI.__super.call(this);
	}

	__class(RightHandleItemUI,'ui.mainGame.Items.RightHandleItemUI',_super);
	var __proto=RightHandleItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(RightHandleItemUI.uiView);
	}

	RightHandleItemUI.uiView={"type":"View","props":{"visible":true},"child":[{"type":"Image","props":{"y":0,"x":-119,"var":"LiangEff","skin":"gametable/liang0001.png"}},{"type":"Image","props":{"y":28,"x":-66,"visible":false,"var":"backImg","skin":"gametable/mahjongpai/koupaiheng.png"}},{"type":"Image","props":{"y":28,"x":-66,"visible":false,"var":"downImg","skin":"gametable/mahjongpai/paihengtang.png"}},{"type":"Image","props":{"y":68,"x":-63,"width":108,"var":"valueImg","skin":"gametable/mahjongpai/tong9.png","scaleY":0.46,"scaleX":0.38,"rotation":-90,"height":128}},{"type":"Image","props":{"y":0,"x":-15,"visible":true,"var":"frontImg","skin":"gametable/mahjongpai/paifushilimian.png","scaleY":-1,"rotation":180,"height":88}},{"type":"Image","props":{"y":0,"x":-104,"var":"huEffImg","skin":"gametable/huanraohuoyan0001.png","scaleY":1.2,"scaleX":1.2}}]};
	return RightHandleItemUI;
})(View)


//class ui.mainGame.Items.RightPengGangItemUI extends laya.ui.View
var RightPengGangItemUI=(function(_super){
	function RightPengGangItemUI(){
		this.card2=null;
		this.card1=null;
		this.card0=null;
		this.card3=null;
		RightPengGangItemUI.__super.call(this);
	}

	__class(RightPengGangItemUI,'ui.mainGame.Items.RightPengGangItemUI',_super);
	var __proto=RightPengGangItemUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.OutputRightItemUI",OutputRightItemUI);
		View.regComponent("ui.mainGame.Items.OutputTopItemUI",OutputTopItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(RightPengGangItemUI.uiView);
	}

	RightPengGangItemUI.uiView={"type":"View","props":{},"child":[{"type":"OutputRightItem","props":{"y":0,"x":0,"var":"card2","height":51,"runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":41,"x":0,"var":"card1","height":51,"runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":82,"x":0,"var":"card0","height":51,"runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputTopItem","props":{"y":17,"x":9,"var":"card3","scaleY":0.55,"scaleX":0.55,"runtime":"ui.mainGame.Items.OutputTopItemUI"}}]};
	return RightPengGangItemUI;
})(View)


//class ui.mainGame.Items.ShowContrTipUI extends laya.ui.View
var ShowContrTipUI=(function(_super){
	function ShowContrTipUI(){
		this.messageTf=null;
		ShowContrTipUI.__super.call(this);
	}

	__class(ShowContrTipUI,'ui.mainGame.Items.ShowContrTipUI',_super);
	var __proto=ShowContrTipUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(ShowContrTipUI.uiView);
	}

	ShowContrTipUI.uiView={"type":"View","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"width":521,"skin":"common/gameBg.png","sizeGrid":"23,26,26,23","height":110}},{"type":"Label","props":{"y":32,"x":80,"width":364,"var":"messageTf","text":"请选择要扣的牌","height":36,"fontSize":30,"font":"黑体","color":"#f8cdcd","bold":false,"align":"center"}}]};
	return ShowContrTipUI;
})(View)


//class ui.mainGame.Items.TopHandleItemUI extends laya.ui.View
var TopHandleItemUI=(function(_super){
	function TopHandleItemUI(){
		this.downImg=null;
		this.frontImg=null;
		this.backImg=null;
		this.valueImg=null;
		this.huEffImg=null;
		TopHandleItemUI.__super.call(this);
	}

	__class(TopHandleItemUI,'ui.mainGame.Items.TopHandleItemUI',_super);
	var __proto=TopHandleItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(TopHandleItemUI.uiView);
	}

	TopHandleItemUI.uiView={"type":"View","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"width":50,"visible":true,"var":"downImg","skin":"gametable/mahjongpai/zhengmianfangdao.png","height":74}},{"type":"Image","props":{"y":0,"x":0,"width":50,"visible":false,"var":"frontImg","skin":"gametable/mahjongpai/paibeimian.png","height":74}},{"type":"Image","props":{"y":0,"x":0,"width":50,"visible":false,"var":"backImg","skin":"gametable/mahjongpai/koupaishu.png","height":74}},{"type":"Image","props":{"y":54,"x":46,"width":43,"visible":true,"var":"valueImg","skin":"gametable/mahjongpai/tong9.png","rotation":180,"height":52}},{"type":"Image","props":{"y":-39,"x":-29,"var":"huEffImg","skin":"gametable/huanraohuoyan0001.png","scaleY":1.6,"scaleX":0.9}}]};
	return TopHandleItemUI;
})(View)


//class ui.mainGame.Items.TopPengGangItemUI extends laya.ui.View
var TopPengGangItemUI=(function(_super){
	function TopPengGangItemUI(){
		this.card0=null;
		this.card2=null;
		this.card1=null;
		this.card3=null;
		TopPengGangItemUI.__super.call(this);
	}

	__class(TopPengGangItemUI,'ui.mainGame.Items.TopPengGangItemUI',_super);
	var __proto=TopPengGangItemUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.OutputTopItemUI",OutputTopItemUI);
		View.regComponent("ui.mainGame.Items.OutputLeftItemUI",OutputLeftItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(TopPengGangItemUI.uiView);
	}

	TopPengGangItemUI.uiView={"type":"View","props":{},"child":[{"type":"OutputTopItem","props":{"y":1,"x":180,"var":"card0","runtime":"ui.mainGame.Items.OutputTopItemUI"}},{"type":"OutputTopItem","props":{"y":0,"x":0,"var":"card2","runtime":"ui.mainGame.Items.OutputTopItemUI"}},{"type":"OutputTopItem","props":{"y":0,"x":90,"var":"card1","runtime":"ui.mainGame.Items.OutputTopItemUI"}},{"type":"OutputLeftItem","props":{"y":-17,"x":77,"width":107,"var":"card3","scaleY":1.8,"scaleX":1.8,"height":61,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}}]};
	return TopPengGangItemUI;
})(View)


//class ui.mainGame.MajiangPageUI extends laya.ui.View
var MajiangPageUI=(function(_super){
	function MajiangPageUI(){
		this.clockPart=null;
		this.leftOutputPart=null;
		this.leftHuaPart=null;
		this.rightOutputPart=null;
		this.topOutputPart=null;
		this.bottomOutputPart=null;
		this.baidaPart=null;
		this.rightHandlePart=null;
		this.topHandlePart=null;
		this.rightPengGangPart=null;
		this.topPengGangPart=null;
		this.rightHuaPart=null;
		this.topHuaPart=null;
		this.bottomHuaPart=null;
		this.controlTip=null;
		this.tophuTip=null;
		this.leftHuTip=null;
		this.leftPengGangPart=null;
		this.leftHandlePart=null;
		this.rightHuTip=null;
		this.bottomPengGangPart=null;
		this.bottomHandlePart=null;
		this.handleEffPart=null;
		this.bottomHuTip=null;
		this.handleBtns=null;
		this.rightTempPopcard=null;
		this.bottomTempPopcard=null;
		this.leftTempPopcard=null;
		this.topTempPopcard=null;
		this.chiSelePart=null;
		this.shaiziPart=null;
		MajiangPageUI.__super.call(this);
	}

	__class(MajiangPageUI,'ui.mainGame.MajiangPageUI',_super);
	var __proto=MajiangPageUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.majiangParts.ClockPartUI",ClockPartUI);
		View.regComponent("ui.mainGame.majiangParts.shaiziPageUI",shaiziPageUI);
		View.regComponent("ui.mainGame.majiangParts.huaLeftPartUI",huaLeftPartUI);
		View.regComponent("ui.mainGame.majiangParts.RightOutputPartUI",RightOutputPartUI);
		View.regComponent("ui.mainGame.majiangParts.OutputTopPartUI",OutputTopPartUI);
		View.regComponent("ui.mainGame.majiangParts.BottomOutputPartUI",BottomOutputPartUI);
		View.regComponent("ui.mainGame.Items.BaidapaiUI",BaidapaiUI);
		View.regComponent("ui.mainGame.majiangParts.RightHandlePartUI",RightHandlePartUI);
		View.regComponent("ui.mainGame.majiangParts.TopHandlePartUI",TopHandlePartUI);
		View.regComponent("ui.mainGame.majiangParts.RightPengGangPartUI",RightPengGangPartUI);
		View.regComponent("ui.mainGame.majiangParts.TopPengGangPartUI",TopPengGangPartUI);
		View.regComponent("ui.mainGame.majiangParts.huaRightPartUI",huaRightPartUI);
		View.regComponent("ui.mainGame.majiangParts.huaTopPartUI",huaTopPartUI);
		View.regComponent("ui.mainGame.majiangParts.huaBottomPartUI",huaBottomPartUI);
		View.regComponent("ui.mainGame.majiangParts.LeftOutputPartUI",LeftOutputPartUI);
		View.regComponent("ui.mainGame.majiangParts.HuPaiTip.TopHuTipPanelUI",TopHuTipPanelUI);
		View.regComponent("ui.mainGame.majiangParts.HuPaiTip.LeftHuTipPanelUI",LeftHuTipPanelUI);
		View.regComponent("ui.mainGame.majiangParts.LeftPengGangPartUI",LeftPengGangPartUI);
		View.regComponent("ui.mainGame.majiangParts.LeftHandlePartUI",LeftHandlePartUI);
		View.regComponent("ui.mainGame.majiangParts.HuPaiTip.RightHuTipPanelUI",RightHuTipPanelUI);
		View.regComponent("ui.mainGame.majiangParts.BottomPengGangPartUI",BottomPengGangPartUI);
		View.regComponent("ui.mainGame.majiangParts.BottomHandlePartUI",BottomHandlePartUI);
		View.regComponent("ui.mainGame.majiangParts.HandleEffUI",HandleEffUI);
		View.regComponent("ui.mainGame.majiangParts.HuPaiTip.BottomHuTipPanelUI",BottomHuTipPanelUI);
		View.regComponent("ui.mainGame.majiangParts.HandleBtnsPartUI",HandleBtnsPartUI);
		View.regComponent("ui.mainGame.Items.BottomHandleItemUI",BottomHandleItemUI);
		View.regComponent("ui.mainGame.majiangParts.ChiSelePartUI",ChiSelePartUI);
		View.regComponent("ui.mainGame.Items.ShowContrTipUI",ShowContrTipUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(MajiangPageUI.uiView);
	}

	MajiangPageUI.uiView={"type":"View","props":{"width":1038,"height":640},"child":[{"type":"ClockPart","props":{"y":272,"x":469,"visible":true,"var":"clockPart","runtime":"ui.mainGame.majiangParts.ClockPartUI"}},{"type":"LeftOutputPart","props":{"y":153,"x":211,"visible":true,"var":"leftOutputPart","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.majiangParts.LeftOutputPartUI"}},{"type":"huaLeftPart","props":{"y":131,"x":161,"var":"leftHuaPart","scaleY":0.7,"scaleX":0.7,"runtime":"ui.mainGame.majiangParts.huaLeftPartUI"}},{"type":"RightOutputPart","props":{"y":153,"x":722,"visible":true,"var":"rightOutputPart","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.majiangParts.RightOutputPartUI"}},{"type":"OutputTopPart","props":{"y":153,"x":320,"var":"topOutputPart","scaleY":0.44,"scaleX":0.44,"runtime":"ui.mainGame.majiangParts.OutputTopPartUI"}},{"type":"BottomOutputPart","props":{"y":381,"x":320,"visible":true,"var":"bottomOutputPart","scaleY":0.44,"scaleX":0.44,"runtime":"ui.mainGame.majiangParts.BottomOutputPartUI"}},{"type":"Baidapai","props":{"y":281,"x":331,"var":"baidaPart","runtime":"ui.mainGame.Items.BaidapaiUI"}},{"type":"RightHandlePart","props":{"y":31,"x":942,"visible":true,"var":"rightHandlePart","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.majiangParts.RightHandlePartUI"}},{"type":"TopHandlePart","props":{"y":49,"x":289,"width":957,"visible":true,"var":"topHandlePart","scaleY":0.8,"scaleX":0.8,"height":108,"runtime":"ui.mainGame.majiangParts.TopHandlePartUI"}},{"type":"RightPengGangPart","props":{"y":160,"x":896,"visible":true,"var":"rightPengGangPart","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.majiangParts.RightPengGangPartUI"}},{"type":"TopPengGangPart","props":{"y":62,"x":442,"var":"topPengGangPart","scaleY":0.42,"scaleX":0.42,"runtime":"ui.mainGame.majiangParts.TopPengGangPartUI"}},{"type":"huaRightPart","props":{"y":89,"x":830,"var":"rightHuaPart","scaleY":0.7,"scaleX":0.7,"runtime":"ui.mainGame.majiangParts.huaRightPartUI"}},{"type":"huaTopPart","props":{"y":102,"x":343,"var":"topHuaPart","scaleY":0.35,"scaleX":0.35,"runtime":"ui.mainGame.majiangParts.huaTopPartUI"}},{"type":"huaBottomPart","props":{"y":479,"x":162,"var":"bottomHuaPart","scaleY":0.4,"scaleX":0.4,"runtime":"ui.mainGame.majiangParts.huaBottomPartUI"}},{"type":"ShowContrTip","props":{"y":334,"x":253,"var":"controlTip","runtime":"ui.mainGame.Items.ShowContrTipUI"}},{"type":"TopHuTipPanel","props":{"y":87,"x":315,"var":"tophuTip","scaleY":0.45,"scaleX":0.45,"height":100,"runtime":"ui.mainGame.majiangParts.HuPaiTip.TopHuTipPanelUI"}},{"type":"LeftHuTipPanel","props":{"y":105,"x":158,"var":"leftHuTip","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.majiangParts.HuPaiTip.LeftHuTipPanelUI"}},{"type":"LeftPengGangPart","props":{"y":43,"x":100,"visible":true,"var":"leftPengGangPart","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.majiangParts.LeftPengGangPartUI"}},{"type":"LeftHandlePart","props":{"y":46,"x":96,"width":99,"visible":true,"var":"leftHandlePart","scaleY":0.8,"scaleX":0.8,"height":468,"runtime":"ui.mainGame.majiangParts.LeftHandlePartUI"}},{"type":"RightHuTipPanel","props":{"y":105,"x":818,"var":"rightHuTip","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.majiangParts.HuPaiTip.RightHuTipPanelUI"}},{"type":"BottomPengGangPart","props":{"y":553,"x":29,"visible":true,"var":"bottomPengGangPart","scaleY":0.44,"scaleX":0.44,"runtime":"ui.mainGame.majiangParts.BottomPengGangPartUI"}},{"type":"BottomHandlePart","props":{"y":530,"x":30,"visible":true,"var":"bottomHandlePart","scaleY":0.75,"scaleX":0.75,"runtime":"ui.mainGame.majiangParts.BottomHandlePartUI"}},{"type":"HandleEff","props":{"var":"handleEffPart","runtime":"ui.mainGame.majiangParts.HandleEffUI"}},{"type":"BottomHuTipPanel","props":{"y":469,"x":267,"var":"bottomHuTip","scaleY":0.5,"scaleX":0.5,"runtime":"ui.mainGame.majiangParts.HuPaiTip.BottomHuTipPanelUI"}},{"type":"HandleBtnsPart","props":{"y":424,"x":782,"visible":false,"var":"handleBtns","runtime":"ui.mainGame.majiangParts.HandleBtnsPartUI"}},{"type":"BottomHandleItem","props":{"y":247,"x":743,"var":"rightTempPopcard","scaleY":0.7,"scaleX":0.7,"runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":383,"x":486,"var":"bottomTempPopcard","scaleY":0.7,"scaleX":0.7,"runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":247,"x":230,"var":"leftTempPopcard","scaleY":0.7,"scaleX":0.7,"runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":154,"x":486,"var":"topTempPopcard","scaleY":0.7,"scaleX":0.7,"runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"ChiSelePart","props":{"y":435,"x":323,"var":"chiSelePart","scaleY":0.6,"scaleX":0.6,"runtime":"ui.mainGame.majiangParts.ChiSelePartUI"}},{"type":"shaiziPage","props":{"y":0,"x":0,"var":"shaiziPart","mouseEnabled":false,"runtime":"ui.mainGame.majiangParts.shaiziPageUI"}}]};
	return MajiangPageUI;
})(View)


//class ui.mainGame.majiangParts.animalEff.ShaiziEffUI extends laya.ui.View
var ShaiziEffUI=(function(_super){
	function ShaiziEffUI(){
		this.shaizi0=null;
		this.shaizi1=null;
		this.value0=null;
		this.value1=null;
		ShaiziEffUI.__super.call(this);
	}

	__class(ShaiziEffUI,'ui.mainGame.majiangParts.animalEff.ShaiziEffUI',_super);
	var __proto=ShaiziEffUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(ShaiziEffUI.uiView);
	}

	ShaiziEffUI.uiView={"type":"View","props":{"width":133,"height":80},"child":[{"type":"Animation","props":{"y":37,"x":32,"var":"shaizi0","source":"mainGame/majiangParts/animalEff/Shaizi.ani","scaleY":0.5,"scaleX":0.5}},{"type":"Animation","props":{"y":37,"x":100,"var":"shaizi1","source":"mainGame/majiangParts/animalEff/Shaizi.ani","scaleY":0.5,"scaleX":0.5}},{"type":"Image","props":{"y":0,"x":0,"var":"value0","skin":"gametable/shaizi/shaizi01.png","scaleY":0.5,"scaleX":0.5}},{"type":"Image","props":{"y":0,"x":69,"var":"value1","skin":"gametable/shaizi/shaizi01.png","scaleY":0.5,"scaleX":0.5}}]};
	return ShaiziEffUI;
})(View)


//class ui.mainGame.majiangParts.BottomHandlePartUI extends laya.ui.View
var BottomHandlePartUI=(function(_super){
	function BottomHandlePartUI(){
		this.tingImg=null;
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
		BottomHandlePartUI.__super.call(this);
	}

	__class(BottomHandlePartUI,'ui.mainGame.majiangParts.BottomHandlePartUI',_super);
	var __proto=BottomHandlePartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.BottomHandleItemUI",BottomHandleItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(BottomHandlePartUI.uiView);
	}

	BottomHandlePartUI.uiView={"type":"View","props":{},"child":[{"type":"Image","props":{"y":0,"x":1,"width":1014,"var":"tingImg","height":129}},{"type":"BottomHandleItem","props":{"y":0,"x":0,"width":90,"var":"card0","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":91,"var":"card1","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":182,"var":"card2","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":273,"var":"card3","scaleY":1,"runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":364,"var":"card4","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":455,"var":"card5","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":546,"var":"card6","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":637,"var":"card7","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":728,"var":"card8","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":819,"var":"card9","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":910,"var":"card10","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":1001,"var":"card11","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":1092,"var":"card12","runtime":"ui.mainGame.Items.BottomHandleItemUI"}},{"type":"BottomHandleItem","props":{"y":0,"x":1210,"var":"card13","runtime":"ui.mainGame.Items.BottomHandleItemUI"}}]};
	return BottomHandlePartUI;
})(View)


//class ui.mainGame.majiangParts.BottomOutputPartUI extends laya.ui.View
var BottomOutputPartUI=(function(_super){
	function BottomOutputPartUI(){
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
		BottomOutputPartUI.__super.call(this);
	}

	__class(BottomOutputPartUI,'ui.mainGame.majiangParts.BottomOutputPartUI',_super);
	var __proto=BottomOutputPartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.OutputBottomItemUI",OutputBottomItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(BottomOutputPartUI.uiView);
	}

	BottomOutputPartUI.uiView={"type":"View","props":{},"child":[{"type":"OutputBottomItem","props":{"y":0,"x":0,"var":"card0","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":90,"var":"card1","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":180,"var":"card2","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":270,"var":"card3","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":360,"var":"card4","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":1,"x":450,"var":"card5","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":1,"x":540,"var":"card6","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":1,"x":630,"var":"card7","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":1,"x":720,"var":"card8","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":1,"x":810,"var":"card9","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":112,"x":0,"var":"card10","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":112,"x":90,"var":"card11","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":112,"x":180,"var":"card12","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":112,"x":270,"var":"card13","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":112,"x":360,"var":"card14","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":112,"x":450,"var":"card15","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":112,"x":540,"var":"card16","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":112,"x":630,"var":"card17","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":112,"x":720,"var":"card18","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":112,"x":810,"var":"card19","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":-30,"x":0,"var":"card20","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":-30,"x":90,"var":"card21","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":-30,"x":180,"var":"card22","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":-30,"x":270,"var":"card23","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":-30,"x":360,"var":"card24","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":-30,"x":450,"var":"card25","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":-30,"x":540,"var":"card26","runtime":"ui.mainGame.Items.OutputBottomItemUI"}}]};
	return BottomOutputPartUI;
})(View)


//class ui.mainGame.majiangParts.BottomPengGangPartUI extends laya.ui.View
var BottomPengGangPartUI=(function(_super){
	function BottomPengGangPartUI(){
		this.peng0=null;
		this.peng1=null;
		this.peng2=null;
		this.peng3=null;
		BottomPengGangPartUI.__super.call(this);
	}

	__class(BottomPengGangPartUI,'ui.mainGame.majiangParts.BottomPengGangPartUI',_super);
	var __proto=BottomPengGangPartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.BottomPengGangItemUI",BottomPengGangItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(BottomPengGangPartUI.uiView);
	}

	BottomPengGangPartUI.uiView={"type":"View","props":{"scaleY":1},"child":[{"type":"BottomPengGangItem","props":{"y":0,"x":0,"var":"peng0","scaleY":1.4,"scaleX":1.4,"runtime":"ui.mainGame.Items.BottomPengGangItemUI"}},{"type":"BottomPengGangItem","props":{"y":0,"x":440,"var":"peng1","scaleY":1.4,"scaleX":1.4,"runtime":"ui.mainGame.Items.BottomPengGangItemUI"}},{"type":"BottomPengGangItem","props":{"y":0,"x":881,"var":"peng2","scaleY":1.4,"scaleX":1.4,"runtime":"ui.mainGame.Items.BottomPengGangItemUI"}},{"type":"BottomPengGangItem","props":{"y":-4,"x":1321,"var":"peng3","scaleY":1.4,"scaleX":1.4,"runtime":"ui.mainGame.Items.BottomPengGangItemUI"}}]};
	return BottomPengGangPartUI;
})(View)


//class ui.mainGame.majiangParts.ChiSelePartUI extends laya.ui.View
var ChiSelePartUI=(function(_super){
	function ChiSelePartUI(){
		this.backimg=null;
		this.chi0=null;
		this.card0=null;
		this.card1=null;
		this.chi1=null;
		this.card2=null;
		this.card3=null;
		this.chi2=null;
		this.card4=null;
		this.card5=null;
		ChiSelePartUI.__super.call(this);
	}

	__class(ChiSelePartUI,'ui.mainGame.majiangParts.ChiSelePartUI',_super);
	var __proto=ChiSelePartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.OutputBottomItemUI",OutputBottomItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(ChiSelePartUI.uiView);
	}

	ChiSelePartUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":4,"x":0,"width":642,"var":"backimg","skin":"gametable/hubeijing.png","sizeGrid":"22,20,23,23","height":163}},{"type":"Box","props":{"y":0,"x":19,"width":182,"var":"chi0"},"child":[{"type":"OutputBottomItem","props":{"y":16,"x":0,"var":"card0","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":16,"x":90,"var":"card1","runtime":"ui.mainGame.Items.OutputBottomItemUI"}}]},{"type":"Box","props":{"y":0,"x":229,"var":"chi1"},"child":[{"type":"OutputBottomItem","props":{"y":16,"x":0,"var":"card2","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":16,"x":90,"var":"card3","runtime":"ui.mainGame.Items.OutputBottomItemUI"}}]},{"type":"Box","props":{"y":0,"x":439,"var":"chi2"},"child":[{"type":"OutputBottomItem","props":{"y":16,"x":0,"var":"card4","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":16,"x":90,"var":"card5","runtime":"ui.mainGame.Items.OutputBottomItemUI"}}]}]};
	return ChiSelePartUI;
})(View)


//class ui.mainGame.majiangParts.ClockPartUI extends laya.ui.View
var ClockPartUI=(function(_super){
	function ClockPartUI(){
		this.wenliImg=null;
		this.middleBox=null;
		this.bottomSimbol=null;
		this.rightSimbol=null;
		this.topSimbol=null;
		this.leftSimbol=null;
		this.clockTf=null;
		this.leftRoundNumTf=null;
		this.leftCardsNumTf=null;
		ClockPartUI.__super.call(this);
	}

	__class(ClockPartUI,'ui.mainGame.majiangParts.ClockPartUI',_super);
	var __proto=ClockPartUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(ClockPartUI.uiView);
	}

	ClockPartUI.uiView={"type":"View","props":{},"child":[{"type":"Image","props":{"y":-141,"x":-128,"width":352,"var":"wenliImg","skin":"gametable/wenli_xiangshan.png","height":352}},{"type":"Box","props":{"y":49.4,"x":49.4,"width":90.11000000000001,"var":"middleBox","scaleY":1.3,"scaleX":1.3,"pivotY":38,"pivotX":38,"height":90.11000000000001},"child":[{"type":"Image","props":{"y":0,"x":0,"width":76,"skin":"gametable/daojibeijing1.png","height":76}},{"type":"Image","props":{"y":48,"x":-14,"var":"bottomSimbol","skin":"gametable/d.png","scaleY":0.54,"scaleX":0.54}},{"type":"Image","props":{"y":-14,"x":48,"var":"rightSimbol","skin":"gametable/n.png","scaleY":0.54,"scaleX":0.54}},{"type":"Image","props":{"y":-12,"x":-15,"var":"topSimbol","skin":"gametable/x.png","scaleY":0.54,"scaleX":0.54}},{"type":"Image","props":{"y":-14,"x":-12,"var":"leftSimbol","skin":"gametable/b.png","scaleY":0.54,"scaleX":0.54}}]},{"type":"Label","props":{"y":38.4,"x":33.4,"width":37,"var":"clockTf","valign":"top","text":"00","height":37,"fontSize":25,"color":"#f9ee3e","bold":true,"align":"left"}},{"type":"Box","props":{"y":31.4,"x":-107},"child":[{"type":"Image","props":{"width":96,"skin":"gameCommon/daojibeijing2.png","sizeGrid":"0,28,0,28","height":36}},{"type":"Label","props":{"y":0,"x":12,"width":20,"valign":"middle","text":"第","height":34,"fontSize":20,"font":"SimHei","color":"#00edc2","bold":true}},{"type":"Label","props":{"y":6,"x":32,"var":"leftRoundNumTf","valign":"middle","text":15,"fontSize":22,"font":"SimHei","color":"#f4f7aa","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":66,"width":20,"valign":"middle","text":"局","height":36,"fontSize":20,"font":"SimHei","color":"#00edc2","bold":true}}]},{"type":"Box","props":{"y":31.4,"x":109.4},"child":[{"type":"Image","props":{"width":96,"skin":"gameCommon/daojibeijing2.png","sizeGrid":"0,28,0,28","height":36}},{"type":"Label","props":{"y":7,"x":57,"width":32,"var":"leftCardsNumTf","valign":"top","text":45,"height":32,"fontSize":22,"color":"#f4f7aa","bold":true,"align":"center"}},{"type":"Image","props":{"y":6,"x":11,"skin":"gameCommon/gameSheng.png"}}]}]};
	return ClockPartUI;
})(View)


//class ui.mainGame.majiangParts.HandleBtnsPartUI extends laya.ui.View
var HandleBtnsPartUI=(function(_super){
	function HandleBtnsPartUI(){
		this.tingBtn=null;
		this.chiBtn=null;
		this.cancelBtn=null;
		this.pengBtn=null;
		this.gangBtn=null;
		this.huBtn=null;
		this.kouBtn=null;
		HandleBtnsPartUI.__super.call(this);
	}

	__class(HandleBtnsPartUI,'ui.mainGame.majiangParts.HandleBtnsPartUI',_super);
	var __proto=HandleBtnsPartUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(HandleBtnsPartUI.uiView);
	}

	HandleBtnsPartUI.uiView={"type":"View","props":{},"child":[{"type":"Button","props":{"y":0,"x":873,"var":"tingBtn","stateNum":1,"skin":"gametable/zhuomianliang1.png"}},{"type":"Button","props":{"y":0,"x":0,"var":"chiBtn","stateNum":1,"skin":"gametable/zhuomianchi.png"}},{"type":"Button","props":{"y":0,"x":1048,"var":"cancelBtn","stateNum":1,"skin":"gametable/zhuomianquxiao.png"}},{"type":"Button","props":{"y":0,"x":175,"var":"pengBtn","stateNum":1,"skin":"gametable/zhuomianpeng.png"}},{"type":"Button","props":{"y":0,"x":349,"var":"gangBtn","stateNum":1,"skin":"gametable/zhuomiangang.png"}},{"type":"Button","props":{"y":0,"x":699,"var":"huBtn","stateNum":1,"skin":"gametable/zhuomianhu.png"}},{"type":"Button","props":{"y":32,"x":524,"width":130,"var":"kouBtn","stateNum":1,"skin":"common/btn_green.png","labelSize":25,"labelFont":"黑体","labelColors":"#ffffff;#ffffff;#ffffff","label":"选择完成","height":72,"sizeGrid":"0,27,0,31"}}]};
	return HandleBtnsPartUI;
})(View)


//class ui.mainGame.majiangParts.HandleEffUI extends laya.ui.View
var HandleEffUI=(function(_super){
	function HandleEffUI(){
		this.item3=null;
		this.item0=null;
		this.item1=null;
		this.item2=null;
		HandleEffUI.__super.call(this);
	}

	__class(HandleEffUI,'ui.mainGame.majiangParts.HandleEffUI',_super);
	var __proto=HandleEffUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.HandleEffItemUI",HandleEffItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(HandleEffUI.uiView);
	}

	HandleEffUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"HandleEffItem","props":{"y":172,"x":105,"var":"item3","runtime":"ui.mainGame.Items.HandleEffItemUI"}},{"type":"HandleEffItem","props":{"y":324,"x":369,"var":"item0","runtime":"ui.mainGame.Items.HandleEffItemUI"}},{"type":"HandleEffItem","props":{"y":172,"x":634,"var":"item1","runtime":"ui.mainGame.Items.HandleEffItemUI"}},{"type":"HandleEffItem","props":{"y":11,"x":369,"var":"item2","runtime":"ui.mainGame.Items.HandleEffItemUI"}}]};
	return HandleEffUI;
})(View)


//class ui.mainGame.majiangParts.huaBottomPartUI extends laya.ui.View
var huaBottomPartUI=(function(_super){
	function huaBottomPartUI(){
		this.huaBg=null;
		this.hua0=null;
		this.hua1=null;
		this.hua2=null;
		this.hua3=null;
		this.hua4=null;
		this.hua5=null;
		this.hua6=null;
		this.hua7=null;
		this.hua8=null;
		this.hua9=null;
		this.hua10=null;
		this.hua11=null;
		this.hua12=null;
		this.hua13=null;
		this.hua14=null;
		this.huaAnim=null;
		huaBottomPartUI.__super.call(this);
	}

	__class(huaBottomPartUI,'ui.mainGame.majiangParts.huaBottomPartUI',_super);
	var __proto=huaBottomPartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.HuaBotttomItemUI",HuaBotttomItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(huaBottomPartUI.uiView);
	}

	huaBottomPartUI.uiView={"type":"View","props":{"width":1353,"height":142},"child":[{"type":"Image","props":{"y":-339,"x":335,"width":680,"var":"huaBg","skin":"gametable/buhua.png","height":339}},{"type":"HuaBotttomItem","props":{"y":0,"x":0,"var":"hua0","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":90,"var":"hua1","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":180,"var":"hua2","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":270,"var":"hua3","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":361,"var":"hua4","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":451,"var":"hua5","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":540,"var":"hua6","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":630,"var":"hua7","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":720,"var":"hua8","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":811,"var":"hua9","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":901,"var":"hua10","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":991,"var":"hua11","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":1171,"var":"hua12","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":1081,"var":"hua13","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":0,"x":1261,"var":"hua14","runtime":"ui.mainGame.Items.HuaBotttomItemUI"}},{"type":"HuaBotttomItem","props":{"y":-270,"x":580,"var":"huaAnim","scaleY":1.5,"scaleX":1.5,"runtime":"ui.mainGame.Items.HuaBotttomItemUI"}}]};
	return huaBottomPartUI;
})(View)


//class ui.mainGame.majiangParts.huaLeftPartUI extends laya.ui.View
var huaLeftPartUI=(function(_super){
	function huaLeftPartUI(){
		this.huaBg=null;
		this.hua0=null;
		this.hua1=null;
		this.hua2=null;
		this.hua3=null;
		this.hua4=null;
		this.hua5=null;
		this.hua6=null;
		this.hua7=null;
		this.hua8=null;
		this.hua9=null;
		this.hua10=null;
		this.hua11=null;
		this.hua12=null;
		this.hua13=null;
		this.hua14=null;
		this.huaAnim=null;
		huaLeftPartUI.__super.call(this);
	}

	__class(huaLeftPartUI,'ui.mainGame.majiangParts.huaLeftPartUI',_super);
	var __proto=huaLeftPartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.HuaLeftItemUI",HuaLeftItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(huaLeftPartUI.uiView);
	}

	huaLeftPartUI.uiView={"type":"View","props":{},"child":[{"type":"Image","props":{"y":124,"x":242,"width":355,"var":"huaBg","skin":"gametable/buhua.png","rotation":90,"height":177}},{"type":"HuaLeftItem","props":{"y":0,"x":0,"var":"hua0","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":40,"x":0,"var":"hua1","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":80,"x":0,"var":"hua2","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":120,"x":0,"var":"hua3","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":160,"x":0,"var":"hua4","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":200,"x":0,"var":"hua5","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":240,"x":0,"var":"hua6","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":280,"x":0,"var":"hua7","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":320,"x":0,"var":"hua8","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":360,"x":0,"var":"hua9","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":400,"x":0,"var":"hua10","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":440,"x":0,"var":"hua11","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":480,"x":0,"var":"hua12","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":520,"x":0,"var":"hua13","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":560,"x":0,"var":"hua14","runtime":"ui.mainGame.Items.HuaLeftItemUI"}},{"type":"HuaLeftItem","props":{"y":245,"x":101,"var":"huaAnim","scaleY":1.5,"scaleX":1.5,"runtime":"ui.mainGame.Items.HuaLeftItemUI"}}]};
	return huaLeftPartUI;
})(View)


//class ui.mainGame.majiangParts.huaRightPartUI extends laya.ui.View
var huaRightPartUI=(function(_super){
	function huaRightPartUI(){
		this.huaBg=null;
		this.hua14=null;
		this.hua13=null;
		this.hua12=null;
		this.hua11=null;
		this.hua10=null;
		this.hua9=null;
		this.hua8=null;
		this.hua7=null;
		this.hua6=null;
		this.hua5=null;
		this.hua4=null;
		this.hua3=null;
		this.hua2=null;
		this.hua1=null;
		this.hua0=null;
		this.huaAnim=null;
		huaRightPartUI.__super.call(this);
	}

	__class(huaRightPartUI,'ui.mainGame.majiangParts.huaRightPartUI',_super);
	var __proto=huaRightPartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.HuaRightItemUI",HuaRightItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(huaRightPartUI.uiView);
	}

	huaRightPartUI.uiView={"type":"View","props":{},"child":[{"type":"Image","props":{"y":483,"x":-179,"width":358,"var":"huaBg","skin":"gametable/buhua.png","rotation":-90,"height":178}},{"type":"HuaRightItem","props":{"y":0,"x":0,"var":"hua14","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":40,"x":0,"var":"hua13","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":80,"x":0,"var":"hua12","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":120,"x":0,"var":"hua11","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":160,"x":0,"var":"hua10","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":200,"x":0,"var":"hua9","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":240,"x":0,"var":"hua8","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":280,"x":0,"var":"hua7","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":320,"x":0,"var":"hua6","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":360,"x":0,"var":"hua5","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":400,"x":0,"var":"hua4","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":440,"x":0,"var":"hua3","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":480,"x":0,"var":"hua2","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":520,"x":0,"var":"hua1","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":560,"x":0,"var":"hua0","runtime":"ui.mainGame.Items.HuaRightItemUI"}},{"type":"HuaRightItem","props":{"y":275,"x":-136,"var":"huaAnim","scaleY":1.5,"scaleX":1.5,"runtime":"ui.mainGame.Items.HuaRightItemUI"}}]};
	return huaRightPartUI;
})(View)


//class ui.mainGame.majiangParts.huaTopPartUI extends laya.ui.View
var huaTopPartUI=(function(_super){
	function huaTopPartUI(){
		this.huaBg=null;
		this.hua14=null;
		this.hua13=null;
		this.hua12=null;
		this.hua11=null;
		this.hua10=null;
		this.hua9=null;
		this.hua8=null;
		this.hua7=null;
		this.hua6=null;
		this.hua5=null;
		this.hua4=null;
		this.hua3=null;
		this.hua2=null;
		this.hua1=null;
		this.hua0=null;
		this.huaAnim=null;
		huaTopPartUI.__super.call(this);
	}

	__class(huaTopPartUI,'ui.mainGame.majiangParts.huaTopPartUI',_super);
	var __proto=huaTopPartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.HuaTopItemUI",HuaTopItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(huaTopPartUI.uiView);
	}

	huaTopPartUI.uiView={"type":"View","props":{"width":1400},"child":[{"type":"Image","props":{"y":470,"x":999,"width":661,"var":"huaBg","skin":"gametable/buhua.png","rotation":180,"height":330}},{"type":"HuaTopItem","props":{"y":0,"x":0,"var":"hua14","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":89,"var":"hua13","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":268,"var":"hua12","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":179,"var":"hua11","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":357,"var":"hua10","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":447,"var":"hua9","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":536,"var":"hua8","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":626,"var":"hua7","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":715,"var":"hua6","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":804,"var":"hua5","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":894,"var":"hua4","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":983,"var":"hua3","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":1072,"var":"hua2","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":1162,"var":"hua1","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":0,"x":1251,"var":"hua0","runtime":"ui.mainGame.Items.HuaTopItemUI"}},{"type":"HuaTopItem","props":{"y":191,"x":626,"var":"huaAnim","scaleY":1.5,"scaleX":1.5,"runtime":"ui.mainGame.Items.HuaTopItemUI"}}]};
	return huaTopPartUI;
})(View)


//class ui.mainGame.majiangParts.HuPaiTip.BottomHuTipPanelUI extends laya.ui.View
var BottomHuTipPanelUI=(function(_super){
	function BottomHuTipPanelUI(){
		this.backimg=null;
		this.card0=null;
		this.card1=null;
		this.card2=null;
		this.card3=null;
		this.card4=null;
		this.card5=null;
		this.card6=null;
		this.card7=null;
		this.card8=null;
		this.liangImg=null;
		BottomHuTipPanelUI.__super.call(this);
	}

	__class(BottomHuTipPanelUI,'ui.mainGame.majiangParts.HuPaiTip.BottomHuTipPanelUI',_super);
	var __proto=BottomHuTipPanelUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.OutputBottomItemUI",OutputBottomItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(BottomHuTipPanelUI.uiView);
	}

	BottomHuTipPanelUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":-4,"x":0,"width":903,"var":"backimg","skin":"gametable/hubeijing.png","sizeGrid":"16,24,18,28","height":149}},{"type":"Image","props":{"y":38,"x":13,"width":57,"skin":"gametable/hu.png","height":58}},{"type":"OutputBottomItem","props":{"y":0,"x":75,"width":0,"var":"card0","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":165,"var":"card1","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":255,"var":"card2","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":345,"var":"card3","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":436,"var":"card4","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":526,"var":"card5","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":616,"var":"card6","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":706,"var":"card7","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":0,"x":796,"var":"card8","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"Image","props":{"y":38,"x":910,"width":190,"visible":false,"var":"liangImg","skin":"gametable/liangpaiziji.png","height":60}}]};
	return BottomHuTipPanelUI;
})(View)


//class ui.mainGame.majiangParts.HuPaiTip.LeftHuTipPanelUI extends laya.ui.View
var LeftHuTipPanelUI=(function(_super){
	function LeftHuTipPanelUI(){
		this.backimg=null;
		this.card0=null;
		this.card1=null;
		this.card2=null;
		this.card3=null;
		this.card4=null;
		this.card5=null;
		this.card6=null;
		this.card7=null;
		this.card8=null;
		this.liangImg=null;
		LeftHuTipPanelUI.__super.call(this);
	}

	__class(LeftHuTipPanelUI,'ui.mainGame.majiangParts.HuPaiTip.LeftHuTipPanelUI',_super);
	var __proto=LeftHuTipPanelUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.OutputLeftItemUI",OutputLeftItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(LeftHuTipPanelUI.uiView);
	}

	LeftHuTipPanelUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":0,"x":-2,"width":69,"var":"backimg","skin":"gametable/hubeijing.png","sizeGrid":"17,20,18,25","height":445}},{"type":"OutputLeftItem","props":{"y":58,"x":0,"var":"card0","height":48,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"Image","props":{"y":8,"x":6,"width":45,"skin":"gametable/hu.png","height":46}},{"type":"OutputLeftItem","props":{"y":99,"x":0,"var":"card1","height":48,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":140,"x":0,"var":"card2","height":48,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":181,"x":0,"var":"card3","height":48,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":222,"x":0,"var":"card4","height":48,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":263,"x":0,"var":"card5","height":48,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":304,"x":0,"var":"card6","height":48,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":345,"x":0,"var":"card7","height":48,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":386,"x":0,"var":"card8","height":48,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"Image","props":{"y":446,"x":3,"visible":false,"var":"liangImg","skin":"gametable/liangpaiqitaren.png"}}]};
	return LeftHuTipPanelUI;
})(View)


//class ui.mainGame.majiangParts.HuPaiTip.RightHuTipPanelUI extends laya.ui.View
var RightHuTipPanelUI=(function(_super){
	function RightHuTipPanelUI(){
		this.backimg=null;
		this.card0=null;
		this.card1=null;
		this.card2=null;
		this.card3=null;
		this.card4=null;
		this.card5=null;
		this.card6=null;
		this.card7=null;
		this.card8=null;
		this.liangImg=null;
		RightHuTipPanelUI.__super.call(this);
	}

	__class(RightHuTipPanelUI,'ui.mainGame.majiangParts.HuPaiTip.RightHuTipPanelUI',_super);
	var __proto=RightHuTipPanelUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.OutputRightItemUI",OutputRightItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(RightHuTipPanelUI.uiView);
	}

	RightHuTipPanelUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":2,"x":-1,"width":69,"var":"backimg","skin":"gametable/hubeijing.png","sizeGrid":"17,23,25,22","height":444}},{"type":"Image","props":{"y":8,"x":6,"skin":"gametable/hu.png"}},{"type":"OutputRightItem","props":{"y":58,"x":0,"var":"card0","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":99,"x":0,"var":"card1","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":140,"x":0,"var":"card2","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":181,"x":0,"var":"card3","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":222,"x":0,"var":"card4","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":263,"x":0,"var":"card5","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":304,"x":0,"var":"card6","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":345,"x":0,"var":"card7","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":386,"x":0,"var":"card8","height":48,"runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"Image","props":{"y":446,"x":4,"visible":false,"var":"liangImg","skin":"gametable/liangpaiqitaren.png"}}]};
	return RightHuTipPanelUI;
})(View)


//class ui.mainGame.majiangParts.HuPaiTip.TopHuTipPanelUI extends laya.ui.View
var TopHuTipPanelUI=(function(_super){
	function TopHuTipPanelUI(){
		this.backimg=null;
		this.card0=null;
		this.card1=null;
		this.card2=null;
		this.card3=null;
		this.card4=null;
		this.card5=null;
		this.card6=null;
		this.card7=null;
		this.card8=null;
		this.liangImg=null;
		TopHuTipPanelUI.__super.call(this);
	}

	__class(TopHuTipPanelUI,'ui.mainGame.majiangParts.HuPaiTip.TopHuTipPanelUI',_super);
	var __proto=TopHuTipPanelUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.OutputBottomItemUI",OutputBottomItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(TopHuTipPanelUI.uiView);
	}

	TopHuTipPanelUI.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":899,"var":"backimg","skin":"gametable/hubeijing.png","sizeGrid":"18,19,22,23","height":158}},{"type":"Image","props":{"y":37,"x":-3,"width":73,"skin":"gametable/hu.png","height":75}},{"type":"OutputBottomItem","props":{"y":9,"x":75,"var":"card0","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":9,"x":165,"var":"card1","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":9,"x":256,"var":"card2","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":9,"x":346,"var":"card3","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":9,"x":437,"var":"card4","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":9,"x":527,"var":"card5","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":9,"x":617,"var":"card6","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":9,"x":708,"var":"card7","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":9,"x":795,"var":"card8","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"Image","props":{"y":29,"x":898,"width":166,"visible":false,"var":"liangImg","skin":"gametable/liangpaiqitaren.png","height":95}}]};
	return TopHuTipPanelUI;
})(View)


//class ui.mainGame.majiangParts.LeftHandlePartUI extends laya.ui.View
var LeftHandlePartUI=(function(_super){
	function LeftHandlePartUI(){
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
		this.tingImg=null;
		LeftHandlePartUI.__super.call(this);
	}

	__class(LeftHandlePartUI,'ui.mainGame.majiangParts.LeftHandlePartUI',_super);
	var __proto=LeftHandlePartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.LeftHandleItemUI",LeftHandleItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(LeftHandlePartUI.uiView);
	}

	LeftHandlePartUI.uiView={"type":"View","props":{},"child":[{"type":"LeftHandleItem","props":{"y":0,"x":0,"var":"card0","runtime":"ui.mainGame.Items.LeftHandleItemUI"}},{"type":"LeftHandleItem","props":{"y":40,"x":0,"var":"card1","runtime":"ui.mainGame.Items.LeftHandleItemUI"}},{"type":"LeftHandleItem","props":{"y":80,"x":0,"var":"card2","runtime":"ui.mainGame.Items.LeftHandleItemUI"}},{"type":"LeftHandleItem","props":{"y":120,"x":0,"var":"card3","runtime":"ui.mainGame.Items.LeftHandleItemUI"}},{"type":"LeftHandleItem","props":{"y":160,"x":0,"var":"card4","runtime":"ui.mainGame.Items.LeftHandleItemUI"}},{"type":"LeftHandleItem","props":{"y":200,"x":0,"var":"card5","runtime":"ui.mainGame.Items.LeftHandleItemUI"}},{"type":"LeftHandleItem","props":{"y":240,"x":0,"var":"card6","runtime":"ui.mainGame.Items.LeftHandleItemUI"}},{"type":"LeftHandleItem","props":{"y":280,"x":0,"var":"card7","runtime":"ui.mainGame.Items.LeftHandleItemUI"}},{"type":"LeftHandleItem","props":{"y":320,"x":0,"var":"card8","runtime":"ui.mainGame.Items.LeftHandleItemUI"}},{"type":"LeftHandleItem","props":{"y":360,"x":0,"var":"card9","runtime":"ui.mainGame.Items.LeftHandleItemUI"}},{"type":"LeftHandleItem","props":{"y":400,"x":0,"var":"card10","runtime":"ui.mainGame.Items.LeftHandleItemUI"}},{"type":"LeftHandleItem","props":{"y":440,"x":0,"var":"card11","runtime":"ui.mainGame.Items.LeftHandleItemUI"}},{"type":"LeftHandleItem","props":{"y":480,"x":0,"var":"card12","runtime":"ui.mainGame.Items.LeftHandleItemUI"}},{"type":"LeftHandleItem","props":{"y":534,"x":0,"var":"card13","runtime":"ui.mainGame.Items.LeftHandleItemUI"}},{"type":"Image","props":{"y":642,"x":185,"width":245,"visible":false,"var":"tingImg","rotation":180,"height":812}}]};
	return LeftHandlePartUI;
})(View)


//class ui.mainGame.majiangParts.LeftOutputPartUI extends laya.ui.View
var LeftOutputPartUI=(function(_super){
	function LeftOutputPartUI(){
		this.card10=null;
		this.card11=null;
		this.card12=null;
		this.card13=null;
		this.card14=null;
		this.card15=null;
		this.card16=null;
		this.card17=null;
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
		this.card18=null;
		this.card19=null;
		this.card20=null;
		this.card21=null;
		this.card22=null;
		this.card23=null;
		this.card24=null;
		this.card25=null;
		this.card26=null;
		LeftOutputPartUI.__super.call(this);
	}

	__class(LeftOutputPartUI,'ui.mainGame.majiangParts.LeftOutputPartUI',_super);
	var __proto=LeftOutputPartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.OutputLeftItemUI",OutputLeftItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(LeftOutputPartUI.uiView);
	}

	LeftOutputPartUI.uiView={"type":"View","props":{},"child":[{"type":"OutputLeftItem","props":{"y":0,"x":0,"var":"card10","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":40,"x":0,"var":"card11","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":80,"x":0,"var":"card12","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":120,"x":0,"var":"card13","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":160,"x":0,"var":"card14","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":200,"x":0,"var":"card15","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":240,"x":0,"var":"card16","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":280,"x":0,"var":"card17","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":-2,"x":64,"var":"card0","height":48,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":38,"x":64,"var":"card1","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":78,"x":64,"var":"card2","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":118,"x":64,"var":"card3","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":158,"x":64,"width":65,"var":"card4","height":43,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":198,"x":64,"width":65,"var":"card5","height":43,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":238,"x":64,"var":"card6","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":280,"x":64,"var":"card7","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":320,"x":64,"var":"card8","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":360,"x":64,"var":"card9","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":320,"x":0,"var":"card18","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":360,"x":0,"var":"card19","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":-16,"x":64,"var":"card20","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":24,"x":64,"width":65,"var":"card21","height":43,"runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":64,"x":64,"var":"card22","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":104,"x":64,"var":"card23","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":144,"x":64,"var":"card24","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":184,"x":64,"var":"card25","runtime":"ui.mainGame.Items.OutputLeftItemUI"}},{"type":"OutputLeftItem","props":{"y":224,"x":64,"var":"card26","runtime":"ui.mainGame.Items.OutputLeftItemUI"}}]};
	return LeftOutputPartUI;
})(View)


//class ui.mainGame.majiangParts.LeftPengGangPartUI extends laya.ui.View
var LeftPengGangPartUI=(function(_super){
	function LeftPengGangPartUI(){
		this.peng0=null;
		this.peng1=null;
		this.peng2=null;
		this.peng3=null;
		LeftPengGangPartUI.__super.call(this);
	}

	__class(LeftPengGangPartUI,'ui.mainGame.majiangParts.LeftPengGangPartUI',_super);
	var __proto=LeftPengGangPartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.LeftPengGangItemUI",LeftPengGangItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(LeftPengGangPartUI.uiView);
	}

	LeftPengGangPartUI.uiView={"type":"View","props":{},"child":[{"type":"LeftPengGangItem","props":{"y":0,"x":3,"var":"peng0","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.LeftPengGangItemUI"}},{"type":"LeftPengGangItem","props":{"y":120,"x":3,"var":"peng1","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.LeftPengGangItemUI"}},{"type":"LeftPengGangItem","props":{"y":240,"x":3,"var":"peng2","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.LeftPengGangItemUI"}},{"type":"LeftPengGangItem","props":{"y":360,"x":3,"var":"peng3","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.LeftPengGangItemUI"}}]};
	return LeftPengGangPartUI;
})(View)


//class ui.mainGame.majiangParts.Newcalculate.CalculatePerItemUI extends laya.ui.View
var CalculatePerItemUI=(function(_super){
	function CalculatePerItemUI(){
		this.pengGangCards=null;
		this.handCards=null;
		this.headImg=null;
		this.paixingTf=null;
		this.taishuTf=null;
		CalculatePerItemUI.__super.call(this);
	}

	__class(CalculatePerItemUI,'ui.mainGame.majiangParts.Newcalculate.CalculatePerItemUI',_super);
	var __proto=CalculatePerItemUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.majiangParts.BottomPengGangPartUI",BottomPengGangPartUI);
		View.regComponent("ui.mainGame.majiangParts.BottomHandlePartUI",BottomHandlePartUI);
		View.regComponent("Text",Text);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(CalculatePerItemUI.uiView);
	}

	CalculatePerItemUI.uiView={"type":"View","props":{"width":0,"height":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":867,"skin":"common/wenzidi.png","sizeGrid":"13,14,11,14","height":116}},{"type":"BottomPengGangPart","props":{"y":6,"x":89,"visible":true,"var":"pengGangCards","scaleY":0.37,"scaleX":0.37,"runtime":"ui.mainGame.majiangParts.BottomPengGangPartUI"}},{"type":"BottomHandlePart","props":{"y":5,"x":129,"visible":true,"var":"handCards","scaleY":0.53,"scaleX":0.53,"runtime":"ui.mainGame.majiangParts.BottomHandlePartUI"}},{"type":"Image","props":{"y":43,"x":46,"width":70,"var":"headImg","skin":"common/morentouxiang.png","mouseThrough":true,"height":70,"anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":86,"x":22,"wordWrap":false,"width":610,"var":"paixingTf","text":"接炮（七对）接炮（七对）接炮（七对）接炮（七对）接炮（七对）","height":25,"fontSize":20,"font":"SimHei","color":"#ffffff"}},{"type":"Text","props":{"y":86,"x":672,"wordWrap":false,"width":181,"var":"taishuTf","text":"（合计：4台）","height":25,"fontSize":20,"font":"SimHei","color":"#e0d22e","align":"right"}}]};
	return CalculatePerItemUI;
})(View)


//class ui.mainGame.majiangParts.Newcalculate.NewCalculatePerItemUI extends laya.ui.View
var NewCalculatePerItemUI=(function(_super){
	function NewCalculatePerItemUI(){
		this.headImg=null;
		this.zongchengji=null;
		this.chengbaoTf=null;
		this.huImg=null;
		this.dianPaoImg=null;
		this.nicknameTf=null;
		NewCalculatePerItemUI.__super.call(this);
	}

	__class(NewCalculatePerItemUI,'ui.mainGame.majiangParts.Newcalculate.NewCalculatePerItemUI',_super);
	var __proto=NewCalculatePerItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(NewCalculatePerItemUI.uiView);
	}

	NewCalculatePerItemUI.uiView={"type":"View","props":{"width":210,"height":135},"child":[{"type":"Image","props":{"y":0,"x":-1,"width":211,"skin":"common/wenzidi.png","sizeGrid":"13,14,11,14","height":135}},{"type":"Image","props":{"y":45,"x":49,"width":70,"var":"headImg","skin":"common/morentouxiang.png","height":70,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":80,"x":97,"width":110,"var":"zongchengji","valign":"middle","text":"+3200","height":50,"fontSize":30,"font":"SimHei","color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":51,"x":94,"width":104,"visible":false,"var":"chengbaoTf","valign":"middle","text":"双承包赔付","height":32,"fontSize":20,"font":"SimHei","color":"#952d08","align":"center"}},{"type":"Image","props":{"y":5,"x":111,"width":71,"var":"huImg","skin":"gametable/gameOver/bejinghu.png","height":80}},{"type":"Image","props":{"y":11,"x":99,"width":90,"var":"dianPaoImg","skin":"gametable/gameOver/dianpao.png","height":41}},{"type":"Label","props":{"y":93,"x":1,"width":100,"var":"nicknameTf","valign":"middle","text":"哇哈哈-胡文松","overflow":"scroll","height":28,"fontSize":20,"font":"SimHei","color":"#fff8f8","align":"center"}}]};
	return NewCalculatePerItemUI;
})(View)


//class ui.mainGame.majiangParts.Newcalculate.NewCalculatePerPageUI extends laya.ui.View
var NewCalculatePerPageUI=(function(_super){
	function NewCalculatePerPageUI(){
		this.hideBtn=null;
		this.player3=null;
		this.confirmBtn=null;
		this.player2=null;
		this.player1=null;
		this.player0=null;
		this.readyBtn=null;
		this.readyImg=null;
		this.closeBtn=null;
		this.playersBox=null;
		this.item0=null;
		this.item1=null;
		this.item2=null;
		this.onePlayerBox=null;
		this.pengGangCards=null;
		this.handCards=null;
		this.headImg=null;
		this.paixingTf=null;
		this.taishuTf=null;
		this.liujuImg=null;
		NewCalculatePerPageUI.__super.call(this);
	}

	__class(NewCalculatePerPageUI,'ui.mainGame.majiangParts.Newcalculate.NewCalculatePerPageUI',_super);
	var __proto=NewCalculatePerPageUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.majiangParts.Newcalculate.NewCalculatePerItemUI",NewCalculatePerItemUI);
		View.regComponent("ui.mainGame.majiangParts.Newcalculate.CalculatePerItemUI",CalculatePerItemUI);
		View.regComponent("ui.mainGame.majiangParts.BottomPengGangPartUI",BottomPengGangPartUI);
		View.regComponent("ui.mainGame.majiangParts.BottomHandlePartUI",BottomHandlePartUI);
		View.regComponent("Text",Text);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(NewCalculatePerPageUI.uiView);
	}

	NewCalculatePerPageUI.uiView={"type":"View","props":{"width":1038,"height":640},"child":[{"type":"Box","props":{"y":0,"x":0,"alpha":0.5},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":1038,"lineWidth":1,"height":640,"fillColor":"#000000"}}]},{"type":"Image","props":{"y":11,"x":64,"width":900,"skin":"common/popBg.png","height":548,"sizeGrid":"20,20,20,20"}},{"type":"Button","props":{"y":566,"x":179,"width":180,"visible":true,"var":"hideBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#c5893b","labelStroke":5,"labelSize":38,"labelFont":"SimHei","labelColors":"#ffffff","labelAlign":"center","height":68,"anchorX":0.5,"sizeGrid":"0,29,0,27"},"child":[{"type":"Image","props":{"y":8,"x":45,"skin":"gameCommon/btnHide.png"}}]},{"type":"NewCalculatePerItem","props":{"y":404,"x":737,"var":"player3","runtime":"ui.mainGame.majiangParts.Newcalculate.NewCalculatePerItemUI"}},{"type":"Button","props":{"y":566,"x":847,"width":180,"visible":false,"var":"confirmBtn","stateNum":1,"skin":"common/buttonLv.png","labelStrokeColor":"#c5893b","labelStroke":5,"labelSize":38,"labelFont":"SimHei","labelColors":"#ffffff","labelAlign":"center","height":68,"anchorX":0.5,"sizeGrid":"0,29,0,27"},"child":[{"type":"Image","props":{"y":11,"x":41,"skin":"common/btnConfirm.png"}}]},{"type":"NewCalculatePerItem","props":{"y":404,"x":518,"var":"player2","runtime":"ui.mainGame.majiangParts.Newcalculate.NewCalculatePerItemUI"}},{"type":"NewCalculatePerItem","props":{"y":404,"x":299,"var":"player1","runtime":"ui.mainGame.majiangParts.Newcalculate.NewCalculatePerItemUI"}},{"type":"NewCalculatePerItem","props":{"y":404,"x":80,"var":"player0","runtime":"ui.mainGame.majiangParts.Newcalculate.NewCalculatePerItemUI"}},{"type":"Button","props":{"y":566,"x":424,"width":180,"var":"readyBtn","stateNum":1,"skin":"common/buttonHuang.png","height":68,"sizeGrid":"0,29,0,28"}},{"type":"Image","props":{"y":572,"x":446,"var":"readyImg","skin":"gameCommon/nextPlay.png"}},{"type":"Button","props":{"y":566,"x":513,"width":180,"visible":false,"var":"closeBtn","stateNum":1,"skin":"common/buttonHuang.png","labelStrokeColor":"#c5893b","labelStroke":5,"labelSize":38,"labelFont":"SimHei","labelColors":"#ffffff","labelAlign":"center","height":68,"anchorX":0.5,"sizeGrid":"0,29,0,28"},"child":[{"type":"Image","props":{"y":6,"x":46,"skin":"common/closs.png"}}]},{"type":"Box","props":{"y":24,"x":80,"var":"playersBox"},"child":[{"type":"CalculatePerItem","props":{"y":4,"x":0,"var":"item0","runtime":"ui.mainGame.majiangParts.Newcalculate.CalculatePerItemUI"}},{"type":"CalculatePerItem","props":{"y":130,"var":"item1","runtime":"ui.mainGame.majiangParts.Newcalculate.CalculatePerItemUI"}},{"type":"CalculatePerItem","props":{"y":255,"var":"item2","runtime":"ui.mainGame.majiangParts.Newcalculate.CalculatePerItemUI"}}]},{"type":"Box","props":{"y":63,"x":103,"width":846,"var":"onePlayerBox","height":312},"child":[{"type":"BottomPengGangPart","props":{"y":14.503999999999998,"x":80,"visible":true,"var":"pengGangCards","scaleY":0.37,"scaleX":0.37,"runtime":"ui.mainGame.majiangParts.BottomPengGangPartUI"}},{"type":"BottomHandlePart","props":{"y":13.503999999999998,"x":120,"visible":true,"var":"handCards","scaleY":0.53,"scaleX":0.53,"runtime":"ui.mainGame.majiangParts.BottomHandlePartUI"}},{"type":"Image","props":{"y":50.504,"x":35,"width":70,"var":"headImg","skin":"common/morentouxiang.png","mouseThrough":true,"height":70,"anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":132.504,"wordWrap":true,"width":823,"var":"paixingTf","text":"接炮（七对）接炮（七对）接炮（七对）接炮（七对）接炮（七对）接炮（七对）接炮（七对）接炮（七对）接炮（清一色）接炮（自摸）","height":97,"fontSize":25,"font":"SimHei","color":"#ffffff"}},{"type":"Label","props":{"y":273.504,"x":647,"wordWrap":false,"width":347,"var":"taishuTf","valign":"middle","text":"(合计：5台)","height":38,"fontSize":25,"font":"SimHei","color":"#ffffff","bold":true,"anchorY":0,"anchorX":0.5,"align":"right"}}]},{"type":"Image","props":{"y":37.99999999999995,"x":293.99999999999994,"width":405,"var":"liujuImg","skin":"gametable/gameOver/liuju.png","height":298}}]};
	return NewCalculatePerPageUI;
})(View)


//class ui.mainGame.majiangParts.Newcalculate.NewCalculateRoundItemUI extends laya.ui.View
var NewCalculateRoundItemUI=(function(_super){
	function NewCalculateRoundItemUI(){
		NewCalculateRoundItemUI.__super.call(this);;
	}

	__class(NewCalculateRoundItemUI,'ui.mainGame.majiangParts.Newcalculate.NewCalculateRoundItemUI',_super);
	var __proto=NewCalculateRoundItemUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(NewCalculateRoundItemUI.uiView);
	}

	NewCalculateRoundItemUI.uiView={"type":"View","props":{"width":800,"height":95}};
	return NewCalculateRoundItemUI;
})(View)


//class ui.mainGame.majiangParts.Newcalculate.NewCalculateRoundPageUI extends laya.ui.View
var NewCalculateRoundPageUI=(function(_super){
	function NewCalculateRoundPageUI(){
		NewCalculateRoundPageUI.__super.call(this);;
	}

	__class(NewCalculateRoundPageUI,'ui.mainGame.majiangParts.Newcalculate.NewCalculateRoundPageUI',_super);
	var __proto=NewCalculateRoundPageUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(NewCalculateRoundPageUI.uiView);
	}

	NewCalculateRoundPageUI.uiView={"type":"View","props":{"width":1038,"height":640}};
	return NewCalculateRoundPageUI;
})(View)


//class ui.mainGame.majiangParts.OutputTopPartUI extends laya.ui.View
var OutputTopPartUI=(function(_super){
	function OutputTopPartUI(){
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
		this.card20=null;
		this.card21=null;
		this.card22=null;
		this.card23=null;
		this.card24=null;
		this.card25=null;
		this.card26=null;
		OutputTopPartUI.__super.call(this);
	}

	__class(OutputTopPartUI,'ui.mainGame.majiangParts.OutputTopPartUI',_super);
	var __proto=OutputTopPartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.OutputBottomItemUI",OutputBottomItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(OutputTopPartUI.uiView);
	}

	OutputTopPartUI.uiView={"type":"View","props":{},"child":[{"type":"OutputBottomItem","props":{"y":1,"x":809,"var":"card10","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":1,"x":719,"var":"card11","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":1,"x":629,"var":"card12","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":1,"x":539,"var":"card13","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":1,"x":449,"var":"card14","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":1,"x":360,"var":"card15","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":1,"x":270,"var":"card16","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":1,"x":180,"var":"card17","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":1,"x":90,"var":"card18","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":1,"x":0,"var":"card19","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":113,"x":809,"var":"card0","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":112,"x":719,"var":"card1","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":112,"x":629,"var":"card2","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":112,"x":539,"var":"card3","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":112,"x":449,"var":"card4","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":112,"x":360,"var":"card5","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":112,"x":270,"var":"card6","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":112,"x":180,"var":"card7","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":112,"x":90,"var":"card8","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":112,"x":0,"var":"card9","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":81,"x":809,"var":"card20","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":81,"x":719,"var":"card21","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":81,"x":629,"var":"card22","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":81,"x":540,"var":"card23","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":81,"x":450,"var":"card24","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":81,"x":360,"var":"card25","runtime":"ui.mainGame.Items.OutputBottomItemUI"}},{"type":"OutputBottomItem","props":{"y":81,"x":270,"var":"card26","runtime":"ui.mainGame.Items.OutputBottomItemUI"}}]};
	return OutputTopPartUI;
})(View)


//class ui.mainGame.majiangParts.RightHandlePartUI extends laya.ui.View
var RightHandlePartUI=(function(_super){
	function RightHandlePartUI(){
		this.card13=null;
		this.card12=null;
		this.card11=null;
		this.card10=null;
		this.card9=null;
		this.card8=null;
		this.card7=null;
		this.card6=null;
		this.card5=null;
		this.card4=null;
		this.card3=null;
		this.card2=null;
		this.card1=null;
		this.card0=null;
		this.tingImg=null;
		RightHandlePartUI.__super.call(this);
	}

	__class(RightHandlePartUI,'ui.mainGame.majiangParts.RightHandlePartUI',_super);
	var __proto=RightHandlePartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.RightHandleItemUI",RightHandleItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(RightHandlePartUI.uiView);
	}

	RightHandlePartUI.uiView={"type":"View","props":{},"child":[{"type":"RightHandleItem","props":{"y":0,"x":0,"width":53,"var":"card13","height":41,"runtime":"ui.mainGame.Items.RightHandleItemUI"}},{"type":"RightHandleItem","props":{"y":54,"x":0,"var":"card12","height":41,"runtime":"ui.mainGame.Items.RightHandleItemUI"}},{"type":"RightHandleItem","props":{"y":94,"x":0,"var":"card11","runtime":"ui.mainGame.Items.RightHandleItemUI"}},{"type":"RightHandleItem","props":{"y":134,"x":0,"var":"card10","runtime":"ui.mainGame.Items.RightHandleItemUI"}},{"type":"RightHandleItem","props":{"y":174,"x":0,"var":"card9","runtime":"ui.mainGame.Items.RightHandleItemUI"}},{"type":"RightHandleItem","props":{"y":214,"x":0,"var":"card8","runtime":"ui.mainGame.Items.RightHandleItemUI"}},{"type":"RightHandleItem","props":{"y":254,"x":0,"var":"card7","runtime":"ui.mainGame.Items.RightHandleItemUI"}},{"type":"RightHandleItem","props":{"y":294,"x":0,"var":"card6","runtime":"ui.mainGame.Items.RightHandleItemUI"}},{"type":"RightHandleItem","props":{"y":334,"x":0,"var":"card5","runtime":"ui.mainGame.Items.RightHandleItemUI"}},{"type":"RightHandleItem","props":{"y":374,"x":0,"var":"card4","runtime":"ui.mainGame.Items.RightHandleItemUI"}},{"type":"RightHandleItem","props":{"y":414,"x":0,"var":"card3","runtime":"ui.mainGame.Items.RightHandleItemUI"}},{"type":"RightHandleItem","props":{"y":454,"x":0,"var":"card2","runtime":"ui.mainGame.Items.RightHandleItemUI"}},{"type":"RightHandleItem","props":{"y":494,"x":0,"var":"card1","runtime":"ui.mainGame.Items.RightHandleItemUI"}},{"type":"RightHandleItem","props":{"y":534,"x":0,"var":"card0","height":41,"runtime":"ui.mainGame.Items.RightHandleItemUI"}},{"type":"Image","props":{"y":-170,"x":-124,"width":245,"visible":true,"var":"tingImg","height":809}}]};
	return RightHandlePartUI;
})(View)


//class ui.mainGame.majiangParts.RightOutputPartUI extends laya.ui.View
var RightOutputPartUI=(function(_super){
	function RightOutputPartUI(){
		this.card9=null;
		this.card8=null;
		this.card7=null;
		this.card6=null;
		this.card5=null;
		this.card4=null;
		this.card3=null;
		this.card2=null;
		this.card1=null;
		this.card0=null;
		this.card19=null;
		this.card18=null;
		this.card17=null;
		this.card16=null;
		this.card15=null;
		this.card14=null;
		this.card13=null;
		this.card12=null;
		this.card11=null;
		this.card10=null;
		this.card26=null;
		this.card25=null;
		this.card24=null;
		this.card23=null;
		this.card22=null;
		this.card21=null;
		this.card20=null;
		RightOutputPartUI.__super.call(this);
	}

	__class(RightOutputPartUI,'ui.mainGame.majiangParts.RightOutputPartUI',_super);
	var __proto=RightOutputPartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.OutputRightItemUI",OutputRightItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(RightOutputPartUI.uiView);
	}

	RightOutputPartUI.uiView={"type":"View","props":{},"child":[{"type":"OutputRightItem","props":{"y":0,"x":0,"var":"card9","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":40,"x":0,"width":53,"var":"card8","height":47,"runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":80,"x":0,"var":"card7","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":120,"x":0,"var":"card6","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":160,"x":0,"var":"card5","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":200,"x":0,"var":"card4","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":240,"x":0,"var":"card3","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":280,"x":0,"var":"card2","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":320,"x":0,"var":"card1","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":360,"x":0,"var":"card0","height":47,"runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":0,"x":64,"var":"card19","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":40,"x":64,"var":"card18","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":80,"x":64,"var":"card17","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":120,"x":64,"var":"card16","height":47,"runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":160,"x":64,"var":"card15","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":200,"x":64,"width":53,"var":"card14","height":78,"runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":240,"x":64,"var":"card13","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":280,"x":64,"var":"card12","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":320,"x":64,"var":"card11","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":360,"x":64,"var":"card10","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":104,"x":0,"var":"card26","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":144,"x":0,"var":"card25","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":184,"x":0,"var":"card24","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":224,"x":0,"var":"card23","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":264,"x":0,"var":"card22","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":304,"x":0,"var":"card21","runtime":"ui.mainGame.Items.OutputRightItemUI"}},{"type":"OutputRightItem","props":{"y":344,"x":0,"var":"card20","runtime":"ui.mainGame.Items.OutputRightItemUI"}}]};
	return RightOutputPartUI;
})(View)


//class ui.mainGame.majiangParts.RightPengGangPartUI extends laya.ui.View
var RightPengGangPartUI=(function(_super){
	function RightPengGangPartUI(){
		this.peng3=null;
		this.peng2=null;
		this.peng1=null;
		this.peng0=null;
		RightPengGangPartUI.__super.call(this);
	}

	__class(RightPengGangPartUI,'ui.mainGame.majiangParts.RightPengGangPartUI',_super);
	var __proto=RightPengGangPartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.RightPengGangItemUI",RightPengGangItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(RightPengGangPartUI.uiView);
	}

	RightPengGangPartUI.uiView={"type":"View","props":{},"child":[{"type":"RightPengGangItem","props":{"y":0,"x":0,"var":"peng3","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.RightPengGangItemUI"}},{"type":"RightPengGangItem","props":{"y":118,"x":0,"var":"peng2","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.RightPengGangItemUI"}},{"type":"RightPengGangItem","props":{"y":236,"x":0,"var":"peng1","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.RightPengGangItemUI"}},{"type":"RightPengGangItem","props":{"y":354,"x":0,"var":"peng0","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.RightPengGangItemUI"}}]};
	return RightPengGangPartUI;
})(View)


//class ui.mainGame.majiangParts.shaiziPageUI extends laya.ui.View
var shaiziPageUI=(function(_super){
	function shaiziPageUI(){
		this.middleShaizi=null;
		this.rightShaizi=null;
		this.leftShaizi=null;
		this.topShaizi=null;
		this.bootomShaizi=null;
		shaiziPageUI.__super.call(this);
	}

	__class(shaiziPageUI,'ui.mainGame.majiangParts.shaiziPageUI',_super);
	var __proto=shaiziPageUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.majiangParts.animalEff.ShaiziEffUI",ShaiziEffUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(shaiziPageUI.uiView);
	}

	shaiziPageUI.uiView={"type":"View","props":{"width":1038,"height":640},"child":[{"type":"ShaiziEff","props":{"y":262,"x":452,"var":"middleShaizi","runtime":"ui.mainGame.majiangParts.animalEff.ShaiziEffUI"}},{"type":"ShaiziEff","props":{"y":262,"x":755,"var":"rightShaizi","runtime":"ui.mainGame.majiangParts.animalEff.ShaiziEffUI"}},{"type":"ShaiziEff","props":{"y":262,"x":144,"var":"leftShaizi","runtime":"ui.mainGame.majiangParts.animalEff.ShaiziEffUI"}},{"type":"ShaiziEff","props":{"y":71,"x":452,"var":"topShaizi","runtime":"ui.mainGame.majiangParts.animalEff.ShaiziEffUI"}},{"type":"ShaiziEff","props":{"y":450,"x":452,"var":"bootomShaizi","runtime":"ui.mainGame.majiangParts.animalEff.ShaiziEffUI"}}]};
	return shaiziPageUI;
})(View)


//class ui.mainGame.majiangParts.TopHandlePartUI extends laya.ui.View
var TopHandlePartUI=(function(_super){
	function TopHandlePartUI(){
		this.card12=null;
		this.card11=null;
		this.card10=null;
		this.card9=null;
		this.card8=null;
		this.card7=null;
		this.card6=null;
		this.card5=null;
		this.card4=null;
		this.card3=null;
		this.card2=null;
		this.card1=null;
		this.card0=null;
		this.card13=null;
		this.tingImg=null;
		TopHandlePartUI.__super.call(this);
	}

	__class(TopHandlePartUI,'ui.mainGame.majiangParts.TopHandlePartUI',_super);
	var __proto=TopHandlePartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.TopHandleItemUI",TopHandleItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(TopHandlePartUI.uiView);
	}

	TopHandlePartUI.uiView={"type":"View","props":{},"child":[{"type":"TopHandleItem","props":{"y":0,"x":64,"var":"card12","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":112,"var":"card11","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":160,"var":"card10","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":208,"var":"card9","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":256,"var":"card8","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":304,"var":"card7","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":352,"var":"card6","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":400,"var":"card5","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":448,"var":"card4","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":496,"var":"card3","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":544,"var":"card2","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":592,"var":"card1","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":640,"width":50,"var":"card0","height":108,"runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"TopHandleItem","props":{"y":0,"x":0,"var":"card13","runtime":"ui.mainGame.Items.TopHandleItemUI"}},{"type":"Image","props":{"y":333,"x":-393,"width":453,"visible":true,"var":"tingImg","rotation":-90,"height":1784}}]};
	return TopHandlePartUI;
})(View)


//class ui.mainGame.majiangParts.TopPengGangPartUI extends laya.ui.View
var TopPengGangPartUI=(function(_super){
	function TopPengGangPartUI(){
		this.peng3=null;
		this.peng2=null;
		this.peng1=null;
		this.peng0=null;
		TopPengGangPartUI.__super.call(this);
	}

	__class(TopPengGangPartUI,'ui.mainGame.majiangParts.TopPengGangPartUI',_super);
	var __proto=TopPengGangPartUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.Items.TopPengGangItemUI",TopPengGangItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(TopPengGangPartUI.uiView);
	}

	TopPengGangPartUI.uiView={"type":"View","props":{},"child":[{"type":"TopPengGangItem","props":{"y":-5,"x":0,"var":"peng3","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.TopPengGangItemUI"}},{"type":"TopPengGangItem","props":{"y":-5,"x":245,"var":"peng2","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.TopPengGangItemUI"}},{"type":"TopPengGangItem","props":{"y":-5,"x":489,"var":"peng1","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.TopPengGangItemUI"}},{"type":"TopPengGangItem","props":{"y":-5,"x":734,"var":"peng0","scaleY":0.8,"scaleX":0.8,"runtime":"ui.mainGame.Items.TopPengGangItemUI"}}]};
	return TopPengGangPartUI;
})(View)


//class ui.mainGame.NewCalculatePageUI extends laya.ui.View
var NewCalculatePageUI=(function(_super){
	function NewCalculatePageUI(){
		this.perPage=null;
		this.roundPage=null;
		this.showBtn=null;
		NewCalculatePageUI.__super.call(this);
	}

	__class(NewCalculatePageUI,'ui.mainGame.NewCalculatePageUI',_super);
	var __proto=NewCalculatePageUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.mainGame.majiangParts.Newcalculate.NewCalculatePerPageUI",NewCalculatePerPageUI);
		View.regComponent("ui.mainGame.majiangParts.Newcalculate.NewCalculateRoundPageUI",NewCalculateRoundPageUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(NewCalculatePageUI.uiView);
	}

	NewCalculatePageUI.uiView={"type":"View","props":{"width":1038,"mouseThrough":true,"height":640},"child":[{"type":"NewCalculatePerPage","props":{"y":0,"x":0,"var":"perPage","runtime":"ui.mainGame.majiangParts.Newcalculate.NewCalculatePerPageUI"}},{"type":"NewCalculateRoundPage","props":{"y":0,"x":0,"visible":false,"var":"roundPage","runtime":"ui.mainGame.majiangParts.Newcalculate.NewCalculateRoundPageUI"}},{"type":"Button","props":{"y":566,"x":87,"width":180,"var":"showBtn","stateNum":1,"skin":"common/buttonLv.png","height":68,"alpha":0.6,"sizeGrid":"0,29,0,27"},"child":[{"type":"Image","props":{"y":12,"x":51,"skin":"gameCommon/btnShow.png","label":"label"}}]}]};
	return NewCalculatePageUI;
})(View)


//class ui.mainGame.PlayerInfoPageUI extends laya.ui.View
var PlayerInfoPageUI=(function(_super){
	function PlayerInfoPageUI(){
		this.playerInfo3=null;
		this.playerInfo0=null;
		this.playerInfo1=null;
		this.piaoPart=null;
		this.playerInfo2=null;
		this.startBtn=null;
		this.laba=null;
		this.labaTip=null;
		PlayerInfoPageUI.__super.call(this);
	}

	__class(PlayerInfoPageUI,'ui.mainGame.PlayerInfoPageUI',_super);
	var __proto=PlayerInfoPageUI.prototype;
	__proto.createChildren=function(){
		View.regComponent("ui.gameCommon.items.PlayerInfoLeftItemUI",PlayerInfoLeftItemUI);
		View.regComponent("ui.gameCommon.items.PlayerInfoBaseItemUI",PlayerInfoBaseItemUI);
		View.regComponent("ui.gameCommon.PiaoSelePartUI",PiaoSelePartUI);
		View.regComponent("ui.gameCommon.items.PlayerinfoTopItemUI",PlayerinfoTopItemUI);
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(PlayerInfoPageUI.uiView);
	}

	PlayerInfoPageUI.uiView={"type":"View","props":{"width":1038,"visible":true,"sizeGrid":"38,22,24,28","height":640},"child":[{"type":"PlayerInfoLeftItem","props":{"y":150,"x":12,"visible":true,"var":"playerInfo3","runtime":"ui.gameCommon.items.PlayerInfoLeftItemUI"}},{"type":"PlayerInfoLeftItem","props":{"y":378,"x":12,"visible":true,"var":"playerInfo0","runtime":"ui.gameCommon.items.PlayerInfoLeftItemUI"}},{"type":"PlayerInfoBaseItem","props":{"y":131,"x":947,"var":"playerInfo1","runtime":"ui.gameCommon.items.PlayerInfoBaseItemUI"}},{"type":"PiaoSelePart","props":{"y":476,"x":332.5,"var":"piaoPart","runtime":"ui.gameCommon.PiaoSelePartUI"}},{"type":"PlayerinfoTopItem","props":{"y":-8,"x":74,"var":"playerInfo2","runtime":"ui.gameCommon.items.PlayerinfoTopItemUI"}},{"type":"Button","props":{"y":559,"x":429,"width":180,"var":"startBtn","stateNum":1,"skin":"common/btn_yellow.png","sizeGrid":"0,36,0,36","labelStrokeColor":"#000000","labelStroke":2,"labelSize":34,"labelFont":"SimHei","labelColors":"#ffffff,#ffffff,#ffffff","labelBold":true,"labelAlign":"center"},"child":[{"type":"Image","props":{"y":9,"x":43,"skin":"gameCommon/gameStart.png"}}]},{"type":"Box","props":{"y":3,"x":852,"visible":false,"var":"laba"},"child":[{"type":"Image","props":{"skin":"gameCommon/voice/voiceBg.png"}},{"type":"Animation","props":{"y":31,"x":29,"var":"labaTip","source":"gameCommon/VoiceTip.ani"}}]}]};
	return PlayerInfoPageUI;
})(View)


//class ui.mainGame.TableInfoPageUI extends laya.ui.View
var TableInfoPageUI=(function(_super){
	function TableInfoPageUI(){
		this.scoreList=null;
		this.option=null;
		this.roomNumTf=null;
		this.difenTf=null;
		this.leftTf=null;
		this.fengquanTf=null;
		this.infoListBtn=null;
		this.chatBtn=null;
		this.infoSImg=null;
		this.voiceTip=null;
		this._time=null;
		this.voiceIntercomBtn=null;
		this.voicePlay=null;
		this.voiceDis=null;
		this.weikaishiBox=null;
		this.ruleTimeTf=null;
		this.kaijuTf=null;
		this.leftDissolveTf=null;
		TableInfoPageUI.__super.call(this);
	}

	__class(TableInfoPageUI,'ui.mainGame.TableInfoPageUI',_super);
	var __proto=TableInfoPageUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(TableInfoPageUI.uiView);
	}

	TableInfoPageUI.uiView={"type":"View","props":{"width":1038,"height":640},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1038,"skin":"common/gameTop.png","sizeGrid":"0,36,0,34","height":46}},{"type":"Button","props":{"y":2,"x":846,"var":"scoreList","stateNum":1,"skin":"common/xinxiliebiaoBtn.png"},"child":[{"type":"Image","props":{"y":-1,"x":-12,"width":103,"skin":"common/xinxiliebiaoBtn.png","height":101,"alpha":0}}]},{"type":"Button","props":{"y":-2,"x":25,"var":"option","stateNum":1,"skin":"gameCommon/Option/function_Option.png"},"child":[{"type":"Button","props":{"y":-34,"x":-32,"width":131,"stateNum":1,"skin":"gameCommon/Option/function_Option.png","height":135,"alpha":0}}]},{"type":"Box","props":{"y":3,"x":295},"child":[{"type":"Label","props":{"width":64,"visible":true,"text":"房号：","height":28,"fontSize":26,"font":"SimHei","color":"#00edc2","bold":true}},{"type":"Label","props":{"x":183,"wordWrap":true,"width":83,"visible":true,"valign":"middle","text":"底分：","height":27,"fontSize":26,"font":"SimHei","color":"#00edc2","bold":true,"align":"left"}},{"type":"Label","props":{"x":69,"width":88,"visible":true,"var":"roomNumTf","text":"123456","height":26,"fontSize":26,"font":"SimHei","color":"#ffc757","bold":true}},{"type":"Label","props":{"x":252,"wordWrap":true,"width":46,"visible":true,"var":"difenTf","text":10,"height":25,"fontSize":26,"font":"SimHei","color":"#ffc757","bold":true,"align":"left"}},{"type":"Label","props":{"y":2,"x":399,"width":119,"visible":true,"var":"leftTf","text":"00:00:00","height":25,"fontSize":26,"font":"SimHei","color":"#ffc757","bold":true,"align":"right"}},{"type":"Label","props":{"x":305,"width":85,"visible":true,"var":"fengquanTf","valign":"middle","text":"东风圈","height":27,"fontSize":26,"font":"SimHei","color":"#ffc757","bold":true,"align":"center"}}]},{"type":"Button","props":{"y":2,"x":937,"var":"infoListBtn","stateNum":1,"skin":"gameCommon/btnHorn.png"},"child":[{"type":"Button","props":{"y":11,"x":-4,"width":85,"stateNum":1,"skin":"gameCommon/btnHorn.png","height":82,"alpha":0}}]},{"type":"Button","props":{"y":313,"x":954,"visible":true,"var":"chatBtn","stateNum":1,"skin":"gameCommon/liaotiananniuBtn.png","mouseThrough":true}},{"type":"Image","props":{"y":9,"x":985,"width":24,"var":"infoSImg","skin":"common/xiaohongdian.png","scaleY":1.2,"scaleX":1.2,"height":24}},{"type":"Box","props":{"y":307,"x":949,"mouseThrough":true},"child":[{"type":"Box","props":{"y":-8,"x":-2,"visible":false,"var":"voiceTip","mouseThrough":true},"child":[{"type":"Image","props":{"y":0,"x":0,"width":91,"skin":"gameCommon/voice/voiceTip.png","sizeGrid":"6,5,19,8","mouseEnabled":false,"height":115}},{"type":"Label","props":{"y":14,"x":6,"width":78,"text":"点击发送","height":20,"fontSize":20,"font":"SimHei","color":"#fbfbfb","align":"center"}},{"type":"Label","props":{"y":41,"x":6,"width":79,"text":"上滑取消","height":20,"fontSize":20,"font":"SimHei","color":"#fbfbfb","align":"center"}},{"type":"Label","props":{"y":69,"x":6,"width":79,"var":"_time","text":"15'","height":20,"fontSize":20,"font":"SimHei","color":"#fbfbfb","align":"center"}}]},{"type":"Box","props":{"y":105.5,"x":6.5,"width":74,"var":"voiceIntercomBtn","height":73},"child":[{"type":"Button","props":{"y":4,"x":-1,"stateNum":1,"skin":"gameCommon/voice/voiceBg.png","pivotY":0.5,"pivotX":0.5}},{"type":"Image","props":{"y":33,"x":29,"visible":false,"var":"voicePlay","skin":"gameCommon/voice/voicePlay.png","rotation":0,"mouseThrough":false,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":14,"x":17,"skin":"gameCommon/voice/voice.png"}},{"type":"Image","props":{"y":4,"x":-1,"visible":false,"var":"voiceDis","skin":"gameCommon/voice/voiceDis.png","disabled":true}}]}]},{"type":"Box","props":{"y":409,"x":381,"width":271,"var":"weikaishiBox","height":135},"child":[{"type":"Image","props":{"y":0,"x":73.5,"skin":"gameCommon/dengdaikaiju.png"}},{"type":"Label","props":{"y":74,"x":0,"width":278,"visible":true,"var":"ruleTimeTf","valign":"middle","text":"本局时长：15分钟","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}},{"type":"Label","props":{"y":40,"x":0,"width":278,"visible":true,"var":"kaijuTf","valign":"middle","text":"开局人：小嘟嘟呀呀","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}},{"type":"Box","props":{"y":108,"x":0,"width":313,"height":27},"child":[{"type":"Label","props":{"y":0,"x":48,"width":262,"visible":true,"valign":"middle","text":"后未开局将解散","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}},{"type":"Label","props":{"y":0,"x":0,"width":96,"visible":true,"var":"leftDissolveTf","valign":"middle","text":"00:00 ","height":27,"fontSize":24,"font":"SimHei","color":"#ecfbe5","align":"center"}}]}]}]};
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