//Activity 1: Array creation and access

//Task 1:
let num = [1, 2, 3, 4, 5]
// console.log(num);

//Task 2:
// console.log(`First Element:${num[0]}, Last Element:${num[4]}\n`);

//----------------------------------------------------------------------------------------------------------

//Activity 2: Array Methods (Basic)

//Task 3: 

num.push(6);
// console.log(`Pushed element = ${num}\n`);

//Task 4:
num.pop()
// console.log(`Popped element = ${num}\n`);

//Task 5:
num.shift();
// console.log(`Shifted element = ${num}\n`);

//Task 6:
num.unshift(10);
// console.log(`unShifted element = ${num}\n`);

//----------------------------------------------------------------------------------------------------------

//Activity 3: Array Methods (Intermediate)

//Task 7:

let originalArray = [1, 2, 3, 4, 5, 6, 7, 8];
let doubledArray = originalArray.map(num => (num * 2))
// console.log(`Original Array : ${originalArray}\nDoubled Array : ${doubledArray}\n`);


//Task 8:
let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let updatedMyNums = myNums.filter((num) => num % 2 == 0)
// console.log(updatedMyNums);

//Task 9:
// let sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = sum.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// console.log(`\nSum of array using reduce :${result}`);

//----------------------------------------------------------------------------------------------------------

//Activity 4: Array iteration

//Task 10:
let sum = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < sum.length; i++) {
    // console.log(sum[i]); 

}

//Task 11: using for each

// sum.forEach(i => console.log(sum[i]));


//----------------------------------------------------------------------------------------------------------

//Activity 5: Multi dimesnsional Array 

//Task 12:

// let arr = [[1, 2, 3, 4, 5], [11, 12, 13, 14, 15], [21, 22, 23, 24, 25]]
// console.log(arr);

let row = 3;
let col = 5;
let array2D = [];

for (let i = 0; i < row; i++) {
    array2D[i] = [];
    for (let j = 0; j < col; j++) {
        array2D[i][j] = i * col + j + 1;

    }

}
console.log(array2D);   //Output = [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ] ]
console.log(array2D[1][2]); //outputs = 8

