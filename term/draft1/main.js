"use strict";

// ----------- DATASET -----------
let data = [
  { screenTime: 7, productivity: 3, sleep: 6.5, stress: 3 },
  { screenTime: 8, productivity: 2, sleep: 6, stress: 4 },
  { screenTime: 6, productivity: 4, sleep: 7.5, stress: 2 },
  { screenTime: 9.2, productivity: 1, sleep: 5.5, stress: 5 },
  { screenTime: 5.5, productivity: 4, sleep: 8, stress: 2 },
  { screenTime: 4.8, productivity: 5, sleep: 8.5, stress: 1 },
  { screenTime: 7.8, productivity: 3, sleep: 6.2, stress: 3 },
  { screenTime: 6.5, productivity: 3, sleep: 7, stress: 2 },
  { screenTime: 8.2, productivity: 2, sleep: 6, stress: 4 },
  { screenTime: 5, productivity: 4, sleep: 8, stress: 2 },
  { screenTime: 9, productivity: 1, sleep: 5.5, stress: 5 },
  { screenTime: 4.8, productivity: 5, sleep: 8.5, stress: 1 },
  { screenTime: 7.2, productivity: 2, sleep: 6.5, stress: 4 },
  { screenTime: 5.5, productivity: 4, sleep: 8, stress: 2 }
];

// ------------ SVG SETUP ------------
let width = 1000;
let height = 700;
let centerX = 500;
let centerY = 380;

const svg = d3.select("#chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// ------------ SCALES ------------
const radiusScale = d3.scaleLinear()
  .domain([5, 9])
  .range([100, 200]);

const colorScale = d3.scaleOrdinal()
  .domain([1, 2, 3, 4, 5])
  .range(["#4b8fea", "#8ec5ff", "#ff9f43", "#ff7043", "#d32f2f"]);

const sizeScale = d3.scaleLinear()
  .domain([1, 5])
  .range([15, 35]);

const angleScale = d3.scaleLinear()
  .domain([4, 10])
  .range([0, 2 * Math.PI]);

// ------------ TITLE ------------
svg.append("text")
  .attr("x", centerX)
  .attr("y", 25)
  .attr("text-anchor", "middle")
  .attr("font-size", "22px")
  .attr("font-weight", "bold")
  .text("Screen Time and Wellness");

svg.append("text")
  .attr("x", centerX)
  .attr("y", 48)
  .attr("text-anchor", "middle")
  .attr("font-size", "13px")
  .attr("fill", "#666")
  .text("Exploring the relationship between daily screen time and stress levels");

// ------------ HYPOTHESIS ------------
svg.append("text")
  .attr("x", centerX)
  .attr("y", 75)
  .attr("text-anchor", "middle")
  .attr("font-size", "14px")
  .attr("font-weight", "bold")
  .attr("fill", "#2c3e50")
  .text("Hypothesis:");

svg.append("text")
  .attr("x", centerX)
  .attr("y", 95)
  .attr("text-anchor", "middle")
  .attr("font-size", "12px")
  .attr("fill", "#34495e")
  .text("Higher daily screen time is associated with increased stress levels.");

// ------------ BACKGROUND RINGS ------------
svg.append("circle")
  .attr("cx", centerX)
  .attr("cy", centerY)
  .attr("r", 100)
  .attr("fill", "none")
  .attr("stroke", "#ddd")
  .attr("stroke-width", 1.5);

svg.append("text")
  .attr("x", centerX)
  .attr("y", centerY - 105)
  .attr("text-anchor", "middle")
  .attr("font-size", "10px")
  .attr("fill", "#999")
  .text("5.5h");

svg.append("circle")
  .attr("cx", centerX)
  .attr("cy", centerY)
  .attr("r", 135)
  .attr("fill", "none")
  .attr("stroke", "#ddd")
  .attr("stroke-width", 1.5);

svg.append("text")
  .attr("x", centerX)
  .attr("y", centerY - 140)
  .attr("text-anchor", "middle")
  .attr("font-size", "10px")
  .attr("fill", "#999")
  .text("6.5h");

svg.append("circle")
  .attr("cx", centerX)
  .attr("cy", centerY)
  .attr("r", 170)
  .attr("fill", "none")
  .attr("stroke", "#ddd")
  .attr("stroke-width", 1.5);

svg.append("text")
  .attr("x", centerX)
  .attr("y", centerY - 175)
  .attr("text-anchor", "middle")
  .attr("font-size", "10px")
  .attr("fill", "#999")
  .text("7.5h");

svg.append("circle")
  .attr("cx", centerX)
  .attr("cy", centerY)
  .attr("r", 205)
  .attr("fill", "none")
  .attr("stroke", "#ddd")
  .attr("stroke-width", 1.5);

svg.append("text")
  .attr("x", centerX)
  .attr("y", centerY - 210)
  .attr("text-anchor", "middle")
  .attr("font-size", "10px")
  .attr("fill", "#999")
  .text("8.5h");

// ------------ ANGLE MARKERS ------------
let angle4 = angleScale(4);
svg.append("line")
  .attr("x1", centerX + Math.cos(angle4) * 90)
  .attr("y1", centerY + Math.sin(angle4) * 90)
  .attr("x2", centerX + Math.cos(angle4) * 215)
  .attr("y2", centerY + Math.sin(angle4) * 215)
  .attr("stroke", "#eee")
  .attr("stroke-width", 1);
svg.append("text")
  .attr("x", centerX + Math.cos(angle4) * 230)
  .attr("y", centerY + Math.sin(angle4) * 230)
  .attr("text-anchor", "middle")
  .attr("font-size", "10px")
  .attr("fill", "#666")
  .text("4h");

let angle5 = angleScale(5);
svg.append("line")
  .attr("x1", centerX + Math.cos(angle5) * 90)
  .attr("y1", centerY + Math.sin(angle5) * 90)
  .attr("x2", centerX + Math.cos(angle5) * 215)
  .attr("y2", centerY + Math.sin(angle5) * 215)
  .attr("stroke", "#eee")
  .attr("stroke-width", 1);
svg.append("text")
  .attr("x", centerX + Math.cos(angle5) * 230)
  .attr("y", centerY + Math.sin(angle5) * 230)
  .attr("text-anchor", "middle")
  .attr("font-size", "10px")
  .attr("fill", "#666")
  .text("5h");

let angle6 = angleScale(6);
svg.append("line")
  .attr("x1", centerX + Math.cos(angle6) * 90)
  .attr("y1", centerY + Math.sin(angle6) * 90)
  .attr("x2", centerX + Math.cos(angle6) * 215)
  .attr("y2", centerY + Math.sin(angle6) * 215)
  .attr("stroke", "#eee")
  .attr("stroke-width", 1);
svg.append("text")
  .attr("x", centerX + Math.cos(angle6) * 230)
  .attr("y", centerY + Math.sin(angle6) * 230)
  .attr("text-anchor", "middle")
  .attr("font-size", "10px")
  .attr("fill", "#666")
  .text("6h");

let angle7 = angleScale(7);
svg.append("line")
  .attr("x1", centerX + Math.cos(angle7) * 90)
  .attr("y1", centerY + Math.sin(angle7) * 90)
  .attr("x2", centerX + Math.cos(angle7) * 215)
  .attr("y2", centerY + Math.sin(angle7) * 215)
  .attr("stroke", "#eee")
  .attr("stroke-width", 1);
svg.append("text")
  .attr("x", centerX + Math.cos(angle7) * 230)
  .attr("y", centerY + Math.sin(angle7) * 230)
  .attr("text-anchor", "middle")
  .attr("font-size", "10px")
  .attr("fill", "#666")
  .text("7h");

let angle8 = angleScale(8);
svg.append("line")
  .attr("x1", centerX + Math.cos(angle8) * 90)
  .attr("y1", centerY + Math.sin(angle8) * 90)
  .attr("x2", centerX + Math.cos(angle8) * 215)
  .attr("y2", centerY + Math.sin(angle8) * 215)
  .attr("stroke", "#eee")
  .attr("stroke-width", 1);
svg.append("text")
  .attr("x", centerX + Math.cos(angle8) * 230)
  .attr("y", centerY + Math.sin(angle8) * 230)
  .attr("text-anchor", "middle")
  .attr("font-size", "10px")
  .attr("fill", "#666")
  .text("8h");

let angle9 = angleScale(9);
svg.append("line")
  .attr("x1", centerX + Math.cos(angle9) * 90)
  .attr("y1", centerY + Math.sin(angle9) * 90)
  .attr("x2", centerX + Math.cos(angle9) * 215)
  .attr("y2", centerY + Math.sin(angle9) * 215)
  .attr("stroke", "#eee")
  .attr("stroke-width", 1);
svg.append("text")
  .attr("x", centerX + Math.cos(angle9) * 230)
  .attr("y", centerY + Math.sin(angle9) * 230)
  .attr("text-anchor", "middle")
  .attr("font-size", "10px")
  .attr("fill", "#666")
  .text("9h");

let angle10 = angleScale(10);
svg.append("line")
  .attr("x1", centerX + Math.cos(angle10) * 90)
  .attr("y1", centerY + Math.sin(angle10) * 90)
  .attr("x2", centerX + Math.cos(angle10) * 215)
  .attr("y2", centerY + Math.sin(angle10) * 215)
  .attr("stroke", "#eee")
  .attr("stroke-width", 1);
svg.append("text")
  .attr("x", centerX + Math.cos(angle10) * 230)
  .attr("y", centerY + Math.sin(angle10) * 230)
  .attr("text-anchor", "middle")
  .attr("font-size", "10px")
  .attr("fill", "#666")
  .text("10h");

// ------------ TOOLTIP ------------
const tooltip = d3.select(".tooltip");

// ------------ PETALS ------------
data.forEach((d) => {
  let angle = angleScale(d.screenTime);
  let r = radiusScale(d.sleep);
  let px = centerX + Math.cos(angle) * r;
  let py = centerY + Math.sin(angle) * r;

  svg.append("ellipse")
    .attr("class", "petal")
    .attr("cx", px)
    .attr("cy", py)
    .attr("rx", sizeScale(d.productivity))
    .attr("ry", sizeScale(d.productivity) * 0.6)
    .attr("fill", colorScale(d.stress))
    .attr("opacity", 0.85)
    .attr("stroke", "#666")
    .attr("stroke-width", 1)
    .attr("transform", `rotate(${(angle * 180 / Math.PI)}, ${px}, ${py})`)
    .on("mouseover", function(event) {
      d3.select(this).attr("opacity", 1);
      tooltip.style("display", "block")
        .text(`Sleep: ${d.sleep}h\nStress: ${d.stress}/5\nProductivity: ${d.productivity}/5\nScreen Time: ${d.screenTime}h`);
    })
    .on("mousemove", function(event) {
      tooltip.style("left", (event.pageX + 15) + "px")
        .style("top", (event.pageY - 15) + "px");
    })
    .on("mouseout", function() {
      d3.select(this).attr("opacity", 0.85);
      tooltip.style("display", "none");
    });
});

// ------------ CENTER CIRCLE ------------
svg.append("circle")
  .attr("cx", centerX)
  .attr("cy", centerY)
  .attr("r", 40)
  .attr("fill", "black");

svg.append("text")
  .attr("x", centerX)
  .attr("y", centerY + 5)
  .attr("text-anchor", "middle")
  .attr("font-size", "11px")
  .attr("font-weight", "bold")
  .attr("fill", "white")
  .text("CENTER");

// ------------ LEFT LEGEND BOX ------------
svg.append("rect")
  .attr("x", 20)
  .attr("y", 100)
  .attr("width", 140)
  .attr("height", 280)
  .attr("fill", "white")
  .attr("stroke", "#999")
  .attr("stroke-width", 2)
  .attr("rx", 5);

svg.append("text")
  .attr("x", 30)
  .attr("y", 120)
  .attr("font-weight", "bold")
  .attr("font-size", "12px")
  .text("Stress (Color)");

svg.append("circle")
  .attr("cx", 40)
  .attr("cy", 140)
  .attr("r", 8)
  .attr("fill", colorScale(1))
  .attr("stroke", "#666");
svg.append("text")
  .attr("x", 55)
  .attr("y", 145)
  .attr("font-size", "11px")
  .text("Level 1");

svg.append("circle")
  .attr("cx", 40)
  .attr("cy", 165)
  .attr("r", 8)
  .attr("fill", colorScale(2))
  .attr("stroke", "#666");
svg.append("text")
  .attr("x", 55)
  .attr("y", 170)
  .attr("font-size", "11px")
  .text("Level 2");

svg.append("circle")
  .attr("cx", 40)
  .attr("cy", 190)
  .attr("r", 8)
  .attr("fill", colorScale(3))
  .attr("stroke", "#666");
svg.append("text")
  .attr("x", 55)
  .attr("y", 195)
  .attr("font-size", "11px")
  .text("Level 3");

svg.append("circle")
  .attr("cx", 40)
  .attr("cy", 215)
  .attr("r", 8)
  .attr("fill", colorScale(4))
  .attr("stroke", "#666");
svg.append("text")
  .attr("x", 55)
  .attr("y", 220)
  .attr("font-size", "11px")
  .text("Level 4");

svg.append("circle")
  .attr("cx", 40)
  .attr("cy", 240)
  .attr("r", 8)
  .attr("fill", colorScale(5))
  .attr("stroke", "#666");
svg.append("text")
  .attr("x", 55)
  .attr("y", 245)
  .attr("font-size", "11px")
  .text("Level 5");

svg.append("text")
  .attr("x", 30)
  .attr("y", 275)
  .attr("font-weight", "bold")
  .attr("font-size", "12px")
  .text("Productivity (Size)");

svg.append("ellipse")
  .attr("cx", 50)
  .attr("cy", 295)
  .attr("rx", sizeScale(1))
  .attr("ry", sizeScale(1) * 0.6)
  .attr("fill", "#999")
  .attr("stroke", "#666");
svg.append("text")
  .attr("x", 80)
  .attr("y", 300)
  .attr("font-size", "11px")
  .text("Level 1");

svg.append("ellipse")
  .attr("cx", 50)
  .attr("cy", 325)
  .attr("rx", sizeScale(3))
  .attr("ry", sizeScale(3) * 0.6)
  .attr("fill", "#999")
  .attr("stroke", "#666");
svg.append("text")
  .attr("x", 80)
  .attr("y", 330)
  .attr("font-size", "11px")
  .text("Level 3");

svg.append("ellipse")
  .attr("cx", 50)
  .attr("cy", 355)
  .attr("rx", sizeScale(5))
  .attr("ry", sizeScale(5) * 0.6)
  .attr("fill", "#999")
  .attr("stroke", "#666");
svg.append("text")
  .attr("x", 80)
  .attr("y", 360)
  .attr("font-size", "11px")
  .text("Level 5");

// ------------ RIGHT LEGEND BOX ------------
svg.append("rect")
  .attr("x", 840)
  .attr("y", 100)
  .attr("width", 140)
  .attr("height", 100)
  .attr("fill", "white")
  .attr("stroke", "#999")
  .attr("stroke-width", 2)
  .attr("rx", 5);

svg.append("text")
  .attr("x", 850)
  .attr("y", 120)
  .attr("font-weight", "bold")
  .attr("font-size", "12px")
  .text("Position");

svg.append("text")
  .attr("x", 850)
  .attr("y", 145)
  .attr("font-size", "11px")
  .text("• Angle = Screen Time");

svg.append("text")
  .attr("x", 850)
  .attr("y", 165)
  .attr("font-size", "11px")
  .text("• Distance = Sleep");

svg.append("text")
  .attr("x", 850)
  .attr("y", 185)
  .attr("font-size", "10px")
  .attr("fill", "#666")
  .text("Hover for details");