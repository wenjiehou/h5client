var tape=require("tape"),protobuf=require(".."),Message=protobuf.Message;tape.test("google.protobuf.Any class",function(e){e.plan(1),protobuf.load("tests/data/common.proto",function(t,o){function a(e){Message.call(this,e)}if(t)return e.fail(t.message);o.lookup("google.protobuf.Any").ctor=a;var n=protobuf.util.newBuffer(1);n[0]=0;var s=new a({type_url:"some.type",value:n});e.test(e.name+" - instances",function(e){e.ok(s instanceof protobuf.Message,"should extend Message"),e.ok(s instanceof a,"should extend the custom class"),e.deepEqual(s,{type_url:"some.type",value:n},"should be populated with the contents we provided");var t;e.test(e.name+" - should encode",function(e){t=a.encode(s).finish(),e.equal(t[0],10,"a tag with id 1, wire type 2"),e.equal(t[1],9,"a field length of 9"),e.equal(t[11],18,"a tag with id 2, wire type 2"),e.equal(t[12],1,"a field length of 1"),e.equal(t.length,14,"14 bytes in total"),e.end()}),e.test(e.name+" - should decode",function(e){msg=a.decode(t),e.ok(msg instanceof a,"to an object that extends the custom class"),e.deepEqual(msg,s,"an equal message"),e.end()}),e.test(e.name+" - should encodeDelimited",function(e){t=a.encodeDelimited(s).finish(),e.equal(t[0],14,"a length of 14"),e.equal(t[1],10,"a tag with id 1, wire type 2"),e.equal(t[2],9,"a field length of 9"),e.equal(t[12],18,"a tag with id 2, wire type 2"),e.equal(t[13],1,"a field length of 1"),e.equal(t.length,15,"15 bytes in total"),e.end()}),e.test(e.name+" - should decodeDelimited",function(e){msg=a.decodeDelimited(t),e.ok(msg instanceof a,"to an object that extends the custom class"),e.deepEqual(msg,s,"an equal message"),e.end()}),e.end()})})});