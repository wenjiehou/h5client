package modules.sddzGame.sddzInerGame.view.pockerPart
{
	import common.tools.SoundPlay;
	
	import laya.ui.Image;
	import laya.ui.Label;
	
	import manager.TimeManager;
	
	import modules.sddzGame.SDdzGameModule;
	import modules.sddzGame.sddzInerGame.model.SddzModel;
	
	import ui.sddzGame.ddzPart.ClockPartUI;

	public class ClockPart
	{
		
		/**当前操作玩家的方向*/
		protected var _curHandPos:int = -1;
		
		protected var _skin:ClockPartUI;
		
		protected var _left:Image;
		protected var _bottom:Image;
		protected var _right:Image;
		protected var _clockTf:Label;
		
		protected var _PosChairVec:Vector.<Image> = new Vector.<Image>();
		
		public function ClockPart(skin:ClockPartUI)
		{
			_skin = skin;
			
			init();
		}
		
		protected function init():void
		{
			_bottom = _skin.pos0;
			_right = _skin.pos1;
			_left = _skin.pos2;
			
			_clockTf = _skin.cutdownTf;
			
			allReset();
		}
		
		protected function allReset():void
		{
			_bottom.visible = false;
			_right.visible = false;
			_left.visible = false;
			
			_clockTf.text = "00";
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
		
		protected var _leftTime:int = 0;
		
		/**通知显示倒计时*/
		public function noticeShowClock(pos:int,leftTime:int):void
		{
			_skin.visible = true;
			
			_curHandPos = pos;
			model.curHandlePos = pos;
			
			_leftTime = leftTime;
			
			_clockTf.text = _leftTime < 10  ? "0"+ _leftTime : _leftTime+"";
			
			TimeManager.instance.timer.clear(this,onTime);
			TimeManager.instance.timer.loop(1000,this,onTime);
			
			showDir(model.getChairDirByPos(pos));
			
		}
		
		protected function showDir(dir:int):void
		{
			
			
			var i:int;
			var len:int = _PosChairVec.length;
			for(i=0;i<len;i++)
			{
				if(i == dir)
				{
					_PosChairVec[i].visible = true;
				}
				else
				{
					_PosChairVec[i].visible = false;
				}
			}
		}
		
		protected function onTime():void
		{
			if(ModuleDef.CurGameModule.inGame == false || model.isGameStart == false)
			{
				_leftTime = 0;
				_clockTf.text = _leftTime < 10  ? "0"+ _leftTime : _leftTime+"";
				TimeManager.instance.timer.clear(this,onTime);
				return;
			}
			
			_leftTime -= 1;
			
			if(_leftTime < 0)
			{
				_leftTime = 10;
			}
			_clockTf.text = _leftTime < 10  ? "0"+ _leftTime : _leftTime+"";
			
			if(_leftTime < 5)
			{
				//SoundPlay.playEffect("game_warn");
			}
		}
		
		/**重置*/
		public function reset():void
		{
			_skin.visible = false;
			
			var i:int;
			var len:int = _PosChairVec.length;
			for(i=0;i<len;i++)
			{
				_PosChairVec[i].visible = false;
			}
			_clockTf.text = "00";
		}
		
		/**显示选择加倍的状态*/
		public function showjiabei(leftTime:int):void
		{
			_skin.visible = true;
			
			var i:int;
			var len:int = _PosChairVec.length;
			for(i=0;i<len;i++)
			{
				_PosChairVec[i].visible = false;
			}
			
			_leftTime = leftTime;
			
			_clockTf.text = _leftTime < 10  ? "0"+ _leftTime : _leftTime+"";
			
			TimeManager.instance.timer.clear(this,onTime);
			TimeManager.instance.timer.loop(1000,this,onTime);
		}
		
		
		protected function get model():SddzModel
		{
			return SDdzGameModule.instance.gameContext.model;
		}
	}
}