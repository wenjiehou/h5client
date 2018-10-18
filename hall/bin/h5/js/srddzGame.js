
(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var AbstractLayer=rb.framework.mvc.AbstractLayer,ActTipUI$2=ui.srddzGame.ddzPart.ActTipUI,Animation=laya.display.Animation;
	var AppConfig=Laya.AppConfig,Box=laya.ui.Box,Browser=laya.utils.Browser,Button=laya.ui.Button,CalculatePageUI$1=ui.srddzGame.CalculatePageUI;
	var CalculatePerItemUI$2=ui.srddzGame.calculate.item.CalculatePerItemUI,CalculatePerPageUI$1=ui.srddzGame.calculate.CalculatePerPageUI;
	var CalculateRoundPageUI=ui.srddzGame.calculate.CalculateRoundPageUI,Chat=modules.gameCommon.chat.Chat,ChatPage=modules.gameCommon.chat.ChatPage;
	var ClockPartUI$2=ui.srddzGame.ddzPart.ClockPartUI,CommonModule=common.CommonModule,Dictionary=laya.utils.Dictionary;
	var DipaiPartUI$1=ui.srddzGame.ddzPart.DipaiPartUI,Event=laya.events.Event,EventCenter=common.event.EventCenter;
	var GameContext=rb.framework.mvc.GameContext,GameTableUI$3=ui.srddzGame.GameTableUI,GiftItemUI=ui.gameCommon.items.GiftItemUI;
	var HallModule=hall.HallModule,Handler=laya.utils.Handler,Image=laya.ui.Image,Label=laya.ui.Label,LayerTypes=rb.framework.mvc.core.LayerTypes;
	var Message=net.Message,MessageManager=manager.MessageManager,Module=rb.framework.mvc.Module,ModuleDef=Laya.ModuleDef;
	var MovieClip=laya.ani.swf.MovieClip,NewDissolvePage=modules.gameCommon.view.NewDissolvePage,OtherHandlePartUI$2=ui.srddzGame.ddzPart.handlePart.OtherHandlePartUI;
	var OtherOutputPartUI$1=ui.srddzGame.ddzPart.outputPart.OtherOutputPartUI,OwnerHandlePartUI$2=ui.srddzGame.ddzPart.handlePart.OwnerHandlePartUI;
	var OwnerOutputPartUI$1=ui.srddzGame.ddzPart.outputPart.OwnerOutputPartUI,PiaoSelePartUI=ui.gameCommon.PiaoSelePartUI;
	var PlayerCtlPartUI$2=ui.srddzGame.ddzPart.PlayerCtlPartUI,PlayerInfoPageUI$3=ui.srddzGame.PlayerInfoPageUI;
	var PockerItemUI$2=ui.srddzGame.ddzPart.item.PockerItemUI,PockerPageUI$2=ui.srddzGame.PockerPageUI,PopBox=common.view.PopBox;
	var ProtoMessage=net.ProtoMessage,QuickUtils=Laya.QuickUtils,RecordView=hall.view.RecordView,ReplayControlView=modules.gameCommon.view.ReplayControlView;
	var SingletonError=rb.framework.errors.SingletonError,SoundManager=laya.media.SoundManager,SoundPlay=common.tools.SoundPlay;
	var Sprite=laya.display.Sprite,Stage=laya.display.Stage,TableInfoPageUI$3=ui.srddzGame.TableInfoPageUI,TextManager=manager.TextManager;
	var TimeManager=manager.TimeManager,TopHandlePartUI$1=ui.srddzGame.ddzPart.handlePart.TopHandlePartUI,Tween=laya.utils.Tween;
	var UIManager=manager.UIManager,UserData=Laya.UserData,UserInfoUI=ui.gameCommon.UserInfoUI,View=laya.ui.View;
	var WX=Laya.WX;
//class modules.srddzGame.srddzInerGame.model.data.FeijiData
var FeijiData$1=(function(){
	function FeijiData(){
		/**飞机的长度*/
		this.length=0;
		/**飞机的类型*/
		this.type=0;
		/**飞机的最大值*/
		this.bigValue=0;
	}

	__class(FeijiData,'modules.srddzGame.srddzInerGame.model.data.FeijiData',null,'FeijiData$1');
	FeijiData.getFeiji=function(jishuData){
		if(jishuData.danArr.length > 0 || jishuData.fourArr.length > 0 || jishuData.fiveArr.length > 0 || jishuData.sixArr.length >0 || jishuData.sevenArr.length > 0 || jishuData.eightArr.length > 0){
			return null;
		};
		var i=0;
		var retData;
		var tempJishuData=new JishuArrData$2();
		tempJishuData.clone(jishuData);
		return FeijiData.getFeijiWithNoFour(tempJishuData);
	}

	FeijiData.getFeijiWithNoFour=function(jishuData){
		if(jishuData.threeArr.length <2){
			return null;
		};
		var feijiData;
		var threeLian=JishuArrData$2.checkValuelian(jishuData.threeArr);
		var twoLian=false;
		var needOneTwo=UserData.needOneTwo;
		if(threeLian){
			if(jishuData.twoArr.length==0 && jishuData.threeArr.length > 1){
				feijiData=new FeijiData();
				feijiData.bigValue=jishuData.threeArr[jishuData.threeArr.length-1];
				feijiData.length=jishuData.threeArr.length;
				feijiData.type=0;
				return feijiData;
			}
			else if(jishuData.threeArr.length==jishuData.twoArr.length){
				twoLian=JishuArrData$2.checkValuelian(jishuData.twoArr);
				if(twoLian==false &&needOneTwo){
					var twoArr=jishuData.twoArr.concat();
					JishuArrData$2.conversValueArr(twoArr);
					twoLian=JishuArrData$2.checkValuelian(twoArr);
				}
				if(twoLian){
					feijiData=new FeijiData();
					feijiData.bigValue=jishuData.threeArr[jishuData.threeArr.length-1];
					feijiData.length=jishuData.threeArr.length;
					feijiData.type=1;
					return feijiData;
				}
			}
		}
		else if(needOneTwo){
			var threeArr=jishuData.threeArr.concat();
			JishuArrData$2.conversValueArr(threeArr);
			threeLian=JishuArrData$2.checkValuelian(threeArr);
			if(threeLian){
				if(jishuData.twoArr.length==0 && threeArr.length > 1){
					feijiData=new FeijiData();
					feijiData.bigValue=threeArr[threeArr.length-1];
					feijiData.length=threeArr.length;
					feijiData.type=0;
					return feijiData;
				}
				else if(jishuData.threeArr.length==jishuData.twoArr.length){
					twoLian=JishuArrData$2.checkValuelian(jishuData.twoArr);
					if(twoLian==false &&needOneTwo){
						var twoArr=jishuData.twoArr.concat();
						JishuArrData$2.conversValueArr(twoArr);
						twoLian=JishuArrData$2.checkValuelian(twoArr);
					}
					if(twoLian){
						feijiData=new FeijiData();
						feijiData.bigValue=threeArr[threeArr.length-1];
						feijiData.length=threeArr.length;
						feijiData.type=1;
						return feijiData;
					}
				}
			}
		}
		return null;
	}

	FeijiData.FEIJI_NON=0;
	FeijiData.FEIJI_DAI=1;
	return FeijiData;
})()


//class modules.srddzGame.srddzInerGame.model.data.JishuArrData
var JishuArrData$2=(function(){
	function JishuArrData(){
		this.valueArr=[];
		this.eightArr=[];
		this.sevenArr=[];
		this.sixArr=[];
		this.fiveArr=[];
		this.fourArr=[];
		this.threeArr=[];
		this.twoArr=[];
		this.danArr=[];
	}

	__class(JishuArrData,'modules.srddzGame.srddzInerGame.model.data.JishuArrData',null,'JishuArrData$2');
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
		var i=0;
		for(i=0;i<cards.length;i++){
			valuesArr.push(BasePocker$2.getV(cards[i]));
		}
		console.log("检测的牌值：：" ,valuesArr);
		jishuData.valueArr=valuesArr.concat();
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
		var typeA=BasePocker$2.getT(A);
		var typeB=BasePocker$2.getT(B);
		var valueA=BasePocker$2.getV(A);
		var valueB=BasePocker$2.getV(B);
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


//class modules.srddzGame.srddzInerGame.model.data.PaixingLogic
var PaixingLogic$2=(function(){
	function PaixingLogic(){}
	__class(PaixingLogic,'modules.srddzGame.srddzInerGame.model.data.PaixingLogic',null,'PaixingLogic$2');
	PaixingLogic.getPaixing=function(cards,jishuArr,needSort){
		(needSort===void 0)&& (needSort=true);
		if(needSort){
			cards.sort(PaixingLogic.compCardsFun);
		}
		if(jishuArr==null){
			jishuArr=JishuArrData$2.getJishuArrData(cards);
		}
		if(PaixingLogic.isDanzhang(cards)==true){
			return 1;
		}
		else if(PaixingLogic.isDuizi(cards)==true){
			return 2;
		}
		else if(PaixingLogic.isSan(cards,jishuArr)==true){
			return 3;
		}
		else if(PaixingLogic.isSanEr(cards,jishuArr)==true){
			return 4;
		}
		else if(SrddzGameModule.instance.gameContext.model.srddzMsgs.ACK_RoomInfo.Rule[3]==101 && PaixingLogic.isShunzi(cards,jishuArr)==true){
			return 6;
		}
		else if(PaixingLogic.isLiandui(cards,jishuArr)==true){
			return 5;
		}
		else if(PaixingLogic.isFeiji(cards,jishuArr)==true){
			return 7;
		}
		else if(PaixingLogic.isZhadan(cards)==true){
			return 8;
		}
		else if(PaixingLogic.isTianZha(cards)==true){
			return 9
		}
		return BasePocker$2.PAIXING_NON;
	}

	PaixingLogic.isDanzhang=function(cards){
		if(cards.length==1){
			return true;
		}
		return false;
	}

	PaixingLogic.isDuizi=function(cards){
		if(cards.length==2){
			if(BasePocker$2.getV(cards[0])==BasePocker$2.getV(cards[1])){
				return true;
			}
		}
		return false;
	}

	PaixingLogic.isSan=function(cards,jishuData){
		var i=0,len=cards.length;
		if(len==3){
			if(jishuData==null){
				jishuData=JishuArrData$2.getJishuArrData(cards);
			}
			if(jishuData.threeArr.length==1){
				return true;
			}
		}
		return false;
	}

	PaixingLogic.isSanEr=function(cards,jishuData){
		if(cards.length==5){
			if(jishuData==null){
				jishuData=JishuArrData$2.getJishuArrData(cards);
			}
			if(jishuData.threeArr.length==1 && jishuData.twoArr.length==1){
				return true;
			}
		}
		return false;
	}

	PaixingLogic.isLiandui=function(cards,jishuData){
		var i=0;
		var len=cards.length;
		if(len >=6 && len%2==0){
			if(jishuData==null){
				jishuData=JishuArrData$2.getJishuArrData(cards);
			}
			if(jishuData.fiveArr.length==0 && jishuData.sixArr.length==0 && jishuData.sevenArr.length==0 && jishuData.eightArr.length==0 && jishuData.fourArr.length==0 && jishuData.threeArr.length==0 && jishuData.twoArr.length >=3 && jishuData.danArr.length==0){
				var twoLian=false;
				twoLian=JishuArrData$2.checkValuelian(jishuData.twoArr);
				if(twoLian==false && UserData.needOneTwo){
					var twoArr=jishuData.twoArr.concat();
					JishuArrData$2.conversValueArr(twoArr);
					twoLian=JishuArrData$2.checkValuelian(twoArr);
				}
				if(twoLian){
					return true;
				}
			}
		}
		else{
			return false;
		}
		return false;
	}

	PaixingLogic.isShunzi=function(cards,jishuData){
		var i=0,len=cards.length;
		if(len < 5){
			return false;
		}
		else{
			if(jishuData==null){
				jishuData=JishuArrData$2.getJishuArrData(cards);
			}
			if(jishuData.fiveArr.length==0 && jishuData.sixArr.length==0 && jishuData.sevenArr.length==0 && jishuData.eightArr.length==0 && jishuData.fourArr.length==0 && jishuData.threeArr.length==0 && jishuData.twoArr.length==0 && jishuData.danArr.length >=5){
				var danArr=jishuData.danArr.concat();
				var idx=jishuData.danArr.indexOf(16);
				if(idx !=-1&& UserData.needOneTwo){
					JishuArrData$2.conversValueArr(danArr);
				}
				if(JishuArrData$2.checkValuelian(danArr)==true){
					return true;
				}
			}
		}
		return false;
	}

	PaixingLogic.isFeiji=function(cards,jishuData){
		if(cards.length < 6){
			return false;
		}
		if(jishuData==null){
			jishuData=JishuArrData$2.getJishuArrData(cards);
		};
		var feijiData=FeijiData$1.getFeiji(jishuData);
		if(feijiData !=null){
			return true;
		}
		return false;
	}

	PaixingLogic.isZhadan=function(cards){
		if(cards.length < 4){
			return false;
		};
		var i=0,len=cards.length;
		for(i=0;i<len-1;i++){
			if(BasePocker$2.getV(cards[i+1])!=BasePocker$2.getV(cards[i])){
				return false;
			}
		}
		return true;
	}

	PaixingLogic.isTianZha=function(cards){
		if(cards.length==4){
			for(var i=0;i<cards.length;i++){
				if(BasePocker$2.getT(cards[i])!=5){
					return false;
				}
			}
			return true;
		}
		return false;
	}

	PaixingLogic.compCardsFun=function(A,B){
		if(A==0 || B==0){
			return 0;
		};
		var typeA=BasePocker$2.getT(A);
		var typeB=BasePocker$2.getT(B);
		var valueA=BasePocker$2.getV(A);
		var valueB=BasePocker$2.getV(B);
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

	PaixingLogic.getBigThanWBaodao=function(fromCards,targetCards){
		var retArr=[];
		fromCards.sort(PaixingLogic.compCardsFun);
		targetCards.sort(PaixingLogic.compCardsFun);
		var fjishu=JishuArrData$2.getJishuArrData(fromCards);
		var tjishu=JishuArrData$2.getJishuArrData(targetCards);
		var tPaixing=PaixingLogic.getPaixing(targetCards,tjishu,false);
		var i=0;
		var valueArr=[];
		var tempV=0;
		var zhadan=[];
		if(tPaixing !=8 && tPaixing !=9){
			if(fjishu.sevenArr.length > 0){
				for(i=0;i<7;i++){
					valueArr.push(fjishu.sevenArr[0]);
				}
				retArr=PaixingLogic.getCardsFromValues(fromCards,valueArr);
			}
			else if(fjishu.eightArr.length > 0){
				for(i=0;i<8;i++){
					valueArr.push(fjishu.eightArr[0]);
				}
				retArr=PaixingLogic.getCardsFromValues(fromCards,valueArr);
			}
			else if(PaixingLogic.checkHaveTianZha(fjishu)==true){
				retArr=[551,551,552,552];
			}
		}
		else if(tPaixing !=9){
			if(tjishu.valueArr.length < 7){
				if(fjishu.sevenArr.length > 0){
					for(i=0;i<7;i++){
						valueArr.push(fjishu.sevenArr[0]);
					}
					retArr=PaixingLogic.getCardsFromValues(fromCards,valueArr);
				}
				else if(fjishu.eightArr.length > 0){
					for(i=0;i<8;i++){
						valueArr.push(fjishu.eightArr[0]);
					}
					retArr=PaixingLogic.getCardsFromValues(fromCards,valueArr);
				}
				else if(PaixingLogic.checkHaveTianZha(fjishu)==true){
					retArr=[551,551,552,552];
				}
			}
			else{
				zhadan=PaixingLogic.getBiggerZhaDan(fjishu,tjishu.valueArr[0],tjishu.valueArr.length);
				if(zhadan.length > 0){
					retArr=PaixingLogic.getCardsFromValues(fromCards,zhadan);
					return retArr;
				}
				else if(PaixingLogic.checkHaveTianZha(fjishu)==true){
					retArr=[551,551,552,552];
				}
			}
		}
		return retArr;
	}

	PaixingLogic.getBigThan=function(fromCards,targetCards){
		var retArr=[];
		if(targetCards.length==0){
			retArr.push(fromCards[0]);
			return retArr;
		}
		fromCards.sort(PaixingLogic.compCardsFun);
		targetCards.sort(PaixingLogic.compCardsFun);
		var tjishu=JishuArrData$2.getJishuArrData(targetCards);
		var tPaixing=PaixingLogic.getPaixing(targetCards,tjishu,false);
		var fjishu=JishuArrData$2.getJishuArrData(fromCards);
		var tempV=0;
		var i=0,j=0,idx=0;
		var lianLen=0;
		var tempArr;
		var zhadan;
		switch(tPaixing){
			case BasePocker$2.PAIXING_NON:
				alert("打出的牌型不合法！");
				return retArr;
				break ;
			case 1:
				tempV=tjishu.danArr[0];
				for(i=0;i<fjishu.danArr.length;i++){
					if(fjishu.danArr[i] > tempV){
						retArr=PaixingLogic.getCardsFromValues(fromCards,[fjishu.danArr[i]]);
						return retArr;
					}
				}
				for(i=0;i<fjishu.twoArr.length;i++){
					if(fjishu.twoArr[i] > tempV){
						retArr=PaixingLogic.getCardsFromValues(fromCards,[fjishu.twoArr[i]]);
						return retArr;
					}
				}
				for(i=0;i<fjishu.threeArr.length;i++){
					if(fjishu.threeArr[i] > tempV){
						retArr=PaixingLogic.getCardsFromValues(fromCards,[fjishu.threeArr[i]]);
						return retArr;
					}
				}
				zhadan=PaixingLogic.getBiggerZhaDan(fjishu);
				if(zhadan.length > 0){
					retArr=PaixingLogic.getCardsFromValues(fromCards,zhadan);
					return retArr;
				}
				return retArr;
				break ;
			case 2:
				tempV=tjishu.twoArr[0];
				for(i=0;i<fjishu.twoArr.length;i++){
					if(fjishu.twoArr[i] > tempV){
						retArr=PaixingLogic.getCardsFromValues(fromCards,[fjishu.twoArr[i],fjishu.twoArr[i]]);
						return retArr;
					}
				}
				for(i=0;i<fjishu.threeArr.length;i++){
					if(fjishu.threeArr[i] > tempV){
						retArr=PaixingLogic.getCardsFromValues(fromCards,[fjishu.threeArr[i],fjishu.threeArr[i]]);
						return retArr;
					}
				}
				zhadan=PaixingLogic.getBiggerZhaDan(fjishu);
				if(zhadan.length > 0){
					retArr=PaixingLogic.getCardsFromValues(fromCards,zhadan);
					return retArr;
				}
				return retArr;
				break ;
			case 3:
				tempV=tjishu.threeArr[0];
				for(i=0;i<fjishu.threeArr.length;i++){
					if(fjishu.threeArr[i] > tempV){
						retArr=PaixingLogic.getCardsFromValues(fromCards,[fjishu.threeArr[i],fjishu.threeArr[i],fjishu.threeArr[i]]);
						return retArr;
					}
				}
				zhadan=PaixingLogic.getBiggerZhaDan(fjishu);
				if(zhadan.length > 0){
					retArr=PaixingLogic.getCardsFromValues(fromCards,zhadan);
					return retArr;
				}
				if(PaixingLogic.checkHaveTianZha(fjishu)==true){
					retArr=[551,551,552,552];
				}
				return retArr;
				break ;
			case 4:
				tempV=tjishu.threeArr[0];
				for(i=0;i<fjishu.threeArr.length;i++){
					if(fjishu.threeArr[i] > tempV){
						if(fjishu.twoArr.length > 0){
							retArr=PaixingLogic.getCardsFromValues(fromCards,[fjishu.threeArr[i],fjishu.threeArr[i],fjishu.threeArr[i],fjishu.twoArr[0],fjishu.twoArr[0]]);
							return retArr;
						}
						else if(fjishu.threeArr.length > 1){
							if(i==0){
								retArr=PaixingLogic.getCardsFromValues(fromCards,[fjishu.threeArr[i],fjishu.threeArr[i],fjishu.threeArr[i],fjishu.threeArr[1],fjishu.threeArr[1]]);
								return retArr;
							}
							else{
								retArr=PaixingLogic.getCardsFromValues(fromCards,[fjishu.threeArr[i],fjishu.threeArr[i],fjishu.threeArr[i],fjishu.threeArr[0],fjishu.threeArr[0]]);
								return retArr;
							}
						}
					}
				}
				zhadan=PaixingLogic.getBiggerZhaDan(fjishu);
				if(zhadan.length > 0){
					retArr=PaixingLogic.getCardsFromValues(fromCards,zhadan);
					return retArr;
				}
				if(PaixingLogic.checkHaveTianZha(fjishu)==true){
					retArr=[551,551,552,552];
				}
				return retArr;
				break ;
			case 5:;
				var twoArr=tjishu.twoArr.concat();
				if(UserData.needOneTwo){
					if(twoArr.indexOf(16)!=-1){
						JishuArrData$2.conversValueArr(twoArr);
					}
				}
				tempV=twoArr[twoArr.length-1];
				lianLen=twoArr.length;
				var moreTwoArr=[];
				moreTwoArr=moreTwoArr.concat(fjishu.threeArr);
				moreTwoArr=moreTwoArr.concat(fjishu.twoArr);
				moreTwoArr.sort(PaixingLogic.compCardsFun);
				var cmoreTwoArr=moreTwoArr.concat();
				for(i=0;i<moreTwoArr.length;i++){
					if(moreTwoArr[i] < tempV-(lianLen-2)){
						moreTwoArr.splice(i,1);
						i--;
					}
				}
				if(moreTwoArr.length >=lianLen){
					tempArr=PaixingLogic.getFromVlauesLenThan(moreTwoArr,lianLen);
					if(tempArr !=null && tempArr.length > 0){
						tempArr=tempArr.concat(tempArr);
						tempArr.sort(PaixingLogic.compCardsFun);
						retArr=PaixingLogic.getCardsFromValues(fromCards,tempArr.reverse());
						return retArr;
					}
				}
				if(UserData.needOneTwo){
					moreOneArr=cmoreTwoArr.concat();
					JishuArrData$2.conversValueArr(moreTwoArr);
					for(i=0;i<moreTwoArr.length;i++){
						if(moreTwoArr[i] < tempV-(lianLen-2)){
							moreTwoArr.splice(i,1);
							i--;
						}
					}
					if(moreTwoArr.length >=lianLen){
						tempArr=PaixingLogic.getFromVlauesLenThan(moreTwoArr,lianLen);
						if(tempArr !=null && tempArr.length > 0){
							tempArr=tempArr.concat(tempArr);
							tempArr.sort(PaixingLogic.compCardsFun);
							retArr=PaixingLogic.getCardsFromValues(fromCards,tempArr.reverse());
							return retArr;
						}
					}
				}
				zhadan=PaixingLogic.getBiggerZhaDan(fjishu);
				if(zhadan.length > 0){
					retArr=PaixingLogic.getCardsFromValues(fromCards,zhadan);
					return retArr;
				}
				if(PaixingLogic.checkHaveTianZha(fjishu)==true){
					retArr=[551,551,552,552];
				}
				return retArr;
				break ;
			case 6:;
				var danArr=tjishu.danArr.concat();
				if(UserData.needOneTwo){
					if(danArr.indexOf(16)!=-1){
						JishuArrData$2.conversValueArr(danArr);
					}
				}
				tempV=danArr[danArr.length-1];
				lianLen=danArr.length;
				var moreOneArr=[];
				moreOneArr=moreOneArr.concat(fjishu.threeArr);
				moreOneArr=moreOneArr.concat(fjishu.twoArr);
				moreOneArr=moreOneArr.concat(fjishu.danArr);
				moreOneArr.sort(PaixingLogic.compCardsFun);
				var cmoreOneArr=moreOneArr.concat();
				for(i=0;i<moreOneArr.length;i++){
					if(moreOneArr[i] < tempV-(lianLen-2)){
						moreOneArr.splice(i,1);
						i--;
					}
				}
				if(moreOneArr.length >=lianLen){
					tempArr=PaixingLogic.getFromVlauesLenThan(moreOneArr,lianLen);
					if(tempArr !=null && tempArr.length > 0){
						retArr=PaixingLogic.getCardsFromValues(fromCards,tempArr.reverse());
						return retArr;
					}
				}
				if(UserData.needOneTwo){
					moreOneArr=cmoreOneArr.concat();
					JishuArrData$2.conversValueArr(moreOneArr);
					for(i=0;i<moreOneArr.length;i++){
						if(moreOneArr[i] < tempV-(lianLen-2)){
							moreOneArr.splice(i,1);
							i--;
						}
					}
					if(moreOneArr.length >=lianLen){
						tempArr=PaixingLogic.getFromVlauesLenThan(moreOneArr,lianLen);
						if(tempArr !=null && tempArr.length > 0){
							retArr=PaixingLogic.getCardsFromValues(fromCards,tempArr.reverse());
							return retArr;
						}
					}
				}
				zhadan=PaixingLogic.getBiggerZhaDan(fjishu);
				if(zhadan.length > 0){
					retArr=PaixingLogic.getCardsFromValues(fromCards,zhadan);
					return retArr;
				}
				if(PaixingLogic.checkHaveTianZha(fjishu)==true){
					retArr=[551,551,552,552];
				}
				return retArr;
				break ;
			case 7:;
				var feiji=FeijiData$1.getFeiji(tjishu);
				if(feiji==null){
					return retArr;
				};
				var threeArr=fjishu.threeArr.concat();
				var spliceArr=[];
				for(i=0;i<threeArr.length;i++){
					if(threeArr[i] < feiji.bigValue-(feiji.length-2)){
						spliceArr.push(threeArr[i]);
						threeArr.splice(i,1);
						i--;
					}
				}
				if(threeArr.length >=feiji.length){
					tempArr=PaixingLogic.getFromVlauesLenThan(threeArr,feiji.length);
					var ctempArr=tempArr.concat();
					for(i=0;i<threeArr.length;i++){
						idx=ctempArr.indexOf(threeArr[i]);
						if(idx !=-1){
							ctempArr.splice(idx,1);
							threeArr.splice(i,1);
							i--;
						}
					}
					spliceArr=spliceArr.concat(threeArr);
					if(tempArr !=null && tempArr.length >=feiji.length){
					switch(feiji.type){
						case 0:
							tempArr=tempArr.concat(tempArr).concat(tempArr);
							tempArr.sort(PaixingLogic.compCardsFun);
							retArr=PaixingLogic.getCardsFromValues(fromCards,tempArr);
							return retArr;
							break ;
						case 1:
							if(feiji.length <=spliceArr.length+fjishu.twoArr.length){
								tempArr=tempArr.concat(tempArr).concat(tempArr);
								tempArr.sort(PaixingLogic.compCardsFun);
								var ytuiArr=spliceArr.concat(fjishu.twoArr);
								ytuiArr.some(PaixingLogic.compCardsFun);
								var tuiDuiArr=PaixingLogic.getFromVlauesLenThan(ytuiArr,feiji.length);
								if(tuiDuiArr !=null && tuiDuiArr.length >=feiji.length){
									tuiDuiArr=tuiDuiArr.concat(tuiDuiArr);
									tuiDuiArr.sort(PaixingLogic.compCardsFun);
									retArr=PaixingLogic.getCardsFromValues(fromCards,tempArr.concat(tuiDuiArr));
								}
								else{
									if(UserData.needOneTwo){
										tempArr=tempArr.concat(tempArr).concat(tempArr);
										tempArr.sort(PaixingLogic.compCardsFun);
										var ytuiArr=spliceArr.concat(fjishu.twoArr);
										JishuArrData$2.conversValueArr(ytuiArr);
										var tuiDuiArr=PaixingLogic.getFromVlauesLenThan(ytuiArr,feiji.length);
										if(tuiDuiArr !=null && tuiDuiArr.length >=feiji.length){
											tuiDuiArr=tuiDuiArr.concat(tuiDuiArr);
											tuiDuiArr.sort(PaixingLogic.compCardsFun);
											retArr=PaixingLogic.getCardsFromValues(fromCards,tempArr.concat(tuiDuiArr));
										}
									}
								}
							}
							break ;
						}
				}
			}
			else if(UserData.needOneTwo){
				var threeArr=fjishu.threeArr.concat();
				JishuArrData$2.conversValueArr(threeArr);
				var spliceArr=[];
				for(i=0;i<threeArr.length;i++){
					if(threeArr[i] < feiji.bigValue-(feiji.length-2)){
						spliceArr.push(threeArr[i]);
						threeArr.splice(i,1);
						i--;
					}
				}
				if(threeArr.length >=feiji.length){
					tempArr=PaixingLogic.getFromVlauesLenThan(threeArr,feiji.length);
					var ctempArr=tempArr.concat();
					for(i=0;i<threeArr.length;i++){
						idx=ctempArr.indexOf(threeArr[i]);
						if(idx !=-1){
							ctempArr.splice(idx,1);
							threeArr.splice(i,1);
							i--;
						}
					}
					spliceArr=spliceArr.concat(threeArr);
					if(tempArr !=null && tempArr.length >=feiji.length){
						switch(feiji.type){
							case 0:
								tempArr=tempArr.concat(tempArr).concat(tempArr);
								tempArr.sort(PaixingLogic.compCardsFun);
								retArr=PaixingLogic.getCardsFromValues(fromCards,tempArr);
								return retArr;
								break ;
							case 1:
								if(feiji.length <=spliceArr.length+fjishu.twoArr.length){
									tempArr=tempArr.concat(tempArr).concat(tempArr);
									tempArr.sort(PaixingLogic.compCardsFun);
									var ytuiArr=spliceArr.concat(fjishu.twoArr);
									ytuiArr.some(PaixingLogic.compCardsFun);
									var tuiDuiArr=PaixingLogic.getFromVlauesLenThan(ytuiArr,feiji.length);
									if(tuiDuiArr !=null && tuiDuiArr.length >=feiji.length){
										tuiDuiArr=tuiDuiArr.concat(tuiDuiArr);
										tuiDuiArr.sort(PaixingLogic.compCardsFun);
										retArr=PaixingLogic.getCardsFromValues(fromCards,tempArr.concat(tuiDuiArr));
									}
									else{
										if(UserData.needOneTwo){
											tempArr=tempArr.concat(tempArr).concat(tempArr);
											tempArr.sort(PaixingLogic.compCardsFun);
											var ytuiArr=spliceArr.concat(fjishu.twoArr);
											JishuArrData$2.conversValueArr(ytuiArr);
											var tuiDuiArr=PaixingLogic.getFromVlauesLenThan(ytuiArr,feiji.length);
											if(tuiDuiArr !=null && tuiDuiArr.length >=feiji.length){
												tuiDuiArr=tuiDuiArr.concat(tuiDuiArr);
												tuiDuiArr.sort(PaixingLogic.compCardsFun);
												retArr=PaixingLogic.getCardsFromValues(fromCards,tempArr.concat(tuiDuiArr));
											}
										}
									}
								}
								break ;
							}
					}
				}
			}
			zhadan=PaixingLogic.getBiggerZhaDan(fjishu);
			if(zhadan.length > 0){
				retArr=PaixingLogic.getCardsFromValues(fromCards,zhadan);
				return retArr;
			}
			if(PaixingLogic.checkHaveTianZha(fjishu)==true){
				retArr=[551,551,552,552];
			}
			return retArr;
			break ;
			case 8:
			zhadan=PaixingLogic.getBiggerZhaDan(fjishu,tjishu.valueArr[0],tjishu.valueArr.length);
			if(zhadan.length > 0){
				retArr=PaixingLogic.getCardsFromValues(fromCards,zhadan);
				return retArr;
			}
			if(PaixingLogic.checkHaveTianZha(fjishu)==true){
				retArr=[551,551,552,552];
			}
			return retArr;
			break ;
			case 9:
			return retArr;
			break ;
		}
		return retArr;
	}

	PaixingLogic.getCardsFromValues=function(fromCards,values){
		var retArr=[];
		var tempArr=fromCards.concat();
		var i=0,j=0;
		for(i=0;i<values.length;i++){
			for(j=0;j<tempArr.length;j++){
				if(BasePocker$2.getV(tempArr[j])==values[i] || BasePocker$2.getVShang(tempArr[j])==values[i]){
					retArr.push(tempArr[j]);
					tempArr.splice(j,1);
					break ;
				}
			}
		}
		return retArr;
	}

	PaixingLogic.getBiggerZhaDan=function(jishu,value,len){
		(value===void 0)&& (value=-1);
		(len===void 0)&& (len=4);
		var retArr=[];
		if(len < 4){
			return retArr;
		};
		var i=0,j=0;
		if(len <=8){
			if(len <=7){
				if(len <=6){
					if(len <=5){
						if(len==4){
							if(value !=-1){
								for(i=0;i<jishu.fourArr.length;i++){
									if(jishu.fourArr[i] > value){
										for(j=0;j<4;j++){
											retArr.push(jishu.fourArr[i]);
										}
										return retArr;
									}
								}
							}
							else{
								if(jishu.fourArr.length > 0){
									for(i=0;i<4;i++){
										retArr.push(jishu.fourArr[0]);
									}
									return retArr;
								}
							}
						}
						if(len==5 && value !=-1){
							for(i=0;i<jishu.fiveArr.length;i++){
								if(jishu.fiveArr[i] > value){
									for(j=0;j<5;j++){
										retArr.push(jishu.fiveArr[i]);
									}
									return retArr;
								}
							}
						}
						else{
							if(jishu.fiveArr.length > 0){
								for(i=0;i<5;i++){
									retArr.push(jishu.fiveArr[0]);
								}
								return retArr;
							}
						}
					}
					if(len==6 && value !=-1){
						for(i=0;i<jishu.sixArr.length;i++){
							if(jishu.sixArr[i] > value){
								for(j=0;j<6;j++){
									retArr.push(jishu.sixArr[i]);
								}
								return retArr;
							}
						}
					}
					else{
						if(jishu.sixArr.length>0){
							for(i=0;i<6;i++){
								retArr.push(jishu.sixArr[0]);
							}
							return retArr;
						}
					}
				}
				if(len==7 && value !=-1){
					for(i=0;i<jishu.sevenArr.length;i++){
						if(jishu.sevenArr[i] > value){
							for(j=0;j<7;j++){
								retArr.push(jishu.sevenArr[i]);
							}
							return retArr;
						}
					}
				}
				else{
					if(jishu.sevenArr.length > 0){
						for(i=0;i<7;i++){
							retArr.push(jishu.sevenArr[0]);
						}
						return retArr;
					}
				}
			}
			if(len==8 && value !=-1){
				for(i=0;i<jishu.eightArr.length;i++){
					if(jishu.eightArr[i] > value){
						for(j=0;j<8;j++){
							retArr.push(jishu.eightArr[i]);
						}
						return retArr;
					}
				}
			}
			else{
				if(jishu.eightArr.length > 0){
					for(i=0;i<8;i++){
						retArr.push(jishu.eightArr[0]);
					}
					return retArr;
				}
			}
		}
		return retArr;
	}

	PaixingLogic.checkHaveTianZha=function(jishu){
		var twoArr=jishu.twoArr;
		var idxXW=twoArr.indexOf(51);
		var idxDW=twoArr.indexOf(52);
		if(idxXW !=-1 && idxDW !=-1){
			return true;
		}
		return false;
	}

	PaixingLogic.getFromVlauesLenThan=function(values,tLen){
		var retArr=[];
		var i=0;
		var num=0;
		for(i=0;i<values.length-1;i++){
			if(values[i+1]==values[i]+1){
				if(num==0){
					retArr.push(values[i],values[i+1]);
					num+=2;
				}
				else{
					retArr.push(values[i+1]);
					num+=1;
				}
			}
			else{
				num=0;
				retArr=[];
			}
			if(num==tLen){
				break ;
			}
		}
		if(retArr.length < tLen){
			retArr.length=0;
		}
		return retArr;
	}

	PaixingLogic.sortHandleCards=function(cards){
		cards.sort(PaixingLogic.compCardsFun);
	}

	PaixingLogic.sortOutputCards=function(cards){
		var retCards;
		PaixingLogic.sortHandleCards(cards);
		var jishuData=JishuArrData$2.getJishuArrData(cards);
		var paixing=PaixingLogic.getPaixing(cards);
		var valueCards=[];
		var tempValues=[];
		var i=0;
		var temp=0;
		var idx=0;
		switch(paixing){
			case 6:
				if(UserData.needOneTwo){
					if(jishuData.danArr.indexOf(16)!=-1){
						JishuArrData$2.conversValueArr(jishuData.danArr);
						cards=PaixingLogic.getCardsFromValues(cards,jishuData.danArr);
					}
				}
				break ;
			case 5:
				if(UserData.needOneTwo){
					if(jishuData.twoArr.indexOf(16)!=-1){
						JishuArrData$2.conversValueArr(jishuData.twoArr);
						for(i=0;i<jishuData.twoArr.length;i++){
							valueCards.push(jishuData.twoArr[i],jishuData.twoArr[i]);
						}
						cards=PaixingLogic.getCardsFromValues(cards,valueCards);
					}
				}
				break ;
			case 4:
				valueCards=[jishuData.threeArr[0],jishuData.threeArr[0],jishuData.threeArr[0],jishuData.twoArr[0],jishuData.twoArr[0]];
				cards=PaixingLogic.getCardsFromValues(cards,valueCards);
				break ;
			case 7:
				if(UserData.needOneTwo){
					if(jishuData.threeArr.indexOf(16)!=-1){
						JishuArrData$2.conversValueArr(jishuData.threeArr);
					}
					if(jishuData.twoArr.indexOf(16)!=-1){
						JishuArrData$2.conversValueArr(jishuData.twoArr);
					}
				}
				valueCards.length=0;
				for(i=0;i<jishuData.threeArr.length;i++){
					valueCards.push(jishuData.threeArr[i],jishuData.threeArr[i],jishuData.threeArr[i]);
				}
				for(i=0;i<jishuData.twoArr.length;i++){
					valueCards.push(jishuData.twoArr[i],jishuData.twoArr[i]);
				}
				cards=PaixingLogic.getCardsFromValues(cards,valueCards);
				break ;
			}
		return retCards=cards.concat();
	}

	PaixingLogic.getBaodaoNum=function(cards,jishuArr,needSort){
		(needSort===void 0)&& (needSort=true);
		if(needSort){
			cards.sort(PaixingLogic.compCardsFun);
		}
		if(jishuArr==null){
			jishuArr=JishuArrData$2.getJishuArrData(cards);
		};
		var baodaoNum=jishuArr.eightArr.length+jishuArr.sevenArr.length;
		if(PaixingLogic.checkHaveTianZha(jishuArr)==true){
			baodaoNum+=1;
		}
		return baodaoNum;
	}

	PaixingLogic.getBaodaoCards=function(cards,jishuArr,needSort){
		(needSort===void 0)&& (needSort=true);
		var retArr=[];
		var valueArr=[];
		if(needSort){
			cards.sort(PaixingLogic.compCardsFun);
		}
		if(jishuArr==null){
			jishuArr=JishuArrData$2.getJishuArrData(cards);
		};
		var i=0,j=0;;
		if(jishuArr.eightArr.length > 0){
			for(i=0;i<jishuArr.eightArr.length;i++){
				for(j=0;j<8;j++){
					valueArr.push(jishuArr.eightArr[i]);
				}
			}
		}
		if(jishuArr.sevenArr.length > 0){
			for(i=0;i<jishuArr.sevenArr.length;i++){
				for(j=0;j<7;j++){
					valueArr.push(jishuArr.sevenArr[i]);
				}
			}
		}
		if(PaixingLogic.checkHaveTianZha(jishuArr)==true){
			valueArr.push(51,51,52,52);
		}
		retArr=PaixingLogic.getCardsFromValues(cards,valueArr);
		return retArr;
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


//class modules.srddzGame.srddzInerGame.model.SrddzMsgs
var SrddzMsgs=(function(){
	function SrddzMsgs(){
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
		//上海斗地主独有的
		this.ACKBC_Srddz_Baodao=null;
		this.ACKBC_Srddz_StrictWin=null;
	}

	__class(SrddzMsgs,'modules.srddzGame.srddzInerGame.model.SrddzMsgs');
	return SrddzMsgs;
})()


//class modules.srddzGame.srddzInerGame.view.calculate.CalculatePerPart
var CalculatePerPart$2=(function(){
	function CalculatePerPart(skin){
		this._skin=null;
		this._items=__newvec(4,null);
		this._skin=skin;
		var i=0;
		var len=this._items.length;
		for(i=0;i<len;i++){
			this._items[i]=new CalculatePerItem$2(this._skin["item"+i]);
		}
		this._skin.hideBtn.on("click",this,this.onClickHideBtn);
		this._skin.readyBtn.on("click",this,this.onClickReadyBtn);
		this._skin.confirmBtn.on("click",this,this.onClickConfirmBtn);
		this._skin.closeBtn.on("click",this,this.onClickCloseBtn);
		this.reset();
	}

	__class(CalculatePerPart,'modules.srddzGame.srddzInerGame.view.calculate.CalculatePerPart',null,'CalculatePerPart$2');
	var __proto=CalculatePerPart.prototype;
	__proto.getPiaoSelePart=function(){
		return null;
	}

	// return _PiaoSelePart;
	__proto.onClickHideBtn=function(e){
		this._skin.visible=false;
		this.view.calculatePage.showPerShowBtn();
	}

	__proto.onClickReadyBtn=function(e){
		var obj={sid:UserData.SID};
		this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(210,obj));
		this.hide();
	}

	__proto.onClickConfirmBtn=function(e){
		console.log("点击了确定按钮，要跳到总的结算界面啦");
		this.view.calculatePage.reset();
		this.onConfirmEnd(0);
		return;
		QuickUtils.popMessageBox("房间已结束！","BTN_ENDGAME",this,this.onConfirmEnd);
	}

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

	__proto.onClickCloseBtn=function(e){
		this.hide();
	}

	__proto.timeOver=function(){
		this._skin.visible=true;
		this._skin.readyBtn.visible=false;
		this._skin.confirmBtn.visible=false;
		this._skin.readyImg.visible=false;
		this._skin.closeBtn.visible=false;
		if(this.model.isSelfSitDown){
			this._skin.confirmBtn.visible=true;
		}
		else{
			this._skin.confirmBtn.visible=true;
		}
	}

	__proto.hideReadyBtn=function(){}
	__proto.updateBtns=function(){
		if(UserData.isReplay){
			this._skin.hideBtn.alpha=0;
		}
		else{
			this._skin.hideBtn.alpha=1;
		}
		if(this.isShow==false || UserData.isReplay){
			this._skin.readyImg.visible=false;
			this._skin.readyBtn.visible=false;
			this._skin.confirmBtn.visible=false;
			return;
		}
		this._skin.readyBtn.visible=false;
		this._skin.confirmBtn.visible=false;
		this._skin.readyImg.visible=false;
		this._skin.closeBtn.visible=false;
		if(this.model.isSelfSitDown){
			if(this.model.srddzMsgs.ACKBC_Sddz_Total.Finished==undefined){
				this.model.srddzMsgs.ACKBC_Sddz_Total.Finished=false;
			}
			if(this.model.srddzMsgs.ACKBC_Sddz_Total.Finished==true){
				this._skin.confirmBtn.visible=true;
				if(AppConfig.autoPlay){
					this.onClickConfirmBtn(null);
				}
				}else{
				this._skin.readyBtn.visible=true;
				this._skin.readyImg.visible=true;
				if(AppConfig.autoPlay){
					var jiesuanObj=this.model.srddzMsgs.ACKBC_Sddz_Total;
					if(jiesuanObj.List[0].Score+jiesuanObj.List[1].Score+jiesuanObj.List[2].Score==0){
						this.onClickReadyBtn(null);
					}
				}
			}
		}
		else{
			if(this.model.srddzMsgs.ACKBC_Sddz_Total.Finished==true){
				this._skin.confirmBtn.visible=true;
			}
			else{
				this._skin.closeBtn.visible=true;
			}
		}
	}

	__proto.show=function(){
		this._skin.visible=true;
		this.updateBtns();
		var calData=this.model.srddzMsgs.ACKBC_Sddz_Total;
		var i=0;
		if(this.model.isLiu){
			for (i=0;i < this._items.length;i++){
				this._items[i].update(i,null,this.model.isLiu);
			}
		}
		else{
			var player;
			for (i=0;i < this._items.length;i++){
				this._items[i].update(i,calData.List[i],this.model.isLiu);
				player=this.model.playerByPos(i);
				if(UserData.Rule[4]==1){
					player.Coin=calData.List[i].TotalScore !=undefined ? calData.List[i].TotalScore :0;
				}
				player.score=calData.List[i].TotalScore !=undefined ? calData.List[i].TotalScore :0;
				console.log("player.score::"+player.score);
			}
			this.view.playerInfoPage.updatePlayerInfos(this.model.playerInfoVec,false);
			this.view.playerInfoPage.updateJiabei();
		}
	}

	//
	__proto.reset=function(){
		var i=0;
		var len=this._items.length;
		for(i=0;i<len;i++){
			this._items[i].reset();
		}
		this._skin.visible=false;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__getset(0,__proto,'isShow',function(){
		return this._skin.visible;
	});

	__getset(0,__proto,'model',function(){
		return SrddzGameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'controller',function(){
		return SrddzGameModule.instance.gameContext.controller;
	});

	__getset(0,__proto,'view',function(){
		return SrddzGameModule.instance.gameContext.view;
	});

	return CalculatePerPart;
})()


//class modules.srddzGame.srddzInerGame.view.calculate.CalculateRoundPart
var CalculateRoundPart$2=(function(){
	function CalculateRoundPart(skin){
		this._skin=null;
		this._skin=skin;
		this.reset();
	}

	__class(CalculateRoundPart,'modules.srddzGame.srddzInerGame.view.calculate.CalculateRoundPart',null,'CalculateRoundPart$2');
	var __proto=CalculateRoundPart.prototype;
	__proto.onClickShareBtn=function(e){}
	//WXLogicModel.shareScreenResult();
	__proto.onClickBackBtn=function(e){
		if(AppConfig.isNewHall){
			QuickUtils.gotoHall();
		}
		else{
			SrddzGameModule.instance.gameContext.controller.endGameGotoHall();
		}
	}

	/**显示并更新界面*/
	__proto.show=function(){}
	__proto.showGetTicketNum=function(nums){}
	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.reset=function(){
		this._skin.visible=false;
	}

	__getset(0,__proto,'model',function(){
		return SrddzGameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'view',function(){
		return SrddzGameModule.instance.gameContext.view;
	});

	return CalculateRoundPart;
})()


//class modules.srddzGame.srddzInerGame.view.calculate.item.CalculatePerItem
var CalculatePerItem$2=(function(){
	function CalculatePerItem(skin){
		this._skin=null;
		this.headImg=null;
		this.headw=0
		this.headh=0;
		this._skin=skin;
		this.init();
	}

	__class(CalculatePerItem,'modules.srddzGame.srddzInerGame.view.calculate.item.CalculatePerItem',null,'CalculatePerItem$2');
	var __proto=CalculatePerItem.prototype;
	__proto.init=function(){
		this.headImg=this._skin.headImg;
		this.headw=this.headImg.width;
		this.headh=this.headImg.height;
	}

	/**展示这一条数据*/
	__proto.update=function(pos,data,isLiu){
		(isLiu===void 0)&& (isLiu=false);
		var player=this.model.playerByPos(pos);
		if(player==null){
			player=this.model.playerByUid(this.model.beKickedPlayer[pos]);
		}
		if(player==null){
			this._skin.visible=false;
		}
		else{
			this._skin.visible=true;
			this._skin.nameTf.text=player.nickname;
			if(player.Icon !=""){
				var photo=new Sprite();
				photo.loadImage(player.Icon,0,0,this.headw,this.headh);
				this.headImg.addChild(photo);
			}
		}
		if(pos==this.model.dizhuPos){
			this._skin.dizhuImg.visible=true;
			if(data){
				this._skin.directImg.visible=this.model.isSeleStrictWin;
			}
			else{
				this._skin.directImg.visible=false;
			}
		}
		else{
			this._skin.dizhuImg.visible=false;
			this._skin.directImg.visible=false;
		}
		if(isLiu){
			this._skin.difenTf.text=""+0;
			this._skin.beishuTf.text=""+0;
			this._skin.zongfenTf.font=TextManager.NumberYellowFont;
			this._skin.zongfenTf.text=""+0;
			this._skin.directImg.visible=false;
			return;
		}
		if(data){
			this._skin.difenTf.text=data.Difen !=undefined ?""+data.Difen :""+0;
			this._skin.beishuTf.text=data.Beishu !=undefined ?""+data.Beishu :""+0;
			if(data.Score==undefined){
				data.Score=0;
			}
			if(data.Score > 0){
				this._skin.zongfenTf.font=TextManager.NumberYellowFont;
				this._skin.zongfenTf.text="+"+player.zongchengji;
				this._skin.zongfenTf.text="+"+data.Score;
			}
			else{
				this._skin.zongfenTf.font=TextManager.NumberBlueFont;
				this._skin.zongfenTf.text=data.Score;
			}
		}
	}

	// _skin.fanchunImg.visible=data.Fanchun;
	__proto.reset=function(){}
	__getset(0,__proto,'model',function(){
		return SrddzGameModule.instance.gameContext.model;
	});

	return CalculatePerItem;
})()


//class modules.srddzGame.srddzInerGame.view.CalculatePage
var CalculatePage$2=(function(){
	function CalculatePage(skin){
		this._perPage=null;
		this._roundPage=null;
		this._skin=null;
		this._skin=skin;
		this._perPage=new CalculatePerPart$2(this._skin.perPage);
		this._roundPage=new CalculateRoundPart$2(this._skin.roundPage);
		this.reset();
		this._skin.showBtn.on("click",this,this.showPerCal)
	}

	__class(CalculatePage,'modules.srddzGame.srddzInerGame.view.CalculatePage',null,'CalculatePage$2');
	var __proto=CalculatePage.prototype;
	__proto.showPerShowBtn=function(){
		this._skin.showBtn.visible=true;
	}

	__proto.showPerCal=function(){
		this._skin.perPage.visible=true;
		this._skin.showBtn.visible=false;
	}

	__proto.reset=function(){
		this._skin.visible=false;
		this._skin.showBtn.visible=false;
		this._perPage.reset();
		this._roundPage.reset();
	}

	__proto.showGetTicket=function(nums){}
	__proto.show=function(){
		if(UserData.isReplay){
			this.view.replayControlView.moveCalculate();
		}
		this._perPage.reset();
		this._roundPage.reset();
		this._skin.visible=true;
		this._perPage.show();
		CommonModule.instance.commonContext.view.timeWarView.hide();
	}

	__proto.gameTimeOver=function(){
		this._perPage.timeOver();
	}

	__getset(0,__proto,'perPage',function(){
		return this._perPage;
	});

	__getset(0,__proto,'view',function(){
		return SrddzGameModule.instance.gameContext.view;
	});

	__getset(0,__proto,'roundPage',function(){
		return this._roundPage;
	});

	__getset(0,__proto,'model',function(){
		return SrddzGameModule.instance.gameContext.model;
	});

	return CalculatePage;
})()


//class modules.srddzGame.srddzInerGame.view.PlayerInfoPage
var PlayerInfoPage$3=(function(){
	function PlayerInfoPage(skin){
		this._skin=null;
		this._bottom=null;
		this._right=null;
		this._top=null;
		this._left=null;
		this._PiaoSelePart=null;
		this._PosChairVec=[];
		this._skin=skin;
		this._skin.mouseThrough=true;
		this._bottom=new BasePlayerInfoItem$3(this._skin.playerInfo0);
		this._right=new BasePlayerInfoItem$3(this._skin.playerInfo1);
		this._top=new BasePlayerInfoItem$3(this._skin.playerInfo2);
		this._left=new BasePlayerInfoItem$3(this._skin.playerInfo3);
		this._PiaoSelePart=new PiaoSelePart$2(this._skin.piaoPart);
		this._skin.startBtn.visible=false;
		this._skin.leaveBtn.visible=false;
		this._skin.disbandBtn.visible=false;
		this._skin.startBtn.on("click",this,this.onClickStartBtn);
		this._skin.inviteBtn.on("click",this,this.onClickInviteBtn);
		this._skin.leaveBtn.on("click",this,this.onClickLeaveBtn);
		this._skin.disbandBtn.on("click",this,this.onClickDisbandBtn);
		this.allReset();
	}

	__class(PlayerInfoPage,'modules.srddzGame.srddzInerGame.view.PlayerInfoPage',null,'PlayerInfoPage$3');
	var __proto=PlayerInfoPage.prototype;
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

	/**更新离开解散按钮的状态*/
	__proto.updateLeaveDisbandBtns=function(){
		this._skin.leaveBtn.visible=false;
		this._skin.disbandBtn.visible=false;
		if(this.model.gameHasStarted==false){
			if(UserData.selfuid==this.model.roomOwnerUid){
				this._skin.disbandBtn.visible=true;
			}
			else{
				this._skin.leaveBtn.visible=true;
			}
		}
		else{
			this._skin.disbandBtn.visible=true;
		}
	}

	__proto.showStartBtn=function(isShow){
		(isShow===void 0)&& (isShow=true);
		this._skin.startBtn.visible=isShow;
	}

	/**游戏开始影藏所有按钮*/
	__proto.hideBtnsByGameStart=function(){
		this._skin.startBtn.visible=false;
		this._skin.inviteBtn.visible=false;
		this._PiaoSelePart.hide();
	}

	__proto.updateStartBtn=function(){
		this._skin.startBtn.visible=false;
	}

	/***/
	__proto.updateSitDownUpBtn=function(needJudge){
		(needJudge===void 0)&& (needJudge=true);
		if(needJudge){
			if(this.model.isSelfSitDown && this.model.isGameStart==false){
				CommonModule.instance.commonContext.view.functionOption.onClickBtn(true);
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
	__proto.showDizhuNM=function(){
		var i=0,len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].showDizhuNM(this.model.getChairPosByDir(i));
		}
	}

	/**更新玩家加倍*/
	__proto.updateJiabei=function(){
		var i=0,len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].updateJiabei(this.model.getChairPosByDir(i));
		}
	}

	__proto.hideDizhuNM=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].hideDizhuNM();
		}
	}

	__proto.hideReadyBtn=function(){}
	__proto.allReset=function(){
		this._bottom.reset();
		this._right.reset();
		this._top.reset();
		this._left.reset();
		this._PiaoSelePart.reset();
	}

	/**设置椅子数量*/
	__proto.setChairNum=function(num){
		(num===void 0)&& (num=4);
		this._PosChairVec.length=0;
		console.log("playerinfo setChairNum::"+num);
		switch(num){
			case 4:this._PosChairVec.push(this._bottom,this._right,this._top,this._left);
				this._bottom.dir=0;
				this._right.dir=1;
				this._top.dir=2;
				this._left.dir=3;
				break ;
			default :this._PosChairVec.push(this._bottom,this._right,this._top,this._left);
				this._bottom.dir=0;
				this._right.dir=1;
				this._top.dir=2;
				this._left.dir=3;
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
	}

	/**带漂reset*/
	__proto.havePiaoReset=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].reset(true);
		}
		this._PiaoSelePart.reset();
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

	/**根据一个数组来刷新玩家的信息*/
	__proto.updatePlayerInfos=function(vec,needResetPiao,needFlyImg){
		(needResetPiao===void 0)&& (needResetPiao=true);
		(needFlyImg===void 0)&& (needFlyImg=false);
		console.log("updatePlayerInfos ::"+vec.length);
		this.reset();
		if(needResetPiao){
			this._PiaoSelePart.reset();
		};
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

	// updateHua(vec[i].pos);
	__proto.updateHua=function(pos){
		if (pos==-1){
			return;
		};
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].updateHua(pos);
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

	/**更新亮牌状态*/
	__proto.updateTingImg=function(pos){
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].showTingImg();
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

	__getset(0,__proto,'model',function(){
		return SrddzGameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'controller',function(){
		return SrddzGameModule.instance.gameContext.controller;
	});

	return PlayerInfoPage;
})()


//class modules.srddzGame.srddzInerGame.view.playerInfoPart.BasePlayerInfoItem
var BasePlayerInfoItem$3=(function(){
	function BasePlayerInfoItem(skin){
		this.needPiao=false;
		this._skin=null;
		// public var huaTf:Label;
		this.zhenghuaBox=null;
		this.yehuaBox=null;
		this.huaTf_z=null;
		this.huaTf_y=null;
		this.huaImg_z=null;
		this.huaImg_y=null;
		this.headImg=null;
		this.nameTf=null;
		this.recordTf=null;
		this.readyImg=null;
		this.tingpaiImg=null;
		this.gangEff=null;
		this.tirenBtn=null;
		this.sitDownBtn=null;
		this.offlineTf=null;
		this.fenshuTf=null;
		this.voice=null;
		this.headw=0
		this.headh=0;
		this.dir=0;
		this.expressImg=null;
		this.expressMov=null;
		this.expressUrl="res/swfs/Emoticon_";
		/**游戏开始之前显示的打的漂图片*/
		this.piaoImg=null;
		this.playingPiaoImg=null;
		this.offlineimg=null;
		//
		this.gangAni=null;
		this._skin=skin;
		this.init();
	}

	__class(BasePlayerInfoItem,'modules.srddzGame.srddzInerGame.view.playerInfoPart.BasePlayerInfoItem',null,'BasePlayerInfoItem$3');
	var __proto=BasePlayerInfoItem.prototype;
	__proto.init=function(){
		this._skin.mouseThrough=true;
		this._skin["haveBox"].mouseThrough=true;
		this.zhenghuaBox=this._skin["zhenghuaBox"];
		this.yehuaBox=this._skin["yehuaBox"];
		this.huaTf_z=this._skin["huaTf_z"];
		this.huaTf_y=this._skin["huaTf_y"];
		this.huaImg_z=this._skin["huaZhenhua"];
		this.huaImg_y=this._skin["huaYehua"];
		this.zhenghuaBox.visible=false;
		this.yehuaBox.visible=false;
		this.huaTf_z.visible=true;
		this.huaTf_y.visible=true;
		this.huaImg_y.visible=false;
		this.huaImg_z.visible=true;
		this.offlineTf=this._skin["offlineTf"];
		this.offlineTf.overflow="visible";
		this.piaoImg=this._skin["piaoImg"];
		this.playingPiaoImg=this._skin["playingPiaoImg"];
		this.headImg=this._skin["headImg"];
		this.nameTf=this._skin["nameTf"];
		this.recordTf=this._skin["recordTf"];
		this.readyImg=this._skin["readyImg"];
		this.voice=this._skin["voice"];
		this.tingpaiImg=this._skin["mingpaiPic"];
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
		if (!UserData.isCanSitdown){
			return
		}
		if(this.model.isSelfSitDown){
			this.onConFirm(0);
			return;
		}
		else if(this.model.srddzMsgs.ACK_RoomInfo.RoundCount > 0){
			QuickUtils.popMessage("接替之前的玩家进行游戏不收费，祝您游戏愉快！");
			this.onConFirm(0);
			return;
		};
		var info=this.model.srddzMsgs.ACK_RoomInfo;
		var rule=info.Rule;
		var obj=AppConfig.getRule(rule[1]);
		var typeStr="";
		if(obj.type==0){
			typeStr="局数";
		}
		else{
			typeStr="时间";
		};
		var str="本游戏工具为收费软件，按游戏"+typeStr+"扣除房卡。坐下不扣钱，开始游戏后才会扣钱，开始游戏后不予退还。是否花费"+AppConfig.costRule[UserData.roomtype][rule[1]]/4+"房卡加入牌局？";
		QuickUtils.popMessageBox(str,"BTN_LABEL_QUEDINGQUXIAO",this,this.onConFirm,"提示","left");
	}

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
			this.gangEff.visible=true;
			this.gangAni.play(0,false);
			this.fenshuTf.color="#00ff00";
		}
		else{
			this.gangEff.visible=false;
			this.gangAni.stop();
			this.fenshuTf.color="#ff0000";
		}
		this.fenshuTf.visible=true;
		this.fenshuTf.text=record > 0 ? "+"+record :record+"";
		this.fenshuTf.y=104;
		Tween.to(this.fenshuTf,{y:64},2000,null,Handler.create(this,this.onFenshuEffComp),2);
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
			this.setPiaoValue(obj.piao);
			console.log("obj.piao::"+obj.piao);
			this.showPiaoImage(this.model.isGameStart);
		}
		else{
			this.readyImg.visible=false;
			this.hidePiaoImage();
		};
		var pos=this.model.getPlayerPosByUid(obj.uid);
		this.tingpaiImg.visible=false;
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
		UserInfoPage$3.instance.show(obj.uid,obj.ip,obj.Icon);
	}

	__proto.delayPhotoPhoto=function(photo,mask){}
	//photo.mask=mask;
	__proto.updateGolds=function(obj){
		this.recordTf.x=0;
		this.recordTf.y=1;
		var preScore=this.recordTf.text;
		this.recordTf.scaleX=this.recordTf.scaleY=0.6;
		this.recordTf.x=0;
		this.recordTf.y=-2;
		if(obj.score>=0){
			this.recordTf.font=TextManager.NumberYellowFont;
			this.recordTf.text=""+obj.score;
			if(obj.score/10<1){
				this.recordTf.x+=10+4
				}else if(obj.score/10<10){
				this.recordTf.x+=6+0
				}else if(obj.score/10<100){
				this.recordTf.x+=0+-2
				}else if(obj.score/10<1000){
				this.recordTf.x+=-6+-4
			}
			}else{
			this.recordTf.font=TextManager.NumberYellowFont;
			this.recordTf.text=obj.score+"";
			if(obj.score/10>-1){
				this.recordTf.x+=10+-8
				}else if(obj.score/10>-10){
				this.recordTf.x+=6+-10
				}else if(obj.score/10>-100){
				this.recordTf.x+=0+-12
				}else if(obj.score/10>-1000){
				this.recordTf.x+=-6+-16
			}
		}
		this.playGangEff(obj.score-preScore);
	}

	__proto.updateHua=function(pos){
		this.zhenghuaBox.visible=false;
		this.yehuaBox.visible=false;
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
		this.tingpaiImg.visible=false;
		this.gangEff.visible=false;
		this.fenshuTf.visible=false;
		if(needHuaHide){
			this.zhenghuaBox.visible=false;
			this.yehuaBox.visible=false;
		}
		this.piaoImg.visible=false;
		this.playingPiaoImg.visible=false;
		this._skin["notPiaoTf"].visible=false;
		this.tirenBtn.visible=false;
		this.voice.visible=false;
		this.voice["ani"].stop();
		this._skin["jiabeiImg"].visible=false;
		this.hideDizhuNM();
	}

	/**游戏开始之后，显示地主和农民*/
	__proto.showDizhuNM=function(pos){
		var imgae=this._skin["shenfenImg"];
		imgae.visible=true;
		if(pos==this.model.dizhuPos){
			imgae.skin="gameCommon/dizhu.png";
		}
		else{
			imgae.skin="gameCommon/nongming.png";
		}
	}

	__proto.hideDizhuNM=function(){
		this._skin["shenfenImg"].visible=false;
	}

	/**更新玩家加倍情况*/
	__proto.updateJiabei=function(pos){
		if(this.model.jiabeiVec[pos]==true){
			this._skin["jiabeiImg"].visible=true;
		}
		else{
			this._skin["jiabeiImg"].visible=false;
		}
	}

	__proto.hideReadySimbol=function(){
		this.readyImg.visible=false;
	}

	__proto.showTingImg=function(){
		this.tingpaiImg.visible=true;
	}

	//mingEffAni.play();
	__proto.showReady=function(){
		this.readyImg.visible=true;
	}

	/**设置显示漂的倍数*/
	__proto.setPiaoValue=function(value){
		if(this.needPiao){
		}
	}

	/**显示漂图标*/
	__proto.showPiaoImage=function(isInGame){
		if(this.needPiao){
			if(isInGame){
				this.playingPiaoImg.visible=true;
				this.piaoImg.visible=false;
			}
			else{
				this.playingPiaoImg.visible=false;
				this.piaoImg.visible=true;
			}
			this._skin["notPiaoTf"].visible=false;
		}
	}

	/**影藏漂图标*/
	__proto.hidePiaoImage=function(){
		if(this.needPiao){
			this.playingPiaoImg.visible=false;
			this.piaoImg.visible=false;
			this._skin["notPiaoTf"].visible=true;
		}
	}

	// }
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
	__proto.playFlyHeadImg=function(fromDir){
		var tweenTime=500;
		switch(this.dir){
			case 0:
			switch(fromDir){
				case 1:
					Tween.from(this._skin,{x:946,y:150},tweenTime);
					break ;
				case 2:
					Tween.from(this._skin,{x:199,y:47},tweenTime);
					break ;
				case 3:
					Tween.from(this._skin,{x:12,y:150},tweenTime);
					break ;
				}
			break ;
			case 1:
			switch(fromDir){
				case 0:
					Tween.from(this._skin,{x:12,y:378},tweenTime);
					break ;
				case 2:
					Tween.from(this._skin,{x:202,y:46},tweenTime);
					break ;
				case 3:
					Tween.from(this._skin,{x:12,y:150},tweenTime);
					break ;
				}
			break ;
			case 2:
			switch(fromDir){
				case 0:
					Tween.from(this._skin,{x:-116,y:324},tweenTime);
					break ;
				case 1:
					Tween.from(this._skin,{x:820,y:96},tweenTime);
					break ;
				case 3:
					Tween.from(this._skin,{x:-116,y:96},tweenTime);
					break ;
				}
			break ;
			case 3:
			switch(fromDir){
				case 0:
					Tween.from(this._skin,{x:12,y:378},tweenTime);
					break ;
				case 1:
					Tween.from(this._skin,{x:946,y:150},tweenTime);
					break ;
				case 2:
					Tween.from(this._skin,{x:199,y:47},tweenTime);
					break ;
				}
			break ;
		}
	}

	__getset(0,__proto,'model',function(){
		return SrddzGameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'controller',function(){
		return SrddzGameModule.instance.gameContext.controller;
	});

	return BasePlayerInfoItem;
})()


//class modules.srddzGame.srddzInerGame.view.playerInfoPart.GiftEff
var GiftEff$3=(function(){
	var SingleForcer;
	function GiftEff(forcer){
		this.expressUrl="res/swfs/";
		this.loadedArr=[];
		this._mcMap=new Dictionary();
	}

	__class(GiftEff,'modules.srddzGame.srddzInerGame.view.playerInfoPart.GiftEff',null,'GiftEff$3');
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

	__proto.showPockTypeEff=function(type,attach){
		(attach===void 0)&& (attach=false);
		var mcPath="";
		var soundPath="";
		switch(type){
			case 6:
				mcPath="res/swfs/pokerType/shunzi.swf";
				this.playAni(mcPath,-500,-150);
				break ;
			case 7:
				mcPath="";
				if(attach){
					mcPath="res/swfs/pokerType/feijichibang.swf";
					soundPath="pockerType/type_feijichibang";
				}
				else{
					mcPath="res/swfs/pokerType/feiji.swf";;
					soundPath="pockerType/type_feiji";
				}
				this.playAni(mcPath,-70,-200,soundPath);
				break ;
			case 8:
				mcPath="res/swfs/pokerType/zhadan.swf";
				this.playAni(mcPath,-70,-200,"pockerType/type_zhadan");
				break ;
			case 9:
				mcPath="res/swfs/pokerType/huojian.swf";
				this.playAni(mcPath,-70,-200,"pockerType/type_huojian");
				break ;
			default :break ;
			}
	}

	__proto.playAni=function(url,offsetX,offsetY,sound){
		(offsetX===void 0)&& (offsetX=0);
		(offsetY===void 0)&& (offsetY=0);
		(sound===void 0)&& (sound="");
		var mc=new MovieClip();
		mc.load(url,true);
		if(this.loadedArr.indexOf(mc.basePath)!=-1){
			this.onLoadedPockTypeMc(mc,"",0,offsetX,offsetY);
		}
		else{
			mc.on("loaded",this,this.onLoadedPockTypeMc,[mc,sound,0,offsetX,offsetY]);
		}
	}

	__proto.onLoaded=function(mc,fromDir,toDir,sound,sounddelay){
		if(this.loadedArr.indexOf(mc.basePath)==-1){
			this.loadedArr.push(mc.basePath);
		}
		mc.stop();
		UIManager.instance.popLayer.addChild(mc);
		switch(fromDir){
			case 0:
				mc.x=-57;
				mc.y=505;
				break ;
			case 1:
				mc.x=852;
				mc.y=41;
				break ;
			case 2:
				mc.x=412;
				mc.y=-51;
				break ;
			case 3:
				mc.x=-25;
				mc.y=40;
				break ;
			default :
				mc.x=820;
				mc.y=-50;
				break ;
			};
		var tX=0,tY=0;
		switch(toDir){
			case 0:
				tX=-57;
				tY=505;
				break ;
			case 1:
				tX=852;
				tY=41;
				break ;
			case 2:
				tX=412;
				tY=-51;
				break ;
			case 3:
				tX=-25;
				tY=40;
				break ;
			default :
				tX=820;
				tY=-50;
				break ;
			}
		Tween.to(mc,{x:tX,y:tY},400,null,new Handler(this,this.onCompeteTween,[mc,sound,sounddelay]));
	}

	__proto.onLoadedPockTypeMc=function(mc,sound,sounddelay,offsetX,offsetY){
		(offsetX===void 0)&& (offsetX=0);
		(offsetY===void 0)&& (offsetY=0);
		if(this.loadedArr.indexOf(mc.basePath)==-1){
			this.loadedArr.push(mc.basePath);
		}
		mc.stop();
		UIManager.instance.popLayer.addChild(mc);
		mc.x=offsetX;
		mc.y=200+offsetY;
		mc.playTo(0,mc.count-2,Handler.create(this,this.playEnd,[mc]));
		Laya.timer.once(3000,this,this.playEnd,[mc]);
		if(sounddelay==0){
			SoundPlay.playEffect(sound);
		}
		else{
			Laya.timer.once(sounddelay,this,this.playSound,[sound],false);
		}
	}

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


//class modules.srddzGame.srddzInerGame.view.playerInfoPart.PiaoSelePart
var PiaoSelePart$2=(function(){
	function PiaoSelePart(skin){
		this.needPiao=true;
		this.skin=null;
		this.curPiaoValue=0;
		this.piaoCheckBoxVec=__newvec(3,null);
		this.skin=skin;
		this.init();
	}

	__class(PiaoSelePart,'modules.srddzGame.srddzInerGame.view.playerInfoPart.PiaoSelePart',null,'PiaoSelePart$2');
	var __proto=PiaoSelePart.prototype;
	__proto.init=function(){
		var i=0,len=this.piaoCheckBoxVec.length;
		for(i=0;i<len;i++){
			this.piaoCheckBoxVec[i]=this.skin["piao"+i];
			this.piaoCheckBoxVec[i].on("click",this,this.onClickCheckBox,[i,i]);
		}
		this.seleIdx(0);
		this.hide();
	}

	__proto.onClickCheckBox=function(e,args){
		var idx=args;
		console.log("onClickCheckBox::"+args);
		this.seleIdx(idx);
	}

	__proto.seleIdx=function(idx){
		var i=0,len=this.piaoCheckBoxVec.length;
		for(i=0;i<len;i++){
			if(i==idx){
				this.piaoCheckBoxVec[i].selected=true;
			}
			else{
				this.piaoCheckBoxVec[i].selected=false;
			}
		}
		this.curPiaoValue=idx;
	}

	__proto.getCurPiaoValue=function(){
		return this.curPiaoValue;
	}

	__proto.reset=function(){
		this.seleIdx(0);
		if(UserData.roomtype==11){
			this.needPiao=true;
		}
		else{
			this.needPiao=false;
		}
	}

	__proto.show=function(){
		if(this.needPiao){
			this.skin.visible=true;
		}
		else{
			this.skin.visible=false;
		}
	}

	__proto.hide=function(){
		this.skin.visible=false;
	}

	return PiaoSelePart;
})()


//class modules.srddzGame.srddzInerGame.view.playerInfoPart.UserInfoPage
var UserInfoPage$3=(function(){
	var SingleForcer;
	function UserInfoPage(forcer){
		this.uid=0;
		this._skin=null;
		this._skin=new UserInfoUI();
		this._skin.giftList.itemRender=GiftItem$3;
		this._skin.giftList.spaceX=10;
		this._skin.giftList.selectEnable=true;
		this._skin.giftList.selectHandler=new Handler(this,this.onSelectRound);
		this._skin.giftList.renderHandler=new Handler(this,this.updateRoundItem);
		this._skin.giftList.dataSource=AppConfig.giftConfig;
		this._skin.giftList.refresh();
	}

	__class(UserInfoPage,'modules.srddzGame.srddzInerGame.view.playerInfoPart.UserInfoPage',null,'UserInfoPage$3');
	var __proto=UserInfoPage.prototype;
	__proto.show=function(uid,ip,icon){
		this.uid=uid;
		this._skin.idTf.text="ID: "+uid;
		this._skin.nickName.text=SrddzGameModule.instance.gameContext.model.playerByUid(uid).nickname;
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


//class modules.srddzGame.srddzInerGame.view.pockerPart.ActTipPart
var ActTipPart$1=(function(){
	function ActTipPart(b,r,t,l){
		this.bottom=null;
		this.right=null;
		this.top=null;
		this.left=null;
		this._PosChairVec=[];
		this.bottom=new BaseActTipItem$1(b);
		this.right=new BaseActTipItem$1(r);
		this.top=new BaseActTipItem$1(t);
		this.left=new BaseActTipItem$1(l);
	}

	__class(ActTipPart,'modules.srddzGame.srddzInerGame.view.pockerPart.ActTipPart',null,'ActTipPart$1');
	var __proto=ActTipPart.prototype;
	/**设置椅子数量*/
	__proto.setChairNum=function(num){
		(num===void 0)&& (num=4);
		this._PosChairVec.length=0;
		switch(num){
			case 4:this._PosChairVec.push(this.bottom,this.right,this.top,this.left);break ;
			}
	}

	/**显示操作*/
	__proto.showActTip=function(pos,type){
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].showActTip(type);
	}

	/**隐藏对应的操作*/
	__proto.hideActTip=function(pos){
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].hideAll();
	}

	/**隐藏加倍*/
	__proto.hideJiabei=function(){}
	/**隐藏所有操作*/
	__proto.hideAllActTip=function(){
		var i=0;
		for(i=0;i<this._PosChairVec.length;i++){
			this._PosChairVec[i].hideAll();
		}
	}

	__getset(0,__proto,'model',function(){
		return SrddzGameModule.instance.gameContext.model;
	});

	return ActTipPart;
})()


/**扑克牌基类*/
//class modules.srddzGame.srddzInerGame.view.pockerPart.card.BasePocker
var BasePocker$2=(function(){
	function BasePocker(skin){
		this.skin=null;
		/**-1表示没有状态*/
		this.state=-1;
		this.cardIdx=0;
		this.skin=skin;
		this.init();
	}

	__class(BasePocker,'modules.srddzGame.srddzInerGame.view.pockerPart.card.BasePocker',null,'BasePocker$2');
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

	/**是否是地主*/
	__proto.showDizhuImg=function(bool){
		this.skin.dizhuImg.visible=bool;
	}

	/**是否显示明牌*/
	__proto.showMingImg=function(bool){
		this.skin.mingImg.visible=bool;
	}

	/**重置*/
	__proto.reset=function(){
		this.hide();
		this.skin.backImg.visible=false;
		this.skin.valueImg.visible=false;
		this.skin.dizhuImg.visible=false;
		this.skin.shadowImg.visible=false;
		this.skin.mingImg.visible=false;
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
		return SrddzGameModule.instance.gameContext.view;
	});

	__getset(0,__proto,'model',function(){
		return SrddzGameModule.instance.gameContext.model;
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

	BasePocker.PAIXING_NON=-1;
	BasePocker.PAIXING_DAN=1;
	BasePocker.PAIXING_DUIZI=2;
	BasePocker.PAIXING_SAN=3;
	BasePocker.PAIXING_SANER=4;
	BasePocker.PAIXING_LIANDUI=5;
	BasePocker.PAIXING_SHUNZI=6;
	BasePocker.PAIXING_FEIJI=7;
	BasePocker.PAIXING_ZHADAN=8;
	BasePocker.PAIXING_TIANZHA=9;
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


//class modules.srddzGame.srddzInerGame.view.pockerPart.ClockPart
var ClockPart$2=(function(){
	function ClockPart(skin){
		this._leftTime=0;
		/**当前操作玩家的方向*/
		this._curHandPos=-1;
		this._skin=null;
		this._posChairVec=[];
		this._leftTfVec=[];
		this._skin=skin;
		this.init();
	}

	__class(ClockPart,'modules.srddzGame.srddzInerGame.view.pockerPart.ClockPart',null,'ClockPart$2');
	var __proto=ClockPart.prototype;
	__proto.init=function(){
		this.allReset();
	}

	__proto.allReset=function(){
		this._skin.visible=false;
	}

	/**设置椅子数量*/
	__proto.setChairNum=function(num){
		(num===void 0)&& (num=4);
		this._posChairVec.length=0;
		this._leftTfVec.length=0;
		switch(num){
			case 4:
				this._posChairVec.push(this._skin.pos0,this._skin.pos1,this._skin.pos2,this._skin.pos3);
				this._leftTfVec.push(this._skin.cutdownTf0,this._skin.cutdownTf1,this._skin.cutdownTf2,this._skin.cutdownTf3);
				break ;
			}
		this.reset();
	}

	__proto.showjiabei=function(leftTime){}
	/**通知显示倒计时*/
	__proto.noticeShowClock=function(pos,leftTime){
		this._skin.visible=true;
		this._curHandPos=pos;
		this.model.curHandlePos=pos;
		this._leftTime=leftTime;
		var dir=this.model.getChairDirByPos(pos);
		this._leftTfVec[dir].text=this._leftTime < 10 ? "0"+this._leftTime :this._leftTime+"";
		TimeManager.instance.timer.clear(this,this.onTime);
		TimeManager.instance.timer.loop(1000,this,this.onTime);
		this.showDir(dir);
	}

	__proto.showDir=function(dir){
		var i=0;
		var len=this._posChairVec.length;
		for(i=0;i<len;i++){
			if(i==dir){
				this._posChairVec[i].visible=true;
				this._leftTfVec[i].visible=true;
			}
			else{
				this._posChairVec[i].visible=false;
				this._leftTfVec[i].visible=false;
			}
		}
	}

	__proto.onTime=function(){
		if(ModuleDef.CurGameModule.inGame==false || this.model.isGameStart==false){
			this._leftTime=0;
			this.reset();
			TimeManager.instance.timer.clear(this,this.onTime);
			return;
		};
		var dir=this.model.getChairDirByPos(this._curHandPos);
		this._leftTime-=1;
		if(this._leftTime < 0){
			this._leftTime=10;
		}
		this._leftTfVec[dir].text=this._leftTime < 10 ? "0"+this._leftTime :this._leftTime+"";
		if(this._leftTime < 5){
		}
	}

	/**重置*/
	__proto.reset=function(){
		this._skin.visible=false;
		var i=0;
		var len=this._posChairVec.length;
		for(i=0;i<len;i++){
			this._posChairVec[i].visible=false;
			this._leftTfVec[i].text="00";
		}
	}

	__getset(0,__proto,'model',function(){
		return SrddzGameModule.instance.gameContext.model;
	});

	return ClockPart;
})()


//class modules.srddzGame.srddzInerGame.view.pockerPart.DipaiPart
var DipaiPart$1=(function(){
	function DipaiPart(skin){
		this._skin=null;
		this._pockers=__newvec(8,null);
		this._skin=skin;
		this.init();
	}

	__class(DipaiPart,'modules.srddzGame.srddzInerGame.view.pockerPart.DipaiPart',null,'DipaiPart$1');
	var __proto=DipaiPart.prototype;
	__proto.init=function(){
		var i=0;
		for(i=0;i<this._pockers.length;i++){
			this._pockers[i]=new OtherHandlePocker$2(this._skin["card"+i]);
		}
	}

	/**发完牌叫地主期间显示牌背面*/
	__proto.showBack=function(){
		var i=0;
		for(i=0;i<this._pockers.length;i++){
			this._pockers[i].back();
			this._pockers[i].show();
		}
	}

	__proto.showCards=function(cards){
		var i=0;
		for(i=0;i<this._pockers.length;i++){
			if(cards[i] !=0){
				this._pockers[i].setCardImg(cards[i]);
				this._pockers[i].down();
				this._pockers[i].show();
			}
			else{
				this._pockers[i].back();
				this._pockers[i].show();
			}
		}
	}

	__proto.reset=function(){
		var i=0;
		for(i=0;i<this._pockers.length;i++){
			this._pockers[i].reset();
		}
	}

	return DipaiPart;
})()


//class modules.srddzGame.srddzInerGame.view.pockerPart.HandleBtnsPart
var HandleBtnsPart$3=(function(){
	function HandleBtnsPart(skin){
		this.singleBtnW=183;
		this.gap=20;
		this._skin=null;
		this.state=-1;
		this._skin=skin;
		this.init();
	}

	__class(HandleBtnsPart,'modules.srddzGame.srddzInerGame.view.pockerPart.HandleBtnsPart',null,'HandleBtnsPart$3');
	var __proto=HandleBtnsPart.prototype;
	__proto.init=function(){
		this.addListener();
	}

	__proto.resetBox=function(){
		this._skin.jiaofenBox.visible=false;
		this._skin.baodaoBox.visible=false;
		this._skin.wayBox.visible=false;
		this._skin.ctlBox.visible=false;
		this._skin.jiabeiBox.visible=false;
	}

	/**显示叫地主（暂时只有叫分）*/
	__proto.showJiaodizhu=function(){
		if(this.model.isSelfSitDown==false){
			return;
		}
		this.resetBox();
		this._skin.jiaofenBox.visible=true;
		var num=0;
		this._skin.fen0Btn.visible=true;
		num+=1;
		if(this.model.srddzMsgs.ACK_RoomInfo.Rule[3]==102){
			this._skin.fen1Btn.visible=this.model.difen==0;
			if(this._skin.fen1Btn.visible){
				this._skin.fen1Btn.x=(this.singleBtnW+this.gap)*num;
				num+=1;
			}
		}
		this._skin.fen2Btn.visible=this.model.difen <=1;
		if(this._skin.fen2Btn.visible){
			this._skin.fen2Btn.x=(this.singleBtnW+this.gap)*num;
			num+=1;
		}
		this._skin.fen3Btn.visible=this.model.difen <=2;
		if(this._skin.fen3Btn.visible){
			this._skin.fen3Btn.x=(this.singleBtnW+this.gap)*num;
			num+=1;
		}
		this._skin.jiaofenBox.x=(this.singleBtnW+this.gap)*(4-num)/2;
		if(AppConfig.autoPlay){
			Laya.timer.once(80,this,this.onClickFenBtn,[3]);
		}
	}

	/**显示加倍*/
	__proto.showjiabei=function(){
		if(this.model.isSelfSitDown==false){
			return;
		}
		this.resetBox();
		this._skin.jiabeiBox.visible=true;
		var num=0;
		this._skin.jiabeiBtn.visible=true;
		num+=1;
		this._skin.bujiaBtn.visible=true;
		this._skin.bujiaBtn.x=(this.singleBtnW+this.gap)*num;
		num+=1;
		this._skin.jiabeiBox.x=(this.singleBtnW+this.gap)*(4-num)/2;
		if(AppConfig.autoPlay){
			Laya.timer.once(80,this,this.onClickJiaBtn,[false]);
		}
	}

	/**显示报到*/
	__proto.showBaodao=function(baodaoNum){
		if(this.model.isSelfSitDown==false){
			return;
		}
		this.resetBox();
		this._skin.baodaoBox.visible=true;
		var num=0;
		if(baodaoNum >=1){
			this._skin.baoBtn.visible=true;
			this._skin.baoBtn.x=(this.singleBtnW+this.gap)*num;
			num+=1;
		}
		this._skin.notbaoBtn.visible=true;
		this._skin.notbaoBtn.x=(this.singleBtnW+this.gap)*num;
		num+=1;
		this._skin.baodaoBox.x=(this.singleBtnW+this.gap)*(4-num)/2;
		if(AppConfig.autoPlay){
			Laya.timer.once(80,this,this.onClickBaoBtn,[0]);
		}
	}

	/**显示报到后选择哪种赢*/
	__proto.showWay=function(){
		if(this.model.isSelfSitDown==false){
			return;
		}
		this.resetBox();
		this._skin.wayBox.visible=true;
		var num=0;
		this._skin.normalBtn.visible=true;
		num+=1;
		this._skin.directBtn.visible=true;
		num+=1;
		this._skin.wayBox.x=(this.singleBtnW+this.gap)*(4-num)/2;
		if(AppConfig.autoPlay){
			Laya.timer.once(80,this,this.onClickWayBtn,[false]);
		}
	}

	/**要不起按钮后面再加上去*/
	__proto.showCtlBtns=function(){
		var _$this=this;
		if(this.model.isSelfSitDown==false){
			return;
		}
		this.resetBox();
		this._skin.ctlBox.visible=true;
		var num=0;
		this._skin.mingpaiBtn.visible=false;
		if(this.model.curOutputPos==-1 && this.model.dizhuPos==this.model.selfChairPos && this.model.mingpaiVec[this.model.selfChairPos]==false){
			this._skin.mingpaiBtn.visible=true;
			num+=1;
		}
		this._skin.buchuBtn.visible=false;
		this._skin.tishiBtn.visible=false;
		this._skin.chupaiBtn.visible=false;
		this._skin.buqiBtn.visible=false;
		if(this.model.curOutputPos !=-1 && this.model.curOutputPos !=this.model.selfChairPos){
			var cards=PaixingLogic$2.getBigThan(this.model.handleCards[this.model.selfChairPos],this.model.curOutputCards);
			if(cards.length > 0){
				this._skin.buchuBtn.visible=true;
				this._skin.buchuBtn.x=(this.singleBtnW+this.gap)*num;
				num+=1;
				this._skin.tishiBtn.visible=true;
				this._skin.tishiBtn.x=(this.singleBtnW+this.gap)*num;
				num+=1;
				this._skin.chupaiBtn.visible=true;
				this._skin.chupaiBtn.x=(this.singleBtnW+this.gap)*num;
				num+=1;
				if(AppConfig.autoPlay){
					Laya.timer.once(80,null,function(cards){
						var paixing=PaixingLogic$2.getPaixing(cards);
						var chupaiObj={Sid:UserData.SID,Type:paixing,Cards:cards};
						_$this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(1203,chupaiObj));
					},[cards]);
					this.reset();
				}
			}
			else{
				this._skin.buqiBtn.visible=true;
				this._skin.buqiBtn.x=(this.singleBtnW+this.gap)*num;
				num+=1;
				if(AppConfig.autoPlay){
					if(this._skin.buqiBtn.visible){
						this.onClickBuchuBtn();
					}
				}
			}
		}
		else{
			this._skin.chupaiBtn.visible=true;
			this._skin.chupaiBtn.x=(this.singleBtnW+this.gap)*num;
			num+=1;
			if(AppConfig.autoPlay){
				var card=this.model.handleCards[this.model.selfChairPos][0];
				Laya.timer.once(80,null,function(card){
					var paixing=1;
					var chupaiObj={Sid:UserData.SID,Type:paixing,Cards:[card]};
					_$this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(1203,chupaiObj));
				},[card]);
				this.reset();
			}
		}
		this._skin.ctlBox.x=(this.singleBtnW+this.gap)*(4-num)/2;
	}

	__proto.addListener=function(){
		this._skin.fen0Btn.on("click",this,this.onClickFenBtn,[-1]);
		this._skin.fen1Btn.on("click",this,this.onClickFenBtn,[1]);
		this._skin.fen2Btn.on("click",this,this.onClickFenBtn,[2]);
		this._skin.fen3Btn.on("click",this,this.onClickFenBtn,[3]);
		this._skin.jiabeiBtn.on("click",this,this.onClickJiaBtn,[true]);
		this._skin.bujiaBtn.on("click",this,this.onClickJiaBtn,[false]);
		this._skin.mingpaiBtn.on("click",this,this.onClickMingBtn);
		this._skin.buchuBtn.on("click",this,this.onClickBuchuBtn);
		this._skin.tishiBtn.on("click",this,this.onClickTishiBtn);
		this._skin.chupaiBtn.on("click",this,this.onClickChupaiBtn);
		this._skin.buqiBtn.on("click",this,this.onClickBuchuBtn);
		this._skin.baoBtn.on("click",this,this.onClickBaoBtn,[1]);
		this._skin.notbaoBtn.on("click",this,this.onClickBaoBtn,[0]);
		this._skin.normalBtn.on("click",this,this.onClickWayBtn,[0]);
		this._skin.directBtn.on("click",this,this.onClickWayBtn,[1]);
	}

	/**报到相关*/
	__proto.onClickBaoBtn=function(baodao,e){
		switch(baodao){
			case 0:;
				var jiaofenObj={Sid:UserData.SID,BaodaoNum:0,Cards:[]};
				var jiaofenObj={Sid:UserData.SID,BaodaoNum:baodaoNum,Cards:baodaoCards};
				this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(1205,jiaofenObj));
				break ;
			case 1:;
				var baodaoNum=this.model.getBaodaoNum();
				var baodaoCards=this.model.getBaodaoCards();
				var jiaofenObj={Sid:UserData.SID,BaodaoNum:baodaoNum,Cards:baodaoCards};
				this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(1205,jiaofenObj));
				break ;
			}
		this.reset();
	}

	/***/
	__proto.onClickWayBtn=function(strict,e){
		var isStrictWin=false;
		if(strict==0){
			isStrictWin=false;
		}
		else if(strict==1){
			isStrictWin=true;
		};
		var strictWinObj={Sid:UserData.SID,IsStrictWin:isStrictWin};
		this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(1206,strictWinObj));
		this.reset();
	}

	/**叫分相关*/
	__proto.onClickFenBtn=function(fen,e){
		var jiaofenObj={Sid:UserData.SID,Fen:fen};
		this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(1200,jiaofenObj));
		this.reset();
	}

	__proto.onClickJiaBtn=function(jiabei,e){
		var jiabeiObj={Sid:UserData.SID,Jiabei:jiabei};
		this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(1202,jiabeiObj));
		this.reset();
	}

	__proto.onClickMingBtn=function(e){
		var mingObj={Sid:UserData.SID};
		this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(1201,mingObj));
		this._skin.mingpaiBtn.visible=false;
	}

	//单独隐藏明牌按钮
	__proto.onClickBuchuBtn=function(e){
		var passObj={Sid:UserData.SID};
		this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(1204,passObj));
		this.view.srddzPage.handlePart.setSelfPockSele([]);
		this.reset();
	}

	__proto.onClickTishiBtn=function(e){
		e.stopPropagation();
		var cards;
		if(this.model.baodaoState !=0 && this.model.dizhuPos==this.model.selfChairPos){
			var handleCards=this.model.handleCards[this.model.selfChairPos].concat();
			PaixingLogic$2.cutArrInArr(this.model.baodaoCards,handleCards);
			cards=PaixingLogic$2.getBigThan(handleCards,this.model.curOutputCards);
			if(cards.length==0){
				cards=PaixingLogic$2.getBigThanWBaodao(this.model.baodaoCards,this.model.curOutputCards);
			}
		}
		else{
			cards=PaixingLogic$2.getBigThan(this.model.handleCards[this.model.selfChairPos],this.model.curOutputCards);
		}
		if(cards.length > 0){
			this.view.srddzPage.handlePart.setSelfPockSele(cards);
		}
		else{
		}
	}

	//onClickBuchuBtn();
	__proto.onClickChupaiBtn=function(e){
		var cards=this.view.srddzPage.handlePart.getSelfSelePockers();
		if(cards.length==0){
			SoundPlay.playEffect("audio_warning");
			QuickUtils.popMessage("你的出牌不能为空");
		};
		var paixing=PaixingLogic$2.getPaixing(cards);
		if(paixing==BasePocker$2.PAIXING_NON){
			SoundPlay.playEffect("audio_warning");
			QuickUtils.popMessage("你的牌型不合法");
			return;
		}
		if(paixing >=8 && this.model.selfChairPos !=this.model.dizhuPos){
			var jiaofen=this.model.jiaofenVec[this.model.selfChairPos];
			var curOutZhaNum=this.model.outZhadanNumVec[this.model.selfChairPos];
			if((jiaofen==-1 || jiaofen==1)&& curOutZhaNum >=1){
				SoundPlay.playEffect("audio_warning");
				QuickUtils.popMessage("你选择了不叫，只能出一个炸弹");
				return;
			}
			else if (jiaofen==2 && curOutZhaNum >=2){
				SoundPlay.playEffect("audio_warning");
				QuickUtils.popMessage("你选择了叫2分，只能出两个炸弹");
				return;
			}
		}
		if(this.model.baodaoState !=0 && this.model.dizhuPos==this.model.selfChairPos){
			var valid=true;
			var i=0;
			var idx=0;
			for(i=0;i<cards.length;i++){
				idx=this.model.baodaoCards.indexOf(cards[i]);
				if(idx !=-1){
					var tempV=BasePocker$2.getV(cards[i])
					var bJishu=JishuArrData$2.getJishuArrData(this.model.baodaoCards);
					if(bJishu.eightArr.indexOf(tempV)!=-1){
						if(cards.length==8 && paixing==8){
							valid=true;
						}
						else{
							valid=false;
						}
					}
					else if(bJishu.sevenArr.indexOf(tempV)!=-1){
						if(cards.length==7 && paixing==8){
							valid=true;
						}
						else{
							valid=false;
						}
					}
					else if(paixing==9){
						valid=true;
					}
					else{
						valid=false;
					}
					break ;
				}
			}
			if(valid==false){
				SoundPlay.playEffect("audio_warning");
				QuickUtils.popMessage("报到的牌必须要一起出");
				return;
			}
		};
		var chupaiObj;
		if(this.model.curOutputCards.length==0 || this.model.curOutputPos==this.model.selfChairPos){
			chupaiObj={Sid:UserData.SID,Type:paixing,Cards:cards};
			this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(1203,chupaiObj));
			this.reset();
		}
		else{
			var retArr=PaixingLogic$2.getBigThan(cards,this.model.curOutputCards);
			if(paixing==9 || paixing==8){
				if(retArr.length > 0){
					chupaiObj={Sid:UserData.SID,Type:paixing,Cards:cards};
					this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(1203,chupaiObj));
					this.reset();
				}
			}
			else if(retArr.length==cards.length){
				chupaiObj={Sid:UserData.SID,Type:paixing,Cards:cards};
				this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(1203,chupaiObj));
				this.reset();
			}
			else{
				SoundPlay.playEffect("audio_warning");
				QuickUtils.popMessage("你的出牌不能大于当前牌");
			}
		}
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.reset=function(){
		this.resetBox();
	}

	__getset(0,__proto,'model',function(){
		return SrddzGameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'visible',function(){
		return this._skin.visible;
	});

	__getset(0,__proto,'controller',function(){
		return SrddzGameModule.instance.gameContext.controller;
	});

	__getset(0,__proto,'view',function(){
		return SrddzGameModule.instance.gameContext.view;
	});

	return HandleBtnsPart;
})()


//class modules.srddzGame.srddzInerGame.view.pockerPart.HandlePart
var HandlePart$3=(function(){
	function HandlePart(b,r,t,l){
		this._bottom=null;
		this._right=null;
		this._top=null;
		this._left=null;
		this._PosChairVec=[];
		this._bottom=new BottomSingleHandlePart$3(b);
		this._right=new OtherSingleHandlePart$2(r);
		this._top=new OtherSingleHandlePart$2(t);
		this._left=new OtherSingleHandlePart$2(l);
		this.allReset();
	}

	__class(HandlePart,'modules.srddzGame.srddzInerGame.view.pockerPart.HandlePart',null,'HandlePart$3');
	var __proto=HandlePart.prototype;
	__proto.allReset=function(){
		this._bottom.reset();
		this._right.reset();
		this._top.reset();
		this._left.reset();
	}

	/**设置椅子数量*/
	__proto.setChairNum=function(num){
		(num===void 0)&& (num=4);
		this._PosChairVec.length=0;
		switch(num){
			case 4:this._PosChairVec.push(this._bottom,this._right,this._top,this._left);break ;
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
		return SrddzGameModule.instance.gameContext.model;
	});

	return HandlePart;
})()


//class modules.srddzGame.srddzInerGame.view.pockerPart.OutputPart
var OutputPart$2=(function(){
	function OutputPart(b,r,t,l){
		this._bottom=null;
		this._right=null;
		this._top=null;
		this._left=null;
		this._PosChairVec=[];
		this._bottom=new BottomSingleOutputPart$2(b);
		this._right=new RightSingleOutputPart$2(r);
		this._top=new BottomSingleOutputPart$2(t);
		this._left=new LeftSingleOutputPart$2(l);
		this.allReset();
	}

	__class(OutputPart,'modules.srddzGame.srddzInerGame.view.pockerPart.OutputPart',null,'OutputPart$2');
	var __proto=OutputPart.prototype;
	__proto.allReset=function(){
		this._bottom.reset();
		this._right.reset();
		this._top.reset();
		this._left.reset();
	}

	/**设置椅子数量*/
	__proto.setChairNum=function(num){
		(num===void 0)&& (num=4);
		this._PosChairVec.length=0;
		switch(num){
			case 4:this._PosChairVec.push(this._bottom,this._right,this._top,this._left);
				break ;
			}
	}

	/**显示牌*/
	__proto.showCards=function(cards,pos){
		if(cards.length==0){
			return;
		};
		var dir=this.model.getChairDirByPos(pos);
		var i=0,len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			if(i==dir){
				this._PosChairVec[i].showCards(cards);
			}
		}
	}

	/**隐藏牌*/
	__proto.hideCards=function(pos){
		var dir=this.model.getChairDirByPos(pos);
		var i=0,len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			if(i==dir){
				this._PosChairVec[i].hide();
			}
		}
	}

	/**重置*/
	__proto.reset=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].reset();
		}
	}

	__getset(0,__proto,'model',function(){
		return SrddzGameModule.instance.gameContext.model;
	});

	return OutputPart;
})()


//class modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.BaseActTipItem
var BaseActTipItem$1=(function(){
	function BaseActTipItem(skin){
		this._skin=null;
		this._skin=skin;
		this.init();
	}

	__class(BaseActTipItem,'modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.BaseActTipItem',null,'BaseActTipItem$1');
	var __proto=BaseActTipItem.prototype;
	__proto.init=function(){
		this.reset();
	}

	__proto.hideAll=function(){
		this.reset();
	}

	/***/
	__proto.showActTip=function(type){
		this.hideAll();
		switch(type){
			case 0:
				this._skin.bujiao.visible=true;
				break ;
			case 1:
				this._skin.dang1.visible=true;
				break ;
			case 2:
				this._skin.dang2.visible=true;
				break ;
			case 3:
				this._skin.dang3.visible=true;
				break ;
			case 4:
				this._skin.buchu.visible=true;
				break ;
			}
	}

	/**叫分完成以后要清除所有 加倍明牌选择完成以后要清除所有 */
	__proto.reset=function(){
		this._skin.bujiao.visible=false;
		this._skin.dang1.visible=false;
		this._skin.dang2.visible=false;
		this._skin.dang3.visible=false;
		this._skin.buchu.visible=false;
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.showEff=function(type){}
	BaseActTipItem.ACTTIP_BUJIAO=0;
	BaseActTipItem.ACTTIP_FEN1=1;
	BaseActTipItem.ACTTIP_FEN2=2;
	BaseActTipItem.ACTTIP_FEN3=3;
	BaseActTipItem.ACTTIP_BUCHU=4;
	BaseActTipItem.ACTTIP_JIABEI=5;
	BaseActTipItem.ACTTIP_BUJIABEI=6;
	return BaseActTipItem;
})()


//class modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.handlePart.BaseSingleHandlePart
var BaseSingleHandlePart$3=(function(){
	function BaseSingleHandlePart(skin){
		this.state=0;
		//玩家手里最多有20张牌
		this.skin=null;
		this._pockers=__newvec(33,null);
		this.skin=skin;
		this.init();
	}

	__class(BaseSingleHandlePart,'modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.handlePart.BaseSingleHandlePart',null,'BaseSingleHandlePart$3');
	var __proto=BaseSingleHandlePart.prototype;
	__proto.init=function(){}
	__proto.updateState=function(isMingPai){
		if(isMingPai==true){
			this.state=1;
		}
		else{
			this.state=0;
		}
	}

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

	__proto.hideAll=function(){
		var i=0;
		for(i=0;i<this._pockers.length;i++){
			this._pockers[i].hide();
		}
	}

	/**播放起牌动画*/
	__proto.playQipaiEff=function(){
		var i=0;
		var len=this._pockers.length;
		for(i=0;i<len;i++){
			this._pockers[i].skin.alpha=0;
			Laya.timer.frameOnce(i,this,this.onSingleQiEff,[i],false);
		}
	}

	__proto.onSingleQiEff=function(idx){
		Tween.to(this._pockers[idx].skin,{alpha:1},100);
	}

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
		return SrddzGameModule.instance.gameContext.model;
	});

	BaseSingleHandlePart.STATE_NOMAL=0;
	BaseSingleHandlePart.STATE_MINGPAI=1;
	return BaseSingleHandlePart;
})()


//class modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.outputPart.BaseSingleOutputPart
var BaseSingleOutputPart$2=(function(){
	function BaseSingleOutputPart(skin){
		this.skin=null;
		this._pockers=__newvec(32,null);
		this.skin=skin;
		this.init();
	}

	__class(BaseSingleOutputPart,'modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.outputPart.BaseSingleOutputPart',null,'BaseSingleOutputPart$2');
	var __proto=BaseSingleOutputPart.prototype;
	__proto.init=function(){
		var i=0,len=this._pockers.length;
		for(i=0;i<len;i++){
			this._pockers[i]=new BasePocker$2(this.skin["card"+i]);
		}
		this.hide();
	}

	__proto.showCards=function(cards){}
	__proto.show=function(){
		this.skin.visible=true;
	}

	__proto.hide=function(){
		this.skin.visible=false;
	}

	__proto.hideAll=function(){
		var i=0;
		for(i=0;i<this._pockers.length;i++){
			this._pockers[i].hide();
		}
	}

	/**重置*/
	__proto.reset=function(){
		this.hide();
		var i=0;
		for(i=0;i<this._pockers.length;i++){
			this._pockers[i].reset();
			this._pockers[i].down();
		}
	}

	__getset(0,__proto,'visible',function(){
		return this.skin.visible;
	});

	__getset(0,__proto,'model',function(){
		return SrddzGameModule.instance.gameContext.model;
	});

	return BaseSingleOutputPart;
})()


//class modules.srddzGame.srddzInerGame.view.SrddzPage
var SrddzPage=(function(){
	function SrddzPage(skin){
		this._skin=null;
		this.handlePart=null;
		this.outputPart=null;
		this.handleBtns=null;
		this.dipaiPart=null;
		this.clockPart=null;
		this.actTipPart=null;
		if(skin){
			this._skin=skin;
			this._skin.mouseThrough=true;
			this.handlePart=new HandlePart$3(this._skin.handlePart0,this._skin.handlePart1,this._skin.handlePart2,this._skin.handlePart3);
			this.outputPart=new OutputPart$2(this._skin.outputPart0,this._skin.outputPart1,this._skin.outputPart2,this._skin.outputPart3);
			this.handleBtns=new HandleBtnsPart$3(this._skin.ctlPart);
			this.dipaiPart=new DipaiPart$1(this._skin.dipaiPart);
			this.clockPart=new ClockPart$2(this._skin.clockPart);
			this.actTipPart=new ActTipPart$1(this._skin.actTip0,this._skin.actTip1,this._skin.actTip2,this._skin.actTip3);
		}
	}

	__class(SrddzPage,'modules.srddzGame.srddzInerGame.view.SrddzPage');
	var __proto=SrddzPage.prototype;
	__proto.setChairNum=function(num){
		(num===void 0)&& (num=4);
		num=4;
		this.handlePart.setChairNum(num);
		this.outputPart.setChairNum(num);
		this.clockPart.setChairNum(num);
		this.actTipPart.setChairNum(num);
	}

	__proto.reset=function(){
		this.handlePart.reset();
		this.outputPart.reset();
		this.handleBtns.reset();
		this.clockPart.reset();
		this.dipaiPart.reset();
		this.actTipPart.hideAllActTip();
	}

	__getset(0,__proto,'skin',function(){
		return this._skin;
	});

	return SrddzPage;
})()


//class modules.srddzGame.srddzInerGame.view.TableInfoPage
var TableInfoPage$3=(function(){
	function TableInfoPage(skin){
		this._skin=null;
		this._PowerBarOrignalW=NaN;
		this._infosimbol=null;
		this._skin=skin;
		this._infosimbol=this._skin.infoSImg;
		this._infosimbol.visible=false;
		skin.mouseThrough=true;
		this._skin.setBtn.on("click",this,this.onClickSetBtn);
		this._skin.scoreList.on("click",this,this.onClickScoreListBtn)
		this._skin.infoListBtn.on("click",this,this.onClickInfoListBtn);
		this._skin.helpBtn.on("click",this,this.onClickHelpBtn);
		EventCenter.instance.on("COMMON_INFOLIST_NOTICE",this,this.onGotInfo);
	}

	__class(TableInfoPage,'modules.srddzGame.srddzInerGame.view.TableInfoPage',null,'TableInfoPage$3');
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

	/**更新底分*/
	__proto.updateDifen=function(){
		this._skin.difenTf.text=this.model.difen+"档";
	}

	/**更新倍数*/
	__proto.updateBeishu=function(){
		this._skin.beishuTf.text=this.model.beishu+"倍";
	}

	/**更新游戏状态*/
	__proto.updatePlayState=function(){
		if(this.model.isHuang==true){
			this._skin.huangfanImg.skin="srddzGame/icon_huang.png";
		}
		else{
			this._skin.huangfanImg.skin="srddzGame/icon_huang0.png";
		}
		if(this.model.dizhuPos==-1){
			this._skin.tanImg.skin="srddzGame/icon_tan0.png";
		}
		else{
			if(this.model.mingpaiVec[this.model.dizhuPos]==true){
				this._skin.tanImg.skin="srddzGame/icon_tan.png";
			}
			else{
				this._skin.tanImg.skin="srddzGame/icon_tan0.png";
			}
		}
		if(this.model.isTouliao==true){
			this._skin.touImg.skin="srddzGame/icon_tou.png";
		}
		else{
			this._skin.touImg.skin="srddzGame/icon_tou0.png";
		}
		if(this.model.isMingW==true){
			this._skin.wangImg.skin="srddzGame/icon_wang.png";
		}
		else{
			this._skin.wangImg.skin="srddzGame/icon_wang0.png";
		}
		this._skin.baoImg.visible=false;
		this._skin.shBaoImg.visible=false;
		switch(this.model.baodaoState){
			case 0:
				this._skin.baoImg.visible=true;
				this._skin.baoImg.skin="srddzGame/icon_bao0.png";
				break ;
			case 1:
				this._skin.baoImg.visible=true;
				this._skin.baoImg.skin="srddzGame/icon_bao.png";
				break ;
			case 2:
				this._skin.shBaoImg.visible=true;
				break ;
			}
	}

	__proto.onClickSetBtn=function(e){
		CommonModule.instance.commonContext.view.settingView.showOrHide();
	}

	// CommonModule.instance.commonContext.view.functionOption.showOrHide(-350,0);
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
		return SrddzGameModule.instance.gameContext.model;
	});

	return TableInfoPage;
})()


//class modules.srddzGame.SrddzGameModule extends rb.framework.mvc.Module
var SrddzGameModule=(function(_super){
	function SrddzGameModule(){
		this.needResize=true;
		this._main=null;
		this._gameContext=null;
		this._mainContext=null;
		SrddzGameModule.__super.call(this);
		if (SrddzGameModule._instance !=null){
			throw (new SingletonError(this));
		}
		SrddzGameModule._instance=this;
	}

	__class(SrddzGameModule,'modules.srddzGame.SrddzGameModule',_super);
	var __proto=SrddzGameModule.prototype;
	__proto.startup=function(){
		if(this._mainContext==null){
			this._mainContext=new GameContext("srddzGameMainmain",this);
			this._main=new SrddzMainContext("srddzGameMain",this,this._mainContext);
			this._gameContext=new SrddzContext("srddzGame",this,this._main);
		}
		this.switchState(this._mainContext);
	}

	__proto.stopGame=function(gotoHall,needClear){
		(gotoHall===void 0)&& (gotoHall=true);
		(needClear===void 0)&& (needClear=false);
		if(needClear){
			this._gameContext.controller.clear();
		}
		SrddzGameModule.inGame=false;
		SrddzGameModule.isSettlement=false;
		this.switchState(this._mainContext);
		if(gotoHall){
			this.inHallResize();
			HallModule.instance.gotoHall();
		}
	}

	__proto.startGame=function(){
		Browser.window.document.title=AppConfig.nameTitle+"四人斗地主";
		if(SrddzGameModule.inGame==true){
			return;
		}
		HallModule.instance.goEmpty();
		SrddzGameModule.inGame=true;
		CommonModule.instance.gotoCommonContext();
		this.switchState(this.gameContext);
		this.inGameResize();
		RecordView.gameName="四人斗地主";
		WX.onMenuShareTimeline(UserData.nickname+"-"+AppConfig.nameTitle+"四人斗地主("+AppConfig.costRule[UserData.roomtype+""][UserData.Rule[3]]+")【房间号："+UserData.roomid+"】",UserData.roomid+"--"+UserData.uniqueCode);
		WX.onMenuShareAppMessage(UserData.nickname+"-"+AppConfig.nameTitle+"四人斗地主("+AppConfig.costRule[UserData.roomtype+""][UserData.Rule[3]]+")【房间号："+UserData.roomid+"】","房主创建了四人斗地主 【房间号:"+UserData.roomid+"】"+AppConfig.getRule(UserData.Rule[1]).desc+"",UserData.roomid+"--"+UserData.uniqueCode);
		console.log("startSrddzGame...........");
	}

	__proto.inGameResize=function(isFirst){
		(isFirst===void 0)&& (isFirst=true);
		if(QuickUtils.sysem()!="windows"){
			Laya.stage.screenMode="horizontal";
		}
		Laya.stage.size(1038,640);
		modules.srddzGame.SrddzGameModule.instance.gameContext.view.gui.visible=false;
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
				modules.srddzGame.SrddzGameModule.instance.gameContext.view.gui.visible=true;
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

	__getset(1,SrddzGameModule,'instance',function(){
		if (SrddzGameModule._instance==null){
			SrddzGameModule._instance=new SrddzGameModule();
		}
		return SrddzGameModule._instance;
	},rb.framework.mvc.Module._$SET_instance);

	SrddzGameModule.inGame=false;
	SrddzGameModule.isPauseGameQueue=false;
	SrddzGameModule.isSettlement=false;
	SrddzGameModule._instance=null;
	return SrddzGameModule;
})(Module)


//class modules.srddzGame.controller.SrddzMainController extends rb.framework.mvc.AbstractLayer
var SrddzMainController=(function(_super){
	function SrddzMainController(){
		SrddzMainController.__super.call(this);
	}

	__class(SrddzMainController,'modules.srddzGame.controller.SrddzMainController',_super);
	var __proto=SrddzMainController.prototype;
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
		if(SrddzGameModule.isPauseGameQueue==true){
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
				SrddzGameModule.instance.gameContext.controller.ACKBC_Into_Room(body);
				break ;
			case 607:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Sitdown.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACKBC_Sitdown(body);
				break ;
			case 608:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Standup.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACKBC_Standup(body);
				break ;
			case 520:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACK_RoomInfo.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACK_RoomInfo(body);
				break ;
			case 525:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACK_Room_User.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACK_Room_User(body);
				break ;
			case 1506:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Sddz_Start.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACKBC_Sddz_Start(body);
				break ;
			case 615:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACK_User_SeatCard.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACK_User_SeatCard(body);
				break ;
			case 1508:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Sddz_JiaoDizhu.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACKBC_Sddz_JiaoDizhu(body);
				break ;
			case 1509:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Sddz_Mingpai.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACKBC_Sddz_Mingpai(body);
				break ;
			case 1510:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Sddz_Jiabei.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACKBC_Sddz_Jiabei(body);
				break ;
			case 1511:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Srddz_Baodao.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACKBC_Srddz_Baodao(body);
				break ;
			case 1512:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Srddz_StrictWin.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACKBC_Srddz_StrictWin(body);
				break ;
			case 700:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_CurPlayer.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACKBC_CurPlayer(body);
				break ;
			case 1500:
				if(UserData.isReplay){
				}
				else{
					body=AppConfig.proto.ACKBC_Sddz_Jiaofen.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACKBC_Sddz_Jiaofen(body);
				break ;
			case 1501:
				if(UserData.isReplay){
				}
				else{
					body=AppConfig.proto.ACKBC_Sddz_Dizhu.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACKBC_Sddz_Dizhu(body);
				break ;
			case 1507:
				if(UserData.isReplay){
					body={};
					var arr=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Sddz_Chupai.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACKBC_Sddz_Chupai(body);
				break ;
			case 600:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Ready.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACKBC_Ready(body);
				break ;
			case 580:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Exit_Room.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACKBC_Exit_Room(body);
				break ;
			case 900:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.NotifyStartGame.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.NotifyStartGame(body);
				break ;
			case 880:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_SendMsg.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.view.onRecChat(body);
				break ;
			case 1503:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Sddz_End.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACKBC_Sddz_End(body);
				break ;
			case 1505:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Sddz_Card_Init.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACKBC_Sddz_Card_Init(body);
				break ;
			case 1504:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Sddz_Total.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACKBC_Sddz_Total(body);
				break ;
			case 920:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.TotalSummary.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.NOTIFY_Summary(body);
				break ;
			case 800:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.AckDisband.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.AckDisband(body);
				break ;
			case 940:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.NotifyDisband.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.NotifyDisband(body);
				break ;
			case 960:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.NotifyUserState.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.NotifyUserState(body);
				break ;
			case 972:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.NotifyDestoryRoom.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.NotifyDestoryRoom(body);
				break ;
			case 971:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.NotifyKick.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.NotifyKick(body);
				break ;
			case 980:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.KickResponse.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.KickResponse(body);
				break ;
			case 1000:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.MSG_ACK_Gift.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.MSG_ACK_Gift(body);
				break ;
			case 1502:
				if(UserData.isReplay){
					body=msg.body;
					console.log("Message.Pass",body);
				}
				else{
					body=AppConfig.proto.ACKBC_Sddz_Pass.decode(msg.params[0]);
				}
				SrddzGameModule.instance.gameContext.controller.ACKBC_Sddz_Pass(body);
				break ;
			case "":
				break ;
			case "":
				break ;
			}
		if(UserData.isReplay){
		}
	}

	return SrddzMainController;
})(AbstractLayer)


/**四人斗地主*/
//class modules.srddzGame.srddzInerGame.controller.SrddzController extends rb.framework.mvc.AbstractLayer
var SrddzController=(function(_super){
	function SrddzController(){
		//
		this.pop=null;
		this.dissolvePage=null;
		SrddzController.__super.call(this);
		this.setType(2);
	}

	__class(SrddzController,'modules.srddzGame.srddzInerGame.controller.SrddzController',_super);
	var __proto=SrddzController.prototype;
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
		this.view.tableInfoPage.updateDifen();
		this.view.tableInfoPage.updateBeishu();
		this.view.tableInfoPage.updatePlayState();
		if(info.Rule[3]==101){
			UserData.needOneTwo=true;
		}
		else{
			UserData.needOneTwo=false;
		}
	}

	/**玩家信息*/
	__proto.ACK_Room_User=function(info){
		console.log("ACK_Room_User",info,"ACK_Room_User");
		this.model.srddzMsgs.ACK_Room_User=info;
		this.model.updatePlayerInfoVec(info.Users);
		this.view.playerInfoPage.updatePlayerInfos(this.model.playerInfoVec);
		if(this.model.isSelfSitDown==false && this.model.isGameStart==false){
			for(var i=0;i<this.model.chairNum;i++){
				if(this.model.playerByPos(i)==null){
					var sitDownObj={sid:UserData.SID,index:i};
					this.sendMsgCommond(ProtoMessage.getProtoMessage(195,sitDownObj));
					break ;
				}
			}
		}
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
			this.view.tableInfoPage.updateKaijuren(info.nickName);
			if(info.uid==UserData.selfuid){
				var readObj={sid:UserData.SID};
				this.sendMsgCommond(ProtoMessage.getProtoMessage(210,readObj));
				EventCenter.instance.event("COMMON_INFOLIST_NOTICE",{color:0,msg:"玩家["+this.model.getPlayerNicknameByUid(info.uid)+"]坐下了"+info.index+"号座位！"});
			}
			if(this.view.calculatePage.perPage){
				this.view.calculatePage.perPage.updateBtns();
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
			if(this.view.calculatePage.perPage){
				this.view.calculatePage.perPage.updateBtns();
			}
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
			this.view.playerInfoPage.updatePlayerInfos(this.model.playerInfoVec,false);
			if(info.pos==this.model.selfChairPos){
				this.view.playerInfoPage.hideReadyBtn();
				this.view.playerInfoPage.hideDizhuNM();
				console.log("ready..........");
				this.view.calculatePage.reset();
				this.view.calculatePage.reset();
				this.model.reset();
				this.view.srddzPage.reset();
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
			this.view.tableInfoPage.updateDifen();
		}
	}

	/**游戏开始发牌*/
	__proto.ACK_User_SeatCard=function(info){
		if(this.actived){
			this.model.isClientPrePop=false;
			console.log("ACK_User_SeatCard",info,"ACK_User_SeatCard");
			console.log(this.model.srddzMsgs.ACKBC_Sddz_Start,"----------------------------------")
			this.model.srddzMsgs.ACK_User_SeatCard=info;
			this.model.resetCard();
			this.view.srddzPage.handlePart.reset();
			this.view.srddzPage.outputPart.reset();
			var i=0;
			var j=0,k=0;
			var handleCards=[];
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
				this.model.updateHandleCards(i,handleCards);
				this.view.srddzPage.handlePart.updateOnePosAllCards(i,this.model.handleCards[i]);
				if(info.Cards[i].Out){
					for(j=0;j<info.Cards[i].Out.length;j++){
						this.model.outputCards[i].push(info.Cards[i].Out[j].CID);
					}
				}
			}
			this.view.srddzPage.dipaiPart.showBack();
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
			this.model.isHuang=info.IsHuang==undefined ? false :info.IsHuang;
			this.model.isTouliao=info.IsTouliao==undefined ? false :info.IsTouliao;
			this.model.isMingW=info.IsMingW==undefined ? false :info.IsMingW;
			this.model.baodaoState=info.BaodaoState==undefined? 0 :info.BaodaoState;
			this.model.baodaoNum=info.BaodaoNum==undefined? 0 :info.BaodaoNum;
			this.model.isStrictWin=info.IsStrictWin==undefined? false :info.IsStrictWin;
			this.model.isSeleBaodao=info.IsSeleBaodao==undefined? false :info.IsSeleBaodao;
			this.model.isSeleStrictWin=info.IsSeleStrictWin==undefined? false :info.IsSeleStrictWin;
			this.model.baodaoCards=info.BaodaoCards==undefined? [] :info.BaodaoCards;
			var i=0;
			for(i=0;i<this.model.chairNum;i++){
				this.model.jiaofenVec[i]=info.JiaoFen[i];
				this.model.outZhadanNumVec[i]=info.OutZhadan[i];
				if(this.model.stage==1){
					if(info.HaveJiao[i]==true){
						this.view.srddzPage.actTipPart.showActTip(i,info.JiaoFen[i]);
					}
				}
				else{
					this.model.jiabeiVec[i]=info.IsJiabei[i];
					this.model.mingpaiVec[i]=info.IsMing[i];
					if(this.model.stage==2){
						if(info.HaveJiabei[i]==true){
							if(info.IsJiabei[i]==true){
								this.view.srddzPage.actTipPart.showActTip(i,5);
							}
							else{
								this.view.srddzPage.actTipPart.showActTip(i,6);
							}
						}
						else{
							if(this.model.isSelfSitDown && i==this.model.selfChairPos){
								this.view.srddzPage.handleBtns.showjiabei();
								this.view.srddzPage.clockPart.showjiabei(10);
							}
						}
					}
					else if(this.model.stage==3){
						if(info.LastOpt[i]==1){
							this.view.srddzPage.actTipPart.showActTip(i,4);
						}
						else if(info.LastOpt[i]==2){
							this.view.srddzPage.outputPart.showCards(info.LastOptParam[i].Cards,i);
						}
					}
				}
			}
			if(this.model.stage==2 || this.model.stage==3){
				this.model.dipaiCards=info.Dipai.concat();
				this.view.srddzPage.dipaiPart.showCards(this.model.dipaiCards);
				this.view.playerInfoPage.updateJiabei();
				this.model.dizhuPos=info.DizhuIndex;
				this.view.playerInfoPage.showDizhuNM();
				this.view.srddzPage.handlePart.updateAllCards(this.model.handleCards);
				if(this.model.stage==3){
					this.model.curOutputPos=info.CurOutputIndex;
					if(this.model.curOutputPos >=0){
						this.model.curOutputCards=info.CurCards;
						this.view.srddzPage.outputPart.showCards(this.model.curOutputCards,this.model.curOutputPos);
					}
					this.view.srddzPage.clockPart.noticeShowClock(info.CurIndex,10);
					this.view.srddzPage.outputPart.hideCards(info.CurIndex);
				}
			}
			this.view.tableInfoPage.updateBeishu();
			this.view.tableInfoPage.updateDifen();
			this.view.tableInfoPage.updatePlayState();
		}
	}

	/**通知玩家叫分*/
	__proto.ACKBC_Sddz_JiaoDizhu=function(info){
		if(this.actived){
			console.log("ACKBC_Sddz_JiaoDizhu",info,"ACKBC_Sddz_JiaoDizhu");
			this.model.srddzMsgs.ACKBC_Sddz_JiaoDizhu=info;
			var pos=this.model.getPlayerPosByUid(info.Uid);
			this.model.difen=info.CurFen;
			this.view.tableInfoPage.updateDifen();
			if(pos==this.model.selfChairPos){
				this.view.srddzPage.handleBtns.showJiaodizhu();
			}
			this.view.srddzPage.clockPart.noticeShowClock(pos,10);
		}
	}

	/**叫分*/
	__proto.ACKBC_Sddz_Jiaofen=function(info){
		if(this.actived){
			console.log("ACKBC_Sddz_Jiaofen",info,"ACKBC_Sddz_Jiaofen");
			this.model.srddzMsgs.ACKBC_Sddz_Jiaofen=info;
			var pos=this.model.getPlayerPosByUid(info.Uid);
			this.view.srddzPage.actTipPart.showActTip(pos,info.Fen);
			this.model.jiaofenVec[pos]=info.Fen;
			var soundFen=info.Fen;
			if(soundFen==-1){
				soundFen=0;
			}
			SoundManager.playSound("res/sounds/sddz/"+SoundPlay.instance.getSexRef(this.model.playerByPos(pos).sex)+"fen"+soundFen+".mp3");
			if(info.Fen > 0){
				this.model.difen=info.Fen;
				this.view.tableInfoPage.updateDifen();
			}
		}
	}

	/**通知地主是谁*/
	__proto.ACKBC_Sddz_Dizhu=function(info){
		if(this.actived){
			console.log("ACKBC_Sddz_Dizhu",info,"ACKBC_Sddz_Dizhu");
			this.model.srddzMsgs.ACKBC_Sddz_Dizhu=info;
			var pos=this.model.getPlayerPosByUid(info.Uid);
			this.model.dizhuPos=pos;
			this.model.difen=info.Fen;
			this.view.srddzPage.actTipPart.hideAllActTip();
			this.view.playerInfoPage.showDizhuNM();
			this.view.tableInfoPage.updateDifen();
			this.model.addDipaiToHandleCards(this.model.dizhuPos,info.Dipai);
			this.view.srddzPage.dipaiPart.showCards(this.model.dipaiCards);
			this.view.srddzPage.handlePart.updateOnePosAllCards(this.model.dizhuPos,this.model.handleCards[this.model.dizhuPos]);
			this.view.srddzPage.clockPart.showjiabei(10);
		}
	}

	/**通知玩家明牌*/
	__proto.ACKBC_Sddz_Mingpai=function(info){
		if(this.actived){
			console.log("ACKBC_Sddz_Mingpai",info,"ACKBC_Sddz_Mingpai");
			this.model.srddzMsgs.ACKBC_Sddz_Mingpai=info;
			var pos=this.model.getPlayerPosByUid(info.Uid);
			if(info.Mingpai==true){
				this.model.beishu=this.model.beishu*2;
				this.model.updateMingpai(pos,info.Cards);
				this.view.srddzPage.handlePart.updateOnePosAllCards(pos,this.model.handleCards[pos]);
				SoundManager.playSound("res/sounds/sddz/"+SoundPlay.instance.getSexRef(this.model.playerByPos(pos).sex)+"mingpai.mp3");
				this.view.tableInfoPage.updateBeishu();
				this.view.tableInfoPage.updatePlayState();
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
				this.view.srddzPage.actTipPart.showActTip(pos,5);
				this.view.playerInfoPage.updateJiabei();
				SoundManager.playSound("res/sounds/sddz/"+SoundPlay.instance.getSexRef(this.model.playerByPos(pos).sex)+"jiabei.mp3");
			}
			else{
				this.model.jiabeiVec[pos]=false;
				this.view.srddzPage.actTipPart.showActTip(pos,6);
				SoundManager.playSound("res/sounds/sddz/"+SoundPlay.instance.getSexRef(this.model.playerByPos(pos).sex)+"bujiabei.mp3");
			}
		}
	}

	/**通知玩家出牌*/
	__proto.ACKBC_CurPlayer=function(info){
		if(this.actived){
			console.log("ACKBC_CurPlayer",info,"ACKBC_CurPlayer");
			this.model.srddzMsgs.ACKBC_CurPlayer=info;
			var pos=info.Seat;
			this.view.srddzPage.clockPart.noticeShowClock(pos,10);
			if(pos==this.model.selfChairPos && this.model.isSelfSitDown){
				if(this.model.curOutputPos==-1 && this.model.dizhuPos==this.model.selfChairPos){
					var baodaoNum=this.model.getBaodaoNum();
					if(baodaoNum==0){
						this.view.srddzPage.handleBtns.showCtlBtns();
					}
					else if(this.model.isSeleBaodao==false && this.model.isStrictWin==false){
						this.view.srddzPage.handleBtns.showBaodao(baodaoNum);
					}
					else if(this.model.isSeleBaodao==true && this.model.isSeleStrictWin==false){
						if(this.model.baodaoState !=0){
							this.view.srddzPage.handleBtns.showWay();
						}
						else{
							this.view.srddzPage.handleBtns.showCtlBtns();
						}
					}
					else if(this.model.isSeleBaodao==true && this.model.isSeleStrictWin==true){
						this.view.srddzPage.handleBtns.showCtlBtns();
					}
				}
				else{
					this.view.srddzPage.handleBtns.showCtlBtns();
				}
				this.view.srddzPage.handlePart.canControl(pos,true);
			}
			this.view.srddzPage.actTipPart.hideJiabei();
			this.view.srddzPage.outputPart.hideCards(pos);
			this.view.srddzPage.actTipPart.hideActTip(pos);
		}
	}

	/*报到*/
	__proto.ACKBC_Srddz_Baodao=function(info){
		if(this.actived){
			console.log("ACKBC_Srddz_Baodao",info,"ACKBC_Srddz_Baodao");
			this.model.srddzMsgs.ACKBC_Srddz_Baodao=info;
			var pos=this.model.getPlayerPosByUid(info.Uid);
			if(pos !=this.model.dizhuPos){
				QuickUtils.popMessage("报到信息有误，报道的玩家可能作弊！");
				return;
			}
			this.model.isSeleBaodao=true;
			this.model.baodaoNum=info.BaodaoNum;
			this.model.baodaoCards=info.Cards;
			if(this.model.baodaoNum==0){
				this.model.baodaoState=0;
				if(pos==this.model.selfChairPos){
					this.view.srddzPage.handleBtns.showCtlBtns();
				}
			}
			else{
				if(this.model.baodaoNum==1){
					this.model.baodaoState=1;
				}
				else if(this.model.baodaoNum >=1){
					this.model.baodaoState=2;
				}
				if(pos==this.model.selfChairPos){
					if(this.model.isSeleStrictWin==false){
						this.view.srddzPage.handleBtns.showWay();
					}
					else{
						this.view.srddzPage.handleBtns.showCtlBtns();
					}
				}
			}
			this.view.tableInfoPage.updatePlayState();
			this.view.srddzPage.handlePart.updateAllCards(this.model.handleCards);
		}
	}

	/**直接赢通知*/
	__proto.ACKBC_Srddz_StrictWin=function(info){
		if(this.actived){
			console.log("ACKBC_Srddz_StrictWin",info,"ACKBC_Srddz_StrictWin");
			this.model.srddzMsgs.ACKBC_Srddz_StrictWin=info;
			var pos=this.model.getPlayerPosByUid(info.Uid);
			if(pos !=this.model.dizhuPos){
				return;
			}
			this.model.isSeleStrictWin=true;
			this.model.isStrictWin=info.IsStrictWin;
			if(this.model.isStrictWin==false && pos==this.model.selfChairPos){
				this.view.srddzPage.handleBtns.showCtlBtns();
			}
		}
	}

	__proto.preSelfOutputCards=function(uid,type,cards){
		if(AppConfig.autoPlay){
			return;
		};
		var outObj={
			Uid:uid,
			Type:type,
			Cards:cards
		}
		this.ACKBC_Sddz_Chupai(outObj,false);
		this.model.isClientPrePop=true;
	}

	/**出牌*/
	__proto.ACKBC_Sddz_Chupai=function(info,isFromServer){
		(isFromServer===void 0)&& (isFromServer=true);
		if(this.actived){
			console.log("ACKBC_Sddz_Chupai",info,"ACKBC_Sddz_Chupai");
			this.model.srddzMsgs.ACKBC_Sddz_Chupai=info;
			var pos=this.model.getPlayerPosByUid(info.Uid);
			if(isFromServer){
				if(info.Type >=8){
					this.model.outZhadanNumVec[pos]+=1;
				}
			}
			if(info.pos==this.model.selfChairPos){
				if(this.model.isClientPrePop==true){
					this.model.isClientPrePop=false;
					return;
				}
			};
			var preSelfOrNon=true;
			if(this.model.curOutputPos !=-1 && this.model.curOutputPos !=pos){
				preSelfOrNon=false;
			}
			this.model.outputPockers(pos,info.Cards);
			this.view.srddzPage.outputPart.showCards(info.Cards,pos);
			this.view.srddzPage.handlePart.updateOnePosAllCards(pos,this.model.handleCards[pos]);
			this.model.beishu=info.Beishu;
			this.view.tableInfoPage.updateBeishu();
			var jieshuData=JishuArrData$2.getJishuArrData(this.model.curOutputCards);
			var paiSound="";
			switch(info.Type){
				case 1:
					paiSound="1-"+BasePocker$2.getV(this.model.curOutputCards[0]);
					break ;
				case 2:
					paiSound="2-"+BasePocker$2.getV(this.model.curOutputCards[0]);
					break ;
				case 3:
					paiSound="3-"+BasePocker$2.getV(this.model.curOutputCards[0]);
					break ;
				case 4:
					paiSound="3d2";
					break ;
				case 6:
					GiftEff$3.instance.showPockTypeEff(6);
					paiSound="shunzi";
					break ;
				case 5:
					paiSound="liandui";
					break ;
				case 7:
					paiSound="feiji";
					var feijiData=FeijiData$1.getFeiji(jieshuData);
					if(feijiData.type==0){
						GiftEff$3.instance.showPockTypeEff(7);
					}
					else{
						GiftEff$3.instance.showPockTypeEff(7,true);
					}
					break ;
				case 8:
					paiSound="zhadan";
					GiftEff$3.instance.showPockTypeEff(8);
					break ;
				case 9:
					GiftEff$3.instance.showPockTypeEff(9);
					paiSound="huojian";
					break ;
				};
			var yaoSound="yao"+(1+Math.round(Math.random()));
			if(preSelfOrNon==false){
				var rad=Math.random();
				if(rad >=0.5){
					paiSound=yaoSound;
				}
			}
			SoundManager.playSound("res/sounds/sddz/"+SoundPlay.instance.getSexRef(this.model.playerByPos(pos).sex)+paiSound+".mp3");
		}
	}

	/**过*/
	__proto.ACKBC_Sddz_Pass=function(info){
		if(this.actived){
			console.log("ACKBC_Sddz_Pass",info,"ACKBC_Sddz_Pass");
			this.model.srddzMsgs.ACKBC_Sddz_Pass=info;
			var pos=this.model.getPlayerPosByUid(info.Uid);
			this.view.srddzPage.actTipPart.showActTip(pos,4);
			var passSound="guo"+(1+Math.round(Math.random()*2));
			SoundManager.playSound("res/sounds/sddz/"+SoundPlay.instance.getSexRef(this.model.playerByPos(pos).sex)+passSound+".mp3");
		}
	}

	/**游戏结束*/
	__proto.ACKBC_Sddz_End=function(info){
		if(this.actived){
			console.log("ACKBC_Sddz_End",info,"ACKBC_Sddz_End");
			this.model.srddzMsgs.ACKBC_Sddz_End=info;
			if(UserData.isReplay && this.model.isStrictShowCalc==true){
				return;
			};
			var effStr;
			if(info.Uid==-1){
				this.view.srddzPage.handleBtns.reset();
				this.model.isLiu=true;
				if(UserData.isReplay && this.model.isStrictShowCalc==true){
					return;
				}
				effStr="audio_liuju";
				SoundPlay.playEffect(effStr);
				this.pauseGameQueue();
				Laya.timer.once(4000,this,this.contineGameQueue);
			}
			else{
				var pos=this.model.getPlayerPosByUid(info.Uid);
				var isSelfWin=false;
				var isDizhuWin=false;
				if(pos==this.model.selfChairPos){
					isSelfWin=true;
				}
				if(pos==this.model.dizhuPos){
					isDizhuWin=true;
				}
				this.model.isLiu=false;
				if(isSelfWin==true){
					effStr="js_win";
				}
				else{
					effStr="js_fail";
				}
				SoundPlay.playEffect(effStr);
				Laya.timer.once(2000,this,this.contineGameQueue);
			}
			this.gameOverDownCards(info);
			this.pauseGameQueue();
		}
	}

	/**胡牌和流局了倒下牌都走这里*/
	__proto.gameOverDownCards=function(info){
		this.model.isEnd=true;
		this.model.dipaiCards=info.Dipai;
		this.view.srddzPage.dipaiPart.showCards(this.model.dipaiCards);
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
			this.model.updateHandleCards(i,handleCards);
			this.view.srddzPage.handlePart.updateOnePosAllCards(i,this.model.handleCards[i]);
		}
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
			else{
				this.showCalculate();
			}
			this.showCalculate();
		}
	}

	__proto.showCalculate=function(){
		this.model.isGameStart=false;
		this.view.calculatePage.show();
		this.model.setPlayerReadyFalse();
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
				this.view.playerInfoPage.showDizhuNM();
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
			this.view.playerInfoPage.setGrayhead(dir,isGray,true,info.offlineTime);
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
		SrddzGameModule.instance.stopGame(gotoHall);
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
			GiftEff$3.instance.showGiftEff(fromDir,toDir,info.id);
		}
	}

	/**清除延迟回调相关*/
	__proto.clearTimeDelay=function(){
		Laya.timer.clear(this,this.contineGameQueue);
	}

	__proto.resetSelf=function(){
		this.model.reset();
		this.view.playerInfoPage.hideReadyBtn();
		this.view.playerInfoPage.hideDizhuNM();
		this.view.playerInfoPage.updateJiabei();
		this.view.calculatePage.reset();
		this.view.srddzPage.reset();
	}

	__proto.sendMsgCommond=function(commondId,needCantrol){
		(needCantrol===void 0)&& (needCantrol=true);
		if(needCantrol){
			this.view.srddzPage.handlePart.canControl(this.model.selfChairPos,false);
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
			if(this.view.calculatePage.perPage.isShow){
				this.view.calculatePage.perPage.timeOver();
			}
			else{
				this.view.calculatePage.perPage.onClickConfirmBtn();
			}
		}
	}

	//
	__getset(0,__proto,'model',function(){
		return SrddzGameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'view',function(){
		return SrddzGameModule.instance.gameContext.view;
	});

	return SrddzController;
})(AbstractLayer)


/**四人斗地主数据*/
//class modules.srddzGame.srddzInerGame.model.SrddzModel extends rb.framework.mvc.AbstractLayer
var SrddzModel=(function(_super){
	function SrddzModel(){
		/**房主*/
		this.roomOwnerUid="";
		/***/
		this.isMouseDwon=false;
		/**当前地主的位置*/
		this.dizhuPos=-1;
		/**当前的叫分*/
		this.difen=0;
		/**当前的倍数*/
		this.beishu=1;
		/**是否荒番*/
		this.isHuang=false;
		/**是否头撂*/
		this.isTouliao=false;
		/**是否明王*/
		this.isMingW=false;
		/**是否是直接赢*/
		this.isStrictWin=false;
		/**报道状态 0没有报道 1报道 2双报道*/
		this.baodaoState=0;
		/**是否选择过报到*/
		this.isSeleBaodao=false;
		/**是否选择过报到后直接赢*/
		this.isSeleStrictWin=false;
		/**报到的牌*/
		this.baodaoCards=[];
		/**报到数量*/
		this.baodaoNum=0;
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
		this.srddzMsgs=new SrddzMsgs();
		this.playerInfoVec=[];
		this.mingpaiVec=[];
		this.jiabeiVec=[];
		this.jiaofenVec=[];
		this.outZhadanNumVec=[];
		this.handleCards=[];
		this.outputCards=[];
		SrddzModel.__super.call(this);
	}

	__class(SrddzModel,'modules.srddzGame.srddzInerGame.model.SrddzModel',_super);
	var __proto=SrddzModel.prototype;
	__proto.onAdd=function(){}
	__proto.onRemove=function(){}
	__proto.resetCard=function(){
		this.dizhuPos=-1;
		this.difen=0;
		this.beishu=1;
		this.isTouliao=false;
		this.isMingW=false;
		this.baodaoState=0;
		this.baodaoNum=0;
		this.isSeleBaodao=false;
		this.isSeleStrictWin=false;
		this.baodaoCards=[];
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
			this.jiaofenVec[i]=0;
			this.outZhadanNumVec[i]=0;
		}
		this.isEnd=false;
		this.isLiu=false;
	}

	__proto.reset=function(){
		this.beKickedPlayer={};
		this.resetCard();
	}

	/**更新玩家手里的牌*/
	__proto.updateHandleCards=function(pos,cards){
		this.handleCards[pos]=cards.concat();
		this.handleCards[pos].sort(PaixingLogic$2.compCardsFun);
	}

	/**叫地主完成给对应的玩家手里加上三张牌 四人斗地主不是地主的玩家不给底牌具体值*/
	__proto.addDipaiToHandleCards=function(pos,cards){
		this.dipaiCards=cards.concat();
		this.handleCards[pos]=this.handleCards[pos].concat(cards);
		this.handleCards[pos].sort(PaixingLogic$2.compCardsFun);
	}

	/**明牌通知更新地主玩家手里的牌*/
	__proto.updateMingpai=function(pos,cards){
		this.mingpaiVec[pos]=true;
		this.handleCards[pos]=cards.concat();
		this.handleCards[pos].sort(PaixingLogic$2.compCardsFun);
	}

	/**出牌*/
	__proto.outputPockers=function(pos,cards){
		this.curOutputPos=pos;
		this.curOutputCards=cards.concat();
		this.curOutputCards.sort(PaixingLogic$2.compCardsFun);
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
			if(pos==this.dizhuPos && this.baodaoState !=0){
				idx=this.baodaoCards.indexOf(cards[i]);
				if(idx !=-1){
					this.baodaoCards.splice(idx,1);
				}
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

	/**判断是否可以报到*/
	__proto.getBaodaoNum=function(){
		return PaixingLogic$2.getBaodaoNum(this.handleCards[this.selfChairPos]);
	}

	__proto.getBaodaoCards=function(){
		return PaixingLogic$2.getBaodaoCards(this.handleCards[this.selfChairPos]);
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
		this.jiaofenVec.length=this.chairNum;
		this.outZhadanNumVec.length=this.chairNum;
		this.dipaiCards.length=0;
		var i=0;
		var len=this._chairNum;
		for(i=0;i<len;i++){
			this.outputCards[i]=[];
			this.handleCards[i]=[];
			this.mingpaiVec[i]=false;
			this.jiabeiVec[i]=false;
			this.jiaofenVec[i]=0;
			this.outZhadanNumVec[i]=0;
		}
		this.isGameStart=false;
		this.isEnd=false;
		this.isLiu=false;
	});

	SrddzModel.Stage_jiaofen=1;
	SrddzModel.Stage_jiabei=2;
	SrddzModel.Stage_dapai=3;
	__static(SrddzModel,
	['DissolveResult_REF',function(){return this.DissolveResult_REF=["等待操作","同意" ,"拒绝"];}
	]);
	return SrddzModel;
})(AbstractLayer)


//class modules.srddzGame.srddzInerGame.view.SrddzView extends rb.framework.mvc.AbstractLayer
var SrddzView=(function(_super){
	function SrddzView(){
		this.popChatArr=null;
		this.expressloaderArr=null;
		this._replayControlView=null;
		this._srddzPage=null;
		this._playerInfoPage=null;
		this._tableInfoPage=null;
		this._chatPage=null;
		this._gui=null;
		this._voiceRecording=-1;
		this.isPlayVoice=false;
		this.isClick=false;
		//****************************
		this.isRecording=false
		this._calculatePage
		SrddzView.__super.call(this);
		this.setType(3);
	}

	__class(SrddzView,'modules.srddzGame.srddzInerGame.view.SrddzView',_super);
	var __proto=SrddzView.prototype;
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
			this._gui=new GameTableUI$3();
			this._gui.mouseThrough=true;
		}
		console.log("桌面被添加到舞台！！");
		UIManager.instance.uiLayer.addChild(this._gui);
		if(this._srddzPage==null){
			this._srddzPage=new SrddzPage(new PockerPageUI$2());
			this._gui.pokerContainer.addChild(this._srddzPage.skin);
		}
		if(this._tableInfoPage==null){
			this._tableInfoPage=new TableInfoPage$3(this.gui.tableInfoPage);
		}
		if(this._playerInfoPage==null){
			this._playerInfoPage=new PlayerInfoPage$3(this.gui.playerInfoPage);
		}
		if(this._calculatePage==null){
			this._calculatePage=new CalculatePage$2(this.gui.calculatePart);
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
		EventCenter.instance.on("SEND_CHAT_MESSAGE",this,this.onSendChat);
		this._gui.tableInfoPage.voiceIntercomBtn.on("click",this,this.onVoiceOpClick);
		this._gui.tableInfoPage.voiceIntercomBtn.on("mouseout",this,this.onVoiceOpOut);
		this._gui.tableInfoPage.chatBtn.on("click" ,this,this.onShowChatPage);
	}

	//GiftEff.instance.showPockTypeEff(BasePocker.PAIXING_SHUNZI);
	__proto.initPopChat=function(chairNum){
		(chairNum===void 0)&& (chairNum=4);
		this.popChatArr=[];
		switch(chairNum){
			case 4:this.popChatArr.push(this._gui.popChat0,this._gui.popChat1,this._gui.popChat2,this._gui.popChat3);break ;
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
			SrddzGameModule.instance.gameContext.view.gui.tableInfoPage.voiceIntercomBtn.disabled=true;
			SrddzGameModule.instance.gameContext.view.gui.tableInfoPage.voiceDis.visible=true;
		}
		this.isRecording=false;
		if(!this.isPlayVoice){
			this.Voice();
		}
	}

	__proto.onStopSuccess=function(){
		SrddzGameModule.instance.gameContext.view.gui.tableInfoPage.voiceIntercomBtn.disabled=false;
		SrddzGameModule.instance.gameContext.view.gui.tableInfoPage.voiceDis.visible=false;
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
			this.popChatArr[dir].x=576+(392-this.popChatArr[dir].tf.textField.textWidth);
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
				Laya.timer.clear(SrddzGameModule.instance.gameContext.view,_$this.recoverSoundVolume);
				SrddzGameModule.instance.gameContext.view.playerInfoPage.hideVoice(arr[0]);
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
					SrddzGameModule.instance.gameContext.view.isPlayVoice=false;
					if(WX.isUpLoading==false){
						SrddzGameModule.instance.gameContext.view.gui.tableInfoPage.voiceIntercomBtn.disabled=false;
						SrddzGameModule.instance.gameContext.view.gui.tableInfoPage.voiceDis.visible=false;
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
		this.srddzPage.setChairNum(num);
		this._playerInfoPage.setChairNum(num);
		this.reset();
	}

	__proto.startGame=function(){}
	__proto.onAddListener=function(){}
	//this.addHandler(MsgNames.TICKET_CARD_CHANGE,onticketCardChange);
	__proto.onticketCardChange=function(msg){
		this.calculatePage.showGetTicket(msg[0]);
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
		UserInfoPage$3.instance.hide();
		this._srddzPage.reset();
		this._tableInfoPage.reset();
		this._playerInfoPage.havePiaoReset();
		this._calculatePage.reset();
		this._replayControlView.reset();
	}

	__proto.replayup_reset=function(){
		this._srddzPage.reset();
		this._tableInfoPage.reset();
		this._playerInfoPage.havePiaoReset();
		this._calculatePage.reset();
		this._replayControlView.replayup_reset();
	}

	__proto.onRemoveListener=function(){}
	//case 4:popChatArr.push(_gui.bottomPopChat,_gui.rightPopChat,_gui.topPopChat,_gui.leftPopChat);
	__getset(0,__proto,'model',function(){
		return SrddzGameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'replayControlView',function(){
		return this._replayControlView;
	});

	__getset(0,__proto,'srddzPage',function(){
		return this._srddzPage;
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

	__getset(0,__proto,'calculatePage',function(){
		return this._calculatePage;
	});

	return SrddzView;
})(AbstractLayer)


/**玩家自己手里的牌*/
//class modules.srddzGame.srddzInerGame.view.pockerPart.card.BottomHandlePocker extends modules.srddzGame.srddzInerGame.view.pockerPart.card.BasePocker
var BottomHandlePocker$2=(function(_super){
	function BottomHandlePocker(skin){
		this.orignalY=0;
		this.readyOffsetY=-20;
		this.orignalY=skin.y;
		BottomHandlePocker.__super.call(this,skin);
		this.canControl=true;
	}

	__class(BottomHandlePocker,'modules.srddzGame.srddzInerGame.view.pockerPart.card.BottomHandlePocker',_super,'BottomHandlePocker$2');
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
		if((e.target instanceof ui.srddzGame.ddzPart.item.PockerItemUI )==false && e.target !=this.skin.parent && e.target.parent !=this.skin.parent.parent){
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
		bool=true;
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
})(BasePocker$2)


/**别人手里的牌*/
//class modules.srddzGame.srddzInerGame.view.pockerPart.card.OtherHandlePocker extends modules.srddzGame.srddzInerGame.view.pockerPart.card.BasePocker
var OtherHandlePocker$2=(function(_super){
	function OtherHandlePocker(skin){
		OtherHandlePocker.__super.call(this,skin);
	}

	__class(OtherHandlePocker,'modules.srddzGame.srddzInerGame.view.pockerPart.card.OtherHandlePocker',_super,'OtherHandlePocker$2');
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
})(BasePocker$2)


/**自己手里的牌的部分*/
//class modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.handlePart.BottomSingleHandlePart extends modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.handlePart.BaseSingleHandlePart
var BottomSingleHandlePart$3=(function(_super){
	function BottomSingleHandlePart(skin){
		this.gap=55;
		this._skin=null;
		this._skin=skin;
		BottomSingleHandlePart.__super.call(this,skin);
	}

	__class(BottomSingleHandlePart,'modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.handlePart.BottomSingleHandlePart',_super,'BottomSingleHandlePart$3');
	var __proto=BottomSingleHandlePart.prototype;
	__proto.init=function(){
		var i=0,len=this._pockers.length;
		for(i=0;i<len;i++){
			this._pockers[i]=new BottomHandlePocker$2(this._skin["card"+i]);
		}
		Laya.stage.on("mousedown",this,this.onDownStage);
	}

	__proto.onDownStage=function(e){
		this.model.isMouseDwon=true;
	}

	__proto.showCards=function(cards,dir){
		var pos=this.model.getChairPosByDir(dir);
		if(this.model.baodaoState !=0 && this.model.dizhuPos==pos){
			cards=cards.concat();
			PaixingLogic$2.cutArrInArr(this.model.baodaoCards,cards);
			PaixingLogic$2.sortHandleCards(cards);
			PaixingLogic$2.sortHandleCards(this.model.baodaoCards);
			cards=cards.reverse();
			this.model.baodaoCards=this.model.baodaoCards.reverse();
			cards=this.model.baodaoCards.concat(cards);
		}
		else{
			PaixingLogic$2.sortHandleCards(cards);
			cards=cards.reverse();
		}
		this.hideAll();
		this.updateState(this.model.mingpaiVec[pos]);
		var i=0;
		for(i=0;i<cards.length;i++){
			this._pockers[i].setCardImg(cards[i]);
			this._pockers[i].show();
			this._pockers[i].select=false;
			this._pockers[i].showDizhuImg(false);
			if(this.state==1){
				this._pockers[i].down();
			}
			else{
				if(this.model.isSelfSitDown){
					this._pockers[i].up();
				}
				else{
					if(this.model.baodaoState !=0 && this.model.dizhuPos==pos){
						if(i<this.model.baodaoCards.length){
							this._pockers[i].down();
						}
						else{
							this._pockers[i].back();
						}
					}
					else{
						this._pockers[i].back();
					}
				}
			}
			if(i==cards.length-1){
				if(pos==this.model.dizhuPos){
					this._pockers[i].showDizhuImg(true);
				}
				this._pockers[i].showMingImg(this.model.mingpaiVec[pos]);
			}
		}
		if(cards.length <=17){
			this._skin.box1.x=this.gap*(17-cards.length)/2;
		}
		else{
			this._skin.box1.x=0;
		}
	}

	__proto.updateState=function(isMingPai){
		_super.prototype.updateState.call(this,isMingPai);
		if(this.state==1){
			this.down();
		}
		else{
			if(this.model.isSelfSitDown){
				this.up();
			}
			else{
				this.back();
			}
		}
	}

	__proto.reset=function(){
		this.updateState(false);
		_super.prototype.reset.call(this);
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
		Laya.superSet(BaseSingleHandlePart$3,this,'canControl',bool);
	});

	return BottomSingleHandlePart;
})(BaseSingleHandlePart$3)


//class modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.handlePart.OtherSingleHandlePart extends modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.handlePart.BaseSingleHandlePart
var OtherSingleHandlePart$2=(function(_super){
	function OtherSingleHandlePart(skin){
		/**没有明牌的时候的哪一张牌*/
		this._oneCard=null;
		/**没有明牌的时候的牌的数量*/
		this._oneNum=null;
		this._skin
		this._skin=skin;
		OtherSingleHandlePart.__super.call(this,skin);
	}

	__class(OtherSingleHandlePart,'modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.handlePart.OtherSingleHandlePart',_super,'OtherSingleHandlePart$2');
	var __proto=OtherSingleHandlePart.prototype;
	__proto.init=function(){
		var i=0,len=this._pockers.length;
		for(i=0;i<len;i++){
			this._pockers[i]=new OtherHandlePocker$2(this._skin["card"+i]);
		}
		this._oneCard=new OtherHandlePocker$2(this._skin["card"]);
		this._oneNum=this._skin["numTxt"];
	}

	__proto.showCards=function(cards,dir){
		cards=cards.concat();
		var pos=this.model.getChairPosByDir(dir);
		this.updateState(this.model.mingpaiVec[pos]);
		var i=0;
		if(this.state==1 || this.model.isEnd){
			if(pos==this.model.dizhuPos && this.model.baodaoState !=0){
				PaixingLogic$2.cutArrInArr(this.model.baodaoCards,cards);
				PaixingLogic$2.sortHandleCards(cards);
				PaixingLogic$2.sortHandleCards(this.model.baodaoCards);
				cards=cards.reverse();
				this.model.baodaoCards=this.model.baodaoCards.reverse();
				cards=this.model.baodaoCards.concat(cards);
				this._skin["backBox"].visible=false;
				this._skin["mingBox"].visible=true;
				this.hideAll();
				for(i=0;i<cards.length;i++){
					this._pockers[i].setCardImg(cards[i]);
					this._pockers[i].show();
					this._pockers[i].showDizhuImg(false);
					if(i==cards.length-1){
						if(pos==this.model.dizhuPos){
							this._pockers[i].showDizhuImg(true);
						}
						this._pockers[i].showMingImg(this.model.mingpaiVec[pos]);
					}
				}
				this.down();
			}
			else{
				PaixingLogic$2.sortHandleCards(cards);
				cards=cards.reverse();
				this._skin["backBox"].visible=false;
				this._skin["mingBox"].visible=true;
				this.hideAll();
				for(i=0;i<cards.length;i++){
					this._pockers[i].setCardImg(cards[i]);
					this._pockers[i].show();
					this._pockers[i].showDizhuImg(false);
					if(i==cards.length-1){
						if(pos==this.model.dizhuPos){
							this._pockers[i].showDizhuImg(true);
						}
						this._pockers[i].showMingImg(this.model.mingpaiVec[pos]);
					}
				}
				this.down();
			}
		}
		else if(this.state==0){
			if(pos==this.model.dizhuPos && this.model.baodaoState !=0){
				this._skin["backBox"].visible=false;
				this._skin["mingBox"].visible=true;
				PaixingLogic$2.sortHandleCards(this.model.baodaoCards);
				this.model.baodaoCards=this.model.baodaoCards.reverse();
				this.hideAll();
				for(i=0;i<cards.length;i++){
					if(i<this.model.baodaoCards.length){
						this._pockers[i].setCardImg(this.model.baodaoCards[i]);
						this._pockers[i].down();
					}
					else{
						this._pockers[i].setCardImg(cards[i]);
						this._pockers[i].back();
					}
					this._pockers[i].show();
					this._pockers[i].showDizhuImg(false);
					if(i==cards.length-1){
						if(pos==this.model.dizhuPos){
							this._pockers[i].showDizhuImg(true);
						}
						this._pockers[i].showMingImg(this.model.mingpaiVec[pos]);
					}
				}
			}
			else{
				this._skin["backBox"].visible=true;
				this._skin["mingBox"].visible=false;
				this._oneCard.back();
				this._oneCard.show();
				this._oneNum.text=cards.length+"";
				this.up();
			}
		}
	}

	//updateState(model.mingpaiVec[pos]);
	__proto.reset=function(){
		this.updateState(false);
		_super.prototype.reset.call(this);
		this._oneCard.reset();
		this._skin["mingBox"].visible=false;
		this._skin["backBox"].visible=false;
	}

	return OtherSingleHandlePart;
})(BaseSingleHandlePart$3)


//class modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.outputPart.BottomSingleOutputPart extends modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.outputPart.BaseSingleOutputPart
var BottomSingleOutputPart$2=(function(_super){
	function BottomSingleOutputPart(skin){
		this._skin=null;
		this.gap=30;
		this._skin=skin;
		BottomSingleOutputPart.__super.call(this,skin);
	}

	__class(BottomSingleOutputPart,'modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.outputPart.BottomSingleOutputPart',_super,'BottomSingleOutputPart$2');
	var __proto=BottomSingleOutputPart.prototype;
	__proto.showCards=function(cards){
		this.show();
		cards=PaixingLogic$2.sortOutputCards(cards);
		this.hideAll();
		if(cards.length < this._pockers.length/2){
			this._skin.box.x=this.gap*(this._pockers.length/2-cards.length)/2;
		}
		else{
			this._skin.box.x=0;
		};
		var i=0;
		for(i=0;i<cards.length;i++){
			this._pockers[i].setCardImg(cards[i]);
			this._pockers[i].show();
		}
	}

	return BottomSingleOutputPart;
})(BaseSingleOutputPart$2)


//class modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.outputPart.LeftSingleOutputPart extends modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.outputPart.BaseSingleOutputPart
var LeftSingleOutputPart$2=(function(_super){
	function LeftSingleOutputPart(skin){
		this._skin=null;
		this._skin=skin;
		LeftSingleOutputPart.__super.call(this,skin);
	}

	__class(LeftSingleOutputPart,'modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.outputPart.LeftSingleOutputPart',_super,'LeftSingleOutputPart$2');
	var __proto=LeftSingleOutputPart.prototype;
	__proto.showCards=function(cards){
		this.show();
		cards=PaixingLogic$2.sortOutputCards(cards);
		this.hideAll();
		var i=0;
		for(i=0;i<cards.length;i++){
			this._pockers[i].setCardImg(cards[i]);
			this._pockers[i].show();
		}
	}

	return LeftSingleOutputPart;
})(BaseSingleOutputPart$2)


//class modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.outputPart.RightSingleOutputPart extends modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.outputPart.BaseSingleOutputPart
var RightSingleOutputPart$2=(function(_super){
	function RightSingleOutputPart(skin){
		this.gap=30;
		this._skin=null;
		this._skin=skin;
		RightSingleOutputPart.__super.call(this,skin);
	}

	__class(RightSingleOutputPart,'modules.srddzGame.srddzInerGame.view.pockerPart.singlePart.outputPart.RightSingleOutputPart',_super,'RightSingleOutputPart$2');
	var __proto=RightSingleOutputPart.prototype;
	__proto.showCards=function(cards){
		this.show();
		cards=PaixingLogic$2.sortOutputCards(cards);
		this.hideAll();
		var i=0;
		for(i=0;i<cards.length;i++){
			this._pockers[i].setCardImg(cards[i]);
			this._pockers[i].show();
		}
		if(cards.length > 6){
			this._skin.box.x=0;
		}
		else{
			this._skin.box.x=this.gap*(6-cards.length);
		}
	}

	return RightSingleOutputPart;
})(BaseSingleOutputPart$2)


//class modules.srddzGame.srddzInerGame.controller.RSrddzController extends modules.srddzGame.srddzInerGame.controller.SrddzController
var RSrddzController=(function(_super){
	function RSrddzController(){
		RSrddzController.__super.call(this);
	}

	__class(RSrddzController,'modules.srddzGame.srddzInerGame.controller.RSrddzController',_super);
	return RSrddzController;
})(SrddzController)


//class modules.srddzGame.srddzInerGame.model.RSrddzModel extends modules.srddzGame.srddzInerGame.model.SrddzModel
var RSrddzModel=(function(_super){
	function RSrddzModel(){
		RSrddzModel.__super.call(this);
	}

	__class(RSrddzModel,'modules.srddzGame.srddzInerGame.model.RSrddzModel',_super);
	return RSrddzModel;
})(SrddzModel)


//class modules.srddzGame.srddzInerGame.view.playerInfoPart.GiftItem extends ui.gameCommon.items.GiftItemUI
var GiftItem$3=(function(_super){
	function GiftItem(){
		this.tUid=null;
		this.dat=null;
		GiftItem.__super.call(this);
		this.on("click",this,this.onClick);
	}

	__class(GiftItem,'modules.srddzGame.srddzInerGame.view.playerInfoPart.GiftItem',_super,'GiftItem$3');
	var __proto=GiftItem.prototype;
	__proto.setData=function(dat,tUid){
		if(dat){
			this.dat=dat;
			this.tUid=tUid;
			if(tUid==UserData.uid || SrddzGameModule.instance.gameContext.model.isSelfSitDown==false){
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
		if(SrddzGameModule.instance.gameContext.model.isSelfSitDown==false){
			QuickUtils.popMessage("围观用户禁止送礼物！");
			return;
		}
		UserInfoPage$3.instance.hide();
		console.log("送礼物咯：： id:"+this.dat.id+"  tUid:"+this.tUid);
		var giftObj={id:this.dat.id,tUid:this.tUid};
		EventCenter.instance.event("SOCKET_SEND",ProtoMessage.getProtoMessage(410,giftObj));
	}

	return GiftItem;
})(GiftItemUI)


//class modules.srddzGame.context.SrddzMainContext extends rb.framework.mvc.GameContext
var SrddzMainContext=(function(_super){
	function SrddzMainContext(key,module,parentNode){
		this._socketControl=null;
		(key===void 0)&& (key="");
		SrddzMainContext.__super.call(this,key,module,parentNode);
	}

	__class(SrddzMainContext,'modules.srddzGame.context.SrddzMainContext',_super);
	var __proto=SrddzMainContext.prototype;
	__proto.open=function(){
		_super.prototype.open.call(this);
		if(this._socketControl==null){
			this._socketControl=new SrddzMainController();
		}
		this.addController(this.socketControl);
	}

	__getset(0,__proto,'socketControl',function(){
		return this._socketControl;
	});

	return SrddzMainContext;
})(GameContext)


//class modules.srddzGame.srddzInerGame.context.SrddzContext extends rb.framework.mvc.GameContext
var SrddzContext=(function(_super){
	function SrddzContext(key,module,parentNode){
		this._view=null;
		this._controller=null;
		this._rcontroller=null;
		this._model=null;
		this._rmodel=null;
		(key===void 0)&& (key="");
		SrddzContext.__super.call(this,key,module,parentNode);
	}

	__class(SrddzContext,'modules.srddzGame.srddzInerGame.context.SrddzContext',_super);
	var __proto=SrddzContext.prototype;
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
		console.log("srddzgamecontext UserData.roomtype::"+UserData.roomtype);
		this.setChairNum(4);
		SoundPlay.swithMusic("game");
		console.log("srddzGameContext open:::...");
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
			this._view=new SrddzView();
		}
		if(UserData.isReplay){
			if(!this._rcontroller){
				this._rcontroller=new RSrddzController();
			}
			if(this._rmodel){
				this._rmodel=new RSrddzModel();
			}
		}
		else{
			if(!this._controller){
				this._controller=new SrddzController();
			}
			if(!this._model){
				this._model=new SrddzModel();
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

	return SrddzContext;
})(GameContext)


	Laya.__init([UserInfoPage$3,GiftEff$3]);
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