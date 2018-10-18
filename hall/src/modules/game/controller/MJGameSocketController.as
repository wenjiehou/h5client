/* ----------------------------------------------------------------------------------------------------------------------------------------------------- /

public class GameSocketController extends AbstractLayer - 类功能 

/ ----------------------------------------------------------------------------------------------------------------------------------------------------- */

package modules.game.controller
{
	import common.event.EventCenter;
	
	import manager.MessageManager;
	import manager.TimeManager;
	
	import modules.game.GameModule;
	import modules.game.majiangGame.model.MajiangModel;
	import modules.game.majiangGame.model.ReplayMajiangModel;
	import modules.game.majiangGame.view.animation.HuAnimation;
	
	import net.Message;
	
	import rb.framework.mvc.AbstractLayer;
	
	public class MJGameSocketController extends AbstractLayer
	{
		// --- Vars ------------------------------------------------------------------------------------------------------------------------------------------------ //
		
		// --- Public Functions ------------------------------------------------------------------------------------------------------------------------------------ //
		public function MJGameSocketController()
		{
			super();
		}
		public override function onAdd():void{
			
			trace("GameSocketController onAdd");
			
			if(UserData.isReplay)
			{
				//
				EventCenter.instance.on(EventCenter.REPLAY_getAllReplayMsgs,this,onGotAllReplayMsgs);
				
				EventCenter.instance.on(EventCenter.REPLAY_play,this,replay_play);
				EventCenter.instance.on(EventCenter.REPLAY_pause,this,replay_pause);
				EventCenter.instance.on(EventCenter.REPLAY_up,this,replay_up);
				EventCenter.instance.on(EventCenter.REPLAY_down,this,replay_down);
				EventCenter.instance.on(EventCenter.REPLAY_back,this,replay_back);
				EventCenter.instance.on(EventCenter.REPLAY_skip,this,replay_skip);
			}
			else
			{
				EventCenter.instance.on(MessageManager.GAME,this,onMsg);
				
			}
			
		}
		
		public override function onRemove():void
		{
			if(UserData.isReplay)
			{
				EventCenter.instance.off(EventCenter.REPLAY_getAllReplayMsgs,this,onGotAllReplayMsgs);
				
				EventCenter.instance.off(EventCenter.REPLAY_play,this,replay_play);
				EventCenter.instance.off(EventCenter.REPLAY_pause,this,replay_pause);
				EventCenter.instance.off(EventCenter.REPLAY_up,this,replay_up);
				EventCenter.instance.off(EventCenter.REPLAY_down,this,replay_down);
				EventCenter.instance.off(EventCenter.REPLAY_back,this,replay_back);
				EventCenter.instance.off(EventCenter.REPLAY_skip,this,replay_skip);
			}
			else
			{
				EventCenter.instance.off(MessageManager.GAME,this,onMsg);
			}
		}
		
		/**播放*/
		protected function replay_play():void
		{
			model.replayState = 1;
			onplay();
		}
		/**暂停*/
		protected function replay_pause():void
		{
			model.replayState = 0;
		}
		/**上一步*/
		protected function replay_up():void
		{
			trace("model.replayCurStep::" + model.replayCurStep);
			
			model.replayState = 0;
			if(model.replayCurStep < model.preStepNum+1)
			{
				return;
			}
			
			GameModule.instance.gameContext.view.replayup_reset();
			(model as ReplayMajiangModel).replayReset();
			
			GameModule.instance.gameContext.controller.ACK_RoomInfo(model.majiangMsgs.ACK_RoomInfo);
			
			
			//GameModule.instance.majiangGameContext.
				//majiangGameController.control_game_operation_tableinfo(GameModule.instance.majiangGameContext.majiangModel.majiangMsgs.control_game_operation_tableinfo_Info);
			
			var data:Object = model.replayAllStepData[model.replayCurStep-2];
			
			trace("replayAllStepData[model.replayCurStep-2]");
			trace(data);
			trace("replayAllStepData[model.replayCurStep-2]");
			
			model.playerInfoVec = (data.userData as Vector.<Object>).concat();
			GameModule.instance.gameContext.view.playerInfoPage.updatePlayerInfos(model.playerInfoVec);//回复了玩家的数据
			GameModule.instance.gameContext.controller.recoveryByReplayData(data);
			//回复玩家的牌
			
				
				
			
			//GameModule.instance.majiangGameContext.majiangGameController.control_game_operation_userinfo(data);
			
			model.replayCurStep -= 2;
			
			onplay();

		}
		/**下一步*/
		protected function replay_down():void
		{
			if(model.needCutdownReplay)
			{
				return;
			}
			model.replayState = 0;

			model.replayCurStep += 1;
			
			if(model.replayCurStep > model.replayData.length-1)
			{
				return;
			}
			else if(model.replayCurStep == model.replayData.length-1)
			{
				EventCenter.instance.event(EventCenter.REPLAY_over,null);
			}
			
			this.onMsg(model.replayData[model.replayCurStep]);
		}
		/**返回*/
		protected function replay_back():void
		{
//			if(model.needCutdownReplay)
//			{
//				return;
//			}
			replay_pause();
			HuAnimation.instance.noticeHide();
			GameModule.instance.gameContext.controller.clearTimeDelay();
			TimeManager.instance.timer.clear(this,onplay);
			endGame();
		}
		
		protected function endGame():void
		{
			GameModule.instance.gameContext.controller.endGameGotoHall();
		}
		
		/**跳过重播，直接到回放界面*/
		protected function replay_skip():void
		{
			HuAnimation.instance.noticeHide();
			GameModule.instance.gameContext.controller.clearTimeDelay();
			GameModule.instance.gameContext.controller.contineGameQueue();
			
			model.isStrictShowCalc = true;
			
			model.replayState = 1;
			
			model.replayCurStep = model.replayData.length-3;
			onplay();
		}
		
		
		protected function onplay():void
		{
			if(model.needCutdownReplay)
			{
				TimeManager.instance.timer.once(1000,this,onplay);
				return;
			}
			model.replayCurStep += 1;//+1必须和执行放在一起
			
			if(model.replayCurStep > model.replayData.length-1)
			{
				return;
			}
			else if(model.replayCurStep == model.replayData.length-1)
			{
				EventCenter.instance.event(EventCenter.REPLAY_over,null);
			}
			this.onMsg(model.replayData[model.replayCurStep]);
			
			if(model.replayState == 1)
			{
				TimeManager.instance.timer.once(500,this,onplay);
			}
		}
		
		protected function get model():MajiangModel
		{
			return GameModule.instance.gameContext.model
		}
		
		
		protected function onGotAllReplayMsgs(data:Object):void
		{
			model.replayData = [];
			model.replayCurStep = 0;
			model.replayState = 0;
			(model as ReplayMajiangModel).replayAllStepData = [];
			UserData.replayUid = data.uid;
			
			
			//对断线重连的数据进行处理
			var list:Array = data.list;
			
			var i:int;
			var len:int = list.length;
			
			for(i=0;i<len;i++)
			{
				model.replayData.push(processSingleReplayData(list[i]));
			}
			
			GameModule.instance.gameContext.controller.contineGameQueue();
			for(i=0;i<model.preStepNum;i++)
			{
				model.replayCurStep = i;
				this.procMsg(model.replayData[model.replayCurStep]);
				//this.onMsg(model.replayData[model.replayCurStep]);
			}
			
			replay_play();
		}
		
		protected function processSingleReplayData(tar:Object):Object
		{
			var obj:Object = new Object();
			for(var key in tar.C)
			{
				obj.messageId = parseInt(key);
				obj.body = tar.C[key];
			}			
			return obj;
		}
		
		
		private function onMsg(msg:*):void
		{
			if(GameModule.isPauseGameQueue == true)
			{
				return;
			}
			
			procMsg(msg);
		}
		
		private function procMsg(msg:Object):void
		{
			if(msg is Message)
			{
				msg.complete();
			}
			
			trace("acc msgId::" + msg.messageId);
			
			var body:Object;
			
			switch(msg.messageId)
			{
				case Message.ACKBC_Into_Room:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.ACKBC_Into_Room.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACKBC_Into_Room(body);
					break;
				case Message.ACKBC_Sitdown:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.ACKBC_Sitdown.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACKBC_Sitdown(body);
					break; 
				case Message.ACKBC_Standup:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.ACKBC_Standup.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACKBC_Standup(body);
					break;
			
				case Message.ACK_RoomInfo:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.ACK_RoomInfo.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACK_RoomInfo(body);
					break;
				
				case Message.ACK_Room_User:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.ACK_Room_User.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACK_Room_User(body);
					break;
				
				case Message.ACKBC_Start:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.ACKBC_Start.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACKBC_Start(body);
					break;
				
				case Message.ACK_UserCard:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.ACK_UserCard.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACK_UserCard(body);
					break;
				
				case Message.ACK_User_SeatCard:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.ACK_User_SeatCard.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACK_User_SeatCard(body);
					break;
				
				case Message.ACKBC_GetCard:
					if(UserData.isReplay)
					{
						body = {};
						var arr:Array = msg.body;
						body.Seat = arr[0];
						body.CID = arr[1];
						body.FromLast = arr[2];
						body.Type = [0,0,0,0];
						
						if(arr.length == 5)
						{
							body.Type = [arr[3],arr[4],0,0];
						}
					}
					else
					{
						body = AppConfig.proto.ACKBC_GetCard.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACKBC_GetCard(body);
					break;
				
				case Message.ACKBC_PutCard:
					if(UserData.isReplay)
					{
						body = {};
						var arr:Array = msg.body;
						body.Seat = arr[0];
						body.CID = arr[1];
					}
					else
					{
						body = AppConfig.proto.ACKBC_PutCard.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACKBC_PutCard(body);
					break;
				
				case Message.ACK_WaitTool:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.ACK_WaitTool.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACK_WaitTool(body);
					break;
				
				case Message.ACKBC_Chow:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.ACKBC_Chow.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACKBC_Chow(body);
					break;
				
				case Message.ACKBC_Peng:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.ACKBC_Peng.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACKBC_Peng(body);
					break;
				
				case Message.ACKBC_Kong:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.ACKBC_Kong.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACKBC_Kong(body);
					break;
				
				case Message.ACKBC_Ready:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.ACKBC_Ready.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACKBC_Ready(body);
					break;
				
				case Message.ACKBC_Exit_Room:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.ACKBC_Exit_Room.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACKBC_Exit_Room(body);
					break;
				
				case Message.NotifyStartGame:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.NotifyStartGame.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.NotifyStartGame(body);
					break;
				
				case Message.MSG_ACKBC_Chat:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.ACKBC_SendMsg.decode(msg.params[0]);
					}
				
					GameModule.instance.gameContext.view.onRecChat(body);
					break;
				
				case Message.ACKBC_Win:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.ACKBC_Win.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACKBC_Win(body);
					break;
				
				case Message.ACKBC_Draw:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.ACKBC_Draw.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACKBC_Draw(body);
					break;
				case Message.ACKBC_Card_Init:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.ACKBC_Card_Init.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACKBC_Card_Init(body);
					break;
				case Message.ACKBC_Total://小结算
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.ACKBC_Total.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACKBC_Total(body);
					break;
				case Message.MSG_NOTIFY_SUMMARY://大结算
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.TotalSummary.decode(msg.params[0]);
					}
				
					GameModule.instance.gameContext.controller.NOTIFY_Summary(body);
					break;
				case Message.AckDisband:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.AckDisband.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.AckDisband(body);
					break;
				case Message.NotifyDisband:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.NotifyDisband.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.NotifyDisband(body);
					break;
				case Message.NotifyUserState:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.NotifyUserState.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.NotifyUserState(body);
					break;
				case Message.MSG_NOTIFY_DESTORY_ROOM:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.NotifyDestoryRoom.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.NotifyDestoryRoom(body);
					break;
				case Message.NotifyKick:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.NotifyKick.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.NotifyKick(body);
					break;
				case Message.KickResponse:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.KickResponse.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.KickResponse(body);
					break;
				case Message.ACK_TransferHuaResponse:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.ACK_TransferHuaResponse.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.ACK_TransferHuaResponse(body);
					break;
				case Message.MSG_ACK_Gift:
					if(UserData.isReplay)
					{
						body = msg.body;
					}
					else
					{
						body = AppConfig.proto.MSG_ACK_Gift.decode(msg.params[0]);
					}
					
					GameModule.instance.gameContext.controller.MSG_ACK_Gift(body);
					break;
				
				case Message.Pass:
					if(UserData.isReplay)
					{
						body = msg.body;
						trace("Message.Pass",body);
						GameModule.instance.gameContext.controller.pass(body);
					}
					
					
					break;
				
					
				
				case "":
					break;
				
				case "":
					break;
					
			}
			
			if(UserData.isReplay)
			{
				if(model.replayCurStep >= model.preStepNum-1)
				{
					model.saveStepData();
				}
				
			}
		}
		
		
		// --- Protected Functions --------------------------------------------------------------------------------------------------------------------------------- //
		
		// --- Internal&Private Functions -------------------------------------------------------------------------------------------------------------------------- //
		
		// --- Static Vars ----------------------------------------------------------------------------------------------------------------------------------------- //
		
		// --- Static Functions ------------------------------------------------------------------------------------------------------------------------------------ //
		
	}
}
