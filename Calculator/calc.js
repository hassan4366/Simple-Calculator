const screen = document.getElementById("screen");
let expression = "";

function press(val) {
  if (expression === "0" || expression === "Error") expression = "";
  expression += val;
  updateScreen();
}

function updateScreen() {
  screen.textContent = expression || "0";
  autoResizeFont();
}

function calculate() {
  try {
    expression = eval(expression).toString();
  } catch {
    expression = "Error";
  }
  updateScreen();
}

function clearScreen() {
  expression = "";
  updateScreen();
}

function deleteLast() {
  expression = expression.slice(0, -1);
  updateScreen();
}

function autoResizeFont() {
  let fontSize = 32;
  screen.style.fontSize = fontSize + "px";
  while (screen.scrollWidth > screen.clientWidth && fontSize > 14) {
    fontSize -= 1;
    screen.style.fontSize = fontSize + "px";
  }
}

window.addEventListener("load", autoResizeFont);
