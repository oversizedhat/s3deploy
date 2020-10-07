var fs = require("fs");
var package = require('./package.json');
fs.writeFileSync("./dist/hello.txt", `hello world version:${package.version}`);