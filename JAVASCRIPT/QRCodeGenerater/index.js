let result = document.querySelector('.displayResult');
let generateBtn = document.getElementById('GenerateQr');

//  When the page loads, check if data exists in localStorage
window.addEventListener("load", () => {
  let savedText = localStorage.getItem("qrText");
  if (savedText) {
    document.getElementById('text-field').value = savedText;
    showSavedQR(savedText);
  }
});

generateBtn.addEventListener("click", () => {
  generateQR();
});

function generateQR() {
  let inputValue = document.getElementById('text-field');

  if (inputValue.value.trim() === "") {
    alert("Please enter text or URL!");
    return;
  }

  let urlAPI = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue.value}`;

  // Create new QR image
  let img = document.createElement('img');
  img.setAttribute("src", urlAPI);
  img.setAttribute("alt", "QR Code");

  // Clear previous result and show new QR
  result.innerHTML = "";
  result.append(img);

  //  Save input to local storage
  localStorage.setItem("qrText", inputValue.value);
}

// Function to show saved QR on page reload
function showSavedQR(savedValue) {
  let urlAPI = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${savedValue}`;
  let img = document.createElement('img');
  img.setAttribute("src", urlAPI);
  img.setAttribute("alt", "Saved QR Code");
  result.append(img);
}
