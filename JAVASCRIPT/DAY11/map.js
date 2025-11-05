/*
    Map :
        map() is an array method that:
        Creates a new array
        Runs a function on each element of the original array
        Does not change (mutate) the original array
    Syntax :
            array.map(function(element, index, array) {
                // return something
            })
        
         Parameter | Meaning                                     
        element : The current element being processed         
        index :(Optional) The index of the current element 
        array : (Optional) The array being mapped           

*/

//  Used to generate random numbers
// Generate random number between 0 and 1
console.log(Math.random());

// Random number between 1 and 10
const randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

/*
filter :
In JavaScript, the filter() method is used to create a new array that contains only the elements that pass a test (condition) defined by a callback function.

systax :
        array.filter(function(element, index, array) {
  // return true to keep the element
});

*/
// ✅ Example 1: Filter numbers greater than 10
const numbers = [5, 10, 15, 20, 25];
const result = numbers.filter(num => num > 10);
console.log(result); // Output: [15, 20, 25]

// Filter even numbers
const nums = [1, 2, 3, 4, 5, 6];
const even = nums.filter(n => n % 2 === 0);
console.log(even); // Output: [2, 4, 6]

/*
 Reduce() :
    The reduce() method is used to reduce (combine) all elements of an array into a single value — like getting a total, average, or building a new object/array.

systax :
        array.reduce(function(accumulator, currentValue, index, array) {
            // return the new accumulator value
        }, initialValue);

    Parameters:
        accumulator → The result carried over from the previous iteration.
        currentValue → The current element being processed.
        index (optional)
        array (optional)
        initialValue → The starting value for the accumulator.    
*/
// ✅ Example 1: Sum of all numbers
const number = [1, 2, 3, 4, 5];
const total = number.reduce((sum, num) => sum + num, 0);
console.log(total); // Output: 15

// ✅ Example 2: Find maximum number
const num = [10, 25, 5, 40, 15];
const max = num.reduce((a, b) => (a > b ? a : b));
console.log(max); // Output: 40

