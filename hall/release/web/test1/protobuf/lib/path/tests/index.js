var tape=require("tape"),path=require("..");tape.test("path",function(e){e.ok(path.isAbsolute("X:\\some\\path\\file.js"),"should identify absolute windows paths"),e.ok(path.isAbsolute("/some/path/file.js"),"should identify absolute unix paths"),e.notOk(path.isAbsolute("some\\path\\file.js"),"should identify relative windows paths"),e.notOk(path.isAbsolute("some/path/file.js"),"should identify relative unix paths");[{actual:"X:\\some\\..\\.\\path\\\\file.js",normal:"X:/path/file.js",resolve:{origin:"X:/path/origin.js",expected:"X:/path/file.js"}},{actual:"some\\..\\.\\path\\\\file.js",normal:"path/file.js",resolve:{origin:"X:/path/origin.js",expected:"X:/path/path/file.js"}},{actual:"/some/.././path//file.js",normal:"/path/file.js",resolve:{origin:"/path/origin.js",expected:"/path/file.js"}},{actual:"some/.././path//file.js",normal:"path/file.js",resolve:{origin:"",expected:"path/file.js"}},{actual:".././path//file.js",normal:"../path/file.js"},{actual:"/.././path//file.js",normal:"/path/file.js"}].forEach(function(a){e.equal(path.normalize(a.actual),a.normal,"should normalize "+a.actual),a.resolve&&(e.equal(path.resolve(a.resolve.origin,a.actual),a.resolve.expected,"should resolve "+a.actual),e.equal(path.resolve(a.resolve.origin,a.normal,!0),a.resolve.expected,"should resolve "+a.normal+" (already normalized)"))}),e.end()});