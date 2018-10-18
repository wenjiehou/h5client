"use strict";var $protobuf=require("../../minimal"),$Reader=$protobuf.Reader,$Writer=$protobuf.Writer,$util=$protobuf.util,$root=$protobuf.roots.test_comments||($protobuf.roots.test_comments={});$root.Test1=function(){function e(e){if(e)for(var t=Object.keys(e),o=0;o<t.length;++o)null!=e[t[o]]&&(this[t[o]]=e[t[o]])}return e.prototype.field1="",e.prototype.field2=0,e.prototype.field3=!1,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=$Writer.create()),null!=e.field1&&e.hasOwnProperty("field1")&&t.uint32(10).string(e.field1),null!=e.field2&&e.hasOwnProperty("field2")&&t.uint32(16).uint32(e.field2),null!=e.field3&&e.hasOwnProperty("field3")&&t.uint32(24).bool(e.field3),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof $Reader||(e=$Reader.create(e));for(var o=void 0===t?e.len:e.pos+t,r=new $root.Test1;e.pos<o;){var n=e.uint32();switch(n>>>3){case 1:r.field1=e.string();break;case 2:r.field2=e.uint32();break;case 3:r.field3=e.bool();break;default:e.skipType(7&n)}}return r},e.decodeDelimited=function(e){return e instanceof $Reader||(e=$Reader(e)),this.decode(e,e.uint32())},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.field1&&e.hasOwnProperty("field1")&&!$util.isString(e.field1)?"field1: string expected":null!=e.field2&&e.hasOwnProperty("field2")&&!$util.isInteger(e.field2)?"field2: integer expected":null!=e.field3&&e.hasOwnProperty("field3")&&"boolean"!=typeof e.field3?"field3: boolean expected":null},e.fromObject=function(e){if(e instanceof $root.Test1)return e;var t=new $root.Test1;return null!=e.field1&&(t.field1=String(e.field1)),null!=e.field2&&(t.field2=e.field2>>>0),null!=e.field3&&(t.field3=Boolean(e.field3)),t},e.toObject=function(e,t){t||(t={});var o={};return t.defaults&&(o.field1="",o.field2=0,o.field3=!1),null!=e.field1&&e.hasOwnProperty("field1")&&(o.field1=e.field1),null!=e.field2&&e.hasOwnProperty("field2")&&(o.field2=e.field2),null!=e.field3&&e.hasOwnProperty("field3")&&(o.field3=e.field3),o},e.prototype.toObject=function(e){return this.constructor.toObject(this,e)},e.prototype.toJSON=function(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions)},e}(),$root.Test2=function(){function e(e){if(e)for(var t=Object.keys(e),o=0;o<t.length;++o)null!=e[t[o]]&&(this[t[o]]=e[t[o]])}return e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=$Writer.create()),t},e.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},e.decode=function(e,t){e instanceof $Reader||(e=$Reader.create(e));for(var o=void 0===t?e.len:e.pos+t,r=new $root.Test2;e.pos<o;){var n=e.uint32();e.skipType(7&n)}return r},e.decodeDelimited=function(e){return e instanceof $Reader||(e=$Reader(e)),this.decode(e,e.uint32())},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null},e.fromObject=function(e){return e instanceof $root.Test2?e:new $root.Test2},e.toObject=function(){return{}},e.prototype.toObject=function(e){return this.constructor.toObject(this,e)},e.prototype.toJSON=function(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions)},e}(),$root.Test3=function(){var e={},t=Object.create(e);return t[e[1]="ONE"]=1,t[e[2]="TWO"]=2,t[e[3]="THREE"]=3,t}(),module.exports=$root;