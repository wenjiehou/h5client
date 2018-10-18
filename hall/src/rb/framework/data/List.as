package rb.framework.data{
    import rb.framework.events.DependencyCollectionChangeEvent;
    

    public class List extends Collection {

        public function List(array:Array=null){
            super(array);
            
        }

        public function get(index:uint):Object{
            return list[index];
        }

        public function set(index:uint, item:Object, noEvent:Boolean=false):void{
            
            if (list[index] == item){
                return;
            };
            
            var oldValue:Object = list[index];
            
            list[index] = item;
            
            if (!noEvent){
                this.dispatchEvent(new DependencyCollectionChangeEvent(DependencyCollectionChangeEvent.CHANGE, this, index, oldValue));
            };
            
        }

        public function indexOf(item:Object, fromIndex:uint=0):int{
            
            return (list.indexOf(item, fromIndex));
        }

        public function insert(index:uint, item:Object, noEvent:Boolean=false):Object{
            list.splice(index, 0, item);
            
            if (!noEvent){
                this.dispatchEvent(new DependencyCollectionChangeEvent(DependencyCollectionChangeEvent.ADD, this, index, null));
            };
            
            return (item);
        }

        public function removeAt(index:uint, noEvent:Boolean=false):Object{
            var item:Object = list[index];
            
            list.splice(index, 1);
            
            if (!(noEvent)){
                this.dispatchEvent(new DependencyCollectionChangeEvent(DependencyCollectionChangeEvent.REMOVE, this, index, item));
            };
            
            return (item);
        }

        override public function clone():Object{
            
            return (new List(this.list));
        }


    }

    
    
    
    
}//package rb.framework.data
