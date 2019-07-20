export class Person{
    private lastName  : String = "";
    private firstName: String = "";

    constructor(lastName: String, firstName: string) {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    public getFullName(){
        return this.firstName+" "+this.lastName;
    }
}




