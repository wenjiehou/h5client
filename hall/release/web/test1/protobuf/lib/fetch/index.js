"use strict";function fetch(e,r,t){return"function"==typeof r?(t=r,r={}):r||(r={}),t?!r.xhr&&fs&&fs.readFile?fs.readFile(e,function(n,s){return n&&"undefined"!=typeof XMLHttpRequest?fetch.xhr(e,r,t):n?t(n):t(null,r.binary?s:s.toString("utf8"))}):fetch.xhr(e,r,t):asPromise(fetch,this,e,r)}module.exports=fetch;var asPromise=require("@protobufjs/aspromise"),inquire=require("@protobufjs/inquire"),fs=inquire("fs");fetch.xhr=function(e,r,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===n.readyState){if(0!==n.status&&200!==n.status)return t(Error("status "+n.status));if(r.binary){var e=n.response;if(!e){e=[];for(var s=0;s<n.responseText.length;++s)e.push(255&n.responseText.charCodeAt(s))}return t(null,"undefined"!=typeof Uint8Array?new Uint8Array(e):e)}return t(null,n.responseText)}},r.binary&&("overrideMimeType"in n&&n.overrideMimeType("text/plain; charset=x-user-defined"),n.responseType="arraybuffer"),n.open("GET",e),n.send()};