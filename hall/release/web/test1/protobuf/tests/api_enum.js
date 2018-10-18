var tape=require("tape"),protobuf=require("..");tape.test("reflected enums",function(o){var e=new protobuf.Enum("Test",{a:1,b:2}),a=new protobuf.Enum("AliasTest",{a:0},{allow_alias:!0});o.throws(function(){new protobuf.Enum("Test",!0)},TypeError,"should throw if values is specified but not an object"),o.same(e.valuesById,{1:"a",2:"b"},"should also expose their values by id"),o.throws(function(){e.add(2,2)},TypeError,"should throw if name is not a string"),o.throws(function(){e.add("c",1.5)},TypeError,"should throw if id is not an integer"),o.throws(function(){e.add("b",2)},Error,"should throw if name is a duplicate"),o.throws(function(){e.add("c",2)},Error,"should throw if id is a duplicate, without allow_alias option"),e.add("c",3),o.same(e.values,{a:1,b:2,c:3},"should allow adding new values"),o.same(e.valuesById,{1:"a",2:"b",3:"c"},"should also expose any new values by id"),o.throws(function(){e.remove(1)},TypeError,"should throw if name is not a string"),o.throws(function(){e.remove("d")},Error,"should throw if name is not present"),e.remove("b"),o.same(e.values,{a:1,c:3},"should allow removing existing values"),o.same(e.valuesById,{1:"a",3:"c"},"should no longer expose any removed values by id"),o.same(e.toJSON(),{options:void 0,values:{a:1,c:3}},"should export options and values to JSON"),a.add("b",0),o.same(a.values,{a:0,b:0}),o.end()});