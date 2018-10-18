var tape=require("tape"),protobuf=require("..");tape.test("converters",function(e){protobuf.load("tests/data/convert.proto",function(t,a){if(t)return e.fail(t.message);var s=a.lookup("Message");e.test(e.name+" - Message#toObject",function(e){e.plan(5),e.test(e.name+" - called with defaults = true",function(e){var t=s.create().toObject({defaults:!0});e.equal(t.stringVal,"","should set stringVal"),e.same(t.stringRepeated,[],"should set stringRepeated"),e.same(t.uint64Val,{low:0,high:0,unsigned:!0},"should set uint64Val"),e.same(t.uint64Repeated,[],"should set uint64Repeated"),e.same(t.bytesVal,[],"should set bytesVal"),e.same(t.bytesRepeated,[],"should set bytesRepeated"),e.equal(t.enumVal,1,"should set enumVal to the first defined value"),e.same(t.enumRepeated,[],"should set enumRepeated"),e.same(t.int64Map,{},"should set int64Map"),e.end()}),e.test(e.name+" - called with defaults = undefined",function(e){var t=s.create().toObject();e.equal(t.stringVal,void 0,"should not set stringVal"),e.equal(t.stringRepeated,void 0,"should not set stringRepeated"),e.equal(t.uint64Val,void 0,"should not set uint64Val"),e.equal(t.uint64Repeated,void 0,"should not set uint64Repeated"),e.equal(t.bytesVal,void 0,"should not set bytesVal"),e.equal(t.bytesRepeated,void 0,"should not set bytesRepeated"),e.equal(t.enumVal,void 0,"should not set enumVal"),e.equal(t.enumRepeated,void 0,"should not set enumRepeated"),e.equal(t.int64Map,void 0,"should not set int64 map"),e.end()}),e.test(e.name+" - called with arrays = true",function(e){var t=s.create().toObject({arrays:!0});e.equal(t.stringVal,void 0,"should not set stringVal"),e.same(t.stringRepeated,[],"should set stringRepeated"),e.equal(t.uint64Val,void 0,"should not set uint64Val"),e.same(t.uint64Repeated,[],"should set uint64Repeated"),e.equal(t.bytesVal,void 0,"should not set bytesVal"),e.same(t.bytesRepeated,[],"should set bytesRepeated"),e.equal(t.enumVal,void 0,"should not set enumVal"),e.same(t.enumRepeated,[],"should set enumRepeated"),e.equal(t.int64Map,void 0,"should not set int64Map"),e.end()}),e.test(e.name+" - called with objects = true",function(e){var t=s.create().toObject({objects:!0});e.equal(t.stringVal,void 0,"should not set stringVal"),e.equal(t.stringRepeated,void 0,"should not set stringRepeated"),e.equal(t.uint64Val,void 0,"should not set uint64Val"),e.same(t.uint64Repeated,void 0,"should not set uint64Repeated"),e.equal(t.bytesVal,void 0,"should not set bytesVal"),e.same(t.bytesRepeated,void 0,"should not set bytesRepeated"),e.equal(t.enumVal,void 0,"should not set enumVal"),e.same(t.enumRepeated,void 0,"should not set enumRepeated"),e.same(t.int64Map,{},"should set int64Map"),e.end()}),e.test(e.name+" - should convert",function(e){var t=protobuf.util.newBuffer(3);t[0]=t[1]=t[2]=49;var a=s.create({uint64Val:protobuf.util.Long.fromNumber(1),uint64Repeated:[2,3],bytesVal:t,bytesRepeated:[t,t],enumVal:2,enumRepeated:[1,2],int64Map:{a:protobuf.util.Long.fromNumber(2),b:protobuf.util.Long.fromNumber(3)}}),n=a.toObject({longs:Number}),o=a.toObject({longs:String});e.same(s.ctor.toObject(a,{longs:Number}),n,"should convert the same using the static and the instance method"),e.same(s.ctor.toObject(a,{longs:String}),o,"should convert the same using the static and the instance method"),e.equal(n.uint64Val,1,"longs to numbers"),e.equal(o.uint64Val,"1","longs to strings"),e.same(n.int64Map,{a:2,b:3},"long map values to numbers"),e.same(o.int64Map,{a:"2",b:"3"},"long map values to strings"),e.equal(Object.prototype.toString.call(a.toObject({bytes:Array}).bytesVal),"[object Array]","bytes to arrays"),e.equal(a.toObject({bytes:String}).bytesVal,"MTEx","bytes to base64 strings"),protobuf.util.isNode&&e.ok(Buffer.isBuffer(a.toObject({bytes:Buffer}).bytesVal),"bytes to buffers"),e.equal(a.toObject({enums:String}).enumVal,"TWO","enums to strings"),e.end()})}),e.test(e.name+" - Message.fromObject",function(e){var t={uint64Val:1,uint64Repeated:[1,"2"],bytesVal:"MTEx",bytesRepeated:["MTEx",[49,49,49]],enumVal:"ONE",enumRepeated:[2,"TWO"],int64Map:{a:2,b:"3"}},a=s.fromObject(t);e.same(s.ctor.fromObject(t),a,"should convert the same using the static and the instance method"),e.equal(s.fromObject(a),a,"should just return the object if already a runtime message");var n=protobuf.util.newBuffer(3);n[0]=n[1]=n[2]=49,e.same(a.uint64Val,{low:1,high:0,unsigned:!0},"should set uint64Val from a number"),e.same(a.uint64Repeated,[{low:1,high:0,unsigned:!0},{low:2,high:0,unsigned:!0}],"should set uint64Repeated from a number and a string"),e.same(a.bytesVal,n,"should set bytesVal from a base64 string"),e.same(a.bytesRepeated,[n,n],"should set bytesRepeated from a base64 string and a plain array"),e.equal(a.enumVal,1,"should set enumVal from a string"),e.same(a.enumRepeated,[2,2],"should set enumRepeated from a number and a string"),e.same(a.int64Map,{a:{low:2,high:0,unsigned:!1},b:{low:3,high:0,unsigned:!1}},"should set int64Map from a number and a string"),e.end()}),e.test(e.name+" - Message#toJSON",function(e){var t=s.create();t.$type={toObject:function(t,a){e.same(a,protobuf.util.toJSONOptions,"should use toJSONOptions with toJSON"),e.end()}},t.toJSON()}),e.end()})});