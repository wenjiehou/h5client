"use strict";function invalid(e,i){return e.name+": "+i+(e.repeated&&"array"!==i?"[]":e.map&&"object"!==i?"{k:"+e.keyType+"}":"")+" expected"}function genVerifyValue(e,i,r,t){if(i.resolvedType)if(i.resolvedType instanceof Enum){e("switch(%s){",t)("default:")("return%j",invalid(i,"enum value"));for(var n=Object.keys(i.resolvedType.values),a=0;a<n.length;++a)e("case %d:",i.resolvedType.values[n[a]]);e("break")("}")}else e("var e=types[%d].verify(%s);",r,t)("if(e)")("return%j+e",i.name+".");else switch(i.type){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":e("if(!util.isInteger(%s))",t)("return%j",invalid(i,"integer"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))",t,t,t,t)("return%j",invalid(i,"integer|Long"));break;case"float":case"double":e('if(typeof %s!=="number")',t)("return%j",invalid(i,"number"));break;case"bool":e('if(typeof %s!=="boolean")',t)("return%j",invalid(i,"boolean"));break;case"string":e("if(!util.isString(%s))",t)("return%j",invalid(i,"string"));break;case"bytes":e('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))',t,t,t)("return%j",invalid(i,"buffer"))}return e}function genVerifyKey(e,i,r){switch(i.keyType){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":e("if(!util.key32Re.test(%s))",r)("return%j",invalid(i,"integer key"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":e("if(!util.key64Re.test(%s))",r)("return%j",invalid(i,"integer|Long key"));break;case"bool":e("if(!util.key2Re.test(%s))",r)("return%j",invalid(i,"boolean key"))}return e}function verifier(e){var i=util.codegen("m")('if(typeof m!=="object"||m===null)')("return%j","object expected"),r={};e.oneofsArray.length&&i("var p={}");for(var t=0;t<e.fieldsArray.length;++t){var n=e._fieldsArray[t].resolve(),a="m"+util.safeProp(n.name);if(n.optional&&i("if(%s!=null&&m.hasOwnProperty(%j)){",a,n.name),n.map)i("if(!util.isObject(%s))",a)("return%j",invalid(n,"object"))("var k=Object.keys(%s)",a)("for(var i=0;i<k.length;++i){"),genVerifyKey(i,n,"k[i]"),genVerifyValue(i,n,t,a+"[k[i]]")("}");else if(n.repeated)i("if(!Array.isArray(%s))",a)("return%j",invalid(n,"array"))("for(var i=0;i<%s.length;++i){",a),genVerifyValue(i,n,t,a+"[i]")("}");else{if(n.partOf){var s=util.safeProp(n.partOf.name);1===r[n.partOf.name]&&i("if(p%s===1)",s)("return%j",n.partOf.name+": multiple values"),r[n.partOf.name]=1,i("p%s=1",s)}genVerifyValue(i,n,t,a)}n.optional&&i("}")}return i("return null")}module.exports=verifier;var Enum=require("./enum"),util=require("./util");