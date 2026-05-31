import { add, sub, mul, div, modulus , addMany , subMany , mulMany, divMany ,modMany } from "./function.js";

console.log("Add:", add(10, 20));          // 30
console.log("Subtract:", sub(50, 10));    // 40
console.log("Multiply:", mul(2, 3));      // 6
console.log("Divide:", div(100, 2));      // 50
console.log("Modulus:", modulus(10, 3));  // 1

console.log(addMany(10, 20, 30));
console.log(subMany(30,20,10));
console.log(mulMany(2,3,4));
console.log(divMany(100, 2, 5)); 
console.log(modMany(100, 30, 4));