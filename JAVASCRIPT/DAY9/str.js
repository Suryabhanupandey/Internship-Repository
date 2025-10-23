/*
      String :
                A string is a sequence of characters (letters, numbers, or symbols) used to represent text.
                In JavaScript, strings are written inside quotes.

*/
  
let str ="Surya";
for(let i=0;i<str.length;i++){
    console.log(str[i]);
}

/*
1. .length : Returns the number of characters in a string. 
*/
let str1 = "JavaScript";
console.log(str.length); 


/*
2.  .charAt(index) : Returns the character at a given index (index starts at 0).
*/
let str2 = "hello";
console.log(str.charAt(1));

/*
3. .trim() :  Removes spaces from both ends.
    .trimStart() and .trimEnd() :Removes spaces only from start or end.
*/
let str3 = "   Hello World!   ";
console.log(str.trimStart()); // removes start spaces
console.log(str.trimEnd());   // removes end spaces

/*
4. .slice(start, end) :Extracts part of a string between start and end index (end not included).
*/

let str5 = "JavaScript";
console.log(str.slice(0, 4));

/*
 5.  .concat("text"):Joins (concatenates) strings.
*/
let str6 = "Hello";
let str7 = "World";
console.log(str1.concat(" ", str2));

/*
6. .replace("old", "new") : Replaces first occurrence of text.
*/
let clas = "I like Java";
console.log(clas.replace("Java", "Python"));

// 7. .substring(start, end) : Get first name from full name.
let fullname = "Surya Bhanu Pandey";
console.log(fullname.substring(0, 5));
 
//example

let username = "  Surya  ";
let email = "surya@gmail.Com";

// Clean and format
username = username.trim();
email = email.toLowerCase();

if(email.includes("@gmail.com")){
  console.log(`Welcome ${username.toUpperCase()}!`);
}
