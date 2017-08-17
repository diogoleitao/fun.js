var fs = require('fs');
var path = process.argv[2];
var file = fs.readFile(path, function (err, data) {
	if (err) {
		console.log('error');
	} else {
		var lines = data.toString().split('\n').length - 1;
		console.log(lines)
	}
});