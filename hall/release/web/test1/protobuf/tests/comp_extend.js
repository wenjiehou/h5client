var tape=require("tape"),protobuf=require(".."),proto='syntax = "proto3";message A {    message B {        message One {            extensions 1000 to max;            reserved 900 to 999, 899, "a", \'b\';        }    }    message C {        message Two {            extend B.One {                C.Two two = 1000;            }        }    }}';tape.test("extensions",function(e){protobuf.parse(proto).root.resolveAll(),e.pass("should parse and resolve without errors"),e.end()});