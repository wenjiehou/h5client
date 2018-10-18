package modules.sddzGame.sddzInerGame.context
{
	import common.event.EventCenter;
	import common.tools.SoundPlay;
	
	import laya.media.SoundManager;
	
	import manager.MessageManager;
	
	import modules.sddzGame.sddzInerGame.controller.RSddzGameController;
	import modules.sddzGame.sddzInerGame.controller.SddzGameController;
	import modules.sddzGame.sddzInerGame.model.RSddzModel;
	import modules.sddzGame.sddzInerGame.model.SddzModel;
	import modules.sddzGame.sddzInerGame.view.SddzGameView;
	
	import rb.framework.mvc.GameContext;
	import rb.framework.mvc.Module;
	
	public class SDdzGameContext extends GameContext
	{
		protected var _view:SddzGameView;
		public function get view():SddzGameView
		{
			return _view;
		}
		
		protected var _controller:SddzGameController;
		protected var _rcontroller:RSddzGameController;
		
		public function get controller():SddzGameController
		{
			if(UserData.isReplay)//这个是重播
			{
				return _rcontroller;
			}
			else
			{
				return _controller
			}
		}
		
		protected var _model:SddzModel;
		protected var _rmodel:RSddzModel;
		
		public function get model():SddzModel
		{
			if(UserData.isReplay)//这个是重播
			{
				return _rmodel;
			}
			else
			{
				return _model;
			}
		}
		
		public function SDdzGameContext(key:String="", module:Module=null, parentNode:GameContext=null)
		{
			super(key, module, parentNode);
		}
		
		
		override public function open():void
		{
			super.open();
			initUI();
			trace("addView(sddz)////////////////");
			
			this.addView(_view);
			if(UserData.isReplay)
			{
				this.addController(_rcontroller);
				this.addModel(_rmodel);
			}
			else
			{
				this.addController(_controller);
				this.addModel(_model);
			}
			
			trace("sddzgamecontext UserData.roomtype::" + UserData.roomtype);
			setChairNum(3);
			
			SoundPlay.swithMusic("game");
			
			trace("sddzGameContext open:::...");
			trace("注册了游戏内的消息！！！");
			MessageManager.instance.continueQueue(MessageManager.GAME);
			
			EventCenter.instance.event(EventCenter.GameContextReady,null);
			
		}
		
		override public function close():void
		{
			super.close();
			SoundManager.stopMusic();
		}
		
		protected function initUI():void
		{
			if(!_view)
			{
				_view = new SddzGameView();
			}
			
			if(UserData.isReplay)
			{
				if(!_rcontroller)
				{
					_rcontroller = new RSddzGameController();
				}
				
				if(_rmodel)
				{
					_rmodel = new RSddzModel();
				}
				
			}
			else
			{
				if(!_controller)
				{
					_controller = new SddzGameController();
				}
				
				if(!_model)
				{
					_model = new SddzModel();
				}
			}
			
		}
		
		public function setChairNum(num:int):void
		{
			if(UserData.isReplay)
			{
				_rmodel.chairNum = num;
			}
			else
			{
				_model.chairNum = num;
			}
			
			_view.setChairNmu(num);
		}
		
	}
}