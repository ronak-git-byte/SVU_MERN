/*
===========================================
        JAVASCRIPT BASICS FOR CLASS
===========================================
*/


//------------------------------------------
// VARIABLES (var, let, const)
//------------------------------------------


// var → can redeclare and reassign
var a = 10;
var a = 20; // redeclare allowed
a = 30;     // reassign allowed
console.log("var:", a);

// let → cannot redeclare but can reassign
let b = 100;
b = 200; // allowed
console.log("let:", b);

// const → cannot redeclare or reassign
const c = "constant value";
console.log("const:", c);

console.log("----------------------------------");


//------------------------------------------
//SCOPE (Global, Function, Block)
//------------------------------------------

console.log("SCOPE");

// Global scope
var globalVar = "I am global";

// Function scope
function testFunction() {
  var insideFunction = "I am inside function";
  console.log(insideFunction);
}

testFunction();
console.log(globalVar);

// Block scope
{
  let blockLet = "I am block let";
  const blockConst = "I am block const";
  console.log(blockLet);
  console.log(blockConst);
}

// console.log(blockLet); //  Error (block scoped)

console.log("----------------------------------");


//------------------------------------------
// DATA TYPES
//------------------------------------------

console.log("DATA TYPES");

// Primitive
let name = "Ronak";       // String
let age = 25;             // Number
let isStudent = true;     // Boolean
let value = null;         // Null
let notDefined;           // Undefined

// typeof shows the type of data stored in variable
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof value);       // object (JS bug)
console.log(typeof notDefined);

// Non-Primitive
let arr = [1, 2, 3];
let obj = { city: "Kolkata", description: "city of joy" };

console.log(typeof arr);
console.log(typeof obj);

console.log("----------------------------------");


//------------------------------------------
// ARRAYS + IMPORTANT METHODS
//------------------------------------------

console.log("ARRAYS");
// collection of multiple datas , 

let numbers = [1, 2, 3, 4];

numbers.push(5);   // add at end
numbers.pop();     // remove from end

console.log("Array:", numbers);

// map() // multiplecation operation
let doubled = numbers.map(num => num * 2);
console.log("map:", doubled);

// filter()
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("filter:", evenNumbers);

// forEach()
numbers.forEach(num => {
  console.log("forEach:", num);
});

console.log("----------------------------------");


//------------------------------------------
// OBJECT + DESTRUCTURING
//------------------------------------------

console.log("OBJECT");

// under the curly brace contains key and values { key : value }

let person = {
  name: "Ronak",
  age: 25,
  city: "Kolkata"
};

// how to Access 
console.log(person.name);

// Destructuring // unpacks the keys value
let { name: personName, age: personAge } = person;
console.log(personName, personAge);

console.log("----------------------------------");


//------------------------------------------
// 7️⃣ LOOPS
//------------------------------------------

console.log("LOOPS");

// for loop
for (let i = 0; i < 3; i++) {
  console.log("for:", i);
}

// while loop
let i = 0;
while (i < 3) {
  console.log("while:", i);
  i++;
}

// do...while loop
let j = 0;
do {
  console.log("do while:", j);
  j++;
} while (j < 3);

// for...of (array)
let letters = ["a", "b", "c"];
for (let letter of letters) {
  console.log("for of:", letter);
}

// for...in (object)
let obj2 = { x: 1, y: 2 };
for (let key in obj2) {
  console.log("for in:", key, obj2[key]);
}

console.log("----------------------------------");


//------------------------------------------
// ES6 FEATURES (Spread, Rest)
//------------------------------------------

console.log("ES6 FEATURES");

// Spread operator
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log("spread:", arr2);

// Rest operator
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("rest:", sum(1, 2, 3, 4));

/*
===========================================
        FUNCTIONS & CALLBACKS
===========================================
*/

console.log("===== FUNCTIONS =====");

/*
------------------------------------------
Basic Function (Declaration)
------------------------------------------
*/

//Defineing function greet
function greet() {
  console.log("Hello Students!");
}

greet(); // calling the function***


/*
------------------------------------------
Function With Parameters
------------------------------------------
*/


function greetUser(name) {
  console.log("Hello " + name);
}

greetUser("Ronak"); // argument String passed
greetUser("Class");


/*
------------------------------------------
Function With Return
------------------------------------------
*/

function add(a, b) {
  return a + b;
}

let result = add(10, 5);
console.log("Addition Result:", result);


/*
------------------------------------------
Function Expression
------------------------------------------
*/

const multiply = function (a, b) {
  return a * b;
};

console.log("Multiply Result:", multiply(4, 5));


/*
------------------------------------------
Arrow Function (ES6)
------------------------------------------
*/

const subtract = (a, b) => {
  return a - b;
};

console.log("Subtract Result:", subtract(10, 3));

// Short form arrow function
const square = num => num * num;
console.log("Square:", square(5));


console.log("\n===== CALLBACK FUNCTIONS =====");

/*
------------------------------------------
What is a Callback?
------------------------------------------
A callback is a function passed
as an argument to another function.
*/


function processUser(name, callback) {
  console.log("Processing user:", name);
  callback();
}

function welcomeMessage() {
  console.log("Welcome to the system!");
}

processUser("Ronak", welcomeMessage);


/*
------------------------------------------
Callback With Parameters
------------------------------------------
*/

function calculate(a, b, operation) {
  return operation(a, b);
}

function addition(x, y) {
  return x + y;
}

function multiplication(x, y) {
  return x * y;
}

console.log("Addition:", calculate(5, 3, addition));
console.log("Multiplication:", calculate(5, 3, multiplication));


/*
------------------------------------------
 (setTimeout)
------------------------------------------
*/

console.log("Start");

setTimeout(function () {
  console.log("This runs after 2 seconds (Callback)");
}, 2000);

/*
------------------------------------------
setInterval()
------------------------------------------
*/

// Syntax  
// let intervalID = setInterval(function, delay, arg1, arg2, ...);
let myInterval = setInterval(() => console.log("Repeating..."), 1000);

