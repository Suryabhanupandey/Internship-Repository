 /* arithimatic expression is a combination of.......
       operands (values,variables,etc.)
       operator (+ - / * %)
       that can be evaluted to a value
       ex. y = x + 5;
 
*/


let student=20;
console.logstudent+1;  //20+1
student=student-1; //21-1
student=student*2;  //20*2
student=student/2;  // 40/2
let extrastudents = student % 3;  //20%3 =2
console.log(student);
console.log(extrastudents);

let a= 50;
let b=5;
// let c=a+b; //addition
// let c=a/b; //sub
// let c=a*b; // mul
// let c=a/b; //div
let c=a%b; // m

console.log(c)


/*assignment operator

1. perenthesis
2. exponent
3. multiplication & division
4. addition & subtraction
*/

// example


 student += 1;
 student -= 1;
 student *= 2;
 student /= 2;
 
 
 let result = 1 + 2 * (3 + 4);

console.log(result);

// Example 2
a -= 5;
a += 6;
a *= 7;
a /= 8;
console.log(a);


// 3. Comparison Operators


console.log("30" == 30);  //true
console.log("30" === 30); //Strict
console.log( '20' != 20);  //false
console.log('50' !== 50); //true
console.log(5>3);  //greater than  -true 
console.log(5>=5); //greater than equal to - true
console.log(5<3); //less than -false
console.log(5<= 3); // less than equal  -false



let g = "20";
let e =20;
let f = g == e;
 console.log(f);


// 4. Logical Operators

let isAdult = true;
let visitSite = false;

console.log(isAdult && visitSite); // false
console.log(isAdult || visitSite); // true
console.log(!isAdult);             // false



// let id = 10;
// let salary = id;

// console.log((50>10) && (30<20) );  //false
 console.log(!20);
 
// ` `

let messege = "Hello, Every One";
let name = "Student";
console.log(`${messege} drop a messege ${name}`);


// 5. Unary Operators -
let age =20;
console.log(typeof age);
console.log(age++);
console.log(++age);



let number =10;
// number++;    // 10+1 =11 postfix  Icremeent
// ++number;     // 11+1 =12 prefix  Icrement
// number--;     // 12-1 =11 post Decrement
// --number;       // -1 +11 =10 pre Decrement
console.log(number++);
console.log(++number);
console.log(number--);
console.log(--number);

// 6. Ternary Operator

let Score = 50;
  let grade =  (Score >= 40) ? "Pass" : "Fail"; //Pass
  console.log(grade);


