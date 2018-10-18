package modules.xiangshanGame.majiangGame.model
{
	import modules.game.majiangGame.model.MajiangModel;
	
	public class XiangSMJModel extends MajiangModel
	{
		public function XiangSMJModel()
		{
			super();
		}
		
		public function getChiRefCards(cards:Array):Array
		{
			var retArr:Array = [];
			cards.sort(compareFunction);
			
			if((cards[1] - cards[0]) == 1)//连续
			{
				if(cards[0] == 1 || cards[0] == 10 || cards[0] == 19)//一万 一筒 一条
				{
					retArr = [cards[1]+1];
				}
				else if(cards[1] == 9 || cards[1] == 18 || cards[1] == 27)//一万 一筒 一条
				{
					retArr = [cards[0]-1];
				}
				else
				{
					retArr = [cards[0]-1,cards[1]+1];
				}
			}
			else if((cards[1] - cards[0]) == 2)
			{
				retArr = [cards[0]+1];
			}
			
			return retArr;
		}
		
		
	}
}