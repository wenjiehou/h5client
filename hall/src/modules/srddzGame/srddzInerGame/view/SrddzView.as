package modules.srddzGame.srddzInerGame.view
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
	
	import modules.gameCommon.chat.Chat;
	import modules.gameCommon.chat.ChatPage;
	import modules.gameCommon.view.ReplayControlView;
	import modules.srddzGame.SrddzGameModule;
	import modules.srddzGame.srddzInerGame.model.SrddzModel;
	import modules.srddzGame.srddzInerGame.view.playerInfoPart.UserInfoPage;
	
	import net.Message;
	import net.ProtoMessage;
	
	import rb.framework.mvc.AbstractLayer;
	import rb.framework.mvc.core.LayerTypes;
	
	import ui.gameCommon.shortCutChat.PopChatItemUI;
	import ui.srddzGame.GameTableUI;
	import ui.srddzGame.PockerPageUI;
	
	public class SrddzView extends AbstractLayer
	{
	
		
		private var popChatArr:Vector.<PopChatItemUI>;
		private var expressloaderArr:Vector.<MovieClip>;
		
		protected var _replayControlView:ReplayControlView;
		public function get replayControlView():ReplayControlView
		{
			return _replayControlView;
		}
		
		protected var _srddzPage:SrddzPage;
		public function get srddzPage():SrddzPage
		{
			return _srddzPage;
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
		
		protected var _calculatePage:CalculatePage

		public function get calculatePage():CalculatePage
		{
			return _calculatePage;
		}
		
		protected var _chatPage:ChatPage;
		
		public function get chatPage():ChatPage
		{
			return _chatPage;
		}
		
		private var _gui:GameTableUI;

		public function get gui():GameTableUI
		{
			return _gui;
		}

		
		public function SrddzView()
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
			
			if(_srddzPage == null)
			{
				_srddzPage = new SrddzPage(new PockerPageUI());
				_gui.pokerContainer.addChild(_srddzPage.skin);
			}
			
			if(_tableInfoPage == null)
			{
				_tableInfoPage = new TableInfoPage(gui.tableInfoPage);
			}
			
			if(_playerInfoPage == null)
			{
				_playerInfoPage = new PlayerInfoPage(gui.playerInfoPage);
			}
			
			if(_calculatePage == null)
			{
				_calculatePage = new CalculatePage(gui.calculatePart);
			}
			
			if(_replayControlView == null)
			{
				_replayControlView = new ReplayControlView(gui.replayControlView);
			}
			
			_chatPage = Chat.schatPage;
			gui.chatContainer.addChild(_chatPage.skin);
			_chatPage.hide();
			
			if(UserData.isReplay == true)
			{
				_replayControlView.show();
			}
			else
			{
				_replayControlView.hide();
			}
			
			_gui.popChat0.visible = false;
			_gui.popChat1.visible = false;
			_gui.popChat2.visible = false;
			_gui.popChat3.visible = false;
			
			EventCenter.instance.on(EventCenter.SEND_CHAT_MESSAGE,this,onSendChat);
			_gui.tableInfoPage.voiceIntercomBtn.on(Event.CLICK,this,onVoiceOpClick);
			_gui.tableInfoPage.voiceIntercomBtn.on(Event.MOUSE_OUT,this,onVoiceOpOut);
			
			_gui.tableInfoPage.chatBtn.on(Event.CLICK ,this,onShowChatPage);
			
			//GiftEff.instance.showPockTypeEff(BasePocker.PAIXING_SHUNZI);
		}
		
		private function initPopChat(chairNum:int=4):void
		{
			popChatArr = new Vector.<PopChatItemUI>();
			
			switch(chairNum)
			{
				//case 2:popChatArr.push(_gui.bottomPopChat,_gui.topPopChat);break;
				case 4:popChatArr.push(_gui.popChat0,_gui.popChat1,_gui.popChat2,_gui.popChat3);break;
				//case 4:popChatArr.push(_gui.bottomPopChat,_gui.rightPopChat,_gui.topPopChat,_gui.leftPopChat);
			}
		}
		
		protected function get model():SrddzModel
		{
			return SrddzGameModule.instance.gameContext.model;
		}
		
		
		private function onSendChat(dat:*):void
		{
			chatPage.switchState();
			
			var obj:Object = {message:dat,type:2};
			EventCenter.instance.event(EventCenter.SOCKET_SEND,ProtoMessage.getProtoMessage(net.Message.MSG_Chat,obj));
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
				
				SrddzGameModule.instance.gameContext.view.gui.tableInfoPage.voiceIntercomBtn.disabled=true;
				SrddzGameModule.instance.gameContext.view.gui.tableInfoPage.voiceDis.visible=true;
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
			SrddzGameModule.instance.gameContext.view.gui.tableInfoPage.voiceIntercomBtn.disabled=false;
			SrddzGameModule.instance.gameContext.view.gui.tableInfoPage.voiceDis.visible=false;
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
		
		public function onRecChat(msg:Object):void
		{
			
			trace("onRecChat::",msg);
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
				
				SoundManager.playSound(SoundPlay.instance.getSddzChatPath(model.playerByPos(pos).sex,AppConfig.getChatSound(worlds,2)) , 1);
			}
			
			
			if(popChatArr[dir] == _gui.popChat1)
			{
				popChatArr[dir].x = 576 + (392 - popChatArr[dir].tf.textField.textWidth);
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
					
					Laya.timer.clear(SrddzGameModule.instance.gameContext.view,recoverSoundVolume);
					SrddzGameModule.instance.gameContext.view.playerInfoPage.hideVoice(arr[0]);
					
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
						
						SrddzGameModule.instance.gameContext.view.isPlayVoice=false;
						
						if(WX.isUpLoading == false)//不在上传录音就可以继续
						{
							SrddzGameModule.instance.gameContext.view.gui.tableInfoPage.voiceIntercomBtn.disabled=false;
							SrddzGameModule.instance.gameContext.view.gui.tableInfoPage.voiceDis.visible=false;
						}
					}
				}
			});
		}
		
		protected function playVoice(uid:String):void
		{
			Laya.timer.once(15000,this,recoverSoundVolume,[parseInt(uid)]);//15s 要足够场
			_playerInfoPage.showVoice(parseInt(uid));
			
		}
		public function recoverSoundVolume(uid:int):void
		{
			if(isPlayVoice==false)return;
			isPlayVoice=false;
			
			AppConfig.isPlayingRecord = false;
			
			SoundPlay.swithMusic("game");
			
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
			SoundPlay.instance.playClickBtnSound();
			chatPage.switchState();
			(msg as Event).stopPropagation();
		}
		public function setChairNmu(num:int):void
		{
			srddzPage.setChairNum(num);
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
			_srddzPage.reset();
			_tableInfoPage.reset();
			_playerInfoPage.havePiaoReset();
			_calculatePage.reset();
			_replayControlView.reset();
		}
		
		public function replayup_reset():void
		{
			_srddzPage.reset();
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