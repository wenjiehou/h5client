"use strict";function static_module_target(t,e,i){require("./static")(t,e,function(t,r){if(t)i(t);else{try{r=util.wrap(r,protobuf.util.merge({dependency:"protobufjs/minimal"},e))}catch(t){return void i(t)}i(null,r)}})}module.exports=static_module_target;var util=require("../util"),protobuf=require("../..");static_module_target.description="Static code without reflection as a module";