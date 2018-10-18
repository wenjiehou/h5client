package modules.game.majiangGame.view.playerInfoPart
{
	
	import common.event.EventCenter;
	import common.view.PopBox;
	
	import laya.ani.swf.MovieClip;
	import laya.display.Animation;
	import laya.display.Sprite;
	import laya.events.Event;
	import laya.ui.Box;
	import laya.ui.Button;
	import laya.ui.Image;
	import laya.ui.Label;
	import laya.ui.View;
	import laya.utils.Handler;
	import laya.utils.Tween;
	
	import manager.TextManager;
	
	import modules.game.GameModule;
	import modules.game.majiangGame.controller.MajiangGameController;
	import modules.game.majiangGame.model.MajiangModel;
	
	import net.Message;
	import net.ProtoMessage;

	public class BasePlayerInfoItem
	{
		protected var needPiao:Boolean = false;
		
		protected var _skin:View;
		
//		public var huaTf:Label;
		
		public var zhenghuaBox:Box;
		public var yehuaBox:Box;
		public var huaTf_z:Label;
		public var huaTf_y:Label;
		public var huaImg_z:Image;
		public var huaImg_y:Image;
		
		public var headImg:Image;
		public var nameTf:Label;
		public var recordTf:Label;
		public var readyImg:Image;
		public var tingpaiImg:Image;
		public var gangEff:Image;
		public var tirenBtn:Button;
		public var sitDownBtn:Button;
		public var offlineTf:Label;
		
		public var fenshuTf:Label;

		public var voice:View;
		
		private var headw:Number=0,headh:Number=0;
		
		public var dir:int = 0;
		
		protected var expressImg:Image;
		protected var expressMov:MovieClip;
		private var expressUrl:String = "res/swfs/Emoticon_";
		
		/**游戏开始之前显示的打的漂图片*/
		protected var piaoImg:Image;
		
		protected var playingPiaoImg:Image;
		protected var offlineimg:Image;

		public function BasePlayerInfoItem(skin:View)
		{
			_skin = skin;
			init();
		}
		
		protected function init():void
		{
//			huaTf = _skin["huaTf"];
//			huaTf.visible = false;
//			public var zhenghuaBox:Box;
//			public var yehuaBox:Box;
//			public var huaTf_z:Label;
//			public var huaTf_y:Label;
			_skin.mouseThrough = true;
			_skin["haveBox"].mouseThrough = true;
			zhenghuaBox=_skin["zhenghuaBox"];
			yehuaBox=_skin["yehuaBox"];
			huaTf_z=_skin["huaTf_z"];
			huaTf_y=_skin["huaTf_y"];
			huaImg_z=_skin["huaZhenhua"];
			huaImg_y=_skin["huaYehua"];
			zhenghuaBox.visible=false;
			yehuaBox.visible=false;
			huaTf_z.visible=true;
			huaTf_y.visible=true;
			huaImg_y.visible=false;
			huaImg_z.visible=true;
			offlineTf = _skin["offlineTf"];
			offlineTf.overflow = "visible";

			piaoImg = _skin["piaoImg"];
			playingPiaoImg = _skin["playingPiaoImg"];
			
			headImg = _skin["headImg"];
			
			nameTf = _skin["nameTf"];
			
			
			
			recordTf = _skin["recordTf"];
			readyImg = _skin["readyImg"];
			voice = _skin["voice"];
			tingpaiImg = _skin["mingpaiPic"];
			gangEff = _skin["gangEff"];
			fenshuTf = _skin["fenshuTf"];
			tirenBtn = _skin["tirenBtn"];
			expressImg = _skin["express"];
			offlineimg = _skin["offline"];
			sitDownBtn = _skin["sitdownBtn"];
			
			
			tirenBtn.visible=false;
			voice.visible = false;
			offlineimg.visible = false;
			headw=headImg.width;
			headh=headImg.height;
			
//			loadMingEff();
			loadGangEff();
			loadExpressMov();
			
			tirenBtn.on(Event.CLICK,this,onClickTiren);
			sitDownBtn.on(Event.CLICK,this,onClickSitdown);
		}

		protected function onClickSitdown(e:Event):void
		{
			if (!UserData.isCanSitdown) 
			{
				return	
			}
			if(model.isSelfSitDown)
			{
				onConFirm(0);
				return;
			}
			else if(model.majiangMsgs.ACK_RoomInfo.RoundCount > 0)
			{
				QuickUtils.popMessage("接替之前的玩家进行游戏不收费，祝您游戏愉快！");
				onConFirm(0);
				return;
			}
			var info:Object = model.majiangMsgs.ACK_RoomInfo;
			var rule:Array = info.Rule;
			var obj:Object = AppConfig.getRule(rule[1]);
			
			var typeStr:String = "";
			
			if(obj.type == 0)//局数
			{
				typeStr = "局数";
			}
			else
			{
				typeStr = "时间"; 
			}
			
			var str:String = "本游戏工具为收费软件，按游戏"+typeStr+"扣除钻石。坐下不扣钱，开始游戏后才会扣钱，开始游戏后不予退还。是否花费" + AppConfig.costRule[UserData.roomtype][rule[1]]/4 +"钻石加入牌局？";
			
			QuickUtils.popMessageBox(str,PopBox.BTN_LABEL_QUEDINGQUXIAO,this,onConFirm,"提示","left");
		}
		
		private function onConFirm(idx:int):void
		{
			if(idx == 0)
			{
				if(!UserData.isCanSitdown)return
				var sitDownObj:Object = {sid:UserData.SID,index:model.getChairPosByDir(dir)};
				controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.MSG_Sitdown,sitDownObj));
				UserData.isCanSitdown=false;
				Laya.timer.once(400,this,this.restCanSitdown)
			}
		}
		private function restCanSitdown():void
		{
			UserData.isCanSitdown=true;
			Laya.timer.clear(this,this.restCanSitdown)
		}
		
		
		
		protected function onClickTiren(e:Event):void
		{
//			message KickRequest {//405
//				int32 pos = 1; //被踢掉的玩家pos
//			} 
			if(model.isSelfSitDown == false)
			{
				QuickUtils.popMessage("围观用户没有权限踢人");
				return;
			}
			
			if(model.isGameStart)
			{
				QuickUtils.popMessageBox("踢人会导致当前游戏流局，确认踢人吗？",PopBox.BTN_LABEL_QUEDINGQUXIAO,this,onConFirmTiren,"提示","left");
			}
			else
			{
				onConFirmTiren(0);
			}
		}
		
		protected function onConFirmTiren(idx:int):void
		{
			if(idx == 0)
			{
				var  kickObj:Object = {pos:model.getChairPosByDir(dir)};
				controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.KickRequest,kickObj));
			}
		}
		
//		protected var mingEffAni:Animation;
//		
//		protected function loadMingEff():void
//		{
//			tingpaiImg.removeChildren();
//			tingpaiImg.skin= "";
//			
//			mingEffAni = new Animation();
//			mingEffAni.loadAtlas("res/animations/亮牌火焰特效.json");
//			mingEffAni.stop();
//			tingpaiImg.addChild(mingEffAni);
//		}
//		
		protected var gangAni:Animation;
		
		protected function loadGangEff():void
		{
			gangEff.removeChildren();
			gangEff.skin= "";
			
			gangAni = new Animation();
			
			gangAni.loadAtlas("res/animations/gangaddEff.json");
			trace("loadGangEff///////////////");
			gangAni.stop();
			gangEff.addChild(gangAni);
			
			gangAni.on(Event.COMPLETE,this,onGangAniComp);
		}
		
		protected function loadExpressMov():void
		{
			expressImg.removeChildren();
			expressImg.skin = "";
			
			expressMov = new MovieClip();
			expressMov.width = 200;
			expressMov.height = 200;
			expressImg.addChild(expressMov);
			expressMov.on(Event.COMPLETE,this,onCompleteMov);

		}
		
		public function showExpress(index:int):void
		{
			
			if(expressMov != null)
			{
				expressMov.alpha = 1;
				Tween.clearAll(expressMov);
				if(expressMov.parent)
					expressMov.removeSelf();
			}
			//playerInfo2
			expressMov = new MovieClip();
			expressMov.width = 200;
			expressMov.height = 200;
//			if(index==2){
				expressMov.x=-85;
				expressMov.y=-85;
//			}
			expressImg.addChild(expressMov);
//			
			expressMov.visible = true;
			expressMov.alpha = 1;
			if(index < 10)
				expressMov.load(expressUrl+"0" + index + ".swf",true);
			else
				expressMov.load(expressUrl+index + ".swf",true);
			
			
			Tween.to(expressMov,{alpha:0.3},500,null,new Handler(this,onCompeteTween,[null]),2500);

		}
		private function onCompeteTween(obj:*):void
		{
			if(expressMov != null)
			{
				expressMov.visible = false;
				expressMov.alpha = 1;
				if(expressMov.parent)
					expressMov.removeSelf();
				expressMov = null;
			}
		}
		
		private function onCompleteMov():void
		{

		}
		protected function onGangAniComp(e:Event):void
		{
			gangEff.visible = false;
			gangAni.stop();
		}
		
		/**分数变化时播放*/
		public function playGangEff(record:int):void
		{
			if(record == 0)
			{
				return;
			}
			
			if(record > 0)
			{
				gangEff.visible = true;
				gangAni.play(0,false);
				
				fenshuTf.color = "#00ff00";
			}
			else
			{
				gangEff.visible = false;
				gangAni.stop();
				
				fenshuTf.color = "#ff0000";
			}
			
			fenshuTf.visible = true;
			fenshuTf.text = record > 0 ? "+" + record : record + "";
			
			fenshuTf.y = 104;
			
			Tween.to(fenshuTf,{y:64},2000,null,Handler.create(this,onFenshuEffComp),2);
			
			
		}
		
		protected function onFenshuEffComp():void
		{
			fenshuTf.visible = false;
		}
		
		
		public function update(obj:Object,needFlyImg:Boolean=false):void
		{
			sitDownBtn.visible = false;
			_skin["haveBox"].visible = true;
			if(obj.score == undefined)
			{
				obj.score = 0;
			}
			
			nameTf.text = obj.nickname;//"lll哈😍😍😍fhxiaodudu"//
			if(UserData.Rule[4] == UserData.Coin_type){//金币场
				recordTf.text  = obj.Coin;
			}
			else{
				recordTf.text = ""+obj.score;
			}
			
//			recordTf.scaleX=recordTf.scaleY=0.5;
//			recordTf.x=0;
//			recordTf.y=-1;
//			if(obj.score>=0){
//				recordTf.font=TextManager.NumberYellowFont;
//				recordTf.text = ""+obj.score;
//				if(obj.score/10<1){
//					recordTf.x+=10+7
//				}else if(obj.score/10<10){
//					recordTf.x+=6+3
//				}else if(obj.score/10<100){
//					recordTf.x+=1
//				}else if(obj.score/10<1000){
//					recordTf.x+=-6+-1
//				}
//			}else{
//				recordTf.font=TextManager.NumberYellowFont;
//				recordTf.text = obj.score+"";
//				if(obj.score/10>-1){
//					recordTf.x+=10+-5
//				}else if(obj.score/10>-10){
//					recordTf.x+=6+-5
//				}else if(obj.score/10>-100){
//					recordTf.x+=0+-7
//				}else if(obj.score/10>-1000){
//					recordTf.x+=-6+-13
//				}
//			}
//			recordTf.text = obj.Diamond + "";
			if(UserData.uid==obj.uid){
				UserData.Diamond=obj.Diamond;
				UserData.score=obj.score;
				UserData.Coin = obj.Coin;
			}
			if(obj.readystate == 1)
			{
				if(model.isGameStart == false)
				{
					readyImg.visible = true;
				}
								
				//已经选择了加漂
				setPiaoValue(obj.piao);
				
				trace("obj.piao::" + obj.piao);
				
				showPiaoImage(model.isGameStart);
			}
			else
			{
				readyImg.visible = false;
				
				//他还没有选择加漂
				hidePiaoImage();
			}
			
			var pos:int = GameModule.instance.gameContext.model.getPlayerPosByUid(obj.uid);
			
			tingpaiImg.visible = GameModule.instance.gameContext.model.isTingVec[pos];
			
			_skin["chairPos"].text = "座位号："+ pos;
			_skin["chairPos"].visible = false;
			
//			if(tingpaiImg.visible)
//			{
//				mingEffAni.play();
//			}
//			else
//			{
//				mingEffAni.stop();
//			}
			
			//headImg.skin="common/默认头像.png";
			headImg.width=headw;
			headImg.height=headh;
			
			headImg.on(Event.CLICK,this,onShowUserInfo,[obj]);
			
			if(WX.splitStr(obj.Icon,"")[0]=='h')
			{
				var photo:Sprite=new Sprite();
				photo.loadImage(obj.Icon,0,0,headw,headh ,Handler.create(this,delayPhotoPhoto,[photo,photo]));//AppConfig.httpPhotoUrl+obj.uid
				photo.mouseEnabled=true;
				headImg.addChild(photo);
				
			}
			
//			headImg.skin="";
//			headImg.width=headw;
//			headImg.height=headh;
//			
//			var photo:Sprite=new Sprite();
//			photo.loadImage(obj.Icon,0,0,headw,headh,Handler.create(this,delayPhotoPhoto,[photo,photo]));//AppConfig.httpPhotoUrl+obj.uid
//			photo.mouseEnabled=true;
//			headImg.addChild(photo);
//			photo.on(Event.CLICK,this,onShowUserInfo,[obj]);
			
//			if(player.Icon != "")
//			{
//				var photo:Sprite=new Sprite();
//				photo.loadImage(obj.Icon,0,0,headw,headh);//AppConfig.httpPhotoUrl+obj.uid
//				photo.mouseEnabled=true;
//				headImg.addChild(photo);
//			}
			
			
			var isGray:Boolean = false;
			if(obj.state == 2)
			{
				isGray = true;
			}
			
			setHeadGray(isGray,true,obj.offlineTime);
			updateTirenBtn();
			
			if(needFlyImg)
			{
				playFlyHeadImg(model.getChairDirByPos(obj.prePos));
			}
			
		}
		
		protected function onShowUserInfo(obj:Object):void
		{
			UserInfoPage.instance.show(obj.uid,obj.ip,obj.Icon);
		}
		
		private function delayPhotoPhoto(photo:Sprite,mask:Sprite):void{
			//photo.mask=mask; 
		}
		public function updateGolds(obj:Object):void
		{
			recordTf.x=0;
			recordTf.y=1;
			var preScore:int = recordTf.text as int;
			recordTf.scaleX=recordTf.scaleY=0.6;
			recordTf.x=0;
			recordTf.y=-2;
			if(obj.score>=0){
				recordTf.font=TextManager.NumberYellowFont;
				recordTf.text = ""+obj.score;
				if(obj.score/10<1){
					recordTf.x+=10+4
				}else if(obj.score/10<10){
					recordTf.x+=6+0
				}else if(obj.score/10<100){
					recordTf.x+=0+-2
				}else if(obj.score/10<1000){
					recordTf.x+=-6+-4
				}
			}else{
				recordTf.font=TextManager.NumberYellowFont;
				recordTf.text = obj.score+"";
				if(obj.score/10>-1){
					recordTf.x+=10+-8
				}else if(obj.score/10>-10){
					recordTf.x+=6+-10
				}else if(obj.score/10>-100){
					recordTf.x+=0+-12
				}else if(obj.score/10>-1000){
					recordTf.x+=-6+-16
				}
			}
			playGangEff(obj.score-preScore);
		}
		
		public function updateHua(pos:int):void
		{
			
			zhenghuaBox.visible = false;
			yehuaBox.visible = false;
			huaTf_z.scaleX=huaTf_z.scaleY=0.8;
			huaTf_y.scaleX=huaTf_y.scaleY=0.8;
			
			huaTf_z.font=TextManager.NumberFlowerFont;
			huaTf_y.font=TextManager.NumberFlowerFont;
			if(model.getHuaArr(0,pos).length>0 && model.getHuaArr(1,pos).length>0)//正花野花
			{
				huaImg_z.visible=true;
				huaImg_y.visible=false;
				zhenghuaBox.visible=true;
				huaTf_z.text="x"+model.getHuaArr(0,pos).length;
				yehuaBox.visible=true;
				huaTf_y.text="x"+model.getHuaArr(1,pos).length;
			}else//没有花
			{
				if (model.getHuaArr(0,pos).length>0) //正花
				{
					huaImg_z.visible=true;
					huaImg_y.visible=false;
					zhenghuaBox.visible=true;
					huaTf_z.text="x"+model.getHuaArr(0,pos).length;
				}else
				if (model.getHuaArr(1,pos).length>0) //野花
				{
					huaImg_z.visible=false;
					huaImg_y.visible=true;
					zhenghuaBox.visible=true;
					huaTf_z.text="x"+model.getHuaArr(1,pos).length;
				}
			}
			
		}
		
		public function show():void
		{
			_skin.visible = true;
		}
		
		public function hide():void
		{
			_skin.visible = false;
		}
		
		public function reset(needHuaHide:Boolean = false):void
		{
//			if(UserData.roomtype == 11)
//			{
//				needPiao = true;
//			}
//			else
//			{
//				needPiao = false;
//			}
			
			//hide();
			_skin["haveBox"].visible = false;
			sitDownBtn.visible = true;
			
			_skin["zhuangImg"].visible = false;
			readyImg.visible = false;
			tingpaiImg.visible = false;
			gangEff.visible = false;
			fenshuTf.visible = false;
			
			if(needHuaHide)
			{
				zhenghuaBox.visible=false;
				yehuaBox.visible=false;
			}

			
//			huaTf.visible = false;
//			mingEffAni.stop();
			gangAni.stop();
			
			piaoImg.visible = false;
			playingPiaoImg.visible = false;
			_skin["notPiaoTf"].visible = false;
			tirenBtn.visible = false;
			
			voice.visible=false;
			voice["ani"].stop();
			_skin["jiabeiImg"].visible = false;
		}
		
		/**游戏开始之后，显示庄家位置 庄下对上*/
		public function showZhuang(pos:int):void
		{
			_skin["zhuangImg"].visible = true;
			
			var skinStr:String = "";
			
			var refZhuang:int = model.getRefZhuangPos(pos);
			
			switch(refZhuang)
			{
				case 0:
					skinStr = "gameCommon/zhuang.png";
					break
				case 1:
					//skinStr = "gametable/下.png";
					break;
				case 2:
					//skinStr = "gametable/对.png";
					break;
				case 3:
					//skinStr = "gametable/上.png";
					break;
			}
			
			(_skin["zhuangImg"] as Image).skin = skinStr;
			
			if(UserData.roomtype != 11)
			{
				if(refZhuang != 0)
				{
					_skin["zhuangImg"].visible = false;
				}
			}
		}
		
		public function hideZhuang():void
		{
			_skin["zhuangImg"].visible = false;
		}
		
		public function hideReadySimbol():void
		{
			readyImg.visible = false;
		}
		
		public function showTingImg():void
		{
			tingpaiImg.visible = true;
			
			//mingEffAni.play();
		}
		
		public function showReady():void
		{
			readyImg.visible = true;
			
		}
		
		/**设置显示漂的倍数*/
		public function setPiaoValue(value:int):void
		{
			if(needPiao)
			{
//				piaoImg.skin = "gametable/漂" + value +".png";
//				playingPiaoImg.skin = "gametable/漂" + value +".png";
			}
		}
		
		/**显示漂图标*/
		public function showPiaoImage(isInGame:Boolean):void
		{
			if(needPiao)
			{
				if(isInGame)
				{
					playingPiaoImg.visible = true;
					piaoImg.visible = false;
				}
				else
				{
					playingPiaoImg.visible = false;
					piaoImg.visible = true;
				}
				
				_skin["notPiaoTf"].visible = false;
			}
			
		}
		
		/**影藏漂图标*/
		public function hidePiaoImage():void
		{
			if(needPiao)
			{
				playingPiaoImg.visible = false;
				piaoImg.visible = false;
				
				_skin["notPiaoTf"].visible = true;
			}
		
		}
		
		
//		/**更新踢人按钮*/
//		public function showTirenBtn(isShow:Boolean):void
//		{
//			tirenBtn.visible = isShow;
//		}
		
		public function updateTirenBtn():void
		{
			var player:Object = model.playerByPos(model.getChairPosByDir(dir));
			if(player!=null)
			{
				tirenBtn.visible = player.canKick;
			}
			
		}
		
		protected function get model():MajiangModel
		{
			return GameModule.instance.gameContext.model;
		}
		
		protected function get controller():MajiangGameController
		{
			return GameModule.instance.gameContext.controller;   
		}
		
		public function setHeadGray(gray:Boolean,imediate:Boolean,offlineTime:int=0):void
		{
			if(gray && imediate)
			{
				_skin["offLineSp"].visible = true;
				headImg.filters = [QuickUtils.grayscaleFilter];
				offlineimg.visible = true;
				offlineTf.visible = true;
				offlineTf.text = offlineTime+"";
				startCutDownOffline();
			}
			else if(gray && !imediate)
			{
				_skin["offLineSp"].visible = true;
				Laya.timer.once(10000, this, setGrayhead);
			}
			else
			{
				_skin["offLineSp"].visible = false;
				tirenBtn.visible = false;
				headImg.filters = null;
				offlineimg.visible = false;
				offlineTf.visible = false;
				Laya.timer.clear(this,setGrayhead);
				
				model.playerByPos(model.getChairPosByDir(dir)).canKick = false;
				
				stopCutDownOffline();
			}
		}
		
		protected function startCutDownOffline():void
		{
			EventCenter.instance.on(EventCenter.ON_LITTLETIMEER,this,onCutdown);
		}
		
		
		protected function stopCutDownOffline():void
		{
			EventCenter.instance.off(EventCenter.ON_LITTLETIMEER,this,onCutdown);
			offlineTf.visible = false;
		}
		
		protected function onCutdown():void
		{

			if(model.playerByPos(model.getChairPosByDir(dir)) == null)
			{
				return;
			}
			
			model.playerByPos(model.getChairPosByDir(dir)).offlineTime --;
			if(model.playerByPos(model.getChairPosByDir(dir)).offlineTime <= 0)
			{
				model.playerByPos(model.getChairPosByDir(dir)).offlineTime = 0;
				stopCutDownOffline();
			}
			
			if(model.playerByPos(model.getChairPosByDir(dir)).offlineTime == NaN || model.playerByPos(model.getChairPosByDir(dir)).offlineTime == undefined)
			{
				model.playerByPos(model.getChairPosByDir(dir)).offlineTime = 0;
			}
			
			offlineTf.text = model.playerByPos(model.getChairPosByDir(dir)).offlineTime + "";
		}
		
		private function setGrayhead():void
		{
			headImg.filters = [QuickUtils.grayscaleFilter];
			offlineimg.visible = true;
		}
		
		/***/
		protected function playFlyHeadImg(fromDir:int):void
		{
			
			var tweenTime:int = 500;
			switch(dir)
			{
				case 0:
					switch(fromDir)
					{
						case 1:
							Tween.from(_skin,{x:946,y:150},tweenTime);
							break;
						case 2:
							Tween.from(_skin,{x:199,y:47},tweenTime);
							break;
						case 3:
							Tween.from(_skin,{x:12,y:150},tweenTime);
							break;
					}
					break;
				case 1:
					switch(fromDir)
					{
						case 0://12,378
							Tween.from(_skin,{x:12,y:378},tweenTime);
							break;
						case 2:
							Tween.from(_skin,{x:202,y:46},tweenTime);
							break;
						case 3:
							Tween.from(_skin,{x:12,y:150},tweenTime);
							break;
					}
					break;
				case 2:
					switch(fromDir)
					{
						case 0:
							Tween.from(_skin,{x:-116,y:324},tweenTime);
							break;
						case 1:
							Tween.from(_skin,{x:820,y:96},tweenTime);
							break;
						case 3:
							Tween.from(_skin,{x:-116,y:96},tweenTime);
							break;
					}
					break;
				case 3:
					switch(fromDir)
					{
						case 0://12 378
							Tween.from(_skin,{x:12,y:378},tweenTime);
							break;
						case 1:
							Tween.from(_skin,{x:946,y:150},tweenTime);
							break;
						case 2:
							Tween.from(_skin,{x:199,y:47},tweenTime);
							break;
					}
					break;
			}
		}
	}
}