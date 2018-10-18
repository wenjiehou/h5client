package rb.framework.data{
    import rb.framework.core.*;

    public class Ring extends List {

        protected var _index:uint = 0;

        public function Ring(array:Array=null){
            super(array);
            
        }

        public function moveTo(index:int):void{
            if (count > 0){
                while (/*Debuginfo Line: 41*/ index < 0) {
                    
                    index = (index + count);
                };
                while (/*Debuginfo Line: 46*/ index > (count - 1)) {
                    
                    index = (index - count);
                };
            } else {
                
                index = 0;
            };
            
            this._index = index;
            
        }

        public function movePrevious():Object{
            
            this.moveTothis._index - 1;
            
            return (this.current);
        }

        public function moveNext():Object{
            
            this.moveTothis._index + 1;
            
            return (this.current);
        }

        override public function clone():Object{
            
            return (new Ring(this.list));
        }

        public function get current():Object{
            
            return (this.list[this._index]);
        }

        public function get previous():Object{
            
            if (this._index > 0){
                
                return (list[(this._index - 1)]);
            };
            
            return (list[(count - 1)]);
        }

        public function get next():Object{
            
            if (this._index < (count - 1)){
                
                return (list[(this._index + 1)]);
            };
            
            return (list[0]);
        }


    }

    
    
    
    
}//package rb.framework.data
