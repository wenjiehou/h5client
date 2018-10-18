package modules.game.majiangGame.view.majiangPart.singlePart
{
	import laya.maths.Point;
	import laya.ui.Image;
	import laya.ui.View;
	import laya.utils.Ease;
	import laya.utils.Tween;
	
	import modules.game.GameModule;
	import modules.game.majiangGame.model.MajiangModel;
	import modules.game.majiangGame.view.card.outputCard.BaseOutputCard;

	public class BaseSingleOutputPart
	{
		protected var _cardsVec:Vector.<BaseOutputCard> = new Vector.<BaseOutputCard>(27);
		
		protected var _curIdx:int = -1;
		
		protected var _isCurOutput:Boolean = false;

		/**当前出到第几张牌*/
		public function get curIdx():int
		{
			return _curIdx;
		}
		
		public function set curIdx(idx:int):void
		{
			_curIdx = idx;
		}

		/**是否出牌出到当前*/
		public function get isCurOutput():Boolean
		{
			return _isCurOutput;
		}
		
		public function toPre():void
		{
			_cardsVec[_curIdx].hide();
			
			_curIdx -= 1;
			
			showCurSimbol(true);
			
			
		}

		
		public function BaseSingleOutputPart()
		{
			
		}
		
		public function show():void
		{
			
		}
		
		public function hide():void
		{
			
		}
		
		/**显示一张牌*/
		public function showOneCard(cardIdx:int,idx:int,pos:int,needShowEff:Boolean=true):void
		{
			if(idx < _cardsVec.length)
			{
				_cardsVec[idx].setCardImg(cardIdx);
				_cardsVec[idx].down();
				
				_curIdx = idx;
				
				
				if(needShowEff)
				{
					var dir:int = model.getChairDirByPos(pos);
					
					var fromX:int;
					var fromY:int;
					
					var view:View = _cardsVec[idx].skin as View;
					var pt:Point;
					switch(dir)
					{
						case 0:
							if(UserData.isReplay)
							{
								fromX = 535;
								fromY = 181;
							}
							else
							{
								if( model.selfOutputCardPos==null)//断线重连会过来的
								{
									fromX = 535;
									fromY = 181;
								}
								else
								{
									if(model.selfOutputCardPos.x != -1)
									{
										pt = QuickUtils.globalToLocal(view,model.selfOutputCardPos,true);
										fromX = pt.x
										fromY = pt.y;
									}
									else
									{
										fromX = 535;
										fromY = 181;
									}	
								}
							}
							break;
						case 1:
							fromX = 160;
							fromY = -67;
							break;
						case 2:
							if(model.chairNum == 3)//left
							{
								fromX = -53;
								fromY = 276;
							}
							else//top
							{
								
							}
							break;
						case 3://top
							break;
					}
					
					//Tween.from(_cardsVec[idx].skin,{x:fromX,y:fromY,alpha:0},200,Ease.cubicOut);
					//Laya.timer.once(60,this,showCard);
					_cardsVec[idx].skin.alpha = 1;
					Tween.from(_cardsVec[idx].skin,{alpha:0},700,Ease.cubicOut);
					
					Laya.timer.frameOnce(2,this,showCard);
				}
				else
				{
					if(_cardsVec[_curIdx])
					{
						_cardsVec[_curIdx].show();
					}
				}
				model.selfOutputCardPos.x = -1;
				model.selfOutputCardPos.y = -1;
			}
		}
		
		protected function showCard():void
		{
			if(_cardsVec[_curIdx])
			{
				_cardsVec[_curIdx].show();
			}
		}
		
		/***/
		protected function get model():MajiangModel
		{
			return GameModule.instance.gameContext.model;
		}
		
		
		/**重置*/
		public function reset():void
		{
			_curIdx = -1;
			var i:int;
			var len:int = _cardsVec.length;
			
			for(i=0;i<len;i++)
			{
				_cardsVec[i].hide();
				_cardsVec[i].skin.alpha = 1;
				_cardsVec[i].makeTingState(false);
			}
			
			showCurSimbol(false);
			
//			startImg.visible = false;
		} 
		
		
		public function showCurSimbol(bool:Boolean):void
		{
			var i:int;
			var len:int = _cardsVec.length;
			
			if(bool)
			{
				for(i=0;i<len;i++)
				{
					if(i == _curIdx)
					{
						_cardsVec[i].showCurOutputSimbol(bool);
					}
					else
					{
						_cardsVec[i].showCurOutputSimbol(!bool);
					}
				}
			}
			else
			{
				for(i=0;i<len;i++)
				{
					_cardsVec[i].showCurOutputSimbol(bool);//其实这个也不大影响效率
				}
			}
			
			_isCurOutput = bool;
		}
		
		/**当前牌被碰 杠了调用*/
		public function curCardHasPengGang():void
		{
			//把这张牌去掉
			_cardsVec[_curIdx].hide();
			_cardsVec[_curIdx].makeTingState(false);
			_curIdx -= 1;
			
			//_cardsVec[_curIdx].hasPengGang(true);
		}
		
		/***/
		public function noticeHasTing():void
		{
			_cardsVec[_curIdx].makeTingState(true);
		}
		
		public function get curCardIdx():int
		{
			if(_curIdx == -1)
			{
				return 0;
			}
			return _cardsVec[_curIdx].cardIdx;
		}
		
//		protected var startImg:Image;
		
		/**游戏开始，显示底部的框*/
		public function showStartImg(bool:Boolean = true):void
		{
			//startImg.visible = bool;
			
//			startImg.visible = false;
		}
		
		public function showHuAni(dir:int):void
		{
			_cardsVec[_curIdx].showHuAni(dir,true);
		}
		
		/**显示预出牌效果*/
		public function showPreDiscardEff(cardIdx:int):void
		{
			var i:int,len:int=_cardsVec.length;
			for(i=0;i<len;i++)
			{
				if(_cardsVec[i].skin.visible && _cardsVec[i].cardIdx == cardIdx && i <= _curIdx)
				{
					QuickUtils.addRed(_cardsVec[i].skin,true);
				}
				else
				{
					QuickUtils.addRed(_cardsVec[i].skin,false);
				}
			}
		}
		
		/**赢藏选牌效果*/
		public function hidePreDiscardEff():void
		{
			var i:int,len:int=_cardsVec.length;
			for(i=0;i<len;i++)
			{
				QuickUtils.addRed(_cardsVec[i].skin,false);
			}
		}
	}
}