/*
  API = Application Programming Interface.
        It is a set of rules and tools that allows different software applications to communicate with each other.
      
  Fetch- it is basically used to sent & receive the request &response betWeen two servers using vai API 
 Notes:Fetch allways return the  promises.
 Promise is type of object which basically use  to 
    in case of fatch it allways return the promiss
    Promises - A Promise is an object that represents the eventual completion or failure of an asynchronous     operation.It’s used to handle asynchronous tasks like fetching data, reading files, etc.

   ** Promise States
    State          Description                                        
    Pending   -     The initial state (neither fulfilled nor rejected) 
    Fulfilled  -      The operation completed successfully               
    Rejected    -    The operation failed                               
        
*/
// ** Basic Structure
// new Promise((resolve, reject) => {
//   // async code
// })
//   .then((result) => { /* success */ })
//   .catch((error) => { /* failure */ })
//   .finally(() => { /* always runs */ });

/* 
    ** Methods in Promises
    then() -Executed when the promise is resolved (fulfilled).
    catch() - Executed when the promise is rejected.
    finally() - Runs always, whether resolved or rejected.


*/

// Example with setTimeout()
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Task done "), 2000);
// });

// promise.then(console.log);

// let promise = new Promise((resolve,reject) =>{
//   console.log("hello Surya")
//   resolve("Resolve");
// });
// promise.then(() =>{
//   console.log("resolve");
// }).catch(() =>{
//   console.log("reject");
// })
// console.log(promise);



// let promise = new Promise((resolve,reject) =>{
//   let isEven = 25;
//   if(isEven % 2 === 0 ){
//     console.log("Even")
//   }
//   else{
//     console.log("odd")
//   }
// });
// promise.then(() =>{
//   console.log("resolve");
// }).catch(() =>{
//   console.log("reject");
// })
// console.log(promise);

let loadBtn = document.getElementById("loadBtn");

loadBtn.addEventListener("click", () => {
  fetch('https://api.github.com/users/Suryabhanupandey')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data); // For debugging
      document.getElementById("avatar").src = data.avatar_url;
      document.getElementById("name").textContent = data.name || "No Name Found";
      document.getElementById("bio").textContent = data.bio || "No Bio Available";
      document.getElementById("followers").textContent = data.followers;
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to fetch profile!");
    });
});
