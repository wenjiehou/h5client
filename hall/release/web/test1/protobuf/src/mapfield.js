"use strict";function MapField(e,t,i,p,r){if(Field.call(this,e,t,p,r),!util.isString(i))throw TypeError("keyType must be a string");this.keyType=i,this.resolvedKeyType=null,this.map=!0}module.exports=MapField;var Field=require("./field");((MapField.prototype=Object.create(Field.prototype)).constructor=MapField).className="MapField";var types=require("./types"),util=require("./util");MapField.fromJSON=function(e,t){return new MapField(e,t.id,t.keyType,t.type,t.options)},MapField.prototype.toJSON=function(){return{keyType:this.keyType,type:this.type,id:this.id,extend:this.extend,options:this.options}},MapField.prototype.resolve=function(){if(this.resolved)return this;if(void 0===types.mapKey[this.keyType])throw Error("invalid key type: "+this.keyType);return Field.prototype.resolve.call(this)},MapField.d=function(e,t,i){return"function"==typeof i?i=util.decorateType(i).name:i&&"object"==typeof fieldType&&(i=util.decorateEnum(i).name),function(p,r){util.decorateType(p.constructor).add(new MapField(r,e,t,i))}};