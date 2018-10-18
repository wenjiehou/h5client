package rb.framework.fsm{ 
    
    import rb.framework.data.DependencyObject;
    import rb.framework.data.Node;
    import rb.framework.mvc.GameContext;
    import rb.framework.utils.NodeUtils;
    

    public class StateManager extends DependencyObject {

		
		protected var _switching:Boolean;
		protected var _switchQueue:Array;
		
		public function StateManager(){
			this._switchQueue = new Array();
			
		}
		
		protected function onSwitchState(state:GameContext):void{
			var s:GameContext;
			
			if (state == null){
				return;
			};
			
			if (this.currentState == null){
				var allparents:Array=NodeUtils.getParents(state);
				for each(s in allparents){
					this.onOpenState(s);
				}
				
				this.onUpdateCurrentStateValue(state);
				
				return;
			};
			
			var parent:Node = NodeUtils.getParentNode(this.currentState, state);
			if(parent == null)//这两个状态是独立的模块
			{
				
			}
			
			var closeList:Array = NodeUtils.getRoad(this.currentState, parent);
			
			var openList:Array = NodeUtils.getRoad(state, parent);
			
			var i:int = closeList.length - 1;
			
			while (i >= 0) {
				
				if (closeList[i] != parent){
					 
					this.onCloseState(closeList[i]);
					
				};
				
				i--;
			};
			
			for each (s in openList) {
				
				if (s != parent){
					
					this.onOpenState(s);
				};
			};
			
			this.onUpdateCurrentStateValue(state);
			
		}
		
		protected function onOpenState(state:GameContext):void{
			state.open();
			
		}
		
		protected function onCloseState(state:GameContext):void{
			state.close();
			
		}
		
		protected function onUpdateCurrentStateValue(state:GameContext):void{
			this.SET("currentState", state);
			
		}
		
		final public function switchState(state:GameContext):void{
			var stackTrace:String;
			
			//			try { throw new Error(); }
			//			catch (e:Error) { stackTrace = e.getStackTrace(); }
			var nextState:GameContext;
			if (state == this.currentState){
//				console.warn("same state");
				return;
			};
			
			if(state!=null)console.log("switch state: "+state.key);//,stackTrace );
			
			if (this._switching){
				
				this._switchQueue.push(state);
				
				return;
			};
			
			this._switching = true;
			
			this.onSwitchState(state);
			
			this._switching = false;
			
			if (this._switchQueue.length > 0){
				
				
				nextState = this._switchQueue[0];
				
				this._switchQueue.splice(0, 1);
				
				Laya.timer.once(1,this, this.switchState, [nextState]);
			}
		}
		
		final public function switchStateByKey(key:String):void{
			
			if (this.mainState == null){
				return;
			};
			
			var target:Object = this.mainState.getNodeByKey(key);
			
			if ((target is GameContext) == false){
				return;
			};
			
			this.switchState((target as GameContext));
			
		}
		
		final public function switchStateByPath(path:String):void{
			
			if (this.mainState == null){
				return;
			};
			
			var target:Object = this.mainState.getNode(path);
			
			if ((target is GameContext) == false){
				return;
			};
			
			this.switchState((target as GameContext));
			
		}
		
		final public function get mainState():GameContext{
			
			return (this.GET("mainState"));
		}
		
		final public function set mainState(value:GameContext):void{
			if (this.SET("mainState", value)){
				
				this.switchState(value);
			};
			
		}
		
		final public function get currentState():GameContext{
			
			return (this.GET("currentState"));
		}
		
		final public function set currentState(value:GameContext):void{
			if (this.SET("currentState", value)){
				
				this.switchState(value);
			};
			
		}
    }

    
    
    
    
}//package rb.framework.fsm
