var http = require('http');

var info = '';
var chars = 0;
http.get(process.argv[2], function (response) {
	response.on('data', function (data) {
		info += data.toString();
		chars += data.toString().length;
	});

	response.on('end', function () {
		console.log(chars);
		console.log(info);
	});
});