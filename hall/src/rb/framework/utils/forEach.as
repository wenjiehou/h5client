package rb.framework.utils{ 

    public function forEach(enumerator:*, handler:Function):void{
        
        
        
        
        
        
        var ie:* = enumerator.getEnumerator();
        while ( !(ie.isEnd)) {
            
            handler.call(null, ie.current);
            
            ie.moveNext();
        };
        
    }


    
    
}//package rb.framework.utils
