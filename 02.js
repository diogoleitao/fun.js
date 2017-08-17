var x = process.argv.length;
var r = 0;
for (var i = 2; i < x; i++)
	r += +process.argv[i];
console.log(r)