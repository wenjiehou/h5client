package modules.game.majiangGame.view
{
	import modules.game.majiangGame.view.majiangPart.BaidaPart;
	import modules.game.majiangGame.view.majiangPart.ChiSelePart;
	import modules.game.majiangGame.view.majiangPart.ClockPart;
	import modules.game.majiangGame.view.majiangPart.HandleBtnsPart;
	import modules.game.majiangGame.view.majiangPart.HandleEffPart;
	import modules.game.majiangGame.view.majiangPart.HandlePart;
	import modules.game.majiangGame.view.majiangPart.HupaiTipPart;
	import modules.game.majiangGame.view.majiangPart.MajiangControlTipPage;
	import modules.game.majiangGame.view.majiangPart.OutputPart;
	import modules.game.majiangGame.view.majiangPart.PengGangPart;
	import modules.game.majiangGame.view.majiangPart.ShaiziPart;
	import modules.game.majiangGame.view.majiangPart.huaPart.HuaPart;
	
	import ui.mainGame.MajiangPageUI;

	/**这个是麻将的部分*/
	public class MajiangPage
	{
		protected var _skin:MajiangPageUI;
		
		/**玩家手上的牌*/
		public var handPart:HandlePart;
		/**碰杠的牌*/
		public var pengGangPart:PengGangPart;
		/**打出去的牌*/
		public var outputPart:OutputPart;
		/**花牌*/
		public var huaPart:HuaPart;
		/**玩家提示胡牌*/
		public var hupaiTipPart:HupaiTipPart;
		
		/**玩家操作的按钮*/
		public var handleBtns:HandleBtnsPart;
		
		/**中间的时间*/
		public var clockPart:ClockPart;
		
		/**碰杠胡听的小动画*/
		public var handleEffPart:HandleEffPart;
		
		/**玩家操作的提示*/
		public var _majiangControlTipPage:MajiangControlTipPage;
		
//		/**玩家抓码提示*/
//		public var zhuamaPage:ZhuamaPage;
		
		public var chiSelePage:ChiSelePart;
		
		public var baidaPart:BaidaPart;
		
//		public var gangtouPage:GangtouPage;
		
		public var shaiziPart:ShaiziPart;
		
		
		
		public function MajiangPage(skin:MajiangPageUI)
		{
			if(skin)
			{
				_skin = skin;
				_skin.mouseThrough = true;
				
				handPart = new HandlePart(_skin.bottomHandlePart,_skin.rightHandlePart,_skin.topHandlePart,_skin.leftHandlePart);
				pengGangPart = new PengGangPart(_skin.bottomPengGangPart,_skin.rightPengGangPart,
					_skin.topPengGangPart,_skin.leftPengGangPart);
				outputPart = new OutputPart(_skin.bottomOutputPart,_skin.rightOutputPart,_skin.topOutputPart,_skin.leftOutputPart,
				[_skin.bottomTempPopcard,_skin.rightTempPopcard,_skin.topTempPopcard,_skin.leftTempPopcard]);
				handleBtns = new HandleBtnsPart(_skin.handleBtns);
				huaPart = new HuaPart(_skin.bottomHuaPart,_skin.rightHuaPart,_skin.topHuaPart,_skin.leftHuaPart);
				
				hupaiTipPart = new HupaiTipPart(_skin.bottomHuTip,_skin.rightHuTip,_skin.tophuTip,_skin.leftHuTip);
								
				clockPart = new ClockPart(_skin.clockPart);								
				handleEffPart = new HandleEffPart(_skin.handleEffPart);
				
				_majiangControlTipPage = new MajiangControlTipPage(_skin.controlTip);
				
//				zhuamaPage = new ZhuamaPage(_skin.zhuamaPart);
				
				chiSelePage = new ChiSelePart(_skin.chiSelePart);
				
				baidaPart = new BaidaPart(_skin.baidaPart);
				
//				gangtouPage = new GangtouPage(_skin.feigangtouPart,_skin.bottomGangtou,_skin.rightGangtou,
//					_skin.topGangtou,_skin.leftGangtou);
				
				shaiziPart = new ShaiziPart(_skin.shaiziPart);
			}
		}
		
		public function get skin():MajiangPageUI
		{
			return _skin;
		}

		public function showControlTip(message:String):void
		{
			if(_majiangControlTipPage)
			{
				_majiangControlTipPage.show(message);
			}
		}
		
		public function hideControlTip():void
		{
			_majiangControlTipPage.hide();
		}
		
		public function showEffByPos(pos:int,type:int):void
		{
			handleEffPart.showEffByPos(pos,type);
		}
		
		public function setChairNum(num:int):void
		{
			handPart.setChairNum(num);
			pengGangPart.setChairNum(num);
			outputPart.setChairNum(num);
			huaPart.setChairNum(num);
			clockPart.setChairNum(num);
			handleEffPart.setChairNum(num);
//			gangtouPage.setChairNum(num);
			shaiziPart.setChairNum(num);
		}
		
		public function reset():void
		{
			handPart.reset();
			pengGangPart.reset();
			outputPart.reset();
			huaPart.reset();
			clockPart.reset();
			_majiangControlTipPage.reset();
			handleBtns.reset();
			hupaiTipPart.reset();
//			zhuamaPage.reset();
			chiSelePage.reset();
			baidaPart.reset();
//			gangtouPage.reset();
			shaiziPart.reset();
		}
		
		/**显示自摸的动画*/
		public function showZimoAni(pos:int):void
		{
			handPart.showZimoShandian(pos);
		}
		
		/**显示点炮胡动画*/
		public function showDianPaoHuAni():void
		{
			outputPart.showDianPaoHuAni();
		}
		
		/**显示一张补花的牌*/
		public function showBuhua(cardIdx:int,pos:int,needShowEff:Boolean = true,isMopai:Boolean = false,isSound:Boolean=true):void
		{
			huaPart.showBuhuaCard(cardIdx,pos,needShowEff,isMopai,isSound);
		}
	}
}