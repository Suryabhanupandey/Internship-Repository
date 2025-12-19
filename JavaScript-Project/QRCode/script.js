let result = document.querySelector('.displayResult');

let generateBtn = document.getElementById('GenerateQr');

generateBtn.addEventListener("click", ()=>{
    generateQR();
})

function generateQR(){
    let inputValue = document.getElementById('text-field');
    let inputSize = document.getElementById('inputSize');
    let urlAPI = `https://api.qrserver.com/v1/create-qr-code/?size=${inputSize.value}&data=${inputValue.value}`;

    result.innerHTML = '';
    let image = document.createElement('img')
    image.setAttribute("src", `${urlAPI}`);
    result.appendChild(image);

}

/* localStorage :
        localStorage is a browser storage that stores key-value pairs.
        Data persists even after closing the browser.
        Max size ~5MB.
      Syntax:
        // Save data
        localStorage.setItem("key", "value");

        // Retrieve data
        let value = localStorage.getItem("key");

        // Remove data
        localStorage.removeItem("key");

        // Clear everything
        localStorage.clear();

*/
// Load last QR from localStorage
window.addEventListener('load', () => {
    const savedText = localStorage.setItem('qrText');
    const savedSize = localStorage.getItem('qrSize');

    if(savedText) document.getElementById('text-field').value = savedText;
    if(savedSize) document.getElementById('inputSize').value = savedSize;

    if(savedText) generateQR(); // generate last QR automatically
});
