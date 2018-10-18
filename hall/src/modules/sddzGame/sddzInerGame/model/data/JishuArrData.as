package modules.sddzGame.sddzInerGame.model.data
{
	import modules.sddzGame.sddzInerGame.view.pockerPart.card.BasePocker;

	public class JishuArrData
	{
		public var valueArr:Array = [];
		
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
			
			var i:int;
			
			for(i=0;i<cards.length;i++)
			{
				valuesArr.push(BasePocker.getV(cards[i]));
			}
			
			trace("检测的牌值：："  , valuesArr);
			
			
			
			jishuData.valueArr = valuesArr.concat();//记录数值的数组
			
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
	}
}