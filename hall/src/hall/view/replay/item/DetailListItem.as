package hall.view.replay.item
{
	import common.event.EventCenter;
	import common.view.PopBox;
	
	import hall.HallModule;
	
	import laya.events.Event;
	import laya.net.HttpRequest;
	
	import net.Message;
	
	import ui.hall.replay.BattleRecordPerItemUI;
	
	public class DetailListItem extends BattleRecordPerItemUI
	{
		protected var playerList:Vector.<PlayerRecordItem> = new Vector.<PlayerRecordItem>(10);
		
		public function DetailListItem()
		{
			super();
			init();
		}
		
		protected function init():void
		{
			initUI();
			addListener();
		}
		
		protected function initUI():void
		{
			var i:int=0,len:int=playerList.length;
			for(i=0;i<len;i++)
			{
				playerList[i] = new PlayerRecordItem(this["player"+i]);
			}
			mpanel.hScrollBarSkin = "  ";
		}
		
		protected function addListener():void
		{
			replayBtn.on(Event.CLICK,this,onClickReplayBtn);
			
		}
		
		private var isTest:Boolean = false;
		
		private function getTestObj():Object
		{
			return "";//{"Msgs":[{"P":-1,"C":{"520":{"RID":778274,"Type":3010,"Rule":[25,19,23,128],"RoundCount":16}}},{"P":-1,"C":{"525":{"RID":778274,"Users":[{"uid":"1055","coin":50000,"diamond":9120,"ready":true,"state":1,"sex":1,"score":-1},{"uid":"1057","index":1,"coin":50000,"diamond":9120,"ready":true,"state":1,"sex":1,"score":69},{"uid":"1058","index":2,"coin":50000,"diamond":9120,"ready":true,"state":1,"sex":1,"score":-93},{"uid":"1056","index":3,"coin":50000,"diamond":9120,"ready":true,"state":1,"sex":1,"score":25}]}}},{"P":-1,"C":{"620":{"zhuang_index":2,"direction":2,"round_count":16,"left_time":692}}},{"P":-1,"C":{"610":{"CardCount":144,"CardFirst":52,"CardLeft":76,"CurCardId":-1,"CurIndex":3,"ZhuangIndex":2,"StartGame":1,"Defeat":[0,0,0,0],"last_put_index":2}}},{"P":-1,"C":{"615":{"Cards":[{"ListLen":13,"List":[{"cid":1},{"cid":21},{"cid":10},{"cid":22},{"cid":32},{"cid":9},{"cid":20},{"cid":25},{"cid":7},{"cid":30},{"cid":17},{"cid":14},{"cid":37}],"last_card_id":-1,"type":2},{"Seat":1,"ListLen":13,"List":[{"cid":15},{"cid":4},{"cid":26},{"cid":24},{"cid":33},{"cid":22},{"cid":31},{"cid":29},{"cid":8},{"cid":29},{"cid":12},{"cid":27},{"cid":2}],"last_card_id":-1,"type":3},{"Seat":2,"ListLen":13,"List":[{"cid":33},{"cid":22},{"cid":34},{"cid":11},{"cid":7,"target_index":-1,"type":-1},{"cid":9},{},{"cid":16},{"cid":32},{"cid":10},{"cid":23},{"cid":7},{"cid":7}],"last_card_id":-1,"type":3},{"Seat":3,"ListLen":13,"List":[{"cid":3},{"cid":15},{"cid":30},{"cid":13},{"cid":21},{"cid":31},{"cid":24},{"cid":13},{"cid":33},{"cid":13},{"cid":8},{"cid":17},{"cid":2}],"last_card_id":-1,"type":2}]}}},{"P":-1,"C":{"992":{"index":2,"hua_list":[34],"card_ids":[4]}}},{"P":-1,"C":{"710":[2,10,true,0,0]}},{"P":-1,"C":{"720":[2,0]}},{"P":-1,"C":{"710":[3,4,true,0,0]}},{"P":-1,"C":{"720":[3,21]}},{"P":0,"C":{"730":{"Type":[0,0,0,1]}}},{"P":-1,"C":{"330":{"SID":"1055"}}},{"P":-1,"C":{"992":{"hua_list":[37],"card_ids":[16]}}},{"P":0,"C":{"730":{"Type":[0,0,0,1]}}},{"P":-1,"C":{"740":{"TSeat":3,"CID1":21,"CID2":20,"CID3":22}}},{"P":-1,"C":{"720":[0,30]}},{"P":-1,"C":{"710":[1,30,true,0,0]}},{"P":-1,"C":{"720":[1,12]}},{"P":2,"C":{"730":{"Seat":2,"Type":[0,0,0,1]}}},{"P":-1,"C":{"740":{"Seat":2,"TSeat":1,"CID1":12,"CID2":11,"CID3":10}}},{"P":-1,"C":{"720":[2,32]}},{"P":-1,"C":{"710":[3,2,true,0,0]}},{"P":-1,"C":{"720":[3,2]}},{"P":-1,"C":{"710":[0,28,true,0,0]}},{"P":-1,"C":{"720":[0,28]}},{"P":-1,"C":{"710":[1,20,true,0,0]}},{"P":-1,"C":{"720":[1,15]}},{"P":-1,"C":{"710":[2,5,true,0,0]}},{"P":-1,"C":{"720":[2,33]}},{"P":-1,"C":{"710":[3,15,true,0,0]}},{"P":-1,"C":{"720":[3,24]}},{"P":-1,"C":{"710":[0,25,true,0,0]}},{"P":-1,"C":{"720":[0,32]}},{"P":-1,"C":{"710":[1,9,true,0,0]}},{"P":-1,"C":{"720":[1,9]}},{"P":-1,"C":{"710":[2,27,true,0,0]}},{"P":-1,"C":{"720":[2,27]}},{"P":-1,"C":{"710":[3,0,true,0,0]}},{"P":-1,"C":{"720":[3,30]}},{"P":-1,"C":{"710":[0,1,true,0,0]}},{"P":-1,"C":{"720":[0,7]}},{"P":2,"C":{"730":{"Seat":2,"Type":[0,1,1,0]}}},{"P":-1,"C":{"760":{"Seat":2,"KongType":60,"CID":7}}},{"P":-1,"C":{"710":[2,15,false,0,0]}},{"P":-1,"C":{"720":[2,4]}},{"P":3,"C":{"730":{"Seat":3,"Type":[0,0,0,1]}}},{"P":-1,"C":{"740":{"Seat":3,"TSeat":2,"CID1":4,"CID2":3,"CID3":2}}},{"P":-1,"C":{"720":[3,31]}},{"P":-1,"C":{"710":[0,19,true,0,0]}},{"P":-1,"C":{"720":[0,14]}},{"P":-1,"C":{"710":[1,29,true,0,0]}},{"P":-1,"C":{"720":[1,27]}},{"P":-1,"C":{"710":[2,1,true,0,0]}},{"P":-1,"C":{"720":[2,1]}},{"P":0,"C":{"730":{"Type":[0,0,1,0]}}},{"P":-1,"C":{"750":{"TSeat":2,"CID":1}}},{"P":-1,"C":{"720":[0,19]}},{"P":-1,"C":{"710":[1,20,true,0,0]}},{"P":-1,"C":{"720":[1,30]}},{"P":-1,"C":{"710":[2,25,true,0,0]}},{"P":-1,"C":{"720":[2,5]}},{"P":-1,"C":{"710":[3,16,true,0,0]}},{"P":-1,"C":{"720":[3,0]}},{"P":-1,"C":{"710":[0,14,true,0,0]}},{"P":-1,"C":{"720":[0,21]}},{"P":1,"C":{"730":{"Seat":1,"Type":[0,0,0,1]}}},{"P":-1,"C":{"740":{"Seat":1,"CID1":21,"CID2":20,"CID3":22}}},{"P":-1,"C":{"720":[1,31]}},{"P":-1,"C":{"710":[2,3,true,0,0]}},{"P":-1,"C":{"720":[2,3]}},{"P":-1,"C":{"710":[3,11,true,0,0]}},{"P":-1,"C":{"720":[3,4]}},{"P":-1,"C":{"710":[0,19,true,0,0]}},{"P":-1,"C":{"720":[0,19]}},{"P":-1,"C":{"710":[1,19,true,0,0]}},{"P":-1,"C":{"720":[1,33]}},{"P":-1,"C":{"710":[2,32,true,0,0]}},{"P":-1,"C":{"720":[2,32]}},{"P":-1,"C":{"710":[3,35,true]}},{"P":-1,"C":{"710":[3,9,false,0,0]}},{"P":-1,"C":{"720":[3,8]}},{"P":-1,"C":{"710":[0,36,true]}},{"P":-1,"C":{"710":[0,14,false,0,0]}},{"P":-1,"C":{"720":[0,9]}},{"P":-1,"C":{"710":[1,18,true,0,0]}},{"P":-1,"C":{"720":[1,8]}},{"P":-1,"C":{"710":[2,10,true,0,0]}},{"P":-1,"C":{"720":[2,25]}},{"P":0,"C":{"730":{"Type":[0,0,1,0]}}},{"P":-1,"C":{"750":{"TSeat":2,"CID":25}}},{"P":-1,"C":{"720":[0,10]}},{"P":2,"C":{"730":{"Seat":2,"Type":[0,0,1,0]}}},{"P":-1,"C":{"750":{"Seat":2,"CID":10}}},{"P":-1,"C":{"720":[2,22]}},{"P":-1,"C":{"710":[3,40,true]}},{"P":-1,"C":{"710":[3,5,false,0,0]}},{"P":-1,"C":{"720":[3,9]}},{"P":-1,"C":{"710":[0,23,true,0,0]}},{"P":-1,"C":{"720":[0,23]}},{"P":-1,"C":{"710":[1,5,true,0,0]}},{"P":-1,"C":{"720":[1,2]}},{"P":-1,"C":{"710":[2,21,true,0,0]}},{"P":-1,"C":{"720":[2,21]}},{"P":-1,"C":{"710":[3,22,true,0,0]}},{"P":-1,"C":{"720":[3,5]}},{"P":-1,"C":{"710":[0,4,true,0,0]}},{"P":-1,"C":{"720":[0,4]}},{"P":-1,"C":{"710":[1,8,true,0,0]}},{"P":-1,"C":{"720":[1,8]}},{"P":-1,"C":{"710":[2,27,true,0,0]}},{"P":-1,"C":{"720":[2,27]}},{"P":-1,"C":{"710":[3,41,true]}},{"P":-1,"C":{"710":[3,1,false,0,0]}},{"P":-1,"C":{"720":[3,11]}},{"P":-1,"C":{"710":[0,24,true,0,0]}},{"P":-1,"C":{"720":[0,24]}},{"P":-1,"C":{"710":[1,24,true,0,0]}},{"P":-1,"C":{"720":[1,4]}},{"P":-1,"C":{"710":[2,26,true,0,0]}},{"P":-1,"C":{"720":[2,23]}},{"P":-1,"C":{"710":[3,3,true,0,0]}},{"P":-1,"C":{"720":[3,1]}},{"P":-1,"C":{"710":[0,31,true,0,0]}},{"P":-1,"C":{"720":[0,31]}},{"P":-1,"C":{"710":[1,6,true,0,0]}},{"P":-1,"C":{"720":[1,5]}},{"P":-1,"C":{"710":[2,12,true,0,0]}},{"P":-1,"C":{"720":[2,26]}},{"P":-1,"C":{"710":[3,20,true,0,0]}},{"P":-1,"C":{"720":[3,3]}},{"P":-1,"C":{"710":[0,2,true,0,0]}},{"P":-1,"C":{"720":[0,2]}},{"P":-1,"C":{"710":[1,6,true,0,0]}},{"P":-1,"C":{"720":[1,26]}},{"P":-1,"C":{"710":[2,12,true,0,0]}},{"P":-1,"C":{"720":[2,9]}},{"P":-1,"C":{"710":[3,26,true,0,0]}},{"P":-1,"C":{"720":[3,13]}},{"P":-1,"C":{"710":[0,23,true,0,0]}},{"P":-1,"C":{"720":[0,23]}},{"P":-1,"C":{"710":[1,18,true,0,0]}},{"P":-1,"C":{"720":[1,6]}},{"P":-1,"C":{"710":[2,6,true,0,0]}},{"P":-1,"C":{"720":[2,6]}},{"P":-1,"C":{"710":[3,32,true,0,0]}},{"P":-1,"C":{"720":[3,13]}},{"P":-1,"C":{"710":[0,38,true]}},{"P":-1,"C":{"710":[0,28,false,0,0]}},{"P":-1,"C":{"720":[0,28]}},{"P":-1,"C":{"710":[1,17,true,0,0]}},{"P":-1,"C":{"720":[1,6]}},{"P":-1,"C":{"710":[2,12,true,0,0]}},{"P":-1,"C":{"720":[2,15]}},{"P":0,"C":{"730":{"Type":[1,0,0,0]}}},{"P":3,"C":{"730":{"Seat":3,"Type":[0,0,1,1]}}},{"P":-1,"C":{"770":{"Seat":[0],"TSeat":2,"CID":15,"Cards":[{"ListLen":4,"List":[{"cid":17},{"cid":16},{"cid":14},{"cid":14}],"Peng":[{"cid":1,"target_index":2},{"cid":25,"target_index":2}],"Chow":[{"cid":21,"target_index":3,"type":1},{"cid":20},{"cid":22}],"Hua":[{"cid":37},{"cid":36},{"cid":38}]},{"Seat":1,"ListLen":10,"List":[{"cid":24},{"cid":29},{"cid":29},{"cid":29},{"cid":20},{"cid":19},{"cid":18},{"cid":24},{"cid":18},{"cid":17}],"Chow":[{"cid":21,"type":1},{"cid":20},{"cid":22}]},{"Seat":2,"ListLen":4,"List":[{"cid":16},{"cid":12},{"cid":12},{"cid":12}],"Kong":[{"cid":7}],"Peng":[{"cid":10}],"Chow":[{"cid":12,"target_index":1,"type":1},{"cid":11},{"cid":10}],"Hua":[{"cid":34}]},{"Seat":3,"ListLen":10,"List":[{"cid":15},{"cid":33},{"cid":13},{"cid":17},{"cid":15},{"cid":16},{"cid":22},{"cid":20},{"cid":26},{"cid":32}],"Chow":[{"cid":4,"target_index":2,"type":1},{"cid":3},{"cid":2}],"Hua":[{"cid":35},{"cid":40},{"cid":41}]}]}}},{"P":-1,"C":{"790":{"WinCard":15,"Tai":[5,0,0,0],"Msg":["正花(2台) 野花(2台)边倒(1台) ","","",""],"Reward":[{"score":10,"total_score":9},{"total_score":69},{"score":-10,"total_score":-103},{"total_score":25}],"round_count":17}}}]};
		}
		
		protected function onClickReplayBtn(e:Event):void
		{
			if(isTest)
			{
				ontest(getTestObj())
			}
			else
			{
				var http:HttpRequest = new HttpRequest();
				http.on(Event.COMPLETE, this,onRequestCompete);
				//http.send("http://" + AppConfig.httpHallIp +":"+ AppConfig.httpHallPort+"/getReviewData?reviewCode="+dataSource.reviewCode,null, "get", "text");//http://192.168.18.182:5564/getReviewData?reviewCode=1026110196844363
				
				http.send("../wechat/api/getreview?code="+dataSource.reviewCode,null, "get", "text");
			}
		}
		
		private function ontest(data:Object):void
		{
			onRequestCompete(data);
		}
		
		private function onRequestCompete(data:Object):void
		{
			if(data == "")
			{
				QuickUtils.popMessageBox("10月12号更新之前未记录回放数据，敬请谅解！",PopBox.BTN_NONE,this,null);
				return;
			}
			
			//trace("huifangshuju::" ,data)
			
			var replayData:Object;
			if(isTest)
			{
				replayData = data;
			}
			else
			{
				var info:Object = JSON.parse(data as String);
				
				if(info.status != 1)
				{
					QuickUtils.popMessageBox("10月12号更新之前未记录回放数据，敬请谅解！",PopBox.BTN_NONE,this,null);
					return;
				}
				replayData = JSON.parse(info.info as String);
				
				//replayData = JSON.parse(data as String);
			}
			
			
			
			
			var msgs:Array = replayData.Msgs;
			var i:int,len:int = msgs.length;
			
			var roomInfo:Object;
			var userInfo:Object;
			var startInfo:Object;
			
			for(i=0;i<len;i++)
			{
				if(msgs[i]["C"][""+Message.ACK_RoomInfo])
				{
					roomInfo = msgs[i]["C"][""+Message.ACK_RoomInfo];
				}
				
				if(msgs[i]["C"][""+Message.ACK_Room_User])
				{
					userInfo = msgs[i]["C"][""+Message.ACK_Room_User];
				}
				
				if(msgs[i]["C"][""+Message.ACKBC_Start])
				{
					startInfo = msgs[i]["C"][""+Message.ACKBC_Start];
				}
				
				if(roomInfo && userInfo && startInfo)
				{
					break;
				}
			}
			
//			UserData.uid = "7201";
//			UserData.replayUid = "7201";
			
			var users:Array = userInfo.Users;
			var targetIdx:int = 0;
			for(i=0;i<users.length;i++)
			{
				if(users[i].uid == UserData.selfuid)//特指重播的这个人
				{
					if(!users[i].index)
					{
						users[i].index = 0;
					}
					targetIdx = users[i].index;
				}
				
				var obj:Object = getIconAndNameByUid(users[i].uid);
				users[i].name = obj.name;
				users[i].icon = obj.icon;
			}
			
			var startHuanUsers:Array = startInfo.Users;
			if(startHuanUsers)//有换座位的参照换座位的
			{
				for(i=0;i<startHuanUsers.length;i++)
				{
					if(startHuanUsers[i].uid == UserData.selfuid)//特指重播的这个人
					{
						if(!startHuanUsers[i].index)
						{
							startHuanUsers[i].index = 0;
						}
						targetIdx = startHuanUsers[i].index;
						break;
					}
				}
			}
			
			
			var replayMsgs:Array = new Array();
			for(i=0;i<len;i++)
			{
				if(msgs[i].P == -1 || msgs[i].P == targetIdx)
				{
					replayMsgs.push(msgs[i]);
				}
			}
			
			//我们准备进入游戏，并且设置是重播
			UserData.isReplay = true;
			AppConfig.autoPlay = false;
			UserData.replayUid = UserData.uid;
			EventCenter.instance.once(EventCenter.GameContextReady,this,onGameReady,[replayMsgs]);
			
			HallModule.instance.hallContext.hallController.replayGotoGame(roomInfo);
			
			
			
		}
		
		protected function onGameReady(msg:Array):void
		{
			trace("888888888::" , msg);
			
			EventCenter.instance.event(EventCenter.REPLAY_getAllReplayMsgs,{uid:UserData.selfuid,list:msg});
		}
		
		protected function getIconAndNameByUid(uid:String):Object
		{
			var obj:Object = {};
			for(var i:int=0;i<dataSource.list.length;i++)
			{
				if(dataSource.list[i].userId == uid)
				{
					obj.name = dataSource.list[i].nickName;
					obj.icon = dataSource.list[i].icon;
				}
			}
			
			return obj;
		}
		
		
		
		public function setData(dat:*,idx:int):void
		{
			if(dat)
			{
				dataSource = dat;
				
				roundTf.text = "第" + idx + "局";
				
				var list:Array = dat.list as Array;
				
				var i:int,len:int = list.length;
				
				list.sort(compareFun);
				
				for(i=0;i<playerList.length;i++)
				{
					if(list[i])
					{
						playerList[i].show();
						playerList[i].update(list[i]);
					}
					else
					{
						playerList[i].hide();
					}
				}
				
				mpanel.scrollTo();
			}
		}
		
		protected function compareFun(A:Object,B:Object):int
		{
			if(A.userId>B.userId)
			{
				return -1;
			}
			else
			{
				return 1;
			}
		}
	}
}