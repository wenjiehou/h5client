package modules.game.majiangGame.view.majiangPart
{
	
	import common.view.PopBox;
	
	import modules.game.GameModule;
	import modules.game.majiangGame.model.MajiangModel;
	import modules.game.majiangGame.view.majiangPart.shaizi.ShaiziEffPage;
	
	import ui.mainGame.majiangParts.shaiziPageUI;

	public class ShaiziPart
	{
		protected var _bottom:ShaiziEffPage;
		protected var _right:ShaiziEffPage;
		protected var _top:ShaiziEffPage;
		protected var _left:ShaiziEffPage;
		
		protected var _middle:ShaiziEffPage;
		
		protected var _PosChairVec:Vector.<ShaiziEffPage> = new Vector.<ShaiziEffPage>();
		
		public function ShaiziPart(skin:shaiziPageUI)
		{
			_bottom = new ShaiziEffPage(skin.bootomShaizi);
			_right = new ShaiziEffPage(skin.rightShaizi);
			_top = new ShaiziEffPage(skin.topShaizi);
			_left = new ShaiziEffPage(skin.leftShaizi);
			
			_middle = new ShaiziEffPage(skin.middleShaizi);
			
			allReset();
			
		}
		
		public function allReset():void
		{
			_bottom.reset();
			_right.reset();
			_top.reset();
			_left.reset();
			_middle.reset();
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
			_middle.reset();
		}
		
		/**播放筛子动画*/
		public function play(pos:int,value:int):void//-1表示中间的
		{
			if(pos == -1)
			{
				_middle.play(value);
			}
			else
			{
				var dir:int = model.getChairDirByPos(pos);
				if(_PosChairVec[dir] == null)
				{
					QuickUtils.popMessageBox("给的玩家的位置不在0到3！！",PopBox.BTN_QUEREN,null,null,"错误");
					return ;
				}
				
				_PosChairVec[dir].play(value);
			}
			
		}
		
		public function get model():MajiangModel
		{
			return GameModule.instance.gameContext.model;
		}
	}
}