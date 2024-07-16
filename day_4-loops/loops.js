//Activity 1: For Loops

//Task 1:
for (let i = 1; i <= 10; i++) {
    // console.log(i);
}

//Task 2:
for (let i = 1; i <= 10; i++) {
    // console.log(`5 * ${i} = ${5 * i}`);
}

//------------------------------------------------------------------------------------------------

//Activity 2: While Loop

//Task 3:
let i = 1;
let total = 0;
while (i <= 10) {
    total = total + i
    i = i + 1;
}
// console.log(`${total}`);

//Task 4:
let index = 10;
while (index >= 1) {
    // console.log(`${index}`);
    index--
}

//------------------------------------------------------------------------------------------------

//Activity 3: Do While Loop

//Task 5:
// let i = 1;
do {
    // console.log(`${i}`);
    i++;
} while (i <= 5);


//Task 6:
// let factorial = 5;
// let result = 1;

// do {
//     result = result * factorial;
//     factorial--;
// } while (factorial > 1);
// console.log(`${result}`);

//------------------------------------------------------------------------------------------------

//Activity 4: Nested Loop


//Task 7:
// for (let i = 0; i < 5; i++) {
//     let line ='';
//     for (let j = 0; j <= i; j++) {
//         line = line + '*'
//     }
//     console.log(line);
// }

//------------------------------------------------------------------------------------------------

//Activity 5: Loop control statements

//Task 8:
// for (let i = 1; i <=10; i++) {
//     if(i==5){
//         continue;
//     }
//     console.log(`${i}`);

// }


//Task 9:
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(`${i}`);

}

