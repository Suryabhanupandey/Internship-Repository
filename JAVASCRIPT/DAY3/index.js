/*
 Scope :  Scope is absically decide the limitations of the variable where we can access and
           wecon't access that articular variable
     *** Scope means where a variable is accessible in your code.

    1.global scope: accessible anywhere
    2. Function(Local) Scope : then it is only accessible inside that function — not outside. 
    3. Block Scope { } :let and const are block-scoped,
                        which means they are only available inside those curly braces {}.



              | Keyword | Re-declare | Re-assign    | Scope    | Hoisted   | Example       |
              | `var`   | ✅ Yes      | ✅ Yes     | Function | ✅ Yes   | `var x = 5;`   |
              | `let`   | ❌ No       | ✅ Yes     | Block    | ❌ No    | `let x = 5;`   |
              | `const` | ❌ No       | ❌ No      | Block    | ❌ No    | `const x = 5;` |

              
*/
// 1.Globle Scope
var roll = 10;   //global variable
function college() {
  if (true) {
    // let teacher = "Surya";   
    var teacher = "Surya";  //
    const subject = "JAVASCRIPT";
    console.log("Inside The Block:", teacher, subject);
  }

  console.log("Outside The Block:", teacher, roll);
  // console.log(teacher);      // Error  - block Scope 
  // console.log(subject);     //Error - block Scope
}

college();


// 2. Function Scope (var)

function hello() {
  var name = "Surya";
  var id = 456;
  console.log(`Hello , ${name} How are you ? your id number ${id}`);
}
// console.log(name); //not allowed outsite to excution
hello();


// 3.Block Scope (let , const )
{
  let a = 10;
  const b = 20;
  console.log(a);
  console.log(b);

}
// console.log(a); //can't accesiable   
// console.log(b); //can't accesiable   

 