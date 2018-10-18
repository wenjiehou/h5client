var tape=require("tape"),protobuf=require("../debug");tape.test("google.protobuf.Any type",function(e){protobuf.debug.enable(),protobuf.load("tests/data/common.proto",function(o,t){if(o)return e.fail(o.message);var u=t.resolveAll().lookup("google.protobuf");e.ok(u.Any,"should expose Any as a property on the reflected google.protobuf namespace");var a=t.lookup("google.protobuf.Any");e.ok(a instanceof protobuf.Type,"should extend Type");var n=protobuf.util.newBuffer(1);n[0]=0;var l=a.create({type_url:"some.type",value:n});e.test(e.name+" - instances",function(e){e.ok(l instanceof protobuf.Message,"should extend Message"),e.deepEqual(l,{type_url:"some.type",value:n},"should be populated with the contents we provided");var o,u=a.encode(l);e.test(e.name+" - should encode",function(e){u=a.encode(l),function(e,o){e.equal(o[0],10,"a tag with id 1, wire type 2"),e.equal(o[1],9,"a field length of 9"),e.equal(o[11],18,"a tag with id 2, wire type 2"),e.equal(o[12],1,"a field length of 1"),e.equal(o.length,14,"14 bytes in total")}(e,o=u.finish()),e.end()}),e.test(e.name+" - should decode",function(e){var t=a.decode(o);e.deepEqual(t,l,"an equal message"),e.end()}),e.test(e.name+" - should encodeDelimited",function(e){u=a.encodeDelimited(l),o=u.finish(),e.equal(o[0],14,"a length of 14"),e.equal(o[1],10,"a tag with id 1, wire type 2"),e.equal(o[2],9,"a field length of 9"),e.equal(o[12],18,"a tag with id 2, wire type 2"),e.equal(o[13],1,"a field length of 1"),e.equal(o.length,15,"15 bytes in total"),e.end()}),e.test(e.name+" - should decodeDelimited",function(e){var t=a.decodeDelimited(o);e.deepEqual(t,l,"an equal message"),e.end()}),e.test(e.name+" - debug",function(e){var o=protobuf.debug.unusedTypes(t).map(function(e){return e.fullName});e.same(o,[".Something",".google.protobuf.Duration",".google.protobuf.Empty",".google.protobuf.Struct",".google.protobuf.Value",".google.protobuf.ListValue",".google.protobuf.Timestamp"],"should recognize unused types (all but .google.protobuf.Any)"),protobuf.debug.disable(),e.end()}),e.end()}),e.end()})});