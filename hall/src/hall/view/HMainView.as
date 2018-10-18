package hall.view
{
	import common.baseui.UIBase;
	import common.event.EventCenter;
	
	import hall.HallModule;
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
			
			//bannerView = new BannerView(_skin.banner);
			
//			_skin.goHref.on(Event.CLICK,this,function():void{
//				//HallModule.instance.hallContext.hallView.hallLayer.recharge();
//				
//				Browser.window.location.href="http://mp.weixin.qq.com/s/eZRfZ-sBKLIEQqgX42N9iw";
//				//Browser.window.location.href="http://game.bestpinzheng.com/wechat/activity/center"//"http://mp.weixin.qq.com/s/lmTqAOtYPl_GwUt_g1s3CQ";//"http://mp.weixin.qq.com/s/WYHVfyJwQxYV_ocym8wIyw";
//			})
			
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
			_skin.diamondTf.text = UserData.Diamond+"";
			_skin.coinTf.text = UserData.Coin + "";
			trace(UserData.Diamond)
//			if(UserData.Diamond/10 < 1){//一位数
//				this._skin.chongzhiHBtn.x=60;
//			}else if(UserData.Diamond/10 < 10){//两位数
//				this._skin.chongzhiHBtn.x=65;
//			}else if(UserData.Diamond/10 < 100){//三位数
//				this._skin.chongzhiHBtn.x=75;
//			}else if(UserData.Diamond/10 < 1000){//四位数
//				this._skin.chongzhiHBtn.x=85;
//			}else if(UserData.Diamond/10 < 10000){//五位数
//				this._skin.chongzhiHBtn.x=95;
//			}else if(UserData.Diamond/10 < 100000){//五位数
//				this._skin.chongzhiHBtn.x=105;
//			}else if(UserData.Diamond/10 < 1000000){//五位数
//				this._skin.chongzhiHBtn.x=112;
//			}else if(UserData.Diamond/10 < 10000000){//五位数
//				this._skin.chongzhiHBtn.x=120;
//			}else{
//				this._skin.chongzhiHBtn.x=130;
//			}
			
			_skin.idTf.text = "ID:" + UserData.uid;
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