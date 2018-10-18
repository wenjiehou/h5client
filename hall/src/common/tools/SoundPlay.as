package common.tools
{
	import laya.media.SoundChannel;
	import laya.media.SoundManager;
	import laya.utils.Handler;

	public class SoundPlay
	{
		private static var _instance:SoundPlay;
		public static function get instance():SoundPlay
		{
			if(_instance == null)
			{
				_instance = new SoundPlay(new SingleForcer());
			}
			
			return _instance;
		}
		
		 public var  rootPath:String;
		 public var effPath:String;
		 protected var _defaultLanguage:int = 1;//putonghua
		 public var languageReference:Object;
		 public var sexReference:Object;

		 public function set defaultLanguage(value:int):void
		 {
			 _defaultLanguage = value; 
			 QuickUtils.setLocalVar("yinyuelan",value);
		 }
		 
		 public function get defaultLanguage():int
		 {
			 return _defaultLanguage;
		 }
		 
		 private var cardSoundReference:Object;
		
		 public static const chi:String = "chi";
		 public static const peng:String = "peng";
		 public static const gang:String = "gang";
		 public static const ting:String = "ting";
		 public static const hu:String = "hu";
		 public static const zimo:String = "zimo";
		
		public function SoundPlay(force:SingleForcer)
		{
			_defaultLanguage = 0;//QuickUtils.getLocalVar("yinyuelan",0);
			
			rootPath = "res/sounds/";  
			effPath=rootPath+"effect/";
			
			
			languageReference = {1:"xiangshanhua/",0:"xiangshanhua/"};//putonghua
			sexReference = {"1":"man/","2":"woman/"};//man
			
			cardSoundReference = {10:"g_1tong.mp3",11:"g_2tong.mp3",  12:"g_3tong.mp3",  13:"g_4tong.mp3",
				14:"g_5tong.mp3",  15:"g_6tong.mp3",  16:"g_7tong.mp3" ,    17:"g_8tong.mp3",  18:"g_9tong.mp3",
				19:"g_1tiao.mp3",20:"g_2tiao.mp3",  21:"g_3tiao.mp3",  22:"g_4tiao.mp3",
				23:"g_5tiao.mp3",  24:"g_6tiao.mp3",  25:"g_7tiao.mp3" ,    26:"g_8tiao.mp3",  27:"g_9tiao.mp3",
				32:"g_zhong.mp3",  33:"g_fa.mp3",  34:"g_bai.mp3","chi":"g_chi.mp3",
				"peng":"g_peng.mp3","gang":"g_gang.mp3","ting":"g_ting.mp3","hu":"g_hu.mp3","zimo":"g_zimo.mp3",
				1:"g_1wan.mp3",2:"g_2wan.mp3",3:"g_3wan.mp3",4:"g_4wan.mp3",5:"g_5wan.mp3",
				6:"g_6wan.mp3",7:"g_7wan.mp3",8:"g_8wan.mp3",9:"g_9wan.mp3",
				28:"g_dongfeng.mp3",29:"g_nanfeng.mp3",30:"g_xifeng.mp3",31:"g_beifeng.mp3",
				35:"g_buhua.mp3",36:"g_buhua.mp3",37:"g_buhua.mp3",38:"g_buhua.mp3",
				39:"g_buhua.mp3",40:"g_buhua.mp3",41:"g_buhua.mp3",42:"g_buhua.mp3",
				43 :"g_buhua.mp3", 44:"g_buhua.mp3", 45 :"g_buhua.mp3", 46:"g_buhua.mp3"};
		}
		
		
		public function getCardPath(sex:int,cardIdx:*):String
		{
			var returnStr:String;
			
			returnStr = rootPath + languageReference[_defaultLanguage] + (sexReference[""+sex] == undefined ? "woman/" : sexReference[""+sex]) + cardSoundReference[""+cardIdx];
			
			return returnStr;
		}
		
		public function getSexRef(sex:int):String{
			if( sexReference[""+sex] == undefined)
			{
				sexReference[""+sex] = "woman/";
			}
			return sexReference[""+sex]
		}
		
		public function getBuhua(sex:String):String
		{
			var returnStr:String;
			
			returnStr = rootPath + languageReference[_defaultLanguage] + (sexReference[""+sex] == undefined ? "woman/" : sexReference[""+sex]) + cardSoundReference["46"];
			
			return returnStr;
		}
		
		public function getliaotianPath(sex:String,sound:String):String
		{
			var returnStr:String;
			
			returnStr = rootPath + languageReference[_defaultLanguage] + (sexReference[""+sex] == undefined ? "woman/" : sexReference[""+sex]) + "g_" +sound + ".mp3";
			
			return returnStr;
		}
		
		public function getSddzChatPath(sex:String,sound:String):String
		{
			var returnStr:String;
			
			returnStr = rootPath + "sddz/chat/" + (sexReference[""+sex] == undefined ? "woman/" : sexReference[""+sex]) + sound + ".mp3";
			
			return returnStr;
		}
		
		
//		/**选择了语言之后的路径*/
//		public function getRealRootPath():String
//		{
//			var returnStr:String;
//			
//			returnStr = rootPath + languageReference[_defaultLanguage];
//			
//			return returnStr;
//			
//		}
		
		/**播放普通的点击按钮的声音*/
		public function playClickBtnSound():void
		{
			playEffect("ui_click");
//			var vol=AppConfig.soundVol;
		}
		
		/**播放ready*/
		public function playReadySound():void
		{
			playEffect("audio_ready");
//			var vol=AppConfig.soundVol;
		}
		public static function playEffect(effName:String,handle:Handler=null):void{
			SoundManager.playSound(instance.effPath +effName+ ".mp3",1,handle);
		}
		
		/***/
		public function playSound(url:String, loops:int=1, complete:Handler=null, soundClass:Class=null):void
		{
			console.log(url)
			var channel:SoundChannel = SoundManager.playSound(url, loops, complete, soundClass);
			if(channel)
			{
				channel.volume = SoundManager.soundVolume;
			}
		}
		
		/***/
		public function playMusic(url:String, loops:int = 0, complete:Handler = null):void
		{
			console.log(url);
			var channel:SoundChannel = SoundManager.playMusic(url, loops, complete);
			if(channel)
			{
				channel.volume = SoundManager.soundVolume;
			}
		}
		
		public static function swithMusic(param0:String):void
		{
			SoundManager.stopMusic();
			// TODO Auto Generated method stub
			switch(param0){
				case "hall":
					SoundManager.playMusic(instance.rootPath +"bg_music.mp3",100);
					break;
				case "game": 
					SoundManager.playMusic(instance.rootPath +"ingamemusice.mp3",100);
					break;
			}
			var vol:Number=AppConfig.musicVol;
		}
	}
}

class SingleForcer{}