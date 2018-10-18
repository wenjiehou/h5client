package modules.xiangshanGame.majiangGame.context
{
	import modules.game.majiangGame.context.MajiangGameContext;
	import modules.game.majiangGame.model.ReplayMajiangModel;
	import modules.game.majiangGame.view.MajiangGameView;
	import modules.xiangshanGame.majiangGame.controller.ReplayXiangSMJGameController;
	import modules.xiangshanGame.majiangGame.controller.XiangSMJGameController;
	import modules.xiangshanGame.majiangGame.model.ReplayXiangSMJModel;
	import modules.xiangshanGame.majiangGame.model.XiangSMJModel;
	
	import rb.framework.mvc.GameContext;
	import rb.framework.mvc.Module;
	
	public class XiangSMJGameContext extends MajiangGameContext
	{
		public function XiangSMJGameContext(key:String="", module:Module=null, parentNode:GameContext=null)
		{
			super(key, module, parentNode);
		}
		
		override protected function initUI():void
		{
			if(_majiangModel==null)
			{
				_majiangModel = new XiangSMJModel();
			}
			
			if(_rMajiangModel == null)
			{
				_rMajiangModel = new ReplayXiangSMJModel();
			}
			
			if(_rMajiangGameController == null)
			{
				_rMajiangGameController = new ReplayXiangSMJGameController();
			}
			
			if(_majiangGameView == null)
			{
				_majiangGameView = new MajiangGameView();
			}
			
			if(_majiangGameController == null)
			{
				_majiangGameController = new XiangSMJGameController();
			}
			
		}
	}
}