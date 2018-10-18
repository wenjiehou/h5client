package manager
{
	import laya.display.BitmapFont;
	import laya.display.Text;
	import laya.utils.Handler;
	
	public class TextManager
	{
		
		private static var _instance:TextManager;
		
		public static function get instance():TextManager
		{
			if(!_instance)
			{
				_instance = new TextManager(new singleForce());
			}
			
			return _instance;
		}
		
		public function TextManager(force:singleForce)
		{
			init();
			
		}
		
		
		
		
		/**大厅红色的战绩数字*/
		public static var NumberRedFont:String = "numHallRed";
		/**大厅绿色的战绩数字*/
		public static var NumberLvFont:String = "numHallLv";
		/**绿色的数字*/
		public static var NumberBlueFont:String = "numBlue";
		/**黄色的数字*/
		public static var NumberYellowFont:String = "numYellow";
		/**花的数字*/
		public static var NumberFlowerFont:String = "numFlower";
		
		protected var fontArray:Array = [];
		protected var fontLoadedNum:int = 0;
		protected var completeFun:Function;
		
		protected var haveLoad:Boolean = false;
		
		protected function init():void
		{
			fontArray.push(NumberRedFont,NumberLvFont,NumberBlueFont,NumberYellowFont,NumberFlowerFont);
		}
		
		public function loadFont(onComplete:Function):void
		{
			if(haveLoad)
			{
				return;
			}
			//			var bitmapFontB:BitmapFont = new BitmapFont();
			//			bitmapFontB.loadFont("res/bitmapFont/BlueNumber.fnt",new Handler(this,onFontLoaded, [bitmapFontB,"BlueNumber"]));
			//			var bitmapFontR:BitmapFont = new BitmapFont();
			//			bitmapFontR.loadFont("res/bitmapFont/RedNumber.fnt",new Handler(this,onFontLoaded, [bitmapFontR,"RedNumber"]));
			//			var bitmapFontW:BitmapFont = new BitmapFont();
			//			bitmapFontW.loadFont("res/bitmapFont/WhiteNumber.fnt",new Handler(this,onFontLoaded, [bitmapFontW,"WhiteNumber"]));
			
			completeFun = onComplete;
			
			var bitmapFont:BitmapFont = new BitmapFont();
			var i:int;
			var len:int = fontArray.length;
			for(i=0;i<len;i++)
			{
				bitmapFont = new BitmapFont();
				bitmapFont.loadFont("res/bitmapFont/" + fontArray[i] +".fnt",new Handler(this,onFontLoaded, [bitmapFont,fontArray[i]]));
			}	
			
			haveLoad = true;
		}
		
		private function onFontLoaded(bitmapFont:BitmapFont,fontName:String):void
		{
			bitmapFont.setSpaceWidth(10);
			
			Text.registerBitmapFont(fontName, bitmapFont);
			
			fontLoadedNum ++ ;
			if(fontLoadedNum == fontArray.length)
			{
				if(completeFun)
				{
					completeFun();
				}
			}
			
		}
	}
}

class singleForce{}