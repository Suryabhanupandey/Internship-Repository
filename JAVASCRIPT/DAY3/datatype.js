// Data Type  - kind of value stored in a variable 
// 1. Primitive Data Types :single value/simple value Store in this type of data type .

let name = "Surya";       // String
let age = 20;             // Number
let isStudent = true;     // Boolean
let address;              // Undefined
let marks = null;         // Null
let id = Symbol("id");    // Symbol
let bigNum = 12345678901234567890n; // BigInt
console.log(id);



// Non-Primitive (Reference) Data Types - multiple value store (Collections of data or objects.)

let person = {fullName: "Surya", Roll: 20 };  // Object
let mark = [90, 85, 88];                 // Array
function greet() {                        // Function
    console.log("Welcome! Hii", fullName ,"Age:", Roll ,"Mark", mark );
    console.log(typeof mark);
}

greet();



