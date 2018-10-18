package modules.srddzGame.srddzInerGame.model.data
{
	import modules.srddzGame.SrddzGameModule;
	import modules.srddzGame.srddzInerGame.view.pockerPart.card.BasePocker;

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
			
			if(isDanzhang(cards) == true)
			{
				return BasePocker.PAIXING_DAN;
			}
			else if(isDuizi(cards) == true)
			{
				return BasePocker.PAIXING_DUIZI;
			}
			else if(isSan(cards,jishuArr) == true)
			{
				return BasePocker.PAIXING_SAN;
			}
			else if(isSanEr(cards,jishuArr) == true)
			{
				return BasePocker.PAIXING_SANER;
			}
			else if(SrddzGameModule.instance.gameContext.model.srddzMsgs.ACK_RoomInfo.Rule[3] == 101 && isShunzi(cards,jishuArr) == true)
			{
				return BasePocker.PAIXING_SHUNZI;
			}
			else if(isLiandui(cards,jishuArr) == true)
			{
				return BasePocker.PAIXING_LIANDUI;
			}
			else if(isFeiji(cards,jishuArr) == true)
			{
				return BasePocker.PAIXING_FEIJI;
			}
			else if(isZhadan(cards) == true)
			{
				return BasePocker.PAIXING_ZHADAN;
			}
			else if(isTianZha(cards) == true)
			{
				return BasePocker.PAIXING_TIANZHA
			}
			
			return BasePocker.PAIXING_NON;
		}
		
		/**是否是单张*/
		public static function isDanzhang(cards:Array):Boolean
		{
			if(cards.length == 1)
			{
				return true;
			}
			
			return false;
		}
		
		/**是否是对子*/
		public static function isDuizi(cards:Array):Boolean
		{
			if(cards.length == 2)
			{
				if(BasePocker.getV(cards[0]) == BasePocker.getV(cards[1]))//值相同的两张牌
				{
					return true;
				}
			}
			return false;
		}
		
		/**是否是三个*/
		public static function isSan(cards:Array,jishuData:JishuArrData=null):Boolean
		{
			var i:int,len:int = cards.length;
			
			if(len == 3)
			{
				if(jishuData == null)
				{
					jishuData = JishuArrData.getJishuArrData(cards);
				}
				if(jishuData.threeArr.length == 1)
				{
					return true;
				}
				
			}
			return false;
		}
		
		/**是否是三个带二*/
		public static function isSanEr(cards:Array,jishuData:JishuArrData=null):Boolean
		{
			if(cards.length == 5)
			{
				if(jishuData == null)
				{
					jishuData = JishuArrData.getJishuArrData(cards);
				}
				
				if(jishuData.threeArr.length == 1 && jishuData.twoArr.length == 1)
				{
					return true;
				}
			}
			
			return false;
		}
		
		/**是都是连对*/
		public static function isLiandui(cards:Array,jishuData:JishuArrData=null):Boolean
		{
			var i:int;
			var len:int = cards.length;
			
			if(len >= 6 && len%2 == 0)
			{
				if(jishuData == null)
				{
					jishuData = JishuArrData.getJishuArrData(cards);
				}
				
				if(jishuData.fiveArr.length==0 && jishuData.sixArr.length==0 && jishuData.sevenArr.length==0 && jishuData.eightArr.length==0 &&  jishuData.fourArr.length == 0 && jishuData.threeArr.length == 0 && jishuData.twoArr.length >= 3 && jishuData.danArr.length == 0)
				{
					var twoLian:Boolean = false;
					twoLian = JishuArrData.checkValuelian(jishuData.twoArr);
					if(twoLian == false && UserData.needOneTwo)//UserData.needOneTwo
					{
						var twoArr:Array = jishuData.twoArr.concat();
						JishuArrData.conversValueArr(twoArr);
						twoLian = JishuArrData.checkValuelian(twoArr);
					}
					if(twoLian)//对子数量大于等于三并且是连着的
					{
						return true;
					}
				}
			}
			else
			{
				return false;
			}
			
			return false;
		}
		
		/**是否是顺子*/
		public static function isShunzi(cards:Array,jishuData:JishuArrData=null):Boolean
		{
			var i:int,len:int=cards.length;
			
			if(len < 5)
			{
				return false;
			}
			else
			{
				if(jishuData == null)
				{
					jishuData = JishuArrData.getJishuArrData(cards);
				}
				
				if(jishuData.fiveArr.length==0 && jishuData.sixArr.length==0 && jishuData.sevenArr.length==0 && jishuData.eightArr.length==0 && jishuData.fourArr.length == 0 && jishuData.threeArr.length == 0 && jishuData.twoArr.length == 0 && jishuData.danArr.length >= 5)
				{
					//如果单张含有 16 就需要转化 如果没有就不需要转化
					var danArr:Array = jishuData.danArr.concat();
					
					var idx:int = jishuData.danArr.indexOf(16);
					if(idx != -1&& UserData.needOneTwo)//没有2 不行就不行//UserData.needOneTwo
					{
						JishuArrData.conversValueArr(danArr);
						//danArr.sort(compCardsFun);
						//alert(danArr);
					}
					if(JishuArrData.checkValuelian(danArr) == true)
					{
						return true;
					}
				}
				
			}
			return false;
		}
		
		/**是否是飞机*/
		public static function isFeiji(cards:Array,jishuData:JishuArrData=null):Boolean
		{
			if(cards.length < 6)
			{
				return false;
			}
			if(jishuData == null)
			{
				jishuData = JishuArrData.getJishuArrData(cards);
			}
			var feijiData:FeijiData = FeijiData.getFeiji(jishuData);
			if(feijiData != null)
			{
				return true;
			}
			return false;
		}
		
		/**是否是炸弹*/
		public static function  isZhadan(cards:Array):Boolean
		{
			if(cards.length < 4) // 大于等于4
			{
				return false;
			}
			
			var i:int,len:int=cards.length;
			for(i=0;i<len-1;i++)
			{
				if(BasePocker.getV(cards[i+1]) != BasePocker.getV(cards[i]))//牌值都相同
				{
					return false;
				}
			}
			
			return true;
		}
		
		/**是否是天王炸弹*/
		public static function isTianZha(cards:Array):Boolean
		{
			if(cards.length == 4)
			{
				for(var i:int=0;i<cards.length;i++)
				{
					if(BasePocker.getT(cards[i]) != BasePocker.TYPE_WANG)
					{
						return false;
					}
				}
				return true;
			}
			return false;
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
		
		/**从报到的牌中找出大于当前的牌*/
		public static function getBigThanWBaodao(fromCards:Array,targetCards:Array):Array
		{
			var retArr:Array = [];
			
			fromCards.sort(compCardsFun);
			targetCards.sort(compCardsFun);
			var fjishu:JishuArrData = JishuArrData.getJishuArrData(fromCards);
			var tjishu:JishuArrData = JishuArrData.getJishuArrData(targetCards);
			var tPaixing:int = getPaixing(targetCards,tjishu,false);
			
			var i:int;
			var valueArr:Array = [];
			var tempV:int;
			var zhadan:Array = [];
			
			if(tPaixing != BasePocker.PAIXING_ZHADAN && tPaixing != BasePocker.PAIXING_TIANZHA)
			{
				if(fjishu.sevenArr.length > 0)
				{
					for(i=0;i<7;i++)
					{
						valueArr.push(fjishu.sevenArr[0]);
					}
					retArr = getCardsFromValues(fromCards,valueArr);
					
				}
				else 	if(fjishu.eightArr.length > 0)
				{
					for(i=0;i<8;i++)
					{
						valueArr.push(fjishu.eightArr[0]);
					}
					retArr = getCardsFromValues(fromCards,valueArr);
					 
				}
				else if(checkHaveTianZha(fjishu) == true)//有天王炸弹
				{
					retArr = [551,551,552,552];
				}
			}
			else if(tPaixing != BasePocker.PAIXING_TIANZHA)//不是天炸，就是炸弹咯
			{
				if(tjishu.valueArr.length < 7)
				{
					if(fjishu.sevenArr.length > 0)
					{
						for(i=0;i<7;i++)
						{
							valueArr.push(fjishu.sevenArr[0]);
						}
						retArr = getCardsFromValues(fromCards,valueArr);
						
					}
					else 	if(fjishu.eightArr.length > 0)
					{
						for(i=0;i<8;i++)
						{
							valueArr.push(fjishu.eightArr[0]);
						}
						retArr = getCardsFromValues(fromCards,valueArr);
						
					}
					else if(checkHaveTianZha(fjishu) == true)//有天王炸弹
					{
						retArr = [551,551,552,552];
					}
				}
				else
				{
					zhadan =  getBiggerZhaDan(fjishu,tjishu.valueArr[0],tjishu.valueArr.length);
					if(zhadan.length > 0)
					{
						retArr = getCardsFromValues(fromCards,zhadan);
						return retArr;
					}
					else if(checkHaveTianZha(fjishu) == true)//有天王炸弹
					{
						retArr = [551,551,552,552];
					}
				}
			}
			return retArr;
		}
		
		
		/**从一组牌里面找出大于当前牌的的牌</br>
		 * 应为报到了，报到的牌会单独拿出来判断，所以不用管报到的牌*/
		public static function getBigThan(fromCards:Array,targetCards:Array):Array
		{
			//
			
			var retArr:Array = [];
			if(targetCards.length == 0)//目标牌没有就给最小的第一张
			{
				retArr.push(fromCards[0]);
				return retArr;
			}
			
			fromCards.sort(compCardsFun);
			targetCards.sort(compCardsFun);
			
			var tjishu:JishuArrData = JishuArrData.getJishuArrData(targetCards);
			var tPaixing:int = getPaixing(targetCards,tjishu,false);
//			if(tPaixing == -1)//没有牌型
//			{
//				return retArr;
//			}
			
			var fjishu:JishuArrData = JishuArrData.getJishuArrData(fromCards);
			var tempV:int;
			var i:int,j:int,idx:int;
			var lianLen:int ;
			var tempArr:Array;
			var zhadan:Array;
			
			switch(tPaixing)
			{
				case BasePocker.PAIXING_NON:
					alert("打出的牌型不合法！");
					return retArr;
					break;
				case BasePocker.PAIXING_DAN:
					tempV =  tjishu.danArr[0];
					//先从单张里面找一张
					for(i=0;i<fjishu.danArr.length;i++)
					{
						if(fjishu.danArr[i] > tempV)//就这张了
						{
							retArr = getCardsFromValues(fromCards,[fjishu.danArr[i]]);
							return retArr;
						}
						
					}
					//单张没有找到
					for(i=0;i<fjishu.twoArr.length;i++)
					{
						if(fjishu.twoArr[i] > tempV)//就这张了
						{
							retArr = getCardsFromValues(fromCards,[fjishu.twoArr[i]]);
							return retArr;
						}
					}
					//对子没找到
					for(i=0;i<fjishu.threeArr.length;i++)
					{
						if(fjishu.threeArr[i] > tempV)//就这张了
						{
							retArr = getCardsFromValues(fromCards,[fjishu.threeArr[i]]);
							return retArr;
						}
					}
					zhadan =  getBiggerZhaDan(fjishu);
					if(zhadan.length > 0)
					{
						retArr = getCardsFromValues(fromCards,zhadan);
						return retArr;
					}
				
					
					//对王不需要 如果有 一个王就干过了
					return retArr;//空的表示没有找到咯
					break;
				case BasePocker.PAIXING_DUIZI:
					tempV =  tjishu.twoArr[0];//只有一个对子嘛
					//从自己的对子里面找
					for(i=0;i<fjishu.twoArr.length;i++)
					{
						if(fjishu.twoArr[i] > tempV)//就这张了
						{
							retArr = getCardsFromValues(fromCards,[fjishu.twoArr[i],fjishu.twoArr[i]]);
							return retArr;
						}
					}
					
					for(i=0;i<fjishu.threeArr.length;i++)
					{
						if(fjishu.threeArr[i] > tempV)//就这张了
						{
							retArr = getCardsFromValues(fromCards,[fjishu.threeArr[i],fjishu.threeArr[i]]);
							return retArr;
						}
					}
				    //有炸弹啊 随便找个炸弹嘛
					zhadan =  getBiggerZhaDan(fjishu);
					if(zhadan.length > 0)
					{
						retArr = getCardsFromValues(fromCards,zhadan);
						return retArr;
					}
					return retArr;//空的表示没有找到咯 
					break;
				
				case BasePocker.PAIXING_SAN:
					tempV =  tjishu.threeArr[0];//只有一个三个嘛
					//从自己的三个里面找
					for(i=0;i<fjishu.threeArr.length;i++)
					{
						if(fjishu.threeArr[i] > tempV)//就这张了
						{
							retArr = getCardsFromValues(fromCards,[fjishu.threeArr[i],fjishu.threeArr[i],fjishu.threeArr[i]]);
							return retArr;
						}
					}
					//有炸弹啊 随便找个炸弹嘛
					zhadan =  getBiggerZhaDan(fjishu);
					if(zhadan.length > 0)
					{
						retArr = getCardsFromValues(fromCards,zhadan);
						return retArr;
					}
					
					//看看有没有天炸
					if(checkHaveTianZha(fjishu) == true)
					{
						retArr = [551,551,552,552];
					}
					return retArr;//空的表示没有找到咯 
					break;
				
				case BasePocker.PAIXING_SANER:
					tempV =  tjishu.threeArr[0];//只有一个三个带2
					//从自己的三个里面找
					for(i=0;i<fjishu.threeArr.length;i++)
					{ 
						if(fjishu.threeArr[i] > tempV)//就这张了
						{
							if(fjishu.twoArr.length > 0)//给一个三带2就行了
							{
								retArr = getCardsFromValues(fromCards,[fjishu.threeArr[i],fjishu.threeArr[i],fjishu.threeArr[i],fjishu.twoArr[0],fjishu.twoArr[0]]);
								return retArr;
							}
							else if(fjishu.threeArr.length > 1)
							{
								if(i==0)//当前第0个取第一个里面的一张
								{
									retArr = getCardsFromValues(fromCards,[fjishu.threeArr[i],fjishu.threeArr[i],fjishu.threeArr[i],fjishu.threeArr[1],fjishu.threeArr[1]]);
									return retArr;
								}
								else//不是第0个就取第0个
								{
									retArr = getCardsFromValues(fromCards,[fjishu.threeArr[i],fjishu.threeArr[i],fjishu.threeArr[i],fjishu.threeArr[0],fjishu.threeArr[0]]);
									return retArr;
								}
							}
						}
					}
					//有炸弹啊 随便找个炸弹嘛
					zhadan =  getBiggerZhaDan(fjishu);
					if(zhadan.length > 0)
					{
						retArr = getCardsFromValues(fromCards,zhadan);
						return retArr;
					}
					
					//看看有没有天炸
					if(checkHaveTianZha(fjishu) == true)
					{
						retArr = [551,551,552,552];
					}
					return retArr;//空的表示没有找到咯 
					break;
				case BasePocker.PAIXING_LIANDUI:
					var twoArr:Array = tjishu.twoArr.concat();
					if(UserData.needOneTwo)//UserData.needOneTwo
					{
						if(twoArr.indexOf(16) != -1)
						{
							JishuArrData.conversValueArr(twoArr);
						}
					}
					
					tempV = twoArr[twoArr.length-1];
					lianLen = twoArr.length;
					
					var moreTwoArr:Array = [];//fjishu.fourArr.concat() 四个的不要拆了
					moreTwoArr = moreTwoArr.concat(fjishu.threeArr);
					moreTwoArr = moreTwoArr.concat(fjishu.twoArr);
					
					moreTwoArr.sort(compCardsFun);
					var cmoreTwoArr:Array = moreTwoArr.concat();
					
					for(i=0;i<moreTwoArr.length;i++)//去除不符合的对子
					{
						if(moreTwoArr[i] < tempV - (lianLen-2))// 789 9-1=8 <8的都不行    34567        7-(5-2) = 4 45678是可以的哦           
						{
							moreTwoArr.splice(i,1);
							i--;
						}
					}
					
					if(moreTwoArr.length >= lianLen)//剩下的长度要大于连队的长度 从中找出一个连续的长度
					{
						tempArr= getFromVlauesLenThan(moreTwoArr,lianLen);
						if(tempArr != null && tempArr.length > 0)//找到咯
						{
							tempArr = tempArr.concat(tempArr);
							tempArr.sort(compCardsFun);
							retArr = getCardsFromValues(fromCards,tempArr.reverse());
							return retArr;
						}
					}
					
					if(UserData.needOneTwo)//按照 1 2 的情况再来一次/ UserData.needOneTwo
					{
						moreOneArr = cmoreTwoArr.concat();
						
						JishuArrData.conversValueArr(moreTwoArr);
						
						for(i=0;i<moreTwoArr.length;i++)//去除不符合的对子
						{
							if(moreTwoArr[i] < tempV - (lianLen-2))// 789 9-1=8 <8的都不行    34567        7-(5-2) = 4 45678是可以的哦           
							{
								moreTwoArr.splice(i,1);
								i--;
							}
						}
						
						if(moreTwoArr.length >= lianLen)//剩下的长度要大于连队的长度 从中找出一个连续的长度
						{
							tempArr= getFromVlauesLenThan(moreTwoArr,lianLen);
							if(tempArr != null && tempArr.length > 0)//找到咯
							{
								tempArr = tempArr.concat(tempArr);
								tempArr.sort(compCardsFun);
								retArr = getCardsFromValues(fromCards,tempArr.reverse());
								return retArr;
							}
						}
					}
					
					//有炸弹啊 随便找个炸弹嘛
					zhadan =  getBiggerZhaDan(fjishu);
					if(zhadan.length > 0)
					{
						retArr = getCardsFromValues(fromCards,zhadan);
						return retArr;
					}
					
					//看看有没有天炸
					if(checkHaveTianZha(fjishu) == true)
					{
						retArr = [551,551,552,552];
					}
					return retArr;//空的表示没有找到咯 
					break;
				
				case BasePocker.PAIXING_SHUNZI:
					var danArr:Array = tjishu.danArr.concat();
					if(UserData.needOneTwo)//UserData.needOneTwo
					{
						if(danArr.indexOf(16) != -1)
						{
							JishuArrData.conversValueArr(danArr);
						}
					}
					
					
					tempV = danArr[danArr.length-1];
					lianLen = danArr.length;
					
					var moreOneArr:Array = [];// fjishu.fourArr.concat() 四个的不要拆了
					moreOneArr = moreOneArr.concat(fjishu.threeArr);
					moreOneArr = moreOneArr.concat(fjishu.twoArr);
					moreOneArr = moreOneArr.concat(fjishu.danArr);
					
					moreOneArr.sort(compCardsFun);
					
					var cmoreOneArr:Array = moreOneArr.concat();
					
					for(i=0;i<moreOneArr.length;i++)//去除不符合的对子
					{
						if(moreOneArr[i] < tempV - (lianLen-2))// 56789 9-3=6 <6的都不行
						{
							moreOneArr.splice(i,1);
							i--;
						}
					}
					
					if(moreOneArr.length >= lianLen)//剩下的长度要大于连队的长度 从中找出一个连续的长度
					{
						tempArr = getFromVlauesLenThan(moreOneArr,lianLen);
						if(tempArr != null && tempArr.length > 0)//找到咯
						{
							retArr = getCardsFromValues(fromCards,tempArr.reverse());
							return retArr;
						}
					}
					
					if(UserData.needOneTwo)//UserData.needOneTwo
					{
						moreOneArr = cmoreOneArr.concat();
						JishuArrData.conversValueArr(moreOneArr);
						
						for(i=0;i<moreOneArr.length;i++)//去除不符合的对子
						{
							if(moreOneArr[i] < tempV - (lianLen-2))// 56789 9-3=6 <6的都不行
							{
								moreOneArr.splice(i,1);
								i--;
							}
						}
//						alert(moreOneArr);
						
						if(moreOneArr.length >= lianLen)//剩下的长度要大于连队的长度 从中找出一个连续的长度
						{
							tempArr = getFromVlauesLenThan(moreOneArr,lianLen);
							if(tempArr != null && tempArr.length > 0)//找到咯
							{
								retArr = getCardsFromValues(fromCards,tempArr.reverse());
								return retArr;
							}
						}
					}
					
					//有炸弹啊 随便找个炸弹嘛
					zhadan =  getBiggerZhaDan(fjishu);
					if(zhadan.length > 0)
					{
						retArr = getCardsFromValues(fromCards,zhadan);
						return retArr;
					}
					
					//看看有没有天炸
					if(checkHaveTianZha(fjishu) == true)
					{
						retArr = [551,551,552,552];
					}
					return retArr;//空的表示没有找到咯 
					break;
				case BasePocker.PAIXING_FEIJI:
					var feiji:FeijiData = FeijiData.getFeiji(tjishu);
					if(feiji == null)//说明牌型判断有误
					{
						return retArr;
					}
					
					var threeArr:Array = fjishu.threeArr.concat();
					var spliceArr:Array = [];
					
					for(i=0;i<threeArr.length;i++)//去除不符合的对子
					{
						if(threeArr[i] < feiji.bigValue - (feiji.length-2))// 56789 9-3=6 <6的都不行
						{
							spliceArr.push(threeArr[i]);
							threeArr.splice(i,1);
							i--;
						}
					}
					if(threeArr.length >= feiji.length)
					{
						tempArr = getFromVlauesLenThan(threeArr,feiji.length);
						var ctempArr:Array = tempArr.concat();
						//将三个剩余的继续加入删除的备用数组
						for(i=0;i<threeArr.length;i++)
						{
							idx = ctempArr.indexOf(threeArr[i]);
							if(idx != -1)
							{
								ctempArr.splice(idx,1);
								threeArr.splice(i,1);
								i--;
							}
						}
						spliceArr = spliceArr.concat(threeArr);
						
						if(tempArr != null  && tempArr.length >= feiji.length)
						{
							switch(feiji.type)
							{
								case FeijiData.FEIJI_NON://飞机不带翅膀
									tempArr = tempArr.concat(tempArr).concat(tempArr);
									tempArr.sort(compCardsFun);
									retArr = getCardsFromValues(fromCards,tempArr);
									return retArr;
									break;
								case FeijiData.FEIJI_DAI://飞机带腿
									if(feiji.length <= spliceArr.length + fjishu.twoArr.length)//剩余的三张和对子的数量还够用啊
									{
										tempArr = tempArr.concat(tempArr).concat(tempArr);
										tempArr.sort(compCardsFun);
										
										var ytuiArr:Array = spliceArr.concat(fjishu.twoArr);
										ytuiArr.some(compCardsFun);
										
										var tuiDuiArr:Array = getFromVlauesLenThan(ytuiArr,feiji.length);
										if(tuiDuiArr != null && tuiDuiArr.length >= feiji.length)
										{
											tuiDuiArr = tuiDuiArr.concat(tuiDuiArr);
											tuiDuiArr.sort(compCardsFun);
											retArr = getCardsFromValues(fromCards,tempArr.concat(tuiDuiArr));
										}
										else
										{
											if(UserData.needOneTwo)//UserData.needOneTwo
											{
												tempArr = tempArr.concat(tempArr).concat(tempArr);
												tempArr.sort(compCardsFun);
												
												var ytuiArr:Array = spliceArr.concat(fjishu.twoArr);
												JishuArrData.conversValueArr(ytuiArr);//将 14 16 转化成 1 2 已经排序，无需再排序
												
												var tuiDuiArr:Array = getFromVlauesLenThan(ytuiArr,feiji.length);
												if(tuiDuiArr != null && tuiDuiArr.length >= feiji.length)
												{
													tuiDuiArr = tuiDuiArr.concat(tuiDuiArr);
													tuiDuiArr.sort(compCardsFun);
													retArr = getCardsFromValues(fromCards,tempArr.concat(tuiDuiArr));
												}
											}
										}
									}	
									break;
							}
						}
					}
					else if(UserData.needOneTwo)//UserData.needOneTwo
					{
						var threeArr:Array = fjishu.threeArr.concat();
						JishuArrData.conversValueArr(threeArr);
						var spliceArr:Array = [];
						
						for(i=0;i<threeArr.length;i++)//去除不符合的对子
						{
							if(threeArr[i] < feiji.bigValue - (feiji.length-2))// 56789 9-3=6 <6的都不行
							{
								spliceArr.push(threeArr[i]);
								threeArr.splice(i,1);
								i--;
							}
						}
						if(threeArr.length >= feiji.length)
						{
							tempArr = getFromVlauesLenThan(threeArr,feiji.length);
							var ctempArr:Array = tempArr.concat();
							//将三个剩余的继续加入删除的备用数组
							for(i=0;i<threeArr.length;i++)
							{
								idx = ctempArr.indexOf(threeArr[i]);
								if(idx != -1)
								{
									ctempArr.splice(idx,1);
									threeArr.splice(i,1);
									i--;
								}
							}
							spliceArr = spliceArr.concat(threeArr);
							
							if(tempArr != null  && tempArr.length >= feiji.length)
							{
								switch(feiji.type)
								{
									case FeijiData.FEIJI_NON://飞机不带翅膀
										tempArr = tempArr.concat(tempArr).concat(tempArr);
										tempArr.sort(compCardsFun);
										retArr = getCardsFromValues(fromCards,tempArr);
										return retArr;
										break;
									case FeijiData.FEIJI_DAI://飞机带腿
										if(feiji.length <= spliceArr.length + fjishu.twoArr.length)//剩余的三张和对子的数量还够用啊
										{
											tempArr = tempArr.concat(tempArr).concat(tempArr);
											tempArr.sort(compCardsFun);
											
											var ytuiArr:Array = spliceArr.concat(fjishu.twoArr);
											ytuiArr.some(compCardsFun);
											
											var tuiDuiArr:Array = getFromVlauesLenThan(ytuiArr,feiji.length);
											if(tuiDuiArr != null && tuiDuiArr.length >= feiji.length)
											{
												tuiDuiArr = tuiDuiArr.concat(tuiDuiArr);
												tuiDuiArr.sort(compCardsFun);
												retArr = getCardsFromValues(fromCards,tempArr.concat(tuiDuiArr));
											}
											else
											{
												if(UserData.needOneTwo)//UserData.needOneTwo
												{
													tempArr = tempArr.concat(tempArr).concat(tempArr);
													tempArr.sort(compCardsFun);
													
													var ytuiArr:Array = spliceArr.concat(fjishu.twoArr);
													JishuArrData.conversValueArr(ytuiArr);//将 14 16 转化成 1 2 已经排序，无需再排序
													
													var tuiDuiArr:Array = getFromVlauesLenThan(ytuiArr,feiji.length);
													if(tuiDuiArr != null && tuiDuiArr.length >= feiji.length)
													{
														tuiDuiArr = tuiDuiArr.concat(tuiDuiArr);
														tuiDuiArr.sort(compCardsFun);
														retArr = getCardsFromValues(fromCards,tempArr.concat(tuiDuiArr));
													}
												}
											}
										}	
										break;
								}
							}
						}
					}
					
					//todo
					//有炸弹啊 随便找个炸弹嘛
					zhadan =  getBiggerZhaDan(fjishu);
					if(zhadan.length > 0)
					{
						retArr = getCardsFromValues(fromCards,zhadan);
						return retArr;
					}
					
					//看看有没有天炸
					if(checkHaveTianZha(fjishu) == true)
					{
						retArr = [551,551,552,552];
					}
					return retArr;//空的表示没有找到咯 
					break;
				case BasePocker.PAIXING_ZHADAN:
					//有炸弹啊 随便找个炸弹嘛
					zhadan =  getBiggerZhaDan(fjishu,tjishu.valueArr[0],tjishu.valueArr.length);
					if(zhadan.length > 0)
					{
						retArr = getCardsFromValues(fromCards,zhadan);
						return retArr;
					}
					
					//看看有没有天炸
					if(checkHaveTianZha(fjishu) == true)
					{
						retArr = [551,551,552,552];
					}
					return retArr;//空的表示没有找到咯 
					break;
				case BasePocker.PAIXING_TIANZHA:
					return retArr;//哎，没有大过对王的啊
					break;
				
			}
			
			
			
			return retArr;
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
		
		/**从目标计数牌中获取一个炸弹
		 * @param value 目标炸弹的大小
		 * */
		public static function getBiggerZhaDan(jishu:JishuArrData,value:int=-1,len:int=4):Array
		{
			var retArr:Array = [];
			if(len < 4)
			{
				return retArr;
			}
			var i:int,j:int;
			//jishu.fourArr.concat(jishu.fiveArr,jishu.sixArr,jishu.sevenArr,jishu.eightArr);//?
			if(len <= 8)
			{
				if(len <= 7)
				{
					if(len <= 6)
					{
						if(len <= 5)
						{
							if(len == 4)
							{
								if(value != -1)
								{
									for(i=0;i<jishu.fourArr.length;i++)
									{
										if(jishu.fourArr[i] > value)
										{
											for(j=0;j<4;j++)
											{
												retArr.push(jishu.fourArr[i]);
											}
											return retArr;
										}
									}
								}
								else
								{
									if(jishu.fourArr.length > 0)
									{
										for(i=0;i<4;i++)
										{
											retArr.push(jishu.fourArr[0]);
										}
										return retArr;
									}
								}
							}
							
							
							if(len == 5 && value != -1)
							{
								for(i=0;i<jishu.fiveArr.length;i++)
								{
									if(jishu.fiveArr[i] > value)
									{
										for(j=0;j<5;j++)
										{
											retArr.push(jishu.fiveArr[i]);
										}
										return retArr;
									}
								}
							}
							else
							{
								if(jishu.fiveArr.length > 0)
								{
									for(i=0;i<5;i++)
									{
										retArr.push(jishu.fiveArr[0]);
									}
									return retArr;
								}
							}
							
							
						}
						
						if(len == 6 && value != -1)
						{
							for(i=0;i<jishu.sixArr.length;i++)
							{
								if(jishu.sixArr[i] > value)
								{
									for(j=0;j<6;j++)
									{
										retArr.push(jishu.sixArr[i]);
									}
									return retArr;
								}
							}
						}
						else
						{
							if(jishu.sixArr.length>0)
							{
								for(i=0;i<6;i++)
								{
									retArr.push(jishu.sixArr[0]);
								}
								return retArr;
							}
						}
						
						
					}
					
					if(len == 7 && value != -1)
					{
						for(i=0;i<jishu.sevenArr.length;i++)
						{
							if(jishu.sevenArr[i] > value)
							{
								for(j=0;j<7;j++)
								{
									retArr.push(jishu.sevenArr[i]);
								}
								return retArr;
							}
						}
					}
					else
					{
						if(jishu.sevenArr.length > 0)
						{
							for(i=0;i<7;i++)
							{
								retArr.push(jishu.sevenArr[0]);
							}
							return retArr;
						}
					}
					
					
				}
				if(len == 8 && value != -1)
				{
					for(i=0;i<jishu.eightArr.length;i++)
					{
						if(jishu.eightArr[i] > value)
						{
							for(j=0;j<8;j++)
							{
								retArr.push(jishu.eightArr[i]);
							}
							return retArr;
						}
					}
				}
				else
				{
					if(jishu.eightArr.length > 0)
					{
						for(i=0;i<8;i++)
						{
							retArr.push(jishu.eightArr[0]);
						}
						return retArr;
					}
				}
				
				
			
			}
			return retArr;
		}
		
		/**检查有没有天王炸弹*/
		public static function checkHaveTianZha(jishu:JishuArrData):Boolean
		{
			var twoArr:Array = jishu.twoArr;
			
			var idxXW:int = twoArr.indexOf(51);
			var idxDW:int = twoArr.indexOf(52);
			if(idxXW != -1 && idxDW != -1)
			{
				return true;
			}
			return false;
			
		}
		
		/**从一组数值中找出一个连续的长度等于指定的长度*/
		public static function getFromVlauesLenThan(values:Array,tLen:int):Array
		{
			var retArr:Array = [];
			var i:int;
			var num:int = 0;
			for(i=0;i<values.length-1;i++)
			{
				if(values[i+1] == values[i] +1)
				{
					if(num == 0)
					{
						retArr.push( values[i],values[i+1]);
						num += 2;
					}
					else
					{
						retArr.push( values[i+1]);
						num += 1;
					}
					
				}
				else
				{
					num = 0;
					retArr = [];
				}
				
				if(num ==tLen)
				{
					break;
				}
			}
			if(retArr.length < tLen)//没有达到要求
			{
				retArr.length = 0;
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
				case BasePocker.PAIXING_LIANDUI:
					if(UserData.needOneTwo)//UserData.needOneTwo
					{
						if(jishuData.twoArr.indexOf(16) != -1)
						{
							JishuArrData.conversValueArr(jishuData.twoArr);
							for(i=0;i<jishuData.twoArr.length;i++)
							{
								valueCards.push(jishuData.twoArr[i],jishuData.twoArr[i]);
							}
							cards = getCardsFromValues(cards,valueCards);
						}
					}
					break;
				case BasePocker.PAIXING_SANER:
					valueCards = [jishuData.threeArr[0],jishuData.threeArr[0],jishuData.threeArr[0],jishuData.twoArr[0],jishuData.twoArr[0]];//33322
					cards = getCardsFromValues(cards,valueCards);
					break;
				case BasePocker.PAIXING_FEIJI:
					if(UserData.needOneTwo)//UserData.needOneTwo
					{
						if(jishuData.threeArr.indexOf(16) != -1)
						{
							JishuArrData.conversValueArr(jishuData.threeArr);
						}
						if(jishuData.twoArr.indexOf(16) != -1)
						{
							JishuArrData.conversValueArr(jishuData.twoArr);
						}
					}
					
					valueCards.length=0;
					for(i=0;i<jishuData.threeArr.length;i++)
					{
						valueCards.push(jishuData.threeArr[i],jishuData.threeArr[i],jishuData.threeArr[i]);
					}
					
					for(i=0;i<jishuData.twoArr.length;i++)
					{
						valueCards.push(jishuData.twoArr[i],jishuData.twoArr[i]);
					}
					cards = getCardsFromValues(cards,valueCards);
					break;
			}
			
			return retCards = cards.concat();
		}
		
		/**判断是否有报到 0没有报到 1报到 2双报到*/
		public static function getBaodaoNum(cards:Array,jishuArr:JishuArrData=null,needSort:Boolean=true):int
		{
			if(needSort)
			{
				cards.sort(compCardsFun);
			}
			if(jishuArr == null)
			{
				jishuArr = JishuArrData.getJishuArrData(cards);
			}
			
			var baodaoNum:int = jishuArr.eightArr.length + jishuArr.sevenArr.length;
			
			if(checkHaveTianZha(jishuArr) == true)
			{
				baodaoNum += 1;
			}
			
			return baodaoNum;
		}
		
		/**判断是否有报到 0没有报到 1报到 2双报到*/
		public static function getBaodaoCards(cards:Array,jishuArr:JishuArrData=null,needSort:Boolean=true):Array
		{
			var retArr:Array = [];
			var valueArr:Array = [];
			
			if(needSort)
			{
				cards.sort(compCardsFun);
			}
			if(jishuArr == null)
			{
				jishuArr = JishuArrData.getJishuArrData(cards);
			}
			
			var i:int,j:int;;
			
			if(jishuArr.eightArr.length > 0)
			{
				for(i=0;i<jishuArr.eightArr.length;i++)
				{
					for(j=0;j<8;j++)
					{
						valueArr.push(jishuArr.eightArr[i]);
					}
				}
			}
			
			if(jishuArr.sevenArr.length > 0)
			{
				for(i=0;i<jishuArr.sevenArr.length;i++)
				{
					for(j=0;j<7;j++)
					{
						valueArr.push(jishuArr.sevenArr[i]);
					}
				}
			}
			
			if(checkHaveTianZha(jishuArr) == true)
			{
				valueArr.push(51,51,52,52);
			}
			
			retArr = getCardsFromValues(cards,valueArr);
			return retArr;
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