package modules.srddzGame.srddzInerGame.context
{
	import common.event.EventCenter;
	import common.tools.SoundPlay;
	
	import laya.media.SoundManager;
	
	import manager.MessageManager;
	
	import modules.srddzGame.srddzInerGame.controller.RSrddzController;
	import modules.srddzGame.srddzInerGame.controller.SrddzController;
	import modules.srddzGame.srddzInerGame.model.RSrddzModel;
	import modules.srddzGame.srddzInerGame.model.SrddzModel;
	import modules.srddzGame.srddzInerGame.view.SrddzView;
	
	import rb.framework.mvc.GameContext;
	import rb.framework.mvc.Module;
	
	public class SrddzContext extends GameContext
	{
		protected var _view:SrddzView;

		public function get view():SrddzView
		{
			return _view;
		}
		
		protected var _controller:SrddzController;
		protected var _rcontroller:RSrddzController;
		
		public function get controller():SrddzController
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
		
		protected var _model:SrddzModel;
		protected var _rmodel:RSrddzModel;
		
		public function get model():SrddzModel
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
		
		
		public function SrddzContext(key:String="", module:Module=null, parentNode:GameContext=null)
		{
			super(key, module, parentNode);
		}
		
		override public function open():void
		{
			super.open();
			initUI();
			trace("addView(srddz)////////////////");
			
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
			
			trace("srddzgamecontext UserData.roomtype::" + UserData.roomtype);
			setChairNum(4);
			
			SoundPlay.swithMusic("game");
			
			trace("srddzGameContext open:::...");
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
				_view = new SrddzView();
			}
			
			if(UserData.isReplay)
			{
				if(!_rcontroller)
				{
					_rcontroller = new RSrddzController();
				}
				
				if(_rmodel)
				{
					_rmodel = new RSrddzModel();
				}
			}
			else
			{
				if(!_controller)
				{
					_controller = new SrddzController();
				}
				
				if(!_model)
				{
					_model = new SrddzModel();
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