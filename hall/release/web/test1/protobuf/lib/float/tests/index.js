function runTest(e,t){var r=[0,-0,1/0,-1/0,.125,1024.5,-4096.5,NaN];t.test(t.name+" - using 32 bits",function(t){r.concat([3.4028234663852886e38,1.1754943508222875e-38,1.1754946310819804e-39]).forEach(function(r){var a=0===r&&1/r<0?"-0":r.toString();t.ok(checkValue(r,4,e.readFloatLE,e.writeFloatLE,Buffer.prototype.writeFloatLE),"should write and read back "+a+" (32 bit LE)"),t.ok(checkValue(r,4,e.readFloatBE,e.writeFloatBE,Buffer.prototype.writeFloatBE),"should write and read back "+a+" (32 bit BE)")}),t.end()}),t.test(t.name+" - using 64 bits",function(t){r.concat([1.7976931348623157e308,2.2250738585072014e-308,2.225073858507203e-309]).forEach(function(r){var a=0===r&&1/r<0?"-0":r.toString();t.ok(checkValue(r,8,e.readDoubleLE,e.writeDoubleLE,Buffer.prototype.writeDoubleLE),"should write and read back "+a+" (64 bit LE)"),t.ok(checkValue(r,8,e.readDoubleBE,e.writeDoubleBE,Buffer.prototype.writeDoubleBE),"should write and read back "+a+" (64 bit BE)")}),t.end()}),t.end()}function checkValue(e,t,r,a,o){var l=new Buffer(t);a(e,l,0);var n=r(l,0);0===e&&1/e<0||e.toString();if(e!=e){if(n==n)return!1}else if(n!==e)return!1;var u=new Buffer(t);o.call(u,e,0);for(var i=0;i<t;++i)if(l[i]!==u[i])return console.error(">",l,u),!1;return!0}var tape=require("tape"),float=require("..");tape.test("float",function(e){e.test(e.name+" - typed array",function(e){runTest(float,e)}),e.test(e.name+" - fallback",function(e){var t=global.Float32Array,r=global.Float64Array;delete global.Float32Array,delete global.Float64Array,runTest(float({}),e),global.Float32Array=t,global.Float64Array=r})});