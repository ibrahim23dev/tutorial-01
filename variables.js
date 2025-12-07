const name = "Sample Variable";

let age = 25;

console.log(name, age)


function add(x,y) {
    return x + y;
}

console.log(add(5,7))



const multiply=(a,b,c)=> a * b * c;

console.log(multiply(2,3,7))

function divide(a, b) {
    return a / b;
}

console.log(divide(10, 2));

const divide=(a, b) => a / b;

console.log(divide(20, 4));



// let can be reassigned but not redeclared
// var can be redeclared and reassigned
// const cannot be redeclared or reassigned


const PI = 3.14159;
PI = 3.14159; // This will throw an error
console.log("Value of PI:", PI);


//Loop-------for, while, do-while, for...in, for...of



//for.....of

const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
    console.log(num);
}


//for....in
const person = {
    name: "Alice",
    age: 28,
    city: "New York"
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}


///for loop

for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}


//while loop
let count = 0;
while (count < 5) {
    console.log("Count:", count);
    count++;
}

const nums = [5, 10, 13, 15, 17];

for (const num of nums) {
  console.log(num);
}


const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}


const fruits = {
    a: "apple",
    b: "banana",
    c: "cherry"
}

for (const key in fruits) {
    console.log(`${key} : ${fruits[key]}`);
}

while loop

let count = 0;
while (count < 5) {
    console.log("Count:", count);
    count++;
}

do-while loop
let num = 0;
do {
    console.log("Number:", num);
    num++;
} while (num < 5);


var x = 10;

function sum() {
  return 5 + 5;
}

console.log(x);   // ❓ Output কি হবে?
console.log(sum); // ❓ Output?



var a = 10;
function display() {
    var b = 20;
    console.log(a);
    console.log(b);
}


