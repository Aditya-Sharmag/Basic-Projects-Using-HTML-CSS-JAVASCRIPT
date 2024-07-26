let currentDisplayValue = "";
function updateValue() {
  document.querySelector(".display").value = currentDisplayValue;
}
function clearDisplay() {
  document.querySelector(".display").value = "";
  currentDisplayValue = "";
}
function calculate() {
  let answer = eval(currentDisplayValue);
  document.querySelector(".display").value = answer;
  currentDisplayValue = answer;
}
