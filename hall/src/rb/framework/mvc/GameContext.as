package rb.framework.mvc{ 
    
    import laya.utils.Dictionary;
    
    import rb.framework.fsm.AbstractState;
    import rb.framework.mvc.core.LayerTypes;
    import rb.framework.mvc.strategies.NotifyStrategy;
	

	/**
	 * 环境
	 *<br/>联系所有M、V、C的核心地带，基于State状态形容的扩展
	 * 可以根据statemanager进行自动化切换。
	 * <br/>主要继承 onInit，open，close
	 * 默认的close中会清理所有已经添加的View/Model/Controller和从路由中除名
	 * @author Gao.D.X
	 * 
	 */
    public class GameContext extends AbstractState {

		private static var handlerSort:Dictionary=new Dictionary();
		public static function addHandler(name:String,layer:AbstractLayer):void{
			var layers:Array=getHandlers(name);
			if(layers.indexOf(layer)<0){
				layers.push(layer);
			}
		}
		public static function getHandlers(name:String):Array{
			var layers:Array=handlerSort.get(name);
			if(!layers){
				layers=[];
				handlerSort.set(name,layers);
			}
			return layers;
		}
		public static function removeHandler(name:String,layer:AbstractLayer):void{
			var layers:Array=getHandlers(name);
			
			var index:int=layers.indexOf(layer);
			if(index>=0){
				layers.splice(index,1);
			}
		
		}
        protected var _layers:Array;
        protected var _strategy:NotifyStrategy;
		public var module:Module;
        public function GameContext(key:String="", module:Module=null,parentNode:GameContext=null){
            super(key);
            if(module)this.setModule(module);
			if(parentNode)this.setParent(parentNode);
            
        }
		public function setModule(module:Module):GameContext{
			this.module=module;
			this._strategy = module.strategy;
			return this;
		}
		public function setParent(parentNode:GameContext):GameContext{
			parentNode.add(this,true);
			return this;
		}
        override protected function onInit():void{
            
            
            
            super.onInit();
            
            this._layers = new Array();
            
        }
		/**
		 *切回父级状态 
		 * 
		 */		
		public function backToParent():void{
			if(parent!=null)module.switchState(parent as GameContext);
		}
        protected function addLayer(layer:AbstractLayer, type:uint):void{
            
            
            if ((layer is AbstractLayer) == false){
                return;
            };
            
            if (layer.context != null){
                return;
            };
            
            if (this._layers.indexOf(layer) >= 0){
                return;
            };
           // Debug.log("addLayer:" + layer);
			//trace("addLayer"+layer)
			console.log("Context addLayer "+typeof(layer));
            var alayer:AbstractLayer =layer;
            
			
			
            alayer.actived = true;
            
            alayer.setContext(this);
            
            alayer.setType(type);
            
            this._layers.push(alayer);
            
            layer.onAdd();
            
        }
		/**
		 *添加模组 
		 * @param model
		 * 
		 */
        public function addModel(model:AbstractLayer):void{
            
            this.addLayer(model, LayerTypes.MODEL);
            
        }
		/**
		 *添加视图 
		 * @param view
		 * 
		 */
        public function addView(view:AbstractLayer):void{
            
            this.addLayer(view, LayerTypes.VIEW);
            
        }
		/**
		 *添加控制器 
		 * @param controller
		 * 
		 */		
        public function addController(controller:AbstractLayer):void{
            
			console.log("Context addController "+typeof(controller));
            this.addLayer(controller, LayerTypes.CONTROLLER);
            
        }

        protected function removeLayer(layer:AbstractLayer):void{
            
            if ((layer is AbstractLayer) == false){
                return;
            };
            
            var i:int = this._layers.indexOf(layer);
            
            if (i < 0){
                return;
            };
            
            var aLayer:AbstractLayer = (layer as AbstractLayer);
            
            aLayer.clearHandlers();
            
            aLayer.setType(LayerTypes.NONE);
            
            aLayer.setContext(null);
            
            aLayer.actived = false;
            
            this._layers.splice(i, 1);
            
            layer.onRemove();
            
        }
		/**
		 *移除模组 
		 * @param model
		 * 
		 */
        public function removeModel(model:AbstractLayer):void{
            
            this.removeLayer(model);
            
        }
		/**
		 *移除视图 
		 * @param view
		 * 
		 */
        public function removeView(view:AbstractLayer):void{
            
            this.removeLayer(view);
            
        }
		/**
		 *移除控制器 
		 * @param controller
		 * 
		 */
        public function removeController(controller:AbstractLayer):void{
            
            this.removeLayer(controller);
            
        }

        protected function clearLayer(type:uint):void{
            
            
            var layer:AbstractLayer;
            
            
            
            var i:int = (this._layers.length - 1);
            while (i >= 0) {
                
                
                if ((this._layers[i] is AbstractLayer) != false){
                    
                    layer = this._layers[i];
                    
                    if (layer.type == type){
                        
                        layer.onRemove();
                        
                        layer.clearHandlers();
                        
                        layer.setType(LayerTypes.NONE);
                        
                        layer.setContext(null);
						
						layer.actived = false;
                        
                        this._layers.splice(i, 1);
                    };
                };
                
                i--;
            };
            
        }
		/**
		 *清理模组 
		 * 
		 */
        public function clearModel():void{
            
            
            
            this.clearLayer(LayerTypes.MODEL);
            
        }
		/**
		 *清理视图 
		 * 
		 */
        public function clearView():void{
            
            
            
            this.clearLayer(LayerTypes.VIEW);
            
        }
		/**
		 *清理控制器 
		 * 
		 */
        public function clearController():void{
            
            
            
            this.clearLayer(LayerTypes.CONTROLLER);
            
        }
		/**
		 *发送通知 
		 * @param msg
		 * 
		 */
        public function notify(msg:Message):void
		{
            if (this._strategy == null){
                
                throw (new Error("*** no strategy ***"));
            };
            
            this._strategy.notify(msg);
            
        }
		/**
		 *打开当前环境  ，架构自动调用
		 * 
		 */
        override public function open():void{
            
            
            
           Router.instance.add(this.key, this);
		   console.log("Context open "+this.path);
            
        }
		/**
		 *关闭当前环境 ，架构自动调用
		 * 
		 */
        override public function close():void{
            
            
            
            Router.instance.remove(this.key);
            
            this.clearController();
            
            this.clearModel();
            
            this.clearView();
			console.log("Context close "+this.path);
            //trace("close", this.path);
            
        }

        public function get layers():Array{
            
            
            
            return (this._layers.concat());
        }

        public function get strategy():NotifyStrategy{
            
            
            
            return (this._strategy);
        }

        public function set strategy(value:NotifyStrategy):void{
            this._strategy = value;
            
        }


    }

    
    
    
    
}//package rb.framework.mvc
