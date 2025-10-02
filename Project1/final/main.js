"use strict";

/* Canvas setup */
let drawheight = 500;
let drawwidth = 500;

let drawing = d3.select("#canvas")
  .append("svg")
  .attr("width", drawwidth)
  .attr("height", drawheight);

let border = drawing.append("rect")
  .attr("width", drawwidth)
  .attr("height", drawheight)
  .attr("fill", "lightblue")
  .attr("stroke", "red");

let dogX, dogY; /* Origin point for drawing dog head */

/* Function to draw dog image */

function drawImage() {
  // Clear old drawing before redrawing
  drawing.selectAll("*").remove();

  // Redraw border
  border = drawing.append("rect")
    .attr("width", drawwidth)
    .attr("height", drawheight)
    .attr("fill", "lightblue")
    .attr("stroke", "red");

  // Get user input values
  dogX = parseInt(document.getElementById("xInput").value);
  dogY = parseInt(document.getElementById("yInput").value);
  let choice = document.getElementById("choice").value;

  /* ORIGIN POINT: Center of dog head at (dogX, dogY). 
        Default values in input boxes are 150, 200 */

  /* --- Head --- */
  drawing.append("circle")
    .attr("cx", dogX)
    .attr("cy", dogY)
    .attr("r", 80)
    .attr("fill", "#654321")
    .attr("stroke", "black");

  /* --- Cheeks --- */
  drawing.append("circle")
    .attr("cx", dogX - 80)
    .attr("cy", dogY + 60)
    .attr("r", 40)
    .attr("fill", "#A67C52");

  drawing.append("circle")
    .attr("cx", dogX + 60)
    .attr("cy", dogY + 61)
    .attr("r", 40)
    .attr("fill", "#A67C52");

  /* --- Eyes --- */
  drawing.append("circle")
    .attr("cx", dogX - 50)
    .attr("cy", dogY - 30)
    .attr("r", 10)
    .attr("fill", "black")
    .attr("stroke", "black");

  drawing.append("circle")
    .attr("cx", dogX + 50)
    .attr("cy", dogY - 30)
    .attr("r", 10)
    .attr("fill", "black")
    .attr("stroke", "black");

  /* --- Forehead lines --- */
  drawing.append("line")
    .attr("x1", dogX - 20)   // 130 in draft
    .attr("y1", dogY - 80)   // 120
    .attr("x2", dogX + 10)   // 160
    .attr("y2", dogY - 50)   // 150
    .attr("stroke", "black")
    .attr("stroke-width", 3);

  drawing.append("line")
    .attr("x1", dogX + 40)   // 190
    .attr("y1", dogY - 80)   // 120
    .attr("x2", dogX + 10)   // 160
    .attr("y2", dogY - 50)   // 150
    .attr("stroke", "black")
    .attr("stroke-width", 3);

  /* --- Ears --- */
  drawing.append("polygon")
    .attr("points",
      (dogX - 60) + "," + (dogY - 50) + " " +
      (dogX - 120) + "," + (dogY) + " " +
      (dogX - 100) + "," + (dogY - 100))
    .attr("fill", "#A67C52")
    .attr("stroke", "black");

  drawing.append("polygon")
    .attr("points",
      (dogX + 75) + "," + (dogY - 100) + " " +
      (dogX + 120) + "," + (dogY - 20) + " " +
      (dogX + 60) + "," + (dogY - 50))
    .attr("fill", "#A67C52")
    .attr("stroke", "black");

  /* --- Nose --- */
  drawing.append("circle")
    .attr("cx", dogX - 4)
    .attr("cy", dogY + 15)
    .attr("r", 20)
    .attr("fill", "black");

  /* --- Mouth (conditional) --- */
  /* If "open", draw open mouth with teeth.
     If "closed", draw simple line for closed mouth. */
  if (choice === "open") {
    // Mouth rectangle
    drawing.append("rect")
      .attr("x", dogX - 80)
      .attr("y", dogY + 20)
      .attr("width", 140)
      .attr("height", 80)
      .attr("fill", "#A67C52");

    // Teeth container
    drawing.append("rect")
      .attr("x", dogX - 80)
      .attr("y", dogY + 60)
      .attr("width", 135)
      .attr("height", 40)
      .attr("fill", "#E5A552")
      .attr("stroke", "#A67C52")
      .attr("stroke-width", 2);

    // Teeth left
    drawing.append("polygon")
      .attr("points",
        (dogX - 76) + "," + (dogY + 35) + " " +
        (dogX - 81) + "," + (dogY + 98) + " " +
        (dogX - 50) + "," + (dogY + 60))
      .attr("fill", "white");

    // Teeth right
    drawing.append("polygon")
      .attr("points",
        (dogX + 57) + "," + (dogY + 35) + " " +
        (dogX + 55) + "," + (dogY + 98) + " " +
        (dogX + 30) + "," + (dogY + 60))
      .attr("fill", "white");

    // Teeth line
    drawing.append("line")
      .attr("x1", dogX - 50)
      .attr("y1", dogY + 60)
      .attr("x2", dogX + 30)
      .attr("y2", dogY + 30)
      .attr("stroke", "#A67C52")
      .attr("stroke-width", 2);

  } else {
    // Closed mouth (simple line)
    drawing.append("line")
      .attr("x1", dogX - 50)
      .attr("y1", dogY + 40)
      .attr("x2", dogX + 50)
      .attr("y2", dogY + 40)
      .attr("stroke", "black")
      .attr("stroke-width", 3);
  }
}

/* Button listener */
/* When button is clicked, call drawImage function */
document.getElementById("drawBtn").addEventListener("click", drawImage);
