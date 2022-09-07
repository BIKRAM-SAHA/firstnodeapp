const path = require("node:path");

pathVal = "C:\\temp\\myfile.html";

// basename
console.log(path.basename(pathVal));

// dirname
console.log(path.dirname(pathVal));

//extname
console.log(path.extname(pathVal));

//parse
console.log(path.parse('/home/user/dir/file.txt'))
// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

//format
console.log(path.format({
    // root: '/',
    dir: '/home/user/dir',
    base: 'file.txt',
    // name: 'file',
    // ext: 'txt',
  })
)
// pathObject.root is ignored if pathObject.dir is provided
// pathObject.ext and pathObject.name are ignored if pathObject.base exists

//join
const paths = ['/foo', 'bar', 'baz/asdf', 'quux']
console.log(path.join(...paths))

//normalise
console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'))

//relative
console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'))

//sep
console.log('foo\\bar\\baz'.split(path.sep))