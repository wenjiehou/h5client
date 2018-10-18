package modules.nnGame.inerGame.model.data
{
	import modules.nnGame.inerGame.view.pockerPart.card.BasePocker;

	public class PaixingLogic
	{
		public function PaixingLogic()
		{
			
		}
		
		/**获取牌型*/
		public static function  getPaixing(cards:Array,jishuArr:JishuArrData=null,needSort:Boolean=true):int
		{
			if(needSort)
			{
				cards.sort(compCardsFun);
			}
			if(jishuArr == null)
			{
				jishuArr = JishuArrData.getJishuArrData(cards);
			}
			
		   if(isTongshun(cards,jishuArr) == true)
			{
				return BasePocker.PAIXING_TONGSHUN;//同花顺
			}
			else if(isZhadan(cards,jishuArr) == true)
			{
				return BasePocker.PAIXING_ZHADAN;//炸弹
			}
			else if(isWuxiao(cards,jishuArr) == true)
			{
				return BasePocker.PAIXING_WUXIAO;//五小
			}
			else if(isWuhua(cards,jishuArr) == true)
			{
				return BasePocker.PAIXING_WUHUA;
			}
			else if(isHulu(cards,jishuArr) == true)
			{
				return BasePocker.PAIXING_HULU;
			}
			else if(isShunzi(cards,jishuArr) == true)
			{
				return BasePocker.PAIXING_SHUNZI;
			}
			else if(isTonghua(cards,jishuArr) == true)
			{
				return BasePocker.PAIXING_TONGHUA;
			}
			else
			{
				var niuData:NiuData = NiuData.getNiuData(cards);
				if(niuData.niuNum == 0)
				{
					return BasePocker.PAIXING_MEINIU;
				}
				else if(niuData.niuNum == 1)
				{
					return BasePocker.PAIXING_NIUYI;
				}
				else if(niuData.niuNum == 2)
				{
					return BasePocker.PAIXING_NIUER;
				}
				else if(niuData.niuNum == 3)
				{
					return BasePocker.PAIXING_NIUSAN;
				}
				else if(niuData.niuNum == 4)
				{
					return BasePocker.PAIXING_NIUSI;
				}
				else if(niuData.niuNum == 5)
				{
					return BasePocker.PAIXING_NIUWU;
				}
				else if(niuData.niuNum == 6)
				{
					return BasePocker.PAIXING_NIULIU;
				}
				else if(niuData.niuNum == 7)
				{
					return BasePocker.PAIXING_NIUQI;
				}
				else if(niuData.niuNum == 8)
				{
					return BasePocker.PAIXING_NIUBA;
				}
				else if(niuData.niuNum == 9)
				{
					return BasePocker.PAIXING_NIUJIU;
				}
				else if(niuData.niuNum == 10)
				{
					return BasePocker.PAIXING_NIUNIU;
				}
			}
			
			
			return BasePocker.PAIXING_MEINIU;
		}
		
		/**返回牌型是不是1牛到牛牛*/
		public static function isNiuPaixing(paixing:int):Boolean
		{
			switch(paixing)
			{
				case BasePocker.PAIXING_TONGSHUN:
				case BasePocker.PAIXING_ZHADAN:
				case BasePocker.PAIXING_WUXIAO:
				case BasePocker.PAIXING_WUHUA:
				case BasePocker.PAIXING_HULU:
				case BasePocker.PAIXING_HULU:
				case BasePocker.PAIXING_SHUNZI:
				case BasePocker.PAIXING_TONGHUA:	
				case	BasePocker.PAIXING_MEINIU:
					return false;
					
			}
			
			return true;
		}
		
		
		//同花顺 炸弹 五小牛 五花牛 葫芦 顺子 同花 牛牛。。。 没牛
		/**是否为同花顺*/
		public static function isTongshun(cards:Array,jishuData:JishuArrData=null):Boolean
		{
			if(isTonghua(cards,jishuData) ==true && isShunzi(cards,jishuData) == true)
			{
				return true;
			}
			return false;
		}
		
		/**是否为炸弹*/
		public static function isZhadan(cards:Array,jishuData:JishuArrData=null):Boolean
		{
			if(jishuData == null)
			{
				jishuData = JishuArrData.getJishuArrData(cards);
			}
			
			if(jishuData.fourArr.length == 1)
			{
				return true;
			}
			
			return false;
		}
		
		/**是否为五小牛*/
		public static function isWuxiao(cards:Array,jishuData:JishuArrData=null):Boolean
		{
			if(jishuData == null)
			{
				jishuData = JishuArrData.getJishuArrData(cards);
			}
			
			var i:int = 0;
			var totalV:int = 0;
			
			for(i=0;i<jishuData.nValueArr.length;i++)
			{
				if(jishuData.nValueArr[i] >= 5)//大于等于5就不行啦
				{
					return false;
				}
				totalV += jishuData.nValueArr[i];
				if(totalV >= 10)
				{
					return false;
				}
			}
			return true;
		}
		
		/**是否为五花牛*/
		public static function isWuhua(cards:Array,jishuData:JishuArrData=null):Boolean
		{
			if(jishuData == null)
			{
				jishuData = JishuArrData.getJishuArrData(cards);
			}
			var i:int;
			for(i=0;i<jishuData.isHuaArr.length;i++)
			{
				if(jishuData.isHuaArr[i] == false)
				{
					return false;
				}
			}
			return true;
		}
		
		

		
		
		/**是否是葫芦*/
		public static function isHulu(cards:Array,jishuData:JishuArrData=null):Boolean
		{
			if(jishuData == null)
			{
				jishuData = JishuArrData.getJishuArrData(cards);
			}
			
			if(jishuData.threeArr.length == 1 && jishuData.twoArr.length == 1)
			{
				return true;
			}
			
			return false;
		}
		
		/**是否是顺子*/
		public static function isShunzi(cards:Array,jishuData:JishuArrData=null):Boolean
		{
			var i:int,len:int=cards.length;
			if(jishuData == null)
			{
				jishuData = JishuArrData.getJishuArrData(cards);
			}
			
			if(jishuData.fourArr.length == 0 && jishuData.threeArr.length == 0 && jishuData.twoArr.length == 0 && jishuData.danArr.length >= 5)
			{
				//如果单张含有 16 就需要转化 如果没有就不需要转化
				var danArr:Array = jishuData.danArr.concat();
				var idx:int = jishuData.danArr.indexOf(16);
				if(idx != -1&& UserData.needOneTwo)//没有2 不行就不行//UserData.needOneTwo
				{
					JishuArrData.conversValueArr(danArr);
				}
				if(JishuArrData.checkValuelian(danArr) == true)
				{
					return true;
				}
			}
			return false;
		}
		
		/**是否为同一花色*/
		public static function isTonghua(cards:Array,jishuData:JishuArrData=null):Boolean
		{
			if(jishuData == null)
			{
				jishuData = JishuArrData.getJishuArrData(cards);
			}
			
			var i:int=0;
			var type:int = -1;
			for(i=0;i<jishuData.typeArr.length;i++)
			{
				if(i==0)
				{
					type = jishuData.typeArr[i];
				}
				else if(jishuData.typeArr[i] != type)
				{
					return false;
				}
			}
			return true;
		}
		
		
		
		/**我们这里采用升序 a>b return 1 交换位置，升序*/
		public static function compCardsFun(A:int,B:int):int
		{
			if(A== 0 || B == 0)//没有值得牌直接返回
			{
				return 0;
			}
			var typeA:int = BasePocker.getT(A);
			var typeB:int = BasePocker.getT(B);
			
			var valueA:int = BasePocker.getV(A);
			var valueB:int = BasePocker.getV(B);
			
			if(valueA > valueB)
			{
				return 1;
			}
			else if(valueA == valueB)
			{
				if(typeA > typeB)//红桃在先
				{
					return 1;
				}
				else
				{
					return -1;
				}
			}
			else
			{
				return -1;
			}
		}
		
		/**从一组牌获得values对应cards*/
		public static function getCardsFromValues(fromCards:Array,values:Array):Array
		{
			var retArr:Array = [];
			var tempArr:Array = fromCards.concat();
			var i:int,j:int;
			
			for(i=0;i<values.length;i++)
			{
				for(j=0;j<tempArr.length;j++)
				{
					if(BasePocker.getV(tempArr[j]) == values[i] || BasePocker.getVShang(tempArr[j]) == values[i])//值相同
					{
						retArr.push(tempArr[j]);
						tempArr.splice(j,1);
						break;
					}
				}
			}
			
			return retArr;
		}
		
		/**给手里的牌进行排序*/
		public static function sortHandleCards(cards:Array):void
		{
			cards.sort(compCardsFun);
		}
		
		/**给打出去的牌排序*/
		public static function sortOutputCards(cards:Array):Array
		{
			var retCards:Array;
			sortHandleCards(cards);//排序
			var jishuData:JishuArrData = JishuArrData.getJishuArrData(cards);
			var paixing:int = getPaixing(cards);
			var valueCards:Array = [];
			var tempValues:Array = [];
			
			var i:int;
			var temp:int;
			var idx:int;
			switch(paixing)//顺子 连队 三二 飞机
			{
				case BasePocker.PAIXING_SHUNZI:
					if(UserData.needOneTwo)//UserData.needOneTwo
					{
						if(jishuData.danArr.indexOf(16) != -1)//有 2 才需要处理
						{
							JishuArrData.conversValueArr(jishuData.danArr);
							cards = getCardsFromValues(cards,jishuData.danArr);
						}
					}
					break; 
				case BasePocker.PAIXING_HULU:
					valueCards = [jishuData.threeArr[0],jishuData.threeArr[0],jishuData.threeArr[0],jishuData.twoArr[0],jishuData.twoArr[0]];//33322
					cards = getCardsFromValues(cards,valueCards);
					break;
			}
			return retCards = cards.concat();
		}
		
		/**从一个数组中删除另一个数组中有的元素*/
		public  static function cutArrInArr(cutArr:Array,inArr:Array):void
		{
			var mcutArr:Array = cutArr.concat();
			
			var i:int,j:int,idx:int;
			for(i=0;i<inArr.length;i++)
			{
				idx = mcutArr.indexOf(inArr[i]);
				if(idx != -1)
				{
					inArr.splice(i,1);
					i--;
					mcutArr.splice(idx,1);
				}
			}
		}
	}
}