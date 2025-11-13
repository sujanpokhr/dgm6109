"use strict";

/*
  Lab 8 – Bubble Plot (used in Lab 9 Plot 1)
  Author: Sujan Pokhrel
  Dataset: Screen Time, Stress, Sleep, Productivity
  X-axis = Screen Time (hours)
  Y-axis = Stress (1–5 scale)
  Circle radius = Sleep Hours
  Circle color = Productivity
*/

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

dataset.sort((a, b) => b.sleep - a.sleep);

const svgWidth = 800, svgHeight = 600;
const margin = { top: 60, right: 200, bottom: 60, left: 70 };

const svg = d3.select("#chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

const xScale = d3.scaleLinear().domain([4, 10]).range([margin.left, svgWidth - margin.right]);
const yScale = d3.scaleLinear().domain([0, 6]).range([svgHeight - margin.bottom, margin.top]);
const rScale = d3.scaleSqrt().domain([5, 9]).range([5, 25]);
const colorScale = d3.scaleLinear().domain([1, 5]).range(["#a8e6cf", "#004d40"]);

const xAxis = d3.axisBottom(xScale).ticks(6).tickFormat(d => d + "h");
const yAxis = d3.axisLeft(yScale).ticks(5);

svg.append("g").attr("transform", `translate(0, ${svgHeight - margin.bottom})`).call(xAxis);
svg.append("g").attr("transform", `translate(${margin.left}, 0)`).call(yAxis);

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
  .append("title")
  .text(d =>
    `Screen Time: ${d.screenTime}h\nStress: ${d.stress}\nSleep: ${d.sleep}h\nProductivity: ${d.productivity}`
  );

svg.append("text")
  .attr("x", svgWidth / 2)
  .attr("y", 30)
  .attr("text-anchor", "middle")
  .attr("font-size", "16px")
  .attr("font-weight", "bold")
  .text("Relationship Between Screen Time, Stress, Sleep & Productivity");
