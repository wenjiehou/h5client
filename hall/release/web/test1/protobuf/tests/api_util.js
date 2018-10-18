var tape=require("tape"),protobuf=require(".."),util=protobuf.util;tape.test("util",function(t){t.test(t.name+" - merge",function(t){var e={};util.merge(e,{}),t.same(e,{},"should do nothing if both objects are empty"),util.merge(e,{a:1}),t.same(e,{a:1},"should merge non-existing keys"),util.merge(e,{a:2}),t.same(e,{a:2},"should merge existing keys"),util.merge(e,{a:3},!0),t.same(e,{a:2},"should not merge existing keys"),t.end()}),t.test(t.name+" - lcFirst",function(t){t.equal(util.lcFirst("ABC"),"aBC","should convert the first character to lower case"),t.end()}),t.test(t.name+" - ucFirst",function(t){t.equal(util.ucFirst("abc"),"Abc","should convert the first character to upper case"),t.end()}),t.test(t.name+" - isSet",function(t){[[],{},void 0,null].forEach(function(e){var n={},r=Object.create(n);n.p=e,r.i=e,t.notOk(util.isSet(n,"p"),"should return that "+JSON.stringify(e)+" on the prototype is not present"),t.notOk(util.isSet(r,"i"),"should return that "+JSON.stringify(e)+" on the instance is not present")});var e={arrays:[[],[0]],objects:[{},{a:1}],strings:[void 0,""],numbers:[void 0,0],booleans:[void 0,!1]};Object.keys(e).forEach(function(n){var r=e[n][0],o=e[n][1],i={},s=Object.create(i);i.pe=s.ie=r,i.p=s.i=o,void 0!==r&&(t.notOk(util.isSet(s,"pe"),"should return that empty "+n+" on the prototype are not present"),t.notOk(util.isSet(s,"ie"),"should return that empty "+n+" on the instance are not present")),t.notOk(util.isSet(s,"p"),"should return that "+n+" on the prototype are not present"),t.ok(util.isSet(s,"i"),"should return that "+n+" on the instance ARE present")}),t.end()}),t.end()});