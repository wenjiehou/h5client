"use strict";function missing(e){return"missing required '"+e.name+"'"}function decoder(e){var r=util.codegen("r","l")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor"+(e.fieldsArray.filter(function(e){return e.map}).length?",k":""))("while(r.pos<c){")("var t=r.uint32()");e.group&&r("if((t&7)===4)")("break"),r("switch(t>>>3){");for(var s=0;s<e.fieldsArray.length;++s){var t=e._fieldsArray[s].resolve(),i=t.resolvedType instanceof Enum?"uint32":t.type,o="m"+util.safeProp(t.name);r("case %d:",t.id),t.map?(r("r.skip().pos++")("if(%s===util.emptyObject)",o)("%s={}",o)("k=r.%s()",t.keyType)("r.pos++"),void 0!==types.long[t.keyType]?void 0===types.basic[i]?r('%s[typeof k==="object"?util.longToHash(k):k]=types[%d].decode(r,r.uint32())',o,s):r('%s[typeof k==="object"?util.longToHash(k):k]=r.%s()',o,i):void 0===types.basic[i]?r("%s[k]=types[%d].decode(r,r.uint32())",o,s):r("%s[k]=r.%s()",o,i)):t.repeated?(r("if(!(%s&&%s.length))",o,o)("%s=[]",o),void 0!==types.packed[i]&&r("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())",o,i)("}else"),void 0===types.basic[i]?r(t.resolvedType.group?"%s.push(types[%d].decode(r))":"%s.push(types[%d].decode(r,r.uint32()))",o,s):r("%s.push(r.%s())",o,i)):void 0===types.basic[i]?r(t.resolvedType.group?"%s=types[%d].decode(r)":"%s=types[%d].decode(r,r.uint32())",o,s):r("%s=r.%s()",o,i),r("break")}for(r("default:")("r.skipType(t&7)")("break")("}")("}"),s=0;s<e._fieldsArray.length;++s){var d=e._fieldsArray[s];d.required&&r("if(!m.hasOwnProperty(%j))",d.name)("throw util.ProtocolError(%j,{instance:m})",missing(d))}return r("return m")}module.exports=decoder;var Enum=require("./enum"),types=require("./types"),util=require("./util");