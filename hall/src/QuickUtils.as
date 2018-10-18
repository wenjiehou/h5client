/* ----------------------------------------------------------------------------------------------------------------------------------------------------- /

public class QuickUtils - 类功能 - GAOLEI

/ ----------------------------------------------------------------------------------------------------------------------------------------------------- */

package
{
	import common.view.ConnectingView;
	import common.view.PopBox;
	import common.view.PopMessageBox;
	
	import laya.display.Sprite;
	import laya.display.Text;
	import laya.events.Event;
	import laya.filters.ColorFilter;
	import laya.html.dom.HTMLDivElement;
	import laya.maths.Point;
	import laya.net.LocalStorage;
	import laya.utils.Browser;
	
	import manager.UIManager;
	
	import ui.load.ChScreenGuideViewUI;
	
	public class QuickUtils
	{
		// --- Vars ------------------------------------------------------------------------------------------------------------------------------------------------ //
		// --- Public Functions ------------------------------------------------------------------------------------------------------------------------------------ //
		public function QuickUtils()
		{
		}
		
		public static var isNativeMobileApp:Boolean = false;
		
		public static function addDark(target:laya.display.Sprite, isDark:Boolean = true):void {
			if (isDark) {
				target.filters=[ new ColorFilter([0.7, 0, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 0, 1, 0])];
			} else {
				target.filters=[];
			}
		}
		
		public static var redMat:ColorFilter = new ColorFilter([
			3, 0, 0, 0, 100, //R
			1, 0, 0, 0, 0, //G
			0, 1, 0, 0, 0, //B
			0, 0, 0, 1, 0, //A
		])
		
		public static function addRed(target:laya.display.Sprite, isRed:Boolean = true):void {	
			if(target["dark"] == true)
			{
				return;
			}
			target.filters=[];
			if (isRed) {
				target.filters=[redMat];
			}
		}
		
		/**
		 * type 0大厅 1战绩
		 */
		public static function gotoHall(type:int=0):void{
			if(type==0){
				Browser.window.location.href=AppConfig.hallUrl;
			}else if(type==1){
				Browser.window.location.href=AppConfig.hallUrl+(AppConfig.hallUrl.indexOf('?')>0?"&":"?")+"pi="+UserData.uniqueCode;//playinfo
			}
		}
		
		public static function ToGB(str:String):String
		{
			var code:* = str.match(/&#(\d+);/g);
			var string:String="";
			if(code == null) {
				string="";
			}else{
				for (var i:int = 0; i < code.length; i++) 
				{
					string+=String.fromCharCode(code[i].replace(/[&#;]/g, ''));
				}
			}
			return string;
		}
		
		
		/**
		 *获取本地记录的内容 
		 * @param key
		 * @param defaultValue 默认值，会根据默认值int,float,string自动格式化返回值
		 * @return 
		 * 
		 */		
		public static function getLocalVar(key:String,defaultValue:*= null):*{
			var v:String=laya.net.LocalStorage.getItem(key);
			if(v===null){
				v=defaultValue;
				laya.net.LocalStorage.setItem(key,v+"");
				return v;
			}
			
			if(defaultValue!=null)if(Math.floor(defaultValue)==defaultValue){
				return parseInt(v); 
			}else if (parseFloat(defaultValue+"")==defaultValue){
				
				return parseFloat(v);
			}

			return v;
		}
		public static function setLocalVar(key:String,value:*):void{
			LocalStorage.setItem(key,value+"");
		}
		public static function removeLocalVar(key:String):void{
			LocalStorage.removeItem(key);
		}
		
		public static function AddCenter(gui:Sprite,parent:*,offsetX:Number=0,offsetY:Number=0):void{
			var width:int=parent.width;
			var height:int=parent.height;
			if(parent==UIManager.instance.uiLayer||parent==UIManager.instance.popLayer){
				width=Laya.stage.width;
				height=Laya.stage.height;
				
				if(ModuleDef.CurGameModule && ModuleDef.CurGameModule.inGame && ModuleDef.CurGameModule.instance.needResize)
				{
					var temp:int;
					if(width < height)
					{
						temp = height;
						height = width;
						width = temp;
					}
				}
				else
				{
					var temp:int;
					if(width > height)
					{
						temp = height;
						height = width;
						width = temp;
					}
				}
				
			}
			gui.x = (width - gui.width) >> 1;
			gui.x-=parent.x;
			gui.y = (height - gui.height) >> 1;
			gui.y-=parent.y;
			gui.x += offsetX;
			gui.y += offsetY;
			parent.addChild(gui);
			
		}
		
		
		public static function decodeNickName(name:String):String {
			return name;
			if (!name) return '';
			var len:int = name.length, last:int = name.lastIndexOf('%');
			if (len == (last + 1)) name = name.substring(0, len - 1);
			len = name.length;
			if (decodeCheck(name)) return decodeURI(name);
			
			var nickname:String = name;
			for(var i:int = 0; i < len; i++) {
				var n:String = name.substring(0, len - i);
				if (decodeCheck(n)) return decodeURI(n);
			}
			
			return nickname;
		}
		
		private static function decodeCheck(name):Boolean
		{
			try {
				name = decodeURI(name);
				return true;
			} catch (e) {
				return false;
			}
		}
		
		/***/
		public static function localToGlobal(sp:Sprite,point:Point,createNewPoint:Boolean=false):Point
		{
			if (!sp || !point) return point;
			if (createNewPoint === true) {
				point = new Point(point.x, point.y);
			}
			var ele:Sprite = sp;
			while (ele) {
				if (ele == Laya.stage) break;
				point.x += (ele.parent as Sprite).x;
				point.y += (ele.parent as Sprite).y;
				ele = ele.parent as Sprite;
			}
			return point;
		}
		
		/***/
		public static function globalToLocal(sp:Sprite,point:Point,createNewPoint:Boolean=false):Point
		{
			if (!sp || !point) return point;
			if (createNewPoint === true) {
				point = new Point(point.x, point.y);
			}
			var ele:Sprite = sp;
			while (ele) {
				if (ele == Laya.stage) break;
				point.x -= (ele.parent as Sprite).x;
				point.y -= (ele.parent as Sprite).y;
				ele = ele.parent as Sprite;
			}
			return point;
		}
		
		private static var grayscaleMat:Array = [0.3086, 0.6094, 0.0820, 0, 0, 0.3086, 0.6094, 0.0820, 0, 0, 0.3086, 0.6094, 0.0820, 0, 0, 0, 0, 0, 1, 0];
		
		//创建一个颜色滤镜对象，灰图
		public static var grayscaleFilter:ColorFilter = new ColorFilter(grayscaleMat);
		
		
		
		/***********     自动化Scroll -------------***********/
		public static function AddTextScroll(txt:Text):void{
			txt.overflow = Text.SCROLL;
			txt.on(Event.MOUSE_DOWN, QuickUtils, startScrollText,[txt]);
		}
		private static function startScrollText(txt:Text):void 
		{ 
			//			prevX = Laya.stage.mouseX;
			txt["prevY"] = Laya.stage.mouseY;
			
			Laya.stage.on(Event.MOUSE_MOVE, QuickUtils, scrollText,[txt]);
			Laya.stage.on(Event.MOUSE_UP, QuickUtils, finishScrollText,[txt]);
		}
		/* 停止滚动文本 */
		private static function finishScrollText(txt:Text):void
		{
			Laya.stage.off(Event.MOUSE_MOVE, QuickUtils, scrollText);
			Laya.stage.off(Event.MOUSE_UP, QuickUtils, finishScrollText);
		}
		/* 鼠标滚动文本 */
		private static function scrollText(txt:Text):void
		{
			//			var nowX:Number = Laya.stage.mouseX;
			var nowY:Number = Laya.stage.mouseY;
			
			//			txt.scrollX += prevX - nowX;
			txt.scrollY += txt["prevY"] - nowY;
			
			//			prevX = nowX;
			txt["prevY"] = nowY;
		}
		
		/***********     自动化Scroll -------------***********/
		public static function addHTextScroll(txt:HTMLDivElement):void{
			//txt.overflow = Text.SCROLL;
			txt.on(Event.MOUSE_DOWN, QuickUtils, startScrollHtext,[txt]);
		}
		
		private static function startScrollHtext(txt:HTMLDivElement):void 
		{
			txt["prevY"] = Laya.stage.mouseY;
			
			Laya.stage.on(Event.MOUSE_MOVE, QuickUtils, scrollHText,[txt]);
			Laya.stage.on(Event.MOUSE_UP, QuickUtils, finishScrollHText,[txt]);
		}
		
		/* 停止滚动文本 */
		private static function finishScrollHText(txt:HTMLDivElement):void//
		{
			Laya.stage.off(Event.MOUSE_MOVE, QuickUtils, scrollHText);
			Laya.stage.off(Event.MOUSE_UP, QuickUtils, finishScrollHText);
		}
		/* 鼠标滚动文本 */
		private static function scrollHText(txt:HTMLDivElement):void
		{
			
			if(txt.contextHeight < txt.scrollRect.height)
				return;
			//			var nowX:Number = Laya.stage.mouseX;
			var nowY:Number = Laya.stage.mouseY;
			
			//			txt.scrollX += prevX - nowX;
			txt.scrollRect.y += txt["prevY"] - nowY;
			if(txt.scrollRect.y < 0)
			{
				txt.scrollRect.y = 0;
			}
			else if(txt.scrollRect.y > txt.contextHeight-txt.scrollRect.height)
			{
				txt.scrollRect.y = txt.contextHeight-txt.scrollRect.height;
			}
			
			
			//			prevX = nowX;
			txt["prevY"] = nowY;
		}
		
		/**
		 * 语音操作提示
		 */
		public static function VoiceTip(num:int):void{
			var str:String="";
			if(num==1){
				str="正在录音或者播放声音，请稍候...";
//				trace("正在录音或者播放声音，请稍候...")
			}else if(num==2){
				str="您的操作过于频繁";
//				trace("您的操作过于频繁")
			}else if(num==3){
				str="语音时间太短";
//				trace("语音时间太短")
			}else if(num==4){
				str="围观用户不能发言";
//				trace("围观用户不能发言");
			}else if(num==5){
				str="录音已取消！";
			}
			QuickUtils.popMessageBox(str,PopBox.BTN_NONE,QuickUtils,null);
		}
		
		public static var connectingView:ConnectingView;
		
		public static function showConnecting():void
		{
			if(!connectingView)
			{
				connectingView = new ConnectingView();
			}
			
			connectingView.show();
		}
		
		public static function hideConnecting():void
		{
			connectingView && connectingView.hide();
		}
		
		public static var popBox:PopBox;
		
		
		/**tong popAlert*/
		public static function popMessageBox(content:String,labels:String,caller:*,
											 callback:Function ,title:String="提示",
											 align:String="center",params:Array=null,fontSize:int=30):PopBox
		{
			if(popBox)
			{
				popBox.onhide();
			}
			
			var pop:PopBox =  new PopBox(content,labels,caller,callback,title,align,params,fontSize);
			
			pop.onshow();
			
			popBox = pop;
			
			return pop;
			
		}
		
		protected static var popMsgBox:PopMessageBox;
		
		/***/
		public static function popMessage(msg:String):void
		{
			if(!msg)return;
			if(popMsgBox == null)
			{
				popMsgBox = new PopMessageBox();
			}
			
			popMsgBox.pop(msg);
		}
		
		public static function getScreen():Boolean
		{
			return Browser.clientWidth/Browser.clientHeight<1;
		}
		
		public static function sysem():String
		{
			var ua:String = Browser.window.navigator.userAgent.toLowerCase();
			var str:String;
			if(("" + ua.match(/pad/i)) == "pad")
			{
				str = "ipad";
			}else if(("" + ua.match(/windows nt/i)) == "windows nt"){
				str = "windows";
			}else if(("" + ua.match(/mac/i)) == "mac"){
				str = "mac";
			}
			return str;
		}
		
		public static function systemType(): String
		{
			var ua:String = Browser.window.navigator.userAgent.toLowerCase();
			var microStr:String = "" + ua.match(/MicroMessenger/i);
			var str:String;
			if(("" + ua.match(/windows nt/i)) == "windows nt")
			{
				str = "windows";
			}
			else if(("" + ua.match(/iphone/i)) == "iphone")
			{
				str = "ios";
			}
			else if(("" + ua.match(/android/i)) == "android")
			{
				str = "android";
			}
			else 
				if(("" + ua.match(/ipad/i)) == "ipad")
			{
				str = "ipad";
			}
			else if(("" + ua.match(/linux/i)) == "linux")
			{
				str = "linux";
			}
			else if(("" + ua.match(/mac/i)) == "mac")
			{
				str = "mac";
			}
			else if(("" + ua.match(/ucbrower/i)) == "ucbrower")
			{
				str = "ucbrower";
			}
			else
			{
				console.log("未知系统类型");
				str = "未知系统类型"
			}
			
			return str;
		} 
		
		public static function html_decode(s:String):String   
		{     
			if (s.length == 0) return "";      
			s = s.replace(/&lt;/g, "<");   
			s = s.replace(/&gt;/g, ">");   
			s = s.replace(/&nbsp;/g, " ");   
			s = s.replace(/&#39;/g, "\'");   
			s = s.replace(/&quot;/g, "\"");
			s = s.replace(/\"/g, "\'");
			s = s.replace(/div/g, "span"); 
			s = s.replace(/text\-align/g, "align");
			
			return s;   
		}
		
		public static function html_encode(s:String):String   
		{     
			if (s.length == 0) return "";      
			s = s.replace(/</g, "&lt;");   
			s = s.replace(/>/g, "&gt;");   
			s = s.replace(/&nbsp;/g, " ");   
			s = s.replace(/&#39;/g, "\'");   
			s = s.replace(/&quot;/g, "\"");
			s = s.replace(/\"/g, "\'");
			s = s.replace(/div/g, "span"); 
			s = s.replace(/text\-align/g, "align");
			
			return s;   
		}
		
		private static  var chChangeGuideView:ChScreenGuideViewUI = new ChScreenGuideViewUI();
		
		public static function showChScreenGuideView():void
		{
			Laya.stage.addChildAt(chChangeGuideView,0);
			//QuickUtils.AddCenter(chChangeGuideView,Laya.stage);
		}
		
		public static function hideChScreenGuideView():void
		{
			chChangeGuideView.removeSelf();
		}
		
	}
}
