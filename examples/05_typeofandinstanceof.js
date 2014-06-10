// typeof vs. instanceof
var obj = {};
console.log('obj is of type', typeof(obj));

var func = function() {

};

console.log('func is of type', typeof(func));

console.log('obj is instance of func:', obj instanceof func);
