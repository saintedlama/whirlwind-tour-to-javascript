// Only functions spawn scopes - but provide a closure!

function example() {
    for (var i = 0; i < 3; i++) {
        var a = 1;
    }

    console.log('the value of a is', a);
}

example();

function example2() {
    for (var i = 0; i < 3; i++) {
        a = 1; // Forgot var -> a is now global! Not good!
    }

    console.log('the value of a is', a);
}

example2();

var b = 10;
function example3() {

    for (var i = 0; i < 3; i++) {
        var a = b * i; // Closure
    }

    console.log('the value of a is', a);
}

example3();