var tape=require("tape"),protobuf=require(".."),root=protobuf.Root.fromJSON({nested:{Foo:{fields:{foo:{id:1,type:"google.protobuf.Any"}}},Bar:{fields:{bar:{id:1,type:"string"}}}}}).addJSON(protobuf.common["google/protobuf/any.proto"].nested).resolveAll(),Any=root.lookupType(".google.protobuf.Any"),Foo=root.lookupType(".Foo"),Bar=root.lookupType(".Bar");tape.test("google.protobuf.Any",function(o){var e=Foo.fromObject({foo:{type_url:".Bar",value:[10,1,97]}});o.ok(e.foo instanceof Any.ctor,"should keep explicit Any in fromObject"),o.same(e.foo,{type_url:".Bar",value:[10,1,97]},"should keep explicit Any in fromObject properly");var r=Foo.toObject(e);o.same(r.foo,{type_url:".Bar",value:[10,1,97]},"should keep explicit Any in toObject properly"),r=Foo.toObject(e,{json:!0}),o.same(r.foo,{"@type":".Bar",bar:"a"},"should decode explicitly Any in toObject if requested"),e=Foo.fromObject({foo:{"@type":".Bar",bar:"a"}}),o.ok(e.foo instanceof Bar.ctor,"should unwrap wrapped Bar in fromObject"),o.same(e.foo,{bar:"a"},"should unwrap wrapper Bar in fromObject properly"),r=Foo.toObject(e),o.same(r.foo,{"@type":".Bar",bar:"a"},"should wrap Bar in toObject properly"),o.end()});