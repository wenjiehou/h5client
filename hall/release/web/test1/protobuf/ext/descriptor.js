"use strict";var protobuf=require(".."),descriptor=module.exports=protobuf.Root.fromJSON(require("../google/protobuf/descriptor.json")).lookup(".google.protobuf"),Root=protobuf.Root,Type=protobuf.Type,Field=protobuf.Field,FileDescriptorSet=descriptor.FileDescriptorSet,DescriptorProto=descriptor.DescriptorProto,FieldDescriptorProto=descriptor.FieldDescriptorProto;protobuf.Root.fromDescriptor=function(o){throw Error("not implemented")},protobuf.Root.prototype.toDescriptor=function(){throw Error("not implemented")},protobuf.Type.fromDescriptor=function(o){"number"==typeof o.length&&(o=DescriptorProto.decode(reader));var r=new protobuf.Type(o.name);return o.field.map(protobuf.Field.fromDescriptor).forEach(protobuf.Type.prototype.add.bind(r)),r},protobuf.Type.prototype.toDescriptor=function(){throw Error("not implemented")},protobuf.Field.fromDescriptor=function(o){throw Error("not implemented")},protobuf.Field.prototype.toDescriptor=function(){throw Error("not implemented")};