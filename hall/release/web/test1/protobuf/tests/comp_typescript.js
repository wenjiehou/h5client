"use strict";var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function s(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(s.prototype=o.prototype,new s)}}(),__decorate=this&&this.__decorate||function(e,t,o,s){var a,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,s);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};exports.__esModule=!0;var __1=require(".."),root=__1.Root.fromJSON({nested:{Hello:{fields:{value:{rule:"required",type:"string",id:1}}}}}),HelloReflected=root.lookupType("Hello");HelloReflected.create({value:"hi"});var Hello=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.foo=function(){return this.value="hi",this},t}(__1.Message);exports.Hello=Hello,root.lookupType("Hello").ctor=Hello,Hello.create({value:"hi"});var helloMessage=new Hello({value:"hi"}),helloBuffer=Hello.encode(helloMessage.foo()).finish(),helloDecoded=Hello.decode(helloBuffer);require("reflect-metadata");var AwesomeSubMessage=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t}(__1.Message);__decorate([__1.Field.d(1,"string"),__metadata("design:type",String)],AwesomeSubMessage.prototype,"awesomeString"),exports.AwesomeSubMessage=AwesomeSubMessage;var AwesomeEnum;!function(e){e[e.ONE=1]="ONE",e[e.TWO=2]="TWO"}(AwesomeEnum=exports.AwesomeEnum||(exports.AwesomeEnum={}));var AwesomeMessage=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t}(__1.Message);__decorate([__1.Field.d(1,"string","optional","awesome default string"),__metadata("design:type",String)],AwesomeMessage.prototype,"awesomeField"),__decorate([__1.Field.d(2,AwesomeSubMessage),__metadata("design:type",AwesomeSubMessage)],AwesomeMessage.prototype,"awesomeSubMessage"),__decorate([__1.Field.d(3,AwesomeEnum,"optional",AwesomeEnum.ONE),__metadata("design:type",Number)],AwesomeMessage.prototype,"awesomeEnum"),__decorate([__1.OneOf.d("awesomeSubMessage","awesomeEnum"),__metadata("design:type",String)],AwesomeMessage.prototype,"which"),AwesomeMessage=__decorate([__1.Type.d("SuperAwesomeMessage")],AwesomeMessage),exports.AwesomeMessage=AwesomeMessage;var awesomeMessage=new AwesomeMessage({awesomeField:"hi"}),awesomeBuffer=AwesomeMessage.encode(awesomeMessage).finish(),awesomeDecoded=AwesomeMessage.decode(awesomeBuffer);