"use strict";function Service(e,t,r){if("function"!=typeof e)throw TypeError("rpcImpl must be a function");util.EventEmitter.call(this),this.rpcImpl=e,this.requestDelimited=Boolean(t),this.responseDelimited=Boolean(r)}module.exports=Service;var util=require("../util/minimal");(Service.prototype=Object.create(util.EventEmitter.prototype)).constructor=Service,Service.prototype.rpcCall=function e(t,r,i,n,o){if(!n)throw TypeError("request must be specified");var l=this;if(!o)return util.asPromise(e,l,t,r,i,n);if(l.rpcImpl)try{return l.rpcImpl(t,r[l.requestDelimited?"encodeDelimited":"encode"](n).finish(),function(e,r){if(e)return l.emit("error",e,t),o(e);{if(null!==r){if(!(r instanceof i))try{r=i[l.responseDelimited?"decodeDelimited":"decode"](r)}catch(e){return l.emit("error",e,t),o(e)}return l.emit("data",r,t),o(null,r)}l.end(!0)}})}catch(e){return l.emit("error",e,t),void setTimeout(function(){o(e)},0)}else setTimeout(function(){o(Error("already ended"))},0)},Service.prototype.end=function(e){return this.rpcImpl&&(e||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this};