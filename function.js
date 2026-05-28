//export const add = (a,b) => a+b;
//export const sub = (a,b) => a-b;
//export const mul = (a,b) => a*b;
//export const div = (a,b) => {
   // if (b==0){
     //   return "cannot divide by zero";
    //}
    //return a/b;
//};
//export const modulus = (a,b) => a%b;

const addMany = (...numbers) => {
    let sum = 0;
    for (let num of numbers) {
        sum = sum + num;
    }
    return sum;
};

// SUBTRACTION (from first number)
const subMany = (...numbers) => {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = result - numbers[i];
    }
    return result;
};

// MULTIPLICATION (many numbers)
const mulMany = (...numbers) => {
    let result = 1;
    for (let num of numbers) {
        result = result * num;
    }
    return result;
};

// DIVISION (from first number)
const divMany = (...numbers) => {
    let res = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        res /= numbers[i];
    }

    return res;
};


// MODULUS (first % second)

const modMany = (...numbers) => {
    let res = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        res %= numbers[i];
    }

    return res;
};

function calculate(operation) {

    let input =
        document.getElementById("numbers").value;

    let numbers =
        input.split(",").map(Number);

    let result;

    if (operation === "add") {
        result = addMany(...numbers);
    }

    else if (operation === "sub") {
        result = subMany(...numbers);
    }

    else if (operation === "mul") {
        result = mulMany(...numbers);
    }

    else if (operation === "div") {
        result = divMany(...numbers);
    }

    else if (operation === "mod") {
        result = modMany(...numbers);
    }

    document.getElementById("result").innerText =
        result;
}

