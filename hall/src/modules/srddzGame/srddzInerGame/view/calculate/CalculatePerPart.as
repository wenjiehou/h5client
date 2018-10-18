package modules.srddzGame.srddzInerGame.view.calculate
{
	import common.view.PopBox;
	
	import hall.HallModule;
	
	import laya.events.Event;
	
	import modules.srddzGame.SrddzGameModule;
	import modules.srddzGame.srddzInerGame.controller.SrddzController;
	import modules.srddzGame.srddzInerGame.model.SrddzModel;
	import modules.srddzGame.srddzInerGame.view.SrddzView;
	import modules.srddzGame.srddzInerGame.view.calculate.item.CalculatePerItem;
	import modules.srddzGame.srddzInerGame.view.playerInfoPart.PiaoSelePart;
	
	import net.Message;
	import net.ProtoMessage;
	
	import ui.srddzGame.calculate.CalculatePerPageUI;

	public class CalculatePerPart
	{
		protected var _skin:CalculatePerPageUI;
		
		protected var _items:Vector.<CalculatePerItem> = new Vector.<CalculatePerItem>(4);
		
		public function get isShow():Boolean
		{
			return _skin.visible;
		}
		
		public function CalculatePerPart(skin:CalculatePerPageUI)
		{
			_skin = skin;
			
			var i:int;
			var len:int = _items.length;
			
			for(i=0;i<len;i++)
			{
				_items[i] = new CalculatePerItem(_skin["item"+i]);
			}
			
			_skin.hideBtn.on(Event.CLICK,this,onClickHideBtn);
			_skin.readyBtn.on(Event.CLICK,this,onClickReadyBtn);
			_skin.confirmBtn.on(Event.CLICK,this,onClickConfirmBtn);
			_skin.closeBtn.on(Event.CLICK,this,onClickCloseBtn);
			
			reset();
		}
		
		public function getPiaoSelePart():PiaoSelePart
		{
			return null;
			//			return _PiaoSelePart;
		}
		
		protected function onClickHideBtn(e:Event):void
		{
			
			_skin.visible=false;
			view.calculatePage.showPerShowBtn();
		}
		
		protected function onClickReadyBtn(e:Event):void
		{
			var obj:Object = {sid:UserData.SID};
			controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.User_Ready,obj));
			hide();
		}
		
		public function onClickConfirmBtn(e:Event=null):void
		{
			trace("点击了确定按钮，要跳到总的结算界面啦");
			view.calculatePage.reset();
			
			onConfirmEnd(0);
			return;
			
			QuickUtils.popMessageBox("房间已结束！",PopBox.BTN_ENDGAME,this,onConfirmEnd);
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
		
		protected function onClickCloseBtn(e:Event):void
		{
			hide();
		}
		
		public function timeOver():void
		{
			_skin.visible = true;
			_skin.readyBtn.visible = false;
			_skin.confirmBtn.visible = false;
			_skin.readyImg.visible = false;
			_skin.closeBtn.visible = false;
			if(model.isSelfSitDown)
			{
				_skin.confirmBtn.visible = true;
			}
			else
			{
				_skin.confirmBtn.visible = true;
			}
		}
		
		public function hideReadyBtn():void
		{
			
		}
		
		public function updateBtns():void
		{
			if(UserData.isReplay)
			{
				_skin.hideBtn.alpha = 0;
			}
			else
			{
				_skin.hideBtn.alpha = 1;
			}
			
			if(isShow == false || UserData.isReplay){
				_skin.readyImg.visible = false;
				_skin.readyBtn.visible=false;
				_skin.confirmBtn.visible = false;
				return;
			}
			
			
			
			_skin.readyBtn.visible = false;
			_skin.confirmBtn.visible = false;
			_skin.readyImg.visible = false;
			_skin.closeBtn.visible = false;
			if(model.isSelfSitDown)
			{
				if(model.srddzMsgs.ACKBC_Sddz_Total.Finished == undefined)
				{
					model.srddzMsgs.ACKBC_Sddz_Total.Finished = false;
				}
				if(model.srddzMsgs.ACKBC_Sddz_Total.Finished==true)
				{
					_skin.confirmBtn.visible = true;
					if(AppConfig.autoPlay)
					{
						onClickConfirmBtn(null);
					}
					
				}else{
					_skin.readyBtn.visible = true;
					_skin.readyImg.visible = true;
					
					if(AppConfig.autoPlay)
					{
						var jiesuanObj:Object = model.srddzMsgs.ACKBC_Sddz_Total;
						if(jiesuanObj.List[0].Score + jiesuanObj.List[1].Score + jiesuanObj.List[2].Score == 0)
						{
							onClickReadyBtn(null);
						}
					}
				}
			}
			else
			{
				if(model.srddzMsgs.ACKBC_Sddz_Total.Finished==true)
				{
					_skin.confirmBtn.visible = true;
				}
				else
				{
					_skin.closeBtn.visible = true;
				}
			}
		}
		
		public function show():void
		{
			_skin.visible = true;
			updateBtns();
			
			//界面填充最后来补
			//todo
			
			var calData:Object = model.srddzMsgs.ACKBC_Sddz_Total;
			
			//			repeated SddzPerTotal List              = 1;//玩家的分数信息
			//			bool Finished 						= 2;//是否结束(true 已结束 false未结束)
			//			int64 RoundCount 					= 3;//当前已进行局数
			//			string Attached                     = 4;//附加信息
			var i:int;
			if(model.isLiu)
			{
				for (i = 0; i < _items.length; i++) 
				{
					_items[i].update(i,null,model.isLiu);
				}
			}
			else
			{
				var player:Object;
				for (i = 0; i < _items.length; i++) 
				{
					_items[i].update(i,calData.List[i],model.isLiu);
					
					player = model.playerByPos(i);
					
					if(UserData.Rule[4] == UserData.Coin_type){//金币场
						player.Coin = calData.List[i].TotalScore != undefined ? calData.List[i].TotalScore : 0;
					}
					
					player.score=calData.List[i].TotalScore != undefined ? calData.List[i].TotalScore : 0;
//					player.score=calData.List[i].TotalScore != undefined ? calData.List[i].TotalScore : 0;
					
					trace("player.score::" + player.score);
				}
				
				view.playerInfoPage.updatePlayerInfos(model.playerInfoVec,false);
				view.playerInfoPage.updateJiabei();
			}
		}
		
		//
		
		
		public function reset():void
		{
			var i:int;
			var len:int = _items.length;
			
			for(i=0;i<len;i++)
			{
				_items[i].reset();
			}
			
			_skin.visible = false;
		}
		
		public function hide():void
		{
			_skin.visible = false;
		}
		
		protected function get model():SrddzModel
		{
			return SrddzGameModule.instance.gameContext.model;
		}
		
		protected function get controller():SrddzController
		{
			return SrddzGameModule.instance.gameContext.controller;
		}
		
		protected function get view():SrddzView
		{
			return SrddzGameModule.instance.gameContext.view;
		}
		
	}
}