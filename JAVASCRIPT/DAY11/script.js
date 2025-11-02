/*
strings in javaScript

strings are basically sequence of the characters and it's immutable(unchange).

you can declare the strings in three ways

"", '', ``
*/

// let name = "Barrownz Group";  //This is the string

// let name = 'Barrownz Group';
// let name = `Barrownz Group is a one of the leading IT Company in Lucknow`;

// let nameTwo = BarrownzGroup; this is not a string

// console.log(name);



//String manupulation functions

let arr = [10,20,30,40];

arr[0] = 100;  //array are mutuable it can change

// console.log(arr);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// arr.forEach((elem)=>{
//     //This is the way where you can perform the iterations over the array and access the values.
//   console.log(elem);
// })

let companyName = "Barrownz";

// companyName = "Barrownz Learning Academy"

companyName[0] = "M";  //strings are immutable it cannot be change

// console.log(companyName.charAt())

//Performing the iterations over strings

// console.log(companyName[0]);
// console.log(companyName[1]);
// console.log(companyName[2]);
// console.log(companyName[3]);
// console.log(companyName[4]);
// console.log(companyName[5]);
// console.log(companyName[6]);
// console.log(companyName[7]);


// console.log(companyName.length);

// for(let i=0; i<companyName.length; i++){
//     console.log(companyName[i]);
// }

/*
1. length (property) to check the length of the string

2. charAt(pass the index) it basically return the character of that index.

3. trim() it basically remove the whitespaces from strings

trimStart() It will only remove the spaces from starting of the index.

trimEnd() It will only remove the spaces from the end of the index.

4. slice(fromIndex, toIndex) It basically use to cut the strings into slice.

Note: slice method does not support negative indexes.

5. substring(fromIndex, toIndex) It work similar to the slice method to basically cut the string or create the substring.

Note: There is small difference has trigger between slice method and substring method that is we cannot pass negative indexes inside the slice method but substring method support the negative indexes.

6. includes() It basically use to check specific characters or strings are exist in the current string or not. And basically return the output in bool(true or false).

7. replace() It basically use to replace any specific character inside 

8. concat() It basically use to add the two strings.

9. toUpperCase() It basically use to change the entire string in the uppercase.

10. toLowerCase It basically use to change the entire string in the lowercase.

*/


// console.log(companyName.charAt(0));
// console.log(companyName.length)

// let str2 = "   Barrownz   ";
// console.log(str2.trimStart());
// console.log(str2.trimEnd());


// let str2 = "Barrownz";

// console.log(str2.slice(0, 4));
// console.log(str2.slice(4));

// console.log(str2.substring(-2, 4));

//Note: In case of slice method we basically specify two indexes fromIndex and toIndex.

// let check = "Learning";

// console.log(str2.includes(check));

// console.log(str2);

// let newString = str2.replace("Bar", "Mar")

// console.log(newString);

// console.log(str2.concat(" Hello"))

// console.log(str2.toUpperCase());
// console.log(str2.toLowerCase());


let amount = "I have 2000";

console.log(amount.length);

let extract = amount.slice(7);

extract = Number.parseInt(extract);

console.log(extract);
console.log(typeof extract);




