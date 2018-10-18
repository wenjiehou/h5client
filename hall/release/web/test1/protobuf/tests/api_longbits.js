var tape=require("tape"),protobuf=require(".."),LongBits=protobuf.util.LongBits,Long=protobuf.util.Long;tape.test("longbits",function(n){n.test(n.name+" - zero",function(n){var o=LongBits.zero;n.equal(o.lo,0,"should have low bits of 0"),n.equal(o.hi,0,"should have high bits of 0"),n.equal(o.toNumber(),0,"should convert to number 0 (signed)"),n.equal(o.toNumber(!0),0,"should convert to number 0 (unsigned)"),n.equal(o.zzEncode(),o,"should return itself when zig-zag encoded"),n.equal(o.length(),1,"should return a byte length of 1"),n.equal(LongBits.fromNumber(0),o,"should be returned by fromNumber(0)"),n.equal(LongBits.from(0),o,"should be returned by from(0)"),n.equal(LongBits.from(Long.ZERO),o,"should be returned by from(Long.ZERO)"),n.same(o.toLong(),Long.ZERO,"should equal Long.ZERO (signed)"),n.same(o.toLong(!0),Long.UZERO,"should equal Long.UZERO (unsigned)"),n.equal(o.toHash(),"\0\0\0\0\0\0\0\0","should convert to a binary hash of 8x0"),n.equal(protobuf.util.longToHash(0),"\0\0\0\0\0\0\0\0","should convert to a binary hash of 8x0 (number 0 through util.longToHash)"),n.equal(LongBits.fromHash("\0\0\0\0\0\0\0\0"),o,"should be returned for a binary hash of 8x0"),protobuf.util.Long=null,n.equal(protobuf.util.longFromHash("\0\0\0\0\0\0\0\0"),0,"should be returned for a binary hash of 8x0 (number 0 through util.longFromHash)"),protobuf.util.Long=Long,n.end()}),[{low:0,high:0,unsigned:!1,length:1},{low:0,high:0,unsigned:!0,length:1},{low:127,high:0,unsigned:!1,length:1},{low:127,high:0,unsigned:!0,length:1},{low:16383,high:0,unsigned:!1,length:2},{low:16383,high:0,unsigned:!0,length:2},{low:2097151,high:0,unsigned:!1,length:3},{low:2097151,high:0,unsigned:!0,length:3},{low:268435455,high:0,unsigned:!1,length:4},{low:268435455,high:0,unsigned:!0,length:4},{low:-1,high:7,unsigned:!1,length:5},{low:-1,high:7,unsigned:!0,length:5},{low:-1,high:1023,unsigned:!1,length:6},{low:-1,high:1023,unsigned:!0,length:6},{low:-1,high:131071,unsigned:!1,length:7},{low:-1,high:131071,unsigned:!0,length:7},{low:-1,high:16777215,unsigned:!1,length:8},{low:-1,high:16777215,unsigned:!0,length:8},{low:-1,high:2147483647,unsigned:!1,length:9},{low:-1,high:2147483647,unsigned:!0,length:9},{low:-1,high:-1,unsigned:!1,length:10},{low:-1,high:-1,unsigned:!0,length:10},{low:0,high:1<<31,unsigned:!1,length:10},{low:0,high:1<<31,unsigned:!0,length:10},{low:0,high:-1,unsigned:!1,length:10}].forEach(function(o){var e=Long.fromValue(o);n.equal(e.unsigned,o.unsigned,e+" should be signed/unsigned");var h=LongBits.from(o);n.equal(h.lo,e.low>>>0,e+" should have equal low bits"),n.equal(h.hi,e.high>>>0,e+" should have equal high bits"),n.equal(h.length(),o.length,e+" should return an equal length"),n.equal(h.toNumber(o.unsigned),e.toNumber(),e+" should convert to an equal number");var l=e.toNumber(o.unsigned);l<=9007199254740991&&l>=-9007199254740991&&n.same(LongBits.fromNumber(l),h,e+" should convert hence and forth equally (where safe)"),n.same(h.toLong(o.unsigned),e,e+" should convert to an equal Long");var u=String.fromCharCode.apply(String,e.toBytesLE());n.equal(h.toHash(),u,e+" should convert to an equal hash"),n.equal(protobuf.util.longToHash(e),u,e+" should convert to an equal hash through util.longToHash"),n.same(LongBits.fromHash(u),h,e+" should convert back to an equal value"),n.same(protobuf.util.longFromHash(u,e.unsigned),e,e+" should convert back to an equal value through util.longFromHash")});var o=LongBits.fromNumber(-0x10000000000000000);n.same(o,{lo:0,hi:0},"lo and hi should properly overflow when converting -18446744073709552000"),n.end()});