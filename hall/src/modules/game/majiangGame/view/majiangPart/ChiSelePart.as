package modules.game.majiangGame.view.majiangPart
{
	
	import laya.events.Event;
	
	import modules.game.GameModule;
	import modules.game.majiangGame.controller.MajiangGameController;
	import modules.game.majiangGame.model.MajiangModel;
	import modules.game.majiangGame.view.MajiangGameView;
	import modules.game.majiangGame.view.card.BaseCard;
	import modules.game.majiangGame.view.card.outputCard.BottomOutputCard;
	
	import net.Message;
	import net.ProtoMessage;
	
	import ui.mainGame.majiangParts.ChiSelePartUI;

	public class ChiSelePart
	{
		protected var skin:ChiSelePartUI;
		
		protected var seleCards:Vector.<BaseCard> = new Vector.<BaseCard>(6);
		
		protected var bgW:int;
		
		public function ChiSelePart(skin:ChiSelePartUI)
		{
			this.skin = skin;
							
			bgW = skin.backimg.width;
			
			init();
			Laya.stage.on(Event.CLICK,this,onClickthis);
			hide();
		}
		private function onClickthis(e:Event):void
		{
			trace("taegt:" , e.currentTarget);
		}
		protected function init():void
		{
			var i:int,len:int = seleCards.length;
			for(i=0;i<len;i++)
			{
				seleCards[i] = new BottomOutputCard(skin["card"+i]);
			}
			
			seleCards[0].skin.on(Event.CLICK,this,onClickChi0);
			seleCards[1].skin.on(Event.CLICK,this,onClickChi0);
			seleCards[2].skin.on(Event.CLICK,this,onClickChi1);
			seleCards[3].skin.on(Event.CLICK,this,onClickChi1);
			seleCards[4].skin.on(Event.CLICK,this,onClickChi2);
			seleCards[5].skin.on(Event.CLICK,this,onClickChi2);
//			skin.chi1.on(Event.CLICK,this,onClickChi1);
//			skin.chi2.on(Event.CLICK,this,onClickChi2);
			
		}
		
		protected function onClickChi0(e:Event):void
		{
			chi(seleCards[0].cardIdx,seleCards[1].cardIdx);
			hide();
		}
		
		protected function onClickChi1(e:Event):void
		{
			chi(seleCards[2].cardIdx,seleCards[3].cardIdx);
			hide();
		}
		
		protected function onClickChi2(e:Event):void
		{
			chi(seleCards[4].cardIdx,seleCards[5].cardIdx);
			hide();
		}
		
		protected function get view():MajiangGameView
		{
			return GameModule.instance.gameContext.view;
		}
		
		protected function get controller():MajiangGameController
		{
			return GameModule.instance.gameContext.controller;
		}
		
		protected function get model():MajiangModel
		{
			return GameModule.instance.gameContext.model;
		}
		
		protected function chi(card0:int,card1:int):void
		{		
			var cid1:int = view.majiangPage.outputPart.getCurOutputCardIdx();
			var selfCards:Array = model.allCardsVec[model.selfChairPos].concat();
			
			var defcid:int,i:int,len:int = selfCards.length;
			
			for(i=len-1;i<len;i--)
			{
				if(selfCards[i] != card0 && selfCards[i] != card1)
				{
					defcid = selfCards[i];
					break;
				}
			}
			
			var chiObj:Object = {SID:UserData.SID,CID1:cid1-1,CID2:card0-1,CID3:card1-1,DefCID:defcid-1};
			controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Chow,chiObj));
			
			GameModule.instance.gameContext.view.majiangPage.handleBtns.reset();
		}
		
		public function showCanChiCards(arr:Array):void
		{
			show();
			
			var gap:int = 50;
			var singleW:int = skin.chi0.width;
			
			var i:int;
			var len:int = arr.length;
			
			for(i=0;i<len;i++)
			{
				skin["chi"+i].visible = true;
				(arr[i] as Array).sort(model.compareFunction);
				
				seleCards[i*2].setCardImg(arr[i][0]);
				skin["chi"+i].x = 19 + (gap+ singleW)*i;
				seleCards[i*2+1].setCardImg(arr[i][1]);
			}
			
			for(i=len;i<3;i++)
			{
				skin["chi"+i].visible = false;
			}
			
			skin.backimg.width = 38 + singleW*len + gap*(len-1);
			
//			switch(len)
//			{
//				case 1:
//					skin.backimg.width = gap+ singleW//bgW - 2*(gap+ singleW);
//					break;
//				case 2:
//					skin.backimg.width = bgW - (gap+ singleW);
//					break;
//				case 3:
//					skin.backimg.width = bgW;
//					break;
//			}
		}
		
		public function show():void
		{
			skin.visible = true;
		}
		
		public function hide():void
		{
			skin.visible = false;
		}
		
		public function reset():void
		{
			hide();
		}
	}
}