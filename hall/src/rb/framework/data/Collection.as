package rb.framework.data{
    import rb.framework.events.DependencyCollectionChangeEvent;
    

    public class Collection extends DependencyObject {

        protected var list:Array;

        public function Collection(array:Array=null){
            
             this.init();
            
            this.fill(array);
            
        }

        protected function init():void{
            
            this.list = new Array();
            
        }

        public function fill(array:Array, noEvent:Boolean=false):void{
            var item:Object;
            for each (item in array) {
                
                this.add(item, noEvent);
            };
            
        }

        public function add(item:Object, noEvent:Boolean=false):Object{
             this.list.push(item);
            
            if (!noEvent){
                this.dispatchEvent(new DependencyCollectionChangeEvent(DependencyCollectionChangeEvent.ADD, this, (this.list.length - 1), null));
            };
            
            return item;
        }

        public function remove(item:Object, noEvent:Boolean=false):Object{
            var i:int = this.list.indexOf(item);
            
            if (i < 0){
                return (null);
            };
            
            this.list.splice(i, 1);
            
            if (!noEvent){
                this.dispatchEvent(new DependencyCollectionChangeEvent(DependencyCollectionChangeEvent.REMOVE, this, uint(i), item));
            };
            
            return (item);
        }

        public function clear(noEvent:Boolean=false):uint{
             if (!noEvent){
                this.dispatchEvent(new DependencyCollectionChangeEvent(DependencyCollectionChangeEvent.CLEAR, this, 0, null));
            };
            
            return (this.list.splice(0, this.list.length));
        }

        public function contains(item:Object):Boolean{
             
            return this.list.indexOf(item) >= 0;
        }

        public function copyTo(array:Array, arrayIndex:int=0):uint{
             
            var i:int;
            while (i < this.list.length) {
                
                array[(i + arrayIndex)] = this.list[i];
                
                i++;
            };
            
            return (this.list.length);
        }

        public function getEnumerator():CollectionEnumerator{
            return (new CollectionEnumerator(this.list));
        }

        override protected function toValueString():String{
            
            return (this.list.toString());
        }

        override public function clone():Object{
            
            return (new Collection(this.list));
        }

        public function get count():uint{
            
            return (this.list.length);
        }


    }

    
    
    
    
}//package rb.framework.data
