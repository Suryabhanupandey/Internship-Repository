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


