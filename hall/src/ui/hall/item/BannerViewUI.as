/**Created by the LayaAirIDE,do not modify.*/
package ui.hall.item {
	import laya.ui.*;
	import laya.display.*; 

	public class BannerViewUI extends View {
		public var bannerList:List;
		public var page0:Image;
		public var page1:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":640,"height":204},"child":[{"type":"List","props":{"y":9,"x":9,"width":622,"var":"bannerList","height":186}},{"type":"Image","props":{"width":640,"skin":"common/bannerBg.png","height":204,"sizeGrid":"23,24,25,28"}},{"type":"Image","props":{"y":181,"x":303,"var":"page0","skin":"hall/bannern.png"}},{"type":"Image","props":{"y":181,"x":327,"var":"page1","skin":"hall/bannern.png"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}