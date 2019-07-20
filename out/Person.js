"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(lastName, firstName) {
        this.lastName = "";
        this.firstName = "";
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
exports.Person = Person;
