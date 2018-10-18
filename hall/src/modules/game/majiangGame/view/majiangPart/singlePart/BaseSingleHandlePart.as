package modules.game.majiangGame.view.majiangPart.singlePart
{
	import laya.ui.Image;
	import laya.ui.View;
	import laya.utils.Tween;
	
	import modules.game.GameModule;
	import modules.game.majiangGame.model.MajiangModel;
	import modules.game.majiangGame.view.card.BaseCard;

	/**玩家手里的牌的基础类*/
	public class BaseSingleHandlePart
	{
		protected var _preThirteenCards:Vector.<BaseCard> = new Vector.<BaseCard>(13);
		protected var _theFourteenCard:BaseCard;
		
		protected var _OrignalX:Number = 0;
		protected var _OrignalY:Number = 0;
		
		protected var _SingleCardW:Number = 0;
		protected var _SingleCardH:Number = 0;
		protected var skin:View;
		
		/**玩家手里的牌的基础类*/
		public function BaseSingleHandlePart(skin:View)
		{
			this.skin = skin;
		}
		
		/**牌竖立*/
		public function up():void
		{
			var i:int;
			var len:int = _preThirteenCards.length;
			
			for(i=0;i<len;i++)
			{
				_preThirteenCards[i].up();
			}
			
			_theFourteenCard.up();
		}
		
		/**牌倒下（明牌）*/
		public function down():void
		{
			var i:int;
			var len:int = _preThirteenCards.length;
			
			for(i=0;i<len;i++)
			{
				_preThirteenCards[i].down();
			}
			
			_theFourteenCard.down();
		}
		
		/**牌扣住*/
		public function back():void
		{
			var i:int;
			var len:int = _preThirteenCards.length;
			
			for(i=0;i<len;i++)
			{
				_preThirteenCards[i].back();
			}
			
			_theFourteenCard.back();
		}
		
		
		/**显示玩家手里的牌除去 碰 杠 （这个cardArr已经排好序了）*/
		public function setPreThirteenCards(cardArr:Array,dir:int,needKou:Boolean=true,needMovePeng:Boolean=true):void
		{
			if(AppConfig.autoPlay)
			{
				var num:int = 0;
				if(model.theFourteenCardVec[model.getChairPosByDir(dir)] != -1)
				{
					num = 1;
				}
				
				if((model.getPengGangNum(model.getChairPosByDir(dir))*3 + cardArr.length+num) > 14)
				{
					//AppConfig.autoPlay = false;
				}
			}
			
			
			var i:int;
			//先来给这些牌处理一下，把扣的几张放到最前面
			var pos:int = model.getChairPosByDir(dir);
			var downArr:Array = model.TingDownCardVec[pos];
			var kouArr:Array = model.kouVec[model.getChairPosByDir(dir)];
			
			var len:int = _preThirteenCards.length;
			var datLen:int = cardArr.length;
			
			trace("cardArr.length::" + cardArr.length);
			
			
			if(UserData.roomtype == 11)
			{
				for(i=0;i<len;i++)
				{
					if(i<len-datLen)
					{
						_preThirteenCards[i].hide();
					}
					else
					{
						if(model.isTingVec[model.getChairPosByDir(dir)] || model.isHu || UserData.isReplay)
						{
							if(model.isHu || UserData.isReplay)
							{
								_preThirteenCards[i].down();
								_preThirteenCards[i].removeTingEff();
							}
							else if(model.isTingVec[model.getChairPosByDir(dir)])//听了
							{
								_preThirteenCards[i].removeTingEff();
								
								if(i < len - datLen + downArr.length)
								{
									_preThirteenCards[i].down();
								}
								else
									if(i < len - datLen + downArr.length + kouArr.length*3)//这里是扣的牌
									{
										if(needKou)
										{
											if(dir != 0)
											{
												_preThirteenCards[i].back();
											}
											else
											{
												if(model.isSelfSitDown || dir != 0)
												{
													_preThirteenCards[i].up();
												}
												else
												{
													_preThirteenCards[i].back();
												}
											}
											
										}
									}
									else
									{
										if(model.isSelfSitDown || dir != 0)
										{
											_preThirteenCards[i].up();
										}
										else
										{
											_preThirteenCards[i].back();
										}
									}
							}
							
						}
						else
						{
							if(model.isSelfSitDown || dir != 0)
							{
								_preThirteenCards[i].up();
							}
							else
							{
								_preThirteenCards[i].back()
							}
							
						}
						
						_preThirteenCards[i].show();
						_preThirteenCards[i].setCardImg(cardArr[i - (len-datLen)]);
						
					}
				}
			}
			else
			{
				for(i=0;i<len;i++)
				{
					if(i<len-datLen)
					{
						_preThirteenCards[i].hide();
					}
					else
					{
						if(model.isHu || UserData.isReplay)//model.isTingVec[model.getChairPosByDir(dir)] || 
						{
							_preThirteenCards[i].down();
							
							
							if(i < len - datLen + kouArr.length*3)//这里是扣的牌
							{
								if(needKou)
								{
									_preThirteenCards[i].back();
								}
							}
						}
						else if(model.isTingVec[model.getChairPosByDir(dir)])//听牌了
						{
							_preThirteenCards[i].removeTingEff();
							
							if(model.getChairPosByDir(dir) == model.selfChairPos)
							{
								
								if(model.isSelfSitDown  || dir != 0)
								{
									_preThirteenCards[i].up();
								}
								else
								{
									_preThirteenCards[i].back();
								}
							}
							else
							{
								_preThirteenCards[i].back();
							}
						}
						else
						{
							if(model.isSelfSitDown  || dir != 0)
							{
								_preThirteenCards[i].up();
							}
							else
							{
								_preThirteenCards[i].back();
							}
							
						}
						
						_preThirteenCards[i].show();
						_preThirteenCards[i].setCardImg(cardArr[i - (len-datLen)]);
						
					}
				}
			}
			
			
			if(needMovePeng)
			{
				if(datLen%3 == 2)
				{
					movePeng(true);
				}
				else
				{
					movePeng(false);
				}
			}
			
			
			setTingImgXAndW(datLen);
			
//			judgeEveryCanTing();
		}
		
		
		/**播放起牌动画*/
		public function playQipaiEff():void
		{
			var i:int;
			var len:int = _preThirteenCards.length;
			
			for(i=0;i<len;i++)
			{
				_preThirteenCards[i].skin.alpha = 0;
				Laya.timer.frameOnce(i,this,onSingleQiEff,[i],false);
			}
			_theFourteenCard.skin.alpha = 0;
			Laya.timer.frameOnce(14,this,onSingleFQiEff,null);
		}
		
		protected function onSingleQiEff(idx:int):void
		{
			Tween.to(_preThirteenCards[idx].skin,{alpha:1},100);
		}
		
		protected function onSingleFQiEff():void
		{
			_theFourteenCard.skin.alpha = 1;
		}
		
		/**设置第十三张牌*/
		public function setTheFourteenCard(cardIdx:int,dir:int):void
		{
			if(cardIdx == -1)
			{
				_theFourteenCard.hide();
				return;
			}
			
			if(model.isTingVec[model.getChairPosByDir(dir)]  || model.isHu || UserData.isReplay)
			{
				if(model.isHu || UserData.isReplay)
				{
					_theFourteenCard.down();
				}
				else
				if(model.isTingVec[model.getChairPosByDir(dir)])//听牌了
				{
					if(dir != 0)//自己
					{
						if(model.isSelfSitDown || dir != 0)
						{
							_theFourteenCard.up();
						}
						else
						{
							_theFourteenCard.back();
						}
						
					}
					else
					{
						_theFourteenCard.back();
						
					}
				}
				else
				{
					_theFourteenCard.down();
				}
				_theFourteenCard.removeTingEff();
			}
			else
			{
				if(model.isSelfSitDown || dir != 0)
				{
					_theFourteenCard.up();
				}
				else
				{
					_theFourteenCard.back();
				}
				
			}
			
			trace("cardIdx ::" + cardIdx);
			
			_theFourteenCard.setCardImg(cardIdx);
			_theFourteenCard.show();
			
//			judgeEveryCanTing();
		}
		
		public function set canControl(bool:Boolean):void
		{
			
		}
		
		public function canControlWitchDark(cards:Array):void
		{
			
		}
		
		public function reset():void
		{
			var i:int;
			
			var len:int = _preThirteenCards.length;
			
			for(i=0;i<len;i++)
			{
				_preThirteenCards[i].reset();
			}
			
			_theFourteenCard.reset();
			
			if(tingImg != null)
			{
				tingImg.visible = false;
			}
			
			movePeng(false);
		}
		
		public function show():void
		{
			
		}
		
		public function hide():void
		{
			
		}
		
		public function get visible():Boolean
		{
			return false;
		}
		
		protected function get model():MajiangModel
		{
			return GameModule.instance.gameContext.model;
		}
		
		/**显示可以听的牌*/
		public function showCanTingCards(cards:Array):void
		{
			//在调用这个之前，不存在可以扣的牌
			trace("showCanTingCards .... jinlaila");
			
			var i:int;
			var j:int;
			
			var datLen:int = cards.length;
			
			
			var newArr:Vector.<BaseCard> = _preThirteenCards.concat(_theFourteenCard);
			var len:int = newArr.length;
			
			trace("newArr.length :: " + len);
			
			for(i=0;i<len;i++)
			{
				trace("newArr[i].visible ::" + newArr[i].visible + "i" +i);
				
				if(newArr[i].visible && newArr[i].state != BaseCard.CARCSTATE_BACK)
				{
					newArr[i].down();
					newArr[i].showTingState(false);
					
					trace("newArr  i:: " + i) + "  down";
				}
			}
			
			
			for(i=0;i<datLen;i++)
			{
				for(j=len-1;j>=0;j--)
				{
					if(newArr[j].visible && newArr[j].cardIdx == cards[i] && newArr[j].state != BaseCard.CARCSTATE_BACK)
					{
						if(judegCanTingOut(newArr[j].cardIdx) == false)
						{
							newArr[j].showTingState(true);
						}
						
					
						
						
						
						break;
					}
				}
			}
		}
		
		public function judegCanTingOut(cardIdx):Boolean
		{
			return false;
		}
		
		/**取消听牌*/
		public function cancelTingpai():void
		{
			//在调用这个之前，不存在可以扣的牌
			trace("showCanTingCards .... jinlaila");
			
			var i:int;
			var j:int;
						
			
			var newArr:Vector.<BaseCard> = _preThirteenCards.concat(_theFourteenCard);
			var len:int = newArr.length;
			
			trace("newArr.length :: " + len);
			
			for(i=0;i<len;i++)
			{
				trace("newArr[i].visible ::" + newArr[i].visible + "i" +i);
				
				if(newArr[i].visible && newArr[i].state != BaseCard.CARCSTATE_BACK)
				{
					newArr[i].up();
					newArr[i].cancleTingState();
					trace("newArr  i:: " + i) + "  down";
				}
			}
			
			
			
		}
		/**显示可以扣的牌*/
		public function showCanKouCards(cards:Array):void
		{
			var i:int;
			var j:int;
			
			var datLen:int = cards.length;
			
			
			var newArr:Vector.<BaseCard> = _preThirteenCards.concat(_theFourteenCard);
			var len:int = newArr.length;
			
			for(i=0;i<len;i++)
			{
				if(newArr[i].visible && newArr[i].state != BaseCard.CARCSTATE_BACK)
				{
					newArr[i].down();
					newArr[i].showKouState(false);
				}
			}
			
			for(i=0;i<datLen;i++)
			{
				for(j=0;j<len;j++)
				{
					if(newArr[j].visible && newArr[j].cardIdx == cards[i])
					{
						trace("显示 showKouState ：：：");
						newArr[j].showKouState(true);
					}
				}
			}
			
		}
		
		/**点击了取消按钮，把扣掉的都翻回来*/
		/**显示可以扣的牌*/
		public function showCancelKouCards():void
		{
			var i:int;
			var j:int;
			
			
			var newArr:Vector.<BaseCard> = _preThirteenCards.concat(_theFourteenCard);
			var len:int = newArr.length;
			
			for(i=0;i<len;i++)
			{
				if(newArr[i].visible)
				{
					newArr[i].down();
					newArr[i].showKouState(false);
				}
			}
		}
		
		//点击了自己的一张可以扣的牌
		public function showTempKouCards(cardIdx:int):void
		{
			var i:int;
			
			var newArr:Vector.<BaseCard> = _preThirteenCards.concat(_theFourteenCard);
			var len:int = newArr.length;
			
			var curNum:int = 0;
			var maxNum:int = 3;
			
			for(i=0;i<len;i++)
			{
				if(newArr[i].visible && newArr[i].cardIdx == cardIdx)
				{
					if(curNum < maxNum)
					{
						newArr[i].back();
					}
					newArr[i].canControl = false;
					
					curNum ++;
				}
			}
		}
		
		protected var tingImg:Image;
		
		protected var needTingEff:Boolean = false;
		
		/**显示玩家听了的状态*/
		public function showTinged():void
		{
			if(tingImg != null)
			{
				if(needTingEff)
				{
					tingImg.visible = true;
				}
			}

		}
		
		public function setTingImgXAndW(cardNum:int):void
		{
			
		}
		
		public function showCanGangCards(cards:Array):void
		{
			var i:int;
			var len:int;
			
			var newCards:Array = [];
			
			for(i=0;i<cards.length;i++)
			{
				trace("showCanGangCards cards.card::" + cards[i].card);
				
				newCards.push(cards[i].card);
			}
			
			var newArr:Vector.<BaseCard> = _preThirteenCards.concat(_theFourteenCard);
			len = newArr.length;
			
			for(i=0;i<len;i++)
			{
				if(newArr[i].visible)
				{
					if(newCards.indexOf(newArr[i].cardIdx) != -1)
					{
						newArr[i].canControlWitchDark = true;
					}
					else
					{
						newArr[i].canControlWitchDark = false;
					}
				}
				
				
			}
		}
		
		public function showHuAni(pos:int):void
		{
			_theFourteenCard.showHuAni(model.getChairDirByPos(pos));
		}
		
		public function movePeng(bool:Boolean):void
		{
			
		}
		
		/**判断每张牌是不是可以听了*/
		public function judgeEveryCanTing():void
		{
			
		}
		
		
		/**显示预出牌效果*/
		public function showPreDiscardEff(cardIdx:int):void
		{
			var i:int;
			var newArr:Vector.<BaseCard> = _preThirteenCards.concat(_theFourteenCard);
			var len:int = newArr.length;
			
			for(i=0;i<len;i++)
			{
				if(newArr[i].visible && newArr[i].cardIdx == cardIdx && newArr[i].skin.y == 0)
				{
					QuickUtils.addRed(newArr[i].skin,true);
				}
				else
				{
					QuickUtils.addRed(newArr[i].skin,false);
				}
			}
		}
		
		/**赢藏选牌效果*/
		public function hidePreDiscardEff():void
		{
			var i:int;
			var newArr:Vector.<BaseCard> = _preThirteenCards.concat(_theFourteenCard);
			var len:int = newArr.length;
			
			for(i=0;i<len;i++)
			{
				QuickUtils.addRed(newArr[i].skin,false);
			}
		}
	}
}