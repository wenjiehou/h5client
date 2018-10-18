package modules.nnGame.inerGame.view.pockerPart
{
	import common.event.EventCenter;
	
	import manager.TimeManager;
	
	import ui.niuniuGame.niuniuPart.ActTipUI;

	public class TimeTipView
	{
		protected var _skin:ActTipUI;
		
		protected var leftTime:int = 0;
		
		protected var stage:int = -1;
		
		public function TimeTipView(skin:ActTipUI)
		{
			_skin = skin;
		}
		
		/**显示准备剩余时间*/
		public function showReadyLeft(leftT:int=8):void
		{
			stage = 1;
			leftTime = leftT;
			show();
			startCutdown();
			//_skin.tipTf.text = "准备剩余时间。。。";
		}
		
		/**显示抢庄剩余时间*/
		public function showZhuangLeft(leftT:int=10):void
		{
			stage = 2;
			leftTime = leftT;
			show();
			startCutdown();
			//_skin.tipTf.text = "抢庄剩余时间。。。";
		}
		
		/**显示下注剩余时间*/
		public function showXiazhuLeft(leftT:int=10):void
		{
			stage = 3;
			leftTime = leftT;
			show();
			startCutdown();
			//_skin.tipTf.text = "下注剩余时间。。。";
		}
		
		
		
		
		/**显示亮牌剩余时间*/
		public function showLiangLeft(leftT:int=12):void
		{
			stage = 4;
			leftTime = leftT;
			show();
			startCutdown();
			//_skin.tipTf.text = "亮牌剩余时间。。。";
		}
		
		protected var isIncutDown:Boolean = false;
		
		/**开始倒计时*/
		private function startCutdown():void
		{
			if(isIncutDown == true)
			{
				return;
			}
			isIncutDown = true;
		
			TimeManager.instance.timer.loop(1000,this,onCutDown);
//			EventCenter.instance.on(EventCenter.ON_LITTLETIMEER,this,onCutDown);
		}
		
		/**结束倒计时*/
		private function stopCutdown():void
		{
			if(isIncutDown == false)
			{
				return;
			}
			isIncutDown = false;
			TimeManager.instance.timer.clear(this,onCutDown);
//			EventCenter.instance.off(EventCenter.ON_LITTLETIMEER,this,onCutDown);
		}
		
		protected function onCutDown(dat:int):void{
			leftTime -= 1;
			if(leftTime < 0){
				leftTime = 0;
				stopCutdown();
			}
			
			switch(stage){
				case 1:
					_skin.tipTf.text = "准备剩余"+ leftTime + "s";
					break;
				case 2:
					_skin.tipTf.text = "抢庄剩余"+ leftTime + "s";
					break;
				case 3:
					_skin.tipTf.text = "下注剩余"+ leftTime + "s";
					break;
				case 4:
					_skin.tipTf.text = "亮牌剩余"+ leftTime + "s";
					break;
			}
		}
		
		
		
		public function show():void{
			_skin.visible = true;
		}
		
		public function hide():void{
			_skin.visible = false;
		}
		
		
		public function reset():void
		{
			_skin.visible = false;
		}
	}
}