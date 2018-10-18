package hall.view.item
{
	import common.view.PopBox;
	
	import laya.events.Event;
	import laya.net.HttpRequest;
	
	import ui.hall.item.AgentLogItemUI;
	
	public class AgentLogItem extends AgentLogItemUI
	{
		public function AgentLogItem()
		{
			super();
			init();
		}
		
		private var hr:HttpRequest;
		
		protected function init():void
		{
			initUI();
		}
		
		protected function initUI():void
		{
			hr = new HttpRequest();
			
			payBtn.on(Event.CLICK,this,onClickPayBtn);
			
			hr.on(Event.COMPLETE, this, function(e:*=null):void{
				var response:Object = JSON.parse(hr.data);
				if (response.status == 1) {
					payBtn.visible = false;
					payedImg.visible = true;
				}else {
					QuickUtils.popMessageBox(response.msg,PopBox.BTN_QUEREN,this,null);
				}
			});
		}
		
		protected function onClickPayBtn(e:Event):void
		{
			var data:Object = {
				id:this.dataSource.id
			};
			
			var query:Array=[];
			for(var k in data){
				query.push(k+"="+encodeURIComponent(data[k]));
			}
			data=query.join("&");
			hr.send("phpApi/api/makeGivePay.php",data, "post", "text");
		}
		
		
		public function setData(dat:*,idx:int):void
		{
			if(dat)
			{
				dataSource = dat;
				//					card_num:"28"
				//					created_at:"2018-05-06 19:00:22"
				//					icon:""
				//					id:"1114"
				//					level:"00000000002"
				//					nick_name:"小肚肚"
				//					payed:"0000000001"
				//					to_uid:"1114"
				headImg.skin = dat.icon==""?"common/morentouxiang.png":dat.icon;
				uidTf.text = "ID:" + dat.to_uid;
				levelImg.skin = "hall/level"+parseInt(dat.level)+".png";
				nameTf.text = dat.nick_name;
				cardNum.text = dat.card_num+"";
				timeTf.text = dat.created_at;
				
				if(parseInt(dat.payed) == 0)
				{
					payBtn.visible = true;
					payedImg.visible = false;
				}
				else
				{
					payBtn.visible = false;
					payedImg.visible = true;
				}
				
				
			}
		}
	}
}