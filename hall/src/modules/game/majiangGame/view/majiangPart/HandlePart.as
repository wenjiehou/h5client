package modules.game.majiangGame.view.majiangPart
{
	import modules.game.GameModule;
	import modules.game.majiangGame.model.MajiangModel;
	import modules.game.majiangGame.view.majiangPart.singlePart.BaseSingleHandlePart;
	import modules.game.majiangGame.view.majiangPart.singlePart.handlePart.BottomSingleHandlePart;
	import modules.game.majiangGame.view.majiangPart.singlePart.handlePart.LeftSingleHandlePart;
	import modules.game.majiangGame.view.majiangPart.singlePart.handlePart.RightSingleHandlePart;
	import modules.game.majiangGame.view.majiangPart.singlePart.handlePart.TopSingleHandlePart;
	
	import ui.mainGame.majiangParts.BottomHandlePartUI;
	import ui.mainGame.majiangParts.LeftHandlePartUI;
	import ui.mainGame.majiangParts.RightHandlePartUI;
	import ui.mainGame.majiangParts.TopHandlePartUI;

	/**玩家手里的牌*/
	public class HandlePart
	{
		protected var _bottom:BottomSingleHandlePart;
		protected var _right:RightSingleHandlePart;
		protected var _top:TopSingleHandlePart;
		protected var _left:LeftSingleHandlePart;
		
		protected var _PosChairVec:Vector.<BaseSingleHandlePart> = new Vector.<BaseSingleHandlePart>();
		
		public function HandlePart(bottom:BottomHandlePartUI,right:RightHandlePartUI,
								   top:TopHandlePartUI,left:LeftHandlePartUI)
		{
			_bottom = new BottomSingleHandlePart(bottom);
			_right = new RightSingleHandlePart(right);
			_top = new TopSingleHandlePart(top);
			_left = new LeftSingleHandlePart(left);
			
			allReset();
		}
		
		protected function allReset():void
		{
			_bottom.reset();
			_right.reset();
			_top.reset();
			_left.reset();
		}
		
		/**设置椅子数量*/
		public function setChairNum(num:int=3):void
		{
			_PosChairVec.length = 0;
			switch(num)
			{
				case 1:_PosChairVec.push(_bottom);break;//一个人自己玩 啊哈哈
				case 2:_PosChairVec.push(_bottom,_top);break; //两个人玩
				case 3:_PosChairVec.push(_bottom,_right,_left);break;
				case 4:_PosChairVec.push(_bottom,_right,_top,_left);break;
				default:_PosChairVec.push(_bottom,_right,_left);break;
			}
			
			reset();
		}
		
		/**重置*/
		public function reset():void
		{
			var i:int;
			var len:int = _PosChairVec.length;
			for(i=0;i<len;i++)
			{
				_PosChairVec[i].reset();
			}
			
			canControl(model.selfChairPos,false);
		}
		
		/**更新前十三张牌*/
		public function updateAllCards(vec:Vector.<Array>):void
		{
			var i:int;
			var len:int = vec.length;
//			if(model.getPlayerPosByUid(parseInt(UserData.uid))==-1){return}
			for(i=0;i<len;i++)
			{
				var dir:int = model.getChairDirByPos(i);
				
				if(dir != 0 && UserData.isReplay==false)//不是自己
				{
					_PosChairVec[dir].playQipaiEff();
				}
				
				_PosChairVec[dir].setPreThirteenCards(vec[i],dir);

			}
		}
		
		/**更新一个方向上的前十四张牌*/
		public function updateOnePosAllCards(pos:int,cards:Array):void
		{
			trace("pos ::" + pos);
			var dir:int = model.getChairDirByPos(pos);
			trace("dir ::"+ dir);
			trace("_PosChairVec[dir] ::"+ _PosChairVec[dir]);
			_PosChairVec[dir].setPreThirteenCards(cards,dir);
		}
		
		/**摸牌了调用 更新第十四张牌*/
		public function updateTheFourteenCard(pos:int,cardIdx:int):void
		{
			var dir:int = model.getChairDirByPos(pos);
			_PosChairVec[dir].setTheFourteenCard(cardIdx,dir);
			
		}
		
		/**摸牌了调用 更新第十四张牌*/
		public function updateTheFourteenCards(vec:Vector.<int>):void
		{
			var i:int,len:int=vec.length;
			for(i=0;i<len;i++)
			{
				updateTheFourteenCard(i,vec[i]);
			}
			
		}
		
		protected function get model():MajiangModel
		{
			return GameModule.instance.gameContext.model;
		}
		
		/**顯示自己可以扣的牌*/
		public function showCanKouCards(cards:Array):void
		{
			_PosChairVec[0].showCanKouCards(cards);
		}
		
		/***/
		public function showCancelKouCards():void
		{
			_PosChairVec[0].showCancelKouCards();
		}
		
		/**临时扣的牌的显示*/
		public function showTempKouCards(cardIdx:int):void
		{
			_PosChairVec[0].showTempKouCards(cardIdx);
		}
		
		/**显示可以胡的牌，供选择*/
		public function showCanTingCards(cards:Array):void
		{
			model.koupaiwancheng = true;
			
			_PosChairVec[0].showCanTingCards(cards);
			
			
		}
		
		/**取消听牌*/
		public function cancelTingpai():void
		{
			model.koupaiwancheng = false;
			
			_PosChairVec[0].cancelTingpai();
			GameModule.instance.gameContext.view.majiangPage.hupaiTipPart.cancelTingpai(model.selfChairPos);
			_PosChairVec[0].canControl = true;
		}
		
		/**设置牌是否可以操作,这个是使自己的所有牌都可以操作或者不可以操作*/
		public function canControl(pos:int,bool:Boolean,cards:Array=null):void
		{
			_PosChairVec[model.getChairDirByPos(pos)].canControl = bool;
			if(bool && pos == model.selfChairPos && model.isSelfSitDown && cards)
			{
				canControlWitchDark(pos,bool,cards);
			}
		}
		
		public function canControlWitchDark(pos:int,bool:Boolean,cards:Array=null):void
		{
			_PosChairVec[model.getChairDirByPos(pos)].canControlWitchDark(cards);
		}
		
		public function showTinged(pos:int):void
		{
			var dir:int = model.getChairDirByPos(pos);
			_PosChairVec[dir].showTinged();
			
		}
		
		/**显示自己可以杠的牌*/
		public function showCanGangCards(cards:Array):void
		{
			_PosChairVec[0].showCanGangCards(cards);
		}
		
		/**显示自己胡牌的闪电*/
		public function showZimoShandian(pos:int):void
		{
			var dir:int = model.getChairDirByPos(pos);
			
			_PosChairVec[dir].showHuAni(pos);
		}
		
		/**移动自己手里的牌的位置*/
		public function movePeng(pos:int,bool:Boolean):void
		{
			var dir:int = model.getChairDirByPos(pos);
			_PosChairVec[dir].movePeng(bool);
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