package manager
{
	import laya.utils.Timer;

	/**重点是使用同一个定时器*/
	public class TimeManager
	{
		protected static var _instance:TimeManager;
		
		public static function get instance():TimeManager
		{
			if(_instance == null)
			{
				_instance = new TimeManager(new SingleForcer());
			}
			
			return _instance;
		}
		
		protected var _timer:Timer;
		protected var _date:Date;
		
		public function get timer():Timer
		{
			return _timer;
		}
		
		public function get date():Date
		{
			return _date;
		}
		
		public function TimeManager(forcer:SingleForcer)
		{
			init();
		}
		
		
		protected function init():void
		{
			_date = new Date();
			_timer = new Timer();
			_timer.loop(1000,this,onSecondUpdate);
		}
		
		protected function onSecondUpdate():void
		{
			_date.setTime(_date.getTime()+1000);
		}
		public static function get unixtime():Number{
			return new Date().getTime();
		}
		public static function get unixtimeSecond():int{
			return Math.floor(unixtime/1000);
		}
		
	}
}

class SingleForcer{}