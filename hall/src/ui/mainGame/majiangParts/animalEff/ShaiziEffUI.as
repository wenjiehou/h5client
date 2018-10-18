/**Created by the LayaAirIDE,do not modify.*/
package ui.mainGame.majiangParts.animalEff {
	import laya.ui.*;
	import laya.display.*; 

	public class ShaiziEffUI extends View {
		public var shaizi0:Animation;
		public var shaizi1:Animation;
		public var value0:Image;
		public var value1:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":133,"height":80},"child":[{"type":"Animation","props":{"y":37,"x":32,"var":"shaizi0","source":"mainGame/majiangParts/animalEff/Shaizi.ani","scaleY":0.5,"scaleX":0.5}},{"type":"Animation","props":{"y":37,"x":100,"var":"shaizi1","source":"mainGame/majiangParts/animalEff/Shaizi.ani","scaleY":0.5,"scaleX":0.5}},{"type":"Image","props":{"y":0,"x":0,"var":"value0","skin":"gametable/shaizi/shaizi01.png","scaleY":0.5,"scaleX":0.5}},{"type":"Image","props":{"y":0,"x":69,"var":"value1","skin":"gametable/shaizi/shaizi01.png","scaleY":0.5,"scaleX":0.5}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}