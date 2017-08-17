var fs = require('fs');
var path = process.argv[2];
var file = fs.readFileSync(path).toString();
var lines = file.split('\n');
console.log(lines.length-1);