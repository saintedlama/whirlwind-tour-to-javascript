// Functions are first class data types!
var trim = function(items) {
    items.filter(function(item) { return item });
};

function parseLine(line, options) {
    options = options || {};
    options.delimiter = options.delimiter || ',';

    return trim(line.split(','));
}

console.dir(parseLine('a,b,c'));