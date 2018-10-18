
(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var AppConfig=Laya.AppConfig,Browser=laya.utils.Browser,CommonModule=common.CommonModule,GameModule=modules.game.GameModule;
	var HallModule=hall.HallModule,HuAnimation=modules.game.majiangGame.view.animation.HuAnimation,QuickUtils=Laya.QuickUtils;
	var RecordView=hall.view.RecordView,SingletonError=rb.framework.errors.SingletonError,UserData=Laya.UserData;
	var WX=Laya.WX;
//class modules.xizhouGame.XizhouGameModule extends modules.game.GameModule
var XizhouGameModule=(function(_super){
	function XizhouGameModule(){
		XizhouGameModule.__super.call(this);
		if (XizhouGameModule._instance !=null){
			throw (new SingletonError(this));
		};
		XizhouGameModule._instance=this;
	}

	__class(XizhouGameModule,'modules.xizhouGame.XizhouGameModule',_super);
	var __proto=XizhouGameModule.prototype;
	__proto.startGame=function(){
		Browser.window.document.title=AppConfig.nameTitle+"西周麻将";
		if(XizhouGameModule.inGame==true){
			return;
		}
		HallModule.instance.goEmpty();
		XizhouGameModule.inGame=true;
		CommonModule.instance.gotoCommonContext();
		this.switchState(this.gameContext);
		this.inGameResize();
		if(AppConfig.isNewHall==false){
			RecordView.gameName="西周麻将";
			WX.onMenuShareTimeline(UserData.nickname+"-"+AppConfig.nameTitle+"西周麻将 【房间号："+UserData.roomid+"】",UserData.roomid+"-"+UserData.uniqueCode+"-2");
			WX.onMenuShareAppMessage(UserData.nickname+"-"+AppConfig.nameTitle+"西周麻将 【房间号："+UserData.roomid+"】","房主创建了西周麻将 【房间号:"+UserData.roomid+"】"+AppConfig.getRule(UserData.Rule[1]).desc+"局",UserData.roomid+"-"+UserData.uniqueCode+"-2");
			}else{
			WX.onMenuShareTimeline(UserData.nickname+"-"+AppConfig.nameTitle+"西周麻将 【房间号："+UserData.roomid+"】",UserData.roomid+"--"+UserData.uniqueCode);
			WX.onMenuShareAppMessage(UserData.nickname+"-"+AppConfig.nameTitle+"西周麻将【房间号："+UserData.roomid+"】","房主创建了西周麻将 【房间号:"+UserData.roomid+"】"+AppConfig.getRule(UserData.Rule[1]).desc+"局",UserData.roomid+"--"+UserData.uniqueCode);
		}
		console.log("startMajiangGame...........");
	}

	__proto.stopGame=function(gotoHall,needClear){
		(gotoHall===void 0)&& (gotoHall=true);
		(needClear===void 0)&& (needClear=false);
		if(needClear){
			this._majiangGameContext.controller.clear();
		}
		XizhouGameModule.inGame=false;
		GameModule.isSettlement=false;
		this.switchState(this._mainContext);
		if(gotoHall){
			if(AppConfig.isNewHall){
				QuickUtils.gotoHall();
				}else{
				this.inHallResize();
				HallModule.instance.gotoHall();
			}
		}
		HuAnimation.instance.noticeHide();
	}

	//---Static Functions------------------------------------------------------------------------------------------------------------------------------------//
	__getset(1,XizhouGameModule,'instance',function(){
		if (XizhouGameModule._instance==null){
			XizhouGameModule._instance=new XizhouGameModule();
		};
		return (XizhouGameModule._instance);
	},modules.game.GameModule._$SET_instance);

	XizhouGameModule.inGame=false;
	XizhouGameModule._instance=null;
	return XizhouGameModule;
})(GameModule)



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