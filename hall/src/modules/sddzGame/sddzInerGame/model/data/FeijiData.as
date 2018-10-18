package modules.sddzGame.sddzInerGame.model.data
{
	/**飞机牌型*/
	public class FeijiData
	{
		/**飞机不带翅膀*/
		public static const FEIJI_NON:int = 0;
		
		/**飞机带单张翅膀*/
		public static const FEIJI_DAN:int = 1;
		
		/**飞机带对子翅膀*/
		public static const FEIJI_DUIZI:int = 2;
		
		/**飞机的长度*/
		public var length:int = 0;
		
		/**飞机的类型*/
		public var type:int = 0;
		 
		/**飞机的最大值*/
		public var bigValue:int = 0;
		
		public function FeijiData()
		{
			
		}
		
		/**请使用排好序的牌传入*/
		public static function getFeiji(jishuData:JishuArrData):FeijiData
		{
			if(jishuData.threeArr.length == 0)
			{
				return null;
			}
			
			var i:int;
			var retData:FeijiData;
			
			var tempJishuData:JishuArrData = new JishuArrData();
			tempJishuData.clone(jishuData);
			
			if(tempJishuData.fourArr.length == 0)
			{
				return preDeajishuData(tempJishuData);
			}
			else if(jishuData.fourArr.length == 1) //13 22 1111
			{
				//拆成13
				tempJishuData.clone(jishuData);
				tempJishuData.threeArr.push(jishuData.fourArr[0]);
				JishuArrData.compValue(tempJishuData.threeArr);
				
				tempJishuData.danArr.push(jishuData.fourArr[0]);
				JishuArrData.compValue(tempJishuData.danArr);
				
				retData = preDeajishuData(tempJishuData);
				if(retData)
				{
					return retData;
				}
				//拆成22
				tempJishuData.clone(jishuData);
				tempJishuData.twoArr.push(jishuData.fourArr[0],jishuData.fourArr[0]);
				JishuArrData.compValue(tempJishuData.twoArr);
				return preDeajishuData(tempJishuData);
			}
			else if(jishuData.fourArr.length >= 2)//1313 只能拆1313 带的类型要相同
			{
				tempJishuData.clone(jishuData);
				for(i=0;i<jishuData.fourArr.length;i++)
				{
					tempJishuData.threeArr.push(jishuData.fourArr[i]);
					tempJishuData.danArr.push(jishuData.fourArr[i]);
				}
				JishuArrData.compValue(tempJishuData.threeArr);
				return preDeajishuData(tempJishuData);
			}
			return null;
		}
		
		protected static function preDeajishuData(jishuData:JishuArrData):FeijiData
		{
			var tempJishuData:JishuArrData = new JishuArrData();
			tempJishuData.clone(jishuData);	
			var i:int;
			if(tempJishuData.threeArr.length < 2)
			{
				return null;
			}
			if(JishuArrData.checkValuelian(tempJishuData.threeArr) == true)
			{
				return getFeijiWithNoFour(tempJishuData);
			}
			else//不连续就要拿出一个不连续的出来
			{
				for(i=0;i<tempJishuData.threeArr.length;i++)
				{
					if(i==0)
					{
						if(tempJishuData.threeArr[i] != tempJishuData.threeArr[i+1] -1)
						{
							tempJishuData.danArr.push(tempJishuData.threeArr[i] ,tempJishuData.threeArr[i] ,tempJishuData.threeArr[i] );
							JishuArrData.compValue(tempJishuData.danArr);//对单张进行重新排序
							tempJishuData.threeArr.splice(i,1);
							break;
						}
					}
					else
					{
						if(tempJishuData.threeArr[i] != tempJishuData.threeArr[i-1] +1)
						{
							tempJishuData.danArr.push(tempJishuData.threeArr[i] ,tempJishuData.threeArr[i] ,tempJishuData.threeArr[i] );
							JishuArrData.compValue(tempJishuData.danArr);//对单张进行重新排序
							tempJishuData.threeArr.splice(i,1);
							break;
						}
					}
				}
				return getFeijiWithNoFour(tempJishuData);
			}
		}
		
		/**请使用排好序的牌传入,四个的计数必须为零*/
		private static function getFeijiWithNoFour(jishuData:JishuArrData):FeijiData
		{
			if(jishuData.threeArr.length <2)
			{
				return null;
			}
			var feijiData:FeijiData;
			var threeLian:Boolean = JishuArrData.checkValuelian(jishuData.threeArr);
			//以下肯定是飞机带腿
			if(threeLian)//三个都是连续的
			{
				if( jishuData.twoArr.length == 0 && jishuData.danArr.length == 0 && jishuData.threeArr.length > 1)
				{
					feijiData = new FeijiData();
					feijiData.bigValue = jishuData.threeArr[jishuData.threeArr.length-1];
					feijiData.length = jishuData.threeArr.length;
					feijiData.type = FeijiData.FEIJI_NON;
					return feijiData;
				}
				else if(jishuData.threeArr.length == jishuData.danArr.length + jishuData.twoArr.length*2)
				{
					feijiData = new FeijiData();
					feijiData.bigValue = jishuData.threeArr[jishuData.threeArr.length-1];
					feijiData.length = jishuData.threeArr.length;
					feijiData.type = FeijiData.FEIJI_DAN;
					return feijiData;
				}
				else if(jishuData.threeArr.length == jishuData.twoArr.length && jishuData.danArr.length == 0)
				{
					feijiData = new FeijiData();
					feijiData.bigValue = jishuData.threeArr[jishuData.threeArr.length-1];
					feijiData.length = jishuData.threeArr.length;
					feijiData.type = FeijiData.FEIJI_DUIZI;
					return feijiData;
				}
			}
			
			return null;
		}
	}
}