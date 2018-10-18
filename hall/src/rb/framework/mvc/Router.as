package rb.framework.mvc{ 
	
	import rb.framework.data.Dict;
	/**
	 * 路由器 
	 * @author Gao.D.X
	 * 
	 */
    public class Router {

        private static var _instance:Router;

        private var contexts:Array;
 
        public function Router(){
            if (_instance != null){
                throw (new Error("单例模式"));
            };
            
            _instance = this;
            
            this.init();
            
        }

        public static function get instance():Router{
            
            if (_instance == null){
                _instance = new (Router)();
            };
            
            return (_instance);
        }


        protected function init():void{
            
            this.contexts = new Array();
            
        }
		/**
		 * 添加环境
		 * @param key 环境名
		 * @param context 环境体
		 * 
		 */
        public function add(key:String, context:GameContext):void{
            
             
            
            this.contexts.push(context);
            
        }
		/**
		 * 移除环境 
		 * @param key 环境名
		 * @return 
		 * 
		 */		
        public function remove(key:String):GameContext{
            var result:GameContext=null;
			for(var i:int=0;i<contexts.length;i++){
				result=contexts[i];
				if(result.key==key){
					contexts.splice(i,1);
					break;
				}
			}
			 
            return result;
        }
		/**
		 *清理所有环境 
		 */		
        public function clear():void{
            this.contexts=[];
            
        }
		/**
		 *查找环境 
		 * @param key 环境名
		 * @return 
		 * 
		 */		
        public function find(key:String):GameContext{
			
			for(var i:int=0;i<contexts.length;i++){
				var con:GameContext=contexts[i];
				if(con.key==key)return con;
			}
            return (null);
        }
		/**
		 *得到环境的名称索引 
		 * @return 
		 * 
		 */	
        public function getContextsDictionary():Array{
            
			return contexts;
        }
		/**
		 *得到环境的列表 
		 * @return 
		 * 
		 */	
        public function getContextsList():Array{
            
            return this.contexts;
        }


    }

    
    
    
    
}//package rb.framework.mvc
