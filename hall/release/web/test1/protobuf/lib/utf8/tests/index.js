var tape=require("tape"),utf8=require(".."),data=require("fs").readFileSync(require.resolve("./data/utf8.txt")),dataStr=data.toString("utf8");tape.test("utf8",function(e){e.test(e.name+" - length",function(e){e.equal(utf8.length(""),0,"should return a byte length of zero for an empty string"),e.equal(utf8.length(dataStr),Buffer.byteLength(dataStr),"should return the same byte length as node buffers"),e.end()}),e.test(e.name+" - read",function(e){var t=utf8.read([],0,0);e.equal(t,"","should decode an empty buffer to an empty string"),t=utf8.read(data,0,data.length),e.equal(t,data.toString("utf8"),"should decode to the same byte data as node buffers");var a=Buffer.concat([data,data,data,data]);t=utf8.read(a,0,a.length),e.equal(t,a.toString("utf8"),"should decode to the same byte data as node buffers (long)");var u=new Buffer(data.toString("utf8").substring(0,8192));t=utf8.read(u,0,u.length),e.equal(t,u.toString("utf8"),"should decode to the same byte data as node buffers (chunk size)"),e.end()}),e.test(e.name+" - write",function(e){var t=new Buffer(0);e.equal(utf8.write("",t,0),0,"should encode an empty string to an empty buffer");var a=utf8.length(dataStr);t=new Buffer(a),e.equal(utf8.write(dataStr,t,0),a,"should encode to exactly "+a+" bytes"),e.equal(t.length,data.length,"should encode to a buffer length equal to that of node buffers");for(var u=0;u<t.length;++u)if(t[u]!==data[u])return void e.fail("should encode to the same buffer data as node buffers (offset "+u+")");e.pass("should encode to the same buffer data as node buffers"),e.end()})});