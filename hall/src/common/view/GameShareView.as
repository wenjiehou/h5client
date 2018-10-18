package common.view
{
	import common.tools.SoundPlay;
	
	import laya.events.Event;
	import laya.utils.Browser;
	import laya.utils.Ease;
	import laya.utils.TimeLine;
	
	import manager.UIManager;
	
	import ui.common.GameShareUI;
	import ui.common.VGameShareUI;


	public class GameShareView
	{
		protected var _skin:*;
		public var isShow:Boolean = false;
		
		protected var isHerizon:Boolean = false;
		public function GameShareView(isHerizon:Boolean=true)
		{
			isHerizon = isHerizon;
			if(isHerizon)
			{
				_skin = new GameShareUI();
			}
			else
			{
				_skin = new VGameShareUI();
			}
			
			init();
			
			if(isHerizon)
			{
				timeLine.to(_skin.TipHand,{x:980},600,Ease.quadIn).to(_skin.TipHand,{x:930},600,Ease.quadOut);
			}
			else
			{
				timeLine.to(_skin.TipHand,{y:40},600,Ease.quadIn).to(_skin.TipHand,{y:98},600,Ease.quadOut);
			}
			

			timeLine.play(0,true);
			_skin.closeShare.on(Event.CLICK,this,onClickCloseShare);
		}
		private var timeLine:TimeLine = new TimeLine();
		protected function init():void
		{
			_skin.shareTit.text=_skin.shareTit.text=UserData.nickname+"-在"+AppConfig.nameTitle +"棋牌创建了房间："+UserData.roomid+"-"+UserData.nickname+"-"+ UserData.roomtype_reference[""+UserData.roomtype]+"私人局，邀您一起来互相伤害！";
			if(WX.splitStr(UserData.Icon,"")[0]=='h'){//判断是否是网络图片("h")还是本地图片("i")
				_skin.handIMG.skin=UserData.Icon;
			}
			
			//_skin.gameShare.skin="../wechat/api/qrcode?url="+encodeURIComponent(Browser.window.location.origin+Browser.window.location.pathname+"?room="+UserData.roomid);
//			_skin.gameShare.skin="./jsapi/index.php?urll="+Browser.window.location.origin+Browser.window.location.pathname+"?room="+UserData.roomid;
		}
		
		private function onClickCloseShare():void
		{
			SoundPlay.instance.playClickBtnSound();
			hide();
		}
		
		public function show():void
		{
			this.init();
			timeLine.resume();
			UIManager.instance.uiCommonLayer.addChild(_skin);
			isShow = true;
		}
		
		public function hide():void
		{
			if(_skin.parent)
			{
				timeLine.pause();
				_skin.parent.removeChild(_skin);
			}
			isShow = false;
		}
	}
}