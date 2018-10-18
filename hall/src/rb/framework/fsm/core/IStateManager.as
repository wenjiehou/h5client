package rb.framework.fsm.core{
    public interface IStateManager {

        function switchState(_arg1:IState):void;
        function switchStateByKey(_arg1:String):void;
        function switchStateByPath(_arg1:String):void;
        function get mainState():IState;
        function set mainState(_arg1:IState):void;
        function get currentState():IState;
        function set currentState(_arg1:IState):void;

    }

    
    
    
}//package rb.framework.fsm.core
