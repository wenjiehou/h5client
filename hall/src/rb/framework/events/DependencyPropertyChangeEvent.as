package rb.framework.events{
    import laya.events.Event;

    public class DependencyPropertyChangeEvent extends Event {

        public static const CHANGE:String = "rb.framework.events::DependencyPropertyChangeEvent::CHANGE";

        protected var _propertyName:String;
        protected var _propertyOldValue:Object;
        protected var _propertyNewValue:Object;
 

        public function DependencyPropertyChangeEvent(propName:String, propOldValue:Object, propNewValue:Object){
            this.type=CHANGE;
            
            this._propertyName = propName;
            
            this._propertyOldValue = propOldValue;
            
            this._propertyNewValue = propNewValue;
            
        }

        public function get propertyName():String{
            
            return (this._propertyName);
        }

        public function get propertyOldValue():Object{
            
            return (this._propertyOldValue);
        }

        public function get propertyNewValue():Object{
            
            return (this._propertyNewValue);
        }


    }

    
    
    
    
}//package rb.framework.events
