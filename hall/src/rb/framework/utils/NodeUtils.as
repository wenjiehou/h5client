package rb.framework.utils{ 
    import rb.framework.data.Node;
    import rb.framework.data.NodeEnumerator;

    public class NodeUtils {

        public function NodeUtils(){
        }

        public static function getLevel(node:Node):uint{
            var result:uint;
            
            var temp:Node = node;
            while ( temp.parent != null) {
                
                temp = temp.parent;
                
                result++;
            };
            
            return (result);
        }

        public static function getPath(node:Node, sep:String="\\"):String{
            
            var result:String = node.key;
            
            var temp:Node = node;
            while ( temp.parent != null) {
                
                result = ((temp.parent.key + sep) + result);
                
                temp = temp.parent;
            };
            
            return sep + result;
        }

        public static function getRoot(node:Node):Node{
            
            var temp:Node = node;
            while ( temp.parent != null) {
                
                temp = temp.parent;
            };
            
            return (temp);
        }

        public static function getFirstChild(node:Node):Node{
            if (node.count == 0){
                return (null);
            };
            
            return node.get(0) as Node;
        }

        public static function getLast(node:Node):Node{
            if (node.parent == null){
                return (null);
            };
            
            if (node.parent.count == 0){
                return (null);
            };
            
            return node.parent.get((node.parent.count - 1)) as Node;
        }

        public static function getFirst(node:Node):Node{
            if (node.parent == null){
                return (null);
            };
            
            if (node.parent.count == 0){
                return (null);
            };
            
            return node.parent.get(0) as Node;
        }

        public static function getNext(node:Node):Node{
            
            if (node.parent == null){
                return (null);
            };
            
            var i:int = node.parent.indexOf(node);
            
            if (i >= (node.parent.count - 1)){
                return (null);
            };
            
            return node.parent.get((i + 1)) as Node;
        }

        public static function getPrevious(node:Node):Node{
            
            if (node.parent == null){
                return (null);
            };
            
            var i:int = node.parent.indexOf(node);
            
            if (i == 0){
                return (null);
            };
            
            return node.parent.get((i - 1)) as Node;
        }

        public static function getNodeByKey(node:Node, nodeKey:String):Node{
            var n:Node;
            var ie:NodeEnumerator = node.getNodeEnumerator();
            while ( !(ie.isEnd)) {
                
                
                n = (ie.current as Node);
                
                if (n.key == nodeKey){
                    return (n);
                };
                
                ie.moveNext();
            };
            
            return (null);
        }

        public static function getNodeByKeyFromCurrentLevel(node:Node, nodeKey:String):Node{
            var result:Array = getNodesByKeyFromCurrentLevel(node, nodeKey);
            
            if (result.length == 0){
                return (null);
            };
            
            return result[0] as Node;
        }

        public static function getNodesByKeyFromCurrentLevel(node:Node, nodeKey:String):Array{
            var n:Node;
            
            var result:Array = new Array();
            
            var i:int;
            while (i < node.count) {
                
                
                n = (node.get(i) as Node);
                
                if (n.key == nodeKey){
                    
                    result.push(n);
                };
                
                i++;
            };
            
            return (result);
        }

        public static function getNodes(node:Node, searchPath:String, sep:String="/"):Array{
            var key:String;
            var n:Node;
            var j:int;
            var r:Node;
            var result:Array = new Array();
            
            if (searchPath == null){
                return (result);
            };
            
            var keys:Array = searchPath.split(sep);
            
            var searchNode:Node = node;
            
            if (keys[0] == ""){
                
                searchNode = node.root;
                
                keys.splice(0, 2);
            };
            
            var i:int;
            for (;i < keys.length;i++) {
                
                
                key = keys[i];
                
                if (i < (keys.length - 1)){
                    
                    
                    n = getNodeByKeyFromCurrentLevel(searchNode, key);
                    
                    if (n != null){
                        
                        searchNode = n;
                        
                        continue;
                    };
                    
                    break;
                };
                
                
                j = 0;
                while (j < searchNode.count) {
                    
                    
                    r = (searchNode.get(j) as Node);
                    
                    if (r.key == key){
                        
                        result.push(r);
                    };
                    
                    j++;
                };
                
            };
            
            return (result);
        }

        public static function getParents(node:Node):Array{
            var result:Array = new Array();
            
            var temp:Node = node;
            while ( temp != null) {
                
                result.unshift(temp);
                
                temp = temp.parent;
            };
            
            return (result);
        }

        public static function getParentNode(node1:Node, node2:Node):Node{
            
            var p1:Array = getParents(node1);
            
            var p2:Array = getParents(node2);
            
            var i:int,j:int;
			for(i=p1.length-1;i>=0;i--)
			{
				for(j=p2.length-1;j>=0;j--)
				{
					if(p2[j] == p1[i])
					{
						return  p2[j];
					}
				}
			}
            
            return null;
        }

		
		/**
		 * 后者肯定是前者的爸爸
		 * */
        public static function getRoad(node1:Node, node2:Node):Array{
			var result:Array = new Array();

            var parents:Array = getParents(node1);
            if (parents.indexOf(node2) < 0){
                return result;
            }            
            for(var i:int = parents.length - 1;i >= 0;i--){
                result.unshift(parents[i]);
                if (parents[i] == node2) break;
            };
            
            return result;
        }

        public static function isParentNode(child:Node, parent:Node):Boolean{
            if (child == null || parent == null){
                return (false);
            };
            
            var temp:Node = child.parent;
            while ( temp != null) {
                
                if (temp == parent){
                    return (true);
                };
                
                temp = temp.parent;
            };
            
            return (false);
        }


    }

    
    
    
    
}//package rb.framework.utils
