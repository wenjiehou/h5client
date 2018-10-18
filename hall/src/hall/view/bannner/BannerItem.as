package hall.view.bannner
{
	import laya.events.Event;
	import laya.utils.Browser;
	
	import ui.hall.item.BannerItemUI;
	
	public class BannerItem extends BannerItemUI
	{
		public function BannerItem()
		{
			super();
			
			this.img.on(Event.CLICK,this,onClickImg);
		}
		
		public function setData(dat:*):void
		{
			if(dat)
			{
				dataSource = dat;
				this.img.skin = "hall/active/" + dat.skin;
				
				//todo
			}
		}
		
		protected function onClickImg(e:Event):void
		{
			Browser.window.location.href=dataSource.href;
		}
	}
}