/*
 1. setTimeout() — Run code after a delay
     Definition:
        setTimeout() runs a function once, after a given time (in milliseconds).
*/

console.log("Start");
setTimeout(() => {
  console.log("Hello after 3 seconds");
}, 3000);
console.log("End");


/*
2. setInterval() — Run code repeatedly after intervals
    Definition:
        setInterval() runs a function again and again, after every given interval (in milliseconds).
*/
let counter = 0;

let repeat = setInterval(() => {
  counter++;
  console.log("Running:", counter);

  if (counter === 5) {
    clearInterval(repeat); // stops after 5 times
  }
}, 1000);




 
    function showTime() {
      let time = new Date();
      let h = time.getHours();
      let m = time.getMinutes();
      let s = time.getSeconds();

      // Add 0 before single digits
      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;

      document.getElementById("clock").textContent = `${h}:${m}:${s}`;
    }

    // Run function every second
    setInterval(showTime, 1000);

    // Call once immediately so it doesn’t wait 1 second to start
    showTime();







setTimeout(() =>{
     console.log("hello")
},1000);

let btn = document.getElementById('btn');

btn.addEventListener('click',() =>{
    clearTimeout(setTimeout)
    console.log("Set time out .....")
});