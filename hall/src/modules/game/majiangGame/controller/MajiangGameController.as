package modules.game.majiangGame.controller
{
	import common.CommonModule;
	import common.event.EventCenter;
	import common.tools.SoundPlay;
	import common.view.PopBox;
	
	import laya.media.SoundManager;
	
	import manager.MessageManager;
	import manager.UIManager;
	
	import modules.game.GameModule;
	import modules.game.majiangGame.model.MajiangChiData;
	import modules.game.majiangGame.model.MajiangModel;
	import modules.game.majiangGame.view.MajiangGameView;
	import modules.gameCommon.view.NewDissolvePage;
	import modules.game.majiangGame.view.animation.HuAnimation;
	import modules.game.majiangGame.view.majiangPart.singlePart.BaseHandleEffItem;
	import modules.game.majiangGame.view.playerInfoPart.GiftEff;
	
	import net.Message;
	import net.Pomelo;
	import net.ProtoMessage;
	
	import rb.framework.mvc.AbstractLayer;
	import rb.framework.mvc.core.LayerTypes;
	
	
	public class MajiangGameController extends AbstractLayer
	{
		public static const PRE_COMM_ADD:String = "05";
		
		public function MajiangGameController()
		{
			super();
			super.setType(LayerTypes.CONTROLLER);
		}

		//用来监听协议，从而刷新数据，并且通知界面更改
		override public function onAdd():void
		{
			super.onAdd();
			//this.addHandler(MsgNames.SOCKET_CONNECT_TIMEOUT,onSelfConnetTimeOut);
		}
		
		//移除监听
		override public function onRemove():void
		{
			super.onRemove();
		}
		
		//出牌
		public function discard(cardIdx:int):void
		{
			//给服务器发送出牌协议
//			var commondId:Object = {cmd:"POPC"+cardIdx};
//			sendMsgCommond(commondId,false);
			
			//打牌
//			message Put_Card {
//				required string SID   		= 1; // 
//				required int32 CID  		= 2; // card id
//				optional int32 Ting 		= 3; // >0 听牌
//			}
			
			var arrHu:Array = model.getHuTipArr(cardIdx);
			
			var putCardObj:Object = {SID:UserData.SID,CID:cardIdx-1,Ting:arrHu.length}; 
			trace("discard:::" + putCardObj);
			sendMsgCommond(ProtoMessage.getProtoMessage(net.Message.Put_Card,putCardObj));
			
			if(AppConfig.autoPlay)
			{
				return;
			}
			
			//*********************下面这段是预出牌的代码
			model.outputCard(model.selfChairPos,cardIdx);
			view.majiangPage.handPart.updateOnePosAllCards(model.selfChairPos,model.allCardsVec[model.selfChairPos]);
			view.majiangPage.handPart.updateTheFourteenCard(model.selfChairPos,model.theFourteenCardVec[model.selfChairPos]);
			view.majiangPage.outputPart.showOneCardByPos(model.selfChairPos,cardIdx);
			
			view.majiangPage.handPart.canControl(model.selfChairPos,false);
			view.majiangPage.handleBtns.reset();
			view.majiangPage.handPart.movePeng(model.selfChairPos,false);
			
			SoundPlay.playEffect("audio_card_out");
			SoundManager.playSound(SoundPlay.instance.getCardPath(model.playerByPos(model.selfChairPos).sex,cardIdx) , 1);
			
			model.isClientPrePop = true;
			model.isClientPrePopCard = cardIdx;
			model.isCancelTingp = false;
			
			
//			var idx:int = GameModule.instance.majiangGameContext.majiangModel.allCardsVec[0].indexOf(cardIdx);
//			GameModule.instance.majiangGameContext.majiangModel.allCardsVec[0].splice(idx,1);
		}
		//**************************************************xiangshanmajiang
		
		public function ACKBC_Into_Room(info:Object):void
		{
//			message ACKBC_Into_Room {
//				required string 	Name       	= 1;	// Nick Name
//				required string 	UID      	= 2;  	// User ID  用户ID
//				required int32 		RID     	= 3;    // 房间号
//				optional string 	IP      	= 4;  	//
//				required int32 		Index   	= 5;    // 房间位置// 0=东
//				required string 	Icon    	= 6;  	// 头像
//				required int32 		Coin    	= 7;    // 金币
//				optional int32 		Type    	= 8;    // 类型
//				required int32 		Diamond 	= 9;    // 钻石
//				optional int32 		Level   	= 10;   // 等级
//				optional int32 		Robot   	= 11;   // 是否是机器人
//				optional float 		GPS_LNG  	= 12;	// 经度 Longitude   简写Lng
//				optional float 		GPS_LAT  	= 13;	// 纬度 Latitude    简写Lat
//			}
			
			trace("ACKBC_Into_Room");
			trace(info);
			trace("ACKBC_Into_Room"); 
			
			model.majiangMsgs.ACKBC_Into_Room = info;
			//UserData.roomtype = info.Type;
			
			UserData.roomid = info.RID;
			
			view.tableInfoPage.updateRoomId();//设置房间号显示
			
			info.nickname = info.Name;
			info.uid = info.UID;
			info.ip = info.IP;
			info.pos = info.Index;
			info.golds = info.Coin;
			
			model.updateOnePlayerInfo(info);//更新对比用户信息
			
			view.playerInfoPage.updateOnePlayerInfo(info);
			
			view.playerInfoPage.updateSitDownUpBtn();
			
			EventCenter.instance.event(EventCenter.COMMON_INFOLIST_NOTICE,{color:0,msg:"玩家["+info.nickname+"]进入了房间！"});
			
			//view.majiangPage.shaiziPart.play(1,7);
			
		
			
		}
		/**
		 * 坐下
		 * @param	info
		 */
		public function ACKBC_Sitdown(info:Object):void 
		{
			if (_actived) //判断当前模块是否打开
			{
				trace("MSG_ACKBC_Sitdown", info);
				model.majiangMsgs.ACKBC_Sitdown = info;
				model.sitDown(info.uid, info.index,info.score);
				
				view.playerInfoPage.updatePlayerInfos(model.playerInfoVec);
				
				view.playerInfoPage.updateSitDownUpBtn();
				
				view.tableInfoPage.updateKaijuren(info.nickName);
				
				if(info.uid == UserData.selfuid)
				{
					var readObj:Object = {sid:UserData.SID};
					sendMsgCommond(ProtoMessage.getProtoMessage(Message.User_Ready,readObj));
					EventCenter.instance.event(EventCenter.COMMON_INFOLIST_NOTICE,{color:0,msg:"玩家["+model.getPlayerNicknameByUid(info.uid)+"]坐下了"+info.index+"号座位！"});
				}
				
				if(view.calculatePage.perPage)
				{
					view.calculatePage.perPage.updateBtns();
				}
				
			}
		}
		
		/**
		 * 站起
		 * @param	info
		 */
		public function ACKBC_Standup(info:Object):void 
		{
			if (_actived) 
			{
				trace("MSG_ACKBC_Standup",info);
				model.majiangMsgs.ACKBC_Standup = info;
				model.standup(info.uid, info.index);
				
				view.playerInfoPage.updatePlayerInfos(model.playerInfoVec);
				view.playerInfoPage.updateSitDownUpBtn();
				view.playerInfoPage.updateStartBtn();
				view.tableInfoPage.updateKaijuren(info.nickName);
				if(view.calculatePage.perPage)
				{
					view.calculatePage.perPage.updateBtns();
				}
				
				
				EventCenter.instance.event(EventCenter.COMMON_INFOLIST_NOTICE,{color:0,msg:"玩家["+model.getPlayerNicknameByUid(info.uid)+"]站起了！"});
				
			}
		}
		
		public function ACK_RoomInfo(info:Object):void
		{
//			message ACK_RoomInfo {
//				required int32 ID   			= 1;
//				optional int32 Type 			= 2;
//				optional int32 City 			= 3;
//				optional int32 Level     		= 4;
//				optional int32 MinCoin  		= 5; 		//最小底分
//				optional int32 MaxCoin  		= 6; 		//最大底分
//				repeated int32 Rule   			= 7; 		//规则ID
//				
//				//---------------------------------------
//				
//				optional int32 Seat  		= 8;        // 座位数量
//				optional int32 UserCount     = 9; 		// 用户数量
//				optional int32 CurIndex      = 10;       // 当前出牌的用户
//				optional int32 CurToolIndex  = 11;       // 当前操作用户
//				optional int32 ZhuangIndex   = 12;       // 庄家的UID
//				optional string MSG 			= 13;		// 
//			}
			
			trace("ACK_Room_Info",info,"ACK_Room_Info");
			model.majiangMsgs.ACK_RoomInfo = info;
			UserData.uniqueCode=info.uniqueCode;
			UserData.roomtype = info.Type;
			UserData.Rule=info.Rule;
			if(UserData.isReplay)
			{
				UserData.roomid = info.RID;
			}
			
			trace(UserData.uniqueCode)
			
			if(info.gameState == 1)//走断线重连
			{
				model.isGameStart = true;
				view.playerInfoPage.hideBtnsByGameStart();
				view.playerInfoPage.hideReadySimbol();
			}
			
			if(UserData.isReplay)
			{
				model.majiangMsgs.ACK_RoomInfo.isGameStart = 1;//
			}
			
			view.tableInfoPage.updateLeftRound();
			view.tableInfoPage.updateKaijuren(info.nickName);
			if(!info.direction)
			{
				info.direction = 0;
			}
			model.fengquan = info.direction;
			view.tableInfoPage.updateRoomId();
			view.majiangPage.clockPart.setWenli();
			//todo
			
			
			
		}
		
		public function ACK_Room_User(info:Object):void
		{
//			message ACK_Room_User {
//				required int32 RID   			= 1;
//				repeated ACK_User_Info Users 	= 2;     // 房间用户信息, 按照Index顺序
//			}
			
			trace("ACK_Room_User",info,"ACK_Room_User");
			model.majiangMsgs.ACK_Room_User = info;
			
			model.updatePlayerInfoVec(info.Users);
			view.playerInfoPage.updatePlayerInfos(model.playerInfoVec);
			
			
		}
		
		public function ACKBC_Start(info:Object):void
		{
			if(_actived)
			{
//				message ACKBC_Start {
//				int32 RID       	= 1;
//				int32 points      = 2;//筛子的点数
//				int32 State       = 3;	// 开始后状态 
//				int32 rollIndex  = 4;   	// 扔骰子玩家索引
//				int32 ZhuangIndex = 5; 	// 从庄家开始
//				repeated ACK_User_Info Users 	= 6;     // 房间用户信息, 按照Index顺序
//				int32 direction = 7; //风圈 0-3(东南西北)
//				}
				
				trace("ACKBC_Start");
				trace(info);
				trace("ACKBC_Start");
				if(UserData.isReplay)
				{
					if(info.zhuang_index == undefined)
					{
						info.zhuang_index = 0;
					}
					info.ZhuangIndex = info.zhuang_index;
					if(!info.direction)
					{
						info.direction = 0;
					}
					
					if(!info.rollIndex)
					{
						info.rollIndex = 0;
					}
					
					info.leftTime =info.left_time;
					if(!info.roundCount)
					{
						info.roundCount = 0;
					}
				}
				
				
				model.majiangMsgs.ACKBC_Start = info;
				
				resetSelf();
				model.isGameStart = true;
				model.majiangMsgs.control_game_mjstart_Info = info;
				model.zhuangpos = info.ZhuangIndex;
				model.fengquan = info.direction;
				
				
				view.startGame();
				view.playerInfoPage.hideReadySimbol();
				view.playerInfoPage.hideBtnsByGameStart();
				view.majiangPage.outputPart.showStartImg();
				view.tableInfoPage.updateRoomId();
				
				
//				switch(UserData.roomtype)
//				{
//					case 9:
//						model.leftDesktopCardsNum = 92;
//						break;
//					case 10:
//						model.leftDesktopCardsNum = 100;
//						break;
//					case 11:
//						model.leftDesktopCardsNum = 53;
//						break;
//					case 12:
//						model.leftDesktopCardsNum = 92;
//						break;
//					default:model.leftDesktopCardsNum = 92;break;
//				}
				
				//来第一次扔筛子
				
				info.points = info.points != undefined ? info.points : 0;
				
				if(info.points != 0)
				{
					pauseGameQueue();
					EventCenter.instance.once(EventCenter.GAME_START_SHAIZI_DONGFENG_COMP,this,onFirstShaiziComp);
					view.majiangPage.shaiziPart.play(info.rollIndex,info.points);
					SoundPlay.playEffect("dice");
				}
				else
				{
					view.majiangPage.clockPart.dingDongwei(model.zhuangpos,true);
				}
				
				if(UserData.isReplay)
				{
					info.round_count = info.round_count != undefined ? info.round_count : 0;
					info.left_time = info.left_time != undefined ? info.left_time : 0;
					
					info.roundCount = info.round_count;
					info.leftTime = info.left_time;
					
				}
				model.majiangMsgs.ACK_RoomInfo.RoundCount = info.roundCount;
				model.majiangMsgs.ACK_RoomInfo.leftTime = info.leftTime;
				
				view.tableInfoPage.updateLeftRound();
			}
		}
		
		public function onFirstShaiziComp():void
		{
			trace("diyici ..................bobbo onFirstShaiziComp")
			view.playerInfoPage.showZhuang();
			view.majiangPage.clockPart.dingDongwei(model.zhuangpos);
			
			Laya.timer.once(1000,this,playEachShaiziEff);
		}
		
		/**播放每个人扔筛子的动画*/
		public function playEachShaiziEff():void
		{
			var info:Object = model.majiangMsgs.ACKBC_Start;
			
			var valueArr:Array = model.getRandomFourValue();
			var users:Array=info.Users;
			if(info.Users == undefined)
			{
				return;
			}
			var i:int,len:int=users.length;
			for(i=0;i<len;i++)
			{
				if(UserData.isReplay)
				{
					users[i].Index = users[i].index != undefined ? users[i].index : 0;
					users[i].UID = users[i].uid != undefined ? users[i].uid : 0;
				}
				view.majiangPage.shaiziPart.play(model.getPlayerPosByUid(users[i].UID),valueArr[model.getshaiziIdxByPos(users[i].Index)]);
			}
			SoundPlay.playEffect("dice");
			Laya.timer.once(3000,this,onEachEffEnd);
		}
		
		protected function onEachEffEnd():void
		{
			model.updatePlayerInfoVec( model.majiangMsgs.ACKBC_Start.Users);
			view.playerInfoPage.updatePlayerInfos(model.playerInfoVec,true,true);
			view.playerInfoPage.showZhuang();
			
			view.majiangPage.clockPart.dingDongwei(model.zhuangpos,true);
			Laya.timer.once(1000,this,contineGameQueue);
		}
		
		/**发牌*/
		public function ACK_UserCard(info:Object):void
		{
			if(_actived)
			{
				if(AppConfig.autoDestory)
				{
					sendRandom();
				}
				
//				message ACK_UserCard {
//					required int32  Seat   			= 1;
//					repeated Card Cards  			= 2;   // 13张手牌
//				}
//				message Card {
//					required int32 CID  = 1; 	// Card id
//					required int32 TIndex = 2; 	// Target Index, 碰吃杠的位置
//					required int32 TType = 3; 	// 0=明杠 1=暗杠 2=碰杠 状态类型
//				}
				
				
				trace("ACK_UserCard");
				trace(info);
				trace("ACK_UserCard");
				model.majiangMsgs.ACK_UserCard = info;
				
				var selfCards:Array = [];
				var i:int,len:int=info.Cards.length;
				
				for(i=0;i<len;i++)
				{
					selfCards.push({card:info.Cards[i].CID});
				}
				
				model.updateAllCardsVecByGameStart(selfCards);
				
				view.majiangPage.handPart.updateAllCards(model.allCardsVec);
				
				view.majiangPage.clockPart.noticeShowLeftCardsNum();
			}
		}
		
		/**发牌*/
		public function ACK_User_SeatCard(info:Object):void
		{
			if(_actived)
			{
				if(AppConfig.autoDestory)
				{
					sendRandom();
				}
				model.isClientPrePop = false;
				
//				repeated SeatCard Cards 			= 1;     	   // 所有玩家的牌 (不包括手牌)
				trace("ACK_User_SeatCard",info,"ACK_User_SeatCard");
				trace(model.majiangMsgs.ACKBC_Start,"----------------------------------")
				model.majiangMsgs.ACK_User_SeatCard = info;
				
				//model.reset();
				//view.reset();
				model.resetCard();
				view.majiangPage.handPart.reset();
				view.majiangPage.pengGangPart.reset()
				view.majiangPage.huaPart.reset();
				view.majiangPage.outputPart.reset();
				
				var handleCards:Array = [];
				
				var i:int; 
				var cardIdx:int;
				var j:int,k:int;
				var chi:MajiangChiData;
				for(i=0;i<info.Cards.length;i++)
				{
					handleCards.length=0;
					if(info.Cards[i].List.length != info.Cards[i].ListLen)
					{
						for(k=0;k<info.Cards[i].ListLen;k++)
						{
							info.Cards[i].List.push({CID:-1});
						}
					}
					//更新玩家手里的牌
					for(j=0;j<info.Cards[i].List.length;j++)
					{
						if(UserData.isReplay)
						{
							info.Cards[i].List[j].CID = info.Cards[i].List[j].cid;
							if(info.Cards[i].List[j].CID == undefined)
							{
								info.Cards[i].List[j].CID = 0;
							}
						}
						handleCards.push({card:info.Cards[i].List[j].CID+1});
					}
					
					model.updateAllCards(i,handleCards);
					view.majiangPage.handPart.updateOnePosAllCards(i,model.allCardsVec[i]);
					view.majiangPage.handPart.updateTheFourteenCard(i,model.theFourteenCardVec[i]);
					
					if(info.Cards[i].Hua)
					{
						for(j=0;j<info.Cards[i].Hua.length;j++)
						{
							if(UserData.isReplay)
							{
								info.Cards[i].Hua[j].CID = info.Cards[i].Hua[j].cid;
								if(info.Cards[i].Hua[j].CID == undefined)
								{
									info.Cards[i].Hua[j].CID = 0;
								}
							}
							cardIdx = info.Cards[i].Hua[j].CID+1;
							model.huaVec[i].push(cardIdx);
							if(model.majiangMsgs.ACK_RoomInfo.gameState == 0)
							{
								view.majiangPage.showBuhua(cardIdx,i,true,false);//补花的牌
							}
							else
							{
								view.majiangPage.showBuhua(cardIdx,i,false,false,false);//补花的牌
							}
						}
						view.playerInfoPage.updateHua(i);
					}
					
					if(info.Cards[i].Chow)
					{
						for(j=0;j<info.Cards[i].Chow.length;j+=3)//同步吃的牌
						{
							chi = new MajiangChiData();
							for(k=0;k<3;k++)
							{
								if(info.Cards[i].Chow[j+k].type == 1)
								{
									chi.chicard = info.Cards[i].Chow[j+k].CID+1;
								}
								else
								{
									chi.chicards.push(info.Cards[i].Chow[j+k].CID+1);
								}
							}
							model.updateChiVec(i,chi.chicard,chi.chicards,(model.chairNum + i-1)%model.chairNum);
							//model.chiVec[i].push(chi);
							view.majiangPage.pengGangPart.chi(chi,i);
						}
					}
					
					
					if(info.Cards[i].Peng)
					{
						for(j=0;j<info.Cards[i].Peng.length;j++)//同步碰的牌
						{
							model.updatePengVec(i,info.Cards[i].Peng[j].CID+1,info.Cards[i].Peng[j].TIndex);
							view.majiangPage.pengGangPart.peng(info.Cards[i].Peng[j].CID+1,i,info.Cards[i].Peng[j].TIndex);
						}
					}
					
					
					if(info.Cards[i].Kong)
					{
						for(j=0;j<info.Cards[i].Kong.length;j++)//同步杠的牌
						{
							if(info.Cards[i].Kong[j].type == 2)
							{
								model.updateGangVec(i,info.Cards[i].Kong[j].CID+1,0,info.Cards[i].Kong[j].TIndex,info.Cards[i].Kong[j]);//补杠
								view.majiangPage.pengGangPart.gang(info.Cards[i].Kong[j].CID+1,i,0,info.Cards[i].Kong[j].TIndex);
							}
							else if(info.Cards[i].Kong[j].type == 1)//暗杠
							{
								model.updateGangVec(i,info.Cards[i].Kong[j].CID+1,1,info.Cards[i].Kong[j].TIndex);
								view.majiangPage.pengGangPart.gang(info.Cards[i].Kong[j].CID+1,i,1,info.Cards[i].Kong[j].TIndex);
							}
							else if(info.Cards[i].Kong[j].type == 0)//明杠
							{
								model.updateGangVec(i,info.Cards[i].Kong[j].CID+1,2,info.Cards[i].Kong[j].TIndex);
								view.majiangPage.pengGangPart.gang(info.Cards[i].Kong[j].CID+1,i,2,info.Cards[i].Kong[j].TIndex);
							}
						}
					}
					
					if(info.Cards[i].Out)
					{
						//同步打出去的牌
						for(j=0;j<info.Cards[i].Out.length;j++)//同步打出去的牌
						{
							model.outputCardsVec[i].push(info.Cards[i].Out[j].CID+1);
							//model.outputCard(i,info.Cards[i].Out[j].CID+1);
							view.majiangPage.outputPart.showOneCardByPos(i,info.Cards[i].Out[j].CID+1,false,false); 
						}
					}
					
					
					
					if(model.theFourteenCardVec[i] != -1 && UserData.isReplay==false)
					{
						if(model.getPengGangNum(i) < 4)
						{
							seatPingBi(i,info);
						}
						else
						{
							view.majiangPage.handPart.canControl(i,true);
						}
					}
				}
				
				if(model.majiangMsgs.ACKBC_Card_Init && model.majiangMsgs.ACKBC_Card_Init.show && UserData.isReplay==false)
				{
					view.majiangPage.outputPart.showCurSimbolByPos(model.majiangMsgs.ACKBC_Card_Init.lastPutIndex);
				}
				
				//view.majiangPage.handPart.updateAllCards(model.allCardsVec);
				view.majiangPage.clockPart.noticeShowLeftCardsNum();
				model.isGameStart = true;
				view.playerInfoPage.hideBtnsByGameStart();
			}
		}
		
		protected function seatPingBi(i:int,info):void
		{
			view.majiangPage.handPart.canControl(i,true,[info.Cards[i].lastCardId+1]);
		}
		
		/**别人摸牌*/
		public function ACKBC_GetCard(info:Object):void
		{
			if(_actived)
			{
				if(AppConfig.autoDestory)
				{
					sendRandom();
				}
				
//				message ACKBC_GetCard {
//					required int32   Seat    	= 1;    // 座位
//					required int32   CID     	= 2;    // Card ID          
//					required bool    FromLast  	= 3;    // false=前面  true=后面 
//				}
				view.majiangPage.handleBtns.hide();
				view.majiangPage.outputPart.hideTemp();
				trace("ACKBC_GetCard",info,"ACKBC_GetCard");
				model.majiangMsgs.ACKBC_GetCard = info; 
				
				
				model.leftDesktopCardsNum -= 1;
				var cardIdx:int = info.CID+1;
				info.pos = info.Seat;
				
				if(model.judgeHua(cardIdx) == true)
				{
					pauseGameQueue();
					Laya.timer.once(600,this,buHuaDelay,[info,cardIdx]);
					return;
				}
				
				model.theFourteenCardVec[info.pos] = cardIdx;
				
				if(model.allCardsVec[info.pos].length%3 == 0)
				{
					//QuickUtils.popMessageBox("相公牌咯",PopBox.BTN_QUEREN,null,null,"错误");
					return;
				}
				
				view.majiangPage.handPart.updateTheFourteenCard(info.pos,model.theFourteenCardVec[info.pos]);
				view.majiangPage.handPart.canControl(info.pos,true);
				
				view.majiangPage.clockPart.noticeShowClock(info.pos,10);
				view.majiangPage.clockPart.noticeShowLeftCardsNum();
				
				if(info.pos == model.selfChairPos && model.isSelfSitDown)
				{
					if(!info.Type)
					{
						return;
					}
					if(info.Type[0] || info.Type[1] || info.Type[2] || info.Type[3])
					{
						view.majiangPage.handleBtns.showBtnList(info.Type);
						return;
					}
				}
				
				
				if(AppConfig.autoPlay && info.pos == model.selfChairPos && model.isSelfSitDown)
				{
					if(model.judgeHu(model.allCardsVec[info.pos].concat(model.theFourteenCardVec[info.pos])) == true)
					{
						//return;
					}
					trace("不可以胡 model.isSelfSitDown：：" + model.isSelfSitDown + "  model.selfChairPos::" + model.selfChairPos);
					
					
					Laya.timer.once(AppConfig.autoPlayDelay,this,autoDiscard);
					
				}
			}
		}
		
		public function autoDiscard():void
		{
			var cardIdx:int = model.getUseless();
			
			trace("来自机器人自动出牌：：：" + cardIdx);
			
			discard(cardIdx);
			if(AppConfig.autoDestory)
			{
				sendRandom();
			}
		}
		
		protected function buHuaDelay(info:Object,cardIdx:int):void
		{
			view.majiangPage.clockPart.noticeShowLeftCardsNum();
			model.huaVec[info.pos].push(cardIdx);
			view.majiangPage.showBuhua(cardIdx,info.pos,true,true);//补花的牌
			view.playerInfoPage.updateHua(info.pos);
			//SoundManager.playSound(SoundPlay.instance.getCardPath(model.playerByPos(info.pos).sex,cardIdx),1);//SoundPlay.instance.getCardPath(model.playerByPos(info.pos).sex,info.card)
			
			Laya.timer.once(800,this,contineGameQueue);
		}
		
//		public function ACKBC_CurPlayer(info:Object):void
//		{
//			trace("ACKBC_GetCard",info,"ACKBC_GetCard");
//			model.majiangMsgs.ACKBC_CurPlayer = info;
//			info.pos = info.Seat;
//			
//			view.majiangPage.handPart.canControl(info.pos,true);
//		}
		
		/**出牌*/
		public function ACKBC_PutCard(info:Object):void
		{
			if(_actived)
			{
				
				if(AppConfig.autoDestory)
				{
					sendRandom();
				}
//				message ACKBC_PutCard{
//					required int32 Seat   = 1; 
//					required int32 CID    = 2;
//				}
				trace("ACKBC_PutCard");
				trace(info);
				trace("ACKBC_PutCard");
				model.majiangMsgs.ACKBC_PutCard = info;
				
//				if(UserData.isReplay)
//				{
//					if(info.index == undefined)
//					{
//						info.index = 0;	
//					}
//					info.Seat = info.index;
//					
//					if(info.cid == undefined)
//					{
//						info.cid = 0;
//					}
//					info.CID = info.cid;
//				}
				
				info.pos = info.Seat;
				

				
				info.card = info.CID+1;
				
				if(info.pos == model.selfChairPos)
				{
					if(model.isClientPrePop == true)
					{
						model.isClientPrePop = false;
						
//						if(info.rel == 3)
//						{
//							model.theFourteenCardVec[model.selfChairPos] = model.isClientPrePopCard;
//							view.majiangPage.handPart.updateTheFourteenCard(model.selfChairPos,model.theFourteenCardVec[model.selfChairPos]);
//							view.majiangPage.handPart.canControl(model.selfChairPos,true);
//							view.majiangPage.outputPart.toPre();
//							
//							view.majiangPage.clockPart.noticeShowClock(model.selfChairPos,0);
//							view.majiangPage.clockPart.noticeShowLeftCardsNum();
//							SoundPlay.playEffect("dzpk_deal");
//						}
						return;
					}
				}
				
				
				model.outputCard(info.pos,info.card);
				
				view.majiangPage.handPart.updateOnePosAllCards(info.pos,model.allCardsVec[info.pos]);
				view.majiangPage.handPart.updateTheFourteenCard(info.pos,model.theFourteenCardVec[info.pos]);
				view.majiangPage.outputPart.showOneCardByPos(info.pos,info.card);
				
				view.majiangPage.handPart.canControl(info.pos,false);
				
				if(model.isSelfSitDown && info.pos == model.selfChairPos)
				{
//					var canhuCards:Array = model.getHuTipArr(-1);
//					if(canhuCards.length >0)
//					{
//						view.majiangPage.hupaiTipPart.showCanHuCards(info.pos,canhuCards);
//					}
				}
				
				if(UserData.isReplay)
				{
					view.majiangPage.handleBtns.reset();
				}
				else
				{
					if(info.pos == model.selfChairPos)
					{
						view.majiangPage.handleBtns.reset();
					}
				}
				view.majiangPage.handPart.movePeng(info.pos,false);
				SoundPlay.playEffect("audio_card_out");
				SoundManager.playSound(SoundPlay.instance.getCardPath(model.playerByPos(info.pos).sex,info.card) , 1);
//				pauseGameQueue();
//				Laya.timer.once(500,this,contineGameQueue);
			}
		}
		
		/**玩家操作通知*/
		public function ACK_WaitTool(info:Object):void
		{
			if(_actived)
			{	
				if(AppConfig.autoDestory)
				{
					sendRandom();
				}
				
				if(info.Seat == undefined)
				{
					info.Seat = 0;
				}
				
				if(info.Type == undefined)
				{
					info.Type = [0,0,0,0]
				}
				
				if(info.TimeOut == undefined)
				{
					info.TimeOut = 10;
				}
				
//				message ACK_WaitTool   {
//					required int32 Seat   			= 1; 	// 座位
//					repeated int32 Type    			= 2; 	// 胡 杠 碰 吃
//					required int32 TimeOut 			= 3;    // 超时
//				}
				trace("ACK_WaitCheckTool");
				trace(info);
				trace("ACK_WaitCheckTool");
				model.majiangMsgs.ACK_WaitTool = info;
				if(info.Seat  == model.selfChairPos)
				{
					var pos:int = info.Seat;
					view.majiangPage.handleBtns.showBtnList();
					view.majiangPage.clockPart.noticeShowClock(pos,info.TimeOut);
				}
				trace("通知操作！！！！");
			}
		}
		
		/**通知玩家吃牌*/
		public function ACKBC_Chow(info:Object):void
		{
			if(actived)
			{
				if(AppConfig.autoDestory)
				{
					sendRandom();
				}
				trace("ACKBC_Chow::" + info);
				view.majiangPage.outputPart.hideTemp();
				model.majiangMsgs.ACKBC_Chow = info;
				
//				message ACKBC_Chow   {
//					int32 Seat    	= 1; 	// user index
//					int32 TSeat   	= 2; 	// target index
//					int32 CID1   	= 3;    // Card ID
//					int32 CID2  	= 4;   	// Card ID
//					int32 CID3  	= 5;   	// Card ID
//				} 
				
				if(info.CID1 == undefined)
				{
					info.CID1 = 0;
				}
				
				if(info.CID2 == undefined)
				{
					info.CID2 = 0;
				}
				
				if(info.CID3 == undefined)
				{
					info.CID3 = 0;
				}
				
				if(info.Seat == undefined)
				{
					info.Seat = 0;
				}
				
				if(info.TSeat == undefined)
				{
					info.TSeat = (model.chairNum+info.Seat-1)%model.chairNum;//吃的默认就是上一家
				}
				
				info.pos = info.Seat;
				info.chicard = info.CID1+1;
				info.chicards = [info.CID2+1,info.CID3+1];
				
				model.updateChiVec(info.pos,info.chicard,info.chicards,info.TSeat);
				model.cutChiCard(info.pos,info.chicards);
				//todo
				
				var chiData:MajiangChiData = new MajiangChiData();
				chiData.chicard = info.chicard;
				chiData.chicards = info.chicards;
				
				view.majiangPage.pengGangPart.chi(chiData,info.pos);
				view.majiangPage.outputPart.noticeHasPengGang();
				
				view.majiangPage.handPart.updateOnePosAllCards(info.pos,model.allCardsVec[info.pos]);
				
				var chengbaoNum:int = model.getChengbaoNumRefNum(info.pos, (model.chairNum + info.pos-1)%model.chairNum);
				
				if(chengbaoNum <3 && model.getPengGangNum(info.pos)<4)
				{
					pingbiChi(info);
				}
				else
				{
					view.majiangPage.handPart.canControl(info.pos,true);
				}
				
				popChengbaoMsg(chengbaoNum,(model.chairNum + info.pos-1)%model.chairNum,info.pos);
				
				view.majiangPage.clockPart.noticeShowClock(info.pos,10);
				
				view.majiangPage.showEffByPos(info.pos,BaseHandleEffItem.HANDLEEFF_TYPE_CHI);
				
				//***********把自己手里的牌稍微移动一下
				view.majiangPage.handPart.movePeng(info.pos,true);
				
				view.majiangPage.handleBtns.reset();
				
				//SoundPlay.playEffect("audio_chi");
				SoundManager.playSound(SoundPlay.instance.getCardPath(model.playerByPos(info.pos).sex,SoundPlay.chi) , 1);
				if(AppConfig.autoPlay && info.pos == model.selfChairPos && model.isSelfSitDown)
				{
					Laya.timer.once(AppConfig.autoPlayDelay,this,autoDiscard);
				}
				
			}
		}
		
		protected function pingbiChi(info:Object):void
		{
			view.majiangPage.handPart.canControl(info.pos,true,[info.chicard]);
		}
		
		protected function popChengbaoMsg(num:int,from:int,to:int):void
		{
			if(num<2 || num >3)
			{
				return;
			}
			
			var str:String = "";
			
			if(num == 2)
			{
				str= "["+model.playerByPos(from).nickname+"]请注意，你已经被["+model.playerByPos(to).nickname+"]吃（碰、杠）了两口！";
			}
			else if(num == 3)
			{
				str= "["+model.playerByPos(from).nickname+"]请注意，你已经跟["+model.playerByPos(to).nickname+"]做生意了！"
			}
			QuickUtils.popMessage(str);
		}
		
		/**通知玩家碰牌*/
		public function ACKBC_Peng(info:Object):void
		{
//			message ACKBC_Peng  {
//				required int32 Seat    	= 1; 	// user index
//				required int32 TSeat   	= 2; 	// target index
//				required int32 CID   	= 3;	// Card ID
//			}
			if(actived)
			{
				if(AppConfig.autoDestory)
				{
					sendRandom();
				}
				
				trace("ACKBC_Peng");
				trace(info);
				trace("ACKBC_Peng");
				view.majiangPage.outputPart.hideTemp();
				model.majiangMsgs.ACKBC_Peng = info;
				
				info.Seat = info.Seat != undefined ? info.Seat : 0;
				info.TSeat = info.TSeat != undefined ? info.TSeat : 0;
				info.CID = info.CID != undefined ? info.CID : 0;
				
				
				info.pos = info.Seat;
				info.card = info.CID+1;
				
				if(info.CID == -1)
				{
					alert("碰的牌为-1");
				}
				
				if(model.pengVec[info.pos].indexOf(info.card) != -1)//有了
				{
					return;
				}
				
				model.updatePengVec(info.pos,info.card,info.TSeat);
				model.cutPengCard(info.pos,info.card);
				
				view.majiangPage.pengGangPart.peng(info.card,info.pos,info.TSeat);
				view.majiangPage.outputPart.noticeHasPengGang();
				
				view.majiangPage.chiSelePage.hide();
				
				view.majiangPage.handPart.updateOnePosAllCards(info.pos,model.allCardsVec[info.pos]);
				
				if(model.getChengbaoNumRefNum(info.pos,info.TSeat) <3 && model.getPengGangNum(info.pos)<4)
				{
					view.majiangPage.handPart.canControl(info.pos,true,[info.card]);
				}
				else
				{
					view.majiangPage.handPart.canControl(info.pos,true);
				}
				
				popChengbaoMsg(model.getChengbaoNumRefNum(info.pos,info.TSeat),info.TSeat,info.pos);
				
				
				view.majiangPage.clockPart.noticeShowClock(info.pos,10);
				
				view.majiangPage.handleBtns.reset();
				
				view.majiangPage.showEffByPos(info.pos,BaseHandleEffItem.HANDLEEFF_TYPE_PENG);
				
				//***********把自己手里的牌稍微移动一下
				view.majiangPage.handPart.movePeng(info.pos,true);
				//
				
//				SoundPlay.playEffect("audio_peng");
				SoundManager.playSound(SoundPlay.instance.getCardPath(model.playerByPos(info.pos).sex,SoundPlay.peng) , 1);
				
				if(AppConfig.autoPlay && info.pos == model.selfChairPos && model.isSelfSitDown)
				{
					Laya.timer.once(AppConfig.autoPlayDelay,this,autoDiscard);
				}
				
			}
			
		}
		
		/**通知玩家杠*/
		public function ACKBC_Kong(info:Object):void
		{
			if(actived)
			{
				
				if(AppConfig.autoDestory)
				{
					sendRandom();
				}
				
				trace("ACKBC_Kong",info,"ACKBC_Kong");
				view.majiangPage.outputPart.hideTemp();
				model.majiangMsgs.ACKBC_Kong = info;
				
				info.Seat = info.Seat != undefined ? info.Seat : 0;
				info.TSeat = info.TSeat != undefined ? info.TSeat : 0;
				info.KongType = info.KongType != undefined ? info.KongType : 0;
				info.CID = info.CID != undefined ? info.CID : 0;
				
//				message ACKBC_Kong  {
//					int32 Seat    	= 1; 	// user index
//					int32 TSeat   	= 2; 	// target index
//					int32 KongType = 3;  	//0 = 不可以杠 1=直杠 2=暗杠 3=碰杠(面下杠, 补杠)
//					int32 CID    	= 4;  	//Card ID
//				}
				
				
				
				info.pos = info.Seat;
				switch(info.KongType)
				{
					case 80:
						info.type =0;
						break;
					case 70:
						info.type =1;
						break;
					case 60:
						info.type =2;
						break;
				}
				info.card = info.CID+1;
				info.nMoneryOp = [];
				
				view.majiangPage.chiSelePage.hide();
				var have:Boolean = model.updateGangVec(info.pos,info.card,info.type,info.TSeat,info);
//				var nMoneryOp:Array = info.nMoneryOp as Array;
//				var i:int,len:int = nMoneryOp.length;
//				for(i=0;i<len;i++)
//				{
//					model.updateGoldsByUid(nMoneryOp[i].nuid,nMoneryOp[i].monery);
//				}
				
//				view.playerInfoPage.updateGolds(model.playerInfoVec);
				
//				if(have == true)
//				{
//					return;
//				}
				
				model.cutGangCard(info.pos,info.card,info.type);
				
				view.majiangPage.pengGangPart.gang(info.card,info.pos,info.type,info.TSeat);
				
				if(info.type !=0)//补杠就不要提示了
				{
					popChengbaoMsg(model.getChengbaoNumRefNum(info.pos,info.TSeat),info.TSeat,info.pos);
				}
				
				if(info.type == 2)//明杠需要去做干掉别人出的牌
				{
					view.majiangPage.outputPart.noticeHasPengGang();
					//view.majiangPage.handPart.canControl(info.pos,true);//暗杠要等下次摸牌之后才能操作
				}
				
				view.majiangPage.handPart.updateOnePosAllCards(info.pos,model.allCardsVec[info.pos]);
				view.majiangPage.handPart.updateTheFourteenCard(info.pos,model.theFourteenCardVec[info.pos]);
				view.majiangPage.handPart.movePeng(info.pos,false);
				
				view.majiangPage.showEffByPos(info.pos,BaseHandleEffItem.HANDLEEFF_TYPE_GANG);
				
				view.majiangPage.handleBtns.reset();
				
				
				
				
//				SoundPlay.playEffect("audio_gz");
				SoundManager.playSound(SoundPlay.instance.getCardPath(model.playerByPos(info.pos).sex,SoundPlay.gang) , 1);
				
			}
		}
		
		public function ACKBC_Ready(info:Object):void
		{
			if(actived)
			{
//				message ACKBC_Ready {
//					int32 ReadyCount  = 1; // 已经准备好的用户
//					string UID        = 2; //  
//					string MSG        = 3; // 
//				}
				trace("ACKBC_Ready");
				
				trace(info);
				
				trace("ACKBC_Ready");
				
				if(model.isGameStart == true)
				{
					return;
				}
				
				SoundPlay.instance.playReadySound();
				model.majiangMsgs.ACKBC_Ready = info;
//				GameModule.instance.majiangGameContext.majiangModel.majiangMsgs.control_game_operation_ready_Info = info;
				
				//				optional int32 uid =1 [default = 0];//用户ID
				//				optional int32 pos =2 [default = 0];//用户位置
				
				//重新设置游戏，准备新的一局
				info.uid = info.UID;
				info.pos = model.getPlayerPosByUid(info.uid);
				
				model.updateReadyState(info.pos,true,0);//info.piao
				
				view.playerInfoPage.updatePlayerInfos(model.playerInfoVec,false);
				
				if(info.pos == model.selfChairPos)
				{
//					GameModule.inGame=true;
					//view.calculatePage.perPage.getPiaoSelePart().seleIdx(info.piao);
					
					view.playerInfoPage.hideReadyBtn();
					view.playerInfoPage.hideZhuang();
					trace("ready..........");
					
					view.calculatePage.reset();//影藏结算界面
					view.calculatePage.reset();//影藏结算界
					
					model.reset();
					view.majiangPage.reset();
				}
					
			}
		}
		
		/**离开房间*/
		public function ACKBC_Exit_Room(info:Object):void
		{
			if(actived)
			{
				trace("ACKBC_Exit_Room");
				trace(info);
				trace("ACKBC_Exit_Room");
				model.majiangMsgs.ACKBC_Exit_Room = info;
				info.uid = info.UID;
				
				if(info.uid == UserData.selfuid)
				{
					if(AppConfig.isNewHall)
					{
						QuickUtils.gotoHall();
					}
					else
					{
						endGameGotoHall(true);
					}
					return;
				}
				else
				{
					EventCenter.instance.event(EventCenter.COMMON_INFOLIST_NOTICE,{color:1,msg:"玩家["+model.getPlayerNicknameByUid(info.uid)+"]离开了房间！"});
					var pos:int = model.getPlayerPosByUid(info.uid);
					model.leavePlayer(info.uid);
					if(pos != -1)
					{
						view.playerInfoPage.updatePlayerInfos(model.playerInfoVec);
						view.playerInfoPage.showStartBtn(false);
					}
				}
				
				if(model.isGameStart || model.majiangMsgs.ACK_RoomInfo.RoundCount != 0)
				{
					view.playerInfoPage.showZhuang();
				}
			}
		}
		
		/**通知第一个坐下的人*/
		public function NotifyStartGame(info:Object):void
		{
			if(actived)
			{
				trace("NotifyStartGame::" + info + "NotifyStartGame");
				model.majiangMsgs.NotifyStartGame = info;
				
				if(info.uid == UserData.selfuid)
				{
					view.playerInfoPage.showStartBtn();
				}
			}
		}
		
		/**有人胡了*/
		public function ACKBC_Win(info:Object):void
		{
			if(actived)
			{
				view.majiangPage.outputPart.hideTemp();
				
				trace("ACKBC_Win::" , info , "ACKBC_Win");
				
//				repeated int32 Seat    	= 1; 	// user index [1,1,1]
//				int32 TSeat   	= 2; 	// target index
//				int32 CID  	= 3;    //Card ID 胡的牌
//				repeated SeatCard Cards 			= 4;    // 所有玩家的牌 (不包括手牌)
				
				
				info.Seat = info.Seat != undefined ? info.Seat : [];
				info.TSeat = info.TSeat != undefined ? info.TSeat : 0;
				info.CID = info.CID != undefined ? info.CID : 0;
				info.Cards = info.Cards != undefined ? info.Cards : [];
				
				model.majiangMsgs.ACKBC_Win = info;
				
				view.majiangPage.handleBtns.hide();
				model.isHu = true;
				model.isLiu = false;
				gameOverDownCards(info);
				
				var huArr:Array = info.Seat;
				
				model.huArr = huArr.concat();
				
				if(UserData.isReplay && model.isStrictShowCalc == true)
				{
					return;
				}
				
				pauseGameQueue();
				
				var isSelfHu:Boolean = false;
				var i:int;
				
				var huType:int = 0;//0zimo 1dianpao
				
				if(info.TSeat != -1)
				{
					var cardIdx:int = info.CID+1;
					if(cardIdx != view.majiangPage.outputPart.getCurOutputCardIdx())//抢杠胡
					{
						view.majiangPage.pengGangPart.showHuAni(info.TSeat,cardIdx);
						
					}
					else
					{
						view.majiangPage.showDianPaoHuAni();
						view.majiangPage.showEffByPos(info.TSeat,BaseHandleEffItem.HANDLEEFF_TYPE_DIANPAO);
						huType = 1;
					}
					
				}
				
				for(i=0;i<huArr.length;i++)
				{
					if(huArr[i] == model.selfChairPos)
					{
						isSelfHu = true;
					}
					
					if(huType == 1)
					{
						view.majiangPage.showEffByPos(huArr[i],BaseHandleEffItem.HANDLEEFF_TYPE_HU);
					}
					else
					{
						view.majiangPage.showEffByPos(huArr[i],BaseHandleEffItem.HANDLEEFF_TYPE_ZIMO);
					}
					
					
					
					if(info.TSeat == -1)//自摸
					{
						view.majiangPage.showZimoAni(huArr[i]);
						try{
							SoundManager.playSound(SoundPlay.instance.
								getCardPath(model.playerByPos(huArr[i]).sex,SoundPlay.zimo) , 1);
						}catch(e){
							
						}
					}
					else
					{
						try{
							SoundManager.playSound(SoundPlay.instance.
								getCardPath(model.playerByPos(huArr[i]).sex,SoundPlay.hu) , 1);
						}catch(e){
							
						}
					}
				}
				
				
				
				
				var effStr:String;
				
				if(isSelfHu == true)//自己糊了
				{
					effStr = "js_win";
				}
				else
				{
					effStr = "js_fail";
				}
				
				SoundPlay.playEffect(effStr);
				
				Laya.timer.once(2000, this, contineGameQueue);
			}
		}

		
		/**流局了*/
		public function ACKBC_Draw(info:Object):void
		{
			if(actived)
			{
				trace("ACKBC_Draw::" , info , "ACKBC_Draw------------------------------------");
				view.majiangPage.outputPart.hideTemp();
				model.majiangMsgs.ACKBC_Draw = info;
				
				if(UserData.isReplay)
				{
					info.RID = info.RID != undefined ? info.RID : 0;
					info.Cards = info.Cards != undefined ? info.Cards : [];
				}
				
				view.majiangPage.handleBtns.hide();
				model.isHu = true;
				model.isLiu = true;
				gameOverDownCards(info);
				
				if(UserData.isReplay && model.isStrictShowCalc == true)
				{
					return;
				}
				
//				int32 RID   = 1;
//				repeated SeatCard Cards 			= 2;    // 所有玩家的牌 (不包括手牌)
				var effStr:String = "audio_liuju";
				SoundPlay.playEffect(effStr);
				pauseGameQueue();
				Laya.timer.once(4000, this, contineGameQueue);
			}
		}
		
		/**胡牌和流局了倒下牌都走这里*/
		private function gameOverDownCards(info:Object):void
		{
			view.majiangPage.handleBtns.hide();
			model.isHu = true;
			var handleCards:Array = [];
			var i:int,j:int,k:int;
			
			var cardIdx:int;
			var chi:MajiangChiData;
			
			if(UserData.isReplay)
			{
				var len:int = model.chairNum;
				
				for(i=0;i<len;i++)
				{
					model.huaVec[i].length = 0;
					model.chiVec[i].length = 0;
					model.chiFromVec[i].length = 0;
					model.pengVec[i].length = 0;
					model.pengFromVec[i].length = 0;
					model.mingGangVec[i].length = 0;
					model.mingGangFromVec[i].length = 0;
					model.anGangVec[i].length = 0;
					model.anGangFromVec[i].length = 0;
				}
				view.majiangPage.pengGangPart.reset();
				view.majiangPage.huaPart.reset();
			}
			
			for(i=0;i<info.Cards.length;i++)
			{
				handleCards.length=0;
				if(info.Cards[i].List.length != info.Cards[i].ListLen)
				{
					for(k=0;k<info.Cards[i].ListLen;k++)
					{
						info.Cards[i].List.push({CID:-1});
					}
				}
				//更新玩家手里的牌
				for(j=0;j<info.Cards[i].List.length;j++)
				{
					if(UserData.isReplay)
					{
						if(info.Cards[i].List[j].cid == undefined)
						{
							info.Cards[i].List[j].cid;
						}
						info.Cards[i].List[j].CID = info.Cards[i].List[j].cid;
					}
				
					handleCards.push({card:info.Cards[i].List[j].CID+1});
				}
				model.updateAllCards(i,handleCards);
				view.majiangPage.handPart.updateOnePosAllCards(i,model.allCardsVec[i]);
				view.majiangPage.handPart.updateTheFourteenCard(i,model.theFourteenCardVec[i]);
				
				if(UserData.isReplay)
				{
					if(info.Cards[i].Hua)
					{
						for(j=0;j<info.Cards[i].Hua.length;j++)
						{
							if(UserData.isReplay)
							{
								info.Cards[i].Hua[j].CID = info.Cards[i].Hua[j].cid;
								if(info.Cards[i].Hua[j].CID == undefined)
								{
									info.Cards[i].Hua[j].CID = 0;
								}
							}
							cardIdx = info.Cards[i].Hua[j].CID+1;
							model.huaVec[i].push(cardIdx);
							if(model.majiangMsgs.ACK_RoomInfo.gameState == 0)
							{
								view.majiangPage.showBuhua(cardIdx,i,true,false);//补花的牌
							}
							else
							{
								view.majiangPage.showBuhua(cardIdx,i,false,false,false);//补花的牌
							}
						}
						view.playerInfoPage.updateHua(i);
					}
					
					if(info.Cards[i].Chow)
					{
						for(j=0;j<info.Cards[i].Chow.length;j+=3)//同步吃的牌
						{
							chi = new MajiangChiData();
							for(k=0;k<3;k++)
							{
								info.Cards[i].Chow[j+k].CID = info.Cards[i].Chow[j+k].cid != undefined ? info.Cards[i].Chow[j+k].cid : 0;
								
								
								if(info.Cards[i].Chow[j+k].type == 1)
								{
									
									
									chi.chicard = info.Cards[i].Chow[j+k].CID+1;
								}
								else
								{
									chi.chicards.push(info.Cards[i].Chow[j+k].CID+1);
								}
							}
							model.updateChiVec(i,chi.chicard,chi.chicards,(model.chairNum + i-1)%model.chairNum);
							//model.chiVec[i].push(chi);
							view.majiangPage.pengGangPart.chi(chi,i);
						}
					}
					
					
					if(info.Cards[i].Peng)
					{
						for(j=0;j<info.Cards[i].Peng.length;j++)//同步碰的牌
						{
							info.Cards[i].Peng[j].CID = info.Cards[i].Peng[j].cid != undefined ? info.Cards[i].Peng[j].cid : 0;
							info.Cards[i].Peng[j].TIndex = info.Cards[i].Peng[j].target_index != undefined ? info.Cards[i].Peng[j].target_index : 0;
							
							model.updatePengVec(i,info.Cards[i].Peng[j].CID+1,info.Cards[i].Peng[j].TIndex);
							view.majiangPage.pengGangPart.peng(info.Cards[i].Peng[j].CID+1,i,info.Cards[i].Peng[j].TIndex);
						}
					}
					
					
					if(info.Cards[i].Kong)
					{
						for(j=0;j<info.Cards[i].Kong.length;j++)//同步杠的牌
						{
							info.Cards[i].Kong[j].CID = info.Cards[i].Kong[j].cid != undefined ? info.Cards[i].Kong[j].cid : 0;
							info.Cards[i].Kong[j].type = info.Cards[i].Kong[j].type != undefined ? info.Cards[i].Kong[j].type : 0;
							info.Cards[i].Kong[j].TIndex = info.Cards[i].Kong[j].target_index != undefined ? info.Cards[i].Kong[j].target_index : 0;
							
							
							if(info.Cards[i].Kong[j].type == 2)
							{
								model.updateGangVec(i,info.Cards[i].Kong[j].CID+1,0,info.Cards[i].Kong[j].TIndex,info.Cards[i].Kong[j]);//补杠
								view.majiangPage.pengGangPart.gang(info.Cards[i].Kong[j].CID+1,i,0,info.Cards[i].Kong[j].TIndex);
							}
							else if(info.Cards[i].Kong[j].type == 1)//暗杠
							{
								model.updateGangVec(i,info.Cards[i].Kong[j].CID+1,1,info.Cards[i].Kong[j].TIndex);
								view.majiangPage.pengGangPart.gang(info.Cards[i].Kong[j].CID+1,i,1,info.Cards[i].Kong[j].TIndex);
							}
							else if(info.Cards[i].Kong[j].type == 0)//明杠
							{
								model.updateGangVec(i,info.Cards[i].Kong[j].CID+1,2,info.Cards[i].Kong[j].TIndex);
								view.majiangPage.pengGangPart.gang(info.Cards[i].Kong[j].CID+1,i,2,info.Cards[i].Kong[j].TIndex);
							}
						}
					}
				}
				
			}
		}
		
		/**显示结算界面*/
		public function ACKBC_Total(info:Object):void
		{
			if(actived)
			{
				trace("ACKBC_Total::" ,info , "ACKBC_Total");
				model.majiangMsgs.ACKBC_Total = info;
				
//				message Reward {
//					int32 score = 1; //当前奖励分数
//					int32 totalScore = 2; //当前总分数
//				}
//				
//				// 一局结束的结算  MsgID : 790
//				message ACKBC_Total {
//					int32 WinSeat     			            = 1;// 赢家的位置
//					int32 WinCard   			            = 2;// 胡的牌
//					repeated SeatCard   Cards  			= 3;// 牌型
//					repeated int32 Tai                     = 4;//番数
//					repeated string   Msg  				= 5;// 算番信息
//					repeated Reward              Reward    = 6;// 奖励
//					bool finished             				= 7;//是否结束(true 已结束 false未结束)
//					int64 RoundCount                       = 8;
//					string attached                        = 9;//附加信息 {index:0,cid:0}
//				}
				
				
				if(UserData.isReplay)
				{
					info.WinSeat = info.WinSeat != undefined ? info.WinSeat : 0;
					info.WinCard = info.WinCard != undefined ? info.WinCard : 0;
					info.round_count = info.round_count != undefined ? info.round_count : 0;
					info.RoundCount = info.round_count;
				}
				
				
				
				
				model.majiangMsgs.ACK_RoomInfo.RoundCount = info.RoundCount;
				view.tableInfoPage.updateLeftRound(false);
				
				if(info.attached)
				{
					var attachInfo:Object = JSON.parse(info.attached);
					if(attachInfo)
					{
						view.majiangPage.pengGangPart.setChengbaoGang(parseInt(attachInfo.cid)+1,attachInfo.index);	
					}
				}
				view.playerInfoPage.updateSitDownUpBtn(false);
				
//				"服务器将于<span style='color:#E53333;'>7月4日20:00</span>整进行维护，预计<span style='color:#E53333;'>21:00</span>维护完成。<br />"
//				+"现在起至维护完成期间将关闭房间创建和加入功能，已经在游戏中的玩家请注意服务器关闭时间。<br />"
//					+"维护完成后将奉上<span style='color:#E53333;'>1000</span>钻石作为补偿，给大家带来的不便请大家谅解。<br />"
//					+"<br />" 
//					+"<span style='align:right;'>麻将运营团队</span>"
					
					var t:Number=QuickUtils.getLocalVar("hasConcern",0);
				
				if(t==0)
				{
					QuickUtils.setLocalVar("hasConcern",1);
					CommonModule.instance.commonContext.view.showNotice(
						"       微信搜索公众号<span style='color:#f6d368;'> "+AppConfig.nameTitle+"麻将  </span>关注后即可获得更多福利哦！<br />",this,showCalculate);
				}
				else
				{
					showCalculate();
				}
				
				
				
				showCalculate();
			}
		}
		
		public function showCalculate():void
		{
//			view.replayControlView.moveCalculate();
			model.isGameStart = false;
			view.calculatePage.show();
			model.setPlayerReadyFalse();//重置坐下准备
			HuAnimation.instance.noticeHide();//胡牌动画
			
		}
		
		public function NOTIFY_Summary(info:Object):void
		{
			if(actived)
			{
				trace("MSG_NOTIFY_SUMMARY::" ,info , "大结算");
				model.majiangMsgs.MSG_NOTIFY_SUMMARY = info;
				
			}
		}
		
		public function AckDisband(info:Object):void
		{
			if(actived)
			{
				trace("AckDisband::" ,info , "解散相关");
				model.majiangMsgs.AckDisband = info;
				//todo
				
//				Laya.timer.frameOnce(1,this,popDissolveRoomDetail,[info]);
				
				popDissolveRoomDetail(info);
				
			}
		}
		
		
		public function NotifyDisband(info:Object):void
		{
			if(actived)
			{
				trace("NotifyDisband::" ,info , "解散相关");
				
				
				model.majiangMsgs.NotifyDisband = info;
				//todo
				hideDissolveRoomDetail();
				
//				message NotifyDisband{
//					int32 roomId = 1;
//					int32 result = 2; //1:成功 2:失败
//				}
				
				var str:String = "";
				if(info.result == 1)
				{
					str = "解散成功！";
				}
				else
				{
					str = "解散失败！";
//					pauseGameQueue();
					QuickUtils.popMessageBox(str,PopBox.BTN_NONE,this,null);
				}
			}
		}
		
		/**断线重连恢复的相关数据*/
		public function ACKBC_Card_Init(info:Object):void
		{
			if(actived)
			{
//				message ACKBC_Card_Init {
//					int32 Dict      			= 1;           // 骰子
//					int32 CardCount 			= 2;           // 总共有多少张牌
//					int32 CardFirst 			= 3;           // 拿牌的位置
//					int32 EndBlank  			= 4;           // 结尾空的牌, 用于杠牌
//					int32 CardLeft  			= 5;           // 还剩多少张牌
//					int32 CurCardId 			= 6;           // 当前打出的牌的id
//					int32 CurIndex  			= 7;           // 当前用户(需要出牌的)
//					int32 CurTime   			= 8;           // 当前回合时间
//					int32 ZhuangIndex  		= 9;       	   // 庄家Index 
//					int32 StartGame 			= 10;          // 是否已经开始 0=否 1=是
//					repeated int32 Defeat  	= 11; 		   // 已经认输的玩家 
//				   repeated Room_State States = 12;   	   // 特殊玩法状态
//				   int32 lastPutIndex 		= 13; 		   // 最后出牌玩家
//				    int32 show 					= 14; 		   // 是否显示 false:不显示 true:显示
//				}
				
				
				
				
				trace("ACKBC_Card_Init",info,"ACKBC_Card_Init")
				
				
				
				model.majiangMsgs.ACKBC_Card_Init = info;
		
				
				if(info.CurIndex == undefined)
				{
					info.CurIndex = 0;
				}
				
				if(info.ZhuangIndex == undefined)
				{
					info.ZhuangIndex = 0;
				}
				
				if(info.CardLeft == undefined)
				{
					info.CardLeft = 0;
				}
				
				model.leftDesktopCardsNum = info.CardLeft;	
				model.zhuangpos = info.ZhuangIndex;
				
				view.majiangPage.clockPart.noticeShowLeftCardsNum();
				view.playerInfoPage.showZhuang();
				
				view.majiangPage.clockPart.dingDongwei(model.zhuangpos,true,false);
				if(UserData.isReplay == false)//其实这里特指断线重连需要使用
				{
					view.majiangPage.clockPart.noticeShowClock(info.CurIndex,10);//这个要加一个字段去实现
				}
			}
		}
		
		
		public function NotifyUserState(info:Object):void
		{
			if(actived)
			{
				trace("NotifyUserState",info,"NotifyUserState")
//				message NotifyUserState {
//					string id = 1; //user_id
//					int32 state = 2; //1：上线 2：下线
//				}
				
				model.majiangMsgs.NotifyUserState = info;
				var player:Object = model.playerByUid(info.id);
				player.state = info.state;
				player.offlineTime = info.offlineTime;
				
				var pos:int =model.getPlayerPosByUid(parseInt(info.id));
				var dir:int = model.getChairDirByPos(pos);
				var isGray:Boolean = false;
				if(info.state == 2)
				{
					isGray = true;
				}
				view.playerInfoPage.setGrayhead(dir,isGray,true,info.offlineTime);
			}
		}
		
		/**通知可以t人*/
		public function NotifyKick(info:Object):void
		{
			if(actived)
			{
				trace("NotifyKick",info,"NotifyKick");
				//repeated int32 indexs = 1; //当前可踢得玩家index
				var i:int,len:int=info.indexs.length,player:Object;
				for(i=0;i<len;i++)
				{
					player = model.playerByPos(info.indexs[i]);
					player.offlineTime = 0;
					player.canKick = true;
				}
				
				view.playerInfoPage.updateTirenBtn();
				
			}
		}
		
		/**t人返回结果*/
		public function KickResponse(info:Object):void
		{
			if(actived)
			{
//				message KickResponse {//980
//					int32 pos = 1; //被踢掉的玩家pos
//					string uid = 2; //被踢掉的玩家user_id
//				}
				if(QuickUtils.popBox)
				{
					QuickUtils.popBox.onhide();
				}
				
				model.standup(info.uid, -1);
				
				model.beKickedPlayer[info.pos] = info.uid;
				
				model.playerByUid(info.uid).offlineTime = 0;
				
				view.playerInfoPage.updatePlayerInfos(model.playerInfoVec);
				view.playerInfoPage.updateSitDownUpBtn();
				view.playerInfoPage.updateStartBtn();
				view.tableInfoPage.updateKaijuren(info.nickName);
				EventCenter.instance.event(EventCenter.COMMON_INFOLIST_NOTICE,{color:0,msg:"玩家["+model.getPlayerNicknameByUid(info.uid)+"]站起了！"});
				QuickUtils.popMessageBox("玩家["+model.getPlayerNicknameByUid(info.uid)+"]被其他玩家请离座位!",PopBox.BTN_QUEREN,this,onQuerenBeiTi);
			}
		}
		
		protected function onQuerenBeiTi():void
		{
			//
		}
		
		
		protected var pop:PopBox;
		
		/**房间未开始游戏解散*/
		public function NotifyDestoryRoom(info:Object):void
		{
			if(actived)
			{
				trace("NotifyDestoryRoom",info,"NotifyDestoryRoom");
				pop = QuickUtils.popMessageBox("由于在规定时间内未开始游戏，房间已经强制解散！",PopBox.BTN_QUEREN,this,onQueRenExit,"提示","left");
			}
		}
		
		public function onQueRenExit(idx:int):void
		{
			if(AppConfig.isNewHall)
			{
				QuickUtils.gotoHall();
			}
			else
			{
				endGameGotoHall();
			}
			
//			
		}
		
		
		//***********************************************
		
		protected function onPopPanelCallBack():void
		{
			if(AppConfig.isNewHall)
			{
				QuickUtils.gotoHall();
			}
			else
			{
				endGameGotoHall();
			}
//			
		}
		
		public function endGameGotoHall(gotoHall:Boolean=true):void
		{
			trace("send MsgTypes.BASE_QUEUE,PomeloMessage.hall_g_o...");
			if(pop != null)
			{
				pop.onhide();
			}
			//this.notify(MsgNames.SOCKET_SEND,MsgTypes.BASE_QUEUE,PomeloMessage.hall_g_o,{},onGOCallBack);
			
//			if(popBox)
//			{
//				popBox.onhide();
//			}
			hideDissolveRoomDetail();
			contineGameQueue();
			
			model.reset();
			view.reset();
			model.playerInfoVec.length = 0;
			
			if(UserData.isReplay)
			{
				UserData.isPreReplay = true;
				//这里需要跳转到上次的重播界面
				
				//LoginModule.showReplay(false);
			}
			
			CommonModule.instance.regotoCommonText();
			GameModule.instance.stopGame(gotoHall);
			
			
			
			UserData.isReplay = false;
			model.isGameStart == false;
		}
		
		public function clear():void
		{
			model.reset();
			view.reset();
			model.playerInfoVec.length = 0;
			
			if(UserData.isReplay)
			{
				EventCenter.instance.event(EventCenter.REPLAY_back,null);
				//LoginModule.showReplay(false);
			}
			
			UserData.isReplay = false;
			model.isGameStart == false;
		}
		
//		/**玩家操作*/
//		public function control_game_mjopration(info:Object):void
//		{
//			if(true)
//			{
//				trace("control_game_mjopration_Info");
//				trace(info);
//				trace("control_game_mjopration_Info");
//				
//		
//				
//				model.majiangMsgs.control_game_mjopration_Info = info;
//				
//				
//				
//				if(info.uid == UserData.selfuid)
//				{
//					var pos:int = model.getPlayerPosByUid(info.uid);
//					
////					if(model.isTingVec[pos] == false)
////					{
////						view.majiangPage.handleBtns.showBtnList();
////					}
//					
//					view.majiangPage.handleBtns.showBtnList();
//					
//					view.majiangPage.clockPart.noticeShowClock(pos,10);
//				}
//				
//				trace("通知操作！！！！");
//				
//
//				
//				//todo
//			}
//		}
//		
//		/**开始游戏后的发牌*/
//		public function control_game_mjcard(info:Object):void
//		{
//			if(_actived)
//			{
//				trace("control_game_mjcard");
//				trace(info);
//				trace("control_game_mjcard");
//				
//				
//				model.majiangMsgs.control_game_mjcard_Info = info;
//				
//				model.updateAllCardsVecByGameStart(info.nusercard);
//				
//				view.majiangPage.handPart.updateAllCards(model.allCardsVec);
//				
//				view.majiangPage.clockPart.noticeShowLeftCardsNum();
//				//todo
//			}
//		}
		
//		/**百搭*/
//		public function control_game_mjmagic(info:Object):void
//		{
//			model.majiangMsgs.control_game_mjmagic_info = info;
//			
//			trace("control_game_mjmagic_info");
//			trace(info);
//			trace("control_game_mjmagic_info");
//			
//			model.baida[0] = info.fancard;
//			model.baida[1] = info.magiccard;
//			
//			model.leftDesktopCardsNum -= 1;
//			view.majiangPage.clockPart.noticeShowLeftCardsNum();
//			
//			view.majiangPage.baidaPart.showBaida(model.baida[1],model.baida[0]);
//		}
		
		/**补花*/
		public function ACK_TransferHuaResponse(info:Object):void
		{
			//不同的麻将需要的自己去重写
		}
		
		/**送礼物*/
		public function MSG_ACK_Gift(info:Object):void
		{
			if(actived)
			{
				
				trace("MSG_ACK_Gift",info,"MSG_ACK_Gift");
//				int32 id = 1;
//				int32 diamond = 2;
//				string uid = 3;
//				string tUid = 4;
				
				var player:Object = model.playerByUid(info.uid);
				var tplayer:Object =  model.playerByUid(info.tUid);
				
				player.Diamond = info.diamond;
				
				var fromDir:int = model.getChairDirByPos(player.pos);
				var toDir:int = model.getChairDirByPos(tplayer.pos);
				
				if(info.uid == UserData.uid)
				{
					UserData.Diamond = info.diamond;
				}
			
				
				GiftEff.instance.showGiftEff(fromDir,toDir,info.id);
			}
		}
		
//		/**吃*/
//		public function control_game_operation_chi(info:Object):void
//		{
//			model.majiangMsgs.control_game_operation_chi_info = info;
//			trace("control_game_operation_chi_info");
//			trace(info);
//			trace("control_game_operation_chi_info");
//			model.updateChiVec(info.pos,info.chicard,info.chicards);
//			model.cutChiCard(info.pos,info.chicards);
//			//todo
//			
//			var chiData:MajiangChiData = new MajiangChiData();
//			chiData.chicard = info.chicard;
//			chiData.chicards = info.chicards;
//			
//			view.majiangPage.pengGangPart.chi(chiData,info.pos);
//			view.majiangPage.outputPart.noticeHasPengGang();
//			
//			view.majiangPage.handPart.updateOnePosAllCards(info.pos,model.allCardsVec[info.pos]);
//			view.majiangPage.handPart.canControl(info.pos,true);
//			
//			view.majiangPage.clockPart.noticeShowClock(info.pos,10);
//			
//			view.majiangPage.showEffByPos(info.pos,BaseHandleEffItem.HANDLEEFF_TYPE_CHI);
//			
//			//***********把自己手里的牌稍微移动一下
//			view.majiangPage.handPart.movePeng(info.pos,true);
//			
//			view.majiangPage.handleBtns.reset();
//			
//			//SoundPlay.playEffect("audio_chi");
//			SoundManager.playSound(SoundPlay.instance.getCardPath(model.playerInfoVec[info.pos].sex,SoundPlay.chi) , 1);
//		}
		
//		/**碰*/
//		public function control_game_operation_peng(info:Object):void
//		{
//			if(_actived)
//			{
//				model.majiangMsgs.control_game_operation_peng_Info = info;
//				trace("control_game_operation_peng");
//				trace(info);
//				trace("control_game_operation_peng");
//				model.updatePengVec(info.pos,info.card);
//				model.cutPengCard(info.pos,info.card);
//				
//				view.majiangPage.pengGangPart.peng(info.card,info.pos);
//				view.majiangPage.outputPart.noticeHasPengGang();
//				
//				view.majiangPage.chiSelePage.hide();
//				
//				view.majiangPage.handPart.updateOnePosAllCards(info.pos,model.allCardsVec[info.pos]);
//				view.majiangPage.handPart.canControl(info.pos,true);
//				
//				view.majiangPage.clockPart.noticeShowClock(info.pos,10);
//				
//				view.majiangPage.handleBtns.reset();
//				
//				view.majiangPage.showEffByPos(info.pos,BaseHandleEffItem.HANDLEEFF_TYPE_PENG);
//				
//				//***********把自己手里的牌稍微移动一下
//				view.majiangPage.handPart.movePeng(info.pos,true);
//				//
//				
//				SoundPlay.playEffect("audio_peng");
//				SoundManager.playSound(SoundPlay.instance.getCardPath(model.playerInfoVec[info.pos].sex,SoundPlay.peng) , 1);
//				
//				
//				//todo
//			}
//		}
		
//		public function control_game_operation_gang(info:Object):void
//		{
//			if(_actived)
//			{
//				GameModule.instance.majiangGameContext.majiangModel.majiangMsgs.control_game_operation_gang_Info = info;
//				
//				trace("control_game_operation_gang");
//				trace(info);
//				trace("control_game_operation_gang");
//				
//				view.majiangPage.chiSelePage.hide();
//				var have:Boolean = model.updateGangVec(info.pos,info.card,info.type);
//				var nMoneryOp:Array = info.nMoneryOp as Array;
//				var i:int,len:int = nMoneryOp.length;
//				for(i=0;i<len;i++)
//				{
//					model.updateGoldsByUid(nMoneryOp[i].nuid,nMoneryOp[i].monery);
//				}
//				
//				view.playerInfoPage.updateGolds(model.playerInfoVec);
//				
//				if(have == true)
//				{
//					return;
//				}
//				
//				model.cutGangCard(info.pos,info.card,info.type);
//				
//				view.majiangPage.pengGangPart.gang(info.card,info.pos,info.type);
//				
//				if(info.type == 2)//明杠需要去做干掉别人出的牌
//				{
//					view.majiangPage.outputPart.noticeHasPengGang();
//					//view.majiangPage.handPart.canControl(info.pos,true);//暗杠要等下次摸牌之后才能操作
//				}
//				
//				view.majiangPage.handPart.updateOnePosAllCards(info.pos,model.allCardsVec[info.pos]);
//				view.majiangPage.handPart.updateTheFourteenCard(info.pos,model.theFourteenCardVec[info.pos]);
//				view.majiangPage.handPart.movePeng(info.pos,false);
//				
//				view.majiangPage.showEffByPos(info.pos,BaseHandleEffItem.HANDLEEFF_TYPE_GANG);
//				
//				view.majiangPage.handleBtns.reset();
//				
//				SoundPlay.playEffect("audio_gz");
//				SoundManager.playSound(SoundPlay.instance.getCardPath(model.playerInfoVec[info.pos].sex,SoundPlay.gang) , 1);
//				//todo
//				
//				
//			}
//		}
		
//		/**玩家超时，自动出牌*/
//		public function control_game_operation_pop(info:Object):void
//		{
//			if(_actived)
//			{
//				model.majiangMsgs.control_game_operation_pop_Info = info;
//				
//				trace("control_game_operation_pop");
//				trace(info);
//				trace("control_game_operation_pop");
//				
//				if(info.pos == model.selfChairPos)
//				{
//					if(model.isClientPrePop == true)
//					{
//						model.isClientPrePop = false;
//						
//						if(info.rel == 3)
//						{
//							model.theFourteenCardVec[model.selfChairPos] = model.isClientPrePopCard;
//							
//							view.majiangPage.handPart.updateTheFourteenCard(model.selfChairPos,model.theFourteenCardVec[model.selfChairPos]);
//							view.majiangPage.handPart.canControl(model.selfChairPos,true);
//							view.majiangPage.outputPart.toPre();
//							
//							view.majiangPage.clockPart.noticeShowClock(model.selfChairPos,0);
//							view.majiangPage.clockPart.noticeShowLeftCardsNum();
//							SoundPlay.playEffect("dzpk_deal");
//						}
//						
//						return;
//					}
//				}
//				
//				
//				model.outputCard(info.pos,info.card);
//				
//				view.majiangPage.handPart.updateOnePosAllCards(info.pos,model.allCardsVec[info.pos]);
//				view.majiangPage.handPart.updateTheFourteenCard(info.pos,model.theFourteenCardVec[info.pos]);
//				view.majiangPage.outputPart.showOneCardByPos(info.pos,info.card);
//				
//				view.majiangPage.handPart.canControl(info.pos,false);
//				
//				
//				if(UserData.isReplay)
//				{
//					view.majiangPage.handleBtns.reset();
//				}
//				else
//				{
//					if(info.pos == model.selfChairPos)
//					{
//						view.majiangPage.handleBtns.reset();
//					}
//				}
//				
//				
//				view.majiangPage.handPart.movePeng(info.pos,false);
//				
//				SoundPlay.playEffect("audio_card_out");
//				SoundManager.playSound(SoundPlay.instance.getCardPath(model.playerInfoVec[info.pos].sex,info.card) , 1);
//			}
//		}

		
//		public function control_game_operation_ting(info:Object):void
//		{
//			if(_actived)
//			{
//				GameModule.instance.majiangGameContext.majiangModel.majiangMsgs.control_game_operation_ting_Info = info;
//				
//				trace("control_game_operation_ting");
//				trace(info);
//				trace("control_game_operation_ting");
//				
//				var pos:int = model.getPlayerPosByUid(info.uid);
//				
//				if(UserData.roomtype != 10)
//				{
//					model.TingHuCardVec[pos] = info.nnhucards as Array;
//					view.majiangPage.hupaiTipPart.showHuTip(pos,info.nnhucards);
//				}
//				//更新玩家手里的牌
//				
//				trace("pos ::::" + pos);
//				
//				model.updateAllCards(pos,info.nholdcard);
//				
//				model.isTingVec[pos] = true;
//				
//				view.majiangPage.handPart.showTinged(pos);
//				view.playerInfoPage.updateTingImg(pos);
//				
//				view.majiangPage.handPart.updateOnePosAllCards(pos,model.allCardsVec[pos]);
//				trace("model.allCardsVec[pos].length::" + model.allCardsVec[pos].length);
//				
//				view.majiangPage.handPart.updateTheFourteenCard(pos,model.theFourteenCardVec[pos]);
//				
//				view.majiangPage.outputPart.noticeHasTingByPos(pos);
//				
//				view.majiangPage.showEffByPos(pos,BaseHandleEffItem.HANDLEEFF_TYPE_LIANGPAI);
//				
//				
//				SoundPlay.playEffect("audio_ting");
//				SoundManager.playSound(SoundPlay.instance.getCardPath(model.playerInfoVec[pos].sex,SoundPlay.ting) , 1);
//				
//				//todo
//			}
//		}
		
//		public function control_game_operation_qianggang(info:Object):void
//		{
//			if(_actived)
//			{
//				GameModule.instance.majiangGameContext.majiangModel.majiangMsgs.control_game_operation_qianggang_Info = info;
//				
//				//显示胡按钮，并且点击胡
//				if(info.uid == model.playerInfoVec[model.selfChairPos].uid)
//					view.majiangPage.handleBtns.showhuQiangGangHu();
//				
//				//SoundPlay.playEffect("audio_egg");
//				//todo
//			} 
//		}
		
		
		
//		private function real_control_game_operation_hu(info:Object):void
//		{
//			
//			view.majiangPage.handleBtns.hide();
//			model.majiangMsgs.control_game_operation_hu_Info = info;
//			
//			trace("control_game_operation_hu");
//			trace(info);
//			trace("control_game_operation_hu");
//			
//			
//			//根据给的玩家的牌，把所有玩家手里的牌都显示出来
//			
//			var arr:Array = info.userinfos as Array;
//			
//			//更新每个玩家手里的牌
//			var i:int;
//			var len:int = arr.length;
//			
//			var pos:int = 0;
//			
//			for(i=0;i<len;i++)
//			{
//				model.isHu = true;
//				pos = model.getPlayerPosByUid(arr[i].uid);
//				
//				model.updateAllCardsAfterHu(pos,arr[i].nholdcard);
//				
//				//同步吃的牌
//				model.syntheticChiCards(pos,arr[i].nchicard);
//				
//				//同步碰的牌
//				model.syntheticPengCards(pos,arr[i].npengcard);
//				
//				//同步暗杠的牌
//				model.syntheticAnGangCards(pos,arr[i].nagangcard);
//				
//				//同步明杠的牌
//				model.syntheticMingGangCards(pos,arr[i].nmgangcard);
//				
//				model.huaNum[pos] = arr[i].huacount;
//				view.majiangPage.handPart.updateOnePosAllCards(pos,model.allCardsVec[pos]);
//				view.majiangPage.handPart.updateTheFourteenCard(pos,model.theFourteenCardVec[pos]);
//				
//				//更新玩家的金币
//				model.syntheticGoldsByUid(arr[i].uid,arr[i].golds);
//				
//			}
//			
//			view.playerInfoPage.updateGolds(model.playerInfoVec);
//			
//			if(model.isNeedSkipHuAni == true)
//			{
//				model.isNeedSkipHuAni = false;
//				onDelayCallHu();
//				return;
//			}
//			
//			///
//			var huArr:Array = [];
//			var obj:Object = model.majiangMsgs.control_game_operation_hu_Info;
//			
//			if(obj.curtype == 0)//自摸
//			{
//				huArr.push(obj.zimoorpaopos)
//			}
//			
//			len = obj.userinfos.length;
//			
//			for(i=0;i<len;i++)
//			{
//				if(obj.userinfos[i].type  == 2)//这个家伙胡的
//				{
//					if(obj.curtype != 2 && obj.curtype != 3)//流局没有胡的人 解散了也没有胡的人
//					{
//						huArr.push(model.getPlayerPosByUid(obj.userinfos[i].uid));
//					}
//				}
//			}
//			
//			model.huArr = huArr.concat();
//			
//			var isSelfHu:Boolean = false;
//			
//			for(i=0;i<huArr.length;i++)
//			{
//				if(huArr[i] == model.selfChairPos)
//				{
//					isSelfHu = true;
//				}
//				
//				view.majiangPage.showEffByPos(huArr[i],BaseHandleEffItem.HANDLEEFF_TYPE_HU);
//				
//				if(obj.curtype == 0)//自摸
//				{
//					view.majiangPage.showZimoAni(huArr[i]);
//					try{
//						SoundManager.playSound(SoundPlay.instance.
//							getCardPath(model.playerInfoVec[huArr[i]].sex,SoundPlay.zimo) , 1);
//					}catch(e){
//						
//					}
//				}
//				else
//				{
//					try{
//						SoundManager.playSound(SoundPlay.instance.
//							getCardPath(model.playerInfoVec[huArr[i]].sex,SoundPlay.hu) , 1);
//					}catch(e){
//						
//					}
//				}
//			}
//			
//			if(obj.curtype == 1)
//			{
//				//
//				var isQiangGang:Boolean = false;
//				
//				var huCardIdx:int = 0;
//				
//				for(i=0;i<model.theFourteenCardVec.length;i++)
//				{
//					if(model.theFourteenCardVec[i] != -1)
//					{
//						huCardIdx = model.theFourteenCardVec[i];
//						break;
//					}
//				}
//				
//				if(huCardIdx ==view.majiangPage.outputPart.getCurOutputCardIdx())
//				{
//					isQiangGang = false;
//				}
//				else
//				{
//					isQiangGang= true;
//				}
//				if(isQiangGang)
//				{
//					view.majiangPage.pengGangPart.showHuAni(obj.zimoorpaopos,huCardIdx);
//				}
//				else
//				{
//					view.majiangPage.showDianPaoHuAni();
//				}
//			}
//			
//			var isLiu:Boolean = false;
//			
//			if(obj.curtype == 2)//流局
//			{
//				isLiu = true;
//			}
//			
//			var effStr:String;
//			
//			if(isLiu==true)//流局了
//			{
//				effStr = "audio_liuju";
//			}
//			else
//			{
//				if(isSelfHu == true)//自己糊了
//				{
//					effStr = "js_win";
//				}
//				else
//				{
//					effStr = "js_fail";
//				}
//			}
//			
//			if(obj.curtype != 3)
//			{
//				SoundPlay.playEffect(effStr);
//				
//				if(obj.curtype == 0 || obj.curtype == 1)
//				{
//					var maima:int = 0;
//					if(UserData.roomtype == 5 || UserData.roomtype == 7 || UserData.roomtype == 8 || UserData.roomtype == 9 || UserData.roomtype == 11)
//					{
//						len = obj.userinfos.length;
//						
//						for(i=0;i<len;i++)
//						{
//							if(obj.userinfos[i].MaiMa > 0)
//							{
//								maima = obj.userinfos[i].MaiMa;
//							}
//						}
//						
//						trace("maima:: " + maima);
//					}
//					
//					if(UserData.roomtype == 11)
//					{
//						if(maima > 0)
//						{
//							Laya.timer.once(2000, this, onDelayCallZhuamaYuan,[obj.nZhuaMaCard[0],maima/2]);
//						}
//						else
//						{
//							Laya.timer.once(4000, this, onDelayCallHu);
//						}
//					}
//					
//					
//					
//					if(UserData.roomtype == 9)//
//					{
//						Laya.timer.once(2000, this, onDelayCallZhuama,[obj.nZhuaMaCard]);
//					}
//					else
//					{
//						if(UserData.roomtype != 11)
//						{
//							Laya.timer.once(4000, this, onDelayCallHu);
//						}
//						
//					}
//				}
//				else
//				{
//					Laya.timer.once(4000, this, onDelayCallHu);
//					
//					
//				}
//				
//				
//			}
//			else
//			{
//				onDelayCallHu();
//			}
//		}
		
		
//		protected function onDelayCallZhuamaYuan(cardIdx:Object,value:int):void
//		{
////			view.majiangPage.zhuamaPage.showReault(cardIdx.card,value);
//			EventCenter.instance.once(EventCenter.MAJIANGPAGE_ZHUAMA_COMP,this,showCalculate);
//		}
		
		
//		protected function onDelayCallZhuama(cards:Array):void
//		{
//			
//			var gangtouCards:Array = [];
//			
//			var i:int,len:int = cards.length;
//			for(i=0;i<len;i++)
//			{
//				gangtouCards.push(cards[i]);
//			}
//			
////			view.majiangPage.gangtouPage.showGangtou(gangtouCards);
//			
//			
//			//view.majiangPage.zhuamaPage.showReault(cards[0].card,cards[0].value);//目前只有一个苍蝇
//			//EventCenter.instance.once(EventCenter.MAJIANGPAGE_ZHUAMA_COMP,this,showCalculate);
//			
//			EventCenter.instance.once(EventCenter.MAJIANGPAGE_GANGTOU_COMP,this,showCalculate);
//		}
		
		public function clearTimeDelay():void
		{
			EventCenter.instance.off(EventCenter.GAME_START_SHAIZI_DONGFENG_COMP,this,onFirstShaiziComp,true);
			
			Laya.timer.clear(this,playEachShaiziEff);
			Laya.timer.clear(this,onEachEffEnd);
			
			Laya.timer.clear(this, contineGameQueue);
			
			
			//Laya.timer.clear(this,real_control_game_operation_hu);
			//Laya.timer.clear(this, onDelayCallHu);
			//Laya.timer.clear(this, onDelayCallZhuama);
			
		}
		
		
		public function control_game_operation_hu(info:Object):void
		{
			if(_actived)
			{
				//Laya.timer.once(1000,this,real_control_game_operation_hu,[info]);
			}
		}
		
		protected function onDelayCallHu():void
		{
			if(_actived)
			{
				//先来显示抓码动画
				showCalculate();
			}
		}
		
//		public function showCalculate():void
//		{
//			//return;//tiaozhenghaole gaihuilai
//			
//			view.replayControlView.moveCalculate();
//			
//			view.calculatePage.show();
//			model.setPlayerReadyFalse();
//			HuAnimation.instance.noticeHide();
//			model.isGameStart = false;
//		}
		
//		//桌子信息
//		public function control_game_operation_tableinfo(info:Object):void
//		{
//			if(_actived)
//			{
//				GameModule.instance.majiangGameContext.majiangModel.majiangMsgs.control_game_operation_tableinfo_Info = info;
//				
//				trace("control_game_operation_tableinfo");
//				trace(info);
//				trace("control_game_operation_tableinfo");
//				
//				UserData.roomtype = info.roomtype;
//				
//				if(UserData.roomtype == 11)
//				{
//					GameModule.instance.majiangGameContext.setChairNum(3);
//				}
//				else
//				{
//					GameModule.instance.majiangGameContext.setChairNum(4);
//				}
//				
//				UserData.roomid = info.ncode;
//				
//				UserData.room_round = info.sumcount;
//				
//				UserData.fanshu = info.fengding;
//				
//				view.majiangPage.clockPart.showLeftRoundsNum();
//				
//				view.tableInfoPage.updateRoomId();
//				
//				trace("control_game_operation_tableinfo info.BankerPos " + info.BankerPos);
//				
//				//todo
//			}
//		}
		
//		//玩家信息
//		public function control_game_operation_userinfo(info:Object):void
//		{
//			if(_actived)
//			{
//				model.majiangMsgs.control_game_operation_userinfo_Info = info;
//				
//				trace("control_game_operation_userinfo111111");
//				trace(info);
//				trace("control_game_operation_userinfo");
//				
//				if(info.reconnect == 1)
//				{
//					view.majiangPage.reset();
//					if(UserData.isReplay == false)
//					{
//						model.reset();
//					}
//				}
//				
//				model.updatePlayerInfoVec(info.user);
//				
//				//第一次进来需要
//				var obj:Object = model.majiangMsgs.control_game_operation_tableinfo_Info;
//				
//				if(obj && obj.roomtype == 8)//这个是百搭
//				{
//					model.baida[0] = obj.fancard;
//					model.baida[1] = obj.magiccard;
//				}
//				else
//				{
//					view.majiangPage.baidaPart.hide();
//				}
//				
//				if(obj.curcount == 0)//这个是第一局
//				{
//					view.playerInfoPage.showBtnsAfterHu();
//				}
//				else
//				{
//					view.playerInfoPage.hideBtnsByGameStart();
//				}
//				
//				view.playerInfoPage.updatePlayerInfos(model.playerInfoVec);
//				
//				trace("model.playerInfoVec[model.selfChairPos].piao:: " + model.playerInfoVec[model.selfChairPos].piao);
//				
//				//view.calculatePage.perPage.getPiaoSelePart().seleIdx(model.playerInfoVec[model.selfChairPos].piao);
//				//这个地方
//				
//				//todo 断线重连先不管
//				
//				//判断是不是断线重连
//				//如果是断线重连
//				
//				if(info.reconnect == 1)
//				{
//					//view.majiangPage.reset();
//					
//					if(obj.roomstate  == 0 || obj.roomstate  == 5)//游戏还没有开始
//					{
//						
//						if(obj.roomstate == 5)//游戏结束
//						{
//							view.playerInfoPage.hideReadyBtn();
//							if(model.playerInfoVec[model.selfChairPos].readystate == true)
//							{
//								return;
//							}
//							else
//							{
//								model.isNeedSkipHuAni = true;
//								model.isGameStart = true;
//								
//							}
//						}
//						else
//						{
//							return;
//						}
//					}
//					else
//					{
//						model.isGameStart = true;
//					}
//					if(obj && obj.roomtype == 8)//这个是百搭
//					{
//						view.majiangPage.baidaPart.showBaida(model.baida[1],model.baida[0]);
//					}
//					
//					view.playerInfoPage.updatePlayerInfos(model.playerInfoVec);
//					
//					trace("zhuangpos obj::::" + obj);
//					trace("zhuangpos roomstate::::" + obj.roomstate);
//					view.playerInfoPage.showZhuang();
//					
//					view.majiangPage.clockPart.showLeftRoundsNum();
//					view.startGame();
//					view.playerInfoPage.hideReadySimbol();
//					view.playerInfoPage.hideBtnsByGameStart();
//					
//					//更新所有牌的数据
//					model.updateCardsByReenter();
//					
//					
//					//刷一遍听牌
//					
//					//碰杠来一遍
//					
//					for(i=0;i<model.reenterHuCardsVec.length;i++)
//					{
//						if(model.reenterHuCardsVec[i].length > 0 && model.isTingVec[i])
//						{
//							model.TingHuCardVec[i] = model.reenterHuCardsVec[i];
//							
//							view.majiangPage.hupaiTipPart.showHuTip(i,model.reenterHuCardsVec[i]);
//						}
//					}
//					
//					var i:int;
//					var len:int = model.chairNum;
//					
//					var haveClock:Boolean = false;
//					
//					for(i=0;i<len;i++)
//					{
//						if(reenterUpdateOnePosView(i) ==  true)
//						{
//							haveClock = true;
//						}
//					}
//					
//					if(UserData.isReplay)
//					{
//						model.leftDesktopCardsNum = info.remaincard;
//					}
//					else
//					{
//						model.leftDesktopCardsNum = model.majiangMsgs.control_game_operation_tableinfo_Info.remaincard;
//					}
//					
//					
//					view.majiangPage.clockPart.noticeShowLeftCardsNum();
//					
//					//把最后一个出的牌的小箭头显示出来
//					var pos:int = obj.CurrdOutCardPos;
//					view.majiangPage.outputPart.showCurSimbolByPos(pos);
//					
//					if(haveClock == false)
//					{
//						view.majiangPage.clockPart.noticeShowClock(pos,10);
//					}
//					
//					view.majiangPage.outputPart.showStartImg();
//					
//					for(i=0;i<model.isTingVec.length;i++)
//					{
//						if(model.isTingVec[i])
//						{
//							view.majiangPage.handPart.showTinged(i);
//							view.playerInfoPage.updateTingImg(i);
//						}
//						
//					}
//					
//					
//					
//					
//				}
//			}
//		}
		
//		/**更新一个方向上的界面*/
//		protected function reenterUpdateOnePosView(pos:int):Boolean
//		{
//			var i:int = 0;
//			var len:int;
//			
//			len = model.anGangVec[pos].length;
//			for(i=0;i<len;i++)
//			{
//				view.majiangPage.pengGangPart.gang(model.anGangVec[pos][i],pos,1);
//			}
//			//补花
//			for(i=0;i<model.huaVec[pos].length;i++)
//			{
//				view.majiangPage.showBuhua(model.huaVec[pos][i],pos,false);  //断线重连的时候
//			}
//			len = model.mingGangVec[pos].length;
//			
//			for(i=0;i<len;i++)
//			{
//				view.majiangPage.pengGangPart.gang(model.mingGangVec[pos][i],pos,2);
//			}
//			
//			len = model.pengVec[pos].length;
//			
//			for(i=0;i<len;i++)
//			{
//				view.majiangPage.pengGangPart.peng(model.pengVec[pos][i],pos);
//			}
//			
//			len = model.chiVec[pos].length;
//			
//			for(i=0;i<len;i++)
//			{
//				view.majiangPage.pengGangPart.chi(model.chiVec[pos][i],pos);
//			}
//			
//			if(pos != model.selfChairPos)
//			{
//				view.majiangPage.handPart.updateOnePosAllCards(pos,model.allCardsVec[pos]);
//				view.majiangPage.handPart.updateTheFourteenCard(pos,model.theFourteenCardVec[pos]);
//			}
//			else
//			{
//				trace("reenterUpdateOnePosView pos::" + pos);
//				for(i=0;i<model.allCardsVec[pos].length;i++)
//				{
//					trace(" i::" + model.allCardsVec[pos][i]);
//				}
//				
//				view.majiangPage.handPart.updateOnePosAllCards(pos,model.allCardsVec[pos]);
//				view.majiangPage.handPart.updateTheFourteenCard(pos,model.theFourteenCardVec[pos]);
//			}
//			
//
//			
//			
//			if(model.reenterOutpuCardsVec[pos])
//			{
//				len = model.reenterOutpuCardsVec[pos].length;
//				for(i=0;i<len;i++)
//				{
//					view.majiangPage.outputPart.showOneCardByPos(pos,model.reenterOutpuCardsVec[pos][i].card,false,false);//小箭头都不显示
//					
//					if(model.reenterOutpuCardsVec[pos][i].isPeng == 1)//如果是碰掉或者是杠掉的
//					{
//						view.majiangPage.outputPart.noticeHasPengGangByPos(pos);
//					}
//				}
//			}
//			
//			
//			var arr:Array;
//			if(model.theFourteenCardVec[pos] != -1)
//			{
//				arr = model.allCardsVec[pos].concat(model.theFourteenCardVec[pos]);
//			}
//			else
//			{
//				arr = model.allCardsVec[pos];
//			}
//			
//			var reRusult:Boolean = false;
//			
//			if(arr.length%3 == 2)//这个家伙可以操作
//			{
//				view.majiangPage.handPart.canControl(pos,true);
//				view.majiangPage.clockPart.noticeShowClock(pos,10);
//				
//				reRusult = true;
//			}
//			else
//			{
//				view.majiangPage.handPart.canControl(pos,false);
//			}
//			
//			view.playerInfoPage.updateHua(pos);
//			
//			return reRusult;
//			
//		}
		
//		public function control_game_operation_ready(info:Object):void
//		{
//			if(_actived)
//			{
//				
//				
//				trace("control_game_operation_ready");
//				
//				trace(info);
//				
//				trace("control_game_operation_ready");
//				
//				if(model.isGameStart == true)
//				{
//					return;
//				}
//				
//				if(info.rel != 1)
//				{
//					return;
//				}
//				
//				SoundPlay.instance.playReadySound();
//				GameModule.instance.majiangGameContext.majiangModel.majiangMsgs.control_game_operation_ready_Info = info;
//				
////				optional int32 uid =1 [default = 0];//用户ID
////				optional int32 pos =2 [default = 0];//用户位置
//				
//				//重新设置游戏，准备新的一局
//				model.updateReadyState(info.pos,true,info.piao);
//				
//				
//				view.playerInfoPage.updatePlayerInfos(model.playerInfoVec,false);
//				
//				if(info.pos == model.selfChairPos)
//				{
//					//view.calculatePage.perPage.getPiaoSelePart().seleIdx(info.piao);
//					
//					view.playerInfoPage.hideReadyBtn();
//					view.playerInfoPage.hideZhuang();
//					trace("ready..........");
//					
//					view.calculatePage.reset();//影藏结算界面
//					view.calculatePage.reset();//影藏结算界
//					
//					model.reset();
//					view.majiangPage.reset();
//				}
//				
//				
//				//todo
//			}
//		}
		
		public function resetSelf():void
		{
			view.playerInfoPage.hideReadyBtn();
			view.playerInfoPage.hideZhuang();
			
			view.calculatePage.reset();//影藏结算界面
			model.reset();
			view.majiangPage.reset();
		}
		
//		/**总成绩*/
//		public function control_game_settlement(info:Object):void
//		{
//			if(_actived)// 5742108080
//			{
//				GameModule.isSettlement = true;
//				
//				GameModule.instance.majiangGameContext.majiangModel.majiangMsgs.control_game_settlement_Info = info;
//				
//				trace("control_game_settlement");
//				trace(info);
//				trace("control_game_settlement");
//				
//				model.processRoundData();
//				
//				//this.notify(MsgNames.SOCKET_SEND,MsgTypes.BASE_QUEUE,PomeloMessage.hall_g_o,{},onGOCallBack);
//				
//				//todo
//			}
//		}
		
		
//		public function control_game_mj_msg(info:Object):void
//		{
//			if(_actived)
//			{
//				trace("control_game_mj_msg");
//				trace(info);
//				trace("control_game_mj_msg");
//				
//				model.majiangMsgs.control_game_mj_msg_Info = info;
//				
//				//				判断有没有玩家和这个玩家的ip相同
//				var i:int,j:int,len:int = model.playerInfoVec.length;
//				var equalArr:Array = [];
//				
//				//如果是自己进来 看别人就行了 我们支持三人和四人都行
//				var ip:String;
//				var str:String = "";
//				var haveSingleIpArr:Array = [];
//				
//				if(info.pos == model.selfChairPos)
//				{
//					for(i=0;i<len-1;i++)
//					{
//						var arr:Array = [];
//						for(j=i+1;j<len;j++)
//						{
//							if(model.playerInfoVec[j] && model.playerInfoVec[i] &&
//								model.playerInfoVec[j].ip == model.playerInfoVec[i].ip)//存在并ip相同
//							{
//								if(model.playerInfoVec[j].pos != model.selfChairPos && 
//									model.playerInfoVec[i].pos != model.selfChairPos)//和自己没有关系
//								{
//									if(haveSingleIpArr.indexOf(model.playerInfoVec[j].ip) == -1)
//									{
//										if(arr.length == 0)
//										{
//											arr = [model.playerInfoVec[i],model.playerInfoVec[j]];
//										}
//										else
//										{
//											arr.push(model.playerInfoVec[j]);
//										}
//									}
//									
//									
//								}
//							}
//						}
//						
//						if(arr.length != 0)
//						{
//							equalArr.push(arr);
//							haveSingleIpArr.push(arr[0].ip);
//						}
//						
//					}
//					
//					if(equalArr.length > 0)//有相同的并提示出来
//					{
//						for(i=0;i<equalArr.length;i++)
//						{
//							var tempArr:Array = equalArr[i];
//							var str1:String = "";
//							
//							for(var k:int=0;k<tempArr.length;k++)
//							{
//								if(k == 0)
//								{
//									str1 = "玩家["+tempArr[k].nickname+"]与";
//								}
//								else
//								{
//									if(k == tempArr.length-1)
//									{
//										str1 += "玩家["+tempArr[k].nickname+"]ip相同，ip：" + tempArr[k].ip + " ";
//									}
//									else
//									{
//										str1 += "玩家["+tempArr[k].nickname+"]、";
//									}
//								}
//							}
//							
//							str += str1;
//						}
//						
//						//QuickUtils.PopAlert(str);
//					}
//					
//				}
//				else//这个是别人，那就判断
//				{
//					ip = info.ip;
//					
//					for(i=0;i<len;i++)
//					{
//						if(model.playerInfoVec[i]&&model.playerInfoVec[i].pos != info.pos &&
//							model.playerInfoVec[i].ip == info.ip && model.playerInfoVec[i].pos != model.selfChairPos)//不是同一个人ip相同了
//						{
//							equalArr.push(model.playerInfoVec[i]);
//						}
//					}
//					
//					if(equalArr.length > 0)
//					{
//						str = "玩家["+info.nickname+"]与";
//						
//						for(i=0;i<equalArr.length;i++)
//						{
//							if(i == equalArr.length-1)
//							{
//								str += "玩家["+equalArr[i].nickname+"]ip相同，ip：" + ip;
//							}
//							else
//							{
//								str += "玩家["+equalArr[i].nickname+"]、";
//							}
//						}
//						
//						//QuickUtils.PopAlert(str);
//					}
//				}
//				
//				model.updateOnePlayerInfo(info);
//				view.playerInfoPage.updateOnePlayerInfo(info);
//				//todo
//			}
//		}
		
//		public function control_game_operation_mopai(info:Object):void
//		{
//			if(actived)
//			{
//				
//				trace("control_game_operation_mopai");
//				trace(info);
//				model.leftDesktopCardsNum -= 1;
//				var cardIdx:int = info.card;
//				if(model.judgeHua(cardIdx) == true)
//				{
//					model.huaVec[info.pos].push(cardIdx);
//					view.majiangPage.showBuhua(cardIdx,info.pos,true,true);//补花的牌
//					
//					view.playerInfoPage.updateHua(info.pos);
//					
//					SoundManager.playSound(SoundPlay.instance.getCardPath(model.playerInfoVec[info.pos].sex,info.card) , 1);
//
//					return;
//				}
//				
//				model.majiangMsgs.control_game_operation_mopai_info = info;
//				model.theFourteenCardVec[info.pos] = info.card;
//				
//				
//				if(info.pos == model.selfChairPos)
//				{
//					if(model.isTingVec[info.pos])
//					{
//						var arr:Array = model.getHuTipArr(info.card);
//						view.majiangPage.hupaiTipPart.showHuTip(info.pos,arr);
//					}
//				}
//			
//				
//				view.majiangPage.handPart.updateTheFourteenCard(info.pos,model.theFourteenCardVec[info.pos]);
//				view.majiangPage.handPart.canControl(info.pos,true);
//				
//				view.majiangPage.clockPart.noticeShowClock(info.pos,info.waittime);
//				view.majiangPage.clockPart.noticeShowLeftCardsNum();
//				
//				if(UserData.isReplay)
//				{
//					view.majiangPage.handleBtns.reset();
//				}
//				
//				
//				SoundPlay.playEffect("dzpk_deal");
//				
//				//自动出牌，测试用
//				
//				if(model.isAutoHandle)
//				{
//					Laya.timer.frameOnce(60,this,discard,[info.card]);
//				}
//				
//			}
//		}
		
		
		
//		protected var jiesanAlertArr:Array;
//		protected var showDissolveArr:Array;
//		
//		/**解散桌子通知*/
//		public function control_game_operation_jieshan(info:Object):void
//		{
//			if(actived)
//			{
//				trace("control_game_operation_jieshan");
//				trace(info);
//				trace("control_game_operation_jieshan");
//				
//				model.majiangMsgs.control_game_operation_jieshan_info = info;
//				
//				var isSelfHave:Boolean = false;
//				
//				var applayName:String = model.getPlayerNicknameByUid(info.uid);
//				var leftTime:int = info.TimeOut;
//				
//				
//				var users:Array = info.userinfo as Array;
//				var i:int,len:int = users.length;
//				
//				for(i=0;i<len;i++)
//				{
//					users[i].name = model.getPlayerNicknameByUid(users[i].uid);
//					users[i].result = MajiangModel.DissolveResult_REF[users[i].state];
//					
//					if(users[i].state != 0 && users[i].uid == model.getPlayerUidByPos(model.selfChairPos))//是自己，并且已经操作过了
//					{
//						isSelfHave = true;
//					}
//				}
//				
//				
//				if(info.uid == UserData.selfuid)
//				{
//					isSelfHave = true;
//				}
//				
//
//				var nickname:String = model.getPlayerNicknameByUid(info.uid);
//				
//				
//				//optional int32 ntype =2 [default =0];//类型, 0是解散信息。 1是牌局开始前桌主解散 2是第一局没有打完解散，房卡退还 3解散成功 4解散失败
//
//				
//				switch(info.ntype)
//				{
//					case 0:
//						if(isSelfHave)
//						{
//							if(showDissolveArr)
//							{
//								(showDissolveArr[0] as DissolveMessagePage).update(applayName,leftTime,users);
//							}
//							else
//							{
//								//showDissolveArr = QuickUtils.showDissolveRoomDetail(applayName,leftTime,users);
//							}
//						}
//						else
//						{
//							trace("jiesanAlertArr::"+jiesanAlertArr);
//							if(jiesanAlertArr == null)
//							{
//								//jiesanAlertArr = QuickUtils.PopAlert(nickname+"请求解散桌子，是否同意？","提示",alertCallBack);
//							}
//						}
//						break;
//					case 1://
//						
//						if(jiesanAlertArr != null)
//						{
//							jiesanAlertArr[0].removeSelf();
//							jiesanAlertArr[1].removeSelf();
//							jiesanAlertArr = null;
//						}
//						if(showDissolveArr != null)
//						{
//							showDissolveArr[0].removeSelf();
//							showDissolveArr[1].removeSelf();
//							showDissolveArr = null;
//						}
//						endGameGotoHall();
//						if(UserData.audit==0){
//						if(UserData.isReplay)
//						{
////							QuickUtils.PopPanel("牌局尚未开始，桌主解散房间，房卡退还。","提示",null,null,"center",true);
//						}
//						else
//						{
////							QuickUtils.PopPanel("牌局尚未开始，桌主解散房间，房卡退还。");
//						}
//						}
//						
//						break;
//					case 2:
//						
//						if(jiesanAlertArr != null)
//						{
//							jiesanAlertArr[0].removeSelf();
//							jiesanAlertArr[1].removeSelf();
//							jiesanAlertArr = null;
//						}
//						if(showDissolveArr != null)
//						{
//							showDissolveArr[0].removeSelf();
//							showDissolveArr[1].removeSelf();
//							showDissolveArr = null;
//						}
//						if(UserData.audit==0){
//						if(UserData.isReplay)
//						{
////							QuickUtils.PopPanel("房间已解散，房卡退还。","提示",null,null,"center",true);
//						}
//						else
//						{
////							QuickUtils.PopPanel("房间已解散，房卡退还。");
//						}
//						}
//						
//						break;
//						
//					case 3:
//						if(jiesanAlertArr != null)
//						{
//							jiesanAlertArr[0].removeSelf();
//							jiesanAlertArr[1].removeSelf();
//							jiesanAlertArr = null;
//						}
//						if(showDissolveArr != null)
//						{
//							showDissolveArr[0].removeSelf();
//							showDissolveArr[1].removeSelf();
//							showDissolveArr = null;
//						}
//						if(UserData.isReplay)
//						{
////							QuickUtils.PopPanel("房间解散成功。","提示",null,null,"center",true);
//						}
//						else
//						{
////							QuickUtils.PopPanel("房间解散成功。");
//						}
//						
//						break;
//					case 4:
//						
//						if(UserData.isReplay)
//						{
////							QuickUtils.PopPanel("解散桌子失败！","提示",null,null,"center",true);
//						}
//						else
//						{
////							QuickUtils.PopPanel("解散桌子失败！");
//						}
//						
//						if(jiesanAlertArr != null)
//						{
//							jiesanAlertArr[0].removeSelf();
//							jiesanAlertArr[1].removeSelf();
//							jiesanAlertArr = null;
//						}
//						if(showDissolveArr != null)
//						{
//							showDissolveArr[0].removeSelf();
//							showDissolveArr[1].removeSelf();
//							showDissolveArr = null;
//						}
//						break;
//					default:
//						break;
//				}
//			}
//		}
//		
//		protected function onGOCallBack(data:*):void
//		{
//			trace("onGOCallBack data::" + data);
//		}
		
//		/**扣牌返回通知*/
//		public function control_game_operation_koupai(info:Object):void
//		{
//			if(actived)
//			{
//				trace("control_game_operation_koupai");
//				trace(info);
//				trace("control_game_operation_koupai");
//				
//				model.majiangMsgs.control_game_operation_koupai_info = info;
//				
//				
//				var arr:Array = info.koucards as Array;
//				
//				var i:int,len:int = arr.length;
//				
//				model.kouCards = [];
//				for(i=0;i<len;i++)
//				{
//					model.kouCards.push(arr[i].card);
//				}
//				
//				model.tingCardsOfKouBtn = [];
//				arr = info.ting as Array;
//				len = arr.length;
//				for(i=0;i<len;i++)
//				{
//					model.tingCardsOfKouBtn.push(arr[i].card);
//				}
//				
//				view.majiangPage.handPart.showCanKouCards(model.kouCards);
//				
//				if(model.koupaiwancheng == true)//已经扣牌完成了，走一遍扣牌完成
//				{
//					view.majiangPage.handPart.showCanTingCards(model.tingCardsOfKouBtn);
//					view.majiangPage.hideControlTip();
//				}
//			}
//		}
		
//		public function control_game_operation_hucard(info:Object):void
//		{
//			model.majiangMsgs.control_game_operation_hucard_info = info;
//			
//			//view.majiangPage.hupaiTipPart.showHuTip(model.selfChairPos,info.cards);
//			
//		}
		
		
//		protected function alertCallBack(idx:int):void	
//		{
//			
//			jiesanAlertArr = null;
//			
//			trace("alertCallBack idx::" + idx);
//			
//			var cmd:Object = new Object();
//			
//			if(idx == 0)//同意
//			{
//				cmd.cmd = "JIES" + 1;
//			}
//			else//拒绝
//			{
//				cmd.cmd = "JIES" + 0;
//			}
//			
//			GameModule.instance.majiangGameContext.majiangGameController.sendMsgCommond(cmd,false);
//			
//		}
		
		//protected var popBox:PopBox;
		
//		/**踢人请求*/
//		public function reqTiren(pos:int):void
//		{
//			var nickName:String = model.playerByPos(pos).nickname;
//			
////			popBox = QuickUtils.popMessageBox("你确定要踢掉玩家【"+ nickName +"】",
////				PopBox.BTN_LABEL_QUEDINGQUXIAO,tirenCallBack,"提示","center",[pos]);
//		}
		
//		protected function tirenCallBack(idx:int,params:Array=null):void
//		{
//			if(idx == 0)//确定了
//			{
//				if(params != null)
//				{
//					var pos:int = params[0];
//					
//					var obj:Object = new Object();
//					obj.cmd = "ZZTR" + pos;
//					GameModule.instance.majiangGameContext.majiangGameController.sendMsgCommond(obj,false);
//				}
//			}
//		}
		
//		/**踢人返回*/
//		public function control_game_operation_kill(info:Object):void
//		{
//			model.majiangMsgs.control_game_operation_kill_info = info;
//			
//			trace("control_game_operation_kill");
//			trace(info);
//			trace("control_game_operation_kill");
//			
//			if(info.rel == 1)//表示踢人成功
//			{
//				var pos:int = info.pos;
//				
//				var nickname:String = model.playerByPos(pos).nickname;
//				
//				model.playerInfoVec[pos] = null;
//				view.playerInfoPage.resetOnePos(pos);
//				
//				if(pos == model.selfChairPos)
//				{
//					endGameGotoHall();
//					
////					QuickUtils.popMessageBox("你已经被房主踢出房间了！",
////						PopBox.BTN_NONE,null,"提示","center");
//				}
//				else
//				{
////					QuickUtils.popMessageBox("玩家【"+ nickname +"】已经被房主踢出房间了！",
////						PopBox.BTN_NONE,null,"提示","center");
//				}
//			}
//			else
//			{
////				QuickUtils.popMessageBox("踢人失败！",
////					PopBox.BTN_NONE,null,"提示","center");
//			}
//			
//		}
		
//		/**请求退出房间*/
//		public function reqExitroom():void
//		{
////			popBox = QuickUtils.popMessageBox("你确定要退出房间？",
////				PopBox.BTN_LABEL_QUEDINGQUXIAO,exitroomCallBack,"提示","center");
//		}
		
//		protected function exitroomCallBack(idx:int):void
//		{
//			if(idx == 0)//确定了
//			{
//				var obj:Object = new Object();
//				obj.cmd = "TTFJ";
//				GameModule.instance.majiangGameContext.majiangGameController.sendMsgCommond(obj,false);
//			}
//		}
		
//		/**退出游戏返回*/
//		public function control_game_operation_exitroom(info:Object):void
//		{
//			model.majiangMsgs.control_game_operation_exitroom_info = info;
//			
//			if(info.rel == 1)
//			{
//				var pos:int = model.getPlayerPosByUid(info.uid);
//				
//				var nickname:String = model.playerInfoVec[pos].nickname;
//				
//				model.playerInfoVec[pos] = null;
//				view.playerInfoPage.resetOnePos(pos);
//				
//				if(pos == model.selfChairPos)
//				{
//					endGameGotoHall();
//					
////					QuickUtils.popMessageBox("你已经离开房间了！",
////						PopBox.BTN_NONE,null,"提示","center");
//				}
//				else
//				{
////					QuickUtils.popMessageBox("玩家【"+ nickname +"】已经离开房间了！",
////						PopBox.BTN_NONE,null,"提示","center");
//				}
//			}
//			else
//			{
////				QuickUtils.popMessageBox("离开房间失败！",
////					PopBox.BTN_NONE,null,"提示","center");
//			}
//		}
		
		protected function get model():MajiangModel
		{
			return GameModule.instance.gameContext.model;
			
		}
		
		protected function get view():MajiangGameView
		{
			return GameModule.instance.gameContext.view;
		}
		
		public function sendMsgCommond(commondId:Object,needCantrol:Boolean=true):void
		{
			//this.notify(MsgNames.SOCKET_SEND,MsgTypes.BASE_QUEUE,common.PomeloMessage.game,commondId);
			if(needCantrol)
			{
				view.majiangPage.handPart.canControl(model.selfChairPos,false);
			}
			
			trace(commondId);
//			for(var i:int=0;i<100000;i++)
//			{
//				EventCenter.instance.event(EventCenter.SOCKET_SEND,commondId);
//			}
			EventCenter.instance.event(EventCenter.SOCKET_SEND,commondId);
//			var obj:Object = {lala:"dd"}
//			
//			EventCenter.instance.event(EventCenter.SOCKET_SEND,obj);
			
//			commondId.cmd = PRE_COMM_ADD + commondId.cmd;
//			
//			trace("sendMsgCommond ::" + commondId.cmd);
//			
//			this.notify(MsgNames.SOCKET_SEND,MsgTypes.BASE_QUEUE,PomeloMessage.hall_g_s,commondId);
//			
//			//this.notify(MsgNames.SOCKET_SEND,MsgTypes.BASE_QUEUE,PomeloMessage.game,obj);
//			
//			if(needCantrol)
//			{
//				view.majiangPage.handPart.canControl(model.selfChairPos,false);
//			}
			
			
		}
		
//		public function onConnetTimeOut(msg:Object):void
//		{
//			var pos:int = model.getPlayerPosByUid(msg.uid);
//			var dir:int = model.getChairDirByPos(pos);
//			
//			view.playerInfoPage.setGrayhead(dir,msg.state == 0,false);
//		}
		
	
		
//		private function onSelfConnetTimeOut(msg:Message):void
//		{
//			trace("connect timeout");
//			var dir:int = model.getChairDirByPos(model.selfChairPos);
//			view.playerInfoPage.setGrayhead(dir,msg.params[0],true);
//			msg.complete();
//		}
		
		/**暂停游戏消息队列*/
		public function pauseGameQueue():void
		{
			
			if(UserData.isReplay)
			{
				model.needCutdownReplay = true;
			}
			else
			{
				MessageManager.instance.pauseQueue(MessageManager.GAME);
			}
		}
		
		/**继续游戏消息队列*/
		public function contineGameQueue():void
		{
			if(UserData.isReplay)
			{
				model.needCutdownReplay = false;
			}
			else
			{
				MessageManager.instance.continueQueue(MessageManager.GAME);
			}
			
		}
		
		public var dissolvePage:NewDissolvePage;
		
		public function popDissolveRoomDetail(info:Object):void
		{
			if(dissolvePage == null)
			{
				dissolvePage = new NewDissolvePage();
			}
			
			dissolvePage.update(info);
			
			QuickUtils.AddCenter(dissolvePage,UIManager.instance.popLayer);
			
			if(QuickUtils.popBox)
			{
				QuickUtils.popBox.onhide();
			}
		}
		
		public function hideDissolveRoomDetail():void
		{
			if(dissolvePage && dissolvePage.parent)
			{
				dissolvePage.parent.removeChild(dissolvePage);
			}
		}
		
		/**游戏时间已经结束*/
		public function onTimeOver():void
		{
			if(!model.isGameStart)
			{
				if(view.calculatePage.perPage.isShow)//小结算界面显示 ，重置小结算界面状态
				{
					view.calculatePage.perPage.timeOver();
				}
				else//显示返回界面
				{
					view.calculatePage.perPage.onClickConfirmBtn();
				}
			}
				
		}
		
		public function sendRandom():void
		{
			return;
			var idx:int = Math.round(Math.random()*4);
			
			switch(idx)
			{
				case 0:
					var putCardObj:Object = {SID:UserData.SID,CID:Math.round(Math.random()*40),Ting:Math.round(Math.random())}; 
					sendMsgCommond(ProtoMessage.getProtoMessage(net.Message.Put_Card,putCardObj));
					break;
				case 1:
					var chiObj:Object = {SID:UserData.SID,CID1:Math.round(Math.random()*40),CID2:Math.round(Math.random()*40),CID3:Math.round(Math.random()*40),DefCID:Math.round(Math.random()*40)};
					sendMsgCommond(ProtoMessage.getProtoMessage(Message.Chow,chiObj));
					break;
				case 2:
					var pengObj:Object = {SID:UserData.SID,CID:Math.round(Math.random()*40),DefCID:Math.round(Math.random()*40)};
					sendMsgCommond(ProtoMessage.getProtoMessage(Message.Peng,pengObj));
					break;
				case 3:
					var gangObj:Object = {SID:UserData.SID,CID:Math.round(Math.random()*40)};
					GameModule.instance.gameContext.controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Kong,gangObj));
					break;
				case 4:
					var readObj:Object = {sid:UserData.SID};
					sendMsgCommond(ProtoMessage.getProtoMessage(Message.User_Ready,readObj));
					break;
				case 5:
					break;
				case 6:
					break;
				case 7:
					break;
				case 8:
					break;
				case 9:
					break;
				case 10:
					break;
			}
			
		}
		
		//重播上一步回复数据专用
		public function recoveryByReplayData(replayData:Object):void
		{
			if(actived)
			{
				//首先回复玩家手里的牌
				model.recoveryByReplayData(replayData);
				view.majiangPage.handPart.updateAllCards(model.allCardsVec);
				view.majiangPage.handPart.updateTheFourteenCards(model.theFourteenCardVec);
				
				var i:int,len:int = model.chairNum;
				for(i=0;i<len;i++)
				{
					//恢复花牌
					view.majiangPage.huaPart.showBuhuaCards(model.huaVec[i],i);
					
					//恢复打出的牌
					view.majiangPage.outputPart.showCardsByPos(i,model.outputCardsVec[i]);
					
					//恢复吃的牌
					view.majiangPage.pengGangPart.recoveryChi(model.chiVec[i],i);
					
					//恢复碰的牌
					view.majiangPage.pengGangPart.recoveryPeng(model.pengVec[i],i,model.pengFromVec[i]);
					
					//恢复暗杠的牌
					view.majiangPage.pengGangPart.recoveryGang(model.mingGangVec[i],i,2,model.mingGangFromVec[i]);
					
					//恢复明杠的牌
					view.majiangPage.pengGangPart.recoveryGang(model.anGangVec[i],i,1,model.anGangFromVec[i]);
					
					
				}
				
				view.majiangPage.handPart.canControl(model.curHandlePos,true);
				view.majiangPage.clockPart.noticeShowClock(model.curHandlePos,10);
				view.majiangPage.clockPart.noticeShowLeftCardsNum();
				view.majiangPage.outputPart.showCurSimbolByPos(model.curOutPutPos);
				
				
				
				//view.majiangPage.outputPart.showOneCard(
					
				
				
			}
		}
		
		/**玩家点了过*/
		public function pass(info:Object):void
		{
			if(UserData.isReplay)
			{
				if(info.SID == UserData.selfuid)
				{
					view.majiangPage.handleBtns.hide();
				}
				else
				{
					QuickUtils.popMessage(model.getPlayerNicknameByUid(parseInt(info.SID)) + "选择了过！");
				}
			}
		}
		
		/**显示选牌效果*/
		public function showPreDiscardEff(cardIdx:int):void
		{
			//手里的牌
			view.majiangPage.handPart.showPreDiscardEff(cardIdx);
			//打出去的牌
			view.majiangPage.outputPart.showPreDiscardEff(cardIdx);
			//吃碰杠的牌
			view.majiangPage.pengGangPart.showPreDiscardEff(cardIdx);
		}
		
		/**赢藏选牌效果*/
		public function hidePreDiscardEff():void
		{
			view.majiangPage.handPart.hidePreDiscardEff();
			view.majiangPage.outputPart.hidePreDiscardEff();
			view.majiangPage.pengGangPart.hidePreDiscardEff();
		}
			
		
		
	}
}