var http = require('http');
var url = require('url');

function parsetime (time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	};
}

function unixtime (time) {
	return {
		unixtime: time.getTime()
	};
}

var server = http.createServer(function (request, response) {
	if (request.method == 'GET') {
		var parsed = url.parse(request.url, true);
		var time = new Date(parsed.query.iso);
		var result;

		if (/^\/api\/parsetime/.test(request.url)) {
			result = parsetime(time);
		} else if (/^\/api\/unixtime/.test(request.url)) {
			result = unixtime(time);
		}

		if (result) {
			response.writeHead(200, {
				'Content-Type': 'application/json'
			});
			response.end(JSON.stringify(result));
		}
	}
});

server.listen(+process.argv[2]);