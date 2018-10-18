var tape=require("tape"),protobuf=require(".."),def={oneof:["a","b"],options:{}},proto='syntax = "proto3";message Test {    oneof kind {        uint32 a = 1;        string b = 2;    }    bool c = 3;}';tape.test("reflected oneofs",function(o){var e=protobuf.OneOf.fromJSON("kind",{oneof:["a","b"],options:{}});o.same(e.toJSON(),def,"should construct from and convert back to JSON");var t=protobuf.parse(proto).root,a=t.lookup("Test"),d=a.get("kind"),r=a.get("c");d.add(r),o.same(d.toJSON(),{oneof:["a","b","c"],options:void 0},"should allow adding fields"),o.ok(a.get("c"),"should still have the field on the parent"),d.remove(r),o.same(d.toJSON(),{oneof:["a","b"],options:void 0},"should allow removing fields"),o.ok(a.get("c"),"should still have the field on the parent");var n=new protobuf.Type("Test2");t.add(n),n.add(r),d.add(r),o.notOk(n.get("c"),"should remove the field from the previous parent");var s=new protobuf.Field("d",4,"float");d.add(s),a.remove(s),a.remove(d),o.same(a.fields,{},"should remove all fields from the parent"),o.same(d.oneof,["a","b","c","d"],"should still have the fields on the oneof"),o.end()});