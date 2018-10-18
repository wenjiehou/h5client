package hall.view
{
	import common.baseui.UIBase;
	import common.event.EventCenter;
	
	import hall.HallModule;
	import hall.view.replay.OnPlayView;
	
	import laya.events.Event;
	
	import manager.UIManager;
	
	import net.Message;
	import net.ProtoMessage;
	
	import ui.hall.BottomBtnUI;

	public class HallLayer extends UIBase
	{
		/**
		 * 0=>大厅首页
		 * 1=>充值
		 * 2=>反馈
		 * 3=>战绩
		 * 4=>活动
		 */
		private var state:int=0;
		protected var _skin:BottomBtnUI;
		protected var _mainView:HMainView;

		public function get mainView():HMainView
		{
			return _mainView;
		}

		//protected var _rechargeView:RechargeView;
		protected var _agentView:AgentView;
		
		
		
		//protected var _recordView:RecordView;
		protected var _onPlayView:OnPlayView;

		public function get onPlayView():OnPlayView
		{
			return _onPlayView;
		}

		protected var _feedbackView:FeedbackView;
		protected var _hallShareView:HShareView;
		protected var _activityView:ActivityView;
		public function HallLayer()
		{
			super();
			skinRes = "res/atlas/hall.atlas";
			this._mainView=new HMainView();
			//this._rechargeView=new RechargeView();
			this._agentView = new AgentView();
			//this._recordView=new RecordView();
			_onPlayView = new OnPlayView();
			
			this._feedbackView=new FeedbackView();
			this._hallShareView=new HShareView();
			this._activityView=new ActivityView();
			this._hallShareView.caller=function shareCall():void{
				this.shareCall();
			}
		}
		
		override public function show():void
		{
			super.show(); 
			if(_skin){
				UIManager.instance.uiCommonLayer.addChild(_skin);
				this.gotoHall();
				this.mainView.updateUI();
				if(UserData.isPreReplay)
				{
					removeAll();
					this.reset();
					this.state=3;
					_onPlayView.show();
					_onPlayView.detailListView.show();
					UserData.isPreReplay = false;
					
					this.shareCall();
				}
			}
		}
		
		override public function hide():void
		{
			super.hide();
			if(_skin && _skin.parent)
			{
				this.removeAll();
				this._skin.parent.removeChild(this._skin);
			}
			
		}
		

		
		private function init():void
		{
			this.gotoHall();
			_skin.homeBtn.on(Event.CLICK,this,this.gotoHall);//大厅
			_skin.actBtn.on(Event.CLICK,this,this.share);//活动
			_skin.chongBtn.on(Event.CLICK,this,this.recharge);//充值
			_skin.fankuiBtn.on(Event.CLICK,this,this.feedBack);//反馈
			_skin.zhanjiBtn.on(Event.CLICK,this,this.record);//战绩
			
			var t:Number=QuickUtils.getLocalVar("viewAct",0);
			if(t==1)
			{
				_skin.actNewImg.visible = false;
			}
			else
			{
				_skin.actNewImg.visible = true;
			}
			
//			EventCenter.instance.on(EventCenter.HALL_SHOW_REPORTVIEW,this,onRecord);
			
			
		}
		private function shareCall():void
		{
			reset();
			switch(this.state)
			{
				case 0://大厅
//					_skin.datingBtn_c.visible=true;
//					_skin.activityBtn_r.visible=true;//活动
//					_skin.chongchiBtn_r.visible=true;//充值
//					_skin.fankuiBtn_l.visible=true;//反馈
//					_skin.zhanjiBtn_l.visible=true;//战绩
					
					//_skin.seleHome.visible = true;
					
					_skin.homeNormal.visible = false;
					_skin.homeDown.visible = true;
					
					break;
				case 1://充值
					
					_skin.chongNormal.visible = false;
					_skin.chongDown.visible = true;
					

					//_skin.seleChong.visible = true;

//					_skin.chongchiBtn_c.visible=true;
//					_skin.activityBtn_l.visible=true;//活动
//					_skin.datingBtn_l.visible=true;//大厅
//					_skin.fankuiBtn_l.visible=true;//反馈
//					_skin.zhanjiBtn_l.visible=true;//战绩
					break;
				case 2://反馈
					//_skin.seleFankui.visible = true;
					
					_skin.fankuiNormal.visible = false;
					_skin.fankuiDown.visible = true;
					
//					_skin.fankuiBtn_c.visible=true;
//					_skin.chongchiBtn_r.visible=true;//充值
//					_skin.activityBtn_r.visible=true;//活动
//					_skin.datingBtn_r.visible=true;//大厅
//					_skin.zhanjiBtn_l.visible=true;//战绩
					break;
				case 3://战绩
					//_skin.seleZhanji.visible = true;
					
					_skin.zhanjiNormal.visible = false;
					_skin.zhanjiDown.visible = true;
					
//					_skin.zhanjiBtn_c.visible=true;
//					_skin.chongchiBtn_r.visible=true;//充值
//					_skin.activityBtn_r.visible=true;//活动
//					_skin.datingBtn_r.visible=true;//大厅
//					_skin.fankuiBtn_r.visible=true;//反馈
					break;
				case 4://活动
					//_skin.seleAct.visible = true;
					
					_skin.actNormal.visible = false;
					_skin.actDown.visible = true;
					
//					_skin.activityBtn_c.visible=true;
//					_skin.chongchiBtn_r.visible=true;//充值
//					_skin.datingBtn_l.visible=true;//大厅
//					_skin.fankuiBtn_l.visible=true;//反馈
//					_skin.zhanjiBtn_l.visible=true;//战绩
					break;
				default:
//					_skin.datingBtn_c.visible=true;
//					_skin.activityBtn_r.visible=true;//活动
//					_skin.chongchiBtn_r.visible=true;//充值
//					_skin.fankuiBtn_l.visible=true;//反馈
//					_skin.zhanjiBtn_l.visible=true;//战绩
					break;
			}
		}
		//大厅
		public function gotoHall():void
		{
			removeAll();
			this.reset();
			this.mainView.show();
			this.state=0;
			this.shareCall();
		}
		//活动
		private function share():void
		{
			var v:Number=QuickUtils.getLocalVar("viewAct",0);
			
			if(v==0)
			{
				QuickUtils.setLocalVar("viewAct",1);
				_skin.actNewImg.visible = false;
			}
			
			this.reset();
			this._activityView.show();
			this.state=4;
			this.shareCall();
		}
		//充值
		public function recharge():void
		{
			if(UserData.level == 0)
			{
				QuickUtils.popMessage("您没有权限！");
				return;
			}
			
//			Browser.window.weui.alert("暂未开放");
			this.reset();
			this._agentView.show();//充值
			this.state=1;
			this.shareCall();
		}
		//反馈
		private function feedBack():void
		{
			removeAll();
			this.reset();
			this._feedbackView.show();//反馈
			this.state=2;
			this.shareCall();
		}
		//战绩
		/**@param dat {gametype,roomid }*/
		private function record(evt:Event=null,dat:Object=null):void
		{
			removeAll();
			this.reset();
			_onPlayView.show();
			this.state=3;
			var getRecord:Object = {"type":0};
			EventCenter.instance.event(EventCenter.SOCKET_SEND,ProtoMessage.getProtoMessage(Message.MSG_Home_Owner,getRecord));
			this.shareCall();
		}
		
		override protected function onLoaded():void
		{
			super.onLoaded();
			trace("hall.json onLoaded!!--------------------------------------------");
			_skin = new BottomBtnUI();
			_skin.y=1038-120;
			_skin.mouseThrough = true;
			if(_isShow)
			{
				if(ModuleDef.CurGameModule && ModuleDef.CurGameModule.inGame)
				{
					
				}
				else
				{
					UIManager.instance.uiCommonLayer.addChild(_skin);
				}
				
			}
		
			this.init();
			if(needGoSingleBoard)
			{
				_onPlayView.goSingleBoard();
			}
			
			if(ModuleDef.CurGameModule && ModuleDef.CurGameModule.inGame)
			{
				hide();
				HallModule.instance.goEmpty();
			}
			
		
		}
		
		protected var needGoSingleBoard:Boolean = false;

		
		public function onRecord(dat:Object=null):void
		{
			if(_isLoaded)
			{
				needGoSingleBoard = false;
				_onPlayView.goSingleBoard();
			}
			else
			{
				needGoSingleBoard = true;
			}
		}
		
		private function reset():void
		{
			
			_skin.chongNormal.visible = true;
			_skin.chongDown.visible = false;
			
			_skin.actNormal.visible = true;
			_skin.actDown.visible = false;
			
			_skin.homeNormal.visible = true;
			_skin.homeDown.visible = false;
			
			_skin.fankuiNormal.visible = true;
			_skin.fankuiDown.visible = false;
			
			_skin.zhanjiNormal.visible = true;
			_skin.zhanjiDown.visible = false;
			
			
			_skin.seleHome.visible = false;
			_skin.seleChong.visible = false;
			_skin.seleAct.visible = false;
			_skin.seleFankui.visible = false;
			_skin.seleZhanji.visible = false;

			
			
			//大厅首页
//			_skin.datingBtn_r.visible=false;
//			_skin.datingBtn_c.visible=false;
//			_skin.datingBtn_l.visible=false;
//			//活动
//			_skin.activityBtn_r.visible=false;
//			_skin.activityBtn_c.visible=false;
//			_skin.activityBtn_l.visible=false;
//			//充值
//			_skin.chongchiBtn_r.visible=false;
//			_skin.chongchiBtn_c.visible=false;
//			//反馈
//			_skin.fankuiBtn_l.visible=false;
//			_skin.fankuiBtn_c.visible=false;
//			_skin.fankuiBtn_r.visible=false;
//			//战绩
//			_skin.zhanjiBtn_l.visible=false;
//			_skin.zhanjiBtn_c.visible=false;
		}
		
		private function removeAll():void
		{
			_mainView.hide();
			_agentView.hide();
			//_recordView.hide();
			
			_onPlayView.hide();
			
			
			_feedbackView.hide();
			_activityView.hide();
		}
	}
}