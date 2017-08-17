var http = require('http');

var info = '';
http.get(process.argv[2], function (response1) {
	response1.on('data', function (data1) {
		info += data1.toString();
	});

	response1.on('end', function () {
		info += '\n';
		http.get(process.argv[3], function (response2) {
			response2.on('data', function (data2) {
				info += data2.toString();
			})

			response2.on('end', function () {
				info += '\n';
				http.get(process.argv[4], function (response3) {
					response3.on('data', function (data3) {
						info += data3.toString();
					})

					response3.on('end', function () {
						console.log(info);
					})
				});
			});
		});
	});
});