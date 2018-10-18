var tape=require("tape"),protobuf=require(".."),def={fields:{},oneofs:void 0,extensions:void 0,reserved:void 0,group:void 0,nested:void 0,options:void 0},def2={fields:{a:{type:"uint32",id:1}},oneofs:{kind:{oneof:["a"]}},extensions:[[1e3,2e3]],reserved:[[900,999],"b"],nested:{Type:{values:{ONE:1,TWO:2}},Service:{methods:{}}},options:{custom:!0}};tape.test("reflected types",function(e){function o(){}function t(){}var s=protobuf.Type.fromJSON("Test",def);e.same(s.toJSON(),def,"should construct from and convert back to JSON"),s=protobuf.Type.fromJSON("Test",def2),e.same(JSON.parse(JSON.stringify(s)),JSON.parse(JSON.stringify(def2)),"should construct from and convert back to JSON (complex parsed)"),s.ctor=o,e.ok(o.prototype instanceof protobuf.Message,"should properly register a constructor through assignment"),e.ok("function"==typeof o.encode,"should populate static methods on assigned constructors"),t.prototype=Object.create(protobuf.Message.prototype),s.ctor=t,e.ok(t.prototype instanceof protobuf.Message,"should properly register a constructor through assignment if already extending message"),e.ok("function"==typeof t.encode,"should populate static methods on assigned constructors"),s=protobuf.Type.fromJSON("My",{fields:{a:{type:"string",id:1}},reserved:[[900,999],"b"],nested:{Type:{fields:{}},Enum:{values:{}},Service:{methods:{}},extensionField:{type:"string",id:1e3,extend:"Message"},Other:{nested:{}}}}),e.same(s.toJSON(),{fields:{a:{extend:void 0,id:1,options:void 0,rule:void 0,type:"string"}},oneofs:void 0,extensions:void 0,reserved:[[900,999],"b"],group:void 0,nested:{Type:{extensions:void 0,fields:{},group:void 0,nested:void 0,oneofs:void 0,options:void 0,reserved:void 0},Enum:{options:void 0,values:{}},Service:{methods:{},nested:void 0,options:void 0},extensionField:{extend:"Message",id:1e3,options:void 0,rule:void 0,type:"string"},Other:{nested:void 0,options:void 0}},options:void 0},"should create from Field, Type, Enum, Service, extension Field and Namespace JSON"),e.throws(function(){s.add(new protobuf.Enum("Enum"))},Error,"should throw when trying to add duplicate names"),e.throws(function(){s.add(new protobuf.Field("c",1,"uint32"))},Error,"should throw when trying to add duplicate ids"),e.throws(function(){s.add(new protobuf.Field("c",900,"uint32"))},Error,"should throw when trying to add reserved ids"),e.throws(function(){s.add(new protobuf.Field("b",2,"uint32"))},Error,"should throw when trying to add reserved names"),e.end()});