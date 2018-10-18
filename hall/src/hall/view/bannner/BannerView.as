package hall.view.bannner
{
	
	import laya.events.Event;
	import laya.ui.List;
	import laya.utils.Handler;
	import laya.utils.Tween;
	
	import manager.TimeManager;
	
	import ui.hall.item.BannerViewUI;

	public class BannerView
	{
		protected var skin:BannerViewUI;
		
		protected var bannerList:List;
		
		public function BannerView(s:BannerViewUI)
		{
			skin = s;
			bannerList = skin.bannerList;
			
			bannerList.itemRender = BannerItem;
			bannerList.hScrollBarSkin = "";
			bannerList.selectEnable = true;
			bannerList.scrollBar.isfixed = true;
			bannerList.selectHandler = new Handler(this, onSelectImage);
			bannerList.renderHandler = new Handler(this, updateImgaeList);
			bannerList.repeatX = 1;
			bannerList.repeatY = 1;
			bannerList.array = AppConfig.bannerList;
			bannerList.refresh();
			updatePageMark();
			bannerList.on(Event.MOUSE_DOWN,this,onMouseDownHandler);
			bannerList.on(Event.MOUSE_UP,this,onmoveEnd);
			bannerList.on(Event.MOUSE_OUT,this,onmoveEnd);
			curpage = 1;
			compFun();
		}
		
		private function updateImgaeList(cell:BannerItem, index:int):void 
		{
			console.log(cell,index);
			cell.setData(cell.dataSource);
		}
		
		private function onSelectImage(index:int):void
		{
			
		}
		
		private var downpoint:Number;
		private var downtime:Number;
		private var curpage:int = 0;
		private var hasMouseDown:Boolean = false;
		
		private function onMouseDownHandler(e:Event):void
		{
			downpoint = Laya.stage.mouseX;
			downtime = TimeManager.unixtime;
			hasMouseDown = true;
		}
		private function onmoveEnd(e:Event):void
		{			
			if(!hasMouseDown)
				return;
			hasMouseDown = false;
			var mousespped:Number = (Laya.stage.mouseX - downpoint)/(TimeManager.unixtime - downtime);
			var mousemove:Number = (Laya.stage.mouseX - downpoint);
			//trace("mousespped:" + mousespped);
			if(mousespped <-0.15 || mousemove < -400)
			{
				if(curpage < bannerList.totalPage - 1)
				{
					Laya.timer.clear(this,autoPlay);
					curpage++;					
					var tarpos = Math.floor(curpage) * 622;
					Tween.to(bannerList.scrollBar,{value:tarpos},500,null,Handler.create(this,compFun));
					//updatePageMark();
					return;
				}
			}
			else if(mousespped > 0.15 || mousemove > 400)
			{
				if(curpage > 0)
				{
					Laya.timer.clear(this,autoPlay);
					curpage--;
					var tarpos = Math.floor(curpage) * 622;
					Tween.to(bannerList.scrollBar,{value:tarpos},500,null,Handler.create(this,compFun));
					//updatePageMark();
					return;
				}
			}
			
			Laya.timer.clear(this,autoPlay);
			
			var tarpos = Math.floor(curpage) * 622;
			Tween.to(bannerList.scrollBar,{value:tarpos},500,null,Handler.create(this,compFun));
			//updatePageMark();
		}
		
		private function compFun():void
		{
			if(curpage == 0)
			{
				curpage = AppConfig.bannerList.length-2;
				
			}
			if(curpage == AppConfig.bannerList.length-1)
			{
				curpage = 1;
			}
			bannerList.scrollBar.value = Math.floor(curpage) * 622;
			
			updatePageMark();
			
			Laya.timer.once(5000,this,autoPlay);
		}
		
		protected function autoPlay():void
		{
			curpage++;					
			var tarpos = Math.floor(curpage) * 622;
			Tween.to(bannerList.scrollBar,{value:tarpos},500,null,Handler.create(this,compFun));
		}
		
		
		private function updatePageMark():void
		{
			if(curpage == 0 || curpage == 2)
			{
				skin.page0.skin = "hall/bannern.png";
				skin.page1.skin = "hall/bannery.png";
			}
			else
			{
				skin.page0.skin = "hall/bannery.png";
				skin.page1.skin = "hall/bannern.png";
			}
			
//			gui.backBtn.visible = curpage == 3;
//			
//			for(var i:int=0;i < 4;i++)
//			{
//				if(i==curpage)
//					gui["pageMark"+i].skin = "guide/小点1.png";
//				else
//					gui["pageMark"+i].skin = "guide/小点2.png";
//			}
//			for(i = gui.imageList.totalPage;i < 4;i++)
//			{
//				gui["pageMark"+i].visible = false;
//			}
//			if(curpage == 4)
//				onClickClose(null);
		}
	}
}