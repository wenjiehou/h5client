package modules.game.majiangGame.view.majiangPart
{
	
	import modules.game.GameModule;
	import modules.game.majiangGame.controller.MajiangGameController;
	import modules.game.majiangGame.model.MajiangModel;
	import modules.game.majiangGame.view.card.handCard.BottomHandleCard;
	import modules.game.majiangGame.view.majiangPart.singlePart.BaseSingleOutputPart;
	import modules.game.majiangGame.view.majiangPart.singlePart.outputPart.BottomSingleOutputPart;
	import modules.game.majiangGame.view.majiangPart.singlePart.outputPart.LeftSingleOutputPart;
	import modules.game.majiangGame.view.majiangPart.singlePart.outputPart.RightSingleOutputPart;
	import modules.game.majiangGame.view.majiangPart.singlePart.outputPart.TopSingleOutputPart;
	
	import ui.mainGame.majiangParts.BottomOutputPartUI;
	import ui.mainGame.majiangParts.LeftOutputPartUI;
	import ui.mainGame.majiangParts.OutputTopPartUI;
	import ui.mainGame.majiangParts.RightOutputPartUI;

	/**玩家出出去的牌*/
	public class OutputPart
	{
		public static const PERDIR_CARD_NUM:uint = 23;
		
		protected var _bottom:BottomSingleOutputPart;
		protected var _right:RightSingleOutputPart;
		protected var _top:TopSingleOutputPart;
		protected var _left:LeftSingleOutputPart;
		
		protected var _PosChairVec:Vector.<BaseSingleOutputPart> = new Vector.<BaseSingleOutputPart>();
		
		protected var _bottomTemp:BottomHandleCard;
		protected var _rightTemp:BottomHandleCard;
		protected var _topTemp:BottomHandleCard;
		protected var _leftTemp:BottomHandleCard;
		
		
		protected var _posChairTemVec:Vector.<BottomHandleCard> = new Vector.<BottomHandleCard>();
		
		public function OutputPart(bottomSkin:BottomOutputPartUI,rightSkin:RightOutputPartUI,
								   topSkin:OutputTopPartUI,leftSkin:LeftOutputPartUI,tempCards:Array)
		{
			_bottom = new BottomSingleOutputPart(bottomSkin);
			_right = new RightSingleOutputPart(rightSkin);
			_top = new TopSingleOutputPart(topSkin);
			_left = new LeftSingleOutputPart(leftSkin);
			
			_bottomTemp = new BottomHandleCard(tempCards[0],false,false);
			_bottomTemp.canControl = false;
			
			_rightTemp = new BottomHandleCard(tempCards[1],false,false);
			_rightTemp.canControl = false;
			
			_topTemp = new BottomHandleCard(tempCards[2],false,false);
			_topTemp.canControl = false;
			
			_leftTemp = new BottomHandleCard(tempCards[3],false,false);
			_leftTemp.canControl = false;
			
			allReset();
			
		}
		
		protected function allReset():void
		{
			_bottom.reset();
			_right.reset();
			_top.reset();
			_left.reset();
			
			_bottomTemp.reset();
			_rightTemp.reset();
			_topTemp.reset();
			_leftTemp.reset();
			
			
		}
		/**设置椅子数量*/
		public function setChairNum(num:int=3):void
		{
			_PosChairVec.length = 0;
			_posChairTemVec.length = 0;
			switch(num)
			{
				case 1:_PosChairVec.push(_bottom);
					_posChairTemVec.push(_bottomTemp);
					break;//一个人自己玩 啊哈哈
				case 2:_PosChairVec.push(_bottom,_top);
					_posChairTemVec.push(_bottomTemp,_topTemp);
					break; //两个人玩
				case 3:_PosChairVec.push(_bottom,_right,_left);
					_posChairTemVec.push(_bottomTemp,_rightTemp,_leftTemp);
					break;
				case 4:_PosChairVec.push(_bottom,_right,_top,_left);
					_posChairTemVec.push(_bottomTemp,_rightTemp,_topTemp,_leftTemp);
					break;
				default:_PosChairVec.push(_bottom,_right,_left);break;
			}
		}
		
		/**重置*/
		public function reset():void
		{
			var i:int;
			var len:int = _PosChairVec.length;
			for(i=0;i<len;i++)
			{
				_PosChairVec[i].reset();
				_posChairTemVec[i].reset();
			}
		}
		
		/**
		 * isNeedShowCard是否在显示这张牌的时候，显示当前桌面出的牌时它
		 * */
		public function showOneCard(cardIdx:int,direction:int,idx:int,isNeedShowCard:Boolean = true,needShowEff:Boolean=true):void
		{
			
			var i:int;
			var len:int = _PosChairVec.length;
			
			for(i=0;i<len;i++)
			{
				if(i == direction)
				{
					if(needShowEff && false)
					{
						_posChairTemVec[i].show();
						_posChairTemVec[i].setCardImg(cardIdx);
						_posChairTemVec[i].skin["tempImg"].visible = true;
						_posChairTemVec[i].skin["buhua"].visible = false;

						//Laya.timer.frameOnce(24,this,onHideTemp,[i],false);
					}
					
					
					_PosChairVec[i].showOneCard(cardIdx,idx,model.getChairPosByDir(i),needShowEff);
					
					if(isNeedShowCard)
					{
						_PosChairVec[i].showCurSimbol(isNeedShowCard);
					}
				}
				else
				{
					if(_PosChairVec[i].isCurOutput)
					{
						_PosChairVec[i].showCurSimbol(false)
					}
				}
			}
		}
		
		public function hideTemp():void
		{
			var i:int,len:int=_posChairTemVec.length;
			for(i=0;i<len;i++)
			{
				_posChairTemVec[i].hide();
			}
		}
		
//		protected function onHideTemp(dir:int):void
//		{
//			_posChairTemVec[dir].hide();
//		}
		
		protected function get controller():MajiangGameController
		{
			return GameModule.instance.gameContext.controller;
		}

		
		/**显示出了一张牌*/
		public function showOneCardByPos(pos:int,cardIdx:int,isNeedShowCard:Boolean = true,needShowEff:Boolean=true):void
		{
			var direction:int = model.getChairDirByPos(pos);
			var idx:int = _PosChairVec[direction].curIdx+1;
			
			
			showOneCard(cardIdx,direction,idx,isNeedShowCard,needShowEff);
		}
		
		/**显示一组牌*/
		public function showCardsByPos(pos:int,cards:Array):void
		{
			var i:int,len:int=cards.length;
			for(i=0;i<len;i++)
			{
				showOneCardByPos(pos,cards[i],false,false);
			}
		}
		
		public function toPre():void
		{
			var i:int;
			
			var len:int = _PosChairVec.length;
			
			for(i=0;i<len;i++)
			{
				if(_PosChairVec[i].isCurOutput)
				{
					_PosChairVec[i].toPre();
				}
			}
		}
		
		/**一般不要用这个方法*/
		public function showCurSimbol(bool:Boolean):void
		{
			var i:int;
			var len:int = _PosChairVec.length;
			
			for(i=0;i<len;i++)
			{
				if(_PosChairVec[i].isCurOutput)
				{
					_PosChairVec[i].showCurSimbol(bool)
				}
			}
		}
		
		public function showStartImg():void
		{
			var i:int;
			var len:int = _PosChairVec.length;
			
			for(i=0;i<len;i++)
			{
				_PosChairVec[i].showStartImg(true);
			}
		}
		
		/**设置摸个方向的玩家摸的最后一张牌是桌面上最后打出的牌*/
		public function showCurSimbolByPos(pos:int):void
		{
			var dir:int = model.getChairDirByPos(pos);
			if(_PosChairVec[dir])
			{
				_PosChairVec[dir].showCurSimbol(true);
			}
			
			
		}
		
		/**通知当前打的牌被碰 或者 杠掉啦*/
		public function noticeHasPengGang(tPos:int=-1):void
		{
			var have:Boolean = false;
			var i:int;
			
			var len:int = _PosChairVec.length;
			
			for(i=0;i<len;i++)
			{
				if(_PosChairVec[i].isCurOutput)
				{
					model.pengGangStepObj[model.replayCurStep]= i;
					
					have = true;
					
					if(_PosChairVec[i])
					{
						model.cutOutput(model.getChairPosByDir(i),_PosChairVec[i].curCardIdx);
						
						_PosChairVec[i].curCardHasPengGang();
					}
					break;
				}
			}
			
			if(have == false)
			{
				if(UserData.isReplay)
				{
					if(model.pengGangStepObj.hasOwnProperty(model.replayCurStep))
					{
						var pos:int = model.getChairPosByDir(model.pengGangStepObj[model.replayCurStep]);
						
						model.cutOutput(pos,_PosChairVec[model.pengGangStepObj[model.replayCurStep]].curCardIdx);
						_PosChairVec[model.pengGangStepObj[model.replayCurStep]].curCardHasPengGang();
					}
				}
				else
				{
					if(tPos != -1)
					{
						var dir:int = model.getChairDirByPos(tPos);
						model.pengGangStepObj[model.replayCurStep]= dir;
						
						if(_PosChairVec[dir])
						{
							model.cutOutput(tPos,_PosChairVec[dir].curCardIdx);
							
							_PosChairVec[dir].curCardHasPengGang();
						}
						
					}
				}
				
			}
		}
		
		/**通知当前打的牌被碰 或者 杠掉啦*/
		public function noticeHasPengGangByPos(pos:int):void
		{
			model.cutOutput(pos,_PosChairVec[model.getChairDirByPos(pos)].curCardIdx);
			_PosChairVec[model.getChairDirByPos(pos)].curCardHasPengGang();
			
			
		}
		
		/**通知当前打的牌被碰 或者 杠掉啦*/
		public function noticeHasTingByPos(pos:int):void
		{
			_PosChairVec[model.getChairDirByPos(pos)].noticeHasTing();
		} 
		
		public function getCurOutputCardIdx():int
		{
			var i:int;
			
			var len:int = _PosChairVec.length;
			
			for(i=0;i<len;i++)
			{
				if(_PosChairVec[i].isCurOutput)
				{
					return _PosChairVec[i].curCardIdx;
				}
			}
			return 0;
		}
		
		public function getCurOutIdx():int
		{
			var i:int;
			
			var len:int = _PosChairVec.length;
			
			for(i=0;i<len;i++)
			{
				if(_PosChairVec[i].isCurOutput)
				{
					return model.getChairPosByDir(i);
				}
			}
			return 0;
		}
		
		
		protected function get model():MajiangModel
		{
			return GameModule.instance.gameContext.model;
		}
		
		public function showDianPaoHuAni():void
		{
			var i:int;
			var len:int = _PosChairVec.length;
			
			for(i=0;i<len;i++)
			{
				if(_PosChairVec[i].isCurOutput)
				{
					_PosChairVec[i].showHuAni(i);
				}
			}
		}
		
		/**显示预出牌效果*/
		public function showPreDiscardEff(cardIdx:int):void
		{
			var i:int;
			for(i=0;i<model.chairNum;i++)
			{
				_PosChairVec[i].showPreDiscardEff(cardIdx);
			}
		}
		
		/**赢藏选牌效果*/
		public function hidePreDiscardEff():void
		{
			var i:int;
			for(i=0;i<model.chairNum;i++)
			{
				_PosChairVec[i].hidePreDiscardEff();
			}
		}
	}
}