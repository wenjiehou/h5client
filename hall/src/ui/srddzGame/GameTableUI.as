/**Created by the LayaAirIDE,do not modify.*/
package ui.srddzGame {
	import laya.ui.*;
	import laya.display.*; 
	import ui.srddzGame.TableInfoPageUI;
	import ui.srddzGame.PlayerInfoPageUI;
	import ui.gameCommon.shortCutChat.PopChatItemUI;
	import ui.srddzGame.CalculatePageUI;
	import ui.gameCommon.ReplayControlViewUI;

	public class GameTableUI extends View {
		public var pokerContainer:Box;
		public var tableInfoPage:TableInfoPageUI;
		public var playerInfoPage:PlayerInfoPageUI;
		public var popChat3:PopChatItemUI;
		public var popChat0:PopChatItemUI;
		public var popChat2:PopChatItemUI;
		public var popChat1:PopChatItemUI;
		public var chatContainer:Box;
		public var calculatePart:CalculatePageUI;
		public var replayControlView:ReplayControlViewUI;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":1038,"height":640},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":1038,"lineWidth":1,"height":640,"fillColor":"#007058"}}]},{"type":"Box","props":{"y":0,"x":0,"var":"pokerContainer"},"child":[{"type":"Image","props":{"width":1038,"height":640}}]},{"type":"TableInfoPage","props":{"var":"tableInfoPage","runtime":"ui.srddzGame.TableInfoPageUI"}},{"type":"PlayerInfoPage","props":{"y":0,"x":0,"var":"playerInfoPage","runtime":"ui.srddzGame.PlayerInfoPageUI"}},{"type":"PopChatItem","props":{"y":220,"x":44,"var":"popChat3","runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"PopChatItem","props":{"y":492,"x":5,"var":"popChat0","runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"PopChatItem","props":{"y":90,"x":322,"width":417,"var":"popChat2","height":70,"runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"PopChatItem","props":{"y":218,"x":576,"width":417,"var":"popChat1","height":70,"runtime":"ui.gameCommon.shortCutChat.PopChatItemUI"}},{"type":"Box","props":{"y":0,"x":0,"var":"chatContainer"}},{"type":"CalculatePage","props":{"var":"calculatePart","runtime":"ui.srddzGame.CalculatePageUI"}},{"type":"ReplayControlView","props":{"y":0,"x":0,"var":"replayControlView","runtime":"ui.gameCommon.ReplayControlViewUI"}}]};
		override protected function createChildren():void {
			View.regComponent("ui.srddzGame.TableInfoPageUI",TableInfoPageUI);
			View.regComponent("ui.srddzGame.PlayerInfoPageUI",PlayerInfoPageUI);
			View.regComponent("ui.gameCommon.shortCutChat.PopChatItemUI",PopChatItemUI);
			View.regComponent("ui.srddzGame.CalculatePageUI",CalculatePageUI);
			View.regComponent("ui.gameCommon.ReplayControlViewUI",ReplayControlViewUI);
			super.createChildren();
			createView(uiView);

		}

	}
}