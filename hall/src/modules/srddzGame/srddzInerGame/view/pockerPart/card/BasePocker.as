package modules.srddzGame.srddzInerGame.view.pockerPart.card
{
	import modules.srddzGame.SrddzGameModule;
	import modules.srddzGame.srddzInerGame.model.SrddzModel;
	import modules.srddzGame.srddzInerGame.view.SrddzView;
	
	import ui.srddzGame.ddzPart.item.PockerItemUI;
	
	

	/**扑克牌基类*/
	public class BasePocker
	{
		//牌型相关
		/**类型不合法（无类型）*/
		public static const PAIXING_NON:int = -1;
		
		/**单张*/
		public static const PAIXING_DAN:int = 1;
		
		/**对子*/
		public static const PAIXING_DUIZI:int = 2;
		
		/**三个*/
		public static const PAIXING_SAN:int = 3;
		
		/**三个带2*/
		public static const PAIXING_SANER:int = 4;
		
		/**连对*/
		public static const PAIXING_LIANDUI:int = 5;
		
		/**顺子*/
		public static const PAIXING_SHUNZI:int =6;
		
		/**飞机*/
		public static const PAIXING_FEIJI:int = 7;
		
		/**炸弹*/
		public static const PAIXING_ZHADAN:int = 8; 
		
		/**天王炸弹*/
		public static const PAIXING_TIANZHA:int = 9;
		
		public static const TYPE_WANG:int = 5;
		
		public static const PREPATH:String = "poker/";
		
		public static const CARD_REFERENCE:Object = {
			551:"xiao_w.png",552:"da_w.png",
			
			414:"hong_1.png",416:"hong_2.png",403:"hong_3.png",404:"hong_4.png",405:"hong_5.png",406:"hong_6.png",407:"hong_7.png",408:"hong_8.png",409:"hong_9.png",
			410:"hong_10.png",411:"hong_j.png",412:"hong_q.png",413:"hong_k.png",
			
			314:"fang_1.png",316:"fang_2.png",303:"fang_3.png",304:"fang_4.png",305:"fang_5.png",306:"fang_6.png",307:"fang_7.png",308:"fang_8.png",309:"fang_9.png",
			310:"fang_10.png",311:"fang_j.png",312:"fang_q.png",313:"fang_k.png",
			
			214:"hei_1.png",216:"hei_2.png",203:"hei_3.png",204:"hei_4.png",205:"hei_5.png",206:"hei_6.png",207:"hei_7.png",208:"hei_8.png",209:"hei_9.png",
			210:"hei_10.png",211:"hei_j.png",212:"hei_q.png",213:"hei_k.png",
			
			114:"mei_1.png",116:"mei_2.png",103:"mei_3.png",104:"mei_4.png",105:"mei_5.png",106:"mei_6.png",107:"mei_7.png",108:"mei_8.png",109:"mei_9.png",
			110:"mei_10.png",111:"mei_j.png",112:"mei_q.png",113:"mei_k.png"
			
			//113,213,313,413,105,205,305,103,203,106,306,109,409,110,210,311,312   四带二测试大
			
			//103,203,303,403,105,205,305,104,204,106,306,109,409,110,210,311,312  四带二测试小
			
			//113,213,313,114,214,314,305,103,203,106,306,109,409,412,112,212,312    飞机测试大
			
			//103,203,303,104,204,304,105,205,305,106,306,109,409,110,210,311,312  飞机测试小
		};
		
		/**5王牌 4红桃 3方块 2黑桃 1梅花*/
		public static function getT(card:int):int
		{
			return Math.floor(card/100);
		}
		
		/**牌值取A为14  取2为16*/
		public static function getV(card:int):int
		{
			return card%100;
		}
		
		/**取A为1 取2为2*/
		public static function getVShang(card:int):int
		{
			var value:int = card%100;
			if(value == 14)
			{
				value = 1;
			}
			else if(value == 16)
			{
				value = 2;
			}
			
			return value;
		}
		
		
		public static const STATE_UP:int = 0;
		public static const STATE_BACK:int = 1;
		public static const STATE_DOWN:int=2;
		
		public var skin:PockerItemUI;
		/**-1表示没有状态*/
		public var state:int = -1;
		public var cardIdx:int = 0;
		
		
		public function BasePocker(skin:PockerItemUI)
		{
			this.skin = skin;
			init();
		}
		
		protected function init():void
		{
			//reset();
		}
		
		public function up():void
		{
			if(state == STATE_UP)
			{
				return;
			}
			
			skin.valueImg.visible = true;
			skin.backImg.visible  = false;
			
			state = STATE_UP;
		}
		
		public function back():void
		{
			if(state == STATE_BACK)
			{
				return;
			}
			skin.backImg.visible  = true;
			skin.valueImg.visible = false;
			
			state = STATE_BACK;
		}
		
		public function down():void
		{
			if(state == STATE_DOWN)
			{
				return;
			}
			skin.backImg.visible  = false;
			skin.valueImg.visible = true;
			
			state = STATE_DOWN;
		}
		
		public function get visible():Boolean
		{
			return skin.visible;
		}
		
		public function show():void
		{
			skin.visible = true;
		}
		
		public function hide():void
		{
			skin.visible = false;
		}
		public function setCardImg(cardIdx:int):void
		{
			if(this.cardIdx == cardIdx)
			{
				return;
			}
			
			if(CARD_REFERENCE.hasOwnProperty(cardIdx.toString()))
			{
				skin.valueImg.skin = PREPATH + CARD_REFERENCE[cardIdx.toString()];
			}
			
			this.cardIdx = cardIdx;
		}
		
		/**是否是地主*/
		public function showDizhuImg(bool:Boolean):void
		{
			skin.dizhuImg.visible= bool;
		}
		
		/**是否显示明牌*/
		public function showMingImg(bool:Boolean):void
		{
			skin.mingImg.visible= bool;
		}
		
		public function set canControl(bool:Boolean):void
		{
			
		}
		
		public function set select(bool:Boolean):void
		{
			
		}
		
		public function get select():Boolean
		{
			return false;
		}
		
		protected function get view():SrddzView
		{
			return SrddzGameModule.instance.gameContext.view;
		}
		
		protected function get model():SrddzModel
		{
			return SrddzGameModule.instance.gameContext.model;
		}
		
		/**重置*/
		public function reset():void
		{
			hide();
			skin.backImg.visible = false;
			skin.valueImg.visible = false;
			skin.dizhuImg.visible = false;
			skin.shadowImg.visible = false;
			skin.mingImg.visible = false;
			state = -1;
			select = false;
		}
	}
}