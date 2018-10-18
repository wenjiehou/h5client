package modules.sddzGame.sddzInerGame.view.pockerPart.singlePart
{
	
	import ui.sddzGame.ddzPart.ActTipUI;

	public class BaseActTipItem
	{

//		_skin.bujiao.visible = false;
//		_skin.fen1.visible = false;
//		_skin.fen2.visible = false;
//		_skin.fen3.visible = false;
//		
//		_skin.jiaodizhu.visible = false;
//		_skin.buqiang.visible = false;
//		_skin.qiangdizhu.visible = false;
//		
//		_skin.jiabei.visible = false;
//		
//		_skin.buchu.visible = false;
		
		public static const ACTTIP_BUJIAO:int = 0;
		public static const ACTTIP_FEN1:int = 1;
		public static const ACTTIP_FEN2:int = 2;
		public static const ACTTIP_FEN3:int = 3;
		
		public static const ACTTIP_JIAODIZHU:int = 4;
		public static const ACTTIP_BUQIANG:int = 5;
		public static const ACTTIP_QIANGDIZHU:int = 6;
		
		public static const ACTTIP_JIABEI:int = 7;
		public static const ACTTIP_BUJIABEI:int = 8;
		
		public static const ACTTIP_BUCHU:int = 9;
		
		protected var _skin:ActTipUI;
		
		public function BaseActTipItem(skin:ActTipUI)
		{
			_skin = skin;
			init();
			//hide();
		}
		
		protected function init():void
		{
			reset();
		}
		
		/***/
		public function showActTip(type:int):void
		{
			hideAll();
			switch(type)
			{
				case ACTTIP_BUJIAO:
					_skin.bujiao.visible = true;
					break;
				case ACTTIP_FEN1:
					_skin.fen1.visible = true;
					break;
				case ACTTIP_FEN2:
					_skin.fen2.visible = true;
					break;
				case ACTTIP_FEN3:
					_skin.fen3.visible = true;
					break;
				case ACTTIP_JIAODIZHU:
					_skin.jiaodizhu.visible = true;
					break;
				case ACTTIP_BUQIANG:
					_skin.buqiang.visible = true;
					break;
				case ACTTIP_QIANGDIZHU:
					_skin.qiangdizhu.visible = true;
					break;
				case ACTTIP_JIABEI:
					_skin.jiabei.visible = true;
					break;
				case ACTTIP_BUJIABEI:
					_skin.bujiabei.visible = true;
					break;
				case ACTTIP_BUCHU:
					_skin.buchu.visible = true;
					break;
				
				}
			
		}

	    public function hideAll():void
		{
			reset();
		}
		
		public function hideJiabei():void
		{
			_skin.jiabei.visible = false;
			_skin.bujiabei.visible = false;
		}
		
		
		/**叫分完成以后要清除所有 加倍明牌选择完成以后要清除所有 */
		public function reset():void
		{
			_skin.bujiao.visible = false;
			_skin.fen1.visible = false;
			_skin.fen2.visible = false;
			_skin.fen3.visible = false;
			
			_skin.jiaodizhu.visible = false;
			_skin.buqiang.visible = false;
			_skin.qiangdizhu.visible = false;
			
			_skin.jiabei.visible = false;
			_skin.bujiabei.visible = false;
			
			_skin.buchu.visible = false;
		}
		
		public function show():void
		{
			_skin.visible = true;
		}
		
		public function hide():void
		{
			_skin.visible = false;
		}
		
		public function showEff(type:int):void
		{
			
		}
	}
}