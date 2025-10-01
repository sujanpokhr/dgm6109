'use strict';

// Event listener for button
document.getElementById("submit").addEventListener("click", function () {
  let fahrenheit = parseFloat(document.getElementById("inputF").value);
  let conversionType = document.getElementById("conversionChoice").value;

  // Clear previous output
  document.getElementById("output").innerHTML = "";

  // Validate input
  if (isNaN(fahrenheit)) {
    output("Please enter a valid number for Fahrenheit.");
    return;
  }

  // Convert
  let celsius = (fahrenheit - 32) * 5 / 9;
  let kelvin = celsius + 273.15;

  // Show result
  if (conversionType === "c") {
    output(`Fahrenheit: ${fahrenheit.toFixed(2)}, Celsius: ${celsius.toFixed(2)}`);
  } else {
    output(`Fahrenheit: ${fahrenheit.toFixed(2)}, Kelvin: ${kelvin.toFixed(2)}`);
  }
});
/*
 Discussion of Choice:
 I prefer using the if/else version because it makes the code cleaner and easier to read.
 Since only one condition can be true at a time (either Celsius or Kelvin), if/else
 makes sure that only one block of code will run. This avoids doing extra checks that
 are not needed.
*/




