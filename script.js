const display = document.getElementById("display");

function appendValue(input) {
  if (display.value === "0" || display.value === "Error") {
    display.value = input;
  } else {
    display.value += input;
  }
}

function clearDisplay() {
  display.value = "0";
}

function toggleSign() {
  if (display.value !== "0" && display.value !== "Error") {
    display.value = String(parseFloat(display.value) * -1);
  }
}

function calculateResult() {
  try {
    let expression = display.value.replace(/%/g, "/100");
    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (!isNaN(key) || "+-*/.%".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1) || "0";
  } else if (key === "Escape") {
    clearDisplay();
  }
});