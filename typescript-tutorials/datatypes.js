"use strict";
let listOfNames;
listOfNames = ["Ståle", "Marius", "Selnes"];
let numberList;
numberList = [1, 2, 3, 4, 5, 6];
let result = numberList.filter((numb) => numb > 4);
console.log(result);
let c = 1 /* Color.Green */;
// any should be avoided as it don't do any type checks and product may fail
// in production
let department;
department = "IT";
department = 10;
// void
// functions
