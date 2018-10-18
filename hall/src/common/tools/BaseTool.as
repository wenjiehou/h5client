package common.tools
{
	public class BaseTool
	{
		private static var _instance:BaseTool;
		
		public static function get instance():BaseTool
		{
			if(_instance == null)
			{
				_instance = new BaseTool(new SingleForcer());
			}
			
			return _instance;
		}
		
		public function BaseTool(forcer:SingleForcer)
		{
			
		}
		
//		public var userinfo:UserInfoPage;
//		
//		/**显示userinfo*/
//		public function showUserinfo(uid:int,ip:String,icon:String):void
//		{
//			if(userinfo == null)
//			{
//				userinfo = new UserInfoPage();
//			}
//			userinfo.show(uid,ip,icon);
//		}
		
		
	}
}

class SingleForcer{}