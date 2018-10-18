package modules.sddzGame.sddzInerGame.model.data
{
	public class SidaierData
	{
		public static const TYPE_NON:int = 0;
		public static const TYPE_DAN:int = 1;
		public static const TYPE_DUI:int = 2;
		
		/**类型*/
		public var type:int = 0;
		/**值*/
		public var value:int = 0;
		
		/**4带2牌型*/
		public function SidaierData()
		{
		}
		
		public static function getSidaierData(jishuData:JishuArrData):SidaierData
		{
			var sidaiData:SidaierData;
			if(jishuData.fourArr.length == 1)//只有一个四个
			{
				if(jishuData.threeArr.length == 0)//三个必须没有
				{
					if(jishuData.danArr.length == 2 && jishuData.twoArr.length == 0)//一个有两张
					{
						sidaiData = new SidaierData();
						sidaiData.type = SidaierData.TYPE_DAN;
						sidaiData.value = jishuData.fourArr[0];
						return sidaiData;
					}
					else if(jishuData.danArr.length == 0 && jishuData.twoArr.length == 1)//有一个对子
					{
						sidaiData = new SidaierData();
						sidaiData.type = SidaierData.TYPE_DAN;
						sidaiData.value = jishuData.fourArr[0];
						return sidaiData;
					}
					else if(jishuData.danArr.length == 0 && jishuData.twoArr.length == 2)//有一个对子
					{
						sidaiData = new SidaierData();
						sidaiData.type = SidaierData.TYPE_DUI;
						sidaiData.value = jishuData.fourArr[0];
						return sidaiData;
					}
				}
			}
			else if(jishuData.fourArr.length == 2)//四带sige
			{
				if(jishuData.threeArr.length == 0 && jishuData.twoArr.length == 0 && jishuData.danArr.length == 0)
				{
					sidaiData = new SidaierData();
					sidaiData.type = SidaierData.TYPE_DUI;
					sidaiData.value = jishuData.fourArr[1];
					return sidaiData;
				}
			}
			
			return null;
		}
	}
}