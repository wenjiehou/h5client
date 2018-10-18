package rb.framework.events{
    import laya.events.Event;

    public class TaskEvent extends Event {

        private static const BASE:String = "rb.framework.events::TaskEvent::";
        public static const BEGIN:String = (BASE + "BEGIN");
        public static const COMPLETE:String = (BASE + "COMPLETE");
        public static const CANCEL:String = (BASE + "CANCEL");
        public static const PROGRESS:String = (BASE + "PROGRESS");
        public static const ERROR:String = (BASE + "ERROR");

        protected var _state:uint;
 
        public function TaskEvent(type:String, state:uint=0){
            
            super.type=type;
            
            this._state = state;
            
        }

        public function get state():uint{
            
            return (0);
        }


    }

    
    
    
    
}//package rb.framework.events
