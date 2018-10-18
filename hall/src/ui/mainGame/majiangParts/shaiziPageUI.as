/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts {
	import laya.ui.*;
	import laya.display.*; 
	import ui.mainGame.majiangParts.animalEff.ShaiziEffUI;

	public class shaiziPageUI extends View {
		public var middleShaizi:ShaiziEffUI;
		public var rightShaizi:ShaiziEffUI;
		public var leftShaizi:ShaiziEffUI;
		public var topShaizi:ShaiziEffUI;
		public var bootomShaizi:ShaiziEffUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1038,"height":640},"child":[{"type":"ShaiziEff","props":{"y":262,"x":452,"var":"middleShaizi","runtime":"ui.mainGame.majiangParts.animalEff.ShaiziEffUI"}},{"type":"ShaiziEff","props":{"y":262,"x":755,"var":"rightShaizi","runtime":"ui.mainGame.majiangParts.animalEff.ShaiziEffUI"}},{"type":"ShaiziEff","props":{"y":262,"x":144,"var":"leftShaizi","runtime":"ui.mainGame.majiangParts.animalEff.ShaiziEffUI"}},{"type":"ShaiziEff","props":{"y":71,"x":452,"var":"topShaizi","runtime":"ui.mainGame.majiangParts.animalEff.ShaiziEffUI"}},{"type":"ShaiziEff","props":{"y":450,"x":452,"var":"bootomShaizi","runtime":"ui.mainGame.majiangParts.animalEff.ShaiziEffUI"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.mainGame.majiangParts.animalEff.ShaiziEffUI",ShaiziEffUI);
			super.createChildren();
			createView(uiView);

		}

	}
}