//Activity 1: Object Creation and Access

//Task 1:
let bookInfo = {
    title: 'Think like monk',
    author: 'Jay Shetty',
    year: 2019
}
// console.log(bookInfo);

//Task 2
// console.log(`Title : ${bookInfo.title}\nAuthor : ${bookInfo.author}`);

//-----------------------------------------------------------------------------------------------------

//Activity 2: Object methods

//Task 3:

bookInfo.getDetails = function () {
    return `${bookInfo.title} is written by ${bookInfo.author} in year ${bookInfo.year}`
}

// console.log(bookInfo.getDetails());


//Task 4:

bookInfo.changeYear = function (updatedYear) {
    this.year = updatedYear;
    return `Updated Year: ${this.year}`
}

// console.log(bookInfo.changeYear(2021));
// console.log(bookInfo);


//-----------------------------------------------------------------------------------------------------

//Activity 3: Nested Objects

//Task 5:
let library = {
    name: "Public Library Pune",
    books: [{
        title: "Dune",
        author: "Frank Herbert",
        year: 1965,
        genre: "Science Fiction"
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        year: 1979,
        genre: "Science Fiction"
    },
    {
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        year: 2005,
        genre: "Mystery"
    },
    {
        title: "Gone Girl",
        author: "Gillian Flynn",
        year: 2012,
        genre: "Mystery"
    }]
}
// console.log(library);

//Task 6:
// console.log(`Name of Library: ${library.name}`);
// console.log(`Books:`);
// library.books.forEach((book,index)=>{
//     console.log(`${index+1}. ${book.title}`);
// })


//-----------------------------------------------------------------------------------------------------

//Activity 4: The this keyword

//Task 7:

// bookInfo.listDetails = function(){
//     return `${this.title}, is written by ${this.author} in ${this.year}`
// }
// console.log(bookInfo.listDetails());


//-----------------------------------------------------------------------------------------------------

//Activity 5: Object iteration

//Task 8:
for (const key in bookInfo) {
    // console.log(`${key} : ${bookInfo[key]}\n`);
}

//Task 9:
console.log(Object.keys(bookInfo));
console.log(Object.values(bookInfo));

