package hall.view.replay
{
	import common.baseui.UIBase;
	import common.event.EventCenter;
	
	import hall.view.SBoardView;
	
	import laya.display.Sprite;
	import laya.events.Event;
	import laya.ui.Box;
	import laya.ui.Button;
	import laya.ui.Label;
	import laya.utils.Handler;
	
	import manager.TextManager;
	
	import net.Message;
	import net.ProtoMessage;
	
	import ui.hall.replay.OnPlayViewUI;

	/**
	 * 对局详情
	 */
	public class OnPlayView extends UIBase
	{
		public var needViewDetail:Boolean = false;
		
		protected var _skin:OnPlayViewUI;
		protected var _singleBoardView:SBoardView;

		public function get singleBoardView():SBoardView
		{
			return _singleBoardView;
		}

		protected var _detailListView:BattleDetailListView;

		public function get detailListView():BattleDetailListView
		{
			return _detailListView;
		}

		public function OnPlayView(container:Sprite=null)
		{
			super(container);
			skinRes = "";
			this._singleBoardView=new SBoardView();
			
		}
		
		override protected function onLoaded():void
		{
			super.onLoaded();
			_skin = new OnPlayViewUI();
			_skin.mouseEnabled = true;
			if(_isShow)
			{
				container.addChild(_skin);
			}
			
			init();
		}
		/**移除对局详情显示页面 */
		public static const HALLVIEW_REMONPLAY:String = "HALLVIEW_REMONPLAY";
		private var data:Array;//list数据数组
		protected function init():void
		{
			this._detailListView = new BattleDetailListView();
			EventCenter.instance.on(EventCenter.HALLVIEW_GETONPLAY,this,function(data:*):void{
				var tempData:*=(data.list as Array).sort(compareFunction)
				updata(tempData);
			});
			
			_skin.onplayList.array = [];
			
			_skin.onplayList.mouseHandler = new Handler(this,function(e:Event,index:int):void{
				if(e.type!=Event.CLICK)return;
				if(!e.target is Button)return;
				
//				var battleDetail:Object ={ roomId : e.target['roomId']};
//				EventCenter.instance.event(EventCenter.SOCKET_SEND,ProtoMessage.getProtoMessage(Message.MSG_BattleDetail,battleDetail));
				
				//原来的跳转到大结算详细界面
//				return;
				var getRecord:Object = {
					"uniqueCode":e.target['unicode']
				};
				EventCenter.instance.event(EventCenter.SOCKET_SEND,ProtoMessage.getProtoMessage(Message.MSG_Room_Summary,getRecord));
				this._singleBoardView.showInit();
			});
			
		}
		
		protected function compareFunction(A:Object,B:Object):int
		{
			if(A.timestamp>B.timestamp)
			{
				return -1;
			}else if(A.timestamp==B.timestamp)
			{
				return 0;
			}else{
				return 1;
			}
		}
		
		protected function updata(dt:*):void
		{
			this.data=[];
			var ruleNumber:*
			for (var i:int = 0,len:int=dt.length; i < len; ++i)
			{
				var temoData:Array=WX.splitStr(dt[i].rule,",");
				var isHas:Boolean=false;
				ruleNumber=AppConfig.getRule(parseInt(temoData[1]));
							
				data.push({roomtype:dt[i].roomtype,mjname:dt[i].nickName,manumber:ruleNumber.desc,Rate:AppConfig.getTimeDate(dt[i].timestamp*1000),GoTo:dt[i].uniqueCode,headimg:"http://thirdwx.qlogo.cn/mmopen/vi_32/" +dt[i].icon,record:dt[i].selfRecord,roomId:dt[i].roomId});
			}
			_skin.onplayList.array = data;
			_skin.onplayList.renderHandler = new Handler(this, this.onRender);
			// 使用但隐藏滚动条
			_skin.onplayList.vScrollBarSkin = "";
			_skin.onplayList.repeatY=0;
			
			_skin.onplayList.selectEnable = true;
//			_skin.onplayList.refresh();
			
			if(needViewDetail && data && data.length>0)
			{
				
				var dat:Object;
				var lenj:int=data.length;
				for (var j:int = 0; j < lenj; j++) 
				{
					if(data[j].GoTo[0]==UserData.uniqueCode){
						dat=data[j];
					}
				}
				trace(dat,"------------------------------------------")
				EventCenter.instance.event(EventCenter.SOCKET_SEND,ProtoMessage.getProtoMessage(Message.MSG_Room_Summary,{"uniqueCode":UserData.uniqueCode}));
				this._singleBoardView.showInit();
				
//				EventCenter.instance.event(EventCenter.SOCKET_SEND,ProtoMessage.getProtoMessage(Message.MSG_Room_Summary,{"id":dat.roomId}));
//				this._singleBoardView.showInit(AppConfig.getTimeDate(dat.timestamp*1000),ruleNumber.desc);
			}
		}
		
		public function goSingleBoard():void
		{
			EventCenter.instance.event(EventCenter.SOCKET_SEND,ProtoMessage.getProtoMessage(Message.MSG_Room_Summary,{"uniqueCode":UserData.uniqueCode}));
			this._singleBoardView.showInit();
		}
		
		public function goDetailList(dat:Object):void
		{
			_detailListView.updateData(dat);
			_detailListView.show();
		}
		
		
		private function onRender(cell:Box, index:int):void 
		{
			//如果索引不再可索引范围，则终止该函数
			if(index >= this.data.length)return;
			//获取当前渲染条目的数据
			var data:Object=this.data[index];
//			trace(data,this.data.length,index)
			//根据子节点的名字listNumber，获取子节点对象。   
			var mjName:Label=cell.getChildByName("onplayName") as Label;
			mjName.text=data.mjname;
			
			var maNumber:Label=cell.getChildByName("onplay") as Label;
			maNumber.text=data.manumber;
			
			var rate:Label=cell.getChildByName("onplayTime") as Label;
			rate.text=" "+data.Rate;//record
			
			var scoreText:Label = cell.getChildByName("onplayScore") as Label;
			scoreText.font=data.record>0?TextManager.NumberRedFont:TextManager.NumberLvFont;
			
			if(data.record>0)
			{
				scoreText.text = "+" + data.record;
			}
			else
			{
				scoreText.text = "" + data.record;
			}
			
			var mjNameTf:Label = cell.getChildByName("mjName") as Label;
			mjNameTf.text = UserData.roomtype_reference[data.roomtype]
			
			
			var goTo:Button=cell as Button;
			goTo["unicode"]=data.GoTo;
			goTo["roomId"] = data.roomId;
			
			//cell["headIMG"].skin =data.headimg==""?"common/morentouxiang.png":data.headimg;
			
			cell._childs[7]._childs[0].skin=data.headimg;
		}
		
		public override function show():void
		{
			super.show();
			if(_skin)
			{
				container.addChild(_skin);
			}
		}
		
		public override function hide():void
		{
			super.hide();
			if(_skin && _skin.parent)
			{
				_skin.parent.removeChild(_skin);
				_singleBoardView.hide();
				_detailListView.hide();
			}
		}
	}
}