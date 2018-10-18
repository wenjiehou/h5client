package modules.srddzGame.srddzInerGame.view.pockerPart
{
	import laya.ui.Box;
	import laya.ui.Label;
	
	import manager.TimeManager;
	
	import modules.srddzGame.SrddzGameModule;
	import modules.srddzGame.srddzInerGame.model.SrddzModel;
	
	import ui.srddzGame.ddzPart.ClockPartUI;

	public class ClockPart
	{
		protected var _leftTime:int = 0;
		/**当前操作玩家的方向*/
		protected var _curHandPos:int = -1;
		
		protected var _skin:ClockPartUI;
		
		protected var _posChairVec:Vector.<Box> = new Vector.<Box>();
		protected var _leftTfVec:Vector.<Label> = new Vector.<Label>();
		
		public function ClockPart(skin:ClockPartUI)
		{
			_skin = skin;
			
			init();
		}
		
		protected function init():void
		{
			allReset();
		}
		
		protected function allReset():void
		{
			_skin.visible = false;
		}
		
		/**设置椅子数量*/
		public function setChairNum(num:int=4):void
		{
			_posChairVec.length = 0;
			_leftTfVec.length = 0;
			switch(num)
			{
				case 4:
					_posChairVec.push(_skin.pos0,_skin.pos1,_skin.pos2,_skin.pos3);
					_leftTfVec.push(_skin.cutdownTf0,_skin.cutdownTf1,_skin.cutdownTf2,_skin.cutdownTf3);
					break;
			}
			
			reset();
		}
		
		public function showjiabei(leftTime:int):void
		{
			//todo
		}
		
		/**通知显示倒计时*/
		public function noticeShowClock(pos:int,leftTime:int):void
		{
			_skin.visible = true;
			_curHandPos = pos;
			model.curHandlePos = pos;
			
			_leftTime = leftTime;
			
			var dir:int = model.getChairDirByPos(pos);
			
			_leftTfVec[dir].text =  _leftTime < 10  ? "0"+ _leftTime : _leftTime+"";
			
			TimeManager.instance.timer.clear(this,onTime);
			TimeManager.instance.timer.loop(1000,this,onTime);
			
			showDir(dir);
		}
		
		protected function showDir(dir:int):void
		{
			var i:int;
			var len:int = _posChairVec.length;
			for(i=0;i<len;i++)
			{
				if(i == dir)
				{
					_posChairVec[i].visible = true;
					_leftTfVec[i].visible = true;
				}
				else
				{
					_posChairVec[i].visible = false;
					_leftTfVec[i].visible = false;
				}
			}
			
			
		}
		
		protected function onTime():void
		{
			if(ModuleDef.CurGameModule.inGame == false || model.isGameStart == false)
			{
				
				
				_leftTime = 0;
				reset();
				TimeManager.instance.timer.clear(this,onTime);
				return;
			}
			var dir:int = model.getChairDirByPos(_curHandPos);
			_leftTime -= 1;
			
			if(_leftTime < 0)
			{
				_leftTime = 10;
			}
			_leftTfVec[dir].text = _leftTime < 10  ? "0"+ _leftTime : _leftTime+"";
			
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
			var len:int = _posChairVec.length;
			for(i=0;i<len;i++)
			{
				_posChairVec[i].visible = false;
				_leftTfVec[i].text = "00";
			}
		}
		
		protected function get model():SrddzModel
		{
			return SrddzGameModule.instance.gameContext.model;
		}
	}
	
	
}