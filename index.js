var fs = require("fs");
var package = require('./package.json');

fs.mkdirSync("./dist");
fs.writeFileSync("./dist/hello.txt", `hello world version:${package.version}`);