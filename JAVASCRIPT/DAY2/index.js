/*
        Variable: Variables are containers that store data values.
        Keyword
        1.var
        2.let
        3.const
        
        3 way to Declare Variable in JavaScript

        | Keyword | Description               | Re-declare  | Re-assign    | Scope    |
        | ------- | ------------------------- | ----------  | ---------    | -------- |
        | `var`   | Old way (function-scoped) | ✅ Yes      | ✅ Yes     | Function |
        | `let`   | Modern way (block-scoped) | ❌ No       | ✅ Yes     | Block    |
        | `const` | Constant (cannot change)  | ❌ No       | ❌ No      | Block    |


*/


// 1. var 

var name = "Surya";
console.log(name);
var name = "Chandan";            //Can be re-declared and re-assigned
console.log(name);


//2. let

let fullName = "Surya Bhanu Pandey";
console.log(fullName);
// let fullName ="Chandan Pandey";       ❌ Cannot be re-declared
fullName = "Chandan Pandey";          // ✅ Can be re-assigned
console.log(fullName);

// 3.const 

const id = 10;
console.log(id);
// const id = 15;           ❌ Cannot be re-declared
console.log(id);
// id = 20;                  // ❌ Cannot be re-assigned
console.log(id);

// var ,let ,const 
const accountId = "Surya Bhanu Pandey";
let accountEmail = "suryabhanupandey";
var accountCity = "Shravasti";
let accountstate; //undefined value
var accountCity = "balrampur";  //not allowed
accountCity = "shrawasti";
accountEmail = "shrawasti@gmail.com";
accountpassword = "13225";
console.log(accountId);
console.table([accountId, accountEmail, accountCity, accountpassword]);
