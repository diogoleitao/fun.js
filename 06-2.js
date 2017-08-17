var fs = require('fs');
var path = require('path');

module.exports = function (dirname, extension, callback) {
	fs.readdir(dirname, function (err, list) {
		if (err) {
			return callback(err);
		} else {
			var files = [];
			list.forEach(function (file) {
				if (path.extname(file) === '.' + extension) {
					files.push(file);
				}
			});
			callback(null, files);
		}
	});
}