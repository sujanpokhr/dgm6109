"use strict";

// === Available Drawings ===
let drawings = [
  { name: "Dog (Sujan Pokhrel)", func: dog },
  { name: "Ladybug (Qing Dan)", func: ladybug },
  { name: "Fish ( Liliana )", func: fish },
  { name: "Butterfly (Harsh Kumar)", func: butterfly }
];

// === Populate Dropdowns ===
for (let i = 1; i <= 4; i++) {
  let select = document.getElementById("drawing" + i);
  drawings.forEach(d => {
    let option = document.createElement("option");
    option.text = d.name;
    option.value = d.name;
    select.appendChild(option);
  });
}

// === Helper: Draw pink origin point ===
function showOriginPoint(svg, x, y) {
  svg.append("circle")
    .attr("cx", x)
    .attr("cy", y)
    .attr("r", 5)
    .attr("fill", "deeppink")
    .attr("stroke", "black")
    .attr("stroke-width", 1);
}

// === Handle Draw Button ===
document.getElementById("drawButton").addEventListener("click", function() {
  let svg = d3.select("#canvas");
  svg.selectAll("*").remove(); // Clear previous drawings

  // ✅ Read origin selector value
  let originChoice = document.getElementById("originSelect").value;
  let showOrigin = originChoice === "yes"; // true if Yes selected

  // Get selected drawings
  let selectedDrawings = [
    document.getElementById("drawing1").value,
    document.getElementById("drawing2").value,
    document.getElementById("drawing3").value,
    document.getElementById("drawing4").value
  ];

  // Layout positions
  let positions = [
    { x: 200, y: 180 },
    { x: 650, y: 180 },
    { x: 200, y: 420 },
    { x: 650, y: 420 }
  ];

  // Draw each
  selectedDrawings.forEach((sel, i) => {
    let d = drawings.find(d => d.name === sel);
    if (d) {
      d.func(svg, positions[i].x, positions[i].y, showOrigin);
      if (showOrigin) showOriginPoint(svg, positions[i].x, positions[i].y);
    }
  });
});
