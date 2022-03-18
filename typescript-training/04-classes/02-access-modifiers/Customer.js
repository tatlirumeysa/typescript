var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
/*
let myCust = new Customer();

myCust.firstName="rumeysa";
myCust.lastName="tatli";

console.log(myCust.firstName);
console.log(myCust.lastName);

tsc --noEmitOnError --target ES5 .\Customer.ts
*/
var myCust = new Customer("rumeysa", "tatli");
console.log(myCust.firstName);
console.log(myCust.lastName);
