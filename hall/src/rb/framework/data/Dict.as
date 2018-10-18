package rb.framework.data{
    import laya.utils.Dictionary;
     

    public class Dict extends DispatcherObject {

        protected var dict:Dictionary;

        public function Dict(){
            this.dict = new Dictionary();
            
        }

        public function get(key:Object):Object{
            return this.dict.get(key);
        }

        public function set(key:Object, value:Object):Boolean{
            
            if (this.dict.get(key) == value){
                return false;
            }
            
            this.dict.set(key,value);
            
            return true;
        }

        public function remove(key:Object):void{
            this.dict.remove(key);
            
        }

        public function clear():void{
            var key:Object;
            for (key in this.dict) {
                
                delete this.dict[key];
            };
            
        }

        public function containsKey(key:Object):Boolean{
           return this.dict.indexOf(key)>=0;
        }

        public function containsValue(value:Object):Boolean{
			return dict.values.indexOf(value)>=0;
             
        }

        public function find(value:Object):Object{
			var index:int=dict.values.indexOf(value);
			if(index<0){
				return null;
			}else{
				return dict.keys[index];
			}
        }

        public function getEnumerator():DictEnumerator{
            
            return (new DictEnumerator(this));
        }

        override public function clone():Object{
            
            var result:Dict = new Dict();
			result.dict.set(this.dict.keys.concat(),this.dict.values.concat())
//			result.dict.keys=this.dict.keys.concat();
//			result.dict.values=this.dict.values.concat();
			return result;
        }

        public function get keys():Array{
            return dict.keys;
        }

        public function get values():Array{
           return dict.values;
        }

        public function get count():uint{
            
            return dict.keys.length;
        }


    }

    
    
    
    
}//package rb.framework.data
