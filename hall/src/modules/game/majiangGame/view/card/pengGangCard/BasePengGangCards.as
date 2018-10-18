package modules.game.majiangGame.view.card.pengGangCard
{
	import modules.game.GameModule;
	import modules.game.majiangGame.model.MajiangModel;
	import modules.game.majiangGame.view.card.BaseCard;

	/**碰 杠的基类*/
	public class BasePengGangCards
	{
		public var cardIdx:int = 0;
		public var fromPos:int = -1;
		public var fromDir:int = -1;
		
		/**-1表示没有 0吃 1碰 2暗杠 3明杠*/
		public var type:int = -1;
		
		protected var _cardsVec:Vector.<BaseCard> = new Vector.<BaseCard>(4);
		
		public function BasePengGangCards()
		{
			
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
		
		public function setCardImg(cardIdx:int):void
		{
			this.cardIdx = cardIdx;
			var i:int;
			var len:int = _cardsVec.length;
			
			for(i=0;i<len;i++)
			{
				_cardsVec[i].setCardImg(cardIdx);
			}
		}
		
		public function chi(arr:Array,chiCard:int,providerPos:int=0):void
		{
			type = 0;
			trace("chi arr::" + arr);
			
			trace("arr[0]::" + arr[0]);
			trace("arr[1]::" + arr[1]);
			trace("arr[2]::" + arr[2]);
			
			_cardsVec[0].show();
			_cardsVec[1].show();
			_cardsVec[2].show();
			_cardsVec[3].hide();
			
			_cardsVec[0].down();
			_cardsVec[1].down();
			_cardsVec[2].down();
			
			_cardsVec[0].setCardImg(arr[0]);
			_cardsVec[1].setCardImg(arr[1]);
			
			_cardsVec[2].setCardImg(arr[2]);
			
			var index:int = arr.indexOf(chiCard);
			_cardsVec[index].chiMark.visible = true;
			fromPos = providerPos;
			fromDir = 3;
			show();
			
		}
		
		public function updateChengbaoColor(chairPos:int,fromPos:int):void
		{
			updateAnGangState(chairPos);
			if(fromPos != this.fromPos || fromDir == -1 || fromDir == 0)
			{
				return;
			}
			var chiSkin:String = "";
			var pengSkin:String = "";
			
			var chengbaoNum:int = model.getChengbaoNumRefNum(chairPos,fromPos);
			
			if(chengbaoNum < 2)
			{
				chiSkin =  "gametable/chengbao/pengpaijiantou3_lan.png";
				pengSkin = "gametable/chengbao/pengpaijiantou" + fromDir + "_lan.png";
			}
			else if(chengbaoNum < 3)
			{
				chiSkin = "gametable/chengbao/pengpaijiantou3_huang.png";
				pengSkin = "gametable/chengbao/pengpaijiantou" + fromDir + "_huang.png";
			}
			else
			{
				chiSkin = "gametable/chengbao/pengpaijiantou3_hong.png";
				pengSkin = "gametable/chengbao/pengpaijiantou" + fromDir + "_hong.png";
			}
			
			var i:int,len:int=_cardsVec.length;
			for(i=0;i<len;i++)
			{
				_cardsVec[i].chiMark.skin = chiSkin;
				_cardsVec[i].pengMark.skin = pengSkin;
			}
		}
		
		/**使某张杠的牌立即变为承包关系*/
		public function setChengbaoGang():void
		{
			if(fromDir == 0)
			{
				return;
			}
			var chiSkin:String = "";
			var pengSkin:String = "";
			chiSkin = "gametable/chengbao/pengpaijiantou3_hong.png";
			pengSkin = "gametable/chengbao/pengpaijiantou" + fromDir + "_hong.png";
			
			var i:int,len:int=_cardsVec.length;
			for(i=0;i<len;i++)
			{
				_cardsVec[i].chiMark.skin = chiSkin;
				_cardsVec[i].pengMark.skin = pengSkin;
			}
		}
		
		public function peng(cardIdx:int=0,fromdir:int=-1,providerPos:int=0):void
		{
			type = 1;
			_cardsVec[0].show();
			_cardsVec[1].show();
			_cardsVec[2].show();
			_cardsVec[3].hide();
			
			_cardsVec[0].down();
			_cardsVec[1].down();
			_cardsVec[2].down();
			
			setCardImg(cardIdx);
			if(fromdir != -1 || fromdir != 0)
			{
				_cardsVec[0].pengMark.visible = true;
				fromPos = providerPos;
				this.fromDir = fromdir;
			}
			show();
		}
		
		public function gang(cardIdx:int=0,isMingGang:Boolean=true,fromdir:int=-1,providerPos:int=0):void
		{
			if(isMingGang)
			{
				type = 3;
			}
			else
			{
				type = 2;
			}
			
			var i:int,len:int=_cardsVec.length;
			for(i=0;i<len;i++)
			{
				_cardsVec[i].pengMark.visible=false;
				_cardsVec[i].show();
				
				if(i<3)
				{
					if(isMingGang)
					{
						_cardsVec[i].down();
						if(i == 0)
						{
							if(fromdir != -1 || fromdir != 0)
							{
								_cardsVec[i].pengMark.visible = true;
								fromPos = providerPos;
								this.fromDir = fromdir;
							}
						}
						
					}
					else
					{
						_cardsVec[i].back();
					}
				}
				else
				{
					_cardsVec[i].down();
				}
			}
			setCardImg(cardIdx);
			show();
		}
		
		/**更新杠的状态，在门清的情况下要全部暗下去*/
		private function updateAnGangState(pos:int):void
		{
			if(type == 2)
			{
				var i:int,len:int=_cardsVec.length;
				if(model.judgeMenqing(pos) == true)
				{
					if(model.isSelfSitDown == false)//旁观的人看不到
					{
						_cardsVec[3].back();
					}
					else
					{
						if(pos == model.selfChairPos)//自己坐下始终可以看到
						{
							_cardsVec[3].down();
						}
						else
						{
							_cardsVec[3].back();
						}
					}
				}
				else
				{
					_cardsVec[3].down();
				}
			}
		}
		
		
		
		public function showHuAni(dir:int):void
		{
			_cardsVec[3].showHuAni(dir,false,true);
		}
		
		public function reset():void
		{
			var i:int,len:int=_cardsVec.length;
			for(i=0;i<len;i++)
			{
				_cardsVec[i].reset();
				_cardsVec[i].down();
			}
			hide();
			cardIdx = 0;
			fromPos = -1;
			type = -1;
		}
		public function get model():MajiangModel
		{
			return GameModule.instance.gameContext.model;
		}
		
		/**显示预选牌效果*/
		public function showPreDiscardEff(cardIdx:int):void
		{
			var i:int,len:int=_cardsVec.length;
			for(i=0;i<len;i++)
			{
				if(_cardsVec[i].skin.visible && _cardsVec[i].cardIdx == cardIdx)
				{
					QuickUtils.addRed(_cardsVec[i].skin.downImg,true);
					QuickUtils.addRed(_cardsVec[i].skin.valueImg,true);
				}
				else
				{
					QuickUtils.addRed(_cardsVec[i].skin.downImg,false);
					QuickUtils.addRed(_cardsVec[i].skin.valueImg,false);
				}
			}
			
			
		}
		
		/**隐藏预选牌效果*/
		public function hidePreDiscardEff():void
		{
			var i:int,len:int=_cardsVec.length;
			for(i=0;i<len;i++)
			{
				QuickUtils.addRed(_cardsVec[i].skin.downImg,false);
				QuickUtils.addRed(_cardsVec[i].skin.valueImg,false);
			}
		}
	}
}