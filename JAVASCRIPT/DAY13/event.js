 
    // Event handler for button click
    document.getElementById("btn").addEventListener("click", function() {
      // Get input values
      let val1 = document.getElementById("input1").value;
      let val2 = document.getElementById("input2").value;
      let val3 = document.getElementById("input3").value;
      let val4 = document.getElementById("input4").value;

      // Combine and print
      document.getElementById("output").innerText =
        "You entered: " + val1 + ", " + val2 + ", " + val3 + ", " + val4;
    });
 
