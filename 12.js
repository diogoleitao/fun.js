var http = require('http');

var server = http.createServer(function (request, response) {
	if (request.method === 'POST') {
		var body = '';

		request.on('data', function (data) {
			body += data.toString().toUpperCase();
		});

		request.on('end', function () {
			response.writeHead(200, {
				'Content-Length': body.length,
				'Content-Type': 'text/plain'
			});
			response.end(body);
		});
	}
});

server.listen(+process.argv[2]);