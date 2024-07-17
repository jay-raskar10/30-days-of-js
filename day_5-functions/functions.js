//Activity 1: Function declaration

//Task 1:
function checkEvenOdd(num) {
    if (num % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
// checkEvenOdd(23);

//Task 2:
function square(num) {
    return console.log(num * num);
}
// square(4);


//-----------------------------------------------------------------------------------------------------

//Activity 2: Function expression

//Task 3:
const maximum = function (num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}`);
    } else {
        console.log(`${num2} is greater than ${num1}`);
    }
}
// maximum(43,65);

//Task 4:
const concatString = function (str1, str2) {
    return str1 + str2
}
// console.log(concatString("Jay ","Raskar"));

//-----------------------------------------------------------------------------------------------------

//Activity 3: Arrow Function

//Task 5:
const sumOfTwo = (num1, num2) => num1 + num2;
// console.log(sumOfTwo(34,10));

//Task 6:
const checkCharString = (str, char) => str.includes(char);
// console.log(checkCharString("ChaiAurCode",'Aur'));

//-----------------------------------------------------------------------------------------------------

//Activity 4: Function parameters and default values

//Task 7:
function product(num1, num2 = 5) {
    return num1 * num2;
}
// console.log(product(2,3));
// console.log(product(2));

//Task 8:
function info(name, age = 20) {
    return console.log(`Good day ${name}, your age is ${age}`);
}
// info("Jay",21)
// info("Hitesh")

//-----------------------------------------------------------------------------------------------------

//Activity 5: High order functions

//Task 9:

// function repeat(fn, times) {
//     for (let i = 0; i < times; i++) {
//         fn(i);
//     }
// }
// repeat(() => { console.log("Hello Chai Aur Code\n") }, 5)

// function greet(name) {
//     console.log(`Hello ${name}`);
// }
// repeat(()=>greet('Hitesh'),4);


//Task 10:
function HOF(fn1,fn2,value) {
    return fn2(fn1(value))
}

const add3 = (x) => x+3;
const Square = (x) => x*x;

console.log(HOF(add3,Square,2))
//Output : 25 => (2+3)^2 = (5)^2 = 25