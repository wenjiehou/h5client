package modules.game.majiangGame.view.calculate
{
	import common.view.PopBox;
	
	import hall.HallModule;
	
	import laya.display.Sprite;
	import laya.events.Event;
	import laya.ui.Image;
	
	import modules.game.GameModule;
	import modules.game.majiangGame.model.MajiangModel;
	import modules.game.majiangGame.view.MajiangGameView;
	import modules.game.majiangGame.view.calculate.item.CalculatePerCardItem;
	import modules.game.majiangGame.view.calculate.item.CalculatePerItem;
	import modules.game.majiangGame.view.majiangPart.singlePart.handlePart.BottomSingleHandlePart;
	import modules.game.majiangGame.view.majiangPart.singlePart.pengGangPart.BottomSinglePengGangPart;
	import modules.game.majiangGame.view.playerInfoPart.PiaoSelePart;
	
	import net.Message;
	import net.ProtoMessage;
	
	import ui.mainGame.majiangParts.Newcalculate.NewCalculatePerPageUI;

	public class CalculatePerPart
	{
		protected var _skin:NewCalculatePerPageUI;
		
		protected var _huPengCards:BottomSinglePengGangPart;
		protected var _huHandleCards:BottomSingleHandlePart;
		
		protected var _items:Vector.<CalculatePerItem> = new Vector.<CalculatePerItem>(4);
		protected var _cardItems:Vector.<CalculatePerCardItem> = new Vector.<CalculatePerCardItem>(3);
		protected var headImg:Image;
		private var headw:Number=0,headh:Number=0;
		
		public function get isShow():Boolean
		{
			return _skin.visible;
		}
		
		
		public function CalculatePerPart(skin:NewCalculatePerPageUI)
		{
			_skin = skin;
			
			var i:int;
			var len:int = _items.length;
			
			for(i=0;i<len;i++)
			{
				_items[i] = new CalculatePerItem(_skin["player"+i]);
			}
			
			len = _cardItems.length;
			
			for(i=0;i<len;i++)
			{
				_cardItems[i] = new CalculatePerCardItem(_skin["item"+i]);
			}
			
			
			_skin.hideBtn.on(Event.CLICK,this,onClickHideBtn);
			_skin.readyBtn.on(Event.CLICK,this,onClickReadyBtn);
			_skin.confirmBtn.on(Event.CLICK,this,onClickConfirmBtn);
			_skin.closeBtn.on(Event.CLICK,this,onClickCloseBtn);
			
			headImg = _skin.headImg;
			headw = headImg.width;
			headh = headImg.height;
			
			_huPengCards = new BottomSinglePengGangPart(_skin.pengGangCards);
			_huHandleCards = new BottomSingleHandlePart(_skin.handCards,false);
			
			//var phone:Sprite=new Sprite();
			//phone.loadImage("gametable/默认头像2.png",0,0,0,0,Handler.create(this,delayPhoto,[phone,thisUser]));
			
			reset();
		}
		
		public function getPiaoSelePart():PiaoSelePart
		{
			return null;
//			return _PiaoSelePart;
		}
		
		protected function onClickHideBtn(e:Event):void
		{

			_skin.visible=false;
			view.calculatePage.showPerShowBtn();
		}
		
		protected function onClickReadyBtn(e:Event):void
		{
			var obj:Object = {sid:UserData.SID};
			GameModule.instance.gameContext.controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.User_Ready,obj));
			hide();
//			GameModule.instance.majiangGameContext.majiangGameController.resetSelf();
			
			
		}
		
		public function onClickConfirmBtn(e:Event=null):void
		{
			trace("点击了确定按钮，要跳到总的结算界面啦");
//			this.hide();
			//view.calculatePage.showRound();
			view.calculatePage.reset();
			QuickUtils.popMessageBox("房间已结束！",PopBox.BTN_ENDGAME,this,onConfirmEnd);
		}
		
		protected function onConfirmEnd(idx:int):void
		{
			if(idx == 0)
			{
				//跳转到战绩
				if(AppConfig.isNewHall)
				{
					QuickUtils.gotoHall(1);
				}
				else
				{
					GameModule.instance.gameContext.controller.endGameGotoHall();
					Laya.timer.callLater(this,gotoReport);
				}
			}
			else
			{
				//跳转到大厅
				if(AppConfig.isNewHall)
				{
					QuickUtils.gotoHall();
				}
				else
				{
					GameModule.instance.gameContext.controller.endGameGotoHall();
				}
//				
			}
		}
		
		protected function gotoReport():void{
//			
			HallModule.instance.hallContext.hallView.hallLayer.onRecord({"uniqueCode":UserData.uniqueCode});
			
			//EventCenter.instance.event(EventCenter.HALL_SHOW_REPORTVIEW,{gametype:UserData.roomtype,roomid:UserData.roomid});
		}
		
		protected function onClickCloseBtn(e:Event):void
		{
			hide();
		}
		
		public function timeOver():void
		{
			_skin.visible = true;
			_skin.readyBtn.visible = false;
			_skin.confirmBtn.visible = false;
			_skin.readyImg.visible = false;
			_skin.closeBtn.visible = false;
			if(model.isSelfSitDown)
			{
				_skin.confirmBtn.visible = true;
			}
			else
			{
				_skin.confirmBtn.visible = true;
			}
		}
		
		public function hideReadyBtn():void
		{
			
		}
		
		public function updateBtns():void
		{
			if(UserData.isReplay)
			{
				_skin.hideBtn.alpha = 0;
			}
			else
			{
				_skin.hideBtn.alpha = 1;
			}
			
			if(isShow == false || UserData.isReplay){
				_skin.readyImg.visible = false;
				_skin.readyBtn.visible=false;
				_skin.confirmBtn.visible = false;
				return;
			}
			
			
			
			_skin.readyBtn.visible = false;
			_skin.confirmBtn.visible = false;
			_skin.readyImg.visible = false;
			_skin.closeBtn.visible = false;
			if(model.isSelfSitDown)
			{
				if(model.majiangMsgs.ACKBC_Total.finished == undefined)
				{
					model.majiangMsgs.ACKBC_Total.finished = false;
				}
				if(model.majiangMsgs.ACKBC_Total.finished==true)
				{
					_skin.confirmBtn.visible = true;
					if(AppConfig.autoPlay)
					{
						onClickConfirmBtn(null);
					}
					
				}else{
					_skin.readyBtn.visible = true;
					_skin.readyImg.visible = true;
					
					if(AppConfig.autoPlay)
					{
						var jiesuanObj:Object = model.majiangMsgs.ACKBC_Total;
						if(jiesuanObj.Reward[0].score + jiesuanObj.Reward[1].score + jiesuanObj.Reward[2].score + jiesuanObj.Reward[3].score == 0)
						{
							onClickReadyBtn(null);
						}
						//onClickReadyBtn(null);
					}
					
				}
			}
			else
			{
				if(model.majiangMsgs.ACKBC_Total.finished==true)
				{
					_skin.confirmBtn.visible = true;
				}
				else
				{
					_skin.closeBtn.visible = true;
				}
			}
		}
		
		
		public function show():void
		{
			_skin.visible = true;
			updateBtns();
			
			var i:int;
			
			_huPengCards.reset();
			_huHandleCards.reset();
			
			if(model.isLiu)//流局显示
			{
				_skin.onePlayerBox.visible=false;
				_skin.playersBox.visible=false;
				
				_skin.liujuImg.visible = true;
				//_skin.headbg.visible=false;
				_skin.headImg.visible=false;//头像
				_skin.paixingTf.visible=false;//响炮
				_skin.taishuTf.visible=false;//台数
				for (i = 0; i < _items.length; i++) 
				{
					_items[i].update(i,true);
				}
			}
			else
			{
				_skin.liujuImg.visible = false;
				//_skin.headbg.visible=true;
				_skin.headImg.visible=true;//头像
				_skin.paixingTf.visible=true;//响炮
				_skin.taishuTf.visible=true;//台数
				
				var jiesuanObj:Object = model.majiangMsgs.ACKBC_Total;
				var huObj:Object = model.majiangMsgs.ACKBC_Win;
				var huPlayer:Object = model.playerByPos(jiesuanObj.WinSeat);
				//headImg.skin="common/默认头像.png";
				
				if(huObj.Seat.length == 1)
				{
					_skin.onePlayerBox.visible=true;
					_skin.playersBox.visible=false;
					
					if(huPlayer.Icon != "")
					{
						var photo:Sprite=new Sprite();
						photo.loadImage(huPlayer.Icon,0,0,headw,headh);//AppConfig.httpPhotoUrl+obj.uid
						photo.mouseEnabled=true;
						headImg.addChild(photo);
					}
					//显示牌
					updateCars(jiesuanObj.WinSeat);
					//显示牌型
					if(jiesuanObj.Msg && jiesuanObj.Msg[jiesuanObj.WinSeat])
					{
						_skin.paixingTf.text = jiesuanObj.Msg[jiesuanObj.WinSeat];
					}
					else
					{
						_skin.paixingTf.text = "";
					}
					
					if(jiesuanObj.Tai && jiesuanObj.Tai[jiesuanObj.WinSeat])
					{
						_skin.taishuTf.text = "（合计："+jiesuanObj.Tai[jiesuanObj.WinSeat]+"台）";
					}
					else
					{
						_skin.taishuTf.text = "";
					}
				}
				else
				{
					_skin.onePlayerBox.visible= false;
					_skin.playersBox.visible= true;
					
					for(i=0;i<_cardItems.length;i++)
					{
						_cardItems[i].reset();
					}
					
					//(huObj.Seat as Array).sort(model.compareByZhuang);
					var arr:Array = huObj.Seat;
					var temp:int;
					
					for(i=0;i<arr.length-1;i++)
					{
						for(var j:int=0;j<arr.length-1-i;j++)
						{
							if(model.getRefZhuangPos(arr[j]) > model.getRefZhuangPos(arr[j+1]))
							{
								temp = arr[j+1];
								arr[j+1] = arr[j];
								arr[j] = temp;
							}
						}
						
					}
					
					
					for(i=0;i<huObj.Seat.length;i++)//model.getRefZhuangPos(i)
					{
						_cardItems[i].update(huObj.Seat[i]);	
					}
				}
				
				
				
				
				//_skin.taishuTf.visible = false;
				
				var player:Object;
				//显示下面每个玩家
				for(i=0;i<_items.length;i++)
				{
					
					player = model.playerByPos(i);
					player.isHu = false;
					player.isDianPao = false;
					
					if(UserData.isReplay)
					{
						jiesuanObj.Reward[i].total_score = jiesuanObj.Reward[i].total_score != undefined ? jiesuanObj.Reward[i].total_score : 0 ;
						jiesuanObj.Reward[i].totalScore = jiesuanObj.Reward[i].total_score;
					}
					
					player.zongchengji = jiesuanObj.Reward[i].score != undefined ? jiesuanObj.Reward[i].score : 0;
					
					
					if(UserData.Rule[4] == UserData.Coin_type){//金币场
						player.Coin = jiesuanObj.Reward[i].totalScore != undefined ? jiesuanObj.Reward[i].totalScore : 0;
					}
					player.score=jiesuanObj.Reward[i].totalScore != undefined ? jiesuanObj.Reward[i].totalScore : 0;
					if((huObj.Seat as Array).indexOf(i) != -1)
					{
						player.isHu = true;
					}
					else if(i == huObj.TSeat)
					{
						player.isDianPao = true;
					}
						
					_items[model.getRefZhuangPos(i)].update(i);
				}
				
				view.playerInfoPage.updatePlayerInfos(model.playerInfoVec,false);
			}
		}
		
		private function updateCars(pos:int):void
		{
			var info:Object = model.majiangMsgs.ACKBC_Total;
			if(info.attached)
			{
				var attachInfo:Object = JSON.parse(info.attached);
			}

			
			//先把这个位置玩家碰杠的牌展示出来
			var totalPengGangNum:int = 0;
			
			var i:int = 0;
			var len:int;
			
			if(model.anGangVec[pos])
			{
				len = model.anGangVec[pos].length;
			}
			else
			{
				len = 0;
			}
			
			for(i=0;i<len;i++)
			{
				var dir:int = (model.chairNum + model.anGangFromVec[pos][i] - pos)%model.chairNum;
				_huPengCards.gang(model.anGangVec[pos][i],1,dir,model.anGangFromVec[pos][i],pos);
			}
			
			totalPengGangNum += len;
			
			if(model.mingGangVec[pos])
			{
				len = model.mingGangVec[pos].length;
			}
			else
			{
				len = 0;
			}
			
			for(i=0;i<len;i++)
			{
				var dir1:int = (model.chairNum + model.mingGangFromVec[pos][i] - pos)%model.chairNum;
				_huPengCards.gang(model.mingGangVec[pos][i],2,dir1,model.mingGangFromVec[pos][i],pos);
				
				if(attachInfo)
				{
					if(pos == attachInfo.index && parseInt(attachInfo.cid)+1 == model.mingGangVec[pos][i])
					{
						_huPengCards.setChengbaoGang(model.mingGangVec[pos][i]);
					}
				}
				
			}
			totalPengGangNum += len;
			
			if(model.chiVec[pos])
			{
				len = model.chiVec[pos].length;
			}
			else
			{
				len = 0;
			}
			for(i=0;i<len;i++)
			{
				_huPengCards.chi(model.chiVec[pos][i],model.chiFromVec[pos][i],pos);
			}
			totalPengGangNum += len;
			
			
			if(model.pengVec[pos])
			{
				len = model.pengVec[pos].length;
			}
			else
			{
				len = 0;
			}
			
			for(i=0;i<len;i++)
			{
				var dir:int = (model.chairNum + model.pengFromVec[pos][i] - pos)%model.chairNum;
				_huPengCards.peng(model.pengVec[pos][i],dir,model.pengFromVec[pos][i],pos);
			}
			totalPengGangNum += len;
			
			_skin.handCards.x = _skin.pengGangCards.x + totalPengGangNum*20;
			
			_huHandleCards.setPreThirteenCards(model.allCardsVec[pos],model.getChairDirByPos(pos),false,false);
			_huHandleCards.setTheFourteenCard(model.majiangMsgs.ACKBC_Total.WinCard+1,model.getChairDirByPos(pos));
			_huHandleCards.canControl = false;
		}
		
		private function delayPhoto(mask:Sprite,obj:Object):void
		{
			var photo:Sprite=new Sprite();
			photo.loadImage(obj.Icon,0,0,headw,headh);//AppConfig.httpPhotoUrl+obj.uid
			photo.mouseEnabled=true;
			headImg.addChild(photo);
		}
		
		public function reset():void
		{
			var i:int;
			var len:int = _items.length;
			
			for(i=0;i<len;i++)
			{
				_items[i].reset();
			}
			
			for(i=0;i<_cardItems.length;i++)
			{
				_cardItems[i].reset();
			}
			
			_skin.visible = false;
		}
		
		public function hide():void
		{
			_skin.visible = false;
		}
		
		protected function get model():MajiangModel
		{
			return GameModule.instance.gameContext.model;
		}
		
		protected function get view():MajiangGameView
		{
			return GameModule.instance.gameContext.view;
		}
	}
}