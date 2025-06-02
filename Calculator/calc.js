let display = document.getElementById("display");
let currentInput = "0";

function appendToDisplay(value) {
  if (currentInput === "0" && value !== ".") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = "0";
  display.textContent = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    display.textContent = currentInput;
  } catch (error) {
    display.textContent = "False";
    currentInput = "0";
  }
}
