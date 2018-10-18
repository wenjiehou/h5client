var tape=require("tape"),protobuf=require(".."),def={methods:{},nested:{SomeEnum:{options:void 0,values:{}}},options:void 0},methodDef={type:void 0,requestType:"MyRequest",requestStream:!0,responseType:"MyResponse",responseStream:!0,options:{}};tape.test("reflected services",function(e){var o=protobuf.Service.fromJSON("MyService",def);e.same(o.toJSON(),def,"should construct without methods from and convert back to JSON");var t=protobuf.Method.fromJSON("MyMethod",methodDef);e.same(t.toJSON(),methodDef,"should constructos methods from and convert back to JSON"),o.add(t),e.ok(o.get("MyMethod"),"should allow adding methods");var d=new protobuf.Enum("Other",{});o.add(d),e.ok(o.get("Other"),"should allow adding other nested objects"),o.remove(d),e.notOk(o.get("Other"),"should allow removing other nested objects"),o.remove(t),e.notOk(o.get("Other"),"should allow removing methods"),e.same(o.toJSON(),def,"should convert to initial JSON afterwards"),def.methods.MyMethod=methodDef,o=protobuf.Service.fromJSON("MyService",def),e.same(o.toJSON(),def,"should construct with methods from and convert back to JSON"),t=o.get("MyMethod"),e.end()});