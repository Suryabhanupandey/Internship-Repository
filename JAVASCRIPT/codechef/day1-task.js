/*
    Print factorial
            Write a program that uses a while loop to find the factorial of a given number.
*/

// 1.
let number = parseInt(5);
let fact = 1;
let i = 1;
while (i <= number) {
    fact *= i;
    i++;
}
console.log(`factorial of ${5} is ${fact}`);

/*
 2.
Find the number of digits
                Given an integer N, Calculate and print the number of digits present in N.
        Constraints :
              1≤N≤10000
*/
let N = 1234; // Example input
let count = 0;
let num = N;

while (num > 0) {
  num = Math.floor(num / 10); // Remove last digit
  count++;                     // Increase count
}

console.log(`Number of digits in ${N} is ${count}`);

/*
3. Product and Sum of digits
        Given an integer N, Calculate and print the sum and product of its digit.

        Input Format
        The first and only line of input will contain a single positive integer 
        N <= 109.
        Output Format
        Print the sum and product of digits of 
        N on single line with a space between them.

        Explanation:
            For number = 22
            sum of digits = 2 + 2 = 4
            product of digits = 2 * 2 = 4
*/
  let Nu = parseInt(22);
 let num1 = Nu;

let sum = 0;
let product = 1;

while (num1 > 0) {
  let digit = num1 % 10; // Get last digit
  sum += digit;         // Add to sum
  product *= digit;     // Multiply for product
  num1 = Math.floor(num1 / 10); // Remove last digit
}

console.log(`2 + 2 = ${sum}, 2 * 2 = ${product}`);
