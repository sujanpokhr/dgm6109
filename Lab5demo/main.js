"use strict";

document.getElementById("drawBtn").addEventListener("click", function() {
  // Clear old drawing
  d3.select("#canvas").selectAll("*").remove();

  // Create SVG area
  const svg = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

  // Get user setting
  const showOrigin = document.getElementById("showOrigin").value === "true";

  // Draw the dog centered in the canvas
  dog(svg, 250, 250, showOrigin);
});
