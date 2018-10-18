package modules.nnGame.inerGame.view.pockerPart
{
	import modules.nnGame.NnGameModule;
	import modules.nnGame.inerGame.model.NnModel;
	import modules.nnGame.inerGame.view.pockerPart.singlePart.handlePart.BaseSingleHandlePart;
	import modules.nnGame.inerGame.view.pockerPart.singlePart.handlePart.BottomSingleHandlePart;
	import modules.nnGame.inerGame.view.pockerPart.singlePart.handlePart.OtherSingleHandlePart;
	
	import ui.niuniuGame.niuniuPart.handlePart.OtherHandlePartUI;
	import ui.niuniuGame.niuniuPart.handlePart.OwnerHandlePartUI;
	

	public class HandlePart
	{
		protected var _dir0:BottomSingleHandlePart;
		protected var _dir1:OtherSingleHandlePart;
		protected var _dir2:OtherSingleHandlePart;
		protected var _dir3:OtherSingleHandlePart;
		protected var _dir4:OtherSingleHandlePart;
		protected var _dir5:OtherSingleHandlePart;
		protected var _dir6:OtherSingleHandlePart;
		protected var _dir7:OtherSingleHandlePart;
		protected var _dir8:OtherSingleHandlePart;
		protected var _dir9:OtherSingleHandlePart;
		
		protected var _PosChairVec:Vector.<BaseSingleHandlePart> = new Vector.<BaseSingleHandlePart>();
		
		public function HandlePart(p0:OwnerHandlePartUI,p1:OtherHandlePartUI,p2:OtherHandlePartUI,p3:OtherHandlePartUI,p4:OtherHandlePartUI,p5:OtherHandlePartUI,
								   p6:OtherHandlePartUI,p7:OtherHandlePartUI,p8:OtherHandlePartUI,p9:OtherHandlePartUI)
		{ 
			_dir0 = new BottomSingleHandlePart(p0);
			_dir1 = new OtherSingleHandlePart(p1,1);
			_dir2 = new OtherSingleHandlePart(p2,2);
			_dir3 = new OtherSingleHandlePart(p3,3);
			_dir4 = new OtherSingleHandlePart(p4,4);
			_dir5 = new OtherSingleHandlePart(p5,5);
			_dir6 = new OtherSingleHandlePart(p6,6);
			_dir7 = new OtherSingleHandlePart(p7,7);
			_dir8 = new OtherSingleHandlePart(p8,8);
			_dir9 = new OtherSingleHandlePart(p9,9);
			
			allReset();
		
		}
		
		public function allReset():void
		{
			_dir0.reset();
			_dir1.reset();
			_dir2.reset();
			_dir3.reset();
			_dir4.reset();
			_dir5.reset();
			_dir6.reset();
			_dir7.reset();
			_dir8.reset();
			_dir9.reset();
		}
		
		/**设置椅子数量*/
		public function setChairNum(num:int=10):void
		{
			_PosChairVec.length = 0;
			switch(num)
			{
				case 10:_PosChairVec.push(_dir0,_dir1,_dir2,_dir3,_dir4,_dir5,_dir6,_dir7,_dir8,_dir9);break;
			}
			
			reset();
		}
		
		/**更新所有的牌,游戏开始第一次发牌用*/
		public function updateAllCards(vec:Vector.<Array>):void
		{
			var i:int;
			var len:int = vec.length;
			
			for(i=0;i<len;i++)
			{
				var dir:int = model.getChairDirByPos(i);
				
//				if(dir != 0 && UserData.isReplay==false)//不是自己
//				{
//					_PosChairVec[dir].playQipaiEff();
//				}	
				_PosChairVec[dir].showCards(vec[i],dir);
			}
		}
		
		/**更新一个方向上的牌*/
		public function updateOnePosAllCards(pos:int,cards:Array):void
		{
			trace("pos ::" + pos);
			var dir:int = model.getChairDirByPos(pos);
			trace("dir ::"+ dir);
			trace("_PosChairVec[dir] ::"+ _PosChairVec[dir]);
			_PosChairVec[dir].showCards(cards,dir);
			
		}
		
		/**播放前4张牌发牌动画*/
		public function playQipaiEff(pos:int,isLast:Boolean):void
		{
			var dir:int = model.getChairDirByPos(pos);
			_PosChairVec[dir].playQipaiEff(isLast);
		}
		
		/**播放最后一张牌的翻牌动画*/
		public function playFanEff(pos:int,needEff:Boolean=true):void
		{
			var dir:int = model.getChairDirByPos(pos);
			_PosChairVec[dir].playFanEff(needEff);
		}
		
		/**设置指定的牌的选中状态*/
		public function setSelfPockSele(cards:Array):void
		{
			var dir:int = model.getChairDirByPos(model.selfChairPos);
			_PosChairVec[dir].seleCards = cards;
		}
		
		/**获取玩家选中的牌*/
		public function getSelfSelePockers():Array
		{
			var dir:int = model.getChairDirByPos(model.selfChairPos);
			return _PosChairVec[dir].seleCards;
		}
		
		/**显示玩家的牌型*/
		public function showPaixing(pos:int,paixing:int):void
		{
			var dir:int = model.getChairDirByPos(pos);
			_PosChairVec[dir].showPaixing(pos,paixing)
		}
		
		/**显示玩家已经完成*/
		public function showComp(pos:int):void
		{
			var dir:int = model.getChairDirByPos(pos);
			_PosChairVec[dir].showComp(pos);
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
		
		/**设置牌是否可以操作,这个是使自己的所有牌都可以操作或者不可以操作*/
		public function canControl(pos:int,bool:Boolean):void
		{
			_PosChairVec[model.getChairDirByPos(pos)].canControl = bool;
		}
		
		protected function get model():NnModel
		{
			return NnGameModule.instance.gameContext.model;
		}
	}
}