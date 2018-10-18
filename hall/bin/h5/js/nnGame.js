
(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var AbstractLayer=rb.framework.mvc.AbstractLayer,ActTipUI=ui.niuniuGame.niuniuPart.ActTipUI,Animation=laya.display.Animation;
	var AppConfig=Laya.AppConfig,Box=laya.ui.Box,Browser=laya.utils.Browser,Button=laya.ui.Button,Chat=modules.gameCommon.chat.Chat;
	var ChatPage=modules.gameCommon.chat.ChatPage,CommonModule=common.CommonModule,CuoPartUI=ui.niuniuGame.niuniuPart.CuoPartUI;
	var Dictionary=laya.utils.Dictionary,Event=laya.events.Event,EventCenter=common.event.EventCenter,GameContext=rb.framework.mvc.GameContext;
	var GameTableUI$1=ui.niuniuGame.GameTableUI,GiftItemUI=ui.gameCommon.items.GiftItemUI,HallModule=hall.HallModule;
	var Handler=laya.utils.Handler,Image=laya.ui.Image,Label=laya.ui.Label,LayerTypes=rb.framework.mvc.core.LayerTypes;
	var Message=net.Message,MessageManager=manager.MessageManager,Module=rb.framework.mvc.Module,ModuleDef=Laya.ModuleDef;
	var MovieClip=laya.ani.swf.MovieClip,NewDissolvePage=modules.gameCommon.view.NewDissolvePage,OtherHandlePartUI=ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI;
	var OwnerHandlePartUI=ui.niuniuGame.niuniuPart.handlePart.OwnerHandlePartUI,PlayerCtlPartUI=ui.niuniuGame.niuniuPart.PlayerCtlPartUI;
	var PlayerInfoPageUI$1=ui.niuniuGame.PlayerInfoPageUI,PockerItemUI=ui.niuniuGame.niuniuPart.item.PockerItemUI;
	var PockerPageUI=ui.niuniuGame.PockerPageUI,PopBox=common.view.PopBox,ProtoMessage=net.ProtoMessage,QuickUtils=Laya.QuickUtils;
	var RecordView=hall.view.RecordView,Rectangle=laya.maths.Rectangle,ReplayControlView=modules.gameCommon.view.ReplayControlView;
	var SingletonError=rb.framework.errors.SingletonError,SoundManager=laya.media.SoundManager,SoundPlay=common.tools.SoundPlay;
	var Sprite=laya.display.Sprite,Stage=laya.display.Stage,TableInfoPageUI$1=ui.niuniuGame.TableInfoPageUI,TextManager=manager.TextManager;
	var TimeManager=manager.TimeManager,Tween=laya.utils.Tween,UIManager=manager.UIManager,UserData=Laya.UserData;
	var UserInfoUI=ui.gameCommon.UserInfoUI,View=laya.ui.View,WX=Laya.WX;
//class modules.nnGame.inerGame.model.data.JishuArrData
var JishuArrData=(function(){
	function JishuArrData(){
		this.valueArr=[];
		this.nValueArr=[];
		this.typeArr=[];
		this.isHuaArr=[];
		this.eightArr=[];
		this.sevenArr=[];
		this.sixArr=[];
		this.fiveArr=[];
		this.fourArr=[];
		this.threeArr=[];
		this.twoArr=[];
		this.danArr=[];
	}

	__class(JishuArrData,'modules.nnGame.inerGame.model.data.JishuArrData');
	var __proto=JishuArrData.prototype;
	__proto.clone=function(target){
		this.valueArr=target.valueArr.concat();
		this.eightArr=target.eightArr.concat();
		this.sevenArr=target.eightArr.concat();
		this.sixArr=target.sixArr.concat();
		this.fiveArr=target.fiveArr.concat();
		this.fourArr=target.fourArr.concat();
		this.threeArr=target.threeArr.concat();
		this.twoArr=target.twoArr.concat();
		this.danArr=target.danArr.concat();
	}

	JishuArrData.getJishuArrData=function(cards){
		var jishuData=new JishuArrData();
		var valuesArr=[];
		var typeArr=[];
		var nValueArr=[];
		var isHuaArr=[];
		var i=0;
		for(i=0;i<cards.length;i++){
			valuesArr.push(BasePocker.getV(cards[i]));
			typeArr.push(BasePocker.getT(cards[i]));
			nValueArr.push(BasePocker.getVNn(cards[i]));
			isHuaArr.push(BasePocker.checkIsHua(cards[i]));
		}
		console.log("检测的牌值：：" ,valuesArr);
		jishuData.valueArr=valuesArr.concat();
		jishuData.typeArr=typeArr.concat();
		jishuData.nValueArr=nValueArr.concat();
		jishuData.isHuaArr=isHuaArr.concat();
		var tempV=0;
		var num=0;
		var idx=0;
		for(i=0;i<valuesArr.length;i++){
			num=1;
			tempV=valuesArr[i];
			valuesArr.splice(i,1);
			i-=1;
			idx=valuesArr.indexOf(tempV);
			while(idx !=-1){
				valuesArr.splice(idx,1);
				num+=1;
				idx=valuesArr.indexOf(tempV);
			}
			switch(num){
				case 1:
					jishuData.danArr.push(tempV);
					break ;
				case 2:
					jishuData.twoArr.push(tempV);
					break ;
				case 3:
					jishuData.threeArr.push(tempV);
					break ;
				case 4:
					jishuData.fourArr.push(tempV);
					break ;
				case 5:
					jishuData.fiveArr.push(tempV);
					break ;
				case 6:
					jishuData.sixArr.push(tempV);
					break ;
				case 7:
					jishuData.sevenArr.push(tempV);
					break ;
				case 8:
					jishuData.eightArr.push(tempV);
					break ;
				}
		}
		return jishuData;
	}

	JishuArrData.checkValuelian=function(valueArr){
		var i=0,len=valueArr.length;
		for(i=0;i<len-1;i++){
			if(valueArr[i+1]-valueArr[i] !=1){
				return false;
			}
		}
		return true;
	}

	JishuArrData.compValue=function(value){
		value.sort(JishuArrData.compVFun);
	}

	JishuArrData.compVFun=function(A,B){
		if(A > B){
			return 1;
		}
		else if(A=B){
			return 0;
		}
		else{
			return-1;
		}
	}

	JishuArrData.conversValueArr=function(arr){
		var i=0,len=arr.length;
		for(i=0;i<len;i++){
			if(arr[i]==14){
				arr[i]=1;
			}
			else if(arr[i]==16){
				arr[i]=2;
			}
		}
		arr.sort(JishuArrData.compCardsFun);
	}

	JishuArrData.compCardsFun=function(A,B){
		if(A==0 || B==0){
			return 0;
		};
		var typeA=BasePocker.getT(A);
		var typeB=BasePocker.getT(B);
		var valueA=BasePocker.getV(A);
		var valueB=BasePocker.getV(B);
		if(valueA > valueB){
			return 1;
		}
		else if(valueA==valueB){
			if(typeA > typeB){
				return 1;
			}
			else{
				return-1;
			}
		}
		else{
			return-1;
		}
	}

	return JishuArrData;
})()


//class modules.nnGame.inerGame.model.data.NiuData
var NiuData=(function(){
	function NiuData(){
		this.cards=[];
		/**组成10的倍数的三个牌*/
		this.ThreeArr=[];
		/**剩下的两张牌*/
		this.twoArr=[];
		/**最大值*/
		this.BigV=-1;
		/**最大花色 */
		this.BigT=-1;
		/**有几个牛*/
		this.niuNum=0;
	}

	__class(NiuData,'modules.nnGame.inerGame.model.data.NiuData');
	var __proto=NiuData.prototype;
	/**最好的排序规则*/
	__getset(0,__proto,'bestOrder',function(){
		if(this.niuNum > 0){
			return this.ThreeArr.concat(this.twoArr);
		}
		return this.cards;
	});

	NiuData.getNiuData=function(cards){
		var niuData=new NiuData();
		niuData.cards=cards.concat();
		var len=cards.length;
		var twoV=0;
		for(var i=0;i<len;i++){
			for(var j=i+1;j<len;j++){
				for(var k=j+1;k<len;k++){
					if((BasePocker.getVNn(cards[i])+BasePocker.getVNn(cards[j])+BasePocker.getVNn(cards[k]))%10==0){
						var threeArr=[cards[i],cards[j],cards[k]];
						var twoArr=[];
						twoV=0;
						for(var n=0;n<len;n++){
							if(n !=i && n !=j && n !=k){
								twoV+=BasePocker.getVNn(cards[n]);
								twoArr.push(cards[n]);
							}
						};
						var tempV=twoV%10;
						if(tempV==0){
							tempV=10;
						}
						if(tempV > niuData.niuNum){
							niuData.niuNum=tempV;
							niuData.ThreeArr=threeArr.concat();
							niuData.twoArr=twoArr.concat();
						}
					}
				}
			}
		}
		return niuData;
	}

	return NiuData;
})()


//class modules.nnGame.inerGame.model.data.PaixingLogic
var PaixingLogic=(function(){
	function PaixingLogic(){}
	__class(PaixingLogic,'modules.nnGame.inerGame.model.data.PaixingLogic');
	PaixingLogic.getPaixing=function(cards,jishuArr,needSort){
		(needSort===void 0)&& (needSort=true);
		if(needSort){
			cards.sort(PaixingLogic.compCardsFun);
		}
		if(jishuArr==null){
			jishuArr=JishuArrData.getJishuArrData(cards);
		}
		if(PaixingLogic.isTongshun(cards,jishuArr)==true){
			return 17;
		}
		else if(PaixingLogic.isZhadan(cards,jishuArr)==true){
			return 16;
		}
		else if(PaixingLogic.isWuxiao(cards,jishuArr)==true){
			return 15;
		}
		else if(PaixingLogic.isWuhua(cards,jishuArr)==true){
			return 14;
		}
		else if(PaixingLogic.isHulu(cards,jishuArr)==true){
			return 13;
		}
		else if(PaixingLogic.isShunzi(cards,jishuArr)==true){
			return 12;
		}
		else if(PaixingLogic.isTonghua(cards,jishuArr)==true){
			return 11;
		}
		else{
			var niuData=NiuData.getNiuData(cards);
			if(niuData.niuNum==0){
				return 0;
			}
			else if(niuData.niuNum==1){
				return 1;
			}
			else if(niuData.niuNum==2){
				return 2;
			}
			else if(niuData.niuNum==3){
				return 3;
			}
			else if(niuData.niuNum==4){
				return 4;
			}
			else if(niuData.niuNum==5){
				return 5;
			}
			else if(niuData.niuNum==6){
				return 6;
			}
			else if(niuData.niuNum==7){
				return 7;
			}
			else if(niuData.niuNum==8){
				return 8;
			}
			else if(niuData.niuNum==9){
				return 9;
			}
			else if(niuData.niuNum==10){
				return 10;
			}
		}
		return 0;
	}

	PaixingLogic.isNiuPaixing=function(paixing){
		switch(paixing){
			case 17:
			case 16:
			case 15:
			case 14:
			case 13:
			case 13:
			case 12:
			case 11:
			case 0:
				return false;
			}
		return true;
	}

	PaixingLogic.isTongshun=function(cards,jishuData){
		if(PaixingLogic.isTonghua(cards,jishuData)==true && PaixingLogic.isShunzi(cards,jishuData)==true){
			return true;
		}
		return false;
	}

	PaixingLogic.isZhadan=function(cards,jishuData){
		if(jishuData==null){
			jishuData=JishuArrData.getJishuArrData(cards);
		}
		if(jishuData.fourArr.length==1){
			return true;
		}
		return false;
	}

	PaixingLogic.isWuxiao=function(cards,jishuData){
		if(jishuData==null){
			jishuData=JishuArrData.getJishuArrData(cards);
		};
		var i=0;
		var totalV=0;
		for(i=0;i<jishuData.nValueArr.length;i++){
			if(jishuData.nValueArr[i] >=5){
				return false;
			}
			totalV+=jishuData.nValueArr[i];
			if(totalV >=10){
				return false;
			}
		}
		return true;
	}

	PaixingLogic.isWuhua=function(cards,jishuData){
		if(jishuData==null){
			jishuData=JishuArrData.getJishuArrData(cards);
		};
		var i=0;
		for(i=0;i<jishuData.isHuaArr.length;i++){
			if(jishuData.isHuaArr[i]==false){
				return false;
			}
		}
		return true;
	}

	PaixingLogic.isHulu=function(cards,jishuData){
		if(jishuData==null){
			jishuData=JishuArrData.getJishuArrData(cards);
		}
		if(jishuData.threeArr.length==1 && jishuData.twoArr.length==1){
			return true;
		}
		return false;
	}

	PaixingLogic.isShunzi=function(cards,jishuData){
		var i=0,len=cards.length;
		if(jishuData==null){
			jishuData=JishuArrData.getJishuArrData(cards);
		}
		if(jishuData.fourArr.length==0 && jishuData.threeArr.length==0 && jishuData.twoArr.length==0 && jishuData.danArr.length >=5){
			var danArr=jishuData.danArr.concat();
			var idx=jishuData.danArr.indexOf(16);
			if(idx !=-1&& UserData.needOneTwo){
				JishuArrData.conversValueArr(danArr);
			}
			if(JishuArrData.checkValuelian(danArr)==true){
				return true;
			}
		}
		return false;
	}

	PaixingLogic.isTonghua=function(cards,jishuData){
		if(jishuData==null){
			jishuData=JishuArrData.getJishuArrData(cards);
		};
		var i=0;
		var type=-1;
		for(i=0;i<jishuData.typeArr.length;i++){
			if(i==0){
				type=jishuData.typeArr[i];
			}
			else if(jishuData.typeArr[i] !=type){
				return false;
			}
		}
		return true;
	}

	PaixingLogic.compCardsFun=function(A,B){
		if(A==0 || B==0){
			return 0;
		};
		var typeA=BasePocker.getT(A);
		var typeB=BasePocker.getT(B);
		var valueA=BasePocker.getV(A);
		var valueB=BasePocker.getV(B);
		if(valueA > valueB){
			return 1;
		}
		else if(valueA==valueB){
			if(typeA > typeB){
				return 1;
			}
			else{
				return-1;
			}
		}
		else{
			return-1;
		}
	}

	PaixingLogic.getCardsFromValues=function(fromCards,values){
		var retArr=[];
		var tempArr=fromCards.concat();
		var i=0,j=0;
		for(i=0;i<values.length;i++){
			for(j=0;j<tempArr.length;j++){
				if(BasePocker.getV(tempArr[j])==values[i] || BasePocker.getVShang(tempArr[j])==values[i]){
					retArr.push(tempArr[j]);
					tempArr.splice(j,1);
					break ;
				}
			}
		}
		return retArr;
	}

	PaixingLogic.sortHandleCards=function(cards){
		cards.sort(PaixingLogic.compCardsFun);
	}

	PaixingLogic.sortOutputCards=function(cards){
		var retCards;
		PaixingLogic.sortHandleCards(cards);
		var jishuData=JishuArrData.getJishuArrData(cards);
		var paixing=PaixingLogic.getPaixing(cards);
		var valueCards=[];
		var tempValues=[];
		var i=0;
		var temp=0;
		var idx=0;
		switch(paixing){
			case 12:
				if(UserData.needOneTwo){
					if(jishuData.danArr.indexOf(16)!=-1){
						JishuArrData.conversValueArr(jishuData.danArr);
						cards=PaixingLogic.getCardsFromValues(cards,jishuData.danArr);
					}
				}
				break ;
			case 13:
				valueCards=[jishuData.threeArr[0],jishuData.threeArr[0],jishuData.threeArr[0],jishuData.twoArr[0],jishuData.twoArr[0]];
				cards=PaixingLogic.getCardsFromValues(cards,valueCards);
				break ;
			}
		return retCards=cards.concat();
	}

	PaixingLogic.cutArrInArr=function(cutArr,inArr){
		var mcutArr=cutArr.concat();
		var i=0,j=0,idx=0;
		for(i=0;i<inArr.length;i++){
			idx=mcutArr.indexOf(inArr[i]);
			if(idx !=-1){
				inArr.splice(i,1);
				i--;
				mcutArr.splice(idx,1);
			}
		}
	}

	return PaixingLogic;
})()


//class modules.nnGame.inerGame.model.NnMsgs
var NnMsgs=(function(){
	function NnMsgs(){
		this.ACKBC_Into_Room=null;
		this.ACK_RoomInfo=null;
		this.ACK_Room_User=null;
		this.ACKBC_CurPlayer=null;
		this.ACKBC_Sitdown=null;
		this.ACKBC_Standup=null;
		this.ACKBC_Ready=null;
		this.ACKBC_Exit_Room=null;
		this.NotifyStartGame=null;
		this.MSG_NOTIFY_SUMMARY=null;
		this.AckDisband=null;
		this.NotifyDisband=null;
		this.NotifyUserState=null;
		this.ACKBC_Sddz_Start=null;
		this.ACK_User_SeatCard=null;
		this.ACKBC_Sddz_Chupai=null;
		this.ACKBC_Sddz_End=null;
		this.ACKBC_Sddz_Total=null;
		this.ACKBC_Sddz_Card_Init=null;
		this.ACKBC_Sddz_JiaoDizhu=null;
		this.ACKBC_Sddz_Jiaofen=null;
		this.ACKBC_Sddz_Dizhu=null;
		this.ACKBC_Sddz_Mingpai=null;
		this.ACKBC_Sddz_Jiabei=null;
		this.ACKBC_Sddz_Pass=null;
		//nn
		this.ACKBC_Nn_Xiazhu=null;
		//上海斗地主独有的
		this.ACKBC_Srddz_Baodao=null;
		this.ACKBC_Srddz_StrictWin=null;
	}

	__class(NnMsgs,'modules.nnGame.inerGame.model.NnMsgs');
	return NnMsgs;
})()


//class modules.nnGame.inerGame.view.NnPage
var NnPage=(function(){
	function NnPage(skin){
		this._skin=null;
		this.handlePart=null;
		this.handleBtns=null;
		this.timeTip=null;
		this.cuoPart=null;
		if(skin){
			this._skin=skin;
			this._skin.mouseThrough=true;
			this.handlePart=new HandlePart$1(this._skin.handlePos0,this._skin.handlePos1,this._skin.handlePos2,this._skin.handlePos3,this._skin.handlePos4,this._skin.handlePos5,this._skin.handlePos6,this._skin.handlePos7,this._skin.handlePos8,this._skin.handlePos9);
			this.handleBtns=new HandleBtnsPart$1(this._skin.ctlPart,this._skin.tishiBtn,this._skin.showBtn,this._skin.cuoBtn,this._skin.fanBtn);
			this.cuoPart=new CuoPart(this._skin.cuoPart);
			this.timeTip=new TimeTipView(this._skin.tipPart);
		}
	}

	__class(NnPage,'modules.nnGame.inerGame.view.NnPage');
	var __proto=NnPage.prototype;
	__proto.setChairNum=function(num){
		(num===void 0)&& (num=10);
		this.handlePart.setChairNum(num);
	}

	__proto.reset=function(needTimeReset){
		(needTimeReset===void 0)&& (needTimeReset=true);
		this.handlePart.reset();
		this.handleBtns.reset();
		if(needTimeReset){
			this.timeTip.reset();
		}
		this.cuoPart.reset();
	}

	__getset(0,__proto,'skin',function(){
		return this._skin;
	});

	return NnPage;
})()


//class modules.nnGame.inerGame.view.PlayerInfoPage
var PlayerInfoPage$1=(function(){
	function PlayerInfoPage(skin){
		this._skin=null;
		this._dir0=null;
		this._dir1=null;
		this._dir2=null;
		this._dir3=null;
		this._dir4=null;
		this._dir5=null;
		this._dir6=null;
		this._dir7=null;
		this._dir8=null;
		this._dir9=null;
		this._PosChairVec=[];
		this._skin=skin;
		this._skin.mouseThrough=true;
		this._dir0=new BasePlayerInfoItem$1(this._skin.pos0);
		this._dir1=new BasePlayerInfoItem$1(this._skin.pos1);
		this._dir2=new BasePlayerInfoItem$1(this._skin.pos2);
		this._dir3=new BasePlayerInfoItem$1(this._skin.pos3);
		this._dir4=new BasePlayerInfoItem$1(this._skin.pos4);
		this._dir5=new BasePlayerInfoItem$1(this._skin.pos5);
		this._dir6=new BasePlayerInfoItem$1(this._skin.pos6);
		this._dir7=new BasePlayerInfoItem$1(this._skin.pos7);
		this._dir8=new BasePlayerInfoItem$1(this._skin.pos8);
		this._dir9=new BasePlayerInfoItem$1(this._skin.pos9);
		this._skin.startBtn.visible=false;
		this._skin.leaveBtn.visible=false;
		this._skin.disbandBtn.visible=false;
		this._skin.readyBtn.visible=false;
		this._skin.startBtn.on("click",this,this.onClickStartBtn);
		this._skin.inviteBtn.on("click",this,this.onClickInviteBtn);
		this._skin.leaveBtn.on("click",this,this.onClickLeaveBtn);
		this._skin.disbandBtn.on("click",this,this.onClickDisbandBtn);
		this._skin.readyBtn.on("click",this,this.onClickReadyBtn);
		this._skin.gameEndBtn.on("click",this,this.onClickEndBtn);
		this.allReset();
	}

	__class(PlayerInfoPage,'modules.nnGame.inerGame.view.PlayerInfoPage',null,'PlayerInfoPage$1');
	var __proto=PlayerInfoPage.prototype;
	__proto.onClickEndBtn=function(e){
		this.onConfirmEnd(0);
	}

	//QuickUtils.popMessageBox("房间已结束！",PopBox.BTN_ENDGAME,this,onConfirmEnd);
	__proto.onConfirmEnd=function(idx){
		if(idx==0){
			if(AppConfig.isNewHall){
				QuickUtils.gotoHall(1);
			}
			else{
				this.controller.endGameGotoHall();
				Laya.timer.callLater(this,this.gotoReport);
			}
		}
		else{
			if(AppConfig.isNewHall){
				QuickUtils.gotoHall();
			}
			else{
				this.controller.endGameGotoHall();
			}
		}
	}

	__proto.gotoReport=function(){
		HallModule.instance.hallContext.hallView.hallLayer.onRecord({"uniqueCode":UserData.uniqueCode});
	}

	__proto.onClickStartBtn=function(e){
		var startGameObj={SID:UserData.SID};
		this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(220,startGameObj));
	}

	__proto.onClickInviteBtn=function(e){
		CommonModule.instance.commonContext.view.gameShareView.show();
	}

	__proto.onClickLeaveBtn=function(e){
		var ExitRoomObj={sid:UserData.SID};
		this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(190,ExitRoomObj),false);
	}

	__proto.onClickDisbandBtn=function(e){
		if(this.model.gameHasStarted==false){
			var OwnerDisbandObj={sid:UserData.SID};
			this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(151,OwnerDisbandObj),false);
		}
		else{
			var obj={roomId:UserData.roomid};
			EventCenter.instance.event("SOCKET_SEND",ProtoMessage.getProtoMessage(400,obj));
		}
	}

	/**准备*/
	__proto.onClickReadyBtn=function(e){
		var obj={sid:UserData.SID};
		this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(210,obj));
	}

	/**更新离开解散按钮的状态*/
	__proto.updateLeaveDisbandBtns=function(){
		this._skin.leaveBtn.visible=false;
		this._skin.disbandBtn.visible=false;
		if(this.model.isGameStart==false && this.model.srddzMsgs.ACK_RoomInfo.RoundCount > 0 && this.model.isSelfSitDown){
			this._skin.readyBtn.visible=true;
		}
		else{
			this._skin.readyBtn.visible=false;
		}
		if(this.model.gameHasStarted==false){
			if(UserData.selfuid==this.model.roomOwnerUid){
				this._skin.disbandBtn.visible=true;
			}
			else{
				this._skin.leaveBtn.visible=true;
			}
		}
		else{
			if(this.model.isSelfSitDown){
				this._skin.disbandBtn.visible=true;
			}
			else{
				this._skin.leaveBtn.visible=true;
			}
		}
	}

	/**显示游戏已经结束按钮*/
	__proto.showGameEndBtn=function(){
		this._skin.gameEndBtn.visible=true;
	}

	__proto.showStartBtn=function(isShow){
		(isShow===void 0)&& (isShow=true);
		this._skin.startBtn.visible=isShow;
	}

	/**游戏开始影藏所有按钮*/
	__proto.hideBtnsByGameStart=function(){
		this._skin.startBtn.visible=false;
		this._skin.inviteBtn.visible=false;
	}

	//_PiaoSelePart.hide();
	__proto.updateStartBtn=function(){
		this._skin.startBtn.visible=false;
	}

	/***/
	__proto.updateSitDownUpBtn=function(needJudge){
		(needJudge===void 0)&& (needJudge=true);
		needJudge=true;
		if(needJudge){
			if(this.model.isSelfSitDown && this.model.gameHasStarted==false){
				CommonModule.instance.commonContext.view.functionOption.onClickBtn(false);
			}
			else{
				CommonModule.instance.commonContext.view.functionOption.onClickBtn(true);
			}
		}
		else{
			if(this.model.isSelfSitDown){
				CommonModule.instance.commonContext.view.functionOption.onClickBtn(true);
			}
			else{
				CommonModule.instance.commonContext.view.functionOption.onClickBtn(true);
			}
		}
	}

	/**游戏开始之后，显示地主和农民*/
	__proto.showZhuang=function(){
		var i=0,len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].showZhuang(this.model.getChairPosByDir(i));
		}
	}

	/**更新玩家加倍*/
	__proto.updateJiabei=function(){
		var i=0,len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].updateJiabei(this.model.getChairPosByDir(i));
		}
	}

	__proto.hideZhuang=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].hideZhuang();
		}
	}

	/**隐藏抢庄和下注*/
	__proto.hideQiangAndXia=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].hideQiangAndXia();
		}
	}

	/**显示抢庄的倍数*/
	__proto.showQiangBei=function(pos,beishu){
		this._PosChairVec[this.model.getChairDirByPos(pos)].showQiangBei(pos,beishu);
	}

	/**显示玩家下注*/
	__proto.showXiazhu=function(pos,zhu){
		this._PosChairVec[this.model.getChairDirByPos(pos)].showXiazhu(pos,zhu);
	}

	__proto.hideReadyBtn=function(){
		this._skin.readyBtn.visible=false;
	}

	__proto.allReset=function(){
		this._dir0.reset();
		this._dir1.reset();
		this._dir2.reset();
		this._dir3.reset();
		this._dir4.reset();
		this._dir5.reset();
		this._dir6.reset();
		this._dir7.reset();
		this._dir8.reset();
		this._dir9.reset();
		this._skin.gameEndBtn.visible=false;
	}

	/**设置椅子数量*/
	__proto.setChairNum=function(num){
		(num===void 0)&& (num=10);
		this._PosChairVec.length=0;
		console.log("playerinfo setChairNum::"+num);
		switch(num){
			case 10:this._PosChairVec.push(this._dir0,this._dir1,this._dir2,this._dir3,this._dir4,this._dir5,this._dir6,this._dir7,this._dir8,this._dir9);
				this._dir0.dir=0;
				this._dir1.dir=1;
				this._dir2.dir=2;
				this._dir3.dir=3;
				this._dir4.dir=4;
				this._dir5.dir=5;
				this._dir6.dir=6;
				this._dir7.dir=7;
				this._dir8.dir=8;
				this._dir9.dir=9;
				break ;
			}
		this.bigReset();
	}

	/**重新进入游戏大的重置*/
	__proto.bigReset=function(){
		this._skin.startBtn.visible=false;
		this._skin.inviteBtn.visible=true;
	}

	/**重置*/
	__proto.reset=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].reset();
		}
		this.updateSitDownUpBtn();
		this._skin.gameEndBtn.visible=false;
	}

	/**带漂reset*/
	__proto.havePiaoReset=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].reset(true);
		}
	}

	/**重置某一个玩家*/
	__proto.resetOnePos=function(pos){
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].reset();
	}

	__proto.hideReadySimbol=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].hideReadySimbol();
		}
	}

	/**
	*显示语音图标
	*@param pos
	*
	*/
	__proto.showVoice=function(uid){
		var pos=this.model.getPlayerPosByUid(uid);
		var dir=this.model.getChairDirByPos(pos);
		console.log(dir)
		if(dir==-1){
			this._skin.laba.visible=true;
			this._skin.labaTip.play()
			}else{
			this._PosChairVec[dir].voice.visible=true;
			this._PosChairVec[dir].voice["ani"].play()
		}
	}

	/**
	*隐藏语音图标
	*@param pos
	*/
	__proto.hideVoice=function(uid){
		var pos=this.model.getPlayerPosByUid(uid);
		var dir=this.model.getChairDirByPos(pos);
		if(dir==-1){
			this._skin.laba.visible=false;
			this._skin.labaTip.stop()
			}else{
			this._PosChairVec[dir].voice.visible=false;
			this._PosChairVec[dir].voice["ani"].stop()
		}
	}

	/**显示一个*/
	__proto.showReady=function(pos){
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].showReady();
	}

	/**刷新一个玩家的数据*/
	__proto.updateOnePlayerInfo=function(obj,needFlyImg){
		(needFlyImg===void 0)&& (needFlyImg=false);
		if (obj.pos==-1){
			return;
		};
		var dir=this.model.getChairDirByPos(obj.pos);
		if(dir < this._PosChairVec.length){
			this._PosChairVec[dir].update(obj,needFlyImg);
		}
	}

	/**刷新一个玩家的数据*/
	__proto.updateOnePlayerGolds=function(obj){
		var dir=this.model.getChairDirByPos(obj.pos);
		if(dir < this._PosChairVec.length){
			console.log("   updateOnePlayerInfo ::"+dir+" obj.pos::"+obj.pos);
			this._PosChairVec[dir].updateGolds(obj);
		}
	}

	/**播放掉落金币动画*/
	__proto.playDropJinBiFrom=function(pos,fromPos){
		var dir=this.model.getChairDirByPos(pos);
		var fromDir=this.model.getChairDirByPos(fromPos);
		if(dir < this._PosChairVec.length){
			if(this._PosChairVec[dir].skin.parent){
				this._PosChairVec[dir].skin.parent.addChild(this._PosChairVec[dir].skin);
			}
			this._PosChairVec[dir].playDropJinBiFrom(fromDir);
		}
	}

	/**播放掉落金币动画*/
	__proto.playDropJinBiTo=function(pos,toPos){
		var dir=this.model.getChairDirByPos(pos);
		var toDir=this.model.getChairDirByPos(toPos);
		if(dir < this._PosChairVec.length){
			if(this._PosChairVec[dir].skin.parent){
				this._PosChairVec[dir].skin.parent.addChild(this._PosChairVec[dir].skin);
			}
			this._PosChairVec[dir].playDropJinBiTo(toDir);
		}
	}

	/**根据一个数组来刷新玩家的信息*/
	__proto.updatePlayerInfos=function(vec,needResetPiao,needFlyImg){
		(needResetPiao===void 0)&& (needResetPiao=true);
		(needFlyImg===void 0)&& (needFlyImg=false);
		console.log("updatePlayerInfos ::"+vec.length);
		this.reset();
		var obj;
		var i=0;
		var len=vec.length;
		for(i=0;i<len;i++){
			if(vec[i]){
				console.log("updatePlayerInfos i::"+i);
				this.updateOnePlayerInfo(vec[i],needFlyImg);
			}
		}
	}

	/**更新玩家的金币*/
	__proto.updateGolds=function(vec){
		console.log("updatePlayerInfos ::"+vec.length);
		console.log(vec);
		var obj;
		var i=0;
		var len=vec.length;
		for(i=0;i<len;i++){
			if(vec[i]){
				console.log("updatePlayerInfos i::"+i);
				this.updateOnePlayerGolds(vec[i]);
			}
		}
	}

	__proto.updateTirenBtn=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].updateTirenBtn();
		}
	}

	__proto.showExpress=function(dir,index){
		this._PosChairVec[dir].showExpress(index);
	}

	//imediate :是否立即更新状态
	__proto.setGrayhead=function(dir,gray,imediate,offlineTime){
		this._PosChairVec[dir].setHeadGray(gray,imediate,offlineTime);
	}

	/**播放抢庄动画*/
	__proto.playQZAni=function(betweenArr,zhuangPos,caller,compFun){
		var i=0,dir=0;
		for(i=0;i<betweenArr.length;i++){
			Laya.timer.frameOnce(i*5,this,this.onSingleQiEff,[this.model.getChairDirByPos(betweenArr[i])],false);
		}
		for(i=0;i<betweenArr.length;i++){
			Laya.timer.frameOnce((i+betweenArr.length)*5,this,this.onSingleQiEff,[this.model.getChairDirByPos(betweenArr[i])],false);
			if(betweenArr[i]==zhuangPos){
				var frameNum=(i+betweenArr.length)*5;
				Laya.timer.frameOnce((i+betweenArr.length)*5,this,this.endShowZhuang,[frameNum,caller,compFun],false);
				Laya.timer.frameOnce((i+betweenArr.length+1)*5,this,this.showQZAniEnd,[zhuangPos,caller,compFun],false);
				break ;
			}
		}
	}

	__proto.endShowZhuang=function(frameNum,caller,compFun){
		this.showZhuang();
		compFun.apply(caller,[frameNum]);
	}

	__proto.onSingleQiEff=function(dir){
		for(var i=0;i<this._PosChairVec.length;i++){
			if(i==dir){
				this._PosChairVec[i].showAndPlayQZAni();
			}
			else{
				this._PosChairVec[i].hideAndStopQZAni();
			}
		}
	}

	__proto.showQZAniEnd=function(zhuangPos,caller,compFun){}
	__getset(0,__proto,'model',function(){
		return NnGameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'controller',function(){
		return NnGameModule.instance.gameContext.controller;
	});

	return PlayerInfoPage;
})()


//class modules.nnGame.inerGame.view.playerInfoPart.BasePlayerInfoItem
var BasePlayerInfoItem$1=(function(){
	function BasePlayerInfoItem(skin){
		this.needPiao=false;
		this._skin=null;
		// public var huaImg_y:Image;
		this.headImg=null;
		this.nameTf=null;
		this.recordTf=null;
		this.readyImg=null;
		this.gangEff=null;
		this.tirenBtn=null;
		this.sitDownBtn=null;
		this.offlineTf=null;
		this.fenshuTf=null;
		this.voice=null;
		this.jinbiAni=null;
		/**抢庄动画*/
		this.qzAni=null;
		this.headw=0
		this.headh=0;
		this.dir=0;
		this.expressImg=null;
		this.expressMov=null;
		this.expressUrl="res/swfs/Emoticon_";
		//protected var playingPiaoImg:Image;
		this.offlineimg=null;
		//
		this.gangAni=null;
		this._skin=skin;
		this.init();
	}

	__class(BasePlayerInfoItem,'modules.nnGame.inerGame.view.playerInfoPart.BasePlayerInfoItem',null,'BasePlayerInfoItem$1');
	var __proto=BasePlayerInfoItem.prototype;
	__proto.init=function(){
		this._skin.mouseThrough=true;
		this._skin["haveBox"].mouseThrough=true;
		this.offlineTf=this._skin["offlineTf"];
		this.offlineTf.overflow="visible";
		this.headImg=this._skin["headImg"];
		this.nameTf=this._skin["nameTf"];
		this.jinbiAni=this._skin["jinbiAni"];
		this.qzAni=this._skin["zhuangAni"];
		this.recordTf=this._skin["recordTf"];
		this.readyImg=this._skin["readyImg"];
		this.voice=this._skin["voice"];
		this.gangEff=this._skin["gangEff"];
		this.fenshuTf=this._skin["fenshuTf"];
		this.tirenBtn=this._skin["tirenBtn"];
		this.expressImg=this._skin["express"];
		this.offlineimg=this._skin["offline"];
		this.sitDownBtn=this._skin["sitdownBtn"];
		this.tirenBtn.visible=false;
		this.voice.visible=false;
		this.offlineimg.visible=false;
		this.headw=this.headImg.width;
		this.headh=this.headImg.height;
		this.loadGangEff();
		this.loadExpressMov();
		this.tirenBtn.on("click",this,this.onClickTiren);
		this.sitDownBtn.on("click",this,this.onClickSitdown);
	}

	__proto.onClickSitdown=function(e){
		if(this.model.gameHasStarted==true && this.model.isSelfSitDown){
			QuickUtils.popMessage("游戏开始之后不能换座位！");
			return;
		}
		if (!UserData.isCanSitdown){
			return
		}
		this.onConFirm(0);
	}

	// QuickUtils.popMessageBox(str,PopBox.BTN_LABEL_QUEDINGQUXIAO,this,onConFirm,"提示","left");
	__proto.onConFirm=function(idx){
		if(idx==0){
			if(!UserData.isCanSitdown)return;
			var sitDownObj={sid:UserData.SID,index:this.model.getChairPosByDir(this.dir)};
			this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(195,sitDownObj));
			UserData.isCanSitdown=false;
			Laya.timer.once(400,this,this.restCanSitdown)
		}
	}

	__proto.restCanSitdown=function(){
		UserData.isCanSitdown=true;
		Laya.timer.clear(this,this.restCanSitdown)
	}

	__proto.onClickTiren=function(e){
		if(this.model.isSelfSitDown==false){
			QuickUtils.popMessage("围观用户没有权限踢人");
			return;
		}
		if(this.model.isGameStart){
			QuickUtils.popMessageBox("踢人会导致当前游戏流局，确认踢人吗？","BTN_LABEL_QUEDINGQUXIAO",this,this.onConFirmTiren,"提示","left");
		}
		else{
			this.onConFirmTiren(0);
		}
	}

	__proto.onConFirmTiren=function(idx){
		if(idx==0){
			var kickObj={pos:this.model.getChairPosByDir(this.dir)};
			this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(405,kickObj));
		}
	}

	__proto.loadGangEff=function(){
		return;
		this.gangEff.removeChildren();
		this.gangEff.skin="";
		this.gangAni=new Animation();
		this.gangAni.loadAtlas("res/animations/gangaddEff.json");
		this.gangAni.stop();
		this.gangEff.addChild(this.gangAni);
		this.gangAni.on("complete",this,this.onGangAniComp);
	}

	__proto.loadExpressMov=function(){
		this.expressImg.removeChildren();
		this.expressImg.skin="";
		this.expressMov=new MovieClip();
		this.expressMov.width=200;
		this.expressMov.height=200;
		this.expressImg.addChild(this.expressMov);
		this.expressMov.on("complete",this,this.onCompleteMov);
	}

	__proto.showExpress=function(index){
		if(this.expressMov !=null){
			this.expressMov.alpha=1;
			Tween.clearAll(this.expressMov);
			if(this.expressMov.parent)
				this.expressMov.removeSelf();
		}
		this.expressMov=new MovieClip();
		this.expressMov.width=200;
		this.expressMov.height=200;
		this.expressMov.x=-85;
		this.expressMov.y=-85;
		this.expressImg.addChild(this.expressMov);
		this.expressMov.visible=true;
		this.expressMov.alpha=1;
		if(index < 10)
			this.expressMov.load(this.expressUrl+"0"+index+".swf",true);
		else
		this.expressMov.load(this.expressUrl+index+".swf",true);
		Tween.to(this.expressMov,{alpha:0.3},500,null,new Handler(this,this.onCompeteTween,[null]),2500);
	}

	__proto.onCompeteTween=function(obj){
		if(this.expressMov !=null){
			this.expressMov.visible=false;
			this.expressMov.alpha=1;
			if(this.expressMov.parent)
				this.expressMov.removeSelf();
			this.expressMov=null;
		}
	}

	__proto.onCompleteMov=function(){}
	__proto.onGangAniComp=function(e){
		this.gangEff.visible=false;
		this.gangAni.stop();
	}

	/**分数变化时播放*/
	__proto.playGangEff=function(record){
		if(record==0){
			return;
		}
		if(record > 0){
			this.fenshuTf.color="#00ff00";
		}
		else{
			this.fenshuTf.color="#ff0000";
		}
		this.fenshuTf.visible=true;
		this.fenshuTf.text=record > 0 ? "+"+record :record+"";
		this.fenshuTf.y=60;
		Tween.to(this.fenshuTf,{y:20},2000,null,Handler.create(this,this.onFenshuEffComp),2);
	}

	__proto.onFenshuEffComp=function(){
		this.fenshuTf.visible=false;
	}

	__proto.update=function(obj,needFlyImg){
		(needFlyImg===void 0)&& (needFlyImg=false);
		this.sitDownBtn.visible=false;
		this._skin["haveBox"].visible=true;
		if(obj.score==undefined){
			obj.score=0;
		}
		this.nameTf.text=obj.nickname;
		if(UserData.Rule[4]==1){
			this.recordTf.text=obj.Coin;
		}
		else{
			this.recordTf.text=""+obj.score;
		}
		if(UserData.uid==obj.uid){
			UserData.Diamond=obj.Diamond;
			UserData.score=obj.score;
			UserData.Coin=obj.Coin;
		}
		if(obj.readystate==1){
			if(this.model.isGameStart==false){
				this.readyImg.visible=true;
			}
			console.log("obj.piao::"+obj.piao);
		}
		else{
			this.readyImg.visible=false;
		};
		var pos=this.model.getPlayerPosByUid(obj.uid);
		this._skin["chairPos"].text="座位号："+pos;
		this._skin["chairPos"].visible=false;
		this.headImg.width=this.headw;
		this.headImg.height=this.headh;
		this.headImg.on("click",this,this.onShowUserInfo,[obj]);
		if(WX.splitStr(obj.Icon,"")[0]=='h'){
			var photo=new Sprite();
			photo.loadImage(obj.Icon,0,0,this.headw,this.headh ,Handler.create(this,this.delayPhotoPhoto,[photo,photo]));
			photo.mouseEnabled=true;
			this.headImg.addChild(photo);
		};
		var isGray=false;
		if(obj.state==2){
			isGray=true;
		}
		this.setHeadGray(isGray,true,obj.offlineTime);
		this.updateTirenBtn();
		if(needFlyImg){
			this.playFlyHeadImg(this.model.getChairDirByPos(obj.prePos));
		}
	}

	__proto.onShowUserInfo=function(obj){
		UserInfoPage$1.instance.show(obj.uid,obj.ip,obj.Icon);
	}

	__proto.delayPhotoPhoto=function(photo,mask){}
	//photo.mask=mask;
	__proto.updateGolds=function(obj){
		var preScore=this.recordTf.text;
		if(UserData.Rule[4]==1){
			this.recordTf.text=obj.Coin;
			this.playGangEff(obj.Coin-preScore);
		}
		else{
			this.recordTf.text=""+obj.score;
			this.playGangEff(obj.score-preScore);
		}
		if(UserData.uid==obj.uid){
			UserData.Diamond=obj.Diamond;
			UserData.score=obj.score;
			UserData.Coin=obj.Coin;
		}
	}

	/**播放掉金币动画*/
	__proto.playDropJinBiFrom=function(fromDir){
		this.jinbiAni.visible=true;
		this.jinbiAni.stop();
		this.jinbiAni.index=0;
		this.jinbiAni.x=75+(BasePlayerInfoItem.DIRPOS_REFERENCE[fromDir].x-BasePlayerInfoItem.DIRPOS_REFERENCE[this.dir].x);
		this.jinbiAni.y=53+(BasePlayerInfoItem.DIRPOS_REFERENCE[fromDir].y-BasePlayerInfoItem.DIRPOS_REFERENCE[this.dir].y);
		Tween.to(this.jinbiAni,{x:75,y:53},400,null,new Handler(this,this.onTweenComp));
	}

	/**播放掉金币动画 从自己的位置到别人的位置*/
	__proto.playDropJinBiTo=function(toDir){
		this.jinbiAni.visible=true;
		this.jinbiAni.index=0;
		this.jinbiAni.stop();
		this.jinbiAni.x=75;
		this.jinbiAni.y=53;
		var toX=75+(BasePlayerInfoItem.DIRPOS_REFERENCE[toDir].x-BasePlayerInfoItem.DIRPOS_REFERENCE[this.dir].x);
		var toY=53+(BasePlayerInfoItem.DIRPOS_REFERENCE[toDir].y-BasePlayerInfoItem.DIRPOS_REFERENCE[this.dir].y);
		Tween.to(this.jinbiAni,{x:toX,y:toY},400,null,new Handler(this,this.onTweenComp));
	}

	__proto.onTweenComp=function(){
		this.jinbiAni.play(0,false);
		this.jinbiAni.on("complete",this,this.onJinbiAniComp);
		SoundManager.playSound("res/sounds/pinshi/effect/dropJinbi.mp3");
	}

	__proto.onJinbiAniComp=function(){
		this.jinbiAni.visible=false;
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.reset=function(needHuaHide){
		(needHuaHide===void 0)&& (needHuaHide=false);
		this._skin["haveBox"].visible=false;
		this.sitDownBtn.visible=true;
		this._skin["zhuangImg"].visible=false;
		this.readyImg.visible=false;
		this.gangEff.visible=false;
		this.fenshuTf.visible=false;
		this.tirenBtn.visible=false;
		this.voice.visible=false;
		this.voice["ani"].stop();
		this._skin["qiangImg"].visible=false;
		this._skin["zhuBox"].visible=false;
		this.jinbiAni.visible=false;
		this.qzAni.visible=false;
	}

	//hideDizhuNM();
	__proto.showAndPlayQZAni=function(){
		this.qzAni.visible=true;
		this.qzAni.play();
	}

	__proto.hideAndStopQZAni=function(){
		this.qzAni.visible=false;
		this.qzAni.stop();
	}

	/**游戏开始之后，显示地主和农民*/
	__proto.showZhuang=function(pos){
		this._skin["qiangImg"].visible=false;
		this._skin["zhuangImg"].visible=false;
		if(pos==this.model.zhuangPos){
			this._skin["zhuangImg"].visible=true;
			this.showQiangBei(pos,this.model.difen);
			this.showAndPlayQZAni();
		}
	}

	__proto.hideZhuang=function(){
		this._skin["zhuangImg"].visible=false;
		this.hideAndStopQZAni();
	}

	__proto.hideQiangAndXia=function(){
		this._skin["qiangImg"].visible=false;
		this._skin["zhuBox"].visible=false;
	}

	/**显示玩家抢庄*/
	__proto.showQiangBei=function(pos,beishu){
		this._skin["qiangImg"].visible=true;
		this._skin["qiangImg"].skin="gameCommon/qiangx"+beishu+".png";
	}

	/**显示玩家的下注*/
	__proto.showXiazhu=function(pos,zhu){
		this._skin["zhuBox"].visible=true;
		this._skin["zhuTf"].text=""+zhu;
	}

	/**更新玩家加倍情况*/
	__proto.updateJiabei=function(pos){}
	__proto.hideReadySimbol=function(){
		this.readyImg.visible=false;
	}

	__proto.showReady=function(){
		this.readyImg.visible=true;
	}

	__proto.updateTirenBtn=function(){
		var player=this.model.playerByPos(this.model.getChairPosByDir(this.dir));
		if(player!=null){
			this.tirenBtn.visible=player.canKick;
		}
	}

	__proto.setHeadGray=function(gray,imediate,offlineTime){
		(offlineTime===void 0)&& (offlineTime=0);
		if(gray && imediate){
			this._skin["offLineSp"].visible=true;
			this.headImg.filters=[QuickUtils.grayscaleFilter];
			this.offlineimg.visible=true;
			this.offlineTf.visible=true;
			this.offlineTf.text=offlineTime+"";
			this.startCutDownOffline();
		}
		else if(gray && !imediate){
			this._skin["offLineSp"].visible=true;
			Laya.timer.once(10000,this,this.setGrayhead);
		}
		else{
			this._skin["offLineSp"].visible=false;
			this.tirenBtn.visible=false;
			this.headImg.filters=null;
			this.offlineimg.visible=false;
			this.offlineTf.visible=false;
			Laya.timer.clear(this,this.setGrayhead);
			this.model.playerByPos(this.model.getChairPosByDir(this.dir)).canKick=false;
			this.stopCutDownOffline();
		}
	}

	__proto.startCutDownOffline=function(){
		EventCenter.instance.on("ON_LITTLETIMEER",this,this.onCutdown);
	}

	__proto.stopCutDownOffline=function(){
		EventCenter.instance.off("ON_LITTLETIMEER",this,this.onCutdown);
		this.offlineTf.visible=false;
	}

	__proto.onCutdown=function(){
		if(this.model.playerByPos(this.model.getChairPosByDir(this.dir))==null){
			return;
		}
		this.model.playerByPos(this.model.getChairPosByDir(this.dir)).offlineTime--;
		if(this.model.playerByPos(this.model.getChairPosByDir(this.dir)).offlineTime <=0){
			this.model.playerByPos(this.model.getChairPosByDir(this.dir)).offlineTime=0;
			this.stopCutDownOffline();
		}
		if(this.model.playerByPos(this.model.getChairPosByDir(this.dir)).offlineTime==NaN || this.model.playerByPos(this.model.getChairPosByDir(this.dir)).offlineTime==undefined){
			this.model.playerByPos(this.model.getChairPosByDir(this.dir)).offlineTime=0;
		}
		this.offlineTf.text=this.model.playerByPos(this.model.getChairPosByDir(this.dir)).offlineTime+"";
	}

	__proto.setGrayhead=function(){
		this.headImg.filters=[QuickUtils.grayscaleFilter];
		this.offlineimg.visible=true;
	}

	/***/
	__proto.playFlyHeadImg=function(fromDir){}
	__getset(0,__proto,'skin',function(){
		return this._skin;
	});

	__getset(0,__proto,'model',function(){
		return NnGameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'controller',function(){
		return NnGameModule.instance.gameContext.controller;
	});

	__static(BasePlayerInfoItem,
	['DIRPOS_REFERENCE',function(){return this.DIRPOS_REFERENCE=[{x:6,y:530},{x:955,y:326},{x:921,y:199},{x:794,y:114},{x:663,y:66},{x:465,y:53},{x:306,y:66},{x:172,y:114},{x:39,y:199},{x:4,y:325}];}
	]);
	return BasePlayerInfoItem;
})()


//class modules.nnGame.inerGame.view.playerInfoPart.GiftEff
var GiftEff$1=(function(){
	var SingleForcer;
	function GiftEff(forcer){
		this.expressUrl="res/swfs/";
		this.loadedArr=[];
		// }
		this.offsetX=-60;
		this.offsetY=-60;
		this._mcMap=new Dictionary();
	}

	__class(GiftEff,'modules.nnGame.inerGame.view.playerInfoPart.GiftEff',null,'GiftEff$1');
	var __proto=GiftEff.prototype;
	__proto.showGiftEff=function(fromDir,toDir,id){
		var mc=new MovieClip();
		mc.load(this.expressUrl+AppConfig.giftConfig[id-1].name+".swf",true);
		var sound=AppConfig.giftConfig[id-1].sound;
		var sounddelay=parseInt(AppConfig.giftConfig[id-1].sounddelay);
		if(this.loadedArr.indexOf(mc.basePath)!=-1){
			this.onLoaded(mc,fromDir,toDir,sound,sounddelay);
		}
		else{
			mc.on("loaded",this,this.onLoaded,[mc,fromDir,toDir,sound,sounddelay]);
		}
	}

	__proto.onLoaded=function(mc,fromDir,toDir,sound,sounddelay){
		if(this.loadedArr.indexOf(mc.basePath)==-1){
			this.loadedArr.push(mc.basePath);
		}
		mc.stop();
		UIManager.instance.popLayer.addChild(mc);
		mc.x=BasePlayerInfoItem$1.DIRPOS_REFERENCE[fromDir].x+this.offsetX;
		mc.y=BasePlayerInfoItem$1.DIRPOS_REFERENCE[fromDir].y+this.offsetY;
		var tX=0,tY=0;
		tX=BasePlayerInfoItem$1.DIRPOS_REFERENCE[toDir].x+this.offsetX;
		tY=BasePlayerInfoItem$1.DIRPOS_REFERENCE[toDir].y+this.offsetY;
		Tween.to(mc,{x:tX,y:tY},400,null,new Handler(this,this.onCompeteTween,[mc,sound,sounddelay]));
	}

	// }
	__proto.onCompeteTween=function(mc,sound,sounddelay){
		mc.playTo(0,mc.count-2,Handler.create(this,this.playEnd,[mc]));
		Laya.timer.once(3000,this,this.playEnd,[mc]);
		if(sounddelay==0){
			SoundPlay.playEffect(sound);
		}
		else{
			Laya.timer.once(sounddelay,this,this.playSound,[sound],false);
		}
	}

	__proto.playSound=function(sound){
		SoundPlay.playEffect(sound);
	}

	__proto.playEnd=function(mc){
		mc && mc.removeSelf();
	}

	__getset(1,GiftEff,'instance',function(){
		if(GiftEff._instance==null){
			GiftEff._instance=new GiftEff(new SingleForcer());
		}
		return GiftEff._instance;
	});

	GiftEff._instance=null;
	GiftEff.__init$=function(){
		//class SingleForcer
		SingleForcer=(function(){
			function SingleForcer(){}
			__class(SingleForcer,'');
			return SingleForcer;
		})()
	}

	return GiftEff;
})()


//class modules.nnGame.inerGame.view.playerInfoPart.UserInfoPage
var UserInfoPage$1=(function(){
	var SingleForcer;
	function UserInfoPage(forcer){
		this.uid=0;
		this._skin=null;
		this._skin=new UserInfoUI();
		this._skin.giftList.itemRender=GiftItem$1;
		this._skin.giftList.spaceX=10;
		this._skin.giftList.selectEnable=true;
		this._skin.giftList.selectHandler=new Handler(this,this.onSelectRound);
		this._skin.giftList.renderHandler=new Handler(this,this.updateRoundItem);
		this._skin.giftList.dataSource=AppConfig.giftConfig;
		this._skin.giftList.refresh();
	}

	__class(UserInfoPage,'modules.nnGame.inerGame.view.playerInfoPart.UserInfoPage',null,'UserInfoPage$1');
	var __proto=UserInfoPage.prototype;
	__proto.show=function(uid,ip,icon){
		this.uid=uid;
		this._skin.idTf.text="ID: "+uid;
		this._skin.nickName.text=NnGameModule.instance.gameContext.model.playerByUid(uid).nickname;
		this._skin.diamondTf.text=UserData.Diamond+"";
		QuickUtils.AddCenter(this._skin,UIManager.instance.popLayer);
		var photo=new Sprite();
		photo.loadImage(icon,0,0,this._skin.imgPhoto.width,this._skin.imgPhoto.height);
		this._skin.imgPhoto.addChild(photo);
		this._skin.mouseEnabled=true;
		this._skin.clickBg.once("click",this,this.onCloseUserInfo);
		this._skin.giftList.refresh();
		if(uid==UserData.uid){
			this._skin.diamond.visible=true;
			this._skin.diamondTf.visible=true;
		}
		else{
			this._skin.diamond.visible=false;
			this._skin.diamondTf.visible=false;
		}
	}

	__proto.onCloseUserInfo=function(e){
		if(this._skin && e.target==this._skin.clickBg){
			this._skin && this._skin.removeSelf();
		}
	}

	__proto.hide=function(){
		this._skin && this._skin.removeSelf();
	}

	__proto.onSelectRound=function(index){
		console.log("当前选择的索引："+index);
	}

	__proto.updateRoundItem=function(cell,index){
		cell.setData(cell.dataSource,this.uid);
	}

	__getset(1,UserInfoPage,'instance',function(){
		if(UserInfoPage._instance==null){
			UserInfoPage._instance=new UserInfoPage(new SingleForcer());
		}
		return UserInfoPage._instance;
	});

	UserInfoPage._instance=null;
	UserInfoPage.__init$=function(){
		//class SingleForcer
		SingleForcer=(function(){
			function SingleForcer(){}
			__class(SingleForcer,'');
			return SingleForcer;
		})()
	}

	return UserInfoPage;
})()


/**扑克牌基类*/
//class modules.nnGame.inerGame.view.pockerPart.card.BasePocker
var BasePocker=(function(){
	function BasePocker(skin){
		this.skin=null;
		/**-1表示没有状态*/
		this.state=-1;
		this.cardIdx=0;
		this.skin=skin;
		this.init();
	}

	__class(BasePocker,'modules.nnGame.inerGame.view.pockerPart.card.BasePocker');
	var __proto=BasePocker.prototype;
	__proto.init=function(){}
	//reset();
	__proto.up=function(){
		if(this.state==0){
			return;
		}
		this.skin.valueImg.visible=true;
		this.skin.backImg.visible=false;
		this.state=0;
	}

	__proto.back=function(){
		if(this.state==1){
			return;
		}
		this.skin.backImg.visible=true;
		this.skin.valueImg.visible=false;
		this.state=1;
	}

	__proto.down=function(){
		if(this.state==2){
			return;
		}
		this.skin.backImg.visible=false;
		this.skin.valueImg.visible=true;
		this.state=2;
	}

	__proto.show=function(){
		this.skin.visible=true;
	}

	__proto.hide=function(){
		this.skin.visible=false;
	}

	__proto.setCardImg=function(cardIdx){
		if(this.cardIdx==cardIdx){
			return;
		}
		if(BasePocker.CARD_REFERENCE.hasOwnProperty(cardIdx.toString())){
			this.skin.valueImg.skin="poker/"+BasePocker.CARD_REFERENCE[cardIdx.toString()];
		}
		this.cardIdx=cardIdx;
	}

	/**重置*/
	__proto.reset=function(){
		this.hide();
		this.skin.backImg.visible=false;
		this.skin.valueImg.visible=false;
		this.skin.shadowImg.visible=false;
		this.state=-1;
		this.select=false;
	}

	__getset(0,__proto,'visible',function(){
		return this.skin.visible;
	});

	__getset(0,__proto,'canControl',null,function(bool){
	});

	__getset(0,__proto,'select',function(){
		return false;
		},function(bool){
	});

	__getset(0,__proto,'view',function(){
		return NnGameModule.instance.gameContext.view;
	});

	__getset(0,__proto,'model',function(){
		return NnGameModule.instance.gameContext.model;
	});

	BasePocker.getT=function(card){
		return Math.floor(card/100);
	}

	BasePocker.getV=function(card){
		return card%100;
	}

	BasePocker.getVShang=function(card){
		var value=card%100;
		if(value==14){
			value=1;
		}
		else if(value==16){
			value=2;
		}
		return value;
	}

	BasePocker.getVNn=function(card){
		var value=card%100;
		if(value==14){
			value=1;
		}
		else if(value==16){
			value=2;
		}
		if(value >=10){
			value=10;
		}
		return value;
	}

	BasePocker.checkIsHua=function(card){
		var value=card%100;
		if(value==11 || value==12 || value==13){
			return true;
		}
		return false;
	}

	BasePocker.PAIXING_MEINIU=0;
	BasePocker.PAIXING_NIUYI=1;
	BasePocker.PAIXING_NIUER=2;
	BasePocker.PAIXING_NIUSAN=3;
	BasePocker.PAIXING_NIUSI=4;
	BasePocker.PAIXING_NIUWU=5;
	BasePocker.PAIXING_NIULIU=6;
	BasePocker.PAIXING_NIUQI=7;
	BasePocker.PAIXING_NIUBA=8;
	BasePocker.PAIXING_NIUJIU=9;
	BasePocker.PAIXING_NIUNIU=10;
	BasePocker.PAIXING_TONGHUA=11;
	BasePocker.PAIXING_SHUNZI=12;
	BasePocker.PAIXING_HULU=13;
	BasePocker.PAIXING_WUHUA=14;
	BasePocker.PAIXING_WUXIAO=15;
	BasePocker.PAIXING_ZHADAN=16;
	BasePocker.PAIXING_TONGSHUN=17;
	BasePocker.TYPE_WANG=5;
	BasePocker.PREPATH="poker/";
	BasePocker.STATE_UP=0;
	BasePocker.STATE_BACK=1;
	BasePocker.STATE_DOWN=2;
	__static(BasePocker,
	['CARD_REFERENCE',function(){return this.CARD_REFERENCE={
			551:"xiao_w.png",552:"da_w.png",
			414:"hong_1.png",416:"hong_2.png",403:"hong_3.png",404:"hong_4.png",405:"hong_5.png",406:"hong_6.png",407:"hong_7.png",408:"hong_8.png",409:"hong_9.png",
			410:"hong_10.png",411:"hong_j.png",412:"hong_q.png",413:"hong_k.png",
			314:"fang_1.png",316:"fang_2.png",303:"fang_3.png",304:"fang_4.png",305:"fang_5.png",306:"fang_6.png",307:"fang_7.png",308:"fang_8.png",309:"fang_9.png",
			310:"fang_10.png",311:"fang_j.png",312:"fang_q.png",313:"fang_k.png",
			214:"hei_1.png",216:"hei_2.png",203:"hei_3.png",204:"hei_4.png",205:"hei_5.png",206:"hei_6.png",207:"hei_7.png",208:"hei_8.png",209:"hei_9.png",
			210:"hei_10.png",211:"hei_j.png",212:"hei_q.png",213:"hei_k.png",
			114:"mei_1.png",116:"mei_2.png",103:"mei_3.png",104:"mei_4.png",105:"mei_5.png",106:"mei_6.png",107:"mei_7.png",108:"mei_8.png",109:"mei_9.png",
			110:"mei_10.png",111:"mei_j.png",112:"mei_q.png",113:"mei_k.png"
	};}

	]);
	return BasePocker;
})()


//class modules.nnGame.inerGame.view.pockerPart.CuoPart
var CuoPart=(function(){
	function CuoPart(skin){
		this._skin=null;
		this.card=null;
		this.dragRec=new Rectangle(0,-180,0,660);
		this._skin=skin;
		this.init();
	}

	__class(CuoPart,'modules.nnGame.inerGame.view.pockerPart.CuoPart');
	var __proto=CuoPart.prototype;
	__proto.init=function(){
		this.card=new OtherHandlePocker(this._skin.card);
		this.card.reset();
		this._skin.dragBox.on("mousedown",this,this.onDrag);
		this._skin.dragBox.on("mouseout",this,this.onStopDrag);
		this._skin.dragBox.on("mouseup",this,this.onStopDrag);
		this._skin.on("click",this,this.onClickThis);
		Laya.stage.on("click",this,this.onClickStage);
	}

	__proto.onClickStage=function(e){
		this.hide();
	}

	__proto.onClickThis=function(e){
		e.stopPropagation();
	}

	__proto.onDrag=function(e){
		this._skin.dragBox.startDrag(this.dragRec,true,0);
	}

	__proto.onStopDrag=function(e){
		if(this._skin.dragBox.y <=-180 ||this._skin.dragBox.y >=40){
			this._skin.dragBox.visible=false;
			NnGameModule.instance.gameContext.view.nnPage.handlePart.playFanEff(this.model.selfChairPos,false);
			NnGameModule.instance.gameContext.view.nnPage.handleBtns.showCtlBtns();
		}
		else{
			this._skin.dragBox.x=0;
			this._skin.dragBox.y=0;
		}
	}

	__proto.show=function(cardIdx){
		this._skin.visible=true;
		this.card.setCardImg(cardIdx);
		this.card.show();
		this.card.down();
		this._skin.dragBox.x=0;
		this._skin.dragBox.y=0;
		this._skin.dragBox.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.reset=function(){
		this._skin.dragBox.x=0;
		this._skin.dragBox.y=0;
		this._skin.dragBox.visible=true;
		this.hide();
	}

	__getset(0,__proto,'model',function(){
		return NnGameModule.instance.gameContext.model;
	});

	return CuoPart;
})()


//class modules.nnGame.inerGame.view.pockerPart.HandleBtnsPart
var HandleBtnsPart$1=(function(){
	function HandleBtnsPart(skin,tishiBtn,showBtn,cuoBtn,fanBtn){
		this.singleBtnW=183;
		this.gap=20;
		this._skin=null;
		this.state=-1;
		this._tishiBtn=null;
		this._showBtn=null;
		this._cuoBtn=null;
		this._fanBtn=null;
		this._skin=skin;
		this._tishiBtn=tishiBtn;
		this._showBtn=showBtn;
		this._cuoBtn=cuoBtn;
		this._fanBtn=fanBtn;
		this.init();
	}

	__class(HandleBtnsPart,'modules.nnGame.inerGame.view.pockerPart.HandleBtnsPart',null,'HandleBtnsPart$1');
	var __proto=HandleBtnsPart.prototype;
	__proto.init=function(){
		this.addListener();
	}

	/**显示抢庄*/
	__proto.showQiangBox=function(){
		if(this.model.isSelfSitDown==false){
			return;
		}
		if (this.model.handleCards[this.model.selfChairPos].length==0){
			return;
		}
		this.hide();
		this._skin.visible=true;
		this._skin.fenBox.visible=false;
		this._skin.qiangBox.visible=true;
	}

	/**显示下注分数*/
	__proto.showFenBox=function(){
		if(this.model.isSelfSitDown==false){
			return;
		}
		if (this.model.handleCards[this.model.selfChairPos].length==0){
			return;
		}
		this.hide();
		this._skin.visible=true;
		this._skin.fenBox.visible=true;
		this._skin.qiangBox.visible=false;
	}

	/**显示搓牌和翻牌按钮*/
	__proto.showCuo=function(){
		if(this.model.isSelfSitDown==false){
			return;
		}
		if (this.model.handleCards[this.model.selfChairPos].length==0){
			return;
		}
		this.hide();
		this._cuoBtn.visible=true;
		this._fanBtn.visible=true;
	}

	/**显示提示和亮牌*/
	__proto.showCtlBtns=function(){
		if(this.model.isSelfSitDown==false){
			return;
		}
		if (this.model.handleCards[this.model.selfChairPos].length==0){
			return;
		}
		this.hide();
		this._tishiBtn.visible=true;
		this._showBtn.visible=true;
	}

	__proto.addListener=function(){
		this._tishiBtn.on("click",this,this.onClickTishi);
		this._showBtn.on("click",this,this.onClickShowBtn);
		this._skin.bei0.on("click",this,this.onClickBeiBtn,[0]);
		this._skin.bei1.on("click",this,this.onClickBeiBtn,[1]);
		this._skin.bei2.on("click",this,this.onClickBeiBtn,[2]);
		this._skin.bei3.on("click",this,this.onClickBeiBtn,[3]);
		this._skin.bei4.on("click",this,this.onClickBeiBtn,[4]);
		this._skin.fen2.on("click",this,this.onClickFenBtn,[2]);
		this._skin.fen4.on("click",this,this.onClickFenBtn,[4]);
		this._cuoBtn.on("click",this,this.onClickCuo);
		this._fanBtn.on("click",this,this.onClickFan);
	}

	__proto.onClickCuo=function(e){
		this.view.nnPage.cuoPart.show(this.model.handleCards[this.model.selfChairPos][this.model.handleCards[this.model.selfChairPos].length-1]);
		e.stopPropagation();
	}

	__proto.onClickFan=function(){
		this.view.nnPage.handlePart.playFanEff(this.model.selfChairPos,true);
		this.showCtlBtns();
	}

	__proto.onClickTishi=function(e){
		var cards=this.model.handleCards[this.model.selfChairPos].concat();
		cards.sort(PaixingLogic.compCardsFun);
		var jishuData=JishuArrData.getJishuArrData(cards);
		var paixing=PaixingLogic.getPaixing(cards,jishuData,false);
		this.view.nnPage.handlePart.showPaixing(this.model.selfChairPos,paixing);
		if(PaixingLogic.isNiuPaixing(paixing)==true){
			var niuData=NiuData.getNiuData(cards);
			if(niuData.niuNum > 0){
				this.view.nnPage.handlePart.setSelfPockSele(niuData.ThreeArr);
			}
		}
	}

	/**两牌*/
	__proto.onClickShowBtn=function(e){
		var mingObj={Sid:UserData.SID};
		this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(1201,mingObj));
		this.reset();
	}

	__proto.onClickBeiBtn=function(beishu,e){
		var jiaofenObj={Sid:UserData.SID,Fen:beishu};
		this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(1200,jiaofenObj));
		this.reset();
	}

	__proto.onClickFenBtn=function(fen,e){
		var jiaofenObj={Sid:UserData.SID,Fen:fen};
		this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(1207,jiaofenObj));
		this.reset();
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
		this._tishiBtn.visible=false;
		this._showBtn.visible=false;
		this._cuoBtn.visible=false;
		this._fanBtn.visible=false;
	}

	__proto.reset=function(){
		this.hide();
	}

	__getset(0,__proto,'model',function(){
		return NnGameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'visible',function(){
		return this._skin.visible;
	});

	__getset(0,__proto,'controller',function(){
		return NnGameModule.instance.gameContext.controller;
	});

	__getset(0,__proto,'view',function(){
		return NnGameModule.instance.gameContext.view;
	});

	return HandleBtnsPart;
})()


//class modules.nnGame.inerGame.view.pockerPart.HandlePart
var HandlePart$1=(function(){
	function HandlePart(p0,p1,p2,p3,p4,p5,p6,p7,p8,p9){
		this._dir0=null;
		this._dir1=null;
		this._dir2=null;
		this._dir3=null;
		this._dir4=null;
		this._dir5=null;
		this._dir6=null;
		this._dir7=null;
		this._dir8=null;
		this._dir9=null;
		this._PosChairVec=[];
		this._dir0=new BottomSingleHandlePart$1(p0);
		this._dir1=new OtherSingleHandlePart(p1,1);
		this._dir2=new OtherSingleHandlePart(p2,2);
		this._dir3=new OtherSingleHandlePart(p3,3);
		this._dir4=new OtherSingleHandlePart(p4,4);
		this._dir5=new OtherSingleHandlePart(p5,5);
		this._dir6=new OtherSingleHandlePart(p6,6);
		this._dir7=new OtherSingleHandlePart(p7,7);
		this._dir8=new OtherSingleHandlePart(p8,8);
		this._dir9=new OtherSingleHandlePart(p9,9);
		this.allReset();
	}

	__class(HandlePart,'modules.nnGame.inerGame.view.pockerPart.HandlePart',null,'HandlePart$1');
	var __proto=HandlePart.prototype;
	__proto.allReset=function(){
		this._dir0.reset();
		this._dir1.reset();
		this._dir2.reset();
		this._dir3.reset();
		this._dir4.reset();
		this._dir5.reset();
		this._dir6.reset();
		this._dir7.reset();
		this._dir8.reset();
		this._dir9.reset();
	}

	/**设置椅子数量*/
	__proto.setChairNum=function(num){
		(num===void 0)&& (num=10);
		this._PosChairVec.length=0;
		switch(num){
			case 10:this._PosChairVec.push(this._dir0,this._dir1,this._dir2,this._dir3,this._dir4,this._dir5,this._dir6,this._dir7,this._dir8,this._dir9);break ;
			}
		this.reset();
	}

	/**更新所有的牌,游戏开始第一次发牌用*/
	__proto.updateAllCards=function(vec){
		var i=0;
		var len=vec.length;
		for(i=0;i<len;i++){
			var dir=this.model.getChairDirByPos(i);
			this._PosChairVec[dir].showCards(vec[i],dir);
		}
	}

	/**更新一个方向上的牌*/
	__proto.updateOnePosAllCards=function(pos,cards){
		console.log("pos ::"+pos);
		var dir=this.model.getChairDirByPos(pos);
		console.log("dir ::"+dir);
		console.log("_PosChairVec[dir] ::"+this._PosChairVec[dir]);
		this._PosChairVec[dir].showCards(cards,dir);
	}

	/**播放前4张牌发牌动画*/
	__proto.playQipaiEff=function(pos,isLast){
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].playQipaiEff(isLast);
	}

	/**播放最后一张牌的翻牌动画*/
	__proto.playFanEff=function(pos,needEff){
		(needEff===void 0)&& (needEff=true);
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].playFanEff(needEff);
	}

	/**设置指定的牌的选中状态*/
	__proto.setSelfPockSele=function(cards){
		var dir=this.model.getChairDirByPos(this.model.selfChairPos);
		this._PosChairVec[dir].seleCards=cards;
	}

	/**获取玩家选中的牌*/
	__proto.getSelfSelePockers=function(){
		var dir=this.model.getChairDirByPos(this.model.selfChairPos);
		return this._PosChairVec[dir].seleCards;
	}

	/**显示玩家的牌型*/
	__proto.showPaixing=function(pos,paixing){
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].showPaixing(pos,paixing)
	}

	/**显示玩家已经完成*/
	__proto.showComp=function(pos){
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].showComp(pos);
	}

	/**重置*/
	__proto.reset=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].reset();
		}
		this.canControl(this.model.selfChairPos,false);
	}

	/**设置牌是否可以操作,这个是使自己的所有牌都可以操作或者不可以操作*/
	__proto.canControl=function(pos,bool){
		this._PosChairVec[this.model.getChairDirByPos(pos)].canControl=bool;
	}

	__getset(0,__proto,'model',function(){
		return NnGameModule.instance.gameContext.model;
	});

	return HandlePart;
})()


//class modules.nnGame.inerGame.view.pockerPart.singlePart.handlePart.BaseSingleHandlePart
var BaseSingleHandlePart$1=(function(){
	function BaseSingleHandlePart(skin){
		this.state=0;
		//玩家手里最多有20张牌
		this.skin=null;
		this.fromPos=[{x:174,y:-218},{x:174,y:-218},{x:174,y:-218},{x:174,y:-218},{x:217,y:-218}];
		this.toPos=[{x:0,y:0},{x:87,y:0},{x:174,y:0},{x:261,y:0},{x:390,y:0}];
		this._pockers=__newvec(5,null);
		this.skin=skin;
		this.init();
	}

	__class(BaseSingleHandlePart,'modules.nnGame.inerGame.view.pockerPart.singlePart.handlePart.BaseSingleHandlePart',null,'BaseSingleHandlePart$1');
	var __proto=BaseSingleHandlePart.prototype;
	__proto.init=function(){}
	__proto.showCards=function(cards,dir){}
	/**站起*/
	__proto.up=function(){
		var i=0;
		for(i=0;i<this._pockers.length;i++){
			this._pockers[i].up();
		}
	}

	/**盖住（别人的牌的表现同up*/
	__proto.back=function(){
		var i=0;
		for(i=0;i<this._pockers.length;i++){
			this._pockers[i].back();
		}
	}

	/**到下（自己的牌同up）*/
	__proto.down=function(){
		var i=0;
		for(i=0;i<this._pockers.length;i++){
			this._pockers[i].down();
		}
	}

	/**显示玩家已完成*/
	__proto.showComp=function(pos){}
	/**显示牌型*/
	__proto.showPaixing=function(pos,paixing){}
	__proto.hideAll=function(){
		var i=0;
		for(i=0;i<this._pockers.length;i++){
			this._pockers[i].hide();
		}
	}

	/**播放起牌动画*/
	__proto.playQipaiEff=function(isLast){
		var i=0;
		var len=this._pockers.length;
		if(isLast){
			this._pockers[4].skin.alpha=0;
			this._pockers[4].skin.x=this.fromPos[4].x;
			this._pockers[4].skin.y=this.fromPos[4].y;
			this._pockers[4].back();
			this.onSingleQiEff(4,isLast);
		}
		else{
			for(i=0;i<len-1;i++){
				this._pockers[i].skin.alpha=0;
				this._pockers[i].skin.x=this.fromPos[i].x;
				this._pockers[i].skin.y=this.fromPos[i].y;
				this._pockers[i].back();
				Laya.timer.frameOnce(i*2,this,this.onSingleQiEff,[i,isLast],false);
			}
		}
	}

	// onSingleQiEff(i);
	__proto.onSingleQiEff=function(idx,isLast){
		SoundManager.playSound("res/sounds/pinshi/effect/sound_fapai.mp3");
		this._pockers[idx].skin.alpha=0.1;
		Tween.to(this._pockers[idx].skin,{x:this.toPos[idx].x,y:this.toPos[idx].y,alpha:1},100,null,Handler.create(this,this.onCompEff,[idx,isLast]));
	}

	__proto.onCompEff=function(idx,isLast){
		this._pockers[idx].up();
	}

	/**播放最后一张牌翻牌*/
	__proto.playFanEff=function(needEff){
		(needEff===void 0)&& (needEff=true);
	}

	//_pockers[4].up();
	__proto.reset=function(){
		var i=0,len=this._pockers.length;
		for(i=0;i<len;i++){
			this._pockers[i].reset();
		}
	}

	__proto.show=function(){
		this.skin.visible=true;
	}

	__proto.hide=function(){
		this.skin.visible=false;
	}

	/**设置牌是否可以操作*/
	__getset(0,__proto,'canControl',null,function(bool){
		var i=0;
		for(i=0;i<this._pockers.length;i++){
			this._pockers[i].canControl=bool;
		}
	});

	__getset(0,__proto,'visible',function(){
		return this.skin.visible;
	});

	/**设置选中的牌*/
	/**获取选中的牌*/
	__getset(0,__proto,'seleCards',function(){
		return null;
		},function(cards){
	});

	__getset(0,__proto,'model',function(){
		return NnGameModule.instance.gameContext.model;
	});

	BaseSingleHandlePart.STATE_NOMAL=0;
	return BaseSingleHandlePart;
})()


//class modules.nnGame.inerGame.view.pockerPart.TimeTipView
var TimeTipView=(function(){
	function TimeTipView(skin){
		this._skin=null;
		this.leftTime=0;
		this.stage=-1;
		//_skin.tipTf.text="亮牌剩余时间。。。";
		this.isIncutDown=false;
		this._skin=skin;
	}

	__class(TimeTipView,'modules.nnGame.inerGame.view.pockerPart.TimeTipView');
	var __proto=TimeTipView.prototype;
	/**显示准备剩余时间*/
	__proto.showReadyLeft=function(leftT){
		(leftT===void 0)&& (leftT=8);
		this.stage=1;
		this.leftTime=leftT;
		this.show();
		this.startCutdown();
	}

	/**显示抢庄剩余时间*/
	__proto.showZhuangLeft=function(leftT){
		(leftT===void 0)&& (leftT=10);
		this.stage=2;
		this.leftTime=leftT;
		this.show();
		this.startCutdown();
	}

	/**显示下注剩余时间*/
	__proto.showXiazhuLeft=function(leftT){
		(leftT===void 0)&& (leftT=10);
		this.stage=3;
		this.leftTime=leftT;
		this.show();
		this.startCutdown();
	}

	/**显示亮牌剩余时间*/
	__proto.showLiangLeft=function(leftT){
		(leftT===void 0)&& (leftT=12);
		this.stage=4;
		this.leftTime=leftT;
		this.show();
		this.startCutdown();
	}

	/**开始倒计时*/
	__proto.startCutdown=function(){
		if(this.isIncutDown==true){
			return;
		}
		this.isIncutDown=true;
		TimeManager.instance.timer.loop(1000,this,this.onCutDown);
	}

	/**结束倒计时*/
	__proto.stopCutdown=function(){
		if(this.isIncutDown==false){
			return;
		}
		this.isIncutDown=false;
		TimeManager.instance.timer.clear(this,this.onCutDown);
	}

	// EventCenter.instance.off(EventCenter.ON_LITTLETIMEER,this,onCutDown);
	__proto.onCutDown=function(dat){
		this.leftTime-=1;
		if(this.leftTime < 0){
			this.leftTime=0;
			this.stopCutdown();
		}
		switch(this.stage){
			case 1:
				this._skin.tipTf.text="准备剩余"+this.leftTime+"s";
				break ;
			case 2:
				this._skin.tipTf.text="抢庄剩余"+this.leftTime+"s";
				break ;
			case 3:
				this._skin.tipTf.text="下注剩余"+this.leftTime+"s";
				break ;
			case 4:
				this._skin.tipTf.text="亮牌剩余"+this.leftTime+"s";
				break ;
			}
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.reset=function(){
		this._skin.visible=false;
	}

	return TimeTipView;
})()


//class modules.nnGame.inerGame.view.TableInfoPage
var TableInfoPage$1=(function(){
	function TableInfoPage(skin){
		this._skin=null;
		this._PowerBarOrignalW=NaN;
		this._infosimbol=null;
		this._skin=skin;
		this._infosimbol=this._skin.infoSImg;
		this._infosimbol.visible=false;
		skin.mouseThrough=true;
		this._skin.option.on("click",this,this.onClickOption);
		this._skin.scoreList.on("click",this,this.onClickScoreListBtn)
		this._skin.infoListBtn.on("click",this,this.onClickInfoListBtn);
		this._skin.helpBtn.on("click",this,this.onClickHelpBtn);
		this._skin.setBtn.on("click",this,this.onClickSetBtn);
		EventCenter.instance.on("COMMON_INFOLIST_NOTICE",this,this.onGotInfo);
	}

	__class(TableInfoPage,'modules.nnGame.inerGame.view.TableInfoPage',null,'TableInfoPage$1');
	var __proto=TableInfoPage.prototype;
	__proto.onClickHelpBtn=function(e){
		CommonModule.instance.commonContext.view.gameHelpView.show();
	}

	__proto.playVoicePlay=function(){
		Laya.timer.frameLoop(1,this,this.onTimeLoop);
	}

	__proto.onTimeLoop=function(){
		if(this._skin.voicePlay.rotation%360==0){
			this._skin.voicePlay.rotation=0;
		}
		this._skin.voicePlay.rotation+=10;
	}

	__proto.stopVoicePlay=function(){
		Laya.timer.clear(this,this.onTimeLoop);
	}

	__proto.updateRoomId=function(){
		if(Number(this._skin.roomNumTf.text)!=UserData.roomid){
			this._skin.roomNumTf.text=""+UserData.roomid;
		}
	}

	//让房间号显示出来
	__proto.onClickSetBtn=function(e){
		CommonModule.instance.commonContext.view.settingView.showOrHide();
	}

	__proto.onClickOption=function(e){
		e.stopPropagation();
		SoundPlay.instance.playClickBtnSound();
		CommonModule.instance.commonContext.view.functionOption.showOrHide(-350,0);
	}

	__proto.onClickScoreListBtn=function(e){
		var getRecord={
			"uniqueCode":UserData.uniqueCode
		};
		console.log(UserData.roomid)
		EventCenter.instance.event("SOCKET_SEND",ProtoMessage.getProtoMessage(404,getRecord));
		SoundPlay.instance.playClickBtnSound();
		CommonModule.instance.commonContext.view.timeWarView.showOrHide();
		e.stopPropagation();
	}

	__proto.onClickInfoListBtn=function(e){
		this._infosimbol.visible=false;
		SoundPlay.instance.playClickBtnSound();
		CommonModule.instance.commonContext.view.infoListView.showOrHide();
		e.stopPropagation();
	}

	__proto.onGotInfo=function(info){
		this._infosimbol.visible=true;
	}

	__proto.updateLeftRound=function(needTongbu){
		(needTongbu===void 0)&& (needTongbu=true);
		var info=this.model.srddzMsgs.ACK_RoomInfo;
		var rule=info.Rule;
		var obj=AppConfig.getRule(rule[1]);
		if(obj.type==0){
			info.totalRound=obj.value;
			if(info.RoundCount+1 > obj.value){
				this._skin.roundCountTf.text=""+info.RoundCount+"/"+obj.value+"";
			}
			else{
				this._skin.roundCountTf.text=""+(info.RoundCount+1)+"/"+obj.value+"";
			}
		}
		else{
		}
		if(this.model.isGameStart==true || info.RoundCount >=1){
			this._skin.weikaishiBox.visible=false;
		}
		else{
			UserData.leftDissolveTime=info.disbandLeftTime;
			this._skin.leftDissolveTf.text=AppConfig.getTFmt(UserData.leftDissolveTime,true);
			this._skin.weikaishiBox.visible=true;
			this.startDissolveCutdown();
		}
	}

	__proto.updateKaijuren=function(nickName){
		if(nickName==null || nickName==""){
			nickName="无";
		}
		this._skin.kaijuTf.text="开局人："+nickName;
		var info=this.model.srddzMsgs.ACK_RoomInfo;
		var rule=info.Rule;
		var obj=AppConfig.getRule(rule[2]);
		if(obj.id==24){
			this._skin.payType.text="房主付费";
		}
		else{
			this._skin.payType.text="共同付费";
		}
	}

	/**开始游戏之前开局倒计时*/
	__proto.startDissolveCutdown=function(){
		EventCenter.instance.on("ON_LITTLETIMEER",this,this.onCutDown1);
	}

	/**开始游戏之后开局倒计时*/
	__proto.stopDissolveCutdown=function(){
		EventCenter.instance.off("ON_LITTLETIMEER",this,this.onCutDown1);
	}

	__proto.onCutDown1=function(dat){
		UserData.leftDissolveTime-=dat;
		if(UserData.leftDissolveTime < 0){
			UserData.leftDissolveTime=0;
			this.stopDissolveCutdown();
		}
		this._skin.leftDissolveTf.text=AppConfig.getTFmt(UserData.leftDissolveTime,true);
	}

	__proto.reset=function(){}
	__getset(0,__proto,'model',function(){
		return NnGameModule.instance.gameContext.model;
	});

	return TableInfoPage;
})()


//class modules.nnGame.controller.NnMainController extends rb.framework.mvc.AbstractLayer
var NnMainController=(function(_super){
	function NnMainController(){
		NnMainController.__super.call(this);
	}

	__class(NnMainController,'modules.nnGame.controller.NnMainController',_super);
	var __proto=NnMainController.prototype;
	__proto.onAdd=function(){
		if(UserData.isReplay){
		}
		else{
			EventCenter.instance.on("MESSAGE_GAME",this,this.onMsg);
		}
	}

	__proto.onRemove=function(){
		if(UserData.isReplay){
		}
		else{
			EventCenter.instance.off("MESSAGE_GAME",this,this.onMsg);
		}
	}

	__proto.onMsg=function(msg){
		if(NnGameModule.isPauseGameQueue==true){
			return;
		}
		this.procMsg(msg);
	}

	__proto.procMsg=function(msg){
		if((msg instanceof net.Message )){
			msg.complete();
		}
		console.log("acc msgId::"+msg.messageId);
		var body;
		switch(msg.messageId){
			case 560:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Into_Room.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.ACKBC_Into_Room(body);
				break ;
			case 607:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Sitdown.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.ACKBC_Sitdown(body);
				break ;
			case 608:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Standup.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.ACKBC_Standup(body);
				break ;
			case 520:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACK_RoomInfo.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.ACK_RoomInfo(body);
				break ;
			case 525:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACK_Room_User.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.ACK_Room_User(body);
				break ;
			case 1506:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Sddz_Start.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.ACKBC_Sddz_Start(body);
				break ;
			case 615:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACK_User_SeatCard.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.ACK_User_SeatCard(body);
				break ;
			case 1508:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Sddz_JiaoDizhu.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.ACKBC_Sddz_JiaoDizhu(body);
				break ;
			case 1509:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Sddz_Mingpai.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.ACKBC_Sddz_Mingpai(body);
				break ;
			case 1510:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Sddz_Jiabei.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.ACKBC_Sddz_Jiabei(body);
				break ;
			case 1513:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Nn_Xiazhu.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.ACKBC_Nn_Xiazhu(body);
				break ;
			case 700:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_CurPlayer.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.ACKBC_CurPlayer(body);
				break ;
			case 1500:
				if(UserData.isReplay){
				}
				else{
					body=AppConfig.proto.ACKBC_Sddz_Jiaofen.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.ACKBC_Sddz_Jiaofen(body);
				break ;
			case 1501:
				if(UserData.isReplay){
				}
				else{
					body=AppConfig.proto.ACKBC_Sddz_Dizhu.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.ACKBC_Sddz_Dizhu(body);
				break ;
			case 600:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Ready.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.ACKBC_Ready(body);
				break ;
			case 580:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Exit_Room.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.ACKBC_Exit_Room(body);
				break ;
			case 900:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.NotifyStartGame.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.NotifyStartGame(body);
				break ;
			case 880:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_SendMsg.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.view.onRecChat(body);
				break ;
			case 1503:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Sddz_End.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.ACKBC_Sddz_End(body);
				break ;
			case 1505:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Sddz_Card_Init.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.ACKBC_Sddz_Card_Init(body);
				break ;
			case 1504:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Sddz_Total.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.ACKBC_Sddz_Total(body);
				break ;
			case 920:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.TotalSummary.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.NOTIFY_Summary(body);
				break ;
			case 800:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.AckDisband.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.AckDisband(body);
				break ;
			case 940:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.NotifyDisband.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.NotifyDisband(body);
				break ;
			case 960:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.NotifyUserState.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.NotifyUserState(body);
				break ;
			case 972:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.NotifyDestoryRoom.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.NotifyDestoryRoom(body);
				break ;
			case 971:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.NotifyKick.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.NotifyKick(body);
				break ;
			case 980:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.KickResponse.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.KickResponse(body);
				break ;
			case 1000:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.MSG_ACK_Gift.decode(msg.params[0]);
				}
				NnGameModule.instance.gameContext.controller.MSG_ACK_Gift(body);
				break ;
			case "":
				break ;
			case "":
				break ;
			}
		if(UserData.isReplay){
		}
	}

	return NnMainController;
})(AbstractLayer)


/**四人斗地主*/
//class modules.nnGame.inerGame.controller.NnController extends rb.framework.mvc.AbstractLayer
var NnController=(function(_super){
	function NnController(){
		//
		this.pop=null;
		this.dissolvePage=null;
		NnController.__super.call(this);
		this.setType(2);
	}

	__class(NnController,'modules.nnGame.inerGame.controller.NnController',_super);
	var __proto=NnController.prototype;
	//用来监听协议，从而刷新数据，并且通知界面更改
	__proto.onAdd=function(){
		_super.prototype.onAdd.call(this);
	}

	//移除监听
	__proto.onRemove=function(){
		_super.prototype.onRemove.call(this);
	}

	/**出牌*/
	__proto.discard=function(cards){}
	/**房间信息*/
	__proto.ACK_RoomInfo=function(info){
		console.log("ACK_Room_Info",info,"ACK_Room_Info");
		this.model.srddzMsgs.ACK_RoomInfo=info;
		this.model.roomOwnerUid=info.RoomOwner;
		UserData.uniqueCode=info.uniqueCode;
		UserData.roomtype=info.Type;
		UserData.Rule=info.Rule;
		if(UserData.isReplay){
			UserData.roomid=info.RID;
		}
		if(this.model.gameHasStarted==true){
			this.view.nnPage.timeTip.showReadyLeft(info.leftTime);
			this.model.isReConn=true;
		}
		console.log(UserData.uniqueCode)
		if(info.gameState==1){
			this.model.isGameStart=true;
			this.view.playerInfoPage.hideBtnsByGameStart();
			this.view.playerInfoPage.hideReadySimbol();
		}
		this.view.playerInfoPage.updateLeaveDisbandBtns();
		if(UserData.isReplay){
			this.model.srddzMsgs.ACK_RoomInfo.isGameStart=1;
		}
		this.view.tableInfoPage.updateLeftRound();
		this.view.tableInfoPage.updateKaijuren(info.nickName);
		if(!info.direction){
			info.direction=0;
		}
		this.view.tableInfoPage.updateRoomId();
	}

	/**玩家信息*/
	__proto.ACK_Room_User=function(info){
		console.log("ACK_Room_User",info,"ACK_Room_User");
		this.model.srddzMsgs.ACK_Room_User=info;
		this.model.updatePlayerInfoVec(info.Users);
		this.view.playerInfoPage.updatePlayerInfos(this.model.playerInfoVec);
		this.view.playerInfoPage.updateLeaveDisbandBtns();
	}

	/**进入房间*/
	__proto.ACKBC_Into_Room=function(info){
		console.log("ACKBC_Into_Room");
		console.log(info);
		console.log("ACKBC_Into_Room");
		this.model.srddzMsgs.ACKBC_Into_Room=info;
		UserData.roomid=info.RID;
		this.view.tableInfoPage.updateRoomId();
		info.nickname=info.Name;
		info.uid=info.UID;
		info.ip=info.IP;
		info.pos=info.Index;
		info.golds=info.Coin;
		this.model.updateOnePlayerInfo(info);
		this.view.playerInfoPage.updateOnePlayerInfo(info);
		this.view.playerInfoPage.updateSitDownUpBtn();
		EventCenter.instance.event("COMMON_INFOLIST_NOTICE",{color:0,msg:"玩家["+info.nickname+"]进入了房间！"});
	}

	/**
	*坐下
	*@param info
	*/
	__proto.ACKBC_Sitdown=function(info){
		if (this._actived){
			console.log("MSG_ACKBC_Sitdown",info);
			this.model.srddzMsgs.ACKBC_Sitdown=info;
			this.model.sitDown(info.uid,info.index,info.score);
			this.view.playerInfoPage.updatePlayerInfos(this.model.playerInfoVec);
			this.view.playerInfoPage.updateSitDownUpBtn();
			this.view.playerInfoPage.updateLeaveDisbandBtns();
			this.view.tableInfoPage.updateKaijuren(info.nickName);
			if(info.uid==UserData.selfuid){
				if(this.model.isGameStart==false){
					var readObj={sid:UserData.SID};
					this.sendMsgCommond(ProtoMessage.getProtoMessage(210,readObj));
				}
				else{
					this.view.playerInfoPage.updatePlayerInfos(this.model.playerInfoVec);
					this.view.nnPage.handlePart.updateAllCards(this.model.handleCards);
					for(var i=0;i<this.model.chairNum;i++){
						var player=this.model.playerByPos(i);
						if(player==null){
							continue ;
						}
						if(this.model.stage==1){
							if(player.haveJiao==true){
								this.view.playerInfoPage.showQiangBei(i,player.jiaofen);
							}
						}
						else if(this.model.stage==2){
							if (i !=this.model.zhuangPos){
								if(player.haveXiazhu==true){
									this.view.playerInfoPage.showXiazhu(i,this.model.xiazhuVec[i]);
								}
							}
						}
						else if(this.model.stage==3){
							if(this.model.mingpaiVec[i]==true){
								this.view.nnPage.handlePart.showComp(i);
							}
							if(i !=this.model.zhuangPos){
								this.view.playerInfoPage.showXiazhu(i,this.model.xiazhuVec[i]);
							}
						}
					}
					if(this.model.stage==2 || this.model.stage==3){
						this.view.playerInfoPage.showZhuang();
					}
				}
			}
		}
	}

	/**
	*站起
	*@param info
	*/
	__proto.ACKBC_Standup=function(info){
		if (this._actived){
			console.log("MSG_ACKBC_Standup",info);
			this.model.srddzMsgs.ACKBC_Standup=info;
			this.model.standup(info.uid,info.index);
			this.view.playerInfoPage.updatePlayerInfos(this.model.playerInfoVec);
			this.view.playerInfoPage.updateSitDownUpBtn();
			this.view.playerInfoPage.updateStartBtn();
			this.view.tableInfoPage.updateKaijuren(info.nickName);
			EventCenter.instance.event("COMMON_INFOLIST_NOTICE",{color:0,msg:"玩家["+this.model.getPlayerNicknameByUid(info.uid)+"]站起了！"});
		}
	}

	/**玩家准备*/
	__proto.ACKBC_Ready=function(info){
		if(this.actived){
			console.log("ACKBC_Ready");
			console.log(info);
			console.log("ACKBC_Ready");
			if(this.model.isGameStart==true){
				return;
			}
			SoundPlay.instance.playReadySound();
			this.model.srddzMsgs.ACKBC_Ready=info;
			info.uid=info.UID;
			info.pos=this.model.getPlayerPosByUid(info.uid);
			this.model.updateReadyState(info.pos,true,0);
			this.view.playerInfoPage.showReady(info.pos);
			if(info.pos==this.model.selfChairPos){
				this.view.playerInfoPage.hideReadyBtn();
				this.view.playerInfoPage.hideZhuang();
				this.view.playerInfoPage.hideQiangAndXia();
				console.log("ready..........");
				this.model.reset();
				this.view.nnPage.reset(false);
			}
		}
	}

	/**通知第一个坐下的人*/
	__proto.NotifyStartGame=function(info){
		if(this.actived){
			console.log("NotifyStartGame::"+info+"NotifyStartGame");
			this.model.srddzMsgs.NotifyStartGame=info;
			if(info.uid==UserData.selfuid){
				this.view.playerInfoPage.showStartBtn();
			}
		}
	}

	/**开始*/
	__proto.ACKBC_Sddz_Start=function(info){
		if(this.actived){
			console.log("ACKBC_Sddz_Start",info,"ACKBC_Sddz_Start");
			this.model.srddzMsgs.ACKBC_Sddz_Start=info;
			this.model.srddzMsgs.ACK_RoomInfo.RoundCount=info.RoundCount;
			this.resetSelf();
			this.model.isGameStart=true;
			this.view.startGame();
			this.view.playerInfoPage.hideReadySimbol();
			this.view.playerInfoPage.hideBtnsByGameStart();
			this.view.playerInfoPage.updateLeaveDisbandBtns();
			this.view.tableInfoPage.updateRoomId();
			this.view.tableInfoPage.updateLeftRound();
			SoundManager.playSound("res/sounds/pinshi/effect/gamestart.mp3");
		}
	}

	/**游戏开始发牌*/
	__proto.ACK_User_SeatCard=function(info){
		if(this.actived){
			this.model.isClientPrePop=false;
			console.log("ACK_User_SeatCard",info,"ACK_User_SeatCard");
			console.log(this.model.srddzMsgs.ACKBC_Sddz_Start,"----------------------------------")
			this.model.srddzMsgs.ACK_User_SeatCard=info;
			var i=0;
			var j=0,k=0;
			var handleCards=[];
			for(i=0;i<info.Cards.length;i++){
				if(this.model.playerByPos(i)==null){
					continue ;
				}
				if(info.Cards[i].List.length !=info.Cards[i].ListLen){
					for(k=0;k<info.Cards[i].ListLen;k++){
						info.Cards[i].List.push({CID:0});
					}
				}
				handleCards.length=0;
				for(j=0;j<info.Cards[i].List.length;j++){
					handleCards.push(info.Cards[i].List[j].CID);
				}
				this.model.updateHandleCards(i,handleCards);
				this.view.nnPage.handlePart.updateOnePosAllCards(i,this.model.handleCards[i]);
				if(handleCards.length==4 && this.model.isReConn==false){
					this.view.nnPage.handlePart.playQipaiEff(i,false);
				}
				if(handleCards.length==5 && this.model.isReConn==false){
					this.view.nnPage.handlePart.playQipaiEff(i,true);
				}
				if(info.Cards[i].Out){
					for(j=0;j<info.Cards[i].Out.length;j++){
						this.model.outputCards[i].push(info.Cards[i].Out[j].CID);
					}
				}
			}
		}
	}

	/***/
	__proto.ACKBC_Sddz_Card_Init=function(info){
		if(this.actived){
			console.log("ACKBC_Sddz_Card_Init",info,"ACKBC_Sddz_Card_Init");
			this.model.srddzMsgs.ACKBC_Sddz_Card_Init=info;
			this.model.stage=info.Stage;
			this.model.difen=info.Difen;
			this.model.beishu=info.Beishu;
			if(info.BaodaoNum==undefined){
				info.BaodaoNum=0;
			};
			var i=0;
			for(i=0;i<this.model.chairNum;i++){
				if(this.model.stage==1){
					this.view.nnPage.timeTip.showZhuangLeft(info.BaodaoNum);
					if(info.HaveJiao[i]==true){
						if(this.model.playerByPos(i)){
							this.model.playerByPos(i).jiaofen=info.JiaoFen[i];
							this.model.playerByPos(i).haveJiao=true;
						}
						this.view.playerInfoPage.showQiangBei(i,info.JiaoFen[i]);
					}
					else{
						if(this.model.isSelfSitDown && i==this.model.selfChairPos){
							this.view.nnPage.handleBtns.showQiangBox();
						}
						if(this.model.playerByPos(i)){
							this.model.playerByPos(i).haveJiao=false;
						}
					}
				}
				else{
					this.model.zhuangPos=info.DizhuIndex;
					this.model.xiazhuVec[i]=info.XiaZhu[i];
					if(this.model.stage==2){
						this.view.nnPage.timeTip.showXiazhuLeft(info.BaodaoNum);
						if (i !=this.model.zhuangPos){
							if(info.HaveJiabei[i]==true){
								this.view.playerInfoPage.showXiazhu(i,this.model.xiazhuVec[i]);
								if(this.model.playerByPos(i)){
									this.model.playerByPos(i).haveXiazhu=true;
								}
							}
							else{
								if(this.model.isSelfSitDown && i==this.model.selfChairPos){
									this.view.nnPage.handleBtns.showFenBox();
								}
								if(this.model.playerByPos(i)){
									this.model.playerByPos(i).haveXiazhu=false;
								}
							}
						}
					}
					else if(this.model.stage==3){
						this.view.nnPage.timeTip.showLiangLeft(info.BaodaoNum);
						this.model.mingpaiVec[i]=info.IsMing[i];
						if(this.model.mingpaiVec[i]==true){
							this.view.nnPage.handlePart.showComp(i);
						}
						if(i !=this.model.zhuangPos){
							this.view.playerInfoPage.showXiazhu(i,this.model.xiazhuVec[i]);
						}
						if(info.LastOpt[i]==0){
							if(this.model.isSelfSitDown){
								this.view.nnPage.handleBtns.showCtlBtns();
							}
						}
						else if(info.LastOpt[i]==1){
						}
					}
				}
			}
			if(this.model.stage==2 || this.model.stage==3){
				this.view.playerInfoPage.showZhuang();
			}
		}
	}

	/**通知玩家叫分*/
	__proto.ACKBC_Sddz_JiaoDizhu=function(info){
		if(this.actived){
			console.log("ACKBC_Sddz_JiaoDizhu",info,"ACKBC_Sddz_JiaoDizhu");
			this.model.srddzMsgs.ACKBC_Sddz_JiaoDizhu=info;
			this.view.nnPage.handleBtns.showQiangBox();
			this.view.nnPage.timeTip.showZhuangLeft();
			this.model.stage=1;
		}
	}

	/**叫分*/
	__proto.ACKBC_Sddz_Jiaofen=function(info){
		if(this.actived){
			console.log("ACKBC_Sddz_Jiaofen",info,"ACKBC_Sddz_Jiaofen");
			this.model.srddzMsgs.ACKBC_Sddz_Jiaofen=info;
			var pos=this.model.getPlayerPosByUid(info.Uid);
			this.model.playerByPos(pos).jiaofen=info.Fen;
			this.model.playerByPos(pos).haveJiao=true;
			this.view.playerInfoPage.showQiangBei(pos,info.Fen);
			var soundStr="";
			if(info.Fen==0){
				soundStr="buqiang.mp3";
				}else{
				soundStr="qiang.mp3";
			}
			SoundManager.playSound("res/sounds/pinshi/"+SoundPlay.instance.getSexRef(this.model.playerByPos(pos).sex)+soundStr);
		}
	}

	/**通知庄家是谁*/
	__proto.ACKBC_Sddz_Dizhu=function(info){
		if(this.actived){
			console.log("ACKBC_Sddz_Dizhu",info,"ACKBC_Sddz_Dizhu");
			this.model.srddzMsgs.ACKBC_Sddz_Dizhu=info;
			var pos=this.model.getPlayerPosByUid(info.Uid);
			this.model.zhuangPos=pos;
			this.model.difen=info.Fen;
			this.model.stage=2;
			var betweenArr=[];
			for(var i=0;i<this.model.chairNum;i++){
				if(this.model.playerByPos(i)!=null && this.model.playerByPos(i).jiaofen==this.model.difen){
					betweenArr.push(i);
				}
			}
			if(betweenArr.length==0){
				for(var i=0;i<this.model.chairNum;i++){
					if(this.model.playerByPos(i)!=null){
						betweenArr.push(i);
					}
				}
			}
			if(betweenArr.length==1){
				this.onQZAniEnd(0);
			}
			else{
				SoundManager.playSound("res/sounds/pinshi/effect/sound_bankert.mp3",0);
				this.view.playerInfoPage.playQZAni(betweenArr,pos,this,this.onQZAniEnd);
			}
		}
	}

	//frameNum 经历了多少侦
	__proto.onQZAniEnd=function(frameNum){
		if(frameNum > 0){
			SoundManager.stopSound("res/sounds/pinshi/effect/sound_bankert.mp3");
			SoundManager.playSound("res/sounds/pinshi/effect/selectBankerEnd.mp3");
		}
		this.view.playerInfoPage.showZhuang();
		this.view.nnPage.handleBtns.reset();
		if(this.model.zhuangPos !=this.model.selfChairPos){
			this.view.nnPage.handleBtns.showFenBox();
		}
		this.view.nnPage.timeTip.showXiazhuLeft(Math.round(10-frameNum/30));
	}

	/**通知玩家明牌*/
	__proto.ACKBC_Sddz_Mingpai=function(info){
		if(this.actived){
			console.log("ACKBC_Sddz_Mingpai",info,"ACKBC_Sddz_Mingpai");
			this.model.srddzMsgs.ACKBC_Sddz_Mingpai=info;
			var pos=this.model.getPlayerPosByUid(info.Uid);
			if(info.Mingpai==true){
				this.view.nnPage.handlePart.showComp(pos);
			}
		}
	}

	/**通知玩家加倍*/
	__proto.ACKBC_Sddz_Jiabei=function(info){
		if(this.actived){
			console.log("ACKBC_Sddz_Jiabei",info,"ACKBC_Sddz_Jiabei");
			this.model.srddzMsgs.ACKBC_Sddz_Jiabei=info;
			var pos=this.model.getPlayerPosByUid(info.Uid);
			if(info.Jiabei==true){
				this.model.jiabeiVec[pos]=true;
				this.view.playerInfoPage.updateJiabei();
				SoundManager.playSound("res/sounds/sddz/"+SoundPlay.instance.getSexRef(this.model.playerByPos(pos).sex)+"jiabei.mp3");
			}
			else{
				this.model.jiabeiVec[pos]=false;
				SoundManager.playSound("res/sounds/sddz/"+SoundPlay.instance.getSexRef(this.model.playerByPos(pos).sex)+"bujiabei.mp3");
			}
		}
	}

	/**通知玩家下注*/
	__proto.ACKBC_Nn_Xiazhu=function(info){
		if(this.actived){
			console.log("ACKBC_Nn_Xiazhu",info,"ACKBC_Nn_Xiazhu");
			this.model.srddzMsgs.ACKBC_Nn_Xiazhu=info;
			var pos=this.model.getPlayerPosByUid(info.Uid);
			this.model.playerByPos(pos).haveXiazhu=true;
			this.model.xiazhuVec[pos]=info.Fen;
			this.view.playerInfoPage.showXiazhu(pos,info.Fen);
			SoundManager.playSound("res/sounds/pinshi/effect/xiazhu.mp3");
		}
	}

	/**通知玩家可以比牌*/
	__proto.ACKBC_CurPlayer=function(info){
		if(this.actived){
			console.log("ACKBC_CurPlayer",info,"ACKBC_CurPlayer");
			this.model.srddzMsgs.ACKBC_CurPlayer=info;
			this.model.stage=3;
			this.view.nnPage.handleBtns.showCuo();
			this.view.nnPage.timeTip.showLiangLeft();
		}
	}

	/**游戏结束*/
	__proto.ACKBC_Sddz_End=function(info){
		if(this.actived){
			console.log("ACKBC_Sddz_End",info,"ACKBC_Sddz_End");
			this.model.srddzMsgs.ACKBC_Sddz_End=info;
			this.view.nnPage.handleBtns.reset();
			if(UserData.isReplay && this.model.isStrictShowCalc==true){
				return;
			};
			var effStr;
			if(info.Uid==-1){
				this.view.nnPage.handleBtns.reset();
				this.model.isLiu=true;
				if(UserData.isReplay && this.model.isStrictShowCalc==true){
					return;
				}
			}
			else{
				var pos=this.model.getPlayerPosByUid(info.Uid);
				var isSelfWin=false;
				var isDizhuWin=false;
				if(pos==this.model.selfChairPos){
					isSelfWin=true;
				}
				if(pos==this.model.zhuangPos){
					isDizhuWin=true;
				}
				this.model.isLiu=false;
				if(isSelfWin==true){
				}
				else{
				}
			}
			this.gameOverDownCards(info);
		}
	}

	/**胡牌和流局了倒下牌都走这里*/
	__proto.gameOverDownCards=function(info){
		this.model.isEnd=true;
		this.model.dipaiCards=info.Dipai;
		var handleCards=[];
		var i=0,j=0,k=0;
		var cardIdx=0;
		for(i=0;i<info.Cards.length;i++){
			if(info.Cards[i].List.length !=info.Cards[i].ListLen){
				for(k=0;k<info.Cards[i].ListLen;k++){
					info.Cards[i].List.push({CID:0});
				}
			}
			handleCards.length=0;
			for(j=0;j<info.Cards[i].List.length;j++){
				handleCards.push(info.Cards[i].List[j].CID);
			}
			if(info.Cards[i].Seat==undefined){
				info.Cards[i].Seat=0
			}
			this.model.updateHandleCards(info.Cards[i].Seat ,handleCards);
			this.view.nnPage.handlePart.updateOnePosAllCards(info.Cards[i].Seat ,this.model.handleCards[info.Cards[i].Seat]);
			var paixing=PaixingLogic.getPaixing(this.model.handleCards[info.Cards[i].Seat]);
			this.view.nnPage.handlePart.showPaixing(info.Cards[i].Seat,paixing);
			Laya.timer.once(200*i,this,this.playEndPaixing,["res/sounds/pinshi/"+SoundPlay.instance.getSexRef(this.model.playerByPos(info.Cards[i].Seat).sex)+"niu_"+paixing+".mp3"]);
		}
	}

	__proto.playEndPaixing=function(sound){
		SoundManager.playSound(sound);
	}

	/**小结算*/
	__proto.ACKBC_Sddz_Total=function(info){
		if(this.actived){
			console.log("ACKBC_Sddz_Total",info,"ACKBC_Sddz_Total");
			this.model.srddzMsgs.ACKBC_Sddz_Total=info;
			this.model.srddzMsgs.ACK_RoomInfo.RoundCount=info.RoundCount;
			this.view.tableInfoPage.updateLeftRound(false);
			this.view.playerInfoPage.updateSitDownUpBtn(false);
			var t=QuickUtils.getLocalVar("hasConcern",0);
			if(t==0){
				QuickUtils.setLocalVar("hasConcern",1);
				CommonModule.instance.commonContext.view.showNotice(
				"       微信搜索公众号<span style='color:#f6d368;'> "+AppConfig.nameTitle+"  </span>关注后即可获得更多福利哦！<br />",this,this.showCalculate);
			}
			this.showCalculate();
		}
	}

	__proto.showCalculate=function(){
		var info=this.model.srddzMsgs.ACKBC_Sddz_Total;
		var list=info.List;
		var player;
		for(var i=0;i<list.length;i++){
			if(this.model.playerByPos(i)!=null){
				player=this.model.playerByPos(i);
				player.preScore=player.score;
				player.score=list[i].TotalScore !=undefined ? list[i].TotalScore :0;
				if(UserData.Rule[4]==1){
					player.Coin=list[i].TotalScore !=undefined ? list[i].TotalScore :0;
				}
				this.view.playerInfoPage.updateOnePlayerGolds(player);
			}
		};
		var hasShuZhuang=false;
		for(var i=0;i<list.length;i++){
			if(this.model.playerByPos(i)!=null){
				player=this.model.playerByPos(i);
				if(i !=this.model.zhuangPos){
					if(player.score < player.preScore){
						this.view.playerInfoPage.playDropJinBiTo(i,this.model.zhuangPos);
						hasShuZhuang=true;
					}
				}
			}
		}
		if(hasShuZhuang==false){
			this.playZSJinbiAni(this.model.zhuangPos);
		}
		else{
			Laya.timer.once(1500,this,this.playZSJinbiAni,[this.model.zhuangPos]);
		}
		this.model.isGameStart=false;
		this.model.setPlayerReadyFalse();
		if(this.model.srddzMsgs.ACKBC_Sddz_Total.Finished==true){
			this.view.playerInfoPage.showGameEndBtn();
			this.view.nnPage.timeTip.reset();
		}
		else{
			this.model.srddzMsgs.ACKBC_Sddz_Total.Finished=false;
			this.view.playerInfoPage.updateLeaveDisbandBtns();
			if(info.Attached==""){
				info.Attached="8";
			}
			this.view.nnPage.timeTip.showReadyLeft(parseInt(info.Attached));
		}
	}

	/**播放庄家输给别人的动画*/
	__proto.playZSJinbiAni=function(zhuangPos){
		var info=this.model.srddzMsgs.ACKBC_Sddz_Total;
		var list=info.List;
		var player;
		for(var i=0;i<list.length;i++){
			if(this.model.playerByPos(i)!=null){
				player=this.model.playerByPos(i);
				if(i !=zhuangPos){
					if(player.score > player.preScore){
						this.view.playerInfoPage.playDropJinBiFrom(i,zhuangPos);
					}
				}
			}
		}
	}

	/**大结算 用不到哈哈*/
	__proto.NOTIFY_Summary=function(info){}
	/**离开房间*/
	__proto.ACKBC_Exit_Room=function(info){
		if(this.actived){
			console.log("ACKBC_Exit_Room");
			console.log(info);
			console.log("ACKBC_Exit_Room");
			this.model.srddzMsgs.ACKBC_Exit_Room=info;
			info.uid=info.UID;
			if(info.uid==UserData.selfuid){
				if(AppConfig.isNewHall){
					QuickUtils.gotoHall();
				}
				else{
					this.endGameGotoHall(true);
				}
				return;
			}
			else{
				EventCenter.instance.event("COMMON_INFOLIST_NOTICE",{color:1,msg:"玩家["+this.model.getPlayerNicknameByUid(info.uid)+"]离开了房间！"});
				var pos=this.model.getPlayerPosByUid(info.uid);
				this.model.leavePlayer(info.uid);
				if(pos !=-1){
					this.view.playerInfoPage.updatePlayerInfos(this.model.playerInfoVec);
					this.view.playerInfoPage.showStartBtn(false);
				}
			}
			if(this.model.isGameStart || this.model.srddzMsgs.ACK_RoomInfo.RoundCount !=0){
				this.view.playerInfoPage.showZhuang();
			}
		}
	}

	//解散相关
	__proto.AckDisband=function(info){
		if(this.actived){
			console.log("AckDisband::" ,info ,"解散相关");
			this.model.srddzMsgs.AckDisband=info;
			this.popDissolveRoomDetail(info);
		}
	}

	__proto.NotifyDisband=function(info){
		if(this.actived){
			console.log("NotifyDisband::" ,info ,"解散相关");
			this.model.srddzMsgs.NotifyDisband=info;
			this.hideDissolveRoomDetail();
			var str="";
			if(info.result==1){
				str="解散成功！";
			}
			else{
				str="解散失败！";
				QuickUtils.popMessageBox(str,"BTN_NONE",this,null);
			}
		}
	}

	__proto.NotifyUserState=function(info){
		if(this.actived){
			console.log("NotifyUserState",info,"NotifyUserState")
			this.model.srddzMsgs.NotifyUserState=info;
			var player=this.model.playerByUid(info.id);
			player.state=info.state;
			player.offlineTime=info.offlineTime;
			var pos=this.model.getPlayerPosByUid(parseInt(info.id));
			var dir=this.model.getChairDirByPos(pos);
			var isGray=false;
			if(info.state==2){
				isGray=true;
			}
			if(dir > 0){
				this.view.playerInfoPage.setGrayhead(dir,isGray,true,info.offlineTime);
			}
		}
	}

	/**通知可以t人*/
	__proto.NotifyKick=function(info){
		if(this.actived){
			console.log("NotifyKick",info,"NotifyKick");
			var i=0,len=info.indexs.length,player;
			for(i=0;i<len;i++){
				player=this.model.playerByPos(info.indexs[i]);
				player.offlineTime=0;
				player.canKick=true;
			}
			this.view.playerInfoPage.updateTirenBtn();
		}
	}

	/**t人返回结果*/
	__proto.KickResponse=function(info){
		if(this.actived){
			if(QuickUtils.popBox){
				QuickUtils.popBox.onhide();
			}
			this.model.standup(info.uid,-1);
			this.model.beKickedPlayer[info.pos]=info.uid;
			this.model.playerByUid(info.uid).offlineTime=0;
			this.view.playerInfoPage.updatePlayerInfos(this.model.playerInfoVec);
			this.view.playerInfoPage.updateSitDownUpBtn();
			this.view.playerInfoPage.updateStartBtn();
			this.view.tableInfoPage.updateKaijuren(info.nickName);
			EventCenter.instance.event("COMMON_INFOLIST_NOTICE",{color:0,msg:"玩家["+this.model.getPlayerNicknameByUid(info.uid)+"]站起了！"});
			QuickUtils.popMessageBox("玩家["+this.model.getPlayerNicknameByUid(info.uid)+"]被其他玩家请离座位!","BTN_QUEREN",this,this.onQuerenBeiTi);
		}
	}

	__proto.onQuerenBeiTi=function(){}
	/**房间未开始游戏解散*/
	__proto.NotifyDestoryRoom=function(info){
		if(this.actived){
			console.log("NotifyDestoryRoom",info,"NotifyDestoryRoom");
			if(info.IsOwnerDisband !=undefined && info.IsOwnerDisband==true){
				this.pop=QuickUtils.popMessageBox("房主解散了房间！","BTN_QUEREN",this,this.onQueRenExit,"提示","left");
			}
			else{
				this.pop=QuickUtils.popMessageBox("由于在规定时间内未开始游戏，房间已经强制解散！","BTN_QUEREN",this,this.onQueRenExit,"提示","left");
			}
		}
	}

	__proto.onQueRenExit=function(idx){
		if(AppConfig.isNewHall){
			QuickUtils.gotoHall();
		}
		else{
			this.endGameGotoHall();
		}
	}

	__proto.onPopPanelCallBack=function(){
		if(AppConfig.isNewHall){
			QuickUtils.gotoHall();
		}
		else{
			this.endGameGotoHall();
		}
	}

	__proto.endGameGotoHall=function(gotoHall){
		(gotoHall===void 0)&& (gotoHall=true);
		console.log("send MsgTypes.BASE_QUEUE,PomeloMessage.hall_g_o...");
		if(this.pop !=null){
			this.pop.onhide();
		}
		this.hideDissolveRoomDetail();
		this.contineGameQueue();
		MessageManager.instance.resetGameQueue();
		this.model.reset();
		this.view.reset();
		this.model.playerInfoVec.length=0;
		if(UserData.isReplay){
			UserData.isPreReplay=true;
		}
		CommonModule.instance.regotoCommonText();
		NnGameModule.instance.stopGame(gotoHall);
		UserData.isReplay=false;
		this.model.isGameStart==false;
	}

	__proto.popDissolveRoomDetail=function(info){
		if(this.dissolvePage==null){
			this.dissolvePage=new NewDissolvePage();
		}
		this.dissolvePage.update(info);
		QuickUtils.AddCenter(this.dissolvePage,UIManager.instance.popLayer);
		if(QuickUtils.popBox){
			QuickUtils.popBox.onhide();
		}
	}

	__proto.hideDissolveRoomDetail=function(){
		if(this.dissolvePage && this.dissolvePage.parent){
			this.dissolvePage.parent.removeChild(this.dissolvePage);
		}
	}

	__proto.clear=function(){
		this.model.reset();
		this.view.reset();
		this.model.playerInfoVec.length=0;
		if(UserData.isReplay){
			EventCenter.instance.event("REPLAY_back",null);
		}
		UserData.isReplay=false;
		this.model.isGameStart==false;
	}

	/**送礼物*/
	__proto.MSG_ACK_Gift=function(info){
		if(this.actived){
			console.log("MSG_ACK_Gift",info,"MSG_ACK_Gift");
			var player=this.model.playerByUid(info.uid);
			var tplayer=this.model.playerByUid(info.tUid);
			player.Diamond=info.diamond;
			var fromDir=this.model.getChairDirByPos(player.pos);
			var toDir=this.model.getChairDirByPos(tplayer.pos);
			if(info.uid==UserData.uid){
				UserData.Diamond=info.diamond;
			}
			GiftEff$1.instance.showGiftEff(fromDir,toDir,info.id);
		}
	}

	/**清除延迟回调相关*/
	__proto.clearTimeDelay=function(){
		Laya.timer.clear(this,this.contineGameQueue);
	}

	__proto.resetSelf=function(){
		this.model.reset();
		this.view.playerInfoPage.hideReadyBtn();
		this.view.playerInfoPage.hideZhuang();
		this.view.playerInfoPage.hideQiangAndXia();
		this.view.playerInfoPage.updateJiabei();
		this.view.nnPage.reset();
	}

	__proto.sendMsgCommond=function(commondId,needCantrol){
		(needCantrol===void 0)&& (needCantrol=true);
		if(needCantrol){
			this.view.nnPage.handlePart.canControl(this.model.selfChairPos,false);
		}
		EventCenter.instance.event("SOCKET_SEND",commondId);
	}

	/**暂停游戏消息队列*/
	__proto.pauseGameQueue=function(){
		if(UserData.isReplay){
			this.model.needCutdownReplay=true;
		}
		else{
			MessageManager.instance.pauseQueue("MESSAGE_GAME");
		}
	}

	/**继续游戏消息队列*/
	__proto.contineGameQueue=function(){
		if(UserData.isReplay){
			this.model.needCutdownReplay=false;
		}
		else{
			MessageManager.instance.continueQueue("MESSAGE_GAME");
		}
	}

	/**游戏时间已经结束*/
	__proto.onTimeOver=function(){
		if(!this.model.isGameStart){
		}
	}

	//
	__getset(0,__proto,'model',function(){
		return NnGameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'view',function(){
		return NnGameModule.instance.gameContext.view;
	});

	return NnController;
})(AbstractLayer)


/**四人斗地主数据*/
//class modules.nnGame.inerGame.model.NnModel extends rb.framework.mvc.AbstractLayer
var NnModel=(function(_super){
	function NnModel(){
		this.isReConn=false;
		/**房主*/
		this.roomOwnerUid="";
		/***/
		this.isMouseDwon=false;
		/**当前地主的位置*/
		this.zhuangPos=-1;
		/**当前的叫分*/
		this.difen=0;
		/**当前的倍数*/
		this.beishu=1;
		/**当前的阶段*/
		this.stage=0;
		this.curHandlePos=0;
		this.isStrictShowCalc=false;
		this.beKickedPlayer={};
		this.isAutoHandle=false;
		/**是否正在出牌中*/
		this.isDragingcard=false;
		/**游戏是否已经开始*/
		this.isGameStart=false;
		this.canStartInto=true;
		/**重播时，前几步一步到位*/
		this.preStepNum=4;
		this.replayData=[];
		this.replayCurStep=0;
		/**0暂停 1播放中*/
		this.replayState=0;
		/**是否要中断播放*/
		this.needCutdownReplay=false;
		/**是否已经在玩家操作的时候预出牌了*/
		this.isClientPrePop=false;
		/**玩家预出的牌*/
		this.isClientPrePopCards=0;
		/**底牌*/
		this.dipaiCards=[];
		/**当前出牌的玩家*/
		this.curOutputPos=-1;
		/**当前操作的玩家*/
		this.curOptPos=-1;
		/**是否是流局*/
		this.isLiu=false;
		/**是否是当前局结束*/
		this.isEnd=false;
		this.isSelfSitDown=false;
		this.selfChairPos=0;
		this._chairNum=4;
		/**当前出的牌*/
		this.curOutputCards=[];
		this.srddzMsgs=new NnMsgs();
		this.playerInfoVec=[];
		this.mingpaiVec=[];
		this.jiabeiVec=[];
		this.xiazhuVec=[];
		this.handleCards=[];
		this.outputCards=[];
		NnModel.__super.call(this);
	}

	__class(NnModel,'modules.nnGame.inerGame.model.NnModel',_super);
	var __proto=NnModel.prototype;
	__proto.onAdd=function(){}
	__proto.onRemove=function(){}
	__proto.resetCard=function(){
		console.log("resetCard /////////////////////////////////resetCard");
		this.zhuangPos=-1;
		this.difen=0;
		this.beishu=1;
		this.curOutputPos=-1;
		this.curOptPos=-1;
		this.curOutputCards.length=0;
		this.dipaiCards.length=0;
		var i=0;
		var len=this._chairNum;
		for(i=0;i<len;i++){
			this.outputCards[i].length=0;
			this.handleCards[i].length=0;
			this.mingpaiVec[i]=false;
			this.jiabeiVec[i]=false;
			var player=this.playerByPos(i);
			if(player!=null){
				player.haveJiao=false;
				this.playerByPos(i).haveXiazhu=false;
				this.playerByPos(i).jiaofen=0;
			}
			this.xiazhuVec[i]=0;
		}
		this.isEnd=false;
		this.isLiu=false;
	}

	__proto.reset=function(){
		this.stage=0;
		this.isReConn=false;
		this.beKickedPlayer={};
		this.resetCard();
	}

	/**更新玩家手里的牌*/
	__proto.updateHandleCards=function(pos,cards){
		this.handleCards[pos]=cards.concat();
	}

	/**叫地主完成给对应的玩家手里加上三张牌 四人斗地主不是地主的玩家不给底牌具体值*/
	__proto.addDipaiToHandleCards=function(pos,cards){
		this.dipaiCards=cards.concat();
		this.handleCards[pos]=this.handleCards[pos].concat(cards);
		this.handleCards[pos].sort(PaixingLogic.compCardsFun);
	}

	/**明牌通知更新地主玩家手里的牌*/
	__proto.updateMingpai=function(pos,cards){
		this.mingpaiVec[pos]=true;
		this.handleCards[pos]=cards.concat();
		this.handleCards[pos].sort(PaixingLogic.compCardsFun);
	}

	/**出牌*/
	__proto.outputPockers=function(pos,cards){
		this.curOutputPos=pos;
		this.curOutputCards=cards.concat();
		this.curOutputCards.sort(PaixingLogic.compCardsFun);
		this.outputCards[pos].push(cards);
		var i=0,len=cards.length;
		for(i=0;i<len;i++){
			var idx=this.handleCards[pos].indexOf(cards[i]);
			if(idx !=-1){
				this.handleCards[pos].splice(idx,1);
			}
			else{
				this.handleCards[pos].splice(0,1);
			}
		}
	}

	/**根据玩家的椅子号返回玩家的位置</br>
	*
	*3个人的时候是
	*0bottom 1right 2left
	*</br>
	*4个人的时候是
	*0bottom 1right 2top 3left
	*
	**/
	__proto.getChairDirByPos=function(pos){
		if(pos==-1){
			return-1;
		};
		var returnDir=0;
		returnDir=pos-this.selfChairPos;
		if(returnDir < 0){
			returnDir=returnDir+this.chairNum;
		}
		return returnDir;
	}

	/**根据玩家的位置 返回玩家对应的椅子号*/
	__proto.getChairPosByDir=function(dir){
		var returnPos=0;
		returnPos=this.selfChairPos+dir;
		if(returnPos > this.chairNum-1){
			returnPos=returnPos-this.chairNum;
		}
		return returnPos;
	}

	__proto.updateOnePlayerInfo=function(info){
		var i=0;
		var len=this.playerInfoVec.length+0;
		var has=false;
		for(i=0;i<len;i++){
			if(this.playerInfoVec[i] && this.playerInfoVec[i].uid==info.uid){
				if(this.playerInfoVec[i].pos !=info.pos){
					console.log("传过来的数据有错误!!!!!!");
				}
				this.updateObjFromObj(this.playerInfoVec[i],info);
				has=true;
				break ;
			}
		}
		if(has==false){
			this.playerInfoVec.push(info);
		}
		if(info.uid==UserData.selfuid){
			this.selfChairPos=info.pos;
			if(this.selfChairPos==-1){
				this.isSelfSitDown=false;
				this.selfChairPos=0;
			}
			else{
				this.isSelfSitDown=true;
			}
		}
	}

	__proto.playerByPos=function(pos){
		var i=0;
		var len=this.playerInfoVec.length;
		for(i=0;i<len;i++){
			if(this.playerInfoVec[i] && this.playerInfoVec[i].pos==pos){
				return this.playerInfoVec[i];
			}
		}
		return null;
	}

	__proto.playerByUid=function(uid){
		var i=0;
		var len=this.playerInfoVec.length;
		for(i=0;i<len;i++){
			if(this.playerInfoVec[i] && this.playerInfoVec[i].uid==uid){
				return this.playerInfoVec[i];
			}
		}
		return null;
	}

	__proto.getPlayerPosByUid=function(uid){
		var i=0;
		var len=this.playerInfoVec.length;
		for(i=0;i<len;i++){
			if(this.playerInfoVec[i] && this.playerInfoVec[i].uid==uid){
				return this.playerInfoVec[i].pos;
			}
		}
		return 0;
	}

	__proto.getPlayerUidByPos=function(pos){
		var i=0;
		var len=this.playerInfoVec.length;
		for(i=0;i<len;i++){
			if(this.playerInfoVec[i] && this.playerInfoVec[i].pos==pos){
				return this.playerInfoVec[i].uid;
			}
		}
		return 0;
	}

	__proto.getPlayerNicknameByUid=function(uid){
		var i=0;
		var len=this.playerInfoVec.length;
		for(i=0;i<len;i++){
			if(this.playerInfoVec[i] && this.playerInfoVec[i].uid==uid){
				return this.playerInfoVec[i].nickname;
			}
		}
		return "";
	}

	__proto.updateObjFromObj=function(obj,fromObj){
		obj.prePos=obj.pos;
		for (var p in fromObj){
			if(fromObj[p] !=undefined){
				obj[p]=fromObj[p];
			}
		}
	}

	__proto.sitDown=function(uid,pos,score){
		var i=0;
		var len=this.playerInfoVec.length;
		for(i=0;i<len;i++){
			if(this.playerInfoVec[i] && this.playerInfoVec[i].uid==uid){
				this.playerInfoVec[i].pos=pos;
				this.playerInfoVec[i].score=score;
				this.playerInfoVec[i].canKick=false;
				if(uid==UserData.selfuid){
					if(pos !=-1){
						this.isSelfSitDown=true;
						this.selfChairPos=pos;
					}
					else{
						this.isSelfSitDown=false;
						this.selfChairPos=0;
					}
				}
			}
		}
	}

	__proto.standup=function(uid,pos){
		var i=0;
		var len=this.playerInfoVec.length;
		for(i=0;i<len;i++){
			if(this.playerInfoVec[i] && this.playerInfoVec[i].uid==uid){
				this.playerInfoVec[i].pos=pos;
				this.playerInfoVec[i].canKick=false;
				if(uid==UserData.selfuid){
					if(pos !=-1){
						this.isSelfSitDown=true;
						this.selfChairPos=pos;
					}
					else{
						this.isSelfSitDown=false;
						this.selfChairPos=0;
					}
				}
			}
		}
	}

	__proto.updateReadyState=function(pos,readyState,piaoValue){
		var i=0;
		var len=this.playerInfoVec.length;
		for(i=0;i<len;i++){
			if(this.playerInfoVec[i] && this.playerInfoVec[i].pos==pos){
				this.playerInfoVec[i].readystate=true;
				this.playerInfoVec[i].piao=piaoValue;
				break ;
			}
		}
	}

	//从玩家列表中删除某个玩家
	__proto.leavePlayer=function(uid){
		var i=0;
		var len=this.playerInfoVec.length;
		for(i=0;i<len;i++){
			if(this.playerInfoVec[i] && this.playerInfoVec[i].uid==uid){
				this.playerInfoVec.splice(i,1);
				break ;
			}
		}
	}

	__proto.updatePlayerInfoVec=function(arr){
		var i=0;
		var len=arr.length;
		var info;
		for(i=0;i<len;i++){
			info=arr[i];
			if(UserData.isReplay){
				info.index=info.index !=undefined ? info.index :0;
				info.diamond=info.diamond !=undefined ? info.diamond :0;
				info.Icon=info.Icon !=undefined ? info.Icon :"";
				info.score=info.score !=undefined ? info.score :0;
				info.coin=info.coin !=undefined ? info.coin :0;
				info.readystate=info.readystate !=undefined ? info.readystate :0;
				info.uid=info.uid !=undefined ? info.uid :0;
				info.IP=info.IP !=undefined ? info.IP :"";
				info.Name=info.name;
				info.Index=info.index;
				info.Coin=info.coin;
				info.readystate=1;
				info.UID=info.uid;
				info.Diamond=info.diamond;
				if(info.icon){
					info.Icon=info.icon;
				}
			}
			info.nickname=info.Name;
			info.uid=info.UID;
			info.ip=info.IP;
			info.pos=info.Index;
			info.golds=info.Coin;
			if(info.uid !="" || info.uid !=0){
				if(info.state==3){
					this.beKickedPlayer[info.pos]=info.uid;
					info.state=1;
					info.pos=-1;
				}
				else if(info.state==4){
					this.beKickedPlayer[info.pos]=info.uid;
					info.state=2;
					info.pos=-1;
				}
				this.updateOnePlayerInfo(arr[i]);
			}
		}
	}

	/**胡牌后，将所有readystate改为0*/
	__proto.setPlayerReadyFalse=function(){
		var i=0,len=this.playerInfoVec.length;
		for(i=0;i<len;i++){
			this.playerInfoVec[i].readystate=0;
		}
	}

	__getset(0,__proto,'gameHasStarted',function(){
		if(this.isGameStart || this.srddzMsgs.ACK_RoomInfo.RoundCount > 0){
			return true;
		}
		return false;
	});

	/**设置一共有几个人玩*/
	__getset(0,__proto,'chairNum',function(){
		return this._chairNum;
		},function(value){
		this._chairNum=value;
		this.playerInfoVec.length=0;
		this.outputCards.length=this.chairNum;
		this.handleCards.length=this.chairNum;
		this.mingpaiVec.length=this.chairNum;
		this.jiabeiVec.length=this.chairNum;
		this.xiazhuVec.length=this.chairNum;
		this.dipaiCards.length=0;
		var i=0;
		var len=this._chairNum;
		for(i=0;i<len;i++){
			this.outputCards[i]=[];
			this.handleCards[i]=[];
			this.mingpaiVec[i]=false;
			this.jiabeiVec[i]=false;
			this.xiazhuVec[i]=0;
		}
		this.isGameStart=false;
		this.isEnd=false;
		this.isLiu=false;
	});

	NnModel.Stage_jiaofen=1;
	NnModel.Stage_jiabei=2;
	NnModel.Stage_dapai=3;
	__static(NnModel,
	['DissolveResult_REF',function(){return this.DissolveResult_REF=["等待操作","同意" ,"拒绝"];}
	]);
	return NnModel;
})(AbstractLayer)


//class modules.nnGame.inerGame.view.NnView extends rb.framework.mvc.AbstractLayer
var NnView=(function(_super){
	function NnView(){
		this.popChatArr=null;
		this.expressloaderArr=null;
		this._replayControlView=null;
		this._nnPage=null;
		this._playerInfoPage=null;
		this._tableInfoPage=null;
		// }
		this._chatPage=null;
		this._gui=null;
		this._voiceRecording=-1;
		this.isPlayVoice=false;
		this.isClick=false;
		//****************************
		this.isRecording=false
		NnView.__super.call(this);
		this.setType(3);
	}

	__class(NnView,'modules.nnGame.inerGame.view.NnView',_super);
	var __proto=NnView.prototype;
	__proto.onAdd=function(){
		this.onAddUI();
		this.onAddListener();
	}

	__proto.onRemove=function(){
		this.onRemoveUI();
		this.onRemoveListener();
	}

	__proto.onAddUI=function(){
		if(this._gui==null){
			this._gui=new GameTableUI$1();
			this._gui.mouseThrough=true;
		}
		console.log("桌面被添加到舞台！！");
		UIManager.instance.uiLayer.addChild(this._gui);
		if(this._nnPage==null){
			this._nnPage=new NnPage(new PockerPageUI());
			this._gui.pokerContainer.addChild(this._nnPage.skin);
		}
		if(this._tableInfoPage==null){
			this._tableInfoPage=new TableInfoPage$1(this.gui.tableInfoPage);
		}
		if(this._playerInfoPage==null){
			this._playerInfoPage=new PlayerInfoPage$1(this.gui.playerInfoPage);
		}
		if(this._replayControlView==null){
			this._replayControlView=new ReplayControlView(this.gui.replayControlView);
		}
		this._chatPage=Chat.schatPage;
		this.gui.chatContainer.addChild(this._chatPage.skin);
		this._chatPage.hide();
		if(UserData.isReplay==true){
			this._replayControlView.show();
		}
		else{
			this._replayControlView.hide();
		}
		this._gui.popChat0.visible=false;
		this._gui.popChat1.visible=false;
		this._gui.popChat2.visible=false;
		this._gui.popChat3.visible=false;
		this._gui.popChat4.visible=false;
		this._gui.popChat5.visible=false;
		this._gui.popChat6.visible=false;
		this._gui.popChat7.visible=false;
		this._gui.popChat8.visible=false;
		this._gui.popChat9.visible=false;
		EventCenter.instance.on("SEND_CHAT_MESSAGE",this,this.onSendChat);
		this._gui.tableInfoPage.voiceIntercomBtn.on("click",this,this.onVoiceOpClick);
		this._gui.tableInfoPage.voiceIntercomBtn.on("mouseout",this,this.onVoiceOpOut);
		this._gui.tableInfoPage.chatBtn.on("click" ,this,this.onShowChatPage);
	}

	//GiftEff.instance.showPockTypeEff(BasePocker.PAIXING_SHUNZI);
	__proto.initPopChat=function(chairNum){
		(chairNum===void 0)&& (chairNum=10);
		this.popChatArr=[];
		switch(chairNum){
			case 10:this.popChatArr.push(this._gui.popChat0,this._gui.popChat1,this._gui.popChat2,this._gui.popChat3,this._gui.popChat4,this._gui.popChat5,this._gui.popChat6,this._gui.popChat7,this._gui.popChat8,this._gui.popChat9);break ;
			}
	}

	__proto.onSendChat=function(dat){
		this.chatPage.switchState();
		var obj={message:dat,type:2};
		EventCenter.instance.event("SOCKET_SEND",ProtoMessage.getProtoMessage(370,obj));
	}

	__proto.onVoiceOpClick=function(e){
		this.isClick=true;
		console.log("点击了？？？？？？ ");
		if(this.isRecording){
			this.stopRecord();
		}
		else{
			this.startRecord();
		}
		e.stopPropagation();
	}

	/**取消上传*/
	__proto.onVoiceOpOut=function(e){
		if(this.isClick){
			this.isClick=false;
			return;
		}
		console.log("滑动了？？？？？？ ");
		if(this.isRecording==true){
			WX.stopRecord(-1);
			Laya.timer.clear(this,this.onRecording);
			this._gui.tableInfoPage.voiceTip.visible=false;
			this._gui.tableInfoPage.voicePlay.visible=false;
			this.tableInfoPage.stopVoicePlay();
			this.onStopSuccess();
			this.isRecording=false;
			if(!this.isPlayVoice){
				this.Voice();
			}
		}
	}

	__proto.startRecord=function(){
		WX.startRecord();
		this._gui.tableInfoPage.voicePlay.visible=true;
		this.tableInfoPage.playVoicePlay();
		this._gui.tableInfoPage.voiceTip.visible=true;
		this._voiceRecording=TimeManager.unixtime;
		this._gui.tableInfoPage._time.text="15'"
		Laya.timer.loop(100,this,this.onRecording);
		this.isRecording=true;
	}

	__proto.stopRecord=function(){
		var time=TimeManager.unixtime-this._voiceRecording;
		if(time < 500){
			return;
		}
		else if(time < 1000){
			WX.stopRecord(-1);
			QuickUtils.VoiceTip(3);
			Laya.timer.clear(this,this.onRecording);
			this._gui.tableInfoPage.voiceTip.visible=false;
			this._gui.tableInfoPage.voicePlay.visible=false;
			this.tableInfoPage.stopVoicePlay();
			this.onStopSuccess();
		}
		else{
			WX.stopRecord(0,this,this.onStopSuccess)
			Laya.timer.clear(this,this.onRecording);
			this._gui.tableInfoPage.voiceTip.visible=false;
			this._gui.tableInfoPage.voicePlay.visible=false;
			this.tableInfoPage.stopVoicePlay();
			NnGameModule.instance.gameContext.view.gui.tableInfoPage.voiceIntercomBtn.disabled=true;
			NnGameModule.instance.gameContext.view.gui.tableInfoPage.voiceDis.visible=true;
		}
		this.isRecording=false;
		if(!this.isPlayVoice){
			this.Voice();
		}
	}

	__proto.onStopSuccess=function(){
		NnGameModule.instance.gameContext.view.gui.tableInfoPage.voiceIntercomBtn.disabled=false;
		NnGameModule.instance.gameContext.view.gui.tableInfoPage.voiceDis.visible=false;
	}

	/**时间条 **/
	__proto.onRecording=function(){
		var du=(TimeManager.unixtime-this._voiceRecording)/1000;
		this._gui.tableInfoPage._time.text=(15-Math.floor(du))+"'"
		if(du>=AppConfig.maxVoiceTime){
			this.stopRecord();
		}
	}

	__proto.onRecChat=function(msg){
		console.log("onRecChat::",msg);
		var arr=msg.message.split("#");
		if(arr.length > 1){
			this.showPopChat(arr[0],arr[1]);
		}
	}

	// }
	__proto.showPopChat=function(uid,worlds){
		if(this.popChatArr==null){
			this.initPopChat(this.model.chairNum);
		};
		var pos=this.model.getPlayerPosByUid(uid);
		var dir=this.model.getChairDirByPos(pos);
		var wordsArr=worlds.split("|");
		if(wordsArr.length > 1){
			if(wordsArr[0]=="express"){
				var index=parseInt(wordsArr[1]);
				this._playerInfoPage.showExpress(dir,index+1);
				return;
			}
			else if(wordsArr[0]=="VoiceId"){
				console.log("youyuyinguolaile");
				WX.voiceArr.push([parseInt(uid),wordsArr[1]]);
				if(!this.isPlayVoice && this.isRecording==false){
					this.Voice();
				}
			}
		}
		else{
			this.popChatArr[dir].visible=true;
			this.popChatArr[dir].tf.text=worlds;
			this.popChatArr[dir].backimg.width=this.popChatArr[dir].tf.textField.textWidth+30;
			this.popChatArr[dir].backimg.height=this.popChatArr[dir].tf.textField.textHeight+40;
			Tween.clearAll(this.popChatArr[dir]);
			this.popChatArr[dir].alpha=1;
			var times=this.popChatArr[dir].tf.textField.lines.length*2000;
			SoundManager.playSound(SoundPlay.instance.getSddzChatPath(this.model.playerByPos(pos).sex,AppConfig.getChatSound(worlds,2)),1);
		}
		if(this.popChatArr[dir]==this._gui.popChat1){
			this.popChatArr[dir].x=710+(423-this.popChatArr[dir].backimg.width)*0.6;
		}
		else if(this.popChatArr[dir]==this._gui.popChat2){
			this.popChatArr[dir].x=678+(423-this.popChatArr[dir].backimg.width)*0.6;
		}
		else if(this.popChatArr[dir]==this._gui.popChat3){
			this.popChatArr[dir].x=551+(423-this.popChatArr[dir].backimg.width)*0.6;
		}
		else if(this.popChatArr[dir]==this._gui.popChat4){
			this.popChatArr[dir].x=420+(423-this.popChatArr[dir].backimg.width)*0.6;
		}
		Tween.to(this.popChatArr[dir],{alpha:0.3},times,null,new Handler(this,this.onCompeteTween,[this.popChatArr[dir]]),500);
	}

	__proto.Voice=function(){
		var _$this=this;
		if(WX.voiceArr.length<=0){
			return;
		}
		if(WX.isUpLoading){
			return;
		}
		this.isPlayVoice=true;
		var arr=WX.voiceArr.shift();
		WX.downloadVoice(arr[1],this,this.playVoice,[arr[0]]);
		Browser.window.wx.onVoicePlayEnd({
			success:function (res){
				console.log("声音播放完成了！！ uid：："+arr[0]);
				console.log("WX.voiceArr.length::"+WX.voiceArr.length);
				Laya.timer.clear(NnGameModule.instance.gameContext.view,_$this.recoverSoundVolume);
				NnGameModule.instance.gameContext.view.playerInfoPage.hideVoice(arr[0]);
				AppConfig.isPlayingRecord=false;
				Laya.timer.once(1000,null,SoundPlay.swithMusic,["game"]);
				if(WX.voiceArr.length>0){
					_$this.Voice();
				}
				else{
					WX.isDownLoading=false;
					if(WX.uploadArr.length>0){
						WX.uploadVoice(WX.uploadArr[0]);
						WX.uploadArr.length=0;
					}
					NnGameModule.instance.gameContext.view.isPlayVoice=false;
					if(WX.isUpLoading==false){
						NnGameModule.instance.gameContext.view.gui.tableInfoPage.voiceIntercomBtn.disabled=false;
						NnGameModule.instance.gameContext.view.gui.tableInfoPage.voiceDis.visible=false;
					}
				}
			}
		});
	}

	__proto.playVoice=function(uid){
		Laya.timer.once(15000,this,this.recoverSoundVolume,[parseInt(uid)]);
		this._playerInfoPage.showVoice(parseInt(uid));
	}

	__proto.recoverSoundVolume=function(uid){
		if(this.isPlayVoice==false)return;
		this.isPlayVoice=false;
		AppConfig.isPlayingRecord=false;
		SoundPlay.swithMusic("game");
		this._playerInfoPage.hideVoice(uid);
		this._gui.tableInfoPage.voiceIntercomBtn.disabled=false;
		this._gui.tableInfoPage.voiceDis.visible=false;
	}

	__proto.playend=function(uid){
		this._playerInfoPage.hideVoice(uid);
	}

	__proto.onCompeteTween=function(obj){
		obj.alpha=1;
		obj.visible=false;
	}

	__proto.onShowChatPage=function(msg){
		SoundPlay.instance.playClickBtnSound();
		this.chatPage.switchState();
		(msg).stopPropagation();
	}

	__proto.setChairNmu=function(num){
		this.nnPage.setChairNum(num);
		this._playerInfoPage.setChairNum(num);
		this.reset();
	}

	__proto.startGame=function(){}
	__proto.onAddListener=function(){}
	//this.addHandler(MsgNames.TICKET_CARD_CHANGE,onticketCardChange);
	__proto.onticketCardChange=function(msg){
		if(msg)msg.complete();
	}

	__proto.onRemoveUI=function(){
		if(this._gui !=null){
			UIManager.instance.uiLayer.removeChild(this._gui);
			console.log("桌面被移除舞台！！");
			this._gui.tableInfoPage.chatBtn.off("mousedown" ,this,this.onShowChatPage);
			EventCenter.instance.off("SEND_CHAT_MESSAGE",this,this.onSendChat);
			this._gui.tableInfoPage.voiceIntercomBtn.off("click",this,this.onVoiceOpClick);
			this._gui.tableInfoPage.voiceIntercomBtn.off("mouseout",this,this.onVoiceOpOut);
		}
	}

	//todo
	__proto.reset=function(){
		UserInfoPage$1.instance.hide();
		this._nnPage.reset();
		this._tableInfoPage.reset();
		this._playerInfoPage.havePiaoReset();
		this._replayControlView.reset();
	}

	__proto.replayup_reset=function(){
		this._nnPage.reset();
		this._tableInfoPage.reset();
		this._playerInfoPage.havePiaoReset();
		this._replayControlView.replayup_reset();
	}

	__proto.onRemoveListener=function(){}
	//case 4:popChatArr.push(_gui.bottomPopChat,_gui.rightPopChat,_gui.topPopChat,_gui.leftPopChat);
	__getset(0,__proto,'model',function(){
		return NnGameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'replayControlView',function(){
		return this._replayControlView;
	});

	__getset(0,__proto,'nnPage',function(){
		return this._nnPage;
	});

	__getset(0,__proto,'playerInfoPage',function(){
		return this._playerInfoPage;
	});

	__getset(0,__proto,'gui',function(){
		return this._gui;
	});

	__getset(0,__proto,'chatPage',function(){
		return this._chatPage;
	});

	__getset(0,__proto,'tableInfoPage',function(){
		return this._tableInfoPage;
	});

	return NnView;
})(AbstractLayer)


//class modules.nnGame.NnGameModule extends rb.framework.mvc.Module
var NnGameModule=(function(_super){
	function NnGameModule(){
		this.needResize=true;
		this._main=null;
		this._gameContext=null;
		this._mainContext=null;
		NnGameModule.__super.call(this);
		if (NnGameModule._instance !=null){
			throw (new SingletonError(this));
		}
		NnGameModule._instance=this;
	}

	__class(NnGameModule,'modules.nnGame.NnGameModule',_super);
	var __proto=NnGameModule.prototype;
	__proto.startup=function(){
		if(this._mainContext==null){
			this._mainContext=new GameContext("nnGameMainmain",this);
			this._main=new NnMainContext("nnGameMain",this,this._mainContext);
			this._gameContext=new NnContext("nnGame",this,this._main);
		}
		this.switchState(this._mainContext);
	}

	__proto.stopGame=function(gotoHall,needClear){
		(gotoHall===void 0)&& (gotoHall=true);
		(needClear===void 0)&& (needClear=false);
		if(needClear){
			this._gameContext.controller.clear();
		}
		NnGameModule.inGame=false;
		NnGameModule.isSettlement=false;
		this.switchState(this._mainContext);
		if(gotoHall){
			this.inHallResize();
			HallModule.instance.gotoHall();
		}
	}

	__proto.startGame=function(){
		Browser.window.document.title=AppConfig.nameTitle+"拼十";
		if(NnGameModule.inGame==true){
			return;
		}
		HallModule.instance.goEmpty();
		NnGameModule.inGame=true;
		CommonModule.instance.gotoCommonContext();
		this.switchState(this.gameContext);
		this.inGameResize();
		RecordView.gameName="拼十";
		WX.onMenuShareTimeline(UserData.nickname+"-"+AppConfig.nameTitle+"拼十("+AppConfig.costRule[UserData.roomtype+""][UserData.Rule[3]]+")【房间号："+UserData.roomid+"】",UserData.roomid+"--"+UserData.uniqueCode);
		WX.onMenuShareAppMessage(UserData.nickname+"-"+AppConfig.nameTitle+"拼十("+AppConfig.costRule[UserData.roomtype+""][UserData.Rule[3]]+")【房间号："+UserData.roomid+"】","房主创建了拼十 【房间号:"+UserData.roomid+"】"+AppConfig.getRule(UserData.Rule[1]).desc+"",UserData.roomid+"--"+UserData.uniqueCode);
		console.log("startSrddzGame...........");
	}

	__proto.inGameResize=function(isFirst){
		(isFirst===void 0)&& (isFirst=true);
		if(QuickUtils.sysem()!="windows"){
			Laya.stage.screenMode="horizontal";
		}
		Laya.stage.size(1038,640);
		modules.nnGame.NnGameModule.instance.gameContext.view.gui.visible=false;
		if(isFirst==true){
			Laya.timer.once(200,this,this.onCheckInGameResize);
		}
		else{
			Laya.timer.frameOnce(1,this,this.onCheckInGameResize);
		}
	}

	__proto.onCheckInGameResize=function(){
		if(ModuleDef.CurGameModule.inGame==true){
			var canvas=Browser.getElementById("layaCanvas");
			if(canvas.width < canvas.height){
				QuickUtils.showChScreenGuideView();
				this.inGameResize(false);
			}
			else{
				QuickUtils.hideChScreenGuideView();
				modules.nnGame.NnGameModule.instance.gameContext.view.gui.visible=true;
			}
		}
		else{
			QuickUtils.hideChScreenGuideView();
		}
	}

	__proto.inHallResize=function(){
		if(QuickUtils.sysem()=="windows"){
			}else if(QuickUtils.sysem()=="ipad"||QuickUtils.sysem()=="mac"){
			Laya.stage.screenMode="vertical";
			}else{
			Laya.stage.screenMode="vertical";
		}
		Laya.stage.size(640,1038);
	}

	__getset(0,__proto,'main',function(){
		return this._main;
	});

	__getset(0,__proto,'gameContext',function(){
		return this._gameContext;
	});

	__getset(1,NnGameModule,'instance',function(){
		if (NnGameModule._instance==null){
			NnGameModule._instance=new NnGameModule();
		}
		return NnGameModule._instance;
	},rb.framework.mvc.Module._$SET_instance);

	NnGameModule.inGame=false;
	NnGameModule.isPauseGameQueue=false;
	NnGameModule.isSettlement=false;
	NnGameModule._instance=null;
	return NnGameModule;
})(Module)


/**玩家自己手里的牌*/
//class modules.nnGame.inerGame.view.pockerPart.card.BottomHandlePocker extends modules.nnGame.inerGame.view.pockerPart.card.BasePocker
var BottomHandlePocker=(function(_super){
	function BottomHandlePocker(skin){
		this.orignalY=0;
		this.readyOffsetY=-20;
		this.orignalY=skin.y;
		BottomHandlePocker.__super.call(this,skin);
		this.canControl=true;
	}

	__class(BottomHandlePocker,'modules.nnGame.inerGame.view.pockerPart.card.BottomHandlePocker',_super);
	var __proto=BottomHandlePocker.prototype;
	__proto.up=function(){
		if(this.state==0){
			return;
		}
		this.skin.valueImg.visible=true;
		this.skin.backImg.visible=false;
		this.state=0;
	}

	__proto.back=function(){
		if(this.state==1){
			return;
		}
		this.skin.backImg.visible=true;
		this.skin.valueImg.visible=false;
		this.state=1;
	}

	__proto.down=function(){
		if(this.state==2){
			return;
		}
		this.skin.backImg.visible=false;
		this.skin.valueImg.visible=true;
		this.state=2;
	}

	__proto.onMouseOver=function(e){
		if(this.model.isMouseDwon){
			this.skin.shadowImg.visible=!this.skin.shadowImg.visible;
			this.select=!this.select
		}
	}

	__proto.onMouseMove=function(e){}
	// }
	__proto.onClickStage=function(e){
		if((e.target instanceof ui.niuniuGame.niuniuPart.item.PockerItemUI )==false && e.target !=this.skin.parent && e.target.parent !=this.skin.parent.parent){
			this.select=false;
		}
	}

	// select=!select
	__proto.onMouseDown=function(e){
		this.select=!this.select;
		this.skin.shadowImg.visible=!this.skin.shadowImg.visible;
	}

	__proto.onMouseUp=function(e){
		this.skin.shadowImg.visible=false;
		this.model.isMouseDwon=false;
	}

	__proto.onSkinMouseUp=function(e){
		SoundPlay.playEffect("audio_deal_card");
	}

	__proto.reset=function(){
		_super.prototype.reset.call(this);
	}

	/**设置是否可以操作*/
	__getset(0,__proto,'canControl',null,function(bool){
		bool=false;
		if(bool){
			this.skin.on("mouseover",this,this.onMouseOver);
			Laya.stage.on("click",this,this.onClickStage);
			this.skin.on("mousedown",this,this.onMouseDown);
			Laya.stage.on("mouseup",this,this.onMouseUp);
			this.skin.on("mouseup",this,this.onSkinMouseUp);
		}
		else{
			this.skin.off("mouseover",this,this.onMouseOver);
			Laya.stage.off("click",this,this.onClickStage);
			this.skin.off("mousedown",this,this.onMouseDown);
			Laya.stage.off("mouseup",this,this.onMouseUp);
			this.skin.off("mouseup",this,this.onSkinMouseUp);
		}
	});

	__getset(0,__proto,'select',function(){
		return this.skin.y==this.orignalY+this.readyOffsetY;
		},function(bool){
		if(bool){
			this.skin.y=this.orignalY+this.readyOffsetY;
		}
		else{
			this.skin.y=this.orignalY;
		}
	});

	return BottomHandlePocker;
})(BasePocker)


/**别人手里的牌*/
//class modules.nnGame.inerGame.view.pockerPart.card.OtherHandlePocker extends modules.nnGame.inerGame.view.pockerPart.card.BasePocker
var OtherHandlePocker=(function(_super){
	function OtherHandlePocker(skin){
		OtherHandlePocker.__super.call(this,skin);
	}

	__class(OtherHandlePocker,'modules.nnGame.inerGame.view.pockerPart.card.OtherHandlePocker',_super);
	var __proto=OtherHandlePocker.prototype;
	__proto.up=function(){
		if(this.state==0){
			return;
		}
		this.skin.valueImg.visible=false;
		this.skin.backImg.visible=true;
		this.state=0;
	}

	__proto.back=function(){
		if(this.state==1){
			return;
		}
		this.skin.backImg.visible=true;
		this.skin.valueImg.visible=false;
		this.state=1;
	}

	__proto.down=function(){
		if(this.state==2){
			return;
		}
		this.skin.backImg.visible=false;
		this.skin.valueImg.visible=true;
		this.state=2;
	}

	return OtherHandlePocker;
})(BasePocker)


/**自己手里的牌的部分*/
//class modules.nnGame.inerGame.view.pockerPart.singlePart.handlePart.BottomSingleHandlePart extends modules.nnGame.inerGame.view.pockerPart.singlePart.handlePart.BaseSingleHandlePart
var BottomSingleHandlePart$1=(function(_super){
	function BottomSingleHandlePart(skin){
		this.gap=55;
		this._skin=null;
		this._skin=skin;
		BottomSingleHandlePart.__super.call(this,skin);
	}

	__class(BottomSingleHandlePart,'modules.nnGame.inerGame.view.pockerPart.singlePart.handlePart.BottomSingleHandlePart',_super,'BottomSingleHandlePart$1');
	var __proto=BottomSingleHandlePart.prototype;
	__proto.init=function(){
		var i=0,len=this._pockers.length;
		for(i=0;i<len;i++){
			this._pockers[i]=new BottomHandlePocker(this._skin["card"+i]);
		}
		Laya.stage.on("mousedown",this,this.onDownStage);
	}

	__proto.onDownStage=function(e){
		this.model.isMouseDwon=true;
	}

	__proto.showCards=function(cards,dir){
		cards=cards.concat();
		var pos=this.model.getChairPosByDir(dir);
		this.hideAll();
		var i=0;
		for(i=0;i<cards.length;i++){
			this._pockers[i].setCardImg(cards[i]);
			this._pockers[i].show();
			this._pockers[i].select=false;
			this._pockers[i].up();
			if(this.model.isSelfSitDown==false && this.model.isEnd==false){
				this._pockers[i].back();
			}
		}
	}

	__proto.onCompEff=function(idx,isLast){
		if(this.model.isSelfSitDown==false && this.model.isEnd==false){
			this._pockers[idx].back();
		}
		else{
			this._pockers[idx].up();
		}
		if(isLast){
			this._pockers[idx].back();
		}
	}

	/**播放最后一张牌翻牌*/
	__proto.playFanEff=function(needEff){
		(needEff===void 0)&& (needEff=true);
		if(needEff){
			this.startPlayFanEff();
		}
		else{
			this._pockers[4].up();
		}
	}

	__proto.startPlayFanEff=function(){
		this._pockers[4].skin.scaleX=-0.7;
		TimeManager.instance.timer.loop(50,this,this.onPlay);
	}

	__proto.onPlay=function(){
		this._pockers[4].skin.scaleX+=0.1;
		if(this._pockers[4].skin.scaleX >=0){
			this._pockers[4].up();
		}
		if(this._pockers[4].skin.scaleX==0.7){
			TimeManager.instance.timer.clear(this,this.onPlay);
		}
	}

	/**显示玩家已完成*/
	__proto.showComp=function(pos){
		if(this.model.isSelfSitDown==false){
			this._skin.comBox.visible=true;
			this._skin.typeImg.skin="niuniuGame/niuType/ready.png";
			return;
		};
		var cards=this.model.handleCards[this.model.selfChairPos].concat();
		cards.sort(PaixingLogic.compCardsFun);
		var jishuData=JishuArrData.getJishuArrData(cards);
		var paixing=PaixingLogic.getPaixing(cards,jishuData,false);
		if(PaixingLogic.isNiuPaixing(paixing)==true){
			var niuData=NiuData.getNiuData(cards);
			if(niuData.niuNum > 0){
				this.seleCards=niuData.ThreeArr;
			}
		}
		this.showPaixing(pos,paixing);
	}

	/**显示牌型*/
	__proto.showPaixing=function(pos,paixing){
		this._skin.comBox.visible=true;
		this._skin.typeImg.skin="niuniuGame/niuType/niu"+paixing+".png";
	}

	__proto.reset=function(){
		this._pockers[4].skin.scaleX=0.7
		TimeManager.instance.timer.clear(this,this.onPlay);
		_super.prototype.reset.call(this);
		this._skin.comBox.visible=false;
	}

	/**获取选中的牌*/
	__getset(0,__proto,'seleCards',function(){
		var retArr=[];
		var i=0;
		for(i=0;i<this._pockers.length;i++){
			if(this._pockers[i].visible==true && this._pockers[i].select==true){
				retArr.push(this._pockers[i].cardIdx);
			}
		}
		return retArr;
		},function(cards){
		var i=0,idx=0,temp=0;
		for(i=0;i<this._pockers.length;i++){
			this._pockers[i].select=false;
			if(this._pockers[i].visible){
				temp=this._pockers[i].cardIdx;
				idx=cards.indexOf(temp);
				if(idx !=-1){
					this._pockers[i].select=true;
					cards.splice(idx,1);
				}
			}
		}
	});

	__getset(0,__proto,'canControl',null,function(bool){
		Laya.superSet(BaseSingleHandlePart$1,this,'canControl',bool);
	});

	return BottomSingleHandlePart;
})(BaseSingleHandlePart$1)


//class modules.nnGame.inerGame.view.pockerPart.singlePart.handlePart.OtherSingleHandlePart extends modules.nnGame.inerGame.view.pockerPart.singlePart.handlePart.BaseSingleHandlePart
var OtherSingleHandlePart=(function(_super){
	function OtherSingleHandlePart(skin,dir){
		this._skin
		this._skin=skin;
		OtherSingleHandlePart.__super.call(this,skin);
		this.fromPos=[{x:495-skin.x,y:328-this._skin.y},{x:495-skin.x,y:328-this._skin.y},{x:495-skin.x,y:328-this._skin.y},{x:495-skin.x,y:328-this._skin.y},{x:495-skin.x,y:328-this._skin.y}];
		this.toPos=[{x:0,y:0},{x:21,y:0},{x:42,y:0},{x:63,y:0},{x:84,y:0}];
	}

	__class(OtherSingleHandlePart,'modules.nnGame.inerGame.view.pockerPart.singlePart.handlePart.OtherSingleHandlePart',_super);
	var __proto=OtherSingleHandlePart.prototype;
	__proto.init=function(){
		var i=0,len=this._pockers.length;
		for(i=0;i<len;i++){
			this._pockers[i]=new OtherHandlePocker(this._skin["card"+i]);
		}
	}

	__proto.showCards=function(cards,dir){
		cards=cards.concat();
		var pos=this.model.getChairPosByDir(dir);
		this.hideAll();
		var i=0;
		for(i=0;i<cards.length;i++){
			this._pockers[i].setCardImg(cards[i]);
			this._pockers[i].show();
			if(this.model.isEnd){
				this._pockers[i].down();
			}
			else{
				this._pockers[i].up();
			}
			this._pockers[i].select=false;
		}
	}

	__proto.playQipaiEff=function(isLast){
		_super.prototype.playQipaiEff.call(this,isLast);
	}

	/**显示玩家已完成*/
	__proto.showComp=function(pos){
		this._skin.comBox.visible=true;
		this._skin.typeImg.skin="niuniuGame/niuType/ready.png";
	}

	/**显示牌型*/
	__proto.showPaixing=function(pos,paixing){
		this._skin.comBox.visible=true;
		this._skin.typeImg.skin="niuniuGame/niuType/niu"+paixing+".png";
	}

	__proto.reset=function(){
		_super.prototype.reset.call(this);
		this._skin.comBox.visible=false;
	}

	return OtherSingleHandlePart;
})(BaseSingleHandlePart$1)


//class modules.nnGame.inerGame.controller.RNnController extends modules.nnGame.inerGame.controller.NnController
var RNnController=(function(_super){
	function RNnController(){
		RNnController.__super.call(this);
	}

	__class(RNnController,'modules.nnGame.inerGame.controller.RNnController',_super);
	return RNnController;
})(NnController)


//class modules.nnGame.inerGame.model.RNnModel extends modules.nnGame.inerGame.model.NnModel
var RNnModel=(function(_super){
	function RNnModel(){
		RNnModel.__super.call(this);
	}

	__class(RNnModel,'modules.nnGame.inerGame.model.RNnModel',_super);
	return RNnModel;
})(NnModel)


//class modules.nnGame.inerGame.view.playerInfoPart.GiftItem extends ui.gameCommon.items.GiftItemUI
var GiftItem$1=(function(_super){
	function GiftItem(){
		this.tUid=null;
		this.dat=null;
		GiftItem.__super.call(this);
		this.on("click",this,this.onClick);
	}

	__class(GiftItem,'modules.nnGame.inerGame.view.playerInfoPart.GiftItem',_super,'GiftItem$1');
	var __proto=GiftItem.prototype;
	__proto.setData=function(dat,tUid){
		if(dat){
			this.dat=dat;
			this.tUid=tUid;
			if(tUid==UserData.uid || NnGameModule.instance.gameContext.model.isSelfSitDown==false){
				this.img.disabled=true;
			}
			else{
				this.img.disabled=false;
			}
			this.img.skin="ani/"+dat.name+".png";
			var price=parseInt(dat.price);
			if(price > UserData.Diamond){
				this.costTf.color="#ff3d01";
			}
			else{
				this.costTf.color="#2dc509";
			}
			this.costTf.text=dat.price;
		}
	}

	__proto.onClick=function(e){
		if(this.tUid==UserData.uid){
			return;
		}
		if(NnGameModule.instance.gameContext.model.isSelfSitDown==false){
			QuickUtils.popMessage("围观用户禁止送礼物！");
			return;
		}
		UserInfoPage$1.instance.hide();
		console.log("送礼物咯：： id:"+this.dat.id+"  tUid:"+this.tUid);
		var giftObj={id:this.dat.id,tUid:this.tUid};
		EventCenter.instance.event("SOCKET_SEND",ProtoMessage.getProtoMessage(410,giftObj));
	}

	return GiftItem;
})(GiftItemUI)


//class modules.nnGame.context.NnMainContext extends rb.framework.mvc.GameContext
var NnMainContext=(function(_super){
	function NnMainContext(key,module,parentNode){
		this._socketControl=null;
		(key===void 0)&& (key="");
		NnMainContext.__super.call(this,key,module,parentNode);
	}

	__class(NnMainContext,'modules.nnGame.context.NnMainContext',_super);
	var __proto=NnMainContext.prototype;
	__proto.open=function(){
		_super.prototype.open.call(this);
		if(this._socketControl==null){
			this._socketControl=new NnMainController();
		}
		this.addController(this.socketControl);
	}

	__getset(0,__proto,'socketControl',function(){
		return this._socketControl;
	});

	return NnMainContext;
})(GameContext)


//class modules.nnGame.inerGame.context.NnContext extends rb.framework.mvc.GameContext
var NnContext=(function(_super){
	function NnContext(key,module,parentNode){
		this._view=null;
		this._controller=null;
		this._rcontroller=null;
		this._model=null;
		this._rmodel=null;
		(key===void 0)&& (key="");
		NnContext.__super.call(this,key,module,parentNode);
	}

	__class(NnContext,'modules.nnGame.inerGame.context.NnContext',_super);
	var __proto=NnContext.prototype;
	__proto.open=function(){
		_super.prototype.open.call(this);
		this.initUI();
		console.log("addView(srddz)////////////////");
		this.addView(this._view);
		if(UserData.isReplay){
			this.addController(this._rcontroller);
			this.addModel(this._rmodel);
		}
		else{
			this.addController(this._controller);
			this.addModel(this._model);
		}
		console.log("nngamecontext UserData.roomtype::"+UserData.roomtype);
		this.setChairNum(10);
		SoundPlay.swithMusic("game");
		console.log("NnContext open:::...");
		console.log("注册了游戏内的消息！！！");
		MessageManager.instance.continueQueue("MESSAGE_GAME");
		EventCenter.instance.event("GameContextReady",null);
	}

	__proto.close=function(){
		_super.prototype.close.call(this);
		SoundManager.stopMusic();
	}

	__proto.initUI=function(){
		if(!this._view){
			this._view=new NnView();
		}
		if(UserData.isReplay){
			if(!this._rcontroller){
				this._rcontroller=new RNnController();
			}
			if(this._rmodel){
				this._rmodel=new RNnModel();
			}
		}
		else{
			if(!this._controller){
				this._controller=new NnController();
			}
			if(!this._model){
				this._model=new NnModel();
			}
		}
	}

	__proto.setChairNum=function(num){
		if(UserData.isReplay){
			this._rmodel.chairNum=num;
		}
		else{
			this._model.chairNum=num;
		}
		this._view.setChairNmu(num);
	}

	__getset(0,__proto,'view',function(){
		return this._view;
	});

	__getset(0,__proto,'controller',function(){
		if(UserData.isReplay){
			return this._rcontroller;
		}
		else{
			return this._controller
		}
	});

	__getset(0,__proto,'model',function(){
		if(UserData.isReplay){
			return this._rmodel;
		}
		else{
			return this._model;
		}
	});

	return NnContext;
})(GameContext)


	Laya.__init([GiftEff$1,UserInfoPage$1]);
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