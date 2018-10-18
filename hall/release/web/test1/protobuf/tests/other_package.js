"use strict";var tape=require("tape"),protobuf=require(".."),pkg=require("../package.json");tape.test("package.json (reflected)",function(e){e.plan(2),protobuf.load("tests/data/package.proto",function(s,a){if(s)e.fail(s.message);else{var t=a.lookup("Package"),o=a.lookup("Package.Repository"),r=t.create(pkg);e.test(e.name+" - runtime message",function(e){e.ok(r instanceof protobuf.Message,"should extend Message"),e.equal(r.$type,t,"should reference Package as its reflected type"),e.deepEqual(r,pkg,"should have equal contents"),e.end()}),e.test(e.name+" - decoded message",function(e){var s=t.encode(r).finish(),a=t.decode(s);e.ok(a instanceof protobuf.Message,"should extend Message"),e.equal(a.$type,t,"should reference Package as its reflected type"),e.ok(a.repository instanceof protobuf.Message,"submessages should also extend Message"),e.equal(a.repository.$type,o,"repository submessage should reference Repository as its reflected type"),e.deepEqual(a,pkg,"should have equal contents"),e.end()})}})});