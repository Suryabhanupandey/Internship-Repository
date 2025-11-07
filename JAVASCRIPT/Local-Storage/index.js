 /*
 🧠 What is Local Storage?

        Local Storage is part of the Web Storage API that lets you store data in the browser permanently (until the user clears it).
        Data is stored in key–value pairs.
        It persists even after you close the browser.
        It stores strings only (you can use JSON.stringify() and JSON.parse() for objects).

    JSON.stringify():
        JSON.stringify() converts a JavaScript object or array into a string.
    JSON.parse():
        JSON.parse() converts a JSON string (text) back into a JavaScript object.

        It’s mainly used to retrieve structured data (objects or arrays) that were stored earlier using JSON.stringify() — for example, in localStorage, APIs, or files.
 */

    const input = document.getElementById("username");
    const display = document.getElementById("display");

    // When user clicks Save
    document.getElementById("saveBtn").addEventListener("click", () => {
      let name = input.value.trim();

      if (name === "") {
        alert("Please enter your name!");
        return;
      }

      // Create an object with user details
      let user = {
        name: name,
        age: 20,
        course: "BCA"
      };

      // Store both name and object in localStorage
      localStorage.setItem("username", name);
      localStorage.setItem("user", JSON.stringify(user));

      alert("Data saved successfully!");
      input.value = "";
    });

    // When user clicks Show
    document.getElementById("showBtn").addEventListener("click", () => {
      let storedName = localStorage.getItem("username");
      let userData = JSON.parse(localStorage.getItem("user"));

      if (storedName && userData) {
        display.innerHTML = `
          <strong>Welcome back, ${storedName}!</strong><br>
          <b>Your Details:</b><br>
          Name: ${userData.name}<br>
          Age: ${userData.age}<br>
          Course: ${userData.course}
        `;
      } else {
        display.textContent = "No data found in local storage.";
      }
    });


    // ❌ Remove Data
    document.getElementById("removeBtn").addEventListener("click", () => {
      localStorage.removeItem("username");
      localStorage.removeItem("user");
      display.textContent = "Data removed successfully!";
      alert("Local storage data has been deleted.");
    });