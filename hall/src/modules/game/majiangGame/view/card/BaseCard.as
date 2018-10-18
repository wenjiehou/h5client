package modules.game.majiangGame.view.card
{
	
	import common.event.EventCenter;
	
	import laya.ui.Image;
	import laya.ui.View;
	
	import modules.game.GameModule;
	import modules.game.majiangGame.view.animation.HuAnimation;

	public class BaseCard
	{
		public static const PREPATH:String = "gametable/mahjongpai/";
		
//		768 东风  784 南风  800 西风  816  北风
//		0 16 32 48 64 80 96 112 128
//		1536 春   1552 夏   1568 秋   1584  冬  1280  梅  1296  兰  1312  菊  1328 竹
		
//		public static const CARD_REFERENCE:Object = {512:"筒1.png",528:"筒2.png",  544:"筒3.png",  560:"筒4.png",
//			576:"筒5.png",  592:"筒6.png",  608:"筒7.png" ,    624:"筒8.png",  640:"筒9.png",
//			256:"条1.png",272:"条2.png",  288:"条3.png",  304:"条4.png",
//			320:"条5.png",  336:"条6.png",  352:"条7.png" ,    368:"条8.png",  384:"条9.png",
//			1024:"z中.png",  1040:"z发.png",  1056:"z白.png",
//			768:"z东.png",784:"z南.png",800:"z西.png",816:"z北.png",
//			1536:"h春.png",1552:"h夏.png",1568:"h秋.png",1584:"h冬.png",
//			1280:"h梅.png",1296:"h兰.png",1312:"h菊.png",1328:"h竹.png",
//			0:"万1.png",16:"万2.png",32:"万3.png",48:"万4.png",64:"万5.png",
//			80:"万6.png",96:"万7.png",112:"万8.png",128:"万9.png"};
		
		    //mjs[0] = 0 // 万
			//	mjs[1] = 0
			//	mjs[2] = 0
			//	mjs[3] = 0
			//	mjs[4] = 0
			//	mjs[5] = 0
			//	mjs[6] = 3
			//	mjs[7] = 0
			//	mjs[8] = 0
			
			//	mjs[9] = 0 // 饼
			//	mjs[10] = 0
			//	mjs[11] = 1
			//	mjs[12] = 1
			//	mjs[13] = 4
			//	mjs[14] = 0
			//	mjs[15] = 0
			//	mjs[16] = 0
			//	mjs[17] = 0
			
			//	mjs[18] = 0 // 条
			//	mjs[19] = 0
			//	mjs[20] = 0
			//	mjs[21] = 0
			//	mjs[22] = 0
			//	mjs[23] = 0
			//	mjs[24] = 0
			//	mjs[25] = 0
			//	mjs[26] = 0
			
			//	mjs[27] = 0  // 东   风
			//	mjs[28] = 0  // 南
			//	mjs[29] = 0  // 西
			//	mjs[30] = 0  // 北
			
			//	mjs[31] = 0  // 中   箭
			//	mjs[32] = 0  // 发
			//	mjs[33] = 0  // 白
			
			//	mjs[34] = 0  // 春   花牌, 各一张
			//	mjs[35] = 0  // 夏
			//	mjs[36] = 0  // 秋
			//	mjs[37] = 0  // 冬
			//	mjs[38] = 0  // 梅
			//	mjs[39] = 0  // 兰
			//	mjs[40] = 0  // 竹
			//	mjs[41] = 0  // 菊
		
		public static const CARD_REFERENCE:Object = {
			1:"wan1.png",2:"wan2.png",3:"wan3.png",4:"wan4.png",5:"wan5.png",6:"wan6.png",7:"wan7.png",8:"wan8.png",9:"wan9.png",
			
			10:"tong1.png",11:"tong2.png",12:"tong3.png",13:"tong4.png",14:"tong5.png",15:"tong6.png",16:"tong7.png",17:"tong8.png",18:"tong9.png",
			
			19:"tiao1.png",20:"tiao2.png",21:"tiao3.png",22:"tiao4.png",23:"tiao5.png",24:"tiao6.png",25:"tiao7.png",26:"tiao8.png",27:"tiao9.png",
			
			28:"zdong.png",29:"znan.png",30:"zxi.png",31:"zbei.png",
			
			32:"zzhong.png",33:"zfa.png",34:"zbai.png",
			
			35:"hchun.png",36:"hxia.png",37:"hqiu.png",38:"hjdong.png",39:"hmei.png",40:"hlan.png",41:"hzhu.png",42:"hju.png"
		
		};
		
		/**根据类型和牌值返回牌对应的id*/
		public static function getCardIndex(type:int,num:int):int
		{
			switch(type)
			{
				case 0://万
					return num;
					
					break;
				case 1://筒
					return num + 9;
					break;
				case 2://条
					return num + 18;
					break;
				default:
					return num + 27;
					break;
			}
			
			return 0;
		}
		
		/**根据牌的id返回对应的牌值*/
		public static function getTypeByCardIndex(cardIndex):int
		{
			if(cardIndex <= 9)
			{
				return 0;
			}
			else if(cardIndex <= 18)
			{
				return 1;
			}
			else if(cardIndex <= 27)
			{
				return 2;
			}
			else
			{
				return 3;
			}
			
			return 0;
		}
		
		public static function getNumByCardIndex(cardIndex):int
		{
			if(cardIndex <= 9)
			{
				return cardIndex;
			}
			else if(cardIndex <= 18)
			{
				return cardIndex-9;
			}
			else if(cardIndex <= 27)
			{
				return cardIndex-18;
			}
			else
			{
				return cardIndex-27;
			}
			return 0;
		}
		
//		public static const CARD_REFERENCE:Object = {
//			513:"筒1.png",529:"筒2.png",  545:"筒3.png",  561:"筒4.png",
//			577:"筒5.png",  593:"筒6.png",  609:"筒7.png" ,    625:"筒8.png",  641:"筒9.png",
//			257:"条1.png",273:"条2.png",  289:"条3.png",  305:"条4.png",
//			321:"条5.png",  337:"条6.png",  353:"条7.png" ,    369:"条8.png",  385:"条9.png",
//			1025:"z中.png",  1041:"z发.png",  1057:"z白.png",
//			769:"z东.png",785:"z南.png",801:"z西.png",817:"z北.png",
//			1537:"h春.png",1553:"h夏.png",1569:"h秋.png",1585:"h冬.png",
//			1281:"h梅.png",1297:"h兰.png",1313:"h菊.png",1329:"h竹.png",
//			1:"万1.png",17:"万2.png",33:"万3.png",49:"万4.png",65:"万5.png",
//			81:"万6.png",97:"万7.png",113:"万8.png",129:"万9.png",
//			1793:"鼠.png",1809:"猫.png", 1825: "财神.png" , 1841:"聚宝盆.png"};
		
		public static const CARCSTATE_UP:uint = 0;
		public static const CARCSTATE_DOWN:uint = 1;
		public static const CARCSTATE_BACK:uint = 2;
		
		/**-1表示没有状态*/
		public var state:int = -1;
		protected var _cardIdx:int = 0;
		
		protected var _skin:*;
		public var chiMark:Image;
		public var pengMark:Image;

		public function get skin():*
		{
			return _skin;
		}

		
		public function BaseCard(skin:*)
		{
			_skin = skin;
			chiMark = _skin["chiMark"];
			pengMark = _skin["pengMark"];
			if(chiMark != null)
			{
				chiMark.visible = false;
				pengMark.visible = false;
			}
			
			if(_skin.huEffImg && _skin.huEffImg.parent)
			{
				_skin.huEffImg.parent.removeChild(_skin.huEffImg);
			}
			
			
			//Laya.timer.callLater(this,loadhuEff);
			//loadhuEff();
			
			if(_skin["tingImg"])
			{
				_skin["tingImg"].visible = false;
			}
		}
		
		/**0表示牌的内容没有*/
		public function get cardIdx():int
		{
			return _cardIdx;
		}
		
		public function set cardIdx(value:int):void
		{
			_cardIdx = value;
		}
		
		public function show():void
		{
			
		}
		
		public function hide():void
		{
			
		}
		
		public function get visible():Boolean
		{
			return false;
		}
		
		public function showTingState(bool:Boolean):void
		{
			
		}
		public function cancleTingState():void
		{
			
		}
		public function showKouState(bool:Boolean):void
		{
			
		}
		
		/**去除听牌时的半透明效果*/
		public function removeTingEff():void
		{
			
		}
		
		
		public var isShowTingImg:Boolean = false;
		
		/**显示听牌标志，说明点了这张牌，剩下的牌是可以听牌的*/
		public function showCanTingImg(bool:Boolean):void
		{
			if(_skin["tingImg"])
			{
				_skin["tingImg"].visible = bool;
				
			}
			
			isShowTingImg = bool;
		}
		
		
		public function set canControl(bool:Boolean):void
		{
			
		}
		
		public function set canControlWitchDark(bool:Boolean):void
		{
			
		}
		
		/**牌竖起来*/
		public function up():void
		{
			if(state == CARCSTATE_UP)
			{
				return;
			}
			
			if(_skin["tingImg"])
			{
				_skin["tingImg"].y = 22;
				
			}
			
			
			state = CARCSTATE_UP;
		}
		
		/**牌倒下去*/
		public function down():void
		{
			if(state == CARCSTATE_DOWN)
			{
				return;
			}
			
			if(_skin["tingImg"])
			{
				_skin["tingImg"].y = 2;
				
			}
			
			state = CARCSTATE_DOWN;
		}
		
		/**牌盖住*/
		public function back():void
		{
			if(state == CARCSTATE_BACK)
			{
				return;
			}
			
			state = CARCSTATE_BACK;
			
		}
		
		protected var showBaidaSimbol:Boolean = false;
		
		/**设置牌的内容*/
		public function setCardImg(cardIdx:int):void
		{
			if(showBaidaSimbol && skin["baidaImg"])
			{
				if(cardIdx == GameModule.instance.gameContext.model.baida[1])
				{
					skin["baidaImg"].visible = true;
				}
				else
				{
					skin["baidaImg"].visible = false;
				}
			}
			
			
			if(this.cardIdx == cardIdx)
			{
				return;
			}
			
			this._cardIdx = cardIdx;
		}
		
		public function reset():void
		{
			hide();
			
			if(chiMark != null)
			{
				chiMark.visible = false;
				pengMark.visible = false;
			}
			
			if(UserData.isReplay == false)
			{
				_skin.valueImg.skin = "";
			}
			
			_cardIdx = -1;
			
			showCanTingImg(false);
		}
		
		protected var huEffAni:HuAnimation;
		
		
		protected function loadhuEff():void
		{
			var huImg:Image = _skin.huEffImg;
			
			if(huImg)
			{
				_skin.removeChild(huImg);
				
				huEffAni = new HuAnimation();
				
				huImg.addChild(huEffAni);
				
				huImg.skin= "";
				
				EventCenter.instance.on(EventCenter.MAJIANGPAGE_NOTICE_HUEFF_HIDE,this,hideHuEff);
			}
		}
		
		protected function hideHuEff():void
		{
			_skin.removeChild(_skin.huEffImg);
		} 
		
		
		public function showHuAni(dir:int=0,isDianPao:Boolean=false,isQiangGang:Boolean=false):void
		{
			if(huEffAni == null)
			{
				loadhuEff();
			}
			
			_skin.addChild(_skin.huEffImg);
			huEffAni.play();
			
		}
	}
}