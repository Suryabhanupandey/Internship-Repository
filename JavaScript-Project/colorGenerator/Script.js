let colorBox = document.getElementById('colorBox');
let generateBtn = document.getElementById('generateBtn');

function generateColor() {
  const latters = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += latters[Math.floor(Math.random() * latters.length)]

  }
  return color;
}
generateBtn.addEventListener('click', () => {
  let newColor = generateColor();
  colorBox.style.display = "flex";
  colorBox.style.backgroundColor = newColor;
  colorBox.textContent = newColor;
});
