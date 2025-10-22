/*
1.  Convert Temperature
     Declare a variable "temperature" and initialise it with a value of 25.5 
    (in Celsius) and Print it in Celsius and Kelvin (add 273 to temperature in Celsius).

    [Important Note: Follow the output format exactly as given, with a single space between words, characters, and numbers.]
*/

// solved
let temperature = 25.5;
let kelvin = temperature + 273;
console.log(`Celsius : ${temperature} Kelvin : ${kelvin}`);

/*
2.  Print total minutes and seconds Declare a variable hour and initialize it with the value 
     5 Then, calculate and print the total number of minutes and seconds present in this hour.

*/

// Solved
let hour = 5;
let minutes = hour * 60;
let seconds = minutes * 60;
console.log(minutes,seconds);

/*
 3. Convert speed
        Create a variable named speed1 and assign it the value 36, representing speed in kilometers per hour.  Then, convert and display this speed in meters per second.
        [Note: 1 km/h = 5/18 m/s]


*/

//Solved

let  speed1 = 36;
let speed = 36 * (5/18);
console.log(`Speed : ${speed} m/s`);
