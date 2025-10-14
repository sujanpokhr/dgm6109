"use strict";

/**
 * Displays a message to the user.
 * @param {string} message - The message to display (can include HTML tags)
 * @param {boolean} success - Whether the message indicates success
 */
function output(message, success = false) {
  const display = document.getElementById("output");
  display.innerHTML = message; // ✅ ensures HTML tags render properly
  display.style.color = success ? "green" : "red";
}

/**
 * Clears all form fields and output area.
 */
function clear() {
  document.getElementById("combo").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("zipcode").value = "";
  document.getElementById("output").innerHTML = "";
}
