var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
/*
let myCust = new Customer();

myCust.firstName="rumeysa";
myCust.lastName="tatli";

console.log(myCust.firstName);
console.log(myCust.lastName);
*/
var myCust = new Customer("rumeysa", "tatli");
console.log(myCust.firstName);
console.log(myCust.lastName);
