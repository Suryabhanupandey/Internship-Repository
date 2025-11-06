// let result = document.querySelector('.displayResult');
// let generateBtn = document.getElementById('GenerateQr');

// generateBtn.addEventListener("click", () => {
//   generateQR();
// });

// async function generateQR() {
//   let inputValue = document.getElementById('text-field').value.trim();

//   if (inputValue === "") {
//     alert("Please enter text or URL to generate QR!");
//     return;
//   }

//   let urlAPI = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`;

//   // Clear previous QR if any
//   result.innerHTML = "Generating QR Code...";

//   // Using fetch() to get the image from API
//   try {
//     const response = await fetch(urlAPI);
//     if (!response.ok) throw new Error("QR generation failed");

//     const blob = await response.blob(); // convert response to image data
//     const imgUrl = URL.createObjectURL(blob);

//     result.innerHTML = ""; // clear loading text

//     const img = document.createElement("img");
//     img.src = imgUrl;
//     img.alt = "QR Code";

//     result.appendChild(img);
//   } catch (error) {
//     result.innerHTML = "❌ Failed to generate QR. Please try again!";
//   }
// }


let result = document.querySelector('.displayResult');
let generateBtn = document.getElementById('GenerateQr');

// 🧠 When the page loads, check if data exists in localStorage
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

  // 💾 Save input to local storage
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
