package common.view
{
	import common.event.EventCenter;
	import common.tools.SoundPlay;
	
	import laya.events.Event;
	
	import manager.UIManager;
	
	import net.Message;
	import net.ProtoMessage;
	
	import ui.common.SettingViewUI;

	public class SettingView
	{
		protected var _skin:SettingViewUI;
		
		public var isShow:Boolean = false;
		
		public function SettingView()
		{
			_skin = new SettingViewUI();
			
			init();
		}
		
		protected function init():void
		{
			_skin.on(Event.CLICK,this,this.onClickCloseBtn);
			_skin.mouseThrough=false;
			_skin.bg.on(Event.CLICK,this,function(e:Event):void{
				e.stopPropagation();
			})
			_skin.soundBtn.on(Event.CLICK,this,onClickSoundBtn);
			_skin.musicBtn.on(Event.CLICK,this,onClickMusicBtn);
			
			_skin.shareBtn.on(Event.CLICK,this,onClickShareBtn);
			_skin.dissolveBtn.on(Event.CLICK,this,onClickDissolveBtn);
			
			_skin.dissolveBtn.visible = false;
			
			if(AppConfig.soundVol > 0)
			{
				_skin.soundBtn.selected = true;
			}
			else
			{
				_skin.soundBtn.selected = false;
			}
			
			if(AppConfig.musicVol > 0)
			{
				_skin.musicBtn.selected = true;
			}
			else
			{
				_skin.musicBtn.selected = false;
			}
		}
		
		public function showOrHide():void
		{
			if(_skin.parent)
			{
				_skin.parent.removeChild(_skin);
				isShow = false;
			}
			else
			{
				
				if(ModuleDef.CurGameModule.inGame && ModuleDef.CurGameModule.instance.gameContext.model.gameHasStarted)
				{
					_skin.dissolveBtn.visible = true;
				}
				else
				{
					_skin.dissolveBtn.visible = false;
				}
				UIManager.instance.uiCommonLayer.addChild(_skin);
				
				_skin.x = (Laya.stage.width - _skin.width)  >> 1;
				_skin.y = (Laya.stage.height - _skin.height) >> 1;
				
				isShow = true;
			}
		}
		
		public function show():void
		{
			if(ModuleDef.CurGameModule.inGame && ModuleDef.CurGameModule.instance.gameContext.model.gameHasStarted)
			{
				_skin.dissolveBtn.visible = true;
			}
			else
			{
				_skin.dissolveBtn.visible = false;
			}
			
			UIManager.instance.uiCommonLayer.addChild(_skin);
			
			_skin.x = (Laya.stage.width - _skin.width) /2;
			_skin.y = (Laya.stage.height - _skin.height)/2;
			
			isShow = true;
		}
		
		public function hide():void
		{
			if(_skin.parent)
			{
				_skin.parent.removeChild(_skin);
			}
			isShow = false;
		}
		
		protected function onClickCloseBtn(e:Event):void
		{
			SoundPlay.instance.playClickBtnSound();
			hide();
		}
		
		protected function onClickSoundBtn(e:Event):void
		{
			SoundPlay.instance.playClickBtnSound();
			_skin.soundBtn.selected = !_skin.soundBtn.selected;
			
			if(_skin.soundBtn.selected)
			{
				AppConfig.soundVol = 1;
			}
			else
			{
				AppConfig.soundVol = 0;
			}
			
			e.stopPropagation()
		}
		
		protected function onClickMusicBtn(e:Event):void
		{
			
			SoundPlay.instance.playClickBtnSound();
			_skin.musicBtn.selected = !_skin.musicBtn.selected;
			
			if(_skin.musicBtn.selected)//选中
			{
				AppConfig.musicVol = 1;
			}
			else
			{
				AppConfig.musicVol = 0;
			}
			
			e.stopPropagation()
		}
		
		protected function onClickShareBtn(e:Event):void
		{
			SoundPlay.instance.playClickBtnSound();
		}
		
		protected function onClickDissolveBtn(e:Event):void
		{
			trace("解散");
			SoundPlay.instance.playClickBtnSound();
			
			var obj:Object = {roomId:UserData.roomid};
			
			EventCenter.instance.event(EventCenter.SOCKET_SEND,ProtoMessage.getProtoMessage(Message.Disband,obj));
			
			hide();
			//QuickUtils.popDissolveRoomDetail();
		}
		
	}
}