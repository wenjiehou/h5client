package modules.nnGame.inerGame.view
{
	import common.CommonModule;
	import common.event.EventCenter;
	import common.view.PopBox;
	
	import hall.HallModule;
	
	import laya.events.Event;
	
	import modules.nnGame.NnGameModule;
	import modules.nnGame.inerGame.controller.NnController;
	import modules.nnGame.inerGame.model.NnModel;
	import modules.nnGame.inerGame.view.playerInfoPart.BasePlayerInfoItem;
	
	import net.Message;
	import net.ProtoMessage;
	
	import ui.niuniuGame.PlayerInfoPageUI;
	

	public class PlayerInfoPage
	{
		protected var _skin:PlayerInfoPageUI;
		
		protected var _dir0:BasePlayerInfoItem;
		protected var _dir1:BasePlayerInfoItem;
		protected var _dir2:BasePlayerInfoItem;
		protected var _dir3:BasePlayerInfoItem;
		protected var _dir4:BasePlayerInfoItem;
		protected var _dir5:BasePlayerInfoItem;
		protected var _dir6:BasePlayerInfoItem;
		protected var _dir7:BasePlayerInfoItem;
		protected var _dir8:BasePlayerInfoItem;
		protected var _dir9:BasePlayerInfoItem;
		
		
		
		
		
		protected var _PosChairVec:Vector.<BasePlayerInfoItem> = new Vector.<BasePlayerInfoItem>();
		
		protected function get model():NnModel
		{
			return NnGameModule.instance.gameContext.model;
		}
		
		protected function get controller():NnController
		{
			return NnGameModule.instance.gameContext.controller;
		}
		
		public function PlayerInfoPage(skin:PlayerInfoPageUI)
		{
			_skin = skin;
			_skin.mouseThrough = true;
			_dir0 = new BasePlayerInfoItem(_skin.pos0);
			_dir1 = new BasePlayerInfoItem(_skin.pos1);
			_dir2 = new BasePlayerInfoItem(_skin.pos2);
			_dir3 = new BasePlayerInfoItem(_skin.pos3);
			_dir4 = new BasePlayerInfoItem(_skin.pos4);
			_dir5 = new BasePlayerInfoItem(_skin.pos5);
			_dir6 = new BasePlayerInfoItem(_skin.pos6);
			_dir7 = new BasePlayerInfoItem(_skin.pos7);
			_dir8 = new BasePlayerInfoItem(_skin.pos8);
			_dir9 = new BasePlayerInfoItem(_skin.pos9);
			
//			_bottom = new BasePlayerInfoItem(_skin.playerInfo0);
//			_right = new BasePlayerInfoItem(_skin.playerInfo1);
//			_top = new BasePlayerInfoItem(_skin.playerInfo2);
//			_left = new BasePlayerInfoItem(_skin.playerInfo3);
			
			//_PiaoSelePart = new PiaoSelePart(_skin.piaoPart);
			
			_skin.startBtn.visible = false;
			_skin.leaveBtn.visible = false;
			_skin.disbandBtn.visible = false;
			_skin.readyBtn.visible = false;
			
			_skin.startBtn.on(Event.CLICK,this,onClickStartBtn);
			_skin.inviteBtn.on(Event.CLICK,this,onClickInviteBtn);
			
			_skin.leaveBtn.on(Event.CLICK,this,onClickLeaveBtn);
			_skin.disbandBtn.on(Event.CLICK,this,onClickDisbandBtn);
			_skin.readyBtn.on(Event.CLICK,this,onClickReadyBtn);
			_skin.gameEndBtn.on(Event.CLICK,this,onClickEndBtn);
			
			allReset();
			
			
		}
		
		protected function onClickEndBtn(e:Event):void
		{
			onConfirmEnd(0);
			//QuickUtils.popMessageBox("房间已结束！",PopBox.BTN_ENDGAME,this,onConfirmEnd);
		}
		
		protected function onConfirmEnd(idx:int):void
		{
			if(idx == 0)
			{
				//跳转到战绩
				if(AppConfig.isNewHall)
				{
					QuickUtils.gotoHall(1);
				}
				else
				{
					controller.endGameGotoHall();
					Laya.timer.callLater(this,gotoReport);
				}
			}
			else
			{
				//跳转到大厅
				if(AppConfig.isNewHall)
				{
					QuickUtils.gotoHall();
				}
				else
				{
					controller.endGameGotoHall();
				}	
			}
		}
		
		protected function gotoReport():void{
			//			
			HallModule.instance.hallContext.hallView.hallLayer.onRecord({"uniqueCode":UserData.uniqueCode});
		}
		
		protected function onClickStartBtn(e:Event):void
		{
			var startGameObj:Object = {SID:UserData.SID};
			controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Start_Game,startGameObj));
		}
		
		protected function onClickInviteBtn(e:Event):void
		{
			CommonModule.instance.commonContext.view.gameShareView.show();
		}
		
		protected function onClickLeaveBtn(e:Event):void
		{
			var ExitRoomObj:Object = {sid:UserData.SID};
			controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Exit_Room,ExitRoomObj),false);
		}
		
		protected function onClickDisbandBtn(e:Event):void
		{
			if(model.gameHasStarted == false)
			{
				var OwnerDisbandObj:Object = {sid:UserData.SID};
				controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Roomowner_Disband_Room,OwnerDisbandObj),false);
			}
			else
			{
				var obj:Object = {roomId:UserData.roomid};
				EventCenter.instance.event(EventCenter.SOCKET_SEND,ProtoMessage.getProtoMessage(Message.Disband,obj));
			}
		}
		
		/**准备*/
		protected function onClickReadyBtn(e:Event):void
		{
			var obj:Object = {sid:UserData.SID};
			controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.User_Ready,obj));
		}
		
		
		/**更新离开解散按钮的状态*/
		public function updateLeaveDisbandBtns():void
		{
			_skin.leaveBtn.visible = false;
			_skin.disbandBtn.visible = false;
			
			if(model.isGameStart == false && model.srddzMsgs.ACK_RoomInfo.RoundCount > 0 && model.isSelfSitDown)//两局之间
			{
				_skin.readyBtn.visible = true;
			}
			else
			{
				_skin.readyBtn.visible = false;
			}
			
			
			if(model.gameHasStarted == false)//如果游戏没有开始
			{
				if(UserData.selfuid ==model.roomOwnerUid)
				{
					_skin.disbandBtn.visible = true;
				}
				else
				{
					_skin.leaveBtn.visible = true;
				}
			}
			else
			{
				if(model.isSelfSitDown)
				{
					_skin.disbandBtn.visible = true;
				}
				else
				{
					_skin.leaveBtn.visible = true;
				}
				
			}
		}
		
		
		/**显示游戏已经结束按钮*/
		public function showGameEndBtn():void
		{
			_skin.gameEndBtn.visible = true;
		}
		
		
		public function showStartBtn(isShow:Boolean=true):void
		{
			_skin.startBtn.visible = isShow;
		}
		
		/**游戏开始影藏所有按钮*/
		public function hideBtnsByGameStart():void
		{
			_skin.startBtn.visible = false;
			_skin.inviteBtn.visible = false;
			//_PiaoSelePart.hide();
		}
		
		public function updateStartBtn():void
		{
			_skin.startBtn.visible = false;
		}
		
		/***/
		public function updateSitDownUpBtn(needJudge:Boolean=true):void
		{
			needJudge = true;
			if(needJudge)
			{
				if(model.isSelfSitDown && model.gameHasStarted==false)
				{
					
					CommonModule.instance.commonContext.view.functionOption.onClickBtn(false);//false
				}
				else
				{
					
					CommonModule.instance.commonContext.view.functionOption.onClickBtn(true);//
				}
			}
			else
			{
				if(model.isSelfSitDown)
				{
					
					CommonModule.instance.commonContext.view.functionOption.onClickBtn(true);//false
				}
				else
				{
					
					CommonModule.instance.commonContext.view.functionOption.onClickBtn(true);
				}
			}
		}
		
		/**游戏开始之后，显示地主和农民*/
		public function showZhuang():void
		{
			var i:int,len:int = _PosChairVec.length;
			for(i=0;i<len;i++)
			{
				_PosChairVec[i].showZhuang(model.getChairPosByDir(i));
			}
		}
		
		/**更新玩家加倍*/
		public function updateJiabei():void
		{
			var i:int,len:int = _PosChairVec.length;
			for(i=0;i<len;i++)
			{
				_PosChairVec[i].updateJiabei(model.getChairPosByDir(i));
			}
		}
		
		public function hideZhuang():void
		{
			var i:int;
			var len:int = _PosChairVec.length;
			for(i=0;i<len;i++)
			{
				_PosChairVec[i].hideZhuang();
			}
		}
		
		/**隐藏抢庄和下注*/
		public function hideQiangAndXia():void
		{
			var i:int;
			var len:int = _PosChairVec.length;
			for(i=0;i<len;i++)
			{
				_PosChairVec[i].hideQiangAndXia();
			}
		}
		
		/**显示抢庄的倍数*/
		public function showQiangBei(pos:int,beishu:int):void
		{
			_PosChairVec[model.getChairDirByPos(pos)].showQiangBei(pos,beishu);
		}
		
		/**显示玩家下注*/
		public function showXiazhu(pos:int,zhu:int):void
		{
			_PosChairVec[model.getChairDirByPos(pos)].showXiazhu(pos,zhu);
		}
		
		public function hideReadyBtn():void
		{
			_skin.readyBtn.visible = false;
		}
		
		protected function allReset():void
		{
			_dir0.reset();
			_dir1.reset();
			_dir2.reset();
			_dir3.reset();
			_dir4.reset();
			_dir5.reset();
			_dir6.reset();
			_dir7.reset();
			_dir8.reset();
			_dir9.reset();
			_skin.gameEndBtn.visible = false;
			
			//_PiaoSelePart.reset();
		}
		
		/**设置椅子数量*/
		public function setChairNum(num:int=10):void
		{
			_PosChairVec.length = 0;
			
			trace("playerinfo setChairNum::" + num);
			switch(num)
			{
				case 10:_PosChairVec.push(_dir0,_dir1,_dir2,_dir3,_dir4,_dir5,_dir6,_dir7,_dir8,_dir9);
					_dir0.dir = 0;
					_dir1.dir = 1;
					_dir2.dir = 2;
					_dir3.dir = 3;
					_dir4.dir = 4;
					_dir5.dir = 5;
					_dir6.dir = 6;
					_dir7.dir = 7;
					_dir8.dir = 8;
					_dir9.dir = 9;
					break;
//				//				case 4:_PosChairVec.push(_bottom,_right,_top,_left);
//				//					_bottom.dir = 0;
//				//					_right.dir = 1;
//				//					_top.dir = 2;
//				//					_left.dir = 3;
//				//					break;
//				default:_PosChairVec.push(_bottom,_right,_top,_left);
//					_bottom.dir = 0;
//					_right.dir = 1;
//					_top.dir = 2;
//					_left.dir = 3;
//					break;
			}
			
			bigReset();
		}
		
		/**重新进入游戏大的重置*/
		private function bigReset():void
		{
			_skin.startBtn.visible = false;
			_skin.inviteBtn.visible = true;
		}
		
		/**重置*/
		public function reset():void
		{
			var i:int;
			var len:int = _PosChairVec.length;
			for(i=0;i<len;i++)
			{
				
				_PosChairVec[i].reset();
			}
			
			updateSitDownUpBtn();
			_skin.gameEndBtn.visible = false;
			
			
		}
		
		/**带漂reset*/
		public function havePiaoReset():void
		{
			var i:int;
			var len:int = _PosChairVec.length;
			for(i=0;i<len;i++)
			{
				_PosChairVec[i].reset(true);
			}
		}
		
		/**重置某一个玩家*/
		public function resetOnePos(pos:int):void
		{
			var dir:int = model.getChairDirByPos(pos);
			_PosChairVec[dir].reset();
		}
		
		public function hideReadySimbol():void
		{
			var i:int;
			var len:int = _PosChairVec.length;
			for(i=0;i<len;i++)
			{
				_PosChairVec[i].hideReadySimbol();
			}
		}
		/**
		 *显示语音图标 
		 * @param pos
		 * 
		 */		
		public function showVoice(uid:int):void{
			var pos:int =model.getPlayerPosByUid(uid);
			var dir:int = model.getChairDirByPos(pos);
			trace(dir)
			if(dir==-1){
				_skin.laba.visible=true;
				_skin.labaTip.play()
			}else{
				_PosChairVec[dir].voice.visible=true;
				_PosChairVec[dir].voice["ani"].play()
			}
		}
		
		
		
		/**
		 *隐藏语音图标 
		 * @param pos
		 */		
		public function hideVoice(uid:int):void{
			var pos:int = model.getPlayerPosByUid(uid);
			var dir:int = model.getChairDirByPos(pos);
			if(dir==-1){
				_skin.laba.visible=false;
				_skin.labaTip.stop()
			}else{
				_PosChairVec[dir].voice.visible=false;
				_PosChairVec[dir].voice["ani"].stop()
			}
		}
		/**显示一个*/
		public function showReady(pos:int):void
		{
			var dir:int = model.getChairDirByPos(pos);
			_PosChairVec[dir].showReady();
		}
		
		/**刷新一个玩家的数据*/
		public function updateOnePlayerInfo(obj:Object,needFlyImg:Boolean=false):void
		{
			if (obj.pos == -1)
			{
				return;
			}
			var dir:int = model.getChairDirByPos(obj.pos);
			if(dir < _PosChairVec.length)
			{
				_PosChairVec[dir].update(obj,needFlyImg);
			}
			
			
			
		}
		
		
		/**刷新一个玩家的数据*/
		public function updateOnePlayerGolds(obj:Object):void
		{
			var dir:int = model.getChairDirByPos(obj.pos);
			
			if(dir < _PosChairVec.length)
			{
				trace("   updateOnePlayerInfo ::" + dir + " obj.pos::" + obj.pos);
				
				_PosChairVec[dir].updateGolds(obj);
			}
		}
		
		/**播放掉落金币动画*/
		public function playDropJinBiFrom(pos:int,fromPos:int):void
		{

			
			var dir:int = model.getChairDirByPos(pos);
			var fromDir:int =  model.getChairDirByPos(fromPos);
			
			if(dir < _PosChairVec.length)
			{
				if(_PosChairVec[dir].skin.parent)
				{
					_PosChairVec[dir].skin.parent.addChild(_PosChairVec[dir].skin);
				}
				
				_PosChairVec[dir].playDropJinBiFrom(fromDir);
			}
			
		}
		
		/**播放掉落金币动画*/
		public function playDropJinBiTo(pos:int,toPos:int):void
		{
			var dir:int = model.getChairDirByPos(pos);
			var toDir:int =  model.getChairDirByPos(toPos);
			
			if(dir < _PosChairVec.length)
			{
				if(_PosChairVec[dir].skin.parent)
				{
					_PosChairVec[dir].skin.parent.addChild(_PosChairVec[dir].skin);
				}
				_PosChairVec[dir].playDropJinBiTo(toDir);
			}
			
		}
		
		/**根据一个数组来刷新玩家的信息*/
		public function updatePlayerInfos(vec:Vector.<Object>,needResetPiao:Boolean=true,needFlyImg:Boolean=false):void
		{
			trace("updatePlayerInfos ::" +  vec.length);
			reset();
			
//			if(needResetPiao)
//			{
//				_PiaoSelePart.reset();
//			}
			
			var obj:Object;
			var i:int;
			var len:int = vec.length;
			
			for(i=0;i<len;i++)
			{
				if(vec[i])
				{
					trace("updatePlayerInfos i::" +  i);
					updateOnePlayerInfo(vec[i],needFlyImg);
				}
				//				updateHua(vec[i].pos);
			}
		}
		
		
		/**更新玩家的金币*/
		public function updateGolds(vec:Vector.<Object>):void
		{
			trace("updatePlayerInfos ::" +  vec.length);	
			trace(vec);
			
			var obj:Object;
			var i:int;
			var len:int = vec.length;
			
			for(i=0;i<len;i++)
			{
				if(vec[i])
				{
					trace("updatePlayerInfos i::" +  i);
					updateOnePlayerGolds(vec[i]);
				}
			}
		}
		
		
		public function updateTirenBtn():void
		{
			var i:int;
			var len:int = _PosChairVec.length;
			for(i=0;i<len;i++)
			{
				_PosChairVec[i].updateTirenBtn();
			}
		}
		
		public function showExpress(dir:int,index:int):void
		{
			_PosChairVec[dir].showExpress(index); 
		}
		//imediate :是否立即更新状态
		public function setGrayhead(dir:int,gray:Boolean,imediate:Boolean,offlineTime:int):void
		{
			_PosChairVec[dir].setHeadGray(gray,imediate,offlineTime);
		}
		
		/**播放抢庄动画*/
		public function playQZAni(betweenArr:Array,zhuangPos:int,caller:*,compFun:Function):void
		{
			var i:int,dir:int;
			for(i=0;i<betweenArr.length;i++)
			{
				Laya.timer.frameOnce(i*5,this,onSingleQiEff,[model.getChairDirByPos(betweenArr[i])],false);
			}
			
			for(i=0;i<betweenArr.length;i++)
			{
				Laya.timer.frameOnce((i+betweenArr.length)*5,this,onSingleQiEff,[model.getChairDirByPos(betweenArr[i])],false);
				if(betweenArr[i] ==zhuangPos)
				{
					var frameNum:int = (i+betweenArr.length)*5;
					Laya.timer.frameOnce((i+betweenArr.length)*5,this,endShowZhuang,[frameNum,caller,compFun],false);
					
					
					Laya.timer.frameOnce((i+betweenArr.length+1)*5,this,showQZAniEnd,[zhuangPos,caller,compFun],false);
			
				
					break;
				}
			}
			
			
			
		}
		
		protected function endShowZhuang(frameNum:int,caller:*,compFun:Function):void
		{
			showZhuang();
			compFun.apply(caller,[frameNum]);
		}
		
		protected function onSingleQiEff(dir:int):void
		{
			for(var i:int=0;i<_PosChairVec.length;i++)
			{
				if(i == dir)
				{
					_PosChairVec[i].showAndPlayQZAni();
				}
				else
				{
					_PosChairVec[i].hideAndStopQZAni();
				}
			}
		}
		
		protected function showQZAniEnd(zhuangPos:int,caller:*,compFun:Function):void
		{
//			for(var i:int=0;i<_PosChairVec.length;i++)
//			{
//				_PosChairVec[i].hideAndStopQZAni();
//			}
			
			//showZhuang();
			
			
		}
		
	}
}