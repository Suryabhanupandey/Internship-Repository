//Homework
/*keyboard events
keydown, keyup, keypress
*/


// keydown / keyup /keypress in keyboard event
let inputBox = document.getElementById("inputBox");
let msg = document.getElementById("msg");

inputBox.addEventListener("keydown", () => {
    msg.innerHTML = "Key Down — Key is being pressed";
});

inputBox.addEventListener("keyup", () => {
    msg.innerHTML = "Key Up — Key released";
});

inputBox.addEventListener("keypress", () => {
    msg.innerHTML = "Key Press";
});

//mouse event
let box = document.getElementById("box");
box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "orange";
});

box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "lightblue";
});