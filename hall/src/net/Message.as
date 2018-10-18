package net
{
	import manager.MessageManager;

	public class Message
	{
		// REQ --------------
		public static const OK:int 				= 1;
		public static const NO:int 				= 0;
		public static const Login:int 			= 100;  //登陆
		public static const Room_List:int 		= 110; 
		public static const Create_Room:int 	= 120;
		public static const Match_Room:int = 121;
		public static const Cancel_Match_Room:int = 122;
		public static const RuleItem:int 		= 130;
		public static const Find_Room:int 		= 140;
		public static const Disband_Room:int 	= 150;
		public static const Roomowner_Disband_Room:int = 151;
		public static const Room_Info:int 		= 160;
		public static const Into_Room:int 		= 170;
		public static const Into_MatchRoom:int 	= 180;
		public static const Exit_Room:int 		= 190;
		public static const MSG_Sitdown:int     = 195;	
		public static const MSG_Standup:int		= 196;
		public static const User_Info:int 		= 200;
		public static const User_Ready:int 		= 210; 
		public static const Start_Game:int 		= 220;
		public static const Restart_Game:int 	= 230;
		public static const User_Leave:int 		= 240;
		public static const Get_CurUser:int 	= 250;
		public static const Get_User_Card_Count:int = 260;
		public static const Put_Card:int 		= 270;
		public static const Get_UserCard:int 	= 280;
		public static const Chow:int 			= 290;
		public static const Peng:int 			= 300;
		public static const Kong:int 			= 310;
		public static const Win:int 			= 320;
		public static const Pass:int 			= 330;
		public static const Benefits:int 		= 340;
		public static const Change3Card:int 	= 350;
		public static const FixMiss:int 		= 360;
		public static const MSG_Chat:int        = 370;
		public static const MSG_Notice:int      = 390;
		
		public static const Disband:int = 400;//发起投票解散
		public static const Vote:int    = 401;//投票解散
	
		//战绩
		public static const MSG_Battle_Record:int   = 402;
		public static const MSG_Home_Owner:int	 	= 403;
		public static const MSG_Room_Summary:int    = 404;
		public static const KickRequest:int = 405;
		public static const MSG_Gift:int = 410;
		public static const MSG_BattleDetail:int = 411;
		
		//三人斗地主相关
		public static const Sddz_Jiaofen:int = 1200;
		public static const Sddz_Mingpai:int = 1201;
		public static const Sddz_Jiabei:int = 1202;
		public static const Sddz_Chupai:int = 1203;
		public static const Sddz_Pass:int = 1204;
		//四人斗地主
		public static const Srddz_Baodao:int = 1205;
		public static const Srddz_StrictWin:int = 1206;
		//牛牛
		public static const Nn_Xiazhu:int = 1207;
		
		
		
		//ACK
		public static const ACK_Login:int 			= 500;
		public static const ACK_User_Info:int 		= 510;
		public static const ACK_RoomInfo:int 		= 520;
		public static const ACK_Room_User:int		= 525;
		public static const ACK_Room_List:int 		= 530;
		public static const ACK_Find_Room:int 		= 540;
		public static const ACK_MSG:int 			= 550;
		public static const ACKBC_Into_Room:int 	= 560;
		public static const ACK_Into_MatchRoom:int 	= 570;
		public static const ACKBC_Exit_Room:int 	= 580;
		public static const ACK_Create_Room:int 	= 590;
		public static const ACK_Cancel_Match_Room:int = 591;
		public static const ACK_Match_Room:int = 592;
		public static const ACKBC_Ready:int 		= 600; 
		public static const Room_State:int = 605;
		public static const ACKBC_Sitdown:int	= 607;
		public static const ACKBC_Standup:int   = 608;
		public static const ACKBC_Card_Init:int 	= 610;
		public static const ACK_User_SeatCard:int = 615;
		public static const ACKBC_Start:int 		= 620;
		public static const ACK_UserCard:int 		= 650;
		public static const ACK_StartChange3Card:int = 660;
		public static const ACK_StartFixMiss:int 	= 670;
		public static const ACK_Change3Card_OK:int 	= 680;
		public static const ACKBC_FixMiss_OK:int 	= 690;
		public static const ACKBC_CurPlayer:int 	= 700;
		public static const ACKBC_GetCard:int 		= 710;
		public static const ACKBC_PutCard:int 		= 720;
		public static const ACK_WaitTool:int 	= 730;
		public static const ACKBC_Chow:int 			= 740;
		public static const ACKBC_Peng:int 			= 750;
		public static const ACKBC_Kong:int 			= 760;
		public static const ACKBC_Win:int 			= 770;
		public static const ACKBC_Draw:int 			= 780;
		public static const ACKBC_Total:int 		= 790;
		public static const AckDisband:int 	= 800;
		public static const ACKBC_RoundScore:int 	= 810;
		public static const ACKBC_EffectEvent:int 	= 820;
		public static const ACK_Benefits:int 		= 830;
		public static const ACK_NeedBenefits:int 	= 840;
		public static const ACKBC_Restart:int 		= 850;
		public static const Card:int 				= 860;
		public static const SeatCard:int 			= 870;
		public static const MSG_ACKBC_Chat:int       = 880;
		
		//三人斗地主相关
		public static const ACKBC_Sddz_Jiaofen:int =   1500;
		public static const ACKBC_Sddz_Dizhu:int =     1501;
		public static const ACKBC_Sddz_Pass:int =     1502;
		public static const ACKBC_Sddz_End:int =       1503;
		public static const ACKBC_Sddz_Total:int =     1504;
		public static const ACKBC_Sddz_Card_Init:int = 1505;
		public static const ACKBC_Sddz_Start:int =     1506;
		public static const ACKBC_Sddz_Chupai:int =    1507;
		public static const ACKBC_Sddz_JiaoDizhu:int = 1508;
		public static const ACKBC_Sddz_Mingpai:int = 1509;
		public static const ACKBC_Sddz_Jiabei:int = 1510;
		
		//四人斗地主
		public static const ACKBC_Srddz_Baodao:int = 1511;
		public static  const ACKBC_Srddz_StrictWin:int = 1512;
		//拼十
		public static const ACKBC_Nn_Xiazhu:int = 1513;
		
		
		public static const NotifyStartGame:int     = 900;
		public static const MSG_ACK_Notice:int      = 910;
		public static const MSG_NOTIFY_SUMMARY:int  = 920;//大结算
		public static const MSG_UPDATE_USERINFO:int = 930;
		public static const NotifyDisband:int = 940;//投票解散结果
		public static const MSG_ACK_NOTIFY_RECHARGE:int = 991;//充值成功回调
		//战绩
		public static const MSG_ACK_Battle_Record:int   = 950;
		public static const MSG_ACK_Home_Owner:int		= 951;
		public static const MSG_ACK_Room_Summary:int   	= 952;
		public static const MSG_ACK_BattleDetail:int    = 953;
		public static const NotifyUserState:int         = 960;
		public static const NotifyKick:int = 971;
		public static const MSG_NOTIFY_DESTORY_ROOM:int = 972;
		public static const MSG_NOTIFY_RECHARGE:int 	= 990;
		public static const ACK_TransferHuaResponse:int = 992;
		public static const KickResponse:int = 980;
		
		
		public static const MSG_ACK_Gift:int = 1000;
		public static const MSG_GameNotice:int = 1010;
		
		
		
		
		
		//------ 游戏类型  Game Type
//		GTYPE_SiChuan_XueLiu		= 2000;  //血流
//		GTYPE_SiChuan_XueZhan		= 2010;  //血战
//		GTYPE_ZheJiang_XiZhou  		= 3000;  //西周
//		
//		//------ 游戏状态  State Type
//		STYPE_Change3Card			= 5000;  //换3张
//		STYPE_MissType				= 5001;  //定缺
		
		
		public var type:String = "";
		public var messageId:int = 0;
		public var params:Array;
		
		public function Message(type:String,messageId:int,...params)
		{
			this.type = type;
			this.messageId = messageId;
			this.params = params;
		}
		
		public function complete():void
		{
			MessageManager.instance.completeMsg(this);
		}
		
		
	}
}