/*
 What is an Argument?
            ➡️ An argument is the actual value you pass to a function when you call it.
            📘 Definition:
                           Arguments are the data you give to a function so that it can perform a task using those values.
*/

/*
  1. for...in loop : Iterating over the keys (property names) of an object or array indexes.

  Syntax :
            for (let key in object) {
                 // code
            } 
*/
/*
    2. for...of loop : Iterating over the values of an iterable (like an array, string, or map).

    Syntax : 
                for (let value of iterable) {
                 // code
                }

*/
/*
    3. forEach() method : Executing a function for each element of an array.
    Syntex :
            array.forEach(function(element, index, array) {
            // code
           });

 
*/
let fruits = ["Apple", "Banana", "Mango"];

// fruits.forEach((fruit, index) => {
//   console.log(index + " → " + fruit);
// });


fruits.forEach(function(fruit,index){
    console.log(index + " : " + fruit)
});

// example 2

let student = { name: "Surya", age: 20, course: "BCA" };
let marks = [85, 90, 88];

for (let key in student) console.log(`${key}: ${student[key]}`); // for in
for (let mark of marks) console.log("Mark:", mark);                // for of
marks.forEach((mark, i) => console.log(`Subject ${i+1}: ${mark}`)); //forEach


// example 3
let details ={
    fullName :"Chandan Pandey",
    village : "Subikha",
    post : "Gilaula",
    pin :271835,
}
for (let key in details)console.log(`${key} : ${details[key]}`);
let num = [90,80,85,79];
for(let number of num)console.log("num :", number);




/*
   map(): ➡️ The map() method is used to create a new array by applying a function to each element of an existing array.

         📘 Definition:
         map() transforms every element of an array and returns a new array — without changing the original one.
    syntax :
                array.map(function(currentValue, index, array) {
                // return new value
                });

*/
let numbers = [1, 2, 3, 4];

let doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled);

