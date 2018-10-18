package rb.framework.fsm{
    import rb.framework.data.Node;
    

    public class AbstractState extends Node {

        public function AbstractState(key:String=""){
            super(key);
            
        }

        final override protected function init():void{
            
            super.init();
            
            this.onInit();
            
        }

        protected function onInit():void{
            
        }

        public function open():void{
            
            trace("open:", path);
            
        }

        public function close():void{
            
            trace("close:", path);
            
        }


    }

    
    
    
    
}//package rb.framework.fsm
