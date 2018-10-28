package hall.view
{
	import common.baseui.UIBase;
	import common.event.EventCenter;
	
	import hall.controller.HallController;
	
	import laya.events.Event;
	
	import ui.hall.HallViewUI;

	public class HMainView extends UIBase
	{
		protected var _skin:HallViewUI;
		protected var _joinRoomView:JoinRView;
		protected var _creatRoomView:CreatRView;
		protected var _hallHandInfoView:HandInfoView;
		
		//protected var bannerView:BannerView;
		public function HMainView()
		{
			super();
			skinRes = "";
			
			this._joinRoomView = new JoinRView();
			this._creatRoomView = new CreatRView();
			this._hallHandInfoView=new HandInfoView();
		}
		
		override public function show():void
		{
			super.show();
			_skin && container.addChild(_skin);
			
			if(_skin)
			{
				updataDiamond();
			}
			
			
		}
		override public function hide():void
		{
			super.hide();
			if(_skin && _skin.parent)
			{
				this._skin.parent.removeChild(this._skin);
				
				_joinRoomView.hide();
				_creatRoomView.hide();
			}
			
		}
		
		override protected function onLoaded():void
		{
			super.onLoaded();
			_skin = new HallViewUI();
			if(_isShow)
			{
				container.addChild(_skin);
			}
			this.init();
		}
		
		private function init():void
		{
			_skin.creatXiSBtn.on(Event.CLICK,this,onClickCreatRoomBtn,[UserData.RoomType_Xiangshan]);//创建房间
			_skin.creatXiZBtn.on(Event.CLICK,this,onClickCreatRoomBtn,[UserData.RoomType_Xizhou]);//创建房间
			_skin.creatSanDizhuBtn.on(Event.CLICK,this,onClickCreatRoomBtn,[UserData.RoomType_SanDizhu]);
			_skin.creatSiDizhuBtn.on(Event.CLICK,this,onClickCreatRoomBtn,[UserData.RoomType_SirenDizhu]);
			_skin.creatPinshiBtn.on(Event.CLICK,this,onClickCreatRoomBtn,[UserData.RoomType_DandanPinshi]);
			
			_skin.joinRoomBtn.on(Event.CLICK,this,onClickJoinRoomBtn);//加入房间
			
			EventCenter.instance.on(EventCenter.HALL_REFRESH_CARDSNUM,this,updataDiamond);
			
			this.updateUI();
			
			_skin.handBtn.on(Event.CLICK,this,function(e:Event):void{
				this._hallHandInfoView.show();
				e.stopPropagation();
				trace("个人信息面板--------------------------------------");
			});	
			
//			_skin.dailiBtn.on(Event.CLICK,this,function(e:Event):void{
//				HallModule.instance.hallContext.hallView.hallLayer.recharge();
//				e.stopPropagation();
//			});
		}
		
		public function updataDiamond():void{
			//_skin.diamondTf.text = UserData.Diamond+"";
			_skin.coinTf.text = UserData.Coin + "";
			trace(UserData.Diamond)
			
			//_skin.idTf.text = "ID:" + UserData.uid;
		}
		
		public function updateUI():void
		{
			if(!_skin)
			{
				return;
			}
			
			//_skin.levelImg.skin = "hall/level"+UserData.level+".png";
			
			//			_skin.gameShare.visible=false;
			if(WX.splitStr(UserData.Icon,"")[0]=='h'){//判断是否是网络图片("h")还是本地图片("i")
				_skin.handIMG.skin=UserData.Icon;
			}
			_skin.nameTf.text = UserData.nickname;
			
			this.updataDiamond();
			
			_skin.Notice.text = HallController.HallMainNoticeTxt+"                                                     ";
			_skin.Notice.overflow = "scroll";
			Laya.timer.frameLoop(1,this,movePaoma);
		}
		public function playGongGao(bool:Boolean):void
		{
			if(bool)
			{
				Laya.timer.frameLoop(1,this,movePaoma);
			}
			else
			{
				Laya.timer.clear(this,movePaoma);
			}
			
		}
		
		protected function movePaoma():void
		{
			_skin.Notice.text = HallController.HallMainNoticeTxt+"                                                     ";
			_skin.Notice.scrollX+=1.5;
			if(_skin.Notice.scrollX >= _skin.Notice.maxScrollX)
			{
				_skin.Notice.scrollX = 0;
			}
			
		}
		
		protected function onClickCreatRoomBtn(roomType:int,e:Event):void
		{
			trace('创建房间',roomType)
			UserData.roomtype = roomType;
			_creatRoomView.show();
			e.stopPropagation();
		}
		
		protected function onClickJoinRoomBtn(e:Event):void
		{
			trace('加入房间');
			_joinRoomView.show();
			e.stopPropagation();
		}
	}
}