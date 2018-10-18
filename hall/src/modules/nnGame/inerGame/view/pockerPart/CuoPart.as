package modules.nnGame.inerGame.view.pockerPart
{
	import laya.events.Event;
	import laya.maths.Rectangle;
	
	import modules.nnGame.NnGameModule;
	import modules.nnGame.inerGame.model.NnModel;
	import modules.nnGame.inerGame.view.pockerPart.card.OtherHandlePocker;
	
	import ui.niuniuGame.niuniuPart.CuoPartUI;

	public class CuoPart
	{
		protected var _skin:CuoPartUI;
		
		protected var card:OtherHandlePocker;
		
		public function CuoPart(skin:CuoPartUI)
		{
			_skin = skin;
			
			init();
		}
		
		protected function init():void
		{
			
			card = new OtherHandlePocker(_skin.card);
			card.reset();
			_skin.dragBox.on(Event.MOUSE_DOWN,this,onDrag);
			_skin.dragBox.on(Event.MOUSE_OUT,this,onStopDrag);
			_skin.dragBox.on(Event.MOUSE_UP,this,onStopDrag);
			
			_skin.on(Event.CLICK,this,onClickThis);
			Laya.stage.on(Event.CLICK,this,onClickStage);
		}
		
		protected function onClickStage(e:Event):void
		{
			hide();
		}
		
		protected function onClickThis(e:Event):void
		{
			e.stopPropagation();
		}
		
		protected var dragRec:Rectangle = new Rectangle(0,-180,0,660);
		
		protected function onDrag(e:Event):void
		{
			_skin.dragBox.startDrag(dragRec, true, 0);
		}
		
		protected function onStopDrag(e:Event):void
		{
			if(_skin.dragBox.y <= -180 ||_skin.dragBox.y >= 40){
				_skin.dragBox.visible = false;
				NnGameModule.instance.gameContext.view.nnPage.handlePart.playFanEff(model.selfChairPos,false);
				NnGameModule.instance.gameContext.view.nnPage.handleBtns.showCtlBtns();
			}
			else
			{
				_skin.dragBox.x = 0;
				_skin.dragBox.y = 0;
			}
		}
		
		public function show(cardIdx:int):void
		{
			_skin.visible = true;
			card.setCardImg(cardIdx);
			card.show();
			card.down();
			
			_skin.dragBox.x = 0;
			_skin.dragBox.y = 0;
			_skin.dragBox.visible = true;
		}
		
		public function hide():void
		{
			_skin.visible = false;
		}
		
		public function reset():void
		{
			_skin.dragBox.x = 0;
			_skin.dragBox.y = 0;
			_skin.dragBox.visible = true;
			hide();
		}
		
		protected function get model():NnModel
		{
			return NnGameModule.instance.gameContext.model;
		}
	}
}