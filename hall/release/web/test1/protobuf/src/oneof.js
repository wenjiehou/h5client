"use strict";function OneOf(e,t,r){if(Array.isArray(t)||(r=t,t=void 0),ReflectionObject.call(this,e,r),void 0!==t&&!Array.isArray(t))throw TypeError("fieldNames must be an Array");this.oneof=t||[],this.fieldsArray=[]}function addFieldsToParent(e){if(e.parent)for(var t=0;t<e.fieldsArray.length;++t)e.fieldsArray[t].parent||e.parent.add(e.fieldsArray[t])}module.exports=OneOf;var ReflectionObject=require("./object");((OneOf.prototype=Object.create(ReflectionObject.prototype)).constructor=OneOf).className="OneOf";var Field=require("./field"),util=require("./util");OneOf.fromJSON=function(e,t){return new OneOf(e,t.oneof,t.options)},OneOf.prototype.toJSON=function(){return{oneof:this.oneof,options:this.options}},OneOf.prototype.add=function(e){if(!(e instanceof Field))throw TypeError("field must be a Field");return e.parent&&e.parent!==this.parent&&e.parent.remove(e),this.oneof.push(e.name),this.fieldsArray.push(e),e.partOf=this,addFieldsToParent(this),this},OneOf.prototype.remove=function(e){if(!(e instanceof Field))throw TypeError("field must be a Field");var t=this.fieldsArray.indexOf(e);if(t<0)throw Error(e+" is not a member of "+this);return this.fieldsArray.splice(t,1),(t=this.oneof.indexOf(e.name))>-1&&this.oneof.splice(t,1),e.partOf=null,this},OneOf.prototype.onAdd=function(e){ReflectionObject.prototype.onAdd.call(this,e);for(var t=0;t<this.oneof.length;++t){var r=e.get(this.oneof[t]);r&&!r.partOf&&(r.partOf=this,this.fieldsArray.push(r))}addFieldsToParent(this)},OneOf.prototype.onRemove=function(e){for(var t,r=0;r<this.fieldsArray.length;++r)(t=this.fieldsArray[r]).parent&&t.parent.remove(t);ReflectionObject.prototype.onRemove.call(this,e)},OneOf.d=function(){for(var e=[],t=0;t<arguments.length;++t)e.push(arguments[t]);return function(t,r){util.decorateType(t.constructor).add(new OneOf(r,e)),Object.defineProperty(t,r,{get:util.oneOfGetter(e),set:util.oneOfSetter(e)})}};