package modules.game.majiangGame.view
{
	
	import common.event.EventCenter;
	import common.tools.SoundPlay;
	
	import laya.ani.swf.MovieClip;
	import laya.events.Event;
	import laya.media.SoundManager;
	import laya.utils.Browser;
	import laya.utils.Handler;
	import laya.utils.Tween;
	
	import manager.TimeManager;
	import manager.UIManager;
	
	import modules.game.GameModule;
	import modules.game.majiangGame.model.MajiangModel;
	import modules.game.majiangGame.view.playerInfoPart.UserInfoPage;
	import modules.gameCommon.chat.Chat;
	import modules.gameCommon.chat.ChatPage;
	
	import net.ProtoMessage;
	
	import rb.framework.mvc.AbstractLayer;
	import rb.framework.mvc.Message;
	import rb.framework.mvc.core.LayerTypes;
	
	import ui.gameCommon.shortCutChat.PopChatItemUI;
	import ui.mainGame.GameTableUI;
	import ui.mainGame.MajiangPageUI;
	import modules.gameCommon.view.ReplayControlView;
	
	/**进桌子之后的麻将桌子界面*/
	public class MajiangGameView extends AbstractLayer
	{
		protected var _majiangPage:MajiangPage;

		private var popChatArr:Vector.<PopChatItemUI>;
		private var expressloaderArr:Vector.<MovieClip>;

		public function get replayControlView():ReplayControlView
		{
			return _replayControlView;
		}

		public function get majiangPage():MajiangPage
		{
		
			return _majiangPage;
		}

		protected var _playerInfoPage:PlayerInfoPage;

		public function get playerInfoPage():PlayerInfoPage
		{
			return _playerInfoPage;
		}

		protected var _tableInfoPage:TableInfoPage;

		public function get tableInfoPage():TableInfoPage
		{
			return _tableInfoPage;
		}

		
		protected var _calculatePage:CalculatePage;

		public function get calculatePage():CalculatePage
		{
			return _calculatePage;
		}
		
		protected var _replayControlView:ReplayControlView;
		
		protected var _chatPage:ChatPage;
		
		public function get chatPage():ChatPage
		{
			return _chatPage;
		}
		
//		protected var _timeWar:TimeWarView;
//		
//		public function get timeWar():TimeWarView
//		{
//			return _timeWar;
//		}
		
		
	
		
		
		private var _gui:GameTableUI;

		public function get gui():GameTableUI
		{
			return _gui;
		}

		
		public function MajiangGameView()
		{
			super();
			super.setType(LayerTypes.VIEW);
		}
		
		override public function onAdd():void
		{
			onAddUI();
			onAddListener();
		}
		
		override public function onRemove():void
		{
			onRemoveUI();
			onRemoveListener();
		}
		
		
		protected function onAddUI():void
		{
			if(_gui == null)
			{
				_gui = new GameTableUI();
				_gui.mouseThrough = true;
				
			}


			
			trace("桌面被添加到舞台！！");
			
			UIManager.instance.uiLayer.addChild(_gui);
		
			//监听语音聊天
//			this.notify(MsgNames.SOCKET_LISTEN,MsgTypes.BASE_QUEUE,PomeloMessage.VOICE,onVoice);
//			this.notify(MsgNames.SOCKET_LISTEN,MsgTypes.BASE_QUEUE,PomeloMessage.chat,onRecChat);
			
			if(_majiangPage == null)
			{
				_majiangPage = new MajiangPage(new MajiangPageUI());
				_gui.mjContainer.addChild(_majiangPage.skin);
			}
			
			if(_tableInfoPage == null)
			{
				_tableInfoPage = new TableInfoPage(_gui.tableInfoPage);
			}
			
			if(_playerInfoPage == null)
			{
				_playerInfoPage = new PlayerInfoPage(_gui.playerInfoPage);
			}
			
			
			if(_calculatePage == null)
			{
				_calculatePage = new CalculatePage(_gui.calculatePart);
			}
			
			if(_replayControlView == null)
			{
				_replayControlView = new ReplayControlView(_gui.replayControlView);
			}
			
			_chatPage = Chat.hchatPage;
			gui.chatContainer.addChild(_chatPage.skin);
			
			_chatPage.hide();
			
//			if(_timeWar == null)
//			{
//				_timeWar = new TimeWarView();
//			}
			
		

			if(UserData.isReplay == true)
			{
				_replayControlView.show();
//				_gui.pingbiSp.alpha = 0.01;
//				_gui.pingbiSp.mouseEnabled = true;
//				_gui.pingbiSp.visible = true;
			}
			else
			{
				_replayControlView.hide();
//				_gui.pingbiSp.visible = false;
			}
			
			_gui.leftPopChat.visible = false;
			_gui.rightPopChat.visible = false;
			_gui.bottomPopChat.visible = false;
			_gui.topPopChat.visible = false;
			//Laya.timer.once(1500,this,this.notify,[MsgNames.LOADING_CLOSE,MsgTypes.BASE_QUEUE]);
			EventCenter.instance.on(EventCenter.SEND_CHAT_MESSAGE,this,onSendChat);
//			_gui.tableInfoPage.voiceIntercomBtn.on(Event.MOUSE_OUT,this,onVoiceOp);
//			_gui.tableInfoPage.voiceIntercomBtn.on(Event.CLICK,this,onVoiceOp);
			
			_gui.tableInfoPage.voiceIntercomBtn.on(Event.CLICK,this,onVoiceOpClick);
			_gui.tableInfoPage.voiceIntercomBtn.on(Event.MOUSE_OUT,this,onVoiceOpOut);
			
			
			
			_gui.tableInfoPage.chatBtn.on(Event.CLICK ,this,onShowChatPage);

		}
		
	
		
				
		private function initPopChat(chairNum:int=3):void
		{
			popChatArr = new Vector.<PopChatItemUI>();
			
			switch(chairNum)
			{
				case 2:popChatArr.push(_gui.bottomPopChat,_gui.topPopChat);break;
				case 3:popChatArr.push(_gui.bottomPopChat,_gui.rightPopChat,_gui.leftPopChat);break;
				case 4:popChatArr.push(_gui.bottomPopChat,_gui.rightPopChat,_gui.topPopChat,_gui.leftPopChat);
			}
		}
		
		protected function get model():MajiangModel
		{
			return GameModule.instance.gameContext.model;
		}
		
		private function onSendChat(dat:*):void
		{
			chatPage.switchState();
			
			var obj:Object = {message:dat,type:2};
			
			
			EventCenter.instance.event(EventCenter.SOCKET_SEND,ProtoMessage.getProtoMessage(net.Message.MSG_Chat,obj));
			
//			showPopChat(UserData.selfuid,dat);
//			this.notify(utils.MsgNames.SOCKET_SEND,utils.MsgTypes.BASE_QUEUE,common.PomeloMessage.VOICE_SEND,{msg:dat.worldid},function(rdata:*){
//				console.log("chat shortcut return:"+JSON.stringify(rdata));
//			});
			
//			this.notify(utils.MsgNames.SOCKET_SEND,utils.MsgTypes.BASE_QUEUE,common.PomeloMessage.hall_user_chat,{msg:dat},function(rdata:*){
//				console.log("chat shortcut return:"+JSON.stringify(rdata));
//			});
		}
		
		private var _voiceRecording:Number=-1;
		public var isPlayVoice:Boolean=false;
		public var isClick:Boolean = false;
//		private var isStartVoice:Boolean=false;
		
		//****************************
		protected var isRecording:Boolean = false
		
		protected function onVoiceOpClick(e:Event):void
		{
			isClick = true;
			
			trace("点击了？？？？？？ ");
			if(isRecording)
			{
				stopRecord();
			}
			else
			{
				startRecord();
			}
			e.stopPropagation();
		}
		
		/**取消上传*/
		protected function onVoiceOpOut(e:Event):void
		{
			if(isClick)
			{
				isClick = false;
				return;
			}
				
			
			trace("滑动了？？？？？？ ");
			if(isRecording==true)
			{
				WX.stopRecord(-1);
				Laya.timer.clear(this,onRecording);
				
				_gui.tableInfoPage.voiceTip.visible=false;
				_gui.tableInfoPage.voicePlay.visible=false;
				tableInfoPage.stopVoicePlay();
				
//				if(isPlayVoice)//如果正在播放
//				{
//					_gui.tableInfoPage.voiceIntercomBtn.disabled=true;
//					_gui.tableInfoPage.voiceDis.visible=true;
//				}
				
				onStopSuccess();
				
				isRecording = false;
				
				if(!isPlayVoice)
				{
					this.Voice();
				}
			}
			
			
		}
		
		protected function startRecord():void
		{
			WX.startRecord();//开始录音
			
			_gui.tableInfoPage.voicePlay.visible=true;
			tableInfoPage.playVoicePlay();
			_gui.tableInfoPage.voiceTip.visible=true;
			
			_voiceRecording=TimeManager.unixtime;
			_gui.tableInfoPage._time.text="15'"
			Laya.timer.loop(100,this,onRecording);
			
			isRecording = true;
		}
		
		protected function stopRecord():void
		{
			var time:int = TimeManager.unixtime-_voiceRecording;
			if(time < 500)
			{
				return;
			}
			else if(time < 1000)
			{
				WX.stopRecord(-1);
				QuickUtils.VoiceTip(3);
				
				Laya.timer.clear(this,onRecording);
				
				_gui.tableInfoPage.voiceTip.visible=false;
				_gui.tableInfoPage.voicePlay.visible=false;
				tableInfoPage.stopVoicePlay();
				onStopSuccess();
			}
			else
			{
				WX.stopRecord(0,this,onStopSuccess)
					
				Laya.timer.clear(this,onRecording);
					
				_gui.tableInfoPage.voiceTip.visible=false;
				_gui.tableInfoPage.voicePlay.visible=false;
				tableInfoPage.stopVoicePlay();
				
				GameModule.instance.gameContext.view.gui.tableInfoPage.voiceIntercomBtn.disabled=true;
				GameModule.instance.gameContext.view.gui.tableInfoPage.voiceDis.visible=true;
			}

//			if(isPlayVoice)//如果正在播放
//			{
//				_gui.tableInfoPage.voiceIntercomBtn.disabled=true;
//				_gui.tableInfoPage.voiceDis.visible=true;
//			}
			
			isRecording = false;
			
			if(!isPlayVoice)
			{
				this.Voice();
			}
		}
		
		protected function onStopSuccess():void
		{
			GameModule.instance.gameContext.view.gui.tableInfoPage.voiceIntercomBtn.disabled=false;
			GameModule.instance.gameContext.view.gui.tableInfoPage.voiceDis.visible=false;
		}
		
		/** 时间条 **/
		private function onRecording():void
		{
			var du:Number=(TimeManager.unixtime-_voiceRecording)/1000;
			_gui.tableInfoPage._time.text=(15-Math.floor(du))+"'"
			if(du>=AppConfig.maxVoiceTime)
			{
				stopRecord();
			}
		}
		
		//*******************************************
		
		
//		private var 
//		/**		 *点录音 		 * 	 * 		 */		
//		private function onVoiceOp(e:Event):void
//		{
//			if(e.type==Event.CLICK)
//			{
//				this.isStartVoice=true;
//				if(_gui.tableInfoPage.voicePlay.visible==true){
//					trace("录音完成")
//					_gui.tableInfoPage.voiceTip.visible=false;
//					var _time:int = TimeManager.unixtime-_voiceRecording
//					_voiceRecording=TimeManager.unixtime;
//					if(_time<500){//语音太短
//						WX.stopRecord(-1);
//						QuickUtils.VoiceTip(3);
//					}else{
//						WX.stopRecord();//停止录音
//					}
//				}else{
//					trace("开始录音")
//					_voiceRecording=TimeManager.unixtime;
//					WX.startRecord();//开始录音
//					_gui.tableInfoPage._time.text="15'"
//					_gui.tableInfoPage.voiceTip.visible=true;
//					Laya.timer.loop(100,this,onRecording);
//				}
//			}
//			else if(e.type==Event.MOUSE_OUT)
//			{
//				this.onVoiceUP();
//			}
//		}
		
		
		
//		/****弹起 停止录音****/
//		private function onVoiceUP():void
//		{
//			if(_gui.tableInfoPage.voicePlay.visible==true)//正在录音
//			{
//				if(this.isStartVoice==false)//已经开始录音
//				{
//					_gui.tableInfoPage.voiceTip.visible=false;
//					WX.stopRecord(-1);//取消录音
//				}
//				_gui.tableInfoPage.voicePlay.visible=false;
//				this.isStartVoice=false;
//				
//				if(isPlayVoice)
//				{
//					_gui.tableInfoPage.voiceIntercomBtn.disabled=true;
//					_gui.tableInfoPage.voiceDis.visible=true;
//				}
//			}
//			else
//			{
//				if(this.isStartVoice==true)
//				{
//					_gui.tableInfoPage.voicePlay.visible=true;
//					this.isStartVoice=false;
//				}
//			}
//		}
		
//		private var voiceDatas:Array=[];
//		private var voicePlaying:Boolean=false;
//		private function onVoice(msg:Object=null):void{
//			if(msg&&msg.hasOwnProperty("uid"))voiceDatas.push(msg);
//			//正在播放声音
//			if(voicePlaying)return;
//			if(voiceDatas.length>0){
//				msg=voiceDatas.shift();
//			}else{
//				return;
//			}
//			
//			//这里需要一个接口通过，uid找到pos，
//			_playerInfoPage.showVoice(msg.uid);
//			voicePlaying=true;
//			//播放语音
////			common.ExternInterface.playFile(msg.msg,new Handler(this,onVoiceFinish,[msg.uid],true));
////			//补一枪，万一没隐藏呢
////			Laya.timer.once(1000*AppConfig.maxVoiceTime,this,onVoiceFinish,[msg.uid],true);
//			
//			
//		}
		
//		private function onVoiceFinish(uid):void
//		{
//			if(!voicePlaying)return;
//			voicePlaying=false;			
//			Laya.timer.clear(this,onVoiceFinish);
//			_playerInfoPage.hideVoice(uid);			
//			onVoice();
//		}
		
		public function onRecChat(msg:Object):void
		{
			var arr:Array = msg.message.split("#");
			
			if(arr.length > 1)
			{
				showPopChat(arr[0],arr[1]);
			}
			
//			if(msg.hasOwnProperty("uid")){
//				if(msg.msg is String)
//				{
//					showPopChat(msg.uid,msg.msg);
//					return;
//				}
//			}
		}
		
		
		private function showPopChat(uid:*,worlds:String):void
		{
			if(popChatArr == null)
			{
				initPopChat(model.chairNum);
			}
			
			var pos:int = model.getPlayerPosByUid(uid);
			var dir:int = model.getChairDirByPos(pos);
			
			var wordsArr:Array = worlds.split("|");
			if(wordsArr.length > 1)
			{
				if(wordsArr[0]=="express"){
					var index:int = parseInt(wordsArr[1]);
					_playerInfoPage.showExpress(dir,index+1);
					return;
				}
				else if(wordsArr[0]=="VoiceId")
				{//语音-------
					
					trace("youyuyinguolaile");
					WX.voiceArr.push([parseInt(uid),wordsArr[1]]);
					
					if(!isPlayVoice && isRecording==false)
					{
						this.Voice();
					}
				}
			}
			else
			{
				popChatArr[dir].visible = true;
				popChatArr[dir].tf.text = worlds;
				popChatArr[dir].backimg.width = popChatArr[dir].tf.textField.textWidth + 30;
				popChatArr[dir].backimg.height = popChatArr[dir].tf.textField.textHeight + 40;
				Tween.clearAll(popChatArr[dir]);
				popChatArr[dir].alpha = 1;
				var times:int = popChatArr[dir].tf.textField.lines.length*2000;
				
				SoundManager.playSound(SoundPlay.instance.getliaotianPath(model.playerByPos(pos).sex,AppConfig.getChatSound(worlds)) , 1);
			}
			
			
			if(popChatArr[dir] == _gui.rightPopChat)
			{
				popChatArr[dir].x = 522 + (392 - popChatArr[dir].tf.textField.textWidth);
			}
			Tween.to(popChatArr[dir],{alpha:0.3},times,null,new Handler(this,onCompeteTween,[popChatArr[dir]]),500);
				
			
		}
		
		public function Voice():void
		{
			if(WX.voiceArr.length<=0)
			{
				return;
			}
			if(WX.isUpLoading)//正在上传语音
			{
				return;
			}
			
			isPlayVoice=true;
			var arr:Array=WX.voiceArr.shift();
			
			WX.downloadVoice(arr[1],this,playVoice,[arr[0]]);
			
			Browser.window.wx.onVoicePlayEnd({
				success: function (res):void {
					trace("声音播放完成了！！ uid：：" + arr[0]);
					trace("WX.voiceArr.length::" + WX.voiceArr.length);
					
					Laya.timer.clear(GameModule.instance.gameContext.view,recoverSoundVolume);
					GameModule.instance.gameContext.view.playerInfoPage.hideVoice(arr[0]);
					
					AppConfig.isPlayingRecord = false;
					Laya.timer.once(1000,null,SoundPlay.swithMusic,["game"]);
					//SoundPlay.swithMusic("game");
					
					if(WX.voiceArr.length>0)
					{
						Voice();
					}
					else
					{
						WX.isDownLoading = false;
						if(WX.uploadArr.length>0)
						{
							WX.uploadVoice(WX.uploadArr[0]);
							WX.uploadArr.length = 0;
						}
						
						GameModule.instance.gameContext.view.isPlayVoice=false;
						
						if(WX.isUpLoading == false)//不在上传录音就可以继续
						{
							GameModule.instance.gameContext.view.gui.tableInfoPage.voiceIntercomBtn.disabled=false;
							GameModule.instance.gameContext.view.gui.tableInfoPage.voiceDis.visible=false;
						}
					}
				}
			});
			
			
		}
		
		protected function playVoice(uid:String):void
		{
//			if(isRecording == false)//不在录音
//			{
//				_gui.tableInfoPage.voiceIntercomBtn.disabled=true;
//				_gui.tableInfoPage.voiceDis.visible=true;
//			}
//			_gui.tableInfoPage.voiceIntercomBtn.disabled=true;
//			_gui.tableInfoPage.voiceDis.visible=true;
			
			Laya.timer.once(15000,this,recoverSoundVolume,[parseInt(uid)]);//15s 要足够场
			_playerInfoPage.showVoice(parseInt(uid));
			
		}
		public function recoverSoundVolume(uid:int):void
		{
			if(isPlayVoice==false)return;
			isPlayVoice=false;
			
			AppConfig.isPlayingRecord = false;
			
			SoundPlay.swithMusic("game");
			
//			SoundManager.setMusicVolume(parseInt(QuickUtils.getLocalVar("musicVol")));
//			SoundManager.setSoundVolume(parseInt(QuickUtils.getLocalVar("soundVol")));
			
			_playerInfoPage.hideVoice(uid);
			_gui.tableInfoPage.voiceIntercomBtn.disabled=false;
			_gui.tableInfoPage.voiceDis.visible=false;
		}
		
		private function playend(uid:*):void{
			_playerInfoPage.hideVoice(uid);
		}
		
		private function onCompeteTween(obj:*):void
		{
			obj.alpha = 1;
			obj.visible = false;
		}
		private function onShowChatPage(msg:Object):void
		{
			chatPage.switchState();
			(msg as Event).stopPropagation();
		}
		public function setChairNmu(num:int):void
		{
			_majiangPage.setChairNum(num);
			_playerInfoPage.setChairNum(num);
			reset();
		}
		
		public function startGame():void
		{
			
		}
		
		
		protected function onAddListener():void
		{
			//this.addHandler(MsgNames.TICKET_CARD_CHANGE,onticketCardChange);
		}
		
		private function onticketCardChange(msg:Message):void
		{
			// TODO Auto Generated method stub
			//gui.txtCardNum.text=UserData.room_card+"";
			calculatePage.showGetTicket(msg[0]);
			if(msg)msg.complete();
			
		}
		
		protected function onRemoveUI():void
		{
			if(_gui != null)
			{
				UIManager.instance.uiLayer.removeChild(_gui);
				//_timeWar.hide();
				//取消监听语音聊天
				//this.notify(MsgNames.SOCKET_UNLISTEN,MsgTypes.BASE_QUEUE,PomeloMessage.VOICE,onVoice);
				
				trace("桌面被移除舞台！！");
				
//				_gui.tableInfoPage.voiceIntercomBtn.off(Event.MOUSE_OUT,this,onVoiceOp);
				//_gui.tableInfoPage.voiceIntercomBtn.off(Event.CLICK,this,onVoiceOpClick);
				_gui.tableInfoPage.chatBtn.off(Event.MOUSE_DOWN ,this,onShowChatPage);
				EventCenter.instance.off(EventCenter.SEND_CHAT_MESSAGE,this,onSendChat);
				
				
				_gui.tableInfoPage.voiceIntercomBtn.off(Event.CLICK,this,onVoiceOpClick);
				_gui.tableInfoPage.voiceIntercomBtn.off(Event.MOUSE_OUT,this,onVoiceOpOut);
			}
			
			//todo
		}
		
		public function reset():void
		{
			
			UserInfoPage.instance.hide();
			_majiangPage.reset();
			_tableInfoPage.reset();
			_playerInfoPage.havePiaoReset();
			_calculatePage.reset();
			_replayControlView.reset();
		}
		
		public function replayup_reset():void
		{
			_majiangPage.reset();
			_tableInfoPage.reset();
			_playerInfoPage.havePiaoReset();
			_calculatePage.reset();
			_replayControlView.replayup_reset();
		}
		
		
		protected function onRemoveListener():void
		{
			
		}
	}
}