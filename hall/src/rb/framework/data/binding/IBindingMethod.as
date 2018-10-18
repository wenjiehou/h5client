package rb.framework.data.binding{
    import rb.framework.data.DependencyObject;

    public interface IBindingMethod {

        function bind(_arg1:DependencyObject, _arg2:Object, _arg3:Object, _arg4:uint, ... _args):Boolean;
        function unbind(_arg1:DependencyObject, _arg2:Object):void;
        function unbindFromSource(_arg1:DependencyObject):void;
        function unbindFromTarget(_arg1:Object):void;
        function clear():void;

    }

    
    
    
}//package rb.framework.data.binding
