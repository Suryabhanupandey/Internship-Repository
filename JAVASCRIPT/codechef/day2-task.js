// Fibonacci Series
// 1.Using a For Loop

let n = 10;  
let a = 0, b = 1;

console.log("Fibonacci Series:");
for (let i = 1; i <= n; i++) {
  console.log(a);
  let next = a + b;
  a = b;
  b = next;
}

// 2.Using While Loop
let num = 10;
let c = 0, d = 1, count = 0;

console.log("Fibonacci Series:");
while (count < num) {
  console.log(c);
  let next = c + d;
  c = d;
  d = next;
  count++;
}

// 3.Storing Fibonacci in an Array

function fibonacciSeries(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacciSeries(10));
