let listOfNames : Array<String>;

listOfNames = ["Ståle", "Marius", "Selnes"];

let numberList : Array<number>;

numberList = [1,2,3,4,5,6];

let result = numberList.filter((numb) => numb > 4);
console.log(result);

const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Green;


// any should be avoided as it don't do any type checks and product may fail
// in production

let department: any;

department = "IT";
department = 10;

// void

// functions