package modules.game.majiangGame.view.card.handCard
{
	import common.tools.SoundPlay;
	
	import laya.events.Event;
	import laya.maths.Point;
	import laya.maths.Rectangle;
	import laya.ui.View;
	import laya.utils.Tween;
	
	import modules.game.GameModule;
	import modules.game.majiangGame.model.MajiangModel;
	import modules.game.majiangGame.view.MajiangGameView;
	import modules.game.majiangGame.view.card.BaseCard;
	
	import net.Message;
	import net.ProtoMessage;
	
	import ui.mainGame.Items.BottomHandleItemUI;
	
	/**底部玩家手里的单张牌*/
	public class BottomHandleCard extends BaseCard
	{
		
		protected var dragRegion:Rectangle;
		
		protected var readyOffsetY:int = -20;
		
		protected var skinPreX:Number = 0;
		
		protected var needAlpha:Boolean = true;
		
		protected var needSkinY0:Boolean = true;
		
		
		public function BottomHandleCard(skin:BottomHandleItemUI,needAlpha:Boolean = true,needSkinY0:Boolean=true)
		{
			super(skin);
			
			_skin = skin;
			_skin["dark"] = false
			skinPreX = _skin.x;
			this.needSkinY0 = needSkinY0;
			if(needSkinY0)
			{
				_skin.y = 0;
			}
			this.needAlpha = needAlpha;
			init();
		}
		
		/**设置是否可以操作*/
		override public function set canControl(bool:Boolean):void
		{
			if(!model.isSelfSitDown)
				bool=false;
			if(bool)
			{
				Laya.stage.on(Event.CLICK,this,onClickStage);
				_skin.on(Event.MOUSE_DOWN, this, onStartDrag);
				//				if(needAlpha)
				//				{
				//					//QuickUtils.addDark(_skin,false);
				//					//_skin.alpha = 1;
				//				}
			}
			else
			{
				Laya.stage.off(Event.CLICK,this,onClickStage);
				_skin.off(Event.MOUSE_DOWN, this, onStartDrag);
				if(needAlpha)
				{
					QuickUtils.addDark(_skin,false);
					_skin["dark"] = false;
					//_skin.alpha = 0.8;
				}
				if(needSkinY0)
				{
					_skin.y = 0;
				}
				
				_isNextOutputKouCard = false;
				_isNextOutputTingCard = false;
			}
			
		}
		
		override public function set canControlWitchDark(bool:Boolean):void
		{
			if(bool)
			{
				QuickUtils.addDark(_skin,false);
				_skin["dark"] == false;
			}
			else
			{
				_skin.off(Event.MOUSE_DOWN, this, onStartDrag);
				_skin.off(Event.MOUSE_DOWN, this, onStartDrag);
				QuickUtils.addDark(_skin,true);
				_skin["dark"] = true;
			}
		}
		
		
		
		
		protected function onClickStage(e:Event):void
		{
			trace("click card e.target" + e.target + (e.target == _skin));
			if(e.target != _skin && _skin.y ==  readyOffsetY)
			{
				_skin.y =  0;
				if(!(e.target is BottomHandleItemUI) && model.isTingVec[model.selfChairPos] == false)
				{
					GameModule.instance.gameContext.view.majiangPage.hupaiTipPart.cancelShowHuTip(model.selfChairPos);
				}
				
				//隐藏效果
				//隐藏效果
				if(model.isNextGang == false)
				{
					GameModule.instance.gameContext.controller.hidePreDiscardEff();
				}
			}
		}
		
		protected function init():void
		{
			//setCardImg(272);
		}
		
		protected function onStopDrag(evt:Event=null):void
		{
			
			//隐藏效果
			GameModule.instance.gameContext.controller.hidePreDiscardEff();
			
			model.isDragingcard = false;
			
			var vie:View = _skin as View;
			
			model.selfOutputCardPos = QuickUtils.localToGlobal(vie,new Point(vie.x,vie.y));
			
			_skin.stopDrag();
			
			_skin.x = skinPreX;
			
			if(_skin.y <= readyOffsetY)
			{
				_skin.y = 0;
				disCard();
				
				if(model.isTingVec[model.selfChairPos] == false)
				{
					GameModule.instance.gameContext.view.majiangPage.hupaiTipPart.cancelShowHuTip(model.selfChairPos);
				}
			}
			else
			{
				if(_skin.y > 0)
				{
					_skin.y = 0;
					
					if(model.isTingVec[model.selfChairPos] == false)
					{
						GameModule.instance.gameContext.view.majiangPage.hupaiTipPart.cancelShowHuTip(model.selfChairPos);
					}
				}
				else
				{
					_skin.y =  1;
					Tween.to(_skin,{y:readyOffsetY},40);
					SoundPlay.playEffect("audio_card_click");
					
					
					if(model.isTingVec[model.selfChairPos] == false)
					{
						if(isShowTingImg)
						{
							//							var huArr:Array = model.getHuTipArr(_cardIdx);
							//							if(huArr.length > 0)
							//							{
							//								GameModule.instance.majiangGameContext.majiangGameView.majiangPage.hupaiTipPart.showCanHuCards(model.selfChairPos,huArr);
							//							}
						}
						else
						{
							GameModule.instance.gameContext.view.majiangPage.hupaiTipPart.cancelShowHuTip(model.selfChairPos);
							
						}
					}
					
					//这个情况下需要显示效果
					if(model.isNextGang == false)
					{
						Laya.timer.frameOnce(1,this,showPreEff);
					}
					
					
				}
				
				if(_isNextOutputKouCard || model.isNextGang)//这两种情况下点一个也行 _isNextOutputTingCard || 
				{
					disCard();
					_skin.y = 0;
				}
				
				if(_isNextOutputTingCard)
				{
					//qingqiu hu cardIdx  胡牌提示
					//					var huArr1:Array = model.gethuCards(_cardIdx);
					//					if(huArr1.length > 0)
					//					{
					//						GameModule.instance.majiangGameContext.majiangGameView.majiangPage.hupaiTipPart.showHuTip(model.selfChairPos,huArr1);
					//					}
				}
			}
			
			this.view.gui.main.off(Event.MOUSE_UP,this,onStopDrag);
			this.view.gui.main.off(Event.MOUSE_OUT,this,onStopDrag);
			Laya.timer.clear(this,onDragMove);
			//			Laya.stage.off(Event.DRAG_MOVE,this,onDragMove);
		}
		
		protected function showPreEff():void
		{
			GameModule.instance.gameContext.controller.showPreDiscardEff(cardIdx);
		}
		
		/**出牌*/
		protected function disCard():void
		{
			//todo
			trace("chupaile ::" + CARD_REFERENCE[cardIdx]);
			
			var i:int;
			var len:int;
			
			if(model.isNextGang)
			{
				var gangType:int;
				len = model.tempGangCards.length;
				
				for(i=0;i<len;i++)
				{
					if(model.tempGangCards[i].card == cardIdx)
					{
						gangType = model.tempGangCards[i].type;
						break;
					}
				}
				var gangObj:Object = {SID:UserData.SID,CID:cardIdx-1};
				GameModule.instance.gameContext.controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Kong,gangObj));
				
				model.isNextGang = false;
				return;
			}
			
			if(_isNextOutputTingCard)
			{
				var obj:Object = {cmd:"TING" + cardIdx};
				
				len = model.tempKouCards.length;
				
				var kouStr:String = "";
				
				if(true)//UserData.roomtype == 5
				{
					for(i=0;i<len;i++)
					{
						if(kouStr == "")
						{
							kouStr = " " + model.tempKouCards[i];
						}
						else
						{
							kouStr += "," + model.tempKouCards[i];
						}
						//
					}
					
					if(kouStr == "")
					{
						kouStr = " -1|"
					}
					else
					{
						kouStr = kouStr + "|";
					}
					
					//{canDownCards:canDownCards,isHaveJiang:isHaveJiang,jiangpai:jiangpai};
					
					var resultObj:Object = model.getTingDownCards(cardIdx,model.tempKouCards);
					
					var cards:Array = resultObj.canDownCards;
					
					var downStr:String = "";
					
					for(i=0;i<cards.length;i++)
					{
						if(downStr == "")
						{
							downStr = cards[i];
						}
						else
						{
							downStr += ","+cards[i];
						}
					}
					
					obj.cmd +=  (kouStr + downStr);
					
					if(resultObj.isHaveJiang == true)
					{
						obj.cmd += "=" + resultObj.jiangpai;
					}
					else
					{
						obj.cmd += "=" + -1;
					}
				}
				else
				{
					for(i=0;i<len;i++)
					{
						if(kouStr == "")
						{
							kouStr = " " + model.tempKouCards[i];
						}
						else
						{
							kouStr += " " + model.tempKouCards[i];
						}
						//
					}
					
					obj.cmd +=  kouStr;
				}
				
				GameModule.instance.gameContext.controller.sendMsgCommond(obj);
				GameModule.instance.gameContext.view.majiangPage.handleBtns.hide();
				GameModule.instance.gameContext.model.isTingVec[GameModule.instance.gameContext.model.selfChairPos] = true;
				
				_isNextOutputTingCard = false;
				
				model.isNextCancelBtnKou = false;
				model.isCancelTingp = false;
				
			}
			else if(_isNextOutputKouCard)//这个是点击了扣的
			{
				//临时记录
				model.tempKouCards.push(this.cardIdx);
				//直接把扣的牌
				view.majiangPage.handPart.showTempKouCards(cardIdx);
				//把扣的按钮和取消按钮显示出来
				view.majiangPage.handleBtns.showKouBtnEnable();
				
				_isNextOutputKouCard = false;
				
				//向服务器请求后面可以扣的牌
				var cmd:Object = {cmd:"KOUP" + (cardIdx+1)};
				
				GameModule.instance.gameContext.controller.sendMsgCommond(cmd);
				
			}
			else
			{
				GameModule.instance.gameContext.controller.discard(cardIdx);
				
				//隐藏效果
				GameModule.instance.gameContext.controller.hidePreDiscardEff();
			}
			
			
			
			
		}
		
		protected function get view():MajiangGameView
		{
			return GameModule.instance.gameContext.view;
		}
		
		protected function get model():MajiangModel
		{
			return GameModule.instance.gameContext.model;
		}
		
		protected function onDragMove(e:Event):void
		{
			//			trace("e.x:" + Laya.stage.mouseX + "  e.y::" +Laya.stage.mouseY);
			//			trace("Laya.stage.focus ::" + Laya.stage.mouseX + Laya.stage.mouseY);
			if(Laya.stage.mouseX >= Laya.stage.width || Laya.stage.mouseY >= Laya.stage.height || Laya.stage.mouseX <= 0 || Laya.stage.mouseY <= 0)
			{
				onStopDrag();
			}
			
			//			trace("x:"+e.stageX + "  y:" + e.stageY);
			//			
			//			if(e.stageX >= (Laya.stage.width-10) || e.stageX <= 10 || e.stageY <= 10 || e.stageY >= (Laya.stage.height-10))
			//			{
			//				onStopDrag();
			//			}
			
			
			//			if(skin.x > 1240)
			//			{
			//				_skin.x = 1240;
			//			}
		}
		
		//		protected var dragRec:Rectangle = new Rectangle(0,0,100,100);
		
		protected function onStartDrag(e:Event):void
		{
			//			SoundManager.playSound(SoundPlay.instance.rootPath + 
			//				SoundPlay.instance.languageReference[SoundPlay.instance.defaultLanguage]+"seleCard.mp3",1);
			
			model.isDragingcard = true;
			
			_skin.parent.addChild(_skin);
			//			skinPreX = _skin.x;
			_skin.startDrag(null, true, 100);
			
			//_skin.on(Event.MOUSE_MOVE,this,onDragMove);
			Laya.timer.loop(50,this,onDragMove);
			
			
			view.gui.main.on(Event.MOUSE_UP,this,onStopDrag);
			view.gui.main.on(Event.MOUSE_OUT,this,onStopDrag);
			//			view.gui.main.on(Event.FOCUS_CHANGE,this,onStopDrag);
			
			//Laya.stage.on(Event.MOUSE_MOVE,this,onDragMove);
		}
		
		
		
		override public function up():void
		{
			if(state == CARCSTATE_UP)
			{
				return;
			}
			
			//			_skin.baidaImg.y = 9;
			_skin.valueImg.y = 34;
			
			_skin.frontImg.visible = true;
			_skin.valueImg.visible = true;
			_skin.backImg.visible = false;
			_skin.downImg.visible = false;
			
			super.up();
		}
		
		override public function down():void
		{
			if(state == CARCSTATE_DOWN)
			{
				return;
			}
			_skin.y=0;
			//			_skin.baidaImg.y = 1;
			_skin.valueImg.y = 2;
			
			_skin.frontImg.visible = false;
			_skin.valueImg.visible = true;
			_skin.backImg.visible = false;
			_skin.downImg.visible = true;
			
			super.down();
		}
		
		override public function back():void
		{
			if(state == CARCSTATE_BACK)
			{
				return;
			}
			
			_skin.frontImg.visible = false;
			_skin.valueImg.visible = false;
			_skin.backImg.visible = true;
			_skin.downImg.visible = false;
			
			super.back();
		}
		
		override public function show():void
		{
			_skin.visible = true;
		}
		
		override public function hide():void
		{
			_skin.visible = false;
		}
		
		override public function get visible():Boolean
		{
			return _skin.visible;
		}
		
		protected var _isNextOutputTingCard:Boolean = false;
		protected var _isNextOutputKouCard:Boolean = false;
		
		
		
		override public function showTingState(bool:Boolean):void
		{
			if(!bool)
			{
				//_skin.downImg.alpha = 0.5;
				canControl = false;
			}
			else
			{
				//_skin.downImg.alpha = 1;
				canControl = true;
				_isNextOutputTingCard = true;
			}
		}
		override public function cancleTingState():void
		{
			canControl = true;
			_isNextOutputTingCard = false;
		}
		override public function showKouState(bool:Boolean):void
		{
			if(!bool)
			{
				canControl = false;
			}
			else
			{
				canControl = true;
				_isNextOutputKouCard = true;
			}
		}
		
		override public function removeTingEff():void
		{
			//_skin.downImg.alpha = 1;
			_isNextOutputTingCard = false;
		}
		
		override public function setCardImg(cardIdx:int):void
		{
			
			showBaidaSimbol = true;
			
			//			if(this.cardIdx == cardIdx)
			//			{
			//				return;
			//			}
			
			trace("bottom cardIdx ::" + cardIdx);
			
			if(CARD_REFERENCE.hasOwnProperty(cardIdx.toString()))
			{
				_skin.valueImg.skin = PREPATH + CARD_REFERENCE[cardIdx.toString()];
			}
			
			super.setCardImg(cardIdx);
		}
	}
}

