
(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var AbstractLayer=rb.framework.mvc.AbstractLayer,Animation=laya.display.Animation,AppConfig=Laya.AppConfig;
	var BaidapaiUI=ui.mainGame.Items.BaidapaiUI,BottomHandleItemUI=ui.mainGame.Items.BottomHandleItemUI,BottomHandlePartUI=ui.mainGame.majiangParts.BottomHandlePartUI;
	var BottomOutputPartUI=ui.mainGame.majiangParts.BottomOutputPartUI,BottomPengGangItemUI=ui.mainGame.Items.BottomPengGangItemUI;
	var BottomPengGangPartUI=ui.mainGame.majiangParts.BottomPengGangPartUI,Box=laya.ui.Box,Browser=laya.utils.Browser;
	var Button=laya.ui.Button,CalculatePerItemUI=ui.mainGame.majiangParts.Newcalculate.CalculatePerItemUI,Chat=modules.gameCommon.chat.Chat;
	var ChatPage=modules.gameCommon.chat.ChatPage,ChiSelePartUI=ui.mainGame.majiangParts.ChiSelePartUI,ClockPartUI=ui.mainGame.majiangParts.ClockPartUI;
	var CommonModule=common.CommonModule,Ease=laya.utils.Ease,Event=laya.events.Event,EventCenter=common.event.EventCenter;
	var GameContext=rb.framework.mvc.GameContext,GameTableUI=ui.mainGame.GameTableUI,GiftItemUI=ui.gameCommon.items.GiftItemUI;
	var HallModule=hall.HallModule,HandleBtnsPartUI=ui.mainGame.majiangParts.HandleBtnsPartUI,HandleEffItemUI=ui.mainGame.Items.HandleEffItemUI;
	var HandleEffUI=ui.mainGame.majiangParts.HandleEffUI,Handler=laya.utils.Handler,Image=laya.ui.Image,Label=laya.ui.Label;
	var LayerTypes=rb.framework.mvc.core.LayerTypes,LeftHandleItemUI=ui.mainGame.Items.LeftHandleItemUI,LeftHandlePartUI=ui.mainGame.majiangParts.LeftHandlePartUI;
	var LeftOutputPartUI=ui.mainGame.majiangParts.LeftOutputPartUI,LeftPengGangPartUI=ui.mainGame.majiangParts.LeftPengGangPartUI;
	var MajiangPageUI=ui.mainGame.MajiangPageUI,Message=net.Message,Message$1=rb.framework.mvc.Message,MessageManager=manager.MessageManager;
	var Module=rb.framework.mvc.Module,ModuleDef=Laya.ModuleDef,MovieClip=laya.ani.swf.MovieClip,NewCalculatePageUI=ui.mainGame.NewCalculatePageUI;
	var NewCalculatePerItemUI=ui.mainGame.majiangParts.Newcalculate.NewCalculatePerItemUI,NewCalculatePerPageUI=ui.mainGame.majiangParts.Newcalculate.NewCalculatePerPageUI;
	var NewCalculateRoundPageUI=ui.mainGame.majiangParts.Newcalculate.NewCalculateRoundPageUI,NewDissolvePage=modules.gameCommon.view.NewDissolvePage;
	var OutputLeftItemUI=ui.mainGame.Items.OutputLeftItemUI,OutputRightItemUI=ui.mainGame.Items.OutputRightItemUI;
	var OutputTopItemUI=ui.mainGame.Items.OutputTopItemUI,OutputTopPartUI=ui.mainGame.majiangParts.OutputTopPartUI;
	var PiaoSelePartUI=ui.gameCommon.PiaoSelePartUI,PlayerInfoPageUI=ui.mainGame.PlayerInfoPageUI,Point=laya.maths.Point;
	var PopBox=common.view.PopBox,ProtoMessage=net.ProtoMessage,QuickUtils=Laya.QuickUtils,Rectangle=laya.maths.Rectangle;
	var ReplayControlView=modules.gameCommon.view.ReplayControlView,RightHandleItemUI=ui.mainGame.Items.RightHandleItemUI;
	var RightHandlePartUI=ui.mainGame.majiangParts.RightHandlePartUI,RightOutputPartUI=ui.mainGame.majiangParts.RightOutputPartUI;
	var RightPengGangPartUI=ui.mainGame.majiangParts.RightPengGangPartUI,ShaiziEffUI=ui.mainGame.majiangParts.animalEff.ShaiziEffUI;
	var ShowContrTipUI=ui.mainGame.Items.ShowContrTipUI,SoundManager=laya.media.SoundManager,SoundPlay=common.tools.SoundPlay;
	var Sprite=laya.display.Sprite,Stage=laya.display.Stage,TableInfoPageUI=ui.mainGame.TableInfoPageUI,TextManager=manager.TextManager;
	var TimeLine=laya.utils.TimeLine,TimeManager=manager.TimeManager,TopHandleItemUI=ui.mainGame.Items.TopHandleItemUI;
	var TopHandlePartUI=ui.mainGame.majiangParts.TopHandlePartUI,TopPengGangPartUI=ui.mainGame.majiangParts.TopPengGangPartUI;
	var Tween=laya.utils.Tween,UIManager=manager.UIManager,UserData=Laya.UserData,UserInfoUI=ui.gameCommon.UserInfoUI;
	var View=laya.ui.View,WX=Laya.WX,huaBottomPartUI=ui.mainGame.majiangParts.huaBottomPartUI,huaLeftPartUI=ui.mainGame.majiangParts.huaLeftPartUI;
	var huaRightPartUI=ui.mainGame.majiangParts.huaRightPartUI,huaTopPartUI=ui.mainGame.majiangParts.huaTopPartUI;
	var shaiziPageUI=ui.mainGame.majiangParts.shaiziPageUI;
//class modules.game.majiangGame.model.MajiangChiData
var MajiangChiData=(function(){
	function MajiangChiData(){
		this.chicard=0;
		this.chicards=[];
	}

	__class(MajiangChiData,'modules.game.majiangGame.model.MajiangChiData');
	return MajiangChiData;
})()


//class modules.game.majiangGame.model.MajiangMsgs
var MajiangMsgs=(function(){
	function MajiangMsgs(){
		/**
		*进入房间</br>
		*
		*{</br>
			Name string // Nick Name</br>
			UID string // User ID 用户ID</br>
			RID int // 房间号</br>
			IP string //</br>
			Index int // 房间位置// 0=东</br>
			Icon string // 头像</br>
			Coin int // 金币</br>
			Type int // 类型</br>
			Diamond int // 钻石</br>
			Level int // 等级</br>
			Robot bool // 是否是机器人</br>
			GPS_LNG float64 // 经度 Longitude 简写Lng</br>
			GPS_LAT float64 // 纬度 Latitude 简写Lat</br>
			MSG string</br>
		}</br>
		**/
		this.ACKBC_Into_Room=null;
		/**
		*message ACK_RoomInfo {
			required int32 ID=1;
			optional int32 Type=2;
			optional int32 City=3;
			optional int32 Level=4;
			optional int32 MinCoin=5;//最小底分
			optional int32 MaxCoin=6;//最大底分
			repeated int32 Rule=7;//规则ID
			//---------------------------------------
			optional int32 Seat=8;// 座位数量
			optional int32 UserCount=9;// 用户数量
			optional int32 CurIndex=10;// 当前出牌的用户
			optional int32 CurToolIndex=11;// 当前操作用户
			optional int32 ZhuangIndex=12;// 庄家的UID
			optional string MSG=13;//
		}
		**/
		this.ACK_RoomInfo=null;
		this.ACK_Room_User=null;
		/**
		*游戏开始
		*RID int</br>
		MSG string</br>
		Dict int //</br>
		StartIndex int // 开始的位置</br>
		ZhuangUID string // 从庄家开始</br>
		*
		**/
		this.ACKBC_Start=null;
		/**发牌
		*
		*UID string</br>
		*Cards []*interface{}</br>
		**/
		this.ACK_UserCard=null;
		this.ACK_User_SeatCard=null;
		/**
		*摸牌
		*
		*UID string //user id 摸牌的人</br>
		CID int //Card ID</br>
		Forward int //从前面拿牌=0 从后面拿牌=1</br>
		Type int //牌型</br>
		Num int //号</br>
		MSG string </br>
		*
		**/
		this.ACK_GetCard=null;
		/**广播摸牌
		*
		*UID string //user id 摸牌的人</br>
		*Forward int //从前面拿牌=0 从后面拿牌=1</br>
		**/
		this.ACKBC_GetCard=null;
		/**
		*广播通知可以操作出牌
		*/
		this.ACKBC_CurPlayer=null;
		/**
		*出牌通知
		*
		*UID string // user id 出牌的人</br>
		CID int // Card ID</br>
		Type int // 牌型</br>
		Num int // 号</br>
		MSG string //</br>
		*
		**/
		this.ACKBC_PutCard=null;
		/**
		*通知玩家操作
		*UID string</br>
		Type []int // 吃 碰 杠 胡 有可能在一起</br>[1,1,0,0]
		MSG string</br>
		TimeOut int</br>
		**/
		this.ACK_WaitTool=null;
		this.ACKBC_Chow=null;
		this.ACKBC_Peng=null;
		this.ACKBC_Kong=null;
		this.ACKBC_Sitdown=null;
		this.ACKBC_Standup=null;
		this.ACKBC_Ready=null;
		this.ACKBC_Exit_Room=null;
		this.NotifyStartGame=null;
		this.ACKBC_Win=null;
		this.ACKBC_Draw=null;
		this.ACKBC_Total=null;
		this.ACKBC_Card_Init=null;
		this.MSG_NOTIFY_SUMMARY=null;
		this.AckDisband=null;
		this.NotifyDisband=null;
		this.NotifyUserState=null;
		/**
		{</br>
			enum ENTER_REL</br>
			{</br>
				ENTER_OK=0;</br>
				ENTER_WRONG_INGAME=1;//游戏中</br>
				ENTER_WRONG_RELOAD=2;//需要重新load</br>
				ENTER_WRONG_CHANNEL=3;//请求的频道不对</br>
				ENTER_WRONG_GOLDS=4;//玩家金币不符合要求</br>
				ENTER_WRONG_ACCOUNT=5;//帐号异常，禁止登陆</br>
				ENTER_WRONG_OTHERLOGIN=6;//帐号在别处上线</br>
				ENTER_WRONG_ROOMFULL=7;//房间已满</br>
				ENTER_WRONG_OTHERGAME=8;//在另外的游戏中</br>
				ENTER_WRONG_NULLPOP=9;//连续15把不下注，或者携带筹码小于最底倍连续5把不下注；踢回大厅</br>
				ENTER_WRONG_GOLDS_LITTLE=10;//玩家金币不符合要求，太少</br>
				ENTER_WRONG_GOLDS_MUCH=11;//玩家金币不符合要求，太多</br>
				ENTER_WRONG_TABLE_VIP=12;//桌子VIP</br>
				ENTER_WRONG_CHGT=13;//换桌</br>
			}</br>
			required ENTER_REL rel=1;//状态 //状态</br>
			optional int64 golds=2;</br>
			optional int32 step=3;</br>
			optional int32 cid=4 [default=0];</br>
			optional int32 gid=5 [default=0];</br>
			optional int32 rtype=6 [default=0];</br>
			optional int32 ridx=7 [default=0];</br>
			optional int64 bank=8 [default=0];</br>
		}</br>
		*/
		this.control_user_enterroom_Info=null;
		/**
		{</br>
			required int32 rel=1;//状态</br>
			optional int32 uid=2;</br>
			optional int64 golds=3;</br>
		}</br>
		*/
		this.control_add_golds_Info=null;
		/**
		{</br>
			required int32 n=1;//流水号</br>
			optional int32 rel=2;//状态 //状态</br>
		}</br>
		*/
		this.control_gate_Info=null;
		/**
		{</br>
			required int32 uid=1;</br>
		}</br>
		*/
		this.control_bonus_golds_Info=null;
		/**
		{</br>
			enum PSEND_REL</br>
			{</br>
				PROPS_SEND_OK=0;//赠送成功</br>
				PROPS_CLASS_ERROR=1;//道具类型错误</br>
				PROPS_GOLDS_ERROR=2;//金币错误</br>
				PROPS_PLAYER_ERROR=3;//玩家错误</br>
				PROPS_PRICE_TYPE_ERROR=4;//金币购买的其他情况-------暂时不支持 </br>
				PROPS_ALL_PLAYER_ERROE=5;//群发玩家错误</br>
				PROPS_UN_VIP=6;//只有vip1以上才能发</br>
			}</br>
			required PSEND_REL rel=1;//状态</br>
			optional int32 fuid=2;</br>
			optional int32 pid=3;//道具ID</br>
			optional int64 cost=4;//道具消费</br>
			optional int64 bonus=5;//筹码奖励</br>
			optional int32 pclass=6;//道具类型,0,普通道具;1,表情包;2,工资卡;3,喇叭</br>
			optional int32 timelen=7;//有效时间（单位可以使天，年，秒，等）</br>
			repeated int32 uids=8 [packed=true];</br>
		}</br>
		*/
		this.control_use_prop_Info=null;
		/**
		{</br>
			required int32 type=1;//0,join;2,leave;3,up level;6,slots bonus</br>
			optional int32 tid=2 [default=0];</br>
			optional int32 uid=3 [default=0];</br>
			optional string nn=4 [default=""];//昵称</br>
			optional int32 vip=5 [default=0];</br>
			optional sint32 pos=6 [default=0];</br>
			optional int32 level=7 [default=0];//经验</br>
			optional int64 golds=8 [default=0];</br>
			optional int64 bonus=9 [default=0];</br>
			optional int32 vipday=10 [default=0];</br>
			optional int64 pond=11 [default=0];</br>
			optional int64 seat=12 [default=-1];//椅子号</br>
		}
		*/
		this.control_game_msg_Info=null;
		/**
		{</br>
			required int32 pos=1;</br>
			optional sint32 seat=2 [default=-1];//椅子号</br>
			optional string nn=3 [default=''];//昵称</br>
			optional int32 smiletype=4 [default=0];</br>
			optional int32 smileid=5 [default=0];</br>
			optional int32 state=6 [default=0];</br>
			optional int32 uid=7 [default=0];</br>
		}
		*/
		this.control_player_smile_Info=null;
		/**
		{</br>
			required int32 rel=1;//状态 //状态</br>
			optional int32 uid=2;</br>
			optional string nn=3;//昵称</br>
			optional string msg=4;</br>
		}</br>
		*/
		this.control_game_chat_Info=null;
		/**
		{</br>
			message user_attr</br>
			{</br>
				required int32 uid=1;
				optional int32 pos=2 [default=0];</br>
				optional int32 level=3 [default=0];//经验</br>
				optional int32 vip=4 [default=0];</br>
				optional int64 golds=5 [default=0];
				optional string nn=6;//昵称 </br>
				optional string sex=7;//性别</br>
				optional int32 seat=8 [default=-1];//椅子号</br>
				optional int32 sign=9 [default=0];//第一位表示是否手机玩家</br>
				optional int32 lockdealer=10 [default=0];//当前庄家申请下庄(延迟游戏结束后下庄)</br>
				optional int32 firstbet=11;//第一个操作，为1</br>
				optional int64 chips=12 [default=0];//当前筹码</br>
				optional int64 lstchips=13 [default=0];//上轮下注筹码总量</br>
				optional int32 action=14 [default=0];//德州玩家的动作</br>
				optional int32 laction=15 [default=0];//德州玩家的动作</br>
				optional string cs=16 [default=''];//德州玩家扑克</br>
				optional int32 pstate=17 [default=0];//德州状态 1表示正在参与游戏</br>
				optional int32 serieswins=18 [default=0];//百家乐连赢次数</br>
			}</br>
			repeated user_attr users=1;</br>
		}</br>
		*/
		this.control_user_list_Info=null;
		/**
		{</br>
			required int64 bonus=1;</br>
			optional int64 pond=2;</br>
		}</br>
		*/
		this.control_lottery_award_Info=null;
		/**
		{</br>
			required int32 cmd=1;</br>
			optional int32 uid=2;</br>
			optional int32 sid=3;</br>
		}
		*/
		this.control_msg_Info=null;
		/**
		{</br>
			required int32 type=1;</br>
			optional int32 rel=2;//状态 </br>
			optional string un=3;</br>
			optional string nn=4;//昵称</br>
			optional string fun=5;</br>
			optional string fnn=6;//昵称</br>
		}</br>
		*/
		this.control_gameitem_friend_Info=null;
		/**
		{</br>
			required int32 rel=1;//状态 </br>
			optional int32 pid=2;</br>
			optional int32 deadline=3;</br>
			optional int32 price=4;</br>
			optional int64 stones=5;</br>
		}
		*/
		this.control_buy_smile_Info=null;
		/**
		{</br>
			required int32 uid=1;</br>
			optional int32 unbanker=2;//当前庄家申请下庄(延迟游戏结束后下庄)</br>
			repeated int64 gatebet=3 [packed=true];</br>
			optional int32 rel=4;//状态 </br>
			optional int64 golds=5;</br>
		}
		*/
		this.control_game_offline_Info=null;
		/**
		{</br>
			optional int32 banker=1 [default=0];//当庄的位置</br>
			message nuserend</br>
			{</br>
				optional int32 uids=1 [default=0];//用户ID</br>
				optional int32 golds=2 [default=0];//用户金币</br>
				optional int32 pos=3 [default=0];//玩家位置</br>
			}</br>
			repeated userend nuserend=2;//用户信息</br>
			optional int32 nDice1=3 [default=0];//第一个骰子</br>
			optional int32 nDice2=4 [default=0];//第二个骰子</br>
			*optional int32 curround=5 [default=0];//当前第几局 }
		}
		*/
		this.control_game_mjstart_Info=null;
		/**
		*message control_game_mjopration //ACK|GLID_MAHJONG_OPRATION 12806 发送玩家的操作</br>
		{</br>
			optional int32 uid=1 [default=0];//用户ID</br>
			optional int32 mjid=2 [default=0];//摸到的牌，或者是别人打的牌</br>
			optional int32 opration=3 [default=0];//可以操作的类型 碰（4），胡（32），听（16），自摸（64），杠（8）假设这个操作有碰和杠 那么这个值是:12(0000 1100)按位与就好了</br>
			optional int32 waittime=4 [default=0];//等待时间</br>
			message opercard</br>
			{</br>
				optional int32 card=1 [default=0];//碰，胡，听 的牌</br>
				optional int32 type=2 [default=0];//0 胡 1听 2碰 3杠</br>
				message hucard</br>
				{</br>
					optional int32 card=1 [default=0];//停牌后胡的牌</br>
				}</br>
				repeated hucard nhucard=3;//听牌后胡的牌</br>
				message koucard</br>
				{</br>
					optional int32 card=1 [default=0];//听牌后可以扣的牌</br>
				}</br>
				</br>
				message gangcard</br>
				{</br>
					optional int32 card=1 [default=0];//可以杠的牌</br>
					optional int32 type=2 [default=0];//杠的类型，0碰杠 1暗杠 ，2明杠</br>
				}</br>
				repeated koucard nkoucard=4;//可以扣的牌</br>
				optional int32 gangtype=5 [default=-1];//杠的类型，0碰杠 1暗杠 2明杠</br>
				repeated gangcard ngangcard=6;//可以杠的牌</br>
			}</br>
			repeated opercard nopercard=5;</br>
		}
		*/
		this.control_game_mjopration_Info=null;
		/**
		{</br>
			optional int32 uid=1[default=0];//用户ID</br>
			message usercard</br>
			{</br>
				optional int32 card=1[default=0];</br>
			}</br>
			repeated usercard nusercard=2;//用户手上的牌</br>
		}
		*/
		this.control_game_mjcard_Info=null;
		/**
		{</br>
			optional int32 uid=1 [default=0];//用户ID</br>
			optional int32 card=2 [default=0];//碰的牌</br>
			optional int32 pos=3 [default=0];//碰牌人的位置</br>
			optional int32 waitime=4 [default=0];//碰完牌等待出牌时间</br>
			optional int32 rel=5 [default=1];//碰牌操作返回 0失败 1成功</br>
		}
		*/
		this.control_game_operation_peng_Info=null;
		/**
		{</br>
			optional int32 uid=1 [default=0];//用户ID</br>
			optional int32 card=2 [default=0];//杠的牌</br>
			optional int32 pos=3 [default=0];//杠牌人的位置</br>
			optional int32 type=4 [default=0];//杠牌的类型 0碰杠 1暗杠 3+1</br>
			message MoneryOp</br>
			{</br>
				optional int32 nuid=1 [default=0];//用户ID</br>
				optional int64 monery=2 [default=0];//加减钱数值</br>
			}</br>
			repeated MoneryOp nMoneryOp=5;//杠产生的金币操作</br>
			optional int32 rel=6 [default=1];//杠牌操作返回 0失败 1成功</br>
		}
		*/
		this.control_game_operation_gang_Info=null;
		/**
		{</br>
			optional int32 uid=1 [default=0];//用户ID</br>
			optional int32 card=2 [default=0];//牌ID</br>
			optional int32 pos=3 [default=0];//出牌人的位置</br>
			optional int32 rel=4 [default=1];//出牌操作返回 0失败 1成功</br>
		}
		*/
		this.control_game_operation_pop_Info=null;
		/**
		{</br>
			optional int32 uid=1 [default=0];//用户ID</br>
			message holdcard</br>
			{</br>
				optional int32 card=1 [default=0];//持有的牌，明牌的话会把牌数据发给客户端</br>
				optional int32 type=2 [default=0];//0表示持有的 1表示扣的</br>
			}</br>
			repeated holdcard nholdcard=2;//持有的牌</br>
			optional int32 rel=3 [default=1];//停牌操作返回 0失败 1成功</br>
		}
		*/
		this.control_game_operation_ting_Info=null;
		/**
		{</br>
			optional int32 uid=1 [default=0];//抢杠人ID</br>
			optional int32 guid=2 [default=0];//杠牌人ID</br>
			optional int32 card=3 [default=0];//杠的牌</br>
		}
		*/
		this.control_game_operation_qianggang_Info=null;
		/**
		{</br>
			message userinfo</br>
			{</br>
				optional int32 uid=1 [default=0];//用户id</br>
				optional string name=2 [default=""];//用户名字</br>
				optional int32 ratio=3 [default=0];//用户翻数</br>
				optional int32 gangfen=4 [default=0];//杠的分数</br>
				optional int64 zongfen=5 [default=0];//总分</br>
				optional int32 type=6 [default=0];//类型 0为与自己无关 1输家 2赢家</br>
				message card//牌</br>
				{</br>
					optional int32 card=1 [default=0];//牌</br>
				}</br>
				repeated card ngangcard=7;//杠的牌</br>
				repeated card npengcard=8;//碰的牌</br>
				repeated card nholdcard=9;//手上持有牌</br>
				message hucardtype</br>
				{</br>
					optional int32 type=1 [default=0];//牌型</br>
					optional int32 ratio=2 [default=0];//多少翻</br>
				}</br>
				repeated hucardtype nhucardtype=10;//胡牌的类型</br>
			}</br>
			optional int32 roomid=1 [default=0];//房间号</br>
			optional int32 innings=2 [default=0];//当前局数</br>
			repeated userinfo userinfos=3;//玩家信息</br>
			optional int32 curtype=4 [default=0];//当局是自摸还是点炮 0自摸 1点炮 2流局</br>
			optional int32 zimoorpaopos=5 [default=0];//自摸或者点炮玩家位置</br>
			optional int32 rel=6 [default=1];//胡牌操作返回 0失败 1成功</br>
		}
		*/
		this.control_game_operation_hu_Info=null;
		/**
		{</br>
			optional int32 rtype=1 [default=0];//rtype</br>
			optional int32 ridx=2 [default=0];//ridx</br>
			optional int32 tid=3 [default=0];//桌子ID</br>
			optional int32 roomstate=4 [default=0];//当前该桌子的状态</br>
			optional int32 BankerPos=5 [default=0];//当前桌子上庄的位置</br>
			optional int32 CurrdOutCardpos=6 [default=0];//当前出牌玩家的位置</br>
			optional int32 curcount=7 [default=0];//当前局数</br>
			optional int32 sumcount=8 [default=0];//总局数</br>
			optional int32 ncode=9 [default=0];//房号</br>
			optional int32 roomtype=10 [default=0];//当前麻将类型 1襄阳玩法 2襄阳全频道 3宜城跑恰摸八</br>
			optional int32 remaincard=11 [default=0];//剩余的牌输</br>
			optional int32 magiccard=12 [default=-1];//百搭牌</br>
			</br>
		}*/
		this.control_game_operation_tableinfo_Info=null;
		/**
		message control_game_operation_userinfo //ACK|GLID_MAHJONG_OPERATION_USERINFO 12817 发送玩家信息</br>
		{</br>
			message user_attr</br>
			{</br>
				optional int32 uid=1 [default=0];//用户ID</br>
				optional int32 pos=2 [default=0];//用户位置</br>
				optional int32 vip=3 [default=0];//用户VIP等级</br>
				optional string sex=4 [default=""];//用户性别</br>
				optional int32 sign=5 [default=0];//用户从哪个平台登录 PC or phone</br>
				optional string nickname=6 [default=""];//用户名字</br>
				message card_attr</br>
				{</br>
					optional int32 type=1 [default=0];//牌的类型 牌的类型 0碰 1明杠 2 暗杠 3持有 4已出 5扣牌 6可以胡的牌 7吃的牌</br>
					optional int32 card=2 [default=0];//牌值</br>
					optional int32 isPeng=3 [default=0];//（如果是已经出的牌，0表示没有，1表示被碰或者杠了</br>
					optional int32 chicards=4;//（如果是吃的话，这个就是吃的牌组</br>
				}</br>
				repeated card_attr card=7;//牌信息,其他玩家显示碰或杠的 自己才传持有</br>
				optional int32 level=8 [default=0];//用户的等级</br>
				optional int32 golds=9 [default=0];//用户金币</br>
				optional int32 readystate=10 [default=0];//是否准备</br>
				optional int32 isTing=11 [default=0];//是否已经听牌 0没有 1 有</br>
				optional string ip=12 [default=""];//玩家的IP地址</br>
				optional int32 piao=13 [default=0];//漂</br>
			}</br>
			repeated user_attr user=1;//用户信息</br>
			optional int32 handlepos=2 [default=0];//当前操作玩家的位置 //后面是操作通知的信息</br>
			*
			*optional int32 reconnect=3 [default=0];//是否断线重连</br>
		}</br>
		*/
		this.control_game_operation_userinfo_Info=null;
		/**
		{</br>
			optional int32 uid=1 [default=0];//用户ID</br>
			optional int32 pos=2 [default=0];//用户位置</br>
			optional int32 piao=3 [default=0];//漂</br>
			optional int32 rel=4 [default=1];//状态，1成功 0失败 3是已经准备过了</br>
		}
		*/
		this.control_game_operation_ready_Info=null;
		/**
		{</br>
			message userinfo</br>
			{</br>
				optional int32 uid=1 [default=0];//用户ID</br>
				optional string name=2 [default=""];//用户名称</br>
				optional int32 zimocount=3 [default=0];//自摸次数</br>
				optional int32 jiepaocount=4 [default=0];//接炮次数</br>
				optional int32 dianpaocount=5 [default=0];//点炮次数</br>
				optional int32 angangcount=6 [default=0];//暗杠次数</br>
				optional int32 minggang=7 [default=0];//明杠次数</br>
				optional int32 zongchengji=8 [default=0];//总成绩</br>
			}</br>
			optional int32 roomtid=1 [default=0];//房间号</br>
			optional int32 curcount=2 [default=0];//当前局数</br>
			optional int32 sumcount=3 [default=0];//总局数</br>
			repeated userinfo userinfos=4;//用户信息</br>
		}
		*/
		this.control_game_settlement_Info=null;
		/**
		{</br>
			required int32 type=1;//0进入 1离开</br>
			optional int32 tid=2 [default=0];</br>
			optional int32 uid=3 [default=0];</br>
			optional string nn=4 [default=""];//昵称</br>
			optional int32 vip=5 [default=0];</br>
			optional sint32 pos=6 [default=0];</br>
			optional int32 level=7 [default=0];//经验</br>
			optional int64 golds=8 [default=0];</br>
			optional int64 bonus=9 [default=0];</br>
			optional int32 vipday=10 [default=0];</br>
			optional int64 pond=11 [default=0];</br>
			optional int64 seat=12 [default=-1];//椅子号</br>
		}*/
		this.control_game_mj_msg_Info=null;
		/**
		*{</br>
			*optional int32 uid=1 [default=0];//用户ID</br>
			optional int32 card=2 [default=0];//牌ID</br>
			optional int32 pos=3 [default=0];//出牌人的位置</br>
			optional int32 rel=4 [default=1];//出牌操作返回 0失败 1成功</br>
			optional int32 waittime=5 [default=0];//超时时间</br>
			*}</br>
		*
		**/
		this.control_game_operation_mopai_info=null;
		/**
		message control_game_operation_jieshan //ACK|GLID_MAHJONG_OPERATION_JIESAN 12822 解散</br>
		{</br>
			optional int32 uid=1 [default=0];//发起解散ID</br>
			optional int32 ntype=2 [default=0];//类型,0是解散信息。 1是牌局开始前桌主解散 2是第一局没有打完解散，房卡退还 3解散成功 4解散失败</br>
			optional int32 TimeOut=3 [default=0];//超时时间</br>
			message user</br>
			{</br>
				optional int32 uid=1 [default=0];//其他用户的ID</br>
				optional int32 state=2 [default=0];//0表示等待操作，1表示同意 2表示拒绝</br>
			}</br>
			repeated user userinfo=4;//其他用户的状态</br>
		}</br>
		**/
		this.control_game_operation_jieshan_info=null;
		/**
		*message control_game_operation_koupai ////ACK|GLID_MAHJONG_OPERATION_KOUPAI 12824 扣牌</br>
		{</br>
			optional int32 rel=1 [default=1];//1表示成功 0失败</br>
			message card</br>
			{</br>
				optional int32 card=1 [default=0];</br>
			}</br>
			repeated card koucards=2;//还可以扣的牌</br>
			repeated card ting=3;//现在听的牌</br>
		}
		*
		**/
		this.control_game_operation_koupai_info=null;
		/**
		*
		*message control_game_operation_hucard</br>
		{</br>
			optional int32 rel=1 [default=1];//1表示成功 0失败</br>
			message ting</br>
			{</br>
				optional int32 card=1 [default=0];</br>
				message hu</br>
				{</br>
					optional int32 card=1 [default=0];</br>
				}</br>
				repeated hu nhu=2;//可以胡的牌</br>
			}</br>
			repeated ting nting=2;//可以听的牌</br>
		}
		*
		**/
		this.control_game_operation_hucard_info=null;
		/**
		*踢人</br>
		*message control_game_operation_kill ////ACK|GLID_MAHJONG_OPERATION_KILLP 12823 踢人</br>
		{</br>
			optional int32 rel=1 [default=1];//踢人状态，1表示成功，0表示失败</br>
			optional int32 uid=2 [default=1];//被踢人的id;</br>
			optional int32 pos=3 [default=1];//被踢人的位置</br>
		}</br>
		**/
		this.control_game_operation_kill_info=null;
		/**
		*
		*message control_game_operation_exitroom //ACK|GLID_MAHJONG_OPERATION_USEREXIT 12826 用户自己退出</br>
		{</br>
			optional int32 rel=1 [default=1];//1表示成功 0失败</br>
			optional string errorinfo=2 [default=""];//错误原因</br>
			*optional int32 userid=3 [default=0];//用户ID</br>
		}</br>
		**/
		this.control_game_operation_exitroom_info=null;
		/**message control_game_operation_chi //ACK|GLID_MAHJONG_MJCARD_CHI 12828 吃牌</br>
		{</br>
			optional int32 rel=1 [default=1];//状态，1成功</br>
			optional int32 uid=2 [default=0];//用户ID</br>
			optional int32 pos=3 [default=0];//用户位置 </br>
			optional int32 chicard=4 [default=0];//吃的牌
			repeated int32 chicards=5;//用户吃后的牌组</br>
		}*/
		this.control_game_operation_chi_info=null;
		/**
		*message control_game_operation_buhua //ACK|GLID_MAHJONG_OPERATION_BUHUA 12829 补花</br>
		{</br>
			optional int32 rel=1 [default=1];//状态，1成功</br>
			optional int32 uid=2 [default=0];//用户ID</br>
			optional int32 pos=3 [default=0];//用户位置</br>
			optional int32 count=4 [default=0];//补花数量</br>
			repeated int32 buhuacards=5;//补花的牌</br>
			repeated int32 huanhuicards=6;//补花换回来的牌</br>
		}
		**/
		this.ACK_TransferHuaResponse=null;
		/**
		*message control_game_mjmagic //ACK|GLID_MAHJONG_OPERATION_BAIDA //12830 百搭</br>
		{</br>
			optional int32 fancard=1[default=0];//翻牌</br>
			optional int32 magiccard=2[default=0];//百搭</br>
		}</br>
		**/
		this.control_game_mjmagic_info=null;
	}

	__class(MajiangMsgs,'modules.game.majiangGame.model.MajiangMsgs');
	return MajiangMsgs;
})()


//class modules.game.majiangGame.view.calculate.CalculatePerPart
var CalculatePerPart=(function(){
	function CalculatePerPart(skin){
		this._skin=null;
		this._huPengCards=null;
		this._huHandleCards=null;
		this.headImg=null;
		this.headw=0
		this.headh=0;
		this._items=__newvec(4,null);
		this._cardItems=__newvec(3,null);
		this._skin=skin;
		var i=0;
		var len=this._items.length;
		for(i=0;i<len;i++){
			this._items[i]=new CalculatePerItem(this._skin["player"+i]);
		}
		len=this._cardItems.length;
		for(i=0;i<len;i++){
			this._cardItems[i]=new CalculatePerCardItem(this._skin["item"+i]);
		}
		this._skin.hideBtn.on("click",this,this.onClickHideBtn);
		this._skin.readyBtn.on("click",this,this.onClickReadyBtn);
		this._skin.confirmBtn.on("click",this,this.onClickConfirmBtn);
		this._skin.closeBtn.on("click",this,this.onClickCloseBtn);
		this.headImg=this._skin.headImg;
		this.headw=this.headImg.width;
		this.headh=this.headImg.height;
		this._huPengCards=new BottomSinglePengGangPart(this._skin.pengGangCards);
		this._huHandleCards=new BottomSingleHandlePart(this._skin.handCards,false);
		this.reset();
	}

	__class(CalculatePerPart,'modules.game.majiangGame.view.calculate.CalculatePerPart');
	var __proto=CalculatePerPart.prototype;
	__proto.getPiaoSelePart=function(){
		return null;
	}

	// return _PiaoSelePart;
	__proto.onClickHideBtn=function(e){
		this._skin.visible=false;
		this.view.calculatePage.showPerShowBtn();
	}

	__proto.onClickReadyBtn=function(e){
		var obj={sid:UserData.SID};
		GameModule.instance.gameContext.controller.sendMsgCommond(ProtoMessage.getProtoMessage(210,obj));
		this.hide();
	}

	// GameModule.instance.majiangGameContext.majiangGameController.resetSelf();
	__proto.onClickConfirmBtn=function(e){
		console.log("点击了确定按钮，要跳到总的结算界面啦");
		this.view.calculatePage.reset();
		QuickUtils.popMessageBox("房间已结束！","BTN_ENDGAME",this,this.onConfirmEnd);
	}

	__proto.onConfirmEnd=function(idx){
		if(idx==0){
			if(AppConfig.isNewHall){
				QuickUtils.gotoHall(1);
			}
			else{
				GameModule.instance.gameContext.controller.endGameGotoHall();
				Laya.timer.callLater(this,this.gotoReport);
			}
		}
		else{
			if(AppConfig.isNewHall){
				QuickUtils.gotoHall();
			}
			else{
				GameModule.instance.gameContext.controller.endGameGotoHall();
			}
		}
	}

	//
	__proto.gotoReport=function(){
		HallModule.instance.hallContext.hallView.hallLayer.onRecord({"uniqueCode":UserData.uniqueCode});
	}

	//EventCenter.instance.event(EventCenter.HALL_SHOW_REPORTVIEW,{gametype:UserData.roomtype,roomid:UserData.roomid});
	__proto.onClickCloseBtn=function(e){
		this.hide();
	}

	__proto.timeOver=function(){
		this._skin.visible=true;
		this._skin.readyBtn.visible=false;
		this._skin.confirmBtn.visible=false;
		this._skin.readyImg.visible=false;
		this._skin.closeBtn.visible=false;
		if(this.model.isSelfSitDown){
			this._skin.confirmBtn.visible=true;
		}
		else{
			this._skin.confirmBtn.visible=true;
		}
	}

	__proto.hideReadyBtn=function(){}
	__proto.updateBtns=function(){
		if(UserData.isReplay){
			this._skin.hideBtn.alpha=0;
		}
		else{
			this._skin.hideBtn.alpha=1;
		}
		if(this.isShow==false || UserData.isReplay){
			this._skin.readyImg.visible=false;
			this._skin.readyBtn.visible=false;
			this._skin.confirmBtn.visible=false;
			return;
		}
		this._skin.readyBtn.visible=false;
		this._skin.confirmBtn.visible=false;
		this._skin.readyImg.visible=false;
		this._skin.closeBtn.visible=false;
		if(this.model.isSelfSitDown){
			if(this.model.majiangMsgs.ACKBC_Total.finished==undefined){
				this.model.majiangMsgs.ACKBC_Total.finished=false;
			}
			if(this.model.majiangMsgs.ACKBC_Total.finished==true){
				this._skin.confirmBtn.visible=true;
				if(AppConfig.autoPlay){
					this.onClickConfirmBtn(null);
				}
				}else{
				this._skin.readyBtn.visible=true;
				this._skin.readyImg.visible=true;
				if(AppConfig.autoPlay){
					var jiesuanObj=this.model.majiangMsgs.ACKBC_Total;
					if(jiesuanObj.Reward[0].score+jiesuanObj.Reward[1].score+jiesuanObj.Reward[2].score+jiesuanObj.Reward[3].score==0){
						this.onClickReadyBtn(null);
					}
				}
			}
		}
		else{
			if(this.model.majiangMsgs.ACKBC_Total.finished==true){
				this._skin.confirmBtn.visible=true;
			}
			else{
				this._skin.closeBtn.visible=true;
			}
		}
	}

	__proto.show=function(){
		this._skin.visible=true;
		this.updateBtns();
		var i=0;
		this._huPengCards.reset();
		this._huHandleCards.reset();
		if(this.model.isLiu){
			this._skin.onePlayerBox.visible=false;
			this._skin.playersBox.visible=false;
			this._skin.liujuImg.visible=true;
			this._skin.headImg.visible=false;
			this._skin.paixingTf.visible=false;
			this._skin.taishuTf.visible=false;
			for (i=0;i < this._items.length;i++){
				this._items[i].update(i,true);
			}
		}
		else{
			this._skin.liujuImg.visible=false;
			this._skin.headImg.visible=true;
			this._skin.paixingTf.visible=true;
			this._skin.taishuTf.visible=true;
			var jiesuanObj=this.model.majiangMsgs.ACKBC_Total;
			var huObj=this.model.majiangMsgs.ACKBC_Win;
			var huPlayer=this.model.playerByPos(jiesuanObj.WinSeat);
			if(huObj.Seat.length==1){
				this._skin.onePlayerBox.visible=true;
				this._skin.playersBox.visible=false;
				if(huPlayer.Icon !=""){
					var photo=new Sprite();
					photo.loadImage(huPlayer.Icon,0,0,this.headw,this.headh);
					photo.mouseEnabled=true;
					this.headImg.addChild(photo);
				}
				this.updateCars(jiesuanObj.WinSeat);
				if(jiesuanObj.Msg && jiesuanObj.Msg[jiesuanObj.WinSeat]){
					this._skin.paixingTf.text=jiesuanObj.Msg[jiesuanObj.WinSeat];
				}
				else{
					this._skin.paixingTf.text="";
				}
				if(jiesuanObj.Tai && jiesuanObj.Tai[jiesuanObj.WinSeat]){
					this._skin.taishuTf.text="（合计："+jiesuanObj.Tai[jiesuanObj.WinSeat]+"台）";
				}
				else{
					this._skin.taishuTf.text="";
				}
			}
			else{
				this._skin.onePlayerBox.visible=false;
				this._skin.playersBox.visible=true;
				for(i=0;i<this._cardItems.length;i++){
					this._cardItems[i].reset();
				};
				var arr=huObj.Seat;
				var temp=0;
				for(i=0;i<arr.length-1;i++){
					for(var j=0;j<arr.length-1-i;j++){
						if(this.model.getRefZhuangPos(arr[j])> this.model.getRefZhuangPos(arr[j+1])){
							temp=arr[j+1];
							arr[j+1]=arr[j];
							arr[j]=temp;
						}
					}
				}
				for(i=0;i<huObj.Seat.length;i++){
					this._cardItems[i].update(huObj.Seat[i]);
				}
			};
			var player;
			for(i=0;i<this._items.length;i++){
				player=this.model.playerByPos(i);
				player.isHu=false;
				player.isDianPao=false;
				if(UserData.isReplay){
					jiesuanObj.Reward[i].total_score=jiesuanObj.Reward[i].total_score !=undefined ? jiesuanObj.Reward[i].total_score :0;
					jiesuanObj.Reward[i].totalScore=jiesuanObj.Reward[i].total_score;
				}
				player.zongchengji=jiesuanObj.Reward[i].score !=undefined ? jiesuanObj.Reward[i].score :0;
				if(UserData.Rule[4]==1){
					player.Coin=jiesuanObj.Reward[i].totalScore !=undefined ? jiesuanObj.Reward[i].totalScore :0;
				}
				player.score=jiesuanObj.Reward[i].totalScore !=undefined ? jiesuanObj.Reward[i].totalScore :0;
				if((huObj.Seat).indexOf(i)!=-1){
					player.isHu=true;
				}
				else if(i==huObj.TSeat){
					player.isDianPao=true;
				}
				this._items[this.model.getRefZhuangPos(i)].update(i);
			}
			this.view.playerInfoPage.updatePlayerInfos(this.model.playerInfoVec,false);
		}
	}

	__proto.updateCars=function(pos){
		var info=this.model.majiangMsgs.ACKBC_Total;
		if(info.attached){
			var attachInfo=JSON.parse(info.attached);
		};
		var totalPengGangNum=0;
		var i=0;
		var len=0;
		if(this.model.anGangVec[pos]){
			len=this.model.anGangVec[pos].length;
		}
		else{
			len=0;
		}
		for(i=0;i<len;i++){
			var dir=(this.model.chairNum+this.model.anGangFromVec[pos][i]-pos)%this.model.chairNum;
			this._huPengCards.gang(this.model.anGangVec[pos][i],1,dir,this.model.anGangFromVec[pos][i],pos);
		}
		totalPengGangNum+=len;
		if(this.model.mingGangVec[pos]){
			len=this.model.mingGangVec[pos].length;
		}
		else{
			len=0;
		}
		for(i=0;i<len;i++){
			var dir1=(this.model.chairNum+this.model.mingGangFromVec[pos][i]-pos)%this.model.chairNum;
			this._huPengCards.gang(this.model.mingGangVec[pos][i],2,dir1,this.model.mingGangFromVec[pos][i],pos);
			if(attachInfo){
				if(pos==attachInfo.index && parseInt(attachInfo.cid)+1==this.model.mingGangVec[pos][i]){
					this._huPengCards.setChengbaoGang(this.model.mingGangVec[pos][i]);
				}
			}
		}
		totalPengGangNum+=len;
		if(this.model.chiVec[pos]){
			len=this.model.chiVec[pos].length;
		}
		else{
			len=0;
		}
		for(i=0;i<len;i++){
			this._huPengCards.chi(this.model.chiVec[pos][i],this.model.chiFromVec[pos][i],pos);
		}
		totalPengGangNum+=len;
		if(this.model.pengVec[pos]){
			len=this.model.pengVec[pos].length;
		}
		else{
			len=0;
		}
		for(i=0;i<len;i++){
			var dir=(this.model.chairNum+this.model.pengFromVec[pos][i]-pos)%this.model.chairNum;
			this._huPengCards.peng(this.model.pengVec[pos][i],dir,this.model.pengFromVec[pos][i],pos);
		}
		totalPengGangNum+=len;
		this._skin.handCards.x=this._skin.pengGangCards.x+totalPengGangNum*20;
		this._huHandleCards.setPreThirteenCards(this.model.allCardsVec[pos],this.model.getChairDirByPos(pos),false,false);
		this._huHandleCards.setTheFourteenCard(this.model.majiangMsgs.ACKBC_Total.WinCard+1,this.model.getChairDirByPos(pos));
		this._huHandleCards.canControl=false;
	}

	__proto.delayPhoto=function(mask,obj){
		var photo=new Sprite();
		photo.loadImage(obj.Icon,0,0,this.headw,this.headh);
		photo.mouseEnabled=true;
		this.headImg.addChild(photo);
	}

	__proto.reset=function(){
		var i=0;
		var len=this._items.length;
		for(i=0;i<len;i++){
			this._items[i].reset();
		}
		for(i=0;i<this._cardItems.length;i++){
			this._cardItems[i].reset();
		}
		this._skin.visible=false;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__getset(0,__proto,'isShow',function(){
		return this._skin.visible;
	});

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'view',function(){
		return GameModule.instance.gameContext.view;
	});

	return CalculatePerPart;
})()


//class modules.game.majiangGame.view.calculate.CalculateRoundPart
var CalculateRoundPart=(function(){
	function CalculateRoundPart(skin){
		this._skin=null;
		this._items=__newvec(4,null);
		this._skin=skin;
		this.reset();
	}

	__class(CalculateRoundPart,'modules.game.majiangGame.view.calculate.CalculateRoundPart');
	var __proto=CalculateRoundPart.prototype;
	__proto.onClickShareBtn=function(e){}
	//WXLogicModel.shareScreenResult();
	__proto.onClickBackBtn=function(e){
		if(AppConfig.isNewHall){
			QuickUtils.gotoHall();
		}
		else{
			GameModule.instance.gameContext.controller.endGameGotoHall();
		}
	}

	/**显示并更新界面*/
	__proto.show=function(){}
	__proto.showGetTicketNum=function(nums){}
	//_skin.getquanlbl.text=nums.toString();
	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.reset=function(){
		this._skin.visible=false;
	}

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'view',function(){
		return GameModule.instance.gameContext.view;
	});

	return CalculateRoundPart;
})()


//class modules.game.majiangGame.view.calculate.item.CalculatePerCardItem
var CalculatePerCardItem=(function(){
	function CalculatePerCardItem(skin){
		this.headImg=null;
		this.headw=0
		this.headh=0;
		this._skin=null;
		this._huPengCards=null;
		this._huHandleCards=null;
		this._skin=skin;
		this._huPengCards=new BottomSinglePengGangPart(this._skin.pengGangCards);
		this._huHandleCards=new BottomSingleHandlePart(this._skin.handCards,false);
		this.headImg=this._skin.headImg;
		this.headw=this.headImg.width;
		this.headh=this.headImg.height;
	}

	__class(CalculatePerCardItem,'modules.game.majiangGame.view.calculate.item.CalculatePerCardItem');
	var __proto=CalculatePerCardItem.prototype;
	__proto.update=function(pos){
		var jiesuanObj=this.model.majiangMsgs.ACKBC_Total;
		var huPlayer=this.model.playerByPos(pos);
		if(huPlayer.Icon !=""){
			var photo=new Sprite();
			photo.loadImage(huPlayer.Icon,0,0,this.headw,this.headh);
			photo.mouseEnabled=true;
			this.headImg.addChild(photo);
		}
		this.updateCars(pos);
		if(jiesuanObj.Msg && jiesuanObj.Msg[pos]){
			this._skin.paixingTf.text=jiesuanObj.Msg[pos];
		}
		else{
			this._skin.paixingTf.text="";
		}
		if(jiesuanObj.Tai && jiesuanObj.Tai[pos]){
			this._skin.taishuTf.text="（合计："+jiesuanObj.Tai[pos]+"台）";
		}
		else{
			this._skin.taishuTf.text="";
		}
	}

	__proto.updateCars=function(pos){
		this._skin.visible=true;
		var info=this.model.majiangMsgs.ACKBC_Total;
		if(info.attached){
			var attachInfo=JSON.parse(info.attached);
		};
		var totalPengGangNum=0;
		var i=0;
		var len=0;
		if(this.model.anGangVec[pos]){
			len=this.model.anGangVec[pos].length;
		}
		else{
			len=0;
		}
		for(i=0;i<len;i++){
			var dir=(this.model.chairNum+this.model.anGangFromVec[pos][i]-pos)%this.model.chairNum;
			this._huPengCards.gang(this.model.anGangVec[pos][i],1,dir,this.model.anGangFromVec[pos][i],pos);
		}
		totalPengGangNum+=len;
		if(this.model.mingGangVec[pos]){
			len=this.model.mingGangVec[pos].length;
		}
		else{
			len=0;
		}
		for(i=0;i<len;i++){
			var dir1=(this.model.chairNum+this.model.mingGangFromVec[pos][i]-pos)%this.model.chairNum;
			this._huPengCards.gang(this.model.mingGangVec[pos][i],2,dir1,this.model.mingGangFromVec[pos][i],pos);
			if(attachInfo){
				if(pos==attachInfo.index && parseInt(attachInfo.cid)+1==this.model.mingGangVec[pos][i]){
					this._huPengCards.setChengbaoGang(this.model.mingGangVec[pos][i]);
				}
			}
		}
		totalPengGangNum+=len;
		if(this.model.chiVec[pos]){
			len=this.model.chiVec[pos].length;
		}
		else{
			len=0;
		}
		for(i=0;i<len;i++){
			this._huPengCards.chi(this.model.chiVec[pos][i],this.model.chiFromVec[pos][i],pos);
		}
		totalPengGangNum+=len;
		if(this.model.pengVec[pos]){
			len=this.model.pengVec[pos].length;
		}
		else{
			len=0;
		}
		for(i=0;i<len;i++){
			var dir=(this.model.chairNum+this.model.pengFromVec[pos][i]-pos)%this.model.chairNum;
			this._huPengCards.peng(this.model.pengVec[pos][i],dir,this.model.pengFromVec[pos][i],pos);
		}
		totalPengGangNum+=len;
		this._skin.handCards.x=this._skin.pengGangCards.x+totalPengGangNum*20;
		this._huHandleCards.setPreThirteenCards(this.model.allCardsVec[pos],this.model.getChairDirByPos(pos),false,false);
		this._huHandleCards.setTheFourteenCard(this.model.majiangMsgs.ACKBC_Total.WinCard+1,this.model.getChairDirByPos(pos));
		this._huHandleCards.canControl=false;
	}

	__proto.reset=function(){
		this._skin.visible=false;
		this._huPengCards.reset();
		this._huHandleCards.reset();
	}

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	return CalculatePerCardItem;
})()


/**每一轮的单个结算条目*/
//class modules.game.majiangGame.view.calculate.item.CalculatePerItem
var CalculatePerItem=(function(){
	function CalculatePerItem(skin){
		this._skin=null;
		// protected var _singleHandlePart:BottomSingleHandlePart;
		this.headImg=null;
		this.headw=0
		this.headh=0;
		this._skin=skin;
		this.headImg=this._skin.headImg;
		this.headw=this.headImg.width;
		this.headh=this.headImg.height;
		this._skin.zongchengji.scaleX=this._skin.zongchengji.scaleY=0.8;
	}

	__class(CalculatePerItem,'modules.game.majiangGame.view.calculate.item.CalculatePerItem');
	var __proto=CalculatePerItem.prototype;
	/**展示这一条数据*/
	__proto.update=function(pos,isLiu){
		(isLiu===void 0)&& (isLiu=false);
		var player=this.model.playerByPos(pos);
		if(player==null){
			player=this.model.playerByUid(this.model.beKickedPlayer[pos]);
		}
		if(player==null){
			this._skin.visible=false;
		}
		else{
			this._skin.visible=true;
		}
		if(player.Icon !=""){
			var photo=new Sprite();
			photo.loadImage(player.Icon,0,0,this.headw,this.headh);
			photo.mouseEnabled=true;
			this.headImg.addChild(photo);
		}
		this._skin.chengbaoTf.visible=false;
		this._skin.huImg.visible=false;
		this._skin.dianPaoImg.visible=false;
		this._skin.nicknameTf.text=player.nickname;
		if(isLiu){
			this._skin.zongchengji.text="";
			return;
		}
		if(player.isHu){
			this._skin.huImg.visible=true;
		}
		else if(player.isDianPao){
			this._skin.dianPaoImg.visible=true;
		}
		if(player.zongchengji > 0){
			this._skin.zongchengji.font=TextManager.NumberYellowFont;
			this._skin.zongchengji.text="+"+player.zongchengji;
		}
		else{
			this._skin.zongchengji.font=TextManager.NumberBlueFont;
			this._skin.zongchengji.text=player.zongchengji;
		}
	}

	__proto.delayPhoto=function(mask,obj){
		var photo=new Sprite();
		photo.loadImage(obj.Icon,0,0,this.headw,this.headh);
		photo.mouseEnabled=true;
		this.headImg.addChild(photo);
	}

	__proto.reset=function(){}
	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'view',function(){
		return GameModule.instance.gameContext.view;
	});

	return CalculatePerItem;
})()


//class modules.game.majiangGame.view.CalculatePage
var CalculatePage=(function(){
	function CalculatePage(skin){
		this._skin=null;
		this._perPage=null;
		this._roundPage=null;
		this._skin=skin;
		this._perPage=new CalculatePerPart(this._skin.perPage);
		this._roundPage=new CalculateRoundPart(this._skin.roundPage);
		this.reset();
		this._skin.showBtn.on("click",this,this.showPerCal)
	}

	__class(CalculatePage,'modules.game.majiangGame.view.CalculatePage');
	var __proto=CalculatePage.prototype;
	// updateTime();
	__proto.showPerShowBtn=function(){
		this._skin.showBtn.visible=true;
	}

	// }
	__proto.showPerCal=function(){
		this._skin.perPage.visible=true;
		this._skin.showBtn.visible=false;
	}

	__proto.showGetTicket=function(nums){
		this._roundPage.showGetTicketNum(nums);
	}

	__proto.show=function(){
		if(UserData.isReplay){
			this.view.replayControlView.moveCalculate();
		}
		this._perPage.reset();
		this._roundPage.reset();
		this._skin.visible=true;
		this._perPage.show();
		CommonModule.instance.commonContext.view.timeWarView.hide();
	}

	//CommonModule.instance.commonContext.view.onRemove();
	__proto.gameTimeOver=function(){
		this._perPage.timeOver();
	}

	// }
	__proto.reset=function(){
		this._skin.visible=false;
		this._skin.showBtn.visible=false;
		this._perPage.reset();
		this._roundPage.reset();
	}

	__getset(0,__proto,'perPage',function(){
		return this._perPage;
	});

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'view',function(){
		return GameModule.instance.gameContext.view;
	});

	return CalculatePage;
})()


//class modules.game.majiangGame.view.card.BaseCard
var BaseCard=(function(){
	function BaseCard(skin){
		/**-1表示没有状态*/
		this.state=-1;
		this._cardIdx=0;
		this._skin=null;
		this.chiMark=null;
		this.pengMark=null;
		this.isShowTingImg=false;
		this.showBaidaSimbol=false;
		this.huEffAni=null;
		this._skin=skin;
		this.chiMark=this._skin["chiMark"];
		this.pengMark=this._skin["pengMark"];
		if(this.chiMark !=null){
			this.chiMark.visible=false;
			this.pengMark.visible=false;
		}
		if(this._skin.huEffImg && this._skin.huEffImg.parent){
			this._skin.huEffImg.parent.removeChild(this._skin.huEffImg);
		}
		if(this._skin["tingImg"]){
			this._skin["tingImg"].visible=false;
		}
	}

	__class(BaseCard,'modules.game.majiangGame.view.card.BaseCard');
	var __proto=BaseCard.prototype;
	__proto.show=function(){}
	__proto.hide=function(){}
	__proto.showTingState=function(bool){}
	__proto.cancleTingState=function(){}
	__proto.showKouState=function(bool){}
	/**去除听牌时的半透明效果*/
	__proto.removeTingEff=function(){}
	/**显示听牌标志，说明点了这张牌，剩下的牌是可以听牌的*/
	__proto.showCanTingImg=function(bool){
		if(this._skin["tingImg"]){
			this._skin["tingImg"].visible=bool;
		}
		this.isShowTingImg=bool;
	}

	/**牌竖起来*/
	__proto.up=function(){
		if(this.state==0){
			return;
		}
		if(this._skin["tingImg"]){
			this._skin["tingImg"].y=22;
		}
		this.state=0;
	}

	/**牌倒下去*/
	__proto.down=function(){
		if(this.state==1){
			return;
		}
		if(this._skin["tingImg"]){
			this._skin["tingImg"].y=2;
		}
		this.state=1;
	}

	/**牌盖住*/
	__proto.back=function(){
		if(this.state==2){
			return;
		}
		this.state=2;
	}

	/**设置牌的内容*/
	__proto.setCardImg=function(cardIdx){
		if(this.showBaidaSimbol && this.skin["baidaImg"]){
			if(cardIdx==GameModule.instance.gameContext.model.baida[1]){
				this.skin["baidaImg"].visible=true;
			}
			else{
				this.skin["baidaImg"].visible=false;
			}
		}
		if(this.cardIdx==cardIdx){
			return;
		}
		this._cardIdx=cardIdx;
	}

	__proto.reset=function(){
		this.hide();
		if(this.chiMark !=null){
			this.chiMark.visible=false;
			this.pengMark.visible=false;
		}
		if(UserData.isReplay==false){
			this._skin.valueImg.skin="";
		}
		this._cardIdx=-1;
		this.showCanTingImg(false);
	}

	__proto.loadhuEff=function(){
		var huImg=this._skin.huEffImg;
		if(huImg){
			this._skin.removeChild(huImg);
			this.huEffAni=new HuAnimation();
			huImg.addChild(this.huEffAni);
			huImg.skin="";
			EventCenter.instance.on("MAJIANGPAGE_NOTICE_HUEFF_HIDE",this,this.hideHuEff);
		}
	}

	__proto.hideHuEff=function(){
		this._skin.removeChild(this._skin.huEffImg);
	}

	__proto.showHuAni=function(dir,isDianPao,isQiangGang){
		(dir===void 0)&& (dir=0);
		(isDianPao===void 0)&& (isDianPao=false);
		(isQiangGang===void 0)&& (isQiangGang=false);
		if(this.huEffAni==null){
			this.loadhuEff();
		}
		this._skin.addChild(this._skin.huEffImg);
		this.huEffAni.play();
	}

	__getset(0,__proto,'skin',function(){
		return this._skin;
	});

	__getset(0,__proto,'canControl',null,function(bool){
	});

	/**0表示牌的内容没有*/
	__getset(0,__proto,'cardIdx',function(){
		return this._cardIdx;
		},function(value){
		this._cardIdx=value;
	});

	__getset(0,__proto,'visible',function(){
		return false;
	});

	__getset(0,__proto,'canControlWitchDark',null,function(bool){
	});

	BaseCard.getCardIndex=function(type,num){
		switch(type){
			case 0:
				return num;
				break ;
			case 1:
				return num+9;
				break ;
			case 2:
				return num+18;
				break ;
			default :
				return num+27;
				break ;
			}
		return 0;
	}

	BaseCard.getTypeByCardIndex=function(cardIndex){
		if(cardIndex <=9){
			return 0;
		}
		else if(cardIndex <=18){
			return 1;
		}
		else if(cardIndex <=27){
			return 2;
		}
		else{
			return 3;
		}
		return 0;
	}

	BaseCard.getNumByCardIndex=function(cardIndex){
		if(cardIndex <=9){
			return cardIndex;
		}
		else if(cardIndex <=18){
			return cardIndex-9;
		}
		else if(cardIndex <=27){
			return cardIndex-18;
		}
		else{
			return cardIndex-27;
		}
		return 0;
	}

	BaseCard.PREPATH="gametable/mahjongpai/";
	BaseCard.CARCSTATE_UP=0;
	BaseCard.CARCSTATE_DOWN=1;
	BaseCard.CARCSTATE_BACK=2;
	__static(BaseCard,
	['CARD_REFERENCE',function(){return this.CARD_REFERENCE={
			1:"wan1.png",2:"wan2.png",3:"wan3.png",4:"wan4.png",5:"wan5.png",6:"wan6.png",7:"wan7.png",8:"wan8.png",9:"wan9.png",
			10:"tong1.png",11:"tong2.png",12:"tong3.png",13:"tong4.png",14:"tong5.png",15:"tong6.png",16:"tong7.png",17:"tong8.png",18:"tong9.png",
			19:"tiao1.png",20:"tiao2.png",21:"tiao3.png",22:"tiao4.png",23:"tiao5.png",24:"tiao6.png",25:"tiao7.png",26:"tiao8.png",27:"tiao9.png",
			28:"zdong.png",29:"znan.png",30:"zxi.png",31:"zbei.png",
			32:"zzhong.png",33:"zfa.png",34:"zbai.png",
			35:"hchun.png",36:"hxia.png",37:"hqiu.png",38:"hjdong.png",39:"hmei.png",40:"hlan.png",41:"hzhu.png",42:"hju.png"
	};}

	]);
	return BaseCard;
})()


/**碰 杠的基类*/
//class modules.game.majiangGame.view.card.pengGangCard.BasePengGangCards
var BasePengGangCards=(function(){
	function BasePengGangCards(){
		this.cardIdx=0;
		this.fromPos=-1;
		this.fromDir=-1;
		/**-1表示没有 0吃 1碰 2暗杠 3明杠*/
		this.type=-1;
		this._cardsVec=__newvec(4,null);
	}

	__class(BasePengGangCards,'modules.game.majiangGame.view.card.pengGangCard.BasePengGangCards');
	var __proto=BasePengGangCards.prototype;
	__proto.show=function(){}
	__proto.hide=function(){}
	__proto.setCardImg=function(cardIdx){
		this.cardIdx=cardIdx;
		var i=0;
		var len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i].setCardImg(cardIdx);
		}
	}

	__proto.chi=function(arr,chiCard,providerPos){
		(providerPos===void 0)&& (providerPos=0);
		this.type=0;
		console.log("chi arr::"+arr);
		console.log("arr[0]::"+arr[0]);
		console.log("arr[1]::"+arr[1]);
		console.log("arr[2]::"+arr[2]);
		this._cardsVec[0].show();
		this._cardsVec[1].show();
		this._cardsVec[2].show();
		this._cardsVec[3].hide();
		this._cardsVec[0].down();
		this._cardsVec[1].down();
		this._cardsVec[2].down();
		this._cardsVec[0].setCardImg(arr[0]);
		this._cardsVec[1].setCardImg(arr[1]);
		this._cardsVec[2].setCardImg(arr[2]);
		var index=arr.indexOf(chiCard);
		this._cardsVec[index].chiMark.visible=true;
		this.fromPos=providerPos;
		this.fromDir=3;
		this.show();
	}

	__proto.updateChengbaoColor=function(chairPos,fromPos){
		this.updateAnGangState(chairPos);
		if(fromPos !=this.fromPos || this.fromDir==-1 || this.fromDir==0){
			return;
		};
		var chiSkin="";
		var pengSkin="";
		var chengbaoNum=this.model.getChengbaoNumRefNum(chairPos,fromPos);
		if(chengbaoNum < 2){
			chiSkin="gametable/chengbao/pengpaijiantou3_lan.png";
			pengSkin="gametable/chengbao/pengpaijiantou"+this.fromDir+"_lan.png";
		}
		else if(chengbaoNum < 3){
			chiSkin="gametable/chengbao/pengpaijiantou3_huang.png";
			pengSkin="gametable/chengbao/pengpaijiantou"+this.fromDir+"_huang.png";
		}
		else{
			chiSkin="gametable/chengbao/pengpaijiantou3_hong.png";
			pengSkin="gametable/chengbao/pengpaijiantou"+this.fromDir+"_hong.png";
		};
		var i=0,len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i].chiMark.skin=chiSkin;
			this._cardsVec[i].pengMark.skin=pengSkin;
		}
	}

	/**使某张杠的牌立即变为承包关系*/
	__proto.setChengbaoGang=function(){
		if(this.fromDir==0){
			return;
		};
		var chiSkin="";
		var pengSkin="";
		chiSkin="gametable/chengbao/pengpaijiantou3_hong.png";
		pengSkin="gametable/chengbao/pengpaijiantou"+this.fromDir+"_hong.png";
		var i=0,len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i].chiMark.skin=chiSkin;
			this._cardsVec[i].pengMark.skin=pengSkin;
		}
	}

	__proto.peng=function(cardIdx,fromdir,providerPos){
		(cardIdx===void 0)&& (cardIdx=0);
		(fromdir===void 0)&& (fromdir=-1);
		(providerPos===void 0)&& (providerPos=0);
		this.type=1;
		this._cardsVec[0].show();
		this._cardsVec[1].show();
		this._cardsVec[2].show();
		this._cardsVec[3].hide();
		this._cardsVec[0].down();
		this._cardsVec[1].down();
		this._cardsVec[2].down();
		this.setCardImg(cardIdx);
		if(fromdir !=-1 || fromdir !=0){
			this._cardsVec[0].pengMark.visible=true;
			this.fromPos=providerPos;
			this.fromDir=fromdir;
		}
		this.show();
	}

	__proto.gang=function(cardIdx,isMingGang,fromdir,providerPos){
		(cardIdx===void 0)&& (cardIdx=0);
		(isMingGang===void 0)&& (isMingGang=true);
		(fromdir===void 0)&& (fromdir=-1);
		(providerPos===void 0)&& (providerPos=0);
		if(isMingGang){
			this.type=3;
		}
		else{
			this.type=2;
		};
		var i=0,len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i].pengMark.visible=false;
			this._cardsVec[i].show();
			if(i<3){
				if(isMingGang){
					this._cardsVec[i].down();
					if(i==0){
						if(fromdir !=-1 || fromdir !=0){
							this._cardsVec[i].pengMark.visible=true;
							this.fromPos=providerPos;
							this.fromDir=fromdir;
						}
					}
				}
				else{
					this._cardsVec[i].back();
				}
			}
			else{
				this._cardsVec[i].down();
			}
		}
		this.setCardImg(cardIdx);
		this.show();
	}

	/**更新杠的状态，在门清的情况下要全部暗下去*/
	__proto.updateAnGangState=function(pos){
		if(this.type==2){
			var i=0,len=this._cardsVec.length;
			if(this.model.judgeMenqing(pos)==true){
				if(this.model.isSelfSitDown==false){
					this._cardsVec[3].back();
				}
				else{
					if(pos==this.model.selfChairPos){
						this._cardsVec[3].down();
					}
					else{
						this._cardsVec[3].back();
					}
				}
			}
			else{
				this._cardsVec[3].down();
			}
		}
	}

	__proto.showHuAni=function(dir){
		this._cardsVec[3].showHuAni(dir,false,true);
	}

	__proto.reset=function(){
		var i=0,len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i].reset();
			this._cardsVec[i].down();
		}
		this.hide();
		this.cardIdx=0;
		this.fromPos=-1;
		this.type=-1;
	}

	/**显示预选牌效果*/
	__proto.showPreDiscardEff=function(cardIdx){
		var i=0,len=this._cardsVec.length;
		for(i=0;i<len;i++){
			if(this._cardsVec[i].skin.visible && this._cardsVec[i].cardIdx==cardIdx){
				QuickUtils.addRed(this._cardsVec[i].skin.downImg,true);
				QuickUtils.addRed(this._cardsVec[i].skin.valueImg,true);
			}
			else{
				QuickUtils.addRed(this._cardsVec[i].skin.downImg,false);
				QuickUtils.addRed(this._cardsVec[i].skin.valueImg,false);
			}
		}
	}

	/**隐藏预选牌效果*/
	__proto.hidePreDiscardEff=function(){
		var i=0,len=this._cardsVec.length;
		for(i=0;i<len;i++){
			QuickUtils.addRed(this._cardsVec[i].skin.downImg,false);
			QuickUtils.addRed(this._cardsVec[i].skin.valueImg,false);
		}
	}

	__getset(0,__proto,'visible',function(){
		return false;
	});

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	return BasePengGangCards;
})()


/**这个是麻将的部分*/
//class modules.game.majiangGame.view.MajiangPage
var MajiangPage=(function(){
	function MajiangPage(skin){
		this._skin=null;
		/**玩家手上的牌*/
		this.handPart=null;
		/**碰杠的牌*/
		this.pengGangPart=null;
		/**打出去的牌*/
		this.outputPart=null;
		/**花牌*/
		this.huaPart=null;
		/**玩家提示胡牌*/
		this.hupaiTipPart=null;
		/**玩家操作的按钮*/
		this.handleBtns=null;
		/**中间的时间*/
		this.clockPart=null;
		/**碰杠胡听的小动画*/
		this.handleEffPart=null;
		/**玩家操作的提示*/
		this._majiangControlTipPage=null;
		// public var zhuamaPage:ZhuamaPage;
		this.chiSelePage=null;
		this.baidaPart=null;
		// public var gangtouPage:GangtouPage;
		this.shaiziPart=null;
		if(skin){
			this._skin=skin;
			this._skin.mouseThrough=true;
			this.handPart=new HandlePart(this._skin.bottomHandlePart,this._skin.rightHandlePart,this._skin.topHandlePart,this._skin.leftHandlePart);
			this.pengGangPart=new PengGangPart(this._skin.bottomPengGangPart,this._skin.rightPengGangPart,
			this._skin.topPengGangPart,this._skin.leftPengGangPart);
			this.outputPart=new OutputPart(this._skin.bottomOutputPart,this._skin.rightOutputPart,this._skin.topOutputPart,this._skin.leftOutputPart,
			[this._skin.bottomTempPopcard,this._skin.rightTempPopcard,this._skin.topTempPopcard,this._skin.leftTempPopcard]);
			this.handleBtns=new HandleBtnsPart(this._skin.handleBtns);
			this.huaPart=new HuaPart(this._skin.bottomHuaPart,this._skin.rightHuaPart,this._skin.topHuaPart,this._skin.leftHuaPart);
			this.hupaiTipPart=new HupaiTipPart(this._skin.bottomHuTip,this._skin.rightHuTip,this._skin.tophuTip,this._skin.leftHuTip);
			this.clockPart=new ClockPart(this._skin.clockPart);
			this.handleEffPart=new HandleEffPart(this._skin.handleEffPart);
			this._majiangControlTipPage=new MajiangControlTipPage(this._skin.controlTip);
			this.chiSelePage=new ChiSelePart(this._skin.chiSelePart);
			this.baidaPart=new BaidaPart(this._skin.baidaPart);
			this.shaiziPart=new ShaiziPart(this._skin.shaiziPart);
		}
	}

	__class(MajiangPage,'modules.game.majiangGame.view.MajiangPage');
	var __proto=MajiangPage.prototype;
	__proto.showControlTip=function(message){
		if(this._majiangControlTipPage){
			this._majiangControlTipPage.show(message);
		}
	}

	__proto.hideControlTip=function(){
		this._majiangControlTipPage.hide();
	}

	__proto.showEffByPos=function(pos,type){
		this.handleEffPart.showEffByPos(pos,type);
	}

	__proto.setChairNum=function(num){
		this.handPart.setChairNum(num);
		this.pengGangPart.setChairNum(num);
		this.outputPart.setChairNum(num);
		this.huaPart.setChairNum(num);
		this.clockPart.setChairNum(num);
		this.handleEffPart.setChairNum(num);
		this.shaiziPart.setChairNum(num);
	}

	__proto.reset=function(){
		this.handPart.reset();
		this.pengGangPart.reset();
		this.outputPart.reset();
		this.huaPart.reset();
		this.clockPart.reset();
		this._majiangControlTipPage.reset();
		this.handleBtns.reset();
		this.hupaiTipPart.reset();
		this.chiSelePage.reset();
		this.baidaPart.reset();
		this.shaiziPart.reset();
	}

	/**显示自摸的动画*/
	__proto.showZimoAni=function(pos){
		this.handPart.showZimoShandian(pos);
	}

	/**显示点炮胡动画*/
	__proto.showDianPaoHuAni=function(){
		this.outputPart.showDianPaoHuAni();
	}

	/**显示一张补花的牌*/
	__proto.showBuhua=function(cardIdx,pos,needShowEff,isMopai,isSound){
		(needShowEff===void 0)&& (needShowEff=true);
		(isMopai===void 0)&& (isMopai=false);
		(isSound===void 0)&& (isSound=true);
		this.huaPart.showBuhuaCard(cardIdx,pos,needShowEff,isMopai,isSound);
	}

	__getset(0,__proto,'skin',function(){
		return this._skin;
	});

	return MajiangPage;
})()


//class modules.game.majiangGame.view.majiangPart.BaidaPart
var BaidaPart=(function(){
	function BaidaPart(skin){
		this._skin=null;
		this._magicCard=null;
		this._fanpaiCard=null;
		this._skin=skin;
		this.init();
		this.hide();
	}

	__class(BaidaPart,'modules.game.majiangGame.view.majiangPart.BaidaPart');
	var __proto=BaidaPart.prototype;
	__proto.init=function(){
		this._magicCard=new BottomHandleCard(this._skin.magiccard,false,false);
		this._magicCard.canControl=false;
		this._magicCard.show();
		this._fanpaiCard=new BottomHandleCard(this._skin.fancard,false,false);
		this._fanpaiCard.canControl=false;
		this._fanpaiCard.show();
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.showBaida=function(magiccard,fancard){
		this.show();
		this._magicCard.setCardImg(magiccard);
		this._fanpaiCard.setCardImg(fancard);
	}

	__proto.reset=function(){
		this.hide();
	}

	return BaidaPart;
})()


//class modules.game.majiangGame.view.majiangPart.ChiSelePart
var ChiSelePart=(function(){
	function ChiSelePart(skin){
		this.skin=null;
		this.bgW=0;
		this.seleCards=__newvec(6,null);
		this.skin=skin;
		this.bgW=skin.backimg.width;
		this.init();
		Laya.stage.on("click",this,this.onClickthis);
		this.hide();
	}

	__class(ChiSelePart,'modules.game.majiangGame.view.majiangPart.ChiSelePart');
	var __proto=ChiSelePart.prototype;
	__proto.onClickthis=function(e){
		console.log("taegt:" ,e.currentTarget);
	}

	__proto.init=function(){
		var i=0,len=this.seleCards.length;
		for(i=0;i<len;i++){
			this.seleCards[i]=new BottomOutputCard(this.skin["card"+i]);
		}
		this.seleCards[0].skin.on("click",this,this.onClickChi0);
		this.seleCards[1].skin.on("click",this,this.onClickChi0);
		this.seleCards[2].skin.on("click",this,this.onClickChi1);
		this.seleCards[3].skin.on("click",this,this.onClickChi1);
		this.seleCards[4].skin.on("click",this,this.onClickChi2);
		this.seleCards[5].skin.on("click",this,this.onClickChi2);
	}

	// skin.chi2.on(Event.CLICK,this,onClickChi2);
	__proto.onClickChi0=function(e){
		this.chi(this.seleCards[0].cardIdx,this.seleCards[1].cardIdx);
		this.hide();
	}

	__proto.onClickChi1=function(e){
		this.chi(this.seleCards[2].cardIdx,this.seleCards[3].cardIdx);
		this.hide();
	}

	__proto.onClickChi2=function(e){
		this.chi(this.seleCards[4].cardIdx,this.seleCards[5].cardIdx);
		this.hide();
	}

	__proto.chi=function(card0,card1){
		var cid1=this.view.majiangPage.outputPart.getCurOutputCardIdx();
		var selfCards=this.model.allCardsVec[this.model.selfChairPos].concat();
		var defcid=0,i=0,len=selfCards.length;
		for(i=len-1;i<len;i--){
			if(selfCards[i] !=card0 && selfCards[i] !=card1){
				defcid=selfCards[i];
				break ;
			}
		};
		var chiObj={SID:UserData.SID,CID1:cid1-1,CID2:card0-1,CID3:card1-1,DefCID:defcid-1};
		this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(290,chiObj));
		GameModule.instance.gameContext.view.majiangPage.handleBtns.reset();
	}

	__proto.showCanChiCards=function(arr){
		this.show();
		var gap=50;
		var singleW=this.skin.chi0.width;
		var i=0;
		var len=arr.length;
		for(i=0;i<len;i++){
			this.skin["chi"+i].visible=true;
			(arr [i]).sort(this.model.compareFunction);
			this.seleCards[i*2].setCardImg(arr[i][0]);
			this.skin["chi"+i].x=19+(gap+singleW)*i;
			this.seleCards[i*2+1].setCardImg(arr[i][1]);
		}
		for(i=len;i<3;i++){
			this.skin["chi"+i].visible=false;
		}
		this.skin.backimg.width=38+singleW*len+gap*(len-1);
	}

	// }
	__proto.show=function(){
		this.skin.visible=true;
	}

	__proto.hide=function(){
		this.skin.visible=false;
	}

	__proto.reset=function(){
		this.hide();
	}

	__getset(0,__proto,'view',function(){
		return GameModule.instance.gameContext.view;
	});

	__getset(0,__proto,'controller',function(){
		return GameModule.instance.gameContext.controller;
	});

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	return ChiSelePart;
})()


//class modules.game.majiangGame.view.majiangPart.ClockPart
var ClockPart=(function(){
	function ClockPart(skin){
		this._skin=null;
		this._left=null;
		this._bottom=null;
		this._top=null;
		this._right=null;
		this._clockTf=null;
		this._leftCardsNumTf=null;
		this._leftRoundNumTf=null;
		/**当前操作玩家的方向*/
		this._curHandPos=-1;
		this._leftTime=0;
		this._PosChairVec=[];
		this._skin=skin;
		this.init();
	}

	__class(ClockPart,'modules.game.majiangGame.view.majiangPart.ClockPart');
	var __proto=ClockPart.prototype;
	__proto.init=function(){
		this._left=this._skin.leftSimbol;
		this._bottom=this._skin.bottomSimbol;
		this._top=this._skin.topSimbol;
		this._right=this._skin.rightSimbol;
		this._clockTf=this._skin.clockTf;
		this._clockTf.scaleX=this._clockTf.scaleY=0.55;
		this._clockTf.font=TextManager.NumberYellowFont;
		this._leftCardsNumTf=this._skin.leftCardsNumTf;
		this._leftCardsNumTf.scaleX=this._leftCardsNumTf.scaleY=0.6;
		this._leftCardsNumTf.font=TextManager.NumberYellowFont;
		this._leftRoundNumTf=this._skin.leftRoundNumTf;
		this._leftRoundNumTf.scaleX=this._leftRoundNumTf.scaleY=0.6;
		this._leftRoundNumTf.font=TextManager.NumberYellowFont;
		this.allReset();
	}

	__proto.setWenli=function(){
		switch(UserData.roomtype){
			case 3000:
				this._skin.wenliImg.skin="gametable/wenli_xizhou.png";
				break ;
			case 3010:
				this._skin.wenliImg.skin="gametable/wenli_xiangshan.png";
				break ;
			}
	}

	__proto.allReset=function(){
		this._bottom.visible=false;
		this._right.visible=false;
		this._top.visible=false;
		this._left.visible=false;
		this._clockTf.text="00";
		this._leftCardsNumTf.text="0";
		this._leftRoundNumTf.text="0";
	}

	/**设置椅子数量*/
	__proto.setChairNum=function(num){
		(num===void 0)&& (num=3);
		this._PosChairVec.length=0;
		switch(num){
			case 1:this._PosChairVec.push(this._bottom);break ;
			case 2:this._PosChairVec.push(this._bottom,this._top);break ;
			case 3:this._PosChairVec.push(this._bottom,this._right,this._left);break ;
			case 4:this._PosChairVec.push(this._bottom,this._right,this._top,this._left);break ;
			default :this._PosChairVec.push(this._bottom,this._right,this._left);break ;
			}
		this.reset();
	}

	/**通知显示倒计时*/
	__proto.noticeShowClock=function(pos,leftTime){
		this._curHandPos=pos;
		this.model.curHandlePos=pos;
		this._leftTime=leftTime;
		this._clockTf.text=this._leftTime < 10 ? "0"+this._leftTime :this._leftTime+"";
		TimeManager.instance.timer.clear(this,this.onTime);
		TimeManager.instance.timer.loop(1000,this,this.onTime);
		this.showDir(this.model.getChairDirByPos(pos));
	}

	/**显示还剩几局*/
	__proto.showLeftRoundsNum=function(){
		var info=this.model.majiangMsgs.ACK_RoomInfo;
		var rule=info.Rule;
		var obj=AppConfig.getRule(rule[1]);
		info.totalRound=obj.value;
		if(info.RoundCount+1 > obj.value){
			this._leftRoundNumTf.text=""+info.RoundCount;
			if(info.RoundCount < 10){
				this._leftRoundNumTf.x=42;
			}
			else{
				this._leftRoundNumTf.x=32;
			}
		}
		else{
			this._leftRoundNumTf.text=""+(info.RoundCount+1);
			if(info.RoundCount+1 < 10){
				this._leftRoundNumTf.x=42;
			}
			else{
				this._leftRoundNumTf.x=32;
			}
		}
	}

	// _leftRoundNumTf.text=""+num;
	__proto.showDir=function(dir){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			if(i==dir){
				this._PosChairVec[i].visible=true;
			}
			else{
				this._PosChairVec[i].visible=false;
			}
		}
	}

	__proto.onTime=function(){
		if(ModuleDef.CurGameModule.inGame==false || this.model.isGameStart==false){
			this._leftTime=0;
			this._clockTf.text=this._leftTime < 10 ? "0"+this._leftTime :this._leftTime+"";
			TimeManager.instance.timer.clear(this,this.onTime);
			return;
		}
		this._leftTime-=1;
		if(this._leftTime < 0){
			this._leftTime=10;
		}
		this._clockTf.text=this._leftTime < 10 ? "0"+this._leftTime :this._leftTime+"";
		if(this._leftTime < 5){
			SoundPlay.playEffect("game_warn");
		}
	}

	/**通知显示还剩多少张牌*/
	__proto.noticeShowLeftCardsNum=function(){
		if(this.model.leftDesktopCardsNum < 0){
			this.model.leftDesktopCardsNum=0;
		}
		this._leftCardsNumTf.text=""+this.model.leftDesktopCardsNum;
	}

	/**重置*/
	__proto.reset=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].visible=false;
		}
		this._clockTf.text="00";
		this._leftCardsNumTf.text="0";
	}

	__proto.dingDongwei=function(pos,needChongPai,needTween){
		(needChongPai===void 0)&& (needChongPai=false);
		(needTween===void 0)&& (needTween=true);
		var dir=this.model.getChairDirByPos(pos);
		if(needTween){
			Tween.to(this._skin.middleBox,{rotation:modules.game.majiangGame.view.majiangPart.ClockPart.RotationArr[dir]},1000);
		}
		else{
			this._skin.middleBox.rotation=modules.game.majiangGame.view.majiangPart.ClockPart.RotationArr[dir];
		}
		this._PosChairVec.length=0;
		this._PosChairVec.push(this._bottom,this._right,this._top,this._left);
		var vec1=[];
		var vec2=[];
		if(true){
			var i=0;
			var len=this._PosChairVec.length;
			for(i=0;i<len;i++){
				if(i<len-dir){
					vec2.push(this._PosChairVec[i]);
				}
				else{
					vec1.push(this._PosChairVec[i]);
				}
			}
			this._PosChairVec=vec1.concat(vec2);
		}
	}

	//_leftRoundNumTf.text="0";
	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	__static(ClockPart,
	['RotationArr',function(){return this.RotationArr=[0,-90,-180,-270];}
	]);
	return ClockPart;
})()


//class modules.game.majiangGame.view.majiangPart.HandleBtnsPart
var HandleBtnsPart=(function(){
	function HandleBtnsPart(skin){
		this._skin=null;
		this._skinOrignalX=0;
		this._singleW=0;
		this.isZimo=false;
		this._skin=skin;
		this._singleW=this._skin.pengBtn.width+2;
		this._skinOrignalX=this._skin.x;
		this.add();
		this.show();
		this.reset();
	}

	__class(HandleBtnsPart,'modules.game.majiangGame.view.majiangPart.HandleBtnsPart');
	var __proto=HandleBtnsPart.prototype;
	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.add=function(){
		this._skin.chiBtn.on("click",this,this.onClickChiBtn);
		this._skin.pengBtn.on("click",this,this.onClickPengBtn);
		this._skin.gangBtn.on("click",this,this.onClickGangBtn);
		this._skin.huBtn.on("click",this,this.onClickHuBtn);
		this._skin.cancelBtn.on("click",this,this.onClickCancelBtn);
		this._skin.tingBtn.on("click",this,this.onClickTingBtn);
		this._skin.kouBtn.on("click",this,this.onClickKouBtn);
	}

	/**Type */
	__proto.parseOpration=function(type){
		var opration=0;
		if(type[0] > 0){
			opration+=32;
		}
		if(type[1] > 0){
			opration+=8;
		}
		if(type[2] > 0){
			opration+=4;
		}
		if(type[3] > 0){
			opration+=2;
		}
		return opration;
	}

	__proto.showBtnList=function(Type){
		this.show();
		var opration=0;
		if(Type==null){
			var info=this.model.majiangMsgs.ACK_WaitTool;
			opration=this.parseOpration(info.Type);
		}
		else{
			opration=this.parseOpration(Type);
		}
		this._skin.chiBtn.visible=false;
		this._skin.pengBtn.visible=false;
		this._skin.gangBtn.visible=false;
		this._skin.huBtn.visible=false;
		this._skin.kouBtn.visible=false;
		this._skin.tingBtn.visible=false;
		this._skin.cancelBtn.visible=true;
		var idx=0;
		if(opration&2){
			this._skin.chiBtn.visible=true;
			this._skin.chiBtn.x=idx*this._singleW;
			idx++;
		}
		if(opration&4){
			this._skin.pengBtn.visible=true;
			this._skin.pengBtn.x=idx*this._singleW;
			idx++;
		}
		if(opration&8){
			this._skin.gangBtn.visible=true;
			this._skin.gangBtn.x=idx*this._singleW;
			idx++;
		}
		if(opration&16){
			this._skin.tingBtn.visible=true;
			this._skin.tingBtn.x=idx*this._singleW;
			idx++;
		}
		if(opration&32){
			this.isZimo=false;
			this._skin.huBtn.visible=true;
			this._skin.huBtn.x=idx*this._singleW;
			idx++;
		}
		if(opration&64){
			this.isZimo=true;
			this._skin.huBtn.visible=true;
			this._skin.huBtn.x=idx*this._singleW;
			idx++;
		}
		this._skin.cancelBtn.x=idx*this._singleW;
		this._skin.x=this._skinOrignalX-idx*this._singleW;
		if(this.model.curOutPutPos==(this.model.selfChairPos-1+4)%4){
			if(this.model.checkHaveHua(this.model.selfChairPos)==true){
				console.log("玩家手里有花！！！");
				if(this._skin.huBtn.visible !=true){
					this.reset();
				}
				return;
			}
		}
		if(AppConfig.autoPlay && this.model.isSelfSitDown){
			if(AppConfig.autoDestory){
				GameModule.instance.gameContext.controller.sendRandom();
			}
			if(this._skin.huBtn.visible){
				this.onClickHuBtn(null);
			}
			else if(this._skin.gangBtn.visible){
				if(this.model.getHuTipArr(-1).length > 0){
					this.onClickCancelBtn(null);
				}
				else{
					this.onClickGangBtn(null);
				}
			}
			else if(this._skin.pengBtn.visible){
				if(this.model.getHuTipArr(-1).length > 0){
					this.onClickCancelBtn(null);
				}
				else{
					this.onClickPengBtn(null);
				}
			}
			else if(this._skin.chiBtn.visible){
				if(this.model.getHuTipArr(-1).length > 0){
					this.onClickCancelBtn(null);
				}
				else{
					this.onClickChiBtn(null);
				}
			}
			else{
				this.onClickCancelBtn(null);
			}
		}
	}

	__proto.showCanKouControll=function(){
		this.show();
		this._skin.chiBtn.visible=false;
		this._skin.pengBtn.visible=false;
		this._skin.gangBtn.visible=false;
		this._skin.huBtn.visible=false;
		this._skin.kouBtn.visible=true;
		this._skin.tingBtn.visible=false;
		this._skin.cancelBtn.visible=true;
		this._skin.kouBtn.disabled=true;
		this._skin.kouBtn.x=0;
		this._skin.cancelBtn.x=this._singleW;
		this._skin.x=this._skinOrignalX-this._singleW;
	}

	__proto.showCancelLp=function(){
		this.show();
		this._skin.chiBtn.visible=false;
		this._skin.pengBtn.visible=false;
		this._skin.gangBtn.visible=false;
		this._skin.huBtn.visible=false;
		this._skin.kouBtn.visible=false;
		this._skin.tingBtn.visible=false;
		this._skin.cancelBtn.visible=true;
		this._skin.cancelBtn.x=0;
		this._skin.x=this._skinOrignalX;
	}

	/**使扣的按钮能用*/
	__proto.showKouBtnEnable=function(){
		this._skin.kouBtn.disabled=false;
	}

	__proto.onClickChiBtn=function(e){
		if(AppConfig.autoPlay){
			this.onConFirmChi(0);
		}
		else{
			if(this.model.getChengbaoNumRefNum(this.model.selfChairPos,this.view.majiangPage.outputPart.getCurOutIdx())==2){
				var str=this.model.warnCThenBaoipStr;
				QuickUtils.popMessageBox(str,"BTN_LABEL_QUEDINGQUXIAO",this,this.onConFirmChi,"提示","center",null,33);
			}
			else{
				this.onConFirmChi(0);
			}
		}
		this.reset();
	}

	//bubian
	__proto.onConFirmChi=function(idx){
		if(idx==0){
			var cid1=this.view.majiangPage.outputPart.getCurOutputCardIdx();
			if(cid1==0)
				return;
			var cid2=0,cid3=0,defcid=0,cardIdx1=0,cardIdx2=0,chiCards=[];
			var selfCards=this.model.allCardsVec[this.model.selfChairPos].concat();
			var i=0,len=selfCards.length;
			cardIdx1=cid1-1;
			cardIdx2=cid1-2;
			if(BaseCard.getTypeByCardIndex(cid1)==BaseCard.getTypeByCardIndex(cardIdx1)&& BaseCard.getTypeByCardIndex(cid1)==BaseCard.getTypeByCardIndex(cardIdx2)){
				if(selfCards.indexOf(cardIdx1)!=-1 && selfCards.indexOf(cardIdx2)!=-1){
					chiCards.push([cardIdx1,cardIdx2]);
				}
			}
			cardIdx1=cid1-1;
			cardIdx2=cid1+1;
			if(BaseCard.getTypeByCardIndex(cid1)==BaseCard.getTypeByCardIndex(cardIdx1)&& BaseCard.getTypeByCardIndex(cid1)==BaseCard.getTypeByCardIndex(cardIdx2)){
				if(selfCards.indexOf(cardIdx1)!=-1 && selfCards.indexOf(cardIdx2)!=-1){
					chiCards.push([cardIdx1,cardIdx2]);
				}
			}
			cardIdx1=cid1+1;
			cardIdx2=cid1+2;
			if(BaseCard.getTypeByCardIndex(cid1)==BaseCard.getTypeByCardIndex(cardIdx1)&& BaseCard.getTypeByCardIndex(cid1)==BaseCard.getTypeByCardIndex(cardIdx2)){
				if(selfCards.indexOf(cardIdx1)!=-1 && selfCards.indexOf(cardIdx2)!=-1){
					chiCards.push([cardIdx1,cardIdx2]);
				}
			}
			if(chiCards.length==1 || AppConfig.autoPlay){
				if(AppConfig.autoDestory){
					GameModule.instance.gameContext.controller.sendRandom();
				}
				for(i=len-1;i<len;i--){
					if(selfCards[i] !=cardIdx1 && selfCards[i] !=cardIdx2){
						defcid=selfCards[i];
						break ;
					}
				};
				var chiObj={SID:UserData.SID,CID1:cid1-1,CID2:chiCards[0][0]-1,CID3:chiCards[0][1]-1,DefCID:defcid-1};
				this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(290,chiObj));
				this.reset();
			}
			else{
				this.view.majiangPage.chiSelePage.showCanChiCards(chiCards);
				this.reset();
			}
		}
		else{
			this.showBtnList();
		}
	}

	//onClickCancelBtn(null);
	__proto.onClickPengBtn=function(e){
		if(AppConfig.autoPlay){
			this.onConFirmPeng(0);
		}
		else{
			if(this.model.getChengbaoNumRefNum(this.model.selfChairPos,this.view.majiangPage.outputPart.getCurOutIdx())==2){
				var str=this.model.warnCThenBaoipStr;
				QuickUtils.popMessageBox(str,"BTN_LABEL_QUEDINGQUXIAO",this,this.onConFirmPeng,"提示","center",null,33);
			}
			else{
				this.onConFirmPeng(0);
			}
		}
		this.reset();
	}

	__proto.onConFirmPeng=function(idx){
		if(idx==0){
			var cardIdx=this.view.majiangPage.outputPart.getCurOutputCardIdx();
			if(cardIdx==0){
				return;
			};
			var defcardIdx=0;
			var selfCards=this.model.allCardsVec[this.model.selfChairPos].concat();
			var i=0,len=selfCards.length;
			for(i=len-1;i<len;i--){
				if(selfCards[i] !=cardIdx){
					defcardIdx=selfCards[i];
					break ;
				}
			};
			var pengObj={SID:UserData.SID,CID:cardIdx-1,DefCID:defcardIdx-1};
			this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(300,pengObj));
		}
		else{
			this.showBtnList();
		}
	}

	//onClickCancelBtn(null);
	__proto.compareFunction=function(A,B){
		if(A<B){
			return-1;
		}
		else if(A==B){
			return 0;
		}
		else{
			return 1;
		}
	}

	__proto.onClickGangBtn=function(e){
		this.model.tempGangCards=[];
		var allCards=this.model.allCardsVec[this.model.selfChairPos];
		if(this.model.theFourteenCardVec[this.model.selfChairPos] !=-1){
			allCards=allCards.concat(this.model.theFourteenCardVec[this.model.selfChairPos]);
		};
		var i=0,len=allCards.length;
		allCards.sort(this.compareFunction);
		if(this.model.theFourteenCardVec[this.model.selfChairPos] !=-1 || allCards.length%3==2){
			for(i=0;i<len;i++){
				if(allCards[i]==allCards[i+1] && allCards[i+1]==allCards[i+2] && allCards[i+2]==allCards[i+3]){
					this.model.tempGangCards.push({type:1,card:allCards[i]});
					i+=3;
				}
			}
			len=this.model.pengVec[this.model.selfChairPos].length;
			for(i=0;i<len;i++){
				if(allCards.indexOf(this.model.pengVec[this.model.selfChairPos][i])!=-1){
					console.log("zhaodaole gang!!");
					this.model.tempGangCards.push({type:0,card:this.model.pengVec[this.model.selfChairPos][i]});
				}
			}
		}
		else{
			if(AppConfig.autoPlay){
				this.onConFirmMingGang(0);
			}
			else{
				if(this.model.getChengbaoNumRefNum(this.model.selfChairPos,this.view.majiangPage.outputPart.getCurOutIdx())==2){
					var str=this.model.warnCThenBaoipStr;
					QuickUtils.popMessageBox(str,"BTN_LABEL_QUEDINGQUXIAO",this,this.onConFirmMingGang,"提示","center",null,33);
				}
				else{
					this.onConFirmMingGang(0);
				}
			}
			this.reset();
			return;
		}
		if(this.model.tempGangCards.length==1 || AppConfig.autoPlay){
			var card=this.model.tempGangCards[0].card;
			var gangType=this.model.tempGangCards[0].type;
			var gangObj={SID:UserData.SID,CID:card-1};
			this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(310,gangObj));
		}
		else{
			this.model.isNextGang=true;
			this.view.majiangPage.handPart.showCanGangCards(this.model.tempGangCards);
		}
		this.reset();
	}

	__proto.onConFirmMingGang=function(idx){
		if(idx==0){
			var cardIdx=this.view.majiangPage.outputPart.getCurOutputCardIdx();
			var allCards=this.model.allCardsVec[this.model.selfChairPos].concat(this.model.theFourteenCardVec[this.model.selfChairPos]);
			var i=0;
			for(i=0;i<allCards.length;i++){
				if(allCards[i]==allCards[i+1] && allCards[i+1]==allCards[i+2] && cardIdx==allCards[i]){
					this.model.tempGangCards.push({type:2,card:allCards[i]});
					break ;
				}
			}
			if(this.model.tempGangCards.length==1 || AppConfig.autoPlay){
				var card=this.model.tempGangCards[0].card;
				var gangType=this.model.tempGangCards[0].type;
				var gangObj={SID:UserData.SID,CID:card-1};
				this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(310,gangObj));
			}
			else{
				this.model.isNextGang=true;
				this.view.majiangPage.handPart.showCanGangCards(this.model.tempGangCards);
			}
		}
		else{
			this.showBtnList();
		}
	}

	//onClickCancelBtn(null);
	__proto.onClickHuBtn=function(e){
		var card=0;
		if(this.model.theFourteenCardVec[this.model.selfChairPos] !=-1){
			card=this.model.theFourteenCardVec[this.model.selfChairPos]-1;
		}
		else{
			card=this.view.majiangPage.outputPart.getCurOutputCardIdx()-1;
		}
		if(card==-1){
			card=this.model.lastHuanHuaCard-1;
		};
		var huObj={SID:UserData.SID,CID:card};
		console.log(huObj,"-------------------------------");
		this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(320,huObj));
		this.reset();
	}

	__proto.onClickCancelBtn=function(e){
		if(this.model.isNextCancelBtnKou){
			this.model.tempKouCards.length=0;
			if(this.model.koupaiwancheng){
				this.model.isCancelTingp=false;
				this.showBtnList();
				this.view.majiangPage.handPart.showCancelKouCards();
				this.model.isNextCancelBtnKou=false;
				this.view.majiangPage.handPart.cancelTingpai();
				this.view.majiangPage.hideControlTip();
			}
			else{
				this.showCancelLp();
				this.model.isCancelTingp=true;
				this.view.majiangPage.handPart.showCancelKouCards();
				this.view.majiangPage.handPart.showCanTingCards(this.model.tingCardsOfCancelBtn);
				this.model.isNextCancelBtnKou=false;
				this.view.majiangPage.hideControlTip();
			}
			this.model.koupaiwancheng=false;
			var obj1={cmd:"KPQX"};
			this.controller.sendMsgCommond(obj1,false);
			return;
		}
		else if(this.model.isCancelTingp){
			this.model.isCancelTingp=false;
			this.view.majiangPage.handPart.cancelTingpai();
			this.showBtnList();
			return;
		}
		else{
			this.view.majiangPage.chiSelePage.hide();
			var passObj={SID:UserData.SID};
			this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(330,passObj),false);
			if(AppConfig.autoPlay==true){
				if(this.model.theFourteenCardVec[this.model.selfChairPos]!=-1){
					var tempCard=this.model.allCardsVec[this.model.selfChairPos].concat(this.model.theFourteenCardVec[this.model.selfChairPos]);
					if(tempCard.length%3==2){
						this.controller.autoDiscard();
					}
				}
			}
		}
		this.reset();
	}

	__proto.onClickTingBtn=function(e){
		var arr=this.model.majiangMsgs.control_game_mjopration_Info.nopercard;
		console.log("ting ..............");
		console.log(this.model.majiangMsgs.control_game_mjopration_Info);
		console.log("ting ..............");
		var tingCards=[];
		var kouCards=[];
		var card=0;
		var gangType=0;
		var i=0;
		var len=arr.length;
		for(i=0;i<len;i++){
			if(arr[i].type==1){
				tingCards.push(arr[i].card);
				kouCards=kouCards.concat(arr[i].nkoucard);
			}
		};
		var rkouCards=[];
		for(i=0;i<kouCards.length;i++){
			rkouCards.push(kouCards[i].card);
		}
		this.model.tingCardsOfCancelBtn=tingCards;
		console.log("tingCards ::"+tingCards);
		console.log("kouCards ::"+kouCards.length);
		if(kouCards.length > 0){
			console.log("kouCards :: "+kouCards);
			this.view.majiangPage.handPart.showCanKouCards(rkouCards);
			this.view.majiangPage.showControlTip("请选择要扣的牌");
			this.model.isNextCancelBtnKou=true;
			this.view.majiangPage.handleBtns.showCanKouControll();
			return;
		}
		else{
			this.view.majiangPage.handPart.showCanTingCards(this.model.tingCardsOfCancelBtn);
			this.model.isCancelTingp=true;
			this.showCancelLp();
		}
	}

	__proto.onCancelTingPaiBtn=function(e){
		this.view.majiangPage.handPart.cancelTingpai();
		this.showBtnList();
	}

	__proto.onClickKouBtn=function(e){
		this.view.majiangPage.handPart.showCanTingCards(this.model.tingCardsOfKouBtn);
		this.view.majiangPage.hideControlTip();
		var obj={cmd:"KPWC"};
		this.controller.sendMsgCommond(obj,false);
		this.showCancelLp();
		this.model.isCancelTingp=true;
	}

	__proto.remove=function(){}
	__proto.reset=function(){
		this._skin.chiBtn.visible=false;
		this._skin.pengBtn.visible=false;
		this._skin.gangBtn.visible=false;
		this._skin.huBtn.visible=false;
		this._skin.kouBtn.visible=false;
		this._skin.tingBtn.visible=false;
		this._skin.cancelBtn.visible=false;
		this.isZimo=false;
		this.show();
	}

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'controller',function(){
		return GameModule.instance.gameContext.controller;
	});

	__getset(0,__proto,'view',function(){
		return GameModule.instance.gameContext.view;
	});

	return HandleBtnsPart;
})()


//class modules.game.majiangGame.view.majiangPart.HandleEffPart
var HandleEffPart=(function(){
	function HandleEffPart(skin){
		this._skin=null;
		this._items=__newvec(4,null);
		this._PosChairVec=[];
		this._skin=skin;
		this.init();
	}

	__class(HandleEffPart,'modules.game.majiangGame.view.majiangPart.HandleEffPart');
	var __proto=HandleEffPart.prototype;
	/**设置椅子数量*/
	__proto.setChairNum=function(num){
		(num===void 0)&& (num=3);
		this._PosChairVec.length=0;
		switch(num){
			case 1:this._PosChairVec.push(this._items[0]);break ;
			case 2:this._PosChairVec.push(this._items[0],this._items[1]);break ;
			case 3:this._PosChairVec.push(this._items[0],this._items[1],this._items[3]);break ;
			case 4:this._PosChairVec.push(this._items[0],this._items[1],this._items[2],this._items[3]);break ;
			default :this._PosChairVec.push(this._items[0],this._items[1],this._items[3]);break ;
			}
	}

	__proto.init=function(){
		var i=0,len=this._items.length;
		for(i=0;i<len;i++){
			this._items[i]=new BaseHandleEffItem(this._skin["item"+i]);
		}
	}

	__proto.showEffByPos=function(pos,type){
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].showEff(type);
	}

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	return HandleEffPart;
})()


/**玩家手里的牌*/
//class modules.game.majiangGame.view.majiangPart.HandlePart
var HandlePart=(function(){
	function HandlePart(bottom,right,top,left){
		this._bottom=null;
		this._right=null;
		this._top=null;
		this._left=null;
		this._PosChairVec=[];
		this._bottom=new BottomSingleHandlePart(bottom);
		this._right=new RightSingleHandlePart(right);
		this._top=new TopSingleHandlePart(top);
		this._left=new LeftSingleHandlePart(left);
		this.allReset();
	}

	__class(HandlePart,'modules.game.majiangGame.view.majiangPart.HandlePart');
	var __proto=HandlePart.prototype;
	__proto.allReset=function(){
		this._bottom.reset();
		this._right.reset();
		this._top.reset();
		this._left.reset();
	}

	/**设置椅子数量*/
	__proto.setChairNum=function(num){
		(num===void 0)&& (num=3);
		this._PosChairVec.length=0;
		switch(num){
			case 1:this._PosChairVec.push(this._bottom);break ;
			case 2:this._PosChairVec.push(this._bottom,this._top);break ;
			case 3:this._PosChairVec.push(this._bottom,this._right,this._left);break ;
			case 4:this._PosChairVec.push(this._bottom,this._right,this._top,this._left);break ;
			default :this._PosChairVec.push(this._bottom,this._right,this._left);break ;
			}
		this.reset();
	}

	/**重置*/
	__proto.reset=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].reset();
		}
		this.canControl(this.model.selfChairPos,false);
	}

	/**更新前十三张牌*/
	__proto.updateAllCards=function(vec){
		var i=0;
		var len=vec.length;
		for(i=0;i<len;i++){
			var dir=this.model.getChairDirByPos(i);
			if(dir !=0 && UserData.isReplay==false){
				this._PosChairVec[dir].playQipaiEff();
			}
			this._PosChairVec[dir].setPreThirteenCards(vec[i],dir);
		}
	}

	/**更新一个方向上的前十四张牌*/
	__proto.updateOnePosAllCards=function(pos,cards){
		console.log("pos ::"+pos);
		var dir=this.model.getChairDirByPos(pos);
		console.log("dir ::"+dir);
		console.log("_PosChairVec[dir] ::"+this._PosChairVec[dir]);
		this._PosChairVec[dir].setPreThirteenCards(cards,dir);
	}

	/**摸牌了调用 更新第十四张牌*/
	__proto.updateTheFourteenCard=function(pos,cardIdx){
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].setTheFourteenCard(cardIdx,dir);
	}

	/**摸牌了调用 更新第十四张牌*/
	__proto.updateTheFourteenCards=function(vec){
		var i=0,len=vec.length;
		for(i=0;i<len;i++){
			this.updateTheFourteenCard(i,vec[i]);
		}
	}

	/**顯示自己可以扣的牌*/
	__proto.showCanKouCards=function(cards){
		this._PosChairVec[0].showCanKouCards(cards);
	}

	/***/
	__proto.showCancelKouCards=function(){
		this._PosChairVec[0].showCancelKouCards();
	}

	/**临时扣的牌的显示*/
	__proto.showTempKouCards=function(cardIdx){
		this._PosChairVec[0].showTempKouCards(cardIdx);
	}

	/**显示可以胡的牌，供选择*/
	__proto.showCanTingCards=function(cards){
		this.model.koupaiwancheng=true;
		this._PosChairVec[0].showCanTingCards(cards);
	}

	/**取消听牌*/
	__proto.cancelTingpai=function(){
		this.model.koupaiwancheng=false;
		this._PosChairVec[0].cancelTingpai();
		GameModule.instance.gameContext.view.majiangPage.hupaiTipPart.cancelTingpai(this.model.selfChairPos);
		this._PosChairVec[0].canControl=true;
	}

	/**设置牌是否可以操作,这个是使自己的所有牌都可以操作或者不可以操作*/
	__proto.canControl=function(pos,bool,cards){
		this._PosChairVec[this.model.getChairDirByPos(pos)].canControl=bool;
		if(bool && pos==this.model.selfChairPos && this.model.isSelfSitDown && cards){
			this.canControlWitchDark(pos,bool,cards);
		}
	}

	__proto.canControlWitchDark=function(pos,bool,cards){
		this._PosChairVec[this.model.getChairDirByPos(pos)].canControlWitchDark(cards);
	}

	__proto.showTinged=function(pos){
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].showTinged();
	}

	/**显示自己可以杠的牌*/
	__proto.showCanGangCards=function(cards){
		this._PosChairVec[0].showCanGangCards(cards);
	}

	/**显示自己胡牌的闪电*/
	__proto.showZimoShandian=function(pos){
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].showHuAni(pos);
	}

	/**移动自己手里的牌的位置*/
	__proto.movePeng=function(pos,bool){
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].movePeng(bool);
	}

	/**显示预出牌效果*/
	__proto.showPreDiscardEff=function(cardIdx){
		var i=0;
		for(i=0;i<this.model.chairNum;i++){
			this._PosChairVec[i].showPreDiscardEff(cardIdx);
		}
	}

	/**赢藏选牌效果*/
	__proto.hidePreDiscardEff=function(){
		var i=0;
		for(i=0;i<this.model.chairNum;i++){
			this._PosChairVec[i].hidePreDiscardEff();
		}
	}

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	return HandlePart;
})()


//class modules.game.majiangGame.view.majiangPart.huaPart.BaseBuhuaPart
var BaseBuhuaPart=(function(){
	function BaseBuhuaPart(skin){
		this._skin=null;
		/**当前补花补到第几张*/
		this._curIdx=0;
		this._itemClip=null;
		//动画的牌
		this._tweenArr=null;
		//保存花
		this._huaBg=null;
		this._isPlayIng=false;
		this._oldPt=null;
		this._haveHuaIndex=0;
		this._isOverHua=false;
		this._cardsVec=__newvec(15,null);
		this._skin=skin;
		this._tweenArr=[];
		this._huaBg=this._skin["huaBg"];
		this._huaBg.visible=false;
		this._itemClip=new HuaItemCard(this._skin["huaAnim"]);
		this._itemClip.skin.visible=false;
		this._oldPt=new Point(this._itemClip.skin.x,this._itemClip.skin.y);
		var i=0,len=this._cardsVec.length;
		for(i=0;i<len;i++){
			if((this._skin instanceof ui.mainGame.majiangParts.huaBottomPartUI )){
				this._cardsVec[i]=new HuaItemCard(this._skin["hua"+i]);
			}
			else if((this._skin instanceof ui.mainGame.majiangParts.huaRightPartUI )){
				this._cardsVec[i]=new HuaItemCard(this._skin["hua"+i]);
			}
			else if((this._skin instanceof ui.mainGame.majiangParts.huaTopPartUI )){
				this._cardsVec[i]=new HuaItemCard(this._skin["hua"+i]);
			}
			else if((this._skin instanceof ui.mainGame.majiangParts.huaLeftPartUI )){
				this._cardsVec[i]=new HuaItemCard(this._skin["hua"+i]);
			}
		}
	}

	__class(BaseBuhuaPart,'modules.game.majiangGame.view.majiangPart.huaPart.BaseBuhuaPart');
	var __proto=BaseBuhuaPart.prototype;
	__proto.showOneCard=function(pos,cardIdx,needShowEff,isMopai,len){
		(isMopai===void 0)&& (isMopai=false);
		(len===void 0)&& (len=0);
		var vo=new HuaVo();
		vo.pos=pos;
		vo.cardIdx=cardIdx;
		vo.isMopai=isMopai;
		if(needShowEff){
			this._tweenArr.push(vo);
			this.startTween();
			}else{
			this.showhua(cardIdx);
		}
	}

	//已经有的花牌的位置索引
	__proto.startTween=function(){
		if(this._isPlayIng==true)return;
		if(this._tweenArr.length > 0){
			this._isPlayIng=true;
			var vo=this._tweenArr.shift();
			this.playAnimation(vo.cardIdx,vo.pos,vo.isMopai);
			}else{
			this._isPlayIng=false;
		}
	}

	__proto.playAnimation=function(cardIdx,pos,isMopai){
		var item;
		if(this.checkHaveHuaForId(cardIdx)){
			item=this._cardsVec[this._haveHuaIndex];
			this._itemClip.setCardImg(cardIdx);
			}else{
			item=this._cardsVec[this._curIdx];
			this._itemClip.setCardImg(cardIdx);
		}
		if(isMopai){
			this._itemClip.skin.visible=true;
			Tween.to(this._huaBg,{alpha:0.3},200,Ease.cubicOut,Handler.create(this,this.tweenBgHander,[item,pos,cardIdx]),0);
		}
		else{
			this._itemClip.skin.visible=true;
			this.tweenBgHander(item,pos,cardIdx);
		}
	}

	__proto.tweenBgHander=function(item,pos,cardIdx){
		this._huaBg.visible=false;
		this._huaBg.alpha=1;
		Tween.to(this._itemClip.skin,{x:item.skin.x,y:item.skin.y,scaleX:1,scaleY:1},300,Ease.cubicOut,Handler.create(this,this.tweenHander,[pos,cardIdx]),0);
	}

	__proto.tweenHander=function(pos,cardIdx){
		console.log("tweenHander"+pos+"---"+cardIdx);
		var vo=new HuaVo();
		vo.pos=pos;
		vo.cardIdx=cardIdx;
		this._isPlayIng=false;
		this._itemClip.skin.visible=false;
		this._itemClip.skin.x=this._oldPt.x;
		this._itemClip.skin.y=this._oldPt.y;
		this._itemClip.skin.scaleX=2;
		this._itemClip.skin.scaleY=2;
		if(!this._isOverHua){
			this.model.overHuaVec[vo.pos]--;
			this.checkIsOverHua(vo.pos);
		}
		this.showhua(vo.cardIdx);
		this.startTween();
	}

	//检测是否第一轮补花完成
	__proto.checkIsOverHua=function(pos){
		var vec=this.model.overHuaVec;
		var i=0,len=vec.length;
		if(vec[pos] > 0){
			this._isOverHua=false;
		}
		else{
			this._isOverHua=true;
			EventCenter.instance.event("GAME_BUHUAN_COMPLETE",null);
		}
		if(this.model.checkAllBuhuaComp()){
		}
	}

	//controller.contineGameQueue();//放开协议阻塞
	__proto.showhua=function(cardIdx){
		if(this.checkHaveHuaForId(cardIdx)){
			this._cardsVec[this._haveHuaIndex].setNum();
			}else{
			if(this._curIdx < this._cardsVec.length){
				this._cardsVec[this._curIdx].setCardImg(cardIdx);
				this._cardsVec[this._curIdx].show();
				this._curIdx++;
			}
		}
	}

	/**
	*检测是否有相同的花牌
	*@param cardIdx
	*/
	__proto.checkHaveHuaForId=function(cardIdx){
		for(var i=0;i < this._cardsVec.length;i++){
			if(this._cardsVec[i].cardIdx==cardIdx){
				this._haveHuaIndex=i;
				return true;
			}
		}
		return false;
	}

	__proto.reset=function(){
		console.log("重置了！！！basehua");
		this._curIdx=0;
		var i=0;
		var len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i].hide();
		}
		this._tweenArr=[];
		this._isOverHua=false;
	}

	__getset(0,__proto,'view',function(){
		return GameModule.instance.gameContext.view;
	});

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'controller',function(){
		return GameModule.instance.gameContext.controller;
	});

	__getset(0,__proto,'isOverHua',function(){
		return this._isOverHua;
	});

	return BaseBuhuaPart;
})()


//class modules.game.majiangGame.view.majiangPart.huaPart.HuaPart
var HuaPart=(function(){
	function HuaPart(bottomSkin,rightSkin,topSkin,leftSkin){
		this._bottom=null;
		this._right=null;
		this._top=null;
		this._left=null;
		this._PosChairVec=[];
		this._bottom=new BaseBuhuaPart(bottomSkin);
		this._right=new BaseBuhuaPart(rightSkin);
		this._top=new BaseBuhuaPart(topSkin);
		this._left=new BaseBuhuaPart(leftSkin);
		this.allReset();
	}

	__class(HuaPart,'modules.game.majiangGame.view.majiangPart.huaPart.HuaPart');
	var __proto=HuaPart.prototype;
	__proto.allReset=function(){
		this._bottom.reset();
		this._right.reset();
		this._top.reset();
		this._left.reset();
	}

	/**设置椅子数量*/
	__proto.setChairNum=function(num){
		(num===void 0)&& (num=3);
		this._PosChairVec.length=0;
		switch(num){
			case 1:this._PosChairVec.push(this._bottom);
				break ;
			case 2:this._PosChairVec.push(this._bottom,this._top);
				break ;
			case 3:this._PosChairVec.push(this._bottom,this._right,this._left);
				break ;
			case 4:this._PosChairVec.push(this._bottom,this._right,this._top,this._left);
				break ;
			default :this._PosChairVec.push(this._bottom,this._right,this._left);break ;
			}
	}

	/**重置*/
	__proto.reset=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].reset();
		}
	}

	/**显示一张补花的牌*/
	__proto.showBuhuaCard=function(cardIdx,pos,needShowEff,isMopai,isSound){
		(isMopai===void 0)&& (isMopai=false);
		(isSound===void 0)&& (isSound=true);
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].showOneCard(pos,cardIdx,needShowEff,isMopai);
		if(isSound==true){
			SoundManager.playSound(SoundPlay.instance.getBuhua(this.model.playerByPos(this.model.selfChairPos).sex),1);
		}
	}

	__proto.showBuhuaCards=function(cards,pos){
		var i=0,len=cards.length;
		for(i=0;i<len;i++){
			this.showBuhuaCard(cards[i],pos,false,false,false);
		}
	}

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'PosChairVec',function(){
		return this._PosChairVec;
	});

	return HuaPart;
})()


//class modules.game.majiangGame.view.majiangPart.huaPart.HuaVo
var HuaVo=(function(){
	function HuaVo(){
		this.cardIdx=0;
		this.pos=0;
		this.isMopai=false;
	}

	__class(HuaVo,'modules.game.majiangGame.view.majiangPart.huaPart.HuaVo');
	return HuaVo;
})()


//class modules.game.majiangGame.view.majiangPart.hupaiTip.BaseSingleHupaiTipPart
var BaseSingleHupaiTipPart=(function(){
	function BaseSingleHupaiTipPart(skin){
		this._skin=null;
		this.SingleCardW=0;
		this.SingleCardH=0;
		this.allCards=__newvec(9,null);
		this._skin=skin;
		this.SingleCardW=this._skin["card0"].width;
		this.SingleCardH=this._skin["card0"].height;
	}

	__class(BaseSingleHupaiTipPart,'modules.game.majiangGame.view.majiangPart.hupaiTip.BaseSingleHupaiTipPart');
	var __proto=BaseSingleHupaiTipPart.prototype;
	__proto.showHuTip=function(cards){
		this._skin.visible=true;
		for(var i=0;i < cards.length;i++){
			this.allCards[i].setCardImg(cards[i]);
			this.allCards[i].show();
		}
		for(i=cards.length;i < this.allCards.length;i++){
			this.allCards[i].hide();
		}
		this.setBackSize(cards.length);
		this._skin["liangImg"].visible=true;
	}

	__proto.showCanHuCards=function(cards){
		this._skin.visible=true;
		for(var i=0;i < cards.length;i++){
			this.allCards[i].setCardImg(cards[i]);
			this.allCards[i].show();
		}
		for(i=cards.length;i < this.allCards.length;i++){
			this.allCards[i].hide();
		}
		this.setBackSize(cards.length);
		this._skin["liangImg"].visible=false;
	}

	__proto.setBackSize=function(nums){}
	__proto.reset=function(){
		this._skin.visible=false;
	}

	return BaseSingleHupaiTipPart;
})()


//class modules.game.majiangGame.view.majiangPart.HupaiTipPart
var HupaiTipPart=(function(){
	function HupaiTipPart(bottomSkin,rightSkin,topSkin,leftSkin){
		this._bottom=null;
		this._right=null;
		this._top=null;
		this._left=null;
		this._PosChairVec=[];
		this._bottom=new BottomHupaiTipPart(bottomSkin);
		this._right=new RightHupaiTipPart(rightSkin);
		this._top=new BaseSingleHupaiTipPart(topSkin);
		this._left=new LeftHupaiTipPart(leftSkin);
		this.setChairNum(this.model.chairNum);
		this.allReset();
	}

	__class(HupaiTipPart,'modules.game.majiangGame.view.majiangPart.HupaiTipPart');
	var __proto=HupaiTipPart.prototype;
	/**设置椅子数量*/
	__proto.setChairNum=function(num){
		(num===void 0)&& (num=3);
		this._PosChairVec.length=0;
		switch(num){
			case 1:this._PosChairVec.push(this._bottom);break ;
			case 2:this._PosChairVec.push(this._bottom,this._top);break ;
			case 3:this._PosChairVec.push(this._bottom,this._right,this._left);break ;
			case 4:this._PosChairVec.push(this._bottom,this._right,this._top,this._left);break ;
			default :this._PosChairVec.push(this._bottom,this._right,this._left);break ;
			}
	}

	//reset();
	__proto.cancelShowHuTip=function(pos){
		this._PosChairVec[this.model.getChairDirByPos(pos)].reset();
	}

	/**重置*/
	__proto.reset=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].reset();
		}
	}

	__proto.showHuTip=function(pos,cards){
		if(UserData.roomtype==11){
			this._PosChairVec[this.model.getChairDirByPos(pos)].showHuTip(cards);
		}
		else{
			if(this.model.getChairDirByPos(pos)==0){
				this._PosChairVec[this.model.getChairDirByPos(pos)].showHuTip(cards);
			}
		}
	}

	/**显示可以胡哪些些牌的提示*/
	__proto.showCanHuCards=function(pos,cards){
		this._PosChairVec[this.model.getChairDirByPos(pos)].showCanHuCards(cards);
	}

	__proto.cancelTingpai=function(pos){
		this._PosChairVec[this.model.getChairDirByPos(pos)].reset();
	}

	__proto.allReset=function(){
		this._bottom.reset();
		this._right.reset();
		this._top.reset();
		this._left.reset();
	}

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	return HupaiTipPart;
})()


//class modules.game.majiangGame.view.majiangPart.MajiangControlTipPage
var MajiangControlTipPage=(function(){
	function MajiangControlTipPage(skin){
		this._skin=null;
		this._skin=skin;
	}

	__class(MajiangControlTipPage,'modules.game.majiangGame.view.majiangPart.MajiangControlTipPage');
	var __proto=MajiangControlTipPage.prototype;
	__proto.show=function(message){
		this._skin.visible=true;
		if(message !=this._skin.messageTf.text){
			this._skin.messageTf.text=message;
		}
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.reset=function(){
		this.hide();
	}

	return MajiangControlTipPage;
})()


/**玩家出出去的牌*/
//class modules.game.majiangGame.view.majiangPart.OutputPart
var OutputPart=(function(){
	function OutputPart(bottomSkin,rightSkin,topSkin,leftSkin,tempCards){
		this._bottom=null;
		this._right=null;
		this._top=null;
		this._left=null;
		this._bottomTemp=null;
		this._rightTemp=null;
		this._topTemp=null;
		this._leftTemp=null;
		this._PosChairVec=[];
		this._posChairTemVec=[];
		this._bottom=new BottomSingleOutputPart(bottomSkin);
		this._right=new RightSingleOutputPart(rightSkin);
		this._top=new TopSingleOutputPart(topSkin);
		this._left=new LeftSingleOutputPart(leftSkin);
		this._bottomTemp=new BottomHandleCard(tempCards[0],false,false);
		this._bottomTemp.canControl=false;
		this._rightTemp=new BottomHandleCard(tempCards[1],false,false);
		this._rightTemp.canControl=false;
		this._topTemp=new BottomHandleCard(tempCards[2],false,false);
		this._topTemp.canControl=false;
		this._leftTemp=new BottomHandleCard(tempCards[3],false,false);
		this._leftTemp.canControl=false;
		this.allReset();
	}

	__class(OutputPart,'modules.game.majiangGame.view.majiangPart.OutputPart');
	var __proto=OutputPart.prototype;
	__proto.allReset=function(){
		this._bottom.reset();
		this._right.reset();
		this._top.reset();
		this._left.reset();
		this._bottomTemp.reset();
		this._rightTemp.reset();
		this._topTemp.reset();
		this._leftTemp.reset();
	}

	/**设置椅子数量*/
	__proto.setChairNum=function(num){
		(num===void 0)&& (num=3);
		this._PosChairVec.length=0;
		this._posChairTemVec.length=0;
		switch(num){
			case 1:this._PosChairVec.push(this._bottom);
				this._posChairTemVec.push(this._bottomTemp);
				break ;
			case 2:this._PosChairVec.push(this._bottom,this._top);
				this._posChairTemVec.push(this._bottomTemp,this._topTemp);
				break ;
			case 3:this._PosChairVec.push(this._bottom,this._right,this._left);
				this._posChairTemVec.push(this._bottomTemp,this._rightTemp,this._leftTemp);
				break ;
			case 4:this._PosChairVec.push(this._bottom,this._right,this._top,this._left);
				this._posChairTemVec.push(this._bottomTemp,this._rightTemp,this._topTemp,this._leftTemp);
				break ;
			default :this._PosChairVec.push(this._bottom,this._right,this._left);break ;
			}
	}

	/**重置*/
	__proto.reset=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].reset();
			this._posChairTemVec[i].reset();
		}
	}

	/**
	*isNeedShowCard是否在显示这张牌的时候，显示当前桌面出的牌时它
	**/
	__proto.showOneCard=function(cardIdx,direction,idx,isNeedShowCard,needShowEff){
		(isNeedShowCard===void 0)&& (isNeedShowCard=true);
		(needShowEff===void 0)&& (needShowEff=true);
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			if(i==direction){
				if(needShowEff && false){
					this._posChairTemVec[i].show();
					this._posChairTemVec[i].setCardImg(cardIdx);
					this._posChairTemVec[i].skin["tempImg"].visible=true;
					this._posChairTemVec[i].skin["buhua"].visible=false;
				}
				this._PosChairVec[i].showOneCard(cardIdx,idx,this.model.getChairPosByDir(i),needShowEff);
				if(isNeedShowCard){
					this._PosChairVec[i].showCurSimbol(isNeedShowCard);
				}
			}
			else{
				if(this._PosChairVec[i].isCurOutput){
					this._PosChairVec[i].showCurSimbol(false)
				}
			}
		}
	}

	__proto.hideTemp=function(){
		var i=0,len=this._posChairTemVec.length;
		for(i=0;i<len;i++){
			this._posChairTemVec[i].hide();
		}
	}

	/**显示出了一张牌*/
	__proto.showOneCardByPos=function(pos,cardIdx,isNeedShowCard,needShowEff){
		(isNeedShowCard===void 0)&& (isNeedShowCard=true);
		(needShowEff===void 0)&& (needShowEff=true);
		var direction=this.model.getChairDirByPos(pos);
		var idx=this._PosChairVec[direction].curIdx+1;
		this.showOneCard(cardIdx,direction,idx,isNeedShowCard,needShowEff);
	}

	/**显示一组牌*/
	__proto.showCardsByPos=function(pos,cards){
		var i=0,len=cards.length;
		for(i=0;i<len;i++){
			this.showOneCardByPos(pos,cards[i],false,false);
		}
	}

	__proto.toPre=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			if(this._PosChairVec[i].isCurOutput){
				this._PosChairVec[i].toPre();
			}
		}
	}

	/**一般不要用这个方法*/
	__proto.showCurSimbol=function(bool){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			if(this._PosChairVec[i].isCurOutput){
				this._PosChairVec[i].showCurSimbol(bool)
			}
		}
	}

	__proto.showStartImg=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].showStartImg(true);
		}
	}

	/**设置摸个方向的玩家摸的最后一张牌是桌面上最后打出的牌*/
	__proto.showCurSimbolByPos=function(pos){
		var dir=this.model.getChairDirByPos(pos);
		if(this._PosChairVec[dir]){
			this._PosChairVec[dir].showCurSimbol(true);
		}
	}

	/**通知当前打的牌被碰 或者 杠掉啦*/
	__proto.noticeHasPengGang=function(tPos){
		(tPos===void 0)&& (tPos=-1);
		var have=false;
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			if(this._PosChairVec[i].isCurOutput){
				this.model.pengGangStepObj[this.model.replayCurStep]=i;
				have=true;
				if(this._PosChairVec[i]){
					this.model.cutOutput(this.model.getChairPosByDir(i),this._PosChairVec[i].curCardIdx);
					this._PosChairVec[i].curCardHasPengGang();
				}
				break ;
			}
		}
		if(have==false){
			if(UserData.isReplay){
				if(this.model.pengGangStepObj.hasOwnProperty(this.model.replayCurStep)){
					var pos=this.model.getChairPosByDir(this.model.pengGangStepObj[this.model.replayCurStep]);
					this.model.cutOutput(pos,this._PosChairVec[this.model.pengGangStepObj[this.model.replayCurStep]].curCardIdx);
					this._PosChairVec[this.model.pengGangStepObj[this.model.replayCurStep]].curCardHasPengGang();
				}
			}
			else{
				if(tPos !=-1){
					var dir=this.model.getChairDirByPos(tPos);
					this.model.pengGangStepObj[this.model.replayCurStep]=dir;
					if(this._PosChairVec[dir]){
						this.model.cutOutput(tPos,this._PosChairVec[dir].curCardIdx);
						this._PosChairVec[dir].curCardHasPengGang();
					}
				}
			}
		}
	}

	/**通知当前打的牌被碰 或者 杠掉啦*/
	__proto.noticeHasPengGangByPos=function(pos){
		this.model.cutOutput(pos,this._PosChairVec[this.model.getChairDirByPos(pos)].curCardIdx);
		this._PosChairVec[this.model.getChairDirByPos(pos)].curCardHasPengGang();
	}

	/**通知当前打的牌被碰 或者 杠掉啦*/
	__proto.noticeHasTingByPos=function(pos){
		this._PosChairVec[this.model.getChairDirByPos(pos)].noticeHasTing();
	}

	__proto.getCurOutputCardIdx=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			if(this._PosChairVec[i].isCurOutput){
				return this._PosChairVec[i].curCardIdx;
			}
		}
		return 0;
	}

	__proto.getCurOutIdx=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			if(this._PosChairVec[i].isCurOutput){
				return this.model.getChairPosByDir(i);
			}
		}
		return 0;
	}

	__proto.showDianPaoHuAni=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			if(this._PosChairVec[i].isCurOutput){
				this._PosChairVec[i].showHuAni(i);
			}
		}
	}

	/**显示预出牌效果*/
	__proto.showPreDiscardEff=function(cardIdx){
		var i=0;
		for(i=0;i<this.model.chairNum;i++){
			this._PosChairVec[i].showPreDiscardEff(cardIdx);
		}
	}

	/**赢藏选牌效果*/
	__proto.hidePreDiscardEff=function(){
		var i=0;
		for(i=0;i<this.model.chairNum;i++){
			this._PosChairVec[i].hidePreDiscardEff();
		}
	}

	// }
	__getset(0,__proto,'controller',function(){
		return GameModule.instance.gameContext.controller;
	});

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	OutputPart.PERDIR_CARD_NUM=23;
	return OutputPart;
})()


/**碰 杠的那一部分*/
//class modules.game.majiangGame.view.majiangPart.PengGangPart
var PengGangPart=(function(){
	function PengGangPart(bottomSkin,rightSkin,topSkin,leftSkin){
		this._bottom=null;
		this._right=null;
		this._top=null;
		this._left=null;
		this._PosChairVec=[];
		this._bottom=new BottomSinglePengGangPart(bottomSkin);
		this._right=new RightSinglePengGangPart(rightSkin);
		this._top=new TopSinglePengGangPart(topSkin);
		this._left=new LeftSinglePengGangPart(leftSkin);
		this.allReset();
	}

	__class(PengGangPart,'modules.game.majiangGame.view.majiangPart.PengGangPart');
	var __proto=PengGangPart.prototype;
	__proto.allReset=function(){
		this._bottom.reset();
		this._right.reset();
		this._top.reset();
		this._left.reset();
	}

	/**设置椅子数量*/
	__proto.setChairNum=function(num){
		(num===void 0)&& (num=3);
		this._PosChairVec.length=0;
		switch(num){
			case 1:this._PosChairVec.push(this._bottom);break ;
			case 2:this._PosChairVec.push(this._bottom,this._top);break ;
			case 3:this._PosChairVec.push(this._bottom,this._right,this._left);break ;
			case 4:this._PosChairVec.push(this._bottom,this._right,this._top,this._left);break ;
			default :this._PosChairVec.push(this._bottom,this._right,this._left);break ;
			}
	}

	/**重置*/
	__proto.reset=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].reset();
		}
	}

	/**吃*/
	__proto.chi=function(chidata,chairPos){
		this._PosChairVec[this.model.getChairDirByPos(chairPos)].chi(chidata,(this.model.chairNum+chairPos-1)%this.model.chairNum,chairPos);
	}

	__proto.recoveryChi=function(chidatas,chairPos){
		for(var i=0;i<chidatas.length;i++){
			this.chi(chidatas[i],chairPos);
		}
	}

	/**碰*/
	__proto.peng=function(cardIdx,chairPos,providerPos){
		(providerPos===void 0)&& (providerPos=0);
		var dir=(this.model.chairNum+providerPos-chairPos)%this.model.chairNum;
		this._PosChairVec[this.model.getChairDirByPos(chairPos)].peng(cardIdx,dir,providerPos,chairPos);
	}

	__proto.recoveryPeng=function(cards,chairPos,providers){
		for(var i=0;i<cards.length;i++){
			this.peng(cards[i],chairPos,providers[i]);
		}
	}

	/**杠*/
	__proto.gang=function(cardIdx,chairPos,type,providerPos){
		(providerPos===void 0)&& (providerPos=0);
		var dir=(this.model.chairNum+providerPos-chairPos)%this.model.chairNum;
		this._PosChairVec[this.model.getChairDirByPos(chairPos)].gang(cardIdx,type,dir,providerPos,chairPos);
	}

	__proto.recoveryGang=function(cards,chairPos,type,providers){
		for(var i=0;i<cards.length;i++){
			this.gang(cards[i],chairPos,type,providers[i]);
		}
	}

	__proto.setChengbaoGang=function(cardIdx,chairPos){
		this._PosChairVec[this.model.getChairDirByPos(chairPos)].setChengbaoGang(cardIdx);
	}

	/**显示抢杠胡牌的闪电*/
	__proto.showHuAni=function(pos,cardIdx){
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].showHuAni(dir,cardIdx);
	}

	/**显示选牌效果*/
	__proto.showPreDiscardEff=function(cardIdx){
		var i=0,len=this.model.chairNum;
		for(i=0;i<len;i++){
			this._PosChairVec[i].showPreDiscardEff(cardIdx);
		}
	}

	/**赢藏选牌效果*/
	__proto.hidePreDiscardEff=function(){
		var i=0,len=this.model.chairNum;
		for(i=0;i<len;i++){
			this._PosChairVec[i].hidePreDiscardEff();
		}
	}

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	return PengGangPart;
})()


//class modules.game.majiangGame.view.majiangPart.shaizi.ShaiziEffPage
var ShaiziEffPage=(function(){
	function ShaiziEffPage(skin){
		this._skin=null;
		this._value=0;
		this._shaizi0Time=0;
		this._shaizi1Time=0;
		this._skin=skin;
		this._skin.shaizi0.interval=this._skin.shaizi1.interval=50;
	}

	__class(ShaiziEffPage,'modules.game.majiangGame.view.majiangPart.shaizi.ShaiziEffPage');
	var __proto=ShaiziEffPage.prototype;
	__proto.onPlayComp=function(e){
		this._skin.shaizi0.stop();
		this._skin.shaizi1.stop();
		this._skin.shaizi0.visible=false;
		this._skin.shaizi1.visible=false;
		this._skin.value0.visible=true;
		this._skin.value1.visible=true;
		var min=Math.max(this._value-6,1);
		var value1=min+Math.round((6-min)*Math.random());
		if(value1 >=this._value){
			value1=this._value-1;
		};
		var value2=this._value-value1;
		this._skin.value0.skin="gametable/shaizi/shaizi0"+value1+".png";
		this._skin.value1.skin="gametable/shaizi/shaizi0"+value2+".png";
		Laya.timer.once(2000,this,this.onComp);
	}

	__proto.onComp=function(){
		this.hide();
		EventCenter.instance.event("GAME_START_SHAIZI_DONGFENG_COMP");
	}

	__proto.play=function(value){
		console.log("playshazi/////////////"+value);
		this.show();
		this._skin.shaizi0.visible=true;
		this._skin.shaizi1.visible=true;
		this._skin.value0.visible=false;
		this._skin.value1.visible=false;
		this._value=value;
		if(this._value < 2 || this._value > 12){
			QuickUtils.popMessageBox("筛子值小于2或者大于12  "+this._value,"BTN_QUEREN",null,null,"错误");
			return;
		}
		this._skin.shaizi0.play(Math.round((Math.random()*this._skin.shaizi0.count)),true);
		this._skin.shaizi1.play(Math.round((Math.random()*this._skin.shaizi1.count)),true);
		Laya.timer.once(1000,this,this.onPlayComp);
	}

	__proto.reset=function(){
		this.hide();
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	return ShaiziEffPage;
})()


//class modules.game.majiangGame.view.majiangPart.ShaiziPart
var ShaiziPart=(function(){
	function ShaiziPart(skin){
		this._bottom=null;
		this._right=null;
		this._top=null;
		this._left=null;
		this._middle=null;
		this._PosChairVec=[];
		this._bottom=new ShaiziEffPage(skin.bootomShaizi);
		this._right=new ShaiziEffPage(skin.rightShaizi);
		this._top=new ShaiziEffPage(skin.topShaizi);
		this._left=new ShaiziEffPage(skin.leftShaizi);
		this._middle=new ShaiziEffPage(skin.middleShaizi);
		this.allReset();
	}

	__class(ShaiziPart,'modules.game.majiangGame.view.majiangPart.ShaiziPart');
	var __proto=ShaiziPart.prototype;
	__proto.allReset=function(){
		this._bottom.reset();
		this._right.reset();
		this._top.reset();
		this._left.reset();
		this._middle.reset();
	}

	/**设置椅子数量*/
	__proto.setChairNum=function(num){
		(num===void 0)&& (num=3);
		this._PosChairVec.length=0;
		switch(num){
			case 1:this._PosChairVec.push(this._bottom);break ;
			case 2:this._PosChairVec.push(this._bottom,this._top);break ;
			case 3:this._PosChairVec.push(this._bottom,this._right,this._left);break ;
			case 4:this._PosChairVec.push(this._bottom,this._right,this._top,this._left);break ;
			default :this._PosChairVec.push(this._bottom,this._right,this._left);break ;
			}
	}

	/**重置*/
	__proto.reset=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].reset();
		}
		this._middle.reset();
	}

	/**播放筛子动画*/
	__proto.play=function(pos,value){
		if(pos==-1){
			this._middle.play(value);
		}
		else{
			var dir=this.model.getChairDirByPos(pos);
			if(this._PosChairVec[dir]==null){
				QuickUtils.popMessageBox("给的玩家的位置不在0到3！！","BTN_QUEREN",null,null,"错误");
				return;
			}
			this._PosChairVec[dir].play(value);
		}
	}

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	return ShaiziPart;
})()


//class modules.game.majiangGame.view.majiangPart.singlePart.BaseHandleEffItem
var BaseHandleEffItem=(function(){
	function BaseHandleEffItem(skin){
		this._skin=null;
		this.expressUrl="res/swfs/";
		this._liangpaiMc=null;
		this._chiMc=null;
		this._pengMc=null;
		this._gangMc=null;
		this._huMc=null;
		this._zimoMc=null;
		this._dianpaoMc=null;
		this._curMc=null;
		this._curImg=null;
		this.loadedArr=[];
		this._skin=skin;
		this.init();
		this.hide();
	}

	__class(BaseHandleEffItem,'modules.game.majiangGame.view.majiangPart.singlePart.BaseHandleEffItem');
	var __proto=BaseHandleEffItem.prototype;
	__proto.init=function(){}
	// _dianpaoMc.stop();
	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.showEff=function(type){
		console.log("showEff::"+type);
		this.show();
		this._skin.pengImg.visible=false;
		this._skin.gangImg.visible=false;
		this._skin.huImg.visible=false;
		this._skin.liangpaiImg.visible=false;
		this._skin.chiImg.visible=false;
		this._skin.dianpaoImg.visible=false;
		this._skin.zimoImg.visible=false;
		switch(type){
			case 0:
				if(!this._pengMc){
					this._pengMc=new MovieClip();
					this._pengMc.load(this.expressUrl+"peng.swf",true);
					this._skin.pengImg.addChild(this._pengMc);
					this._pengMc.on("loaded",this,this.onLoaded,[this._pengMc]);
				}
				else{
					this.onLoaded(this._pengMc);
				}
				this._curMc=this._pengMc;
				this._curImg=this._skin.pengImg;
				this._skin.pengImg.visible=true;
				break ;
			case 1:
				if(!this._gangMc){
					this._gangMc=new MovieClip();
					this._gangMc.load(this.expressUrl+"gang.swf",true);
					this._skin.gangImg.addChild(this._gangMc);
					this._gangMc.on("loaded",this,this.onLoaded,[this._gangMc]);
				}
				else{
					this.onLoaded(this._gangMc);
				}
				this._curMc=this._gangMc;
				this._curImg=this._skin.gangImg;
				this._skin.gangImg.visible=true;
				break ;
			case 2:
				if(!this._huMc){
					this._huMc=new MovieClip();
					this._huMc.load(this.expressUrl+"hu.swf",true);
					this._skin.huImg.addChild(this._huMc);
					this._huMc.on("loaded",this,this.onLoaded,[this._huMc]);
				}
				else{
					this.onLoaded(this._huMc);
				}
				this._curMc=this._huMc;
				this._curImg=this._skin.huImg;
				this._skin.huImg.visible=true;
				break ;
			case 3:
				this._skin.liangpaiImg.visible=true;
				this.hide();
				break ;
			case 4:
				if(!this._chiMc){
					this._chiMc=new MovieClip();
					this._chiMc.load(this.expressUrl+"chi.swf",true);
					this._skin.chiImg.addChild(this._chiMc);
					this._chiMc.on("loaded",this,this.onLoaded,[this._chiMc]);
				}
				else{
					this.onLoaded(this._chiMc);
				}
				this._curMc=this._chiMc;
				this._curImg=this._skin.chiImg;
				this._skin.chiImg.visible=true;
				break ;
			case 5:
				if(!this._dianpaoMc){
					this._dianpaoMc=new MovieClip();
					this._dianpaoMc.load(this.expressUrl+"dianpao.swf",true);
					this._skin.dianpaoImg.addChild(this._dianpaoMc);
					this._dianpaoMc.on("loaded",this,this.onLoaded,[this._dianpaoMc]);
				}
				else{
					this.onLoaded(this._dianpaoMc);
				}
				this._curMc=this._dianpaoMc;
				this._curImg=this._skin.dianpaoImg;
				this._skin.dianpaoImg.visible=true;
				break ;
			case 6:
				if(!this._zimoMc){
					this._zimoMc=new MovieClip();
					this._zimoMc.load(this.expressUrl+"zimo.swf",true);
					this._skin.zimoImg.addChild(this._zimoMc);
					this._zimoMc.on("loaded",this,this.onLoaded,[this._zimoMc]);
				}
				else{
					this.onLoaded(this._zimoMc);
				}
				this._curMc=this._zimoMc;
				this._curImg=this._skin.zimoImg;
				this._skin.zimoImg.visible=true;
				break ;
			}
		Laya.timer.once(800,this,this.playEnd);
	}

	__proto.onLoaded=function(mc){
		mc.loop=false;
		this._curMc=mc;
		mc.playTo(0,mc.count,Handler.create(this,this.playEnd));
		Laya.timer.frameLoop(1,this,this.onCheck);
	}

	__proto.onCheck=function(mc){
		if(this._curMc){
			if(this._curMc.playing==false){
				this.hide();
				Laya.timer.clear(this,this.onCheck);
			}
		}
		else{
			this.hide();
			Laya.timer.clear(this,this.onCheck);
		}
	}

	__proto.playEnd=function(){
		this._curMc && this._curMc.stop();
		this.hide();
	}

	BaseHandleEffItem.HANDLEEFF_TYPE_PENG=0;
	BaseHandleEffItem.HANDLEEFF_TYPE_GANG=1;
	BaseHandleEffItem.HANDLEEFF_TYPE_HU=2;
	BaseHandleEffItem.HANDLEEFF_TYPE_LIANGPAI=3;
	BaseHandleEffItem.HANDLEEFF_TYPE_CHI=4;
	BaseHandleEffItem.HANDLEEFF_TYPE_DIANPAO=5;
	BaseHandleEffItem.HANDLEEFF_TYPE_ZIMO=6;
	return BaseHandleEffItem;
})()


/**玩家手里的牌的基础类*/
//class modules.game.majiangGame.view.majiangPart.singlePart.BaseSingleHandlePart
var BaseSingleHandlePart=(function(){
	function BaseSingleHandlePart(skin){
		this._theFourteenCard=null;
		this._OrignalX=0;
		this._OrignalY=0;
		this._SingleCardW=0;
		this._SingleCardH=0;
		this.skin=null;
		this.tingImg=null;
		this.needTingEff=false;
		this._preThirteenCards=__newvec(13,null);
		this.skin=skin;
	}

	__class(BaseSingleHandlePart,'modules.game.majiangGame.view.majiangPart.singlePart.BaseSingleHandlePart');
	var __proto=BaseSingleHandlePart.prototype;
	/**牌竖立*/
	__proto.up=function(){
		var i=0;
		var len=this._preThirteenCards.length;
		for(i=0;i<len;i++){
			this._preThirteenCards[i].up();
		}
		this._theFourteenCard.up();
	}

	/**牌倒下（明牌）*/
	__proto.down=function(){
		var i=0;
		var len=this._preThirteenCards.length;
		for(i=0;i<len;i++){
			this._preThirteenCards[i].down();
		}
		this._theFourteenCard.down();
	}

	/**牌扣住*/
	__proto.back=function(){
		var i=0;
		var len=this._preThirteenCards.length;
		for(i=0;i<len;i++){
			this._preThirteenCards[i].back();
		}
		this._theFourteenCard.back();
	}

	/**显示玩家手里的牌除去 碰 杠 （这个cardArr已经排好序了）*/
	__proto.setPreThirteenCards=function(cardArr,dir,needKou,needMovePeng){
		(needKou===void 0)&& (needKou=true);
		(needMovePeng===void 0)&& (needMovePeng=true);
		if(AppConfig.autoPlay){
			var num=0;
			if(this.model.theFourteenCardVec[this.model.getChairPosByDir(dir)] !=-1){
				num=1;
			}
			if((this.model.getPengGangNum(this.model.getChairPosByDir(dir))*3+cardArr.length+num)> 14){
			}
		};
		var i=0;
		var pos=this.model.getChairPosByDir(dir);
		var downArr=this.model.TingDownCardVec[pos];
		var kouArr=this.model.kouVec[this.model.getChairPosByDir(dir)];
		var len=this._preThirteenCards.length;
		var datLen=cardArr.length;
		console.log("cardArr.length::"+cardArr.length);
		if(UserData.roomtype==11){
			for(i=0;i<len;i++){
				if(i<len-datLen){
					this._preThirteenCards[i].hide();
				}
				else{
					if(this.model.isTingVec[this.model.getChairPosByDir(dir)] || this.model.isHu || UserData.isReplay){
						if(this.model.isHu || UserData.isReplay){
							this._preThirteenCards[i].down();
							this._preThirteenCards[i].removeTingEff();
						}
						else if(this.model.isTingVec[this.model.getChairPosByDir(dir)]){
							this._preThirteenCards[i].removeTingEff();
							if(i < len-datLen+downArr.length){
								this._preThirteenCards[i].down();
							}
							else
							if(i < len-datLen+downArr.length+kouArr.length*3){
								if(needKou){
									if(dir !=0){
										this._preThirteenCards[i].back();
									}
									else{
										if(this.model.isSelfSitDown || dir !=0){
											this._preThirteenCards[i].up();
										}
										else{
											this._preThirteenCards[i].back();
										}
									}
								}
							}
							else{
								if(this.model.isSelfSitDown || dir !=0){
									this._preThirteenCards[i].up();
								}
								else{
									this._preThirteenCards[i].back();
								}
							}
						}
					}
					else{
						if(this.model.isSelfSitDown || dir !=0){
							this._preThirteenCards[i].up();
						}
						else{
							this._preThirteenCards[i].back()
						}
					}
					this._preThirteenCards[i].show();
					this._preThirteenCards[i].setCardImg(cardArr[i-(len-datLen)]);
				}
			}
		}
		else{
			for(i=0;i<len;i++){
				if(i<len-datLen){
					this._preThirteenCards[i].hide();
				}
				else{
					if(this.model.isHu || UserData.isReplay){
						this._preThirteenCards[i].down();
						if(i < len-datLen+kouArr.length*3){
							if(needKou){
								this._preThirteenCards[i].back();
							}
						}
					}
					else if(this.model.isTingVec[this.model.getChairPosByDir(dir)]){
						this._preThirteenCards[i].removeTingEff();
						if(this.model.getChairPosByDir(dir)==this.model.selfChairPos){
							if(this.model.isSelfSitDown || dir !=0){
								this._preThirteenCards[i].up();
							}
							else{
								this._preThirteenCards[i].back();
							}
						}
						else{
							this._preThirteenCards[i].back();
						}
					}
					else{
						if(this.model.isSelfSitDown || dir !=0){
							this._preThirteenCards[i].up();
						}
						else{
							this._preThirteenCards[i].back();
						}
					}
					this._preThirteenCards[i].show();
					this._preThirteenCards[i].setCardImg(cardArr[i-(len-datLen)]);
				}
			}
		}
		if(needMovePeng){
			if(datLen%3==2){
				this.movePeng(true);
			}
			else{
				this.movePeng(false);
			}
		}
		this.setTingImgXAndW(datLen);
	}

	/**播放起牌动画*/
	__proto.playQipaiEff=function(){
		var i=0;
		var len=this._preThirteenCards.length;
		for(i=0;i<len;i++){
			this._preThirteenCards[i].skin.alpha=0;
			Laya.timer.frameOnce(i,this,this.onSingleQiEff,[i],false);
		}
		this._theFourteenCard.skin.alpha=0;
		Laya.timer.frameOnce(14,this,this.onSingleFQiEff,null);
	}

	__proto.onSingleQiEff=function(idx){
		Tween.to(this._preThirteenCards[idx].skin,{alpha:1},100);
	}

	__proto.onSingleFQiEff=function(){
		this._theFourteenCard.skin.alpha=1;
	}

	/**设置第十三张牌*/
	__proto.setTheFourteenCard=function(cardIdx,dir){
		if(cardIdx==-1){
			this._theFourteenCard.hide();
			return;
		}
		if(this.model.isTingVec[this.model.getChairPosByDir(dir)] || this.model.isHu || UserData.isReplay){
			if(this.model.isHu || UserData.isReplay){
				this._theFourteenCard.down();
			}
			else
			if(this.model.isTingVec[this.model.getChairPosByDir(dir)]){
				if(dir !=0){
					if(this.model.isSelfSitDown || dir !=0){
						this._theFourteenCard.up();
					}
					else{
						this._theFourteenCard.back();
					}
				}
				else{
					this._theFourteenCard.back();
				}
			}
			else{
				this._theFourteenCard.down();
			}
			this._theFourteenCard.removeTingEff();
		}
		else{
			if(this.model.isSelfSitDown || dir !=0){
				this._theFourteenCard.up();
			}
			else{
				this._theFourteenCard.back();
			}
		}
		console.log("cardIdx ::"+cardIdx);
		this._theFourteenCard.setCardImg(cardIdx);
		this._theFourteenCard.show();
	}

	__proto.canControlWitchDark=function(cards){}
	__proto.reset=function(){
		var i=0;
		var len=this._preThirteenCards.length;
		for(i=0;i<len;i++){
			this._preThirteenCards[i].reset();
		}
		this._theFourteenCard.reset();
		if(this.tingImg !=null){
			this.tingImg.visible=false;
		}
		this.movePeng(false);
	}

	__proto.show=function(){}
	__proto.hide=function(){}
	/**显示可以听的牌*/
	__proto.showCanTingCards=function(cards){
		console.log("showCanTingCards .... jinlaila");
		var i=0;
		var j=0;
		var datLen=cards.length;
		var newArr=this._preThirteenCards.concat(this._theFourteenCard);
		var len=newArr.length;
		console.log("newArr.length :: "+len);
		for(i=0;i<len;i++){
			console.log("newArr[i].visible ::"+newArr[i].visible+"i"+i);
			if(newArr[i].visible && newArr[i].state !=2){
				newArr[i].down();
				newArr[i].showTingState(false);
				console.log("newArr  i:: "+i)+"  down";
			}
		}
		for(i=0;i<datLen;i++){
			for(j=len-1;j>=0;j--){
				if(newArr[j].visible && newArr[j].cardIdx==cards[i] && newArr[j].state !=2){
					if(this.judegCanTingOut(newArr[j].cardIdx)==false){
						newArr[j].showTingState(true);
					}
					break ;
				}
			}
		}
	}

	__proto.judegCanTingOut=function(cardIdx){
		return false;
	}

	/**取消听牌*/
	__proto.cancelTingpai=function(){
		console.log("showCanTingCards .... jinlaila");
		var i=0;
		var j=0;
		var newArr=this._preThirteenCards.concat(this._theFourteenCard);
		var len=newArr.length;
		console.log("newArr.length :: "+len);
		for(i=0;i<len;i++){
			console.log("newArr[i].visible ::"+newArr[i].visible+"i"+i);
			if(newArr[i].visible && newArr[i].state !=2){
				newArr[i].up();
				newArr[i].cancleTingState();
				console.log("newArr  i:: "+i)+"  down";
			}
		}
	}

	/**显示可以扣的牌*/
	__proto.showCanKouCards=function(cards){
		var i=0;
		var j=0;
		var datLen=cards.length;
		var newArr=this._preThirteenCards.concat(this._theFourteenCard);
		var len=newArr.length;
		for(i=0;i<len;i++){
			if(newArr[i].visible && newArr[i].state !=2){
				newArr[i].down();
				newArr[i].showKouState(false);
			}
		}
		for(i=0;i<datLen;i++){
			for(j=0;j<len;j++){
				if(newArr[j].visible && newArr[j].cardIdx==cards[i]){
					console.log("显示 showKouState ：：：");
					newArr[j].showKouState(true);
				}
			}
		}
	}

	/**显示可以扣的牌*/
	__proto.showCancelKouCards=function(){
		var i=0;
		var j=0;
		var newArr=this._preThirteenCards.concat(this._theFourteenCard);
		var len=newArr.length;
		for(i=0;i<len;i++){
			if(newArr[i].visible){
				newArr[i].down();
				newArr[i].showKouState(false);
			}
		}
	}

	//点击了自己的一张可以扣的牌
	__proto.showTempKouCards=function(cardIdx){
		var i=0;
		var newArr=this._preThirteenCards.concat(this._theFourteenCard);
		var len=newArr.length;
		var curNum=0;
		var maxNum=3;
		for(i=0;i<len;i++){
			if(newArr[i].visible && newArr[i].cardIdx==cardIdx){
				if(curNum < maxNum){
					newArr[i].back();
				}
				newArr[i].canControl=false;
				curNum++;
			}
		}
	}

	/**显示玩家听了的状态*/
	__proto.showTinged=function(){
		if(this.tingImg !=null){
			if(this.needTingEff){
				this.tingImg.visible=true;
			}
		}
	}

	__proto.setTingImgXAndW=function(cardNum){}
	__proto.showCanGangCards=function(cards){
		var i=0;
		var len=0;
		var newCards=[];
		for(i=0;i<cards.length;i++){
			console.log("showCanGangCards cards.card::"+cards[i].card);
			newCards.push(cards[i].card);
		};
		var newArr=this._preThirteenCards.concat(this._theFourteenCard);
		len=newArr.length;
		for(i=0;i<len;i++){
			if(newArr[i].visible){
				if(newCards.indexOf(newArr[i].cardIdx)!=-1){
					newArr[i].canControlWitchDark=true;
				}
				else{
					newArr[i].canControlWitchDark=false;
				}
			}
		}
	}

	__proto.showHuAni=function(pos){
		this._theFourteenCard.showHuAni(this.model.getChairDirByPos(pos));
	}

	__proto.movePeng=function(bool){}
	/**判断每张牌是不是可以听了*/
	__proto.judgeEveryCanTing=function(){}
	/**显示预出牌效果*/
	__proto.showPreDiscardEff=function(cardIdx){
		var i=0;
		var newArr=this._preThirteenCards.concat(this._theFourteenCard);
		var len=newArr.length;
		for(i=0;i<len;i++){
			if(newArr[i].visible && newArr[i].cardIdx==cardIdx && newArr[i].skin.y==0){
				QuickUtils.addRed(newArr[i].skin,true);
			}
			else{
				QuickUtils.addRed(newArr[i].skin,false);
			}
		}
	}

	/**赢藏选牌效果*/
	__proto.hidePreDiscardEff=function(){
		var i=0;
		var newArr=this._preThirteenCards.concat(this._theFourteenCard);
		var len=newArr.length;
		for(i=0;i<len;i++){
			QuickUtils.addRed(newArr[i].skin,false);
		}
	}

	// judgeEveryCanTing();
	__getset(0,__proto,'canControl',null,function(bool){
	});

	__getset(0,__proto,'visible',function(){
		return false;
	});

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	return BaseSingleHandlePart;
})()


//class modules.game.majiangGame.view.majiangPart.singlePart.BaseSingleOutputPart
var BaseSingleOutputPart=(function(){
	function BaseSingleOutputPart(){
		this._curIdx=-1;
		this._isCurOutput=false;
		this._cardsVec=__newvec(27,null);
	}

	__class(BaseSingleOutputPart,'modules.game.majiangGame.view.majiangPart.singlePart.BaseSingleOutputPart');
	var __proto=BaseSingleOutputPart.prototype;
	__proto.toPre=function(){
		this._cardsVec[this._curIdx].hide();
		this._curIdx-=1;
		this.showCurSimbol(true);
	}

	__proto.show=function(){}
	__proto.hide=function(){}
	/**显示一张牌*/
	__proto.showOneCard=function(cardIdx,idx,pos,needShowEff){
		(needShowEff===void 0)&& (needShowEff=true);
		if(idx < this._cardsVec.length){
			this._cardsVec[idx].setCardImg(cardIdx);
			this._cardsVec[idx].down();
			this._curIdx=idx;
			if(needShowEff){
				var dir=this.model.getChairDirByPos(pos);
				var fromX=0;
				var fromY=0;
				var view=this._cardsVec[idx] .skin;
				var pt;
				switch(dir){
					case 0:
						if(UserData.isReplay){
							fromX=535;
							fromY=181;
						}
						else{
							if(this.model.selfOutputCardPos==null){
								fromX=535;
								fromY=181;
							}
							else{
								if(this.model.selfOutputCardPos.x !=-1){
									pt=QuickUtils.globalToLocal(view,this.model.selfOutputCardPos,true);
									fromX=pt.x
									fromY=pt.y;
								}
								else{
									fromX=535;
									fromY=181;
								}
							}
						}
						break ;
					case 1:
						fromX=160;
						fromY=-67;
						break ;
					case 2:
						if(this.model.chairNum==3){
							fromX=-53;
							fromY=276;
						}
						else{
						}
						break ;
					case 3:
						break ;
					}
				this._cardsVec[idx].skin.alpha=1;
				Tween.from(this._cardsVec[idx].skin,{alpha:0},700,Ease.cubicOut);
				Laya.timer.frameOnce(2,this,this.showCard);
			}
			else{
				if(this._cardsVec[this._curIdx]){
					this._cardsVec[this._curIdx].show();
				}
			}
			this.model.selfOutputCardPos.x=-1;
			this.model.selfOutputCardPos.y=-1;
		}
	}

	__proto.showCard=function(){
		if(this._cardsVec[this._curIdx]){
			this._cardsVec[this._curIdx].show();
		}
	}

	/**重置*/
	__proto.reset=function(){
		this._curIdx=-1;
		var i=0;
		var len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i].hide();
			this._cardsVec[i].skin.alpha=1;
			this._cardsVec[i].makeTingState(false);
		}
		this.showCurSimbol(false);
	}

	// startImg.visible=false;
	__proto.showCurSimbol=function(bool){
		var i=0;
		var len=this._cardsVec.length;
		if(bool){
			for(i=0;i<len;i++){
				if(i==this._curIdx){
					this._cardsVec[i].showCurOutputSimbol(bool);
				}
				else{
					this._cardsVec[i].showCurOutputSimbol(!bool);
				}
			}
		}
		else{
			for(i=0;i<len;i++){
				this._cardsVec[i].showCurOutputSimbol(bool);
			}
		}
		this._isCurOutput=bool;
	}

	/**当前牌被碰 杠了调用*/
	__proto.curCardHasPengGang=function(){
		this._cardsVec[this._curIdx].hide();
		this._cardsVec[this._curIdx].makeTingState(false);
		this._curIdx-=1;
	}

	/***/
	__proto.noticeHasTing=function(){
		this._cardsVec[this._curIdx].makeTingState(true);
	}

	/**游戏开始，显示底部的框*/
	__proto.showStartImg=function(bool){
		(bool===void 0)&& (bool=true);
	}

	// startImg.visible=false;
	__proto.showHuAni=function(dir){
		this._cardsVec[this._curIdx].showHuAni(dir,true);
	}

	/**显示预出牌效果*/
	__proto.showPreDiscardEff=function(cardIdx){
		var i=0,len=this._cardsVec.length;
		for(i=0;i<len;i++){
			if(this._cardsVec[i].skin.visible && this._cardsVec[i].cardIdx==cardIdx && i <=this._curIdx){
				QuickUtils.addRed(this._cardsVec[i].skin,true);
			}
			else{
				QuickUtils.addRed(this._cardsVec[i].skin,false);
			}
		}
	}

	/**赢藏选牌效果*/
	__proto.hidePreDiscardEff=function(){
		var i=0,len=this._cardsVec.length;
		for(i=0;i<len;i++){
			QuickUtils.addRed(this._cardsVec[i].skin,false);
		}
	}

	/**当前出到第几张牌*/
	__getset(0,__proto,'curIdx',function(){
		return this._curIdx;
		},function(idx){
		this._curIdx=idx;
	});

	/**是否出牌出到当前*/
	__getset(0,__proto,'isCurOutput',function(){
		return this._isCurOutput;
	});

	/***/
	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'curCardIdx',function(){
		if(this._curIdx==-1){
			return 0;
		}
		return this._cardsVec[this._curIdx].cardIdx;
	});

	return BaseSingleOutputPart;
})()


//class modules.game.majiangGame.view.majiangPart.singlePart.BaseSinglePengGangPart
var BaseSinglePengGangPart=(function(){
	function BaseSinglePengGangPart(){
		/**碰 杠发生的位置*/
		this._curIdx=-1;
		this._cardsVec=__newvec(4,null);
	}

	__class(BaseSinglePengGangPart,'modules.game.majiangGame.view.majiangPart.singlePart.BaseSinglePengGangPart');
	var __proto=BaseSinglePengGangPart.prototype;
	__proto.show=function(){}
	__proto.hide=function(){}
	__proto.chi=function(chidata,providerPos,chairPos){
		(providerPos===void 0)&& (providerPos=0);
		(chairPos===void 0)&& (chairPos=0);
		if(this._curIdx >=this._cardsVec.length){
			return;
		};
		var arr=[];
		arr.push(chidata.chicard);
		arr=arr.concat(chidata.chicards);
		arr.sort(this.compareFunction);
		this._curIdx+=1;
		this._cardsVec[this._curIdx].chi(arr,chidata.chicard,providerPos);
		for(var i=0;i<this._cardsVec.length;i++){
			this._cardsVec[i].updateChengbaoColor(chairPos,providerPos);
		}
	}

	__proto.compareFunction=function(A,B){
		if(A<B){
			return-1;
		}
		else if(A==B){
			return 0;
		}
		else{
			return 1;
		}
	}

	__proto.peng=function(cardIdx,fromdir,providerPos,chairPos){
		(cardIdx===void 0)&& (cardIdx=0);
		(fromdir===void 0)&& (fromdir=-1);
		(providerPos===void 0)&& (providerPos=0);
		(chairPos===void 0)&& (chairPos=0);
		if(this._curIdx >=this._cardsVec.length){
			return;
		}
		this._curIdx+=1;
		this._cardsVec[this._curIdx].peng(cardIdx,fromdir,providerPos);
		for(var i=0;i<this._cardsVec.length;i++){
			this._cardsVec[i].updateChengbaoColor(chairPos,providerPos);
		}
	}

	__proto.gang=function(cardIdx,type,fromdir,providerPos,chairPos){
		(fromdir===void 0)&& (fromdir=-1);
		(providerPos===void 0)&& (providerPos=0);
		(chairPos===void 0)&& (chairPos=0);
		var isMingGang=type==1 ? false :true;
		var i=0;
		if(type !=0){
			for(i=0;i<this._curIdx+1;i++){
				if(this._cardsVec[i].cardIdx==cardIdx){
					return;
				}
			}
			if(this._curIdx >=this._cardsVec.length){
				return;
			}
			this._curIdx+=1;
			this._cardsVec[this._curIdx].gang(cardIdx,isMingGang,fromdir,providerPos);
		}
		else{
			for(i=0;i<this._curIdx+1;i++){
				if(this._cardsVec[i].cardIdx==cardIdx){
					this._cardsVec[i].gang(cardIdx,isMingGang,fromdir,providerPos);
					return;
				}
			}
			if(this._curIdx >=this._cardsVec.length){
				return;
			}
			this._curIdx+=1;
			this._cardsVec[i].gang(cardIdx,isMingGang,fromdir,providerPos);
		}
		for(i=0;i<this._cardsVec.length;i++){
			this._cardsVec[i].updateChengbaoColor(chairPos,providerPos);
		}
	}

	/**设置杠牌承包关系*/
	__proto.setChengbaoGang=function(cardIdx){
		var i=0,len=this._cardsVec.length;
		for(i=0;i<len;i++){
			if(this._cardsVec[i].type==3 && this._cardsVec[i].cardIdx==cardIdx){
				this._cardsVec[i].setChengbaoGang();
			}
		}
	}

	__proto.setCardImg=function(cardIdx){
		this._cardsVec[this._curIdx].setCardImg(cardIdx);
	}

	__proto.update=function(pengArr,mingGangArr,anGangArr){
		this.reset();
	}

	/**重置*/
	__proto.reset=function(){
		var i=0;
		var len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i].reset();
		}
		this._curIdx=-1;
	}

	__proto.showHuAni=function(dir,cardIdx){
		var i=0;
		for(i=0;i<this._curIdx+1;i++){
			if(this._cardsVec[i].cardIdx==cardIdx){
				this._cardsVec[i].showHuAni(dir);
				console.log("penggang showHuAni:: i"+i+" dir::"+dir);
				break ;
			}
		}
	}

	/**显示选牌效果*/
	__proto.showPreDiscardEff=function(cardIdx){
		var i=0,len=this._cardsVec.length;
		for(i=0;i<len;i++){
			if(this._cardsVec[i].type==0 || this._cardsVec[i].type==1){
				this._cardsVec[i].showPreDiscardEff(cardIdx);
			}
			else{
				this._cardsVec[i].hidePreDiscardEff();
			}
		}
	}

	/**赢藏选牌效果*/
	__proto.hidePreDiscardEff=function(){
		var i=0,len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i].hidePreDiscardEff();
		}
	}

	__getset(0,__proto,'visible',function(){
		return false;
	});

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	return BaseSinglePengGangPart;
})()


/**玩家信息块*/
//class modules.game.majiangGame.view.PlayerInfoPage
var PlayerInfoPage=(function(){
	function PlayerInfoPage(skin){
		this._skin=null;
		this._bottom=null;
		this._right=null;
		this._top=null;
		this._left=null;
		this._PiaoSelePart=null;
		this._PosChairVec=[];
		this._skin=skin;
		this._skin.mouseThrough=true;
		this._bottom=new BasePlayerInfoItem(skin.playerInfo0);
		this._right=new BasePlayerInfoItem(skin.playerInfo1);
		this._top=new BasePlayerInfoItem(skin.playerInfo2);
		this._left=new BasePlayerInfoItem(skin.playerInfo3);
		this._PiaoSelePart=new PiaoSelePart(this._skin.piaoPart);
		this._skin.startBtn.visible=false;
		this._skin.startBtn.on("click",this,this.onClickStartBtn);
		this.allReset();
	}

	__class(PlayerInfoPage,'modules.game.majiangGame.view.PlayerInfoPage');
	var __proto=PlayerInfoPage.prototype;
	//setChairNum(3);
	__proto.onClickStartBtn=function(e){
		this.showStartBtn(false);
		var startGameObj={SID:UserData.SID};
		this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(220,startGameObj));
	}

	__proto.showStartBtn=function(isShow){
		(isShow===void 0)&& (isShow=true);
		this._skin.startBtn.visible=isShow;
	}

	__proto.onClickReadyBtn=function(e){
		var obj={sid:UserData.SID};
		this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(210,obj));
	}

	/**游戏开始影藏所有按钮*/
	__proto.hideBtnsByGameStart=function(){
		this._skin.startBtn.visible=false;
		this._PiaoSelePart.hide();
	}

	//updateTirenBtn(false);
	__proto.updateStartBtn=function(){
		this._skin.startBtn.visible=false;
	}

	/***/
	__proto.updateSitDownUpBtn=function(needJudge){
		(needJudge===void 0)&& (needJudge=true);
		if(needJudge){
			if(this.model.isSelfSitDown && this.model.isGameStart==false){
				CommonModule.instance.commonContext.view.functionOption.onClickBtn(false);
			}
			else{
				CommonModule.instance.commonContext.view.functionOption.onClickBtn(true);
			}
		}
		else{
			if(this.model.isSelfSitDown){
				CommonModule.instance.commonContext.view.functionOption.onClickBtn(false);
			}
			else{
				CommonModule.instance.commonContext.view.functionOption.onClickBtn(true);
			}
		}
	}

	/**游戏开始之后，显示庄家位置*/
	__proto.showZhuang=function(){
		var i=0,len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].showZhuang(this.model.getChairPosByDir(i));
		}
	}

	__proto.hideZhuang=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].hideZhuang();
		}
	}

	// }
	__proto.hideReadyBtn=function(){}
	// _PiaoSelePart.hide();
	__proto.allReset=function(){
		this._bottom.reset();
		this._right.reset();
		this._top.reset();
		this._left.reset();
		this._PiaoSelePart.reset();
	}

	/**设置椅子数量*/
	__proto.setChairNum=function(num){
		(num===void 0)&& (num=3);
		this._PosChairVec.length=0;
		console.log("playerinfo setChairNum::"+num);
		switch(num){
			case 1:this._PosChairVec.push(this._bottom);
				this._bottom.dir=0;
				break ;
			case 2:this._PosChairVec.push(this._bottom,this._top);
				this._bottom.dir=0;
				this._top.dir=1;
				break ;
			case 3:this._PosChairVec.push(this._bottom,this._right,this._left);
				this._bottom.dir=0;
				this._right.dir=1;
				this._left.dir=2;
				break ;
			case 4:this._PosChairVec.push(this._bottom,this._right,this._top,this._left);
				this._bottom.dir=0;
				this._right.dir=1;
				this._top.dir=2;
				this._left.dir=3;
				break ;
			default :this._PosChairVec.push(this._bottom,this._right,this._left);break ;
			}
		this.bigReset();
	}

	/**重新进入游戏大的重置*/
	__proto.bigReset=function(){
		this._skin.startBtn.visible=false;
	}

	/**重置*/
	__proto.reset=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].reset();
		}
		this.updateSitDownUpBtn();
	}

	/**带漂reset*/
	__proto.havePiaoReset=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].reset(true);
		}
		this._PiaoSelePart.reset();
	}

	/**重置某一个玩家*/
	__proto.resetOnePos=function(pos){
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].reset();
	}

	__proto.hideReadySimbol=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].hideReadySimbol();
		}
	}

	/**
	*显示语音图标
	*@param pos
	*
	*/
	__proto.showVoice=function(uid){
		var pos=this.model.getPlayerPosByUid(uid);
		var dir=this.model.getChairDirByPos(pos);
		console.log(dir)
		if(dir==-1){
			this._skin.laba.visible=true;
			this._skin.labaTip.play()
			}else{
			this._PosChairVec[dir].voice.visible=true;
			this._PosChairVec[dir].voice["ani"].play()
		}
	}

	/**
	*隐藏语音图标
	*@param pos
	*/
	__proto.hideVoice=function(uid){
		var pos=this.model.getPlayerPosByUid(uid);
		var dir=this.model.getChairDirByPos(pos);
		if(dir==-1){
			this._skin.laba.visible=false;
			this._skin.labaTip.stop()
			}else{
			this._PosChairVec[dir].voice.visible=false;
			this._PosChairVec[dir].voice["ani"].stop()
		}
	}

	/**显示一个*/
	__proto.showReady=function(pos){
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].showReady();
	}

	/**刷新一个玩家的数据*/
	__proto.updateOnePlayerInfo=function(obj,needFlyImg){
		(needFlyImg===void 0)&& (needFlyImg=false);
		if (obj.pos==-1){
			return;
		};
		var dir=this.model.getChairDirByPos(obj.pos);
		if(dir < this._PosChairVec.length){
			this._PosChairVec[dir].update(obj,needFlyImg);
		}
	}

	/**刷新一个玩家的数据*/
	__proto.updateOnePlayerGolds=function(obj){
		var dir=this.model.getChairDirByPos(obj.pos);
		if(dir < this._PosChairVec.length){
			console.log("   updateOnePlayerInfo ::"+dir+" obj.pos::"+obj.pos);
			this._PosChairVec[dir].updateGolds(obj);
		}
	}

	/**根据一个数组来刷新玩家的信息*/
	__proto.updatePlayerInfos=function(vec,needResetPiao,needFlyImg){
		(needResetPiao===void 0)&& (needResetPiao=true);
		(needFlyImg===void 0)&& (needFlyImg=false);
		console.log("updatePlayerInfos ::"+vec.length);
		this.reset();
		if(needResetPiao){
			this._PiaoSelePart.reset();
		};
		var obj;
		var i=0;
		var len=vec.length;
		for(i=0;i<len;i++){
			if(vec[i]){
				console.log("updatePlayerInfos i::"+i);
				this.updateOnePlayerInfo(vec[i],needFlyImg);
			}
		}
	}

	// updateHua(vec[i].pos);
	__proto.updateHua=function(pos){
		if (pos==-1){
			return;
		};
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].updateHua(pos);
	}

	/**更新玩家的金币*/
	__proto.updateGolds=function(vec){
		console.log("updatePlayerInfos ::"+vec.length);
		console.log(vec);
		var obj;
		var i=0;
		var len=vec.length;
		for(i=0;i<len;i++){
			if(vec[i]){
				console.log("updatePlayerInfos i::"+i);
				this.updateOnePlayerGolds(vec[i]);
			}
		}
	}

	/**更新亮牌状态*/
	__proto.updateTingImg=function(pos){
		var dir=this.model.getChairDirByPos(pos);
		this._PosChairVec[dir].showTingImg();
	}

	__proto.updateTirenBtn=function(){
		var i=0;
		var len=this._PosChairVec.length;
		for(i=0;i<len;i++){
			this._PosChairVec[i].updateTirenBtn();
		}
	}

	// }
	__proto.showExpress=function(dir,index){
		this._PosChairVec[dir].showExpress(index);
	}

	//imediate :是否立即更新状态
	__proto.setGrayhead=function(dir,gray,imediate,offlineTime){
		this._PosChairVec[dir].setHeadGray(gray,imediate,offlineTime);
	}

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'controller',function(){
		return GameModule.instance.gameContext.controller;
	});

	return PlayerInfoPage;
})()


//class modules.game.majiangGame.view.playerInfoPart.BasePlayerInfoItem
var BasePlayerInfoItem=(function(){
	function BasePlayerInfoItem(skin){
		this.needPiao=false;
		this._skin=null;
		// public var huaTf:Label;
		this.zhenghuaBox=null;
		this.yehuaBox=null;
		this.huaTf_z=null;
		this.huaTf_y=null;
		this.huaImg_z=null;
		this.huaImg_y=null;
		this.headImg=null;
		this.nameTf=null;
		this.recordTf=null;
		this.readyImg=null;
		this.tingpaiImg=null;
		this.gangEff=null;
		this.tirenBtn=null;
		this.sitDownBtn=null;
		this.offlineTf=null;
		this.fenshuTf=null;
		this.voice=null;
		this.headw=0
		this.headh=0;
		this.dir=0;
		this.expressImg=null;
		this.expressMov=null;
		this.expressUrl="res/swfs/Emoticon_";
		/**游戏开始之前显示的打的漂图片*/
		this.piaoImg=null;
		this.playingPiaoImg=null;
		this.offlineimg=null;
		//
		this.gangAni=null;
		this._skin=skin;
		this.init();
	}

	__class(BasePlayerInfoItem,'modules.game.majiangGame.view.playerInfoPart.BasePlayerInfoItem');
	var __proto=BasePlayerInfoItem.prototype;
	__proto.init=function(){
		this._skin.mouseThrough=true;
		this._skin["haveBox"].mouseThrough=true;
		this.zhenghuaBox=this._skin["zhenghuaBox"];
		this.yehuaBox=this._skin["yehuaBox"];
		this.huaTf_z=this._skin["huaTf_z"];
		this.huaTf_y=this._skin["huaTf_y"];
		this.huaImg_z=this._skin["huaZhenhua"];
		this.huaImg_y=this._skin["huaYehua"];
		this.zhenghuaBox.visible=false;
		this.yehuaBox.visible=false;
		this.huaTf_z.visible=true;
		this.huaTf_y.visible=true;
		this.huaImg_y.visible=false;
		this.huaImg_z.visible=true;
		this.offlineTf=this._skin["offlineTf"];
		this.offlineTf.overflow="visible";
		this.piaoImg=this._skin["piaoImg"];
		this.playingPiaoImg=this._skin["playingPiaoImg"];
		this.headImg=this._skin["headImg"];
		this.nameTf=this._skin["nameTf"];
		this.recordTf=this._skin["recordTf"];
		this.readyImg=this._skin["readyImg"];
		this.voice=this._skin["voice"];
		this.tingpaiImg=this._skin["mingpaiPic"];
		this.gangEff=this._skin["gangEff"];
		this.fenshuTf=this._skin["fenshuTf"];
		this.tirenBtn=this._skin["tirenBtn"];
		this.expressImg=this._skin["express"];
		this.offlineimg=this._skin["offline"];
		this.sitDownBtn=this._skin["sitdownBtn"];
		this.tirenBtn.visible=false;
		this.voice.visible=false;
		this.offlineimg.visible=false;
		this.headw=this.headImg.width;
		this.headh=this.headImg.height;
		this.loadGangEff();
		this.loadExpressMov();
		this.tirenBtn.on("click",this,this.onClickTiren);
		this.sitDownBtn.on("click",this,this.onClickSitdown);
	}

	__proto.onClickSitdown=function(e){
		if (!UserData.isCanSitdown){
			return
		}
		if(this.model.isSelfSitDown){
			this.onConFirm(0);
			return;
		}
		else if(this.model.majiangMsgs.ACK_RoomInfo.RoundCount > 0){
			QuickUtils.popMessage("接替之前的玩家进行游戏不收费，祝您游戏愉快！");
			this.onConFirm(0);
			return;
		};
		var info=this.model.majiangMsgs.ACK_RoomInfo;
		var rule=info.Rule;
		var obj=AppConfig.getRule(rule[1]);
		var typeStr="";
		if(obj.type==0){
			typeStr="局数";
		}
		else{
			typeStr="时间";
		};
		var str="本游戏工具为收费软件，按游戏"+typeStr+"扣除钻石。坐下不扣钱，开始游戏后才会扣钱，开始游戏后不予退还。是否花费"+AppConfig.costRule[UserData.roomtype][rule[1]]/4+"钻石加入牌局？";
		QuickUtils.popMessageBox(str,"BTN_LABEL_QUEDINGQUXIAO",this,this.onConFirm,"提示","left");
	}

	__proto.onConFirm=function(idx){
		if(idx==0){
			if(!UserData.isCanSitdown)return;
			var sitDownObj={sid:UserData.SID,index:this.model.getChairPosByDir(this.dir)};
			this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(195,sitDownObj));
			UserData.isCanSitdown=false;
			Laya.timer.once(400,this,this.restCanSitdown)
		}
	}

	__proto.restCanSitdown=function(){
		UserData.isCanSitdown=true;
		Laya.timer.clear(this,this.restCanSitdown)
	}

	__proto.onClickTiren=function(e){
		if(this.model.isSelfSitDown==false){
			QuickUtils.popMessage("围观用户没有权限踢人");
			return;
		}
		if(this.model.isGameStart){
			QuickUtils.popMessageBox("踢人会导致当前游戏流局，确认踢人吗？","BTN_LABEL_QUEDINGQUXIAO",this,this.onConFirmTiren,"提示","left");
		}
		else{
			this.onConFirmTiren(0);
		}
	}

	__proto.onConFirmTiren=function(idx){
		if(idx==0){
			var kickObj={pos:this.model.getChairPosByDir(this.dir)};
			this.controller.sendMsgCommond(ProtoMessage.getProtoMessage(405,kickObj));
		}
	}

	__proto.loadGangEff=function(){
		this.gangEff.removeChildren();
		this.gangEff.skin="";
		this.gangAni=new Animation();
		this.gangAni.loadAtlas("res/animations/gangaddEff.json");
		console.log("loadGangEff///////////////");
		this.gangAni.stop();
		this.gangEff.addChild(this.gangAni);
		this.gangAni.on("complete",this,this.onGangAniComp);
	}

	__proto.loadExpressMov=function(){
		this.expressImg.removeChildren();
		this.expressImg.skin="";
		this.expressMov=new MovieClip();
		this.expressMov.width=200;
		this.expressMov.height=200;
		this.expressImg.addChild(this.expressMov);
		this.expressMov.on("complete",this,this.onCompleteMov);
	}

	__proto.showExpress=function(index){
		if(this.expressMov !=null){
			this.expressMov.alpha=1;
			Tween.clearAll(this.expressMov);
			if(this.expressMov.parent)
				this.expressMov.removeSelf();
		}
		this.expressMov=new MovieClip();
		this.expressMov.width=200;
		this.expressMov.height=200;
		this.expressMov.x=-85;
		this.expressMov.y=-85;
		this.expressImg.addChild(this.expressMov);
		this.expressMov.visible=true;
		this.expressMov.alpha=1;
		if(index < 10)
			this.expressMov.load(this.expressUrl+"0"+index+".swf",true);
		else
		this.expressMov.load(this.expressUrl+index+".swf",true);
		Tween.to(this.expressMov,{alpha:0.3},500,null,new Handler(this,this.onCompeteTween,[null]),2500);
	}

	__proto.onCompeteTween=function(obj){
		if(this.expressMov !=null){
			this.expressMov.visible=false;
			this.expressMov.alpha=1;
			if(this.expressMov.parent)
				this.expressMov.removeSelf();
			this.expressMov=null;
		}
	}

	__proto.onCompleteMov=function(){}
	__proto.onGangAniComp=function(e){
		this.gangEff.visible=false;
		this.gangAni.stop();
	}

	/**分数变化时播放*/
	__proto.playGangEff=function(record){
		if(record==0){
			return;
		}
		if(record > 0){
			this.gangEff.visible=true;
			this.gangAni.play(0,false);
			this.fenshuTf.color="#00ff00";
		}
		else{
			this.gangEff.visible=false;
			this.gangAni.stop();
			this.fenshuTf.color="#ff0000";
		}
		this.fenshuTf.visible=true;
		this.fenshuTf.text=record > 0 ? "+"+record :record+"";
		this.fenshuTf.y=104;
		Tween.to(this.fenshuTf,{y:64},2000,null,Handler.create(this,this.onFenshuEffComp),2);
	}

	__proto.onFenshuEffComp=function(){
		this.fenshuTf.visible=false;
	}

	__proto.update=function(obj,needFlyImg){
		(needFlyImg===void 0)&& (needFlyImg=false);
		this.sitDownBtn.visible=false;
		this._skin["haveBox"].visible=true;
		if(obj.score==undefined){
			obj.score=0;
		}
		this.nameTf.text=obj.nickname;
		if(UserData.Rule[4]==1){
			this.recordTf.text=obj.Coin;
		}
		else{
			this.recordTf.text=""+obj.score;
		}
		if(UserData.uid==obj.uid){
			UserData.Diamond=obj.Diamond;
			UserData.score=obj.score;
			UserData.Coin=obj.Coin;
		}
		if(obj.readystate==1){
			if(this.model.isGameStart==false){
				this.readyImg.visible=true;
			}
			this.setPiaoValue(obj.piao);
			console.log("obj.piao::"+obj.piao);
			this.showPiaoImage(this.model.isGameStart);
		}
		else{
			this.readyImg.visible=false;
			this.hidePiaoImage();
		};
		var pos=GameModule.instance.gameContext.model.getPlayerPosByUid(obj.uid);
		this.tingpaiImg.visible=GameModule.instance.gameContext.model.isTingVec[pos];
		this._skin["chairPos"].text="座位号："+pos;
		this._skin["chairPos"].visible=false;
		this.headImg.width=this.headw;
		this.headImg.height=this.headh;
		this.headImg.on("click",this,this.onShowUserInfo,[obj]);
		if(WX.splitStr(obj.Icon,"")[0]=='h'){
			var photo=new Sprite();
			photo.loadImage(obj.Icon,0,0,this.headw,this.headh ,Handler.create(this,this.delayPhotoPhoto,[photo,photo]));
			photo.mouseEnabled=true;
			this.headImg.addChild(photo);
		};
		var isGray=false;
		if(obj.state==2){
			isGray=true;
		}
		this.setHeadGray(isGray,true,obj.offlineTime);
		this.updateTirenBtn();
		if(needFlyImg){
			this.playFlyHeadImg(this.model.getChairDirByPos(obj.prePos));
		}
	}

	__proto.onShowUserInfo=function(obj){
		UserInfoPage.instance.show(obj.uid,obj.ip,obj.Icon);
	}

	__proto.delayPhotoPhoto=function(photo,mask){}
	//photo.mask=mask;
	__proto.updateGolds=function(obj){
		this.recordTf.x=0;
		this.recordTf.y=1;
		var preScore=this.recordTf.text;
		this.recordTf.scaleX=this.recordTf.scaleY=0.6;
		this.recordTf.x=0;
		this.recordTf.y=-2;
		if(obj.score>=0){
			this.recordTf.font=TextManager.NumberYellowFont;
			this.recordTf.text=""+obj.score;
			if(obj.score/10<1){
				this.recordTf.x+=10+4
				}else if(obj.score/10<10){
				this.recordTf.x+=6+0
				}else if(obj.score/10<100){
				this.recordTf.x+=0+-2
				}else if(obj.score/10<1000){
				this.recordTf.x+=-6+-4
			}
			}else{
			this.recordTf.font=TextManager.NumberYellowFont;
			this.recordTf.text=obj.score+"";
			if(obj.score/10>-1){
				this.recordTf.x+=10+-8
				}else if(obj.score/10>-10){
				this.recordTf.x+=6+-10
				}else if(obj.score/10>-100){
				this.recordTf.x+=0+-12
				}else if(obj.score/10>-1000){
				this.recordTf.x+=-6+-16
			}
		}
		this.playGangEff(obj.score-preScore);
	}

	__proto.updateHua=function(pos){
		this.zhenghuaBox.visible=false;
		this.yehuaBox.visible=false;
		this.huaTf_z.scaleX=this.huaTf_z.scaleY=0.8;
		this.huaTf_y.scaleX=this.huaTf_y.scaleY=0.8;
		this.huaTf_z.font=TextManager.NumberFlowerFont;
		this.huaTf_y.font=TextManager.NumberFlowerFont;
		if(this.model.getHuaArr(0,pos).length>0 && this.model.getHuaArr(1,pos).length>0){
			this.huaImg_z.visible=true;
			this.huaImg_y.visible=false;
			this.zhenghuaBox.visible=true;
			this.huaTf_z.text="x"+this.model.getHuaArr(0,pos).length;
			this.yehuaBox.visible=true;
			this.huaTf_y.text="x"+this.model.getHuaArr(1,pos).length;
			}else{
			if (this.model.getHuaArr(0,pos).length>0){
				this.huaImg_z.visible=true;
				this.huaImg_y.visible=false;
				this.zhenghuaBox.visible=true;
				this.huaTf_z.text="x"+this.model.getHuaArr(0,pos).length;
			}else
			if (this.model.getHuaArr(1,pos).length>0){
				this.huaImg_z.visible=false;
				this.huaImg_y.visible=true;
				this.zhenghuaBox.visible=true;
				this.huaTf_z.text="x"+this.model.getHuaArr(1,pos).length;
			}
		}
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.reset=function(needHuaHide){
		(needHuaHide===void 0)&& (needHuaHide=false);
		this._skin["haveBox"].visible=false;
		this.sitDownBtn.visible=true;
		this._skin["zhuangImg"].visible=false;
		this.readyImg.visible=false;
		this.tingpaiImg.visible=false;
		this.gangEff.visible=false;
		this.fenshuTf.visible=false;
		if(needHuaHide){
			this.zhenghuaBox.visible=false;
			this.yehuaBox.visible=false;
		}
		this.gangAni.stop();
		this.piaoImg.visible=false;
		this.playingPiaoImg.visible=false;
		this._skin["notPiaoTf"].visible=false;
		this.tirenBtn.visible=false;
		this.voice.visible=false;
		this.voice["ani"].stop();
		this._skin["jiabeiImg"].visible=false;
	}

	/**游戏开始之后，显示庄家位置 庄下对上*/
	__proto.showZhuang=function(pos){
		this._skin["zhuangImg"].visible=true;
		var skinStr="";
		var refZhuang=this.model.getRefZhuangPos(pos);
		switch(refZhuang){
			case 0:
				skinStr="gameCommon/zhuang.png";
				break
			case 1:
				break ;
			case 2:
				break ;
			case 3:
				break ;
			}
		(this._skin ["zhuangImg"]).skin=skinStr;
		if(UserData.roomtype !=11){
			if(refZhuang !=0){
				this._skin["zhuangImg"].visible=false;
			}
		}
	}

	__proto.hideZhuang=function(){
		this._skin["zhuangImg"].visible=false;
	}

	__proto.hideReadySimbol=function(){
		this.readyImg.visible=false;
	}

	__proto.showTingImg=function(){
		this.tingpaiImg.visible=true;
	}

	//mingEffAni.play();
	__proto.showReady=function(){
		this.readyImg.visible=true;
	}

	/**设置显示漂的倍数*/
	__proto.setPiaoValue=function(value){
		if(this.needPiao){
		}
	}

	/**显示漂图标*/
	__proto.showPiaoImage=function(isInGame){
		if(this.needPiao){
			if(isInGame){
				this.playingPiaoImg.visible=true;
				this.piaoImg.visible=false;
			}
			else{
				this.playingPiaoImg.visible=false;
				this.piaoImg.visible=true;
			}
			this._skin["notPiaoTf"].visible=false;
		}
	}

	/**影藏漂图标*/
	__proto.hidePiaoImage=function(){
		if(this.needPiao){
			this.playingPiaoImg.visible=false;
			this.piaoImg.visible=false;
			this._skin["notPiaoTf"].visible=true;
		}
	}

	// }
	__proto.updateTirenBtn=function(){
		var player=this.model.playerByPos(this.model.getChairPosByDir(this.dir));
		if(player!=null){
			this.tirenBtn.visible=player.canKick;
		}
	}

	__proto.setHeadGray=function(gray,imediate,offlineTime){
		(offlineTime===void 0)&& (offlineTime=0);
		if(gray && imediate){
			this._skin["offLineSp"].visible=true;
			this.headImg.filters=[QuickUtils.grayscaleFilter];
			this.offlineimg.visible=true;
			this.offlineTf.visible=true;
			this.offlineTf.text=offlineTime+"";
			this.startCutDownOffline();
		}
		else if(gray && !imediate){
			this._skin["offLineSp"].visible=true;
			Laya.timer.once(10000,this,this.setGrayhead);
		}
		else{
			this._skin["offLineSp"].visible=false;
			this.tirenBtn.visible=false;
			this.headImg.filters=null;
			this.offlineimg.visible=false;
			this.offlineTf.visible=false;
			Laya.timer.clear(this,this.setGrayhead);
			this.model.playerByPos(this.model.getChairPosByDir(this.dir)).canKick=false;
			this.stopCutDownOffline();
		}
	}

	__proto.startCutDownOffline=function(){
		EventCenter.instance.on("ON_LITTLETIMEER",this,this.onCutdown);
	}

	__proto.stopCutDownOffline=function(){
		EventCenter.instance.off("ON_LITTLETIMEER",this,this.onCutdown);
		this.offlineTf.visible=false;
	}

	__proto.onCutdown=function(){
		if(this.model.playerByPos(this.model.getChairPosByDir(this.dir))==null){
			return;
		}
		this.model.playerByPos(this.model.getChairPosByDir(this.dir)).offlineTime--;
		if(this.model.playerByPos(this.model.getChairPosByDir(this.dir)).offlineTime <=0){
			this.model.playerByPos(this.model.getChairPosByDir(this.dir)).offlineTime=0;
			this.stopCutDownOffline();
		}
		if(this.model.playerByPos(this.model.getChairPosByDir(this.dir)).offlineTime==NaN || this.model.playerByPos(this.model.getChairPosByDir(this.dir)).offlineTime==undefined){
			this.model.playerByPos(this.model.getChairPosByDir(this.dir)).offlineTime=0;
		}
		this.offlineTf.text=this.model.playerByPos(this.model.getChairPosByDir(this.dir)).offlineTime+"";
	}

	__proto.setGrayhead=function(){
		this.headImg.filters=[QuickUtils.grayscaleFilter];
		this.offlineimg.visible=true;
	}

	/***/
	__proto.playFlyHeadImg=function(fromDir){
		var tweenTime=500;
		switch(this.dir){
			case 0:
			switch(fromDir){
				case 1:
					Tween.from(this._skin,{x:946,y:150},tweenTime);
					break ;
				case 2:
					Tween.from(this._skin,{x:199,y:47},tweenTime);
					break ;
				case 3:
					Tween.from(this._skin,{x:12,y:150},tweenTime);
					break ;
				}
			break ;
			case 1:
			switch(fromDir){
				case 0:
					Tween.from(this._skin,{x:12,y:378},tweenTime);
					break ;
				case 2:
					Tween.from(this._skin,{x:202,y:46},tweenTime);
					break ;
				case 3:
					Tween.from(this._skin,{x:12,y:150},tweenTime);
					break ;
				}
			break ;
			case 2:
			switch(fromDir){
				case 0:
					Tween.from(this._skin,{x:-116,y:324},tweenTime);
					break ;
				case 1:
					Tween.from(this._skin,{x:820,y:96},tweenTime);
					break ;
				case 3:
					Tween.from(this._skin,{x:-116,y:96},tweenTime);
					break ;
				}
			break ;
			case 3:
			switch(fromDir){
				case 0:
					Tween.from(this._skin,{x:12,y:378},tweenTime);
					break ;
				case 1:
					Tween.from(this._skin,{x:946,y:150},tweenTime);
					break ;
				case 2:
					Tween.from(this._skin,{x:199,y:47},tweenTime);
					break ;
				}
			break ;
		}
	}

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'controller',function(){
		return GameModule.instance.gameContext.controller;
	});

	return BasePlayerInfoItem;
})()


//class modules.game.majiangGame.view.playerInfoPart.GiftEff
var GiftEff=(function(){
	var SingleForcer;
	function GiftEff(forcer){
		this.expressUrl="res/swfs/";
		this.loadedArr=[];
	}

	__class(GiftEff,'modules.game.majiangGame.view.playerInfoPart.GiftEff');
	var __proto=GiftEff.prototype;
	__proto.showGiftEff=function(fromDir,toDir,id){
		var mc=new MovieClip();
		mc.load(this.expressUrl+AppConfig.giftConfig[id-1].name+".swf",true);
		var sound=AppConfig.giftConfig[id-1].sound;
		var sounddelay=parseInt(AppConfig.giftConfig[id-1].sounddelay);
		if(this.loadedArr.indexOf(mc.basePath)!=-1){
			this.onLoaded(mc,fromDir,toDir,sound,sounddelay);
		}
		else{
			mc.on("loaded",this,this.onLoaded,[mc,fromDir,toDir,sound,sounddelay]);
		}
	}

	//
	__proto.onLoaded=function(mc,fromDir,toDir,sound,sounddelay){
		if(this.loadedArr.indexOf(mc.basePath)==-1){
			this.loadedArr.push(mc.basePath);
		}
		mc.stop();
		UIManager.instance.popLayer.addChild(mc);
		switch(fromDir){
			case 0:
				mc.x=-50;
				mc.y=318;
				break ;
			case 1:
				mc.x=880;
				mc.y=70;
				break ;
			case 2:
				mc.x=130;
				mc.y=-40;
				break ;
			case 3:
				mc.x=-50;
				mc.y=90;
				break ;
			default :
				mc.x=820;
				mc.y=-50;
				break ;
			};
		var tX=0,tY=0;
		switch(toDir){
			case 0:
				tX=-50;
				tY=318;
				break ;
			case 1:
				tX=880;
				tY=70;
				break ;
			case 2:
				tX=130;
				tY=-40;
				break ;
			case 3:
				tX=-50;
				tY=90;
				break ;
			default :
				tX=820;
				tY=-50;
				break ;
			}
		Tween.to(mc,{x:tX,y:tY},400,null,new Handler(this,this.onCompeteTween,[mc,sound,sounddelay]));
	}

	__proto.onCompeteTween=function(mc,sound,sounddelay){
		mc.playTo(0,mc.count-2,Handler.create(this,this.playEnd,[mc]));
		Laya.timer.once(3000,this,this.playEnd,[mc]);
		if(sounddelay==0){
			SoundPlay.playEffect(sound);
		}
		else{
			Laya.timer.once(sounddelay,this,this.playSound,[sound],false);
		}
	}

	__proto.playSound=function(sound){
		SoundPlay.playEffect(sound);
	}

	__proto.playEnd=function(mc){
		mc && mc.removeSelf();
	}

	__getset(1,GiftEff,'instance',function(){
		if(GiftEff._instance==null){
			GiftEff._instance=new GiftEff(new SingleForcer());
		}
		return GiftEff._instance;
	});

	GiftEff._instance=null;
	GiftEff.__init$=function(){
		//class SingleForcer
		SingleForcer=(function(){
			function SingleForcer(){}
			__class(SingleForcer,'');
			return SingleForcer;
		})()
	}

	return GiftEff;
})()


//class modules.game.majiangGame.view.playerInfoPart.PiaoSelePart
var PiaoSelePart=(function(){
	function PiaoSelePart(skin){
		this.needPiao=true;
		this.skin=null;
		this.curPiaoValue=0;
		this.piaoCheckBoxVec=__newvec(3,null);
		this.skin=skin;
		this.init();
	}

	__class(PiaoSelePart,'modules.game.majiangGame.view.playerInfoPart.PiaoSelePart');
	var __proto=PiaoSelePart.prototype;
	__proto.init=function(){
		var i=0,len=this.piaoCheckBoxVec.length;
		for(i=0;i<len;i++){
			this.piaoCheckBoxVec[i]=this.skin["piao"+i];
			this.piaoCheckBoxVec[i].on("click",this,this.onClickCheckBox,[i,i]);
		}
		this.seleIdx(0);
		this.hide();
	}

	__proto.onClickCheckBox=function(e,args){
		var idx=args;
		console.log("onClickCheckBox::"+args);
		this.seleIdx(idx);
	}

	__proto.seleIdx=function(idx){
		var i=0,len=this.piaoCheckBoxVec.length;
		for(i=0;i<len;i++){
			if(i==idx){
				this.piaoCheckBoxVec[i].selected=true;
			}
			else{
				this.piaoCheckBoxVec[i].selected=false;
			}
		}
		this.curPiaoValue=idx;
	}

	__proto.getCurPiaoValue=function(){
		return this.curPiaoValue;
	}

	__proto.reset=function(){
		this.seleIdx(0);
		if(UserData.roomtype==11){
			this.needPiao=true;
		}
		else{
			this.needPiao=false;
		}
	}

	__proto.show=function(){
		if(this.needPiao){
			this.skin.visible=true;
		}
		else{
			this.skin.visible=false;
		}
	}

	__proto.hide=function(){
		this.skin.visible=false;
	}

	return PiaoSelePart;
})()


//class modules.game.majiangGame.view.playerInfoPart.UserInfoPage
var UserInfoPage=(function(){
	var SingleForcer;
	function UserInfoPage(forcer){
		this.uid=0;
		this._skin=null;
		this._skin=new UserInfoUI();
		this._skin.giftList.itemRender=GiftItem;
		this._skin.giftList.spaceX=10;
		this._skin.giftList.selectEnable=true;
		this._skin.giftList.selectHandler=new Handler(this,this.onSelectRound);
		this._skin.giftList.renderHandler=new Handler(this,this.updateRoundItem);
		this._skin.giftList.dataSource=AppConfig.giftConfig;
		this._skin.giftList.refresh();
	}

	__class(UserInfoPage,'modules.game.majiangGame.view.playerInfoPart.UserInfoPage');
	var __proto=UserInfoPage.prototype;
	__proto.show=function(uid,ip,icon){
		this.uid=uid;
		this._skin.idTf.text="ID: "+uid;
		this._skin.nickName.text=GameModule.instance.gameContext.model.playerByUid(uid).nickname;
		this._skin.diamondTf.text=UserData.Diamond+"";
		QuickUtils.AddCenter(this._skin,UIManager.instance.popLayer);
		var photo=new Sprite();
		photo.loadImage(icon,0,0,this._skin.imgPhoto.width,this._skin.imgPhoto.height);
		this._skin.imgPhoto.addChild(photo);
		this._skin.mouseEnabled=true;
		this._skin.clickBg.once("click",this,this.onCloseUserInfo);
		this._skin.giftList.refresh();
		if(uid==UserData.uid){
			this._skin.diamond.visible=true;
			this._skin.diamondTf.visible=true;
		}
		else{
			this._skin.diamond.visible=false;
			this._skin.diamondTf.visible=false;
		}
	}

	__proto.onCloseUserInfo=function(e){
		if(this._skin && e.target==this._skin.clickBg){
			this._skin && this._skin.removeSelf();
		}
	}

	__proto.hide=function(){
		this._skin && this._skin.removeSelf();
	}

	__proto.onSelectRound=function(index){
		console.log("当前选择的索引："+index);
	}

	__proto.updateRoundItem=function(cell,index){
		cell.setData(cell.dataSource,this.uid);
	}

	__getset(1,UserInfoPage,'instance',function(){
		if(UserInfoPage._instance==null){
			UserInfoPage._instance=new UserInfoPage(new SingleForcer());
		}
		return UserInfoPage._instance;
	});

	UserInfoPage._instance=null;
	UserInfoPage.__init$=function(){
		//class SingleForcer
		SingleForcer=(function(){
			function SingleForcer(){}
			__class(SingleForcer,'');
			return SingleForcer;
		})()
	}

	return UserInfoPage;
})()


/**桌子相关信息*/
//class modules.game.majiangGame.view.TableInfoPage
var TableInfoPage=(function(){
	function TableInfoPage(skin){
		this._skin=null;
		this._PowerBarOrignalW=NaN;
		this._infosimbol=null;
		this._skin=skin;
		this._infosimbol=this._skin.infoSImg;
		this._infosimbol.visible=false;
		skin.mouseThrough=true;
		this._skin.option.on("click",this,this.onClickSetBtn);
		this._skin.scoreList.on("click",this,this.onClickScoreListBtn)
		this._skin.infoListBtn.on("click",this,this.onClickInfoListBtn);
		EventCenter.instance.on("COMMON_INFOLIST_NOTICE",this,this.onGotInfo);
	}

	__class(TableInfoPage,'modules.game.majiangGame.view.TableInfoPage');
	var __proto=TableInfoPage.prototype;
	__proto.playVoicePlay=function(){
		Laya.timer.frameLoop(1,this,this.onTimeLoop);
	}

	__proto.onTimeLoop=function(){
		if(this._skin.voicePlay.rotation%360==0){
			this._skin.voicePlay.rotation=0;
		}
		this._skin.voicePlay.rotation+=10;
	}

	__proto.stopVoicePlay=function(){
		Laya.timer.clear(this,this.onTimeLoop);
	}

	__proto.onGotInfo=function(info){
		this._infosimbol.visible=true;
	}

	__proto.updateRoomId=function(){
		if(Number(this._skin.roomNumTf.text)!=UserData.roomid){
			this._skin.roomNumTf.text=""+UserData.roomid;
		}
		this.updateTime();
	}

	__proto.onClickScoreListBtn=function(e){
		var getRecord={
			"uniqueCode":UserData.uniqueCode
		};
		console.log(UserData.roomid)
		EventCenter.instance.event("SOCKET_SEND",ProtoMessage.getProtoMessage(404,getRecord));
		SoundPlay.instance.playClickBtnSound();
		CommonModule.instance.commonContext.view.timeWarView.showOrHide();
		e.stopPropagation();
	}

	__proto.onClickSetBtn=function(e){
		e.stopPropagation();
		SoundPlay.instance.playClickBtnSound();
		CommonModule.instance.commonContext.view.functionOption.showOrHide(-350,0);
	}

	__proto.onClickInfoListBtn=function(e){
		this._infosimbol.visible=false;
		SoundPlay.instance.playClickBtnSound();
		CommonModule.instance.commonContext.view.infoListView.showOrHide();
		e.stopPropagation();
	}

	__proto.updateTime=function(){
		var date=TimeManager.instance.date;
		var hours=date.getHours();
		var mins=date.getMinutes();
		var fengquan="";
		if(this.model.fengquan==0){
			fengquan="东风圈";
		}
		else if(this.model.fengquan==1){
			fengquan="南风圈";
		}
		else if(this.model.fengquan==2){
			fengquan="西风圈";
		}
		else if(this.model.fengquan==3){
			fengquan="北风圈";
		}
		this._skin.fengquanTf.text=fengquan;
		this._skin.difenTf.text=""+1;
	}

	__proto.updateLeftRound=function(needTongbu){
		(needTongbu===void 0)&& (needTongbu=true);
		var info=this.model.majiangMsgs.ACK_RoomInfo;
		var rule=info.Rule;
		var obj=AppConfig.getRule(rule[1]);
		GameModule.instance.gameContext.view.majiangPage.clockPart.showLeftRoundsNum();
		if(obj.type==0){
			info.totalRound=obj.value;
			if(info.RoundCount+1 > obj.value){
				this._skin.leftTf.text="当前"+(info.RoundCount+"/"+obj.value)+"局";
			}
			else{
				this._skin.leftTf.text="当前"+(info.RoundCount+1+"/"+obj.value)+"局";
			}
			this._skin.ruleTimeTf.text="本局局数："+obj.value+"局";
		}
		else{
			this._skin.ruleTimeTf.text="本局时长："+obj.value+"分钟";
			if(this.model.isGameStart==true || info.RoundCount >=1){
				this.startCutdown();
			}
			else{
				info.leftTime=obj.value*60;
				this.stopCutDown();
			}
			if(needTongbu){
				UserData.leftTime=info.leftTime;
			}
			if(UserData.leftTime < 0){
				UserData.leftTime=0;
			}
			this._skin.leftTf.text=AppConfig.getTFmt(UserData.leftTime);
		}
		if(this.model.isGameStart==true || info.RoundCount >=1){
			this._skin.weikaishiBox.visible=false;
		}
		else{
			UserData.leftDissolveTime=info.disbandLeftTime;
			this._skin.leftDissolveTf.text=AppConfig.getTFmt(UserData.leftDissolveTime,true);
			this._skin.weikaishiBox.visible=true;
			this.startDissolveCutdown();
		}
	}

	__proto.updateKaijuren=function(nickName){
		if(nickName==null || nickName==""){
			nickName="无";
		}
		this._skin.kaijuTf.text="开局人："+nickName;
	}

	/**开始游戏之前开局倒计时*/
	__proto.startDissolveCutdown=function(){
		EventCenter.instance.on("ON_LITTLETIMEER",this,this.onCutDown1);
	}

	/**开始游戏之后开局倒计时*/
	__proto.stopDissolveCutdown=function(){
		EventCenter.instance.off("ON_LITTLETIMEER",this,this.onCutDown1);
	}

	__proto.onCutDown1=function(dat){
		UserData.leftDissolveTime-=dat;
		if(UserData.leftDissolveTime < 0){
			UserData.leftDissolveTime=0;
			this.stopDissolveCutdown();
		}
		this._skin.leftDissolveTf.text=AppConfig.getTFmt(UserData.leftDissolveTime,true);
	}

	/**时间倒计时*/
	__proto.startCutdown=function(){
		EventCenter.instance.on("ON_LITTLETIMEER",this,this.onCutDown);
	}

	/**停掉倒计时*/
	__proto.stopCutDown=function(){
		EventCenter.instance.off("ON_LITTLETIMEER",this,this.onCutDown);
	}

	__proto.onCutDown=function(dat){
		UserData.leftTime-=dat;
		if(UserData.leftTime < 0){
			UserData.leftTime=0;
			this.stopCutDown();
		}
		this._skin.leftTf.text=AppConfig.getTFmt(UserData.leftTime);
	}

	__proto.reset=function(){}
	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	return TableInfoPage;
})()


//class modules.game.GameModule extends rb.framework.mvc.Module
var GameModule=(function(_super){
	function GameModule(){
		//---Vars------------------------------------------------------------------------------------------------------------------------------------------------//
		this.needResize=true;
		this._main=null;
		this._majiangGameContext=null;
		this._mainContext=null;
		GameModule.__super.call(this);
	}

	__class(GameModule,'modules.game.GameModule',_super);
	var __proto=GameModule.prototype;
	__proto.startup=function(){
		if(this._mainContext==null){
			this._mainContext=new GameContext("GameMainmain",this);
			this._main=new GameMainContext("GameMain",this,this._mainContext);
			this._majiangGameContext=new MajiangGameContext("MajiangGame",this,this._main);
		}
		this.switchState(this._mainContext);
	}

	__proto.stopGame=function(gotoHall,needClear){
		(gotoHall===void 0)&& (gotoHall=true);
		(needClear===void 0)&& (needClear=false);
		if(needClear){
			this._majiangGameContext.controller.clear();
		}
		GameModule.inGame=false;
		GameModule.isSettlement=false;
		this.switchState(this._mainContext);
		if(gotoHall){
			if(AppConfig.isNewHall){
				QuickUtils.gotoHall()
				}else{
				this.inHallResize();
				HallModule.instance.gotoHall();
			}
		}
		HuAnimation.instance.noticeHide();
	}

	__proto.startGame=function(){
		if(GameModule.inGame==true){
			return;
		}
		HallModule.instance.goEmpty();
		GameModule.inGame=true;
		CommonModule.instance.gotoCommonContext();
		this.switchState(this.gameContext);
		this.inGameResize();
		WX.onMenuShareTimeline(UserData.nickname+"-一乐西周麻将 【房间号："+UserData.roomid+"】",UserData.roomid+"--"+UserData.uniqueCode);
		WX.onMenuShareAppMessage(UserData.nickname+"-一乐西周麻将 【房间号："+UserData.roomid+"】","房主创建了西周麻将 【房间号:"+UserData.roomid+"】"+AppConfig.getRule(UserData.Rule[1]).desc+"局",UserData.roomid+"--"+UserData.uniqueCode);
		console.log("startMajiangGame...........");
	}

	__proto.inGameResize=function(isFirst){
		(isFirst===void 0)&& (isFirst=true);
		if(QuickUtils.sysem()!="windows"){
			Laya.stage.screenMode="horizontal";
		}
		Laya.stage.size(1038,640);
		modules.game.GameModule.instance.gameContext.view.gui.visible=false;
		if(isFirst==true){
			Laya.timer.once(200,this,this.onCheckInGameResize);
		}
		else{
			Laya.timer.frameOnce(1,this,this.onCheckInGameResize);
		}
	}

	__proto.onCheckInGameResize=function(){
		if(ModuleDef.CurGameModule.inGame==true){
			var canvas=Browser.getElementById("layaCanvas");
			if(canvas.width < canvas.height){
				QuickUtils.showChScreenGuideView();
				this.inGameResize(false);
			}
			else{
				QuickUtils.hideChScreenGuideView();
				modules.game.GameModule.instance.gameContext.view.gui.visible=true;
			}
		}
		else{
			QuickUtils.hideChScreenGuideView();
		}
	}

	__proto.inHallResize=function(){
		if(QuickUtils.sysem()=="windows"){
			}else if(QuickUtils.sysem()=="ipad"||QuickUtils.sysem()=="mac"){
			Laya.stage.screenMode="vertical";
			}else{
			Laya.stage.screenMode="vertical";
		}
		Laya.stage.size(640,1038);
	}

	__getset(0,__proto,'main',function(){
		return this._main;
	});

	//---Protected Functions---------------------------------------------------------------------------------------------------------------------------------//
	__getset(0,__proto,'gameContext',function(){
		return this._majiangGameContext;
	});

	//---Static Functions------------------------------------------------------------------------------------------------------------------------------------//
	__getset(1,GameModule,'instance',function(){
		return ModuleDef.CurGameModule.instance;
	},rb.framework.mvc.Module._$SET_instance);

	GameModule.isPauseGameQueue=false;
	GameModule.inGame=false;
	GameModule.isSettlement=false;
	return GameModule;
})(Module)


//class modules.game.controller.MJGameSocketController extends rb.framework.mvc.AbstractLayer
var MJGameSocketController=(function(_super){
	//---Public Functions------------------------------------------------------------------------------------------------------------------------------------//
	function MJGameSocketController(){
		MJGameSocketController.__super.call(this);
	}

	__class(MJGameSocketController,'modules.game.controller.MJGameSocketController',_super);
	var __proto=MJGameSocketController.prototype;
	__proto.onAdd=function(){
		console.log("GameSocketController onAdd");
		if(UserData.isReplay){
			EventCenter.instance.on("REPLAY_getAllReplayMsgs",this,this.onGotAllReplayMsgs);
			EventCenter.instance.on("REPLAY_play",this,this.replay_play);
			EventCenter.instance.on("REPLAY_pause",this,this.replay_pause);
			EventCenter.instance.on("REPLAY_up",this,this.replay_up);
			EventCenter.instance.on("REPLAY_down",this,this.replay_down);
			EventCenter.instance.on("REPLAY_back",this,this.replay_back);
			EventCenter.instance.on("REPLAY_skip",this,this.replay_skip);
		}
		else{
			EventCenter.instance.on("MESSAGE_GAME",this,this.onMsg);
		}
	}

	__proto.onRemove=function(){
		if(UserData.isReplay){
			EventCenter.instance.off("REPLAY_getAllReplayMsgs",this,this.onGotAllReplayMsgs);
			EventCenter.instance.off("REPLAY_play",this,this.replay_play);
			EventCenter.instance.off("REPLAY_pause",this,this.replay_pause);
			EventCenter.instance.off("REPLAY_up",this,this.replay_up);
			EventCenter.instance.off("REPLAY_down",this,this.replay_down);
			EventCenter.instance.off("REPLAY_back",this,this.replay_back);
			EventCenter.instance.off("REPLAY_skip",this,this.replay_skip);
		}
		else{
			EventCenter.instance.off("MESSAGE_GAME",this,this.onMsg);
		}
	}

	/**播放*/
	__proto.replay_play=function(){
		this.model.replayState=1;
		this.onplay();
	}

	/**暂停*/
	__proto.replay_pause=function(){
		this.model.replayState=0;
	}

	/**上一步*/
	__proto.replay_up=function(){
		console.log("model.replayCurStep::"+this.model.replayCurStep);
		this.model.replayState=0;
		if(this.model.replayCurStep < this.model.preStepNum+1){
			return;
		}
		GameModule.instance.gameContext.view.replayup_reset();
		(this.model).replayReset();
		GameModule.instance.gameContext.controller.ACK_RoomInfo(this.model.majiangMsgs.ACK_RoomInfo);
		var data=this.model.replayAllStepData[this.model.replayCurStep-2];
		console.log("replayAllStepData[model.replayCurStep-2]");
		console.log(data);
		console.log("replayAllStepData[model.replayCurStep-2]");
		this.model.playerInfoVec=(data.userData).concat();
		GameModule.instance.gameContext.view.playerInfoPage.updatePlayerInfos(this.model.playerInfoVec);
		GameModule.instance.gameContext.controller.recoveryByReplayData(data);
		this.model.replayCurStep-=2;
		this.onplay();
	}

	/**下一步*/
	__proto.replay_down=function(){
		if(this.model.needCutdownReplay){
			return;
		}
		this.model.replayState=0;
		this.model.replayCurStep+=1;
		if(this.model.replayCurStep > this.model.replayData.length-1){
			return;
		}
		else if(this.model.replayCurStep==this.model.replayData.length-1){
			EventCenter.instance.event("REPLAY_over",null);
		}
		this.onMsg(this.model.replayData[this.model.replayCurStep]);
	}

	/**返回*/
	__proto.replay_back=function(){
		this.replay_pause();
		HuAnimation.instance.noticeHide();
		GameModule.instance.gameContext.controller.clearTimeDelay();
		TimeManager.instance.timer.clear(this,this.onplay);
		this.endGame();
	}

	__proto.endGame=function(){
		GameModule.instance.gameContext.controller.endGameGotoHall();
	}

	/**跳过重播，直接到回放界面*/
	__proto.replay_skip=function(){
		HuAnimation.instance.noticeHide();
		GameModule.instance.gameContext.controller.clearTimeDelay();
		GameModule.instance.gameContext.controller.contineGameQueue();
		this.model.isStrictShowCalc=true;
		this.model.replayState=1;
		this.model.replayCurStep=this.model.replayData.length-3;
		this.onplay();
	}

	__proto.onplay=function(){
		if(this.model.needCutdownReplay){
			TimeManager.instance.timer.once(1000,this,this.onplay);
			return;
		}
		this.model.replayCurStep+=1;
		if(this.model.replayCurStep > this.model.replayData.length-1){
			return;
		}
		else if(this.model.replayCurStep==this.model.replayData.length-1){
			EventCenter.instance.event("REPLAY_over",null);
		}
		this.onMsg(this.model.replayData[this.model.replayCurStep]);
		if(this.model.replayState==1){
			TimeManager.instance.timer.once(500,this,this.onplay);
		}
	}

	__proto.onGotAllReplayMsgs=function(data){
		this.model.replayData=[];
		this.model.replayCurStep=0;
		this.model.replayState=0;
		(this.model).replayAllStepData=[];
		UserData.replayUid=data.uid;
		var list=data.list;
		var i=0;
		var len=list.length;
		for(i=0;i<len;i++){
			this.model.replayData.push(this.processSingleReplayData(list[i]));
		}
		GameModule.instance.gameContext.controller.contineGameQueue();
		for(i=0;i<this.model.preStepNum;i++){
			this.model.replayCurStep=i;
			this.procMsg(this.model.replayData[this.model.replayCurStep]);
		}
		this.replay_play();
	}

	__proto.processSingleReplayData=function(tar){
		var obj=new Object();
		for(var key in tar.C){
			obj.messageId=parseInt(key);
			obj.body=tar.C[key];
		}
		return obj;
	}

	__proto.onMsg=function(msg){
		if(GameModule.isPauseGameQueue==true){
			return;
		}
		this.procMsg(msg);
	}

	__proto.procMsg=function(msg){
		if((msg instanceof net.Message )){
			msg.complete();
		}
		console.log("acc msgId::"+msg.messageId);
		var body;
		switch(msg.messageId){
			case 560:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Into_Room.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACKBC_Into_Room(body);
				break ;
			case 607:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Sitdown.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACKBC_Sitdown(body);
				break ;
			case 608:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Standup.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACKBC_Standup(body);
				break ;
			case 520:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACK_RoomInfo.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACK_RoomInfo(body);
				break ;
			case 525:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACK_Room_User.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACK_Room_User(body);
				break ;
			case 620:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Start.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACKBC_Start(body);
				break ;
			case 650:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACK_UserCard.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACK_UserCard(body);
				break ;
			case 615:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACK_User_SeatCard.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACK_User_SeatCard(body);
				break ;
			case 710:
				if(UserData.isReplay){
					body={};
					var arr=msg.body;
					body.Seat=arr[0];
					body.CID=arr[1];
					body.FromLast=arr[2];
					body.Type=[0,0,0,0];
					if(arr.length==5){
						body.Type=[arr[3],arr[4],0,0];
					}
				}
				else{
					body=AppConfig.proto.ACKBC_GetCard.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACKBC_GetCard(body);
				break ;
			case 720:
				if(UserData.isReplay){
					body={};
					var arr=msg.body;
					body.Seat=arr[0];
					body.CID=arr[1];
				}
				else{
					body=AppConfig.proto.ACKBC_PutCard.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACKBC_PutCard(body);
				break ;
			case 730:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACK_WaitTool.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACK_WaitTool(body);
				break ;
			case 740:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Chow.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACKBC_Chow(body);
				break ;
			case 750:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Peng.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACKBC_Peng(body);
				break ;
			case 760:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Kong.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACKBC_Kong(body);
				break ;
			case 600:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Ready.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACKBC_Ready(body);
				break ;
			case 580:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Exit_Room.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACKBC_Exit_Room(body);
				break ;
			case 900:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.NotifyStartGame.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.NotifyStartGame(body);
				break ;
			case 880:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_SendMsg.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.view.onRecChat(body);
				break ;
			case 770:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Win.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACKBC_Win(body);
				break ;
			case 780:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Draw.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACKBC_Draw(body);
				break ;
			case 610:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Card_Init.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACKBC_Card_Init(body);
				break ;
			case 790:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACKBC_Total.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACKBC_Total(body);
				break ;
			case 920:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.TotalSummary.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.NOTIFY_Summary(body);
				break ;
			case 800:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.AckDisband.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.AckDisband(body);
				break ;
			case 940:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.NotifyDisband.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.NotifyDisband(body);
				break ;
			case 960:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.NotifyUserState.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.NotifyUserState(body);
				break ;
			case 972:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.NotifyDestoryRoom.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.NotifyDestoryRoom(body);
				break ;
			case 971:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.NotifyKick.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.NotifyKick(body);
				break ;
			case 980:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.KickResponse.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.KickResponse(body);
				break ;
			case 992:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.ACK_TransferHuaResponse.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.ACK_TransferHuaResponse(body);
				break ;
			case 1000:
				if(UserData.isReplay){
					body=msg.body;
				}
				else{
					body=AppConfig.proto.MSG_ACK_Gift.decode(msg.params[0]);
				}
				GameModule.instance.gameContext.controller.MSG_ACK_Gift(body);
				break ;
			case 330:
				if(UserData.isReplay){
					body=msg.body;
					console.log("Message.Pass",body);
					GameModule.instance.gameContext.controller.pass(body);
				}
				break ;
			case "":
				break ;
			case "":
				break ;
			}
		if(UserData.isReplay){
			if(this.model.replayCurStep >=this.model.preStepNum-1){
				this.model.saveStepData();
			}
		}
	}

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model
	});

	return MJGameSocketController;
})(AbstractLayer)


//class modules.game.majiangGame.controller.MajiangGameController extends rb.framework.mvc.AbstractLayer
var MajiangGameController=(function(_super){
	function MajiangGameController(){
		//
		this.pop=null;
		this.dissolvePage=null;
		MajiangGameController.__super.call(this);
		this.setType(2);
	}

	__class(MajiangGameController,'modules.game.majiangGame.controller.MajiangGameController',_super);
	var __proto=MajiangGameController.prototype;
	//用来监听协议，从而刷新数据，并且通知界面更改
	__proto.onAdd=function(){
		_super.prototype.onAdd.call(this);
	}

	//移除监听
	__proto.onRemove=function(){
		_super.prototype.onRemove.call(this);
	}

	//出牌
	__proto.discard=function(cardIdx){
		var arrHu=this.model.getHuTipArr(cardIdx);
		var putCardObj={SID:UserData.SID,CID:cardIdx-1,Ting:arrHu.length};
		console.log("discard:::"+putCardObj);
		this.sendMsgCommond(ProtoMessage.getProtoMessage(270,putCardObj));
		if(AppConfig.autoPlay){
			return;
		}
		this.model.outputCard(this.model.selfChairPos,cardIdx);
		this.view.majiangPage.handPart.updateOnePosAllCards(this.model.selfChairPos,this.model.allCardsVec[this.model.selfChairPos]);
		this.view.majiangPage.handPart.updateTheFourteenCard(this.model.selfChairPos,this.model.theFourteenCardVec[this.model.selfChairPos]);
		this.view.majiangPage.outputPart.showOneCardByPos(this.model.selfChairPos,cardIdx);
		this.view.majiangPage.handPart.canControl(this.model.selfChairPos,false);
		this.view.majiangPage.handleBtns.reset();
		this.view.majiangPage.handPart.movePeng(this.model.selfChairPos,false);
		SoundPlay.playEffect("audio_card_out");
		SoundManager.playSound(SoundPlay.instance.getCardPath(this.model.playerByPos(this.model.selfChairPos).sex,cardIdx),1);
		this.model.isClientPrePop=true;
		this.model.isClientPrePopCard=cardIdx;
		this.model.isCancelTingp=false;
	}

	//**************************************************xiangshanmajiang
	__proto.ACKBC_Into_Room=function(info){
		console.log("ACKBC_Into_Room");
		console.log(info);
		console.log("ACKBC_Into_Room");
		this.model.majiangMsgs.ACKBC_Into_Room=info;
		UserData.roomid=info.RID;
		this.view.tableInfoPage.updateRoomId();
		info.nickname=info.Name;
		info.uid=info.UID;
		info.ip=info.IP;
		info.pos=info.Index;
		info.golds=info.Coin;
		this.model.updateOnePlayerInfo(info);
		this.view.playerInfoPage.updateOnePlayerInfo(info);
		this.view.playerInfoPage.updateSitDownUpBtn();
		EventCenter.instance.event("COMMON_INFOLIST_NOTICE",{color:0,msg:"玩家["+info.nickname+"]进入了房间！"});
	}

	/**
	*坐下
	*@param info
	*/
	__proto.ACKBC_Sitdown=function(info){
		if (this._actived){
			console.log("MSG_ACKBC_Sitdown",info);
			this.model.majiangMsgs.ACKBC_Sitdown=info;
			this.model.sitDown(info.uid,info.index,info.score);
			this.view.playerInfoPage.updatePlayerInfos(this.model.playerInfoVec);
			this.view.playerInfoPage.updateSitDownUpBtn();
			this.view.tableInfoPage.updateKaijuren(info.nickName);
			if(info.uid==UserData.selfuid){
				var readObj={sid:UserData.SID};
				this.sendMsgCommond(ProtoMessage.getProtoMessage(210,readObj));
				EventCenter.instance.event("COMMON_INFOLIST_NOTICE",{color:0,msg:"玩家["+this.model.getPlayerNicknameByUid(info.uid)+"]坐下了"+info.index+"号座位！"});
			}
			if(this.view.calculatePage.perPage){
				this.view.calculatePage.perPage.updateBtns();
			}
		}
	}

	/**
	*站起
	*@param info
	*/
	__proto.ACKBC_Standup=function(info){
		if (this._actived){
			console.log("MSG_ACKBC_Standup",info);
			this.model.majiangMsgs.ACKBC_Standup=info;
			this.model.standup(info.uid,info.index);
			this.view.playerInfoPage.updatePlayerInfos(this.model.playerInfoVec);
			this.view.playerInfoPage.updateSitDownUpBtn();
			this.view.playerInfoPage.updateStartBtn();
			this.view.tableInfoPage.updateKaijuren(info.nickName);
			if(this.view.calculatePage.perPage){
				this.view.calculatePage.perPage.updateBtns();
			}
			EventCenter.instance.event("COMMON_INFOLIST_NOTICE",{color:0,msg:"玩家["+this.model.getPlayerNicknameByUid(info.uid)+"]站起了！"});
		}
	}

	__proto.ACK_RoomInfo=function(info){
		console.log("ACK_Room_Info",info,"ACK_Room_Info");
		this.model.majiangMsgs.ACK_RoomInfo=info;
		UserData.uniqueCode=info.uniqueCode;
		UserData.roomtype=info.Type;
		UserData.Rule=info.Rule;
		if(UserData.isReplay){
			UserData.roomid=info.RID;
		}
		console.log(UserData.uniqueCode)
		if(info.gameState==1){
			this.model.isGameStart=true;
			this.view.playerInfoPage.hideBtnsByGameStart();
			this.view.playerInfoPage.hideReadySimbol();
		}
		if(UserData.isReplay){
			this.model.majiangMsgs.ACK_RoomInfo.isGameStart=1;
		}
		this.view.tableInfoPage.updateLeftRound();
		this.view.tableInfoPage.updateKaijuren(info.nickName);
		if(!info.direction){
			info.direction=0;
		}
		this.model.fengquan=info.direction;
		this.view.tableInfoPage.updateRoomId();
		this.view.majiangPage.clockPart.setWenli();
	}

	//todo
	__proto.ACK_Room_User=function(info){
		console.log("ACK_Room_User",info,"ACK_Room_User");
		this.model.majiangMsgs.ACK_Room_User=info;
		this.model.updatePlayerInfoVec(info.Users);
		this.view.playerInfoPage.updatePlayerInfos(this.model.playerInfoVec);
	}

	__proto.ACKBC_Start=function(info){
		if(this._actived){
			console.log("ACKBC_Start");
			console.log(info);
			console.log("ACKBC_Start");
			if(UserData.isReplay){
				if(info.zhuang_index==undefined){
					info.zhuang_index=0;
				}
				info.ZhuangIndex=info.zhuang_index;
				if(!info.direction){
					info.direction=0;
				}
				if(!info.rollIndex){
					info.rollIndex=0;
				}
				info.leftTime=info.left_time;
				if(!info.roundCount){
					info.roundCount=0;
				}
			}
			this.model.majiangMsgs.ACKBC_Start=info;
			this.resetSelf();
			this.model.isGameStart=true;
			this.model.majiangMsgs.control_game_mjstart_Info=info;
			this.model.zhuangpos=info.ZhuangIndex;
			this.model.fengquan=info.direction;
			this.view.startGame();
			this.view.playerInfoPage.hideReadySimbol();
			this.view.playerInfoPage.hideBtnsByGameStart();
			this.view.majiangPage.outputPart.showStartImg();
			this.view.tableInfoPage.updateRoomId();
			info.points=info.points !=undefined ? info.points :0;
			if(info.points !=0){
				this.pauseGameQueue();
				EventCenter.instance.once("GAME_START_SHAIZI_DONGFENG_COMP",this,this.onFirstShaiziComp);
				this.view.majiangPage.shaiziPart.play(info.rollIndex,info.points);
				SoundPlay.playEffect("dice");
			}
			else{
				this.view.majiangPage.clockPart.dingDongwei(this.model.zhuangpos,true);
			}
			if(UserData.isReplay){
				info.round_count=info.round_count !=undefined ? info.round_count :0;
				info.left_time=info.left_time !=undefined ? info.left_time :0;
				info.roundCount=info.round_count;
				info.leftTime=info.left_time;
			}
			this.model.majiangMsgs.ACK_RoomInfo.RoundCount=info.roundCount;
			this.model.majiangMsgs.ACK_RoomInfo.leftTime=info.leftTime;
			this.view.tableInfoPage.updateLeftRound();
		}
	}

	__proto.onFirstShaiziComp=function(){
		console.log("diyici ..................bobbo onFirstShaiziComp")
		this.view.playerInfoPage.showZhuang();
		this.view.majiangPage.clockPart.dingDongwei(this.model.zhuangpos);
		Laya.timer.once(1000,this,this.playEachShaiziEff);
	}

	/**播放每个人扔筛子的动画*/
	__proto.playEachShaiziEff=function(){
		var info=this.model.majiangMsgs.ACKBC_Start;
		var valueArr=this.model.getRandomFourValue();
		var users=info.Users;
		if(info.Users==undefined){
			return;
		};
		var i=0,len=users.length;
		for(i=0;i<len;i++){
			if(UserData.isReplay){
				users[i].Index=users[i].index !=undefined ? users[i].index :0;
				users[i].UID=users[i].uid !=undefined ? users[i].uid :0;
			}
			this.view.majiangPage.shaiziPart.play(this.model.getPlayerPosByUid(users[i].UID),valueArr[this.model.getshaiziIdxByPos(users[i].Index)]);
		}
		SoundPlay.playEffect("dice");
		Laya.timer.once(3000,this,this.onEachEffEnd);
	}

	__proto.onEachEffEnd=function(){
		this.model.updatePlayerInfoVec(this.model.majiangMsgs.ACKBC_Start.Users);
		this.view.playerInfoPage.updatePlayerInfos(this.model.playerInfoVec,true,true);
		this.view.playerInfoPage.showZhuang();
		this.view.majiangPage.clockPart.dingDongwei(this.model.zhuangpos,true);
		Laya.timer.once(1000,this,this.contineGameQueue);
	}

	/**发牌*/
	__proto.ACK_UserCard=function(info){
		if(this._actived){
			if(AppConfig.autoDestory){
				this.sendRandom();
			}
			console.log("ACK_UserCard");
			console.log(info);
			console.log("ACK_UserCard");
			this.model.majiangMsgs.ACK_UserCard=info;
			var selfCards=[];
			var i=0,len=info.Cards.length;
			for(i=0;i<len;i++){
				selfCards.push({card:info.Cards[i].CID});
			}
			this.model.updateAllCardsVecByGameStart(selfCards);
			this.view.majiangPage.handPart.updateAllCards(this.model.allCardsVec);
			this.view.majiangPage.clockPart.noticeShowLeftCardsNum();
		}
	}

	/**发牌*/
	__proto.ACK_User_SeatCard=function(info){
		if(this._actived){
			if(AppConfig.autoDestory){
				this.sendRandom();
			}
			this.model.isClientPrePop=false;
			console.log("ACK_User_SeatCard",info,"ACK_User_SeatCard");
			console.log(this.model.majiangMsgs.ACKBC_Start,"----------------------------------")
			this.model.majiangMsgs.ACK_User_SeatCard=info;
			this.model.resetCard();
			this.view.majiangPage.handPart.reset();
			this.view.majiangPage.pengGangPart.reset()
			this.view.majiangPage.huaPart.reset();
			this.view.majiangPage.outputPart.reset();
			var handleCards=[];
			var i=0;
			var cardIdx=0;
			var j=0,k=0;
			var chi;
			for(i=0;i<info.Cards.length;i++){
				handleCards.length=0;
				if(info.Cards[i].List.length !=info.Cards[i].ListLen){
					for(k=0;k<info.Cards[i].ListLen;k++){
						info.Cards[i].List.push({CID:-1});
					}
				}
				for(j=0;j<info.Cards[i].List.length;j++){
					if(UserData.isReplay){
						info.Cards[i].List[j].CID=info.Cards[i].List[j].cid;
						if(info.Cards[i].List[j].CID==undefined){
							info.Cards[i].List[j].CID=0;
						}
					}
					handleCards.push({card:info.Cards[i].List[j].CID+1});
				}
				this.model.updateAllCards(i,handleCards);
				this.view.majiangPage.handPart.updateOnePosAllCards(i,this.model.allCardsVec[i]);
				this.view.majiangPage.handPart.updateTheFourteenCard(i,this.model.theFourteenCardVec[i]);
				if(info.Cards[i].Hua){
					for(j=0;j<info.Cards[i].Hua.length;j++){
						if(UserData.isReplay){
							info.Cards[i].Hua[j].CID=info.Cards[i].Hua[j].cid;
							if(info.Cards[i].Hua[j].CID==undefined){
								info.Cards[i].Hua[j].CID=0;
							}
						}
						cardIdx=info.Cards[i].Hua[j].CID+1;
						this.model.huaVec[i].push(cardIdx);
						if(this.model.majiangMsgs.ACK_RoomInfo.gameState==0){
							this.view.majiangPage.showBuhua(cardIdx,i,true,false);
						}
						else{
							this.view.majiangPage.showBuhua(cardIdx,i,false,false,false);
						}
					}
					this.view.playerInfoPage.updateHua(i);
				}
				if(info.Cards[i].Chow){
					for(j=0;j<info.Cards[i].Chow.length;j+=3){
						chi=new MajiangChiData();
						for(k=0;k<3;k++){
							if(info.Cards[i].Chow[j+k].type==1){
								chi.chicard=info.Cards[i].Chow[j+k].CID+1;
							}
							else{
								chi.chicards.push(info.Cards[i].Chow[j+k].CID+1);
							}
						}
						this.model.updateChiVec(i,chi.chicard,chi.chicards,(this.model.chairNum+i-1)%this.model.chairNum);
						this.view.majiangPage.pengGangPart.chi(chi,i);
					}
				}
				if(info.Cards[i].Peng){
					for(j=0;j<info.Cards[i].Peng.length;j++){
						this.model.updatePengVec(i,info.Cards[i].Peng[j].CID+1,info.Cards[i].Peng[j].TIndex);
						this.view.majiangPage.pengGangPart.peng(info.Cards[i].Peng[j].CID+1,i,info.Cards[i].Peng[j].TIndex);
					}
				}
				if(info.Cards[i].Kong){
					for(j=0;j<info.Cards[i].Kong.length;j++){
						if(info.Cards[i].Kong[j].type==2){
							this.model.updateGangVec(i,info.Cards[i].Kong[j].CID+1,0,info.Cards[i].Kong[j].TIndex,info.Cards[i].Kong[j]);
							this.view.majiangPage.pengGangPart.gang(info.Cards[i].Kong[j].CID+1,i,0,info.Cards[i].Kong[j].TIndex);
						}
						else if(info.Cards[i].Kong[j].type==1){
							this.model.updateGangVec(i,info.Cards[i].Kong[j].CID+1,1,info.Cards[i].Kong[j].TIndex);
							this.view.majiangPage.pengGangPart.gang(info.Cards[i].Kong[j].CID+1,i,1,info.Cards[i].Kong[j].TIndex);
						}
						else if(info.Cards[i].Kong[j].type==0){
							this.model.updateGangVec(i,info.Cards[i].Kong[j].CID+1,2,info.Cards[i].Kong[j].TIndex);
							this.view.majiangPage.pengGangPart.gang(info.Cards[i].Kong[j].CID+1,i,2,info.Cards[i].Kong[j].TIndex);
						}
					}
				}
				if(info.Cards[i].Out){
					for(j=0;j<info.Cards[i].Out.length;j++){
						this.model.outputCardsVec[i].push(info.Cards[i].Out[j].CID+1);
						this.view.majiangPage.outputPart.showOneCardByPos(i,info.Cards[i].Out[j].CID+1,false,false);
					}
				}
				if(this.model.theFourteenCardVec[i] !=-1 && UserData.isReplay==false){
					if(this.model.getPengGangNum(i)< 4){
						this.seatPingBi(i,info);
					}
					else{
						this.view.majiangPage.handPart.canControl(i,true);
					}
				}
			}
			if(this.model.majiangMsgs.ACKBC_Card_Init && this.model.majiangMsgs.ACKBC_Card_Init.show && UserData.isReplay==false){
				this.view.majiangPage.outputPart.showCurSimbolByPos(this.model.majiangMsgs.ACKBC_Card_Init.lastPutIndex);
			}
			this.view.majiangPage.clockPart.noticeShowLeftCardsNum();
			this.model.isGameStart=true;
			this.view.playerInfoPage.hideBtnsByGameStart();
		}
	}

	__proto.seatPingBi=function(i,info){
		this.view.majiangPage.handPart.canControl(i,true,[info.Cards[i].lastCardId+1]);
	}

	/**别人摸牌*/
	__proto.ACKBC_GetCard=function(info){
		if(this._actived){
			if(AppConfig.autoDestory){
				this.sendRandom();
			}
			this.view.majiangPage.handleBtns.hide();
			this.view.majiangPage.outputPart.hideTemp();
			console.log("ACKBC_GetCard",info,"ACKBC_GetCard");
			this.model.majiangMsgs.ACKBC_GetCard=info;
			this.model.leftDesktopCardsNum-=1;
			var cardIdx=info.CID+1;
			info.pos=info.Seat;
			if(this.model.judgeHua(cardIdx)==true){
				this.pauseGameQueue();
				Laya.timer.once(600,this,this.buHuaDelay,[info,cardIdx]);
				return;
			}
			this.model.theFourteenCardVec[info.pos]=cardIdx;
			if(this.model.allCardsVec[info.pos].length%3==0){
				return;
			}
			this.view.majiangPage.handPart.updateTheFourteenCard(info.pos,this.model.theFourteenCardVec[info.pos]);
			this.view.majiangPage.handPart.canControl(info.pos,true);
			this.view.majiangPage.clockPart.noticeShowClock(info.pos,10);
			this.view.majiangPage.clockPart.noticeShowLeftCardsNum();
			if(info.pos==this.model.selfChairPos && this.model.isSelfSitDown){
				if(!info.Type){
					return;
				}
				if(info.Type[0] || info.Type[1] || info.Type[2] || info.Type[3]){
					this.view.majiangPage.handleBtns.showBtnList(info.Type);
					return;
				}
			}
			if(AppConfig.autoPlay && info.pos==this.model.selfChairPos && this.model.isSelfSitDown){
				if(this.model.judgeHu(this.model.allCardsVec[info.pos].concat(this.model.theFourteenCardVec[info.pos]))==true){
				}
				console.log("不可以胡 model.isSelfSitDown：："+this.model.isSelfSitDown+"  model.selfChairPos::"+this.model.selfChairPos);
				Laya.timer.once(80,this,this.autoDiscard);
			}
		}
	}

	__proto.autoDiscard=function(){
		var cardIdx=this.model.getUseless();
		console.log("来自机器人自动出牌：：："+cardIdx);
		this.discard(cardIdx);
		if(AppConfig.autoDestory){
			this.sendRandom();
		}
	}

	__proto.buHuaDelay=function(info,cardIdx){
		this.view.majiangPage.clockPart.noticeShowLeftCardsNum();
		this.model.huaVec[info.pos].push(cardIdx);
		this.view.majiangPage.showBuhua(cardIdx,info.pos,true,true);
		this.view.playerInfoPage.updateHua(info.pos);
		Laya.timer.once(800,this,this.contineGameQueue);
	}

	/**出牌*/
	__proto.ACKBC_PutCard=function(info){
		if(this._actived){
			if(AppConfig.autoDestory){
				this.sendRandom();
			}
			console.log("ACKBC_PutCard");
			console.log(info);
			console.log("ACKBC_PutCard");
			this.model.majiangMsgs.ACKBC_PutCard=info;
			info.pos=info.Seat;
			info.card=info.CID+1;
			if(info.pos==this.model.selfChairPos){
				if(this.model.isClientPrePop==true){
					this.model.isClientPrePop=false;
					return;
				}
			}
			this.model.outputCard(info.pos,info.card);
			this.view.majiangPage.handPart.updateOnePosAllCards(info.pos,this.model.allCardsVec[info.pos]);
			this.view.majiangPage.handPart.updateTheFourteenCard(info.pos,this.model.theFourteenCardVec[info.pos]);
			this.view.majiangPage.outputPart.showOneCardByPos(info.pos,info.card);
			this.view.majiangPage.handPart.canControl(info.pos,false);
			if(this.model.isSelfSitDown && info.pos==this.model.selfChairPos){
			}
			if(UserData.isReplay){
				this.view.majiangPage.handleBtns.reset();
			}
			else{
				if(info.pos==this.model.selfChairPos){
					this.view.majiangPage.handleBtns.reset();
				}
			}
			this.view.majiangPage.handPart.movePeng(info.pos,false);
			SoundPlay.playEffect("audio_card_out");
			SoundManager.playSound(SoundPlay.instance.getCardPath(this.model.playerByPos(info.pos).sex,info.card),1);
		}
	}

	/**玩家操作通知*/
	__proto.ACK_WaitTool=function(info){
		if(this._actived){
			if(AppConfig.autoDestory){
				this.sendRandom();
			}
			if(info.Seat==undefined){
				info.Seat=0;
			}
			if(info.Type==undefined){
				info.Type=[0,0,0,0]
			}
			if(info.TimeOut==undefined){
				info.TimeOut=10;
			}
			console.log("ACK_WaitCheckTool");
			console.log(info);
			console.log("ACK_WaitCheckTool");
			this.model.majiangMsgs.ACK_WaitTool=info;
			if(info.Seat==this.model.selfChairPos){
				var pos=info.Seat;
				this.view.majiangPage.handleBtns.showBtnList();
				this.view.majiangPage.clockPart.noticeShowClock(pos,info.TimeOut);
			}
			console.log("通知操作！！！！");
		}
	}

	/**通知玩家吃牌*/
	__proto.ACKBC_Chow=function(info){
		if(this.actived){
			if(AppConfig.autoDestory){
				this.sendRandom();
			}
			console.log("ACKBC_Chow::"+info);
			this.view.majiangPage.outputPart.hideTemp();
			this.model.majiangMsgs.ACKBC_Chow=info;
			if(info.CID1==undefined){
				info.CID1=0;
			}
			if(info.CID2==undefined){
				info.CID2=0;
			}
			if(info.CID3==undefined){
				info.CID3=0;
			}
			if(info.Seat==undefined){
				info.Seat=0;
			}
			if(info.TSeat==undefined){
				info.TSeat=(this.model.chairNum+info.Seat-1)%this.model.chairNum;
			}
			info.pos=info.Seat;
			info.chicard=info.CID1+1;
			info.chicards=[info.CID2+1,info.CID3+1];
			this.model.updateChiVec(info.pos,info.chicard,info.chicards,info.TSeat);
			this.model.cutChiCard(info.pos,info.chicards);
			var chiData=new MajiangChiData();
			chiData.chicard=info.chicard;
			chiData.chicards=info.chicards;
			this.view.majiangPage.pengGangPart.chi(chiData,info.pos);
			this.view.majiangPage.outputPart.noticeHasPengGang();
			this.view.majiangPage.handPart.updateOnePosAllCards(info.pos,this.model.allCardsVec[info.pos]);
			var chengbaoNum=this.model.getChengbaoNumRefNum(info.pos,(this.model.chairNum+info.pos-1)%this.model.chairNum);
			if(chengbaoNum <3 && this.model.getPengGangNum(info.pos)<4){
				this.pingbiChi(info);
			}
			else{
				this.view.majiangPage.handPart.canControl(info.pos,true);
			}
			this.popChengbaoMsg(chengbaoNum,(this.model.chairNum+info.pos-1)%this.model.chairNum,info.pos);
			this.view.majiangPage.clockPart.noticeShowClock(info.pos,10);
			this.view.majiangPage.showEffByPos(info.pos,4);
			this.view.majiangPage.handPart.movePeng(info.pos,true);
			this.view.majiangPage.handleBtns.reset();
			SoundManager.playSound(SoundPlay.instance.getCardPath(this.model.playerByPos(info.pos).sex,"chi"),1);
			if(AppConfig.autoPlay && info.pos==this.model.selfChairPos && this.model.isSelfSitDown){
				Laya.timer.once(80,this,this.autoDiscard);
			}
		}
	}

	__proto.pingbiChi=function(info){
		this.view.majiangPage.handPart.canControl(info.pos,true,[info.chicard]);
	}

	__proto.popChengbaoMsg=function(num,from,to){
		if(num<2 || num >3){
			return;
		};
		var str="";
		if(num==2){
			str="["+this.model.playerByPos(from).nickname+"]请注意，你已经被["+this.model.playerByPos(to).nickname+"]吃（碰、杠）了两口！";
		}
		else if(num==3){
			str="["+this.model.playerByPos(from).nickname+"]请注意，你已经跟["+this.model.playerByPos(to).nickname+"]做生意了！"
		}
		QuickUtils.popMessage(str);
	}

	/**通知玩家碰牌*/
	__proto.ACKBC_Peng=function(info){
		if(this.actived){
			if(AppConfig.autoDestory){
				this.sendRandom();
			}
			console.log("ACKBC_Peng");
			console.log(info);
			console.log("ACKBC_Peng");
			this.view.majiangPage.outputPart.hideTemp();
			this.model.majiangMsgs.ACKBC_Peng=info;
			info.Seat=info.Seat !=undefined ? info.Seat :0;
			info.TSeat=info.TSeat !=undefined ? info.TSeat :0;
			info.CID=info.CID !=undefined ? info.CID :0;
			info.pos=info.Seat;
			info.card=info.CID+1;
			if(info.CID==-1){
				alert("碰的牌为-1");
			}
			if(this.model.pengVec[info.pos].indexOf(info.card)!=-1){
				return;
			}
			this.model.updatePengVec(info.pos,info.card,info.TSeat);
			this.model.cutPengCard(info.pos,info.card);
			this.view.majiangPage.pengGangPart.peng(info.card,info.pos,info.TSeat);
			this.view.majiangPage.outputPart.noticeHasPengGang();
			this.view.majiangPage.chiSelePage.hide();
			this.view.majiangPage.handPart.updateOnePosAllCards(info.pos,this.model.allCardsVec[info.pos]);
			if(this.model.getChengbaoNumRefNum(info.pos,info.TSeat)<3 && this.model.getPengGangNum(info.pos)<4){
				this.view.majiangPage.handPart.canControl(info.pos,true,[info.card]);
			}
			else{
				this.view.majiangPage.handPart.canControl(info.pos,true);
			}
			this.popChengbaoMsg(this.model.getChengbaoNumRefNum(info.pos,info.TSeat),info.TSeat,info.pos);
			this.view.majiangPage.clockPart.noticeShowClock(info.pos,10);
			this.view.majiangPage.handleBtns.reset();
			this.view.majiangPage.showEffByPos(info.pos,0);
			this.view.majiangPage.handPart.movePeng(info.pos,true);
			SoundManager.playSound(SoundPlay.instance.getCardPath(this.model.playerByPos(info.pos).sex,"peng"),1);
			if(AppConfig.autoPlay && info.pos==this.model.selfChairPos && this.model.isSelfSitDown){
				Laya.timer.once(80,this,this.autoDiscard);
			}
		}
	}

	/**通知玩家杠*/
	__proto.ACKBC_Kong=function(info){
		if(this.actived){
			if(AppConfig.autoDestory){
				this.sendRandom();
			}
			console.log("ACKBC_Kong",info,"ACKBC_Kong");
			this.view.majiangPage.outputPart.hideTemp();
			this.model.majiangMsgs.ACKBC_Kong=info;
			info.Seat=info.Seat !=undefined ? info.Seat :0;
			info.TSeat=info.TSeat !=undefined ? info.TSeat :0;
			info.KongType=info.KongType !=undefined ? info.KongType :0;
			info.CID=info.CID !=undefined ? info.CID :0;
			info.pos=info.Seat;
			switch(info.KongType){
				case 80:
					info.type=0;
					break ;
				case 70:
					info.type=1;
					break ;
				case 60:
					info.type=2;
					break ;
				}
			info.card=info.CID+1;
			info.nMoneryOp=[];
			this.view.majiangPage.chiSelePage.hide();
			var have=this.model.updateGangVec(info.pos,info.card,info.type,info.TSeat,info);
			this.model.cutGangCard(info.pos,info.card,info.type);
			this.view.majiangPage.pengGangPart.gang(info.card,info.pos,info.type,info.TSeat);
			if(info.type !=0){
				this.popChengbaoMsg(this.model.getChengbaoNumRefNum(info.pos,info.TSeat),info.TSeat,info.pos);
			}
			if(info.type==2){
				this.view.majiangPage.outputPart.noticeHasPengGang();
			}
			this.view.majiangPage.handPart.updateOnePosAllCards(info.pos,this.model.allCardsVec[info.pos]);
			this.view.majiangPage.handPart.updateTheFourteenCard(info.pos,this.model.theFourteenCardVec[info.pos]);
			this.view.majiangPage.handPart.movePeng(info.pos,false);
			this.view.majiangPage.showEffByPos(info.pos,1);
			this.view.majiangPage.handleBtns.reset();
			SoundManager.playSound(SoundPlay.instance.getCardPath(this.model.playerByPos(info.pos).sex,"gang"),1);
		}
	}

	__proto.ACKBC_Ready=function(info){
		if(this.actived){
			console.log("ACKBC_Ready");
			console.log(info);
			console.log("ACKBC_Ready");
			if(this.model.isGameStart==true){
				return;
			}
			SoundPlay.instance.playReadySound();
			this.model.majiangMsgs.ACKBC_Ready=info;
			info.uid=info.UID;
			info.pos=this.model.getPlayerPosByUid(info.uid);
			this.model.updateReadyState(info.pos,true,0);
			this.view.playerInfoPage.updatePlayerInfos(this.model.playerInfoVec,false);
			if(info.pos==this.model.selfChairPos){
				this.view.playerInfoPage.hideReadyBtn();
				this.view.playerInfoPage.hideZhuang();
				console.log("ready..........");
				this.view.calculatePage.reset();
				this.view.calculatePage.reset();
				this.model.reset();
				this.view.majiangPage.reset();
			}
		}
	}

	/**离开房间*/
	__proto.ACKBC_Exit_Room=function(info){
		if(this.actived){
			console.log("ACKBC_Exit_Room");
			console.log(info);
			console.log("ACKBC_Exit_Room");
			this.model.majiangMsgs.ACKBC_Exit_Room=info;
			info.uid=info.UID;
			if(info.uid==UserData.selfuid){
				if(AppConfig.isNewHall){
					QuickUtils.gotoHall();
				}
				else{
					this.endGameGotoHall(true);
				}
				return;
			}
			else{
				EventCenter.instance.event("COMMON_INFOLIST_NOTICE",{color:1,msg:"玩家["+this.model.getPlayerNicknameByUid(info.uid)+"]离开了房间！"});
				var pos=this.model.getPlayerPosByUid(info.uid);
				this.model.leavePlayer(info.uid);
				if(pos !=-1){
					this.view.playerInfoPage.updatePlayerInfos(this.model.playerInfoVec);
					this.view.playerInfoPage.showStartBtn(false);
				}
			}
			if(this.model.isGameStart || this.model.majiangMsgs.ACK_RoomInfo.RoundCount !=0){
				this.view.playerInfoPage.showZhuang();
			}
		}
	}

	/**通知第一个坐下的人*/
	__proto.NotifyStartGame=function(info){
		if(this.actived){
			console.log("NotifyStartGame::"+info+"NotifyStartGame");
			this.model.majiangMsgs.NotifyStartGame=info;
			if(info.uid==UserData.selfuid){
				this.view.playerInfoPage.showStartBtn();
			}
		}
	}

	/**有人胡了*/
	__proto.ACKBC_Win=function(info){
		if(this.actived){
			this.view.majiangPage.outputPart.hideTemp();
			console.log("ACKBC_Win::" ,info ,"ACKBC_Win");
			info.Seat=info.Seat !=undefined ? info.Seat :[];
			info.TSeat=info.TSeat !=undefined ? info.TSeat :0;
			info.CID=info.CID !=undefined ? info.CID :0;
			info.Cards=info.Cards !=undefined ? info.Cards :[];
			this.model.majiangMsgs.ACKBC_Win=info;
			this.view.majiangPage.handleBtns.hide();
			this.model.isHu=true;
			this.model.isLiu=false;
			this.gameOverDownCards(info);
			var huArr=info.Seat;
			this.model.huArr=huArr.concat();
			if(UserData.isReplay && this.model.isStrictShowCalc==true){
				return;
			}
			this.pauseGameQueue();
			var isSelfHu=false;
			var i=0;
			var huType=0;
			if(info.TSeat !=-1){
				var cardIdx=info.CID+1;
				if(cardIdx !=this.view.majiangPage.outputPart.getCurOutputCardIdx()){
					this.view.majiangPage.pengGangPart.showHuAni(info.TSeat,cardIdx);
				}
				else{
					this.view.majiangPage.showDianPaoHuAni();
					this.view.majiangPage.showEffByPos(info.TSeat,5);
					huType=1;
				}
			}
			for(i=0;i<huArr.length;i++){
				if(huArr[i]==this.model.selfChairPos){
					isSelfHu=true;
				}
				if(huType==1){
					this.view.majiangPage.showEffByPos(huArr[i],2);
				}
				else{
					this.view.majiangPage.showEffByPos(huArr[i],6);
				}
				if(info.TSeat==-1){
					this.view.majiangPage.showZimoAni(huArr[i]);
					try{
						SoundManager.playSound(SoundPlay.instance.getCardPath(this.model.playerByPos(huArr[i]).sex,"zimo"),1);
					}catch(e){}
				}
				else{
					try{
						SoundManager.playSound(SoundPlay.instance.getCardPath(this.model.playerByPos(huArr[i]).sex,"hu"),1);
					}catch(e){}
				}
			};
			var effStr;
			if(isSelfHu==true){
				effStr="js_win";
			}
			else{
				effStr="js_fail";
			}
			SoundPlay.playEffect(effStr);
			Laya.timer.once(2000,this,this.contineGameQueue);
		}
	}

	/**流局了*/
	__proto.ACKBC_Draw=function(info){
		if(this.actived){
			console.log("ACKBC_Draw::" ,info ,"ACKBC_Draw------------------------------------");
			this.view.majiangPage.outputPart.hideTemp();
			this.model.majiangMsgs.ACKBC_Draw=info;
			if(UserData.isReplay){
				info.RID=info.RID !=undefined ? info.RID :0;
				info.Cards=info.Cards !=undefined ? info.Cards :[];
			}
			this.view.majiangPage.handleBtns.hide();
			this.model.isHu=true;
			this.model.isLiu=true;
			this.gameOverDownCards(info);
			if(UserData.isReplay && this.model.isStrictShowCalc==true){
				return;
			};
			var effStr="audio_liuju";
			SoundPlay.playEffect(effStr);
			this.pauseGameQueue();
			Laya.timer.once(4000,this,this.contineGameQueue);
		}
	}

	/**胡牌和流局了倒下牌都走这里*/
	__proto.gameOverDownCards=function(info){
		this.view.majiangPage.handleBtns.hide();
		this.model.isHu=true;
		var handleCards=[];
		var i=0,j=0,k=0;
		var cardIdx=0;
		var chi;
		if(UserData.isReplay){
			var len=this.model.chairNum;
			for(i=0;i<len;i++){
				this.model.huaVec[i].length=0;
				this.model.chiVec[i].length=0;
				this.model.chiFromVec[i].length=0;
				this.model.pengVec[i].length=0;
				this.model.pengFromVec[i].length=0;
				this.model.mingGangVec[i].length=0;
				this.model.mingGangFromVec[i].length=0;
				this.model.anGangVec[i].length=0;
				this.model.anGangFromVec[i].length=0;
			}
			this.view.majiangPage.pengGangPart.reset();
			this.view.majiangPage.huaPart.reset();
		}
		for(i=0;i<info.Cards.length;i++){
			handleCards.length=0;
			if(info.Cards[i].List.length !=info.Cards[i].ListLen){
				for(k=0;k<info.Cards[i].ListLen;k++){
					info.Cards[i].List.push({CID:-1});
				}
			}
			for(j=0;j<info.Cards[i].List.length;j++){
				if(UserData.isReplay){
					if(info.Cards[i].List[j].cid==undefined){
						info.Cards[i].List[j].cid;
					}
					info.Cards[i].List[j].CID=info.Cards[i].List[j].cid;
				}
				handleCards.push({card:info.Cards[i].List[j].CID+1});
			}
			this.model.updateAllCards(i,handleCards);
			this.view.majiangPage.handPart.updateOnePosAllCards(i,this.model.allCardsVec[i]);
			this.view.majiangPage.handPart.updateTheFourteenCard(i,this.model.theFourteenCardVec[i]);
			if(UserData.isReplay){
				if(info.Cards[i].Hua){
					for(j=0;j<info.Cards[i].Hua.length;j++){
						if(UserData.isReplay){
							info.Cards[i].Hua[j].CID=info.Cards[i].Hua[j].cid;
							if(info.Cards[i].Hua[j].CID==undefined){
								info.Cards[i].Hua[j].CID=0;
							}
						}
						cardIdx=info.Cards[i].Hua[j].CID+1;
						this.model.huaVec[i].push(cardIdx);
						if(this.model.majiangMsgs.ACK_RoomInfo.gameState==0){
							this.view.majiangPage.showBuhua(cardIdx,i,true,false);
						}
						else{
							this.view.majiangPage.showBuhua(cardIdx,i,false,false,false);
						}
					}
					this.view.playerInfoPage.updateHua(i);
				}
				if(info.Cards[i].Chow){
					for(j=0;j<info.Cards[i].Chow.length;j+=3){
						chi=new MajiangChiData();
						for(k=0;k<3;k++){
							info.Cards[i].Chow[j+k].CID=info.Cards[i].Chow[j+k].cid !=undefined ? info.Cards[i].Chow[j+k].cid :0;
							if(info.Cards[i].Chow[j+k].type==1){
								chi.chicard=info.Cards[i].Chow[j+k].CID+1;
							}
							else{
								chi.chicards.push(info.Cards[i].Chow[j+k].CID+1);
							}
						}
						this.model.updateChiVec(i,chi.chicard,chi.chicards,(this.model.chairNum+i-1)%this.model.chairNum);
						this.view.majiangPage.pengGangPart.chi(chi,i);
					}
				}
				if(info.Cards[i].Peng){
					for(j=0;j<info.Cards[i].Peng.length;j++){
						info.Cards[i].Peng[j].CID=info.Cards[i].Peng[j].cid !=undefined ? info.Cards[i].Peng[j].cid :0;
						info.Cards[i].Peng[j].TIndex=info.Cards[i].Peng[j].target_index !=undefined ? info.Cards[i].Peng[j].target_index :0;
						this.model.updatePengVec(i,info.Cards[i].Peng[j].CID+1,info.Cards[i].Peng[j].TIndex);
						this.view.majiangPage.pengGangPart.peng(info.Cards[i].Peng[j].CID+1,i,info.Cards[i].Peng[j].TIndex);
					}
				}
				if(info.Cards[i].Kong){
					for(j=0;j<info.Cards[i].Kong.length;j++){
						info.Cards[i].Kong[j].CID=info.Cards[i].Kong[j].cid !=undefined ? info.Cards[i].Kong[j].cid :0;
						info.Cards[i].Kong[j].type=info.Cards[i].Kong[j].type !=undefined ? info.Cards[i].Kong[j].type :0;
						info.Cards[i].Kong[j].TIndex=info.Cards[i].Kong[j].target_index !=undefined ? info.Cards[i].Kong[j].target_index :0;
						if(info.Cards[i].Kong[j].type==2){
							this.model.updateGangVec(i,info.Cards[i].Kong[j].CID+1,0,info.Cards[i].Kong[j].TIndex,info.Cards[i].Kong[j]);
							this.view.majiangPage.pengGangPart.gang(info.Cards[i].Kong[j].CID+1,i,0,info.Cards[i].Kong[j].TIndex);
						}
						else if(info.Cards[i].Kong[j].type==1){
							this.model.updateGangVec(i,info.Cards[i].Kong[j].CID+1,1,info.Cards[i].Kong[j].TIndex);
							this.view.majiangPage.pengGangPart.gang(info.Cards[i].Kong[j].CID+1,i,1,info.Cards[i].Kong[j].TIndex);
						}
						else if(info.Cards[i].Kong[j].type==0){
							this.model.updateGangVec(i,info.Cards[i].Kong[j].CID+1,2,info.Cards[i].Kong[j].TIndex);
							this.view.majiangPage.pengGangPart.gang(info.Cards[i].Kong[j].CID+1,i,2,info.Cards[i].Kong[j].TIndex);
						}
					}
				}
			}
		}
	}

	/**显示结算界面*/
	__proto.ACKBC_Total=function(info){
		if(this.actived){
			console.log("ACKBC_Total::" ,info ,"ACKBC_Total");
			this.model.majiangMsgs.ACKBC_Total=info;
			if(UserData.isReplay){
				info.WinSeat=info.WinSeat !=undefined ? info.WinSeat :0;
				info.WinCard=info.WinCard !=undefined ? info.WinCard :0;
				info.round_count=info.round_count !=undefined ? info.round_count :0;
				info.RoundCount=info.round_count;
			}
			this.model.majiangMsgs.ACK_RoomInfo.RoundCount=info.RoundCount;
			this.view.tableInfoPage.updateLeftRound(false);
			if(info.attached){
				var attachInfo=JSON.parse(info.attached);
				if(attachInfo){
					this.view.majiangPage.pengGangPart.setChengbaoGang(parseInt(attachInfo.cid)+1,attachInfo.index);
				}
			}
			this.view.playerInfoPage.updateSitDownUpBtn(false);
			var t=QuickUtils.getLocalVar("hasConcern",0);
			if(t==0){
				QuickUtils.setLocalVar("hasConcern",1);
				CommonModule.instance.commonContext.view.showNotice(
				"       微信搜索公众号<span style='color:#f6d368;'> "+AppConfig.nameTitle+"麻将  </span>关注后即可获得更多福利哦！<br />",this,this.showCalculate);
			}
			else{
				this.showCalculate();
			}
			this.showCalculate();
		}
	}

	__proto.showCalculate=function(){
		this.model.isGameStart=false;
		this.view.calculatePage.show();
		this.model.setPlayerReadyFalse();
		HuAnimation.instance.noticeHide();
	}

	//胡牌动画
	__proto.NOTIFY_Summary=function(info){
		if(this.actived){
			console.log("MSG_NOTIFY_SUMMARY::" ,info ,"大结算");
			this.model.majiangMsgs.MSG_NOTIFY_SUMMARY=info;
		}
	}

	__proto.AckDisband=function(info){
		if(this.actived){
			console.log("AckDisband::" ,info ,"解散相关");
			this.model.majiangMsgs.AckDisband=info;
			this.popDissolveRoomDetail(info);
		}
	}

	__proto.NotifyDisband=function(info){
		if(this.actived){
			console.log("NotifyDisband::" ,info ,"解散相关");
			this.model.majiangMsgs.NotifyDisband=info;
			this.hideDissolveRoomDetail();
			var str="";
			if(info.result==1){
				str="解散成功！";
			}
			else{
				str="解散失败！";
				QuickUtils.popMessageBox(str,"BTN_NONE",this,null);
			}
		}
	}

	/**断线重连恢复的相关数据*/
	__proto.ACKBC_Card_Init=function(info){
		if(this.actived){
			console.log("ACKBC_Card_Init",info,"ACKBC_Card_Init")
			this.model.majiangMsgs.ACKBC_Card_Init=info;
			if(info.CurIndex==undefined){
				info.CurIndex=0;
			}
			if(info.ZhuangIndex==undefined){
				info.ZhuangIndex=0;
			}
			if(info.CardLeft==undefined){
				info.CardLeft=0;
			}
			this.model.leftDesktopCardsNum=info.CardLeft;
			this.model.zhuangpos=info.ZhuangIndex;
			this.view.majiangPage.clockPart.noticeShowLeftCardsNum();
			this.view.playerInfoPage.showZhuang();
			this.view.majiangPage.clockPart.dingDongwei(this.model.zhuangpos,true,false);
			if(UserData.isReplay==false){
				this.view.majiangPage.clockPart.noticeShowClock(info.CurIndex,10);
			}
		}
	}

	//这个要加一个字段去实现
	__proto.NotifyUserState=function(info){
		if(this.actived){
			console.log("NotifyUserState",info,"NotifyUserState")
			this.model.majiangMsgs.NotifyUserState=info;
			var player=this.model.playerByUid(info.id);
			player.state=info.state;
			player.offlineTime=info.offlineTime;
			var pos=this.model.getPlayerPosByUid(parseInt(info.id));
			var dir=this.model.getChairDirByPos(pos);
			var isGray=false;
			if(info.state==2){
				isGray=true;
			}
			this.view.playerInfoPage.setGrayhead(dir,isGray,true,info.offlineTime);
		}
	}

	/**通知可以t人*/
	__proto.NotifyKick=function(info){
		if(this.actived){
			console.log("NotifyKick",info,"NotifyKick");
			var i=0,len=info.indexs.length,player;
			for(i=0;i<len;i++){
				player=this.model.playerByPos(info.indexs[i]);
				player.offlineTime=0;
				player.canKick=true;
			}
			this.view.playerInfoPage.updateTirenBtn();
		}
	}

	/**t人返回结果*/
	__proto.KickResponse=function(info){
		if(this.actived){
			if(QuickUtils.popBox){
				QuickUtils.popBox.onhide();
			}
			this.model.standup(info.uid,-1);
			this.model.beKickedPlayer[info.pos]=info.uid;
			this.model.playerByUid(info.uid).offlineTime=0;
			this.view.playerInfoPage.updatePlayerInfos(this.model.playerInfoVec);
			this.view.playerInfoPage.updateSitDownUpBtn();
			this.view.playerInfoPage.updateStartBtn();
			this.view.tableInfoPage.updateKaijuren(info.nickName);
			EventCenter.instance.event("COMMON_INFOLIST_NOTICE",{color:0,msg:"玩家["+this.model.getPlayerNicknameByUid(info.uid)+"]站起了！"});
			QuickUtils.popMessageBox("玩家["+this.model.getPlayerNicknameByUid(info.uid)+"]被其他玩家请离座位!","BTN_QUEREN",this,this.onQuerenBeiTi);
		}
	}

	__proto.onQuerenBeiTi=function(){}
	/**房间未开始游戏解散*/
	__proto.NotifyDestoryRoom=function(info){
		if(this.actived){
			console.log("NotifyDestoryRoom",info,"NotifyDestoryRoom");
			this.pop=QuickUtils.popMessageBox("由于在规定时间内未开始游戏，房间已经强制解散！","BTN_QUEREN",this,this.onQueRenExit,"提示","left");
		}
	}

	__proto.onQueRenExit=function(idx){
		if(AppConfig.isNewHall){
			QuickUtils.gotoHall();
		}
		else{
			this.endGameGotoHall();
		}
	}

	//***********************************************
	__proto.onPopPanelCallBack=function(){
		if(AppConfig.isNewHall){
			QuickUtils.gotoHall();
		}
		else{
			this.endGameGotoHall();
		}
	}

	//
	__proto.endGameGotoHall=function(gotoHall){
		(gotoHall===void 0)&& (gotoHall=true);
		console.log("send MsgTypes.BASE_QUEUE,PomeloMessage.hall_g_o...");
		if(this.pop !=null){
			this.pop.onhide();
		}
		this.hideDissolveRoomDetail();
		this.contineGameQueue();
		this.model.reset();
		this.view.reset();
		this.model.playerInfoVec.length=0;
		if(UserData.isReplay){
			UserData.isPreReplay=true;
		}
		CommonModule.instance.regotoCommonText();
		GameModule.instance.stopGame(gotoHall);
		UserData.isReplay=false;
		this.model.isGameStart==false;
	}

	__proto.clear=function(){
		this.model.reset();
		this.view.reset();
		this.model.playerInfoVec.length=0;
		if(UserData.isReplay){
			EventCenter.instance.event("REPLAY_back",null);
		}
		UserData.isReplay=false;
		this.model.isGameStart==false;
	}

	/**补花*/
	__proto.ACK_TransferHuaResponse=function(info){}
	/**送礼物*/
	__proto.MSG_ACK_Gift=function(info){
		if(this.actived){
			console.log("MSG_ACK_Gift",info,"MSG_ACK_Gift");
			var player=this.model.playerByUid(info.uid);
			var tplayer=this.model.playerByUid(info.tUid);
			player.Diamond=info.diamond;
			var fromDir=this.model.getChairDirByPos(player.pos);
			var toDir=this.model.getChairDirByPos(tplayer.pos);
			if(info.uid==UserData.uid){
				UserData.Diamond=info.diamond;
			}
			GiftEff.instance.showGiftEff(fromDir,toDir,info.id);
		}
	}

	// }
	__proto.clearTimeDelay=function(){
		EventCenter.instance.off("GAME_START_SHAIZI_DONGFENG_COMP",this,this.onFirstShaiziComp,true);
		Laya.timer.clear(this,this.playEachShaiziEff);
		Laya.timer.clear(this,this.onEachEffEnd);
		Laya.timer.clear(this,this.contineGameQueue);
	}

	//Laya.timer.clear(this,onDelayCallZhuama);
	__proto.control_game_operation_hu=function(info){
		if(this._actived){
		}
	}

	//Laya.timer.once(1000,this,real_control_game_operation_hu,[info]);
	__proto.onDelayCallHu=function(){
		if(this._actived){
			this.showCalculate();
		}
	}

	// }
	__proto.resetSelf=function(){
		this.view.playerInfoPage.hideReadyBtn();
		this.view.playerInfoPage.hideZhuang();
		this.view.calculatePage.reset();
		this.model.reset();
		this.view.majiangPage.reset();
	}

	__proto.sendMsgCommond=function(commondId,needCantrol){
		(needCantrol===void 0)&& (needCantrol=true);
		if(needCantrol){
			this.view.majiangPage.handPart.canControl(this.model.selfChairPos,false);
		}
		console.log(commondId);
		EventCenter.instance.event("SOCKET_SEND",commondId);
	}

	/**暂停游戏消息队列*/
	__proto.pauseGameQueue=function(){
		if(UserData.isReplay){
			this.model.needCutdownReplay=true;
		}
		else{
			MessageManager.instance.pauseQueue("MESSAGE_GAME");
		}
	}

	/**继续游戏消息队列*/
	__proto.contineGameQueue=function(){
		if(UserData.isReplay){
			this.model.needCutdownReplay=false;
		}
		else{
			MessageManager.instance.continueQueue("MESSAGE_GAME");
		}
	}

	__proto.popDissolveRoomDetail=function(info){
		if(this.dissolvePage==null){
			this.dissolvePage=new NewDissolvePage();
		}
		this.dissolvePage.update(info);
		QuickUtils.AddCenter(this.dissolvePage,UIManager.instance.popLayer);
		if(QuickUtils.popBox){
			QuickUtils.popBox.onhide();
		}
	}

	__proto.hideDissolveRoomDetail=function(){
		if(this.dissolvePage && this.dissolvePage.parent){
			this.dissolvePage.parent.removeChild(this.dissolvePage);
		}
	}

	/**游戏时间已经结束*/
	__proto.onTimeOver=function(){
		if(!this.model.isGameStart){
			if(this.view.calculatePage.perPage.isShow){
				this.view.calculatePage.perPage.timeOver();
			}
			else{
				this.view.calculatePage.perPage.onClickConfirmBtn();
			}
		}
	}

	__proto.sendRandom=function(){
		return;
		var idx=Math.round(Math.random()*4);
		switch(idx){
			case 0:;
				var putCardObj={SID:UserData.SID,CID:Math.round(Math.random()*40),Ting:Math.round(Math.random())};
				this.sendMsgCommond(ProtoMessage.getProtoMessage(270,putCardObj));
				break ;
			case 1:;
				var chiObj={SID:UserData.SID,CID1:Math.round(Math.random()*40),CID2:Math.round(Math.random()*40),CID3:Math.round(Math.random()*40),DefCID:Math.round(Math.random()*40)};
				this.sendMsgCommond(ProtoMessage.getProtoMessage(290,chiObj));
				break ;
			case 2:;
				var pengObj={SID:UserData.SID,CID:Math.round(Math.random()*40),DefCID:Math.round(Math.random()*40)};
				this.sendMsgCommond(ProtoMessage.getProtoMessage(300,pengObj));
				break ;
			case 3:;
				var gangObj={SID:UserData.SID,CID:Math.round(Math.random()*40)};
				GameModule.instance.gameContext.controller.sendMsgCommond(ProtoMessage.getProtoMessage(310,gangObj));
				break ;
			case 4:;
				var readObj={sid:UserData.SID};
				this.sendMsgCommond(ProtoMessage.getProtoMessage(210,readObj));
				break ;
			case 5:
				break ;
			case 6:
				break ;
			case 7:
				break ;
			case 8:
				break ;
			case 9:
				break ;
			case 10:
				break ;
			}
	}

	//重播上一步回复数据专用
	__proto.recoveryByReplayData=function(replayData){
		if(this.actived){
			this.model.recoveryByReplayData(replayData);
			this.view.majiangPage.handPart.updateAllCards(this.model.allCardsVec);
			this.view.majiangPage.handPart.updateTheFourteenCards(this.model.theFourteenCardVec);
			var i=0,len=this.model.chairNum;
			for(i=0;i<len;i++){
				this.view.majiangPage.huaPart.showBuhuaCards(this.model.huaVec[i],i);
				this.view.majiangPage.outputPart.showCardsByPos(i,this.model.outputCardsVec[i]);
				this.view.majiangPage.pengGangPart.recoveryChi(this.model.chiVec[i],i);
				this.view.majiangPage.pengGangPart.recoveryPeng(this.model.pengVec[i],i,this.model.pengFromVec[i]);
				this.view.majiangPage.pengGangPart.recoveryGang(this.model.mingGangVec[i],i,2,this.model.mingGangFromVec[i]);
				this.view.majiangPage.pengGangPart.recoveryGang(this.model.anGangVec[i],i,1,this.model.anGangFromVec[i]);
			}
			this.view.majiangPage.handPart.canControl(this.model.curHandlePos,true);
			this.view.majiangPage.clockPart.noticeShowClock(this.model.curHandlePos,10);
			this.view.majiangPage.clockPart.noticeShowLeftCardsNum();
			this.view.majiangPage.outputPart.showCurSimbolByPos(this.model.curOutPutPos);
		}
	}

	/**玩家点了过*/
	__proto.pass=function(info){
		if(UserData.isReplay){
			if(info.SID==UserData.selfuid){
				this.view.majiangPage.handleBtns.hide();
			}
			else{
				QuickUtils.popMessage(this.model.getPlayerNicknameByUid(parseInt(info.SID))+"选择了过！");
			}
		}
	}

	/**显示选牌效果*/
	__proto.showPreDiscardEff=function(cardIdx){
		this.view.majiangPage.handPart.showPreDiscardEff(cardIdx);
		this.view.majiangPage.outputPart.showPreDiscardEff(cardIdx);
		this.view.majiangPage.pengGangPart.showPreDiscardEff(cardIdx);
	}

	/**赢藏选牌效果*/
	__proto.hidePreDiscardEff=function(){
		this.view.majiangPage.handPart.hidePreDiscardEff();
		this.view.majiangPage.outputPart.hidePreDiscardEff();
		this.view.majiangPage.pengGangPart.hidePreDiscardEff();
	}

	// }
	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'view',function(){
		return GameModule.instance.gameContext.view;
	});

	MajiangGameController.PRE_COMM_ADD="05";
	return MajiangGameController;
})(AbstractLayer)


/**这个类是用来存放整个麻将桌面的游戏数据的 所有数据都是 下 右 上 左*/
//class modules.game.majiangGame.model.MajiangModel extends rb.framework.mvc.AbstractLayer
var MajiangModel=(function(_super){
	function MajiangModel(){
		this.isStrictShowCalc=false;
		this.beKickedPlayer={};
		this.isAutoHandle=false;
		this.koupaiwancheng=false;
		/**是否正在出牌中*/
		this.isDragingcard=false;
		/**是否直接跳过胡的动画*/
		this.isNeedSkipHuAni=false;
		this.warnCThenBaoipStr="\n点击确认会承包对方，是否确认？";
		/**游戏是否已经开始*/
		this.isGameStart=false;
		/**重播时，前几步一步到位*/
		this.preStepNum=4;
		this.replayData=[];
		this.replayCurStep=0;
		/**0暂停 1播放中*/
		this.replayState=0;
		/**是否要中断播放*/
		this.needCutdownReplay=false;
		/**是否已经在玩家操作的时候预出牌了*/
		this.isClientPrePop=false;
		this.isClientPrePopCard=0;
		this.fengquan=0;
		this.tingCardsOfKouBtn=[];
		this.tingCardsOfCancelBtn=[];
		this.kouCards=[];
		//chengBaoArr=[0,0,0,0];
		this.chengBaoArr=[];
		this.isSelfSitDown=false;
		/**baida[0]:翻的牌 baida[1]:百搭牌*/
		this.baida=[];
		/**是否胡了*/
		this.isHu=false;
		/**是否是流局*/
		this.isLiu=false;
		/**桌子上剩余的牌的数量*/
		this.leftDesktopCardsNum=0;
		this._chairNum=3;
		this.huArr=[];
		this.selfChairPos=0;
		// chengBaoArr[targetPos]+=1;
		this.lastHuanHuaCard=-1;
		/**大赢家*/
		this.yingjiaArr=[];
		/**最佳炮手*/
		this.paoshouArr=[];
		/**根据pos把user位置排好了*/
		this.usersOfRoundData=[];
		/**是否下一次玩家点击取消按钮，进行听的操作*/
		this.isNextCancelBtnKou=false;
		/**下一次玩家点击取消按钮是否取消亮牌*/
		this.isCancelTingp=false;
		/**玩家扣牌之前显示听的那张牌*/
		this.theTingCardBeforKou=0;
		/**供选择的可以杠的牌*/
		this.tempGangCards=[];
		/**是不是下次出牌发出杠的命令*/
		this.isNextGang=false;
		/**零时记录选择扣的牌，供点击扣按钮后真实扣掉；或者是点击取消按钮，取消这之前的表现操作*/
		this.tempKouCards=[];
		/**断线重连临时记下的玩家打出的牌*/
		this.reenterOutpuCardsVec=null;
		/**断线重连时临时记下的玩家可以胡的牌*/
		this.reenterHuCardsVec=null;
		// }
		this.curHandlePos=0;
		this.curOutPutPos=-1;
		this.zhuangpos=0;
		this.canLiCards=[];
		this.appendDownCards=[];
		this.replayAllStepData=[];
		this.pengGangStepObj=new Object();
		this.majiangMsgs=new MajiangMsgs();
		this.playerInfoVec=[];
		this.huaVec=[];
		this.overHuaVec=[];
		this.huaNum=[];
		this.chiVec=[];
		this.chiFromVec=[];
		this.pengVec=[];
		this.pengFromVec=[];
		this.mingGangVec=[];
		this.mingGangFromVec=[];
		this.anGangVec=[];
		this.anGangFromVec=[];
		this.kouVec=[];
		this.outputCardsVec=[];
		this.allCardsVec=[];
		this.theFourteenCardVec=[];
		this.isTingVec=[];
		this.TingHuCardVec=[];
		this.TingDownCardVec=[];
		this.selfOutputCardPos=new Point();
		MajiangModel.__super.call(this);
	}

	__class(MajiangModel,'modules.game.majiangGame.model.MajiangModel',_super);
	var __proto=MajiangModel.prototype;
	__proto.initData=function(){}
	__proto.onAdd=function(){}
	__proto.onRemove=function(){}
	/**胡牌后，将所有readystate改为0*/
	__proto.setPlayerReadyFalse=function(){
		var i=0,len=this.playerInfoVec.length;
		for(i=0;i<len;i++){
			this.playerInfoVec[i].readystate=0;
		}
	}

	/**0正花 1野花*/
	__proto.getHuaArr=function(type,pos){
		var retArr=[];
		var xiangduiIdx=0;
		var zhenghua=[];
		xiangduiIdx=this.getshaiziIdxByPos(pos);
		zhenghua.push(35+xiangduiIdx);
		if(xiangduiIdx==2){
			xiangduiIdx=3;
		}
		else if(xiangduiIdx==3){
			xiangduiIdx=2;
		}
		zhenghua.push(39+xiangduiIdx);
		var i=0,len=this.huaVec[pos].length;
		for(i=0;i<len;i++){
			if(zhenghua.indexOf(this.huaVec[pos][i])!=-1){
				if(type==0){
					retArr.push(this.huaVec[pos][i]);
				}
			}
			else{
				if(type==1){
					retArr.push(this.huaVec[pos][i])
				}
			}
		}
		return retArr;
	}

	__proto.resetCard=function(){
		var i=0;
		var len=this._chairNum;
		for(i=0;i<len;i++){
			this.outputCardsVec[i].length=0;
			this.huaVec[i].length=0;
			this.chiVec[i].length=0;
			this.chiFromVec[i].length=0;
			this.pengVec[i].length=0;
			this.pengFromVec[i].length=0;
			this.mingGangVec[i].length=0;
			this.mingGangFromVec[i].length=0;
			this.anGangVec[i].length=0;
			this.anGangFromVec[i].length=0;
			this.kouVec[i].length=0;
			this.theFourteenCardVec[i]=-1;
		}
	}

	/**游戏重新开始，重新设置数据*/
	__proto.reset=function(){
		this.beKickedPlayer={};
		var i=0;
		var len=this._chairNum;
		for(i=0;i<len;i++){
			this.outputCardsVec[i].length=0;
			this.huaVec[i].length=0;
			this.chiVec[i].length=0;
			this.chiFromVec[i].length=0;
			this.pengVec[i].length=0;
			this.pengFromVec[i].length=0;
			this.mingGangVec[i].length=0;
			this.mingGangFromVec[i].length=0;
			this.anGangVec[i].length=0;
			this.anGangFromVec[i].length=0;
			this.kouVec[i].length=0;
			this.theFourteenCardVec[i]=-1;
			this.isTingVec[i]=false;
			this.TingHuCardVec[i].length=0;
			this.TingDownCardVec[i].length=0;
			this.overHuaVec[i]=0;
		}
		this.curOutPutPos=-1;
		this.isHu=false;
		this.isLiu=false;
		this.leftDesktopCardsNum=0;
		this.tempKouCards=[];
		this.isNextCancelBtnKou=false;
		this.theTingCardBeforKou=0;
		this.tingCardsOfKouBtn=[];
		this.tingCardsOfCancelBtn=[];
		this.kouCards=[];
		this.curHandlePos=0;
		this.koupaiwancheng=false;
		this.majiangMsgs.control_game_operation_hucard_info=null;
		this.huArr.length=0;
	}

	__proto.updateOnePlayerInfo=function(info){
		if(info.pos%2==0){
			info.sex=1;
		}
		else{
			info.sex=2;
		};
		var i=0;
		var len=this.playerInfoVec.length;
		var has=false;
		for(i=0;i<len;i++){
			if(this.playerInfoVec[i] && this.playerInfoVec[i].uid==info.uid){
				if(this.playerInfoVec[i].pos !=info.pos){
					console.log("传过来的数据有错误!!!!!!");
				}
				this.updateObjFromObj(this.playerInfoVec[i],info);
				has=true;
				break ;
			}
		}
		if(has==false){
			this.playerInfoVec.push(info);
		}
		if(info.uid==UserData.selfuid){
			this.selfChairPos=info.pos;
			if(this.selfChairPos==-1){
				this.isSelfSitDown=false;
				this.selfChairPos=0;
			}
			else{
				this.isSelfSitDown=true;
			}
		}
	}

	__proto.playerByPos=function(pos){
		var i=0;
		var len=this.playerInfoVec.length;
		for(i=0;i<len;i++){
			if(this.playerInfoVec[i] && this.playerInfoVec[i].pos==pos){
				return this.playerInfoVec[i];
			}
		}
		return null;
	}

	__proto.playerByUid=function(uid){
		var i=0;
		var len=this.playerInfoVec.length;
		for(i=0;i<len;i++){
			if(this.playerInfoVec[i] && this.playerInfoVec[i].uid==uid){
				return this.playerInfoVec[i];
			}
		}
		return null;
	}

	__proto.getPlayerPosByUid=function(uid){
		var i=0;
		var len=this.playerInfoVec.length;
		for(i=0;i<len;i++){
			if(this.playerInfoVec[i] && this.playerInfoVec[i].uid==uid){
				return this.playerInfoVec[i].pos;
			}
		}
		return 0;
	}

	/**根据玩家的座位号取玩家点数对应的序列*/
	__proto.getshaiziIdxByPos=function(pos){
		for(var i=0;i<this.chairNum;i++){
			if(pos==(this.zhuangpos+i)%this.chairNum){
				return i;
			}
		}
		return 0;
	}

	__proto.getPlayerUidByPos=function(pos){
		var i=0;
		var len=this.playerInfoVec.length;
		for(i=0;i<len;i++){
			if(this.playerInfoVec[i] && this.playerInfoVec[i].pos==pos){
				return this.playerInfoVec[i].uid;
			}
		}
		return 0;
	}

	__proto.getPlayerNicknameByUid=function(uid){
		var i=0;
		var len=this.playerInfoVec.length;
		for(i=0;i<len;i++){
			if(this.playerInfoVec[i] && this.playerInfoVec[i].uid==uid){
				return this.playerInfoVec[i].nickname;
			}
		}
		return "";
	}

	__proto.updateObjFromObj=function(obj,fromObj){
		obj.prePos=obj.pos;
		for (var p in fromObj){
			if(fromObj[p] !=undefined){
				obj[p]=fromObj[p];
			}
		}
	}

	__proto.sitDown=function(uid,pos,score){
		var i=0;
		var len=this.playerInfoVec.length;
		for(i=0;i<len;i++){
			if(this.playerInfoVec[i] && this.playerInfoVec[i].uid==uid){
				this.playerInfoVec[i].pos=pos;
				this.playerInfoVec[i].score=score;
				this.playerInfoVec[i].canKick=false;
				if(uid==UserData.selfuid){
					if(pos !=-1){
						this.isSelfSitDown=true;
						this.selfChairPos=pos;
					}
					else{
						this.isSelfSitDown=false;
						this.selfChairPos=0;
					}
				}
			}
		}
	}

	__proto.standup=function(uid,pos){
		var i=0;
		var len=this.playerInfoVec.length;
		for(i=0;i<len;i++){
			if(this.playerInfoVec[i] && this.playerInfoVec[i].uid==uid){
				this.playerInfoVec[i].pos=pos;
				this.playerInfoVec[i].canKick=false;
				if(uid==UserData.selfuid){
					if(pos !=-1){
						this.isSelfSitDown=true;
						this.selfChairPos=pos;
					}
					else{
						this.isSelfSitDown=false;
						this.selfChairPos=0;
					}
				}
			}
		}
	}

	//从玩家列表中删除某个玩家
	__proto.leavePlayer=function(uid){
		var i=0;
		var len=this.playerInfoVec.length;
		for(i=0;i<len;i++){
			if(this.playerInfoVec[i] && this.playerInfoVec[i].uid==uid){
				this.playerInfoVec.splice(i,1);
				break ;
			}
		}
	}

	__proto.updatePlayerInfoVec=function(arr){
		var i=0;
		var len=arr.length;
		var info;
		for(i=0;i<len;i++){
			info=arr[i];
			if(UserData.isReplay){
				info.index=info.index !=undefined ? info.index :0;
				info.diamond=info.diamond !=undefined ? info.diamond :0;
				info.Icon=info.Icon !=undefined ? info.Icon :"";
				info.score=info.score !=undefined ? info.score :0;
				info.coin=info.coin !=undefined ? info.coin :0;
				info.readystate=info.readystate !=undefined ? info.readystate :0;
				info.uid=info.uid !=undefined ? info.uid :0;
				info.IP=info.IP !=undefined ? info.IP :"";
				info.Name=info.name;
				info.Index=info.index;
				info.Coin=info.coin;
				info.readystate=1;
				info.UID=info.uid;
				info.Diamond=info.diamond;
				if(info.icon){
					info.Icon=info.icon;
				}
			}
			info.nickname=info.Name;
			info.uid=info.UID;
			info.ip=info.IP;
			info.pos=info.Index;
			info.golds=info.Coin;
			if(info.uid !="" || info.uid !=0){
				if(info.state==3){
					this.beKickedPlayer[info.pos]=info.uid;
					info.state=1;
					info.pos=-1;
				}
				else if(info.state==4){
					this.beKickedPlayer[info.pos]=info.uid;
					info.state=2;
					info.pos=-1;
				}
				this.updateOnePlayerInfo(arr[i]);
			}
		}
	}

	//chengBaoArr=[0,0,0,0];
	__proto.checkTianhu=function(){
		var i=0,len=0;
		len=this.chairNum;
		for(i=0;i<len;i++){
			if(this.chiVec[i].length > 0){
				return false;
			}
			if(this.pengVec[i].length > 0){
				return false;
			}
			if(this.anGangVec[i].length > 0){
				return false;
			}
			if(this.mingGangVec[i].length > 0){
				return false;
			}
			if(this.outputCardsVec[i].length > 0){
				return false;
			}
		}
		return true;
	}

	/**根据玩家的椅子号返回玩家的位置</br>
	*
	*3个人的时候是
	*0bottom 1right 2left
	*</br>
	*4个人的时候是
	*0bottom 1right 2top 3left
	*
	**/
	__proto.getChairDirByPos=function(pos){
		if(pos==-1){
			return-1;
		};
		var returnDir=0;
		returnDir=pos-this.selfChairPos;
		if(returnDir < 0){
			returnDir=returnDir+this.chairNum;
		}
		return returnDir;
	}

	/**根据玩家的位置 返回玩家对应的椅子号*/
	__proto.getChairPosByDir=function(dir){
		var returnPos=0;
		returnPos=this.selfChairPos+dir;
		if(returnPos > this.chairNum-1){
			returnPos=returnPos-this.chairNum;
		}
		return returnPos;
	}

	/**给自己所有牌排个序*/
	__proto.sortAllCards=function(pos){
		this.allCardsVec[pos].sort(this.compareFunction);
		this.pushToHeadBaida(pos);
	}

	__proto.compareFunction=function(A,B){
		if(A<B){
			return-1;
		}
		else if(A==B){
			return 0;
		}
		else{
			return 1;
		}
	}

	/**从手里的牌里面去掉吃掉的牌*/
	__proto.cutChiCard=function(pos,arr){
		if(this.isSelfSitDown && (pos==this.selfChairPos || UserData.isReplay)){
			var tempArr=arr;
			var i=0;
			var len=tempArr.length;
			var idx=0;
			var num=0;
			for(i=0;i<len;i++){
				idx=this.allCardsVec[pos].indexOf(tempArr[i]);
				if(idx !=-1){
					this.allCardsVec[pos].splice(idx,1);
					num+=1;
				}
			}
			if(num !=2){
				QuickUtils.popMessageBox("给玩家吃牌的数据有问题！！！吃掉的牌 "+arr[0]+" "+arr[1],"BTN_QUEREN",null,null,"错误");
			}
		}
		else{
			this.allCardsVec[pos].splice(0,2);
		}
	}

	/**从手里的牌里面去掉一张碰掉的牌*/
	__proto.cutPengCard=function(pos,cardIdx){
		if(this.isSelfSitDown && pos==this.selfChairPos){
			var tempArr=[cardIdx,cardIdx];
			var i=0;
			var len=tempArr.length;
			var idx=0;
			var num=0;
			for(i=0;i<len;i++){
				idx=this.allCardsVec[pos].indexOf(tempArr[i]);
				if(idx !=-1){
					this.allCardsVec[pos].splice(idx,1);
					num+=1;
				}
			}
			if(num !=2){
				QuickUtils.popMessageBox("给玩家碰牌的数据有问题！！！碰掉的牌 "+cardIdx,"BTN_QUEREN",null,null,"错误");
			}
		}
		else{
			this.allCardsVec[pos].splice(0,2);
		}
	}

	/**杠了之后刷新手里的牌
	*
	*@param type 0补杠 1暗杠 2明杠
	**/
	__proto.cutGangCard=function(pos,cardIdx,type){
		console.log("cutGangCard :: pos:: "+pos+" cardIdx::"+BaseCard.CARD_REFERENCE[cardIdx]+" type:: "+type)
		var i=0;
		var tempArr;
		var idx=0;
		var len=0;
		if(this.isTingVec[pos]==true){
			if(this.kouVec[pos].length > 0 && type !=0){
				this.kouVec[pos].length-=1;
			}
		}
		if(this.isSelfSitDown && pos==this.selfChairPos){
			switch(type){
				case 0:
					if(this.theFourteenCardVec[pos] !=-1){
						if(this.theFourteenCardVec[pos]==cardIdx){
							this.theFourteenCardVec[pos]=-1;
						}
						else{
							idx=this.allCardsVec[pos].indexOf(cardIdx);
							if(idx !=-1){
								this.allCardsVec[pos].splice(idx,1);
							}
							this.allCardsVec[pos].push(this.theFourteenCardVec[pos]);
							this.theFourteenCardVec[pos]=-1;
							this.sortAllCards(pos);
						}
					}
					else{
						idx=this.allCardsVec[pos].indexOf(cardIdx);
						if(idx !=-1){
							this.allCardsVec[pos].splice(idx,1);
						}
						this.sortAllCards(pos);
					}
					break ;
				case 1:
					if(this.theFourteenCardVec[pos]==-1){
						tempArr=[cardIdx,cardIdx,cardIdx,cardIdx];
					}
					else if(this.theFourteenCardVec[pos]==cardIdx){
						this.theFourteenCardVec[pos]=-1;
						tempArr=[cardIdx,cardIdx,cardIdx];
					}
					else{
						tempArr=[cardIdx,cardIdx,cardIdx,cardIdx];
						this.allCardsVec[pos].push(this.theFourteenCardVec[pos]);
						this.theFourteenCardVec[pos]=-1;
						this.sortAllCards(pos);
					}
					len=tempArr.length;
					for(i=0;i<len;i++){
						idx=this.allCardsVec[pos].indexOf(tempArr[i]);
						if(idx !=-1){
							this.allCardsVec[pos].splice(idx,1);
						}
					}
					break ;
				case 2:
					tempArr=[cardIdx,cardIdx,cardIdx];
					len=tempArr.length;
					for(i=0;i<len;i++){
						idx=this.allCardsVec[pos].indexOf(tempArr[i]);
						if(idx !=-1){
							this.allCardsVec[pos].splice(idx,1);
							console.log("从自己牌里面去掉了一张 ：："+tempArr[i]);
						}
					}
					break ;
				default :break ;
				}
		}
		else{
			switch(type){
				case 0:
					if(this.theFourteenCardVec[pos] !=-1){
						this.theFourteenCardVec[pos]=-1;
					}
					else{
						this.allCardsVec[pos].splice(0,1);
					}
					break ;
				case 1:
					if(this.theFourteenCardVec[pos] !=-1){
						this.theFourteenCardVec[pos]=-1;
						if(this.isTingVec[pos]==true){
							this.allCardsVec[pos].splice(this.TingDownCardVec[pos].length,3);
						}
						else{
							this.allCardsVec[pos].splice(0,3);
						}
					}
					else{
						if(this.isTingVec[pos]==true){
							this.allCardsVec[pos].splice(this.TingDownCardVec[pos].length,4);
						}
						else{
							this.allCardsVec[pos].splice(0,4);
						}
					}
					break ;
				case 2:
					if(this.isTingVec[pos]==true){
						this.allCardsVec[pos].splice(this.TingDownCardVec[pos].length,3);
					}
					else{
						this.allCardsVec[pos].splice(0,3);
					}
					break ;
				default :break ;
				}
		}
	}

	/**更新所有牌(游戏开始后的第一次发牌）*/
	__proto.updateAllCardsVecByGameStart=function(allCards){
		console.log("selfCards ::"+allCards);
		var i=0;
		var len=this.allCardsVec.length;
		for(i=0;i<len;i++){
			if(i==this.selfChairPos){
				this.allCardsVec[i]=[];
				var j=0;
				var leng=allCards.length;
				for(j=0;j<leng;j++){
					(this.allCardsVec [i]).push(allCards[j].card);
				}
			}
			else{
				this.allCardsVec[i]=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0);
			}
		}
		console.log("selfChairPos::"+this.selfChairPos);
		this.sortAllCards(this.selfChairPos);
	}

	/**玩家出牌更新玩家数据*/
	__proto.outputCard=function(pos,cardIdx){
		this.curOutPutPos=pos;
		this.outputCardsVec[pos].push(cardIdx);
		if(this.isSelfSitDown && pos==this.selfChairPos){
			if(this.theFourteenCardVec[pos] !=-1){
				if(this.theFourteenCardVec[pos]==cardIdx){
					this.theFourteenCardVec[pos]=-1;
					return;
				}
			};
			var idx=this.allCardsVec[pos].indexOf(cardIdx);
			if(idx!=-1){
				this.allCardsVec[pos].splice(idx,1);
			}
			if(this.theFourteenCardVec[pos] !=-1){
				this.allCardsVec[pos].push(this.theFourteenCardVec[pos]);
				this.sortAllCards(pos);
				this.theFourteenCardVec[pos]=-1;
			}
		}
		else{
			if(this.theFourteenCardVec[pos] !=-1){
				this.theFourteenCardVec[pos]=-1;
				return;
			}
			this.allCardsVec[pos].splice(0,1);
		}
	}

	//outputCardsVec[pos].push(cardIdx);
	__proto.updatePengVec=function(pos,cardIdx,targetPos){
		if(this.pengVec[pos]){
			this.pengVec[pos].push(cardIdx);
			this.pengFromVec[pos].push(targetPos);
		}
	}

	/**更新补花*/
	__proto.updateBuhua=function(pos,huaCards,huanhuiCards){
		if(this.huaVec[pos]){
			this.huaVec[pos]=this.huaVec[pos].concat(huaCards);
			if(UserData.isReplay || pos==this.selfChairPos){
				var i=0;
				var len=huaCards.length;
				var result=0;
				for(i=0;i<len;i++){
					result=this.allCardsVec[pos].indexOf(huaCards[i]);
					if(result !=-1){
						this.allCardsVec[pos].splice(result,1);
					}
				}
				len=huanhuiCards.length;
				for(i=0;i<len;i++){
					this.allCardsVec[pos].push(huanhuiCards[i]);
				}
				this.lastHuanHuaCard=huanhuiCards[huanhuiCards.length-1]
				this.sortAllCards(pos);
			}
		}
	}

	__proto.updateChiVec=function(pos,chicard,chicards,targetPos){
		if(this.chiVec[pos]){
			var chiData=new MajiangChiData();
			chiData.chicard=chicard;
			chiData.chicards=chicards;
			this.chiVec[pos].push(chiData);
			this.chiFromVec[pos].push((this.chairNum+pos-1)%this.chairNum);
		}
	}

	// chengBaoArr[targetPos]+=1;
	__proto.getChiCards=function(pos,chicard){
		if(this.chiVec[pos]){
			for(var i=0;i<this.chiVec[pos].length;i++){
				if((this.chiVec[pos] [i]).chicard==chicard){
					return (this.chiVec[pos] [i]).chicards;
				}
			}
		}
		return [];
	}

	/**更新杠 可能关联到碰 碰杠的
	*
	*@param type 0碰杠 1暗杠 2明杠
	**/
	__proto.updateGangVec=function(pos,cardIdx,type,targetPos,obj){
		console.log("updateGangVec:: pos::"+pos+" cardIdx::"+cardIdx+" type::"+type);
		switch(type){
			case 0:
				if(this.mingGangVec[pos].indexOf(cardIdx)!=-1)
					return true;
				this.mingGangVec[pos].push(cardIdx);
				var idx=this.pengVec[pos].indexOf(cardIdx);
				if(idx !=-1){
					if(targetPos==this.selfChairPos){
						targetPos=this.pengFromVec[pos][idx];
					}
					this.pengVec[pos].splice(idx,1);
					this.pengFromVec[pos].splice(idx,1);
				}
				if(obj){
					obj.TIndex=targetPos;
					obj.TSeat=targetPos;
				}
				this.mingGangFromVec[pos].push(targetPos);
				break ;
			case 1:
				if(this.anGangVec[pos].indexOf(cardIdx)!=-1)
					return true;
				this.anGangVec[pos].push(cardIdx);
				this.anGangFromVec[pos].push(cardIdx);
				break ;
			case 2:
				if(this.mingGangVec[pos].indexOf(cardIdx)!=-1)
					return true;
				this.mingGangVec[pos].push(cardIdx);
				this.mingGangFromVec[pos].push(targetPos);
				break ;
			default :break ;
			}
		return false;
	}

	__proto.compareType=function(A,B){
		if(A.type<B.type){
			return 1;
		}
		else if(A.type==B.type){
			if(A.card < B.card){
				return-1;
			}
			else if(A.card==B.card){
				return 0;
			}
			else{
				return 1
			}
		}
		else{
			return-1;
		}
	}

	/**更新玩家手里的牌 先出出去，后听牌，肯定没有第十四张牌，听牌专用*/
	__proto.updateAllCards=function(pos,cards){
		this.TingDownCardVec[pos].length=0;
		var i=0;
		var len=cards.length;
		if(len%3==2){
			this.theFourteenCardVec[pos]=cards[len-1].card;
			len=cards.length-1;
			cards.length=len;
		}
		cards.sort(this.compareType);
		console.log("更新玩家手里的牌len::"+len);
		if(len > 13){
			this.theFourteenCardVec[pos]=cards[len-1].card;
			cards.length=13;
			len=cards.length;
		}
		this.allCardsVec[pos].length=len;
		var kouNum=0;
		for(i=0;i<len;i++){
			this.allCardsVec[pos][i]=cards[i].card;
			console.log("allCardsVec[pos][i] i::"+i+" card::"+cards[i].card);
			if(pos==this.selfChairPos){
				if(cards[i].type==1){
					if(this.kouVec[pos].indexOf(cards[i].card)==-1){
						this.kouVec[pos].push(cards[i].card);
					}
				}
			}
			else{
				if(cards[i].type==1){
					if(cards[i].type==1){
						if(UserData.isReplay){
							if(this.kouVec[pos].indexOf(cards[i].card)==-1){
								this.kouVec[pos].push(cards[i].card);
							}
						}
						else{
							kouNum+=1;
						}
					}
				}
			}
			if(cards[i].type==2){
				this.TingDownCardVec[pos].push(cards[i].card);
			}
		}
		if(pos !=this.selfChairPos){
			if(UserData.isReplay==false){
				this.kouVec[pos].length=kouNum/3;
			}
		}
		this.pushToHeadBaida(pos);
	}

	/**将自己手里的牌中的百搭牌放到最前面*/
	__proto.pushToHeadBaida=function(pos){
		var obj=this.majiangMsgs.control_game_operation_tableinfo_Info;
		if(obj && obj.roomtype==8){
			var cardIdx=this.baida[1];
			var i=0,len=this.allCardsVec[pos].length;
			var tempArr=[];
			for(i=0;i<len;i++){
				if(this.allCardsVec[pos][i]==cardIdx){
					tempArr.push(this.allCardsVec[pos][i]);
					this.allCardsVec[pos].splice(i,1);
					i--;
				}
			}
			this.allCardsVec[pos]=tempArr.concat(this.allCardsVec[pos]);
		}
	}

	/**游戏结束时更新玩家手里的牌*/
	__proto.updateAllCardsAfterHu=function(pos,cards){
		var i=0;
		var len=0;
		len=cards.length;
		if(len%3==2){
			this.theFourteenCardVec[pos]=cards[cards.length-1].card;
			len=cards.length-1;
		}
		else{
			len=cards.length;
		}
		cards.length=len;
		cards.sort(this.compareType);
		this.allCardsVec[pos].length=len;
		for(i=0;i<len;i++){
			this.allCardsVec[pos][i]=cards[i].card;
		}
		this.pushToHeadBaida(pos);
	}

	__proto.processRoundData=function(){
		this.yingjiaArr.length=0;
		this.paoshouArr.length=0;
		var users=this.majiangMsgs.control_game_settlement_Info.userinfos;
		var i=0;
		var len=users.length;
		for(i=0;i<len;i++){
			this.usersOfRoundData[this.getPlayerPosByUid(users[i].uid)]=users[i];
			if(this.yingjiaArr[0]==null){
				if(users[i].zongchengji > 0){
					this.yingjiaArr[0]=users[i];
				}
			}
			else{
				if(users[i].zongchengji > this.yingjiaArr[0].zongchengji){
					this.yingjiaArr[0]=users[i];
					this.yingjiaArr[1]=null;
					this.yingjiaArr[2]=null;
				}
				else{
					if(users[i].zongchengji==this.yingjiaArr[0].zongchengji){
						this.yingjiaArr.push(users[i]);
					}
				}
			}
			if(this.paoshouArr[0]==null){
				if(users[i].dianpaocount > 0){
					this.paoshouArr[0]=users[i];
				}
			}
			else{
				if(users[i].dianpaocount > this.paoshouArr[0].dianpaocount){
					this.paoshouArr[0]=users[i];
					this.paoshouArr[1]=null;
					this.paoshouArr[2]=null;
				}
				else{
					if(users[i].dianpaocount==this.paoshouArr[0].dianpaocount){
						this.paoshouArr.push(users[i]);
					}
				}
			}
		}
	}

	/**获取指定听哪张牌可以扣掉哪些牌*/
	__proto.getKouCards=function(cardIdx){
		var arr=this.majiangMsgs.control_game_mjopration_Info.nopercard;
		var temArr;
		var returnArr=[];
		var i=0;
		var len=arr.length;
		for(i=0;i<len;i++){
			if(arr[i].card==cardIdx){
				temArr=arr[i].nkoucard;
			}
		}
		if(temArr !=null && temArr.length > 0){
			for(i=0;i<temArr.length;i++){
				returnArr.push(temArr[i].card);
			}
		}
		return returnArr;
	}

	// }
	__proto.updateReadyState=function(pos,readyState,piaoValue){
		var i=0;
		var len=this.playerInfoVec.length;
		for(i=0;i<len;i++){
			if(this.playerInfoVec[i] && this.playerInfoVec[i].pos==pos){
				this.playerInfoVec[i].readystate=true;
				this.playerInfoVec[i].piao=piaoValue;
				break ;
			}
		}
	}

	__proto.gethuCards=function(cardIdx){
		var returnArr=[];
		var i=0,j=0,len=0;
		if(this.majiangMsgs.control_game_operation_hucard_info !=null){
			var info=this.majiangMsgs.control_game_operation_hucard_info;
			len=info.nting.length;
			for(i=0;i<len;i++){
				if(info.nting[i].card==cardIdx){
					for(j=0;j<info.nting[i].nhu.length;j++){
						returnArr.push(info.nting[i].nhu[j].card);
					}
					break ;
				}
			}
		}
		if(returnArr.length==0){
			var arr=this.majiangMsgs.control_game_mjopration_Info.nopercard;
			len=arr.length;
			for(i=0;i<len;i++){
				if(arr[i].type==1){
					if(arr[i].card==cardIdx){
						for(j=0;j<arr[i].nhucard.length;j++){
							returnArr.push(arr[i].nhucard[j].card);
						}
						break ;
					}
				}
			}
		}
		return returnArr;
	}

	//从打出去的牌中去掉碰杠掉的牌
	__proto.cutOutput=function(pos,cardIdx){
		var idx=this.outputCardsVec[pos].indexOf(cardIdx);
		if(idx !=-1){
			this.outputCardsVec[pos].splice(idx,1);
		}
	}

	// 1569,1585,1281,1297,1313,1329,1025,1041,1057,769,785,801,817];//769:"z东.png",785:"z南.png",801:"z西.png",817:"z北.png",
	__proto.judgeHua=function(cardIdx){
		var huaArr=[35,36,37,38,39,40,41,42];
		if(huaArr.indexOf(cardIdx)!=-1){
			return true;
		}
		return false;
	}

	__proto.checkHaveHua=function(pos){
		var cards=this.allCardsVec[pos];
		for(var i=0;i<cards.length;i++){
			if(this.judgeHua(cards[i])==true){
				return true;
			}
		}
		return false;
	}

	/**根据pos获取杠头的参照列表*/
	__proto.getGangtouRefArr=function(pos){
		return MajiangModel.GangtouCardArr[(pos+this.chairNum-this.zhuangpos)%this.chairNum];
	}

	/**根据庄家的位置获取上下家的位置 0zhuang 1xia 2dui 3shang*/
	__proto.getRefZhuangPos=function(pos){
		return (pos+this.chairNum-this.zhuangpos)%this.chairNum;
	}

	// }
	__proto.getGangtouCardImg=function(cardIdx,isHave){
		(isHave===void 0)&& (isHave=true);
		var cardRef="";
		var base1=1;
		var base2=19;
		var base3=10;
		switch(cardIdx){
			case base1:case base2:case base3:
				cardRef="1";
				break ;
			case base1+1:case base2+1:case base3+1:
				cardRef="2";
				break ;
			case base1+1*2:case base2+1*2:case base3+1*2:
				cardRef="3";
				break ;
			case base1+1*3:case base2+1*3:case base3+1*3:
				cardRef="4";
				break ;
			case base1+1*4:case base2+1*4:case base3+1*4:
				cardRef="5";
				break ;
			case base1+1*5:case base2+1*5:case base3+1*5:
				cardRef="6";
				break ;
			case base1+1*6:case base2+1*6:case base3+1*6:
				cardRef="7";
				break ;
			case base1+1*7:case base2+1*7:case base3+1*7:
				cardRef="8";
				break ;
			case base1+1*8:case base2+1*8:case base3+1*8:
				cardRef="9";
				break ;
			case 769:
				cardRef="东";
				break ;
			case 1537:
				cardRef="春";
				break ;
			case 1281:
				cardRef="梅";
				break ;
			case 1025:
				cardRef="中";
				break ;
			case 785:
				cardRef="南";
				break ;
			case 1553:
				cardRef="夏";
				break ;
			case 1297:
				cardRef="兰";
				break ;
			case 1041:
				cardRef="发";
				break ;
			case 801:
				cardRef="西";
				break ;
			case 1569:
				cardRef="秋";
				break ;
			case 1329:
				cardRef="竹";
				break ;
			case 1057:
				cardRef="白";
				break ;
			case 817:
				cardRef="北";
				break ;
			case 1584:
				cardRef="冬";
				break ;
			case 1313:
				cardRef="菊";
				break ;
			}
		if(isHave==false){
			cardRef+="-1"
		}
		return "gametable/zhuama/"+cardRef+".png";
	}

	/**获取出某张牌的时候可以胡哪些牌
	*
	*-1表示没有百搭
	**/
	__proto.getHuTipArr=function(popCard,baidaCard){
		(baidaCard===void 0)&& (baidaCard=-1);
		var retArr=[];
		var tempArr;
		if(this.theFourteenCardVec[this.selfChairPos] !=-1){
			tempArr=this.allCardsVec[this.selfChairPos].concat(this.theFourteenCardVec[this.selfChairPos]);
		}
		else{
			tempArr=this.allCardsVec[this.selfChairPos].concat();
		};
		var idx=tempArr.indexOf(popCard);
		if(idx !=-1){
			tempArr.splice(idx,1);
		}
		else{
		};
		var i=0,len=MajiangModel.all_Cards.length;
		for(i=0;i<len;i++){
			if(this.judgeHu(tempArr.concat(MajiangModel.all_Cards[i]),baidaCard)==true){
				retArr.push(MajiangModel.all_Cards[i]);
			}
		}
		return retArr;
	}

	/**从一个牌组里把百搭和不是百搭的牌分两个数组取出*/
	__proto.getSplitBaidaCard=function(cardArr,baidaCard){
		var returnAarr=[];
		var i=0,len=cardArr.length;
		var baidaCardArr=[];
		var notBaidaCardArr=[];
		for(i=0;i<len;i++){
			if(cardArr[i]==baidaCard){
				baidaCardArr.push(cardArr[i]);
			}
			else{
				notBaidaCardArr.push(cardArr[i]);
			}
		}
		return returnAarr;
	}

	/**判断牌组能不能胡-1表示 */
	__proto.judgeHu=function(paiArr,baidaCard){
		(baidaCard===void 0)&& (baidaCard=-1);
		paiArr.sort(this.compareFunction);
		var i=0,len=paiArr.length;
		var canHu=false;
		if(len%3 !=2){
			return false;
		}
		if(UserData.roomtype==11 || UserData.roomtype==10){
			if(len==14){
				var isTrue=true;
				for(i=0;i<7;i++){
					if(paiArr[i*2] !=paiArr[i*2+1]){
						isTrue=false;
					}
				}
				if(isTrue==true){
					return true;
				}
			}
		};
		var duiziArr=this.getPaiduizi(paiArr);
		if(duiziArr.length==0){
			return false;
		};
		var j=0;
		var idx=0;
		var num=0;
		var paiArrTemp;
		for(j=0;j<duiziArr.length;j++){
			paiArrTemp=paiArr.concat();
			idx=paiArrTemp.indexOf(duiziArr[j])
			if(idx !=-1){
				paiArrTemp.splice(idx,1);
			}
			idx=paiArrTemp.indexOf(duiziArr[j])
			if(idx !=-1){
				paiArrTemp.splice(idx,1);
			}
			if(this.getCan33(paiArrTemp)==true){
				canHu=true;
				break ;
			}
		}
		return canHu;
	}

	/**判断能不能组成3*/
	__proto.getCan33=function(paiArr){
		paiArr.sort(this.compareFunction);
		if(paiArr.length==0){
			return true;
		};
		var result=false;
		var idx1=0;
		var idx2=0;
		if(paiArr[0]==paiArr[1] && paiArr[1]==paiArr[2]){
			var tempArr=paiArr.concat();
			paiArr.splice(0,3);
			result=this.getCan33(paiArr);
			if(result==false){
				paiArr=tempArr;
				var tempCard=paiArr[0];
				if(tempCard==32 || tempCard==33 || tempCard==34 || tempCard==28 || tempCard==29 || tempCard==30 || tempCard==31 || tempCard==8 || tempCard==9 ||
					tempCard==17 || tempCard==18 || tempCard==26 || tempCard==27){
					return false;
				}
				idx1=paiArr.indexOf(tempCard+1);
				idx2=paiArr.indexOf(tempCard+2);
				if(idx1 !=-1 && idx2 !=-1){
					paiArr.splice(0,1);
					paiArr.splice(paiArr.indexOf(tempCard+1),1);
					paiArr.splice(paiArr.indexOf(tempCard+2),1);
					result=this.getCan33(paiArr);
				}
				else{
					return false;
				}
			}
		}
		else{
			if(tempCard==32 || tempCard==33 || tempCard==34 || tempCard==28 || tempCard==29 || tempCard==30 || tempCard==31 || tempCard==8 || tempCard==9 ||
				tempCard==17 || tempCard==18 || tempCard==26 || tempCard==27){
				return false;
			}
			idx1=paiArr.indexOf(tempCard+1);
			idx2=paiArr.indexOf(tempCard+2);
			if(idx1 !=-1 && idx2 !=-1){
				paiArr.splice(0,1);
				paiArr.splice(paiArr.indexOf(tempCard+1),1);
				paiArr.splice(paiArr.indexOf(tempCard+2),1);
				result=this.getCan33(paiArr);
			}
			else{
				return false;
			}
		}
		return result;
	}

	/**找出牌组里面的所有对子*/
	__proto.getPaiduizi=function(paiArr){
		var returnArr=[];
		var i=0,len=paiArr.length;
		var allPai=new Object();
		var tempPai=-1;
		for(i=0;i<paiArr.length;i++){
			if(paiArr[i]==tempPai){
				allPai[tempPai]+=1;
				if(allPai[tempPai]==2){
					returnArr.push(tempPai);
				}
			}
			else{
				tempPai=paiArr[i];
				allPai[tempPai]=1;
			}
		}
		return returnArr;
	}

	/**根据听哪张牌（可以知道胡哪几张张牌），求出哪些牌应该倒下来*/
	__proto.getTingDownCards=function(tingCard,kouCards){
		var paiArr=this.allCardsVec[this.selfChairPos].concat();
		if(this.theFourteenCardVec[this.selfChairPos] !=-1){
			paiArr=paiArr.concat(this.theFourteenCardVec[this.selfChairPos]);
		};
		var idx=paiArr.indexOf(tingCard);
		if(idx !=-1){
			paiArr.splice(idx,1);
		};
		var i=0;
		for(i=0;i<kouCards.length;i++){
			idx=paiArr.indexOf(kouCards[i]);
			if(idx !=-1){
				paiArr.splice(idx,1);
			}
			idx=paiArr.indexOf(kouCards[i]);
			if(idx !=-1){
				paiArr.splice(idx,1);
			}
			idx=paiArr.indexOf(kouCards[i]);
			if(idx !=-1){
				paiArr.splice(idx,1);
			}
		}
		this.canLiCards=[];
		var canDownCards=[];
		var huArr=this.gethuCards(tingCard);
		var haveQixiaodui=false;
		if(huArr.length==1){
			if(UserData.roomtype==11 || UserData.roomtype==10){
				if(this.isHuqixiaodui(paiArr.concat(huArr[0]))){
					return {canDownCards:[huArr[0]],isHaveJiang:false,jiangpai:0};
				}
			}
		}
		else{
			for(i=0;i<huArr.length;i++){
				if(UserData.roomtype==11 || UserData.roomtype==10){
					if(this.isHuqixiaodui(paiArr.concat(huArr[i]))){
						haveQixiaodui=true;
					}
				}
			}
			if(haveQixiaodui==true){
				return {canDownCards:this.allCardsVec[this.selfChairPos],isHaveJiang:false,jiangpai:0};
			}
		}
		this.judgeHuZhidingCards(huArr,paiArr);
		for(i=0;i<this.canLiCards.length;i++){
			idx=paiArr.indexOf(this.canLiCards[i]);
			if(idx !=-1){
				paiArr.splice(idx,1);
			}
		}
		canDownCards=paiArr.concat();
		var duiziArr=this.getPaiduizi(paiArr);
		var isHaveJiang=false;
		var jiangpai=0;
		var j=0;;
		var num=0;
		var can33=true;
		var paiArrTemp;
		for(j=0;j<duiziArr.length;j++){
			paiArrTemp=paiArr.concat();
			idx=paiArrTemp.indexOf(duiziArr[j])
			if(idx !=-1){
				paiArrTemp.splice(idx,1);
			}
			idx=paiArrTemp.indexOf(duiziArr[j])
			if(idx !=-1){
				paiArrTemp.splice(idx,1);
			};
			var allTrue=true;
			for(var k=0;k<huArr.length;k++){
				if(this.getCan33(paiArrTemp.concat(huArr[k]))==false){
					allTrue=false;
				}
			}
			if(allTrue==true){
				can33=true;
				paiArr=paiArrTemp;
				isHaveJiang=true;
				jiangpai=duiziArr[j];
				break ;
			}
		}
		canDownCards=paiArr.concat(this.appendDownCards);
		return {canDownCards:canDownCards,isHaveJiang:isHaveJiang,jiangpai:jiangpai};
	}

	/**判断是不是胡七小队*/
	__proto.isHuqixiaodui=function(paiArr){
		paiArr.sort(this.compareFunction);
		var i=0,len=paiArr.length;
		var canHu=false;
		if(len%3 !=2){
			return false;
		}
		if(len==14){
			var isTrue=true;
			for(i=0;i<7;i++){
				if(paiArr[i*2] !=paiArr[i*2+1]){
					isTrue=false;
				}
			}
			if(isTrue==true){
				return true;
			}
		}
		return false;
	}

	/**判断当前的手里的牌能不能胡指定的几张牌 */
	__proto.judgeHuZhidingCards=function(huCards,paiArr){
		this.appendDownCards=[];
		var paizu33Arr=this.getPaizu(paiArr);
		var i=0,len=paizu33Arr.length;
		var tempArr=paiArr.concat();
		var idx=0;
		for(i=0;i<len;i++){
			idx=tempArr.indexOf(paizu33Arr[i][0])
			if(idx !=-1){
				tempArr.splice(idx,1);
			}
			idx=tempArr.indexOf(paizu33Arr[i][1])
			if(idx !=-1){
				tempArr.splice(idx,1);
			}
			idx=tempArr.indexOf(paizu33Arr[i][2])
			if(idx !=-1){
				tempArr.splice(idx,1);
			};
			var allRight=true;
			var j=0;
			for(j=0;j<huCards.length;j++){
				if(this.judgeHu(tempArr.concat(huCards[j]))==false){
					allRight=false;
				}
			}
			if(allRight==true){
				this.canLiCards.push(paizu33Arr[i][0],paizu33Arr[i][1],paizu33Arr[i][2]);
				this.judgeHuZhidingCards(huCards,tempArr);
				return;
			}
			else{
				tempArr.push(paizu33Arr[i][0],paizu33Arr[i][1],paizu33Arr[i][2]);
			}
		}
	}

	__proto.getPaizu=function(paiArr){
		paiArr.sort(this.compareFunction);
		var returnArr=this.getPaizuKe(paiArr).concat(this.getPaizuShun(paiArr));
		return returnArr;
	}

	__proto.getPaizuKe=function(paiArr){
		var returnArr=[];
		var i=0,len=paiArr.length;
		var allPai=new Object();
		var tempPai=-1;
		for(i=0;i<paiArr.length;i++){
			if(paiArr[i]==tempPai){
				allPai[tempPai]+=1;
				if(allPai[tempPai]==3){
					returnArr.push([tempPai,tempPai,tempPai]);
				}
			}
			else{
				tempPai=paiArr[i];
				allPai[tempPai]=1;
			}
		}
		return returnArr;
	}

	__proto.getPaizuShun=function(paiArr){
		var returnArr=[];
		var i=0,len=paiArr.length;
		var allPai=new Object();
		var tempCard=0;
		var idx1=0;
		var idx2=0
		for(i=0;i<paiArr.length-2;i++){
			tempCard=paiArr[i];
			if(tempCard !=32 && tempCard !=33 && tempCard !=34 && tempCard !=28 && tempCard !=29 && tempCard !=30 && tempCard !=31 && tempCard !=8 && tempCard !=9 &&
				tempCard !=17 && tempCard !=18 && tempCard !=26 && tempCard !=27){
				idx1=paiArr.indexOf(tempCard+1);
				idx2=paiArr.indexOf(tempCard+2);
				if(idx1 !=-1 && idx2 !=-1){
					returnArr.push([tempCard,tempCard+1,tempCard+2]);
				}
			}
		}
		return returnArr;
	}

	__proto.checkAllBuhuaComp=function(){
		var isAllOver=true;
		for(var i=0;i <this.overHuaVec.length;i++){
			if(this.overHuaVec[i] > 0){
				isAllOver=false;
			}
		}
		return isAllOver;
	}

	__proto.getRandomFourValue=function(){
		var retArr=[];
		var arr=[2,3,4,5,6,7,8,9,10,11,12];
		var i=0,idx=0;
		for(i=0;i<4;i++){
			idx=Math.floor(Math.random()*arr.length);
			retArr.push(arr[idx]);
			arr.splice(idx,1);
		}
		retArr.sort(function(A,B){
			if(A>B){
				return-1;
			}
			else if(A==B){
				return 0;
			}
			else{
				return 1;
			}
		});
		return retArr;
	}

	__proto.getChengbaoNumRefNum=function(pos,fromPos){
		var retNum=0;
		var i=0;
		for(i=0;i<this.chiFromVec[pos].length;i++){
			if(this.chiFromVec[pos][i]==fromPos){
				retNum+=1;
			}
		}
		for(i=0;i<this.pengFromVec[pos].length;i++){
			if(this.pengFromVec[pos][i]==fromPos){
				retNum+=1;
			}
		}
		for(i=0;i<this.mingGangFromVec[pos].length;i++){
			if(this.mingGangFromVec[pos][i]==fromPos){
				retNum+=1;
			}
		}
		for(i=0;i<this.anGangFromVec[pos].length;i++){
			if(this.anGangFromVec[pos][i]==fromPos){
				retNum+=1;
			}
		}
		console.log("getChengbaoNumRefNum::"+retNum+"  pos:"+pos+" frompos:"+fromPos);
		return retNum;
	}

	__proto.getPengGangNum=function(pos){
		return this.chiVec[pos].length+this.pengVec[pos].length+this.anGangVec[pos].length+this.mingGangVec[pos].length;
	}

	__proto.judgeMenqing=function(pos){
		var num=this.chiVec[pos].length+this.pengVec[pos].length+this.mingGangVec[pos].length;
		if(num==0){
			return true;
		}
		else{
			return false;
		}
	}

	/**获取一张最没有用的牌*/
	__proto.getUseless=function(){
		var level0=[];
		var level1=[];
		var level2=[];
		var level3=[];
		var level4=[];
		var level5=[];
		var level6=[];
		var tempCards=this.allCardsVec[this.selfChairPos];
		if(this.theFourteenCardVec[this.selfChairPos]!=-1){
			tempCards=tempCards.concat(this.theFourteenCardVec[this.selfChairPos]);
		}
		tempCards.sort(this.compareFunction);
		var i=0,len=tempCards.length;
		var duiziArr=this.getPaiduizi(tempCards);
		var shunziArr=this.getPaizuShun(tempCards);
		var havedui=false;
		var haveshun=false;
		for(i=0;i<len;i++){
			if(this.judgeHua(tempCards[i])){
				break ;
			}
			havedui=this.checkduizi(tempCards[i],duiziArr);
			haveshun=this.checkshunzi(tempCards[i],shunziArr);
			if(this.getHuTipArr(tempCards[i]).length > 0){
				if(this.getHuTipArr(tempCards[i]).length > 2){
					level4.push(tempCards[i]);
				}
				else if(this.getHuTipArr(tempCards[i]).length > 1){
					level5.push(tempCards[i]);
				}
				else{
					level6.push(tempCards[i]);
				}
			}
			else
			if(havedui==false && haveshun==false){
				level0.push(tempCards[i]);
			}
			else if(haveshun==false){
				level1.push(tempCards[i]);
			}
			else if(havedui==false){
				level2.push(tempCards[i]);
			}
			else{
				level3.push(tempCards[i]);
			}
		}
		if(level4.length > 0){
			return level4[0];
		}
		else
		if(level5.length > 0){
			return level5[0];
		}
		else
		if(level6.length > 0){
			return level6[0];
		}
		else if(level3.length>0){
			for(i=0;i<level3.length;i++){
				if(this.checkTwoAndMidShun(level3[i],shunziArr,tempCards)==true){
					console.log("检查中间牌是否应该出，应该出了牌：："+level3[i]);
					return level3[i];
				}
			}
		}
		else if(level0.length > 0){
			var card=this.getGuliPai(level0,tempCards);
			console.log("机器人检测返回了孤立牌：："+card);
			return card;
		}
		else if(level1.length > 0){
			if(level1.length==1){
				if(level2.length==0){
					console.log("机器人检测返回了对子：："+level1[0]);
					return level1[0];
				}
				else{
					console.log("机器人检测返回了顺子：："+level2[0]);
					return level2[0];
				}
			}
			else{
				console.log("机器人检测返回了对子：："+level1[0]);
				return level1[0];
			}
		}
		else if(level2.length > 0){
			console.log("机器人检测返回了顺子：："+level2[0]);
			return level2[0];
		}
		else if(level3.length > 0){
			console.log("机器人检测返回了对子顺子：："+level2[0]);
			return level3[0];
		}
		return this.allCardsVec[this.selfChairPos][0];
	}

	/**判断某张牌是否是两张并且在顺子的中间*/
	__proto.checkTwoAndMidShun=function(cardIdx,shunziArr,cards){
		return false;
		var preNum=0;
		var haveNum=0;
		var nextNum=0;
		var i=0;
		for(i;i<shunziArr.length;i++){
			if(shunziArr[i][1]==cardIdx){
				preNum=0;
				haveNum=0;
				nextNum=0;
				for(i=0;i<cards.length;i++){
					if(cards[i]==cardIdx){
						haveNum+=1;
					}
					if(cards[i]==cardIdx-1){
						preNum+=1;
					}
					if(cards[i]==cardIdx+1){
						nextNum+=1;
					}
				}
				if(haveNum > preNum && haveNum > nextNum){
					return true;
				}
			}
		}
		return false;
	}

	__proto.checkduizi=function(cardIdx,paizu){
		for(var i=0;i<paizu.length;i++){
			if(paizu[i]==cardIdx){
				return true;
			}
		}
		return false;
	}

	/**检测某张牌在手里是不是孤立的一张*/
	__proto.checkshunzi=function(cardIdx,paizu){
		for(var i=0;i<paizu.length;i++){
			if(paizu[i][0]==cardIdx || paizu[i][1]==cardIdx || paizu[i][2]==cardIdx){
				return true;
			}
		}
		return false;
	}

	/**获取单张里面最孤立的牌*/
	__proto.getGuliPai=function(arr,fromArr){
		var result=[];
		result[0]=0;
		result[1]=0;
		result[2]=0;
		result[3]=0;
		var i=0,len=0;
		var level0=[];
		var level1=[];
		var level2=[];
		var level3=[];
		var level4=[];
		var level5=[];
		var lv0=[];
		var lv1=[];
		var lv2=[];
		len=fromArr.length;
		for(i=0;i<len;i++){
			result[BaseCard.getTypeByCardIndex(fromArr[i])]+=1;
		}
		len=arr.length;
		for(i=0;i<len;i++){
			if(result[BaseCard.getTypeByCardIndex(arr[i])] < 2){
				if(arr[i] <=27){
					level0.push(arr[i]);
				}
				else{
					level1.push(arr[i]);
				}
			}
			else if(result[BaseCard.getTypeByCardIndex(arr[i])] < 3){
				if(arr[i] <=27){
					level2.push(arr[i]);
				}
				else{
					level3.push(arr[i]);
				}
			}
			else{
				if(arr[i] <=27){
					level4.push(arr[i]);
				}
				else{
					level5.push(arr[i]);
				}
			}
		}
		if(level0.length > 0){
			return level0[0];
		}
		else if(level1.length > 0){
			return level1[0];
		}
		else if(level2.length > 0){
			return level2[0];
		}
		else if(level3.length > 0){
			lv0=[];
			lv1=[];
			lv2=[]
			len=level3.length;
			for(i=0;i<len;i++){
				if(fromArr.indexOf(level3[i]-1)!=-1 && BaseCard.getTypeByCardIndex(level3[i]-1)==BaseCard.getTypeByCardIndex(level3[i])){
					lv2.push(level3[i]);
				}
				else if(fromArr.indexOf(level3[i]+1)!=-1 && BaseCard.getTypeByCardIndex(level3[i]+1)==BaseCard.getTypeByCardIndex(level3[i])){
					lv2.push(level3[i]);
				}
				else if(fromArr.indexOf(level3[i]-2)!=-1 && BaseCard.getTypeByCardIndex(level3[i]-2)==BaseCard.getTypeByCardIndex(level3[i])){
					lv1.push(level3[i]);
				}
				else if(fromArr.indexOf(level3[i]+2)!=-1 && BaseCard.getTypeByCardIndex(level3[i]+2)==BaseCard.getTypeByCardIndex(level3[i])){
					lv1.push(level3[i]);
				}
				else{
					lv0.push(level3[i]);
				}
			}
			if(lv0.length > 0){
				return lv0[0];
			}
			else if(lv1.length > 0){
				return lv1[0];
			}
			else{
				return lv2[0];
			}
		}
		else if(level4.length > 0){
			return level4[0];
		}
		else if(level5.length > 0){
			lv0=[];
			lv1=[];
			lv2=[]
			len=level5.length;
			for(i=0;i<len;i++){
				if(fromArr.indexOf(level5[i]-1)!=-1 && BaseCard.getTypeByCardIndex(level5[i]-1)==BaseCard.getTypeByCardIndex(level5[i])){
					lv2.push(level5[i]);
				}
				else if(fromArr.indexOf(level5[i]+1)!=-1 && BaseCard.getTypeByCardIndex(level5[i]+1)==BaseCard.getTypeByCardIndex(level5[i])){
					lv2.push(level5[i]);
				}
				else if(fromArr.indexOf(level5[i]-2)!=-1 && BaseCard.getTypeByCardIndex(level5[i]-2)==BaseCard.getTypeByCardIndex(level5[i])){
					lv1.push(level5[i]);
				}
				else if(fromArr.indexOf(level5[i]+2)!=-1 && BaseCard.getTypeByCardIndex(level5[i]+2)==BaseCard.getTypeByCardIndex(level5[i])){
					lv1.push(level5[i]);
				}
				else{
					lv0.push(level5[i]);
				}
			}
			if(lv0.length > 0){
				return lv0[0];
			}
			else if(lv1.length > 0){
				return lv1[0];
			}
			else{
				return lv2[0];
			}
		}
		return arr[0];
	}

	/**保存单步数据，有特殊的地方请自己继承实现*/
	__proto.saveStepData=function(){
		var replayObj=new Object();
		replayObj.userData=this.playerInfoVec.concat();
		replayObj.outputCardsVec=__newvec(this.chairNum);
		replayObj.allCardsVec=__newvec(this.chairNum);
		replayObj.chiVec=__newvec(this.chairNum);
		replayObj.chiFromVec=__newvec(this.chairNum);
		replayObj.pengVec=__newvec(this.chairNum);
		replayObj.pengFromVec=__newvec(this.chairNum);
		replayObj.mingGangVec=__newvec(this.chairNum);
		replayObj.mingGangFromVec=__newvec(this.chairNum);
		replayObj.anGangVec=__newvec(this.chairNum);
		replayObj.anGangFromVec=__newvec(this.chairNum);
		replayObj.theFourteenCardVec=__newvec(this.chairNum);
		replayObj.huaVec=__newvec(this.chairNum);
		var i=0,len=this.chairNum;
		for(i=0;i<len;i++){
			replayObj.allCardsVec[i]=this.allCardsVec[i].concat();
			replayObj.theFourteenCardVec[i]=this.theFourteenCardVec[i];
			replayObj.outputCardsVec[i]=this.outputCardsVec[i].concat();
			replayObj.chiVec[i]=this.chiVec[i].concat();
			replayObj.chiFromVec[i]=this.chiFromVec[i].concat();
			replayObj.pengVec[i]=this.pengVec[i].concat();
			replayObj.pengFromVec[i]=this.pengFromVec[i].concat();
			replayObj.mingGangVec[i]=this.mingGangVec[i].concat();
			replayObj.mingGangFromVec[i]=this.mingGangFromVec[i].concat();
			replayObj.anGangVec[i]=this.anGangVec[i].concat();
			replayObj.anGangFromVec[i]=this.anGangFromVec[i].concat();
			replayObj.huaVec[i]=this.huaVec[i].concat();
		}
		replayObj.curHandlePos=this.curHandlePos;
		replayObj.reconnect=1;
		replayObj.leftDesktopCardsNum=this.leftDesktopCardsNum;
		replayObj.curOutPutPos=this.curOutPutPos;
		this.replayAllStepData[this.replayCurStep]=replayObj;
	}

	/**恢复单步数据*/
	__proto.recoveryByReplayData=function(replayData){
		var i=0,len=this.chairNum;
		for(i=0;i<len;i++){
			this.allCardsVec[i]=replayData.allCardsVec[i].concat();
			this.theFourteenCardVec[i]=replayData.theFourteenCardVec[i];
			this.huaVec[i]=replayData.huaVec[i].concat();
			this.outputCardsVec[i]=replayData.outputCardsVec[i].concat();
			this.chiVec[i]=replayData.chiVec[i].concat();
			this.chiFromVec[i]=replayData.chiFromVec[i].concat();
			this.pengVec[i]=replayData.pengVec[i].concat();
			this.pengFromVec[i]=replayData.pengFromVec[i].concat();
			this.mingGangVec[i]=replayData.mingGangVec[i].concat();
			this.mingGangFromVec[i]=replayData.mingGangFromVec[i].concat();
			this.anGangVec[i]=replayData.anGangVec[i].concat();
			this.anGangFromVec[i]=replayData.anGangFromVec[i].concat();
		}
		this.curHandlePos=replayData.curHandlePos;
		this.curOutPutPos=replayData.curOutPutPos;
		this.leftDesktopCardsNum=replayData.leftDesktopCardsNum;
	}

	__getset(0,__proto,'gameHasStarted',function(){
		if(this.isGameStart || this.majiangMsgs.ACK_RoomInfo.RoundCount > 0){
			return true;
		}
		return false;
	});

	/**
	*@private
	*/
	/**设置一共有几个人玩*/
	__getset(0,__proto,'chairNum',function(){
		return this._chairNum;
		},function(value){
		this._chairNum=value;
		this.playerInfoVec.length=0;
		this.huaVec.length=this._chairNum;
		this.chiVec.length=this._chairNum;
		this.chiFromVec.length=this._chairNum;
		this.pengVec.length=this._chairNum;
		this.pengFromVec.length=this._chairNum;
		this.mingGangVec.length=this._chairNum;
		this.mingGangFromVec.length=this._chairNum;
		this.anGangVec.length=this._chairNum;
		this.anGangFromVec.length=this._chairNum;
		this.kouVec.length=this._chairNum;
		this.outputCardsVec.length=this._chairNum;
		this.allCardsVec.length=this._chairNum;
		this.theFourteenCardVec.length=this._chairNum;
		this.isTingVec.length=this._chairNum;
		this.TingHuCardVec.length=this._chairNum;
		this.huaNum.length=this._chairNum;
		this.TingDownCardVec.length=this._chairNum;
		var i=0;
		var len=this._chairNum;
		for(i=0;i<len;i++){
			this.huaVec[i]=[];
			this.chiVec[i]=[];
			this.chiFromVec[i]=[];
			this.pengVec[i]=[];
			this.pengFromVec[i]=[];
			this.mingGangVec[i]=[];
			this.mingGangFromVec[i]=[];
			this.outputCardsVec[i]=[];
			this.anGangVec[i]=[];
			this.anGangFromVec[i]=[];
			this.kouVec[i]=[];
			this.allCardsVec[i]=[];
			this.theFourteenCardVec[i]=-1;
			this.isTingVec[i]=false;
			this.TingHuCardVec[i]=[];
			this.TingDownCardVec[i]=[];
		}
		this.isHu=false;
		this.isLiu=false;
		this.leftDesktopCardsNum=0;
		this.isGameStart=false;
		this.huArr.length=0;
	});

	__static(MajiangModel,
	['DissolveResult_REF',function(){return this.DissolveResult_REF=["等待操作","同意" ,"拒绝"];},'GangtouCardArr',function(){return this.GangtouCardArr=[
		[[1,257,513],[65,321,577],[129,385,641],[769],[1537],[1281]],
		[[17,273,529],[81,337,593],[1025],[785],[1553],[1297]],
		[[33,289,545],[97,353,609],[1041],[801],[1569],[1329]],
		[[49,305,561],[113,369,625],[1057],[817],[1584],[1313]]];},'all_Cards',function(){return this.all_Cards=[
		1,2,3,4,5,6,7,8,9,
		10,11,13,14,15,16,17,18,
		19,20,21,22,23,24,25,26,27,
		28,29,30,31,
		32,33,34];}
	]);
	return MajiangModel;
})(AbstractLayer)


/**进桌子之后的麻将桌子界面*/
//class modules.game.majiangGame.view.MajiangGameView extends rb.framework.mvc.AbstractLayer
var MajiangGameView=(function(_super){
	function MajiangGameView(){
		this._majiangPage=null;
		this.popChatArr=null;
		this.expressloaderArr=null;
		this._playerInfoPage=null;
		this._tableInfoPage=null;
		this._calculatePage=null;
		this._replayControlView=null;
		this._chatPage=null;
		// }
		this._gui=null;
		// });
		this._voiceRecording=-1;
		this.isPlayVoice=false;
		this.isClick=false;
		//****************************
		this.isRecording=false
		MajiangGameView.__super.call(this);
		this.setType(3);
	}

	__class(MajiangGameView,'modules.game.majiangGame.view.MajiangGameView',_super);
	var __proto=MajiangGameView.prototype;
	__proto.onAdd=function(){
		this.onAddUI();
		this.onAddListener();
	}

	__proto.onRemove=function(){
		this.onRemoveUI();
		this.onRemoveListener();
	}

	__proto.onAddUI=function(){
		if(this._gui==null){
			this._gui=new GameTableUI();
			this._gui.mouseThrough=true;
		}
		console.log("桌面被添加到舞台！！");
		UIManager.instance.uiLayer.addChild(this._gui);
		if(this._majiangPage==null){
			this._majiangPage=new MajiangPage(new MajiangPageUI());
			this._gui.mjContainer.addChild(this._majiangPage.skin);
		}
		if(this._tableInfoPage==null){
			this._tableInfoPage=new TableInfoPage(this._gui.tableInfoPage);
		}
		if(this._playerInfoPage==null){
			this._playerInfoPage=new PlayerInfoPage(this._gui.playerInfoPage);
		}
		if(this._calculatePage==null){
			this._calculatePage=new CalculatePage(this._gui.calculatePart);
		}
		if(this._replayControlView==null){
			this._replayControlView=new ReplayControlView(this._gui.replayControlView);
		}
		this._chatPage=Chat.hchatPage;
		this.gui.chatContainer.addChild(this._chatPage.skin);
		this._chatPage.hide();
		if(UserData.isReplay==true){
			this._replayControlView.show();
		}
		else{
			this._replayControlView.hide();
		}
		this._gui.leftPopChat.visible=false;
		this._gui.rightPopChat.visible=false;
		this._gui.bottomPopChat.visible=false;
		this._gui.topPopChat.visible=false;
		EventCenter.instance.on("SEND_CHAT_MESSAGE",this,this.onSendChat);
		this._gui.tableInfoPage.voiceIntercomBtn.on("click",this,this.onVoiceOpClick);
		this._gui.tableInfoPage.voiceIntercomBtn.on("mouseout",this,this.onVoiceOpOut);
		this._gui.tableInfoPage.chatBtn.on("click" ,this,this.onShowChatPage);
	}

	__proto.initPopChat=function(chairNum){
		(chairNum===void 0)&& (chairNum=3);
		this.popChatArr=[];
		switch(chairNum){
			case 2:this.popChatArr.push(this._gui.bottomPopChat,this._gui.topPopChat);break ;
			case 3:this.popChatArr.push(this._gui.bottomPopChat,this._gui.rightPopChat,this._gui.leftPopChat);break ;
			case 4:this.popChatArr.push(this._gui.bottomPopChat,this._gui.rightPopChat,this._gui.topPopChat,this._gui.leftPopChat);
			}
	}

	__proto.onSendChat=function(dat){
		this.chatPage.switchState();
		var obj={message:dat,type:2};
		EventCenter.instance.event("SOCKET_SEND",ProtoMessage.getProtoMessage(370,obj));
	}

	__proto.onVoiceOpClick=function(e){
		this.isClick=true;
		console.log("点击了？？？？？？ ");
		if(this.isRecording){
			this.stopRecord();
		}
		else{
			this.startRecord();
		}
		e.stopPropagation();
	}

	/**取消上传*/
	__proto.onVoiceOpOut=function(e){
		if(this.isClick){
			this.isClick=false;
			return;
		}
		console.log("滑动了？？？？？？ ");
		if(this.isRecording==true){
			WX.stopRecord(-1);
			Laya.timer.clear(this,this.onRecording);
			this._gui.tableInfoPage.voiceTip.visible=false;
			this._gui.tableInfoPage.voicePlay.visible=false;
			this.tableInfoPage.stopVoicePlay();
			this.onStopSuccess();
			this.isRecording=false;
			if(!this.isPlayVoice){
				this.Voice();
			}
		}
	}

	__proto.startRecord=function(){
		WX.startRecord();
		this._gui.tableInfoPage.voicePlay.visible=true;
		this.tableInfoPage.playVoicePlay();
		this._gui.tableInfoPage.voiceTip.visible=true;
		this._voiceRecording=TimeManager.unixtime;
		this._gui.tableInfoPage._time.text="15'"
		Laya.timer.loop(100,this,this.onRecording);
		this.isRecording=true;
	}

	__proto.stopRecord=function(){
		var time=TimeManager.unixtime-this._voiceRecording;
		if(time < 500){
			return;
		}
		else if(time < 1000){
			WX.stopRecord(-1);
			QuickUtils.VoiceTip(3);
			Laya.timer.clear(this,this.onRecording);
			this._gui.tableInfoPage.voiceTip.visible=false;
			this._gui.tableInfoPage.voicePlay.visible=false;
			this.tableInfoPage.stopVoicePlay();
			this.onStopSuccess();
		}
		else{
			WX.stopRecord(0,this,this.onStopSuccess)
			Laya.timer.clear(this,this.onRecording);
			this._gui.tableInfoPage.voiceTip.visible=false;
			this._gui.tableInfoPage.voicePlay.visible=false;
			this.tableInfoPage.stopVoicePlay();
			GameModule.instance.gameContext.view.gui.tableInfoPage.voiceIntercomBtn.disabled=true;
			GameModule.instance.gameContext.view.gui.tableInfoPage.voiceDis.visible=true;
		}
		this.isRecording=false;
		if(!this.isPlayVoice){
			this.Voice();
		}
	}

	__proto.onStopSuccess=function(){
		GameModule.instance.gameContext.view.gui.tableInfoPage.voiceIntercomBtn.disabled=false;
		GameModule.instance.gameContext.view.gui.tableInfoPage.voiceDis.visible=false;
	}

	/**时间条 **/
	__proto.onRecording=function(){
		var du=(TimeManager.unixtime-this._voiceRecording)/1000;
		this._gui.tableInfoPage._time.text=(15-Math.floor(du))+"'"
		if(du>=AppConfig.maxVoiceTime){
			this.stopRecord();
		}
	}

	// }
	__proto.onRecChat=function(msg){
		var arr=msg.message.split("#");
		if(arr.length > 1){
			this.showPopChat(arr[0],arr[1]);
		}
	}

	// }
	__proto.showPopChat=function(uid,worlds){
		if(this.popChatArr==null){
			this.initPopChat(this.model.chairNum);
		};
		var pos=this.model.getPlayerPosByUid(uid);
		var dir=this.model.getChairDirByPos(pos);
		var wordsArr=worlds.split("|");
		if(wordsArr.length > 1){
			if(wordsArr[0]=="express"){
				var index=parseInt(wordsArr[1]);
				this._playerInfoPage.showExpress(dir,index+1);
				return;
			}
			else if(wordsArr[0]=="VoiceId"){
				console.log("youyuyinguolaile");
				WX.voiceArr.push([parseInt(uid),wordsArr[1]]);
				if(!this.isPlayVoice && this.isRecording==false){
					this.Voice();
				}
			}
		}
		else{
			this.popChatArr[dir].visible=true;
			this.popChatArr[dir].tf.text=worlds;
			this.popChatArr[dir].backimg.width=this.popChatArr[dir].tf.textField.textWidth+30;
			this.popChatArr[dir].backimg.height=this.popChatArr[dir].tf.textField.textHeight+40;
			Tween.clearAll(this.popChatArr[dir]);
			this.popChatArr[dir].alpha=1;
			var times=this.popChatArr[dir].tf.textField.lines.length*2000;
			SoundManager.playSound(SoundPlay.instance.getliaotianPath(this.model.playerByPos(pos).sex,AppConfig.getChatSound(worlds)),1);
		}
		if(this.popChatArr[dir]==this._gui.rightPopChat){
			this.popChatArr[dir].x=522+(392-this.popChatArr[dir].tf.textField.textWidth);
		}
		Tween.to(this.popChatArr[dir],{alpha:0.3},times,null,new Handler(this,this.onCompeteTween,[this.popChatArr[dir]]),500);
	}

	__proto.Voice=function(){
		var _$this=this;
		if(WX.voiceArr.length<=0){
			return;
		}
		if(WX.isUpLoading){
			return;
		}
		this.isPlayVoice=true;
		var arr=WX.voiceArr.shift();
		WX.downloadVoice(arr[1],this,this.playVoice,[arr[0]]);
		Browser.window.wx.onVoicePlayEnd({
			success:function (res){
				console.log("声音播放完成了！！ uid：："+arr[0]);
				console.log("WX.voiceArr.length::"+WX.voiceArr.length);
				Laya.timer.clear(GameModule.instance.gameContext.view,_$this.recoverSoundVolume);
				GameModule.instance.gameContext.view.playerInfoPage.hideVoice(arr[0]);
				AppConfig.isPlayingRecord=false;
				Laya.timer.once(1000,null,SoundPlay.swithMusic,["game"]);
				if(WX.voiceArr.length>0){
					_$this.Voice();
				}
				else{
					WX.isDownLoading=false;
					if(WX.uploadArr.length>0){
						WX.uploadVoice(WX.uploadArr[0]);
						WX.uploadArr.length=0;
					}
					GameModule.instance.gameContext.view.isPlayVoice=false;
					if(WX.isUpLoading==false){
						GameModule.instance.gameContext.view.gui.tableInfoPage.voiceIntercomBtn.disabled=false;
						GameModule.instance.gameContext.view.gui.tableInfoPage.voiceDis.visible=false;
					}
				}
			}
		});
	}

	__proto.playVoice=function(uid){
		Laya.timer.once(15000,this,this.recoverSoundVolume,[parseInt(uid)]);
		this._playerInfoPage.showVoice(parseInt(uid));
	}

	__proto.recoverSoundVolume=function(uid){
		if(this.isPlayVoice==false)return;
		this.isPlayVoice=false;
		AppConfig.isPlayingRecord=false;
		SoundPlay.swithMusic("game");
		this._playerInfoPage.hideVoice(uid);
		this._gui.tableInfoPage.voiceIntercomBtn.disabled=false;
		this._gui.tableInfoPage.voiceDis.visible=false;
	}

	__proto.playend=function(uid){
		this._playerInfoPage.hideVoice(uid);
	}

	__proto.onCompeteTween=function(obj){
		obj.alpha=1;
		obj.visible=false;
	}

	__proto.onShowChatPage=function(msg){
		this.chatPage.switchState();
		(msg).stopPropagation();
	}

	__proto.setChairNmu=function(num){
		this._majiangPage.setChairNum(num);
		this._playerInfoPage.setChairNum(num);
		this.reset();
	}

	__proto.startGame=function(){}
	__proto.onAddListener=function(){}
	//this.addHandler(MsgNames.TICKET_CARD_CHANGE,onticketCardChange);
	__proto.onticketCardChange=function(msg){
		this.calculatePage.showGetTicket(msg[0]);
		if(msg)msg.complete();
	}

	__proto.onRemoveUI=function(){
		if(this._gui !=null){
			UIManager.instance.uiLayer.removeChild(this._gui);
			console.log("桌面被移除舞台！！");
			this._gui.tableInfoPage.chatBtn.off("mousedown" ,this,this.onShowChatPage);
			EventCenter.instance.off("SEND_CHAT_MESSAGE",this,this.onSendChat);
			this._gui.tableInfoPage.voiceIntercomBtn.off("click",this,this.onVoiceOpClick);
			this._gui.tableInfoPage.voiceIntercomBtn.off("mouseout",this,this.onVoiceOpOut);
		}
	}

	//todo
	__proto.reset=function(){
		UserInfoPage.instance.hide();
		this._majiangPage.reset();
		this._tableInfoPage.reset();
		this._playerInfoPage.havePiaoReset();
		this._calculatePage.reset();
		this._replayControlView.reset();
	}

	__proto.replayup_reset=function(){
		this._majiangPage.reset();
		this._tableInfoPage.reset();
		this._playerInfoPage.havePiaoReset();
		this._calculatePage.reset();
		this._replayControlView.replayup_reset();
	}

	__proto.onRemoveListener=function(){}
	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'replayControlView',function(){
		return this._replayControlView;
	});

	__getset(0,__proto,'majiangPage',function(){
		return this._majiangPage;
	});

	__getset(0,__proto,'playerInfoPage',function(){
		return this._playerInfoPage;
	});

	__getset(0,__proto,'gui',function(){
		return this._gui;
	});

	__getset(0,__proto,'chatPage',function(){
		return this._chatPage;
	});

	__getset(0,__proto,'tableInfoPage',function(){
		return this._tableInfoPage;
	});

	__getset(0,__proto,'calculatePage',function(){
		return this._calculatePage;
	});

	return MajiangGameView;
})(AbstractLayer)


/**底部玩家手里的单张牌*/
//class modules.game.majiangGame.view.card.handCard.BottomHandleCard extends modules.game.majiangGame.view.card.BaseCard
var BottomHandleCard=(function(_super){
	function BottomHandleCard(skin,needAlpha,needSkinY0){
		this.dragRegion=null;
		this.readyOffsetY=-20;
		this.skinPreX=0;
		this.needAlpha=true;
		this.needSkinY0=true;
		this._isNextOutputTingCard=false;
		this._isNextOutputKouCard=false;
		(needAlpha===void 0)&& (needAlpha=true);
		(needSkinY0===void 0)&& (needSkinY0=true);
		BottomHandleCard.__super.call(this,skin);
		this._skin=skin;
		this._skin["dark"]=false
		this.skinPreX=this._skin.x;
		this.needSkinY0=needSkinY0;
		if(needSkinY0){
			this._skin.y=0;
		}
		this.needAlpha=needAlpha;
		this.init();
	}

	__class(BottomHandleCard,'modules.game.majiangGame.view.card.handCard.BottomHandleCard',_super);
	var __proto=BottomHandleCard.prototype;
	__proto.onClickStage=function(e){
		console.log("click card e.target"+e.target+(e.target==this._skin));
		if(e.target !=this._skin && this._skin.y==this.readyOffsetY){
			this._skin.y=0;
			if(!((e.target instanceof ui.mainGame.Items.BottomHandleItemUI ))&& this.model.isTingVec[this.model.selfChairPos]==false){
				GameModule.instance.gameContext.view.majiangPage.hupaiTipPart.cancelShowHuTip(this.model.selfChairPos);
			}
			if(this.model.isNextGang==false){
				GameModule.instance.gameContext.controller.hidePreDiscardEff();
			}
		}
	}

	__proto.init=function(){}
	//setCardImg(272);
	__proto.onStopDrag=function(evt){
		GameModule.instance.gameContext.controller.hidePreDiscardEff();
		this.model.isDragingcard=false;
		var vie=this._skin;
		this.model.selfOutputCardPos=QuickUtils.localToGlobal(vie,new Point(vie.x,vie.y));
		this._skin.stopDrag();
		this._skin.x=this.skinPreX;
		if(this._skin.y <=this.readyOffsetY){
			this._skin.y=0;
			this.disCard();
			if(this.model.isTingVec[this.model.selfChairPos]==false){
				GameModule.instance.gameContext.view.majiangPage.hupaiTipPart.cancelShowHuTip(this.model.selfChairPos);
			}
		}
		else{
			if(this._skin.y > 0){
				this._skin.y=0;
				if(this.model.isTingVec[this.model.selfChairPos]==false){
					GameModule.instance.gameContext.view.majiangPage.hupaiTipPart.cancelShowHuTip(this.model.selfChairPos);
				}
			}
			else{
				this._skin.y=1;
				Tween.to(this._skin,{y:this.readyOffsetY},40);
				SoundPlay.playEffect("audio_card_click");
				if(this.model.isTingVec[this.model.selfChairPos]==false){
					if(this.isShowTingImg){
					}
					else{
						GameModule.instance.gameContext.view.majiangPage.hupaiTipPart.cancelShowHuTip(this.model.selfChairPos);
					}
				}
				if(this.model.isNextGang==false){
					Laya.timer.frameOnce(1,this,this.showPreEff);
				}
			}
			if(this._isNextOutputKouCard || this.model.isNextGang){
				this.disCard();
				this._skin.y=0;
			}
			if(this._isNextOutputTingCard){
			}
		}
		this.view.gui.main.off("mouseup",this,this.onStopDrag);
		this.view.gui.main.off("mouseout",this,this.onStopDrag);
		Laya.timer.clear(this,this.onDragMove);
	}

	// Laya.stage.off(Event.DRAG_MOVE,this,onDragMove);
	__proto.showPreEff=function(){
		GameModule.instance.gameContext.controller.showPreDiscardEff(this.cardIdx);
	}

	/**出牌*/
	__proto.disCard=function(){
		console.log("chupaile ::"+BaseCard.CARD_REFERENCE[this.cardIdx]);
		var i=0;
		var len=0;
		if(this.model.isNextGang){
			var gangType=0;
			len=this.model.tempGangCards.length;
			for(i=0;i<len;i++){
				if(this.model.tempGangCards[i].card==this.cardIdx){
					gangType=this.model.tempGangCards[i].type;
					break ;
				}
			};
			var gangObj={SID:UserData.SID,CID:this.cardIdx-1};
			GameModule.instance.gameContext.controller.sendMsgCommond(ProtoMessage.getProtoMessage(310,gangObj));
			this.model.isNextGang=false;
			return;
		}
		if(this._isNextOutputTingCard){
			var obj={cmd:"TING"+this.cardIdx};
			len=this.model.tempKouCards.length;
			var kouStr="";
			if(true){
				for(i=0;i<len;i++){
					if(kouStr==""){
						kouStr=" "+this.model.tempKouCards[i];
					}
					else{
						kouStr+=","+this.model.tempKouCards[i];
					}
				}
				if(kouStr==""){
					kouStr=" -1|"
				}
				else{
					kouStr=kouStr+"|";
				};
				var resultObj=this.model.getTingDownCards(this.cardIdx,this.model.tempKouCards);
				var cards=resultObj.canDownCards;
				var downStr="";
				for(i=0;i<cards.length;i++){
					if(downStr==""){
						downStr=cards[i];
					}
					else{
						downStr+=","+cards[i];
					}
				}
				obj.cmd+=(kouStr+downStr);
				if(resultObj.isHaveJiang==true){
					obj.cmd+="="+resultObj.jiangpai;
				}
				else{
					obj.cmd+="="+-1;
				}
			}
			else{
				for(i=0;i<len;i++){
					if(kouStr==""){
						kouStr=" "+this.model.tempKouCards[i];
					}
					else{
						kouStr+=" "+this.model.tempKouCards[i];
					}
				}
				obj.cmd+=kouStr;
			}
			GameModule.instance.gameContext.controller.sendMsgCommond(obj);
			GameModule.instance.gameContext.view.majiangPage.handleBtns.hide();
			GameModule.instance.gameContext.model.isTingVec[GameModule.instance.gameContext.model.selfChairPos]=true;
			this._isNextOutputTingCard=false;
			this.model.isNextCancelBtnKou=false;
			this.model.isCancelTingp=false;
		}
		else if(this._isNextOutputKouCard){
			this.model.tempKouCards.push(this.cardIdx);
			this.view.majiangPage.handPart.showTempKouCards(this.cardIdx);
			this.view.majiangPage.handleBtns.showKouBtnEnable();
			this._isNextOutputKouCard=false;
			var cmd={cmd:"KOUP"+(this.cardIdx+1)};
			GameModule.instance.gameContext.controller.sendMsgCommond(cmd);
		}
		else{
			GameModule.instance.gameContext.controller.discard(this.cardIdx);
			GameModule.instance.gameContext.controller.hidePreDiscardEff();
		}
	}

	__proto.onDragMove=function(e){
		if(Laya.stage.mouseX >=Laya.stage.width || Laya.stage.mouseY >=Laya.stage.height || Laya.stage.mouseX <=0 || Laya.stage.mouseY <=0){
			this.onStopDrag();
		}
	}

	// protected var dragRec:Rectangle=new Rectangle(0,0,100,100);
	__proto.onStartDrag=function(e){
		this.model.isDragingcard=true;
		this._skin.parent.addChild(this._skin);
		this._skin.startDrag(null,true,100);
		Laya.timer.loop(50,this,this.onDragMove);
		this.view.gui.main.on("mouseup",this,this.onStopDrag);
		this.view.gui.main.on("mouseout",this,this.onStopDrag);
	}

	//Laya.stage.on(Event.MOUSE_MOVE,this,onDragMove);
	__proto.up=function(){
		if(this.state==0){
			return;
		}
		this._skin.valueImg.y=34;
		this._skin.frontImg.visible=true;
		this._skin.valueImg.visible=true;
		this._skin.backImg.visible=false;
		this._skin.downImg.visible=false;
		_super.prototype.up.call(this);
	}

	__proto.down=function(){
		if(this.state==1){
			return;
		}
		this._skin.y=0;
		this._skin.valueImg.y=2;
		this._skin.frontImg.visible=false;
		this._skin.valueImg.visible=true;
		this._skin.backImg.visible=false;
		this._skin.downImg.visible=true;
		_super.prototype.down.call(this);
	}

	__proto.back=function(){
		if(this.state==2){
			return;
		}
		this._skin.frontImg.visible=false;
		this._skin.valueImg.visible=false;
		this._skin.backImg.visible=true;
		this._skin.downImg.visible=false;
		_super.prototype.back.call(this);
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.showTingState=function(bool){
		if(!bool){
			this.canControl=false;
		}
		else{
			this.canControl=true;
			this._isNextOutputTingCard=true;
		}
	}

	__proto.cancleTingState=function(){
		this.canControl=true;
		this._isNextOutputTingCard=false;
	}

	__proto.showKouState=function(bool){
		if(!bool){
			this.canControl=false;
		}
		else{
			this.canControl=true;
			this._isNextOutputKouCard=true;
		}
	}

	__proto.removeTingEff=function(){
		this._isNextOutputTingCard=false;
	}

	__proto.setCardImg=function(cardIdx){
		this.showBaidaSimbol=true;
		console.log("bottom cardIdx ::"+cardIdx);
		if(BaseCard.CARD_REFERENCE.hasOwnProperty(cardIdx.toString())){
			this._skin.valueImg.skin="gametable/mahjongpai/"+BaseCard.CARD_REFERENCE[cardIdx.toString()];
		}
		_super.prototype.setCardImg.call(this,cardIdx);
	}

	/**设置是否可以操作*/
	__getset(0,__proto,'canControl',null,function(bool){
		if(!this.model.isSelfSitDown)
			bool=false;
		if(bool){
			Laya.stage.on("click",this,this.onClickStage);
			this._skin.on("mousedown",this,this.onStartDrag);
		}
		else{
			Laya.stage.off("click",this,this.onClickStage);
			this._skin.off("mousedown",this,this.onStartDrag);
			if(this.needAlpha){
				QuickUtils.addDark(this._skin,false);
				this._skin["dark"]=false;
			}
			if(this.needSkinY0){
				this._skin.y=0;
			}
			this._isNextOutputKouCard=false;
			this._isNextOutputTingCard=false;
		}
	});

	__getset(0,__proto,'canControlWitchDark',null,function(bool){
		if(bool){
			QuickUtils.addDark(this._skin,false);
			this._skin["dark"]==false;
		}
		else{
			this._skin.off("mousedown",this,this.onStartDrag);
			this._skin.off("mousedown",this,this.onStartDrag);
			QuickUtils.addDark(this._skin,true);
			this._skin["dark"]=true;
		}
	});

	__getset(0,__proto,'view',function(){
		return GameModule.instance.gameContext.view;
	});

	__getset(0,__proto,'model',function(){
		return GameModule.instance.gameContext.model;
	});

	__getset(0,__proto,'visible',function(){
		return this._skin.visible;
	});

	return BottomHandleCard;
})(BaseCard)


//class modules.game.majiangGame.view.card.handCard.LeftHandleCard extends modules.game.majiangGame.view.card.BaseCard
var LeftHandleCard=(function(_super){
	function LeftHandleCard(skin){
		this.tingpaiImg=null;
		//loadMingEff();
		this.mingEffAni=null;
		LeftHandleCard.__super.call(this,skin);
		this._skin=skin;
		this.tingpaiImg=this._skin.LiangEff;
	}

	__class(LeftHandleCard,'modules.game.majiangGame.view.card.handCard.LeftHandleCard',_super);
	var __proto=LeftHandleCard.prototype;
	// }
	__proto.up=function(){
		if(this.state==0){
			return;
		}
		this._skin.frontImg.visible=true;
		this._skin.valueImg.visible=false;
		this._skin.backImg.visible=false;
		this._skin.downImg.visible=false;
		_super.prototype.up.call(this);
	}

	__proto.down=function(){
		if(this.state==1){
			return;
		}
		this._skin.frontImg.visible=false;
		this._skin.valueImg.visible=true;
		this._skin.backImg.visible=false;
		this._skin.downImg.visible=true;
		_super.prototype.down.call(this);
	}

	__proto.back=function(){
		if(this.state==2){
			return;
		}
		this._skin.frontImg.visible=false;
		this._skin.valueImg.visible=false;
		this._skin.backImg.visible=true;
		this._skin.downImg.visible=false;
		_super.prototype.back.call(this);
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.setCardImg=function(cardIdx){
		console.log("left ::cardIdx"+cardIdx);
		if(this.cardIdx==cardIdx){
			return;
		}
		console.log("left cardIdx ::"+cardIdx);
		if(BaseCard.CARD_REFERENCE.hasOwnProperty(cardIdx.toString())){
			this._skin.valueImg.skin="gametable/mahjongpai/"+BaseCard.CARD_REFERENCE[cardIdx.toString()];
		}
		_super.prototype.setCardImg.call(this,cardIdx);
	}

	__proto.reset=function(){
		_super.prototype.reset.call(this);
		this.tingpaiImg.visible=false;
	}

	//mingEffAni.stop();
	__proto.showTingEff=function(){
		this.tingpaiImg.visible=true;
	}

	return LeftHandleCard;
})(BaseCard)


/**右边的那帮牌*/
//class modules.game.majiangGame.view.card.handCard.RightHandleCard extends modules.game.majiangGame.view.card.BaseCard
var RightHandleCard=(function(_super){
	function RightHandleCard(skin){
		this.tingpaiImg=null;
		//loadMingEff();
		this.mingEffAni=null;
		RightHandleCard.__super.call(this,skin);
		this._skin=skin;
		this.tingpaiImg=this._skin.LiangEff;
	}

	__class(RightHandleCard,'modules.game.majiangGame.view.card.handCard.RightHandleCard',_super);
	var __proto=RightHandleCard.prototype;
	// }
	__proto.up=function(){
		if(this.state==0){
			return;
		}
		this._skin.frontImg.visible=true;
		this._skin.valueImg.visible=false;
		this._skin.backImg.visible=false;
		this._skin.downImg.visible=false;
		_super.prototype.up.call(this);
	}

	__proto.down=function(){
		if(this.state==1){
			return;
		}
		this._skin.frontImg.visible=false;
		this._skin.valueImg.visible=true;
		this._skin.backImg.visible=false;
		this._skin.downImg.visible=true;
		_super.prototype.down.call(this);
	}

	__proto.back=function(){
		if(this.state==2){
			return;
		}
		this._skin.frontImg.visible=false;
		this._skin.valueImg.visible=false;
		this._skin.backImg.visible=true;
		this._skin.downImg.visible=false;
		_super.prototype.back.call(this);
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.setCardImg=function(cardIdx){
		console.log("right ::cardIdx"+cardIdx);
		if(this.cardIdx==cardIdx){
			return;
		}
		console.log("right ::cardIdx"+cardIdx);
		if(BaseCard.CARD_REFERENCE.hasOwnProperty(cardIdx.toString())){
			this._skin.valueImg.skin="gametable/mahjongpai/"+BaseCard.CARD_REFERENCE[cardIdx.toString()];
		}
		_super.prototype.setCardImg.call(this,cardIdx);
	}

	__proto.reset=function(){
		_super.prototype.reset.call(this);
		this.tingpaiImg.visible=false;
	}

	//mingEffAni.stop();
	__proto.showTingEff=function(){
		this.tingpaiImg.visible=true;
	}

	return RightHandleCard;
})(BaseCard)


//class modules.game.majiangGame.view.card.handCard.TopHandleCard extends modules.game.majiangGame.view.card.BaseCard
var TopHandleCard=(function(_super){
	function TopHandleCard(skin){
		TopHandleCard.__super.call(this,skin);
		this._skin=skin;
	}

	__class(TopHandleCard,'modules.game.majiangGame.view.card.handCard.TopHandleCard',_super);
	var __proto=TopHandleCard.prototype;
	__proto.up=function(){
		if(this.state==0){
			return;
		}
		this._skin.frontImg.visible=true;
		this._skin.valueImg.visible=false;
		this._skin.backImg.visible=false;
		this._skin.downImg.visible=false;
		_super.prototype.up.call(this);
	}

	__proto.down=function(){
		if(this.state==1){
			return;
		}
		this._skin.frontImg.visible=false;
		this._skin.valueImg.visible=true;
		this._skin.backImg.visible=false;
		this._skin.downImg.visible=true;
		_super.prototype.down.call(this);
	}

	__proto.back=function(){
		if(this.state==2){
			return;
		}
		this._skin.frontImg.visible=false;
		this._skin.valueImg.visible=false;
		this._skin.backImg.visible=true;
		this._skin.downImg.visible=false;
		_super.prototype.back.call(this);
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.setCardImg=function(cardIdx){
		console.log("top ::cardIdx"+cardIdx);
		if(this.cardIdx==cardIdx){
			return;
		}
		console.log("top ::cardIdx"+cardIdx);
		if(BaseCard.CARD_REFERENCE.hasOwnProperty(cardIdx.toString())){
			this._skin.valueImg.skin="gametable/mahjongpai/"+BaseCard.CARD_REFERENCE[cardIdx.toString()];
		}
		_super.prototype.setCardImg.call(this,cardIdx);
	}

	return TopHandleCard;
})(BaseCard)


//class modules.game.majiangGame.view.card.hupartCard.HuaItemCard extends modules.game.majiangGame.view.card.BaseCard
var HuaItemCard=(function(_super){
	function HuaItemCard(skin){
		this.nowNum=1;
		this.path="gametable/mahjongpai/";
		// };
		this.HUA_IMAGE={
			32:"zzhong.png",33:"zfa.png",34:"zbai.png",
			28:"zdong.png",29:"hjdong.png",30:"zxi.png",31:"zbei.png",
			35:"hchun.png",36:"hxia.png",37:"hqiu.png",38:"hjdong.png",
			39:"hmei.png",40:"hlan.png",41:"hzhu.png",42:"hju.png"
		};
		HuaItemCard.__super.call(this,skin);
	}

	__class(HuaItemCard,'modules.game.majiangGame.view.card.hupartCard.HuaItemCard',_super);
	var __proto=HuaItemCard.prototype;
	__proto.down=function(){
		if(this.state==1){
			return;
		}
		this._skin.downImg.visible=true;
		this._skin.valueImg.visible=true;
		_super.prototype.down.call(this);
	}

	__proto.back=function(){
		if(this.state==2){
			return;
		}
		this._skin.downImg.visible=false;
		this._skin.valueImg.visible=false;
		_super.prototype.back.call(this);
	}

	__proto.show=function(){
		this._skin.downImg.visible=true;
		this._skin.valueImg.visible=true;
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.downImg.visible=false;
		this._skin.valueImg.visible=false;
		this._skin.visible=false;
		this.nowNum=0
		this.cardIdx=0;
	}

	__proto.setCardImg=function(cardIdx){
		if(this.cardIdx==cardIdx){
			return;
		}
		this._skin.valueImg.skin=this.path+this.HUA_IMAGE[cardIdx.toString()];
		_super.prototype.setCardImg.call(this,cardIdx);
	}

	__proto.setNum=function(){
		if(this.nowNum==4)return;
		this.nowNum++;
	}

	// _skin.valueNum.skin=path+getNumUrl(nowNum);
	__proto.getNumUrl=function(num){
		var url="";
		switch(num){
			case 1:
				url="hua1.png";
				break ;
			case 2:
				url="hua2.png";
				break ;
			case 3:
				url="hua3.png";
				break ;
			case 4:
				url="hua4.png";
				break ;
			}
		return url;
	}

	return HuaItemCard;
})(BaseCard)


//class modules.game.majiangGame.view.card.outputCard.BaseOutputCard extends modules.game.majiangGame.view.card.BaseCard
var BaseOutputCard=(function(_super){
	function BaseOutputCard(skin){
		this.isTingState=false;
		this.timeLine=new TimeLine();
		BaseOutputCard.__super.call(this,skin);
		var curY=this._skin.curIdxSimbol.y;
		this.timeLine.to(this._skin.curIdxSimbol,{y:curY-40},500,Ease.quadOut).to(this._skin.curIdxSimbol,{y:curY},500,Ease.quadIn);
		this.timeLine.play(0,true);
		this.timeLine.pause()
	}

	__class(BaseOutputCard,'modules.game.majiangGame.view.card.outputCard.BaseOutputCard',_super);
	var __proto=BaseOutputCard.prototype;
	__proto.showCurOutputSimbol=function(bool){
		this._skin.curIdxSimbol.visible=bool;
		if(bool==true){
			this.timeLine.resume()
			}else{
			this.timeLine.pause()
		}
	}

	__proto.makeTingState=function(bool){
		QuickUtils.addDark(this._skin,bool);
		this.isTingState=bool;
	}

	return BaseOutputCard;
})(BaseCard)


//class modules.game.majiangGame.view.card.pengGangCard.BottomPengGangCards extends modules.game.majiangGame.view.card.pengGangCard.BasePengGangCards
var BottomPengGangCards=(function(_super){
	function BottomPengGangCards(skin){
		this._skin=null;
		BottomPengGangCards.__super.call(this);
		this._skin=skin;
		this.init();
	}

	__class(BottomPengGangCards,'modules.game.majiangGame.view.card.pengGangCard.BottomPengGangCards',_super);
	var __proto=BottomPengGangCards.prototype;
	__proto.init=function(){
		var i=0;
		var len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i]=new BottomOutputCard(this._skin["card"+i]);
		}
	}

	__proto.show=function(){
		this._skin.visible=true;
		_super.prototype.show.call(this);
	}

	__proto.hide=function(){
		this._skin.visible=false;
		_super.prototype.hide.call(this);
	}

	__getset(0,__proto,'visible',function(){
		return this._skin.visible;
	});

	return BottomPengGangCards;
})(BasePengGangCards)


//class modules.game.majiangGame.view.card.pengGangCard.LeftPengGangCards extends modules.game.majiangGame.view.card.pengGangCard.BasePengGangCards
var LeftPengGangCards=(function(_super){
	function LeftPengGangCards(skin){
		this._skin=null;
		LeftPengGangCards.__super.call(this);
		this._skin=skin;
		this.init();
	}

	__class(LeftPengGangCards,'modules.game.majiangGame.view.card.pengGangCard.LeftPengGangCards',_super);
	var __proto=LeftPengGangCards.prototype;
	__proto.init=function(){
		var i=0;
		var len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i]=new LeftOutputCard(this._skin["card"+i]);
		}
	}

	__proto.show=function(){
		this._skin.visible=true;
		_super.prototype.show.call(this);
	}

	__proto.hide=function(){
		this._skin.visible=false;
		_super.prototype.hide.call(this);
	}

	__getset(0,__proto,'visible',function(){
		return this._skin.visible;
	});

	return LeftPengGangCards;
})(BasePengGangCards)


//class modules.game.majiangGame.view.card.pengGangCard.RightPengGangCards extends modules.game.majiangGame.view.card.pengGangCard.BasePengGangCards
var RightPengGangCards=(function(_super){
	function RightPengGangCards(skin){
		this._skin=null;
		RightPengGangCards.__super.call(this);
		this._skin=skin;
		this.init();
	}

	__class(RightPengGangCards,'modules.game.majiangGame.view.card.pengGangCard.RightPengGangCards',_super);
	var __proto=RightPengGangCards.prototype;
	__proto.init=function(){
		var i=0;
		var len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i]=new RightOutputCard(this._skin["card"+i]);
		}
	}

	__proto.show=function(){
		this._skin.visible=true;
		_super.prototype.show.call(this);
	}

	__proto.hide=function(){
		this._skin.visible=false;
		_super.prototype.hide.call(this);
	}

	__getset(0,__proto,'visible',function(){
		return this._skin.visible;
	});

	return RightPengGangCards;
})(BasePengGangCards)


//class modules.game.majiangGame.view.card.pengGangCard.TopPengGangCards extends modules.game.majiangGame.view.card.pengGangCard.BasePengGangCards
var TopPengGangCards=(function(_super){
	function TopPengGangCards(skin){
		this._skin=null;
		TopPengGangCards.__super.call(this);
		this._skin=skin;
		this.init();
	}

	__class(TopPengGangCards,'modules.game.majiangGame.view.card.pengGangCard.TopPengGangCards',_super);
	var __proto=TopPengGangCards.prototype;
	__proto.init=function(){
		var i=0;
		var len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i]=new TopOutputCard(this._skin["card"+i]);
		}
	}

	__proto.show=function(){
		this._skin.visible=true;
		_super.prototype.show.call(this);
	}

	__proto.hide=function(){
		this._skin.visible=false;
		_super.prototype.hide.call(this);
	}

	__getset(0,__proto,'visible',function(){
		return this._skin.visible;
	});

	return TopPengGangCards;
})(BasePengGangCards)


//class modules.game.majiangGame.view.majiangPart.hupaiTip.BottomHupaiTipPart extends modules.game.majiangGame.view.majiangPart.hupaiTip.BaseSingleHupaiTipPart
var BottomHupaiTipPart=(function(_super){
	function BottomHupaiTipPart(skin){
		BottomHupaiTipPart.__super.call(this,skin);
		this.init();
	}

	__class(BottomHupaiTipPart,'modules.game.majiangGame.view.majiangPart.hupaiTip.BottomHupaiTipPart',_super);
	var __proto=BottomHupaiTipPart.prototype;
	__proto.init=function(){
		for(var i=0;i < 9;i++){
			this.allCards[i]=new BottomOutputCard(this._skin["card"+i]);
		}
	}

	__proto.setBackSize=function(nums){
		this._skin["backimg"].width=625-(9-nums)*this.SingleCardW;
		this._skin["liangImg"].x=this._skin["backimg"].width+this._skin["backimg"].x;
	}

	__proto.reset=function(){
		this._skin.visible=false;
	}

	return BottomHupaiTipPart;
})(BaseSingleHupaiTipPart)


//class modules.game.majiangGame.view.majiangPart.hupaiTip.LeftHupaiTipPart extends modules.game.majiangGame.view.majiangPart.hupaiTip.BaseSingleHupaiTipPart
var LeftHupaiTipPart=(function(_super){
	function LeftHupaiTipPart(skin){
		LeftHupaiTipPart.__super.call(this,skin);
		this.init();
	}

	__class(LeftHupaiTipPart,'modules.game.majiangGame.view.majiangPart.hupaiTip.LeftHupaiTipPart',_super);
	var __proto=LeftHupaiTipPart.prototype;
	__proto.init=function(){
		for(var i=0;i < 9;i++){
			this.allCards[i]=new LeftOutputCard(this._skin["card"+i]);
		}
	}

	__proto.setBackSize=function(nums){
		this._skin["backimg"].height=411-(9-nums)*(this.SingleCardH-11);
		this._skin["liangImg"].y=this._skin["backimg"].y+this._skin["backimg"].height;
	}

	return LeftHupaiTipPart;
})(BaseSingleHupaiTipPart)


//class modules.game.majiangGame.view.majiangPart.hupaiTip.RightHupaiTipPart extends modules.game.majiangGame.view.majiangPart.hupaiTip.BaseSingleHupaiTipPart
var RightHupaiTipPart=(function(_super){
	function RightHupaiTipPart(skin){
		RightHupaiTipPart.__super.call(this,skin);
		this.init();
	}

	__class(RightHupaiTipPart,'modules.game.majiangGame.view.majiangPart.hupaiTip.RightHupaiTipPart',_super);
	var __proto=RightHupaiTipPart.prototype;
	__proto.init=function(){
		for(var i=0;i < 9;i++){
			this.allCards[i]=new RightOutputCard(this._skin["card"+i]);
		}
	}

	__proto.setBackSize=function(nums){
		this._skin["backimg"].height=411-(9-nums)*(this.SingleCardH-11);
		this._skin["liangImg"].y=this._skin["backimg"].y+this._skin["backimg"].height;
	}

	return RightHupaiTipPart;
})(BaseSingleHupaiTipPart)


//class modules.game.majiangGame.view.majiangPart.singlePart.handlePart.BottomSingleHandlePart extends modules.game.majiangGame.view.majiangPart.singlePart.BaseSingleHandlePart
var BottomSingleHandlePart=(function(_super){
	function BottomSingleHandlePart(skin,needAlpha){
		this._skin=null;
		this.needAlpha=true;
		(needAlpha===void 0)&& (needAlpha=true);
		BottomSingleHandlePart.__super.call(this,skin);
		this._skin=skin;
		this.tingImg=skin.tingImg;
		this._OrignalX=this._skin.x;
		this.needAlpha=needAlpha;
		this.init();
	}

	__class(BottomSingleHandlePart,'modules.game.majiangGame.view.majiangPart.singlePart.handlePart.BottomSingleHandlePart',_super);
	var __proto=BottomSingleHandlePart.prototype;
	__proto.init=function(){
		this._SingleCardW=this._skin.card0.width*this._skin.scaleX;
		var i=0;
		var len=this._preThirteenCards.length;
		for(i=0;i<len;i++){
			this._preThirteenCards[i]=new BottomHandleCard(this._skin["card"+i],this.needAlpha);
		}
		this._theFourteenCard=new BottomHandleCard(this._skin["card13"],this.needAlpha);
		this.canControl=false;
	}

	__proto.judegCanTingOut=function(cardIdx){
		if(this.model.TingHuCardVec[this.model.getChairPosByDir(1)].indexOf(cardIdx)!=-1 ||
			this.model.TingHuCardVec[this.model.getChairPosByDir(2)].indexOf(cardIdx)!=-1){
			return true;
		}
		return false;
	}

	/**承包关系，设置手里某张牌不能出*/
	__proto.canControlWitchDark=function(cards){
		var bool=true;
		var i=0;
		var len=this._preThirteenCards.length;
		var cardIdx=0;
		var isAllCannotPop=true;
		for(i=0;i<len;i++){
			cardIdx=this._preThirteenCards[i].cardIdx;
			if(cards.indexOf(cardIdx)!=-1){
				this._preThirteenCards[i].canControlWitchDark=false;
			}
		}
		if(bool==true){
			cardIdx=this._theFourteenCard.cardIdx;
			if(cards.indexOf(cardIdx)!=-1){
				this._theFourteenCard.canControlWitchDark=false;
			}
		}
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.movePeng=function(bool){
		if(bool){
			this._skin.x=this._OrignalX+this._SingleCardW;
		}
		else{
			this._skin.x=this._OrignalX;
		}
	}

	__proto.setTingImgXAndW=function(cardNum){
		this.tingImg.x=(13-cardNum)*(this._SingleCardW+1);
		this.tingImg.width=1014-this.tingImg.x;
	}

	__proto.judgeEveryCanTing=function(){
		_super.prototype.judgeEveryCanTing.call(this);
		if(this.model.isHu){
			return;
		}
		console.log("judgeEveryCanTing");
		var i=0;
		var len=this._preThirteenCards.length;
		var cardIdx=-1;
		var arr;
		for(i=0;i<len;i++){
			if(this._preThirteenCards[i].visible==true){
				if(this.model.isTingVec[this.model.getChairPosByDir(0)]==true){
					this._preThirteenCards[i].showCanTingImg(false);
				}
				else{
					cardIdx=this._preThirteenCards[i].cardIdx;
					arr=this.model.getHuTipArr(cardIdx);
					if(arr.length > 0){
						this._preThirteenCards[i].showCanTingImg(true);
					}
					else{
						this._preThirteenCards[i].showCanTingImg(false);
					}
				}
			}
		}
		if(this.model.isTingVec[this.model.getChairPosByDir(0)]==true){
			this._theFourteenCard.showCanTingImg(false);
		}
		else{
			if(this._theFourteenCard.visible==true){
				cardIdx=this._theFourteenCard.cardIdx;
				arr=this.model.getHuTipArr(cardIdx);
				if(arr.length > 0){
					this._theFourteenCard.showCanTingImg(true);
				}
				else{
					this._theFourteenCard.showCanTingImg(false);
				}
			}
		}
	}

	__getset(0,__proto,'canControl',null,function(bool){
		var i=0;
		var len=this._preThirteenCards.length;
		var cardIdx=0;
		var isAllCannotPop=true;
		for(i=0;i<len;i++){
			if(this.model && this.model.isTingVec[this.model.selfChairPos]==true){
				this._preThirteenCards[i].canControl=false;
			}
			else{
				if(bool==true){
					cardIdx=this._preThirteenCards[i].cardIdx;
					if(this.model.TingHuCardVec[this.model.getChairPosByDir(1)].indexOf(cardIdx)!=-1 ||
						this.model.TingHuCardVec[this.model.getChairPosByDir(2)].indexOf(cardIdx)!=-1){
						this._preThirteenCards[i].canControl=false;
					}
					else{
						this._preThirteenCards[i].canControl=true;
						if(this._preThirteenCards[i].visible){
							isAllCannotPop=false;
						}
					}
				}
				else{
					this._preThirteenCards[i].canControl=bool;
				}
			}
		}
		if(bool==true){
			cardIdx=this._theFourteenCard.cardIdx;
			if(this.model.TingHuCardVec[this.model.getChairPosByDir(1)].indexOf(cardIdx)!=-1 ||
				this.model.TingHuCardVec[this.model.getChairPosByDir(2)].indexOf(cardIdx)!=-1){
				this._theFourteenCard.canControl=false;
			}
			else{
				this._theFourteenCard.canControl=true;
				if(this._theFourteenCard.visible){
					isAllCannotPop=false;
				}
			}
		}
		else{
			this._theFourteenCard.canControl=bool;
		}
		if(isAllCannotPop==true && bool==true){
			for(i=0;i<len;i++){
				if(this.model && this.model.isTingVec[this.model.selfChairPos]==true){
					this._preThirteenCards[i].canControl=false;
				}
				else{
					this._preThirteenCards[i].canControl=bool;
				}
			}
			this._theFourteenCard.canControl=bool;
		}
	});

	__getset(0,__proto,'visible',function(){
		return this._skin.visible;
	});

	return BottomSingleHandlePart;
})(BaseSingleHandlePart)


//class modules.game.majiangGame.view.majiangPart.singlePart.handlePart.LeftSingleHandlePart extends modules.game.majiangGame.view.majiangPart.singlePart.BaseSingleHandlePart
var LeftSingleHandlePart=(function(_super){
	function LeftSingleHandlePart(skin){
		this._skin=null;
		LeftSingleHandlePart.__super.call(this,skin);
		this._skin=skin;
		this._OrignalY=this._skin.y;
		this.init();
	}

	__class(LeftSingleHandlePart,'modules.game.majiangGame.view.majiangPart.singlePart.handlePart.LeftSingleHandlePart',_super);
	var __proto=LeftSingleHandlePart.prototype;
	__proto.init=function(){
		this._SingleCardH=this._skin.card0.height*this._skin.scaleX;
		var i=0;
		var len=this._preThirteenCards.length;
		for(i=0;i<len;i++){
			this._preThirteenCards[i]=new LeftHandleCard(this._skin["card"+i]);
		}
		this._theFourteenCard=new LeftHandleCard(this._skin["card13"]);
		this.tingImg=this._skin.tingImg;
		this.up();
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.movePeng=function(bool){
		if(bool){
			if(UserData.isReplay){
				this._skin.y=this._OrignalY+this._SingleCardH/2;
			}
			else{
				this._skin.y=this._OrignalY+this._SingleCardH;
			}
		}
		else{
			this._skin.y=this._OrignalY;
		}
	}

	/**显示玩家听了的状态*/
	__proto.showTinged=function(){
		if(this.needTingEff){
			var i=0;
			var len=this._preThirteenCards.length;
			for(i=0;i<len;i++){
				(this._preThirteenCards [i]).showTingEff();
			}
		}
	}

	__getset(0,__proto,'visible',function(){
		return this._skin.visible;
	});

	return LeftSingleHandlePart;
})(BaseSingleHandlePart)


//class modules.game.majiangGame.view.majiangPart.singlePart.handlePart.RightSingleHandlePart extends modules.game.majiangGame.view.majiangPart.singlePart.BaseSingleHandlePart
var RightSingleHandlePart=(function(_super){
	function RightSingleHandlePart(skin){
		this._skin=null;
		RightSingleHandlePart.__super.call(this,skin);
		this._skin=skin;
		this._OrignalY=this._skin.y;
		this.init();
	}

	__class(RightSingleHandlePart,'modules.game.majiangGame.view.majiangPart.singlePart.handlePart.RightSingleHandlePart',_super);
	var __proto=RightSingleHandlePart.prototype;
	__proto.init=function(){
		this._SingleCardH=this._skin.card0.height*this._skin.scaleX;
		var i=0;
		var len=this._preThirteenCards.length;
		for(i=0;i<len;i++){
			this._preThirteenCards[i]=new RightHandleCard(this._skin["card"+i]);
		}
		this._theFourteenCard=new RightHandleCard(this._skin["card13"]);
		this.tingImg=this._skin.tingImg;
		this.down();
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.movePeng=function(bool){
		if(bool){
			if(UserData.isReplay){
				this._skin.y=this._OrignalY-this._SingleCardH/2;
			}
			else{
				this._skin.y=this._OrignalY-this._SingleCardH;
			}
		}
		else{
			this._skin.y=this._OrignalY;
		}
	}

	/**显示玩家听了的状态*/
	__proto.showTinged=function(){
		if(this.needTingEff){
			var i=0;
			var len=this._preThirteenCards.length;
			for(i=0;i<len;i++){
				(this._preThirteenCards [i]).showTingEff();
			}
		}
	}

	__getset(0,__proto,'visible',function(){
		return this._skin.visible;
	});

	return RightSingleHandlePart;
})(BaseSingleHandlePart)


//class modules.game.majiangGame.view.majiangPart.singlePart.handlePart.TopSingleHandlePart extends modules.game.majiangGame.view.majiangPart.singlePart.BaseSingleHandlePart
var TopSingleHandlePart=(function(_super){
	function TopSingleHandlePart(skin){
		this._skin=null;
		TopSingleHandlePart.__super.call(this,skin);
		this._skin=skin;
		this._OrignalX=this._skin.x;
		this.init();
	}

	__class(TopSingleHandlePart,'modules.game.majiangGame.view.majiangPart.singlePart.handlePart.TopSingleHandlePart',_super);
	var __proto=TopSingleHandlePart.prototype;
	__proto.init=function(){
		this._SingleCardW=this._skin.card0.width*this._skin.scaleX;
		var i=0;
		var len=this._preThirteenCards.length;
		for(i=0;i<len;i++){
			this._preThirteenCards[i]=new TopHandleCard(this._skin["card"+i]);
		}
		this._theFourteenCard=new TopHandleCard(this._skin["card13"]);
		this.tingImg=this._skin.tingImg;
		this.back();
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.movePeng=function(bool){
		if(bool){
			this._skin.x=this._OrignalX-this._SingleCardW;
		}
		else{
			this._skin.x=this._OrignalX;
		}
	}

	__getset(0,__proto,'visible',function(){
		return this._skin.visible;
	});

	return TopSingleHandlePart;
})(BaseSingleHandlePart)


//class modules.game.majiangGame.view.majiangPart.singlePart.outputPart.BottomSingleOutputPart extends modules.game.majiangGame.view.majiangPart.singlePart.BaseSingleOutputPart
var BottomSingleOutputPart=(function(_super){
	function BottomSingleOutputPart(skin){
		this._skin=null;
		BottomSingleOutputPart.__super.call(this);
		this._skin=skin;
		this.init();
	}

	__class(BottomSingleOutputPart,'modules.game.majiangGame.view.majiangPart.singlePart.outputPart.BottomSingleOutputPart',_super);
	var __proto=BottomSingleOutputPart.prototype;
	__proto.init=function(){
		var i=0;
		var len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i]=new BottomOutputCard(this._skin["card"+i]);
		}
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	return BottomSingleOutputPart;
})(BaseSingleOutputPart)


//class modules.game.majiangGame.view.majiangPart.singlePart.outputPart.LeftSingleOutputPart extends modules.game.majiangGame.view.majiangPart.singlePart.BaseSingleOutputPart
var LeftSingleOutputPart=(function(_super){
	function LeftSingleOutputPart(skin){
		this._skin=null;
		LeftSingleOutputPart.__super.call(this);
		this._skin=skin;
		this.init();
	}

	__class(LeftSingleOutputPart,'modules.game.majiangGame.view.majiangPart.singlePart.outputPart.LeftSingleOutputPart',_super);
	var __proto=LeftSingleOutputPart.prototype;
	__proto.init=function(){
		var i=0;
		var len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i]=new LeftOutputCard(this._skin["card"+i]);
		}
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	return LeftSingleOutputPart;
})(BaseSingleOutputPart)


//class modules.game.majiangGame.view.majiangPart.singlePart.outputPart.RightSingleOutputPart extends modules.game.majiangGame.view.majiangPart.singlePart.BaseSingleOutputPart
var RightSingleOutputPart=(function(_super){
	function RightSingleOutputPart(skin){
		this._skin=null;
		RightSingleOutputPart.__super.call(this);
		this._skin=skin;
		this.init();
	}

	__class(RightSingleOutputPart,'modules.game.majiangGame.view.majiangPart.singlePart.outputPart.RightSingleOutputPart',_super);
	var __proto=RightSingleOutputPart.prototype;
	__proto.init=function(){
		var i=0;
		var len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i]=new RightOutputCard(this._skin["card"+i]);
		}
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	return RightSingleOutputPart;
})(BaseSingleOutputPart)


//class modules.game.majiangGame.view.majiangPart.singlePart.outputPart.TopSingleOutputPart extends modules.game.majiangGame.view.majiangPart.singlePart.BaseSingleOutputPart
var TopSingleOutputPart=(function(_super){
	function TopSingleOutputPart(skin){
		this._skin=null;
		TopSingleOutputPart.__super.call(this);
		this._skin=skin;
		this.init();
	}

	__class(TopSingleOutputPart,'modules.game.majiangGame.view.majiangPart.singlePart.outputPart.TopSingleOutputPart',_super);
	var __proto=TopSingleOutputPart.prototype;
	__proto.init=function(){
		var i=0;
		var len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i]=new TopOutputCard(this._skin["card"+i]);
		}
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	return TopSingleOutputPart;
})(BaseSingleOutputPart)


//class modules.game.majiangGame.view.majiangPart.singlePart.pengGangPart.BottomSinglePengGangPart extends modules.game.majiangGame.view.majiangPart.singlePart.BaseSinglePengGangPart
var BottomSinglePengGangPart=(function(_super){
	function BottomSinglePengGangPart(skin){
		this._skin=null;
		BottomSinglePengGangPart.__super.call(this);
		this._skin=skin;
		this.init();
	}

	__class(BottomSinglePengGangPart,'modules.game.majiangGame.view.majiangPart.singlePart.pengGangPart.BottomSinglePengGangPart',_super);
	var __proto=BottomSinglePengGangPart.prototype;
	__proto.init=function(){
		var i=0;
		var len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i]=new BottomPengGangCards(this._skin["peng"+i]);
		}
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__getset(0,__proto,'visible',function(){
		return this._skin.visible;
	});

	return BottomSinglePengGangPart;
})(BaseSinglePengGangPart)


//class modules.game.majiangGame.view.majiangPart.singlePart.pengGangPart.LeftSinglePengGangPart extends modules.game.majiangGame.view.majiangPart.singlePart.BaseSinglePengGangPart
var LeftSinglePengGangPart=(function(_super){
	function LeftSinglePengGangPart(skin){
		this._skin=null;
		LeftSinglePengGangPart.__super.call(this);
		this._skin=skin;
		this.init();
	}

	__class(LeftSinglePengGangPart,'modules.game.majiangGame.view.majiangPart.singlePart.pengGangPart.LeftSinglePengGangPart',_super);
	var __proto=LeftSinglePengGangPart.prototype;
	__proto.init=function(){
		var i=0;
		var len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i]=new LeftPengGangCards(this._skin["peng"+i]);
		}
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__getset(0,__proto,'visible',function(){
		return this._skin.visible;
	});

	return LeftSinglePengGangPart;
})(BaseSinglePengGangPart)


//class modules.game.majiangGame.view.majiangPart.singlePart.pengGangPart.RightSinglePengGangPart extends modules.game.majiangGame.view.majiangPart.singlePart.BaseSinglePengGangPart
var RightSinglePengGangPart=(function(_super){
	function RightSinglePengGangPart(skin){
		this._skin=null;
		RightSinglePengGangPart.__super.call(this);
		this._skin=skin;
		this.init();
	}

	__class(RightSinglePengGangPart,'modules.game.majiangGame.view.majiangPart.singlePart.pengGangPart.RightSinglePengGangPart',_super);
	var __proto=RightSinglePengGangPart.prototype;
	__proto.init=function(){
		var i=0;
		var len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i]=new RightPengGangCards(this._skin["peng"+i]);
		}
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__getset(0,__proto,'visible',function(){
		return this._skin.visible;
	});

	return RightSinglePengGangPart;
})(BaseSinglePengGangPart)


//class modules.game.majiangGame.view.majiangPart.singlePart.pengGangPart.TopSinglePengGangPart extends modules.game.majiangGame.view.majiangPart.singlePart.BaseSinglePengGangPart
var TopSinglePengGangPart=(function(_super){
	function TopSinglePengGangPart(skin){
		this._skin=null;
		TopSinglePengGangPart.__super.call(this);
		this._skin=skin;
		this.init();
	}

	__class(TopSinglePengGangPart,'modules.game.majiangGame.view.majiangPart.singlePart.pengGangPart.TopSinglePengGangPart',_super);
	var __proto=TopSinglePengGangPart.prototype;
	__proto.init=function(){
		var i=0;
		var len=this._cardsVec.length;
		for(i=0;i<len;i++){
			this._cardsVec[i]=new TopPengGangCards(this._skin["peng"+i]);
		}
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__getset(0,__proto,'visible',function(){
		return this._skin.visible;
	});

	return TopSinglePengGangPart;
})(BaseSinglePengGangPart)


/**西周专用，如果是其他麻将，需要自己和象山麻将一样的做法去实现*/
//class modules.game.majiangGame.controller.ReplayMajiangGameController extends modules.game.majiangGame.controller.MajiangGameController
var ReplayMajiangGameController=(function(_super){
	function ReplayMajiangGameController(){
		ReplayMajiangGameController.__super.call(this);
	}

	__class(ReplayMajiangGameController,'modules.game.majiangGame.controller.ReplayMajiangGameController',_super);
	return ReplayMajiangGameController;
})(MajiangGameController)


/**西周专用，如果是其他麻将，需要自己和象山麻将一样的做法去实现*/
//class modules.game.majiangGame.model.ReplayMajiangModel extends modules.game.majiangGame.model.MajiangModel
var ReplayMajiangModel=(function(_super){
	function ReplayMajiangModel(){
		this.isShowOtherCards=true;
		ReplayMajiangModel.__super.call(this);
	}

	__class(ReplayMajiangModel,'modules.game.majiangGame.model.ReplayMajiangModel',_super);
	var __proto=ReplayMajiangModel.prototype;
	__proto.saveStepData=function(){
		_super.prototype.saveStepData.call(this);
	}

	// replayAllStepData[replayCurStep]=userobj;
	__proto.reset=function(){
		_super.prototype.reset.call(this);
		this.isStrictShowCalc=false;
	}

	__proto.replayReset=function(){
		_super.prototype.reset.call(this);
	}

	/**从手里的牌里面去掉一张碰掉的牌*/
	__proto.cutPengCard=function(pos,cardIdx){
		if(this.isShowOtherCards){
			var tempArr=[cardIdx,cardIdx];
			var i=0;
			var len=tempArr.length;
			var idx=0;
			for(i=0;i<len;i++){
				idx=this.allCardsVec[pos].indexOf(tempArr[i]);
				if(idx !=-1){
					this.allCardsVec[pos].splice(idx,1);
				}
			}
		}
		else{
			_super.prototype.cutPengCard.call(this,pos,cardIdx);
		}
	}

	/**杠了之后刷新手里的牌
	*
	*@param type 0补杠 1暗杠 2明杠
	**/
	__proto.cutGangCard=function(pos,cardIdx,type){
		if(this.isShowOtherCards){
			var i=0;
			var tempArr;
			var idx=0;
			var len=0;
			if(this.isTingVec[pos]==true){
				if(this.kouVec[pos].length > 0 && type !=0){
					this.kouVec[pos].length-=1;
				}
			}
			switch(type){
				case 0:
					if(this.theFourteenCardVec[pos] !=-1){
						if(this.theFourteenCardVec[pos]==cardIdx){
							this.theFourteenCardVec[pos]=-1;
						}
						else{
							idx=this.allCardsVec[pos].indexOf(cardIdx);
							if(idx !=-1){
								this.allCardsVec[pos].splice(idx,1);
							}
							this.allCardsVec[pos].push(this.theFourteenCardVec[pos]);
							this.theFourteenCardVec[pos]=-1;
							this.sortAllCards(pos);
						}
					}
					else{
						idx=this.allCardsVec[pos].indexOf(cardIdx);
						if(idx !=-1){
							this.allCardsVec[pos].splice(idx,1);
						}
						this.sortAllCards(pos);
					}
					break ;
				case 1:
					if(this.theFourteenCardVec[pos]==cardIdx){
						this.theFourteenCardVec[pos]=-1;
						tempArr=[cardIdx,cardIdx,cardIdx];
					}
					else{
						tempArr=[cardIdx,cardIdx,cardIdx,cardIdx];
						this.allCardsVec[pos].push(this.theFourteenCardVec[pos]);
						this.theFourteenCardVec[pos]=-1;
						this.sortAllCards(pos);
					}
					len=tempArr.length;
					for(i=0;i<len;i++){
						idx=this.allCardsVec[pos].indexOf(tempArr[i]);
						if(idx !=-1){
							this.allCardsVec[pos].splice(idx,1);
						}
					}
					break ;
				case 2:
					tempArr=[cardIdx,cardIdx,cardIdx];
					len=tempArr.length;
					for(i=0;i<len;i++){
						idx=this.allCardsVec[pos].indexOf(tempArr[i]);
						if(idx !=-1){
							this.allCardsVec[pos].splice(idx,1);
						}
					}
					break ;
				default :break ;
				}
		}
		else{
			_super.prototype.cutGangCard.call(this,pos,cardIdx,type);
		}
	}

	/**玩家出牌更新玩家数据*/
	__proto.outputCard=function(pos,cardIdx){
		this.curOutPutPos=pos;
		if(this.isShowOtherCards){
			this.outputCardsVec[pos].push(cardIdx);
			if(this.theFourteenCardVec[pos] !=-1){
				if(this.theFourteenCardVec[pos]==cardIdx){
					this.theFourteenCardVec[pos]=-1;
					return;
				}
			};
			var idx=this.allCardsVec[pos].indexOf(cardIdx);
			if(idx!=-1){
				this.allCardsVec[pos].splice(idx,1);
			}
			if(this.theFourteenCardVec[pos] !=-1){
				this.allCardsVec[pos].push(this.theFourteenCardVec[pos]);
				this.sortAllCards(pos);
				this.theFourteenCardVec[pos]=-1;
			}
		}
		else{
			_super.prototype.outputCard.call(this,pos,cardIdx);
		}
	}

	/**更新所有牌(游戏开始后的第一次发牌）*/
	__proto.updateAllCardsVecByGameStart=function(allCards){
		var i=0;
		var len=allCards.length;
		for(i=0;i<len;i++){
			var pos=this.getPlayerPosByUid(allCards[i].uid);
			this.updateOneAllCardsVecByGameStart(allCards[i].nusercard,pos);
		}
	}

	__proto.updateOneAllCardsVecByGameStart=function(cards,pos){
		var i=0;
		this.allCardsVec[pos]=[];
		var len=cards.length;
		for(i=0;i<len;i++){
			(this.allCardsVec [pos]).push(cards[i].card);
		}
		this.sortAllCards(pos);
	}

	return ReplayMajiangModel;
})(MajiangModel)


//class modules.game.majiangGame.view.card.outputCard.BottomOutputCard extends modules.game.majiangGame.view.card.outputCard.BaseOutputCard
var BottomOutputCard=(function(_super){
	function BottomOutputCard(skin){
		BottomOutputCard.__super.call(this,skin);
	}

	__class(BottomOutputCard,'modules.game.majiangGame.view.card.outputCard.BottomOutputCard',_super);
	var __proto=BottomOutputCard.prototype;
	__proto.down=function(){
		if(this.state==1){
			return;
		}
		this._skin.downImg.visible=true;
		this._skin.valueImg.visible=true;
		this._skin.backImg.visible=false;
		modules.game.majiangGame.view.card.BaseCard.prototype.down.call(this);
	}

	__proto.back=function(){
		if(this.state==2){
			return;
		}
		this._skin.downImg.visible=false;
		this._skin.valueImg.visible=false;
		this._skin.backImg.visible=true;
		modules.game.majiangGame.view.card.BaseCard.prototype.back.call(this);
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.setCardImg=function(cardIdx){
		if(this.cardIdx==cardIdx){
			return;
		}
		this._skin.valueImg.skin="gametable/mahjongpai/"+BaseCard.CARD_REFERENCE[cardIdx.toString()];
		modules.game.majiangGame.view.card.BaseCard.prototype.setCardImg.call(this,cardIdx);
	}

	return BottomOutputCard;
})(BaseOutputCard)


//class modules.game.majiangGame.view.card.outputCard.LeftOutputCard extends modules.game.majiangGame.view.card.outputCard.BaseOutputCard
var LeftOutputCard=(function(_super){
	function LeftOutputCard(skin){
		LeftOutputCard.__super.call(this,skin);
		this._skin=skin;
	}

	__class(LeftOutputCard,'modules.game.majiangGame.view.card.outputCard.LeftOutputCard',_super);
	var __proto=LeftOutputCard.prototype;
	__proto.down=function(){
		if(this.state==1){
			return;
		}
		this._skin.downImg.visible=true;
		this._skin.valueImg.visible=true;
		this._skin.backImg.visible=false;
		modules.game.majiangGame.view.card.BaseCard.prototype.down.call(this);
	}

	__proto.back=function(){
		if(this.state==2){
			return;
		}
		this._skin.downImg.visible=false;
		this._skin.valueImg.visible=false;
		this._skin.backImg.visible=true;
		modules.game.majiangGame.view.card.BaseCard.prototype.back.call(this);
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.setCardImg=function(cardIdx){
		if(this.cardIdx==cardIdx){
			return;
		}
		this._skin.valueImg.skin="gametable/mahjongpai/"+BaseCard.CARD_REFERENCE[cardIdx.toString()];
		modules.game.majiangGame.view.card.BaseCard.prototype.setCardImg.call(this,cardIdx);
	}

	return LeftOutputCard;
})(BaseOutputCard)


//class modules.game.majiangGame.view.card.outputCard.RightOutputCard extends modules.game.majiangGame.view.card.outputCard.BaseOutputCard
var RightOutputCard=(function(_super){
	function RightOutputCard(skin){
		RightOutputCard.__super.call(this,skin);
		this._skin=skin;
	}

	__class(RightOutputCard,'modules.game.majiangGame.view.card.outputCard.RightOutputCard',_super);
	var __proto=RightOutputCard.prototype;
	__proto.down=function(){
		if(this.state==1){
			return;
		}
		this._skin.downImg.visible=true;
		this._skin.valueImg.visible=true;
		this._skin.backImg.visible=false;
		modules.game.majiangGame.view.card.BaseCard.prototype.down.call(this);
	}

	__proto.back=function(){
		if(this.state==2){
			return;
		}
		this._skin.downImg.visible=false;
		this._skin.valueImg.visible=false;
		this._skin.backImg.visible=true;
		modules.game.majiangGame.view.card.BaseCard.prototype.back.call(this);
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.setCardImg=function(cardIdx){
		if(this.cardIdx==cardIdx){
			return;
		}
		this._skin.valueImg.skin="gametable/mahjongpai/"+BaseCard.CARD_REFERENCE[cardIdx.toString()];
		modules.game.majiangGame.view.card.BaseCard.prototype.setCardImg.call(this,cardIdx);
	}

	return RightOutputCard;
})(BaseOutputCard)


//class modules.game.majiangGame.view.card.outputCard.TopOutputCard extends modules.game.majiangGame.view.card.outputCard.BaseOutputCard
var TopOutputCard=(function(_super){
	function TopOutputCard(skin){
		TopOutputCard.__super.call(this,skin);
		this._skin=skin;
	}

	__class(TopOutputCard,'modules.game.majiangGame.view.card.outputCard.TopOutputCard',_super);
	var __proto=TopOutputCard.prototype;
	__proto.down=function(){
		if(this.state==1){
			return;
		}
		this._skin.downImg.visible=true;
		this._skin.valueImg.visible=true;
		this._skin.backImg.visible=false;
		modules.game.majiangGame.view.card.BaseCard.prototype.down.call(this);
	}

	__proto.back=function(){
		if(this.state==2){
			return;
		}
		this._skin.downImg.visible=false;
		this._skin.valueImg.visible=false;
		this._skin.backImg.visible=true;
		modules.game.majiangGame.view.card.BaseCard.prototype.back.call(this);
	}

	__proto.show=function(){
		this._skin.visible=true;
	}

	__proto.hide=function(){
		this._skin.visible=false;
	}

	__proto.setCardImg=function(cardIdx){
		if(this.cardIdx==cardIdx){
			return;
		}
		this._skin.valueImg.skin="gametable/mahjongpai/"+BaseCard.CARD_REFERENCE[cardIdx.toString()];
		modules.game.majiangGame.view.card.BaseCard.prototype.setCardImg.call(this,cardIdx);
	}

	return TopOutputCard;
})(BaseOutputCard)


//class modules.game.majiangGame.view.animation.HuAnimation extends laya.display.Sprite
var HuAnimation=(function(_super){
	function HuAnimation(){
		//huoyandonghua
		this.ani_shandian=null;
		this.ani_huoyan=null;
		HuAnimation.__super.call(this);
		this.ani_shandian=new Animation();
		this.ani_shandian.loadAtlas("res/animations/huangseshandian.json");
		this.ani_shandian.stop();
		this.ani_huoyan=new Animation();
		this.ani_huoyan.loadAtlas("res/animations/huoyandonghua.json");
		this.ani_huoyan.stop();
		this.addChild(this.ani_shandian);
		this.addChild(this.ani_huoyan);
		this.ani_shandian.x=(this.width-this.ani_huoyan.width)/2;
		this.ani_huoyan.y=300;
		this.y=-300;
		EventCenter.instance.on("MAJIANGPAGE_NOTICE_HUEFF_HIDE",this,this.hide);
		this.hide();
	}

	__class(HuAnimation,'modules.game.majiangGame.view.animation.HuAnimation',_super);
	var __proto=HuAnimation.prototype;
	__proto.play=function(){
		this.ani_shandian.play(0,false);
		this.ani_huoyan.play();
		this.show();
	}

	__proto.show=function(){
		this.visible=true;
	}

	__proto.noticeHide=function(){
		EventCenter.instance.event("MAJIANGPAGE_NOTICE_HUEFF_HIDE");
	}

	__proto.hide=function(){
		this.ani_shandian.stop();
		this.ani_huoyan.stop();
		this.visible=false;
	}

	__getset(1,HuAnimation,'instance',function(){
		return new HuAnimation();;
	},laya.display.Sprite._$SET_instance);

	return HuAnimation;
})(Sprite)


//class modules.game.majiangGame.view.playerInfoPart.GiftItem extends ui.gameCommon.items.GiftItemUI
var GiftItem=(function(_super){
	function GiftItem(){
		this.tUid=null;
		this.dat=null;
		GiftItem.__super.call(this);
		this.on("click",this,this.onClick);
	}

	__class(GiftItem,'modules.game.majiangGame.view.playerInfoPart.GiftItem',_super);
	var __proto=GiftItem.prototype;
	__proto.setData=function(dat,tUid){
		if(dat){
			this.dat=dat;
			this.tUid=tUid;
			if(tUid==UserData.uid || GameModule.instance.gameContext.model.isSelfSitDown==false){
				this.img.disabled=true;
			}
			else{
				this.img.disabled=false;
			}
			this.img.skin="ani/"+dat.name+".png";
			var price=parseInt(dat.price);
			if(price > UserData.Diamond){
				this.costTf.color="#ff3d01";
			}
			else{
				this.costTf.color="#2dc509";
			}
			this.costTf.text=dat.price;
		}
	}

	__proto.onClick=function(e){
		if(this.tUid==UserData.uid){
			return;
		}
		if(GameModule.instance.gameContext.model.isSelfSitDown==false){
			QuickUtils.popMessage("围观用户禁止送礼物！");
			return;
		}
		UserInfoPage.instance.hide();
		console.log("送礼物咯：： id:"+this.dat.id+"  tUid:"+this.tUid);
		var giftObj={id:this.dat.id,tUid:this.tUid};
		EventCenter.instance.event("SOCKET_SEND",ProtoMessage.getProtoMessage(410,giftObj));
	}

	return GiftItem;
})(GiftItemUI)


//class modules.game.context.GameMainContext extends rb.framework.mvc.GameContext
var GameMainContext=(function(_super){
	function GameMainContext(key,module,parentNode){
		//---Vars------------------------------------------------------------------------------------------------------------------------------------------------//
		this._socketControl=null;
		(key===void 0)&& (key="");
		GameMainContext.__super.call(this,key,module,parentNode);
	}

	__class(GameMainContext,'modules.game.context.GameMainContext',_super);
	var __proto=GameMainContext.prototype;
	__proto.open=function(){
		_super.prototype.open.call(this);
		if(this._socketControl==null){
			this._socketControl=new MJGameSocketController();
		}
		this.addController(this.socketControl);
	}

	__proto.close=function(){
		_super.prototype.close.call(this);
	}

	__getset(0,__proto,'socketControl',function(){
		return this._socketControl;
	});

	return GameMainContext;
})(GameContext)


//class modules.game.majiangGame.context.MajiangGameContext extends rb.framework.mvc.GameContext
var MajiangGameContext=(function(_super){
	function MajiangGameContext(key,module,parentNode){
		this._majiangGameView=null;
		this._majiangGameController=null;
		this._rMajiangGameController=null;
		this._majiangModel=null;
		this._rMajiangModel=null;
		(key===void 0)&& (key="");
		MajiangGameContext.__super.call(this,key,module,parentNode);
	}

	__class(MajiangGameContext,'modules.game.majiangGame.context.MajiangGameContext',_super);
	var __proto=MajiangGameContext.prototype;
	__proto.open=function(){
		_super.prototype.open.call(this);
		this.initUI();
		console.log("addView(_majiangGameView)////////////////");
		this.addView(this._majiangGameView);
		if(UserData.isReplay){
			this.addController(this._rMajiangGameController);
			this.addModel(this._rMajiangModel);
		}
		else{
			this.addController(this._majiangGameController);
			this.addModel(this._majiangModel);
		}
		console.log("majiang gamecontext UserData.roomtype::"+UserData.roomtype);
		this.setChairNum(4);
		SoundPlay.swithMusic("game");
		console.log("MajiangGameContext open:::...");
		console.log("注册了游戏内的消息！！！");
		MessageManager.instance.continueQueue("MESSAGE_GAME");
		EventCenter.instance.event("GameContextReady",null);
	}

	//QuickTween.main_ui_reset();
	__proto.initUI=function(){
		if(this._majiangModel==null){
			this._majiangModel=new MajiangModel();
		}
		if(this._rMajiangModel==null){
			this._rMajiangModel=new ReplayMajiangModel();
		}
		if(this._rMajiangGameController==null){
			this._rMajiangGameController=new ReplayMajiangGameController();
		}
		if(this._majiangGameView==null){
			this._majiangGameView=new MajiangGameView();
		}
		if(this._majiangGameController==null){
			this._majiangGameController=new MajiangGameController();
		}
	}

	__proto.close=function(){
		_super.prototype.close.call(this);
		SoundManager.stopMusic();
	}

	//_majiangGameView.onRemove();
	__proto.setChairNum=function(num){
		if(UserData.isReplay){
			this._rMajiangModel.chairNum=num;
		}
		else{
			this._majiangModel.chairNum=num;
		}
		this._majiangGameView.setChairNmu(num);
	}

	__getset(0,__proto,'view',function(){
		return this._majiangGameView;
	});

	__getset(0,__proto,'controller',function(){
		if(UserData.isReplay){
			return this._rMajiangGameController;
		}
		else{
			return this._majiangGameController;
		}
	});

	__getset(0,__proto,'model',function(){
		if(UserData.isReplay){
			return this._rMajiangModel;
		}
		else{
			return this._majiangModel;
		}
	});

	return MajiangGameContext;
})(GameContext)


	Laya.__init([UserInfoPage,GiftEff]);
})(window,document,Laya);

if (typeof define === 'function' && define.amd){
	define('laya.core', ['require', "exports"], function(require, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: true });
        for (var i in Laya) {
			var o = Laya[i];
            o && o.__isclass && (exports[i] = o);
        }
    });
}