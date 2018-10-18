"use strict";var $protobuf=require("../../minimal"),$Reader=$protobuf.Reader,$Writer=$protobuf.Writer,$util=$protobuf.util,$root=$protobuf.roots.test_package||($protobuf.roots.test_package={});$root.Package=function(){function e(e){if(this.keywords=[],this.bin={},this.scripts={},this.dependencies={},this.devDependencies={},this.cliDependencies=[],e)for(var n=Object.keys(e),t=0;t<n.length;++t)null!=e[n[t]]&&(this[n[t]]=e[n[t]])}return e.prototype.name="",e.prototype.version="",e.prototype.versionScheme="",e.prototype.description="",e.prototype.author="",e.prototype.license="",e.prototype.repository=null,e.prototype.bugs="",e.prototype.homepage="",e.prototype.keywords=$util.emptyArray,e.prototype.main="",e.prototype.bin=$util.emptyObject,e.prototype.scripts=$util.emptyObject,e.prototype.dependencies=$util.emptyObject,e.prototype.devDependencies=$util.emptyObject,e.prototype.types="",e.prototype.cliDependencies=$util.emptyArray,e.create=function(n){return new e(n)},e.encode=function(e,n){if(n||(n=$Writer.create()),null!=e.name&&e.hasOwnProperty("name")&&n.uint32(10).string(e.name),null!=e.version&&e.hasOwnProperty("version")&&n.uint32(18).string(e.version),null!=e.description&&e.hasOwnProperty("description")&&n.uint32(26).string(e.description),null!=e.author&&e.hasOwnProperty("author")&&n.uint32(34).string(e.author),null!=e.license&&e.hasOwnProperty("license")&&n.uint32(42).string(e.license),null!=e.repository&&e.hasOwnProperty("repository")&&$root.Package.Repository.encode(e.repository,n.uint32(50).fork()).ldelim(),null!=e.bugs&&e.hasOwnProperty("bugs")&&n.uint32(58).string(e.bugs),null!=e.homepage&&e.hasOwnProperty("homepage")&&n.uint32(66).string(e.homepage),null!=e.keywords&&e.keywords.length)for(r=0;r<e.keywords.length;++r)n.uint32(74).string(e.keywords[r]);if(null!=e.main&&e.hasOwnProperty("main")&&n.uint32(82).string(e.main),null!=e.bin&&e.hasOwnProperty("bin"))for(var t=Object.keys(e.bin),r=0;r<t.length;++r)n.uint32(90).fork().uint32(10).string(t[r]).uint32(18).string(e.bin[t[r]]).ldelim();if(null!=e.scripts&&e.hasOwnProperty("scripts"))for(var t=Object.keys(e.scripts),r=0;r<t.length;++r)n.uint32(98).fork().uint32(10).string(t[r]).uint32(18).string(e.scripts[t[r]]).ldelim();if(null!=e.dependencies&&e.hasOwnProperty("dependencies"))for(var t=Object.keys(e.dependencies),r=0;r<t.length;++r)n.uint32(106).fork().uint32(10).string(t[r]).uint32(18).string(e.dependencies[t[r]]).ldelim();if(null!=e.devDependencies&&e.hasOwnProperty("devDependencies"))for(var t=Object.keys(e.devDependencies),r=0;r<t.length;++r)n.uint32(122).fork().uint32(10).string(t[r]).uint32(18).string(e.devDependencies[t[r]]).ldelim();if(null!=e.types&&e.hasOwnProperty("types")&&n.uint32(138).string(e.types),null!=e.cliDependencies&&e.cliDependencies.length)for(r=0;r<e.cliDependencies.length;++r)n.uint32(146).string(e.cliDependencies[r]);return null!=e.versionScheme&&e.hasOwnProperty("versionScheme")&&n.uint32(154).string(e.versionScheme),n},e.encodeDelimited=function(e,n){return this.encode(e,n).ldelim()},e.decode=function(e,n){e instanceof $Reader||(e=$Reader.create(e));for(var t,r=void 0===n?e.len:e.pos+n,i=new $root.Package;e.pos<r;){var s=e.uint32();switch(s>>>3){case 1:i.name=e.string();break;case 2:i.version=e.string();break;case 19:i.versionScheme=e.string();break;case 3:i.description=e.string();break;case 4:i.author=e.string();break;case 5:i.license=e.string();break;case 6:i.repository=$root.Package.Repository.decode(e,e.uint32());break;case 7:i.bugs=e.string();break;case 8:i.homepage=e.string();break;case 9:i.keywords&&i.keywords.length||(i.keywords=[]),i.keywords.push(e.string());break;case 10:i.main=e.string();break;case 11:e.skip().pos++,i.bin===$util.emptyObject&&(i.bin={}),t=e.string(),e.pos++,i.bin[t]=e.string();break;case 12:e.skip().pos++,i.scripts===$util.emptyObject&&(i.scripts={}),t=e.string(),e.pos++,i.scripts[t]=e.string();break;case 13:e.skip().pos++,i.dependencies===$util.emptyObject&&(i.dependencies={}),t=e.string(),e.pos++,i.dependencies[t]=e.string();break;case 15:e.skip().pos++,i.devDependencies===$util.emptyObject&&(i.devDependencies={}),t=e.string(),e.pos++,i.devDependencies[t]=e.string();break;case 17:i.types=e.string();break;case 18:i.cliDependencies&&i.cliDependencies.length||(i.cliDependencies=[]),i.cliDependencies.push(e.string());break;default:e.skipType(7&s)}}return i},e.decodeDelimited=function(e){return e instanceof $Reader||(e=$Reader(e)),this.decode(e,e.uint32())},e.verify=function(e){if("object"!=typeof e||null===e)return"object expected";if(null!=e.name&&e.hasOwnProperty("name")&&!$util.isString(e.name))return"name: string expected";if(null!=e.version&&e.hasOwnProperty("version")&&!$util.isString(e.version))return"version: string expected";if(null!=e.versionScheme&&e.hasOwnProperty("versionScheme")&&!$util.isString(e.versionScheme))return"versionScheme: string expected";if(null!=e.description&&e.hasOwnProperty("description")&&!$util.isString(e.description))return"description: string expected";if(null!=e.author&&e.hasOwnProperty("author")&&!$util.isString(e.author))return"author: string expected";if(null!=e.license&&e.hasOwnProperty("license")&&!$util.isString(e.license))return"license: string expected";if(null!=e.repository&&e.hasOwnProperty("repository")){var n=$root.Package.Repository.verify(e.repository);if(n)return"repository."+n}if(null!=e.bugs&&e.hasOwnProperty("bugs")&&!$util.isString(e.bugs))return"bugs: string expected";if(null!=e.homepage&&e.hasOwnProperty("homepage")&&!$util.isString(e.homepage))return"homepage: string expected";if(null!=e.keywords&&e.hasOwnProperty("keywords")){if(!Array.isArray(e.keywords))return"keywords: array expected";for(r=0;r<e.keywords.length;++r)if(!$util.isString(e.keywords[r]))return"keywords: string[] expected"}if(null!=e.main&&e.hasOwnProperty("main")&&!$util.isString(e.main))return"main: string expected";if(null!=e.bin&&e.hasOwnProperty("bin")){if(!$util.isObject(e.bin))return"bin: object expected";for(var t=Object.keys(e.bin),r=0;r<t.length;++r)if(!$util.isString(e.bin[t[r]]))return"bin: string{k:string} expected"}if(null!=e.scripts&&e.hasOwnProperty("scripts")){if(!$util.isObject(e.scripts))return"scripts: object expected";for(var t=Object.keys(e.scripts),r=0;r<t.length;++r)if(!$util.isString(e.scripts[t[r]]))return"scripts: string{k:string} expected"}if(null!=e.dependencies&&e.hasOwnProperty("dependencies")){if(!$util.isObject(e.dependencies))return"dependencies: object expected";for(var t=Object.keys(e.dependencies),r=0;r<t.length;++r)if(!$util.isString(e.dependencies[t[r]]))return"dependencies: string{k:string} expected"}if(null!=e.devDependencies&&e.hasOwnProperty("devDependencies")){if(!$util.isObject(e.devDependencies))return"devDependencies: object expected";for(var t=Object.keys(e.devDependencies),r=0;r<t.length;++r)if(!$util.isString(e.devDependencies[t[r]]))return"devDependencies: string{k:string} expected"}if(null!=e.types&&e.hasOwnProperty("types")&&!$util.isString(e.types))return"types: string expected";if(null!=e.cliDependencies&&e.hasOwnProperty("cliDependencies")){if(!Array.isArray(e.cliDependencies))return"cliDependencies: array expected";for(r=0;r<e.cliDependencies.length;++r)if(!$util.isString(e.cliDependencies[r]))return"cliDependencies: string[] expected"}return null},e.fromObject=function(e){if(e instanceof $root.Package)return e;var n=new $root.Package;if(null!=e.name&&(n.name=String(e.name)),null!=e.version&&(n.version=String(e.version)),null!=e.versionScheme&&(n.versionScheme=String(e.versionScheme)),null!=e.description&&(n.description=String(e.description)),null!=e.author&&(n.author=String(e.author)),null!=e.license&&(n.license=String(e.license)),null!=e.repository){if("object"!=typeof e.repository)throw TypeError(".Package.repository: object expected");n.repository=$root.Package.Repository.fromObject(e.repository)}if(null!=e.bugs&&(n.bugs=String(e.bugs)),null!=e.homepage&&(n.homepage=String(e.homepage)),e.keywords){if(!Array.isArray(e.keywords))throw TypeError(".Package.keywords: array expected");n.keywords=[];for(r=0;r<e.keywords.length;++r)n.keywords[r]=String(e.keywords[r])}if(null!=e.main&&(n.main=String(e.main)),e.bin){if("object"!=typeof e.bin)throw TypeError(".Package.bin: object expected");n.bin={};for(var t=Object.keys(e.bin),r=0;r<t.length;++r)n.bin[t[r]]=String(e.bin[t[r]])}if(e.scripts){if("object"!=typeof e.scripts)throw TypeError(".Package.scripts: object expected");n.scripts={};for(var t=Object.keys(e.scripts),r=0;r<t.length;++r)n.scripts[t[r]]=String(e.scripts[t[r]])}if(e.dependencies){if("object"!=typeof e.dependencies)throw TypeError(".Package.dependencies: object expected");n.dependencies={};for(var t=Object.keys(e.dependencies),r=0;r<t.length;++r)n.dependencies[t[r]]=String(e.dependencies[t[r]])}if(e.devDependencies){if("object"!=typeof e.devDependencies)throw TypeError(".Package.devDependencies: object expected");n.devDependencies={};for(var t=Object.keys(e.devDependencies),r=0;r<t.length;++r)n.devDependencies[t[r]]=String(e.devDependencies[t[r]])}if(null!=e.types&&(n.types=String(e.types)),e.cliDependencies){if(!Array.isArray(e.cliDependencies))throw TypeError(".Package.cliDependencies: array expected");n.cliDependencies=[];for(r=0;r<e.cliDependencies.length;++r)n.cliDependencies[r]=String(e.cliDependencies[r])}return n},e.toObject=function(e,n){n||(n={});var t={};if((n.arrays||n.defaults)&&(t.keywords=[],t.cliDependencies=[]),(n.objects||n.defaults)&&(t.bin={},t.scripts={},t.dependencies={},t.devDependencies={}),n.defaults&&(t.name="",t.version="",t.description="",t.author="",t.license="",t.repository=null,t.bugs="",t.homepage="",t.main="",t.types="",t.versionScheme=""),null!=e.name&&e.hasOwnProperty("name")&&(t.name=e.name),null!=e.version&&e.hasOwnProperty("version")&&(t.version=e.version),null!=e.description&&e.hasOwnProperty("description")&&(t.description=e.description),null!=e.author&&e.hasOwnProperty("author")&&(t.author=e.author),null!=e.license&&e.hasOwnProperty("license")&&(t.license=e.license),null!=e.repository&&e.hasOwnProperty("repository")&&(t.repository=$root.Package.Repository.toObject(e.repository,n)),null!=e.bugs&&e.hasOwnProperty("bugs")&&(t.bugs=e.bugs),null!=e.homepage&&e.hasOwnProperty("homepage")&&(t.homepage=e.homepage),e.keywords&&e.keywords.length){t.keywords=[];for(i=0;i<e.keywords.length;++i)t.keywords[i]=e.keywords[i]}null!=e.main&&e.hasOwnProperty("main")&&(t.main=e.main);var r;if(e.bin&&(r=Object.keys(e.bin)).length){t.bin={};for(i=0;i<r.length;++i)t.bin[r[i]]=e.bin[r[i]]}if(e.scripts&&(r=Object.keys(e.scripts)).length){t.scripts={};for(i=0;i<r.length;++i)t.scripts[r[i]]=e.scripts[r[i]]}if(e.dependencies&&(r=Object.keys(e.dependencies)).length){t.dependencies={};for(i=0;i<r.length;++i)t.dependencies[r[i]]=e.dependencies[r[i]]}if(e.devDependencies&&(r=Object.keys(e.devDependencies)).length){t.devDependencies={};for(i=0;i<r.length;++i)t.devDependencies[r[i]]=e.devDependencies[r[i]]}if(null!=e.types&&e.hasOwnProperty("types")&&(t.types=e.types),e.cliDependencies&&e.cliDependencies.length){t.cliDependencies=[];for(var i=0;i<e.cliDependencies.length;++i)t.cliDependencies[i]=e.cliDependencies[i]}return null!=e.versionScheme&&e.hasOwnProperty("versionScheme")&&(t.versionScheme=e.versionScheme),t},e.prototype.toObject=function(e){return this.constructor.toObject(this,e)},e.prototype.toJSON=function(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions)},e.Repository=function(){function e(e){if(e)for(var n=Object.keys(e),t=0;t<n.length;++t)null!=e[n[t]]&&(this[n[t]]=e[n[t]])}return e.prototype.type="",e.prototype.url="",e.create=function(n){return new e(n)},e.encode=function(e,n){return n||(n=$Writer.create()),null!=e.type&&e.hasOwnProperty("type")&&n.uint32(10).string(e.type),null!=e.url&&e.hasOwnProperty("url")&&n.uint32(18).string(e.url),n},e.encodeDelimited=function(e,n){return this.encode(e,n).ldelim()},e.decode=function(e,n){e instanceof $Reader||(e=$Reader.create(e));for(var t=void 0===n?e.len:e.pos+n,r=new $root.Package.Repository;e.pos<t;){var i=e.uint32();switch(i>>>3){case 1:r.type=e.string();break;case 2:r.url=e.string();break;default:e.skipType(7&i)}}return r},e.decodeDelimited=function(e){return e instanceof $Reader||(e=$Reader(e)),this.decode(e,e.uint32())},e.verify=function(e){return"object"!=typeof e||null===e?"object expected":null!=e.type&&e.hasOwnProperty("type")&&!$util.isString(e.type)?"type: string expected":null!=e.url&&e.hasOwnProperty("url")&&!$util.isString(e.url)?"url: string expected":null},e.fromObject=function(e){if(e instanceof $root.Package.Repository)return e;var n=new $root.Package.Repository;return null!=e.type&&(n.type=String(e.type)),null!=e.url&&(n.url=String(e.url)),n},e.toObject=function(e,n){n||(n={});var t={};return n.defaults&&(t.type="",t.url=""),null!=e.type&&e.hasOwnProperty("type")&&(t.type=e.type),null!=e.url&&e.hasOwnProperty("url")&&(t.url=e.url),t},e.prototype.toObject=function(e){return this.constructor.toObject(this,e)},e.prototype.toJSON=function(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions)},e}(),e}(),module.exports=$root;