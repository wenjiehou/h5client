package rb.framework.data{
    import rb.framework.core.CompareResult;
    import rb.framework.core.IEnumerator;
    import rb.framework.core.*;

    public class Heap extends DependencyObject {

        protected var list:Array;
        protected var compareHandler:Function;

        public function Heap(compareMethod:Function=null, array:Array=null){
            this.init();
            
            this.compareHandler = compareMethod;
            
            this.fill(array);
            
        }

        protected function init():void{
            
            this.list = [null];
            
        }

        public function sort(index:int):void{
            var p:int;
            var t:*;
            
            var s:int = index;
            while ( s > 1) {
                
                
                p = int(s / 2);
                
                if (this.compareHandler(this.list[s], this.list[p]) == CompareResult.GREATER){
                    
                    
                    t = this.list[s];
                    
                    this.list[s] = this.list[p];
                    
                    this.list[p] = t;
                } else {
                    
                    break;
                };
                
                s = p;
            };
            
        }

        public function update(item:Object):void{
            
            var i:int = this.list.indexOf(item);
            
            if (i > 0){
                this.sort(i);
            };
            
        }

        public function fill(array:Array):void{
            var item:Object;
            
            for each (item in array) {
                
                this.add(item);
            };
            
        }

        public function add(item:Object):Object{
            
            var i:int = this.list.push(item);
            
            this.sorti - 1;
            
            return (item);
        }

        public function remove():Object{
            var os:int;
            var p:int;
            var t:*;
            
            if (this.list.length == 1){
                
                return (null);
            };
            
            if (this.list.length == 2){
                
                return (this.list.pop());
            };
            
            var v:* = this.list[1];
            
            var s:int = 1;
            
            this.list[1] = this.list.pop();
            while ( true) {
                
                
                
                os = s;
                
                p = (s * 2);
                
                if (p < this.list.length){
                    
                    if (this.compareHandler(this.list[p], this.list[s]) == CompareResult.GREATER){
                        
                        s = p;
                    };
                    
                    if (((p + 1) < this.list.length) && (this.compareHandler(this.list[(p + 1)], this.list[s]) == CompareResult.GREATER)){
                        
                        s = (p + 1);
                    };
                };
                
                if (s != os){
                    
                    
                    t = this.list[s];
                    
                    this.list[s] = this.list[os];
                    
                    this.list[os] = t;
                } else {
                    
                    break;
                };
            };
            
            return (v);
        }

        public function clear():uint{
            var result:uint = this.count;
            
            this.list = [null];
            
            return (result);
        }

        public function contains(item:Object):Boolean{
            return this.list.indexOf(item) > 0;
        }

        public function copyTo(array:Array, arrayIndex:int):uint{
            
            var cloneList:Array = this.list.concat();
            
            cloneList.splice(0, 1);
            
            var cloneHeap:Heap = new Heap(this.compareHandler, cloneList);
            
            var ie:IEnumerator = cloneHeap.getEnumerator();
            
            var i:int = arrayIndex;
            while ( !(ie.isEnd)) {
                
                array[i] = ie.current;
                ie.moveNext();
                i++;
            };
            
            return (this.count);
        }

        public function getEnumerator():IEnumerator{
            var cloneList:Array = this.list.concat();
            
            cloneList.splice(0, 1);
            
            return (new HeapEnumerator(cloneList, this.compareHandler));
        }

        public function get top():Object{
            
            if (this.count == 0){
                return (null);
            };
            
            return (this.list[1]);
        }

        override public function clone():Object{
            
            return (new Heap(this.compareHandler, this.list));
        }

        public function get count():uint{
            
            return this.list.length - 1;
        }


    }

    
    
    
    
}//package rb.framework.data
