class Customer{
    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string){
        this._firstName=theFirst;
        this._lastName=theLast;
    }

    public get firstName(): string{
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName=value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
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
let myCust = new Customer("rumeysa","tatli");
console.log(myCust.firstName);
console.log(myCust.lastName);