package hall.view
{
	import common.baseui.UIBase;
	import common.event.EventCenter;
	import common.view.PopBox;
	
	import laya.display.Sprite;
	import laya.events.Event;
	import laya.net.HttpRequest;
	import laya.ui.Box;
	import laya.ui.Button;
	import laya.ui.Image;
	import laya.ui.Label;
	import laya.utils.Browser;
	import laya.utils.Handler;
	
	import net.Message;
	import net.ProtoMessage;
	
	import ui.hall.RechargeViewUI;

	public class RechargeView extends UIBase
	{
		protected var _skin:RechargeViewUI;
		public function RechargeView(container:Sprite=null)
		{
			super(container);
			skinRes = "";
			
		}
		override protected function onLoaded():void
		{
			super.onLoaded();
			_skin = new RechargeViewUI();
			_skin.mouseEnabled = true;
			if(_isShow)
			{
				container.addChild(_skin);
			}
			
			init();
		}
		

		private var data:Array = [];//list数据数组
//		private var cargoList:Array=[{"id":1,"diamond":200,"odiamond":100,"title":"100\u94bb\u77f3","price":100,"discount":100},{"id":2,"diamond":2000,"odiamond":1000,"title":"1000\u94bb\u77f3","price":1000,"discount":90.91},{"id":3,"diamond":10000,"odiamond":5000,"title":"5000\u94bb\u77f3","price":5000,"discount":86.21},{"id":4,"diamond":20000,"odiamond":10000,"title":"10000\u94bb\u77f3","price":10000,"discount":83.33},{"id":5,"diamond":100000,"odiamond":50000,"title":"50000\u94bb\u77f3","price":50000,"discount":75.76}]//Browser.window.cargoList;
		private var hr:HttpRequest;
		protected function init():void
		{
			
//			if(cargoList){
//				trace(cargoList)
//				this.data =[];
//				var len:int=cargoList.length;
//				for(var m:int =0;m<len;m++){
//					data.push({diamond:cargoList[m].diamond,money:cargoList[m].price/100,tag:cargoList[m].payid,tit:cargoList[m].title});
//				}
//			};
			
			_skin.rech_list.repeatY=0;
			_skin.rech_list.vScrollBarSkin="";//添加list滚动条功能（UI不可显示）
			_skin.rech_list.renderHandler = new Handler(this, onRender);
			_skin.rech_list.mouseHandler = new Handler(this,function(e:Event,index:int):void{
				if(e.type!=Event.CLICK)return;
				if(!e.target is Button)return;
//				Browser.window.weui.alert("收到");
				hr = new HttpRequest();
				hr.once(Event.COMPLETE, this, function(e:*=null):void{
					
					var response:Object = JSON.parse(hr.data);
					
					if (response.status == 1) {
						WX.wx.chooseWXPay({
							timestamp: response.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
							nonceStr: response.nonceStr, // 支付签名随机串，不长于 32 位
							'package': response["package"], // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
							signType: response.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
							paySign: response.sign, // 支付签名
							success:function(res):void {
								var obj:Object={id:UserData.uid};
								Laya.timer.once(1000,this,function():void{
									//Browser.window.weui.alert("购买成功！");
									EventCenter.instance.event(EventCenter.SOCKET_SEND,ProtoMessage.getProtoMessage(Message.MSG_NOTIFY_RECHARGE,obj));
								})
//								Browser.window.alert("发送成功")
								trace(obj)
							}
						});
					}else {
						Browser.window.weui.alert(response);
					}
					trace(hr.data,"-*---------------------------")
				});
				
				
				var data:Object = {
					cargoId:e.target['tag'],
					open_id:Browser.window.wxInfo.openid //
				};
				
				var query:Array=[];
				for(var k in data){
					query.push(k+"="+encodeURIComponent(data[k]));
				}
				data=query.join("&");
				hr.send("phpApi/api/getPayinfo.php",data, "post", "text");
				
//				var key:int = 742186;
//				
//				var data:Object = {
//					open_id:"xiaodudu011",
//					key:key,
//					addDiamond:50
//				};
//				
//				data.key = data.key+data.addDiamond;
//				data.key = data.key<<2;
//				
//				
//				var query:Array=[];
//				for(var k in data){
//					query.push(k+"="+encodeURIComponent(data[k]));
//				}
//				data=query.join("&");
//				
//				hr.send("phpApi/api/changeDiamond.php",data, "post", "text");
				
				
				
				//hr.send("../wechat/api/pay","cargoId="+e.target['tag'], "post", "json");
				
			})
			_skin.rech_list.array = data;
			_skin.rech_list.refresh();
		}
		
		
		private var isTest:Boolean = true;
		
		/**跟新数据*/
		protected function updateData():void
		{
			if(isTest)
			{
				var testData:String = '{"info": {"type": "2", "list": [{"price": 100, "diamond": 100, "payid": 1001, "giveaway": 100}, {"price": 1000, "diamond": 1000, "payid": 2001, "giveaway": 1000}, {"price": 5000, "diamond": 5000, "payid": 3001, "giveaway": 5000}, {"price": 10000, "diamond": 10000, "payid": 4001, "giveaway": 10000}, {"price": 50000, "diamond": 50000, "payid": 5001, "giveaway": 50000}]}, "status": 1, "url": ""}';
				onRequestCompete(testData);
			}
			else
			{
				var http:HttpRequest = new HttpRequest();
				http.on(Event.COMPLETE, this,onRequestCompete);
				
				http.send("phpApi/api/getRechargeList.php",null, "get", "text");
				//http.send("../wechat/api/paylist",null, "get", "text");
			}
		}
		
		protected function onRequestCompete(dat:Object):void
		{
			var info:Object = JSON.parse(dat as String);
			
			if(info.status != 1)
			{
				return;
			}
			
			var type:int = parseInt(info.info.type);
			var list:Array = info.info.list;
			
			var i:int,len:int=list.length;
			for(i=0;i<len;i++)
			{
				list[i].type = i+1;
			}
			
			data = list;
			
			_skin.rech_list.array = data;
			_skin.rech_list.refresh();
			
		}
		
		
		//渲染list列表数据
		private function onRender(cell:Box,index:int):void 
		{
			//如果索引不再可索引范围，则终止该函数
			if(index > this.data.length)return;
			//获取当前渲染条目的数据
			var data:Object=this.data[index];
			//根据子节点的名字listNumber，获取子节点对象。   
			var Diamonds:Label=cell.getChildByName("Diamonds") as Label;
			Diamonds.text=""
			Diamonds.text=""+data.diamond;
			
			var money:Label=cell.getChildByName("dis") as Label;
			money.text=""+data.giveaway;
			var priceDis:Image=cell.getChildByName("priceDis") as Image;
//			if(data.type == 1)
//			{
//				priceDis.skin = "";
//			}
//			else
//			{
//				//data.type = 3;
//				priceDis.skin = "";
//				priceDis.skin = "hall/type_"+ data.type +".png";
//			}
			priceDis.skin = "";
			priceDis.skin = "hall/type_"+ data.type +".png";
			
			var recharge:Button=cell.getChildByName("recharge") as Button;
			recharge.tag=data.payid;
			
			var mon:Label=cell.getChildByName("mon") as Label;
			mon.text="";
			mon.text="¥"+data.price/100+"元";
		}
		
		public override function show():void
		{
			 super.show();
			 if(_skin)
			 {
				 container.addChild(_skin);
			 }
			 
			 updateData();
		}

		 
		 public override function hide():void
		 {
			 super.hide();
			 if(_skin && _skin.parent)
			 {
				 _skin.parent.removeChild(_skin);
			 }
		 }
	}
}