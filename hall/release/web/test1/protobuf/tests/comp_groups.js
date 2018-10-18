var tape=require("tape"),protobuf=require(".."),protoRequired='message Test {    required group MyGroup = 1 {        option foo = "bar";        required uint32 a = 2;    };}',protoRepeated='message Test {    repeated group MyGroup = 1 {        option foo = "bar";        required uint32 a = 2;    };}';tape.test("legacy groups",function(e){var o=protobuf.parse(protoRequired).root,r=o.resolveAll().lookup("Test"),t=r.get("MyGroup"),u=r.get("myGroup"),a={myGroup:{a:111}};e.ok(t instanceof protobuf.Type&&u instanceof protobuf.Field,"should parse to a type and a field"),e.equal(t.group,!0,"should have the group flag set on the type"),e.equal(u.resolvedType,t,"should reference the type from the field");var p=t.toJSON();e.equal(p.group,!0,"should export group=true to JSON");var i=protobuf.Type.fromJSON("MyGroup",p);e.equal(i.group,!0,"should import group=true from JSON"),e.test(e.name+" - should encode required",function(e,o){return function(r){var t=e.encode(o).finish();r.equal(t.length,4,"a total of 4 bytes"),r.equal(t[0],11,"id 1, wireType 3"),r.equal(t[1],16,"id 2, wireType 0"),r.equal(t[2],111,"111"),r.equal(t[3],12,"id 1, wireType 4"),r.same(e.decode(t),o,"and decode back the original message"),r.end()}}(r,a)),r=(o=protobuf.parse(protoRepeated).root).resolveAll().lookup("Test"),a={myGroup:[{a:111},{a:112}]},e.test(e.name+" - should encode repeated",function(e,o){return function(r){var t=e.encode(o).finish();r.equal(t.length,8,"a total of 8 bytes"),r.equal(t[0],11,"id 1, wireType 3"),r.equal(t[1],16,"id 2, wireType 0"),r.equal(t[2],111,"111"),r.equal(t[3],12,"id 1, wireType 4"),r.equal(t[4],11,"id 1, wireType 3"),r.equal(t[5],16,"id 2, wireType 0"),r.equal(t[6],112,"112"),r.equal(t[7],12,"id 1, wireType 4"),r.same(e.decode(t),o,"and decode back the original message"),r.end()}}(r,a)),e.end()});