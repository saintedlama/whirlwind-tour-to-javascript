
// What you write
var example = function() {
    var b = 0;

    for (var i = 0; i < 3; i++) {

        var a = b * i;
    }

    console.log('the value of a is', a);
};

// Is transformed to this
var example = function() {
    var b;
    var a;

    b = 0;

    for (var i = 0; i < 3; i++) {
        a = b * i;
    }

    console.log('the value of a is', a);
};

// All variable declarations are pulled to the start of the scope