package rb.framework.data{
    import rb.framework.utils.NodeUtils;
    import rb.framework.utils.forEach;
    import rb.framework.utils.StringUtils; 

    public class Node extends List {

        protected var _key:String="";
        protected var _data:Object;
        protected var _parent:Node;

        public function Node(nodeKey:String=""){
            
            if (nodeKey == null|| nodeKey == ""){
                throw (new Error("未定义节点标识"));
            };
            
            if (nodeKey.indexOf("/") >= 0 || nodeKey.indexOf("\\") >= 0){
                throw (new Error("节点标识中不允许/和\\"));
            };
            
            this._key = nodeKey;
			this.init();
        }

        override protected function init():void{
            
            super.init();
            
        }

        override public function add(item:Object, noEvent:Boolean=false):Object{
            
            if (item is Node){
                
            (item as Node)._parent = this;
            
	            return super.add(item);
			}
			return null;
        }

        override public function remove(item:Object, noEvent:Boolean=false):Object{
            if ((item is Node) == false){
                return (null);
            };
            
            var result:Object = super.remove(item);
            
            if (result != null){
                (result as Node)._parent = null;
            };
            
            return (result);
        }

        override public function insert(index:uint, item:Object, noEvent:Boolean=false):Object{
            if ((item is Node) == false){
                return (null);
            };
            
            var result:Object = super.insert(index, item);
            
            if (result != null){
                (result as Node)._parent = this;
            };
            
            return (result);
        }

        override public function removeAt(index:uint, noEvent:Boolean=false):Object{
            
            var result:Object = super.removeAt(index);
            
            if (result != null){
                (result as Node)._parent = null;
            };
            
            return (result);
        }

        override public function clear(noEvent:Boolean=false):uint{
            
            var i:int;
            while (i < this.count) {
                
                (this.list[i] as Node)._parent = null;
                
                i++;
            };
            
            return (super.clear());
        }

        public function getNodes(searchPath:String):Array{
            return (NodeUtils.getNodes(this, searchPath));
        }

        public function getNode(searchPath:String):Node{
            
            var result:Array = this.getNodes(searchPath);
            
            if (result.length == 0){
                return (null);
            };
            
            return result[0] as Node;
        }

        public function getNodeByKey(nodeKey:String):Node{
            return (NodeUtils.getNodeByKey(this, nodeKey));
        }

        override public function clone():Object{
            var n:Node;
            
            var result:Node = new Node(this.key);
            
            for each (n in this.list) {
                
                result.add((n.clone() as Node), false);
            };
            
            return (result);
        }

        public function get data():Object{
            
            return (this._data);
        }

        public function set data(value:Object):void{
            this._data = value;
            
        }

        public function get key():String{
            
            return (this._key);
        }

        public function get root():Node{
            
            return (NodeUtils.getRoot(this));
        }

        public function get parent():Node{
            
            return (this._parent);
        }

        public function get previous():Node{
            
            return (NodeUtils.getPrevious(this));
        }

        public function get next():Node{
            
            return (NodeUtils.getNext(this));
        }

        public function get first():Node{
            
            return (NodeUtils.getFirst(this));
        }

        public function get last():Node{
            
            return (NodeUtils.getLast(this));
        }

        public function get firstChild():Node{
            
            return (NodeUtils.getFirstChild(this));
        }

        public function getNodeEnumerator():NodeEnumerator{
            
            return (new NodeEnumerator(this));
        }

        override protected function toValueString():String{
            
            return (this.path);
        }

        public function toTreeString():String{
            
            var result:String;
            
            result = "";
            
            forEach(this, function (node:Node):void{
                
                
                
                if (result != ""){
                    result = (result + "\r");
                };
                
                result = (result + (StringUtils.repeat("    ", node.level) + node));
                
            });
            return (result);
        }

        public function get path():String{
            
            return (NodeUtils.getPath(this, "/"));
        }

        public function get level():uint{
            
            return (NodeUtils.getLevel(this));
        }


    }

    
    
    
    
}//package rb.framework.data
