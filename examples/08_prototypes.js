// Constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var p = new Person('Björn', 'Borg');
console.log('Created', p.firstName + ' ' + p.lastName);


// Prototype

Person.prototype.format = function() {
    return this.firstName + ' ' + this.lastName;
};

p = new Person('Björn', 'Borg');
console.log('Created', p.format());

// Assign a prototype

Person.prototype = {
    validate : function() {
        return this.firstName !== undefined && this.lastName !== undefined;
    }
};

p = new Person('Björn', 'Borg');
console.log('Is valid', p.validate());

// What happened to 'format'?

p = new Person('Björn', 'Borg');
console.log('Person constructor still has a format method?', p.format);
