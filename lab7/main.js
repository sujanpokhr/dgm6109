"use strict";

// Sujan Pokhrel - Lab #7
// Hypothesis: As screen time increases, productivity decreases.

// 1️⃣ Data
let dataset = [
  { screenTime: 7, productivity: 3 },
  { screenTime: 8, productivity: 2 },
  { screenTime: 6, productivity: 4 },
  { screenTime: 9.2, productivity: 1 },
  { screenTime: 5.5, productivity: 4 },
  { screenTime: 4.8, productivity: 5 },
  { screenTime: 7.8, productivity: 3 },
  { screenTime: 6.5, productivity: 3 },
  { screenTime: 8.2, productivity: 2 },
  { screenTime: 5.5, productivity: 4 },
  { screenTime: 9, productivity: 1 },
  { screenTime: 4.8, productivity: 5 },
  { screenTime: 7.2, productivity: 2 },
  { screenTime: 5, productivity: 4 }
];

// 2️⃣ SVG setup
let width = 800;
let height = 600;
let margin = 60;

let svg = d3.select("#canvas")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// 3️⃣ Scales
let xScale = d3.scaleLinear()
  .domain([4, 10])
  .range([margin, width - margin]);

let yScale = d3.scaleLinear()
  .domain([0, 6])
  .range([height - margin, margin]);

// 4️⃣ Axes
svg.append("g")
  .attr("transform", `translate(0, ${height - margin})`)
  .call(d3.axisBottom(xScale));

svg.append("g")
  .attr("transform", `translate(${margin}, 0)`)
  .call(d3.axisLeft(yScale));

// 5️⃣ Dots (two-color version)
svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", d => xScale(d.screenTime))
  .attr("cy", d => yScale(d.productivity))
  .attr("r", 8)
  .attr("fill", d => d.productivity > 3 ? "gray" : "black") // higher productivity gray, lower black
  .attr("stroke", "white")
  .attr("stroke-width", 1)
  .attr("opacity", 0.9);

// 6️⃣ Labels
svg.append("text")
  .attr("x", width / 2)
  .attr("y", height - 15)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .text("Total Screen Time (hours) →");

svg.append("text")
  .attr("x", -height / 2)
  .attr("y", 20)
  .attr("transform", "rotate(-90)")
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .text("Productivity (1 = low, 5 = high) ↑");

// 7️⃣ Value Labels (end-of-axis marks)
svg.append("text")
  .attr("x", xScale(10))
  .attr("y", height - margin + 30)
  .attr("text-anchor", "middle")
  .style("font-size", "12px")
  .text("10 hrs");

svg.append("text")
  .attr("x", margin - 10)
  .attr("y", yScale(5))
  .attr("text-anchor", "end")
  .style("font-size", "12px")
  .text("5");
