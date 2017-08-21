var dividersAndStrings = [{
    'divider': 3,
    'string': 'Fizz'
}, {
    'divider': 5,
    'string': 'Buzz'
}, {
    'divider': 7,
    'string': 'Fuzz'
}, {
    'divider': 11,
    'string': 'Bizz'
}];

for (var i = 1; i <= 1000; i++) {
    var output = "";

    for (var j = 0; j < dividersAndStrings.length; j++) {
        if (i % dividersAndStrings[j].divider == 0) {
            output += dividersAndStrings[j].string;
        }
    }

    if (output == "") {
        output = i;
    }

    console.log(output);
}
