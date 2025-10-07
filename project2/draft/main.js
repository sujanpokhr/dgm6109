"use strict";

let combo, quantity, zipcode;

document.getElementById("submit").addEventListener("click", processForm);

document.getElementById("reset").addEventListener("click", function () {
  clear();
  document.getElementById("submit").toggleAttribute("hidden");
  document.getElementById("reset").toggleAttribute("hidden");
});

function processForm() {
  combo = document.getElementById("combo").value;
  quantity = Number(document.getElementById("quantity").value);
  zipcode = document.getElementById("zipcode").value.trim();

  let evaluationCompleted = false;

  if (validateData()) {
    evaluationCompleted = evaluateAnswers();
  }

  if (evaluationCompleted) {
    document.getElementById("submit").toggleAttribute("hidden");
    document.getElementById("reset").toggleAttribute("hidden");
  } else {
    rule();
  }
}

/* Validate user input */
function validateData() {
  // Ensure all required fields are entered properly
  if (combo === "") {
    output("Please select a combo.");
    return false;
  }

  if (isNaN(quantity) || quantity <= 0 || !Number.isInteger(quantity)) {
    output("Please enter a whole number greater than 0 for quantity.");
    return false;
  }

  if (!/^[0-9]{5}$/.test(zipcode)) {
    output("Please enter a valid 5-digit ZIP code.");
    return false;
  }

  return true;
}

/* Evaluate order logic, apply exceptions and discounts */
function evaluateAnswers() {
  let price = 0;

  if (combo === "pizza") price = 12;
  else if (combo === "burger") price = 8;
  else if (combo === "taco") price = 10;

  // Exception: Pizza & Salad not available in ZIP starting with 9
  if (combo === "pizza" && zipcode.startsWith("9")) {
    output("Due to the e. coli outbreak, Pizza & Salad is not available in this region.");
    return false;
  }

  // Calculate total price
  let total = price * quantity;
  let discountApplied = false;

  // Apply 25% discount
  if ((combo === "pizza" || combo === "burger") && quantity >= 3) {
    total *= 0.75;
    discountApplied = true;
  }

  // Format as $D.CC
  let finalPrice = `$${total.toFixed(2)}`;

  // Output final result
  let message = `Your order of ${quantity} ${combo.replace("&", "and")} will be available at our store location in ZIP code ${zipcode}. You will be charged ${finalPrice} when you pick it up.`;

  if (discountApplied) {
    message += " This includes a 25% discount for ordering 3 or more of this item.";
  }

  output(message);
  return true;
}

/* Display message to user */
function output(msg) {
  document.getElementById("output").textContent = msg;
}

/* Clear previous output */
function clear() {
  document.getElementById("output").textContent = "";
}
