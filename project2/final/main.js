"use strict";

/**
 * processForm()
 * Main controller: reads form values, validates them, and either displays
 * all error messages together or calls evaluateAnswers() to process.
 */
function processForm() {
  const combo = document.getElementById("combo").value.trim();
  const quantityRaw = document.getElementById("quantity").value;
  const zipcode = document.getElementById("zipcode").value.trim();
  const quantity = Number(quantityRaw);

  output("", true); // clear any previous message

  const errors = [];

  // Combo validation
  if (combo === "") {
    errors.push("Please select a combo.");
  }

  // Quantity validation
  if (quantityRaw === "") {
    errors.push("Quantity cannot be blank.");
  } else if (isNaN(quantity)) {
    errors.push("Quantity must be a number.");
  } else if (!Number.isInteger(quantity)) {
    errors.push("Quantity must be a whole number.");
  } else if (quantity <= 0) {
    errors.push("Quantity must be greater than 0.");
  }

  // ZIP validation (no regex version)
  if (zipcode.length !== 5 || !zipcode.split("").every(c => c >= "0" && c <= "9")) {
    errors.push("ZIP code must be exactly 5 digits (0–9).");
  }

  if (errors.length > 0) {
    let html = "⚠️ Please fix the following error(s):<br><ul>";
    for (let err of errors) html += "<li>" + err + "</li>";
    html += "</ul>";
    output(html, false);
    return false;
  }

  return evaluateAnswers(combo, quantity, zipcode);
}

/**
 * evaluateAnswers(combo, quantity, zipcode)
 * Applies pricing, discounts, and special rules; outputs the result.
 */
function evaluateAnswers(combo, quantity, zipcode) {
  const prices = { pizza: 12, burger: 8, taco: 10 };
  let price = prices[combo];
  let total = price * quantity;
  let discountApplied = false;

  // Pizza unavailable for ZIP starting with 9
  if (combo === "pizza" && zipcode.charAt(0) === "9") {
    output("🚫 Pizza & Salad is not available in ZIP codes starting with 9.", false);
    return false;
  }

  // Discount rule
  if ((combo === "pizza" || combo === "burger") && quantity >= 3) {
    total *= 0.75;
    discountApplied = true;
  }

  const finalPrice = `$${total.toFixed(2)}`;

  // Pluralization
  const nameMap = { pizza: "Pizza & Salad", burger: "Hamburger & Fries", taco: "Taco Platter" };
  const itemLabel = quantity === 1 ? nameMap[combo] : nameMap[combo] + "s";

  // Final message
  let msg = `✅ Your order of ${quantity} ${itemLabel} will be available at our store in ZIP code ${zipcode}.<br>`;
  msg += `You will be charged ${finalPrice} when you pick it up.`;
  if (discountApplied) msg += " 🎉 25% discount applied!";
  msg += "<br><br>Thank you for ordering with us!";

  output(msg, true);

  document.getElementById("submit").toggleAttribute("hidden");
  document.getElementById("reset").toggleAttribute("hidden");
  return true;
}

/**
 * Event bindings
 */
document.getElementById("submit").addEventListener("click", processForm);
document.getElementById("reset").addEventListener("click", () => {
  clearForm();
  document.getElementById("submit").toggleAttribute("hidden");
  document.getElementById("reset").toggleAttribute("hidden");
});

// Prevent negative quantity
document.getElementById("quantity").addEventListener("input", function () {
  if (this.value < 0) this.value = 0;
});
