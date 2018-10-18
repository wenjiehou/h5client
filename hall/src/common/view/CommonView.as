package common.view
{
	
	import rb.framework.mvc.AbstractLayer;
	
	public class CommonView extends AbstractLayer
	{
		public function CommonView()
		{
			super();
		}
		
		private var _settingView:SettingView;

		public function get settingView():SettingView
		{
			if(!_settingView)
			{
				_settingView = new SettingView();
			}
			return _settingView;
		}

		private var _infoListView:InfoListView;

		public function get infoListView():InfoListView
		{
			
			if(!_infoListView)
			{
				_infoListView = new InfoListView();
			}
			return _infoListView;
		}

		private var _gameShareView:GameShareView;

		public function get gameShareView():GameShareView
		{
			if(!_gameShareView)
			{
				_gameShareView = new GameShareView();
			}
			return _gameShareView;
		}
		
		private var _vgameShareView:GameShareView;
		
		public function get vgameShareView():GameShareView
		{
			if(!_vgameShareView)
			{
				_vgameShareView = new GameShareView(false);
			}
			return _vgameShareView;
		}
		

		private var _functionOption:FunctionOption;

		public function get functionOption():FunctionOption
		{
			if(!_functionOption)
			{
				_functionOption = new FunctionOption();
			}
			return _functionOption;
		}
		
		private var _timeWarView:TimeWarView;
		public function get timeWarView():TimeWarView
		{
			if(!_timeWarView)
			{
				_timeWarView = new TimeWarView();
			}
			return _timeWarView;
		}
		

		private var _gameHelpView:GameHelpView;

		public function get gameHelpView():GameHelpView
		{
			if(!_gameHelpView)
			{
				_gameHelpView = new GameHelpView();
			}
			return _gameHelpView;
		}
		
		private var _vgameHelpView:GameHelpView;
		
		public function get vgameHelpView():GameHelpView
		{
			if(!_vgameHelpView)
			{
				_vgameHelpView = new GameHelpView(false);
			}
			return _vgameHelpView;
		}
		
		protected var _noticeInfoView:NoticeInfoView;

		public function get noticeInfoView():NoticeInfoView
		{
			if(!_noticeInfoView)
			{
				_noticeInfoView = new NoticeInfoView();
			}
			return _noticeInfoView;
		}
		
		protected var _hallNoticeInfoView:HallNoticeInfoView;

		public function get hallNoticeInfoView():HallNoticeInfoView
		{
			if(!_hallNoticeInfoView)
			{
				_hallNoticeInfoView = new HallNoticeInfoView();
			}
			return _hallNoticeInfoView;
		}
		
		public function showNotice(info:String,caller:*=null,callBack:Function=null):void
		{
			if(ModuleDef.CurGameModule && ModuleDef.CurGameModule.inGame)
			{
				noticeInfoView.showInfo(info,caller,callBack);
			}
			else
			{
				hallNoticeInfoView.showInfo(info);
			}
		}
		


		override public function onAdd():void
		{
			if(!_infoListView)
			{
				_infoListView = new InfoListView();
			}
			
			if(!_timeWarView)
			{
				_timeWarView = new TimeWarView();
			}
			
			//_infoListView = new InfoListView();//初始化就加上去
			//_timeWarView = new TimeWarView();
			
//			if(settingView == null)
//			{
//				
//				
////				settingView = new SettingView();
////				infoListView = new InfoListView();
////				gameShareView = new GameShareView();
////				functionOption = new FunctionOption();
////				gameServiceView = new GameServiceView();
////				timeWarView = new TimeWarView();
//			}
		}
		
		override public function onRemove():void
		{
			_settingView&&_settingView.hide();
			_infoListView&&_infoListView.hide();
			_infoListView&&_infoListView.reset();
			_gameShareView&&_gameShareView.hide();
			_vgameShareView && _vgameShareView.hide();
			_functionOption&&_functionOption.hide();
			_gameHelpView&&_gameHelpView.hide();
			_vgameHelpView && _vgameHelpView.hide();
			_noticeInfoView&&_noticeInfoView.hide();
			_hallNoticeInfoView&&_hallNoticeInfoView.hide();
			_timeWarView && _timeWarView.hide();
//				timeWarView.hide();
		}
	}
}