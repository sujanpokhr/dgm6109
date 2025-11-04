"use strict";

/*
  Term Project Phase 3A Draft
  Author: Sujan Pokhrel
  Description:
  Scatterplot visualizing how screen time, productivity, and sleep relate.
  X-axis = Screen Time (hours)
  Y-axis = Productivity (1–5 scale)
  Circle radius = Sleep hours (numerical)
*/

// === Dataset (14 observations from Phase 2) ===
const dataset = [
  { screenTime: 7, productivity: 3, sleep: 6.5 },
  { screenTime: 8, productivity: 2, sleep: 6 },
  { screenTime: 6, productivity: 4, sleep: 7.5 },
  { screenTime: 9.2, productivity: 1, sleep: 5.5 },
  { screenTime: 5.5, productivity: 4, sleep: 8 },
  { screenTime: 4.8, productivity: 5, sleep: 8.5 },
  { screenTime: 7.8, productivity: 3, sleep: 6.2 },
  { screenTime: 6.5, productivity: 3, sleep: 7 },
  { screenTime: 8.2, productivity: 2, sleep: 6 },
  { screenTime: 5, productivity: 4, sleep: 8 },
  { screenTime: 9, productivity: 1, sleep: 5.5 },
  { screenTime: 4.8, productivity: 5, sleep: 8.5 },
  { screenTime: 7.2, productivity: 2, sleep: 6.5 },
  { screenTime: 5.5, productivity: 4, sleep: 8 }
]; // 14 daily observations

// === SVG setup ===
const svgWidth = 700, svgHeight = 500;
const margin = { top: 50, right: 50, bottom: 60, left: 70 };

const svg = d3.select("#chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// === Scales ===
const xScale = d3.scaleLinear()
  .domain([4, 10]) // range of screen time (hrs)
  .range([margin.left, svgWidth - margin.right]);

const yScale = d3.scaleLinear()
  .domain([0, 6]) // productivity scale (1–5)
  .range([svgHeight - margin.bottom, margin.top]);

const rScale = d3.scaleLinear()
  .domain([5, 9]) // sleep hours
  .range([5, 20]); // circle radius

// === Axes ===
svg.append("g")
  .attr("transform", `translate(0, ${svgHeight - margin.bottom})`)
  .call(d3.axisBottom(xScale));

svg.append("g")
  .attr("transform", `translate(${margin.left}, 0)`)
  .call(d3.axisLeft(yScale));

// === Axis labels ===
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
  .text("Productivity (1–5 scale)");

// === Plot circles ===
svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", d => xScale(d.screenTime))
  .attr("cy", d => yScale(d.productivity))
  .attr("r", d => rScale(d.sleep))
  .attr("fill", "#69b3a2")
  .attr("stroke", "#333")
  .attr("opacity", 0.8)
  .append("title") // Tooltip (shows data)
  .text(d => `Screen Time: ${d.screenTime}h\nProductivity: ${d.productivity}\nSleep: ${d.sleep}h`);

// === Title ===
svg.append("text")
  .attr("x", svgWidth / 2)
  .attr("y", 30)
  .attr("text-anchor", "middle")
  .attr("font-size", "16px")
  .attr("font-weight", "bold")
  .text("Relationship Between Screen Time, Productivity & Sleep");

// === Key / Legend ===
svg.append("text")
  .attr("x", svgWidth - 190)
  .attr("y", 80)
  .attr("font-weight", "bold")
  .text("Circle Size = Sleep Hours");

const legendData = [5.5, 7, 8.5];
legendData.forEach((d, i) => {
  svg.append("circle")
    .attr("cx", svgWidth - 160)
    .attr("cy", 100 + i * 35)
    .attr("r", rScale(d))
    .attr("fill", "#69b3a2")
    .attr("stroke", "#333");

  svg.append("text")
    .attr("x", svgWidth - 120)
    .attr("y", 105 + i * 35)
    .text(`${d} hrs`);
});

/* 
Reflection (for Discussion Board):
This chart tests my hypothesis that as screen time increases, productivity decreases.
Larger circles (more sleep) generally appear higher on the plot, suggesting better productivity.
I learned that sleep may counteract the negative effects of screen time. In future, I’ll test stress
as a possible fourth factor.
*/
