"use strict";

/*
  Lab 8 – Bubble Plot
  Author: Sujan Pokhrel
  Dataset: Screen Time, Stress, Sleep, Productivity
  X-axis = Screen Time (hours)
  Y-axis = Stress (1–5 scale)
  Circle radius = Sleep Hours
  Circle color = Productivity (darker = higher productivity)
*/

// === DATASET ===
let dataset = [
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

// === Sort by sleep hours descending so large circles are drawn first ===
dataset.sort((a, b) => b.sleep - a.sleep);

// === SVG SETUP ===
const svgWidth = 800, svgHeight = 600;
const margin = { top: 60, right: 200, bottom: 60, left: 70 };

const svg = d3.select("#chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// === SCALES ===
const xScale = d3.scaleLinear()
  .domain([4, 10]) // screen time hrs
  .range([margin.left, svgWidth - margin.right]);

const yScale = d3.scaleLinear()
  .domain([0, 6]) // stress 1–5
  .range([svgHeight - margin.bottom, margin.top]);

const rScale = d3.scaleSqrt()
  .domain([5, 9]) // sleep hours
  .range([5, 25]); // radius size

const colorScale = d3.scaleLinear()
  .domain([1, 5]) // productivity scale 1–5
  .range(["#a8e6cf", "#004d40"]); // light to dark green

// === AXES ===
const xAxis = d3.axisBottom(xScale)
  .ticks(6)
  .tickFormat(d => d + "h");

const yAxis = d3.axisLeft(yScale)
  .ticks(5)
  .tickFormat(d => d);

svg.append("g")
  .attr("transform", `translate(0, ${svgHeight - margin.bottom})`)
  .call(xAxis);

svg.append("g")
  .attr("transform", `translate(${margin.left}, 0)`)
  .call(yAxis);

// === AXIS LABELS ===
svg.append("text")
  .attr("x", svgWidth / 2)
  .attr("y", svgHeight - 15)
  .attr("text-anchor", "middle")
  .text("Daily Screen Time (hours)");

svg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("x", -svgHeight / 2)
  .attr("y", 25)
  .attr("text-anchor", "middle")
  .text("Stress Level (1–5 scale)");

// === BUBBLE PLOT ===
svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", d => xScale(d.screenTime))
  .attr("cy", d => yScale(d.stress))
  .attr("r", d => rScale(d.sleep))
  .attr("fill", d => colorScale(d.productivity))
  .attr("stroke", "#333")
  .attr("opacity", 0.8)
  .append("title") // Tooltip
  .text(d =>
    `Screen Time: ${d.screenTime}h\nStress: ${d.stress}\nSleep: ${d.sleep}h\nProductivity: ${d.productivity}`
  );

// === CHART TITLE ===
svg.append("text")
  .attr("x", svgWidth / 2)
  .attr("y", 30)
  .attr("text-anchor", "middle")
  .attr("font-size", "16px")
  .attr("font-weight", "bold")
  .text("Relationship Between Screen Time, Stress, Sleep & Productivity");

// === REFERENCE AXIS LINES ===
svg.append("line")
  .attr("x1", margin.left)
  .attr("y1", svgHeight - margin.bottom)
  .attr("x2", svgWidth - margin.right)
  .attr("y2", svgHeight - margin.bottom)
  .attr("stroke", "#999")
  .attr("stroke-dasharray", "4 2");

svg.append("line")
  .attr("x1", margin.left)
  .attr("y1", margin.top)
  .attr("x2", margin.left)
  .attr("y2", svgHeight - margin.bottom)
  .attr("stroke", "#999")
  .attr("stroke-dasharray", "4 2");

// === LEGENDS ===

// --- Size Legend (Sleep Hours) ---
const sizeLegendY = 100;

svg.append("rect")
  .attr("x", svgWidth - 180)
  .attr("y", sizeLegendY - 20)
  .attr("width", 150)
  .attr("height", 170)
  .attr("fill", "none")
  .attr("stroke", "#999")
  .attr("stroke-dasharray", "4,2");

svg.append("text")
  .attr("x", svgWidth - 170)
  .attr("y", sizeLegendY)
  .attr("font-weight", "bold")
  .text("Circle Size = Sleep");

const sleepValues = [5.5, 7, 8.5];
const sleepPositions = [sizeLegendY + 30, sizeLegendY + 70, sizeLegendY + 120];

sleepValues.forEach((d, i) => {
  svg.append("circle")
    .attr("cx", svgWidth - 160)
    .attr("cy", sleepPositions[i])
    .attr("r", rScale(d))
    .attr("fill", "#ccc")
    .attr("stroke", "#333");

  svg.append("text")
    .attr("x", svgWidth - 110)
    .attr("y", sleepPositions[i] + 4)
    .text(`${d} hrs`);
});

// --- Color Legend (Productivity) ---
const colorLegendY = 320;

svg.append("rect")
  .attr("x", svgWidth - 180)
  .attr("y", colorLegendY - 20)
  .attr("width", 150)
  .attr("height", 140)
  .attr("fill", "none")
  .attr("stroke", "#999")
  .attr("stroke-dasharray", "4,2");

svg.append("text")
  .attr("x", svgWidth - 170)
  .attr("y", colorLegendY)
  .attr("font-weight", "bold")
  .text("Color = Productivity");

const prodValues = [1, 3, 5];
const prodPositions = [colorLegendY + 30, colorLegendY + 65, colorLegendY + 100];

prodValues.forEach((d, i) => {
  svg.append("circle")
    .attr("cx", svgWidth - 160)
    .attr("cy", prodPositions[i])
    .attr("r", 10)
    .attr("fill", colorScale(d))
    .attr("stroke", "#333");

  svg.append("text")
    .attr("x", svgWidth - 110)
    .attr("y", prodPositions[i] + 4)
    .text(`Level ${d}`);
});

/*
===========================
Reflection:
===========================
This bubble plot explores how screen time relates to stress.
The X-axis (screen time) and Y-axis (stress) show a loose positive trend:
as screen time increases, stress tends to rise.

Larger circles (more sleep) appear lower, showing that more sleep
often corresponds to lower stress levels.

The color scale adds another dimension:
darker bubbles (higher productivity) tend to appear around
moderate screen times and lower stress.

I used Array.sort() to ensure larger circles are drawn first,
preventing them from hiding smaller ones.
If I had more time, I would experiment with d3.extent()
to automatically define domains and explore d3.scalePow() for
more refined circle scaling.
*/
