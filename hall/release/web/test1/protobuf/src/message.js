"use strict";function Message(e){if(e)for(var t=Object.keys(e),s=0;s<t.length;++s)this[t[s]]=e[t[s]]}module.exports=Message;var util=require("./util");Message.create=function(e){return this.$type.create(e)},Message.encode=function(e,t){return this.$type.encode(e,t)},Message.encodeDelimited=function(e,t){return this.$type.encodeDelimited(e,t)},Message.decode=function(e){return this.$type.decode(e)},Message.decodeDelimited=function(e){return this.$type.decodeDelimited(e)},Message.verify=function(e){return this.$type.verify(e)},Message.fromObject=function(e){return this.$type.fromObject(e)},Message.toObject=function(e,t){return this.$type.toObject(e,t)},Message.prototype.toObject=function(e){return this.$type.toObject(this,e)},Message.prototype.toJSON=function(){return this.$type.toObject(this,util.toJSONOptions)};