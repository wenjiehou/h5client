package common.event
{
	import laya.events.EventDispatcher;

	public class EventCenter extends EventDispatcher 
	{
		/***/
		public static const SOCKET_SEND:String = "SOCKET_SEND";
		
		/**玩家登陆成功*/
		public static const LOGIN_SUCCESS:String = "HALL_LOGIN_SUCCESS";
		
		public static const HALLVIEW_GOTOHOME:String = "HALLVIEW_GOTOHOME";
		
		public static const MAJIANGPAGE_NOTICE_HUEFF_HIDE:String = "MAJIANGPAGE_NOTICE_HUEFF_HIDE";
		
		//yuanlaide
		public static const REPLAY_clickRoundReviewBtn:String = "TYPE_clickRoundReviewBtn";
		
		public static const REPLAY_returnToParent:String = "REPLAY_returnToParent";
		
		/**获得了所有的重播的数据*/
		public static const REPLAY_getAllReplayMsgs:String = "REPLAY_getAllReplayMsgs";
		
		/**majiangContext准备好了*/
		public static const GameContextReady:String = "GameContextReady";
		
		/**replay play*/
		public static const REPLAY_play:String = "REPLAY_play";
		
		/**replay pause*/
		public static const REPLAY_pause:String = "REPLAY_pause";
		
		/**replay up*/
		public static const REPLAY_up:String = "REPLAY_up";
		
		/**replay down*/
		public static const REPLAY_down:String = "REPLAY_down";
		
		/**replay back*/
		public static const REPLAY_back:String = "REPLAY_back";
		
		/**replay skip*/
		public static const REPLAY_skip:String = "REPLAY_skip";
		
		
		/**使replay控制按钮不可用，只能返回*/
		public static const REPLAY_over:String = "REPLAY_over";
		
		/**点击发送聊天*/
		public static const SEND_CHAT_MESSAGE:String = "SEND_CHAT_MESSAGE";
		
		/***/
		public static const HALL_CREATE_ROOM:String = "HALL_CREATE_ROOM";
		public static const HALL_JOIN_ROOM:String = "HALL_JOIN_ROOM";
		
		/**抓码动画播放完成*/
		public static const MAJIANGPAGE_ZHUAMA_COMP:String = "MAJIANGPAGE_ZHUAMA_COMP";
		
		/**杠头动画播放完成*/
		public static const MAJIANGPAGE_GANGTOU_COMP:String = "MAJIANGPAGE_GANGTOU_COMP";
		
		public static const POWER_CHANGED:String = "POWER_CHANGED";
		
		/**刷新房卡数目*/
		public static const HALL_REFRESH_CARDSNUM:String = "HALL_REFERESH_CARDSNUM";
		
		/**定东风位的骰子扔完了*/
		public static const GAME_START_SHAIZI_DONGFENG_COMP:String = "GAME_START_SHAIZI_DONGFENG_COMP";
		
		/**定每个玩家方位的骰子扔完了*/
		public static const GAME_START_SHAIZI_EACHFANG_COMP:String = "GAME_START_SHAIZI_EACHFANG_COMP";
		
		/**有玩家进出显示列队*/
		public static const COMMON_INFOLIST_NOTICE:String = "COMMON_INFOLIST_NOTICE";
		
		public static const HALLVIEW_GETRECORD:String = "HALLVIEW_GETRECORD";
		public static const HALLVIEW_GETONPLAY:String = "HALLVIEW_GETONPLAY";
		public static const HALLVIEW_GETSINGLE:String = "HALLVIEW_GETSINGLE";
		public static const ON_LITTLETIMEER:String = "ON_LITTLETIMEER";
		
		public static const HALL_SHOW_REPORTVIEW:String = "HALL_SHOW_REPORTVIEW";
		public static const LOAD_MODULES_JS_LOADED:String = "LOAD_MODULES_JS_LOADED";
		
		public static const GAME_BUHUAN_COMPLETE:String = "GAME_BUHUAN_COMPLETE";
		
		/**通知更新玩家下属代理列表*/
		public static const HALL_UPDATE_AGENTSBELONG:String = "HALL_UPDATE_AGENTSBELONG";
		
		/**显示明细界面*/
		public static const HALL_SHOW_AGENTDETAILVIEW:String = "HALL_SHOW_AGENTDETAILVIEW";
		
		
		
		private static var _eventCenter:EventCenter;
		
		public static function get instance():EventCenter
		{
			if(_eventCenter == null)
			{
				_eventCenter = new EventCenter(new SingleForcer());
			}
			
			return _eventCenter;
		}
		
		public function EventCenter(force:SingleForcer)
		{
			
		}
	}
}

class SingleForcer{}