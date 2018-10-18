package modules.gameCommon.chat
{
	import ui.gameCommon.shortCutChat.ChatPageUI;
	import ui.gameCommon.shortCutChat.VChatPageUI;

	public class Chat
	{
		public function Chat()
		{
			
		}
		
		private static var _vchatPage:ChatPage;
		
		public static function get vchatPage():ChatPage
		{
			if(!_vchatPage)
			{
				_vchatPage = new ChatPage(new VChatPageUI(),2);
			}
			
			return _vchatPage;
		}
		
		private static var _hchatPage:ChatPage;
		
		public static function get hchatPage():ChatPage
		{
			if(!_hchatPage)
			{
				_hchatPage = new ChatPage(new ChatPageUI(),1);
			}
			
			return _hchatPage;
		}
		
		private static var _schatPage:ChatPage;
		
		public static function get schatPage():ChatPage
		{
			if(!_schatPage)
			{
				_schatPage = new ChatPage(new ChatPageUI(),2);
			}
			
			return _schatPage;
		}
	}
}