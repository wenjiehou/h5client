package common.view
{
	import common.CommonModule;
	
	import laya.events.Event;
	
	import manager.UIManager;
	
	import net.Message;
	import net.ProtoMessage;
	
	import ui.common.FunctionOptionUI;

	public class FunctionOption
	{
		protected var _skin:FunctionOptionUI;
		public var isShow:Boolean = false;
		public function FunctionOption()
		{
			_skin = new FunctionOptionUI();
			init();
		}
		
		public function init():void
		{
//			this.onClick(_skin.look);
//			this.onClick(_skin.shareFrend);
//			this.onClick(_skin.playRule);
//			this.onClick(_skin.backHall);
//			this.onClick(_skin.setting);
			
			_orignalX = _skin.posBox.x;
			_orignalY = _skin.posBox.y;
			
			
			_skin.look.on(Event.CLICK,this,this.gotoLook);
			_skin.shareFrend.on(Event.CLICK,this,this.gotoShareFrend);
			
			_skin.playRule.on(Event.CLICK,this,this.gotoPlayRule);
			_skin.backHall.on(Event.CLICK,this,this.gotoBackHall);
			_skin.setting.on(Event.CLICK,this,this.gotoSetting);
			
			Laya.stage.on(Event.CLICK,this,function():void{
				if(this.isShow)
				{
					this.hide();
				}	
			});
			_skin.on(Event.CLICK,this,function(e:Event):void{
				e.stopPropagation();
				this.hide();
			});
		}
		
//		private function onClick(obj:*):void
//		{
//			obj.on(Event.MOUSE_DOWN ,this,function():void{
//				obj.gray=true;
//			});
//			obj.on(Event.MOUSE_UP,this,function():void{
//				obj.gray=false;
//			});
//			obj.on(Event.MOUSE_OUT,this,function():void{
//				obj.gray=false;
//			});
//		}
		
		private function gotoLook(e:Event):void
		{
			var standupObj:Object = {sid:UserData.SID,index:ModuleDef.CurGameModule.instance.gameContext.model.selfChairPos};
			ModuleDef.CurGameModule.instance.gameContext.controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.MSG_Standup,standupObj),false);
		}
		
		public function onClickBtn(boo:Boolean):void
		{
			_skin.look.disabled=boo;
		}
		
		private function gotoShareFrend():void
		{
			if(ModuleDef.CurGameModule.inGame && UserData.roomtype == UserData.RoomType_SanDizhu)
			{
				CommonModule.instance.commonContext.view.vgameShareView.show();
			}
			else
			{
				CommonModule.instance.commonContext.view.gameShareView.show();
			}
			
		}
		
		private function gotoPlayRule():void
		{
			if(ModuleDef.CurGameModule.inGame && UserData.roomtype == UserData.RoomType_SanDizhu)
			{
				CommonModule.instance.commonContext.view.vgameHelpView.show();
			}
			else
			{
				CommonModule.instance.commonContext.view.gameHelpView.show();
			}
		
		}
		
		private function gotoBackHall():void
		{
			var ExitRoomObj:Object = {sid:UserData.SID};
			ModuleDef.CurGameModule.instance.gameContext.controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Exit_Room,ExitRoomObj),false);
		}
		
		private function gotoSetting():void
		{
			CommonModule.instance.commonContext.view.settingView.showOrHide();
		}
		
		protected var _orignalX:Number = 0;
		protected var _orignalY:Number = 0;
		
		public function showOrHide(offsetX:Number=0,offsetY:Number=0):void
		{
			if(_skin.parent)
			{
				_skin.parent.removeChild(_skin);
				isShow = false;
			}
			else
			{
				_skin.posBox.x = _orignalX + offsetX;
				_skin.posBox.y = _orignalY + offsetY;
				
				QuickUtils.AddCenter(_skin,UIManager.instance.popLayer);
				
				//UIManager.instance.uiCommonLayer.addChild(_skin);
				isShow = true;
			}
		}
		
		public function show():void
		{
			QuickUtils.AddCenter(_skin,UIManager.instance.popLayer);
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
	}
}