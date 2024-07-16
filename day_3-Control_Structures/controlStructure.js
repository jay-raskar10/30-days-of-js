//Activity 1: If Else Statements

//Task 1:
let num = 34;
if (num > 0) {
    // console.log("Number is positive");
} else if (num < 0) {
    // console.log("Number is negative");
} else if (num == 0) {
    // console.log("Number is Zero");
}


//Task 2:
let age = 15
if (age >= 18) {
    // console.log("You're eligible to vote, as you are greater than 18");
} else {
    // console.log("You're not eligible to vote, as you are not greater than 18");
}

//-------------------------------------------------------------------------------------------------------

//Activity 2: Nested If-Else Statement

let a = 541;
let b = 322;
let c = 761;

//first check a is bigger than b & c, then b is greatest than a & c

if (a >= b) {
    if (a >= c) {
        // console.log(`a is the greatest number: ${a}`);
    } else {
        // console.log(`c is the greatest number: ${c}`);

    }
} else {
    if (b >= c) {
        // console.log(`b is the greatest number: ${b}`);
    } else {
        // console.log(`c is the greatest number: ${c}`);
    }
}

//-------------------------------------------------------------------------------------------------------

//Activity 3: Switch Case

//Task 4:
let weekDay = 4;
// switch (weekDay) {
//     case 1:
//         console.log(`${weekDay} is Monday`);
//         break;
//     case 2:
//         console.log(`${weekDay} is Tuesday`);
//         break;
//     case 3:
//         console.log(`${weekDay} is Wednesday`);
//         break;      
//     case 4:
//         console.log(`${weekDay} is Thursday`);
//         break;
//     case 5:
//         console.log(`${weekDay} is Friday`);
//         break;
//     case 6:
//         console.log(`${weekDay} is Saturday`);
//         break;
//     case 7:
//         console.log(`${weekDay} is Sunday`);
//         break;    
//     default:
//         console.log("Error: Invalid input");
//         break;
// }

//Task 5:

let grades = 34

switch (true) {
    case grades >= 90:
        console.log(`A`);
        break;
    case grades >= 75:
        console.log(`B`);
        break;
    case grades >= 60:
        console.log(`C`);
        break;
    case grades >= 45:
        console.log(`D`);
        break;
    case grades < 35:
        console.log(`F`);
        break;
}

//-------------------------------------------------------------------------------------------------------

//Activity 4: Ternary Operator

const val = 64;
val % 2 == 0 ? console.log("Even") : console.log("Odd");

//-------------------------------------------------------------------------------------------------------

//Activity 5: Combining Conditions

const year = 2022;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(`${year} is leap year`);
        } else {
            console.log(`${year} is not leap year`);
        }
    } else {
        console.log(`${year} is leap year`);
    }
} else {
    console.log(`${year} is not leap year`);
}