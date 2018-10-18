package rb.framework.events{
    import laya.events.Event;
    
    import rb.framework.data.Collection;
    import rb.framework.data.CollectionEnumerator;

    public class DependencyCollectionChangeEvent extends Event {

        public static const ADD:String = "rb.framework.events::DependencyCollectionChangeEvent::ADD";
        public static const REMOVE:String = "rb.framework.events::DependencyCollectionChangeEvent::REMOVE";
        public static const CLEAR:String = "rb.framework.events::DependencyCollectionChangeEvent::CLEAR";
        public static const CHANGE:String = "rb.framework.events::DependencyCollectionChangeEvent::CHANGE";

        protected var _collection:Collection;
        protected var _index:uint;
        protected var _oldValue:Object;

        {
            ;
        }

        public function DependencyCollectionChangeEvent(type:String, collection:Collection, index:uint, oldValue:Object){
            
            super.type=type;
            
            this._collection = collection;
            
            this._index = index;
            
            this._oldValue = oldValue;
            
        }

        public function get collection():Collection{
            
            return (this._collection);
        }

        public function get index():uint{
            
            return (this._index);
        }

        public function get oldValue():Object{
            
            return (this._oldValue);
        }


    }

    
    
    
    
}//package rb.framework.events
