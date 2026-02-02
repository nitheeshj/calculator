// 1. Grab DOM elements
let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let clearBtn = document.getElementById("clear");
let equalsBtn = document.getElementById("equals");

// 2. Function definitions
function press(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// 3. Attach event listeners

buttons.forEach(btn => {
  btn.addEventListener("click", function () {
    let val = btn.getAttribute("data-value");
    if (val) press(val);
  });
});

clearBtn.addEventListener("click", clearDisplay);
equalsBtn.addEventListener("click", calculate);
