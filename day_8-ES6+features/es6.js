//Activity 1: Template Literals

//Task 1:
// let name = "Jay";
// let age = 21;
// console.log(`My name is ${name} & I'm ${age} years old.` );

//Task 2:
let str = `This is 
a multiline
string as asked in the question`;
// console.log(str);

//---------------------------------------------------------------------------------

//Activity 2: Destructuring

//Task 3:
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
let [num1, num2] = arr
// console.log(num1,num2);

//Task 4:
let bookInfo = {
    title: 'Think like Monk.',
    author: 'Jay Shetty',
    year: 2019
}
let { title, author } = bookInfo;
// console.log(title,author);

//---------------------------------------------------------------------------------

//Activity 3: Spread and Rest Operators

//Task 5: 
let arr1 = [1, 2, 3, 4, 5];
let newArr = ['A', 'B', 'C', 'D', ...arr1];
// console.log(newArr);

//Task 6:
function sum(...Args) {
    let total = 0;
    for (const arg of Args) {
        total += arg
    }
    return total;
}
// console.log(sum(1,2,3,4,5));


//---------------------------------------------------------------------------------

//Activity 4: Default Parameters

//Task 7:
function product(num1, num2 = 1) {
    return num1 + num2;
}
// console.log(product(2,5));
// console.log(product(2));


//---------------------------------------------------------------------------------

//Activity 5: Enhanced Object literals

//Task 8:
let nameOfDog = "Joy";
let ageOfDog = 4;
let colorOfDog = "Brown & White";

let dog = {nameOfDog,ageOfDog,colorOfDog};
// console.log(dog);

//Task 9:
let firstName = "firstName";
let lastName = "lastName";
let age = "age";
let getJobTitle = ()=> "jobTitle";

const person = {
    [firstName] : "Jay",
    [lastName] : "Raskar",
    [age] : 21,
    [getJobTitle()]: "Frontend Dev",
    [`${firstName}${lastName}`] : "Jerry Raskar" 
}
// console.log(person);
