function appearToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function clearElement() {
  var currentDisplay = document.getElementById("display").value;
  document.getElementById("display").value = currentDisplay.slice(0, -1);
}

function calculate() {
  try {
    // Check if the result includes a percentage calculation
    var displayValue = document.getElementById("display").value;

    if (displayValue.includes("%")) {
      // Extract the partial value and percentage
      const [partialValue, percentage] = displayValue.split("+");

      // Calculate the result with percentage
      const resultValue =
        parseFloat(partialValue) +
        (parseFloat(partialValue) * parseFloat(percentage)) / 100;

      // Set the result
      document.getElementById("display").value = resultValue.toString();
    } else {
      // Use eval for other calculations
      document.getElementById("display").value = eval(displayValue).toString();
    }
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
