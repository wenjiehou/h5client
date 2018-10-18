package modules.nnGame.inerGame.model.data
{
	import modules.nnGame.inerGame.view.pockerPart.card.BasePocker;

	public class NiuData
	{
		public var cards:Array = [];
		/**组成10的倍数的三个牌*/
		public var ThreeArr:Array = [];
		/**剩下的两张牌*/
		public var twoArr:Array = [];
		
		/**最大值*/
		public var BigV:int = -1;
		/**最大花色 */
		public var BigT:int = -1;
		
		/**有几个牛*/
		public var niuNum:int = 0;
		
		/**最好的排序规则*/
		public function get bestOrder():Array
		{
			if(niuNum > 0)
			{
				return ThreeArr.concat(twoArr);
			}
			return cards;
		}
		
		public function NiuData()
		{
			
		}
		
		/**请使用排好序的牌传入*/
		public static function getNiuData(cards:Array):NiuData
		{
			var niuData:NiuData = new NiuData();
			niuData.cards = cards.concat();
			//一共就五张牌
			var len:int=cards.length;
//			var newArray:Array=new Array();
			var twoV:int = 0;
			
			for(var i:int=0;i<len;i++){
				for(var j:int=i+1;j<len;j++){
					for(var k:int=j+1;k<len;k++){
						if((BasePocker.getVNn(cards[i])+ BasePocker.getVNn(cards[j])+ BasePocker.getVNn(cards[k]))%10 == 0)
						{
							var threeArr:Array = [cards[i],cards[j],cards[k]];
							var twoArr:Array = [];
							//求另外两个
							twoV = 0;
							for(var n:int =0;n<len;n++)
							{
								if(n != i && n !=j && n != k)
								{
									twoV += BasePocker.getVNn(cards[n]);
									twoArr.push(cards[n]);
								}
							}
							var tempV:int= twoV%10;
							if(tempV == 0)
							{
								tempV = 10;
							}
							
							if(tempV > niuData.niuNum)
							{
								niuData.niuNum = tempV;
								niuData.ThreeArr =threeArr.concat();
								niuData.twoArr = twoArr.concat();
							}
						}
					}
					
				}
			}
			return niuData;
		}
	}
}