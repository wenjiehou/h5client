package modules.nnGame.inerGame.view.pockerPart
{
	
	import laya.events.Event;
	import laya.ui.Button;
	
	import modules.nnGame.NnGameModule;
	import modules.nnGame.inerGame.controller.NnController;
	import modules.nnGame.inerGame.model.NnModel;
	import modules.nnGame.inerGame.model.data.JishuArrData;
	import modules.nnGame.inerGame.model.data.NiuData;
	import modules.nnGame.inerGame.model.data.PaixingLogic;
	import modules.nnGame.inerGame.view.NnView;
	
	import net.Message;
	import net.ProtoMessage;
	
	import ui.niuniuGame.niuniuPart.PlayerCtlPartUI;
	

	public class HandleBtnsPart
	{
		protected var singleBtnW:Number = 183;
		protected var gap:Number = 20;
		
		protected var _skin:PlayerCtlPartUI;
		
		protected var state:int = -1;
		
		protected var _tishiBtn:Button;
		protected var _showBtn:Button;
		
		protected var _cuoBtn:Button;
		protected var _fanBtn:Button;
		
		public function HandleBtnsPart(skin:PlayerCtlPartUI,tishiBtn:Button,showBtn:Button,cuoBtn:Button,fanBtn:Button)
		{
			_skin = skin;
			
			_tishiBtn = tishiBtn;
			_showBtn = showBtn;
			
			_cuoBtn = cuoBtn;
			_fanBtn = fanBtn;
			
			init();
		}
		
		protected function init():void
		{
			addListener();
		}
		
		/**显示抢庄*/
		public function showQiangBox():void
		{
			if(model.isSelfSitDown == false)
			{
				return;
			}
			
			if (model.handleCards[model.selfChairPos].length == 0)
			{
				return;
			}
			hide();
			_skin.visible = true;
			_skin.fenBox.visible = false;
			_skin.qiangBox.visible = true;
		}
		
		/**显示下注分数*/
		public function showFenBox():void
		{
			if(model.isSelfSitDown == false)
			{
				return;
			}
			
			if (model.handleCards[model.selfChairPos].length == 0)
			{
				return;
			}
			hide();
			_skin.visible = true;
			_skin.fenBox.visible = true;
			_skin.qiangBox.visible = false;
		}
		
		/**显示搓牌和翻牌按钮*/
		public function showCuo():void
		{
			if(model.isSelfSitDown == false)
			{
				return;
			}
			
			if (model.handleCards[model.selfChairPos].length == 0)
			{
				return;
			}
			hide();
			_cuoBtn.visible = true;
			_fanBtn.visible = true;
		}
		
		
		
		/**显示提示和亮牌*/
		public function showCtlBtns():void
		{
			if(model.isSelfSitDown == false)
			{
				return;
			}
			
			if (model.handleCards[model.selfChairPos].length == 0)
			{
				return;
			}
			hide();
			_tishiBtn.visible = true;
			_showBtn.visible = true;
		}
		
		
		
		protected function get model():NnModel
		{
			return NnGameModule.instance.gameContext.model;
		}
		
		protected function get controller():NnController
		{
			return NnGameModule.instance.gameContext.controller;
		}
		
		protected function get view():NnView 
		{
			return NnGameModule.instance.gameContext.view;
		}
		

		
	
		
	
		
	
		
		
		
		protected function addListener():void
		{
			_tishiBtn.on(Event.CLICK,this,onClickTishi);
			_showBtn.on(Event.CLICK,this,onClickShowBtn);
			
			_skin.bei0.on(Event.CLICK,this,onClickBeiBtn,[0]);
			_skin.bei1.on(Event.CLICK,this,onClickBeiBtn,[1]);
			_skin.bei2.on(Event.CLICK,this,onClickBeiBtn,[2]);
			_skin.bei3.on(Event.CLICK,this,onClickBeiBtn,[3]);
			_skin.bei4.on(Event.CLICK,this,onClickBeiBtn,[4]);
			
			_skin.fen2.on(Event.CLICK,this,onClickFenBtn,[2]);
			_skin.fen4.on(Event.CLICK,this,onClickFenBtn,[4]);
			
			_cuoBtn.on(Event.CLICK,this,onClickCuo);
			_fanBtn.on(Event.CLICK,this,onClickFan);
		}
		
		protected function onClickCuo(e:Event):void
		{
			view.nnPage.cuoPart.show(model.handleCards[model.selfChairPos][model.handleCards[model.selfChairPos].length-1]);
			e.stopPropagation();
		}
		
		protected function onClickFan():void
		{
			view.nnPage.handlePart.playFanEff(model.selfChairPos,true);
			showCtlBtns();
		}
		
		
		protected function onClickTishi(e:Event):void
		{
			var cards:Array = model.handleCards[model.selfChairPos].concat();//保证不对原来的牌排序
			cards.sort(PaixingLogic.compCardsFun);
			var jishuData:JishuArrData = JishuArrData.getJishuArrData(cards);
			
			var paixing:int = PaixingLogic.getPaixing(cards,jishuData,false);
			view.nnPage.handlePart.showPaixing(model.selfChairPos,paixing);
			
			if(PaixingLogic.isNiuPaixing(paixing) == true)//是牛类型的
			{
				var niuData:NiuData = NiuData.getNiuData(cards);
				if(niuData.niuNum > 0)
				{
					view.nnPage.handlePart.setSelfPockSele(niuData.ThreeArr);
					
				}
			}
		}
		
		/**两牌*/
		protected function onClickShowBtn(e:Event):void
		{
			var mingObj:Object = {Sid:UserData.SID};
			controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Sddz_Mingpai,mingObj));
			reset();
		}
		
		protected function onClickBeiBtn(beishu:int,e:Event):void
		{
			var jiaofenObj:Object = {Sid:UserData.SID,Fen:beishu};
			controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Sddz_Jiaofen,jiaofenObj));
			reset();
		}
		
		protected function onClickFenBtn(fen:int,e:Event):void
		{
			var jiaofenObj:Object = {Sid:UserData.SID,Fen:fen};
			controller.sendMsgCommond(ProtoMessage.getProtoMessage(Message.Nn_Xiazhu,jiaofenObj));
			reset();
		}
		
		
	
		
	
		
		public function show():void
		{
			_skin.visible = true;
		}
		
		public function hide():void
		{
			_skin.visible = false;
			_tishiBtn.visible = false;
			_showBtn.visible = false;
			
			_cuoBtn.visible = false;
			_fanBtn.visible = false;
		}
		
		public function get visible():Boolean
		{
			return _skin.visible;
		}
		
		public function reset():void
		{
			hide();
		}
		
	}
}