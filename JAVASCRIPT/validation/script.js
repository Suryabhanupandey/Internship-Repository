    
        const form = document.getElementById("myForm");
        const nameField = document.getElementById("name");
        const emailField = document.getElementById("email");
        const passField = document.getElementById("password");

        form.addEventListener("submit", function(e) {
            e.preventDefault();

            let valid = true;

            if (nameField.value.trim() === "") {
                document.getElementById("nameError").style.display = "block";
                valid = false;
            } else {
                document.getElementById("nameError").style.display = "none";
            }

            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailField.value)) {
                document.getElementById("emailError").style.display = "block";
                valid = false;
            } else {
                document.getElementById("emailError").style.display = "none";
            }

            if (passField.value.length < 6) {
                document.getElementById("passwordError").style.display = "block";
                valid = false;
            } else {
                document.getElementById("passwordError").style.display = "none";
            }

            if (valid) {
                alert("Form Submitted Successfully!");
                form.reset();
            }
        });
   