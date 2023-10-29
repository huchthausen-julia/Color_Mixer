const redInput = document.getElementById("red");
const greenInput = document.getElementById("green");
const blueInput = document.getElementById("blue");
const colorValue = document.getElementById("color-value");
const rcbtn = document.querySelector(".rc-btn");
const bodyEl = document.body;

function updateColor() {
  const red = redInput.value;
  const green = greenInput.value;
  const blue = blueInput.value;

  bodyEl.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  colorValue.textContent = `RGB(${red}, ${green}, ${blue})`;
}

redInput.addEventListener("input", updateColor);
greenInput.addEventListener("input", updateColor);
blueInput.addEventListener("input", updateColor);

updateColor();

rcbtn.addEventListener("click", createRandomColor);

async function createRandomColor() {
  const response = await fetch("https://dummy-apis.netlify.app/api/color");

  if (response.ok) {
    const data = await response.json();

    bodyEl.style.backgroundColor = `rgb(${data.rgb.r}, ${data.rgb.g}, ${data.rgb.b})`;
    colorValue.textContent = `RGB(${data.rgb.r}, ${data.rgb.g}, ${data.rgb.b})`;
  } else {
    console.log("Fehler beim API-Abruf:", response.status, response.statusText);
  }
}
