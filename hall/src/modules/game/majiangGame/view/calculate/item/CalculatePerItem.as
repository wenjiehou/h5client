package modules.game.majiangGame.view.calculate.item
{
	
	import modules.game.GameModule;
	import modules.game.majiangGame.model.MajiangModel;
	import modules.game.majiangGame.view.MajiangGameView;
//	import modules.game.majiangGame.view.majiangPart.singlePart.handlePart.BottomSingleHandlePart;
//	import modules.game.majiangGame.view.majiangPart.singlePart.pengGangPart.BottomSinglePengGangPart;
	
	import laya.display.Sprite;
	import laya.ui.Image;
	
	import manager.TextManager;
	
	import ui.mainGame.majiangParts.Newcalculate.NewCalculatePerItemUI;

	/**每一轮的单个结算条目*/
	public class CalculatePerItem
	{
		protected var _skin:NewCalculatePerItemUI;
		
//		protected var _singlePengGangPart:BottomSinglePengGangPart;
//		protected var _singleHandlePart:BottomSingleHandlePart;
		
		protected var headImg:Image;
		private var headw:Number=0,headh:Number=0;
		
		public function CalculatePerItem(skin:NewCalculatePerItemUI)
		{
			_skin = skin;
			
			headImg = _skin.headImg;
			headw = headImg.width;
			headh = headImg.height;
			_skin.zongchengji.scaleX=_skin.zongchengji.scaleY=0.8;
		}
		
		/**展示这一条数据*/
		public function update(pos:int,isLiu:Boolean=false):void
		{
			var player:Object = model.playerByPos(pos);
			if(player == null)
			{
				player = model.playerByUid(model.beKickedPlayer[pos]);
			}
			
			if(player == null)
			{
				_skin.visible = false;
			}
			else
			{
				_skin.visible = true;
			}
			
			
			if(player.Icon != "")
			{
				var photo:Sprite=new Sprite();
				photo.loadImage(player.Icon,0,0,headw,headh);//AppConfig.httpPhotoUrl+obj.uid
				photo.mouseEnabled=true;
				headImg.addChild(photo);
			}
			
			_skin.chengbaoTf.visible=false;
			_skin.huImg.visible = false;
			_skin.dianPaoImg.visible = false;
			_skin.nicknameTf.text = player.nickname;
			
			if(isLiu)
			{
				_skin.zongchengji.text = "";
				return;
			}
			
			if(player.isHu)
			{
				_skin.huImg.visible = true;
			}
			else if(player.isDianPao)
			{
				_skin.dianPaoImg.visible = true;
			}
			
			if(player.zongchengji > 0)
			{
				_skin.zongchengji.font = TextManager.NumberYellowFont;
				_skin.zongchengji.text = "+" + player.zongchengji;
			}
			else
			{
				_skin.zongchengji.font = TextManager.NumberBlueFont;
				_skin.zongchengji.text = player.zongchengji;
			}
			
			
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