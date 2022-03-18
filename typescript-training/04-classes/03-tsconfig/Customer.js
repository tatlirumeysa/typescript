"use strict";
class Customer {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
/*
let myCust = new Customer();

myCust.firstName="rumeysa";
myCust.lastName="tatli";

console.log(myCust.firstName);
console.log(myCust.lastName);

tsc --noEmitOnError --target ES5 .\Customer.ts
*/
let myCust = new Customer("rumeysa", "tatli");
console.log(myCust.firstName);
console.log(myCust.lastName);
