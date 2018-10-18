package hall.view
{
	import common.baseui.UIBase;
	
	import laya.display.Sprite;
	import laya.events.Event;
	import laya.net.HttpRequest;
	import laya.net.LocalStorage;
	import laya.utils.Browser;
	
	import manager.UIManager;
	
	import ui.hall.HallHandInfoViewUI;
	
	public class HandInfoView extends UIBase
	{
		protected var _skin:HallHandInfoViewUI;
		protected var _hallServiceView:HServiceView;
		public function HandInfoView(container:Sprite=null)
		{
			super(container);
			//skinRes = "res/atlas/hall/handinfo.json";
			this._hallServiceView=new HServiceView();
		}
		
		override protected function onLoaded():void
		{
			super.onLoaded();
			_skin = new HallHandInfoViewUI();
			_skin.mouseThrough = true;
			if(_isShow)
			{
				UIManager.instance.uiCommonLayer.addChild(_skin);
			}
			
			this.init();
		}
		private function upData():void
		{
			this._skin.nameInfo.text = UserData.nickname;
			this._skin.IDInfo.text = UserData.uid;
			if(WX.splitStr(UserData.Icon,"")[0]=='h'){//判断是否是网络图片("h")还是本地图片("i")
				_skin.handIMG.skin=UserData.Icon;
			}
			
			_skin.versionTf.text = "版本号: " + AppConfig.bgVersion + "." + AppConfig.version;
		}
		private var hr:HttpRequest;
		protected function init():void
		{
			this._skin.closeHandInfo.on(Event.CLICK,this,function():void{//关闭个人信息面板
				this.hide();
			});
			
			this._skin.ReloginBtn.on(Event.CLICK,this,function():void{//重新登录
				hr = new HttpRequest();
				hr.once(Event.COMPLETE, this, function(e:*=null):void{
					this.hide();
					AppConfig.reloadLaya()
				});
				//			hr.send("./jsapi/jsapi.php",encodeURIComponent(Browser.window.location.href.split('#')[0]), "", "json");
				hr.send("phpApi/api/clearAndRelog.php",null, "get", "text");
				UserData.SID='';
				Browser.window.wxInfo="";
				laya.net.LocalStorage.setItem("duid","");
				laya.net.LocalStorage.setItem("dsid","");
				trace("重新登录");
			});
			
			this._skin.handServiceBtn.on(Event.CLICK,this,function():void{//服务条款
				this.hide();
				this._hallServiceView.show();
				trace("服务条款");
			});
			
			this.upData();
		}
		
		public override function show():void
		{
			super.show();
			if(_skin)
			{
				UIManager.instance.uiCommonLayer.addChild(_skin);
			}
		}
		
		public override function hide():void
		{
			super.hide();
			if(_skin && _skin.parent)
			{
				_skin.parent.removeChild(_skin);
			}
		}
	}
}