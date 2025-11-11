const palette = document.getElementById("palette");
const message = document.getElementById("message");

// Generate random color in HEX format
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Generate color palette
function generatePalette() {
  palette.innerHTML = "";
  message.textContent = "";

  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const div = document.createElement("div");
    div.classList.add("color");
    div.style.background = color;
    div.innerHTML = `<p>${color}</p>`;

    // Copy color on click
    div.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
      message.textContent = ` Copied ${color} to clipboard!`;
    });

    palette.appendChild(div);
  }
}
generatePalette();
