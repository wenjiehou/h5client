package rb.framework.data{ 

    public class Queue extends DependencyObject {

        protected var list:Array;

        public function Queue(array:Array=null){
            
            this.init();
            
            this.fill(array);
            
        }

        protected function init():void{
            
            this.list = new Array();
            
        }

        public function fill(array:Array):void{
            var item:Object;
            
            for each (item in array) {
                
                this.add(item);
            };
            
        }

        public function add(item:Object):Object{
            return (this.list.push(item));
        }

        public function remove():Object{
            if (this.list.length == 0){
                return (null);
            };
            
            var result:Object = this.list[0];
            
            this.list.splice(0, 1);
            
            return (result);
        }

        public function clear():uint{
            
            return (this.list.splice(0, this.list.length));
        }

        public function contains(item:Object):Boolean{
            return this.list.indexOf(item) >= 0;
        }

        public function copyTo(array:Array, arrayIndex:int):uint{
            var i:int;
            while (i < this.list.length) {
                
                array[(i + arrayIndex)] = this.list[i];
                
                i++;
            };
            
            return (this.list.length);
        }

        public function getEnumerator():CollectionEnumerator{
            
            return new CollectionEnumerator(this.list);
        }

        override protected function toValueString():String{
            
            return (this.list.toString());
        }

        public function get front():Object{
            
            return (this.list[0]);
        }

        override public function clone():Object{
            
            return (new Queue(this.list));
        }

        public function get count():uint{
            
            return (this.list.length);
        }


    }

    
    
    
    
}//package rb.framework.data
