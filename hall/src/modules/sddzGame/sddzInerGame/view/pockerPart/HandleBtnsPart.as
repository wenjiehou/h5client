package modules.sddzGame.sddzInerGame.view.pockerPart
{
	import common.tools.SoundPlay;
	
	import laya.events.Event;
	
	import modules.sddzGame.SDdzGameModule;
	import modules.sddzGame.sddzInerGame.controller.SddzGameController;
	import modules.sddzGame.sddzInerGame.model.SddzModel;
	import modules.sddzGame.sddzInerGame.model.data.PaixingLogic;
	import modules.sddzGame.sddzInerGame.view.SddzGameView;
	import modules.sddzGame.sddzInerGame.view.pockerPart.card.BasePocker;
	
	import net.Message;
	import net.ProtoMessage;
	
	import ui.sddzGame.ddzPart.PlayerCtlPartUI;

	public class HandleBtnsPart
	{
		
		protected var singleBtnW:Number = 183;
		protected var gap:Number = 20;
		
		protected var _skin:PlayerCtlPartUI;
		
		protected var state:int = -1;
		
		public function HandleBtnsPart(skin:PlayerCtlPartUI)
		{
			_skin = skin;
			
			init();
		}
		
		protected function init():void
		{
			addListener();
		}
		
	
		
		/**显示叫地主（暂时只有叫分）*/
		public function showJiaodizhu():void
		{
			if(model.isSelfSitDown == false)
			{
				return;
			}
			
			//
			_skin.jiaogqiangBox.visible = false;
			_skin.jiaofenBox.visible = true;
			
			//暂时只有叫分
			_skin.jiabeiBox.visible = false;
			_skin.ctlBox.visible = false;
			
			
			//
			var num:int = 0;
			_skin.fen0Btn.visible = true;
			num +=1;
			_skin.fen1Btn.visible = model.difen==0;
			if(_skin.fen1Btn.visible)
			{
				_skin.fen1Btn.x = (singleBtnW+gap)*num;
				num +=1;
			}
			_skin.fen2Btn.visible = model.difen <= 1;
			if(_skin.fen2Btn.visible)
			{
				_skin.fen2Btn.x = (singleBtnW+gap)*num;
				num += 1;
			}
			_skin.fen3Btn.visible = model.difen <= 2;
			if(_skin.fen3Btn.visible)
			{
				_skin.fen3Btn.x = (singleBtnW+gap)*num;
				num +=1;
			}
			_skin.jiaofenBox.x =(singleBtnW+gap)*(4-num)/2;
			
			if(AppConfig.autoPlay)//自动打牌
			{
				Laya.timer.once(AppConfig.autoPlayDelay,this,onClickFenBtn,[3]);
			}
		}
	
		
		public function showjiabei():void
		{
			if(model.isSelfSitDown == false)
			{
				return;
			} 
			
			_skin.jiaogqiangBox.visible = false;
			_skin.jiaofenBox.visible = false;
			
			_skin.jiabeiBox.visible = true;
			_skin.ctlBox.visible = false;
			
			var num:int = 0;
			
			_skin.jiabeiBtn.visible = true;
			num+=1;
			_skin.bujiaBtn.visible = true;
			_skin.bujiaBtn.x = (singleBtnW+gap)*num;
			num += 1;
			_skin.jiabeiBox.x =(singleBtnW+gap)*(4-num)/2;
			
			if(AppConfig.autoPlay){
				
				Laya.timer.once(AppConfig.autoPlayDelay,this,onClickJiaBtn,[false]);
				//onClickJiaBtn(false,null);
			}
		}
		
		/**要不起按钮后面再加上去*/
		public function showCtlBtns():void
		{
			if(model.isSelfSitDown == false)
			{
				return;
			}
			
			_skin.jiaogqiangBox.visible = false;
			_skin.jiaofenBox.visible = false;
			
			_skin.jiabeiBox.visible = false;
			_skin.ctlBox.visible = true;
			
			var num:int = 0;
			
			_skin.mingpaiBtn.visible = false;
			if(model.curOutputPos == -1 && model.dizhuPos == model.selfChairPos && model.mingpaiVec[model.selfChairPos] == false)//当前没有人出过牌并且自己是地主
			{
				_skin.mingpaiBtn.visible = true;
				num += 1;
			}
			
			_skin.buchuBtn.visible = false;
			_skin.tishiBtn.visible = false;
			_skin.chupaiBtn.visible = false;
			_skin.buqiBtn.visible = false;
			
			if(model.curOutputPos != -1 && model.curOutputPos != model.selfChairPos)//当前有人出过牌兵并且不是自己
			{
				//如果要得起
				var cards:Array = PaixingLogic.getBigThan(model.handleCards[model.selfChairPos],model.curOutputCards);
				if(cards.length > 0)
				{
					_skin.buchuBtn.visible = true;
					_skin.buchuBtn.x =  (singleBtnW+gap)*num;
					num += 1;
					
					_skin.tishiBtn.visible = true;
					_skin.tishiBtn.x = (singleBtnW+gap)*num;
					num += 1;
					
					_skin.chupaiBtn.visible = true;
					_skin.chupaiBtn.x =  (singleBtnW+gap)*num;
					num += 1;
					
					if(AppConfig.autoPlay){
						Laya.timer.once(AppConfig.autoPlayDelay,null,function (cards:Array):void{
							var paixing:int = PaixingLogic.getPaixing(cards);
							var chupaiObj:Object = {Sid:UserData.SID,Type:paixing,Cards:cards};
							controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Sddz_Chupai,chupaiObj));
						},[cards]);
						reset();
					}
				}
				else
				{
					_skin.buqiBtn.visible = true;
					_skin.buqiBtn.x =  (singleBtnW+gap)*num;
					num += 1;
					
					if(AppConfig.autoPlay){
						if(_skin.buqiBtn.visible)
						{
							onClickBuchuBtn();
						}	
					}
				}
			}
			else
			{
				_skin.chupaiBtn.visible = true;
				_skin.chupaiBtn.x =  (singleBtnW+gap)*num;
				num += 1;
				
				if(AppConfig.autoPlay)
				{
					var card:int = model.handleCards[model.selfChairPos][0];
					
					Laya.timer.once(AppConfig.autoPlayDelay,null,function (card:int):void{
						var paixing:int = BasePocker.PAIXING_DAN;
						var chupaiObj:Object = {Sid:UserData.SID,Type:paixing,Cards:[card]};
						controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Sddz_Chupai,chupaiObj));
					},[card]);
				
					reset();
				}
			}
			
			_skin.ctlBox.x =(singleBtnW+gap)*(4-num)/2; 
			
			
			
		}
		
		
		protected function addListener():void
		{
			_skin.fen0Btn.on(Event.CLICK,this,onClickFenBtn,[0]);
			_skin.fen1Btn.on(Event.CLICK,this,onClickFenBtn,[1]);
			_skin.fen2Btn.on(Event.CLICK,this,onClickFenBtn,[2]);
			_skin.fen3Btn.on(Event.CLICK,this,onClickFenBtn,[3]);
			
			_skin.jiabeiBtn.on(Event.CLICK,this,onClickJiaBtn,[true]);
			_skin.bujiaBtn.on(Event.CLICK,this,onClickJiaBtn,[false]);
			
			_skin.mingpaiBtn.on(Event.CLICK,this,onClickMingBtn);
			_skin.buchuBtn.on(Event.CLICK,this,onClickBuchuBtn);
			_skin.tishiBtn.on(Event.CLICK,this,onClickTishiBtn);
			_skin.chupaiBtn.on(Event.CLICK,this,onClickChupaiBtn);
			_skin.buqiBtn.on(Event.CLICK,this,onClickBuchuBtn); 
			
		}
		
		/**叫分相关*/
		protected function onClickFenBtn(fen:int,e:Event=null):void
		{
			var jiaofenObj:Object = {Sid:UserData.SID,Fen:fen};
			controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Sddz_Jiaofen,jiaofenObj));
			
			reset();
		}
		

		
		protected function onClickJiaBtn(jiabei:Boolean,e:Event):void
		{
			var jiabeiObj:Object = {Sid:UserData.SID,Jiabei:jiabei};
			controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Sddz_Jiabei,jiabeiObj));
			
			reset();
		}
		
		protected function onClickMingBtn(e:Event):void
		{
			var mingObj:Object = {Sid:UserData.SID};
			controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Sddz_Mingpai,mingObj));
			_skin.mingpaiBtn.visible = false;//单独隐藏明牌按钮
		}
		
		protected function onClickBuchuBtn(e:Event=null):void
		{
			var passObj:Object = {Sid:UserData.SID};
			controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Sddz_Pass,passObj));
			view.sddzPage.handlePart.setSelfPockSele([]);
			reset();
		}
		
		protected function onClickTishiBtn(e:Event):void
		{
			e.stopPropagation();
			var cards:Array = PaixingLogic.getBigThan(model.handleCards[model.selfChairPos],model.curOutputCards);
			if(cards.length > 0)
			{
				view.sddzPage.handlePart.setSelfPockSele(cards);
			}
			else
			{
				//onClickBuchuBtn();
			}
	
		}
		
		protected function onClickChupaiBtn(e:Event):void
		{
			var cards:Array = view.sddzPage.handlePart.getSelfSelePockers();
			if(cards.length == 0)
			{
				SoundPlay.playEffect("audio_warning");
				QuickUtils.popMessage("你的出牌不能为空");
			}
			
			var paixing:int = PaixingLogic.getPaixing(cards);
			
			if(paixing == BasePocker.PAIXING_NON)
			{
				SoundPlay.playEffect("audio_warning");
				QuickUtils.popMessage("你的牌型不合法");
				return;
			}
			
			var chupaiObj:Object;
			if(model.curOutputCards.length == 0 || model.curOutputPos == model.selfChairPos)//
			{
				chupaiObj = {Sid:UserData.SID,Type:paixing,Cards:cards};
				controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Sddz_Chupai,chupaiObj));
				
				reset();
			}
			else
			{
				var retArr:Array = PaixingLogic.getBigThan(cards,model.curOutputCards);
				
				if(paixing == BasePocker.PAIXING_DUIWANG || paixing == BasePocker.PAIXING_ZHADAN)
				{
					if(retArr.length > 0)
					{
						chupaiObj = {Sid:UserData.SID,Type:paixing,Cards:cards};
						controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Sddz_Chupai,chupaiObj));
						reset();
					}
				}	
				else if(retArr.length == cards.length)//所选的牌组成的牌型正好可以大过
				{
					chupaiObj = {Sid:UserData.SID,Type:paixing,Cards:cards};
					
					controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Sddz_Chupai,chupaiObj));
					
					reset();
				}
				else
				{
//					if(paixing == BasePocker.PAIXING_SIDAIER)
//					{
//						var jishu:JishuArrData = JishuArrData.getJishuArrData(cards);
//						var sier:SidaierData = SidaierData.getSidaierData(jishu);
//						
//						var oJishu:JishuArrData = JishuArrData.getJishuArrData(model.curOutputCards);
//						
//						
//						
//						
//					}
					SoundPlay.playEffect("audio_warning");
					QuickUtils.popMessage("你的出牌不能大于当前牌");
				}
			}
			
			
		}
		
		public function show():void
		{
			_skin.visible = true;
		}
		
		public function hide():void
		{
			_skin.visible = false;
		}
		
		public function get visible():Boolean
		{
			return _skin.visible;
		}
		
		public function reset():void
		{
			_skin.jiaogqiangBox.visible = false;
			_skin.jiaofenBox.visible = false;
			
			_skin.jiabeiBox.visible = false;
			_skin.ctlBox.visible = false;
		}
		
		protected function get model():SddzModel
		{
			return SDdzGameModule.instance.gameContext.model;
		}
		
		protected function get controller():SddzGameController
		{
			return SDdzGameModule.instance.gameContext.controller;
		}
		
		protected function get view():SddzGameView
		{
			return SDdzGameModule.instance.gameContext.view;
		}
	}
}