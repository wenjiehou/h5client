package modules.game.majiangGame.view.majiangPart
{
	
	import common.tools.SoundPlay;
	
	import laya.ui.Image;
	import laya.ui.Label;
	import laya.utils.Tween;
	
	import manager.TextManager;
	import manager.TimeManager;
	
	import modules.game.GameModule;
	import modules.game.majiangGame.model.MajiangModel;
	
	import ui.mainGame.majiangParts.ClockPartUI;

	public class ClockPart
	{
		protected var _skin:ClockPartUI;
		
		protected var _left:Image;
		protected var _bottom:Image;
		protected var _top:Image;
		protected var _right:Image;
		protected var _clockTf:Label;
		protected var _leftCardsNumTf:Label;
		protected var _leftRoundNumTf:Label;
		
		protected var _PosChairVec:Vector.<Image> = new Vector.<Image>();
		
		/**当前操作玩家的方向*/
		protected var _curHandPos:int = -1;
		
		public function ClockPart(skin:ClockPartUI)
		{
			_skin = skin;
			
			init();
			
		}
		
		protected function init():void
		{
			_left = _skin.leftSimbol;
			_bottom = _skin.bottomSimbol;
			_top = _skin.topSimbol;
			_right = _skin.rightSimbol;
			_clockTf = _skin.clockTf;
			_clockTf.scaleX=_clockTf.scaleY=0.55;
			_clockTf.font=TextManager.NumberYellowFont;
			_leftCardsNumTf = _skin.leftCardsNumTf;
			_leftCardsNumTf.scaleX=_leftCardsNumTf.scaleY=0.6;
			_leftCardsNumTf.font=TextManager.NumberYellowFont;
			
			
			_leftRoundNumTf = _skin.leftRoundNumTf;
			_leftRoundNumTf.scaleX=_leftRoundNumTf.scaleY=0.6;
			_leftRoundNumTf.font=TextManager.NumberYellowFont;
			
			allReset();
		}
		
		public function setWenli():void
		{
			switch(UserData.roomtype)
			{
				case UserData.RoomType_Xizhou:
					_skin.wenliImg.skin = "gametable/wenli_xizhou.png";
					break;
				case UserData.RoomType_Xiangshan:
					_skin.wenliImg.skin = "gametable/wenli_xiangshan.png";
					break;
			}
		}
		
		protected function allReset():void
		{
			_bottom.visible = false;
			_right.visible = false;
			_top.visible = false;
			_left.visible = false;
			
			_clockTf.text = "00";
			_leftCardsNumTf.text = "0";
			_leftRoundNumTf.text = "0";
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
		
		protected var _leftTime:int = 0;
		
		/**通知显示倒计时*/
		public function noticeShowClock(pos:int,leftTime:int):void
		{
			_curHandPos = pos;
			model.curHandlePos = pos;
			
			_leftTime = leftTime;
			
			_clockTf.text = _leftTime < 10  ? "0"+ _leftTime : _leftTime+"";
			
			TimeManager.instance.timer.clear(this,onTime);
			TimeManager.instance.timer.loop(1000,this,onTime);
			
			showDir(model.getChairDirByPos(pos));
			
		}
		
		/**显示还剩几局*/
		public function showLeftRoundsNum():void
		{
			var info:Object = model.majiangMsgs.ACK_RoomInfo;
			var rule:Array = info.Rule;
			var obj:Object = AppConfig.getRule(rule[1]);
			
			info.totalRound = obj.value;
			if(info.RoundCount+1 > obj.value)
			{
				_leftRoundNumTf.text = "" + info.RoundCount;
				if(info.RoundCount < 10)
				{
					_leftRoundNumTf.x = 42;
				}
				else
				{
					_leftRoundNumTf.x = 32;
				}
			}
			else
			{
				_leftRoundNumTf.text = "" + (info.RoundCount+1);
				if(info.RoundCount+1 < 10)
				{
					_leftRoundNumTf.x = 42;
				}
				else
				{
					_leftRoundNumTf.x = 32;
				}
			}
			
//			var obj:Object = model.majiangMsgs.control_game_operation_tableinfo_Info;
//			var num:int = obj.sumcount - obj.curcount;
//			
//			_leftRoundNumTf.text = "" + num;
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
				//TimeManager.instance.timer.clear(this,onTime);
//				if(_curHandPos == model.selfChairPos)//这个是自己，震动一下
//				{
//					ExternInterface.call(ExternInterface.CMD_VIBRATE);
//				}
			}
			_clockTf.text = _leftTime < 10  ? "0"+ _leftTime : _leftTime+"";
			
			if(_leftTime < 5)
			{
				SoundPlay.playEffect("game_warn");
			}
		}
		
		/**通知显示还剩多少张牌*/
		public function noticeShowLeftCardsNum():void
		{
			if(model.leftDesktopCardsNum < 0)
			{
				model.leftDesktopCardsNum = 0;
			}
			_leftCardsNumTf.text = "" + model.leftDesktopCardsNum;
		}
		
		/**重置*/
		public function reset():void
		{
			var i:int;
			var len:int = _PosChairVec.length;
			for(i=0;i<len;i++)
			{
				_PosChairVec[i].visible = false;
			}
			
			_clockTf.text = "00";
			_leftCardsNumTf.text = "0";
			//_leftRoundNumTf.text = "0";
		}
		
		protected function get model():MajiangModel
		{
			return GameModule.instance.gameContext.model;
		}
		
		//*****************************************************************
		public static const RotationArr:Array = [0,-90,-180,-270];
		
		public function dingDongwei(pos:int,needChongPai:Boolean=false,needTween:Boolean=true):void
		{
			var dir:int = model.getChairDirByPos(pos);
			
			if(needTween)
			{
				Tween.to(_skin.middleBox,{rotation:ClockPart.RotationArr[dir]},1000);
			}
			else
			{
				_skin.middleBox.rotation = ClockPart.RotationArr[dir];
			}
			_PosChairVec.length = 0;
			_PosChairVec.push(_bottom,_right,_top,_left);
			
			//根据dir对chairposVec重排
			var vec1:Vector.<Image> = new Vector.<Image>();
			var vec2:Vector.<Image> = new Vector.<Image>();
			
			if(true)//needChongPai
			{
				var i:int;
				var len:int = _PosChairVec.length;
				for(i=0;i<len;i++)
				{
					if(i<len-dir)
					{
						vec2.push(_PosChairVec[i]);
					}
					else
					{
						vec1.push(_PosChairVec[i]);
					}
				}
				_PosChairVec = vec1.concat(vec2);
			}
			
			
			
		}
		
	}
}