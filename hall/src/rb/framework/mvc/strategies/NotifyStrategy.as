package rb.framework.mvc.strategies{
    import rb.framework.data.Dict;
    import rb.framework.data.Queue;
    import rb.framework.mvc.AbstractLayer;
    import rb.framework.mvc.GameContext;
    import rb.framework.mvc.Message;

	/**
	 * 通知策略
	 * @author Gao.D.X
	 * 
	 */	
    public class NotifyStrategy {

        public static var queues:Dict= new Dict();
        protected var _rule:uint;
        protected var _listeners:Array;

        public function NotifyStrategy(){
            
            this.init();
            
        }
		
        protected function init():void{
            this._rule = StrategyRules.ALL;
            
            this._listeners = new Array();
            
//            queues = new Dict();
            
        }
		/**
		 *查找handle进行消息通知 
		 * @param msg 打包的消息体
		 * 
		 */		
        public function notify(msg:Message):void{
            var queue:Queue;
//			console.log(queues);
			//查找是否为Queue类型
            if (queues.containsKey(msg.type)){
                queue = queues.get(msg.type) as Queue;                
                queue.add(msg);                
                if (queue.count == 1){                    
                    this.notifyHandle(msg,queue);
                }else{
					
					console.error("queue:"+msg.type+" count:"+queue.count+" front unhandled:"+queue.front.name);
				}
            } else {
				for(queue in queues.values){
	                this.notifyHandle(msg,queue);
				}
            }
            
        }
		public function notifyCreate(name:String, type:String, ... _args):Message
		{
			
			var msg:Message = new Message(name, type, null, _args);
			this.notify(msg);
			
			return msg;
		}
		/**
		 *继续执行queue，直接触发一个类型Queue中所有消息 
		 * @param $msgType
		 * 
		 */		
		public function continueQueue($msgType:String):void{
			if (queues.containsKey($msgType)){
				var queue:Queue = (queues.get($msgType) as Queue);				
				 if(queue.front){
					 this.notifyHandle(queue.front as Message,queue); 
				 }
			} 
		}
		/**
		 *触发消息通知，从路由列表
		 * @param msg
		 * 
		 */		
        protected function notifyHandle(msg:Message,queue:Queue):void{
            
            var context:GameContext;
            var layer:AbstractLayer;
            if (msg.handled){
                return;
            };
            
			var layers:Array=GameContext.getHandlers(msg.name);
			
//            var list:Array = Router.instance.getContextsList();
            
			msg.completeCaller=this;
			msg.completeHandler=this.onMessageComplete;
			msg.queue=queue;
            for each (layer in layers) {
                
                if (msg.handled)   return;
                
                layer.execute(msg); 
            };
        
            
        }  
		/**
		 *创建队列 
		 * @param type 队列名
		 * 
		 */		
        public function createQueue(type:String):void{
            
            if (queues.containsKey(type)){
                return;
            };
            
            queues.set(type, new Queue());
            
        }
		/**
		 *移除一个队列 
		 * @param type 队列名
		 * 
		 */		
        public function deleteQueue(type:String):void{            if (!queues.containsKey(type)){
                return;
            };
            
            queues.remove(type);
            
        }
		/**
		 *清理所有队列 
		 * 
		 */		

        public function clearQueue():void{
            
            queues.clear();
            
        }
		/**
		 *清理指定队列 
		 * @param type 队列名
		 * 
		 */		
        public function clearQueueMessages(type:String):void{
            
            if (!queues.containsKey(type)){
                return;
            };
            
            var queue:Queue = queues.get(type) as Queue;
            
            queue.clear();
            
        }
		/**
		 *消息处理完成后处理， 
		 * @param e
		 * 
		 */		
        protected function onMessageComplete(msg:Message,queue:Queue):void{
       
            
            
            if (queue.count == 0){
                return;
            };
            //继续执行队列
            queue.remove();
            
            var nextMsg:Message = queue.front as Message;
            
            if (nextMsg == null){
                return;
            };
            Laya.timer.once(1,this,this.notifyHandle,[nextMsg,queue]);
            
        }
		
		/**
		 *路由规则 
		 * @return 
		 * 
		 */		
        public function get rule():uint{
            
            return (this._rule);
        }
		/**
		 *路由规则 
		 * @param value
		 * 
		 */		
        public function set rule(value:uint):void{
            
            this._rule = value;
            
        }


    }

    
    
    
    
}//package rb.framework.mvc.strategies
