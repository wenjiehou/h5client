package rb.framework.errors{
    public class SingletonError extends Error {

        private var _type:String;

        public function SingletonError(target:Object){
            this._type = "此类";
            
            super((this.type + "被设计为单例模式, 不能创建多个实例"), 0);
            
        }

        public function get type():String{
            
            return (this._type);
        }


    }

    
    
    
    
}//package hs.framework.errors
