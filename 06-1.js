var mymodule = require('./6-2');
mymodule(process.argv[2], process.argv[3], function (err, data) {
	if (err) {
		return;
	}
	else {
		for (var i = 0; i < data.length; i++) {
			console.log(data[i]);
		}
	}
});