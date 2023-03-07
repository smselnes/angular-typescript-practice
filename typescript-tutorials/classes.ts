class Employee {
    #id: number;
    protected name: string;
    address: string;

    constructor(id: number, name: string, address: string) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() : string {
        return `${this.name} stays at ${this.address}`;
    }
}

let john = new Employee(1, "John", "Highway 71");

class Manager extends Employee {

    constructor(id:number, name:string,address: string) {
        super(id, name, address);
    }

    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address}`;
    }
}

let address = john.getNameWithAddress();
console.log(address);

let mike = new Manager(2, "Mike", "Cherise Drive");
console.log(mike.getNameWithAddress());