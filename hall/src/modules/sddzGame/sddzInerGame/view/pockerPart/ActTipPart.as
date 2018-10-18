package modules.sddzGame.sddzInerGame.view.pockerPart
{
	import modules.sddzGame.SDdzGameModule;
	import modules.sddzGame.sddzInerGame.model.SddzModel;
	import modules.sddzGame.sddzInerGame.view.pockerPart.singlePart.BaseActTipItem;
	
	import ui.sddzGame.ddzPart.ActTipUI;

	/**前期先简单写一下*/
	public class ActTipPart
	{
		
		protected var bottom:BaseActTipItem;
		protected var right:BaseActTipItem;
		protected var left:BaseActTipItem;
		
		protected var _PosChairVec:Vector.<BaseActTipItem> = new Vector.<BaseActTipItem>();
		
		
		
		public function ActTipPart(bottomSkin:ActTipUI,rightSkin:ActTipUI,leftSkin:ActTipUI)
		{
			bottom = new BaseActTipItem(bottomSkin);
			right = new BaseActTipItem(rightSkin);
			left = new BaseActTipItem(leftSkin);
		}
		
		/**设置椅子数量*/
		public function setChairNum(num:int=3):void
		{
			_PosChairVec.length = 0;
			switch(num)
			{
				case 3:_PosChairVec.push(bottom,right,left);break;
			}
		}
		
		/**显示操作*/
		public function showActTip(pos:int,type:int):void
		{
			var dir:int = model.getChairDirByPos(pos);
			_PosChairVec[dir].showActTip(type);
		}
		
		/**隐藏对应的操作*/
		public function hideActTip(pos:int):void
		{
			var dir:int = model.getChairDirByPos(pos);
			_PosChairVec[dir].hideAll();
		}
		
		/**隐藏加倍*/
		public function hideJiabei():void
		{
			var i:int;
			for(i=0;i<_PosChairVec.length;i++)
			{
				_PosChairVec[i].hideJiabei();
			}
		}
		
		/**隐藏所有操作*/
		public function hideAllActTip():void
		{
			var i:int;
			for(i=0;i<_PosChairVec.length;i++)
			{
				_PosChairVec[i].hideAll();
			}
		}
		
		
		
		protected function get model():SddzModel
		{
			return SDdzGameModule.instance.gameContext.model;
		}
	}
}