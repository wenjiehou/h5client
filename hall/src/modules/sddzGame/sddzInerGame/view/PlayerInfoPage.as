package modules.sddzGame.sddzInerGame.view
{
	import common.CommonModule;
	import common.event.EventCenter;
	
	import laya.events.Event;
	
	import modules.sddzGame.SDdzGameModule;
	import modules.sddzGame.sddzInerGame.controller.SddzGameController;
	import modules.sddzGame.sddzInerGame.model.SddzModel;
	import modules.sddzGame.sddzInerGame.view.playerInfoPart.BasePlayerInfoItem;
	import modules.sddzGame.sddzInerGame.view.playerInfoPart.PiaoSelePart;
	
	import net.Message;
	import net.ProtoMessage;
	
	import ui.sddzGame.PlayerInfoPageUI;

	public class PlayerInfoPage
	{
		protected var _skin:PlayerInfoPageUI;
		
		protected var _bottom:BasePlayerInfoItem;
		protected var _right:BasePlayerInfoItem;
		protected var _left:BasePlayerInfoItem;
		
		protected var _PosChairVec:Vector.<BasePlayerInfoItem> = new Vector.<BasePlayerInfoItem>();
		protected var _PiaoSelePart:PiaoSelePart;
		
		protected function get model():SddzModel
		{
			return SDdzGameModule.instance.gameContext.model;
		}
		
		protected function get controller():SddzGameController
		{
			return SDdzGameModule.instance.gameContext.controller;
		}
		
		
		public function PlayerInfoPage(skin:PlayerInfoPageUI)
		{
			_skin = skin;
			_skin.mouseThrough = true;
			
			_bottom = new BasePlayerInfoItem(skin.playerInfo0);
			_right = new BasePlayerInfoItem(skin.playerInfo1);
			_left = new BasePlayerInfoItem(skin.playerInfo2);
			
			_PiaoSelePart = new PiaoSelePart(skin.piaoPart);
			
			_skin.startBtn.visible = false;
			skin.leaveBtn.visible = false;
			_skin.disbandBtn.visible = false;
			
			_skin.startBtn.on(Event.CLICK,this,onClickStartBtn);
			_skin.inviteBtn.on(Event.CLICK,this,onClickInviteBtn);
			
			_skin.leaveBtn.on(Event.CLICK,this,onClickLeaveBtn);
			_skin.disbandBtn.on(Event.CLICK,this,onClickDisbandBtn);
			
			allReset();
			
			
		}
		
		protected function onClickStartBtn(e:Event):void
		{
			var startGameObj:Object = {SID:UserData.SID};
			controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Start_Game,startGameObj));
		}
		
		protected function onClickInviteBtn(e:Event):void
		{
			CommonModule.instance.commonContext.view.vgameShareView.show();
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
		
		/**更新离开解散按钮的状态*/
		public function updateLeaveDisbandBtns():void
		{
			_skin.leaveBtn.visible = false;
			_skin.disbandBtn.visible = false;
			
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
				_skin.disbandBtn.visible = true;
			}
		}
		
		
		protected function onClickReadyBtn(e:Event):void
		{
			var obj:Object = {sid:UserData.SID};
			controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.User_Ready,obj));
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
			_PiaoSelePart.hide();
		}
		
		public function updateStartBtn():void
		{
			_skin.startBtn.visible = false;
		}
		
		/***/
		public function updateSitDownUpBtn(needJudge:Boolean=true):void
		{
			if(needJudge)
			{
				if(model.isSelfSitDown && model.isGameStart==false)
				{
					
					CommonModule.instance.commonContext.view.functionOption.onClickBtn(true);//false
				}
				else
				{
					
					CommonModule.instance.commonContext.view.functionOption.onClickBtn(true);
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
		public function showDizhuNM():void
		{
			var i:int,len:int = _PosChairVec.length;
			for(i=0;i<len;i++)
			{
				_PosChairVec[i].showDizhuNM(model.getChairPosByDir(i));
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
		
		
		public function hideDizhuNM():void
		{
			var i:int;
			var len:int = _PosChairVec.length;
			for(i=0;i<len;i++)
			{
				_PosChairVec[i].hideDizhuNM();
			}
		}
		
		public function hideReadyBtn():void
		{
			
		}
		
		protected function allReset():void
		{
			_bottom.reset();
			_right.reset();
			_left.reset();
			
			_PiaoSelePart.reset();
		}
		
		/**设置椅子数量*/
		public function setChairNum(num:int=3):void
		{
			_PosChairVec.length = 0;
			
			trace("playerinfo setChairNum::" + num);
			switch(num)
			{
//				case 1:_PosChairVec.push(_bottom);
//					_bottom.dir = 0;
//					break;//一个人自己玩 啊哈哈
//				case 2:_PosChairVec.push(_bottom,_top);
//					_bottom.dir = 0;
//					_top.dir = 1;
//					
//					break; //两个人玩
				case 3:_PosChairVec.push(_bottom,_right,_left);
					_bottom.dir = 0;
					_right.dir = 1;
					_left.dir = 2;
					break;
//				case 4:_PosChairVec.push(_bottom,_right,_top,_left);
//					_bottom.dir = 0;
//					_right.dir = 1;
//					_top.dir = 2;
//					_left.dir = 3;
//					break;
				default:_PosChairVec.push(_bottom,_right,_left);break;
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
			
			_PiaoSelePart.reset();
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
		
		/**根据一个数组来刷新玩家的信息*/
		public function updatePlayerInfos(vec:Vector.<Object>,needResetPiao:Boolean=true,needFlyImg:Boolean=false):void
		{
			trace("updatePlayerInfos ::" +  vec.length);
			reset();
			
			if(needResetPiao)
			{
				_PiaoSelePart.reset();
			}
			
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
		
		public function updateHua(pos:int):void
		{
			if (pos == -1)
			{
				return;
			}
			
			var dir:int = model.getChairDirByPos(pos);
			_PosChairVec[dir].updateHua(pos);
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
		
		/**更新亮牌状态*/
		public function updateTingImg(pos:int):void
		{
			var dir:int = model.getChairDirByPos(pos);
			_PosChairVec[dir].showTingImg();
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
	}
}