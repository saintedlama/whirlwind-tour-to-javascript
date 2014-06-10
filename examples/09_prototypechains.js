var a = { name : 'a' };
var b = { name : 'b' };
var c = { name : 'c' };

a.prototype = b;
b.prototype = c;

console.log(a.name, a.prototype.name, a.prototype.prototype.name);