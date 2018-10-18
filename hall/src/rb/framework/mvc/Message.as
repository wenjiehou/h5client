package rb.framework.mvc{ 
    import rb.framework.data.DispatcherObject;
    import rb.framework.data.Queue;

    [Event(name="complete", type="laya.events.Event")]
	
	/**
	 *内部消息 
	 * @author Gao.D.X
	 * 
	 */	
    public class Message extends DispatcherObject {

		public var queue:Queue;
		public var completeHandler:Function;
		public var completeCaller:Object;
        
		
		
		protected var _name:String;
        protected var _type:String;
        protected var _params:Array;
        protected var _notifier:AbstractLayer;
        protected var _handled:Boolean;
        protected var _result:Object;
		
		/**
		 * 
		 * @param msgName 消息名
		 * @param msgType 消息类型，区分普通消息、各队列消息
		 * @param msgNotifier 
		 * @param msgParams
		 * 
		 */		
        public function Message(msgName:String, msgType:String, msgNotifier:AbstractLayer, msgParams:Array){
            
            this._name = msgName;
            
            this._type = msgType;
            
            this._params = msgParams;
            
            this._notifier = msgNotifier;
            
            this._handled = false;
            
            this._result = null;
			console.log("notify "+msgName+" "+msgType);
        }

        public static function setMessageComplete(msg:Message):void{
            msg.complete();
            
        }


        public function complete():void{
            
            if (this._handled){
                return;
            }
            this._handled = true;
            if(completeCaller!=null){
				completeHandler.call(completeCaller,this,queue);
				completeHandler=null;
				completeCaller=null;
				queue=null;
				
			}
            
            
        }

        public function checkParamsType(fullmatch:Boolean=true, ... _args):Boolean{
            if (this.params.length < _args.length){
                return false;
            };
            
            if (fullmatch && this.params.length != _args.length){
                return false;
            };
            
            var i:int;
            while (i < _args.length) {
                
                if (!(this.params[i] is _args[i])){
                    return false;
                };
                
                i+=1;
            }
            
            return (true);
        }

        public function get name():String{
            
            return (this._name);
        }

        public function get type():String{
            
            return (this._type);
        }

        public function get params():Array{
            
            return (this._params);
        }

        public function get notifier():AbstractLayer{
            
            return (this._notifier);
        }

        public function get handled():Boolean{
            
            return (this._handled);
        }

        public function get result():Object{
            
            return (this._result);
        }

        public function set result(value:Object):void{
            this._result = value;
            
        }


    }

    
    
    
    
}//package rb.framework.mvc
