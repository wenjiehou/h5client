package modules.nnGame.inerGame.model.data
{
	import modules.nnGame.inerGame.view.pockerPart.card.BasePocker;

	public class JishuArrData
	{
		public var valueArr:Array = [];
		public var nValueArr:Array = [];
		public var typeArr:Array = [];
		public var isHuaArr:Array = [];
		
		public var eightArr:Array = [];
		public var sevenArr:Array = [];
		public var sixArr:Array = [];
		public var fiveArr:Array = [];
		public var fourArr:Array = [];
		public var threeArr:Array = [];
		public var twoArr:Array = [];
		public var danArr:Array = [];
		
		public function JishuArrData()
		{
			
		}
		
		public static function getJishuArrData(cards:Array):JishuArrData
		{
			var jishuData:JishuArrData = new JishuArrData();
			
			var valuesArr:Array = [];
			var typeArr:Array = [];
			var nValueArr:Array = [];
			var isHuaArr:Array = [];
			
			var i:int;
			
			for(i=0;i<cards.length;i++)
			{
				valuesArr.push(BasePocker.getV(cards[i]));
				typeArr.push(BasePocker.getT(cards[i]));
				nValueArr.push(BasePocker.getVNn(cards[i]));
				isHuaArr.push(BasePocker.checkIsHua(cards[i]));
			}
			
			trace("检测的牌值：："  , valuesArr);
			
			
			
			jishuData.valueArr = valuesArr.concat();//记录数值的数组
			jishuData.typeArr = typeArr.concat();  
			jishuData.nValueArr = nValueArr.concat();
			jishuData.isHuaArr = isHuaArr.concat();
			
			var tempV:int;
			var num:int;
			var idx:int;
			
			for(i=0;i<valuesArr.length;i++)
			{
				num = 1;
				tempV = valuesArr[i];
				valuesArr.splice(i,1);
				i -= 1;
				idx = valuesArr.indexOf(tempV);
				while(idx != -1)
				{
					valuesArr.splice(idx,1);
					num +=1;
					idx = valuesArr.indexOf(tempV);
				}	
				switch(num)
				{
					case 1:
						jishuData.danArr.push(tempV);
						break;
					case 2:
						jishuData.twoArr.push(tempV);
						break;
					case 3:
						jishuData.threeArr.push(tempV);
						break;
					case 4:
						jishuData.fourArr.push(tempV);
						break;
					case 5:
						jishuData.fiveArr.push(tempV);
						break;
					case 6:
						jishuData.sixArr.push(tempV);
						break;
					case 7:
						jishuData.sevenArr.push(tempV);
						break;
					case 8:
						jishuData.eightArr.push(tempV);
						break;
				}
			}
			
			return jishuData;
		}
		
		/**检查数组的数值是否是连续的 345 qka*/
		public static  function checkValuelian(valueArr:Array):Boolean
		{
			var i:int,len:int=valueArr.length;
			for(i=0;i<len-1;i++)
			{
				if(valueArr[i+1] - valueArr[i] != 1) 
				{
					return false;
				}
			}
			return true;
		}
		
		public function clone(target:JishuArrData):void
		{
			this.valueArr = target.valueArr.concat();
			this.eightArr = target.eightArr.concat();
			this.sevenArr = target.eightArr.concat();
			this.sixArr = target.sixArr.concat();
			this.fiveArr = target.fiveArr.concat();
			this.fourArr = target.fourArr.concat();
			this.threeArr = target.threeArr.concat();
			this.twoArr = target.twoArr.concat();
			this.danArr = target.danArr.concat();
			
		}
		
		public static function compValue(value:Array):void
		{
			value.sort(compVFun);
		}
		
		private static function compVFun(A:int,B:int):int{
			if(A > B)
			{
				return 1;
			}
			else if(A = B)
			{
				return 0;
			}
			else
			{
				return -1;
			}
		}
		
		/**将一个数组中的14 16 转化成 1 2 并且进行排序*/
		public static function conversValueArr(arr:Array):void
		{
			var i:int,len:int=arr.length;
			
			for(i=0;i<len;i++)
			{
				if(arr[i] == 14)
				{
					arr[i] = 1;
				}
				else if(arr[i] == 16)
				{
					arr[i] = 2;
				}
			}
			arr.sort(compCardsFun);
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
		
		
	}
}