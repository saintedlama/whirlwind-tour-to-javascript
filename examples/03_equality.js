// Evaluate everything to true/false

var someString = 'something';

if (someString) {
    console.log('someString is true');
}

someString = '';

if (!someString) {
    console.log('someString is false');
}

// Two compare operators for equality

var stringValue = '0';
var numberValue = 0;

if (numberValue == stringValue) {
    console.log('awkward strings and numbers are equal!');
}

if (numberValue !== stringValue) {
    console.log('good strings and numbers are NOT exact equal!');
}
