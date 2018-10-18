package modules.game.majiangGame.view.majiangPart.huaPart
{	

	import common.event.EventCenter;
	
	import laya.maths.Point;
	import laya.ui.Image;
	import laya.ui.View;
	import laya.utils.Ease;
	import laya.utils.Handler;
	import laya.utils.Timer;
	import laya.utils.Tween;
	
	import modules.game.GameModule;
	import modules.game.majiangGame.controller.MajiangGameController;
	import modules.game.majiangGame.model.MajiangModel;
	import modules.game.majiangGame.view.MajiangGameView;
	import modules.game.majiangGame.view.card.hupartCard.HuaItemCard;
	
	import ui.mainGame.majiangParts.huaBottomPartUI;
	import ui.mainGame.majiangParts.huaLeftPartUI;
	import ui.mainGame.majiangParts.huaRightPartUI;
	import ui.mainGame.majiangParts.huaTopPartUI;
	

	public class BaseBuhuaPart
	{
		protected var _skin:View;
		
		protected var _cardsVec:Vector.<HuaItemCard> = new Vector.<HuaItemCard>(15);
	
	
		/**当前补花补到第几张*/
		protected var _curIdx:int = 0;
		
		private var _itemClip:HuaItemCard;//动画的牌
		private var _tweenArr:Array;//保存花
		private var _huaBg:Image;

		public function BaseBuhuaPart(skin:View)
		{
			this._skin = skin;
			
			_tweenArr = [];
			_huaBg = _skin["huaBg"];
			_huaBg.visible = false;
			_itemClip = new HuaItemCard(_skin["huaAnim"]);
			_itemClip.skin.visible = false;
			_oldPt = new Point(_itemClip.skin.x,_itemClip.skin.y);
		
			var i:int,len:int = _cardsVec.length;
			for(i=0;i<len;i++)
			{
				if(_skin is huaBottomPartUI)
				{
					_cardsVec[i] = new HuaItemCard(_skin["hua"+i]);
				}
				else if(_skin is huaRightPartUI)
				{
					_cardsVec[i] = new HuaItemCard(_skin["hua"+i]);
				}
				else if(_skin is huaTopPartUI)
				{
					_cardsVec[i] = new HuaItemCard(_skin["hua"+i]);
				}
				else if(_skin is huaLeftPartUI)
				{
					_cardsVec[i] = new HuaItemCard(_skin["hua"+i]);
				}
			}
		}
		
		
		
		public function showOneCard(pos:int,cardIdx:int,needShowEff:Boolean,isMopai:Boolean = false,len = 0):void
		{
			var vo:HuaVo = new HuaVo();
			vo.pos = pos;
			vo.cardIdx = cardIdx;
			vo.isMopai = isMopai;

			if(needShowEff){
				_tweenArr.push(vo);
				startTween();
			}else{
				showhua(cardIdx);
			}
		}
		
		private var _isPlayIng:Boolean = false;
		private var _oldPt:Point;
		private var _haveHuaIndex:int;//已经有的花牌的位置索引
		private function startTween():void{
			if(_isPlayIng == true)return;
			if(_tweenArr.length > 0)
			{
				_isPlayIng = true;
				var vo:HuaVo = _tweenArr.shift();
				playAnimation(vo.cardIdx,vo.pos,vo.isMopai);
			}else{
				_isPlayIng = false;
			}
		}
		
	
		private function playAnimation(cardIdx:int,pos:int,isMopai:Boolean):void
		{	
			var item:HuaItemCard;
			if(checkHaveHuaForId(cardIdx)){
				item= _cardsVec[_haveHuaIndex];
				_itemClip.setCardImg(cardIdx);
				
			}else{
				 item = _cardsVec[_curIdx];
				_itemClip.setCardImg(cardIdx);
			}
			if(isMopai)
			{
//				_huaBg.visible = true;
//				_huaBg.alpha = 1;
				_itemClip.skin.visible = true;
				Tween.to(_huaBg,{alpha:0.3},200,Ease.cubicOut,Handler.create(this,tweenBgHander,[item,pos,cardIdx]),0);
			}
			else 
			{
				_itemClip.skin.visible = true;
				tweenBgHander(item,pos,cardIdx);
			}
		}
		private function tweenBgHander(item:HuaItemCard,pos:int,cardIdx:int):void
		{
			_huaBg.visible = false;
			_huaBg.alpha = 1;
			Tween.to(_itemClip.skin,{x:item.skin.x,y:item.skin.y,scaleX:1,scaleY:1},300,Ease.cubicOut,Handler.create(this,tweenHander,[pos,cardIdx]),0);
		}
		private var _isOverHua:Boolean;
		private function tweenHander(pos:int,cardIdx:int):void
		{
			trace("tweenHander" + pos + "---" + cardIdx);
			var vo:HuaVo = new HuaVo();
			vo.pos = pos;
			vo.cardIdx = cardIdx;
			
			_isPlayIng = false;
			_itemClip.skin.visible = false;
			_itemClip.skin.x = _oldPt.x;
			_itemClip.skin.y = _oldPt.y;
			
			_itemClip.skin.scaleX = 2;
			_itemClip.skin.scaleY = 2;
						
			//翻开百搭牌
			if(!_isOverHua){
				model.overHuaVec[vo.pos] --;
				checkIsOverHua(vo.pos);
			}
			
			showhua(vo.cardIdx);
			startTween();
		}
		
		//检测是否第一轮补花完成
		private function checkIsOverHua(pos):void
		{
			var vec:Vector.<int> = model.overHuaVec;
			var i:int,len:int = vec.length;
			if(vec[pos] > 0)
			{
				_isOverHua = false;
			}
			else
			{
				_isOverHua = true;
				EventCenter.instance.event(EventCenter.GAME_BUHUAN_COMPLETE,null);
			}
			
			if(model.checkAllBuhuaComp())
			{
				//view.majiangPage.baidaPart.showBaida(model.baida[1],model.baida[1]);//显示百搭牌 zhanghw
				//controller.contineGameQueue();//放开协议阻塞
			}
		}

		
		private function showhua(cardIdx:int):void
		{
			if(checkHaveHuaForId(cardIdx)){
				_cardsVec[_haveHuaIndex].setNum();//加一个数字
			}else{
				if(_curIdx <  _cardsVec.length)
				{
					_cardsVec[_curIdx].setCardImg(cardIdx);
					_cardsVec[_curIdx].show();
					_curIdx ++;
				}
			}
		}
		
		
		/**
		 *检测是否有相同的花牌 
		 * @param cardIdx
		 */		
		private function checkHaveHuaForId(cardIdx:int):Boolean{
			for(var i:int = 0; i < _cardsVec.length;i ++){
				if(_cardsVec[i].cardIdx == cardIdx){
					_haveHuaIndex = i;
					return true;
				}
			}
			return false;
		}
		
		public function reset():void
		{
			trace("重置了！！！basehua");
			
			_curIdx = 0;
			var i:int;
			var len:int = _cardsVec.length;
			
			for(i=0;i<len;i++)
			{
				_cardsVec[i].hide();
			}
			
			_tweenArr = [];
			_isOverHua = false;
		}
		
		protected function get view():MajiangGameView
		{
			return GameModule.instance.gameContext.view;
		}
		
		protected function get model():MajiangModel
		{
			return GameModule.instance.gameContext.model;
		}
		
		protected function get controller():MajiangGameController
		{
			return GameModule.instance.gameContext.controller;
		}

		public function get isOverHua():Boolean
		{
			return _isOverHua;
		}

	}
}