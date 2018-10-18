package modules.sddzGame.sddzInerGame.view.pockerPart
{
	import modules.sddzGame.SDdzGameModule;
	import modules.sddzGame.sddzInerGame.model.SddzModel;
	import modules.sddzGame.sddzInerGame.view.pockerPart.singlePart.handlePart.BaseSingleHandlePart;
	import modules.sddzGame.sddzInerGame.view.pockerPart.singlePart.handlePart.BottomSingleHandlePart;
	import modules.sddzGame.sddzInerGame.view.pockerPart.singlePart.handlePart.OtherSingleHandlePart;
	
	import ui.sddzGame.ddzPart.handlePart.OtherHandlePartUI;
	import ui.sddzGame.ddzPart.handlePart.OwnerHandlePartUI;

	/**玩家手里的牌的部分*/
	public class HandlePart
	{
		protected var _bottom:BottomSingleHandlePart;
		protected var _right:OtherSingleHandlePart;
		protected var _left:OtherSingleHandlePart;
		
		protected var _PosChairVec:Vector.<BaseSingleHandlePart> = new Vector.<BaseSingleHandlePart>();
		
		public function HandlePart(bottom:OwnerHandlePartUI,right:OtherHandlePartUI,left:OtherHandlePartUI)
		{
			_bottom = new BottomSingleHandlePart(bottom);
			_right = new OtherSingleHandlePart(right);
			_left = new OtherSingleHandlePart(left);
			
			allReset();
		}
		
		protected function allReset():void
		{
			_bottom.reset();
			_right.reset();
			_left.reset();
		}
		
		/**设置椅子数量*/
		public function setChairNum(num:int=3):void
		{
			_PosChairVec.length = 0;
			switch(num)
			{
				case 3:_PosChairVec.push(_bottom,_right,_left);break;
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
		
		protected function get model():SddzModel
		{
			return SDdzGameModule.instance.gameContext.model;
		}
	}
}