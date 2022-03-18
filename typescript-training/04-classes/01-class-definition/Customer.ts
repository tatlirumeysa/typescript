class Customer{
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string){
        this.firstName=theFirst;
        this.lastName=theLast;
    }
}
/*
let myCust = new Customer();

myCust.firstName="rumeysa";
myCust.lastName="tatli";

console.log(myCust.firstName);
console.log(myCust.lastName);
*/
let myCust = new Customer("rumeysa","tatli");
console.log(myCust.firstName);
console.log(myCust.lastName);