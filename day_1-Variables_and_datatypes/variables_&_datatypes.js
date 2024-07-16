//Activity 1 : Variable Declaration

//Task 1
var num = 45;
// console.log(num);

//Task 2
let word = "Chai aur Code"
// console.log(word);

//--------------------------------------------------------------------------------------------

//Activity 2: Constant Declaration

//Task 3
const val = true
// console.log(val);

//--------------------------------------------------------------------------------------------

//Activity 3: Datatypes

//Task 4

let number = 433;
let sentence = "Jay";
const value = false;
const Obj = {
    name: 'Jay',
    age: 21
};
const arr = new Array(1, 2, 3, 4);

// console.log(typeof(number));
// console.log(typeof(sentence));
// console.log(typeof(value));
// console.log(typeof(Obj));
// console.log(typeof arr); //will return type as object as array is considered as special type object in js 

//--------------------------------------------------------------------------------------------

//Activity 4: Reassigning variables

//Task 5

let abc = 42;
// console.log(abc);

abc = 87;
// console.log(abc);

//--------------------------------------------------------------------------------------------

//Activity 5: Understanding const

//Task 6

const Name = "Jay";     //successfull execution
// console.log(Name);
// Name = "Hitesh";     //typeerror: assignment to constant variable
// console.log(Name);

//************************************************************************************************************************//


//Feature Request 

//Task 1 : Variable types consolelog

let myName = 'Jay';
let myAge = 21;
let isEmployed = false;
let tasks = { task1: "Variable types consolelog", task2: "Reassignment Demo" };
let weekDays = [1, 2, 3, 4, 5, 6, 7]

console.log(myName, typeof myName);
console.log(myAge, typeof myAge);
console.log(isEmployed, typeof isEmployed);
console.log(tasks, typeof tasks);
console.log(weekDays, typeof weekDays);

//--------------------------------------------------------------------------------------

//Task 2: Reassignment demo

//let
let car = "porshe";
console.log(car);

car="BMW"
console.log(car);


//const
const PI = 3.14;
console.log(PI);

// PI = 54;    //TypeError assignment to constant variable
console.log(PI);