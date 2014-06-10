function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.format = function() {
    return this.firstName + ' ' + this.lastName;
};

// new creates a this scope
var jimmy = new Person('Jimmy', 'Connors');
console.log(jimmy.format()); // Works since person can access this scope

Person.prototype.isValid = function() {

    // Does not work - every function spawns a new scope making this point to global scope
    var validateInternal = function() {
        return this.firstName !== undefined && this.lastName !== undefined;
    };

    return validateInternal();
};

console.log('Is valid', jimmy.isValid());

Person.prototype.isValid = function() {
    var self = this;

    // Work - This is passed as 'self' in closure
    var validateInternal = function() {
        return self.firstName !== undefined && self.lastName !== undefined;
    };

    return validateInternal();
};

console.log('Is valid', jimmy.isValid());