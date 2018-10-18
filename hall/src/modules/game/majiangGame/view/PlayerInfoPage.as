package modules.game.majiangGame.view
{
	import common.CommonModule;
	
	import laya.events.Event;
	
	import modules.game.GameModule;
	import modules.game.majiangGame.controller.MajiangGameController;
	import modules.game.majiangGame.model.MajiangModel;
	import modules.game.majiangGame.view.playerInfoPart.BasePlayerInfoItem;
	import modules.game.majiangGame.view.playerInfoPart.PiaoSelePart;
	
	import net.Message;
	import net.ProtoMessage;
	
	import ui.mainGame.PlayerInfoPageUI;

	/**玩家信息块*/
	public class PlayerInfoPage
	{
		protected var _skin:PlayerInfoPageUI;
		
		protected var _bottom:BasePlayerInfoItem;
		protected var _right:BasePlayerInfoItem;
		protected var _top:BasePlayerInfoItem;
		protected var _left:BasePlayerInfoItem;
		
		protected var _PosChairVec:Vector.<BasePlayerInfoItem> = new Vector.<BasePlayerInfoItem>();
		
		protected var _PiaoSelePart:PiaoSelePart;
		
		protected function get model():MajiangModel
		{
			return GameModule.instance.gameContext.model;
		}
		
		protected function get controller():MajiangGameController
		{
			return GameModule.instance.gameContext.controller;   
		}
		
		public function PlayerInfoPage(skin:PlayerInfoPageUI)
		{
			_skin = skin;
			_skin.mouseThrough = true;
			
			_bottom = new BasePlayerInfoItem(skin.playerInfo0);
			_right = new BasePlayerInfoItem(skin.playerInfo1);
			_top = new BasePlayerInfoItem(skin.playerInfo2);
			_left = new BasePlayerInfoItem(skin.playerInfo3);
			
//			_skin.readyBtn.on(Event.CLICK,this,onClickReadyBtn);
			_PiaoSelePart = new PiaoSelePart(_skin.piaoPart);
			
//			_skin.readyBtn.visible = false;
			_skin.startBtn.visible = false;
			
			_skin.startBtn.on(Event.CLICK,this,onClickStartBtn);
			allReset();
			//setChairNum(3);
		}
		
		protected function onClickStartBtn(e:Event):void
		{
			showStartBtn(false);
			
//			var standupObj:Object = {sid:UserData.SID,index:model.selfChairPos};
//			controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.MSG_Standup,standupObj),false);
			
			var startGameObj:Object = {SID:UserData.SID};
			controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Start_Game,startGameObj));
			
		
			
		}
		
		public function showStartBtn(isShow:Boolean=true):void
		{
			_skin.startBtn.visible = isShow;
		}
		
										
		protected function onClickReadyBtn(e:Event):void
		{
//			message User_Ready {
//				string SID = 1;	
//				string UID = 2;
//			}
			
			var obj:Object = {sid:UserData.SID};
			
			controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.User_Ready,obj));
			
//			_skin.readyBtn.visible = false;
//			var cmd:Object = {cmd:"READ"+_PiaoSelePart.getCurPiaoValue()};
//			GameModule.instance.majiangGameContext.majiangGameController.sendMsgCommond(cmd);
		}
		
		/**游戏开始影藏所有按钮*/
		public function hideBtnsByGameStart():void
		{
//			_skin.readyBtn.visible = false;
			_skin.startBtn.visible = false;
//			_skin.standupBtn.visible = false;
			
			_PiaoSelePart.hide();
			
			
			//_skin.standupBtn.visible = false;
			
			//updateTirenBtn(false);
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
					
					CommonModule.instance.commonContext.view.functionOption.onClickBtn(false);
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
					
					CommonModule.instance.commonContext.view.functionOption.onClickBtn(false);
				}
				else
				{
					
					CommonModule.instance.commonContext.view.functionOption.onClickBtn(true);
				}
			}
				
			
		}
		
		/**游戏开始之后，显示庄家位置*/
		public function showZhuang():void
		{
//			var zhuangPos:int = model.majiangMsgs.control_game_operation_tableinfo_Info.BankerPos;
//			var dir:int = model.getChairDirByPos(zhuangPos);
			
//			trace("zhuangPos ::" + zhuangPos + " dir::" + dir);
			
			var i:int,len:int = _PosChairVec.length;
			for(i=0;i<len;i++)
			{
				_PosChairVec[i].showZhuang(model.getChairPosByDir(i));
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
		
//		/**游戏结束，显示两个按钮*/
//		public function showBtnsAfterHu():void
//		{
//			if(model.selfChairPos == 0)
//			{
//				_skin.dissolveBtn.visible = true;
//				_skin.inviteBtn.visible = true;
//				_skin.leaveBtn.visible = false;
//				
//				updateTirenBtn(true);//只有这个地方调用了
//			}
//			else
//			{
//				_skin.dissolveBtn.visible = false;
//				_skin.inviteBtn.visible = false;
//				_skin.leaveBtn.visible = true;
//				
//				updateTirenBtn(false);
//			}
//			
//			if(model.playerByPos(model.getChairPosByDir(0)).readystate == 1)
//			{
//				_skin.readyBtn.visible = false;
//				_PiaoSelePart.hide();
//			}
//			else
//			{
//				_skin.readyBtn.visible = true;//如果需要ready就放出来 true
//				_PiaoSelePart.show();
//			}
//		}
		
		public function hideReadyBtn():void
		{
//			_skin.readyBtn.visible = false;
//			_PiaoSelePart.hide();
		}
		
		protected function allReset():void
		{
			_bottom.reset();
			_right.reset();
			_top.reset();
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
				case 1:_PosChairVec.push(_bottom);
					_bottom.dir = 0;
					break;//一个人自己玩 啊哈哈
				case 2:_PosChairVec.push(_bottom,_top);
					_bottom.dir = 0;
					_top.dir = 1;
					
					break; //两个人玩
				case 3:_PosChairVec.push(_bottom,_right,_left);
					_bottom.dir = 0;
					_right.dir = 1;
					_left.dir = 2;
					break;
				case 4:_PosChairVec.push(_bottom,_right,_top,_left);
					_bottom.dir = 0;
					_right.dir = 1;
					_top.dir = 2;
					_left.dir = 3;
					break;
				default:_PosChairVec.push(_bottom,_right,_left);break;
			}
			
			bigReset();
		}
		
		/**重新进入游戏大的重置*/
		private function bigReset():void
		{
			_skin.startBtn.visible = false;
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

			//_PiaoSelePart.reset();
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
		
		
//		/**更新踢人按钮状态 isShow是否要显示 不然就是全部隐藏*/
//		protected function updateTirenBtn(isShow:Boolean):void
//		{
//			trace("updateTirenBtn::" + isShow);
//			
//			var i:int;
//			var len:int = _PosChairVec.length;
//			
//			for(i=0;i<len;i++)
//			{
//				if(isShow)
//				{
//					if(i == 0)//不是自己
//					{
//						_PosChairVec[i].showTirenBtn(false);
//					}
//					else
//					{
//						_PosChairVec[i].showTirenBtn(true);
//					}
//				}
//				else
//				{
//					_PosChairVec[i].showTirenBtn(false);
//				}
//				
//			}
//		}
		
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