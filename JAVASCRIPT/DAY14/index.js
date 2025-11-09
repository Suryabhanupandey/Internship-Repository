let form = document.getElementById("formaction");
let inputName = document.getElementById("name");
let inputNumber = document.getElementById("phone");
let inputMsg = document.getElementById("msg");
let output = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop form from reloading

  // Get values
  let nameValue = inputName.value;
  let numberValue = inputNumber.value;
  let msgValue = inputMsg.value;

  // Display them together
  output.innerText = `Name: ${nameValue}\nPhone: ${numberValue}\nMessage: ${msgValue}`;
});

// change
  const city = document.getElementById("city");

  city.addEventListener("change", () => {
    alert("You selected: " + city.value);
  });


