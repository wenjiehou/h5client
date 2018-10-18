
(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var AppConfig=Laya.AppConfig,Browser=laya.utils.Browser,CommonModule=common.CommonModule,EventCenter=common.event.EventCenter;
	var GameContext=rb.framework.mvc.GameContext,GameMainContext=modules.game.context.GameMainContext,GameModule=modules.game.GameModule;
	var HallModule=hall.HallModule,HuAnimation=modules.game.majiangGame.view.animation.HuAnimation,MajiangGameContext=modules.game.majiangGame.context.MajiangGameContext;
	var MajiangGameController=modules.game.majiangGame.controller.MajiangGameController,MajiangGameView=modules.game.majiangGame.view.MajiangGameView;
	var MajiangModel=modules.game.majiangGame.model.MajiangModel,Module=rb.framework.mvc.Module,QuickUtils=Laya.QuickUtils;
	var RecordView=hall.view.RecordView,ReplayMajiangModel=modules.game.majiangGame.model.ReplayMajiangModel;
	var SingletonError=rb.framework.errors.SingletonError,UserData=Laya.UserData,WX=Laya.WX;
//class modules.xiangshanGame.XiangSGameModule extends modules.game.GameModule
var XiangSGameModule=(function(_super){
	function XiangSGameModule(){
		XiangSGameModule.__super.call(this);
		if (XiangSGameModule._instance !=null){
			throw (new SingletonError(this));
		};
		XiangSGameModule._instance=this;
	}

	__class(XiangSGameModule,'modules.xiangshanGame.XiangSGameModule',_super);
	var __proto=XiangSGameModule.prototype;
	__proto.startup=function(){
		Browser.window.document.title=AppConfig.nameTitle+"象山麻将("+AppConfig.costRule[UserData.roomtype+""][UserData.Rule[3]]+")";
		if(this._mainContext==null){
			this._mainContext=new GameContext("GameMainmain",this);
			this._main=new GameMainContext("GameMain",this,this._mainContext);
			this._majiangGameContext=new XiangSMJGameContext("MajiangGame",this,this._main);
		}
		this.switchState(this._mainContext);
	}

	__proto.startGame=function(){
		if(XiangSGameModule.inGame==true){
			return;
		}
		HallModule.instance.goEmpty();
		XiangSGameModule.inGame=true;
		CommonModule.instance.gotoCommonContext();
		this.switchState(this.gameContext);
		this.inGameResize();
		if(AppConfig.isNewHall==false){
			RecordView.gameName="象山麻将";
			WX.onMenuShareTimeline(UserData.nickname+"-"+AppConfig.nameTitle+"象山麻将("+AppConfig.costRule[UserData.roomtype+""][UserData.Rule[3]]+")【房间号："+UserData.roomid+"】",UserData.roomid+"-"+UserData.uniqueCode+"-1");
			WX.onMenuShareAppMessage(UserData.nickname+"-"+AppConfig.nameTitle+"象山麻将("+AppConfig.costRule[UserData.roomtype+""][UserData.Rule[3]]+")【房间号："+UserData.roomid+"】","房主创建了西周麻将 【房间号:"+UserData.roomid+"】"+AppConfig.getRule(UserData.Rule[1]).desc+"局",UserData.roomid+"-"+UserData.uniqueCode+"-1");
			}else{
			WX.onMenuShareTimeline(UserData.nickname+"-"+AppConfig.nameTitle+"象山麻将("+AppConfig.costRule[UserData.roomtype+""][UserData.Rule[3]]+")【房间号："+UserData.roomid+"】",UserData.roomid+"--"+UserData.uniqueCode);
			WX.onMenuShareAppMessage(UserData.nickname+"-"+AppConfig.nameTitle+"象山麻将("+AppConfig.costRule[UserData.roomtype+""][UserData.Rule[3]]+")【房间号："+UserData.roomid+"】","房主创建了西周麻将 【房间号:"+UserData.roomid+"】"+AppConfig.getRule(UserData.Rule[1]).desc+"局",UserData.roomid+"--"+UserData.uniqueCode);
		}
		console.log("startMajiangGame...........");
	}

	__proto.stopGame=function(gotoHall,needClear){
		(gotoHall===void 0)&& (gotoHall=true);
		(needClear===void 0)&& (needClear=false);
		if(needClear){
			this._majiangGameContext.controller.clear();
		}
		XiangSGameModule.inGame=false;
		GameModule.isSettlement=false;
		this.switchState(this._mainContext);
		if(gotoHall){
			if(AppConfig.isNewHall){
				QuickUtils.gotoHall()
				}else{
				this.inHallResize();
				HallModule.instance.gotoHall();
			}
		}
		HuAnimation.instance.noticeHide();
	}

	//---Static Functions------------------------------------------------------------------------------------------------------------------------------------//
	__getset(1,XiangSGameModule,'instance',function(){
		if (XiangSGameModule._instance==null){
			XiangSGameModule._instance=new XiangSGameModule();
		};
		return (XiangSGameModule._instance);
	},modules.game.GameModule._$SET_instance);

	XiangSGameModule.inGame=false;
	XiangSGameModule._instance=null;
	return XiangSGameModule;
})(GameModule)


//class modules.xiangshanGame.majiangGame.controller.XiangSMJGameController extends modules.game.majiangGame.controller.MajiangGameController
var XiangSMJGameController=(function(_super){
	function XiangSMJGameController(){
		XiangSMJGameController.__super.call(this);
	}

	__class(XiangSMJGameController,'modules.xiangshanGame.majiangGame.controller.XiangSMJGameController',_super);
	var __proto=XiangSMJGameController.prototype;
	/**补花*/
	__proto.ACK_TransferHuaResponse=function(info){
		if(this.actived){
			this.pauseGameQueue();
			if(UserData.isReplay==false){
				Laya.timer.once(500,this,this.realHuanhua,[info]);
			}
			else{
				this.realHuanhua(info);
			}
		}
	}

	__proto.clearTimeDelay=function(){
		_super.prototype.clearTimeDelay.call(this);
		Laya.timer.clear(this,this.realHuanhua);
	}

	//Laya.timer.clear(this,onDelayCallZhuama);
	__proto.realHuanhua=function(info){
		if(UserData.isReplay){
			if(info.index==undefined){
				info.index=0;
			}
			info.huas=info.hua_list;
			info.cards=info.card_ids;
		}
		this.model.majiangMsgs.ACK_TransferHuaResponse=info;
		info.count=info.huas.length;
		info.pos=info.index;
		console.log("ACK_TransferHuaResponse");
		console.log(info);
		console.log("ACK_TransferHuaResponse");
		var i=0,len=info.huas.length;
		info.Huas=[];
		for(i=0;i<len;i++){
			info.Huas[i]=info.huas[i]+1;
		}
		len=info.cards.length;
		info.Cards=[];
		for(i=0;i<len;i++){
			info.Cards[i]=info.cards[i]+1;
		}
		this.model.updateBuhua(info.pos,info.Huas,info.Cards);
		len=this.model.huaVec[info.pos].length;
		this.model.overHuaVec[info.pos]=len;
		for(i=0;i<len;i++){
			this.view.majiangPage.showBuhua(this.model.huaVec[info.pos][i],info.pos,true);
		}
		this.view.playerInfoPage.updateHua(info.pos);
		if(info.pos==this.model.selfChairPos){
			if(UserData.isReplay==false){
				this.view.majiangPage.handPart.updateOnePosAllCards(info.pos,this.model.allCardsVec[info.pos]);
			}
		}
		if(UserData.isReplay){
			this.view.majiangPage.handPart.updateOnePosAllCards(info.pos,this.model.allCardsVec[info.pos]);
		}
		this.model.leftDesktopCardsNum-=info.count;
		this.view.majiangPage.clockPart.noticeShowLeftCardsNum();
		EventCenter.instance.once("GAME_BUHUAN_COMPLETE",this,this.contineGameQueue);
	}

	// }
	__proto.seatPingBi=function(i,info){
		if(info.Cards[i].type==1){
			var arr=this.model.getChiCards(i,info.Cards[i].lastCardId+1);
			this.view.majiangPage.handPart.canControl(i,true,(this.model).getChiRefCards(arr));
		}
		else{
			this.view.majiangPage.handPart.canControl(i,true,[info.Cards[i].lastCardId+1]);
		}
	}

	__proto.pingbiChi=function(info){
		this.view.majiangPage.handPart.canControl(info.pos,true,(this.model).getChiRefCards(info.chicards));
	}

	return XiangSMJGameController;
})(MajiangGameController)


//class modules.xiangshanGame.majiangGame.model.XiangSMJModel extends modules.game.majiangGame.model.MajiangModel
var XiangSMJModel=(function(_super){
	function XiangSMJModel(){
		XiangSMJModel.__super.call(this);
	}

	__class(XiangSMJModel,'modules.xiangshanGame.majiangGame.model.XiangSMJModel',_super);
	var __proto=XiangSMJModel.prototype;
	__proto.getChiRefCards=function(cards){
		var retArr=[];
		cards.sort(this.compareFunction);
		if((cards[1]-cards[0])==1){
			if(cards[0]==1 || cards[0]==10 || cards[0]==19){
				retArr=[cards[1]+1];
			}
			else if(cards[1]==9 || cards[1]==18 || cards[1]==27){
				retArr=[cards[0]-1];
			}
			else{
				retArr=[cards[0]-1,cards[1]+1];
			}
		}
		else if((cards[1]-cards[0])==2){
			retArr=[cards[0]+1];
		}
		return retArr;
	}

	return XiangSMJModel;
})(MajiangModel)


//class modules.xiangshanGame.majiangGame.controller.ReplayXiangSMJGameController extends modules.xiangshanGame.majiangGame.controller.XiangSMJGameController
var ReplayXiangSMJGameController=(function(_super){
	function ReplayXiangSMJGameController(){
		ReplayXiangSMJGameController.__super.call(this);
	}

	__class(ReplayXiangSMJGameController,'modules.xiangshanGame.majiangGame.controller.ReplayXiangSMJGameController',_super);
	return ReplayXiangSMJGameController;
})(XiangSMJGameController)


//class modules.xiangshanGame.majiangGame.model.ReplayXiangSMJModel extends modules.xiangshanGame.majiangGame.model.XiangSMJModel
var ReplayXiangSMJModel=(function(_super){
	function ReplayXiangSMJModel(){
		this.isShowOtherCards=true;
		ReplayXiangSMJModel.__super.call(this);
	}

	__class(ReplayXiangSMJModel,'modules.xiangshanGame.majiangGame.model.ReplayXiangSMJModel',_super);
	var __proto=ReplayXiangSMJModel.prototype;
	/**是否需要直接跳过胡牌动画显示结算界面*/
	__proto.saveStepData=function(){
		modules.game.majiangGame.model.MajiangModel.prototype.saveStepData.call(this);
	}

	// replayAllStepData[replayCurStep]=replayObj;
	__proto.reset=function(){
		modules.game.majiangGame.model.MajiangModel.prototype.reset.call(this);
		this.isStrictShowCalc=false;
	}

	__proto.replayReset=function(){
		modules.game.majiangGame.model.MajiangModel.prototype.reset.call(this);
	}

	/**从手里的牌里面去掉一张碰掉的牌*/
	__proto.cutPengCard=function(pos,cardIdx){
		if(this.isShowOtherCards){
			var tempArr=[cardIdx,cardIdx];
			var i=0;
			var len=tempArr.length;
			var idx=0;
			for(i=0;i<len;i++){
				idx=this.allCardsVec[pos].indexOf(tempArr[i]);
				if(idx !=-1){
					this.allCardsVec[pos].splice(idx,1);
				}
			}
		}
		else{
			modules.game.majiangGame.model.MajiangModel.prototype.cutPengCard.call(this,pos,cardIdx);
		}
	}

	/**杠了之后刷新手里的牌
	*
	*@param type 0补杠 1暗杠 2明杠
	**/
	__proto.cutGangCard=function(pos,cardIdx,type){
		if(this.isShowOtherCards){
			var i=0;
			var tempArr;
			var idx=0;
			var len=0;
			if(this.isTingVec[pos]==true){
				if(this.kouVec[pos].length > 0 && type !=0){
					this.kouVec[pos].length-=1;
				}
			}
			switch(type){
				case 0:
					if(this.theFourteenCardVec[pos] !=-1){
						if(this.theFourteenCardVec[pos]==cardIdx){
							this.theFourteenCardVec[pos]=-1;
						}
						else{
							idx=this.allCardsVec[pos].indexOf(cardIdx);
							if(idx !=-1){
								this.allCardsVec[pos].splice(idx,1);
							}
							this.allCardsVec[pos].push(this.theFourteenCardVec[pos]);
							this.theFourteenCardVec[pos]=-1;
							this.sortAllCards(pos);
						}
					}
					else{
						idx=this.allCardsVec[pos].indexOf(cardIdx);
						if(idx !=-1){
							this.allCardsVec[pos].splice(idx,1);
						}
						this.sortAllCards(pos);
					}
					break ;
				case 1:
					if(this.theFourteenCardVec[pos]==cardIdx){
						this.theFourteenCardVec[pos]=-1;
						tempArr=[cardIdx,cardIdx,cardIdx];
					}
					else{
						tempArr=[cardIdx,cardIdx,cardIdx,cardIdx];
						this.allCardsVec[pos].push(this.theFourteenCardVec[pos]);
						this.theFourteenCardVec[pos]=-1;
						this.sortAllCards(pos);
					}
					len=tempArr.length;
					for(i=0;i<len;i++){
						idx=this.allCardsVec[pos].indexOf(tempArr[i]);
						if(idx !=-1){
							this.allCardsVec[pos].splice(idx,1);
						}
					}
					break ;
				case 2:
					tempArr=[cardIdx,cardIdx,cardIdx];
					len=tempArr.length;
					for(i=0;i<len;i++){
						idx=this.allCardsVec[pos].indexOf(tempArr[i]);
						if(idx !=-1){
							this.allCardsVec[pos].splice(idx,1);
						}
					}
					break ;
				default :break ;
				}
		}
		else{
			modules.game.majiangGame.model.MajiangModel.prototype.cutGangCard.call(this,pos,cardIdx,type);
		}
	}

	/**玩家出牌更新玩家数据*/
	__proto.outputCard=function(pos,cardIdx){
		this.curOutPutPos=pos;
		if(this.isShowOtherCards){
			this.outputCardsVec[pos].push(cardIdx);
			if(this.theFourteenCardVec[pos] !=-1){
				if(this.theFourteenCardVec[pos]==cardIdx){
					this.theFourteenCardVec[pos]=-1;
					return;
				}
			};
			var idx=this.allCardsVec[pos].indexOf(cardIdx);
			if(idx!=-1){
				this.allCardsVec[pos].splice(idx,1);
			}
			if(this.theFourteenCardVec[pos] !=-1){
				this.allCardsVec[pos].push(this.theFourteenCardVec[pos]);
				this.sortAllCards(pos);
				this.theFourteenCardVec[pos]=-1;
			}
		}
		else{
			modules.game.majiangGame.model.MajiangModel.prototype.outputCard.call(this,pos,cardIdx);
		}
	}

	/**更新所有牌(游戏开始后的第一次发牌）*/
	__proto.updateAllCardsVecByGameStart=function(allCards){
		var i=0;
		var len=allCards.length;
		for(i=0;i<len;i++){
			var pos=this.getPlayerPosByUid(allCards[i].uid);
			this.updateOneAllCardsVecByGameStart(allCards[i].nusercard,pos);
		}
	}

	__proto.updateOneAllCardsVecByGameStart=function(cards,pos){
		var i=0;
		this.allCardsVec[pos]=[];
		var len=cards.length;
		for(i=0;i<len;i++){
			(this.allCardsVec [pos]).push(cards[i].card);
		}
		this.sortAllCards(pos);
	}

	return ReplayXiangSMJModel;
})(XiangSMJModel)


//class modules.xiangshanGame.majiangGame.context.XiangSMJGameContext extends modules.game.majiangGame.context.MajiangGameContext
var XiangSMJGameContext=(function(_super){
	function XiangSMJGameContext(key,module,parentNode){
		(key===void 0)&& (key="");
		XiangSMJGameContext.__super.call(this,key,module,parentNode);
	}

	__class(XiangSMJGameContext,'modules.xiangshanGame.majiangGame.context.XiangSMJGameContext',_super);
	var __proto=XiangSMJGameContext.prototype;
	__proto.initUI=function(){
		if(this._majiangModel==null){
			this._majiangModel=new XiangSMJModel();
		}
		if(this._rMajiangModel==null){
			this._rMajiangModel=new ReplayXiangSMJModel();
		}
		if(this._rMajiangGameController==null){
			this._rMajiangGameController=new ReplayXiangSMJGameController();
		}
		if(this._majiangGameView==null){
			this._majiangGameView=new MajiangGameView();
		}
		if(this._majiangGameController==null){
			this._majiangGameController=new XiangSMJGameController();
		}
	}

	return XiangSMJGameContext;
})(MajiangGameContext)



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