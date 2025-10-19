/*
     2.Non-Primitive Data Types (Refence Data Type)
     a.Object
     b.Array
     c.Function
     d.Date
     e.Map, Set, etc.
*/

/*
   a.Object -An object in JavaScript is a collection of key–value pairs.
             It is used to store related data and information together.

*/

 let Student = {
  fullName: "Surya Bhanu Pandey",
  class: "BCA",
  id: 101,
  age: 20,
  address: {
    vilage: "Harnamar",
    post: "Giluala",
    policeStation: "Glilua",
    pinCode: 271835,
    district: "Shrawasti",
  }
}
console.log(Student.fullName, Student.address);

// Example 2
let car = {
  brand: "Toyota",
  model: "Corolla",
  color: "White",

  start: function () {
    console.log("The car has started!");
  }
};

// Accessing object data
console.log(car.brand);   // Output: Toyota
console.log(car.color);   // Output: White
car.start();              // Output: The car has started!

/*
   b. Array :An array in JavaScript is a list-like structure used to store multiple values in a     
             single variable.
*/
let fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange");  //push
console.log(fruits[0]); // Output: Apple
console.log(fruits[3]); // Output: Mango 
fruits.pop(); // pop
fruits.length; //length 

// One student's record (Object)
let student = {
  name: "Surya",
  age: 20,
  grade: "BCA",
  subjects: ["JavaScript", "CSS", "Java"] // Array inside Object
};

console.log(student.name);      // Output: Surya
console.log(student.subjects);  // Output: ["JavaScript", "CSS", "Java"]
console.log(student.subjects[1]); // Output: CSS

/* Spread Operator :The spread operator is written as ... and is used to expand (spread)
                     elements of an   array, object, or iterable into individual elements.
*/

let arr1 = [ 10,20,30];
let arr2 = [...arr1];
console.log(arr2);
console.log(arr1[0]); // Output: 10
 

// Function :A function is a block of reusable code designed to perform a specific task.

 
let username ="Vinay";
let age = 20;
happybrithday();
function happybrithday() {
    console.log(" happy brithday to you");
    console.log(" happy brithday to you",username);
    console.log(" happy brithday many many returns of the day");
    console.log(" you are",age,"years old!" );
}

/* Arrow Function :
                  An arrow function in JavaScript is a shorter and cleaner way to write functions.
 
*/


/*1. Hoisting
                 JavaScript code run hone se pehle, interpreter variables aur function declarations ko “memory” mein reserve kar leta hai.
 */