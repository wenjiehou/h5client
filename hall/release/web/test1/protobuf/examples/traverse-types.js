function traverseTypes(e,r){e instanceof protobuf.Type&&r(e),e.nestedArray&&e.nestedArray.forEach(function(e){traverseTypes(e,r)})}var protobuf=require(".."),proto='syntax="proto3";package example;message Foo {  string a = 1;}message Bar {  uint32 b = 1;    message Inner {    bytes c = 1;  }}';protobuf.parse.filename="traverse-types.proto";var root=protobuf.parse(proto).root;traverseTypes(root,function(e){console.log(e.constructor.className+" "+e.name+"\n  fully qualified name: "+e.fullName+"\n  defined in: "+e.filename+"\n  parent: "+e.parent+" in "+e.parent.filename)});