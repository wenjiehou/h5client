var tape=require("tape"),protobuf=require(".."),def={nested:void 0,options:void 0},proto="package ns;enum Enm {    ONE = 1;    TWO = 2;}message Msg {    message Enm {}}service Svc {}";tape.test("reflected namespaces",function(o){var e=protobuf.Namespace.fromJSON("ns",def);o.same(e.toJSON(),def,"should construct from and convert back to JSON");var n=protobuf.parse(proto).root;e=n.lookup("ns").resolveAll(),o.same(e.getEnum("Enm"),{ONE:1,TWO:2},"should get enums"),o.throws(function(){e.getEnum("Msg")},Error,"should throw when getting a message as an enum"),o.throws(function(){e.getEnum("NOTFOUND")},Error,"should throw when getting null as an enum"),o.ok(e.lookupType("Msg"),"should lookup types"),o.equal(e.get("Msg").lookupTypeOrEnum("Enm"),e.lookup(".ns.Msg.Enm"),"should lookup the nearest type or enum"),o.throws(function(){e.lookupType("Enm")},Error,"should throw when looking up an enum as a type"),o.throws(function(){e.lookupType("NOTFOUND")},Error,"should throw when looking up null as a type"),o.ok(e.lookupEnum("Enm"),"should lookup enums"),o.throws(function(){e.lookupEnum("Msg")},Error,"should throw when looking up a type as an enum"),o.throws(function(){e.lookupEnum("NOTFOUND")},Error,"should throw when looking up null as an enum"),o.ok(e.lookupService("Svc"),"should lookup services"),o.throws(function(){e.lookupService("Msg")},Error,"should throw when looking up a type as a service"),o.throws(function(){e.lookupService("NOTFOUND")},Error,"should throw when looking up null as a service"),o.equal(e.lookup(""),e,"should lookup itself for an empty path"),o.equal(e.lookup([]),e,"should lookup itself for []"),o.ok(e.lookup(".")instanceof protobuf.Root,"should lookup root for ."),o.ok(e.lookup([""])instanceof protobuf.Root,'should lookup root for [""]'),o.throws(function(){e.define(null)},"should throw when path is not a string or array"),o.throws(function(){e.define(".sub",{})},"should throw when defining absolute .sub"),o.throws(function(){e.define(["","sub"],{})},'should throw when defining absolute ["", "sub"]');var s=e.define("sub",{});o.equal(e.lookup("sub"),s,"should define sub namespaces"),o.throws(function(){e.add(new protobuf.ReflectionObject("invalid"))},TypeError,"should throw when adding invalid nested objects"),o.throws(function(){e.add(new protobuf.Enum("sub"))},Error,"should throw on duplicate names"),s=e.define("sub.sub"),o.equal(e.lookup("sub.sub"),s,"should define sub sub namespaces"),o.throws(function(){e.remove(!0)},TypeError,"should throw when trying to remove non-reflection objects"),o.throws(function(){e.remove(new protobuf.Enum("Enm"))},Error,"should throw when trying to remove non-children"),o.throws(function(){e.add(new protobuf.Enum("MyEnum",{})),e.define("MyEnum")},Error,"should throw when trying to define a path conflicting with non-namespace objects"),e=protobuf.Namespace.fromJSON("My",{nested:{Message:{fields:{}},Enum:{values:{}},Service:{methods:{}},extensionField:{type:"string",id:1e3,extend:"Message"},Other:{nested:{}}}}),o.same(e.toJSON(),{nested:{Message:{extensions:void 0,fields:{},group:void 0,nested:void 0,oneofs:void 0,options:void 0,reserved:void 0},Enum:{options:void 0,values:{}},Service:{methods:{},nested:void 0,options:void 0},extensionField:{extend:"Message",id:1e3,options:void 0,rule:void 0,type:"string"},Other:{nested:void 0,options:void 0}},options:void 0},"should create from Type, Enum, Service, extension Field and Namespace JSON"),o.end()});