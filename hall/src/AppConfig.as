package
{
	import laya.media.SoundManager;
	import laya.utils.Browser;

	public class AppConfig
	{
		public static var isPlayingRecord:Boolean = false;//
		
		public static var  nameTitle:String =Browser.window.nameTitle!=undefined ? Browser.window.nameTitle : "众乐休闲";
		public static var locactionHref:String = Browser.window.locactionHref!=undefined ? Browser.window.locactionHref : "http://www.zhonglewangluo.com/";
		
		public static var isNewHall:Boolean = Browser.window.isNewHall!=undefined ? Browser.window.isNewHall : true;
		
		public static var autoDestory:Boolean = Browser.window.autoDestory ? Browser.window.autoDestory : false;;
		
		public static const autoPlayDelay:int = 80;
		
		public static var autoPlay:Boolean = Browser.window.autoPlay ? Browser.window.autoPlay : false;
		
		//public static var autoCreat:Boolean = Browser.window.autoCreat ? Browser.window.autoCreat : false;
		public static var autoJoin:Boolean = Browser.window.autoJoin ? Browser.window.autoJoin : false;
		
		public static var httpHallIp:String = Browser.window.httpHallIp!=undefined ? Browser.window.httpHallIp : "192.168.18.182";
		public static var httpHallPort:int = Browser.window.httpHallPort!=undefined ? Browser.window.httpHallPort : 5565;
		
		
		public static var isXianshang:Boolean = !Browser.window.debug;
		
		public static var bgVersion:String = "0.1.2";
		
		public static var hallUrl:String=Browser.window.hall_url;
		public static var version:String = Browser.window.version;//Math.random() * 100 + "";
		
		/**语音聊天配置*/
		public static const Chat_Message:Array = 
			[
				{ 
					"id" : "1", 
					"content" : "快点吧，别磨叽", 
					"sound" : "liaotian1"
				}, 
				{ 
					"id" : "2", 
					"content" : "这小牌打的绝了", 
					"sound" : "liaotian2"
				}, 
				{ 
					"id" : "3", 
					"content" : "还让不让我摸牌了！", 
					"sound" : "liaotian3"
				}, 
				{ 
					"id" : "4", 
					"content" : "打一个来碰啊", 
					"sound" : "liaotian4"
				}, 
				{ 
					"id" : "5", 
					"content" : "好歹让我吃一个嘛", 
					"sound" : "liaotian5"
				}, 
				{ 
					"id" : "6", 
					"content" : "哎呀一不小心就胡了", 
					"sound" : "liaotian6"
				}, 
				{ 
					"id" : "7", 
					"content" : "千年砍柴一日烧", 
					"sound" : "liaotian7"
				}, 
				{ 
					"id" : "8", 
					"content" : "你这样以后没朋友", 
					"sound" : "liaotian8"
				}, 
				{ 
					"id" : "10", 
					"content" : "就你这智商还打牌", 
					"sound" : "liaotian10"
				}, 
				{ 
					"id" : "11", 
					"content" : "都别点炮等我自摸", 
					"sound" : "liaotian11"
				}, 
				{ 
					"id" : "12", 
					"content" : "今天你真顺，老你一人胡", 
					"sound" : "liaotian12"
				}, 
				{ 
					"id" : "13", 
					"content" : "都别走接着干", 
					"sound" : "liaotian13"
				}, 
				{ 
					"id" : "15", 
					"content" : "这牌，摇铃", 
					"sound" : "liaotian15"
				}, 
				{ 
					"id" : "16", 
					"content" : "这牌要点炮了，打不出了", 
					"sound" : "liaotian16"
				}, 
				{ 
					"id" : "17", 
					"content" : "三家输，独家赚", 
					"sound" : "liaotian17"
				}, 
				{ 
					"id" : "19", 
					"content" : "今天运气怎么那么差，都不会胡", 
					"sound" : "liaotian19"
				}, 
				{ 
					"id" : "20", 
					"content" : "今天运气真差，老放炮", 
					"sound" : "liaotian20"
				}, 
				{ 
					"id" : "21", 
					"content" : "怎么回事，碰也没有，吃也没有", 
					"sound" : "liaotian21"
				}, 
				{ 
					"id" : "22", 
					"content" : "怎么又是你放炮", 
					"sound" : "liaotian22"
				}, 
				{ 
					"id" : "23", 
					"content" : "怎么又是你自摸，好顺啊", 
					"sound" : "liaotian23"
				}
			];
		
		/**语音聊天配置*/
		public static const Sddz_Chat_Message:Array = 
			[
				{ 
					"id" : "1", 
					"content" : "不要吵了，有什么好吵的，专心玩游戏", 
					"sound" : "chat01"
				}, 
				{ 
					"id" : "2", 
					"content" : "不要走，决战到天亮", 
					"sound" : "chat02"
				}, 
				{ 
					"id" : "3", 
					"content" : "大家好，很高心见到各位", 
					"sound" : "chat03"
				}, 
				{ 
					"id" : "4", 
					"content" : "各位，真不好意思，我要离开一会儿", 
					"sound" : "chat04"
				}, 
				{ 
					"id" : "5", 
					"content" : "和你合作真是太愉快了", 
					"sound" : "chat05"
				}, 
				{ 
					"id" : "6", 
					"content" : "快点吧，我等的花都谢了", 
					"sound" : "chat06"
				}, 
				{ 
					"id" : "7", 
					"content" : "你的牌打得太好了", 
					"sound" : "chat07"
				}, 
				{ 
					"id" : "8", 
					"content" : "你是妹妹，还是哥哥", 
					"sound" : "chat08"
				}, 
				{ 
					"id" : "9", 
					"content" : "咱交个朋友吧，能告诉我你咋联系的吗", 
					"sound" : "chat09"
				}, 
				{ 
					"id" : "10", 
					"content" : "下次再玩吧，我要走了", 
					"sound" : "chat10"
				}, 
//				{ 
//					"id" : "11", 
//					"content" : "再见了，我会想念大家的", 
//					"sound" : "chat11"
//				}, 
				{ 
					"id" : "12", 
					"content" : "又掉线了，网络怎么这么差啊", 
					"sound" : "chat12"
				}
			];
		
		public static function getChatSound(content:String,type:int = 1):String
		{
			var refChat:Object;
			
			switch(type)
			{
				case 1:
					refChat = Chat_Message;
					break;
				case 2:
					refChat = Sddz_Chat_Message;
					break;
			}
			
			var i:int,len:int=refChat.length;
			for(i=0;i<len;i++)
			{
				if(refChat[i].content == content)
				{
					return refChat[i].sound;
				}
			}
			return "";
		}
		
		/**		 *微信 key		 */		
		public static var APPID:String="wxbd702ab8eba0eae8";
		public static var AppSecret:String = "fa08b6f1691a3d40c7a72217d16be97a";
		
		public static var maxVoiceTime:int = 15;
		
		public static const taiRef:Array = [25,26,27];
		public static const payTimeRef:Array = [4,5,18,19,20,21,22,6,7,8];
		public static const payTypeRef:Array = [24,23];//房主支付 共同支付
		public static const xiangshangGameTypeRef:Array = [128,106];
		public static const sddzGameTypeRef:Array = [101,102];
		public static const srddzGameTypeRef:Array = [101,102];
		public static const pinshiGameTypeRef:Array = [101,102];
		
		public static const rules:Object = 
			{
				"Rules":[
					{ 
						"title":"封顶:", 
						"type":"radiobox",
						"items":[
							{"id":25, "desc":"12台", "selected":"true"},
							{"id":26, "desc":"50台", "selected":"false"},
							{"id":27, "desc":"无封顶", "selected":"true"}
						]
					},
					{ 
						"title":"时长:", 
						"type":"radiobox",
						"group":[
							{
								"title":"", 
								"type":"radiobox",
								"items":[
									{"id":19 , "desc":"15分钟", "selected":"false","type":1,"value":15},
									{"id":20 , "desc":"20分钟", "selected":"true","type":1,"value":20},
									{"id":21 , "desc":"30分钟", "selected":"false","type":1,"value":30},
									{"id":22 , "desc":"60分钟", "selected":"false","type":1,"value":60}
								]
							},
							{
								"title":"", 
								"type":"radiobox",
								"items":[
									{"id":4 , "desc":"6局", "selected":"false","type":0,"value":6},
									{"id":5 , "desc":"12局", "selected":"false","type":0,"value":12},
									{"id":18 , "desc":"20局", "selected":"false","type":0,"value":20},
									{"id":6 , "desc":"10局", "selected":"false","type":0,"value":10},
									{"id":7 , "desc":"20局", "selected":"false","type":0,"value":20},
									{"id":8 , "desc":"34局", "selected":"false","type":0,"value":34}
								]
							}
						]
					},
					{ 
						"title":"付费:", 
						"type":"radiobox",
						"items":[
							{"id":23 , "desc":"4人付", "selected":"true"},
							{"id":24 , "desc":"1人付", "selected":"false"}
						]
					}
				]
			};
		public static function getRule(id:int):*
		{
			var item:Array=[];
			for (var i:int = 0,len:int=AppConfig.rules.Rules.length; i < len; i++) 
			{
				if(AppConfig.rules.Rules[i].items){
					for (var k:int = 0,e:int=AppConfig.rules.Rules[i].items.length; k < e; k++) 
					{
						item.push(AppConfig.rules.Rules[i].items[k]);
					}
					
				}else if(AppConfig.rules.Rules[i].group){
					for (var j:int = 0 ,l:int=AppConfig.rules.Rules[i].group.length; j < l; j++) 
					{
						for (var i2:int = 0,i3:int=AppConfig.rules.Rules[i].group[j].items.length; i2 <i3; i2++) 
						{	
							item.push(AppConfig.rules.Rules[i].group[j].items[i2])
						}
						
					}
				}
			}
			for (var i4:int = 0,i5:int=item.length; i4 < i5; i4++) 
			{
				if(item[i4].id==id){
					return item[i4];
				}
			}
			
			
		}
		
		public static function getTimeDate(t:int,long:Boolean=true):String
		{
			var d:Date=new Date(t);
			var y:Number = d.getFullYear();
			var mon:Number = d.getMonth()+1;
			var day:Number = d.getDate();
			var h:Number = d.getHours();
			var min:Number = d.getMinutes();
			var s:Number = d.getSeconds();
			
			var rStr:String;
			if(long)
			{
				rStr =(mon < 10 ? "0"+mon : mon) + '-' + (day < 10 ? "0"+day : day) + ' ' + (h < 10 ? "0"+h : h) + ':' + (min < 10 ? "0"+min : min);
			}
			else
			{
				rStr = (h < 10 ? "0"+h : h) + ':' + (min < 10 ? "0"+min : min) + ':' + (s < 10 ? "0"+s : s);
			}
			return rStr;
		}
		
		public static function getTFmt(t:int,lit:Boolean=false):String
		{
			var h:int = Math.floor(t/3600);
			var m:int = Math.floor((t%3600)/60);
			var s:int = t%60;
			
			if(lit)
			{
				return (m < 10 ? "0"+m : m) + ':' + (s < 10 ? "0"+s : s)
			}
			else
			{
				return (h < 10 ? "0"+h : h) + ':' + (m < 10 ? "0"+m : m) + ':' + (s < 10 ? "0"+s : s)
			}
			
		}
		
		
		
		public static var costRule:Object = {};
		
		public static var giftConfig:Array;
		
		public static var proto:Object; 
		
		public static function get httpPhotoUrl():String{return UserData.HallServiceIp+":"+UserData.HallServicePort+"/mobile/userAvatar?id=";}
		
		public function AppConfig()
		{
		}
		
		public static function get musicVol():Number
		{
			var v:Number=QuickUtils.getLocalVar("musicVol",1);
			SoundManager.setMusicVolume(v);
			SoundManager.musicVolume=v;
			return v;
		}
		
		public static function set musicVol(v:Number):void
		{
			v=v*v;
			QuickUtils.setLocalVar("musicVol",v);
			SoundManager.setMusicVolume(v);
			SoundManager.musicVolume = v;
		}
		
		public static function get soundVol():Number
		{
			var v:Number= QuickUtils.getLocalVar("soundVol",1);		
			SoundManager.setSoundVolume(v);
			SoundManager.soundVolume = v;
			return v;
		}
		
		public static function set soundVol(v:Number):void
		{
			QuickUtils.setLocalVar("soundVol",v);
			SoundManager.setSoundVolume(v);
			SoundManager.soundVolume=v;
		}
		
		/**
		 *重载框架 
		 * 
		 */		
		static public function reloadLaya():void{
			Browser.window.location.href=AppConfig.convertUrl(Browser.window.location.href);
//			laya.utils.Browser.window.location.reload(true);
		}
		
		public static function convertUrl(url:String):String
		{
			return AppConfig.testURL("t",(new Date()).valueOf());  
		}
		
		public static function testURL(param,value):String
		{	
			var url:*=Browser.window.location.href;
			url = url.split("?")[0]
			var query:* = Browser.window.location.search.substring(1);
			var p:* = new RegExp("(^|)" + param + "=([^&]*)(|$)");
			if(p.test(query)){
				query = query.replace(p,param+"="+value);
				return url+'?'+query;
			}else{
				if(query == ''){
					return url+'?'+param+'='+value;
				}else{
					return url+'?'+query+'&'+param+'='+value;
				}
			} 
		}
		
		public static var needIntoGame:Boolean = true;
		
		public static var bannerList:Array = [
			{skin:"banner.png",href:"http://mp.weixin.qq.com/s/UTXCWJJ7o_t81GGVsyUTUA"},
			{skin:"banner1.png",href:"http://mp.weixin.qq.com/s/9HAhqvOKab05EqCepKJpMw"},
			{skin:"banner.png",href:"http://mp.weixin.qq.com/s/UTXCWJJ7o_t81GGVsyUTUA"},
			{skin:"banner1.png",href:"http://mp.weixin.qq.com/s/9HAhqvOKab05EqCepKJpMw"}
			
		];
	}
}