// Works as expected
var x
x = 10

if (x > 0) {
    console.log(x)
}

// In case you expect this -> You're a JS pro!
function multiply(a, b) {
    return  // Semicolon inserted here!
    a * b;
}

console.log(multiply(5, 10));