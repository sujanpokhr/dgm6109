"use strict";

/*
  Lab 9 – Scatterplot 2
  Author: Sujan Pokhrel
  Dataset: Sleep, Productivity, Stress, Screen Time
  X-axis = Sleep (hours)
  Y-axis = Productivity (1–5 scale)
  Circle radius = Screen Time (hours)
  Circle color = Stress (red = high stress, blue = low)
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

// === FILTER out low-sleep days (<6h) to focus on healthy range ===
dataset = dataset.filter(d => d.sleep >= 6);

// === SVG SETUP ===
const svgWidth = 800, svgHeight = 600;
const margin = { top: 60, right: 200, bottom: 60, left: 70 };

const svg = d3.select("#chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// === SCALES ===
const xScale = d3.scaleLinear()
  .domain([5.5, 9])  // sleep range
  .range([margin.left, svgWidth - margin.right]);

const yScale = d3.scaleLinear()
  .domain([0, 6])    // productivity 1–5
  .range([svgHeight - margin.bottom, margin.top]);

const rScale = d3.scaleSqrt()
  .domain([4, 10])   // screen time
  .range([5, 25]);   // circle size

const colorScale = d3.scaleLinear()
  .domain([1, 5])    // stress
  .range(["#0033cc", "#ff3333"]); // blue → red

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
  .text("Sleep Hours");

svg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("x", -svgHeight / 2)
  .attr("y", 25)
  .attr("text-anchor", "middle")
  .text("Productivity (1–5 scale)");

// === BUBBLE PLOT ===
svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", d => xScale(d.sleep))
  .attr("cy", d => yScale(d.productivity))
  .attr("r", d => rScale(d.screenTime))
  .attr("fill", d => colorScale(d.stress))
  .attr("stroke", "#333")
  .attr("opacity", 0.8)
  .append("title") // Tooltip
  .text(d =>
    `Sleep: ${d.sleep}h\nProductivity: ${d.productivity}\nStress: ${d.stress}\nScreen Time: ${d.screenTime}h`
  );

// === TITLE ===
svg.append("text")
  .attr("x", svgWidth / 2)
  .attr("y", 30)
  .attr("text-anchor", "middle")
  .attr("font-size", "16px")
  .attr("font-weight", "bold")
  .text("Sleep vs Productivity with Stress and Screen Time");

// === LEGENDS ===

// --- Size Legend (Screen Time) ---
const sizeLegendY = 100;

svg.append("rect")
  .attr("x", svgWidth - 190)
  .attr("y", sizeLegendY - 20)
  .attr("width", 180)
  .attr("height", 170)
  .attr("fill", "none")
  .attr("stroke", "#999")
  .attr("stroke-dasharray", "4,2");

svg.append("text")
  .attr("x", svgWidth - 185)
  .attr("y", sizeLegendY)
  .attr("font-weight", "regular")
  .text("Circle Size = Screen Time");

const screenVals = [5, 7, 9];
const screenPositions = [sizeLegendY + 30, sizeLegendY + 70, sizeLegendY + 120];

screenVals.forEach((d, i) => {
  svg.append("circle")
    .attr("cx", svgWidth - 160)
    .attr("cy", screenPositions[i])
    .attr("r", rScale(d))
    .attr("fill", "#ccc")
    .attr("stroke", "#333");

  svg.append("text")
    .attr("x", svgWidth - 110)
    .attr("y", screenPositions[i] + 4)
    .text(`${d} hrs`);
});

// --- Color Legend (Stress) ---
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
  .attr("font-weight", "regular")
  .text("Color = Stress Level");

const stressVals = [1, 3, 5];
const stressPos = [colorLegendY + 30, colorLegendY + 65, colorLegendY + 100];

stressVals.forEach((d, i) => {
  svg.append("circle")
    .attr("cx", svgWidth - 160)
    .attr("cy", stressPos[i])
    .attr("r", 10)
    .attr("fill", colorScale(d))
    .attr("stroke", "#333");

  svg.append("text")
    .attr("x", svgWidth - 110)
    .attr("y", stressPos[i] + 4)
    .text(`Level ${d}`);
});

/*
===========================
Reflection:
===========================
This scatterplot explores how sleep duration influences productivity.
The X-axis represents hours of sleep, while productivity increases along the Y-axis.

Larger circles show higher screen time, revealing that heavy screen users
often fall in lower productivity zones. The redder the circle, the higher the stress level.

The data suggests a positive correlation between sleep and productivity,
and an inverse relationship between screen time and performance.

I used Array.filter() to exclude low-sleep days, making the analysis more focused
on consistent, realistic habits.
*/
