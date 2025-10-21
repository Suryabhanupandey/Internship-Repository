/*
    Control Statement
    1.Condition Statement 
    2.Looping Statement
    3.Jump Statement
 */

/*
    1.Condition Statement
    a.if - Runs code only if the condition is true.
    b.else if - Runs one block if true, another if false
    c.switch - Used when you have many possible conditions to compare with one value.
*/
let age = 18;
if (age >= 13) {
    console.log("You Can't Visit this Site");
}
else if (age >= 20) {
    console.log("Welcome to this site");
}
else {
    console.log("Invalid");
}

// odd & even

let number = 13;
if (number % 2 === 0) {
    console.log("Even Number");

} else {
    console.log("odd Number");
}

// else-if

let marks = 100;
if (marks >= 90) {
    console.log("Grade : A");
} else if (marks >= 70) {
    console.log("Grade : B ");
} else if (marks >= 50) {
    console.log("Gread : c");
}
else if (marks <= 33) {
    console.log("Fail");
}
else {
    conaole.log("you are not Student in this college");
}

// Switch Statement

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

/*
    2.Looping Statement
    a.for - Runs a block a fixed number of times.
    b.while - Runs while the condition is true.
    c.do-while - Runs code at least once, even if condition is false.
*/
// a. for
let name = "Hello";
for (let i = 1; i <= 5; i++) {
    console.log(name);

}
// table 19

let num = 19;
let i;
for (i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}


// 7 table

let num1 = 7;
for(let i = 1 ; i <= 10; i++){
    console.log(`${num1} * ${i} = ${num1 * i}`);

}


 

// sum count

let sum = 0;
for (i = 1; i <= 10; i++) {
    console.log(`${sum} + ${i} = ${sum + i}`);
}

//  Bill

let prices = [120, 230, 150, 200];
let total = 0;

for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}

console.log("Total Bill = ₹" + total);

// matrix
let matrix =[
    [2.,3,4],
    [5,6,7],
    [7,8,9]
]
console.log(matrix)
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i].join(" "));
}


// b. while loop
 let seconds = 5;

while (seconds > 0) {
  console.log("Countdown:", seconds);
  seconds--;
}

console.log("Time’s up!");

// do-while


/*
    3.Jump Statement
    a.break - Stops the loop immediately.
    b.continue - Skips the current iteration and continues with the next one.
*/